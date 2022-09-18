---
layout: docs
category: 윈도우
title: 메모리
slug: ko.Memory
icon: icon-windows.svg
order: null
---
# 메모리
[메모리](https://ko.wikipedia.org/wiki/주기억장치)(memory)는 시스템에서 즉각적으로 사용할 데이터를 저장하는 컴퓨터 하드웨어이다. 데이터를 저장하는 또 다른 하드웨어로 [저장장치](https://ko.wikipedia.org/wiki/기억_장치)(storage)가 존재하나, 이 둘은 확연한 차이점을 지닌다.

<table style="table-layout: fixed; width: 40%">
<thead><tr><th>메모리</th><th>저장장치 (혹은 <a href="https://en.wikipedia.org/wiki/Disk_storage">디스크</a>)</th></tr></thead>
<tbody style="text-align: center;">
<tr><td>동작속도가 매우 빠르다.</td><td>동작속도가 상대적으로 느리다.</td></tr>
<tr><td>물리적으로 CPU와 가까이 위치한다.</td><td>물리적으로 CPU와 멀리 위치한다.</td></tr>
<tr><td>대용량 제작이 어렵고 비싸다.</td><td>대용량 제작이 용이하고 저렴하다.</td></tr>
<tr><td><a href="https://ko.wikipedia.org/wiki/휘발성_메모리">휘발성</a>이다.</td><td><a href="https://ko.wikipedia.org/wiki/비휘발성_메모리">비휘발성</a>이다.</td></tr>
<tr><td><a href="https://ko.wikipedia.org/wiki/랜덤_액세스_메모리">RAM</a></td><td><a href="https://ko.wikipedia.org/wiki/하드_디스크_드라이브">HDD</a> 및 <a href="https://ko.wikipedia.org/wiki/솔리드_스테이트_드라이브">SSD</a></td></tr>
</tbody>
</table>

메모리의 빠른 동작속도와 물리적으로 가까운 점은 [CPU](ko.Processor)가 순식간에 계산을 할 수 있도록 보조하기에 적합한 단기기억 역할을 담당한다. 하드웨어는 지속적으로 발전하고 있으나, 일반적으로 메모리와 저장장치는 대략 100,000 배의 속도 차이를 갖는다. 그러므로 시스템의 성능을 논할 때는 CPU 외에 메모리도 함께 중요한 요소로 작용한다.

본문을 진행하기 전에 [가상 주소 공간](ko.Process#가상-주소-공간) 및 하위 내용을 우선 참고하는 것을 권유하며, 메모리의 이해를 돕기 위해 아래의 [작업 관리자](https://ko.wikipedia.org/wiki/작업_관리자)를 예시로 사용하여 설명한다.

![작업 관리자에서 확인한 메모리 성능](/images/docs/memory/memory_task_manager.png)

본 시스템에 설치된 48 GB의 RAM에서 11.2 GB가 사용 중(in use)이고 나머지 36.4 GB는 아직 [사용 가능](#사용-가능한-메모리)(available)하다. 괄호 안에 있는 12.0 MB는 사용 중인 RAM 내에서 압축된 메모리 크기를 가리키는데, 본래 55 MB 데이터를 43 MB만큼 절약하였다는 듯의 설명을 찾아볼 수 있다.

## 페이징 파일
페이징 파일(paging file)은 가상 주소 공간의 [페이지](ko.Process#페이지)를 물리 메모리가 아닌 HDD 혹은 SSD와 같은 저장장치에서 물리 메모리의 작업량 일부를 [페이징](https://ko.wikipedia.org/wiki/페이징)(paging) 기법으로 전담받아 원활한 시스템 성능을 유지하는데 기여하는 `pagefile.sys` 파일이다. 다음은 페이징 기법에 대한 간략한 설명이다.

<table style="width: 80%">
<thead><tr><th>페이징 기법</th><th>방향성</th><th>설명</th></tr></thead>
<colgroup>
<col style="width: 15%;"/>
<col style="width: 25%;"/>
<col style="width: 60%;"/>
</colgroup>
<tbody>
<tr><td style="text-align: center;">페이징 아웃<br/>(Paging out)</td><td style="text-align: center;">페이지 프레임 → 페이징 파일</td><td>물리 메모리에 오랜 시간동안 머물고 있으나 사용 중이지 않은 커밋된 페이지를 저장장치로 옮겨 메모리 여유를 확보한다.</td></tr>
<tr><td style="text-align: center;">페이징 인<br/>(Paging in)</td><td style="text-align: center;">페이징 파일 → 페이지 프레임</td><td>페이징 파일은 저장장치의 하드웨어적 한계로 인해 절대 물리 메모리를 대체할 수 없어, 참조되어야 할 페이지는 물리 메모리로 복귀되어야 한다.</td></tr>
</tbody></table>

[커밋된 메모리](#커밋된-메모리) 중 저장장치에서 찾아볼 수 없는 데이터는 또한 흔히 페이징 파일에서 처리된다(예. 저장되지 않은 [메모장](https://ko.wikipedia.org/wiki/메모장_(소프트웨어)) 텍스트). 이와 반대로 `notepad.exe` 프로그램 이미지 혹은 저장된 `.txt` 파일 등과 같이 저장장치에 찾을 수 있는 데이터는 물리 메모리에서 불러온다.

페이징 파일 크기는 고급 시스템 설정(Advanced System Setting; 혹은 `systempropertiesadvnaced.exe`)의 가상 메모리에서 각 드라이브마다 지정할 수 있다.

> 성능(Performance) 그룹에서 설정 버튼을 클릭하면 "성능 옵션(Performance Options)" 창이 나타나는데, 고급(Advanced) 탭으로 이동하면 가상 매모리 설정을 찾을 수 있다. 

![가상 메모리 다이얼로그 창](/images/docs//memory/memory_advanced_paging.png)

기본적으로 시스템은 "모든 드라이브에 대한 페이징 파일 크기 자동 관리(Automatically manage paging file size for all drives)"로 설정되어 있다. 이는 OS 드라이브만 크기가 자동 조정되는 페이징 파일을 가지며, 나머지 드라이브에는 페이징 파일이 없는 것과 마찬가지이다. 각 드라이브마다 페이징 파일의 크기는 아래 세 가지 선택지로부터 지정된다.

* **사용자 지정 크기(Custom size)**: 사용자가 직접 페이징 파일의 처음 크기(Initial size) 및 확장될 수 있는 최대 크기(Maximum size)를 [메가바이트](https://ko.wikipedia.org/wiki/메가바이트) 단위로 지정한다.
* **시스템이 관리하는 크기(System manged size)**: 물리 메모리의 사용량 및 상황에 따라 시스템이 알아서 페이징 파일 크기를 조정한다.
* **페이징 파일 없음(No paging file)**: 페이징 파일을 사용하지 않는다.

지정된 크기만큼의 드라이브 용량을 페이징 파일로 사용되기 때문에 저장공간이 줄어든다는 단점이 있다. 그러나 물리 메모리 및 저장장치의 용량이 대폭 확장되면서 페이징 파일의 역할이 퇴색되었으며, 현재는 [블루스크린](ko.BSOD)이 발생되었을 시 [덤프 수집](ko.BSOD#가상-메모리) 목적으로 활용된다.

## 커밋된 메모리
커밋된 메모리(committed memory)는 시스템 메모리에서 사용 중으로 인식된 [페이지](ko.Process#페이지)이다. 프로세스의 사용자 공간에 커밋된 메모리는 두 유형으로 나뉘어진다.

<table style="table-layout: fixed; width: 80%">
<thead><tr><th>개인 메모리 (private memory)</th><th><a href="https://ko.wikipedia.org/wiki/공유_메모리">공유 메모리</a> (shared memory)</th></tr></thead>
<tbody style="text-align: center;"><tr>
<td>오로지 해당 프로세스만 접근할 수 있는 메모리이다.</td>
<td>타 프로세스와 공유되는 메모리이며, 대표적으로 <code>.EXE</code> 혹은 <code>.DLL</code>와 같은 프로그램 이미지는 하나만으로 여러 프로세스가 공유한다.</td>
</tr></tbody>
</table>

시스템 관점에서 바라본 커밋된 메모리, 즉 커밋 총량(commit charge)은 모든 프로세스의 사용자 공간 및 커널로부터 커밋된 페이지의 합계이다. 커밋 총량이 도달할 수 있는 최대 크기인 커밋 한도(commit limit)는 페이지가 상주할 수 있는 "RAM + [페이징 파일](ko.Memory#페이징-파일)"로 계산된다. 커밋 총량이 한도에 도달할 시, 시스템은 여유 메모리가 생길 때까지 기다려야 하는 [응답 없음](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅))(hang) 상태에 빠진다.

> 작업 관리자 예시에서 커밋 총량과 한도가 각각 14.8 GB 및 54.9 GB로 측정되었다. 페이징 파일을 계산하면 총 6.9 GB(= 54.9 - 48.0) 중에서 3.6 GB(= 14.8 - 11.2)가 사용되고 있다.

### 가상 메모리
가상 메모리(virtual memory)는 프로세스의 사용자 공간에 할당된 "커밋된 페이지 + 예약된 페이지"이다. 시스템 아키텍처 및 운영체제에 따라 각 프로세스는 가상 주소 공간에 할당할 수 있는 최대 크기가 정해져 있는데, 이를 초과하면 오류 코드 0xC000012D와 함께 프로세스가 충돌하여 종료된다. 그러므로 단일 프로세스에 페이지를 얼마나 더 할당할 수 있는지 가상 메모리를 통해 알아볼 수 있다.

허나, 가상 메모리는 시스템 성능을 확인하는데 실질적으로 유용한 척도가 아니다:

![대략 12 GB로 측정된 커밋된 메모리, 그리고 471 TB로 측정된 총 가상 메모리](/images/docs/memory/memory_virtual_committed.png)

1. 예약된 페이지는 시스템 메모리와 아무런 상관이 없으므로, 시스템 관점에서는 무의미한 정보이다. 
2. 64비트 아키텍처부터 프로세스의 사용자 공간은 최대 128 TB라는 엄청난 크기로 확장하여, [메모리 누수](https://ko.wikipedia.org/wiki/메모리_누수)가 일어나지 않는 한 용량이 부족할 일이 거의 없다.

> 가상 메모리에 대한 정보는 작업 관리자에서도 찾아볼 수 없으며, 그 대신 [성능 모니터](ko.Performance_Monitor) 혹은 [Sysinternals](ko.Sysinternals)의 [VMMap](ko.VMMap) 유틸리티 프로그램 등으로 확인할 수 있다.

## 워킹 세트
[워킹 세트](https://en.wikipedia.org/wiki/Working_set)(working set)는 프로세스의 사용자 공간에 [커밋된 메모리](#커밋된-메모리) 중에서 오로지 RAM에만 상주하고 있는 페이지를 가리킨다.

> 작업 관리자에서 사용 중(in use)인 RAM 크기와 얼핏 유사하지만, 워킹 세트는 오로지 사용자 공간만을 다루기 때문에 커널이 사용하는 RAM 크기가 반영되지 않으므로 전혀 다른 척도이다.

운영체제는 건전한 시스템 상태를 유지하기 위해, 워킹 세트가 특정 크기에 도달하면 오랜 기간동안 사용되지 않은 메모리를 페이징 아웃시키는 트리밍(trimming) 작업을 진행한다. 트리밍은 실행 중인 모든 프로세스에 거쳐 처리되는데, 이는 권한이 매우 높은 작업으로 트리밍이 전부 끝날 때까지 기다려야 한다.

### 페이지 부재
[페이지 부재](https://ko.wikipedia.org/wiki/페이지_부재)(page fault)는 프로세스의 페이지를 접근하려 하나 워킹 세트에 존재하지 않는 경우를 가리키며, 운영체제가 메모리를 관리하는 과정에서 일어나는 매우 자연스러운 현상이다. 페이지 부재는 하드웨어적 그리고 소프트웨어적 페이지 부재로 나뉘어진다.

<table style="table-layout: fixed; width: 80%">
<thead><tr><th>하드 (혹은 메이저) 페이지 부재</th><th>소프트 (혹은 마이너) 페이지 부재</th></tr></thead>
<tbody style="text-align: center;"><tr>
<td>접근하려는 데이터가 저장장치의 페이징 파일로 상주하는 경우</td>
<td>접근하려는 데이터가 물리 메모리에 상주하나 <a href="#캐시-메모리">모종의 이유</a>로 본래와 다른 곳에 위치하는 경우</td>
</tr></tbody>
</table>

하드 페이지 부재는 페이징 작업이 필요한 반면, 소프트 페이지 부재는 물리 메모리 내에서 처리되기 때문에 상대적으로 훨씬 빨리 해결될 수 있다.

## 사용 가능한 메모리
RAM 중에서 사용 중인 영역이 있으면 이와 반대로 사용 가능한 메모리(available memory) 영역도 존재한다. 사용 가능한 메모리는 작업 관리자에 표시된 메모리 구성(memory composition), [리소스 모니터](https://en.wikipedia.org/wiki/Resource_Monitor), 혹은 Sysinternals의 [RAMMap](ko.RAMMap) 유틸리티 프로그램 등으로 확인할 수 있다.

![리소스 모니터에 표시된 프로세스 및 실제 RAM의 메모리 구성별 사용량](/images/docs/memory/memory_resource_monitor.png)

커밋 총량에 비해 사용 가능한 메모리가 다소 여유로울 수 있는데, 비록 페이지가 커밋되었다 하여도 곧바로 물리 메모리를 할당받는 게 아니기 때문이다.

> 결론부터 말하자면, 사용 가능한 메모리는 "[여유 메모리](#여유-메모리) (free memory) + [대기 페이지 리스트](#캐시-메모리) (standby page list)"로 계산된다.

#### 여유 메모리(free memory)
워킹 세트에 메모리를 제공하는 페이지 리스트(page list), 즉 RAM에 상주하는 페이지들의 묶음이다.

<table style="table-layout: fixed; width: 100%">
<thead><tr><th colspan="2">페이지 리스트</th><th>설명</th></tr></thead>
<colgroup>
<col style="width: 8%;"/>
<col style="width: 12%;"/>
<col style="width: 80%;"/>
</colgroup>
<tbody>
<tr><td rowspan="2" style="text-align: center;">여유 메모리</td><td>영값 리스트<br/>(zero page list)</td><td>전부 영(0)으로 채워져 데이터가 없는 페이지들의 리스트이다. 휘발성의 RAM은 시스템이 부팅되기 직전에 아무런 데이터가 없으므로 모든 페이지가 영값 리스트에 해당한다.</td></tr>
<tr><td>해제 리스트<br/>(free page list)</td><td>종료된 프로세스의 워킹 세트로부터 해제된 페이지들의 리스트이다. 워킹 세트로 있을 당시 데이터를 여전히 갖고 있으나, 차후 영값 페이지 스레드(zero page thread)에 의해 페이지는 전부 영으로 채워져 데이터가 말소되고 영값 페이지 리스트로 이전된다. 만일 영값 페이지가 고갈되면 해제 페이지 리스트로부터 제공받지만, 우선 커널로부터 데이터가 정화되어야 하므로 시간이 다소 소모된다.</td></tr>
</tbody>
</table>

#### 캐시 메모리(cache memory)
워킹 세트의 트리밍 과정에서 처리되는 RAM 페이지들을 임시로 모아둔 페이지 리스트이다. RAM이 저장장치의 [캐시](https://ko.wikipedia.org/wiki/캐시) 역할을 하므로써, [페이지 부재](#페이지-부재)를 메이저에서 마이너로 대체하여 디스크 입출력 작업을 완화하는 효과를 가져온다. 캐시 메모리를 이해하기 위해서 저장장치에 데이터가 존재하는지 여부에 따라 RAM 혹은 페이징 파일 중 어디서 처리되는지 특성을 파악하고 있어야 한다.

<table style="table-layout: fixed; width: 100%">
<thead><tr><th colspan="2">페이지 리스트</th><th>설명</th></tr></thead>
<colgroup>
<col style="width: 8%;"/>
<col style="width: 12%;"/>
<col style="width: 80%;"/>
</colgroup>
<tbody>
<tr><td rowspan="2" style="text-align: center;">캐시 메모리</td><td>대기 페이지 리스트<br/>(standby page list)</td><td>트리밍되어 현재 사용 중이지 않는 페이지들의 리스트이다. 데이터를 말소하여 영값 페이지로 전환시킬 수 있으나, 그 전에 해당 데이터가 다시 필요하다면 곧바로 워킹 세트로 복귀될 수 있는 "대기" 상태이다. 대기 리스트에 속한 페이지로는 다음 유형들이 포함된다:<ol><li>저장장치에 이미 존재하는 데이터를 담고 있는 페이지</li><li>트리밍되기 전에 이미 영으로 채워져 데이터 말소가 불필요한 영값 페이지</li></ol></td></tr>
<tr><td>수정된 페이지 리스트<br/>(modified page list)</td><td>트리밍된 페이지 중에서 디스크에 저장이 필요한 페이지들의 리스트이다. 수정된 페이지는 사용 가능한 메모리가 아니지만, 시스템에 의해 데이터가 페이징 파일에 저장된 이후에는 대기 페이지 리스트로 이전된다. 대기 리스트에 속한 페이지로는 다음 유형들이 포함된다:<ol><li>수정된 리스트에 속한 페이지로는 새로 생성되거나 기존 파일로부터 수정되어 저장장치에 찾아볼 수 없는 데이터를 담고 있는 페이지</li></ol></td></tr>
</tbody>
</table>
