---
layout: docs
language: ko
category: 임베디드
title: Atmel
icon: icon-atmel.png
meta: Atmel
mathjax: true
order: 0x21
---
# ATMEL: 소개
[Atmel](https://ko.wikipedia.org/wiki/아트멜)은 임베디드 관련 반도체 제조 회사였으며, [AVR](https://ko.wikipedia.org/wiki/아트멜_AVR) 계열의 마이크로컨트롤러 개발로 유명하다. 그러나 2016년에 Microchip Technology로 인수되면서 8비트, 32비트, ARM 기반 등의 AVR을 통틀어서 간단히 Atmel이라고 부른다. 플래시 메모리를 최초로 탑재한 마이크로컨트롤러인 AVR은 간단하고 저렴하면서 전력소모도 적어 현재까지도 임베디드 시스템에 널리 사용되고 있다.

> AVR 계열 마이크로컨트롤러 중에서도 가장 흔히 접하는 분류가 megaAVR, 일명 ATmega 시리즈이다.

## 아두이노
[아두이노](https://store.arduino.cc/)(Arduino)는 AVR 마이크로컨트롤러를 사용하는 대표적인 [물리 컴퓨팅](https://ko.wikipedia.org/wiki/물리_컴퓨팅) 플랫폼이다. 말끔히 정리된 PCB 회로와 USB를 통한 컴퓨터 연결 지원, 그리고 아두이노 전용 IDE는 아두이노 플랫폼을 더욱 수월하게 사용할 수 있도록 한다. 이러한 이유로 아두이노는 어린이 코딩 학습용으로도 흔히 활용된다. 그러나 본 문서는 AVR 마이크로컨트롤러를 직접 제어하는 것이 목적이므로 아두이노 IDE를 사용하지 않는다.

# ATMEL: 준비
> 본 문서는 [Arduino UNO R3](https://store.arduino.cc/usa/arduino-uno-rev3) 보드를 기준으로 조사와 준비, 그리고 컴파일러를 설치한다.

본격적인 Atmel 마이크로컨트롤러 제어에 앞서 몇 가지 준비해야 할 사항들이 있다. 임베디드에 들어가는 펌웨어는 일반 프로그램처럼 단순히 빌드하여 아무데서나 실행할 수 있는 소프트웨어가 아니기 때문이다. 해당 MCU에 최적화된 펌웨어를 개발하기 위해서는 그에 대한 철저한 조사가 필요하다.

## 아두이노 우노 R3

![아두이노 우노 R3 전면 모습](/images/docs/atmel/atmel_arduino_uno.jpg)

## Microchip Studio

# ATMEL: 기초

# ATMEL: 핀 설정
포트(PORT)는 MCU에서 나가는 출력 버퍼, 그리고 핀(PIN)은 MCU로 들어오는 입력 버퍼이다.