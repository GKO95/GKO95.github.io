---
layout: docs
language: ko
category: 운영체제
title: 윈도우
meta: Windows
order: 0x45
---
# 윈도우: 소개
[윈도우](https://ko.wikipedia.org/wiki/마이크로소프트_윈도우)(Windows)는 마이크로소프트에서 개발한 [윈도우 NT](https://ko.wikipedia.org/wiki/윈도우_NT) 계열 제품군의 운영체제이다. 전세계적으로 가장 널리 사용되고 있는 데스크탑 운영체제로 가정용 및 상업용 이외에도 연구개발 등의 목적으로 커스터마이징되어 활용된다. 본 장은 윈도우 OS를 컴퓨터 과학 관점에서 아키텍처 및 드라이버 등을 기술적으로 다루기에 앞서 운영체제에 대하여 기본적인 내용을 소개한다.

> 본 문서는 [*윈도우 11*](https://ko.wikipedia.org/wiki/윈도우_11) 운영체제를 예시로 설명한다.

## 운영체제
[운영체제](https://ko.wikipedia.org/wiki/운영_체제)(operating system; OS)는 [어플리케이션](https://ko.wikipedia.org/wiki/응용_소프트웨어)(application)과 같은 타 소프트웨어를 사용할 수 있도록 플랫폼을 제공하는 소프트웨어로 다음 세 가지의 목적을 갖는다:

1. **하드웨어 상호작용**
    : *CPU, RAM, 입출력 장치 등의 컴퓨터에서 시스템을 구동하기 위해 필요한 외부적 요소들과 상호작용한다.*

2. **소프트웨어 리소스 관리**
    : *컴퓨터 하드웨어들로부터 안정적인 시스템 성능을 유지할 수 있도록 소프트웨어 면에서 관리한다.*

3. **사용자에게 서비스를 제공**
    : *관리된 리소스를 기반으로 사용자가 사용할 수 있는 어플리케이션 등의 서비스를 제공한다.* 

## 커널
[커널](https://ko.wikipedia.org/wiki/커널_(컴퓨팅))(kernel)은 운영체제의 핵심 부분으로 시스템 전체의 완전한 통제권을 쥐고 있으며, 또한 하드웨어와 소프트웨어 간의 상호작용을 가능케 한다. 상당히 민감하고 중요한 역할을 수행하기 때문에 사용자나 어플리케이션 [프로세스](https://ko.wikipedia.org/wiki/프로세스)(process)가 커널에 함부로 접근하지 못하게 보호되어 있다. 간략하게 커널에서 수행하는 일부 작업들은 다음과 같이 나열할 수 있다.

* **프로세스 관리(Resource management)**
    : *프로세스의 생성 및 제거, CPU에 프로세스를 할당하는 [스케쥴링](https://ko.wikipedia.org/wiki/스케줄링_(컴퓨팅))(scheduling), 그리고 프로세스 간 통신을 담당한다.*

* **메모리 관리(Memory management)**
    : *각 프로세스마다 주기억장치에 제한된 용량을 갖는 [가상 주소 공간](https://ko.wikipedia.org/wiki/가상_주소_공간)(virtual address space)을 할당하므로써 안전한 메모리 접근을 보장한다.*

* **장치 관리(Device management)**
    : *프로세스가 시스템에 연결된 장치를 사용할 수 있도록 연결된 장치 목록 관리하며 [디바이스 드라이버](https://ko.wikipedia.org/wiki/장치_드라이버)(device driver)를 통해 장치와 상호작용한다.*

위에서 나열한 커널에서 제공하는 서비스들은 [시스템 호출](https://ko.wikipedia.org/wiki/시스템_호출)(System call)이란 사용자와 커널 간의 인터페이스를 통해 요청할 수 있다. 운영체제가 부팅되는 과정에서 커널이 가장 먼저 [RAM](https://ko.wikipedia.org/wiki/랜덤_액세스_메모리) [주기억장치](https://ko.wikipedia.org/wiki/주기억장치)에 로드되어 시스템 초기화를 위한 하드웨어 처리를 진행한다. 부팅하여 로드된 커널은 시스템이 종료될 때까지 RAM에 남아있는다.

![커널 설계에 따른 운영체제 구조<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:OS-structure2.svg">위키미디어</a></i></sub>](/images/docs/windows/windows_kernel_designs.png)

개발자가 지향하는 운영체제에 따라 커널 설계가 크게 두 가지로 나뉘어진다: 모놀리식 그리고 마이크로커널이 있다.

> 윈도우 NT 계열의 운영체제는 *하이브리드 커널*을 사용하며, 이에 대한 자세한 내용은 본 부문에서 설명한다.

### 모놀리식 커널
[모놀리식 커널](https://ko.wikipedia.org/wiki/모놀리식_커널)(monolithic kernel)은 모든 커널 서비스가 단일 프로그램으로 빌드되어 [커널 공간](https://ko.wikipedia.org/wiki/사용자_공간)(kernel space)에서 처리하는 설계이다. 여기서 커널 공간이란, 사용자 측에서 함부로 접근할 수 없는 보호된 코드 영역으로 커널 서비스에 종사하는 [커널 모드](https://ko.wikipedia.org/wiki/보호_링#수퍼바이저_모드)(kernel mode) 프로세스들은 하나의 주기억장치 메모리 공간을 공유하여 사용한다. 주의해야 할 점은 커널 공간(메모리 영역)은 커널(프로그램) 자체를 가리키는 것이 아니다. 그 반대의 개념으로는 사용자 공간이 존재하나, 이는 다음 커널 설계에서 소개할 예정이다.

모놀리식 커널은 설계 구조가 매우 간단하여 관리가 매우 편하고, 단일 프로그램에서 모든 작업을 수행하니 성능 속도가 매우 빠르다. 그러나 커널 서비스 혹은 심지어 드라이버에서 문제가 발생하면 "공유된 메모리 공간"에 의해 타 커널 서비스 및 드라이버에도 영향을 미쳐 운영체제 전체가 충돌할 수 있는 위험이 항상 존재한다. 특히 모듈성(modularity)과 같은 현대 모놀리식 커널에서 볼 수 있는 여러 기능들이 추가되어 방대해진 크기는 코드 관리를 매우 어렵게 한다.

그럼에도 불구하고 모놀리식 커널은 운영체제 런타임 도중에도 필요하다면 언제든지 불러올 수 있는 [커널 모듈](https://ko.wikipedia.org/wiki/적재_가능_커널_모듈)(kernel module)을 지원하고 커스터마이징이 쉽다는 장점을 갖는다. 이러한 이유로 대표적인 모놀리식 커널 중 하나인 [리눅스](../ko.COMPUTER_LinuxOS)(Linux)는 임베디드 시스템에 많이 활용된다.

### 마이크로커널
[마이크로커널](https://ko.wikipedia.org/wiki/마이크로커널)(microkernel)은 운영체제 구동에서 매우 필수적인 커널 서비스만을 제외한 나머지를 [사용자 공간](https://ko.wikipedia.org/wiki/사용자_공간)(user space)에서 처리하는 설계이다. 여기서 사용자 공간이란, 사용자 측에서 쉽게 접근할 수 있는 영역으로 거의 모든 응용 프로그램들은 모두 [사용자 모드](https://ko.wikipedia.org/wiki/사용자_공간)(user mode)에서 실행된다. 각 사용자 모드 프로세스는 커널로부터 자신만의 독립적 가상 주소 공간을 할당받으므로, 한 프로세스에서 충돌이 발생하여도 타 프로세스는 아무런 영향을 받지 않는다. 그리고 직접적 하드웨어 상호작용과 같은 민감한 코드로부터 접근할 수 없다는 점에서 커널 모드와 상당히 대조적인 성질을 갖는다.

마이크로커널에서 언급한 매우 필수적인 기능들은 다음과 같다:

* 기초적 [프로세스 간 통신](https://ko.wikipedia.org/wiki/프로세스_간_통신)(inter-process communication; IPC)
* 기초적 스케쥴러 혹은 스케줄링 요소
* 기초적 메모리 핸들링
* 기초적 입출력 요소

그 외의 고급 커널 서비스와 같은 나머지는 사용자 모드로 노출되어 있는데, 마이크로커널에서는 이들을 서비스를 제공하는 *서버(server)*라고 칭한다. 단순히 서버를 실행하는 것으로 운영체제에 해당 서비스를 동작시키는 모듈성이 반영된다.

마이크로커널의 설계는 모놀리식 커널이 마주하는 단점들을 해결하고자 고안되었다: (1) 방대한 크기로부터 어려워진 커널 코드 관리를 필요한 기능들만으로 축소시켜 수월하게 하며 (2) 서버 혹은 드라이버로부터 문제가 발생하여도 커널에는 영향이 없기 때문에 문제가 발생한 서비스만 재실행하는 것으로 시스템 전체에 치명적 영향이 발생하는 것을 막을 수 있다. 이러한 설계 덕분에 기존 모놀리식 커널에서는 서비스 업데이트를 하려면 커널을 재부팅해야 하였으나, 마이크로커널에서는 해당 서비스를 제공하는 서버만 패치를 적용하면 되어 개발 시간 단축에 기여한다.

이론적으로는 마이크로커널 자체만으로는 크기가 매우 작은 프로그램이지만, 커널 서비스와 관련된 보조 코드까지 모두 합하면 모놀리식 커널보다 용량이 크다. 게다가 운영체제를 사용자와 커널 공간으로 영역을 나눈 설계는 하드웨어 접근성 등에서 시스템 효율에 손실을 있다는 지적이 있다. 그러나 마이크로커널의 가장 큰 문제점은 별개의 소프트웨어인 서버 간 통신에서 발생하는 시스템 성능 저하 그리고 복잡한 프로세스 관리이다.

### 하이브리드 커널
[하이브리드 커널](https://ko.wikipedia.org/wiki/하이브리드_커널)(hybrid kernel)은 기존 마이크로커널에서 일부 모놀리식 커널의 성질을 적용한 복합적 커널 설계이다. 마이크로커널과 달리 매우 기초적인 필수 서비스 이외에도 성능 향상을 위해 일부 서버를 커널 모드에서 처리하는 모놀리식 커널의 성질을 보여준다. 즉, 하이브리드 커널은 모놀리식 커널의 "빠른 속도와 심플한 설계"와 마이크로커널의 "모듈성과 안전성"을 모두 취하려는 접근에서 비롯된 설계이다. 마이크로소프트의 윈도우 NT와 애플의 macOS 등의 대부분 상업용 운영체제에서 사용하고 있다.

# 윈도우: 아키텍처
본 장에서는 윈도우 NT 운영체제 [아키텍처](https://ko.wikipedia.org/wiki/윈도우_NT_아키텍처)에 대하여 살펴본다.

![윈도우 NT 운영체제 아키텍처<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Windows_2000_architecture.svg">위키미디어</a></i></sub>](/images/docs/windows/windows_nt_architecture.png)

## 환경 서브시스템
환경 서브시스템(environment subsystem)은 윈도우 NT 계열의 운영체제에서 다양한 

## 통합 서브시스템
통합 서브시스템(integral subsystem)

## 하드웨어 추상화 계층
[하드웨어 추상화](https://ko.wikipedia.org/wiki/하드웨어_추상화) 계층(harware abstraction layer; HAL)은 물리적 하드웨어와 상호작용하는 윈도우 NT 운영체제의 소프트웨어이다.

# 윈도우: 배포

## Sysprep
Sysprep(System Preparation) 도구는 운영체제 이미지를 일반화(generalized) 상태에서 특수화(specialized) 상태로 변경, 그리고 다시 일반화 상태로 되돌리는 데 사용된다.

* 일반화(generalized)된 이미지: 어느 컴퓨터에도 배포를 적용시킬 수 있는 운영체제 이미지
* 특수화(specialized)된 이미지: 대상이 특정 컴퓨터로 지정된 운영체제 이미지 (즉, 배포된 이미지)

![이미지의 커스터마이징 및 일반화](/images/docs/windows/windows_sysprep_audit.png)

윈도우 운영체제도 결국 소프트웨어이며 실제로 컴퓨터에 배포를 적용하여 개발 및 커스터마이징이 이루어져야 하기 때문에 이미지는 참조 장치(reference device; 개발 및 커스터마이징에 사용된 컴퓨터)에 특수화되어 있다. 그리고 개발 및 커스터마이징이 완료된 이후 참조 장치로부터 캡처하여 새로운 이미지를 만들기 전, 참조 장치에 대한 정보(운영체제 설치 정보 및 하드웨어 정보, Security ID 등)를 전부 제거해야 한다.

```
sysprep /generalize
```

위의 명령으로 이미지는 일반화되는데, 아직 참조 장치에 남아있으므로 이미지 특수화를 방지하기 위해 WinPE(Windows Preinstallation Environment)에서 부팅된다. 이 상태에서 참조 장치를 캡처하여 개발 및 커스터마이징된 새로운 일반화 이미지를 추출한다. 해당 일반화 이미지는 타 컴퓨터에 배포되면 일반적으로 우리가 알고 있는 OOBE(Out-Of-Box Experience; "상자에서 바로 꺼낸" 신제품 경험)로부터 사용자 설정 및 Microsoft Software License Terms을 거친다.

> 요약하자면 `/generalize` 옵션은 사용 중인 이미지를 다른 컴퓨터에서 사용할 수 있도록 한다.

하나의 윈도우 이미지로부터 `Sysprep` 명령어는 최대 1001번까지만 실행할 수 있다 (윈도우 8.1 및 서버 2012 이상; 이전 버전들은 최대 3회).

### 하드웨어 구성
컴퓨터가 정확히 동일한 하드웨어 구성을 갖고 있다고 하더라도 `/generalize` 옵션으로 일반화를 해야 한다.

그래도 Sysprep는 커스터마이징된 일반화 이미지를 배포할 수 있다고 설명하였다. 원래 일반화 과정에서 장치 드라이버는 제외되지만, `Microsoft-Windows-PnPSysprep\PersistAllDeviceInstalls`을 `true`로 설정하면 PnP 장치들이 유지된 채 일반화가 진행된다. 그러면 동일한 하드웨어 구성을 갖는 컴퓨터에 배포되면 별도로 장치 드라이버를 설치하지 않아도 된다. 하드웨어는 정확히 동일한 제조사 장치가 아니어도 되지만, 이들과 상호작용이 가능한 드라이버이어야 한다.

### 부팅 모드
윈도우가 부팅될 때 두 가지의 모드가 있다:

* OOBE(Out-Of-Box Environment) 모드
    : OOBE는 윈도우 설치 과정에서 가장 처음으로 사용자에게 커스터마이징 경험을 제공해주는 부팅 모드이다 (키보드 레이아웃, 인터넷 연결, MS 계정 연동, 위치정보 제공 등). 기본적으로 윈도우가 처음으로 부팅될 때 OOBE 모드로 부팅된다. OOBE가 시작되기 전에 oobeSystem configuration pass가 즉시 실행된다.

    윈도우 제품키 활성화가 자동으로 적용되지 않았을 시, OOBE는 사용자에게 제품키를 입력해 달라고 요청한다. 만일 사용자가 해당 단계를 건너뛰면 윈도우는 나중에 사용자에게 유효한 제품키를 입력해 달라고 상기시킨다. 윈도우 제품키 자동 활성화를 하려면 특수화 configuration pass에서 `Microsoft-Windows-Shell-Setup\ProductKey`에 제품키를 입력한다.

* 검사(audit) 모드
    : 검사 모드는 윈도우 이미지에 추가로 커스터마이징 할 수 있도록 한다. 검사 모드 부팅은 OOBE 설정을 건너뛰어 곧바로 컴퓨터에 접근하도록 한다. 그리고 디바이스 드라이버 및 어플리케이션 설치, 또는 설치 유효성 검사를 진행할 수도 있다.

    Answer 파일에 있는 `Microsoft-Windows-Deployment-Reseal-Mode` 설정을 통해 검사 모드로 부팅하도록 할 수 있다. 검사 모드에서 컴퓨터는 auditSystem 및 auditUser configuration pass에서 unattended answer 파일에 명시된 설정들을 처리한다.

    만일 검사 모드에서 컴퓨터가 실행되고 있는 중에서 OOBE로 재부팅하려면, `Sysprep /oobe` 명령을 입력한다. 사용자들을 위해 준비하기 위해, 사용자가 처음으로 컴퓨터를 사용할 때 OOBE로 부팅되도록 설정해야 한다. 기본 윈도우 설치는 OOBE가 가장 먼저 시작되지만, 커스터마이징된 이미지로 OOBE를 건너뛰고 곧바로 검사 모드로 부팅할 수 있다.

    검사 모드는 시스템 built-in 관리자 계정으로 부팅을 하며, `auditUser` configuration pass 과정에서 해당 계정은 비활성화된다. 즉, 화면보호 등으로 인해 자동 로그아웃 되었거나 재부팅을 하면 검사 모드로 진입하지 않는다는 점을 주의하도록 한다.

> Answer 파일(unattend.xml)은 운영체제 셋업(`Setup.exe`) 과정에서 이미지에 들어있는 윈도우 설정을 변경하는 데 사용된다. 심지어 OOBE가 마무리된 이후 이미지에 들어있는 스크립트를 트리거시키는 설정을 넣을 수 있다. 윈도우 셋업은 자동적으로 특정 위치에 있는 answer 파일을 찾도록 되어있지만, `/unattend:` 옵션으로 사용할 answer 파일을 별도로 지정할 수 있다.

### 로그 파일
Sysprep 도구는 configuration pass에 따라 윈도우 셋업에 대한 로그를 별도의 디렉토리에 저장한다. 그 이유는 일반화 configuration pass가 일부 윈도우 셋업 로그 파일을 삭제하기에, Sysprep 도구는 일반화 절차 로그를 기본 윈도우 셋업 로그 파일 외에 저장한다. 아래는 Sysprep가 사용하는 로그 파일의 위치이다.

* 일반화: `%WINDIR%\System32\Sysprep\Panther`
* 특수화: `%WINDIR%\Panther`
* OOBE: `%WINDIR%\Panther\Unattendgc`

주 로그 파일명은 `setupact.log`이다.

### Sysprep Provider
독립 소프트웨어 공급업체(Independent Software Vender; ISV) 혹은 독립 하드웨어 공급업체(Independent Hardware Vendoer; IHD)는 자신들의 어플리케이션이 이미징 및 배포 시나리오를 지원할 수 있도록 Sysprep Provider를 개발할 수 있다. 만일 그들의 어플리케이션이 현재 Sysprep 도구를 통해 일반화 작업이 지원되지 않는다면, 오히려 특정 소프트웨어 및 하드웨어 정보를 어플리케이션에서 제외시키는 Sysprep Provider를 만들어 적용할 수 있다.

Sysprep Provider를 만들기 위해 다음을 진행한다:

1. Sysprep Provider가 참조할 configuration pass(cleanup, 일반화, 혹은 특수화)를 결정한다.
2. 결정한 configuration pass로부터 Sysprep Provider로의 적절한 entry point를 생성한다.
3. Sysprep Provider를 Sysprep 도구에서 사용하도록 등록한다.
4. Sysprep Provider가 올바르게 동작하는지 유효성 검사를 한다. 로그에 기록된 경고 및 오류를 반드시 확인하도록 한다.

## 이미지 Generalization
이미지 일반화를 위해서는 검사 모드로 부팅되어야 한다. 검사 모드 부팅은 unattended answer 파일 혹은 OOBE 화면에서 진입할 수 있다.

1. PC를 검사 모드로 부팅한다. 운영체제가 검사 모드로 부팅되면 System Preparation Tool이 화면에 나타난다. 해당 창을 닫거나 열거나는 원하는 대로 한다.
2. 드라이버 추가, 설정 변경, 프로그램 설치 등으로 윈도우를 커스터마이징 한다. 그러나 절대로 마이크로소프트 스토어 앱을 설치하거나 업데이트 하지 않는다.

> 마이크로소프트 스토어에서 앱을 새로 설치하거나 기존 앱을 업데이트하면 일반화 작업에 오류가 발생한다. 바로 `Sysprep /generalize` 작업은 모든 앱들은 사용자 전부에게 공급되어야 하기 때문이다. 그러나 위에서 상술한 행동은 특정 사용자에게만 적용되므로 오류가 발생하는 것이다. 업데이트는 최종 사용자 측에서 진행하게 하던가, 전 사용자들을 위한 비즈니스 전용 오프라인-licensed 마이크로소프트 스토어를 공급하는 등의 방안이 있다.

3. `Sysprep`을 실행한다. 만일 System Preparation Tool이 아직 살아있다면 `Generalize` 및 `Shutdown`을 클릭해서 이미지 일반화 후에 자동으로 종료하게 한다. 혹은 cmd로 `Sysprep /generalize /shutdown /oobe` 옵션들을 활성화한다.
4. 컴퓨터가 종료되었으면 DISM으로 이미지를 캡처한다.
5. 캡처한 이미지를 배포하면 OOBE 화면이 나타난다.

> 컴퓨터 배포 중에 여러 unattended 파일을 사용한다면, 각 unattended 파일에 아래의 설정을 추가하여 윈도우 셋업이 unattended 파일을 처리한 다음 일반화를 진행하게 한다.
>
> * 자동적으로 이미지를 일반화하고 컴퓨터를 종료하게 만들려면 `Microsoft-Windows-Deployment\Generalize` 설정을 사용한다. `Mode`는 OOBE 혹은 Audit으로 설정하고, `ForceShutdownNow`는 `true`로 설정한다.
>
> ...혹은...
>
> * 시스템을 일반화하기 위해, 우선 검사 모드로 부팅하고 `Microsoft-Windows-Deployment | Reseal`을 oobeSystem configuration pass로 설정한다. `Mode`는 Audit으로 설정한다.

## Answer Files
Answer 파일을 Sysprep 도구와 함께 사용하여 윈도우 셋업에 나타나지 않은 설정을 지정할 수 있다. 다음은 answer 파일로 할 수 있는 작업들이다:

* 제품키를 Answer 파일에 미리 제시하면 자동적으로 제품키가 활성화된다.
* PnP 장치 드라이버를 이미지 일반화 이후에도 유지시킬 수 있다.

모든 configuration pass가 윈도우 셋업 과정에서 실행되지 않는다; Generalize, AuditSystem, 그리고 AuditUser은 오로지 Sysprep에서만 동작하는데, 이들의 역할은 다음과 같다.

* AuditSystem 및 AuditUser는 `Sysprep /audit` 명령으로 검사 모드로 재부팅하였을 때 처리되는 configuration pass이다.
* Generalize는 `Sysprep /generalize` 명령으로 이미지를 일반화할 때 처리되는 configuration pass이다. 이 절차에서 시스템 특정 설정을 제거하여 동일한 이미지를 여러 컴퓨터에 배포될 수 있도록 한다.

만일 Answer 파일을 사용하여 윈도우를 설치하였다면, 해당 answer 파일은 시스템에 cache 된다. 다음 configuration pass가 동작할 때, 컴퓨터는 cache된 answer 파일로부터 설정을 적용한다. 다른 answer 파일의 설정이 적용되기를 원하면 별도의 `unattend.xml` 파일을 Sysprep에 제시해야 한다.

```
Sysprep /unattend:<file_name>
```

### RunSynchronous
검사 모드에서 auditUser configuration pass에서 동작하는 `Microsoft-Windows-Deployment\RunSynchronous` 명령의 상태를 볼 수 있다. AuditUI 창은 명령에 대한 상태 및 아래의 정보를 제공한다:

* 설치가 계속 진행 중이라는 것을 보여주는 시각적 진행도
* Fail이 발생한 시점과 부분을 시각적 표시

만일 answer 파일이 auditUser configuratio pass에 `Microsoft-Windows-Deployment\RunSynchronous` 명령을 포함하고 있으면, 명령 목록들은 AuditUI 창에 나타난다. 해당 명령들은 `Windows-Deployment-RunSynchronous-RunSynchronousCommand\Order`에서 명시한 순서대로 나열된다. 사용자 인터페이스에 나열된 각 항목들은 다음 중 하나의 문자열이다:

* (존재할 시) Microsoft-Windows-Deployment-RunSynchronous-RunSynchronousCommand Description
* Microsoft-Windows-Deployment-RunSynchronous-RunSynchronousCommand Path

Sysprep는 모든 `RunSynchronous` 명령을 순서대로 처리한다. 만일 명령이 성공하면 해당하는 나열 항목에는 녹색 체크 표시가 나타난다. 반대로 실패하였으면 적색 X 표시가 나타난다. 명령이 재부팅을 요청하면 AuditUI 창은 재부팅 후에 나타나지만 처리되지 않은 명령들만 나열된다. 이전에 처리된 명령들은 목록에서 제외된다. 나열된 명령어 목록이 디스플레이 높이를 초과할 시, 스크롤은 제공되지 않으며 디스플레이 크기에 맞게 내용이 잘려서 표시되어 일부 명령을 볼 수가 없을 것이다.

윈도우 셋업은 AuditUI 창에서 반환된 코드를 해당하는 상태값으로 해석한다. 0은 성공이며, 0이 아닌 숫자는 실패이다. 명령어의 반환값은 `Microsoft-Windows-Deployment-RunSynchronous-RunSynchronousCommand\WillReboot` 설정값에 따라 윈도우 셋업 절차에 영향을 줄 수 있다.

* `Always`일 경우...
    * 명령 반환값이 0이면 성공 표시가 나타난다. 그리고 곧바로 재부팅된다.
    * 명령 반환값이 0이 아닌 숫자이면, 실패 표시가 나타난다. 그리고 곧바로 재부팅된다.

    > `Always` ghrdms `Never`은 0이 아닌 반환값을 치명적 오류로 취급하지 않는다.

* `Never`일 경우...
    * 명령 반환값이 0이면 성공 표시가 나타난다.
    * 명령 반환값이 0이 아닌 숫자이면, 실패 표시가 나타난다.

    > `Always` ghrdms `Never`은 0이 아닌 반환값을 치명적 오류로 취급하지 않는다.

* `OnRequest`일 경우...
    * 명령 반환값이 0이면 성공 표시가 나타난다.
    * 명령 반환값이 1이면 성공 표시가 나타난다. 그리고 곧바로 재부팅된다.
    * 명령 반환값이 2이면 임시적으로 성공 표시가 나타난다. 그리고 곧바로 재부팅된다. 재부팅 이후 AuditUI에 아무런 표시가 없이 다시 나타나 처리된다.
    * 명령 반환값이 그 이외의 숫자이면 치명적 오류로 치부하여 blocking 다이얼로그 상자가 나타난다. 만일 Errorhandler.cmd 파일이 켜져 있으면 다이얼로그 상자는 나타나지 않는다.
