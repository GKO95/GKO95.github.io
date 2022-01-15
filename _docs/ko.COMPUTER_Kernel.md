---
layout: docs
language: ko
category: 
title: 커널
meta: Kernel
order: null
---
# 커널: 소개
[커널](https://ko.wikipedia.org/wiki/커널_(컴퓨팅))(kernel)은 [운영체제](https://ko.wikipedia.org/wiki/운영_체제)(operating system)의 일부분으로 하드웨어와 소프트웨어 간의 상호작용을 가능케 하고 리소스 관리 및 최적화를 제공하여 시스템 전체에 대한 완전한 주도권을 갖는다. 윈도우 OS(Windows OS)를 예시로 들자면, 운영체제는 [HDD](https://ko.wikipedia.org/wiki/하드_디스크_드라이브) 혹은 [SSD](https://ko.wikipedia.org/wiki/솔리드_스테이트_드라이브)와 같은 보조기억장치의 `C:` 드라이브에 저장되어 있다가 컴퓨터를 실행하면 BIOS에 의해 RAM [주기억장치](https://ko.wikipedia.org/wiki/주기억장치)에 로드되어 부팅된다.

> 여기서 [BIOS](https://ko.wikipedia.org/wiki/바이오스)란, 컴퓨터 [마더보드](https://ko.wikipedia.org/wiki/메인보드)에 들어있는 [펌웨어](https://ko.wikipedia.org/wiki/펌웨어)(firmware)로 절대 운영체제의 일부가 아니다. 펌웨어는 매우 단순한 프로세스이므로 마더보드에 탑재되어 있는 [EEPROM](https://ko.wikipedia.org/wiki/EEPROM) 혹은 [플래시 메모리](https://ko.wikipedia.org/wiki/플래시_메모리)에서 코드 저장 및 실행이 모두 이루어진다. 펌웨어가 별도의 RAM이 필요한 경우는 방대한 양의 변수를 저장하는 등 휘발성 목적에 그친다.

### 부트로더
![GNU GRUB 부트로더<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Debian_Unstable_GRUB2_(2015).png">위키미디어</a></i></sub>](/images/docs/kernel/kernel_bootloader_GRUB2.png)

부트로더(bootloader)는 운영체제를 부팅시키는 별개의 소프트웨어이다. 비록 위에서는 BIOS에 의해 커널이 우선적으로 RAM에 로드되어 운영체제가 실행된다고 설명하였지만, 실질적으로는 부트로더가 더 먼저 RAM에 로드되어 운영체제 부팅 준비를 마련한다. 가장 대표적인 부트로더로는 리눅스 OS를 설치하면 화면에 나타나는 GNU GRUB가 있다. 윈도우 OS도 부트로더가 존재하나 사용자의 편리성을 위해 기본적으로 빠르고 안전하게 운영체제를 자동으로 부팅하도록 설계되어 있다.

## 운영체제
본 문서는 대표적인 운영체제 중에서 리눅스(Linux)와 윈도우(Windows)를 위주로 살펴본다. 본문에서 사용되는 운영체제 종류는 다음과 같다.

* 리눅스 - **Debian 11 "Bullseye"** *(커널: 리눅스 5.10)*

* 윈도우 - **Windows 11** *(커널: Windows NT 10.0)*

# (리눅스) 커널: 개요
> *참조: [Linux Device Drivers, Third Edition [LWN.net]](https://lwn.net/Kernel/LDD3/)*

[리눅스](https://ko.wikipedia.org/wiki/리눅스_커널)(Linux)는 운영체제 커널이며, 이를 사용하는 리눅스 배포판 운영체제가 대표적으로 [우분투](https://ko.wikipedia.org/wiki/우분투_(운영_체제))(Ubuntu)/[데비안](https://ko.wikipedia.org/wiki/데비안)(Debian), [페도라](https://ko.wikipedia.org/wiki/페도라_리눅스)(Fedora), [안드로이드](https://ko.wikipedia.org/wiki/안드로이드_(운영_체제))(Android) 등이 있다. 배포판이 아닌 "순수" 리눅스를 설치하여 사용해보겠다는 생각을 가질 수 있겠으나, 커널 자체는 하드웨어와 소프트웨어의 징검다리 역할을 할 뿐이며 사용자 측에서 사용할 수 있는 소프트웨어가 없으므로 부팅 이후에 아무것도 실행되지 않는다

# (윈도우) 커널: 개요
> *참조: [Windows 하드웨어 개발자 설명서](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/)*

[윈도우](https://ko.wikipedia.org/wiki/마이크로소프트_윈도우)(Windows) 운영체제는 [윈도우 NT](https://ko.wikipedia.org/wiki/윈도우_NT) 계열의 제품군으로 [사용자 모드](https://ko.wikipedia.org/wiki/사용자_공간)(user mode)와 [커널 모드](https://ko.wikipedia.org/wiki/보호_링#수퍼바이저_모드)(kernel mode) 계층으로 구성된 [아키텍처](https://ko.wikipedia.org/wiki/윈도우_NT_아키텍처)를 사용한다. 프로그램이 실행되는 코드에 따라 사용자 혹은 커널 모드로 전환되어 프로세스가 동작하는데, 여기서 커널 모드는 커널 자체를 가리키는 게 절대 아니다 (윈도우 NT의 커널은 Executive와 HAL 사이에 위치한다).
