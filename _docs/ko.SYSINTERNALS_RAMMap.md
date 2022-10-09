---
layout: docs
category: 윈도우
title: RAMMap
slug: ko.RAMMap
icon: icon-sysinternals.png
order: null
---
# RAMMap
[RAMMap](https://learn.microsoft.com/en-us/sysinternals/downloads/rammap)는 시스템이 [물리 메모리](ko.Memory), 즉 [RAM](https://ko.wikipedia.org/wiki/랜덤_액세스_메모리)을 어떻게 활용하고 있는지 분석하는 [Sysinternals](ko.Sysinternals) 유틸리티 프로그램이다.

![RAMMap 유틸리티 프로그램](/images/docs/sysinternals/sysinternals_rammap.png)

> 본 프로그램을 이해하려면 [윈도우 NT](ko.WindowsNT) 운영체제를 [컴퓨터 구조론](https://ko.wikipedia.org/wiki/컴퓨터_구조) 관점에서의 개념이 확립되어야 한다.

RAMMap 유틸리티로부터 사용자는 윈도우 운영체제가 메모리를 관리하는 방식을 이해, 어플리케이션의 메모리 점유 분석, 그리고 RAM 할당에 대한 의문점을 답해 줄 수 있다. 아래는 창에서 둘러볼 수 있는 총 일곱 가지의 탭들이 어떤 정보를 제공하는 지 설명한다:

<table style="width: 70%;">
<colgroup><col style="width: 15%;"/><col style="width: 70%;"/></colgroup>
<thead><tr><th>탭 (영문)</th><th>설명</th></tr></thead>
<tbody>
<tr><td style="text-align: center;">Use Counts</td><td>RAM을 점유하는 메모리를 각 <a href="ko.VMMap#메모리-유형">유형</a> 및 <a href="ko.Memory#사용-가능한-메모리">페이지 리스트</a>마다 분류하여 수치적 도표와 시각적 그래프로 보여준다.</td></tr>
<tr><td style="text-align: center;">Processes</td><td><a href="ko.Process">프로세스</a>별 개인 <a href="ko.Memory#워킹-세트">워킹 세트</a>(private working set) 및 <a href="ko.Memory#캐시-메모리cache-memory">캐시 메모리</a> 크기를 나열한다.</td></tr>
<tr><td style="text-align: center;">Priority Summary</td><td><a href="ko.Memory#워킹-세트">우선순위</a>별 대기 페이지 리스트(standby page list)의 메모리 크기를 나열한다.</td></tr>
<tr><td style="text-align: center;">Physical Pages</td><td>RAM의 각 <a href="ko.Process#페이지">페이지 프레임</a> 용도를 나열한다.</td></tr>
<tr><td style="text-align: center;">Physical Ranges</td><td>RAM의 전체적인 메모리 주소를 보여준다.</td></tr>
<tr><td style="text-align: center;">File Summary</td><td>RAM에 상주하는 모든 파일들을 간략하게 나열한다.</td></tr>
<tr><td style="text-align: center;">File Details</td><td>RAM에 상주하는 모든 파일들을 페이지별 구분 지어 상세하게 나열한다.</td></tr>
</tbody>
</table>
