---
layout: docs
language: ko
category: 운영체제
title: 메모리
meta: Memory
order: 0x41
---
# 메모리: 기초
> *참조: [Microsoft Docs - Memory Management](https://docs.microsoft.com/en-us/windows/win32/memory/memory-management)*

모든 프로세스의 스레드는 이 가상 주소 공간에 접근할 수 있으나 다른 프로세스의 가상 주소 공간에는 접근할 수 없다. 이를 통해 한 프로세스가 다른 프로세스에 영향을 주는 것을 방지한다.

## 가상 주소 공간
[가상 주소 공간](https://ko.wikipedia.org/wiki/가상_주소_공간)(virtual address space; VAS)는 각 프로세스마다 주어지는 private 가상 메모리 주소의 집합이다. 가상 주소는 메모리에 소재하는 프로세스의 실제 물리적 위치를 반영하지 않는다; 가상 주소를 대응하는 물리 메모리 주소에 매핑하는 페이지 테이블(page table)로부터 구축된 주소 공간이다. 가상 주소 공간은 별도로 공유하지 않는 이상, 타 프로세스에서 접근할 수 없으므로 고립(isolated)되었다고 표현한다.

![가상 주소 공간과 물리 메모리의 관계<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Virtual_address_space_and_physical_address_space_relationship.svg">위키미디어</a></i></sub>](/images/docs/memory/memory_virtual_addressspace.png)

> 메모리를 설명하는데 있어 용어의 혼돈을 방지하기 위해 다음과 같이 구별한다.
> 
> * [페이지](https://ko.wikipedia.org/wiki/페이징)(page)란, 일정한 크기로 나뉘어진 운영체제에서 관리하는 가장 작은 단위의 가상 메모리이다. 페이지의 크기는 호스트 시스템마다 다르며 x86 컴퓨터의 경우에는 4KB이다.
>
> * [페이지 프레임](https://ko.wikipedia.org/wiki/프레임_(컴퓨터_과학))(page frame), 일명 프레임(frame)은 가상 주소 공간의 페이지와 매핑되어 운영체제에서 관리하는 가장 작은 contiguous한 물리 메모리 블록이다. 페이지와 동일한 크기를 갖는다.

가상 주소 공간은 크게 두 파티션으로 나뉘어진다: 프로세스가 사용할 영역(aka. paged)과 시스템을 위해 확보된 영역(aka. nonpaged)이다. 이는 차후 [메모리 풀](#메모리-메모리-풀)에서 다시 한 번 소개한다.

### 메모리 관리 장치
[메모리 관리 장치](https://ko.wikipedia.org/wiki/메모리_관리_장치)(Memory management unit; MMU)는 컴퓨터 하드웨어이며, 내장되어 있는 페이지 테이블로부터 가상 메모리 주소를 물리 메모리 주소로 변환하는 역할을 주로 담당한다.

### 페이징
[페이징](https://ko.wikipedia.org/wiki/페이징)(paginig)은 일부 가상 주소 공간 페이지의 물리 메모리(예. RAM) 페이지 프레임과 저장장치(예. HDD 혹은 SSD) 페이지파일 간 상호변환을 가리키며, 메모리 관리의 유연성을 최대화하는 방법 중 하나이다.

> 페이지파일(pagefile) 명칭은 가상 메모리의 페이지가 파일을 저장하는 저장장치에서 위치하기 때문에 이 두 용어를 통합한 것으로 보인다; 즉, "페이지를 나타내는 파일"을 의미한다.

* Page out
    : 프로세스에서 사용하는 가상 주소 공간이 컴퓨터에서 사용할 수 있는 총 물리 메모리 용량보다 커서 가장 오랫동안 사용되지 않은 물리 메모리의 페이지 프레임이 저장장치의 페이지파일로 이동하는 현상
* Page in
    : 실행 혹은 참조되어야 할 데이터가 현재 저장장치의 페이지파일 형태로 있어 프로세서가 처리할 수 있도록 저장장치의 페이지파일이 물리 메모리의 페이지 프레임으로 이동하는 현상

여기에서 확인할 수 있는 내용은 가상 주소 공간은 실질적으로 두 하드웨어로 구성되어 있다: (1) 물리 메모리와 (2) 저장장치이다. 그리고 가상 주소 공간 중에서 물리 메모리에 연동된 페이지들이 프로세스 실행에 직접 가담하므로 working set이라고 부른다.

## Working Set
Working set은 프로세스 가상 주소 공간의 메모리 중에서 물리 메모리에 연동된 페이징될 수 있는 메모리(pageable memory) 집합이다. AWE 혹은 커널 관련 등의 페이징될 수 없는 메모리(nonpageable memory)는 항상 물리 메모리에 머물기 때문에 working set 분류가 필요없어 제외된다.

프로세스 working set의 일부 페이지는 타 프로세스와 공유될 수 있는데, 만일 하나의 프로세스가 공유된 페이지를 제거한다 하더라도 타 프로세스에는 영향을 주지 않는다([Copy-on-write](#copy-on-write) 참조). 단, 공유된 페이지가 모든 프로세스로부터 제거되면 페이지는 transition 된다.

> 여기서 *transition*은 [페이지 캐싱]((https://en.wikipedia.org/wiki/Page_cache))을 의미하며, 사용되지 않는 페이지를 빠른 접근과 성능 향상을 꾀하여 저장장치의 페이지파일이 아닌 사용되지 않는 메인 메모리에 cached 된 것을 가리킨다. 그러면 메모리가 추가로 필요한 쓰레드를 위해 재빨리 repurpose되어 활용될 수 있다.

만일 transition 페이지가 마지막으로 저장장치에 write 되었을 때와 내용이 다르면 (즉, 페이지가 "dirty" 할 때), 해당 transition 페이지는 repurpose 되기 전에 먼저 backing store에 write 되어야 한다. 시스템은 dirty transition 페이지를 발견한 즉시 backing store에 write 하도록 한다.

## 페이지 부재
[페이지 부재](https://ko.wikipedia.org/wiki/페이지_부재)(Page fault)는 프로세스가 working set가 아닌 물리 메모리 프레임을 참조하면 발생하는 예외(exception)이다. 그러나 page fault는 가상 메모리를 활용하는 운영체제에서 매우 흔히 발생하는 현상이며, 프로그램에서 활용할 수 있는 메모리 용량을 확보하는데 필요하다. 만일 유효한(즉, 해결이 가능한) page fault라면 운영체제는 가상 주소 공간의 페이지를 할당되지 않은 물리 메모리의 프레임으로 새로이 연동시켜 매핑 정보를 업데이트한다.

### Hard page fault
일명 major page fault는 working set 페이지가 물리 메모리가 아닌 저장장치의 페이지파일을 참조하는 경우이다. 페이지의 backing store로부터 페이지 내용(페이지파일 혹은 프로세스로부터 생성된 메모리 맵 파일)을 읽어서만 문제를 해결할 수 있다.
    
> Backing store("backing" as "back-up"; store = memory)이란, 저장장치 중에서 페이징 정보가 저장되는 공간이다.

### Soft page fault
일명 minor page fault는 working set 페이지가 참조하려는 프레임이 물리 메모리에 있으나 [MMU](#메모리-관리-장치)에서는 참조할 수 없다고 판단하여 발생하는 경우이다. Backing store가 필요없이 물리 메모리 내에서 해결되므로 hard page fault보다 더 빠르고 리소스 소모가 적다.

다음은 soft page fault가 발생할 수 있는 몇 가지 원인이다.

* 참조하려는 물리 메모리 프레임이 다른 프로세스의 working set로 사용 중
* demand-zero fault; 즉, read/write로 물리 메모리를 처음 참조할 때 새로운 프레임을 건네주는 과정
* Transition으로 인해 물리 메모리에 cached 된 페이지

## 페이지 상태
프로세스의 가상 주소 공간에 있는 페이지는 다음 상태 중 하나에 속한다. 여기서 다루는 페이지 상태는 모두 가상 주소 공간에 있는 메모리를 가리킨다.

* Free
    : 가상 주소 공간 중에서 reserved 혹은 committed 되지 않은 상태이다.<br/>
    *프로세스는 해당 페이지를 접근할 수 없으며, 접근 시 access violation 예외가 발생한다. reserved나 committed, 혹은 reserved이면서 committed 상태 페이지로 전환될 수 있다.*

* Reserved
    : 가상 주소 공간에서 나중에 사용하기 위해 확보되었으나, 아직 RAM에 연동되지 않은 상태이다.<br/>
    *비록 가상 주소 공간이라도 물리 메모리가 관여하지 않으므로 프로세스는 해당 페이지를 접근할 수 없으며, 접근 시 access violation 예외가 발생한다. 오로지 committed 상태로만 전환될 수 있다.*

    > Reserved의 이러한 특징으로 인해, 비록 가상 주소 공간에서 페이지를 확보하여도 연동될 실제 물리 메모리의 용량이 부족하면 committed 되지 못할 수 있다.

* Committed
    : 가상 주소 공간에서 총 RAM 및 저장장치 페이지파일 크기만큼 할당될 수 있는 장전된 메모리이다.<br/>
    *프로세스는 페이지는 접근할 수 있다. 시스템은 각 committed 페이지에 처음으로 read 혹은 write하려고 할 때만 초기화하여 물리 메모리에 불러온다. 프로세스가 종료되면 시스템에서 committed 된 메모리를 release(즉, free로 전환)한다.*

## 데이터 실행 방지
데이터 실행 방지(Data Execution Prevention; DEP)는 하나 이상의 페이지를 실행 불가한 메모리로 표시하는 시스템-레벨 메모리 보호 기능이다. DEP로 표시된 영역의 메모리에서는 코드를 실행할 수 없어 기본 힙, 스택, 또는 메모리 풀과 같은 데이터 영역의 페이지에서 코드가 실행되는 것을 방지함으로써 buffer overrun을 남용을 어렵게 만든다. 만일 DEP 메모리에서 코드를 실행하려고 시도하면 accession violation이 발생하여 에외처리가 되지 않는 이상 프로세스는 종료된다.

DEP는 모든 남용으로부터 포괄적인 보호를 제공하지 않는다. 어플리케이션의 안전성은 그 목적을 위해 제작된 소프트웨어 및 도구를 통해 확보해야 한다. 

> 일부 어플리케이션 기능은 DEP와 호환되지 않으며 제대로 동작하기 위해 업데이트가 반드시 필요하다.

## 메모리 보호
프로세스가 소유하는 메모리는 private 가상 주소 공간으로 암묵적으로 보호되었으며, 윈도우 운영체제는 가상 메모리 하드웨어를 통해서도 메모리 보호를 지원한다. 프로세스에 따라 메모리 보호가 어떻게 적용되는지는 가지각색이다: 예를 들어 프로세스의 코드 영역 메모리를 읽기 전용으로 전환하면 사용자 모드 스레드에 의한 변경으로부터 보호받을 수 있다.

### Copy-on-write
[Copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write) 보호는 여러 프로세스가 물리 메모리에 각자의 가상 주소 공간을 매핑하여 공유할 수 있도록 하는 리소스 관리 최적화 기법이다. 비록 공유되던 페이지 하나가 프로세스로 인해 변경되어도, 나머지 페이지의 매핑 정보는 그대로 유지하여 시스템의 물리 메모리와 시간을 절약하는데 기여한다. 대신에 write로 변경된 내용만 물리 메모리의 타 페이지에 복사되어 매핑 정보를 업데이트한다.

> 이러한 기법으로부터 "write 되었을 시 복사(copy on write)"의 명칭이 유래된다.

다음은 마이크로소프트 문서에서 제공된 예시 중 하나이다: 프로세스 1과 프로세스 2의 가상 메모리 페이지 1, 2, 3은 물리 메모리의 페이지 A, B, C에 매핑되어 공유한다.

![Copy-on-write 보호 예시 1<sub><i>출처: <a href="https://docs.microsoft.com/en-us/windows/win32/memory/memory-protection">Microsoft Docs</a></i></sub>](/images/docs/memory/memory_protect_copyonwrite1.png)

만일 프로세스 1이 가상 주소 공간의 페이지 2에 데이터를 변경할 시, 이에 매핑된 물리 메모리 페이지의 내용은 타 페이지로 복사되고 프로세스 1의 매핑 정보가 업데이트 된다. 그러면 두 프로세스의 가상 주소 공간 페이지 2는 별도의 물리 메모리 페이지를 갖게 된다. 그러므로 하나의 프로세스가 변경한 내용은 페이지를 공유하는 타 프로세스에서 업데이트된 내용을 볼 수 없다.

![Copy-on-write 보호 예시 2<sub><i>출처: <a href="https://docs.microsoft.com/en-us/windows/win32/memory/memory-protection">Microsoft Docs</a></i></sub>](/images/docs/memory/memory_protect_copyonwrite2.png)

# 메모리: 메모리 풀
> [풀](https://en.wikipedia.org/wiki/Pool_(computer_science))(pool)이란, 리소스 관리 목적에 있어서 데이터나 객체를 미리 한군데에 모아둔 것이다.

메모리 풀(Memory pools)이란, 사용할 수 있는 메모리들을 미리 한군데 모아두어 관리한다. 관리하는 메모리 종류에 따라 두 가지의 메모리 풀로 나뉘어진다.

* 페이지 불가한 메모리 풀 (Nonpaged Pool)
    : 할당된 커널 객체(예. 파일, 이벤트, 파이프 등)가 물리 메모리에 머무르도록 보장하는 가상 메모리

* 페이지 가능한 메모리 풀 (Paged pool)
    : 페이징이 가능한 가상 메모리 (예. 커널 객체 핸들 및 사용자 모드 등)

# 메모리: 메모리 함수
프로세스의 가상 주소 공간에 메모리를 사용자 모드에서 직접 관리할 수 있는 함수들은 몇 가지의 종류가 존재한다. 이들은 종류에 따라 장단점이 있지만, 가상 주소 공간 중에서 [힙](https://ko.wikipedia.org/wiki/동적_메모리_할당#힙_영역)(heap) 영역의 메모리를 다루는 공통점을 갖는다. 본 장에서는 가상 주소 공간에 사용되는 메모리 함수 종류를 소개한다.

> 힙 영역은 [힙 자료구조](https://ko.wikipedia.org/wiki/힙_(자료_구조))와 전혀 상관이 없으며, 순수히 특정 목적을 갖는 RAM의 메모리 공간을 지칭하는 용어이다.

## 가상 메모리 함수
가상 메모리(virtual memory) 함수는 프로세스가 가상 주소 공간에 있는 페이지 상태를 변경하거나 결정하도록 하는 저급 메모리 관리 함수이다. 다양한 메모리 관리 옵션을 설정할 수 있어 다른 메모리 함수의 기반이 되지만, [granularity](https://en.wikipedia.org/wiki/Granularity)로 인해 할당하는데 더 많은 리소스 소모가 요구된다.

> 가상 주소 공간(virtual address space)와 가상 메모리(virtual memory)는 엄연히 다른 존재이다.
>
> * 가상 주소 공간은 프로세스가 실행될 때 시스템에서 제공하는 고립된 "주소 공간"이다.
>
> * 가상 메모리는 주소 공간에서 `VirtualAlloc()` 함수를 통해 할당된 "메모리"이다.

다음과 같은 동작을 수행할 수 있다.

* `VirtualAlloc()`
    : 가상 주소 공간에 가상 메모리를 할당한다.

        * Free → Reserved
        * Reserved → Committed
        * Free → Reserved & Committed

* `VirtualFree()`
    : 가상 주소 공간에 가상 메모리 할당을 해제한다.

        * Committed → Reserved
        * Reserved → Free
        * Committed & Reserved → Free

* `VirtualQuery()`
    : 가상 주소 공간의 가상 메모리 페이지 정보를 반환한다.

* `VirtualLock()`
    : 가상 주소 공간의 가상 메모리 페이지를 물리 메모리에 고정시킨다; 즉, page out이 되는 것을 방지한다.

* `VirtualProtect()`
    : 가상 주소 공간의 가상 메모리 페이지 접근 권한을 변경한다.

## 힙 메모리 함수
힙 메모리 함수는 시스템에서 제공하는 기본적인 물리 메모리의 힙 영역과 각 가상 공간 주소가 갖는 private 힙 영역 메모리를 다루는 함수이다.

> 만일 어플리케이션이 힙 영역에 자주 할당을 하면 private 힙 영역을 사용하는 게 성능 향상에 도움을 줄 수 있다.

Private 힙 영역을 다룰 때는 가상 메모리 함수와 다를 바가 없으나 조금 더 간략하다. 그러나 힙 메모리 함수로 한 번 할당된 메모리는 다른 주소로 이동하거나 크기를 변경할 수 없다.

* `HeapAlloc()`
    :

* `HeapFree()`
    :

* `HeapCreate()`
    :

* `HeapDestroy()`
    :

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

## 전역 및 지역 함수
16-비트 코드 포티 또는 16-비트 윈도우와 호환되는 소스 코드 관리를 위한 것! 32-비트부터는 Heap 함수의 wrapper에 불과하다.

## C 라이브러리 함수
어플리케이션은 C/C++ 메모리 관리 기능을 안전하게 사용할 수 있다. C 언어는 16비트 윈도우에서 겪었던 잠재적 위험이 존재하지 않는다. 그리고 시스템은 가상주소에 영향을 주지 않으면서 물리 메모리의 페이지를 이동시킬 수 있어 메모리 관리는 더 이상 문제가 되지 않는다. 하지만 가상메모리 함수는 C 런타임 라이브러리가 제공하지 않는 기능들을 제공한다.

## 메모리 할당 함수 비교
`HeapAlloc`, `GlobalAlloc`, 그리고 `LocalAlloc`은 사실상 같은 heap에 메모리를 할당하지만, 약간의 기능적 차이가 있다. `HeapAlloc`은 할당이 불가하면 exception이 발생하지만, `GlobalAlloc` 및 `LocalAlloc`은 exception이 발생하지 않는다. 그리고 `GlobalAlloc` 및 `LocalAlloc`은 핸들 변경 없이 재할당이 가능한, 메모리 이동이 불가한 `HeapAlloc`이 불가능한다. 그리고 `GlobalAlloc`, 그리고 `LocalAlloc`는 `HeapAlloc`의 wrapper이므로 overhead가 더 크다.

비록 같은 Heap 메모리에 할당하지만 할당 매커니즘에 차이가 있으므로 `HeapAlloc` -> `HeapFree`, `GlobalAlloc` -> `GlobalFree`, `LocalAlloc` -> `LocalFree`로 free 되어야 한다.

`malloc` 함수는 런타임에 의존하고, `new` 연산자는 컴파일러 및 언어에 의존한다.

# 메모리: 파일 매핑
파일 매핑은 (저장장치에 있는) 파일 내용과 프로세스의 가상 주소 공간의 연관성을 가리킨다. 여기서 파일은 페이지 파일을 가리키는 게 아니라, 그냥 일반적인 텍스트 파일과 같은 자료 파일이다.

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

# 메모리: 덤프
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
