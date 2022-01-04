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
[가상 주소 공간](https://ko.wikipedia.org/wiki/가상_주소_공간)(virtual address space; VAS)는 각 프로세스마다 주어지는 private 가상 메모리 주소의 집합이다. 가상 주소는 메모리에 소재하는 프로세스의 실제 물리적 위치를 반영하지 않는다; 가상 주소를 대응하는 물리 메모리 주소에 매핑하는 페이지 테이블(page table)로부터 구축된 주소 공간이다.

![가상 주소 공간과 물리 메모리의 관계<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Virtual_address_space_and_physical_address_space_relationship.svg">위키미디어</a></i></sub>](/images/docs/memory/memory_virtual_addressspace.png)

> [페이지](https://ko.wikipedia.org/wiki/프레임_(컴퓨터_과학))(page)란, 일정한 크기로 나뉘어진 운영체제에서 관리하는 가장 작은 단위의 가상 메모리이다. 크기는 호스트 시스템마다 다르며 x86 컴퓨터의 경우에는 4kB이다.

가상 주소 공간은 별도로 공유하지 않는 이상, 타 프로세스에서 접근할 수 없으므로 고립(isolated)되었다고 표현한다.

가상 주소 공간은 크게 두 파티션으로 나뉘어진다: 프로세스가 사용할 영역(aka. paged)과 시스템을 위해 확보된 영역(aka. nonpaged)이다. 이는 차후 [메모리 풀](#메모리-메모리-풀)에서 다시 한 번 소개한다.

### 페이징
페이징(paginig)은 일부 메모리 페이지와 저장장치(예. HDD 혹은 SSD)의 페이지파일의 상호변환을 가리키며, 메모리 관리의 유연성을 최대화하는 방법 중 하나이다.

> 페이지파일(pagefile) 명칭은 가상 메모리의 페이지가 피일을 저장하는 저장장치에서 처리하기 때문에 이 두 용어를 통합한 것으로 보인다; 일명 페이지를 나타내는 파일.

* Page out
    : 프로세스에서 사용하는 가상 주소 공간이 컴퓨터에서 사용할 수 있는 총 물리 메모리 용량보다 커서 가장 오랫동안 사용되지 않은 메모리의 페이지가 저장장치의 페이지파일로 이동하는 현상
* Page in
    : 실행 혹은 참조되어야 할 데이터가 현재 저장장치의 페이지파일 형태로 있어 프로세서가 처리할 수 있도록 저장장치의 페이지파일이 메모리의 페이지로 이동하는 현상

여기에서 확인할 수 있는 내용은 가상 주소 공간은 실질적으로 두 하드웨어로 구성되어 있다: (1) 물리 메모리와 (2) 저장장치이다. 그리고 가상 주소 공간 중에서 물리 메모리에 할당된 페이지들이 프로세스 실행에 직접 가담하므로 working set이라고 부른다.

### Working Set
Working set은 프로세스 가상 주소 공간 중에서 물리 메모리에 머물고 있는 페이지될 수 있는 메모리(pageable memory) 집합이다. AWE 혹은 커널 관련 등의 페이지될 수 없는 메모리(nonpageable memory)는 항상 물리 메모리에 머물기 때문에 working set 분류가 필요없어 제외된다.

프로세스 working set의 일부 페이지는 타 프로세스와 공유될 수 있는데, 만일 하나의 프로세스가 공유된 페이지를 제거한다 하더라도 타 프로세스에는 영향을 주지 않는다([Copy-on-write 보호](#copy-on-write-보호) 참조). 단, 공유된 페이지가 모든 프로세스로부터 제거되면 페이지는 transition 된다.

> 여기서 *transition*은 [페이지 캐싱]((https://en.wikipedia.org/wiki/Page_cache))을 의미하며, 사용되지 않는 페이지를 빠른 접근과 성능 향상을 꾀하여 저장장치의 페이지파일이 아닌 사용되지 않는 메인 메모리에 cached 된 것을 가리킨다. 그러면 메모리가 추가로 필요한 쓰레드를 위해 재빨리 repurpose되어 활용될 수 있다.

만일 transition 페이지가 마지막으로 저장장치에 write 되었을 때와 내용이 다르면 (즉, 페이지가 "dirty" 할 때), 해당 transition 페이지는 repurpose 되기 전에 먼저 backing store에 write 되어야 한다. 시스템은 dirty transition 페이지를 발견한 즉시 backing store에 write 하도록 한다.

### 페이지 부재
Page fault는 프로세스가 working set가 아닌 pageable 메모리를 참조하면 발생하는 문제이다. 시스템의 page fault 처리자가 이를 해결하면 해당 페이지는 working set에 추가된다. Page fault는 크게 두 분류로 나뉘어진다:

* Hard page fault: 참조하려는 페이지가 저장장치에 있는 경우
    : *페이지의 backing store로부터 페이지 내용(페이지파일 혹은 프로세스로부터 생성된 메모리 맵 파일)을 읽어서만 문제를 해결할 수 있다.*
    
> Backing store("backing" as "back-up"; store = memory)이란, 저장장치 중에서 페이징 시스템이 정보를 저장하는데 사용되는 공간이다.

* Soft page fault: 참조하려는 페이지가 메모리 어딘가에 있는 경우
    : *backing store를 접근하지 않고서도 해결될 수 있으며, 다음 세 가지가 주요 원인이다.*

    * 참조하려는 페이지가 다른 프로세스의 working set인 경우
    * 페이지가 in transition인 경우 (예. 페이지 repurpose 미수행, 메모리 관리자의 prefetch 등)
    * 프로세스가 할당된 가상 메모리 페이지를 처음으로 참조하는 경우 (aka. demand-zero fault)

다음은 프로세스의 working set로부터 페이지가 제거될 수 있는 경우이다:

* `SetProcessWorkingSetSize()`, `SetProcessWorkingSetSizeEx()`, 혹은 `EmptyWorkingSet()` 함수 등으로 working set 축소 혹은 비운 경우
* `VirtualUnlock()` 함수로 특정 범위의 page들을 저장장치 페이지파일로 page out
* `UnmapViewOfFile()` 함수로 파일 매핑의 view를 unmap
* 메모리 관리자가 더 많은 메모리를 사용할 수 있도록 working set 크기를 줄일 경우
* 메모리 관리자가 새로운 페이지를 위하여 어쩔 수 없이 페이지를 제거해야 할 경우 (working set가 최대치에 달하던가 하면)

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
