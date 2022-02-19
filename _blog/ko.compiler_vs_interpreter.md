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

### AOT 컴파일
[Ahead-of-time](https://ko.wikipedia.org/wiki/AOT_컴파일) (약자: AOT) 컴파일이란, 프로그램을 실행하기 위해 미리 다른 언어로 컴파일 하는 것을 일컫습니다. 해당 프로그램은 이미 언어 변환을 모두 마친 상태이므로 별도의 처리가 필요없어 실행 속도가 매우 빠르다는 장점을 갖습니다. 대표적인 예시로 [C](/docs/ko.C)/[C++](/docs/ko.Cpp) 프로그래밍 언어로 작성된 `.C`/`.CPP` 확장자 소스 코드를 실행하려면 먼저 소스 코드를 기계어로 구성된 `.OBJ`(윈도우) 혹은 `.O`(유닉스) 오브젝트 파일로 컴파일하고, 이들 오브젝트 파일과 라이브러리 간 연동시키는 링크 작업을 통해 최종적으로 `.EXE` 실행 파일, `.LIB` 정적 라이브러리 또는 `.DLL` 동적 라이브러리로 [빌드](https://ko.wikipedia.org/wiki/소프트웨어_빌드)(build)되어야 합니다.

[Just-in-time](https://ko.wikipedia.org/wiki/JIT_컴파일) (약자: JIT) 컴파일이란, 개발한 프로그램을 실행하는 [런타임](https://ko.wikipedia.org/wiki/런타임) 도중에 다른 언어로의 컴파일을 일컫습니다.
### JIT 컴파일

# 인터프리터
[인터프리터](https://ko.wikipedia.org/wiki/인터프리터)(interpreter)는 소스 코드를 기계어로의 컴파일이 필요없이 곧바로 실행하는 프로그램입니다. CPU 아키텍처에 의존하는 기계어로 변환하지 않고 순전히 소스 코드로부터 프로그램을 실행하므로, 어느 시스템에서도 동일하게 실행되는 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)(cross platform)이란 장점을 갖습니다. 한편 "컴퓨터에서 프로그램을 실행하려면 결과적으로 기계어가 필요하다"는 점에서 결국 인터프리터와 컴파일러는 다를 바가 없다고 인지할 수 있으나, 인터프리터 자체는 이미 기계어로 빌드된 *프로그래밍 언어 실행 프로그램*입니다: 소스 코드로부터 수행되어야 할 동작을 인터프리터가 직접 CPU에 알려줄 수 있기 때문에 소스 코드를 기계어로의 컴파일이 불필요한 겁니다.

> 소스 코드는 크로스 플랫폼이겠지만, 이를 실행하는 인터프리터는 시스템 아키텍처에 따라 별도로 빌드되어야 합니다.

아래는 인터프리트 프로그래밍 언어 중 일부가 인터프리터가 무엇으로부터 빌드되었는지 나열하였습니다.

| 프로그래밍 언어 | 인터프리터 | 인터프리터 빌드 언어 |
|:--------:|:---------------:|:--------:|
| 자바      | Java Virtual Machine (JVM) | [C++](/docs/ko.Cpp) |
| 파이썬    | CPython                    | [C](/docs/ko.C)     |
| 파이썬    | Jython                     | 자바                 |

[런타임](https://ko.wikipedia.org/wiki/런타임) 도중에 인터프리터는 실행할 코드를 분석하여 해당하는 동작을 수행하는데, 이 과정에서 발생하는 [오버헤드](https://ko.wikipedia.org/wiki/오버헤드)는 컴파일러로 빌드된 파일보다 저하된 실행 속도를 야기합니다. 그렇지만 컴파일러의 [컴파일 타임](https://ko.wikipedia.org/wiki/컴파일_타임)까지 모두 고려하면 오히려 인터프티러가 소모하는 시간이 더 짧습니다. 이러한 시간적 효율은 소스 코드가 자주 변경되는 개발 단계에서 매우 유리하게 작용합니다.

일반적으로 인터프리터가 소스 코드를 실행하는 방법으로 다음 세 가지 전략 중 하나를 구사합니다:

1. 소스 코드의 문장(statement)을 있는 그대로 하나씩 분석하고 수행합니다.
2. 소스 코드를 보다 효율적인 [중간 언어](https://ko.wikipedia.org/wiki/중간_표현) 혹은 [오브젝트 코드](https://ko.wikipedia.org/wiki/목적_파일)로 변환(혹은 컴파일)을 마친 즉시 이를 실행합니다.
3. 컴파일러로부터 미리 생성된 바이트코드를 이에 부합하는 인터프리터 [가상 머신](#가상-머신)(virtual machine)을 통해 실행합니다.

아래는 인터프리트의 2번 전략을 활용하는 해당하는 [파이썬](/docs/ko.Python) 프로그래밍 언어의 `.PY` 확장자 스크립트 파일(左)에 작성된 소스 코드(右上)와 인터프리터로 실행된 프로세스(右下) 예시입니다.

![파이썬 스크립트 파일의 소스 코드와 런타임 프로세스](/images/blog/compiler_vs_interpreter/programming_lang_interpret.png)

## 가상 머신
[프로세스 가상 머신](https://ko.wikipedia.org/wiki/가상_머신#프로세스_가상_머신[1])(Process virtual machine; 프로세스 VM)은 비록 명칭이 가상 "머신(장치)"이지만 시스템 운영체제에서 단일 [프로세스](/docs/ko.Process#프로세스) 실행을 지원하는 [어플리케이션](/docs/ko.Process#어플리케이션)입니다. 프로세스 VM의 목적은 하드웨어나 운영체제 상관없이 플랫폼 독립적인 프로그래밍 환경을 제공하여 프로세스가 동일하게 실행될 수 있도록 보장하는 겁니다. 흔히 인터프리터와 성질이 비슷하여 혼용되어 일컫는 경우가 자자하지만, 프로세스를 실행하는 인터프리터는 실행 환경을 제공하는 프로세스 VM의 구성요소 중 하나로 해당합니다.

대표적인 프로세스 VM으로 자바 프로그래밍 언어의 [자바 가상 머신](https://ko.wikipedia.org/wiki/자바_가상_머신)(Java virtual machine; JVM) 그리고 [.NET 프레임워크](/docs/ko.Csharp#net)의 [공통 언어 런타임](https://ko.wikipedia.org/wiki/공통_언어_런타임)(Common language runtime; CLR)이 있습니다. 파이썬 프로그래밍 언어도 마찬가지로 프로세스 VM이 존재하지만 한 가지 언어만을 지원하고 인터프리터의 성질이 상당히 부각되는 점에서 "인터프리터"라고 불리는 겁니다.
