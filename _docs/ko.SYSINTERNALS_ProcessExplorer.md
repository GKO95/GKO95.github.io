---
layout: docs
category: 윈도우
title: 프로세스 탐색기
slug: ko.Process_Explorer
icon: icon-sysinternals.png
order: null
---
# 프로세스 탐색기
[프로세스 탐색기](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)(Process Explorer)는 현재 실행 중인 [프로세스](ko.Process)와 그에 해당하는 [핸들](ko.Process#핸들), [DLL](ko.C#라이브러리), [스택](ko.WinDbg#호출-스택) 등의 프로세스 정보, 그리고 시스템 리소스 사용률을 실시간으로 확인할 수 있는 [Sysinternals](ko.Sysinternals) 유틸리티 프로그램이다. 간단히 말하자면 더 많은 기능이 내포된 고급 [작업 관리자](https://ko.wikipedia.org/wiki/작업_관리자_(윈도우))라고 볼 수 있다.

![프로세스 탐색기 유틸리티 프로그램](/images/docs/sysinternals/sysinternals_procexp.png)

> 사용자의 선호도에 따라 작업 관리자를 실행하면 프로세스 탐색기가 실행되도록 설정이 가능합니다.

만일 호출 스택 및 커널 메모리 정보를 보기 위해서는 반드시 [심볼](ko.Symbol) 설정하고 불러와야 합니다.
