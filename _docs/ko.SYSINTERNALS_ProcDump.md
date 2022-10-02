---
layout: docs
category: 윈도우
title: ProcDump
slug: ko.ProcDump
icon: icon-sysinternals.png
order: null
---
# ProcDump
[ProcDump](https://learn.microsoft.com/en-us/sysinternals/downloads/procdump)는 [프로세스](ko.Process)의 [사용자 모드 덤프](ko.Dump#사용자-모드-덤프)를 수집하는 [CLI](https://ko.wikipedia.org/wiki/명령_줄_인터페이스) 기반의 [Sysinternals](ko.Sysinternals) 유틸리티 프로그램이다.

![ProcDump 유틸리티 프로그램](/images/docs/sysinternals/sysinternals_procdump.png)

실행 중인 어플리케이션으로부터 곧바로 덤프를 수집할 수 있으며, [충돌](https://ko.wikipedia.org/wiki/충돌_(컴퓨팅)#애플리케이션_충돌) 및 [응답 없음](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅)), 그리고 [CPU](ko.Processor) 점유율이나 [메모리](ko.Memory) 사용량 등의 성능을 모니터링하여 한계치를 초과하거나 미달할 시 덤프를 수집하는 조건을 설정할 수 있다. 이는 서버 관리자나 프로그램 개발자가 비정상적인 리소스 활동이 발생하였을 때 원인을 판단할 수 있는 자료가 된다. 덤프 수집이 완료되면 ProcDump는 종료된다.

ProcDump는 두 가지의 치명적인 단점이 있다:

1. 현재 실행 중인 프로세스에만 사용할 수 있다.
2. 동명의 프로세스가 여럿 존재하면 반드시 PID를 통해 덤프를 수집하고자 하는 프로세스를 지목해야 한다.

> 이러한 단점들에 의해 실행이 되자마자 금방 종료되는 경우의 프로세스 덤프는 ProcDump로 수집이 불가능하며, 대안으로 [WER](ko.WER) 그리고 [Debug Diagnostic Tool v2](https://www.microsoft.com/en-us/download/details.aspx?id=103453) 프로그램이 있다.

## 덤프 종류
ProcDump는 아래의 덤프 종류를 생성할 수 있다.

<table style="width: 75%;">
<colgroup><col style="width: 10%;"/><col style="width: 15%;"/><col style="width: 75%;"/></colgroup>
<thead><tr><th>매개변수</th><th>덤프 종류</th><th>설명</th></tr></thead>
<tbody>
<tr><td style="text-align: center;"><code>-ma</code></td><td style="text-align: center;"><a href="ko.Dump#전체-덤프">전체 덤프</a></td><td>프로세스의 <a href="ko.Process#가상-주소-공간">사용자 공간</a> 전체를 수집한다.</td></tr>
<tr><td style="text-align: center;"><code>-mm</code></td><td style="text-align: center;"><a href="ko.Dump#미니-덤프">미니 덤프</a></td><td>프로세스의 사용자 공간 중에서 <a href="ko.Process#스레드">스레드</a> 및 레지스트리 위주로 수집하며, ProcDump의 기본 덤프이다.</td></tr>
<tr><td style="text-align: center;"><code>-mp</code></td><td style="text-align: center;">미니플러스 덤프<br/>(MiniPlus Dump)</td><td>프로세스의 프로그램 이미지를 제외한 사용자 공간 전체를 수집한다. 덤프에서 제외된 프로그램 이미지 정보는 해당 프로그램 파일이 위치한 경로를 디버깅 도구(예. <a href="ko.WinDbg">WinDbg</a>)에 명시하여 보충할 수 있다.</td></tr>
<tr><td style="text-align: center;"><code>-mk</code></td><td style="text-align: center;">커널 덤프</td><td>프로세스에 관여한 커널 스택의 덤프를 추가로 생성한다. 단, 해당 덤프는 절대로 <a href="ko.Dump#커널-메모리-덤프">커널 메모리 덤프</a>가 아니다.</td></tr></tbody></table>
