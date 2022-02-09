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
Make 소프트웨어를 사용하기 위해서는 makefile 언어의 규칙을 준수해야 한다. 이를 제대로 준수하지 않으면 정상적인 빌드 작업이 보장되지 않는다. 가장 기본적인 makefile 규칙은 다음 형태를 지닌다.

> Makefile 언어는 암묵적인 관습이 상당히 존재한다. Makefile의 동작 원리를 설명하면서 자츰 이해하게 될 것이다.

```makefile
TARGET … : PREREQUISITES …
	RECIPE
	…
	…
```

| 요소             | 의미  | 설명                                             |
|:---------------:|:---:|------------------------------------------------|
| TARGET        | 빌드 대상 | `make`에서 생성될 파일명 혹은 실행할 작업명이다.     |
| PREREQUISITES | 빌드 전제  | TARGET을 실행하기 전에 확인되어야 하는 파일들이다.    |
| RECIPE        | 빌드 명령 | TARGET에서 실행될 [bash](https://ko.wikipedia.org/wiki/배시_(유닉스_셸)) 명령들이며, 반드시 `Tab ↹`으로 들여쓰기 되어야 한다.     |

`make`는 빌드 대상(target)의 명령(recipe)을 실행하기 전에 우선 빌드 전제(prerequisites)부터 확인하는데 아래의 순서도에 따라 진행된다. 빌드 전제는 작업 상태에 따라 빌드 절차에 영향을 미치는데, 해당 내용은 차후 규칙에 대하여 자세히 설명할 예정이다.

![Makefile의 <code>PREREQUISITE</code> 동작 순서도<sub><i>원본: <a href="https://lucid.app/lucidchart/16e14bf0-856d-4897-8351-bbe34a7f5d68/edit?invitationId=inv_e7b8df47-867b-4b75-9d43-e4b451ed7e1b">Lucidchart</a></i></sub>](/images/docs/make/makefile_prerequisite_flowchart_korean.svg)

### 예시 코드
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

### 규칙 설명
본 장에서 소개한 예시 코드를 활용하여 아래의 간단한 makefile을 작성하였다.

```makefile
# "main" 이진 파일 생성 (default goal)
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

# make로 컴파일된 모든 파일 삭제
clean : 
	rm main main.o random.o
```

위의 makefile은 `main` 이진 파일 빌드 대상의 전제로 명시된 `main.o` 그리고 `random.o` [오브젝트 파일](https://ko.wikipedia.org/wiki/목적_파일)(object file)을 우선적으로 확인한다. 오브젝트 파일은 소스 코드의 컴파일 작업의 산출물이지만, 아직 라이브러리 (예. [C 표준 라이브러리](https://ko.wikipedia.org/wiki/C_표준_라이브러리)) 또는 타 오브젝트 파일과 링크 작업으로 연동되지 않아 실행될 수 없다. `make`는 전제로부터 제시된 `main.o` 그리고 `random.o` 이름의 빌드 대상으로 이동한다.

Makefile에 정의된 `main.o`(혹은 `random.o`) 대상의 빌드 전제에는 `main.c`(혹은 `random.c`) 소스 파일과 `random.h` 헤더 파일이 있다. `make`는 마찬가지 방법으로 makefile에서 소스 및 헤더 파일명을 갖는 빌드 대상을 탐색하며, 발견하지 못할 시 makefile이 위치한 현재 디렉토리에서 파일 실물을 찾는다. 비록 빌드 전제가 되는 두 파일을 모두 발견하여도 빌드 대상인 `main.o`(혹은 `random.o`) 오브젝트 파일이 이미 최신 상태로 컴파일 되어있으면 빌드 작업은 사실상 불필요하다. 그러므로 `make`는 빌드 대상의 파일이 존재하지 않거나, 혹은 소스 코드가 수정된 날짜가 빌드된 시점보다 최근이면 빌드를 시작한다.

빌드 전제에 의하여 `main.o`(혹은 `random.o`) 오브젝트 파일을 빌드하는 명령이 실행된다고 가정한다. 해당 빌드 명령은 `gcc` (혹은 간략히 `cc`) 컴파일러에 `-c` 옵션이 명시되어 있는데, 이는 소스 코드를 순전히 컴파일만 된 오브젝트 파일로 생성하기 위한 설정이다. 즉, 실질적으로 파일을 빌드하는 소프트웨어는 `make`가 아닌 `gcc` 컴파일러이다. 이를 기반으로 몇 가지 발생할 수 있는 오해의 소지를 짚어가려고 한다.

1. **빌드된 파일 이름은 Makefile 규칙의 TARGET로부터 지정되는 게 아니다.**

    : *Makefile 규칙을 소개하였을 당시 TARGET은 "생성될 파일명"이라고 설명하였다. 하지만 실제로 파일을 생성하는 것은 컴파일러의 몫이므로 컴파일러 옵션 중에서 출력 파일명을 지정하는 `-o` 옵션에 따라 정해진다. 그렇다고 makefile의 설명이 틀린 것은 아니며, `make`가 정상적으로 동작하기 위해 TARGET을 "생성될 (컴파일러 지정) 파일명"으로 일치시키는 것을 권장한다. 참고로 GCC 컴파일러의 `-c` 옵션은 오브젝트 파일명을 자동으로 소스 파일로부터 가져오기 때문에 `-o` 옵션이 생략된 경우이다.*

    > Makefile의 TARGET의 명칭을 자동으로 컴파일러에 반영되도록 하기 위해 흔히 [자동 변수](#자동-변수)(automatic variable)를 사용하며, 이에 대하여 차후에 소개할 예정이다.

2. **빌드를 위해 필요한 소스 및 헤더 파일은 빌드 전제로 명시될 필요가 없다.**

    : *Makefile의 빌드 전제는 프로그래밍 언어의 `if` 조건문과 같다: 해당 이름의 빌드 대상이 makefile에 정의되어 있거나, 혹은 파일이 디렉토리에 존재하면 빌드 명령을 실행한다. 만일 하나라도 찾지 못하면 빌드 명령을 실행하지 않는다. 여기서 빌드 전제가 없으면 명령은 무조건 실행된다는 역발상을 떠오를 수 있다. 그럼에도 빌드 전제로 파일을 명시하는 이유는 `make`의 빌드 자동화 기능(예. 수정된 날짜를 기반으로 재빌드 여부 판단 등)을 활용할 수 있기 때문이다. 다시 말해, makefile의 빌드 전제는 실질적인 컴파일 작업에 아무런 영향을 주지 않는다.*

대상 `main`의 빌드 전제인 `main.o` 그리고 `random.o`가 컴파일 되었으면 `main`의 빌드 명령을 실행한다. 이때의 명령은 컴파일만 된 오브젝트 파일을 비로소 라이브러리와 타 오브젝트 파일과 연동하는 링크 작업을 진행한다. 함수의 정의를 갖는 `random.o` 오브젝트 파일, [시작점](/docs/ko.C#시작점)으로부터 함수를 호출하는 `main.o` 오브젝트 파일, 그리고 시스템 헤더 파일(`stdio.h`, `stdlib.h`, 그리고 `time.h`)로 호출된 C 표준 라이브러리가 링크되어 하나의 `main` 이진 파일이 빌드된다. 그리고 이 모든 과정은 아래의 `make` 명령 하나만으로 처리된다.

```bash
make
# 동일: make main
```

형식상 `make`를 사용할 때 빌드할 대상을 함께 명시해야 하지만, 그렇지 아니할 경우에는 최상단의 대상 빌드가 진행되는데 이를 기본 목표(default goal)라고 부른다. 현재 makefile 예시에서는 가장 최상단에 있는 `main`이 기본 목표로써 최종 빌드 대상이다. 단, `.` 접두사를 갖는 빌드 대상은 기본 목표로부터 제외된다.

맨 마지막 빌드 대상인 `clean`의 명령을 확인하면 `main.o` 및 `random.o` 오브젝트 파일, 그리고 `main` 이진 파일을 제거한다. 빌드된 파일들을 모두 제거하기 위해 정의된 규칙이다.

```bash
make clean
```
