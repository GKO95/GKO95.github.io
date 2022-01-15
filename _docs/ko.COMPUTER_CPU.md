---
layout: docs
language: ko
category: 운영체제
title: CPU
meta: CPU
order: null
---
# CPU 진단
> https://docs.microsoft.com/en-us/windows-hardware/test/wpt/cpu-analysis#windows-adk-tools

평가 척도에 영향을 주는 CPU 관련 이슈 진단에 대한 자세한 기법들을 소개한다.

세 부분으로 나뉘어진다:

* 배경: 윈도우가 CPU 리소스를 어떻게 관리하는지 설명한다.

* [윈도우 ADK](https://docs.microsoft.com/en-us/windows-hardware/get-started/adk-install)(Assessment and Deployment Kit): 윈도우 ADK로부터 어떻게 CPU 정보를 읽고 해석하는 설명한다.

* 기법: CPU 성능과 관련된 흔히 발생할 수 있는 문제들을 진단 및 해결할 수 있는 여러 기법들을 다룬다.

# CPU 진단: 배경
CPU에 대한 간단한 설명. 더 자세한 내용은 Windows Internal, Fifth Edition 읽을 것을 권장.

현대 컴퓨터는 별개의 소켓에 여러 CPU 설치 가능. 각 CPU는 여러 물리적 프로세서 탑재하고, 각 프로세서는 하나 또는 두 개의 명령 흐름(문맥상 thread로 판단)을 동시 처리 가능. 윈도우 운영체제에서 명령 흐름을 처리하는 프로세서 = 논리 프로세서(logical processor)라고 칭함.

본 내용은 프로세서와 CPU를 논리 프로세서라고 언급한다: 즉, 운영체제에서 프로그램 명령을 실행하기 위해 사용할 수 있는 하드웨어 장치이다.

윈도우 10은 지속적으로 프로세서 하드웨어를 두 주요 방식으로 관리한다: (1) 전력 소모와 성능의 균형을 위한 전력 관리(power management) 그리고 (2) 프로그램과 드라이버의 프로세싱 요구사항의 균형을 위한 사용량(usage).

## 프로세서 전력 관리
프로세서는 항상 동작 중에 있지 않는다. 실행할 명령이 없으면 운영체제는 윈도우 전력 관리자로 결정되 바에 따라 프로세서를 target idle (혹은 C-상태)로 만든다. CPU 사용 패턴을 기반하여 프로세서의 target C-상태는 시간이 지남에 따라 조정된다.

idle 상태는 C0(active; idle하지 않음)으로부터 시작해 점차적으로 저전력 상태로 번호가 매겨진 상태이다: C1(멈췄지만 클락은 여전히 활성화), C2(멈췄으며 클락 비활성화), 그리고 쭉 이어진다. idle 상태에 대한 적용은 프로세서마다 다르다. 하지만 숫자가 높을수록 저전력 소모인 것은 동일하며, 다시 명령을 처리할 수 있도록 꺠어나는데 걸리는 시간이 길어진다. idle 상태로 얼마나 있었는지에 따라 에너지 사용량 및 배터리 수명에 상당한 영향을 준다.

일부 프로세서는 활발히 명령을 처리하고 있음에도 performance 상태(P-)와 throttle 상태(T-) 상태에 있을 수 있다. P-상태는 프로세서가 지원하는 클락 주파수와 전압 레벨을 정의한다. T-상태는 직접적으로 클락 주파수를 바꾸지 않지만, 명령 처리 과정에서 몇몇 클락 트리거 엣지 때 프로세싱 활동을 건너뛰어 실질적 클락 속도를 낮출 수 있다. 이렇게 현 P-상태와 T-상태가 함께 프로세서의 실질적 동작 주파수를 결정한다. 낮은 동작 주파수는 저성능 및 저전력소모에 대응한다.

윈도우 전력 관리자는 CPU 사용 패턴과 시스템 전력 정책을 기반으로 각 프로세서에 적합한 P- 및 T-상태를 결정한다. 고성능 상태 vs 저성는 상태에 있던 시간은 에너지 사용량과 배터리 수명에 상당한 영향을 준다.

## 프로세서 사용량 관리
윈도우는 다음 세 개의 추상으로부터 프로세서 사용량을 관리한다.

* 프로세스
* 스레드
* DPC(Deferred Procedure Call)와 ISR(Interrupt Service Routines)

### 프로세스 및 스레드
윈도우의 모든 사용자 모드 프로그램은 프로세스라는 문맥에서 실행된다. 프로세스는 다음으로 구성된다:

* 가상 주소 공간
* 우선권 클래스
* 실행 코드
* 환경 블록 및 설정
* 최소 스레드 한 개

프로세스는 실행 코드, 환경 블록, 문맥 등의 리소스를 갖고 있으나 프로세서로 스케줄링되어 처리되지 않는다. 실질적인 실행 문맥을 가지고 있는 스레드가 스케줄링되어 프로세서에서 실행된다. 스레드 활동이 근본적으로 시스템 성능과 측정에 영향을 준다.

시스템 내의 프로세서 개수는 제한적이므로 모든 스레드는 동시에 실행될 수 없다. 윈도우는 프로세서 시간 공유를 통해, 프로세서가 다음 스레드를 작업하기 전까지 정해진 시간 내에서 스레드가 실행되도록 한다. 이러한 스레드를 바꾸는 작업을 문맥 교환(context switching)이라 하며 dispatcher에서 담당한다. Dispatcher는 스레드를 어느 프로세서로 분배할지 결정하는 요인으로 (1) 우선권, (2) 이상적 프로세서 및 Affinity, (3) 퀀텀 (일명 time slice), 그리고 (4) 상태가 있다.

### 우선권
> Microsoft Document에서는 Dispatcher에 영향을 주는 요인이라 하지만, 본인은 Scheduler와 더 연관이 있다고 판단한다.

프로세스 우선권은 스케줄러가 어떤 스레드를 실행시킬 것인지 선택하는 핵심 요소이다. 우선권은 0~31 범위의 정수로 나타난다. 실행될 준비가 된 스레드가 현재 실행되고 있는 스레드보다 더 높은 우선권을 갖고 있으면 선점형(preemptive) 스케줄링에 의해 곧바로 고우선권 스레드로 문맥 교환된다.

스레드가 실행 중이거나 실행될 준비가 되었을 시, 높은 우선권과 같이 실행할 만큼의 프로세서 개수가 있지 않는 한 낮은 우선권의 스레드는 실행될 수 없다. 아니면 높은 우선권의 스레드가 특정 프로세서에서만 실행되어야 하는 "이상적 프로세서" 혹은 "프로세서 Affinity"에 의해 높은 우선권의 스레드가 실행될 수 있도록 제한되어야 한다. 스레드는 base 우선권으로부터 높은 우선권으로 부스트될 수 있는 경우가 존재한다.

### 이상적 프로세서 및 Affinity
스레드의 이상자거 프로세서 및 Affinity는 스레드가 어느 프로세서에서 실행될지 영향/결정하는 요인으로 작용한다. 각 스레드는 프로그램 혹은 운영체제로부터 자동으로 설정된 이상적 프로세서가 있다. 운영체제는 round-robin 방법론을 통해 각 프로세서에 각 프로세스의 대략적으로 동일한 개수의 스레드가 할당될 수 있도록 한다. 운영체제는 가능한 스레드를 이상적 프로세서에 전달하려 하지만, 강제되는 것이 아니다.

그와 반대로 Affinity는 스레드가 반드시 해당 프로세서에서만 실행되어야 하도록 지정한다.

### 퀀텀
일명 time slice이다. 퀀텀 지속시간은 시스템이 즉각적으로 반응할 수 있도록 설계되었다.

### 상태
Block 상태에 있는 스레드는 필연적으로 성능 문제를 가리키지 않는다. 대부분 스레드는 상당한 시간을 Block 상태에 놓여있어, 이는 프로세서가 idle 상태에 들어가 에너지를 절약하도록 한다. 오로지 사용자가 스레드가 작업을 마치는데 기다릴 때에만 스레드 상태는 성능에 있어 매우 중요한 요인으로 작용한다.

* Running
    : 현재 실행되고 있는 스레드 상태

    * 그 중에서 Waiting -> Ready로 만들어주는 Running 스레드를 "Readying 스레드"라고 부른다.

* Ready
    : 실행될 준비는 되었지만 실행되고 있지 않는 스레드 상태
    > 시스템 절차적 자연적으로 실행되지 않는 것이다.

* Waiting
    : 특정 이벤트가 발생할 때까지 실행될 수 없어 기다리는 스레드 상태
    > 외부에서 강제적으로 실행하지 못하는 것이다.

스레드 상태 전환은 다음과 같다:

1. Running -> Waiting
    : `WaitingForSingleObject` 또는 `Sleep(> 0)` 함수

    3. 실행 준비가 된 스레드는 스케줄러를 통해 Ready -> Running

2. Waiting -> (Ready) -> Running
    : waiting으로부터 전환되려면 외부 running 스레드(일명 Readying 스레드; from `WaitingForSingleObject`) 혹은 kernel 동작(from `Sleep(>0)`) 도움 필요; idle한 프로세서가 있거나 Ready 되려는 스레드가 더 높은 우선권을 갖고 있으면 바로 Running

    * 그렇지 않으면 Ready

4. Running -> Ready
    : time slice 종료, `Sleep(0)`, 혹은 더 높은 우선권의 스레드가 선점

> Ready -> Waiting 전환은 없다!

### DPC 및 ISR
스레드를 처리하는 것 외에도, 프로세서는 네트워크 카드나 타이머 등의 하드웨어 장치로부터의 알림에 대하여 반응한다. 이들 하드웨어가 장치가 프로세서의 관심을 받기 위한 방법으로 인터럽트를 생성한다. 운영체제는 하드웨어 인터럽트에 대응하기 위해 현재 실행되고 있는 스레드를 유예시키고 해당 인터럽트에 대응하는 ISR(Interrupt Service Routines; 인터럽트 서비스 루틴)을 실행한다.

ISR을 실행하는 동안, 프로세서는 타 인터럽트 등의 다른 활동을 처리하는 것으로부터 방지될 수 있다. 이러한 이유로 ISR은 빨리 끝내야되며, 그렇지 않으면 시스템 성능이 저하될 수 있다. 실행 시간을 줄이기 위해, ISR은 인터럽트에 대응한 작업을 수행하기 위해 흔히 DPC(Deferred Procedure Call)를 스케줄링한다. 운영체제는 각 논리 프로세서에 대기 중인 스케줄된 DPC를 관리한다. 프로세서가 스레드를 처리로 돌아기기 전에 대기 중인 DPC를 모두 실행한다.

프로세서가 DPC 및 ISR을 실행하는 시간 도중, 어떠한 스레드도 프로세서에서 실행될 수 없다. 이러한 성질은 일정 시간 내에 처리되어야 할 스레드 혹은 정확한 타이밍에 처리되어야 할 스레드에게 있어 문제가 될 수 있는다 (오디오 및 비디오 관련 스레드 등). 만일 DPC 및 ISR을 실행하기 위해 사용된 프로세서 시간이 이러한 스레드가 충분히 처리될 시간을 할당받는 것을 방지한다면, 스레드는 정해진 시간 안에 충분히 처리되지 못하거나 정확한 타이밍에 처리되지 못하게 될 것이다.

# 윈도우 ADK 도구
윈도우 ADK는 하드웨저 정보와 평가를 assessment results files에 write한다. WPA는 다양한 그래프에서 CPU 사용량 정보를 제공한다. 본 장에서는 윈도우 ADK 및 WPA(Windows Performance Analyzer)로 어떻게 CPU 성능 데이터를 수집, 관측, 그리고 분석하는데 사용하는지 설명한다.

## Windows Performance Recorder
> https://docs.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-recorder

* `First Level Triage` -> `First Level Triage`: ...what's this???
* `Resource Analysis` -> `CPU Usage`

> Xperf나 NT Kernel Logger를 사용하는 어플리케이션을 사용하는 중에 WPR을 실행할 때, WPR은 다른 어플리케이션에서 성능 기록을 진행하고 있는 것을 감지하지 못한다. 허나 기록을 진행할 때에 충돌이 있다는 것을 확인하여 알림을 준다.

만일 OK를 누르면 현재 진행 중인 세션을 끝내고 기록을 진행하는데, 이는 어플리케이션에 영향을 줄 수 있다. Cancel을 누르면 기록을 하지 않으며 어플리케이션에 영향을 주지 않는다.

마무리되었으면, WPR은 `.ETL` 파일을 생성한다. 바로 해당 파일이 WPA에서 분석하기 위해 사용된다.

## Windows Performance Analyzer
> https://docs.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-analyzer

WPR로 기록된 `.ETL`을 연다.

사용 가능한 그래프들은 모두 Graph Explorer 창에 나타나있다. 각 그래프 상단 좌측에 있는 역삼각형을 클릭하여 압축된 그래프 내용을 분류별로 나누어 보여준다. 확인하고자 하는 그래프를 Analysis 탭(메인 뷰)로 드래그 혹은 더블클릭하여 볼 수 있다. 그래프 창 caption 우측에서 그래프, 테이블, 아니면 둘 다 볼 것인지 시각 데이터 유형을 고를 수 있다.

그래프 위에 마우스를 좌우로 드래그하여 시간간격을 지정할 수 있다. 이렇게 지정된 시간간격은 동일한 Analysis 탭 하에 있는 모든 그래프도 동일하게 적용된다.

이렇게 지정된 시간간격에 대하여 오른쪽 클릭을 하면 zoom-in 기능이 있다. 반복적으로 하여 매우 작은 순간에 대한 데이터도 찾아볼 수 있다. Zoom-in을 하면 동일한 Analysis 탭 안에 있는 그래프가 함께 영향을 받기 때문에, 만일 그렇게 되는걸 원치 않으면 새로운 탭에서 띄우는 것을 권장한다.

시간간격을 하이라이트할 수 있으나, Analysis 탭 한 개당 하나만 제공된다. 이 또한 오른쪽 클릭으로 하이라이트가 가능하다.

데이터 테이블에서 테이블 열을 어느 위치로든 옮길 수 있다. 테이블 헤더로 정렬도 할 수 있다. 데이터 테이블을 바꾸면 그래프 왼쪽에 "Series"라는 그래프 범류에도 영향을 미친다. 테이블 범류와 그래프 범류는 서로 일치한다.

데이터 테이블 중에서 보이거나 숨길 테이블 열을 선택하여 커스터마이징이 가능하다. 테이블은 pivot table이다; 테이블의 금색과 푸른색 수직선 사이에 위치한 열들이 data 열이다. 만일 금색 수직선이 보이지 않으면 왼쪽으로 스크롤하도록 한다. 금색 수직선의 왼쪽으로 옮긴 테이블 열은 key가 된다. 그래프에 표시될 데이터는 푸른색 수직선 오른쪽으로 옮긴다.

원하는 레이아웃을 지정하고 싶으면 View Profile을 생성하여 매번 WPA를 열거나 혹은 특정 종류의 파일을 열었을 때에만 레이아웃 자동정렬이 되도록 할 수 있다. Profile 메뉴에서 Export로 새로운 View Profile을 생성하고 Apply를 눌러 곧바로 레이아웃을 적용시키거나 Save Startup Profile으로 WPA를 매번 열때 적용되도록 할 수 있다.

Diagnostic Console은 analysis workflow에서 발생한 exception들을 나열한다. 심볼 디코딩 이슈를 이곳으로부터 진단할 수 있다.

Windows Assessment Console에서 진행된 assessment를 WPA에 열어 추가적인 분석을 제공하면, assessment에서 식별한 이슈들은 Issue 창에 나타난다. 해당 창에 들어있는 issue를 클릭하면 상세한 내용과 권장된 해결방법이 Analysis 탭 하에 Issue Details에 나타난다. 

## 윈도우 ADK Assessment Results Files
윈도우는 오로지 symmetric multiprocessing 시스템만을 지원하기 때문에, 본문에 있는 모든 정보는 설치된 모든 CPU 및 코어에 일관된다. 

### CPU Usage (Sampled)
일정 시간 간격(보통 1ms; 일명 weight)을 갖는 샘플들로 취합한 CPU 사용량 데이터이다. Analysis 테이블의 각 행을 반영하는 샘플 개수는 `Count`에 나타난다 (Utilization of CPU라면 각 CPU 프로세서에서 샘플된 개수, Utilization of Process라면 각 프로세스에서 샘플된 개수).

> 일반적으로 Weight는 각 행마다의 관여된 샘플들의 weight 합으로 나타나는데, 샘플들의 weight를 모두 average로 평균하면 1ms 근방임을 확인할 수 있다.

샘플 외의 CPU 활동을 기록되지 않으므로 DPC 및 ISR과 같은 짧은 순간들의 활동들은 CPU Sampling 그래프로부터 잘 반영되지 않는다.

* Utilization by CPU
    : (샘플 데이터 기준) CPU 프로세서마다 CPU 활용도 수치를 보여준다.

* Utilization by Priority
    : (샘플 데이터 기준) 스레드 우선권마다 CPU 활용도 수치를 보여준다.

* Utilization by Process
    : (샘플 데이터 기준) 프로세스마다 CPU 활용도 수치를 보여준다.

* Utilization by Process and Thread
    : (샘플 데이터 기준) 각 프로세스의 스레드마다 CPU 활용도 수치를 보여준다.

### CPU Usage (Precise)
Context switching과 연관된 데이터이다.
다음 절차에 따라 데이터가 수집된다:

1. Running -> Waiting: New Thread(`NewPrev`)가 switch out된다.
2. Waiting -> Ready: Readying 스레드(`Ready`)가 New Thread(`New`)를 ready 상태로 전환
3. Ready -> Running: 실행되고 있는 Old Thread(`Old`)를 switch out 시킨다.
4. Running -> Waiting: New Thread(`New`)가 switch out된다.

* Timeline by CPU
    : (Context Switch 기준) CPU 프로세서마다 CPU 활용 타임라인을 보여준다.

* Timeline of Process and Thread
    : (Context Switch 기준) 각 프로세스의 스레드마다 CPU 활용 타임라인을 보여준다.

* Usage by Priority at Context Switch Begin
    : (Context Switch 되었을 때) 각 New Thread의 순위도마다 폭발적 활동 수치를 보여준다.

* Utilization by CPU
    : (Context Switch 기준) CPU 프로세서마다 CPU 활용도 수치를 보여준다.

### DPC/ISR
테이블의 각 행은 uninterrupted된 DPC 혹은 ISR 파편을 의미한다. 파편의 시작부터 끝까지 데이터가 수집된다. 하나의 인터럽트가 uninterrupted된 상태로 처리되었다면 하나의 파편이 ISR 자체이다. interrupted 났으면 하나의 ISR가 두 개 이상의 DPC 파편들로 나뉘어여 있을거다.

여기서 세 종류의 시간간격이 있다:

* Duration (Fragmented): DPC/ISR 처리 시간 간격
* Exclusive Duration: 해당 ISR의 DPC 파편들의 Duration들의 합
* Inclusive Duration: 해당 ISR이 완료되기 위해 총 소요된 Duration: 해당 DPC/ISR 및 사이에 끼어있는 다른 DPC/ISR duration들의 합

* Duration by CPU
    : CPU 프로세서마다 실행된 DPC/ISR Duration을 수치로 보여준다.

* Duration by Module, Function
    : 각 module 혹은 function마다 처리된 DPC/ISR 루틴 Duration을 수치로 보여준다.

* Timeline by Module, Function
    : 각 module 혹은 function마다 처리된 DPC/ISR 루틴 Duration을 타임라인으로 보여준다.

### 스택 트리
> Load Symbol 필요

CPU Usage(Sampled), CPU Usage(Precise) 그리고 DPC/ISR 테이블에서 찾을 수 있으며, assessment report에서도 보고된 이슈에서도 나타난다. 구간동안 여러 이벤트와 관여된 call stack을 보여준다. 스택 트리의 각 노드는 이벤트들간 공유되는 스택 조각이다.

## 기법

1. Windows Performance Analysis로부터 문제 파악
    : 사용하는데 느껴지는 불편함이나 문제, 혹은 analysis 진단 도중에 뭔가 이상하다 혹은 이러면 안되는데 하는 점들
1. 문제를 일으키는 요소 발견
1. 비교 모델 생성
1. 모델을 통해 문제 근본원인 식별

대체적으로 CPU 동작처리 시간 관련 문제는 다음 세 근본원인은...

* Direct CPU Usage: 스레드가 CPU 리소스를 받았지만 어플리케이션 프로그램이 빠른 시간 내에 제때 처리되지 못하였다. 프로그램 결함 혹은 느린 하드웨어 성능이 원인

* Thread interference: 다른 스레드가 실행되고 있어 스레드가 충분한 실행 시간을 갖지 못하였다. 이러한 경우 스레드는 starvation 혹은 preempted 되었다.

* DPC/ISR interference: CPU가 DPC 혹은 ISR을 처리한다고 스레드를 충분히 실행하지 못하였다.

위의 근본원인들로 인한 스레드 영향을 알아보기 힘들며 오랜 기간동안 waiting state에 있다. 어떤 thread가 waiting하는지 판별해야 한다. 해당 문제 진단을 wait analysis라고 하며 critical path를 식별하는 것으로 시작한다.

### Waiting Analysis
Activity는 시작 이벤트으로부터 끝 이벤트으로 흐르는 작업의 네트워크이다 (순차적일수도 있고 병렬일 수도 있고). 시작부터 끝 이벤트까지를 하나의 activity로 간주 가능하다.

> activity의 시작부터 끝으로 가는 거리가 가장 먼 경로를 critical path라고 한다.

activity를 아는 것은 critical path에 놓여져 있을 수 있는 특정 작업, 프로세스, 스레드를 식별하는데 도움된다.

#### 간편
시나리오 모델을 검토한 다음, assessment가 activity에 대한 어떠한 이슈를 내놓았는지 확인한다. 그 안에는 critical path가 포함된다.

#### 수동
하지만 직접 찾으려고 한다면, activity 완료 시점으로부터 back tracking하는 것을 권장한다. 이는 WPA의 Activities 그래프에서 확인 가능하다. assessment result XML 파일로부터 불러오며 시작 프로세스와 스레드, 그리고 끝 프로세스와 스레드가 명시되어 있다.

activity를 마무리한 스레드가 대부분의 시간을 running, ready, waiting에 있는지 확인하는 것부터 시작한다.

* running: Direct CPU Usage
* ready: Direct CPU Usage or Thread interference
* waiting: DPC/ISR interference

끝 스레드를 ready 시킨 스레드는 또다른 critical path의 링크일 가능성이 있다. 이는 해당 critical path를 분석을 마무리하면서 분석할 수 있다.

----

본 절차는 Activities 그래프로부터 확인하고자 하는 activity를 식별하였을 때 critical path를 찾으려고 한다:

1. CPU Usage (Precision) 선택: Ready, Waiting, 그리고 Running (CPU Usage) 항목이 있으므로
2. ReadyThreadStack 및 CPU Usage (in view) 보이기
3. [선택사항] Ready (max), Waits (max) 숨기기
4. Running, Ready, Waiting 시간이 가장 긴 것들에 주목
    
> Running 및 Ready 시간은 Direct CPU Usage와 연관이 깊다: Activity의 끝까지 가는데 Running이 길면 실행을 너무 오래 끄는 것이라서 당연하고, Ready는 프로세서의 능력이 충분치 않아 주어진 시간에 모두 수행하지 못하고 Ready하는 게 많아져 생긴 문제라고 개인적으로 생각.

5. 이를 토대로 ReadyThreadStack 스택 트리 확인
6. ReadyThreadStack에서 ReadyingProcess를 찾으면, 그때부터는 프로세스의 스레드 중에서 Running을 확인한다. Ready 스레드로 만들 때까지 실행이 오래걸려 발생한 것이기 때문이다.

Ready (μs), Wait (μs), CPU Usage (in view)에서 sum은 다른 프로세스들과 무관하게, 해당 프로세스를 처리하는 스레드 및 이벤트들에서 소모한 시간 및 수치의 합이다.

### Direct CPU Usage
CPU 사용과 관련된 직접적 문제. 비정상적으로 높은 CPU 사용량(Running)이 특징 (즉, Ready 및 Waits 관련이 적으므로 Sampled 된 그래프로도 충분하다)

#### 문제 식별
> CPU use by process *P* delays the impacted activity *A* for *x* second
> (프로세스 *P*가 사용하는 CPU가 activity *A*를 *x*초만큼 지연합니다.)

* CPU Usage (Sample)에서 개별 프로세서가 100% CPU 활용 관측 (비정상적으로 높은 CPU 구동)

#### 탐색
Assessment Report를 참조

혹은...

CPU Usage (Sampled) - Utilization by Process and Thread에서 CPU의 % Weight 순으로 나열하여 가장 사용이 높은 것을 위주로 본다.

#### 해결 방안
* 하드웨어 측면: 더 강력한 프로세싱 부품으로 교체.
* 프로그램 측면: CPU 효율적 알고리즘으로 수정; critical path에 CPU 사용이 과한 코드 제거; cache 사용

### Thread Interference
Critical path에 있지 않는 스레드의 CPU 사용도 critical path의 스레드 지연에 원인이 될 수 있다. 비정상적으로 높은 Ready 상태가 특징.

#### 문제 식별
> Process *P* is starved. The starvation causes a delay to the impacted activity *A* of *x* ms.
(프로세스 *P*는 starved 되어있습니다. Starvation은 activity *A*를 *x* ms만큼 지연합니다.)

이는 동일한 우선권의 스레드로부터 발생.

> Process *P* is preempted. The preemption causes a delay to the impacted activity *A* of *x* ms.
(프로세스 *P*는 starved 선점당했습니다. 선점은 activity *A*를 *x* ms만큼 지연합니다.)

이는 critical path 외의 스레드가 우선권이 더 높아서 발생.

* Utilization by CPU에서 CPU 사용량이 100% 가까운지 확인 (프로세서가 부족하다는 의미임)
* Utilization by Process, Thread에서 Ready 시간순으로 나열하여 critical path의 스레드 Ready 시간을 본다. 이를 해결하면 최대 Ready 시간만큼 지연을 줄일 수 있다.

#### 탐색
여기서 판별해야할 점은, 과연 프로세스가 특정 프로세서로 한정되었는지 확인하는 것이다.
: CPU 열을 Unique Count로 설정하고, CPU 100% 사용률에서 사용가능한 프로세서 개수에 비해 사용되는 CPU 개수가 얼마나 되는지 확인한다. 만일 그보다 적으면 스레드 Affinity 등이 설정될 가능성이 높다.

그 이후 무엇이 스레드를 Preempted 혹은 Starved 하게 만들었는지 확인한다.
: `View Editor > Advanced > Graph Configuration`에서 `Start Time: ReadyTime` 및 `Duration: Ready`로 변경하여 그래프의 시작을 ReadyTime 기점으로 Ready가 얼만큼인지로 설정한다. 관심있는 스레드만을 필터링하고, `NewInPri` 스레드 우선권도 평균화시켜 함께 관측한다.

이제 새로운 CPU Usage(Precise) - Utilization by CPU로 설정하고 CPU 관점에서 알아낸 스레드 우선권보다 높거나 같은 것 중에서 관심대상 스레드를 제외하여 확인한다. 이를 통해 CPU 사용률과 ReadyTime과 거의 유사한 형태를 띄고 있는 스레드를 찾을 수 있을 것이다. 그리고 `NewInPri`를 Key 열로 옮겨서 각 CPU마다 처리되는 우선도에서 사용되는 CPU 사용량을 알아볼 수 있다.

이제 이를 일으키는 스레드를 찾아야 한다. `New Process`를 통해 해당 CPU의 우선도에서 동작하는 프로세스를 찾아볼 수 있다.

#### 해결 방안
* 시스템에서 문제가 되는 프로세스를 제거한다.
* 문제가 되는 프로세스의 Base priority 조정
* 문제가 되는 프로세스 실행 타임을 변경

### DPC/ISR Interference
프로세서 시간이 과하게 DPC/ISR에 소모되고 있을 때 스레드를 처리할 충분한 CPU 시간을 받지 못하게 된다.

#### 문제 식별
> DPC *D* exceeds the threshold of *m* milliseconds *x* times during *P*. The *n* instances of this DPC run for a combined total of *t* milliseconds.
(프로세스 *P* 도중에 DPC *D*가 *x* 번째 *m* ms 한계치를 넘겼습니다. 해당 DPC의 객체 *n*이 총 통합 *t* ms 동안 실행되었습니다.)

하지만 직접 해당 문제의 원인을 찾아보려면 DPC/ISR Duration by CPU 그래프를 추가한다. 만일 최대치가 평탄하다면 DPC/ISR 요인이 문제를 일으키고 있다고 판단할 수 있다.

추가적인 데이터를 수집하려면 문제 발생 이전 100ms 영역을 확인한다. 하나 이상의 프로세서에서 상당한 DPC/ISR 활동이 나타나면 DPC/ISR 문제가 확실하다고 판정지을 수 있다. 그리고 CPU Usage에서 스레드 활동이 없는 것으로부터 스레드가 지연되고 있음을 알 수 있다.

#### 탐색
Assessment Report를 참조

혹은...

DPC/ISR 관심 영역을 확대해서 Duration by Module, Function으로 선택. Symbol이 불러와졌으면 duration은 module과 function으로 쪼개진다. 가장 위에 있는 행이 문제의 원인일 것이다.

CPU Usage (Sample)에서 Utilization by Process로 선택하고 `View Editor > Advanced > Filter` 탭에서 Keep rows that match the filter로 변경하면  DPC/ISR 활동을 나타나게 한다. Process 열을 숨기고 Stack을 보이게 하여 DPC/ISR을 스택에 따라 나열시킨다. 그리고 문제의 원인으로 판단되는 module 혹은 function을 stack 열에서 찾는다. 그 중에서 Weight가 inclusion duration의 대략적으로 상응한다고 볼 수 있다.

#### 해결 방안
DPC/ISR 활동은 흔히 하드웨어나 component 수준에서 수정되어야 하는 하드웨어 또는 소프트웨어 문제를 반영한다. configuration 수준에서는 하드웨어 교체 및 올바른 버전의 드라이버로 교체가 있다.
