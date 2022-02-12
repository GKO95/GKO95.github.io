---
layout: docs
category: 소프트웨어
title: Make
slug: ko.Make
icon: icon-cmake.png
order: 0x32
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
`.MK`는 makefile 확장자이다. Makefile을 `makefile`이 아닌 다른 파일명으로 지정하여 불러올 수 있는데, 만일 `.MK` 확장자를 접미사로 붙이면 코드 편집기에서 makefile 파일을 위한 [구문](https://ko.wikipedia.org/wiki/구문_(프로그래밍_언어))(syntax) 하이라이트를 지원하여 지시문 편집에 편리함을 제공한다. 그 외에는 별다른 특별한 의미는 없다.

```bash
# makefile 파일명: "sample.mk"
make -f sample.mk
```

# MAKE: 기초
Make 소프트웨어를 사용하기 위해서는 makefile 언어의 규칙을 준수해야 한다. 이를 제대로 준수하지 않으면 정상적인 빌드 작업이 보장되지 않는다. 

Makefile을 직접 작성하기 위해서는 시험해 볼 수 있는 예시 코드가 필요하다. 본 장에서는 매 실행하다 난수를 출력하는 실행 파일을 만들기 위해 `main.c`, `random.c`, 그리고 `random.h` 파일을 하나의 디렉토리에 준비한다 *(참고: [C++: 랜덤 발생기](/docs/ko.Cpp#c-랜덤-발생기))*.

```c
/**************
 *  random.h  *
 **************/

#ifndef __RANDOM__
#define __RANDOM__

char rand_byte();

#endif    /* __RANDOM__ */
```
----
```c
/**************
 *  random.c  *
 **************/

#include <stdlib.h>
#include <time.h>
#include "random.h"

unsigned char rand_byte() {
    return srand(time(NULL)), rand() % 256;
}
```
----
```c
/**************
 *   main.c   *
 **************/

#include <stdio.h>
#include "random.h"

int main(int argc, char **argv) {
    printf("0x%02X\n", rand_byte());
    return 0;
}
```

## 주석
주석(comment)은 makefile에서 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. 프로그래밍 언어와 달리 makefile에는 오로지 한줄 주석만이 존재한다.

* 한줄 주석 (line comment)
    : *Makefile 스크립트의 줄 하나를 차지하는 주석이며, 해시 기호(`#`)로 표시된다.*

* 여러줄 주석(multiple-line comment)
    : *줄바꿈을 기반으로 문장을 구분하는 makefile에서 백슬래시(`\`)는 긴 문장을 연속의 여러 줄의 짧은 문장으로 나누어 나타내는 편리함을 제공한다. 즉, 한줄 주석에 백슬래시를 통해 여러 줄을 차지하는 주석으로 활용할 수 있다.*

```make
# 한줄 주석: 코드 한 줄을 차지하는 주석이다.
# 여러줄 주석: \
코드 여러 줄을 차지하는 주석이지만, \
블로그에서 구문 하이라이트가 정상적으로 동작하지 않아 본문에서는 사용하지 않을 것이다.
```

## 규칙
가장 기본적인 makefile 규칙은 다음 형태를 지닌다. 여기서 줄임표(ellipsis) `…`는 추가로 기입할 수 있다는 것을 의미한다.

```makefile
# Makefile 일반 규칙
TARGETS … : PREREQUISITE …
	RECIPE
	…
	…
```

| 요소             | 의미  | 설명                                             |
|:---------------:|:---:|------------------------------------------------|
| TARGETS       | 빌드 대상 | `make`에서 빌드될 파일명 혹은 실행할 작업명이다.     |
| PREREQUISITES | 빌드 전제  | TARGETS 빌드를 진행하기 전에 확인되어야 하는 파일들이다.  |
| RECIPE        | 빌드 명령 | TARGETS 빌드를 위해 실행될 명령들이며, 반드시 `Tab ↹`으로 들여쓰기 되어야 한다.     |

TARGETS 구성요소에 줄임표가 있다는 것은 하나 이상의 대상(target)이 기입될 수 있다는 의미이다. 만일 하나의 규칙에서 `TARGET1` 및 `TARGET2`가 빌드 대상으로 명시되어 있다면 이들은 공통된 전제(prerequisites) 및 명령(recipe)을 갖는다.

혹은 세미콜론(`;`)을 사용하여 다음과 같이 나타낼 수 있다.

```makefile
# Makefile 변형 규칙: 세미콜론 사용
TARGET … : PREREQUISITES … ; RECIPE
	RECIPE
	…
	…
```

허나 [C](/docs/ko.C#표현식-및-문장)/[C++](/docs/ko.Cpp#표현식-및-문장)의 문장 종단자(statement terminator)와 달리, makefile의 세미콜론은 오로지 빌드 전제 와 첫 번째 줄의 명령만을 구별짓기 위해 사용된다. 즉, makefile의 한 줄에 여려 개의 명령을 작성하도록 하는 용도가 아니다. Makefile에서 명령을 구분하는 기준은 `Tab ↹` 들여쓰기의 여부이다.

### 동작 순서
Makefile 규칙에 정의된 대상(TARGET)은 명령(RECIPE)을 통해 빌드가 진행되지만, 전제(PREREQUISITE)된 파일에 따라서 명령 실행 여부가 결정된다. 전제의 역할은 빌드 대상 파일을 생성하거나 최신으로 업데이트하는 것이다. 아래는 전제가 빌드 과정에 어떠한 영향을 미치는지 나타내는 순서도이다. 이에 대한 자세한 설명은 [makefile 예시](#makefile-예시)와 함께 설명할 예정이다.

![Makefile 전제에 의한 동작 순서도<sub><i>원본: <a href="https://lucid.app/lucidchart/16e14bf0-856d-4897-8351-bbe34a7f5d68/edit?invitationId=inv_e7b8df47-867b-4b75-9d43-e4b451ed7e1b">Lucidchart</a></i></sub>](/images/docs/make/makefile_prerequisite_flowchart_korean.svg)

여기서 makefile 규칙에 전제가 없는 동시에 디렉토리에 대상 파일 존재할 경우가 발생할 수 있다. 이때 전제 파일과 대상 파일의 수정된 날짜를 비교하는 프로세스가 있는데, 항상 존재하는 대상 파일이 부재하는 전제 파일보다 최신으로 간주된다.

### Makefile 예시
본 장에서 소개한 예시 코드를 활용하여 아래의 간단한 makefile을 작성하였다.

```makefile
# "main" 파일 생성
# : 기본 목표
main : main.o random.o
	cc -o main main.o random.o

# "main.o" 오브젝트 파일 생성
# : 컴파일하기 전에 "main.c" 소스 파일 및 "random.h" 헤더 파일 확인
main.o : main.c random.h
	cc -c main.c

# "random.o" 오브젝트 파일 생성
# : 컴파일하기 전에 "random.c" 소스 파일 및 "random.h" 헤더 파일 확인
random.o : random.c random.h
	cc -c random.c

# make로 생성된 모든 파일 삭제
clean : 
	rm main main.o random.o
```

목표(goal)는 최종적으로 생성하려는 makefile 빌드 대상을 가리키며, 형식상 `make`에 빌드하려는 목표를 명시하는 게 정석이다 (단, `.`으로 이름이 시작되는 대상은 제외). 하지만 목표를 명시하지 않은 채 `make`를 실행하면 makefile의 최상단에 위치한 빌드 대상이 기본 목표(default goal)가 되어 빌드를 진행한다. 그러므로 위의 makefile에서 기본 목표인 `main`을 빌드하기 위해 아래 명령을 입력한다.

```bash
make
# 동일: make main
```

기본 목표의 전제로 명시된 `main.o` 그리고 `random.o` [오브젝트 파일](https://ko.wikipedia.org/wiki/목적_파일)(object file)을 우선적으로 확인한다. 

> 오브젝트 파일은 소스 코드의 컴파일 작업의 산출물이지만, 아직 라이브러리 (예. [C 표준 라이브러리](https://ko.wikipedia.org/wiki/C_표준_라이브러리)) 또는 타 오브젝트 파일과 링크 작업으로 연동되지 않아 실행될 수 없다. 

Makefile에 정의된 `main.o`(혹은 `random.o`) 대상의 빌드 전제에는 `main.c`(혹은 `random.c`) 소스 파일과 `random.h` 헤더 파일이 있다. 마찬가지 방법으로 `make`는 makefile에서 소스 및 헤더 파일명을 갖는 빌드 대상을 탐색하며, 발견하지 못할 시 makefile이 위치한 디렉토리에서 파일 실물을 찾는다. 비록 빌드 전제 파일들을 모두 발견하여도 `main.o`(혹은 `random.o`) 오브젝트 파일이 이미 최신 상태로 컴파일 되어있으면 빌드 작업은 사실상 불필요하다. 그러므로 `make`는 빌드 대상의 파일이 존재하지 않거나, 혹은 소스 코드가 수정된 날짜가 빌드된 시점보다 최근이면 빌드를 시작한다.

빌드 전제에 의하여 `main.o`(혹은 `random.o`) 오브젝트 파일을 빌드하는 명령이 실행된다고 가정한다. 해당 빌드 명령은 `gcc` (혹은 간략히 `cc`) 컴파일러에 `-c` 옵션이 명시되어 있는데, 이는 소스 코드를 순전히 컴파일만 된 오브젝트 파일을 생성하기 위한 설정이다. 즉, 실질적으로 파일을 빌드하는 소프트웨어는 `make`가 아닌 `gcc` 컴파일러이다. 여기서 발생할 수 있는 오해의 소지를 짚어가도록 한다.

1. **`main.o`(혹은 `random.o`) 파일명은 GCC 컴파일러에 의해 지정된 것이다.**

    : *실질적으로 파일을 생성하는 컴파일러 측에서 출력 파일명을 `-o` 옵션으로 결정한다. Makefile 규칙의 target 구성요소에 기입된 이름을 통해 빌드 파일의 존재 및 업데이트 여부를 확인하므로 "컴파일러로부터" 생성될 파일명으로 지정하기를 장려하는 것이다. 참고로 GCC 컴파일러의 `-c` 옵션은 오브젝트 파일명을 자동으로 소스 파일로부터 가져오기 때문에 `-o` 옵션을 생략한 경우가 흔하다. Makefile의 target 명칭을 컴파일러의 출력 파일명에 반영시키는 방안으로 자동 변수(automatic variable)를 활용할 수 있다.*

2. **`main.o`(혹은 `random.o`) 파일을 빌드하기 위해 `main.c`(혹은 `random.c`) 및 `random.h`가 반드시 전제될 필요가 없다.**

    : *Makefile의 빌드 전제는 프로그래밍 언어의 `if` 조건문과 같다: 빌드 대상이나 파일 실물이 모두 존재하면 빌드 명령을 실행하고, 그렇지 않으면 빌드 명령을 실행하지 않는다. 그리고 빌드 전제가 없으면 명령은 무조건 실행된다고 초반에 설명하기도 하였다. 그럼에도 빌드 전제로 파일을 명시하는 이유는 `make`의 빌드 자동화 기능(예. 수정된 날짜를 기반으로 재빌드 여부 판단 등)을 활용할 수 있기 때문이다. 다시 말해, makefile의 빌드 전제는 실질적인 컴파일 작업에 아무런 영향을 주지 않는다.*

기반 목표의 빌드 전제인 `main.o` 그리고 `random.o`가 컴파일 되었으면 `main`의 빌드 명령을 실행한다. 이때의 명령은 컴파일만 된 오브젝트 파일을 비로소 라이브러리와 타 오브젝트 파일과 연동하는 링크 작업을 진행한다. 함수의 정의를 갖는 `random.o` 오브젝트 파일, [시작점](/docs/ko.C#시작점)으로부터 함수를 호출하는 `main.o` 오브젝트 파일, 그리고 시스템 헤더 파일(`stdio.h`, `stdlib.h`, 그리고 `time.h`)로 호출된 C 표준 라이브러리가 링크되어 하나의 `main` 이진 파일이 빌드된다.

기본 목표를 빌드하는 과정에서 생상된 부산물 `main.o` 및 `random.o` 오브젝트 파일, 그리고 최종 빌드 대상 `main` 이진 파일을 제거하는 목적으로 `clean`을 정의하였다.

```bash
make clean
```
