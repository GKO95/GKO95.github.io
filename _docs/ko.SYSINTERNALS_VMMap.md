---
layout: docs
category: 윈도우
title: VMMap
slug: ko.VMMap
icon: icon-sysinternals.png
order: null
---
# VMMap
[VMMap](https://learn.microsoft.com/en-us/sysinternals/downloads/vmmap)는 [프로세스](ko.Process)의 [가상 주소 공간](ko.Process#가상-주소-공간) 메모리를 분석하는 [Sysinternals](ko.Sysinternals) 유틸리티 프로그램이다.

![VMMap 유틸리티 프로그램](/images/docs/sysinternals/sysinternals_vmmap.png)

> 본 프로그램을 이해하려면 [윈도우 NT](ko.WindowsNT) 운영체제를 [컴퓨터 구조론](https://ko.wikipedia.org/wiki/컴퓨터_구조) 관점에서의 개념이 확립되어야 한다.

VMMap은 선택된 단 하나의 프로세스에서 가상 주소 공간(= 사용자 공간 + 커널 공간)을 어떻게 사용하고 있는지 보여준다. 아래는 창 상단에 위치한 세 개의 그래프가 각각 무엇을 의미하는지 설명한다.

<table style="width: 90%;">
<colgroup><col style="width: 25%"/><col style="width: 75%"/></colgroup>
<thead><tr><th>그래프</th><th>설명</th></tr></thead>
<tbody>
<tr><td style="text-align: center;"><a href="ko.Memory#커밋된-메모리">커밋</a> 요약 그래프<br/>(Commit Summary Graph)</td><td>메모리 유형마다 프로세스의 가상 주소 공간에 할당된 커밋된 용량을 표시한다. 즉, 여유(free) 및 예약된(reserved) <a href="ko.Process#페이지">페이지</a>를 제외한 오로지 커밋된 페이지만이 계산된 수치이다.</td></tr>
<tr><td style="text-align: center;">개인 요약 그래프<br/>(Private Summary Graph)</td><td>커밋된 메모리 중에서 공유되지 않은 프로세스 개인만을 위한 용량을 표시한다. 성능 카운터: <code>\Process(*)\Private Bytes</code></td></tr>
<tr><td style="text-align: center;"><a href="ko.Memory#워킹-세트">워킹 세트</a> 요약 그래프<br/>(Working Set Summary Graph)</td><td>커밋된 메모리 중에서 <a href="ko.Memory">RAM</a>에 상주하고 있는 워킹 세트 용량을 표시한다. 성능 카운터: <code>\Process(*)\Working Set</code></td></tr>
</tbody>
</table>
