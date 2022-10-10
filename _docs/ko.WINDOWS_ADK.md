---
layout: docs
category: 윈도우
title: 윈도우 ADK
slug: ko.WindowsADK
icon: icon-windows.svg
order: 0x48
---
# 윈도우 ADK
[윈도우 평가 및 배포 키트](https://en.wikipedia.org/wiki/Windows_Assessment_and_Deployment_Kit)(Windows Assessment and Deployment Kit), 일명 윈도우 ADK는 운영체제 대규모 배포를 위한 [윈도우](ko.WindowsNT) 이미지 커스터마이징 및 시스템 성능을 시험할 수 있는 도구 등을 제공한다. 기업이나 단체에서 IT 기술자가 여러 대의 PC에서 운영체제를 관리하거나 중요한 서버에서 성능 이상이 감지되면 문제를 파악하기 위해 사용된다.

## 설치
마이크로소프트 공식사이트의 [Windows ADK 다운로드 및 설치](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-install) 페이지로 이동하여 운영체제 및 빌드에 맞는 `adksetup.exe` 설치 파일을 다운로드 받는다. 윈도우 ADK 설치에는 인터넷 연결이 반드시 필요하며, 비록 오프라인 설치를 지원하지만 이 또한 인터넷에 연결된 PC에서 준비되어야 한다.

> 이전에 설치된 윈도우 ADK를 다른 버전으로 바꾸려고 한다면 [제어판](https://ko.wikipedia.org/wiki/제어판_(윈도우))에서 Windows Assessment and Deployment Kit을 우선 제거해야 한다.

![윈도우 ADK 설치 옵션](/images/docs/adk/adk_installation_path.png)

설치 파일을 실행하면 가장 먼저 나타나는 **Specify Location** 화면에서 아래와 같은 선택지가 주어진다:

* **Install the Windows Assessment and Deployment Kit to this computer**

    인터넷을 통해, 혹은 (아래 선택지에 의해) 로컬에 저장된 리소스로부터 본 컴퓨터에 윈도우 ADK를 설치한다. 문제가 발생하면 인터넷 연결을 재확인하거나 리소스 경로를 재지정 할 것을 요청한다.

    > 대안으로 윈도우 ADK가 이미 설치된 컴퓨터의 설치 경로(기본: `%ProgramFiles(x86)%\Windows Kits\10\`)에서 원하는 도구명의 폴더 전체를 복사하여 사용할 수 있다.

* **Download the Windows Assessment and Deployment Kit for installation on a separate computer**

    타 컴퓨터에 윈도우 ADK를 [오프라인 설치](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-offline-install)하는 데 필요한 리소스 및 동일한 `adksetup.exe` 설치 파일이 포함된 폴더를 생성한다. 해당 폴더를 다른 컴퓨터에 옮겨 안에 들어있는 설치 파일을 실행하여 윈도우 ADK를 설치한다.

## 도구 목록
설치 옵션을 선택한 다음에는 **Select the features you want to install** 화면이 나타나며 설치할 수 있는 도구들을 나열한다.

![윈도우 ADK 도구 설치](/images/docs/adk/adk_installation_features.png)

위의 그림은 윈도우 ADK를 설치할 때 권장 사항으로 선택된 도구들이지 필수가 아니며, 다음은 설치 파일에서 제공하는 ADK 도구들에 대한 간략한 설명이다.

<table style="width: 80%;">
<colgroup><col style="width: 30%;"/><col style="width: 70%;"/></colgroup>
<thead><tr><th><a href="https://learn.microsoft.com/en-us/windows-hardware/get-started/kits-and-tools-overview">ADK 도구</a></th><th>설명</th></tr></thead>
<tbody>
<tr><td style="text-align: center;">Windows Configuration Designer</td>
<td>다수의 윈도우 데스크탑 운영체제 환경 설정을 한꺼번에 관리 및 적용한다.<br/><sub>※ 윈도우 10 이상에서는 <a href="https://apps.microsoft.com/store/detail/windows-configuration-designer/9NBLGGH4TX22">마이크로소프트 스토어</a>에서도 설치가 가능하다.</sub></td></tr>
<tr><td style="text-align: center;">Deployment Image Servicing and Management</td>
<td>윈도우 설치 이미지 배포 및 커스터마이징 서비스를 제공하는 명령어 도구이다.</td></tr>
<tr><td style="text-align: center;">Windows System Image Manager</td>
<td>설치되는 윈도우 운영체제의 설정을 변경할 수 있는 <a href="https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/update-windows-settings-and-scripts-create-your-own-answer-file-sxs"><code>unattended.xml</code></a> 파일을 생성한다.</td></tr>
<tr><td style="text-align: center;">Windows Assessment Toolkit</td>
<td>윈도우 운영체제 혹은 구성요소의 성능, 신뢰성, 그리고 기능성을 검사한다.</td></tr>
<tr><td style="text-align: center;"><a href="ko.WPT">Windows Performance Toolkit</a></td>
<td>Event Tracing for Windows를 활용한 <a href="ko.WPT#windows-performance-recorder">성능 기록</a> 및 <a href="ko.WPT#windows-performance-analyzer">분석 도구</a>를 제공한다.</td></tr>
<tr><td style="text-align: center;">User State Migration Tool</td>
<td>기존 사용자 계정, 파일, 그리고 환경 설정을 새로 설치된 윈도우 운영체제에 이식한다.</td></tr>
<tr><td style="text-align: center;">Volume Activation Management Tool</td>
<td>마이크로소프트 제품군(예. 윈도우, <a href="https://www.office.com/">오피스</a> 등) 볼륨 및 상업용 라이선스 인증 절차를 자동화 및 중앙관리한다.</td></tr>
<tr><td style="text-align: center;">User Experience Virtualization</td>
<td>로그온 장치와 무관하게 개별 사용자가 구성한 윈도우 환경 및 어플리케이션 설정을 일관적으로 제공한다.</td></tr>
<tr><td style="text-align: center;">Application Virtualization</td>
<td>마이크로소프트에서 제공하는 <a href="https://ko.wikipedia.org/wiki/응용_프로그램_가상화">어플리케이션 가상화</a> 및 <a href="https://en.wikipedia.org/wiki/Application_streaming">스트리밍</a> 솔루션이다.<br/><sub>※ 2026년 4월 서비스 종료: <a href="https://azure.microsoft.com/products/virtual-desktop/">애저 가상 데스크탑</a>에 MSIX 앱을 연결할 것을 권장</sub></td></tr>
</tbody>
</table>

### 애드온
윈도우 ADK에 부가적으로 설치할 수 있는 애드온(add-on)이 있다:

* **[Windows Preinstallation Environment](ko.WinPE)**: 윈도우 데스크탑 운영체제의 설치, 배포, 그리고 점검을 위한 초소형 운영체제이다.

    > [RTM](https://ko.wikipedia.org/wiki/소프트웨어_배포_생명_주기#RTM) 이후의 ADK 도구 업데이트를 지원하기 위한 일환으로 윈도우 10, 버전 1809부터 ADK 애드온으로 전환되었다.
