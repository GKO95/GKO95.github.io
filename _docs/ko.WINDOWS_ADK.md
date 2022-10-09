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
> 이전에 설치된 윈도우 ADK를 다른 버전으로 바꾸려고 한다면 [제어판](https://ko.wikipedia.org/wiki/제어판_(윈도우))에서 Windows Assessment and Deployment Kit를 우선 제거해야 한다.

마이크로소프트 공식사이트에 [Windows ADK 다운로드 및 설치](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-install) 방법에 대한 설명이 개재되어 있다. 해당 웹페이지로 이동하여 운영체제 및 빌드에 맞는 설치 파일을 다운로드 받는다.

![윈도우 ADK 설치 옵션](/images/docs/adk/adk_installation_path.png)

설치 파일을 실행하면 가장 먼저 나타나는 **Specify Location** 화면에서 아래와 같은 선택지가 주어진다:

* Install the Windows Assessment and Deployment Kit to this computer
* Download the Windows Assessment and Deployment Kit for installation on a separate computer

전자는 본 컴퓨터에 설치하는 용도이며, 후자는 인터넷에 연결되지 않은 타 컴퓨터에 설치할 수 있도록 필요한 환경을 미리 구축한 폴더를 생성하는 데 오프라인 설치에 대한 자세한 내용은 차후에 다시 설명할 예정이다. 윈도우 ADK를 설치할 컴퓨터 선택 및 경로를 지정하였으면 **Select the features you want to install** 화면에서 설치하고자 하는 도구들을 모두 고른다.

![윈도우 ADK 설치 도구](/images/docs/adk/adk_installation_features.png)

위의 그림은 기본적으로 선택된 도구들이며, 자세한 내용은 [§ 도구 목록](#도구-목록)에서 설명할 예정이다.

### 오프라인 설치
비록 오프라인 설치라 하여도 인터넷이 연결된 별도의 PC가 필요하다.

## 도구 목록
다음은 윈도우 ADK 설치 과정에서 **Select the features you want to install** 화면에 나열된 [도구](https://learn.microsoft.com/en-us/windows-hardware/get-started/kits-and-tools-overview)들에 대한 간략한 설명이다.

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
<td><span>시스템 성능을 Event Tracing for Windows를 활용해 기록 및  GUI를 동반한 성능 분석 도구를 포함한다.</span><ul><li>Windows Performance Recorder</li><li>Windows Performance Analyzer</li><li>Xperf</li></ul></td></tr>
<tr><td style="text-align: center;">User State Migration Tool</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Volume Activation Management Tool</td>
<td>.</td></tr>
<tr><td style="text-align: center;">User Experience Virtualization</td>
<td>.</td></tr>
<tr><td style="text-align: center;">Application Virtualization</td>
<td>.</td></tr>
</tbody>
</table>
