---
layout: docs
language: ko
category: 운영체제
title: 프로세스
meta: Process
order: 0x40
---
# 프로세스: 소개
> *참조: [Microsoft Docs - Processes and Threads](https://docs.microsoft.com/en-us/windows/win32/procthread/processes-and-threads)*

비록 본문은 프로세스 및 스레드를 위주로 설명하지만, [메모리](../ko.COMPUTER_Memory)와 매우 밀접한 내용들이 있으므로 함께 보는 것을 권장한다.

## 어플리케이션
[어플리케이션은](https://ko.wikipedia.org/wiki/응용_소프트웨어)(application)은 [사용자 공간](https://ko.wikipedia.org/wiki/사용자_공간)에서 특정 작업을 수행하기 위해 설계된 [명령어](https://ko.wikipedia.org/기계어) 집합체, 일명 *실행 가능한 소프트웨어*이다. 프로그래밍 언어로 작성하여 컴파일된 `.EXE` 확장자를 갖는 실행 파일도 어플리케이션이다.

## 프로세스
[프로세스](https://ko.wikipedia.org/wiki/프로세스)(process)는 실행된 어플리케이션 안에 들어있는 명령들을 이행하기 위해 생성된 객체(instance)이다. 어플리케이션이 메모리(e.g., RAM)에 로드되면, 이를 실행하는 프로세스가 생성된다.

> CPU가 직접 접속할 수 있으면서 거리가 가까운 RAM 메모리에서 처리하는 게 HDD나 SSD와 같은 저장장치에서 실행하는 것보다 극적으로 빠르기 때문이다.

생성된 프로세스마다 [가상 주소 공간](../ko.COMPUTER_Memory/#가상-주소-공간)(virtual address space)이 할당되는데, 가상 주소 공간은 서로 고립되어 있기 때문에 하나의 프로세스에 문제가 발생하여도 타 프로세스에 영향을 주지 않는다. 즉, 가상 주소 공간은 프로세스 전용 메모리와 다름없다.

프로세스의 상태

* 생성(Created / New)
    : 프로세스가 처음으로 생성되었을 때의 상태이다.
    - [Created → Ready] : 곧바로 준비 상태로 전환된다.

* 준비(Ready)
    : 물리 메모리에서 CPU 프로세서로부터 즉시 실행될 수 있는 준비된 상태이다.
    - [Running → Ready] : *분배받은 퀀텀(일명, time slice) 소진, `Sleep(0)` 함수, 혹은 프로세스 우선순위로부터 밀려나는 등의 요인으로 준비 상태로 전환된다.*
    - [Waiting → Ready] : *대기 상태에서 탈출한 프로세스를 처리할 프로세스가 없으면 준비 상태로 전환된다.*

* 실행(Running)
    : 물리 메모리에서 CPU 프로세서로부터 실행되는 중이다.
    - [Ready → Running] : *준비 상태의 프로세스는 CPU로 실행될 프로세서를 지정 및 배치시키는 스케줄링 작업을 통해 실행 상태로 전환된다.*
    - [Waiting → Running] : *대기 상태에서 탈출한 프로세스를 곧바로 처리할 수 있는 프로세서가 있거나, 혹은 현재 실행 중인 프로세스보다 높은 우선순위를 갖고 있으면 곧바로 실행 상태로 전환된다.*

* 대기(Waiting / Blocked)
    : 물리 메모리에서 특정 이벤트가 발생할 때까지 실행될 수가 없는 유예된 상태이다.
    - [Running → Waiting] : *외부로부터 강제로 실행이 유예되었으므로 대기 상태에서 탈출하려면 타 실행 프로세스의 도움(예. `WaitingForSingleObject()` → `SetEvent()`)을 받거나 커널 동작(예. `Sleep(>0)`)을 기다려야 한다.*

* 종료(Terminated)
    : 프로세스가 프로그램 코드 실행을 전부 마쳤거나 외부로부터 kill되었을 시 종료 상태로 전환된다. 이때 리소스 관리가 제대로 되지 않으면 누수(leak)가 발생하여 시스템에 문제를 일으킬 수 있다.

## 스레드
[스레드](https://ko.wikipedia.org/wiki/스레드_(컴퓨팅))(thread)는 [스케줄링](#프로세스-스케줄링) 될 수 있는 프로세스에서 코드를 실행하는 가장 작은 흐름 단위이다. 프로세스에는 기본적으로 실행에 필요한 스레드 하나를 갖지만, 필요하면 한 개 이상의 스레드를 생성할 수 있다. 그러나 스레드가 종료되면 프로세스도 자동적으로 함께 종료된다. 즉, 스레드가 없는 프로세스는 존재하지 않는다.

> 정리하면 다음과 같다: *스레드는 실질적인 어플리케이션 실행의 주축이며, 프로세스는 스레드를 위한 메모리 및 리소스를 제공한다.*

그렇다고 프로세스 없이 스레드만 존재할 수 없다. 실행에 필요한 스택 및 heap 메모리, 실행 코드 등의 리소스를 프로세스가 가지고 있기 때문이다. 결국 프로그램 실행을 논할 때는 프로세스 단위로 설명한다.

프로세스 내의 스레드들은 하나의 가상 주소 공간에 있기 때문에 리소스를 서로 공유할 수 있다. 이는 프로세스 간 서로 고립적인 성질과 매우 대조적이다.

# 프로세스: 스케줄링
[스케줄링](https://ko.wikipedia.org/wiki/스케줄링_(컴퓨팅))(scheduling)은 프로그램 명령을 처리할 [프로세서](https://ko.wikipedia.org/wiki/중앙_처리_장치)(processor)에 어떤 프로세스 혹은 스레드를 어떻게 배분할 것인지 결정하는 작업을 말한다. 스케줄링에는 여러 가지 접근법이 있어 시스템 설계 목적이나 운영체제에 따라 다르다.

> [윈도우](https://ko.wikipedia.org/wiki/마이크로소프트_윈도우) 운영체제의 경우, *[선점형](https://ko.wikipedia.org/wiki/스케줄링_(컴퓨팅)#비선점형과_선점형) [Round-robin](https://ko.wikipedia.org/wiki/라운드_로빈_스케줄링) 스케줄링*을 택하였다.
>
> 스레드 혹은 (단일 스레드) 프로세스는 "퀀텀(Quantum; 혹은 time slice)"란 일회성 시간제 티켓이 있어야만 프로세서로부터 처리될 수 있다. 프로세스는 작업 완료여부를 불문하고 time slice에 주어진 시간동안만 스레드를 처리하고 돌려보낸다. 작업이 완료되지 않은 스레드는 다시 time slice를 받기 위해 기다린다.

스케줄링은 결과적으로 운영체제의 [멀티태스킹](https://ko.wikipedia.org/wiki/다중작업)(multitasking)으로 구현된다. 덕분에 여러 개의 프로그램을 동시에 사용하거나 자동저장과 같은 실시간 기능이 가능해진다.

## 스케줄러
스케줄러는(scheduler)는 어떤 프로세스를 실행할 지 결정하는 운영체제의 일부분이다.

* 장기 스케줄링

* 중기 스케줄링
    : 중기 스케줄러(medium-term scheduler)는 swapping out (혹은 paging out) 그리고 swapping in (혹은 paging in) 작업을 수행한다. 자세한 내용은 메모리 관리에서 참고한다.

* 단기 스케줄링
    : 단기 스케줄러(short-term scheduler), 일명 CPU 스케줄러는 어느 ready 스레드에게 프로세서 시간을 분배할지 결정한다.

### Dispatcher
스케줄링 작업에서 프로세서 시간을 단기 스케줄링으로 지정된 프로세스에게 전달하는 모듈이다. Dispatcher 역할은 다음과 같다:

* 문맥 교환(context switch)
* 사용자 모드로 전환
* 프로세스가 생성(created) 상태로 변동되면 프로그램 재시작을 위해 사용자 모드 프로그램의 적절한 시작점으로 이동

Dispatcher은 매 스레드가 바뀔 때마다 실행되어야 하므로 가능한 동작이 빨라야 한다. Dispatcher가 프로세스 하나를 멈추고 새로운 프로세스를 실행시키는데 걸리는 시간을 dispatch latency라고 부른다. 문맥 교환 도중, 프로세서는 사실상 매우 잠깐동안 동작하지 않는다.

## 우선순위
스케줄링의 기본적인 기준은 프로세스와 스레드의 우선순위(priority)에 따라 결정된다. 우선순위는 총 0(최하) ~ 31(최상)으로 나뉘어진다.

> 최하 우선순위인 0은 zero-page 시스템 스레드만이 가질 수 있는 특수한 경우이다: 보안 목적을 갖고 있으므로 일반 스레드는 해당 우선순위를 사용하지 말아야 한다.

시스템은 동일한 우선순위를 갖는 스레드 간에는 [Round-robin](https://ko.wikipedia.org/wiki/라운드_로빈_스케줄링)(RR) 스케줄링을 사용하여 평등하게 취급한다. 만일 최고 우선순위에서 RR 스케줄링으로 실행할 스레드가 없으면, 차우선순위 스레드들을 RR 스케줄링한다.

스레드 우선순위은 다음 기준으로 결정된다:

* 프로세스의 우선순위 클래스

    * `IDLE_PRIORITY_CLASS`
    * `BELOW_NORMAL_PRIORITY_CLASS`
    * `NORMAL_PRIORITY_CLASS` *(default)*
    * `ABOVE_NORMAL_PRIORITY_CLASS`
    * `HIGH_PRIORITY_CLASS`
    * `REALTIME_PRIORITY_CLASS`

* 프로세스 우선순위 클래스 내의 스레드 우선순위 레벨
    
    * `THREAD_PRIORITY_IDLE`
    * `THREAD_PRIORITY_LOWEST`
    * `THREAD_PRIORITY_BELOW_NORMAL`
    * `THREAD_PRIORITY_NORMAL` *(default)*
    * `THREAD_PRIORITY_ABOVE_NORMAL`
    * `THREAD_PRIORITY_HIGHEST`
    * `THREAD_PRIORITY_TIME_CRITICAL`

우선순위 클래스와 레벨의 조합은 스레드의 기초 우선순위(base priority) 기준이 된다.

## 문맥 교환
[문맥](https://en.wikipedia.org/wiki/Context_(computing))(context)이란, 프로세스나 스레드 등이 중단된 시점에서부터 작업을 재개할 수 있도록 필요한 최소한의 정보들이다. 그리하여 문맥 교환(context switch)이란, 프로세스나 스레드를 나중에 재개하여 실행할 수 있도록 문맥을 저장하는 행위이다. 스케줄링과 함께 단일 코어 CPU에서 멀티태스킹을 가능하게 만드는 핵심 기능이다.

다음은 문맥 교환의 절차를 순차적으로 짚어서 설명한다:

1. Dispatcher에서 아래의 요인으로부터 스레드의 문맥을 저장한다.
    * 프로세서 시간(퀀텀; 일명 time slice) 소진
    * 우선순위가 더 높은 준비 중인 스레드 선점
    * 대기 상태로 전환

2. 준비 상태로 전환된 스레드는 스케줄링 대기열에 기다린다.

3. 스케줄러는 다음 준비 상태의 스레드에게 프로레서 시간을 분배한다.

4. Dispatcher는 시간 분배를 받은 스레드의 문맥을 불러와 실행을 재개한다.

## 우선순위 부스트
프로세스 클래스와 스레드 레벨에 의해 결정된 기초 우선순위가 있으나, 실제 스케줄링에서는 기초 우선순위가 반영된 동적 우선순위(dynamic priority)에 의해 결정된다. 동적 우선순위는 기초 우선순위 이상의 값을 가질 수 있으나, 절대로 낮을 수는 없다. 이를 통해 시스템은 필요에 따라 동적 우선순위를  부스팅(priority boost)하여 임시적으로 높일 수 있다 (단, 부스팅 대상은 기초 우선순위 0 ~ 15로 제한).

다음은 우선순위가 부스팅되는 일부 경우를 소개한다:

* `NORMAL_PRIORITY_CLASS` 우선순위의 프로세스가 foreground에 실행되면 스케줄러는 해당 프로세스의 우선순위을 부스트시켜 background 프로세스보다 높게 만든다. 그리고 foreground에 없으면 다시 원래 기초 우선순위으로 되돌린다.

* 윈도우 창에 연동된 타이머 신호를 받거나 마우스 혹은 키보드 메시지를 수신받을 시, 스케줄러는 해당 윈도우 창을 소유하는 스레드의 우선순위을 임시로 부스트시킨다.

우선순위 부스팅은 `SetProcessPriorityBoost` 혹은 `SetThreadPriorityBoost` 함수를 호출하여 비활성화 할 수 있다.

부스팅된 동적 우선순위는 단번에 기초 우선순위로 내려가지 않으며, 매 프로세서 시간을 배분받을 때마다 우선순위가 하나씩 낮아진다.

## 우선순위 반전
우선순위 반전(priority inversion)은 우선순위가 다른 스레드 두 개 이상이 스케줄링 과정에서 대치하고 있을 떄 발생한다. 여기서 언급한 대치 상황으로 아래의 예시를 둘 수 있다:

> 1. 스레드 1은 상위 우선순위로 스케줄링 준비가 되어있다.
> 2. 스레드 2는 하위 우선순위로 critical section의 코드를 실행하고 있다.
> 3. 스레드 2가 마무리되어야 실행될 수 있는 스레드 1은 대기 상태로 전환한다.
> 4. 스레드 3은 중간 우선순위이며, 대기 상태에 걸린 스레드 1 대신에 프로세서 타임을 분배받는다.
> 5. 스레드 2는 스레드 3보다 낮은 우선순위로 스케줄링에 의하여 마무리하지 못하고 준비 상태에 걸린다.

이러한 경우를 대비하여 스케줄러는 무작위로 준비 상태의 스레드 우선순위을 부스팅한다. 그러면 스레드 2는 critical section 코드 실행을 마무리할 수 있게 되며, 결과적으로 대기 상태에 있던 스레드 1도 실행될 수 있다.

## 다중 프로세서
여러 프로세서를 갖는 컴퓨터는 일반적으로 둘 중 하나의 아키텍처를 위해 설계되었다:

* 비균일 메모리 접속(non-uniform memory access; NUMA)
    : NUMA 컴퓨터의 각 프로세서는 메모리의 일부분을 더 빨리 접속하기 위해 메모리의 다른 부분에 비하여 더 가깝게 위치한다. NUMA 모델에서 시스템은 스레드가 위치하고 있는 메모리 부분과 가장 가까운 프로세서에 스케줄하려 한다.

* 대칭형 멀티프로세싱(symmetric multiprocessing; SMP)
    : SMP 컴퓨터는 두 개 이상의 동등한 프로세서 혹은 코어가 하나의 공용 메모리에 연결된다. SMP 모델에서 어떠한 스레드라도 아무런 프로세서에 할당될 수 있다. 즉, SMP 컴퓨터에서 스레드 스케줄링은 단일 프로세서에서 스케줄링하는 것과 유사하다.

스케줄링은 우선순위 외에도 (1) 스레드 affinity와 (2) 스레드 ideal processor 설정의 영향을 받는다.

### 스레드 Affinity
스레드 Affinity(def. a similiarity of characteristics)는 스레드를 특정 프로세서에서 실행되도록 강제시킨다. 이러한 행위는 스케줄러의 프로세서 시간 배분에 방해요소로 작용하기 때문에 최대한 기피되어야 한다. 최악의 경우, 스레드는 분명 사용할 수 있는 프로세서가 있음에 불구하고 실행될 수 없는 고갈 현상에 직면한다. 스레드 affinity는 각 프로세서를 테스트하는 용도만으로 사용하기를 권장한다.

### 스레드 Ideal Processor
스레드 ideal processor를 지정할 시, 스케줄러는 가능하면 스레드를 지정된 프로세서에 실행시키도록 노력한다. `SetThreadIdealProcessor` 함수는 이상적인 프로세서로 실행될거라는 보장은 아니지만 스케줄러에게 힌트를 준다. 즉, 강제성이 있는 스레드 affinity와의 확연히 다르다. 

## 스레드 Ordering 서비스
스레드 ordering 서비스(thread ordering service)는 하나 이상의 사용자 제작 클라이언트 스레드가 주어진 시간 안에 순서대로 한 번씩 실행하도록 제어한다. 스레드 ordering 서비스는 사용자가 수동으로 활성화해야 하며, 활성 시에는 시스템이 idle 상태에서도 매 5초마다 클라이언트 스레드들을 실행한다. 만일 에너지 효율성이 중요한 요소로 작용한다면 오히려 시스템 스케줄러를 통해 스레드 실행을 관리하기를 권장한다.

## Quality of Service
[QoS](https://ko.wikipedia.org/wiki/QoS)(Quality of Service)는 스레드의 성능 및 전력 효율성을 표시하는데 사용된다. 우선순위가 스케줄링을 결정하는 주요 척드로 작용한다면, QoS 레벨은 코어 선택 및 프로세서 전력 관리에 영향을 준다. 서로 다른 프로세서들로 이루어진 플랫폼에서, 스레드 QoS는 스케줄러에게 기피하거나 선호하는 프로세서를 알려준다.

# 프로세스: 다중 스레드
스레드는 프로세스 내에 위치하여 실행을 위해 스케줄링될 수 있는 존재이다. 모든 스레드는 프로세스의 가상 주소 공간 및 시스템 리소스를 공유한다. 각 프로세스는 모두 단일 스레드로 시작하지만 어느한 스레드로부터서라도 새로운 스레드를 생성할 수 있다.

## 스레드 스택
각 스레드마다 생성되면 코드 실행을 위한 자신만의 초기 할당(committed) 메모리와 예약 메모리(reserved)로 구성된 스레드 스택이 주어진다. 초기 할당 메모리는 참조될 때까지 물리 메모리를 사용하지 않지만 총 시스템 할당 한계치(물리 메모리 + 페이지파일)로부터 페이지를 가져온다.

> 페이지(page)란, 일정한 크기로 나뉘어진 운영체제에서 관리하는 가장 작은 단위의 가상 메모리이다.

예약 메모리는 추가 할당이 가능한 메모리 공간이며 최대로 가상 주소 공간만큼 확보할 수 있다. 필요 시 스레드는 "예약 메모리 최대 크기 - 1"만큼을 더 할당시킬 수 있는데, 이는 스택 오버플로우를 방지하는 차원이다. 그래도 안정적인 스레드 동작을 위해 가능한 작은 스택 크기로 할당하는 게 바람직하다.

스레드가 `return` 및 `ExitThread()` 함수로 종료되면 스택은 자동적으로 해제된다. 그러나 `TerminateThread()` 함수와 같이 타 스레드로부터 강제 종료된다면 cleanup이 진행되지 않아 스택이 잔여하는 메모리 누수 현상이 발생한다.

## 스레드 핸들
스레드는 `CreateThread()` 혹은 `CreateRemoteThread()` 함수로 생성되는데, 이때 스레드를 프로그램 상으로 처리할 수 있도록 하는 핸들(handle) 및 식별을 위한 스레드 고유 ID가 함께 반환된다. 스레드 핸들은 (스레드 생성 때 설정한 플래그에 따라) 자식 프로세스가 상속받을 수 있고, 핸들을 복제시켜 제한된 권한을 갖는 스레드 핸들을 만들 수 있다. 스레드가 종료되어도 핸들이 열려있으면 스레드 객체는 잔여하기 때문에 반드시 직접 닫아주도록 한다.

`GetCurrentThread()` 함수는 현재 실행되고 있는 스레드의 pseudo 핸들을 가져오는데 사용된다. 그러나 이는 프로세스 호출을 위해서만 사용할 수 있으며, 다른 프로세스로의 상속 및 복제는 불가하다. 만일 pseudo 핸들로부터 실제 핸들을 가져오려면 해당 프로세스에서 `DuplicateHandle()` 함수를 사용한다.

## 스레드 유예
스레드는 타 스레드의 실행을 유예 및 재개시킬 수 있다; 다시 말해, 타 스레드의 상태를 [대기](#프로세스)(waiting)로 전환하거나 반대로 대기 상태를 해제할 수 있다는 의미이다. 유예된 스레드는 스케줄링에서 제외된다.

스레드가 `CREATE_SUSPENDED` 플래그가 설정된 상태로 생성되면 즉시 대기 상태에 진입한다. 타 스레드가 `ResumeThread()` 함수로 상태 전환을 하지 않는 이상 실행하지 않는다. 이러한 기능은 스레드가 실행되기 전에 초기화하는 목적으로 사용되거나, 단회성 동기화에서도 유용하다.

스레드 유예는 런타임 도중에도 진입될 수 있다:

* `SuspendThread()`
    : 원하는 지점에서 실행 유예를 할 수 없으므로 스레드 동기화 목적으로 사용되지 않는다. 디버깅 목적으로 사용되는 함수이다.

* `Sleep(>0)` 혹은 `SleepEx(>0)`
    : 특정 시간동안 실행을 임시적으로 보류하고, 커널로부터 재개된다.

* `SwitchToThread()`
    : `Sleep()` 함수와 유사하지만 시간을 정할 수 없다. 스레드에게 할당된 프로세서 타임을 포기하도록 한다.

## 스레드 동기화
여러 스레드가 공용 리소스에 접근할 때 발생 할 수 있는 [경쟁 상태](https://ko.wikipedia.org/wiki/경쟁_상태)(race condition) 혹은 [교착 상태](https://ko.wikipedia.org/wiki/교착_상태)(deadlock)를 방지하기 위해 동기화가 필요하다. 동기화는 또한 상호의존 코드가 순서대로 실행되도록 한다.

다음은 여러 스레드의 동기화에 사용될 수 있는 객체 핸들의 목록이다:

* 콘솔 입력 버퍼
* 이벤트
* [뮤텍스](https://ko.wikipedia.org/wiki/락_(컴퓨터_과학))
* 프로세스
* [세마포어](https://ko.wikipedia.org/wiki/세마포어)
* 스레드
* 타이머

위의 핸들은 signaled 될 수 있다는 특징이 있다. `WaitingForSingleObject()`이나 `SuspendThread()` 등의 대기 함수(wait functions)와 사용할 시, 객체의 signaled 여부에 따라 스레드의 실행을 막으므로써 동기화에 기여한다. 각 객체마다 signaled 되는 조건이 가지각색이다: 콘솔 입력 버퍼는 읽히지 않은 입력(마우스 클릭 혹은 키보드 버튼 다운)이 있을 경우, 프로세스 및 스레드는 종료되면 signaled 된다.

뮤텍스(mutex)는 동시다발적 공용 리소스 접근으로부터 보호하데 유용한 객체이다. 여러 스레드가 하나의 뮤텍스 핸들에 연동되었을 시, 뮤텍스는 signaled 되어 스레드 하나를 공용 리소스 접근시키자마자 바로 non-signaled로 되돌아간다. 공용 리소스에 접근한 스레드가 사용을 마쳤으면 직접 뮤텍스 객체에 signaled 설정을 해야 한다.

## 스레드 로컬 저장공간
스레드 로컬 저장공간(Thread Local Storage; TLS)는 오로지 자신만이 접근할 수 있는 스레드 개인 저장영역이다. 프로세스 내의 모든 스레드가 하나의 가상 주소 공간을 공유한다는 점을 염두하면, 일반적으로 스레드의 데이터는 항상 전역적이기 때문에 타 스레드가 언제든지 접근할 수 있다. 그리고 TLS는 이와 대조되는 개념을 갖는다.

스레드 개인 데이터를 저장하는 공간을 TLS 슬롯(TLS slot)이라고 부른다: `NULL`로 초기화된 `LPVOID` 자료형 배열이다. 그리고 TLS 슬롯 배열 중에서 어느 곳을 접근할지 TLS 인덱스(TLS index)에서 결정한다. TLS 인덱스는 `TlsAlloc()` 함수로 프로세스 가상 주소 공간에 영역을 확보, 즉 모든 스레드에 접근할 수 있는 전역 데이터이다.

TLS 인덱스에 해당하는 TLS 슬롯에 데이터를 입력(`TlsSetValue()` 함수) 및 호출(`TlsGetValue()` 함수)할 수 있다. TLS 인덱스 할당 영역을 해제하려면 `TlsFree()` 함수를 사용한다.

## 스레드 종료
스레드를 종료하면 다음 결과를 초래한다:

* 스레드의 exit 코드가 `STILL_ACTIVE`에서 변경된다.
* 스레드가 signaled 된다.
* 프로세스의 유일한 스레드일 경우, 프로세스는 종료된다.

단, 스레드 핸들이 아직 열려있다면 스레드 객체는 시스템에 잔여하여 원한다면 접근을 할 수 있다. 스레드의 마지막 핸들까지 닫힌 이후에서야 객체는 완전히 제거된다.

### 스레드 종료 방법
스레드를 종료하는 방법은 다음과 같다:

* 스레드에서 `return` 호출
* 스레드에서 `ExitThread` 함수 호출
* 프로세스 내의 아무 스레드가 `ExitProcess` 함수 호출

> 아래의 방법도 스레드를 종료하나 외부로부터 강제로 즉시 종료시키기 때문에 리소스 cleanup을 진행하지 않아 주의해야 한다.
> 
> * 다른 스레드가 해당 스레드의 핸들과 함께 `TerminateThread` 함수 호출
> * 다른 스레드가 해당 스레드가 위치한 프로세스의 핸들과 함께 `TerminateProcess` 함수 호출

# 프로세스: 자식 프로세스
하나의 프로세서로부터 생성된 프로세스를 "자식 프로세스"라고 부르며, 이를 생성한 프로세스를 "부모 프로세스"라고 부른다.

### STARTUPINFO 윈도우 창 Properties 설정
> 내용을 봐서는 Windows API를 이용하여 dialog 윈도우를 만드는 등을 것을 설명하는 것으로 보인다.

부모 프로세스는 자식 프로세스가 관여하는 윈도우 창에 대한 properties을 설정할 수 있다. `CreateProcess` 함수는 `STARTUPINFO` 구조체를 받는 매개변수가 있어 이곳을 통해 윈도우 창의 properties를 설정할 수 있다.

GUI 프로세스의 경우에는 `CreateWindow`와 `ShowWindow` 함수로 생성 및 GUI 요소를 보여준다.

## 프로세스 핸들 및 식별자
> 스레드와 동일한 내용이다.

만일 `CreateProcess` 함수로 새로운 스레드가 생성되었으면, 그에 대한 핸들이 반환된다. 기본적으로 핸들은 모든 권한을 갖으며, "보안성 접근 확인"을 이유로 스레드 핸들을 인자로 받는 아무런 함수에 사용될 수 있다. 해당 프로세스 핸들은 (스레드 생성 때 설정한 플래그에 따라) 자식 프로세스가 상속받을 수 있다. 핸들을 복제시켜 제한된 권한을 갖는 스레드 프로세스 만들 수 있다. 핸들은 프로세스가 끝날 때까지, 심지어 프로세스나 이를 대표하는 스레드가 terminated 되어도 유효하다 (즉, terminated 되었으면 직접 핸들을 닫아주어야 함).

`CreateProcess` 함수는 핸들 외에도 시스템에 통틀어 프로세스를 구별할 수 있는 고유의 식별자를 반환한다. 그러니 만일 프로세스 식별자를 알고 있으면 그에 대한 핸들을 `OpenProcess` 함수를 호출하여 불러올 수 있으며, 접속 권한 및 상속가능여부 또한 설정할 수 있다.

`GetCurrentProcess`를 통해 현재 실행되고 있는 프로세스의 pseudo 핸들을 가져올 수 있다. 그러나 이는 프로세스 호출을 위해서만 사용할 수 있으며, 다른 프로세스로의 상속 및 복제는 불가하다. 만일 pseudo 핸들로부터 실제 핸들을 가져오려면 해당 프로세스에서 `DuplicateHandle` 함수를 사용한다.

## 프로세스 열거
모든 사용자들은 시스템에 있는 프로세스 목록을 읽어올 권한이 있으며, 이러한 active 프로세스를 열거하는 몇 가지의 함수가 존재하다.

* `EnumProcesses`: 시스템 내에 있는 각 프로세스 객체의 식별자를 불러온다.
* `Process32First`: 시스템 스냅샷에서 가장 먼저 마주한 프로세스 정보를 불러온다.
* `Process32Next`: 시스템 스냅샷에서 그 다음으로 마주할 프로세스 정보를 불러온다.
* `WTSEnumerateProcesses`: 특정 터미널 서버(혹은 특정 사용자 계정)에서의 active 프로세스들의 정보를 불러온다.

## 프로세스 상속
자식 프로세스는 부모 프로세스로부터 몇몇 성질을 상속받을 수 있다. 그리고 부모 프로세스는 자식 프로세스가 상속받는 것을 방지할 수도 있다.

다음 성질들을 상속받을 수 있다:

* `CreateFile`(파일, 콘솔 입력 버퍼, 콘솔 스크린 버퍼 등), `CreateProcess`(프로세스), `CreateThread`(스레드), `CreateMutex`(mutex), `CreateEvent`(이벤트), `CreateSemaphore`(semaphore), `CreateNamedPipe`(네임드 파이프), `CreatePipe`(anonymous 파이프), 그리고 `CreateFileMapping`(파일 맵핑 객체)로부터 반환된 열린 핸들.
    : 자식 프로세스는 부모 핸들의 일부를 상속받을 수 있으나, 나머지는 상속받을 수 없다. 핸들 상속을 위해서는 다음과 같이 해야 한다.

    * 상속받을 핸들이 생성(`SECURITY_ATTRIBUTES` 구조체의 `bInheritHandle` 맴버), 열기, 또는 복제(`bInheritHandles` 파라미터)할 때 상속받을 수 있도록 설정한다.
    * 상속할 핸들의 `bInheritHandles` 파라미터를 `CreateProcess` 함수를 사용할 때 `TRUE`로 설정한다.

    그 중에서 자식 프로세스가 상속받을 수 있는 핸들을 특정짓기 위해서는 `UpdateProcThreadAttribute` 함수에서 `PROC_THREAD_ATTRIBUTE_HANDLE_LIST` 플래그를 설정한다.

    핸들 상속이란, 부모가 접근한 객체와 자식이 접근하는 객체가 동일함을 의미한다: 동일한 값에 동일한 권한을 갖는다. 그러므로 한 프로세스에서 핸들 상태를 수정하면 이는 나머지 프로세스에서도 그대로 반영된다.

* 환경 변수
    : 기본적으로 자식 프로세스는 부모 프로세스의 환경변수를 상속받는다. 하지만 `CreateProcess`는 부모 프로세스는 다른 블록의 환경 변수를 사용하도록 지정할 수 있다.
* 현재 디렉토리
    : 현재 자식 프로세스의 디렉토리 위치는 기본적으로 부모와 동일하다. 하지만 `CreateProcess`는 부모 프로세스는 자식 프로세스의 디렉토리를 변경할 수 있다.
* 콘솔
* `SetErrorMode` 함수로 설정된 error mode
* 프로세서 affinity 마스크
* job와의 연관성

그러나 자식 프로세스는 다음을 상속받지 않는다.

* 우선순위 클래스
* `HeapAlloc`와 같은 메모리 할당 관련 핸들
* `GetCurrentProcess` 및 `GetCurrentThread`로부터 반환된 Pseudo 핸들
* DLL 모듈 핸들

## 환경 변수
모든 프로세스는 환경 변수(environment variables)와 그에 대한 값들을 묶음인 환경 블록(environment block)을 갖는다. 환경 변수는 (1) 사용자 환경 변수 (각 사용자에 대한) 그리고 (2) 시스템 환경 변수 (모든 사용자에 대한)가 있다.

기본적으로 자식 프로세스는 부모의 환경 변수를 상속받는다. 커맨드 프로세서(cmd 혹은 powershell과 같은)로부터 실행된 프로그램은 커맨드 프로세서의 환경 변수를 상속받는다. 자식 프로세스에 다른 환경을 지정하려면 새로운 환경 블록을 생성하여 그에 대한 포인터를 `CreateProces` 함수의 인자로 넘겨준다.

커맨드 프로세서는 `set` 커맨드로 환경블록을 보거나 환경변수를 생성 및 수정까지 할 수 있다. 이는 컴퓨터에서도 직접 확인할 수 있다 (you know how...you've done it a lot because of Python).

`GetEnvironmentStrings` 및 `SetEnvironmentStrings` 함수는 해당 함수의 환경블록을 불러오고 설정하는 함수이다. 특히 `SetEnvironmentStrings`는 시스템 환경변수를 수정하지 않으며, `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment` 레지스트리 키에서 진행해야 한다.

## 프로세스 종료
프로세스를 종료하면 다음 결과를 초래한다:

* 프로세스의 모든 스레드가 signaled 및 exit 코드 변경과 함께 종료된다.
* 프로세스로부터 열린 모든 객체 핸들이 닫힌다.
* 프로세스의 exit 코드가 `STILL_ACTIVE`에서 변경된다.
* 프로세스가 signaled 된다.

단, 프로세스 핸들이 아직 열려있다면 프로세스 객체는 시스템에 잔여하여 원한다면 접근을 할 수 있다. 프로세스의 마지막 핸들까지 닫힌 이후에서야 객체는 완전히 제거된다. 일반적으로 부모 프로세스가 종료되면 자식 프로세스도 함께 종료된다 (예외 사항: [orphan process](https://en.wikipedia.org/wiki/Parent_process#Orphan_processes)).

### 프로세스 종료 방법
프로세스를 종료하는 방법은 다음과 같다:

* 프로세스이 마지막 스레드 종료
* 프로세스의 아무런 스레드에서 `ExitProcess` 함수 호출
* (콘솔 프로세스 한정) `CTRL+C` 혹은 `CTRL+BREAK`로 콘솔 제어 핸들러가 `ExitProcess` 함수 호출
* 사용자가 시스템을 종료하거나 로그아웃을 할 때

>  아래의 방법도 프로세스를 종료하나 외부로부터 강제로 즉시 종료시키기 때문에 리소스 cleanup을 진행하지 않아 주의해야 한다.
>
> * 다른 스레드가 해당 스레드가 위치한 프로세스의 핸들과 함께 `TerminateProcess` 함수 호출

주의: 현 스레드 상태를 확실히 알지 않는 이상 프로세스를 직접 종료하는 것은 위험하다. 특히 대기 상태의 스레드가 잔여하게 된다면 이를 종료할 때까지 프로세스 자체가 종료되지 않는데, 결국 어플리케이션 "응답 없음"을 야기한다. 이러한 문제를 방지하기 위해 primary 스레드에서 타 스레드의 종료름 먼저 확인하고 `ExitProcess` 혹은 `ExitThread`로 프로세스를 종료하는 게 안전하다.

# Thread Pools
스레드 풀은 어플리케이션을 대신하여 비동기식 콜백을 실행하는 worker 스레드(background에서 논리나 프로그램 작업 수행)의 묶음이다. 스레드 풀은 어플리케이션 전체 스레드 개수를 줄이되 worker 스레드를 관리하여 효율성을 추구하는 목적으로 주로 사용한다. 이를 통해 어플리케이션은 스레드를 작업할 work item을 큐에 대기시키고, work를 waitable 핸들에 연관시키고, 타이머를 통해 자동으로 큐에 대기시키고, 입출력 바인딩이 가능하다.

## 스레드 풀 아키텍처
어플리케이션은 스레드 풀로 다음 이점을 볼 수 있다:

* 많은 양의 스레드를 생성하고 파괴해야 할 때, 스레드 풀은 이로 인해 발생할 수있는 복잡함을 줄이고 스레드 생성과 파괴로 발생하는 overhead를 줄일 수 있다.

스레드 풀 아키텍처는 다음과 같이 구성되어 있다:

* worker 스레드 : 콜백 함수를 실행
* waiter 스레드 : 여러 wait 핸들로부터 대기
* work 큐 : worker 스레드 대기 메모리
* 각 프로세스마다 기본 스레드 풀
* worker factory : worker 스레드를 관리

## 스레드 pooling
많은 어플리케이션은 스레드를 생성하지만 이벤트가 발생할 때까지 sleep 상태에 있는 것들이 많다. 또다른 스레드는 sleep에 있다가 오로지 정보 상태 업데이트만을 위해 주기적으로 깨어나는 경우가 있다. 스레드 풀링은 이러한 스레드를 시스템에서 관리하는 worker 스레드 무리를 어플리케이션에 제공하므로써 더 효율적으로 사용할 수 있도록 한다. 최소한 하나의 스레드가 스레드 풀 큐에 대기되고 있는 모든 wait 동작 상태를 모너터링한다. 만일 wait 동작이 마무리되면 스레드 풀로부터 worker 스레드가 해당하는 콜백 함수를 실행한다.

# Job 객체
Job 객체는 프로세스 무리가 하나의 단위로 관리될 수 있도록 한다. Job 객체는 이름을 지정할 수 있고, 안전하고, 공유할 수 있는 객체로 연관 프로세스들의 특성을 제어할 수 있다. Job 객체에 수행된 동작은 연관된 모든 프로세스에 영향을 미친다. working set 크기 조정이나 프로세스 우선순위 또는 job에 연동된 프로세스들의 termination 등이 해당한다.

### Job 생성
`CreateJobObject` 함수로 job 객체를 생성하나, 생성 당시에는 아무런 프로세스가 없다.

프로세스를 엮으려면 `AssignProcessToJobObject` 함수를 사용한다. 한 번 엮인 프로세스는 해제될 수 없다. 프로세스는 네스티드 Job 계층구조로 하나 이상의 Job 객체에 연동될 수 있다.

### Job으로 프로세스 관리
프로세스가 Job에 연동되었을 시, 해당 프로세스로부터 `CreateProcess` 함수로 생성된 자식도 기본적으로 Job에 엮인다 (단, `Win32_Process.Create`는 그렇지 않다). 이는 Job에 제약을 `JOB_OBJECT_LIMIT_BREAKAWAY_OK` 또는 `JOB_OBJECT_LIMIT_SILENT_BREAKAWAY_OK`으로 확장하여 변경될 수 있다.

만일 Job가 네스티드인 경우, 부모 job의 breakaway 설정은 계층에 있는 자식 프로세스가 계층에 있는 또다른 job에 연동될지 말지 영향을 준다.

만일 프로세스가 Job에서 실행되고 있는지 확인하려면 `IsProcessJob` 함수로 확인하다.

Job 내 모든 프로세스를 한꺼번에 terminate 하려면 `TerminateJobObject` 함수를 사용한다.

### Job의 제약 및 알림
Job 객체는 자신에게 연관된 각 프로세스에 working set이나 프로세스 우선순위 등의 제약을 걸 수 있다. 만일 연관 프로세스가 개별적으로 이러한 제약을 초과하여 변경하려고 하면 함수는 성공적으로 수행하였다고 하나 조용히 무시된다. Job은 이러한 상황에 대하여 알림을 보내게 하나 계속 진행하도록 제약을 설정할 수 있다.

### Job 객체 관리
Job 객체의 모든 프로세스가 terminate 되었을 때, end-of-job 시간 제약을 초과하였으므로 Job 객체는 signaled 된다.

존재하는 job 객체의 핸들을 얻으려면 `OpenJobObject` 함수를 사용하여 생성되었을 때 붙인 이름을 인자로 건네주어야 한다. 그러므로 이름이 있는 Job에만 가능하다.

Job 객체 핸들을 닫으려면 `CloseHandle` 함수를 사용한다 (`JOB_OBJECT_TERMINATE` 권한 필요). 객체는 핸들이 닫히고 안에 있는 모든 프로세스가 terminate 되면 파괴된다. 허나 `JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE` 플래그가 있으면 핸들을 닫는 것만으로 프로세스를 모두 terminate 시키고 객체를 파괴시킨다. 만일 네스티드 job에 해당 플래그가 설정되어 있으면 부모의 마지막 job 핸들을 닫는 것은 프로세스와 계층에 있는 자식 job을 모두 terminate 시킨다.

## 네스티드 Job
어플리케이션은 네스티드 job을 사용하여 나머지 프로세스들을 관리할 수 있다. 또한 네스티드 job은 job을 사용하는 어플리케이션이 job을 사용하는 또다른 어플리케이션의 호스트가 될 수 있다.

### 네스티드 job 계층
네스티드 job 부모-자식 관계를 유지하며 부모 job이 갖는 프로세스 중에서 일부분을 갖는다. 만일 job에 이미 연동된 프로세스를 다른 job에 연동하려면, 시스템에서 유효하다가 판단하면 연동하려는 job은 기본적으로 기존 job의 자식이 된다.

* immediate parent/child: 1촌 job
* ancestor: 상위 job
* job chain: 직계연쇄 form
    * immediate job: 프로세스와 가장 연관이 가까운 job

### 네스티드 job 계층 생성
네스티드 job 계층은`CreateJobObject`와 `AssignProcessToJobObject`을 여러번 하면서 계층을 만든다. 순서도 매우 중요한데, 만일 동일한 부모로부터 있지 않은 프로세스를 엮으려고 하면 네스팅이 되지 않고 함수는 fail한다.

### 네스티드 Job의 제약 및 알림
네스티드 Job은 부모보다 더 엄격한 제약을 걸 수 있으나 덜하지는 못한다.

### 네스티드 Job Terminate
만일 계층에 있는 Job가 terminate 되면 시스템은 해당하는 프로세스와 자식 job을 terminate 시킨다. 그 중에서 시스템은 맨 아래의 자식 Job부터 시작하여 terminate을 진행한다.

# Fiber
fiber는 어플리케이션에서 수동으로 스케줄되어야 하는 실행 단위이다. 즉, 스레드로 스케줄된다고 볼 수 있다. 각 스레드는 여러 fiber을 스케줄할 수 있다. 일반적으로 fiber는 잘 짜여진 멀티스레드 어플리케이션보다 우위에 있을 수 없다. 하지만 fiber는 자체적으로 스레드를 스케줄링하기 위해 설계된 어플리케이션을 port 하는데 쉽게 한다.

시스템 관점에서 fiber는 자신을 실행시키는 스레드의 정체를 알고 있다고 본다(assumes). 예를 들어 fiber가 TLS를 접속하면, 그것은 fiber를 실행시키는 스레드의 TLS이다. 그리고 fiber가 `ExitThread` 함수를 호출하면 해당 스레드가 종료된다. 그러나 fiber의 상태 정보는 연관 스레드와 모두 동일한 상태 정보를 갖지 않는다. 스레드로부터 유지된 상태 정보가 있다면 그것은 스택, 레지스터 서브셋, 그리고 fiber 생성을 위해 제공된 fiber 데이터이다.

Fiber는 스레드와 달리 preemptively 스케줄링되지 않는다: 너가 직접 fiber 스위칭을 해야하기 때문이다. 그래도 시스템이 스레드를 스케줄하여 실행시키기 때문에, 스레드가 실행되면서 그 상태로써는 비록 선택적으로 fiber를 선정하였으나 preempted이게 된다.

첫 번째 fiber를 스케줄링하기 전에 `ConvertThreadToFiber` 함수로 fiber 상태 정보를 저장할 공간을 생성한다. 호출된 스레드가 이제 fiber를 실행하면 저장된 fiber 상태 정보는 이제 `ConvertThreadToFiber` 인자로 넘겨진 fiber 데이터를 포함한다.

`CreateFiber` 함수는 기존의 fiber로부터 새로운 fiber을 생성하기 위해 사용된다. 함수는 스택 크기, (함수) 시작 주소, 그리고 fiber 데이터를 인자로 요구한다. 시작 주소는 일반적으로 사용자가 제공하는 fiber 함수로 fiber 데이터 하나의 인자를 받고 반환값이 없다. 만일 return 되면 fiber를 실행하는 스레드가 종료된다. `CreateFiber` 함수로 생성된 아무런 fiber을 실행하려면 `SwitchToFiber` 함수를 호출한다. `SwitchToFiber` 함수를 다른 스레드로부터 생성된 fiber 주소와 함께 호출할 수 있다. 그러기 위해서는 fiber 생성 시 `CreateFiber`로 반환된 주소를 알고 있어야 하며 적절한 동기화가 필요하다.

fiber는 fiber 데이터를 `GetFiberData` 매크로로 불러올 수 있다. 그리고 fiber 주소는 `GetCurrentFiber` 매크로로 언제든지 불러올 수 있다.

### Fiber Local Storage
스레드에 fiber local storage(FLS)를 할당하면 각 fiber마다의 데이터를 저장할 고유 변수를 생성한다. fiber 스위칭이 없으면 일반 TLS와 같이 동작하며 FLS 함수로 해당 fiber에 대한 데이터를 get, set, alloc, free 등을 사용할 수 있다 (다시 한 번 말하지만 FLS는 fiber에 할당되는게 아니라 fiber를 담당하는 스레드에 있다). 만일 fiber 스위칭이 되면 스레드에 있는 FLS도 전환된 fiber의 것으로 바뀐다.

`DeleteFiber` 함수를 사용하여 fiber의 스택, 레지스터 서브셋, 그리고 fiber 데이터를 cleanup 하는데, 이를 현재 실행되는 fiber에서 호출하면 스레드는 `ExitThread`를 호출하고 terminate 된다. 하지만 타 스레드로부터 cleanup 되면 fiber 스택이 free되어 fiber가 삭제된 스레드는 비정상적으로 terminate 될 것이다.

# 사용자 모드 스케줄링
사용자 모드 스케줄링(UMS)은 어플리케이션이 자체적으로 스레드를 스케줄링하는 lightweight 매커니즘이다. 어플리케이션은 사용자 모드에서 시스템 스케줄러 없이 UMS 스레드를 사용하거나 UMS 스레드가 커널에서 막힐 경우 프로세서의 제어로 스위칭할 수 있다. UMS는 각 UMS 스레드가 각자 자신만의 thread context를 갖고 있다는 점이 하나의 스레드에서 thread context를 공유하는 fiber와 차이가 있다. 스레드를 사용자 모드에서 스위칭할 수 있다는 점은 다수의 시스템 호출이 적은 단기간 work item을 다루는데 있어서 UMS가 스레드 풀보다 더 효율적이다.

UMS는 다중프로세서 혹은 다중코어 시스템에서 여러 스레드를 효율적으로 동시에 실행해야 하는 고성능 어플리케이션에 추천된다. UMS의 이점을 취하기 위해, 어플리케이션은 어플리케이션의 UMS 스레드를 관리하고 실행되어야 하는지 결정하는 스케줄러 구성요소를 적용해야 한다. 이러한 결정은 개발자가 어플리케이션 성능 요구사항에 대하여 신중히 고려해야 하며, 만일 고성능 미만의 어플리케이션의 경우에는 오히려 시스템 스케줄러가 훨씬 더 효율적이다.

UMS는 윈도우 7 64비트 및 윈도우 서버 2008 R2 64비트 혹은 이후 버전에서 지원한다. 32비트는 지원하지 않는다.

## UMS 스케줄러
UMS 스케줄러는 UMS 스레드를 생성, 관리, 그리고 제거를 담당하며 어떤 UMS 스레드를 실행할지 결정한다.

* UMS 스케줄러를 어플리케이션이 UMS 스레드를 돌릴 프로세서마다 생성한다.
* UMS worker 스레드 생성
* 자체적 ready-thread 큐에서 실행하기 위해 대기하고 있는 worker thread를 관리하고, 어플리케이션 스케줄링 정책에 따라 ready thread를 실행한다.
* 시스템으로부터 커널에서 프로세싱을 마쳐 큐에 대기시키는 completion 목록을 하나 이상 생성하여 모니터링한다. 새로 생성된 worker 스레드 및 막혔지만 지금은 뚤린 스레드를 포함한다.
* 시스템으로부터의 notification을 핸들링하기 위한 스케줄러 entry point를 제공한다. 시스템은 스케줄러 스레드가 생성되거나 시스템 호출로 worker 스레드가 막히거나 혹은 worker 스레드가 explicitly yields control 할 때 entry point를 호출한다.
* 실행을 마친 스레드에 대하여 cleanup 을 실행한다.
* 어플리케이션에서 요청할 때 스케줄러의 순차적 shutdown을 진행한다.

## UMS 스케줄러 스레드
UMS 스케줄러 스레드는 일반 스레드를 `EnterUmsSchedulingMode`로 변환시켜 사용하는 것이다. 시스템 스케줄러는 UMS 스케줄러 스레드가 실행할지 타 스레드에 비해 우선순위이 얼마나 되는지에 따라 결정한다. 스케줄러 스레드가 실행하는 프로세서는 비UMS 스레드와 마찬가지로 스레드 affinity에 영향을 받는다.

`EnterUmsSchedulingMode` 호출자는 UMS 스케줄러 스레드에 연동할 completion 목록과 `UmsSchedularProc` entry point 함수를 지정한다. 시스템은 이 entry point 함수를 스레드를 UMS 스레드로 변경을 완료할 때 호출한다. 스케줄러 entry poin 함수는 특정 스레드에 대하여 다음 적절한 행동을 결정한다.

어플리케이션은 UMS 스레드를 실행할 프로세서마다 UMS 스케줄러 스레드를 생성할 수 있다. 어플리케이션은 또한 각 UMS 스케줄러 스레드에 affinity를 설정하여 특정 논리 프로세서가 관련없는 스레드를 배제시키므로써 스케줄러 스레드의 효율을 높일 수 있다. 하지마 affinity는 프로세서에 편중된 스레드 배분을 일으킬 수 있어 시스템 성능 저하를 일으킬 수 있다.

## UMS worker 스레드
`CreateRemoteThreaEx`로 `PROC_THREAD_ATTRIBUTE_UMS_THREAD` 플래그 및 UMS 스레드 context와 completion 목록을 지정하여 UMS worker 스레드를 생성한다.

UMS 스레드 context는 UMS worker 스레드의 스레드 상태를 반영하며 UMS 함수 호출로부터 worker 스레드를 구분짓기 위해 사용된다. UMS 스레드 Context는 `CreateUmsThreadContext`로 생성된다.

Completion list는 `CreateUmsCompletionList` 함수로 생성된다. Completion list는 커널에서 실행을 마무리하여 사용자 모드에서 실행될 준비가 마친 UMS worker 스레드를 전달받는다. 오로지 시스템만이 worker 스레드를 completion list 큐에 대기시킬 수 있다. 새로운 UMS worker 스레드는 자동적으로 스레드가 생성할 떄 지정된 completion list에 queue된다. 이전에 막혔었던 worker 스레드도 뚤렸으면 completion list로 queue된다.

각 UMS 스케줄러 스레드는 할당된 하나의 completion list가 있다. 그러나 하나의 completion list에는 개수 제한 없이 UMS 스케줄러가 할당될 수 있으며, 스케줄러 스레드는 completion list의 포인터가 있는 한 아무런 completion list로부터 UMS context를 받을 수 있다.

각 completion list는 큐가 비어있는 상태에서 worker 스레드가 queue되면 시스템으로부터 signal되는 이벤트가 연동되어 있다. `GetUmsCompletionListEvent` 함수는 특정 completion list에 연동된 이벤트에 대한 핸들을 불러온다. 어플리케이션은 원한다면 두 개 이상의 completion list 이벤트나 다른 이벤트와 함께 signal 되기를 기다리도록 설계될 수도 있다.

## UMS 스케줄러 entry point 함수
어플리케이션 스케줄러 entry point 함수는 `UmsSchedulerProc` 함수로서 실행된다. 시스템은 어플리케이션의 스케줄러 entry point 함수를 다음 지점 떄에 호출한다:

* `EnterUmsSchedulingMode`로 비UMS 스레드가 UMS 스케줄러 스레드로 전환되었을 떄
* UMS worker 스레드가 `UmsThreadYield`를 호출할 때
* UMS worker 스레드가 시스템 호출 또는 page fault 등의 시스템 서비스로 인해 막혔을 때

`UmsSchedulerProc`의 Reason 파라미터는 entry point 함수가 호출된 이유가 담겨있다. UMS 스케줄러 스레드 전환은 `EnterUmsSchedulingMode` 호출자로부터 지정된 데이터, `UmsThreaYield`의 경우에는 `UmsThreaYield` 호출자로부터 지정된 데이터, 그리고 막힌 경우에는 NULL 값이 전달된다.

스케줄러 entry point 함수는 특정 thread에 대하여 어떠한 적절한 행동을 취할지 결정하기 위한 역할을 담당한다. 스레드가 막힌거라면 entry point 함수는 다음 ready 스레드를 실행하는 등처럼 말이다.

스케줄러 entry point 함수가 호출되면 어플리케이션 스케줄러는 해당 UMS 스케줄러 스레드에 연동된 completion list의 아이템들을 `DequeueUmsCompletionListItmes` 함수로 불러오도록 한다. 어플리케이션의 스케줄러는 예측불가한 어플리케이션 동작을 방지하기 위해 이렇게 불러온 아이템 목록으로부터 곧바로 UMS 스레드를 실행하지 말아야 한다. 그 대신, `GetNextUmsListItem`을 통해 context를 하나씩 가져오는 방식으로 UMS thread context를 모두 가져온다. 그리고 이 UMS 스레드 context를 스케줄러  ready thread queue에 삽입시키는 방법으로만으로써 UMS 스레드를 ready thread queue로부터 실행해야 한다.

## UMS 스레드 실행
새로이 생성된 UMS worker 스레드는 지정된 completion list에 queue되어 어플리케이션 스케줄러가 실행할 때까지 기다린다. 이는 비UMS 스레드랑 다른게 시스템 스케줄러는 새로 생성된 비UMS 스레드를 preempt, 즉 바로 자동적으로 스케줄링시킨다 (사용자로부터 suspend되지 않은 이상).

스케줄러는 `ExecutreUmsThread` 호출하여 worker 스레드를 실행한다. UMS worker 스레드는 `UmsThreaYield` 함수로 yield하거나 막히거나 terminate될 때까지 실행한다.