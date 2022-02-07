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
| `TARGET`        | 빌드 대상 |`make`에서 생성될 파일명 혹은 실행할 작업명이다.      |
| `PREREQUISITES` | 빌드 전제  |`TARGET`을 실행하기 전에 확인되어야 하는 파일들이다.    |
| `RECIPE`        | 빌드 명령 |`TARGET`에서 실행될 [bash](https://ko.wikipedia.org/wiki/배시_(유닉스_셸)) 명령들이며, 반드시 `Tab ↹`으로 들여쓰기 되어야 한다.     |

Make 소프트웨어는 빌드 대상 `TARGET`의 `RECIPE` 명령을 실행하기 전에 우선 `PREREQUISITES` 빌드 전제부터 확인하는데 아래의 순서도에 따라 진행된다. `PREREQUISITE`는 작업환경에 따라 빌드 절차에 영향을 미치는데, 해당 내용은 차후 규칙에 대하여 자세히 설명할 예정이다.

![Makefile의 <code>PREREQUISITE</code> 동작 순서도<sub><i>원본: <a href="https://lucid.app/lucidchart/16e14bf0-856d-4897-8351-bbe34a7f5d68/edit?invitationId=inv_e7b8df47-867b-4b75-9d43-e4b451ed7e1b">Lucidchart</a></i></sub>](/images/docs/make/makefile_prerequisite_flowchart_korean.svg)

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
본 장에서 소개한 예시 코드를 활용하여 아래의 간단한 makefile을 작성하였다.

> 여기서 makefile에 기입된 `cc`는 리눅스 배포판에서는 GNU C 언어 컴파일러 `gcc`의 별칭이다. Make 소프트웨어는 컴파일러의 작업을 자동화하는 역할에 불과하며, 실질적으로 컴파일 및 링크 작업을 위해서는 사용하려는 컴파일러 명령과 옵션을 반드시 알아야 한다.

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

위의 makefile은 `main` 이진 파일을 빌드하기 위해서 전제 조건으로 명시된 `main.o`, 그리고 `random.o` [오브젝트 파일](https://ko.wikipedia.org/wiki/목적_파일)(object file)을 반드시 확인한다. 오브젝트 파일은 소스 코드의 컴파일 작업의 산출물이지만, 아직 링크 작업을 통해 라이브러리 (예. [C 표준 라이브러리](https://ko.wikipedia.org/wiki/C_표준_라이브러리)) 혹은 타 오브젝트 파일과 연동되지 않아 실행될 수 없다. Make 소프트웨어는 전제 조건의 `main.o` 그리고 `random.o` 오브젝트 파일명의 `TARGET`으로 이동한다.

Makefile에 정의된 `main.o`(혹은 `random.o`)의 전제 조건에는 `main.c`(혹은 `random.c`) 소스 파일과 `random.h` 헤더 파일이 있다. Make 소프트웨어는 설계된 절차대로 makefile 내에서 소스 파일 및 헤더 파일명의 `TARGET`을 찾으려 하나, 발견하지 못하면 makefile이 위치한 현재 디렉토리에서 파일을 탐색한다. 비록 두 전제 파일을 모두 찾았다고 하여도 오브젝트 파일이 이미 최신 상태로 컴파일 되었다면 빌드 작업이 불필요하다. Make 소프트웨어는 빌드 대상인 `main.o`(혹은 `random.o`) 파일이 존재하지 않거나, 혹은 소스 코드가 수정된 날짜가 빌드된 시점보다 이후이면 빌드를 시작한다.

`main.o` 그리고 `random.o`을 컴파일하는 명령에 `-c` 컴파일러 옵션이 명시되어 있다. GCC 문서에 의하면 이는 소스 코드를 컴파일만 하고 링크가 처리되지 않은 오브젝트 파일을 생성한다. 여기서 `PREREQUISITES`에 명시된 소스 및 헤더 파일이 아니더라도 컴파일 작업에 사용될 수 있다. 다시 말해, `PREREQUISITES`는 단순히 `RECIPE` 명령을 실행할 지 결정하는 프로그래밍 언어의 `if` 조건문과 같으며, 실질적인 컴파일러 작업에는 아무런 영향을 주지 않는다. 그럼에도 `PREREQUISITES`에 소스 및 헤더 파일을 명시하는 이유는 Make 소프트웨어가 제공하는 빌드 자동화 기능(예. 수정된 날짜를 기반으로 재빌드 여부 판단 등)을 활용할 수 있기 때문이다.

위의 빌드 명령이 실행되면 makefile이 위치한 디렉토리에는 `main.o`(혹은 `random.o`) 오브젝트 파일이 생성된다. 그러나 해당 파일명은 `TARGET`에 의해 결정된 게 절대 아니다. 일반적으로 출력 파일명을 지정하는 `-o` 옵션을 명시하지만, `-c` 옵션은 기본적으로 출력 파일명을 소스 파일명을 차용하기 때문에 생략된 것이다. 실제로 `-o` 옵션으로 출력 파일명을 바꾸면 디렉토리에는 `main.o`가 아닌 다른 이름을 갖는 파일이 생성된다. 물론 `TARGET`에 명시된 이름이 그대로 반영되면 편리하겠지만, `RECIPE` 명령은 makefile 언어와 아무런 관계가 없는 bash 명령어로 연동되지 않는 것이다.
