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
`.MK`는 makefile 확장자이다. Makefile을 `makefile`이 아닌 다른 파일명으로 지정하여 불러올 수 있는데, 만일 `.MK` 확장자를 접미사로 붙이면 코드 편집기에서 makefile 파일을 위한 [구문](https://ko.wikipedia.org/wiki/구문_(프로그래밍_언어))(syntax)을 지원하여 지시문을 작성하는데 편리함을 제공한다. 그 외에는 별다른 특별한 의미는 없다.

```bash
# makefile 파일명: "sample.mk"
make -f sample.mk
```

# MAKE: 기초
Make 소프트웨어를 사용하기 위해서는 makefile 언어의 규칙을 준수해야 한다. 이를 제대로 준수하지 않으면 정상적으로 빌드되지 않을 위험이 존재한다. 가장 기본적인 makefile 규칙은 다음 형태를 지닌다.

```makefile
target … : prerequisites …
	recipe
	…
	…
```

| 요소              | 설명                                             |
|:---------------:|------------------------------------------------|
| `target`        | `make`에서 실행될 수 있는 동작 명칭이다.                    |
| `prerequisites` | `target` 동작을 실행하기 위해 필요한 전제 파일들이다:<br/>*(전제 파일이 디렉토리에 없으면 해당 파일명의 `target` 동작을 실행한다.)*    |
| `recipe`        | `target` 동작에서 이행될 [bash](https://ko.wikipedia.org/wiki/배시_(유닉스_셸)) 명령들이며, 반드시 `Tab ↹`으로 들여쓰기 되어야 한다.     |

### 예시 코드
Makefile을 직접 작성하기 위해서는 시험해 볼 수 있는 예시 코드가 필요하다. 본 장에서는 매 실행하다 난수를 출력하는 실행 파일을 만들기 위해 `main.c`, `function.c`, 그리고 `function.h` 파일을 하나의 디렉토리에 준비한다 *(참고: [C++: 랜덤 발생기](/docs/ko.Cpp#c-랜덤-발생기))*.

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
본 장에서 소개한 예시 코드를 컴파일 및 링크하기 위해 `make` 언어의 규칙에 맞추어 makefile을 다음과 같이 작성한다.

```makefile
# makefile 예시
main : main.c random.c random.h
	cc -o main main.c random.c
```

위의 makefile은 `main`이란 동작을 실행하기 위해서는 prerequisites에 명시된 `main.c`, `random.c`, 그리고 `random.h` 파일들이 반드시 필요하다. 만일 전제 중 하나라도 찾을 수 없으면 (예를 들어 `random.c`) 터미널에 아래의 문구가 나타나며 빌드가 중단된다.

```
make: *** No rule to make target 'random.c', needed by 'main'.  Stop.
```

해당 문구는 `main`에서 전제로 하는 `random.c` 파일가 현재 디렉토리에 존재하지 않으며, `random.c` 파일을 생성하기 위한 해당 파일명의 target을 makefile에서 찾을 수 없다고 알린다. 자세한 내용은 [간단한 makefile](#간단한-makefile)을 토대로 설명할 예정이다.

모든 전제가 마련되었으면 `make`는 다음 명령어를 통해 target `main`을 실행한다. 그러면 recipe에 있는 명령을 순서대로 처리된다.

```bash
make main
# 동일: make
#      ("main"이 makefile에서 가장 먼저 정의된 target일 경우)
```
```bash
cc -o main main.c random.c
```

여기서 `cc`는 리눅스에서 GCC 컴파일러의 `gcc`의 별칭으로 `main.c`와 `random.c` 소스 코드를 컴파일 및 링크한다. 컴파일로 생성된 출력 파일은 `-o` 옵션에서 명시된 `main` 파일명을 갖는다. 해당 컴파일 작업은 오로지 `gcc` 명령만으로도 동일한 결과가 도출된다. 그러므로 `make`는 순전히 `gcc`와 같은 컴파일러를 보조하는 빌드 도구일 뿐이며, 실질적인 컴파일 및 링크 작업을 위해서는 해당 컴파일러 명령과 옵션을 활용할 줄 알아야 한다.

## 간단한 Makefile

```makefile
main : main.o random.o
	cc -o main main.o random.o

main.o : main.c random.h
	cc -c main.c

random.o : random.c random.h
	cc -c random.c

clean : 
	rm main main.o random.o
```
