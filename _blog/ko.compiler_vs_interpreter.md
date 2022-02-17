---
layout: docs
language: ko
title: 컴파일러 vs 인터프리터
tags: Compiler Interpreter
date: 2021-08-31 00:00:00
notice: false
toc: true
---
개발자가 프로그래밍 언어로 작성한 코드를 컴퓨터에서 실행할 수 있도록 하는 프로그램으로 "컴파일러"와 "인터프리터"가 있습니다. 프로그래밍 입문자들은 코딩에 집중하기 때문에 컴파일러와 인터프리터의 개념을 간과하는 편이지만, 차이점을 확실히 알고 있으면 프로그래밍 언어가 어떻게 동작하는지 원리를 이해하고 장단점을 파악할 수 있습니다. 이를 통해 상황에 따라 어떤 프로그래밍 언어를 사용하면 효율적인지 결정할 수 있게 됩니다.

우선 본격적인 내용을 설명하기 전에 몇 가지 용어부터 확실히 짚고 넘어가도록 하겠습니다.

* **[소스 코드](https://ko.wikipedia.org/wiki/소스_코드)**

    : 소스 코드(source code)는 사람이 가독(可讀)할 수 있는 고급 프로그래밍 언어(예. 파이썬, C/C++ 및 C#, 자바스크립트)로 작성된 코드들의 모음 혹은 스크립트 파일입니다.

    > *[사람 가독형](https://ko.wikipedia.org/wiki/인간이_읽을_수_있는_매체)(human-readable)*이란, 사람이 자연스레 읽어 이해할 수 있는 형태의 데이터를 가리키며 대표적으로 [ASCII](https://ko.wikipedia.org/wiki/ASCII) 및 [유니코드](https://ko.wikipedia.org/wiki/유니코드) 인코딩이 있습니다. 완전한 문장을 구성하지 않더라도 프로그래밍 언어는 알파벳이나 한글, 숫자와 기호 등으로 작성되기 때문에 사람 가독형에 분류됩니다.

* **[기계어](https://ko.wikipedia.org/wiki/기계어)**

    : 기계어(machine code)는 컴퓨터 [중앙 처리 장치](https://ko.wikipedia.org/wiki/중앙_처리_장치)(central processing unit; CPU)의 연산 및 동작을 직접 제어할 수 있는 `0`과 `1`만으로 구성된 [이진 코드](https://ko.wikipedia.org/wiki/이진_코드)(binary code)입니다. CPU에는 x86, ARM 등 다양한 [아키텍처](https://ko.wikipedia.org/wiki/명령어_집합)(architecture)가 있는데, 각각 연산 및 동작을 수행하기 위한 이진 코드가 설계상 이유로 서로 다릅니다. 때문에 동일한 운영체제라도 호환성 문제가 발생하는 겁니다.

    > 프로그래밍에서는 이진 코드의 가독성을 높이기 위해 팔진법이나 십진법으로 나타내기도 하지만 그 중에서 [십육진법](https://ko.wikipedia.org/wiki/십육진법)(hexadecimal)이 가장 많이 사용됩니다.

* **[바이트코드](https://ko.wikipedia.org/wiki/바이트코드)**

    : 바이트코드(bytecode)는 소스 코드에서 기계어로 변환하는데 징검다리 역할을 하는 [중간 언어](https://ko.wikipedia.org/wiki/중간_표현)(intermediate language)입니다. 수행할 연산 혹은 동작을 나타내는 [명령 코드](https://ko.wikipedia.org/wiki/명령_코드)(opcode)가 한 [바이트](https://ko.wikipedia.org/wiki/바이트)(byte) 내에서 표현되기 때문에 바이트코드("바이트" + <sub>명령</sub>"코드")라는 명칭이 유래되었습니다.
        
    > 연산 및 동작을 수행한다는 점에서 기계어와 유사하지만, 바이트코드는 CPU 아키텍처에 의존하지 않고 소프트웨어에서 처리되므로 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)(cross platform) 성질을 갖습니다.

# 컴파일러
[컴파일러](https://ko.wikipedia.org/wiki/컴파일러)(compiler)는 하나의 프로그래밍 언어를 다른 언어로 변환(일명 컴파일; compile)하는 언어 처리 프로그램입니다. 흔히 고급 프로그래밍 언어를 저급 언어(기계어, 바이트코드 등)로 변환하는데 사용됩니다. 아래는 C++ 프로그래밍 언어의 `.CPP` 확장자 소스 코드(左)가 기계어로 구성된 `.EXE` 실행 파일(右)로 컴파일 된 예시입니다. 

![C++ 프로그래밍 소스 코드, 그리고 컴파일된 실행 파일](/images/blog/compiler_vs_interpreter/programming_lang_compile.png)

여기서 기계어는 비록 [십육진수](https://ko.wikipedia.org/wiki/십육진법)(hexadecimal)로 표현되었지만 실제로는 이진 코드입니다.

## AOT 컴파일
[Ahead-of-time](https://ko.wikipedia.org/wiki/AOT_컴파일) (약자: AOT) 컴파일이란, 개발한 프로그램을 실행하기 전에 미리 다른 언어로의 컴파일을 일컫습니다. 프로그램을 실행하면 이미 언어 변환을 마친 상태이므로 별도의 처리가 필요없어 실행 속도가 매우 빠릅니다. 대표적인 예시로 [C](/docs/ko.C)/[C++](/docs/ko.Cpp) 프로그래밍 언어를 기계어로 구성된 `.EXE` 실행 파일 또는 `.LIB`/`.DLL` 정적/동적 라이브러리로 빌드(build)하는 것입니다.

AOT 컴파일의 특징은 새로운 파일 생성.

그렇다고 파이썬이 AOT 컴파일? 그건 또 아니다. 왜냐하면 `.PYC` 바이트코드로의 컴파일은 파이썬 프로그램을 실행하는 런타임에 생성.

## JIT 컴파일
[Just-in-time](https://ko.wikipedia.org/wiki/JIT_컴파일) (약자: JIT) 컴파일이란, 개발한 프로그램을 실행하는 런타임(runtime) 도중에 다른 언어로의 컴파일을 일컫습니다. 흔히 바이트코드

# 인터프리터
[인터프리터](https://ko.wikipedia.org/wiki/인터프리터)(interpreter)

## 프로세스 가상 머신
대표적으로 JVM, 일명 [자바 가상 머신](https://ko.wikipedia.org/wiki/자바_가상_머신)(Java virtual machine) 혹은 .NET 프레임워크의 CLR

## 인터프리트 언어
[인터프리트 언어](https://ko.wikipedia.org/wiki/인터프리트_언어)(interpreted language)는 사람 가독형 *소스 코드*를 기계 가독형 *기계어*로 변환할 필요 없이 컴퓨터에서 곧바로 해석(interpret)하여 실행하는 프로그래밍 언어입니다. 그 중에는 세 가지 접근법이 있는데,

1. 소스 코드를 독해하여 곧바로 실행한다.
2. 소스 코드를 효율적인 중간 언어(예. 바이트코드)로 번역한 후에 즉시 실행한다.
3. 컴파일러를 갖는 인터프리터 시스템의 경우, 인터프리터 내부에 저장된 컴파일된 코드로부터 실행한다.

> [바이트코드](https://ko.wikipedia.org/wiki/바이트코드)(bytecode)란, 인터프리터가 효율적으로 실행할 수 있도록 설계된 [명령어 집합](https://ko.wikipedia.org/wiki/명령어_집합)(instruction set)의 형태입니다. 어떠한 동작을 수행할 지 나타내는 [명령 코드](https://ko.wikipedia.org/wiki/명령_코드)(opcode) 한 [바이트](https://ko.wikipedia.org/wiki/바이트)(byte)와 부가적 옵션들로 구성되어 "바이트"코드라고 부릅니다. 명령 코드 목록은 파이썬 설치 경로로부터 `include\opcode.h`에서 찾아볼 수 있습니다.

그 중에서 대표적인 인터프리트 언어인 [파이썬](/docs/ko.Python)과 공학분야에서 흔히 사용되는 [MATLAB](/docs/ko.MATLAB) 프로그래밍 언어는 두 번째 접근법에 해당합니다.

![인터프리터 언어의 소스 코드와 실행 파일](/images/blog/compiler_vs_interpreter/programming_lang_interpret.png)

일반적으로 *프로그래밍 파일이 소스 코드인 동시에 실행 파일로써 동작* 여부로부터 인터프리트 언어인지 알아볼 수 있습니다. 위의 그림은 파이썬에서 하나의 `.PY` 확장자 파일을 텍스트 편집기로 열었을 때의 소스 코드(上)와 이를 더블클릭하여 프로그램으로 실행하였을 때의 모습(下)입니다. 프로그램을 실행하기 위해서만 생성되는 파일이 없으나, 소스 코드로부터 번역된 바이트코드를 저장할 `__pycache__` 폴더를 만듭니다.

소스 코드로부터 프로그램을 실행하기 위해서 인터프리터가 반드시 필요합니다. 그렇지만 운영체제 및 아키텍처가 인터프리터를 지원한다면 어떠한 시스템에서도 프로그램은 동일하게 실행됩니다. 이러한 이유로 인터프리트 언어는 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)(cross platform) 성격을 지니지만 컴파일 언어에 비해 처리 속도가 느린 단점이 있습니다.
