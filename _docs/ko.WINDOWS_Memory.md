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
<thead><tr><th>메모리</th><th>저장장치</th></tr></thead>
<tbody style="text-align: center;">
<tr><td>동작속도가 매우 빠르다.</td><td>동작속도가 상대적으로 느리다.</td></tr>
<tr><td>물리적으로 CPU와 가까이 위치한다.</td><td>물리적으로 CPU와 멀리 위치한다.</td></tr>
<tr><td>대용량 제작이 어렵고 비싸다.</td><td>대용량 제작이 용이하고 저렴하다.</td></tr>
<tr><td><a href="https://ko.wikipedia.org/wiki/휘발성_메모리">휘발성</a>이다.</td><td><a href="https://ko.wikipedia.org/wiki/비휘발성_메모리">비휘발성</a>이다.</td></tr>
<tr><td><a href="https://ko.wikipedia.org/wiki/랜덤_액세스_메모리">RAM</a></td><td><a href="https://ko.wikipedia.org/wiki/하드_디스크_드라이브">HDD</a> 및 <a href="https://ko.wikipedia.org/wiki/솔리드_스테이트_드라이브">SSD</a></td></tr>
</tbody>
</table>

메모리의 빠른 동작속도와 물리적으로 가까운 점은 CPU가 순식간에 계산을 할 수 있도록 보조하기에 적합한 단기기억 역할을 담당한다. 하드웨어는 지속적으로 발전하고 있으나, 일반적으로 메모리와 저장장치는 대략 100,000 배의 속도 차이를 갖는다. 그러므로 시스템의 성능을 논할 때는 CPU 외에 메모리도 함께 중요한 요소로 작용한다.

> 본문을 진행하기 전에 [가상 주소 공간](ko.Process#가상-주소-공간) 및 하위 내용들을 먼저 읽어보기를 권장한다.

## 커밋된 메모리
커밋된 메모리(committed memory)는 시스템에서 사용 중으로 인식된 메모리이다.

![작업 관리자에서 확인한 메모리 성능](/images/docs/memory/memory_task_manager.png)

본 시스템은 총 48.0 GB의 RAM이 설치되어 있으며, 그 중에서 11.2 GB가 사용 중(in use)이고 36.4 GB 사용 가능(available)을 확인할 수 있다. 여기서 괄호 안에 있는 12.0 MB는 사용 중인 RAM 내에서 압축된 메모리 크기를 가리키는데, 마우스 커서를 올려보면 본래 55 MB 데이터를 43 MB만큼 절약하였다는 듯의 설명을 찾아볼 수 있다.

[페이지](ko.Process#페이지) 단위로 관리되고 있는 메모리에서 RAM 외에 [페이징 파일](ko.Process#페이징-파일)도 함께 커밋에 기여한다. 시스템에 커밋된 페이지 크기를 커밋 총량(commit charge)이라 부르며, 최대 "물리 메모리 + 페이징 파일"만큼의 커밋 한도(commit limit)를 갖는다. 커밋 총량이 한도에 도달할 시, 시스템은 여유 메모리가 생길 때까지 기다려야 하는 [응답 없음](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅)) 상태에 빠진다.

> 시스템에 커밋된 총량이 한도에 도달하여도 물리 메모리가 아직 여유로울 수 있다. 비록 페이지가 커밋되었다 하여도 곧바로 물리 메모리를 할당받는 게 아니기 때문이다.

위의 작업 관리자 예시에서는 커밋 총량과 한도가 각각 14.8 GB 및 54.9 GB로 측정되었다. 페이징 파일을 계산하면 총 크기 6.9 GB (= 54.9 - 48.0) 중에서 3.6 GB (= 14.8 - 11.2)가 사용되고 있음을 알 수 있다.

### Working Set