---
layout: docs
category: 소프트웨어
title: Make
slug: ko.Make
icon: icon-cmake.png
order: null
---
# MAKE: 소개
> *참조: [GNU make](https://www.gnu.org/software/make/manual/make.html)*

[Make](https://ko.wikipedia.org/wiki/Make_(소프트웨어)) 소프트웨어는 프로그래밍 언어 컴파일러가 특정 설정 및 순서로 여러 소스 코드를 컴파일하여 링크시키는 `make` 명령어의 빌드 자동화 도구이다. 본 소프트웨어는 컴파일러가 아니므로 빌드하려는 프로그래밍 언어의 컴파일러가 별도로 필요하다. 본문은 [GNU Make](https://www.gnu.org/software/make/) 소프트웨어와 [C](/docs/ko.C)/[C++](/docs/ko.Cpp) 언어의 [GCC](https://ko.wikipedia.org/wiki/GNU_컴파일러_모음) 컴파일러를 기준으로 설명한다.

```bash
# Make 소프트웨어 설치 및 버전 확인
make -v
```

## Makefile
Makefile은 `make` 명령으로 소스 코드를 빌드하는데 필요한 지시문들이 작성된 파일이다. 기본적으로 Make 소프트웨어는 현재 디렉토리에서 아무런 확장자가 없는 `makefile` 파일을 찾아 빌드 작업을 실행한다. 본문의 대부분은 makefile에 사용되는 언어 및 동작 원리를 위주로 설명한다.

### `.MK` 확장자
`.MK`는 makefile 확장자이다. Makefile을 `makefile`이 아닌 다른 파일명으로 지정하여 불러올 수 있는데, 만일 `.MK` 확장자를 접미사로 붙이면 코드 편집기에서 makefile 파일을 위한 [구문](https://ko.wikipedia.org/wiki/구문_(프로그래밍_언어))(syntax)을 지원하여 지시문을 작성하는데 편리함을 제공한다. 그 외에는 별다른 특별한 의미는 없다.

```bash
# makefile 파일명: "sample.mk"
make -f sample.mk
```

# MAKE: 기초
Make 소프트웨어를 사용하기 위해서는 makefile 언어의 규칙인 [구문](https://ko.wikipedia.org/wiki/구문_(프로그래밍_언어))(syntax)을 준수해야 한다. 이를 제대로 준수하지 않으면 정상적으로 빌드되지 않을 위험이 존재한다. 본 장에서는 makefile 언어 활용에 기초적인 정보 제공을 목표로 한다.
