---
layout: docs
category: 윈도우
title: 프로세서
slug: ko.Processor
icon: icon-windows.svg
order: null
---
# 프로세서

## 보호 링
[보호 링](https://ko.wikipedia.org/wiki/보호_링)(protection ring)은 데이터와 기능을 결함과 위협적인 행위로부터 보호하는 메커니즘이다.

![프로세서 보호 링의 다이어그램 예시<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Priv_rings.svg">위키미디어</a></i></sub>](/images/docs/processor/processor_protection_ring.svg)

보호 링은 시스템 운영체제의 [권한](https://en.wikipedia.org/wiki/Privilege_(computing))(privilege) 구조를 이루는 계층으로써, CPU 구조가 하드웨어적으로 어떤 [모드](https://en.wikipedia.org/wiki/CPU_modes)에 있는지에 따라 권한에 의해 제한된 일부 명령어들 활용 가능여부가 결정된다. 해당 명령어들은 CPU 및 메모리와 같은 하드웨어를 직접적으로 상호작용하므로 자칫 잘못하면 시스템에 치명적인 문제를 야기한다. 일반적으로 보호 링은 최소 두 계층, 다시 말해 두 개의 CPU 모드가 존재한다:

* **[커널 모드](https://ko.wikipedia.org/wiki/보호_링#수퍼바이저_모드)(kernel mode)**

    일명 수퍼바이저 모드(supervisor mode)는 시스템에 민감한 영향을 줄 수 있는 입출력 동작이나 메모리 접근에 아무런 제약을 받지 않고 아키텍처의 모든 작업을 수행할 수 있다. [가상 주소 공간](ko.Process#가상-주소-공간) 중 커널 공간(kernel space)에서 작업을 처리한다. 대표적인 예시로 디바이스 드라이버(device driver)와 같은 커널 모듈(kernel module)이 커널 모드에서 동작한다.

* **사용자 모드(user mode)**

    사용할 수 있는 CPU 작업이 커널 모드에 비해 하드웨어 상호작용 등 민간한 시스템 구성요소의 접근이 제한된다. 만일 커널 동작이 요구되면 시스템 호출(system call)을 통해 커널에 요청을 해야 한다. 가상 주소 공간 중 사용자 공간(user space)에서 작업을 처리한다. 대표적인 예시로 일반 어플리케이션의 프로세스가 사용자 모드에서 동작한다.

이렇게 보호 링이 분류된 이유는 "더 많은 제어에는 더 큰 책임이 뒤따른다"는 관점에서 비롯된다. 커널 모드의 프로그램 오동작은 시스템 전체에 충돌을 일으킬 수 있기 때문에 문제가 절대로 발생하지 않도록 신뢰될 수 있어야 한다.
