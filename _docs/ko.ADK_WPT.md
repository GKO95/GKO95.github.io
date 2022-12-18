---
layout: docs
category: 윈도우
title: Windows Performance Toolkit
slug: ko.WPT
icon: icon-windows.svg
order: null
---
# Windows Performance Toolkit
[윈도우 성능 도구 키트](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/)(Windows Performance Toolkit), 혹은 간단히 WPT라고도 부르며 [운영체제](ko.WindowsNT)와 [어플리케이션](ko.Process)의 다양한 성능 데이터를 수집하여 분석할 수 있는 도구를 제공한다. 이와 유사한 작업을 하는 [성능 모니터](ko.Performance_Monitor)에 비해, WPT는 매 [나노초](https://ko.wikipedia.org/wiki/나노초)(ns) 단위로 데이터를 샘플링하므로 높은 해상도와 엄청난 로그 파일 크기를 자랑한다. [호출 스택](ko.WinDbg#호출-스택) 및 리소스 점유률 등을 수집할 수 있어 면밀한 분석이 가능하다.

WPT 도구에는 다음 세 가지 프로그램을 포함한다.

* [Windows Performance Recorder](#wpr)
* [Windows Performance Analyzer](#wpa)
* [Xperf](#xperf) <sub>(deprecated)</sub>

# WPR
[Windows Performance Recorder](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-recorder)(WPR)는 Windows Performance Toolkit 중 데이터 수집에 사용되는 프로그램이다. [GUI](https://ko.wikipedia.org/wiki/그래픽_사용자_인터페이스) 버전의 `WPRUI.exe` (아래 사진 참고) 그리고 [CLI](https://ko.wikipedia.org/wiki/명령_줄_인터페이스) 버전의 `WPR.exe`가 존재한다: 전자는 사용하기 편리한 반면, 후자는 다양한 옵션 설정이 가능하다는 각각의 이점을 지닌다.

![Windows Performance Recorder - GUI 버전](/images/docs/adk/wpr_gui_startup.png)

# WPA
[Windows Performance Analyzer](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-analyzer)(WPA)는 Windows Performance Toolkit 중 `.ETL` 확장자의 로그 파일에 수집된 데이터를 분석하는 데 사용되는 프로그램이다.

![Windows Performance Analyzer](/images/docs/adk/wpa_graph_sample.png)

# Xperf
[Xperf](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/xperf-command-line-reference)는 장려되지 않지만 유지보수 차원에서 지원되고 있는 [Windows Performance Recorder](#wpr) 이전의 [CLI](https://ko.wikipedia.org/wiki/명령_줄_인터페이스) 전용 데이터 수집 프로그램이다.
