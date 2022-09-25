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

여기서 ProcDump는 덤프를 수집할 프로세스 아키텍처에 따라 적합한 대응이 가능하다는 점에서 가장 권장되는 프로그램이다 (다시 말해, 32비트 프로세스의 덤프를 생성할 때 ProcDump도 32비트로 자동 전환되어 수집한다). 그렇지 않을 경우, 64비트 운영체제에서 기본적으로 64비트로 구동되는 작업 관리자 및 프로세스 탐색기로 32비트 프로세스의 덤프를 생성하면 [WoW64](https://ko.wikipedia.org/wiki/WOW64)가 참조되어 [호출 스택](https://ko.wikipedia.org/wiki/콜_스택)(call stack)을 분석하는 데 혼선을 준다.

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
[커널 모드 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/kernel-mode-dump-files)(kernel-mode dump), 일명 메모리 덤프는 특정 시점에서 커널이 기여한 [물리 메모리](https://en.wikipedia.org/wiki/Computer_memory) (즉, [RAM](https://en.wikipedia.org/wiki/Random-access_memory)) 내의 데이터를 수집한 파일이다. 메모리 덤프를 통해 운영체제가 당시 어떠한 작업을 수행하고 있었는지 파악할 수 있다. 아래의 커널 모드 덤프를 생성하는 방법들을 나열한다:

* [블루스크린](ko.BSOD)
* LiveKD

## 커널 모드 덤프 종류
본 부문은 블루스크린이 발생하였을 때 생성될 수 있는 커널 모드 덤프의 [종류](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/varieties-of-kernel-mode-dump-files) 및 적절한 [설정](ko.BSOD#bsod-덤프-설정) 방법을 소개한다.

### 전체 메모리 덤프
[전체 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/complete-memory-dump)(Complete Memory Dump)는 커널 및 사용자 공간 주소을 모두 포함한 물리 메모리 내의 데이터를 전부 수집한다. 시스템이 생성할 수 있는 가장 큰 덤프이며, [가상 메모리](ko.BSOD#가상-메모리)는 최소한 물리 메모리 전체 크기 + 1 [MB](https://ko.wikipedia.org/wiki/메가바이트)의 헤더 크기가 확보되어야 한다.

> 이론적으로 4 GB RAM이 설치되었다면 최소 가상 메모리는 4097 (= 4 × 1024 + 1) MB가 맞지만, 실제 시스템은 그 보다 몇 MB 적게 사용하므로 4096 MB를 최소로 설정해도 무방하다.

### 커널 메모리 덤프
[커널 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/kernel-memory-dump)(Kernel Memory Dump)는 물리 메모리 중에서 오로지 커널 공간 주소의 데이터만을 수집하며, 사용자 공간은 제외된다. 생성된 덤프의 크기는 수집된 데이터 양에 따라 다르지만 [전체 메모리 덤프](#complete-memory-dump)보다 훨씬 작으며, 일반적으로 1~2 GB 안팎 혹은 수집된 데이터가 많으면 5~6 GB까지 되기도 한다.

> 비록 전체 메모리 덤프보다 파일 크기는 작으나, "시스템이 관리하는 크기"로 가상 메모리를 설정하면 RAM 용량만큼의 페이징 파일 크기가 확보된다.

<table style="table-layout: fixed; width: 40%">
<thead><tr><th style="width: 50%;">포함</th><th style="width: 50%;">제외</th></tr></thead>
<tbody style="text-align: center;">
<tr><td>윈도우 커널</td><td>비할당 메모리</td></tr>
<tr><td>커널 모드 드라이버</td><td>사용자 모드 어플리케이션</td></tr>
<tr><td>커널 모드 프로그램</td><td>-</td></tr>
<tr><td>하드웨어 추상화 계층 (HAL)</td><td>-</td></tr>
</tbody>
</table>

### 작은 메모리 덤프
[작은 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/small-memory-dump)(Small Memory Dump)는 [KB](https://ko.wikipedia.org/wiki/킬로바이트) 단위의 저용량 덤프를 생성하는데, 운영체제에 따라 크기가 64 KB, 128 KB, 혹은 256 KB이 될 수 있다. 비록 데이터는 제한적이지만 제한된 저장공간에서 [전용 덤프 파일](ko.BSOD#전용-덤프-파일) 활용이 불가한 환경에서 1 MB 페이징 파일만으로 문제점을 파악하기에 충분한 정보를 제공할 수 있다:

> 커널 모드 덤프 중에서 유일하게 다른 경로(기본: `%SystemRoot%\Minidump`)에 저장되며, 저장할 수 있는 작은 메모리 덤프 개수를 [레지스트리 편집기](https://ko.wikipedia.org/wiki/윈도우_레지스트리)로 설정할 수 있다.

* 충돌이 발생한 스레드의 커널 맥락 및 정보, 그리고 커널 모드 호출 스택
* 충돌이 발생한 프로세스의 커널 맥락 및 정보
* 충돌이 발생한 프로세서의 맥락
* 버그 검사 코드 및 매개변수
* 로드된 드라이버 목록
* 로드 및 언로드된 모듈 목록<sub>(윈도우 XP부터)</sub>

### 자동 메모리 덤프
[자동 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/automatic-memory-dump)(Automatic Memory Dump)는 [커널 메모리 덤프](#kernel-memory-dump)와 동일한 덤프를 수집하지만, 시스템에서 가상 메모리 크기를 결정하는 방식에서 차이가 있다. 블루스크린이 일어나면 시스템은 대부분의 상황에서도 커널 메모리 덤프를 수집하는 데 충분히 작은 페이징 파일 크기를 택한다. 만일 부족하다면 시스템은 페이징 파일의 크기를 RAM 용량 (혹은 최대 32 GB까지)만큼 확장시키고 QWORD 레지스트리 `PagefileTooSmall`을 생성을 생성한다.

> 확장된 가상 메모리 크기는 4주간 유지되며, 당장 원래대로 되돌리고 싶다면 레지스트리 편집기에서 `PagefileTooSmall` 값을 삭제하고 재부팅한다.

### 활성 메모리 덤프
[활성 메모리 덤프](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/active-memory-dump)(Active Memory Dump)는 디버깅에 필요없는 데이터가 필터링된 [전체 메모리 덤프](#complete-memory-dump)의 일종으로, 덤프 파일 크기는 전체 메모리 덤프보다 작지만 [커널 메모리 덤프](#kernel-memory-dump)보다 크다.

> 자식 가상 머신들에 대한 데이터가 필터링되므로, [하이퍼바이저](https://ko.wikipedia.org/wiki/하이퍼바이저) 호스트 머신의 덤프를 수집하는 데 매우 유용하다.

<table style="table-layout: fixed; width: 40%">
<thead><tr><th style="width: 50%;">포함</th><th style="width: 50%;">제외</th></tr></thead>
<tbody style="text-align: center;">
<tr><td>윈도우 커널</td><td>비할당 메모리</td></tr>
<tr><td>커널 모드 드라이버</td><td>게스트 VM 페이지</td></tr>
<tr><td>커널 모드 프로그램</td><td>파일 캐시</td></tr>
<tr><td>사용자 모드 어플리케이션</td><td>-</td></tr>
<tr><td>하드웨어 추상화 계층 (HAL)</td><td>-</td></tr>
</tbody>
</table>

# 참조
* [Enabling a Kernel-Mode Dump File - Windows drivers &#124; Microsoft Learn](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/enabling-a-kernel-mode-dump-file)
* [How to determine the appropriate page file size for 64-bit versions of Windows - Windows Client Management &#124; Microsoft Learn](https://learn.microsoft.com/en-us/windows/client-management/determine-appropriate-page-file-size)