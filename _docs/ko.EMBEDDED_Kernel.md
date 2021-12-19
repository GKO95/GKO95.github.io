---
layout: docs
language: ko
category: 임베디드
title: 커널
meta: Kernel
order: 0x32
---
# 커널: 소개
[커널](https://ko.wikipedia.org/wiki/커널_(컴퓨팅))(kernel)은 [운영체제](https://ko.wikipedia.org/wiki/운영_체제)(operating system)의 일부분으로 하드웨어와 소프트웨어 간의 상호작용을 가능케 하여 시스템 전체에 대한 완전한 주도권을 갖는다. 가장 일반적인 윈도우 OS(Windows OS)를 예시로 들자면, 운영체제는 [HDD](https://ko.wikipedia.org/wiki/하드_디스크_드라이브) 혹은 [SSD](https://ko.wikipedia.org/wiki/솔리드_스테이트_드라이브)와 같은 컴퓨터 보조기억장치의 `C:` 드라이브에 저장되어 있다가 부팅되면 BIOS에 의해 가장 먼저 RAM [주기억장치](https://ko.wikipedia.org/wiki/주기억장치)에 로드되어 실행된다.

> 여기서 [BIOS](https://ko.wikipedia.org/wiki/바이오스)란, 컴퓨터 [마더보드](https://ko.wikipedia.org/wiki/메인보드)에 들어있는 [펌웨어](https://ko.wikipedia.org/wiki/펌웨어)(firmware)로 절대 운영체제의 일부가 아니다. 펌웨어는 매우 단순한 프로세스이므로 마더보드에 탑재되어 있는 [EEPROM](https://ko.wikipedia.org/wiki/EEPROM) 혹은 [플래시 메모리](https://ko.wikipedia.org/wiki/플래시_메모리)에서 코드 저장 및 실행이 모두 이루어진다. 펌웨어서 별도의 RAM이 필요한 경우는 방대한 양의 변수를 저장하는 등 휘발성 목적에 그친다.

부팅 과정에서 운영체제의 커널이 우선적으로 로드되어 장치 드라이버(device driver)를 통해 하드웨어 리소스 초기화 및 관리를 진행한다.

### 부트로더
![GNU GRUB 부트로더<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Debian_Unstable_GRUB2_(2015).png">위키미디어</a></i></sub>](/images/docs/kernel/kernel_bootloader_GRUB2.png)

부트로더(bootloader)는 운영체제를 부팅시키는 소프트웨어이다. 비록 위에서는 BIOS에 의해 커널이 우선적으로 RAM에 로드되어 운영체제가 실행된다고 설명하였지만, 실질적으로는 부트로더가 더 먼저 RAM에 로드되어 운영체제 부팅 준비를 마련한다. 가장 대표적인 부트로더로는 리눅스 OS를 설치하면 화면에 나타나는 GNU GRUB가 있다. 윈도우 OS도 부트로더가 존재하나 사용자의 편리성을 위해 기본적으로 빠르고 안전하게 운영체제를 자동으로 부팅하도록 설계되어 있다.

## 라즈베리 파이
[라즈베리 파이 4 모델 B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) 4GB 램 옵션으로 설명한다: https://www.raspberrypi.com/documentation/computers/linux_kernel.html
