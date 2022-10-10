---
layout: docs
category: 윈도우
title: 윈도우 ADK
slug: ko.WindowsADK
icon: icon-windows.svg
order: 0x48
---
# 윈도우 ADK
[윈도우 평가 및 배포 키트](https://en.wikipedia.org/wiki/Windows_Assessment_and_Deployment_Kit)(Windows Assessment and Deployment Kit), 일명 윈도우 ADK는 운영체제 대규모 배포를 위한 윈도우 이미지 커스터마이징 및 시스템 성능을 시험할 수 있는 도구 등을 제공한다. 기업이나 단체에서 IT 기술자가 여러 대의 PC에서 운영체제를 관리하거나 중요한 서버에서 성능 이상이 감지되면 문제를 파악하기 위해 사용된다.

## 설치
마이크로소프트 공식사이트의 [Windows ADK 다운로드 및 설치](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-install) 페이지로 이동하여 운영체제 및 빌드에 맞는 `adksetup.exe` 설치 파일을 다운로드 받는다. 윈도우 ADK 설치에는 인터넷 연결이 반드시 필요하며, 비록 [오프라인 설치](#오프라인-설치)를 지원하지만 이 또한 인터넷에 연결된 PC에서 준비되어야 한다.

> 이전에 설치된 윈도우 ADK를 다른 버전으로 바꾸려고 한다면 [제어판](https://ko.wikipedia.org/wiki/제어판_(윈도우))에서 Windows Assessment and Deployment Kit을 우선 제거해야 한다.

![윈도우 ADK 설치 옵션](/images/docs/adk/adk_installation_path.png)

설치 파일을 실행하면 가장 먼저 나타나는 **Specify Location** 화면에서 아래와 같은 선택지가 주어진다:

* **Install the Windows Assessment and Deployment Kit to this computer**

    인터넷을 통해, 혹은 (아래 선택지에 의해) 로컬에 저장된 리소스로부터 본 컴퓨터에 윈도우 ADK를 설치한다. 문제가 발생하면 인터넷 연결을 재확인하거나 리소스 경로를 재지정 할 것을 요청한다.

    > 대안으로 윈도우 ADK가 이미 설치된 컴퓨터의 설치 경로(기본: `%ProgramFiles(x86)%\Windows Kits\10\`)에서 원하는 도구명의 폴더 전체를 복사하여 사용할 수 있다.

* **Download the Windows Assessment and Deployment Kit for installation on a separate computer**

    타 컴퓨터에 윈도우 ADK를 [오프라인 설치](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-offline-install)하는 데 필요한 리소스 및 동일한 `adksetup.exe` 설치 파일이 포함된 폴더를 생성한다. 해당 폴더를 다른 컴퓨터에 옮겨 안에 들어있는 설치 파일을 실행하여 윈도우 ADK를 설치한다.

## 도구 목록
다음은 윈도우 ADK에서 제공하는 도구들에 대한 간략한 설명이다.

![윈도우 ADK 도구 설치](/images/docs/adk/adk_installation_features.png)

<table style="width: 100%;">
<colgroup><col style="width: 25%;"/><col style="width: 75%;"/></colgroup>
<thead><tr><th>ADK 도구</th><th>설명</th></tr>
</thead>
<tbody>
<tr><td style="text-align: center;">Windows Configuration Designer</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Windows Preinstallation Environment</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Deployment Image Servicing and Management</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Windows System Image Manager</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Windows Assessment Toolkit</td>
<td>.</td></tr>
<tr><td style="text-align: center;"><a href="ko.WPT">Windows Performance Toolkit</a></td>
<td><span>시스템 성능을 Event Tracing for Windows를 활용해 기록 및  GUI를 동반한 성능 분석 도구를 포함한다.</span><ul><li>Windows Performance Recorder</li><li>Windows Performance Analyzer</li><li>Xperf <sub>(지원 종료)</sub></li></ul></td></tr>
<tr><td style="text-align: center;">User State Migration Tool</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Volume Activation Management Tool</td>
<td>.</td></tr>
<tr><td style="text-align: center;">User Experience Virtualization</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Application Virtualization</td>
<td><span>마이크로소프트에서 제공하는 <a href="https://ko.wikipedia.org/wiki/응용_프로그램_가상화">어플리케이션 가상화</a> 및 <a href="https://en.wikipedia.org/wiki/Application_streaming">스트리밍</a> 솔루션이다.</span><br/><sub>2026년 4월 서비스 종료: 애저 가상 데스크탑에 MSIX 앱을 연결할 것을 권장</sub></td></tr>
</tbody>
</table>

# 같이 보기
* [Kits and tools overview &#124; Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/get-started/kits-and-tools-overview)
