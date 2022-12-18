---
layout: docs
category: 윈도우
title: 프로세스 모니터
slug: ko.Process_Monitor
icon: icon-sysinternals.png
order: null
---
# 프로세스 모니터
[프로세스 모니터](https://learn.microsoft.com/en-us/sysinternals/downloads/procmon)(Process Monitor)는 파일 시스템, [레지스트리](ko.Registry), 그리고 [프로세스](ko.Process) 및 [스레드](ko.Process#스레드) 활동 이력을 실시간으로 모니터링하는 [Sysinternals](ko.Sysinternals) 유틸리티 프로그램이다.

![프로세스 모니터 유틸리티 프로그램](/images/docs/sysinternals/sysinternals_procmon.png)

비정상적인 시스템 및 프로그램 동작이 의심될 경우, 프로세스 모니터로부터 캡처된 활동 로그로부터 당시 어떠한 정보가 왕래하였는지 혹은 [호출 스택](ko.WinDbg#호출-스택)을 살펴보면서 트러블슈팅을 진행할 수 있다.

> 프로세스 모니터는 "Enable Boot Logging"이란 옵션이 존재하여, 다음에 윈도우를 부팅하였을 때 어떠한 활동이 이루어졌는지 살펴볼 수 있도록 로그를 남긴다.

캡처되는 활동들이 매우 많다보니 원활한 분석을 위해서는 모니터링에 포함하거나 제외할 정보를 필터링하는 작업에도 신경을 써야 한다.
