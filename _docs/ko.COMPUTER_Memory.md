---
layout: docs
language: ko
category: 운영체제
title: 메모리
meta: Memory
order: 0x41
---
# 메모리 관리
> https://docs.microsoft.com/en-us/windows/win32/memory/memory-management

32비트 윈도우 OS에서의 각 프로세스는 최대 4GB 메모리까지 도달할 수 있는 가상 주소 공간을 갖는다.

64비트 윈도우 OS에서의 각 프로세스는 최대 8TB 메모리까지 도달할 수 있는 가상 주소 공간을 갖는다.

모든 프로세스의 스레드는 이 가상 주소 공간에 접근할 수 있으나 다른 프로세스의 가상 주소 공간에는 접근할 수 없다. 이를 통해 한 프로세스가 다른 프로세스에 영향을 주는 것을 방지한다.

## 가상 주소 공간
프로세스를 위한 가상 주소 공간은 프로세스가 사용할 수 있는 가상 메모리 주소의 집합이다. 각 프로세스의 주소공간은 private으로 공유하지 않는 이상 다른 프로세스가 접속할 수 없다.

가상주소는 메모리에 소재하는 객체의 실제 물리적 위치를 반영하지 않는다. 시스템이 각 프로세스에 대한 페이지 테이블을 관리한다.

> 페이지 테이블은 가상주소를 대응하는 물리적 주소로 변환시켜주는 내부 데이터 구조이다.

매번 스레드가 주소를 참조할 때, 시스템은 가상주소를 물리적 주소로 변환한다.

32비트 윈도우에서의 가상 주소 공간은 4GB 크기로 두 파티션으로 나뉘어 사용된다: 하나는 프로세스를 위한 것이며, 다른 하나는 시스템을 위한 reserved된 공간이다.

### 가상 주소 공간과 물리적 저장장치
운영체제 버전에 따라 마이크로소프트 윈도우가 지원하는 최대 물리 메모리(e.g. RAM)은 2GB ~ 24TB이다. 각 프로세스의 가상 주소 공간은 컴퓨터에서 사용할 수 있는 총 물리 메모리 용량보다 작거나 클 수 있다. 프로세스의 가상 주소 공간 일부 중 물리 메모리에 위치한 것은 working set이라고 칭한다. 프로세스의 스레드가 현재 물리 메모리에서 제공할 수 있는 용량 이상을 요구하면 시스템은 일부 메모리 내용을 저장장치로 page한다. 즉, 프로세스가 사용할 수 있는 총 가상 주소 공간 용량은 물리 메모리 + 저장장치의 빈 공간(일명 pagefile)이다.

> 페이지(page)란, 일정한 크기로 나뉘어진 운영체제에서 관리하는 가장 작은 단위의 가상 메모리이다. 크기는 호스트 시스템마다 다르며 x86 컴퓨터의 경우에는 4kB이다.

> pagefile 명칭은 가상 메모리의 page가 file을 저장하는 저장장치에서 처리하기 때문에 이 두 용어를 통합한 것으로 보인다; page를 가리키는 file.

메모리 관리의 유연성을 최대화하기 위해, 시스템은 물리 메모리의 페이지에서 저장장치의 페이지파일로(page out) 혹은 그 반대로(page in)도 이동시킬 수 있다. 물리 메모리의 페이지로 옮겨지면 시스템은 이로부터 영향을 받은 프로세스의 페이지 맵을 업데이트 시킨다. 만일 시스템이 물리 메모리를 필요로 한다면 가장 오랫동안 사용되지 않은 물리 메모리 페이지를 페이지파일로 옮긴다. 이러한 시스템에 의한 물리 메모리의 변동은 가상 주소 공간에서만 동작하는 어플리케이션 관점에서는 알아챌 수 없다.

### Working Set
Working set는 프로세스 가상 주소 공간 중에서 물리 메모리에 머물고 있는 페이지 집합이다. Working set는 페이지될 수 있는 메모리 할당만을 포함하며, (Address Windowing Extension이나 large page allocation 등의) 페이지 될 수 없는 메모리 할당은 working set에서 제외된다.

프로세스가 working set가 아닌 페이지될 수 있는 메모리를 참조하면 page fault(페이지 부재)가 발생한다. 시스템의 page fault 처리자는 page fault를 해결하려 하며, 성공할 시 해당 페이지는 working set에 추가된다 (AWE 또는 large page allocation 접근은 페이지될 수 있는 메모리가 아니기 때문에 항상 물리 메모리에 있어 page fault 문제가 발생하지 않는다).

Hard page fault(참조하려는 페이지가 저장장치에 있는 경우)는 페이지의 backing store로부터 페이지 내용(페이지파일 혹은 프로세스로 생성된 메모리 맵 파일)을 읽어서만 문제를 해결할 수 있다. Soft page fault(참조하려는 페이지가 메모리 어딘가에 있는 경우)는 backing store를 접근하지 않고서도 해결될 수 있다.

> Backing store("backing" as "back-up"; store = memory)이란, 저장장치 중에서 페이징 혹은 스와핑 시스템이 정보를 저장하는데 사용되는 공간이다.

Soft page fault는 다음과 같은 이유로 발생한다.

* 프로세스에서 참조하려는 페이지가 물리 메모리에 있으나 다른 프로세스의 working set인 경우
* (1) 해당 페이지를 사용하는 모든 프로세스의 working set로부터 제거되었으나 repurpose되지 않아거나 혹은 (2) 메모리 관리자의 prefetch 동작 등으로 페이지가 in transition인 경우
* 프로세스가 할당된 가상 메모리 페이지를 처음으로 참조하는 경우 (aka. demand-zero fault)

페이지는 다음으로 인하여 프로세스의 working set으로부터 제거될 수 있다:

* 프로세스가 `SetProcessWorkingSetSize`, `SetProcessWorkingSetSizeEx` 혹은 `EmptyWorkingSet` 함수 호출로 자신의 working set 페이지를 제거 혹은 비울 수 있다.
* 프로세스가 `VirtualUnlock` 함수 호출로 특정 메모리 범위의 page들을 저장장치 페이지파일로 swap
* 프로세스가 `UnmapViewOfFile` 함수로 파일의 mapped view를 unmap
* 메모리 관리자가 더 많은 메모리를 사용할 수 있도록 working set 크기를 줄일 경우
* 메모리 관리자가 새로운 페이지를 위하여 어쩔 수 없이 페이지를 제거해야 할 경우 (working set가 최대치에 달하던가 하면)

만일 몇몇 프로세스가 페이지를 공유하고 있을 시, 하나의 프로세스의 working set에서 해당 페이지를 제거한다 하더라도 다른 프로세스에는 영향을 미치지 않는다 (아마 제거를 한 프로세스가 참조를 하지 않을 뿐). 허나 모든 프로세스의 working set로부터 제거되면 페이지는 transition page가 된다.

> transition page는 다른 프로세스로부터 참조되거나 메모리 관리자로부터 repurpose(예를 들어 0으로 채운 다음 다른 프로세스에게 전달되는 등)될 때까지 RAM 캐시안에 잔여한다.

만일 transition page가 마지막으로 저장장치에 write된 이후 변경사항이 발생하였을 때 (즉, 페이지가 "dirty" 할 때), 해당 transition page는 repurpose 되기 전에 먼저 backing store에 write되어야 한다. 시스템은 dirty transition page를 발견한 즉시 backing store에 write하도록 한다.

각 프로세스는 프로세스의 가상 메모리 페이징 동작에 영향을 주는 working set의 최소 및 최대 크기가 있다. 특정 프로세스의 현재 working set 크기를 확인하기 위해서는 `GetProcessMemoryInfo` 함수를 호출한다. 최소 및 최대 working set 크기에 대한 함수로는 `GetProcessWorkingSetSizeEx`와 `SetProcessWorkingSetSizeEx`가 있다.

프로세스 상태 어플리케이션 프로그래밍 인터페이스(PSAPI)는 프로세스의 working set와 관련된 자세한 정보를 반환하는 여러 함수들을 제공한다.

## 페이지 상태
프로세스의 가상 주소 공간에 있는 페이지는 다음 상태 중 하나에 속한다.

* Free
    페이지가 reserved 또는 committed 되지 않은 상태이다. 프로세스는 해당 페이지를 접근할 수 없다. reserved나 committed, 혹은 reserved이면서 committed 상태 페이지로 사용될 수 있다. free 페이지를 read 혹은 write 하려고 하면 access violation 예외처리가 발생한다.

* Reserved
    페이지가 나중에 사용될 것으로 예약된 상태이다. 해당 범위의 reserved 페이지들은 다른 할당 함수로부터 사용될 수 없다. 해당 페이지는 접근될 수 없으며 (access violation!) 물리 메모리(혹은 저장장치)가 관여하지 않는다. 오로지 committed 상태로만 사용될 수 있다. 

* Committed
    총 RAM 및 저장장치 페이지파일 크기만큼 할당될 수 있는 장전된 메모리이다. 페이지는 접근될 수 있으며, 그리고 접근은 메모리 보호 상수 중 하나로부터 제어된다. 시스템은 각 committed 페이지에 처음으로 read 혹은 write하려고 할 때만 초기화하여 물리 메모리에 로드한다. 프로세스가 terminate되면 시스템은 committed 페이지에 대한 공간을 release(->free)한다.

## 할당된 메모리 범위
프로세스가 메모리 할당 함수(`HeapAlloc`, `VirtualAlloc`, `GlobalAlloc`, 또는 `LocalAlloc`)로 할당한 모든 메모리는 해당 프로세스로부터만이 접근할 수 있다. 하지만 DLL로부터 할당된 메모리는 DLL을 호출한 프로세스의 주소공간 내에 할당되며, 이는 동일한 DLL을 사용하는 프로세스라도 접근할 수가 없다. 만일 공용 메모리를 생성하려면 파일 매핑을 사용해야 한다.

네임드 파일 매핑은 공용 메모리 블록을 만드는 가장 쉬운 방법을 제공한다. 프로세스는 파일 매핑 객체를 생성하기 위해 `CreateFileMapping` 함수를 호출할 때 이름을 지정할 수 있다. 타 프로세스는 `CreateFileMapping` 혹은 `OpenFileMapping` 함수에 이름을 제시하여 매핑 객체의 핸들을 가져올 수 있다.

각 프로세스는 `MapViewOfFile` 함수에 파일 매핑 객체의 핸들을 제시하므로써 view of file을 자신의 주소공간에 매핑할 수 있다. 모든 프로세스에 대한 단일 파일 매핑 객체

(...what the heck is the "view"?)

## 데이터 실행 방지
데이터 실행 방지(Data Execution Prevention; DEP)는 윈도우 XP 및 서버 2003부터 운영체제게 탑재된 시스템-레벨 메모리 보호 기능이다. DEP는 시스템이 하나 이상의 페이지를 실행불가한 메모리로 표시 할 수 있도록 한다. 메모리 영역을 실행불가한 메모리로 marking하는 것은 해당 영역의 메모리에서 코드를 실행할 수 없음을 의미하며, 이는 buffer overrun을 남용을 어렵게 만든다.

DEP는 코드가 기본 heap, stack, 혹은 메모리 pools과 같은 data page에서 코드가 실행되는 것을 방지한다. 어플리케이션이 보호된 데이터 페이지에서 코드를 실행하려고 하면 accession violation이 발생하여 에외처리가 되지 않으면 프로세스는 terminate 된다.

DEP는 모든 남용으로부터 포괄적 방어를 제공하려는 것이 아니다. 당신의 어플리케이션의 안전성은 그 목적을 위해 제작된 도구를 사용해서 안전성을 확보해야 한다.

### DEP 원리
만일 어플리케이션이 보호된 페이지로부터 코드를 실행하려고 할 시, 어플리케이션은 상태 코드 `STATUS_ACCESS_VIOLATION`의 exception을 받는다. 만일 어플리케이션이 반드시 해당 메모리에서 코드를 실행해야 할 시, 적절한 가상 메모리 할당 및  보호 attribute를 설정해주어야 한다. 할당 시에는 `PAGE_EXECUTE`, `PAGE_EXECUTE_READ`, `PAGE_EXECUTE_READWRITE`, 또는 `PAGE_EXECUTE_WRITECOPY`로 되어야 한다.

어플리케이션은 프로세스의 기본 stack 또는 heap에서 코드를 실행할 수 없다: `malloc`과 `HeapAlloc` 함수로 할당된 heap 영역은 코드 실행불가 메모리이다.

DEP는 부팅 설정 데이터에 있는 no-execute page protection policy setting에 의해 시스템 부팅 때 설정된다. 어플리케이션은 현재 정책 설정을 `GetSystemDEPPolicy` 함수로 불러올 수 있다. 정책 설정에 따라 어플리케이션은 현재 프로세스에 대한 DEP 설정을 `SetProcesDEPPolicy` 함수로 변경할 수 있다.

### 프로그래밍 고려사항
어플리케이션은 `VirtualAlloc` 함수로 적절한 메모리 보호 옵션과 함께 실행가능한 메모리를 할당할 수 있다. 어플리케이션을 최소한 `PAGE_EXECUTE` 메모리 보호 옵션으로 설정하기를 제안한다. 실행가능한 코드를 생성한 이후, 어플리케이션에서 할당된 메모리에 write를 불허하도록 메모리 보호를 설정하기를 권장하며, 이는 `VirtualProtect` 함수로 할 수 있다. 이를 통해 코드 실행 메모리 영역을 최대한의 보호를 보장받을 수 있다. 어플리케이션을 만들 때 메모리가 남용될 수 있는 용량을 최소화하기 위해 최소한의 실행가능한 주소공간을 사용하도록 한다.

어플리케이션의 가상 메모리 레이아웃을 제어하여 실행 영역을 만드는 것도 해보도록 한다. 해당 실행 영역은 실행불가 영역보다 하위 메모리 공간에 위치하도록 한다. 그러므로써 비실행영역의 데이터가 실행영역으로 overflow 되는 것을 방지할 수 있다.

### 어플리케이션 호환성
일부 어플리케이션 기능은 DEP와 호환되지 않는다. 이는 동적 코드 생성(예를 들어 JIT 코드 생성)을 하고 명시적으로 생성된 코드에 실행 권한을 표시하지 않으면 DEP를 사용하는 컴퓨터와 호환성 문제가 발생한다. 대다수의 DEP 불가한 수행을 하는 어플리케이션은 제대로 동작하기 위해 업데이트되어야 한다.

소수의 실행 파일 및 라이브러리는 이미지 파일의 데이터 영역에 실행가능한 코드가 들어있을 수 있다. 일부 경우, 어플리케이션은 작은 코드 조각을 데이터 영역에 놓기도 할 수 있다. 하지만 DEP는 실행가능 attribute가 적용되지 않는 이상, 메모리로 로드된 이미지 파일을 실행불가한 영역으로 표시한다.

그러므로 데이터 영역에 있는 실행가능한 코드들은 코드 영역으로 옮겨지거나, 혹은 데이터 영역에 있는 실행가능한 코드는 명시적으로 실행가능하다고 표시되어야 한다.

## 메모리 보호
프로세스가 소유하는 메모리는 private 가상 주소 공간으로 암묵적으로 보호되어있다. 게다가 Window 운영체제는 가상 메모리 하드웨어를 통해 메모리 보호를 제공하고 있다. 이러한 메모리 보호는 프로세서에 따라 어떻게 사용되는지 다르다: 예를 들어 프로세스 주소공간의 코드 페이지는 읽기전용으로 표시되어 사용자 모드 스레드로 인한 변경으로부터 보호받을 수 있다.

### Copy-on-Write 보호
copy-on-write 보호는 프로세스 하나가 페이지를 변경하지 않는 이상, 여러 프로세스가 자신의 가상 주소 공간을 매핑하여 물리적 페이지를 공유할 수 있도록 하는 최적화이다. 이러한 기술은 일명 lazy evaluation이라 칭하며, 이는 시스템이 물리적 메모리는 물론 (정말로 필요하지 않는 이상 아무런 동작을 수행하지 않아도 되므로써) 시간까지 절약할 수 있도록 한다.

만일 두 프로세스가 하나의 물리 메모리를 공유하고 있다고 가정한다. 프로세스 1이 물리 메모리의 페이지 하나를 변경하였다면, 변경한 내용은 물리 메모리에서 새로운 페이지에 적용되고 가상 메모리 매핑은 업데이트된다. 그러므로 매핑 업데이트가 일어나지 않은 프로세스 2는 프로세스 1이 변경한 내용을 절대 볼 수 없다!

### 어플리케이션 및 DLL 불러오기
윈도우 기반의 어플리케이션의 여러 객체(aka. process(es))가 실행되었을 시, 각 객체는 자신만의 보호된 가상 주소 공간을 갖는다. 그러나 객체들의 객체 핸들은 일반적으로 동일한 값을 갖는다. 핸들 값은 어플리케이션의 가상 주소 공간의 base 주소(like the pointer of the beginning of the instance)를 의미한다. 만일 각 객체가 기본 base 주소에 로드될 수 있다면 copy-on-write 보호를 통해 하나의 물리 메모리를 매핑하여 다른 객체들과 공유할 수 있다. 어떠한 이유로 이들 객체 중에서 하나가 base 주소에 로드될 수 없으면, 그 객체는 자신만의 물리 페이지들을 할당 받는다.

DLL을 불러오면 자신만의 기본 base 주소가 있다. 모든 프로세스는 DLL을 불러올 때, DLL을 주소공간을 자신들의 주소공간에서 로드하려고 한다. 만일 여러 어플리케이션이 자신들만의 기본 가상주소에 DLL을 로드할 수 있다면, 하나의 물리 메모리를 통해 DLL 주소공간을 공유할 수 있다. 어떠한 이유로 프로세스가 DLL을 프로세스의 기본 base 주소에 로드할 수 없다면 DLL을 다른 위치에 로드한다. copy-on-write 보호는 이러한 프로세스를 위해 일부 DLL 페이지를 다른 물리 페이지로 강제로 복사시킨다. 이러한 이유는 jump 명령에 대한 수정은 DLL 페이지 내에 write하는데, 이러한 과정이 없으면 해당 프로세스에 대해서만 달라지게 되기 때문이다. 만일 코드 영역이 많은 데이터 영역을 참조한다면, 일부 페이지가 아닌 코드 영역 통째로가 복사될 수 있다.

# Memory Pools
메모리 관리자는 시스템이 메모리 할당을 위해 사용할 수 있는 다음 메모리 풀을 생성한다.

* nonpgaed pool
    대응하는 커널 객체가 할당되었을 한, 물리 메모리에 머물 보장이 된 가상 메모리 주소    

* paged pool
    시스템으로부터 page in 및 out 될 수 있는 가상 메모리

이 두 메모리 풀은 물리 메모리 주소 공간의 시스템 영역에 위치하였으며, 각 프로세스의 가상 주소 공간마다 매핑되어 있다.

> (이제 pool이란 용어가 있는 것들의 설명을 여러번 봐서 짐작하겠지만... 예. thread pools, memory pools)
>
> pool이란 것은 관리 목적에 있어서 데이터나 객체를 한 군데 모아둔 것으로 보인다.
> 스레드 풀도 보면 사용할 수 있는 worker 스레드가 하나의 웅덩이 안에서 한꺼번에 관측 및 관리되고.
> 메모리 풀도 비슷하게 해당 범주에 해당하는 가상 메모리 주소들이 무엇인지 웅덩이 안의 데이터를 쉽게 바라볼 수 있는 구조를 지닌다.

성능 향상을 위해 단일 프로세서를 갖는 시스템은 세 개의 paged pool을 갖고 있으며, 멀티프로세서 시스템은 다섯 개의 paged pool을 갖는다.

커널 객체에 대한 핸들은 paged pool에 저장되어 있어, 생성할 수 있는 핸들의 개수는 사용 가능한 메모리에 따라 결정된다.

# 가상 메모리 함수
가상 메모리 함수는 프로세스가 가상 주소 공간에 있는 페이지 상태를 변경하거나 결정하도록 한다. 다음과 같은 동작을 수행할 수 있다.

* 프로세스의 가상 주소 공간의 메모리 범위를 reserved 시킨다.
    주소공간 reserve는 물리 메모리(혹은 저장장치)에 할당되지 않으나 주어진 메모리 범위에 할당 동작을 수행할 수 없도록 한다. 다른 프로세스의 가상 주소 공간에 영향을 주지 않는다. 페이지 reserving은 불필요한 메모리 소모를 방지할 수 있으며, 프로세스의 필요에 따라 reserved 된 영역으로부터 동적 데이터 구조를 키워나갈 수 있다.
* Reserved 된 메모리 범위를 commit시켜 프로세스가 해당 메모리에 접근할 수 있도록 한다.
* commit된 페이지의 보호 상태를 설정한다.
* 메모리 free
* 메모리 페이지를 RAM에 lock 시켜 페이지파일로 swap 방지
* 프로세스의 가상 주소 공간 범위 확인

## 가상 메모리 할당
`VirtualAlloc` 함수는 다음 중 하나를 수행한다.

* Free -> Reserve
* Reserve -> Commit
* Free -> Reserve & Commit
(...wait...no "free -> commit"?)

reserved 또는 commit될 메모리의 시작주소를 직접 지정할 수 있으며, 아님 시스템이 결정하도록 할 수 있다. 시스템은 해당 주소를 대략적인 페이지 경계로 치환한다. reserved된 페이지는 접근할 수 없지만, committed 페이지는 `PAGE_READWRITE`, `PAGE_READONLY`, 혹은 `PAGE_NOACCESS`로 할당될 수 있다. committed될 시, 장전된 메모리는 RAM 혹은 저장장치로 할당되지만...처음으로 read 혹은 write 할 때에는 페이지가 초기화되어 반드시 RAM으로 할당된다. 일반 포인터 참조로 `VirtualAlloc`으로 commit된 메모리를 참조할 수 있다.

## 가상 메모리 해제
`VirtualFree` 함수는 다음 규칙에 따라 decommit 및 release한다.

* 하나 이상의 commit된 페이지를 decommit한다 (commit -> reserved).
    Commit된 블록의 일부만 따로 처리 가능하다.

    ...no, wait...hold up. Process "reserves" the memory for its virtual memory.
    This doesn't sounds right when another process can allocate it.
    ~~이 단계를 통해 다른 프로세스가 할당할 수 있도록 한다 (프로세스의 가상메모리이니, 프로세스가 사용하지 않으면 다른 프로세스가 사용할 수 있는거다! 지금은 가상 주소 공간 안의 주소공간이 아닌, 가상 주소 공간 자체를 이야기하고 있다!).~~
    

* 하나 이상의 reserved된 페이지를 release한다 (reserved -> free).
    단, 이 단계에서는 `VirtualAlloc`을 통해 할당된 전체 페이지 블록이 한꺼번에 release되어야 한다.
* 하나 이상의 reserved & commit된 페이지를 decommit과 release를 동시에 한다 (reserved & commit -> free)
    단, 이 단계에서는 `VirtualAlloc`을 통해 할당된 전체 페이지 블록이 한꺼번에 release되어야 한다. 그리고 모든 페이지는 commit되어야 한다.

decommit 및 release 한 이후에는 참조가 불가하며, 데이터는 영영 사라졌다. 이를 접근 시도하면 access violation이다. 데이터를 유지하고 싶으면 decommit이나 release를 하지 말도록!

안에 있는 데이터가 더이상 필요없지만 할당을 유지하려면 `VirtualAlloc` 함수에 `MEM_RESET`과 함께 호출. 이러한 페이지는 read되지 않고 페이지파일로 write되지 않지만, 언제든지 다시 사용될 수 있다.

## 페이지 작업
사용 중인 컴퓨터의 페이지 크기를 보려면 `GetSystemInfo` 함수를 사용한다.

`VirtualQuery` 또는 `VirtualQueryEx` 함수는 프로세스의 주소공간 내에 지정된 (시스템에서 반내림한 페이지 경계) 주소로부터 시작하여 해당 영역에 연이어 있는 페이지들의 정보를 반환한다. 전자는 해당 프로세스에 대해서, 후자는 지정한 프로세스에 대하여 반환하고 디버그 지원도 한다. 함수는 그 다음 페이지로도 쭉 이어지는데 이들은 공통적으로...

* 동일한 페이지 상태를 갖는다 (committed, reserved, 또는 free)
* 시작 페이지가 free가 아니면 해당 영역에 있는 모든 페이지들은 `VirtualAlloc` 함수로 동일하게 할당된 것이다.
* 접속 보호가 모두 동일하다 (`PAGE_READONLY`, `PAGE_READWRITE`, 또는 `PAGE_NOACCESS`)

`VirtualLock` 함수는 프로세스가 하나 이상의 committed 페이지를 물리 메모리에 고정시켜 저장장치의 페이지파일로 swap되는 것을 방지한다. 중요한 데이터는 저장장치로의 접근이 필요없이 접근할 수 있도록 하지만, 시스템의 메모리 관리에 제한을 걸기 때문에 위험하기도 한다. 과도한 사용은 실행가능한 코드가 페이징 파일로 swap시켜 시스템 성능 저하로 이어진다. 이를 해제하려면 `VirtualUnlock`을 사용한다.

`VirtualProtect` 함수는 프로세스 주소공간에 있는 아무런 commmitted 페이지의 접근 권한을 변경한다. read/write로 할당된 페이지를 read-only 혹은 no-access로 바뀌어 덮어씌여지는 것을 방지할 수 있다. `VirtualALloc` 이외의 할당 함수에도 사용할 수 있으나...안하는게 좋다. `VirtalAlloc`으로 할당된 페이지 전체에 대해서 해야 하며, 다른 할당 함수로부터 반환된 포인터는 페이지 경계에 잘 정렬되어 있지 않기 때문이다. 확장된 버전으로 `VirtualProtectEx`가 있으며 지정한 프로세스에 대하여 진행할 수 있다.

# Heap 함수
각 프로세스는 시스템에서 제공하는 기본 heap이 있다. heap 영역에서 자주 할당하는 어플리케이션은 private heap으로 성능을 개선시킬 수 있다.

private heap은 프로세스 주소공간에 있는 하나 이상의 페이지 블록이다. private heap을 생성하였으면, `HeapAlloc` 그리고 `HeapFree` 함수로 heap 내의 메모리를 관리한다.

Heap 함수는 `GerProcessHeap`으로 반환된 핸들을 통해 프로세스의 기본 heap의 메모리를 관리하는 데에도 사용될 수 있다. 새 어플리케이션은 전역 및 지역 함수보다 이를 사용하도록 한다.

사실상 private heap에서의 메모리 할당과 다른 메모리 할당 함수로서 할당한 것과 차이점이 없다.

> 스레드는 오로지 자신이 생성하고 관리하는 프로세스의 기본 heap과 private heap에서만 heap 함수를 사용하도록 한다.

`HeapCreate` 함수는 프로세스에 private heap 객체를 생성한다: initial size는 초기 committed된 read/write 페이지 개수를 결정하고, maximum size는 총 reserved 페이지를 결정한다. `HeapAlloc` 함수가 기존의 committed 크기를 초과하면 일부 reserved된 메모리는 이를 충족하기 위해 자동으로 committed 된다. 프로세스가 terminate 되거나 `HeapDestroy` 함수로 파괴될 때까지 decommitted 되지 않는다.

private heap은 이를 생성한 프로세스만 접근할 수 있다. DLL이 private heap을 생성하면 DLL을 호출한 프로세스의 주소공간 내에서 생성하여, 해당 프로세스만 접근할 수 있다.

시스템은 private heap을 압축시킬 수 없으나 조각으로 나눌 수 있다. 다양한 크기로 대용량 할당을 하는 어플리케이션은 low-fragmentation heap을 사용하여 시스템에서 heap fragmentation을 하는 것을 줄일 수 있다.

Private heap은 프로세스가 시작될 때 충분한 메모리 공간이 있는지 확인하는 용도로 사용될 수 있다.

`HeapCreate`로 요청된 메모리는 인접하거나 인접하지 않을 수도 있다 (fragmentation). 그러나 `HeapAlloc`으로 할당된 메모리는 서로 인접한다. 이러한 이유(fragmentation)로 두 메모리 할당이 서로 인접할 것이라는 추측은 기피되어야 한다! 그리고 할당되지 않은 메모리 접근은 당연히 access violation으로 피해야 하고!

`HeapDestory`는 decommit 및 release, 그리고 핸들을 무효화시킨다.

# 파일 매핑
파일 매핑은 (저장장치에 있는) (페이지)파일 내용과 프로세스의 가상 주소 공간의 연관성을 가리킨다.

* file mapping object (aka. section object): 시스템에서 생성한 매핑 연관성 관리하는 객체
* file view: 프로세스가 파일 내용을 접근하기 위해 사용하는 가상 주소 공간의 일부
    (설마 MFC의 view와 같은 개념에서 따온 용어인가? 사용자가 실질적으로 상호작용 할 수 있는 요소???)

파일 매핑은 프로세스가 랜덤 및 순차 입출력을 사용할 수 있도록 한다. 그리고 프로세스가 대용량 데이터 파일을 메모리에 옮길 필요 없이 효율적으로 작업할 수 있도록 한다. 여러 프로세스들은 메모리 맵 파일을 통해 데이터를 공유할 수도 있다.

프로세스는 동적할당 메모리에서 하였던 것처럼 포인터를 통해 file view를 read 및 write를 한다. 파일 매핑의 사용은 효율성을 개선시키는데, 이는 비록 파일은 저장장치에 있어도 이를 접근하는 file view는 메모리에 있기 때문이다. 프로세스는 `VirtualProtect` 함수로 file view를 변경할 수 있다.

저장장치에 있는 파일은 메모리로 매핑하고 싶은 어떠한 파일이라도 되며, 심지어 시스템 페이지 파일이 될 수도 있다. 파일 매핑 객체는 파일 전체 혹은 일부에 대해서만 매핑 정보를 제공할 수 있다. 이에 대한 정보는 저장장치에 위치한 backing store의 파일에 백업된다. 즉, 시스템이 파일 매핑 객체가 가리키는 페이지가 swap out하였을 시, 객체에 발생한 변경사항은 backing store의 파일에 기록된다. 객체에서 가리키는 페이지가 다시 swap in 되었으면 backing store의 파일로부터 복구된다.

file view는 파일 매핑 객체의 전체 혹은 일부분일 수 있다. 프로세스는 file view를 통해 파일을 변경한다. 프로세스는 파일 매핑 객체에 대한 file view를 여러개 생성할 수 있다. 각 프로세스에서 생성한 file view는 해당 프로세스의 가상 주소 공간에서 머문다. 만일 프로세스가 현재 file view가 아닌 다른 파일로부터 데이터를 가져와야 한다면, 현재 file view를 unmap한 다음 새로운 file view를 생성한다.

만일 여러 프로세스가 로컬 파일에 대한 view를 생성하기 위해 동일한 파일 매핑 객체를 사용하였다면, 그 데이터는 coherent(일관성이 있다)하다. 다시 말해, view는 저장장치 파일의 동일한 복사본을 담는다. 만일 여러 프로세스 간ㅇ 메모리를 공용하기를 원하면 파일은 원격 컴퓨터에 있을 수 없다.

## 파일 매핑 객체
파일 매핑의 첫 번째 단계는 `CreateFile` 함수로 파일을 여는 것이다. 다른 프로세스가 매핑될 파일 일부에 write 하는 것을 방지하기 위해, 파일을 열 때 exclusive 접근권한으로 열어야 한다. 추가적으로, 모든 프로세스가 파일 매핑 객체를 필요로 하지 않을 때까지 파일 핸들은 계속 열어두어야 한다. 파일 핸들은 `CreateFileMapping` 함수에 파일 매핑 객체를 만드는데 사용된다.

`CreateFileMapping` 함수는 파일 매핑 객체의 핸들을 반환하는데, 이는 나중에 file view를 만드는데 필요하다. 해당 함수로부터 파일 매핑 객체의 이름을 선정할 수 있으며, 매핑될 파일 바이트 크기, 매핑된 메모리로부터 파일 read/write 권한을 지정한다. `CreateFileMapping`을 처음으로 호출한 프로세스가 파일 매핑 객체를 생성한다 (GetLastError: `NO_ERROR`). 이미 존재하는 객체에 대하여 `CreateFileMapping`을 호출(존재하는 객체 이름 입력하여)하면 존재하는 객체의 핸들을 받는다 (GetLastError: `ERROR_ALREADY_EXITS`).

파일 매핑 객체는 물리 메모리를 commit하지 않으며 오로지 reseve만 한다.

### 파일 매핑 크기
파일 매핑 객체의 크기는 매핑되는 파일 크기와는 별개이다. 하지만 파일 매핑 객체가 파일보다 크다면, 시스템은 `CreateFileMapping` 반환 전에 매핑될 파일의 크기를 부풀린다. 만일 파일 매핑 객체가 매핑될 파일보다 작으면 파일의 일부 파이트만 매핑한다.

`CreateFileMapping`에서 선정된 파일 매핑 객체의 크기는 메모리 매핑을 통해 파일의 얼만큼을 "볼 수" 있는지를 결정한다. 더 큰 파일 매핑 객체를 만드는데 시스템 리소스를 더 사용하는 것이 아니므로, 파일 전체를 보지 않을거라 하더라도 파일 크기만큼은 하도록 한다. 시스템 리소스가 상관이 있을 때는 바로 view 생성 및 접근에 있다.

## File view
파일의 데이터를 프로세스의 메모리로 매핑하기 위해, file view(혹은 view of file)을 생성해야 한다. `MapViewOfFile` 및 `MapViewOfFileEx` 함수는 파일 매핑 객체 핸들을 사용하여 파일 혹은 일부분에 대한 view를 프로세스 가상 주소 공간에 생성한다.

`MapViewOfFile` 함수는 file view에 대한 포인터를 반환한다. 포인터 dereferencing을 통해 어플리케이션은 파일 데이터를 read 및 write 할 수 있다. 파일 view에 write하는 것은 파일 매핑 객체에 변경을 초래한다. 실제로 저장장치 file에 write하는 것은 시스템에서 처리한다. 데이터는 파일 매핑 데이터에 write 할 때 실제로는 전송되지 않는 대신, 파일 입출력은 전반적 시스템 성능 향상을 향상을 위해 cached되어 있다. 어플리케이션은 `FlushViewOfFile` 함수로 데이터를 강제로 파일로 곧바로 전송되도록 할 수 있다.

확장판 `MapViewOfFileEx` 함수는 프로세스가 view의 base 주소를 어디로 둘 지 지정할 수 있다. 만일 지정된 주소에 충분한 공간이 없으면 fail된다.

어플리케이션은 동일한 파일 매핑 객체로부터 여러 파일 view를 생성할 수 있다. 파일 view는 파일 매핑 객체에서 비롯된 크기와 다를 수 있으나, 작으면 작지 클 수는 없다.

## 파일 및 메모리 공유
파일 매핑은 두 개 이상의 프로세스 간에 파일 및 메모리를 공유하는데 사용될 수 있다. 파일 또는 메모리를 공유하기 위해, 해당 프로세스들은 동일한 파일 매핑 객체의 이름이나 핸들을 사용해야 한다.

파일 공유의 경우에는 다른 프로세스에서 동일한 파일 매핑 객체의 핸들을 통해 view를 생성하므로써 구현할 수 있다.

프로세스 간의 메모리 공유의 경우, 파일 핸들을 `INVALID_HANDLE_VALUE`로 입력하고 공유할 메모리 크기를 반드시 0보다 큰 값으로 지정해주면 된다. 그러면 파일만 없는 두 프로세스 간의 통해가 파일 매핑 객체로 이루어진 것이다.

공유된 파일 매핑 객체는 이를 사용하고 있는 모든 프로세스가 핸들을 닫을 때까지 파괴되지 않는다.

## closing 파일 매핑 객체
프로세스가 파일 매핑 객체 사용을 끝냈으면 각 view마다 `UnmapViewOfFile` 함수로 연결을 끊어야 한다. view 연결이 끊어졌으면 view에서 사용하던 메모리 범위는 다른 용도로 할당을 할 수 있게 된다. 프로세스의 Working set 일부였던 가상 페이지가 unmap되면서 working set에서 제거된다.

View가 unmap되어도 잔여하는 데이터가 파일에 write 될 수 있으므로, 전력 부족 및 시스템 충돌로 인해 발생할 수 있는 데이터 손실을 방지하기 위해 `FlushViewOfFile`로 혹시나 하는 데이터들을 곧바로 파일로 flush하여 전송하도록 한다.

각 프로세스가 view를 unmap 하였으면 파일 매핑 객체의 핸들을 닫아준다. 그러나 view가 아직 매핑되어 살아있는 경우에서도 객체의 핸들은 닫힐 수 있는데, 이러한 경우 메모리 누수로 이어진다.

# 전역 및 지역 함수
16-비트 코드 포티 또는 16-비트 윈도우와 호환되는 소스 코드 관리를 위한 것! 32-비트부터는 Heap 함수의 wrapper에 불과하다.

# C 라이브러리 함수
어플리케이션은 C/C++ 메모리 관리 기능을 안전하게 사용할 수 있다. C 언어는 16비트 윈도우에서 겪었던 잠재적 위험이 존재하지 않는다. 그리고 시스템은 가상주소에 영향을 주지 않으면서 물리 메모리의 페이지를 이동시킬 수 있어 메모리 관리는 더 이상 문제가 되지 않는다. 하지만 가상메모리 함수는 C 런타임 라이브러리가 제공하지 않는 기능들을 제공한다.

# 메모리 할당 함수 비교
`HeapAlloc`, `GlobalAlloc`, 그리고 `LocalAlloc`은 사실상 같은 heap에 메모리를 할당하지만, 약간의 기능적 차이가 있다. `HeapAlloc`은 할당이 불가하면 exception이 발생하지만, `GlobalAlloc` 및 `LocalAlloc`은 exception이 발생하지 않는다. 그리고 `GlobalAlloc` 및 `LocalAlloc`은 핸들 변경 없이 재할당이 가능한, 메모리 이동이 불가한 `HeapAlloc`이 불가능한다. 그리고 `GlobalAlloc`, 그리고 `LocalAlloc`는 `HeapAlloc`의 wrapper이므로 overhead가 더 크다.

비록 같은 Heap 메모리에 할당하지만 할당 매커니즘에 차이가 있으므로 `HeapAlloc` -> `HeapFree`, `GlobalAlloc` -> `GlobalFree`, `LocalAlloc` -> `LocalFree`로 free 되어야 한다.

`VirtualAlloc` 함수는 메모리 할당에 더 많은 옵션이 주어진다. 하지만 할당이 페이지 granularity를 사용하기 때문에 더 많은 메모리를 소모한다.

`malloc` 함수는 런타임에 의존하고, `new` 연산자는 컴파일러 및 언어에 의존한다.

# 메모리 누수
메모리 누수는 프로세스가 paged pools 또는 nonpaged pools에서부터 할당하였으나, 이들을 free하지 않으면서 발생한다. 결국 pools에서 관리되는 paged 및 nonpaged 메모리가 시간이 지나면서 줄어들어 운영체제가 느려지게 된다. 그리고 메모리가 완전히 바닥나면 운영체제가 결국 fail된다.

## 메모리 누수 증상 판단
만일 윈도우 성능이 시간이 지나면서 저하되어 메모리 누수가 의심된다면, Window Performance Monitor로 메모리 누수가 있는지 조사한다. 본 절차는 누수의 요인이 어디인지 혹은 사용자 혹은 커널 모드에서 발생하고 있는지 알려주지 않는다.

* Memory -> Pool Nonpaged Bytes
    : 페이지 불가한 풀로부터 할당된 현재 시스템이 사용하고 있는 메모리 크기 (단위: 바이트); 마지막으로 관측된 값을 표시하며 평균값이 아니다.

* Memory -> Pool Paged Bytes
    : 페이지 가능한 풀로부터 할당된 현재 시스템이 사용하고 있는 메모리 크기 (단위: 바이트); 마지막으로 관측된 값을 표시하며 평균값이 아니다.

* Paging File -> % Usage
    : 사용되고 있는 페이지파일 객체 용량 (단위: %)

사용자 모드의 누수는 항상 paged pools에서 발생하므로 다음 증상이 함께 동반된다:
* Memory -> Pool Paged Bytes 지속적 증가
* Paging File -> % Usage 지속적 증가

커널 모드의 누수는 일반적으로 nonpaged pools을 고갈시키므로 다음 증상이 동반된다:
* Memory -> Pool Nonpaged Bytes 지속적 증가
* Memory -> Pool Paged Bytes 영향 받을 수 있음

가끔 카운터에서 보여주는 수치는 어플리케이션이 데이터 caching을 하여 거짓양성을 보여줄 수 있다.

## 커널 모드 메모리 누수
다음은 커널 모드 메모리 누수를 진단 및 요인을 찾아내는 방법이다.

### PoolMon
> 어느 드라이버 및 부품이 커널 모드 메모리 누수의 요인인지 판별하는 방법이다.

[PoolMon](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/poolmon), 일명 메모리 풀 모니터(Memroy Pool Monitor)는 시스템 paged 및 nonpaged 풀로부터의 할당에 대하여 운영체제가 수집한 데이터, 그리고 현재 터미널 서비스 세션에서 사용하고 있는 메모리 풀을 보여준다. 할당을 담당하는 paged 및 nonpaged 풀들마다 네 바이트 문자로 구성된 풀 태그(pool tag)를 부여하는데, PoolMon은 각 풀 태그에서 처리된 할당 작업을 표시한다. 이를 통해 어느 메모리 누수가 발생한 메모리 풀이 어디인지 확인할 수 있다. 해당 프로그램은 Windows Driver Kit(WDK)에 포함되어 있으며, 별도의 설치가 필요하다 (위치: `C:\Program Files (x86)\Windows Kits\10\Tools\x64` for 64비트 원도우; Command Prompt 권장).

> For Windows 2000 & XP, `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64` (for 64-bit OS)에 위치한 `GFlags.exe`를 실행해야만 풀 태그가 활성.
>
> 그 이후 버전의 OS 버전에는 기본적으로 활성화!

PoolMon 헤더는 총 paged 및 nonpgaed 풀 바이트를 보여준다.

```
Memory:16719772K Avail:10985668K    PageFlts: 36323    InRam Krnl:65264K P:528024K
Commit:8644868K Limit:19210140K Peak:8739228K          Pool N:339332K P:765760K
```

* `Memory`: 총 물리 메모리 용량
* `Avail`: 사용 가능한 물리 메모리 잔여 용량

* `Commit`: commit된 메모리 용량
* `Limit`: 메모리 commit 한계치
* `Peak`: 메모리 commit 최대치

다음은 시스템 풀 정보 테이블의 헤더가 각각 무엇을 나타내는지 설명한다.

* `Tag`: 풀 태그
* `Type`: paged 혹은 nonpaged
* `Allocs`: 누적 할당 횟수 - ()는 변화량 
* `Frees`: 누적 Free 횟수 - ()는 변화량
* `Diff`: `Allocs` - `Frees`
* `Bytes`: 할당 바이트 크기 - ()는 변화량
* `Per Alloc`: `Bytes` / `Diff`, 즉 바이트 per 할당

메모리 누수 요인 진단은 다음과 같다:

1. 메모리 누수가 의심되는 곳이 nonpaged인지 paged인지 알면 `P` 버튼으로 필터링; 아니면 전체적으로 다 볼 것
2. `B`를 눌러 할당된 바이트 크기 위주로 정렬
3. 어플리케이션 시작하고 Screenshot 기록 (진단 시작; 텍스트 전체를 가져오는 것은 불러오는 시간에 비해 reload되는 시간이 더 빨라서 안되는 듯)
4. 30분마다 새로 찍어서 비교; 어느 태그에서 바이트 증가가 발생하는지 확인
5. 어플리케이션 종료하고 1~2시간 기다린 후 Free된 메모리 용량 확인

이로부터 어느 태그에서 발생하였는지 판단 가능.

### Kernel Debugger
> 커널 모드 메모리 누수의 요인이 되는 드라이버 및 부품을 알고 있으며 자세한 진단을 위한 방법이다.
Kernel debugger (위치: `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`에서 `KD.exe`) 프로그램은 커널 모드 메모리 누수가 정확히 어디에서 일어나고 있는지 판단할 수 있는 정보를 제공한다. `KD.exe` 말고 아마 통합으로 사용되는 `WinDbg.exe`가 더 좋을 듯.

풀 태그가 활성화되어 있지 않으면 `GFlags.exe`를 우선 활성화한다.

그러나 프로그램에서도 Debug와 Release 빌드가 있듯이, 일반 사용자들에게 배포된 Release에는 디버깅 요소가 없다. KD를 사용하기 위해서는 target 컴퓨터를 커널 모드 디버깅이 가능하도록 별도의 설정이 필요하다. (참조: https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/setting-up-kernel-mode-debugging-in-windbg--cdb--or-ntsd)

Kernel Debugger라고는 하지만, WinDbg에서 디버거 break하면 KD 커맨드가 나타난다. 만일 `Abc `일 경우 다음과 같이 입력하여 `Abc ` 풀에서 메모리가 할당 혹은 free되면 자동적으로 break 시킨다.

```
kd> ed nt!poolhittag ' cbA' 
```

그리고 이를 확인하려면

```
kd> kb
```
...로 메모리 어디에서 어느 코드에서 나타나고 있는지 확인할 수 있다...는 지금으로써는 이를 읽는 방법을 잘 몰라서 아직은 판별할 수가 없다.

#### 로컬 커널 디버깅
즉, 디버깅하려는 host와 디버깅되는 target이 동일한 하나의 컴퓨터인 경우.
컴퓨터의 상태를 파악할 수 있으나, OS 동작을 멈추는 커널 모드 프로세스 확인을 불가하다.

설정 방법은 다음과 같다:
>  그 전에 target PC의 BitLocker 및 Secure Boot와 같은 보안 기능을 임시적으로 suspend 시켜야 한다. 디버깅이 끝나고 커널 디버깅을 해제하면 다시 활성화시킬 수 있다. Secure Boot는 BIO UEFI에서 진행하며, BitLocker는 아래로 suspend할 수 있다.

```powershell
Suspend-BitLocker -MountPoint "C:" -RebootCount 0
```

> 다시 재개하려면

```powershell
Resume-BitLocker -MountPoint "C:" 
```

1. Cmd (Admin)에서 `bcdedit /debug on` 입력하여 커널 디버깅 활성화 (BCD란, boot configuration data)
2. 만일 설정되어 있지 않았으면 `bcdedit /dbgsettings local`로 target 컴퓨터 디버거 설정 (디버거는 호스트에 설정하는게 아니라 디버깅되는 target에서 설정되어야 함; 호스트는 그냥 제어하는 거고, 이를 실제로 디버깅하는 요소는 target에 있기 때문에...디버깅 모드도 target에 활성화했잖아!)
3. target 컴퓨터 reboot

재시작 이후 `WinDbg (Admin)`에서 Kernel Debug를 Local에 설정하고 진행.
혹은 KD에서 `kd -kl` 명령어 입력.

로컬 디버깅에 대한 자세한 내용은 여기서 확인 (https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/performing-local-kernel-debugging)

#### KDNET 네트워크 자동설정
> https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/setting-up-a-network-debugging-connection-automatically

>  그 전에 target PC의 BitLocker 및 Secure Boot와 같은 보안 기능을 임시적으로 suspend 시켜야 한다. 디버깅이 끝나고 커널 디버깅을 해제하면 다시 활성화시킬 수 있다.

1. host와 target이 동일한 네트워크 허브에 "물리적 LAN"으로 연결
2. host cmd에서 `ipconfig`로 ipv4 주소 확인

3. host에 윈도우 디버깅 툴 설치 (WDK에 선택옵션 있음)
4. target이 64비트이면 `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`에서 (아니면 `x86`)에서 `kdnet.exe`와 `VerifiedNICList.xml` 파일 확인
5. host에서 두 파일 복사해서 target 컴퓨터로 전달 (usb 메모리 스틱으로 해도 상관 없음)
6. target에 `C:\KDNET` 디렉토리 만들고 두 파일 붙여넣기
7. target에서 `cmd (admin)`으로 해당 디렉토리로 이동해 `kdnet.exe` 실행하여 네트워크 어댑터 지원 여부 확인; 지원되면 계속 진행!
8. target에서 아래 입력; 여기서 디버거 포트는 host/target 쌍을 연결해줄 고유포트를 선택하는 것이며, 50000~50039 범위에서 권장

```
C:\KDNET> kdnet.exe <HostComputerIPAddress> <YourDebugPort> 
```

9. target에서 나타난 `Key` 값을 메모장 `.txt` 파일에 저장

이렇게 네트워크 설정을 마무리하면 host는 target 디버거에 `WinDbg` -> `Kernel Debug` -> `Net`을 통해 접속한다. 만일 방화벽이 나타나면 **세 네트워크 모두**에 대하여 권한을 부여한다. 이 시점에서 디버거는 target이 다시 연결되는 것을 기다리는데, 이때 target 재부팅한다.

```
shutdown -r -t 0
```
재시작되면 디버거는 자동으로 연결된다.

#### KDNET 네트워크 수동설정
> https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/setting-up-a-network-debugging-connection

ip, 포트, 버스 파라미터 등을 `kdnet.exe`가 아니라 직접 해주는 것 차이로 보임.

#### KDNET으로 ARM 장치에서 USB EEM을 통한 커널 모드 디버깅
> https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/setting-up-kernel-mode-debugging-over-usb-eem-arm-kdnet

확인사항:
* Synopsys USB 3.0 Dual-Role Controller 드라이버

마이크로소프트 서피스 프로 X 지원(하단 USB-C)

`kdnet.exe`에서 장치 지원여부 확인하고 디버깅 포트로 사용될 busparams 값을 확인한다. 일반적으로 이는 busparams는 장치에 따라 0 혹은 1이다. ARM 장치는 디버거를 설정하는데 [ACPI](https://ko.wikipedia.org/wiki/ACPI) DBG2 테이블을 사용하며, busparams은 DBG2 테이블 시작점을 가리킨다. 일반적으로 장치는 busparams=0 을 사용하지 않으며, 이는 0 DGB2 테이블은 보통 직렬장치 COM 사용으로 reserved 되었기 때문이다.

동일한 절차로 네트워크 지원 여부를 확인한다.

```
C:\KDNET>kdnet.exe

Network debugging is not supported on any of the NICs in this machine.
KDNET supports NICs from Intel, Broadcom, Realtek, Atheros, Emulex, Mellanox
and Cisco.

Network debugging is supported on the following USB controllers:
busparams=1, Device-mode USB controller with Vendor ID: 5143 (Default)
busparams=2, Device-mode USB controller with Vendor ID: 5143
busparams=3, Device-mode USB controller with Vendor ID: 5143
busparams=4, Device-mode USB controller with Vendor ID: 5143
```
비록 네트워크 지원은 없지만, `busparams=1`을 사용할 수 있으므로 진행할 수 있다.

연결을 위해 IP 주소가 필요한데 모든 USB EMM에 대한 ip는 `169.254.255.255`으로 정해져있다. 그리고 포트도 선택한다.

### Driver Verifier
> 커널 모드 메모리 누수의 요인이 되는 드라이버 및 부품을 알고 있으며 자세한 진단을 위한 방법이다.

커널 모드 드라이버 메모리 누수를 진단하는데 사용된다. 별도의 설치가 없이 `C:\Windows\System32\verifier.exe`에 있다. 하지만 매우 위험하다.

* 컴퓨터 충돌을 일으킬 수 있다.
* 테스트 혹은 디버깅할 컴퓨터에만 사용하도록 한다.
* Driver Verifier을 사용하려면 관리자 그룹에 속해야 한다.

오로지 시험용 컴퓨터 아니면 디버깅 대상 컴퓨터에서만 시행되어야 한다. Driver Verifier로부터 최대한의 이득을 보려면 kernel debugger을 사용하여 시험용 컴퓨터에 연결하도록 한다 (물론 시험용 컴퓨터에는 Driver Verifier 동작하는 상태에서).

Cmd (admin)으로 `verifier`을 실행하는데, 아마 Driver Verifier Manager가 나타날 것이다. Pool Tracking 기능은 Standard Setting에도 있으므로 Standard Setting으로 진행한다. 그 중에서 특정 드라이버에 대한 메모리 누수를 진단하는 것이기 때문에 Select driver names from a list가 가장 적합하다. 그 다음 확인하고자 하는 드라이버를 선택하여 컴퓨터를 재부팅한다.

Driver Verifier에서 더이상 진단이 필요없는 driver을 Manager로 제거하던가 `verifier /reset`으로 삭제한다. 적용하려면 재부팅이 필요하다.

Driver Verifier 수치를 보려면 Display information about the currently verified drivers에서 계속 next를 눌러 정보창을 띄운다. 혹은 `verifier /query`를 사용한다.

Driver Verifier 설정을 보려면 Display existing setting을 누르거나 `verifier /qyerysettings`을 입력한다.

----

Driver Verifier가 violation을 감지하면 컴퓨터 동작을 중지시키기 위해 bug check를 생성한다. 디버깅에서 당신에게 최대한의 정보를 제공하기 위해서이다. KD가 연결되었다면 verifier가 violation을 감지하면 break하여 에러에 대한 간략 설명을 표시한다.

```
kd> !analyze -v
```

위는 커널 모드에서 가장 최근에 발생한 버그 정보를 보여준다. 문제가 발생한 드라이버를 표시하는 추가 정보를 위해 `-v` 옵션이 붙은거다.

특정 드라이버를 driver verifier로 설정하였으면, 그에 대한 디바이스 할당 수치를 보기 위해서는 `!verifier 0x3`을 입력한다.

## 사용자 모드 메모리 누수

### Performance Monitor
> 어떤 프로세스에서 메모리 누수가 발생하는지 찾는 진단법이다.

사용자 모드 메모리 누수가 의심되지만 정확히 어딘지 알 수 없으면, Performance Monitor로 각 프로세스마다 메모리 사용량을 확인한다.

* Process -> Private Bytes (진단하려는 각 프로세스 선택)
    : Private Bytes is the current size, in bytes, of memory that this process has allocated that cannot be shared with other processes.

* Process -> Virtual Bytes (진단하려는 각 프로세스 선택)
    : Virtual Bytes is the current size, in bytes, of the virtual address space the process is using. Use of virtual address space does not necessarily imply corresponding use of either disk or main memory pages. Virtual space is finite, and the process can limit its ability to load libraries.

Private Bytes는 프로세스가 할당한 전체 용량을 의미하며, 타 프로세스와 공유되는 메모리는 제외된다. Virtual Bytes는 프로세스가 사용하고 있는 현 가상 주소 공간 크기이다.

일부 메모리 누수는 private bytes 할당 증가로부터 나타나며, 대다수는 가상 주소 공간의 증가로부터 나타난다. 어느 프로세스에 발생하였는지 확인하였으면 UMDH로 자세한 진단을 진행한다.

### UMDH
> 어느 프로세스에서 문제가 생긴건지 확인하였으면, 어느 루틴에서 문제가 있는건지 확인하는 진단이다.

UMDH (user-mode dump heap) 특정 프로세스에서의 heap 할당을 운영체제와 함께 분석하는 유틸리티 프로그램이다. 특정 프로세스의 어느 루틴에서 누수가 발생하는지 찾아낸다.

UMDH 로그에서 가장 중요한 데이터는 heap 할당의 stack traces이다. 프로세스에 heap 메모리 누수가 발생하고있는지 판단하기 위해서는 해당 stack traces를 분석해야 한다.

UMDH로 stack traces 데이터를 표시하기 전에 GFlags로 시스템을 적절히 설정해야 한다.

1. GFlags.exe GUI 실행하고 Image File 탭에서 프로세스 이름(파일 확장자 포함)을 적고 TAB을 눌러 Create user mode stack trace database를 체크하여 저장한다. 혹은 
```
gflags /i ImageName +ust
```
`+`는 체크 활성, `-`는 체크 비활성이다.
2. 기본적으로 운영체제가 수집할 수 있는 stack trace 데이터는 x86 프로세서에서는 32MB로, x64 프로세서에서는 64MB로 한정되어 있다. 이를 증가시키려면 Image File 탭에서 Stack Backtrace (Megs)를 체크하고 MB 크기를 입력하고 적용시킨다. 이는 제한된 윈도우 리소스를 고갈시킬 수 있으므로 필요 시에만 변경한다. 더 큰 크기가 필요없으면 다시 원래 값으로 되돌려놓는다.
3. System Registry 탭에서 아무런 플래그라도 바꾸면, 이를 적용시키기 위해서는 윈도우를 재시작해야 한다. Image File 탭에서의 변경은 프로세스만 재시작하면 된다. Kernel Flags 탭은 즉시 적용되지만 윈도우를 재시작하면 초기화된다.

UMDH를 사용하기 전, 어플리케이션에 대한 적합한 심볼로의 접근이 있어야 한다. UMDH는 `_NT_SYMBOL_PATH` 환경 변수에서 지정된 심볼 경로를 사용한다.

> 심볼 파일은 프로그램을 실행할 때 필요하지 않지만, 디버깅 절차에서는 매우 유용하다. 심볼은 이름, 종류, 저장되어 있는 주소 및 레지스터, 그리고 부모 또는 자식 심볼에 대한 정보를 담고 있을 수 있다. 예시로 심볼은 변수 이름, 함수, 모듈로의 시작점 등을 담고 있을 수 있다.
>
> 디버거는 프로그램 심볼에 대한 정보를 심볼 파일에서 받으며, 이들은 로컬 파일 시스템이나 원격 심볼 서버로부터 불러와진다. 심볼 서버를 사용한다면 디버거는 target에 있는 모듈과 맞추기 위해 자동적으로 올바른 버전의 심볼 파일을 사용한다.
>
> 윈도우 디버거(WinDbg, KD 등)를 위한 심볼은 인터넷에 있는 public 심볼에서 구할 수 있다.
>
> 디버거가 실행되고 있는 동안 host가 인터넷에 연결되어 있다면 심볼은 디버거에서 `.symfix` 명령어로 자동적으로 불러올 수 있다. 그리고 `.reload`로 모듈을 reload하여 심볼을 로드시킨다.
>
> 사용자 모드 디버깅을 하는 경우, target 어플리케이션에 대한 심볼이 필요하다 (비주얼 스튜디오에서는 `.pdb`가 심볼 파일이다). 커널 모드 디버깅에서는 디버깅되는 드라이버의 심볼 + 윈도우 공용 심볼이 필요하다.

그러므로 어플리케이션 심볼 파일이 있는 경로를 심볼 경로에 추가해야 한다. 만일 `.pdb` 파일이 `c:\mysymbols` 경로이 있다면...

```
set _NT_SYMBOL_PATH=c:\mysymbols
```

여기서 공용 윈도우 심볼 스토어를 추가하고 싶다면...

```
set _NT_SYMBOL_PATH=c:\mysymbols;srv*c:\mycache*https://msdl.microsoft.com/download/symbols
```
* `srv*`: 심볼 서버에 있는 기본 심볼 스토어로부터 심볼을 가져온다.
* `srv*c:\mycache`: 심볼 서버에 있는 기본 심볼 스토어로부터 심볼을 `c:\mycache`로 가져온다.
* `srv*c:\mycache*https://msdl.microsoft.com/download/symbols`: https://msdl.microsoft.com/download/symbols 서버에 있는 심볼 스토어로부터 심볼을 `c:\mycache`로 가져온다.

정밀한 결과를 위해 BSTR caching을 비활성해야 한다. 그러기 위해서는 환경 변수 `set OANOCACHE=1`로 설정한다. trace 될 어플리케이션을 실행하기 전에 설정되어야 한다.

만일 서비스로부터의 할당을 trace 해야 한다면 `OANOCACHE`를 시스템 환경변수로 설정하고 윈도우를 재시작하여 적용시켜야 한다.

----

위의 준비를 마쳤으면 UMDH로 프로세스의 heap 할당 정보를 캡처할 수 있다. 그러기 위해서는 다음 절차를 따른다:

1. 진단하려는 프로세스의 ID (aka. PID)를 확인한다; 작업관리자에서 볼 수 있음.
2. 콘솔창에서 다음을 입력; 만일 pid: 51448 이고 저장할 파일을 `log1.txt`라고 하면...
```
umdh -p:51448 -f:log1.txt
```
3. 이를 메모장같은 프로그램으로 연다. 해당 파일은 각 heap 할당에 대한 call stack, 각 heap 할당에 대한 call stack으로부터 생성된 할당 개수 및 바이트 크기가 들어있다.
> call stack이란, 컴퓨터 프로그램의 활동중인 서브루틴(특정 작업을 수행하는 일련의 프로그램 명령) 정보를 담고 있는 stack 데이터 구조이다.
4. 메모리 누수 진단이 주목적이기 때문에, 로그 파일 하나로는 충분하지 않다. 다른 시간대에서의 로그를 비교하여 어느 부분의 할당이 커지고 있는지 확인해야 한다.
    
    UMDH는 두 로그를 비교하여 각각에 대한 할당 크기 변화를 보여줄 수 있다. 비교 데이터를 `>` 연산자를 통해 텍스트 파일에 저장할 수 있다. `-d` 옵션을 붙이면 바이트와 할당 개수를 십육진수에서 십진수로 변환하여 나타낸다.

    ```
    umdh log1.txt log2.txt > logcompare.txt -d
    ```

5. 로그 비교 텍스트 파일을 열면 다음과 같은 내용을 볼 수 있다.
```
+  131072 ( 262144 - 131072)      4 allocs	BackTraceF9A156DA
+       2 (      4 -      2)	BackTraceF9A156DA	allocations
```
UMDH 로그 파일에서 "BackTrace"로 레이블된 각 call stack에는 두 로그에 대한 비교 내용이 있다. 그 중 위는 할당 바이트이고 아래는 할당 개수를 가리킨다. `log1.txt`는 131072이었던게 `log2.txt`에서는 262144으로 해당 call stack에 대해서는 +131072로 증가를 보여준다.

그리고 맨 아래...
```
Total decrease == 487210 requested +   1654 overhead = 488864
```
총 메모리이다.

6. 해당 BackTrace가 무엇인지 확인하려면 `log1.txt` 혹은 `log2.txt` 둘 중 하나에서 찾아봐야 한다. `BackTraceF9A156DA` 쪽을 들여다보면
```
00005320 bytes in 0x14 allocations (@ 0x00000428) by: BackTraceF9A156DA
ntdll!RtlDebugAllocateHeap+0x000000FD
ntdll!RtlAllocateHeapSlowly+0x0000005A
ntdll!RtlAllocateHeap+0x00000808
MyApp!_heap_alloc_base+0x00000069
MyApp!_heap_alloc_dbg+0x000001A2
MyApp!_nh_malloc_dbg+0x00000023
MyApp!_nh_malloc+0x00000016
MyApp!operator new+0x0000000E
MyApp!DisplayMyGraphics+0x0000001E
MyApp!main+0x0000002C
MyApp!mainCRTStartup+0x000000FC
KERNEL32!BaseProcessStart+0x0000003D 
```
해당 UMDH 출력은 해당 call stack으로부터 총 0x5320 바이트가 할당되었으며, 이는 각각 0x428 바이트 크기의 0x14개 heap 할당이다. 그 밑에는 해당 call stack, 즉 서브루틴이 있는데 (밑에서 부터 시작) `DisplayMyGraphics`가 `new` 연산자로 메모리를 할당하고 이는 Visual C++ 런타임 라이브러리의 `malloc`을 호출하여 heap 메모리를 확보한다.

이 중에서 어느 부분이 소스 코드에 명시되어있는지 판단한다 (여기에서는 아마 `new`일 것이며, 이 연산자 자체가 `malloc`을 사용하기 때문이다). 즉, `DisplayMyGraphics`의 `new`로부터 할당된 게 free되지 않고 있다고 진단된다.
