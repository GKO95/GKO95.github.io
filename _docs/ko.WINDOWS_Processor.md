---
layout: docs
category: 윈도우
title: 프로세서
slug: ko.Processor
icon: icon-windows.svg
order: null
---
# 프로세서
[프로세서](https://ko.wikipedia.org/wiki/중앙_처리_장치)(processor), 흔히 컴퓨터에서 중앙 처리 장치(central processing unit; CPU)로 알려진 하드웨어는 프로그램의 [기계어](https://ko.wikipedia.org/wiki/기계어)를 처리하는 [전자회로](https://ko.wikipedia.org/wiki/전자_회로)이다. 데이터 복사나 메모리 주소 이동과 같은 시스템이 취할 수 있는 다양한 작업들이 정의된 [명령어 집합](https://ko.wikipedia.org/wiki/명령어_집합)(instruction set)에 의해 기계어로부터 프로그램을 실행할 수 있는 것이며, 대표적으로 [x86](https://ko.wikipedia.org/wiki/X86)과 [ARM](https://ko.wikipedia.org/wiki/ARM_아키텍처) 계열 명령어 집합 아키텍처가 있다. 그리고 프로세서에서 처리할 수 있는 명령어 집합이 무엇인지에 따라 시스템 아키텍처가 함께 결정된다.

컴퓨터 CPU에서 중요한 요소 중 하나가 코어(core) 개수인데, 여기서 말하는 코어가 바로 프로세서이다. 아래는 단일 코어 CPU를 간랸한 다이어그램으로 나타낸 그림이다.

![단일 프로세서 중앙 처리 장치<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:ABasicComputer.svg">위키미디어</a></i></sub>](/images/docs/processor/processor_core_single.svg)

## 보호 링
[보호 링](https://ko.wikipedia.org/wiki/보호_링)(protection ring)은 데이터와 기능을 결함과 위협적인 행위로부터 보호하는 메커니즘이다.

![프로세서 보호 링의 다이어그램 예시<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Priv_rings.svg">위키미디어</a></i></sub>](/images/docs/processor/processor_protection_ring.svg)

보호 링은 시스템 운영체제의 [권한](https://en.wikipedia.org/wiki/Privilege_(computing))(privilege) 구조를 이루는 계층으로써, CPU 구조가 하드웨어적으로 어떤 [모드](https://en.wikipedia.org/wiki/CPU_modes)에 있는지에 따라 권한에 의해 제한된 일부 명령어들 활용 가능여부가 결정된다. 해당 명령어들은 CPU 및 메모리와 같은 하드웨어를 직접적으로 상호작용하므로 자칫 잘못하면 시스템에 치명적인 문제를 야기한다. 일반적으로 보호 링은 최소 두 계층, 다시 말해 두 개의 CPU 모드가 존재한다:

* **[커널 모드](https://ko.wikipedia.org/wiki/보호_링#수퍼바이저_모드)(kernel mode)**

    일명 수퍼바이저 모드(supervisor mode)는 시스템에 민감한 영향을 줄 수 있는 입출력 동작이나 메모리 접근에 아무런 제약을 받지 않고 아키텍처의 모든 작업을 수행할 수 있다. [가상 주소 공간](ko.Process#가상-주소-공간) 중 커널 공간(kernel space)에서 작업을 처리한다. 대표적인 예시로 디바이스 드라이버(device driver)와 같은 커널 모듈(kernel module)이 커널 모드에서 동작한다.

* **사용자 모드(user mode)**

    사용할 수 있는 CPU 작업이 커널 모드에 비해 하드웨어 상호작용 등 민간한 시스템 구성요소의 접근이 제한된다. 만일 커널 동작이 요구되면 시스템 호출(system call)을 통해 커널에 요청을 해야 한다. 가상 주소 공간 중 사용자 공간(user space)에서 작업을 처리한다. 대표적인 예시로 일반 어플리케이션의 프로세스가 사용자 모드에서 동작한다.

이렇게 보호 링이 분류된 이유는 "더 많은 제어에는 더 큰 책임이 뒤따른다"는 관점에서 비롯된다. 커널 모드의 프로그램 오동작은 시스템 전체에 충돌을 일으킬 수 있기 때문에 문제가 절대로 발생하지 않도록 신뢰될 수 있어야 한다.

# 스케줄링
[스케줄링](https://ko.wikipedia.org/wiki/스케줄링_(컴퓨팅))(scheduling)은 작업이 필요한 [프로세스](ko.Process) 또는 [스레드](ko.Process#스레드)를 처리할 수 있는 [프로세서](#프로세서)에 분배 및 할당하는 행위이며, 이를 담당하는 프로그램을 스케줄러(scheduler)라고 부른다.

스케줄링된 프로세스는 [퀀텀](https://en.wikipedia.org/wiki/Preemption_(computing)#Time_slice)(quantum)이란 일회성 시간제 티켓을 부여받는데, 이는 프로세서가 프로세스를 처리하기 위해 주어진 고정된 시간 간격이다. 처리 도중에 프로세스의 퀀텀이 소진될 시, 프로세서는 해당 작업을 완료여부와 상관없이 즉각 중단하고 스케줄링된 다음 프로세스를 처리한다. 한편, 작업이 마무리되지 않은 프로세스는 다시 스케줄링이 되기를 기다린다. 이로부터 구현된 운영체제의 [멀티태스킹](https://ko.wikipedia.org/wiki/다중작업) 덕분에 여러 프로그램 및 기능을 동시에 실행할 수 있는 거다.

> 윈도우 운영체제는 [선점형](https://ko.wikipedia.org/wiki/스케줄링_(컴퓨팅)#비선점형과_선점형) [라운드 로빈](https://ko.wikipedia.org/wiki/라운드_로빈_스케줄링)(pre-emptive round-robin) 스캐줄링 알고리즘을 사용한다.

## 프로세스 상태
[프로세스 상태](https://en.wikipedia.org/wiki/Process_state)(process state)는 현재 프로세스가 어떠한 상태에 있는지를 가리키며, 크게 세 가지로 분류된다: 준비(ready), 실행(running), 그리고 대기(waiting) 상태가 있다. 윈도우 운영체제는 프로세스 상태에 따라 어떻게 처리할 지 결정한다. 다음은 프로세스 상태의 설명 및 전환되는 경우를 소개한다.

![프로세스의 수명 주기를 상태와 함께 표시한 다이어그램](/images/docs/process/process_states_diagram.jpg)

<table style="width: 100%;">
<thead><tr><th>프로세스 상태</th><th>영문</th><th>설명</th></tr></thead>
<colgroup><col style="width: 10%;"/><col style="width: 10%;"/><col style="width: 80%;"/></colgroup>
<tbody>
<tr><td style="text-align: center;">생성</td><td style="text-align: center;">Created</td><td>프로세스가 처음으로 생성되었을 때의 상태이며, 곧바로 준비 상태로 전환된다.</td></tr>
<tr><td style="text-align: center;">준비</td><td style="text-align: center;">Ready</td><td>프로세서가 즉시 실행할 수 있는 준비된 상태이다.<ul><li style="margin: 5px 0;"><span style="padding: 0px 5px; border: 2px darkgray solid; border-radius: 5px;">→ 실행</span>: 스케줄링에 의해 프로세스를 처리할 프로세서가 지정 및 배치되면서 전환된다.</li></ul></td></tr>
<tr><td style="text-align: center;">실행</td><td style="text-align: center;">Running</td><td>프로세서에 의해 현재 실행되고 있는 상태이다.<ul><li style="margin: 5px 0;"><span style="padding: 0px 5px; border: 2px darkgray solid; border-radius: 5px;">→ 준비</span>: 퀀텀 소진, <code>Sleep(0)</code> 함수, 혹은 우선순위에 밀리면 준비 상태로 전환된다.</li><li style="margin: 5px 0;"><span style="padding: 0px 5px; border: 2px darkgray solid; border-radius: 5px;">→ 대기</span>: <code>WaitingForSingleObject()</code> 또는 <code>Sleep()</code> 함수로 대기 중인 프로세스는 타 프로세스의 도움을 받거나 커널 동작을 기다려야 한다.</li></ul></td></tr>
<tr><td style="text-align: center;">대기</td><td style="text-align: center;">Waiting</td><td>특정 이벤트가 발생하기 전까지는 프로세서로부터 실행될 수 없는 유예 상태이다.<ul><li style="margin: 5px 0;"><span style="padding: 0px 5px; border: 2px darkgray solid; border-radius: 5px;">→ 준비</span>: 대기 상태에서 탈출한 프로세스를 처리할 잔여 프로세서가 없을 시 전환된다.</li><li style="margin: 5px 0;"><span style="padding: 0px 5px; border: 2px darkgray solid; border-radius: 5px;">→ 실행</span>: 대기 상태에서 탈출한 프로세스를 처리할 잔여 프러세서가 있거나, 혹은 높은 우선순위에 의해 곧바로 처리될 시 전환된다.</li></ul></td></tr>
<tr><td style="text-align: center;">종료</td><td style="text-align: center;">Terminated</td><td>외부에 의해 강제로, 혹은 코드에 의해 종료되었을 시 전환되는 상태이다.</td></tr>
</tbody>
</table>

# 인터럽트
[인터럽트](https://ko.wikipedia.org/wiki/인터럽트)(interrupt; 간혹 "트랩"이라고도 언급)는 마우스 움직임이나 키보드 입력과 같은 시스템에서 발생한 일종의 비동기 사건, 즉 이벤트(event)가 최우선으로 처리될 수 있도록 [프로세서](#프로세서)에 요청되는 신호이다. 아래 그림은 인터럽트가 프로세서로부터 처리되는, 즉 인터럽트 서비스(interrupt service) 과정을 간략히 보여준다.

![인터럽트의 종류 및 처리 과정<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Interrupt_Process.PNG">위키미디어</a></i></sub>](/images/docs/processor/interrupt_process_diagram.png)

인터럽트를 전달받은 프로세서는 이벤트를 처리하기 위해 현재 실행 중이던 [스레드](ko.Process#스레드)를 잠시 중단시키고 재개되어야 할 시점의 스레드 [상태](https://en.wikipedia.org/wiki/State_(computer_science))(state)를 저장한다. 각 인터럽트마다 대응되는 함수를 [인터럽트 핸들러](https://ko.wikipedia.org/wiki/인터럽트_핸들러)(interrupt handler) 또는 인터럽트 서비스 루틴(interrupt service routine; ISR)이라고 부르는데, 프로세서에 의해 실행되는 ISR이 바로 이벤트를 처리하는 역할을 한다.

> ISR은 실행 중이던 스레드를 중단시켜 프로세서를 점유한 것이므로 최대한 빠른 시간 내에 처리되어야 한다. 그러나 ISR의 작업들이 많아질수록 인터럽트 처리 시간이 길어지는데, 이는 스레드가 재개되는 시점을 미루거나 새로운 인터럽트가 제때 처리되지 못하게 한다. 윈도우 운영체제는 [DPC](#지연-프로시저-호출)를 제공하므로써 이러한 문제를 해소한다.

마지막으로 프로세서가 중단된 스레드를 다시 실행하므로써 일련의 인터럽트 서비스가 마무리된다.

### 하드웨어 인터럽트
[하드웨어 인터럽트](https://en.wikipedia.org/wiki/Interrupt#Hardware_interrupts)(hardware interrupt)는 마우스, 키보드, 프린터 등의 컴퓨터 [하드웨어](https://ko.wikipedia.org/wiki/컴퓨터_하드웨어) 또는 [외부 장치](https://ko.wikipedia.org/wiki/주변기기)가 운영체제와 통신 및 상호작용을 하기 위해 발신되는 인터럽트이다.

> 운영체제는 하드웨어마다 발생되는 인터럽트에 각자 다른 [IRQ](https://ko.wikipedia.org/wiki/인터럽트_요청) 값을 지정하여 장치를 분별한다. 만일 두 개 이상의 장치가 동일한 IRQ로 전송하면 [혼선](https://en.wikipedia.org/wiki/Interrupt_request_(PC_architecture)#Conflicts)이 발생하여 시스템 [프리징](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅))을 야기한다.

비록 하드웨어 인터럽트는 시스템에 아무 때나 도달할 수 있으나, 결국 프로세서의 [클럭 발진기](https://en.wikipedia.org/wiki/Clock_generator)에 의해 동기화된다.

### 소프트웨어 인터럽트
[소프트웨어 인터럽트](https://en.wikipedia.org/wiki/Interrupt#Software_interrupts)(software interrupt)는 운영체제가 컴퓨터 하드웨어 또는 외부 장치와 통신 및 동작을 지시하기 위해, [특정 명령어](https://ko.wikipedia.org/wiki/INT_(x86_명령어))를 실행하거나 조건에 부합하면 프로세서로부터 발신되는 인터럽트이다. 일반적으로 소프트웨어 인터럽트는 운영체제의 커널단에서 수신받아 처리된다.

> 흔히 커널 프로세스에 나타나서는 안될 특정 소프트웨어 인터럽트가 존재하나, 모종의 이유로 해당 신호가 발신되었다면 [시스템 충돌](ko.BSOD)을 초래할 수 있다.

프로그램이 실행되는 도중에 발생한 [예외](https://ko.wikipedia.org/wiki/예외_처리)(exception)도 소프트웨어 인터럽트에 해당한다.

## 지연 프로시저 호출
[지연 프로시저 호출](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-dpcs)(deferred procedure calls; DPC)은 [큐](https://ko.wikipedia.org/wiki/큐_(자료_구조))에 대기된 작업들을 나중에 한꺼번에 처리하는 매커니즘이다.

인터럽트 핸들러는 기존 스레드를 중단시켜 프로세서를 점유한 것이기 때문에, 원활한 스레드 재개를 위해 인터럽트 서비스는 되도록 빠른 시간 내에 완료되어야 한다. 하지만 인터럽트 핸들러가 처리하는 작업이 많아질수록 인터럽트 서비스 완료에 필요한 시간은 더 길어지게 된다. 이는 스레드가 다시 실행되는 시점을 늦추고 또 다른 인터럽트 처리를 방해하여 매끄럽지 못한 시스템 성능을 야기할 수 있다.

DPC는 필연적이지만 나중에 처리되어도 무관한 낮은 우선순위의 작업들을 실행할 수 있도록 다음 두 가지 특성을 지닌다:

1. 인터럽트 서비스가 완료되면 큐에 대기된 작업들이 순서대로 처리된다.
2. 인터럽트보다 낮은 IRQL을 가져 새로운 인터럽트 신호가 수신되면 DPC 처리 작업은 서비스 완료 때까지 잠시 중단된다.

> 과거 운영체제는 인터럽트 핸들러를 1차(First-Level Interrupt Handler; FLIH)와 2차(SLIH)로 나누었으며, 여기서 후자가 윈도우 운영체제의 DPC에 해당한다.

그러나 단일 및 누적 DPC 작업 처리 시간이 각가 20초와 120초를 초과하면 시스템은 이를 비정상 동작으로 인지하여 [버그 확인 코드](ko.BSOD#버그-확인-코드) [0x133 DPC_WATCHDOG_VIOLATION](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0x133-dpc-watchdog-violation)이 발생한다.
