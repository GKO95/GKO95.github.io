---
layout: docs
category: 윈도우
title: WinDbg
slug: ko.WinDbg
icon: icon-windbg.png
order: 0x44
---
# WinDbg
[WinDbg](https://ko.wikipedia.org/wiki/WinDbg), 일명 윈도우 디버거(Windows Debugger)는 윈도우 운영체제에서 구동되는 [사용자 모드](ko.Windows#보호-링)의 어플리케이션이나 [커널 모드](ko.Windows#보호-링)의 덤프 등을 [디버깅](https://ko.wikipedia.org/wiki/디버그)하여 트러블슈팅에 활용되는 프로그램이다.

![WinDbg의 간단한 활용 예시: Surface Pro X에서 생성된 <a href="ko.Dump#커널-모드-덤프">커널 덤프</a> 분석](/images/docs/windbg/windbg_bugcheck_sample.png)

WinDbg는 어플리케이션 충돌이나 [블루스크린](ko.BSOD)으로 생성된 `.DMP` 확장자의 [덤프](ko.Dump) 파일을 분석하는데 매우 유용하게 사용되며, 그 외에도 실시간 디버깅 및 TTD (시간여행 디버깅) 등이 가능하다. 단, WinDbg는 트러블슈팅 도구 중 하나에 불과하며 윈도우에서 발생한 모든 문제를 해결할 수 없다.

## 설치
윈도우 10 및 11을 사용하고 있다면 [마이크로소프트 스토어](https://apps.microsoft.com/store/detail/windbg-preview/9PGJGD53TN86)에서 WinDbg Preview 버전을 설치할 수 있다.

> 만일 윈도우 7 혹은 8.1 운영체제를 사용하거나, 혹은 Preview가 아닌 버전을 설치하려면 윈도우 [SDK](https://developer.microsoft.com/ko-kr/windows/downloads/windows-sdk/)를 통해 설치를 진행한다.

## 설정
원활한 디버깅 작업을 위해서는 아래의 설정을 하는 것을 권장한다.

### 심볼 불러오기
[심볼](ko.Symbol)(symbol)은 시스템 환경 변수 `_NT_SYMBOL_PATH`에 심볼 서버 및 캐시 경로를 지정한다. 아래의 예시는 공개 심볼(public symbol)을 `D:\Symbols` 경로에 캐싱한다.

![환경 변수<code>_NT_SYMBOL_PATH</code>의 예시](/images/docs/windbg/windbg_setting_symbol.png)

### MEX 확장도구
MEX 확장도구는 WinDbg 디버깅 작업을 더 수월하게 사용할 수 있도록 도와준다. [다운로드](https://www.microsoft.com/en-us/download/details.aspx?id=53304)를 하면 라이브러리가 x86 및 x64 아키텍처로 나뉘어져 있는데, 이는 각각 32비트와 64비트 버전의 WinDbg를 위한 확장도구이다. 시스템 환경 변수 `_NT_DEBUGGER_EXTENSION_PATH`에 MEX 확장도구 라이브러리가 위치한 경로를 기입한다. 아래의 예시는 64비트 `mex.dll` 라이브러리가 `%localappdata%\DBG\EngineExtensions\` 경로에 존재한다.

![환경 변수<code>_NT_DEBUGGER_EXTENSION_PATH</code>의 예시](/images/docs/windbg/windbg_setting_extension.png)
