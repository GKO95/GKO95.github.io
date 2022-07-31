---
layout: docs
category: 윈도우
title: 덤프
slug: ko.Dump
icon: icon-windows.svg
order: null
---
# 사용자 모드 덤프
[사용자 모드 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/user-mode-dump-files)(user-mode dump)는 특정 시점에서 [프로세스](ko.Process)의 [가상 주소 공간](ko.Memory#가상-주소-공간) (VAS) 메모리에 내재된 데이터 및 리소스가 수집된 파일이다. 덤프 파일을 통해 당시 사용자 모드 어플리케이션이 어떠한 작업을 수행하고 있었는지 파악할 수 있다. 덤프는 흔히 아래의 프로그램을 통해 수집한다:

* ProcDump
* 작업 관리자
* 프로세스 탐색기
* WinDbg

여기서 ProcDump는 덤프를 수집할 프로세스 아키텍처에 따라 적합한 대응이 가능하다는 점에서 가장 권장되는 프로그램이다 (다시 말해, 32비트 프로세스의 덤프를 생성할 때 ProcDump도 32비트로 자동 전환되어 수집한다). 그렇지 않을 경우, 64비트 운영체제에서 기본적으로 64비트로 구동되는 작업 관리자 및 프로세스 탐색기로 32비트 프로세스의 덤프를 생성하면 [WoW64](https://ko.wikipedia.org/wiki/WOW64)가 참조되어 [콜 스택](https://ko.wikipedia.org/wiki/콜_스택)(call stack)을 분석하는 데 혼선을 준다.

## 사용자 모드 덤프 종류
사용자 모드 덤프는 수집되는 데이터에 따라 종류가 나뉘어진다.

### 전체 덤프
[전체 사용자 모드 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/user-mode-dump-files#full)(Full User-Mode Dump)는 프로그램 실행 이미지를 포함한 프로세스의 가상 메모리 전체를 수집한다.

> 전체 "사용자 모드" 덤프는 차후에 소개할 [전체 "커널 모드" 메모리 덤프](#complete-memory-dump)와 전혀 다른 존재이다.

### 미니 덤프
[미니 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/user-mode-dump-files#minidumps)(Minidump)는 비정상적 작업과 같은 문제를 파악하기에 충분한 프로세스의 [스레드 스택](ko.Process#스레드)(thread stack)들을 위주로 수집한다. 근본 원인 분석(root cause analysis)에 필요한 실행 이미지, 힙 메모리, 그리고 공유 메모리 등의 리소스는 상당한 메모리 공간을 차지하는데, 미니 덤프에서는 이들은 메모리 낭비라고 간주되어 수집에서 제외된다.

### 미니플러스 덤프
미니플러스 덤프(MiniPlus Dump)는 ProcDump에서만 생성되며, 덤프 용량 중에서 가장 큰 비중을 차지하는 실행 이미지가 제외된 [전체 덤프](#full-dump)와 같다. 디버거 프로그램에 실행 이미지 위치를 알려주면 미니플러스 덤프에서도 어셈블리 코드를 확인할 수 있다. 그러므로 미니플러스 덤프는 전체 덤프를 대체할 수 있다.

# 커널 모드 덤프
[커널 모드 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/kernel-mode-dump-files)(kernel-mode dump)는 특정 시점에서 커널에 기여한 [물리 메모리](https://en.wikipedia.org/wiki/Computer_memory) (즉, [RAM](https://en.wikipedia.org/wiki/Random-access_memory)) 내의 리소스가 수집된 파일이다. 덤프 파일을 통해 다시 운영체제가 어떠한 작업을 수행하고 있었는지 파악할 수 있으며, 아래의 방법으로 덤프를 생성한다:

* BSOD
* LiveKD

## 커널 모드 덤프 종류
본 부문은 BSOD가 발생하였을 때 생성될 수 있는 커널 모드 덤프 종류들을 소개한다.

### 전체 메모리 덤프
[전체 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/complete-memory-dump)(Complete Memory Dump)는 사용자 모드를 포함한 물리 메모리 내의 모든 데이터를 전부 수집한다. 시스템이 생성하는 가장 큰 덤프이며, 페이징 파일(paging file)은 최소한 물리 메모리 전체 크기 + 1 MB의 헤더 크기가 확보되어야 한다.

### 커널 메모리 덤프
[커널 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/kernel-memory-dump)(Kernel Memory Dump)는 물리 메모리 중에서 오로지 커널과 관련된 데이터만을 수집하며, 사용자 모드는 제외된다. 생성된 덤프의 크기는 [전체 메모리 덤프](#complete-memory-dump)의 삼분의 일 정도로 작다.

| 포함                         | 제외              |
|:--------------------------------:|:---------------------:|
| 윈도우 커널                   | 비할당 메모리    |
| 커널 모드 드라이버               | 사용자 모드 어플리케이션 |
| 커널 모드 프로그램              | -                     |
| 하드웨어 추상화 계층 (HAL) | -                     |

### 작은 메모리 덤프
[작은 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/small-memory-dump)(Small Memory Dump)는 64 KB 크기로 제한된 메모리 공간에서 덤프를 생성해야 할 때 유용하다. 비록 데이터는 제한적이지만 다음 정보들이 포함되어 있다.

* 충돌이 발생한 스레드의 커널 맥락 및 정보, 그리고 커널 모드 콜 스택
* 충돌이 발생한 프로세스의 커널 맥락 및 정보
* 충돌이 발생한 프로세서의 맥락
* 버그 검사 코드 및 매개변수
* 로드된 드라이버 목록
* 로드 및 언로드된 모듈 목록 *(윈도우 XP부터)*

### 자동 메모리 덤프
[자동 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/automatic-memory-dump)(Automatic Memory Dump)는 [커널 메모리 덤프](#kernel-memory-dump)와 동일하지만, 페이징 파일의 크기는 시스템에서 스스로 결정한다. 일반적으로 페이징 파일의 크기는 물리 메모리 크기보다 작지만 커널 영역을 전부 수집할 수 있을 정도로 설정되어 있다. 시스템 충돌이 발생한 당시, 현 페이징 파일의 크기가 충분하지 않다고 판단되면 윈도우 운영체제는 자동으로 페이징 파일 크기를 최소한 물리 메모리 크기만큼 확장한다.

아래의 레지스트리 키에 위치한 `LastCrashTime` 값은 자동 메모리 덤프의 크기가 확장되었을 당시 날짜 및 시간이 기록되어 있는데, 이를 기점으로 확장된 페이징 파일 크기는 4주간 유지된다.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

> 위의 레지스트리 키는 커널 모드 덤프 파일을 생성하는데 필요한 값들이 포함되어 있다.

### 활성 메모리 덤프
[활성 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/active-memory-dump)(Active Memory Dump)는 디버깅에 필요없는 데이터가 필터링된 [전체 메모리 덤프](#complete-memory-dump)의 일종으로, 덤프 파일 크기는 전체 메모리 덤프다 작지만 [커널 메모리 덤프](#kernel-memory-dump)보다 크다.

| 포함                         | 제외            |
|:--------------------------------:|:------------------:|
| 윈도우 커널                   | 비할당 메모리 |
| 커널 모드 드라이버               | 게스트 VM 페이지     |
| 커널 모드 프로그램              | 파일 캐시         |
| 사용자 모드 어플리케이션           | -                  |
| 하드웨어 추상화 계층 (HAL) | -                  |

> 하이퍼바이저 호스트 머신의 경우, 자식 가상 머신들에 대한 데이터가 필터링된 활성 메모리 덤프가 매우 유용하다.

# 참조
* [Kernel-Mode 덤프 파일의 종류 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/varieties-of-kernel-mode-dump-files)
* [Kernel-Mode 덤프 파일 사용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/enabling-a-kernel-mode-dump-file)
