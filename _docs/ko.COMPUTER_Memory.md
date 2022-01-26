---
layout: docs
category: 운영체제
title: 메모리
slug: ko.Memory
order: 0x61
---
# 메모리: 페이지
> *참조: [Microsoft Docs - Memory Management](https://docs.microsoft.com/en-us/windows/win32/memory/memory-management)*

본 장은 운영체제에서 [프로세스](/docs/ko.Process)의 메모리를 관리하는데 가장 핵심이 되는 가상 주소 공간과 페이지에 대하여 소개한다.

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
[페이징](https://ko.wikipedia.org/wiki/페이징)(paging)은 일부 가상 주소 공간 페이지의 물리 메모리(예. RAM) 페이지 프레임과 저장장치(예. HDD 혹은 SSD) 페이지 파일 간 상호변환을 가리키며, 메모리 관리의 유연성을 최대화하는 방법 중 하나이다.

> 페이지 파일(page file) 명칭은 가상 메모리의 페이지가 파일을 저장하는 저장장치에서 위치하기 때문에 이 두 용어를 통합한 것으로 보인다; 즉, "페이지를 나타내는 파일"을 의미한다.

* Page out
    : 프로세스에서 사용하는 가상 주소 공간이 컴퓨터에서 사용할 수 있는 총 물리 메모리 용량보다 커서 가장 오랫동안 사용되지 않은 물리 메모리의 페이지 프레임이 저장장치의 페이지 파일로 이동하는 현상
* Page in
    : 실행 혹은 참조되어야 할 데이터가 현재 저장장치의 페이지 파일 형태로 있어 프로세서가 처리할 수 있도록 저장장치의 페이지 파일이 물리 메모리의 페이지 프레임으로 이동하는 현상

여기에서 확인할 수 있는 내용은 가상 주소 공간은 실질적으로 두 하드웨어로 구성되어 있다: (1) 물리 메모리와 (2) 저장장치이다. 그리고 가상 주소 공간 중에서 물리 메모리에 연동된 페이지들이 프로세스 실행에 직접 가담하므로 working set이라고 부른다.

## Working Set
Working set은 프로세스 가상 주소 공간의 메모리 중에서 물리 메모리에 연동된 페이징될 수 있는 메모리(pageable memory) 집합이다. AWE 혹은 커널 관련 등의 페이징될 수 없는 메모리(nonpageable memory)는 항상 물리 메모리에 머물기 때문에 working set 분류가 필요없어 제외된다.

프로세스 working set의 일부 페이지는 타 프로세스와 공유될 수 있는데, 만일 하나의 프로세스가 공유된 페이지를 제거한다 하더라도 타 프로세스에는 영향을 주지 않는다([Copy-on-write](#copy-on-write) 참조). 단, 공유된 페이지가 모든 프로세스로부터 제거되면 페이지는 transition 된다.

> 여기서 *transition*은 [페이지 캐싱]((https://en.wikipedia.org/wiki/Page_cache))을 의미하며, 사용되지 않는 페이지를 빠른 접근과 성능 향상을 꾀하여 저장장치의 페이지 파일이 아닌 사용되지 않는 메인 메모리에 cached 된 것을 가리킨다. 그러면 메모리가 추가로 필요한 쓰레드를 위해 재빨리 repurpose되어 활용될 수 있다.

만일 transition 페이지가 마지막으로 저장장치에 write 되었을 때와 내용이 다르면 (즉, 페이지가 "dirty" 할 때), 해당 transition 페이지는 repurpose 되기 전에 먼저 backing store에 write 되어야 한다. 시스템은 dirty transition 페이지를 발견한 즉시 backing store에 write 하도록 한다.

## 페이지 부재
[페이지 부재](https://ko.wikipedia.org/wiki/페이지_부재)(Page fault)는 프로세스가 working set가 아닌 물리 메모리 프레임을 참조하면 발생하는 예외(exception)이다. 그러나 page fault는 가상 메모리를 활용하는 운영체제에서 매우 흔히 발생하는 현상이며, 프로그램에서 활용할 수 있는 메모리 용량을 확보하는데 필요하다. 만일 유효한(즉, 해결이 가능한) page fault라면 운영체제는 가상 주소 공간의 페이지를 할당되지 않은 물리 메모리의 프레임으로 새로이 연동시켜 매핑 정보를 업데이트한다.

### Hard page fault
일명 major page fault는 working set 페이지가 물리 메모리가 아닌 저장장치의 페이지 파일을 참조하는 경우이다. 페이지의 backing store로부터 페이지 내용(페이지 파일 혹은 프로세스로부터 생성된 메모리 맵 파일)을 읽어서만 문제를 해결할 수 있다.
    
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
    : 가상 주소 공간에서 총 RAM 및 저장장치 페이지 파일 크기만큼 할당될 수 있는 장전된 메모리이다.<br/>
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
가상 메모리(virtual memory) 함수는 프로세스가 가상 주소 공간에 있는 페이지 상태를 변경하거나 결정하도록 하는 *윈도우 OS 전용* 저급 메모리 관리 함수이다. 다양한 메모리 관리 옵션을 설정할 수 있어 다른 메모리 함수의 기반이 되지만, [granularity](https://en.wikipedia.org/wiki/Granularity)로 인해 할당하는데 더 많은 리소스 소모가 요구된다.

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
힙 메모리 함수는 각 프로세스 가상 주소 공간에 기본적으로 주어지는 힙 영역의 메모리를 다루는데 특화된 *윈도우 OS 전용* 메모리 함수이다. 힙 메모리 함수는 프로세스 기본 힙 영역 외에도 private 힙 영역 생성 및 관리에도 기여한다.

> Private 힙이란, 프로세스의 기본 힙 영역 중에서 스레드의 접근을 [뮤텍스](https://ko.wikipedia.org/wiki/락_(컴퓨터_과학))(mutex)처럼 배타적으로 허용할 수 있는 *윈도우 OS 전용* 힙 메모리를 가리킨다. 두 개 이상의 스레드가 동시에 접근하여 발생할 수 있는 데이터 손상을 방지할 수 있는데, 이를 접근 일련화(serialized access)라고 부른다. 힙 메모리를 자주 할당한다면 prviate 힙을 사용하는게 성능 향상에 도음이 되지만, 해당 프로세스에서만 접근할 수 있다.

비록 가상 메모리 함수로부터 기반하였으나 메모리 함수 종류에 따라 메모리 할당 매커니즘 차이가 있으므로 혼용하여 사용하는 것은 권장되지 않는다. 그 중에서 힙 메모리은 매커니즘에 의해 할당한 메모리를 다른 주소로 이동할 수 없다. 그리고 한 스레드에서 힙 메모리 할당으로 반환된 핸들은 해당 스레드에서만 처리하는 것이 바람직하다.

* `HeapAlloc()`
    : 가상 주소 공간에 힙 메모리를 할당한다.

* `HeapFree()`
    : 가상 주소 공간에 힙 메모리 할당을 해제한다.

* `GetProcessHeap()`
    : 프로세스 가상 주소 공간의 기본 힙 메모리 영역에 대한 핸들을 반환한다.

* `HeapCreate()`
    : 가상 주소 공간에 private 힙 메모리 영역을 생성 및 핸들을 반환한다.

* `HeapDestroy()`
    : 가상 주소 공간의 private 힙 메모리 영역을 decommit 및 release, 그리고 핸들을 닫는다.

### 전역 및 지역 메모리 함수
전역 메모리 함수(예. `GlobalAlloc()`, `GlobalAlloc()` 등) 및 지역 메모리 함수(예. `LocalAlloc()`, `LocalFree()` 등)는 32비트 시스템에서 전부 [힙 메모리 함수](#힙-메모리-함수)로 대체되었으며, 이전 16비트 코드를 이식하거나 16비트 시스템과 호환을 지원하는 코드를 관리하는데 사용된다. 32비트 시스템에서 사용할 수 있으나 힙 메모리 함수의 wrapper이기 때문에 overhead로 인해 성능 효율이 낮다.

## C/C++ 라이브러리 함수
CRL 메모리 함수(예. `malloc()`, `free()` 등) 및 C++의 메모리 연산자(예. `new`, `delete` 등)는 이전 16비트 시스템에서 잠재적 위험이 존재하였다. 현재는 물리 메모리의 프레임 이동이 가상 주소 공간에 영향을 주지 않고, near 및 far 포인터의 구분이 사라지면서 더이상 문제되지 않는다. 단, 두 이들은 각각 런타임 라이브러리 혹은 프로그래밍 언어에 의존해야 하며 가상 메모리에 비해 설정이 매우 제한적이다.

# 메모리: 파일 매핑
[파일 매핑](https://ko.wikipedia.org/wiki/메모리_맵_파일)(file mapping)은 저장장치의 파일을 가상 주소 공간의 페이지 바이트마다 직접적으로 연동시키는 것이다. 프로세스는 연동된 페이지로부터 매핑된 파일의 데이터를 읽어오거나 작성하는 게 가능하다. 저장장치의 파일 뿐만 아니라 장치 및 운영체제 리소스(예. 페이지 파일)도 메모리에 매핑될 수 있다.

![파일 매핑 개략도<sub><i>출처: <a href="https://docs.microsoft.com/en-us/windows/win32/memory/file-mapping">Microsoft Docs</a></i></sub>](/images/docs/memory/memory_filemapping_overview.png)

파일 매핑의 역할이 [`fstream`](https://en.cppreference.com/w/cpp/header/fstream)이나 [`CreateFile()`](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea) 등의 파일 입출력과 매우 유사하다고 느낄 수 있지만, 아래의 두 이유로 파일 매핑이 훨씬 더 빠른 성능을 보여준다.

* 간단한 프로그램 로컬 메모리 접근 및 변경이 파일 입출력을 위한 시스템 호출(system call)보다 월등히 빠르다.
* 실제로 매핑된 메모리 영역이 커널 cache라서 파일 데이터를 물리 메모리로 복사할 필요가 없다.

그러나 파일 매핑은 상대적으로 [soft page fault](#soft-page-fault)에 취약하고, 페이지 크기에 따른 메모리 낭비가 발생할 수 있는 등의 단점이 존재한다. 그래도 종합적으로 보면 물리 메모리에 데이터를 복사할 필요 없이 곧바로 메모리에 접근하여 작업할 수 있어 대용량 파일에 매우 효율적이다.

## 파일 매핑 객체
파일 매핑 객체(file mapping object), 일명 섹션 객체(section object)는 해당 파일에 대한 메모리 매핑 정보를 관리하는 객체이다. `CreateFileMapping()` 함수에 파일 핸들을 전달하면 해당 파일에 대한 파일 매핑 객체가 생성 및 핸들을 반환한다. 만일 파일 매핑 객체가 이미 존재한다면 `ERROR_ALREADY_EXITS` 오류 코드가 설정되면서도 기존하는 매핑 객체 핸들을 반환한다.

> 파일 핸들은 `CreateFile()` 함수로부터 반환되는데, *dwShareMode* 매개변수를 0으로 지정하여 그 외의 프로세스가 접근하는 것을 방지할 수 있다. 파일 매핑 객체가 더이상 필요로 하지 않을 때까지 계속 열어두어야 한다.

`CreateFileMapping()` 함수로 객체에 이름을 지을 수 있으며, 매핑될 파일 바이트 크기 및 read/write 권한을 지정할 수도 있다. 매핑될 파일 바이트 크기는 결국 매핑으로부터 파일을 얼만큼 "볼 수" 있는지를 결정한다. 파일 매핑은 물리 메모리를 오로지 reserve만 하므로 매핑 크기로 인해 시스템 리소스를 더 소모하지 않는다. 그러므로 파일 전체를 접근할 의도가 없더라도 혹시나 하는 경우를 대비해 최소한 파일 총 크기만큼은 지정하는 것을 권장한다. 만일 객체가 파일 크기보다 더 크게 매핑을 한다면 `CreateFileMapping()` 함수가 핸들을 반환하기 전에 시스템이 파일 크기를 부풀린다.

## 파일 뷰
파일 뷰(file view)는 프로세스가 매핑 정보로부터 파일 내용을 접근하기 위해 사용하는 가상 주소 공간의 페이지이다. `MapViewOfFile()` 혹은 `MapViewOfFileEx()` 함수에 파일 매핑 객체의 핸들을 전달하여 매핑된 파일을 접근할 뷰가 프로세스의 가상 주소 공간에 생성 및 포인터를 반환한다. 파일 매핑 객체으로부터 한 개 이상의 파일 뷰를 생성할 수 있으며, 이들은 매핑된 저장장치의 파일과 동일한 복사본을 담는다.

> 서로 다른 프로세스가 동일한 파일 매핑 객체로부터 각자 파일 뷰를 생성한다면, 해당 프로세스들은 하나의 파일을 공유하는 셈이 된다. 모든 프로세스에서 파일 매핑 객체의 핸들을 닫을 때까지 객체는 파괴되지 않는다.

파일 뷰가 생성될 때부터 파일 매핑 객체로부터 reserved 된 메모리가 committed 되어 메모리 리소스가 소모된다.

`MapViewOfFile()` 혹은 `MapViewOfFileEx()` 함수로부터 반환된 포인터를 역참조(dereference)하여 파일 데이터를 read 및 write 할 수 있다. 단, 파일 뷰를 통해 데이터를 write 할 때 곧바로 파일로 전송되는 게 아니라, 전반적인 성능 향상을 위해 시스템에 의해 cached 된다. 프로세스는 이러한 입출력 특성을 `FlushViewOfFile()` 함수를 사용하여 시스템에서 강제로 write 된 데이터를 곧바로 전송하도록 할 수 있다.

파일 매핑 객체를 파괴하기 전에 반드시 각 파일 뷰마다 `UnmapViewOfFile()` 함수로 연결을 끊어야 한다. 그 이유는 파일 매핑 객체의 핸들은 unmap으로 파일 뷰의 연결을 끊지 않아도 닫을 수 있으며, 이는 결과적으로 메모리 누수로 이어지기 때문이다. Unmap 된 메모리는 reserved 상태로 가상 주소 공간의 working set으로부터 제거된다. 그렇지만 시스템으로 cached 된 write 데이터가 잔여할 수 있으므로 데이터 손실을 방지하는 차원에서 `FlushViewOfFile()` 함수로 데이터를 확실하게 파일로 전송해 주도록 한다.

### 메모리 공유
파일 매핑의 특성을 활용하여 메모리 공유 형태의 프로세스 간 통신(inter-process communication; IPC)를 구현할 수 있다. 파일 매핑 객체를 생성할 때 파일 핸들 대신에 `INVALID_HANDLE_VALUE`을 전달하고 공유할 메모리를 0보다 큰 정수로 지정하면 된다. 그러면 파일 매핑에서 파일만 없을 뿐, 두 프로세스는 파일 매핑 객체로 메모리를 공유하는 구조를 갖추게 된다.

# 메모리: 덤프
> *참조: [Microsoft Docs - Finding a Memory Leak](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/finding-a-memory-leak)*

[메모리 덤프](https://ko.wikipedia.org/wiki/코어_덤프)(memory dump)는 RAM 물리 메모리에서 일어나는 모든 데이터를 한꺼번에 저장장치로 write 하는 작업이다. 위에서 언급한 [메모리 풀](#메모리-메모리-풀)로부터 할당할 수 있는 메모리가 고갈되면 운영체제에 치명적인 문제가 발생하는데, 메모리 덤프는 이러한 메모리 풀로 회수되지 못한 [메모리 누수](https://ko.wikipedia.org/wiki/메모리_누수)(memory leak)가 어디에서 발생하고 있는지 진단 및 추적하기 위해 목적을 갖는다. 본 장은 윈도우 운영체제를 위주로 메모리 누수 진단 및 덤프 작업 절차를 설명한다.

만일 운영체제 성능이 시간이 지나면서 저하되어 메모리 누수가 의심된다면 Performance Monitor로 조사를 진행한다.

![Performance Monitor](/images/docs/memory/memory_performance_monitor.png)

`Performance > Monitoring Tools > Performance Monitor`에서 현재 시스템 리소스를 모니터링 할 수 있다. 그 중에서 메모리 덤프를 위해서는 아래의 사진과 같이 Counter를 추가한다.

![Performance Monitor에서 Add Counter 설정](/images/docs/memory/memory_performance_counter.png)

* Memory → Pool Nonpaged Bytes
    : *페이지 불가한 풀로부터 할당된 현재 시스템이 사용하고 있는 메모리 크기 (단위: 바이트); 마지막으로 관측된 값을 표시하며 평균값이 아니다.*

* Memory → Pool Paged Bytes
    : *페이지 가능한 풀로부터 할당된 현재 시스템이 사용하고 있는 메모리 크기 (단위: 바이트); 마지막으로 관측된 값을 표시하며 평균값이 아니다.*

* Paging File → % Usage
    : *사용되고 있는 페이지 파일 객체 용량 (단위: %)*

사용자 모드의 메모리 누수는 항상 페이지 가능한 풀(paged pools)에서 발생하므로 다음 증상이 함께 동반된다.
> * Memory → Pool Paged Bytes 지속적 증가
> * Paging File → % Usage 지속적 증가

커널 모드의 누수는 일반적으로 페이지 불가한 풀(nonpaged pools)에서 고갈되므로 다음 증상이 동반된다.
> * Memory → Pool Nonpaged Bytes 지속적 증가
> * Memory → Pool Paged Bytes 영향 받을 수 있음

## 커널 모드 메모리 누수
다음은 Perfomance Monitor로부터 커널 모드에서 메모리 누수가 발생하고 있다고 판단하였을 때, 이를 진단 및 원인을 찾아내는 접근법을 설명한다. 커널 측을 디버깅해야 하기 때문에 [Windows Driver Kit]((https://docs.microsoft.com/en-us/windows-hardware/drivers/download-the-wdk))(WDK) 설치가 필요하다.

### PoolMon
[메모리 풀 모니터](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/poolmon)(Memroy Pool Monitor), 일명 PoolMon은 시스템의 페이지 가능한(paged) 및 페이지 불가한(nonpaged) 풀로부터 할당된 메모리 정보를 보여준다. Paged 및 nonpaged 메모리 풀마다 부여된 네 바이트로 구성된 풀 태그(pool tag)가 있으며, PoolMon은 각 풀 태그마다 처리된 할당 정보를 표시한다. 이러한 특징으로 메모리 누수가 어느 메모리 풀로부터 발생하는지 확인할 수 있다. 64비트 운영체제이면 프로그램은 `C:\Program Files (x86)\Windows Kits\10\Tools\x64`에서 찾을 수 있으며, 명령 프롬프트로 실행하기를 권장한다.

> 윈도우 2000 및 XP 64비트를 사용하고 있으면 `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`에 위치한 `GFlags.exe`를 실행해야만 풀 태그가 활성화된다. 그 이후 버전의 운영체제는 풀 태그가 기본적으로 활성화되어 있다.

![PoolMon.exe](/images/docs/memory/memory_poolmon_cmd.png)

다음은 시스템 메모리 풀 도표가 각각 무엇을 나타내는지 설명한다. 여기서 소괄호 `()`는 변화량을 가리킨다.

| `Tag ` | `Type` | `Allocs` | `Frees` | `Diff` | `Bytes` | `Per Alloc` |
|:------:|:------:|:--------:|:-------:|:------:|:-------:|:-----------:|
| 풀 태그 | Paged 혹은 Nonpaged | 누적 할당 개수 | 누적 Free 개수 | `Allocs` - `Free` | 할당 바이트 크기 | `Bytes` / `Diff`; 할당 당 바이트 |

메모리 누수가 발생하는 요인 진단은 다음 절차를 따라 진행된다:

1. 키보드 `P` 버튼을 눌러 Paged 혹은 Nonpaged, 아니면 전 메모리 풀에 대하여 관측한다.
2. 키보드 `B` 버튼을 눌러 할당된 바이트 크기 위주로 도표를 정렬한다.
3. 진단하려는 어플리케이션을 실행시키고 스크린샷으로 기록한다.
4. 매 30분마다 스크린샷을 캡처하여 어느 풀 태그에서 바이트가 증가하는지 확인한다.
5. 어플리케이션을 종료하였을 시, 1~2시간 후에 Free된 메모리 용량을 확인한다.

해당 절차를 통해 어느 메모리 풀 태그에서 메모리 누수가 발생하고 있는지 파악할 수 있다.

### Kernel Debugger
PoolMon에서 확인한 메모리 누수가 Nonpaged에서 발생하고 있으면 운영체제 커널을 디버깅해야 한다. 그러기 위해 운영체제를 디버깅 모드로 전환해야 하는데 BitLocker와 Secure Boot와 같은 시스템 보안 기능을 임시 비활성시켜야 한다. 진단을 마치고 디버깅 모드를 해제하면 시스템 보안 기능은 다시 활성화가 가능하다. 가장 먼저 해야 할 것은 BitLocker을 PowerShell로 중지시킬 것을 권장한다.

```powershell
Suspend-BitLocker -MountPoint "C:" -RebootCount 0
```

BitLocker를 재개하려면 아래 명령어를 입력한다.

```powershell
Resume-BitLocker -MountPoint "C:" 
```

그 다음 Secure Boot는 BIOS에서 비활성화 한다. 만일 BitLocker를 비활성화 하지 않고서 Secure Boot를 비활성화 하면 BitLocker가 트리거될 수 있으므로 반드시 BitLocker부터 진행하도록 한다. 시스템 보안 기능을 임시 해제하였으면 `bcdedit`이란 Boot Configuration Data 편집 작업으로 커널 디버깅 모드를 활성화한다.

```
bcdedit /debug on
```

본 부문은 예시로 KDNET 네트워크 자동설정으로 호스트 컴퓨터가 디버그 컴퓨터로 접속하는 절차를 설명한다. 디버깅 컴퓨터를 접속하는 방법은 여러 가지가 있으며 이들은 *[Microsoft Docs- Setting Up Kernel-Mode Debugging](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/setting-up-kernel-mode-debugging-in-windbg--cdb--or-ntsd)*에서 확인할 수 있다.

1. 호스트와 디버그 컴퓨터를 물리적으로 (즉, 이더넷으로) 동일한 LAN에 연결한다.

2. 호스트 컴퓨터에서 다음을 진행한다:

    * 명령 프롬프트에서 `ipconfig`로부터 IPv4 주소를 확인한다.
    * Windows Debugging Tools (WDK 설치 화면의 선택옵션) 설치한다.
    * `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`에서 `kdnet.exe`와 `VerifiedNICList.xml` 파일을 복사한다.

3. 디버그 컴퓨터에서 다음을 진행한다:

    * 복사한 `kdnet.exe`와 `VerifiedNICList.xml` 파일을 디버그 컴퓨터의 `C:\KDNET` 경로에 붙여넣는다.
    * 명령 프롬프트를 관리자 모드로 열어 `kdnet.exe`을 실행하여 네트워크 어댑터 지원 여부를 확인한다.
    * 네트워크 어댑터를 지원하면 아래 명령어를 입력한다: `<YourDebugPort>`는 호스트와 디버그 쌍을 연결해줄 포트를 선택하는 것이며, 50000~50039 범위 내에서 선택하기를 권장한다.

    ```
C:\KDNET> kdnet.exe <HostComputerIPAddress> <YourDebugPort> 
    ```

    * 명령 프롬프트에 나타난 `Key` 값을 저장한다.

디버깅을 위한 네트워크 설정을 마무리하면 호스트 컴퓨터는 WinDbg 프로그램을 실행하여 `Kernel Debug > Net`에서 저장한 `Key` 값을 입력하여 디버그 컴퓨터에 접속한다. 만일 방화벽이 나타나면 **모든 네트워크**에 대하여 권한을 부여한다. 이 시점에서 디버거가 다시 연결되기를 기다리며, 디버그 컴퓨터를 재부팅하면 자동으로 연결된다.

만일 메모리 누수가 발생한 태그가 `Abc `이면 아래와 같이 해당 태그를 리틀 엔디언으로 입력한다. 

```
kd> ed nt!poolhittag ' cbA' 
```

여기서 `Abc ` 풀로부터 메모리가 할당 혹은 free되면 디버그 컴퓨터는 자동적으로 break 된다. 해당 디버깅 내용을 자세히 확인하려면 아래를 입력한다.

```
kd> kb
```

## 사용자 모드 메모리 누수
다음은 Perfomance Monitor로부터 사용자 모드에서 메모리 누수가 발생하고 있다고 판단하였을 때, 이를 진단 및 원인을 찾아내는 접근법을 설명한다.

### Performance Monitor
사용자 모드 메모리 누수가 의심되지만 정확히 어딘지 알 수 없으면, Performance Monitor로 각 프로세스마다 메모리 사용량을 확인할 수 있다.

* Process → Private Bytes (진단하려는 각 프로세스 선택)
    : *프로세스가 할당한 전체 용량을 의미하며, 타 프로세스와 공유되는 메모리는 제외된다.*

* Process → Virtual Bytes (진단하려는 각 프로세스 선택)
    : *프로세스가 사용하고 있는 현 가상 주소 공간 크기이다.*

일부 메모리 누수는 Private Bytes 할당 증가로부터 나타나지만, 대다수는 Virtual Bytes 증가로 알아낼 수 있다.

### UMDH
[UMDH](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/umdh)(User-Mode Dump Heap)는 특정 프로세스의 힙 메모리 할당을 운영체제와 함께 분석하는 유틸리티 프로그램이다. UMDH 로그는 힙 메모리 할당의 stack traces를 제공하는데, 이를 통해서 프로세스의 어느 루틴에서 누수가 발생하는지 찾아낸다. 이를 위해 우선 `GFlags.exe`로부터 설정을 해야 한다.

1. `GFlags.exe` GUI의 Image File 탭에서 프로세스 이름(파일 확장자 포함)을 적고 TAB을 눌러 `Create user mode stack trace database`를 체크하여 저장한다. 혹은 CLI로 `+`/`-`로 옵션을 활성 혹은 비활성한다.
    ```
gflags /i ImageName +ust
    ```

2. 기본적으로 운영체제가 수집할 수 있는 stack trace 데이터는 x86 프로세서에서는 32MB로, x64 프로세서에서는 64MB로 한정되어 있다. 이를 증가시키려면 Image File 탭에서 `Stack Backtrace (Megs)`를 체크하고 MB 크기를 입력하고 적용시킨다. 이는 제한된 윈도우 리소스를 고갈시킬 수 있으므로 필요 시에만 변경한다. 더 큰 크기가 필요없으면 다시 원래 값으로 되돌려놓는다.

3. System Registry 탭에서 아무런 플래그라도 바꾸면, 이를 적용시키기 위해서는 윈도우를 재시작해야 한다. Image File 탭에서의 변경은 프로세스만 재시작하면 된다. Kernel Flags 탭은 즉시 적용되지만 윈도우를 재시작하면 초기화된다.

UMDH가 stack traces로 어느 함수를 호출하였는지 확인하려면 심볼(symbol)을 필요로 하며 `_NT_SYMBOL_PATH` 환경 변수에 경로를 지정해야 한다. 만일 비주얼 스튜디오를 사용한 적이 있으면 `.pdb` 파일을 보았을 것인데, 이것이 바로 어플리케이션 심볼 파일이다. 그리고 윈도우 운영체제에 대한 공용 심볼은 온라인 서버로부터 불러올 수 있다.

```
set _NT_SYMBOL_PATH=c:\mysymbols;srv*c:\mycache*https://msdl.microsoft.com/download/symbols
```
* `srv*`: 심볼 서버에 있는 기본 심볼 스토어로부터 심볼을 가져온다.
* `srv*c:\mycache`: 심볼 서버에 있는 기본 심볼 스토어로부터 심볼을 `c:\mycache`로 저장하여 불러온다.
* `srv*c:\mycache*https://msdl.microsoft.com/download/symbols`: 해당 링크의 서버에 있는 심볼 스토어로부터 심볼을 `c:\mycache`로 저장하여 불러온다.

정밀한 결과를 위해 trace 할 어플리케이션 실행 전에 환경 변수를 `set OANOCACHE=1`로 설정하여 BSTR caching을 비활성한다.

UMDH로 어플리케이션 프로세스의 힙 할당 정보를 캡처 및 진단을 위해 다음 절차를 따른다.

1. 진단하려는 프로세스의 ID (aka. PID)를 확인한다.

2. 확인한 PID를 콘솔창에서 다음과 같이 입력한다; 아래 예시는 PID가 51448이고 저장할 로그 파일명을 `log1.txt`로 지정하였다.

    ```
umdh -p:51448 -f:log1.txt
    ```

    해당 로그 파일에는 각 힙 메모리 할당에 대한 call stack 및 그로부터 생성된 할당 개수 및 바이트 크기 정보가 들어있다. 여기서 call stack이란, 컴퓨터 프로그램의 활동 중인 서브루틴(특정 작업을 수행하는 일련의 프로그램 명령) 정보를 담고 있는 stack 데이터 구조이다.

3. 메모리 누수를 진단하기 위한 비교할 수 있는 또 다른 로그 파일을 생성해야 한다. 충분한 시간 이후에 `log2.txt` 로그 파일을 생성하였다고 가정한다. UMDH는 두 로그 파일을 비교하여 각 힙 메모리 할당에 대한 변화를 보여줄 수 있다. 비교 데이터는 `logcompare.txt` 파일에 저장하고, 숫자를 십진수로 보기 위해 `-d` 옵션을 붙이면 아래의 명령어가 완성된다.

    ```
umdh log1.txt log2.txt > logcompare.txt -d
    ```

4. 비교 데이터 파일을 열면 다음과 같은 내용을 볼 수 있다.
```
+  131072 ( 262144 - 131072)      4 allocs	BackTraceF9A156DA
+       2 (      4 -      2)	BackTraceF9A156DA	allocations
```

    UMDH 로그 파일에서 "BackTrace"로 레이블된 각 call stack에는 두 로그의 비교 내용이 들어있다. 상단은 할당 바이트, 그리고 하단은 할당 개수를 가리킨다. 로그 파일 `log1.txt`는 131072이었던게 로그 파일 `log2.txt`에서는 262144으로 해당 call stack에 대해서는 +131072로 할당 바이트가 증가하였다.

    그리고 맨 아래는 총 메모리에 대한 종합적 요약이다.

    ```
Total decrease == 487210 requested +   1654 overhead = 488864
    ```

5. 해당 BackTrace가 무엇인지 확인하려면 `log1.txt` 혹은 `log2.txt` 둘 중 하나의 로그 파일로부터 찾아봐야 한다. `BackTraceF9A156DA`에 대한 로그 내용이 다음과 같다고 가정한다.
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

    로그에 의하면 해당 call stack으로부터 총 5320h 바이트가 할당되었으며, 이는 각각 428h 바이트 크기의 14h개 힙 메모리 할당이다. 그 밑에는 call stack이 있는데 `DisplayMyGraphics`가 `new` 연산자로 메모리를 할당하고 이는 Visual C++ 런타임 라이브러리의 `malloc`을 호출하여 힙 메모리를 확보하는 것을 파악할 수 있다. 그리고 이 중에서 어느 부분이 소스 코드에 명시되어 할당을 하는지 판단한다.
