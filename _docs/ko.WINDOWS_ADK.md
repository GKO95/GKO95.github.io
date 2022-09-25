---
layout: docs
category: 윈도우
title: 윈도우 ADK
slug: ko.WindowsADK
icon: icon-windows.svg
order: null
---
# 윈도우 ADK
[윈도우 평가 및 배포 키트](https://en.wikipedia.org/wiki/Windows_Assessment_and_Deployment_Kit)(Windows Assessment and Deployment Kit), 일명 윈도우 ADK는 운영체제 대규모 배포를 위한 윈도우 이미지 커스터마이징 및 시스템 성능을 시험할 수 있는 도구 등을 제공한다.

## 설치
마이크로소프트 공식사이트에서 [Windows ADK 다운로드 및 설치](https://docs.microsoft.com/en-us/windows-hardware/get-started/adk-install) 페이지로 이동하여 설치 파일을 다운로드 및 실행한다.

> 이전에 설치된 윈도우 ADK를 다른 버전으로 바꾸려고 한다면 제어판에서 해당 버전을 먼저 제거해야 한다.

![윈도우 ADK 설치 경로](/images/docs/adk/adk_installation_path.png)

설치할 경로를 지정하였으면 윈도우 ADK에서 설치하고자 하는 기능별 항목을 선택할 수 있다. 아래는 항목마다 어떠한 프로그램 및 도구가 포함되어 있는지 소개한다.

![윈도우 ADK 설치 항목](/images/docs/adk/adk_installation_features.png)

<table>
<thead><tr><th>설치 항목</th><th>설명</th></tr>
</thead>
<tbody>
<tr><td>Windows Performance Toolkit</td>
<td><span>시스템 성능을 Event Tracing for Windows를 활용해 기록 및  GUI를 동반한 성능 분석 도구를 포함한다.</span><ul><li><a href="#windows-performance-recorder">Windows Performance Recorder</a></li><li><a href="#windows-performance-analyzer">Windows Performance Analyzer</a></li><li>Xperf</li></ul></td></tr>
</tbody>
</table>

# Windows Performance Recorder
[Windows Performance Recorder](https://docs.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-recorder)(WPR)

# Windows Performance Analyzer
[Windows Performance Analyzer](https://docs.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-analyzer)(WPA)
