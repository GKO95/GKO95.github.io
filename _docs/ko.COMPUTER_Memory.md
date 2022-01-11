---
layout: docs
language: ko
category: 운영체제
title: 메모리
meta: Memory
order: 0x41
---
# 메모리: 페이지
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
