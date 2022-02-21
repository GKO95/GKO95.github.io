---
layout: docs
category: 프로그래밍
title: 파이썬
slug: ko.Python
icon: icon-python.svg
order: 0x00
---
# 파이썬: 소개
[파이썬](https://ko.wikipedia.org/wiki/파이썬)(Python)은 웹 프로그래밍, 과학연구, 인공지능을 포함한 수많은 영역에서 응용 가능한 고급 프로그래밍 언어이다. 파이썬은 다른 프로그래밍 언어에 비해 간단하면서 폭넓은 커뮤니티 덕분에 파이썬 개발에 용이한 많은 종류의 소프트웨어(예. 라이브러리, 프레임워크 등)들이 존재한다. 이러한 이유로 파이썬은 프로그래밍 입문자로써 시작하기 매우 좋은 언어이다.

## 인터프리트 언어
> *참조: [컴파일러 vs 인터프리터](/blog/ko.compiler_vs_interpreter)*

파이썬 프로그래밍 언어는 [인터프리트 언어](https://ko.wikipedia.org/wiki/인터프리트_언어)(interpreted language)이다. 가장 첫 인터프리터는 [C](/docs/ko.C) 프로그래밍 언어로 개발된 [C파이썬](https://ko.wikipedia.org/wiki/C파이썬)(CPython)으로 현재 가장 널리 사용되는 파이썬 인터프리터이다. 그 외에도 다른 프로그래밍 언어로 개발된 Jython(자바로 구현된 인터프리터), IronPython([.NET](/docs/ko.Csharp#net)으로 구현된 인터프리터), 그리고 PyPy(순수 파이썬으로 구현된 인터프리터) 등이 있다.

파이썬은 인터프리트 언어 중에서도 컴파일 작업을 일련의 절차로써 활용한다: 우선 C파이썬은 파이썬 코드를 [바이트코드](https://ko.wikipedia.org/wiki/바이트코드)(bytecode)로 컴파일하는 동시에 C파이썬 인터프리터에 의해 실행된다. 파이썬 코드가 다른 컴퓨터에서도 동일하게 동작하는 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)(cross platform) 성질을 가질 수 있는 것은 바이트코드 덕분이다.

# 파이썬: 설치
파이썬을 실행하기 위해서는 두 가지 프로그램이 필요하다: (1) 인터프리터 그리고 (2) 통합 개발 환경이다. 리눅스와 macOS는 기본적으로 파이썬 2와 3 인터프리터가 설치되어 있으나, 다른 특정 버전을 원하면 새로 설치해야 한다. 본 장에서는 파이썬 인터프리터와 IDE의 설치 및 연동을 통해 파이썬과 같은 인터프리터 언어가 어떻게 동작하는지 이해를 돕는다.

## 인터프리터 선택
인터프리터는 파이썬 코드를 실행하기 위한 가장 핵심되는 소프트웨어이며 파이썬 공식 웹사이트에서 [다운로드](https://www.python.org/downloads/)한다. 여러 버전의 파이썬을 찾아볼 수 있는 가운데, 파이썬 3의 경우 `3.x.y` 버전 번호 형식을 지닌다. `x`는 하위버전을 의미하여 들어가는 숫자에 따라 인터프리터 기능에 차이가 날 수 있다. 그리고 `y`는 소소한 버그를 수정하는 등의 개정판을 의미하므로 숫자가 클수록 더 안정된 인터프리터라고 볼 수 있다. 그러므로 인터프리터 버전은 `3.x`까지만 확인해도 충분하다.

> 만일 인터프리터 버전이 `3.6`에서 `3.7`로 업그레이드 되면서 변경된 기능이 있을 시, 두 인터프리터는 동일한 코드를 달리 실행할 수 있는 잠재적 호환성 문제를 갖는다. 반면, 인터프리터 `3.7.1`과 `3.7.4`는 사실상 동일한 인터프리터로 간주되지만, 후자가 더 많은 개선이 이루어졌기에 더욱 안정적이다.

개발자는 여러 파이썬 인터프리터 중에서 자신이 필요한 버전을 신중히 선택해야 한다; 제3자가 개발한 라이브러리나 소프트웨어 연동에서 발생할 수 있는 호환성 문제 때문이다. 그러나 단순히 파이썬 프로그래밍 언어 공부가 목적이면 가장 최신 버전을 설치하여도 무방하다. 단, 인터프리터는 개발 환경 관리를 위해 버전 업데이트 기능이 자체적으로 결여되어 있다. 새로 출시된 버전을 설치하려면 해당 인터프리터를 별도로 설치해야 한다.

> 오래된 파이썬 자료들은 버전 번호가 `2.x.y`로 되어 있는 파이썬 2(Python 2)를 사용하는 경우가 많지만, 해당 인터프리터 버전은 2020년 1월 1일부로 서비스가 종료되었다. 참고로 파이썬 1이라는 것도 존재하나, 가장 최신 버전 1.6.1이 2000년에 출시된 점을 고려하면 현재로써 사용하기에 호환성과 실용성이 매우 떨어진다.
>
> 많은 파이썬 관련 소프트웨어도 버전 3을 위주로 개발되고 있으므로 파이썬 3을 사용하도록 한다.

## 인터프리터 다운로드
다운로드 할 인터프리터를 결정하였으면 설치 방법을 선택해야 한다. 대체로 아래와 같은 설치 항목이 존재한다.

![파이썬 3 공식 웹사이트 인터프리터 다운로드 목록](/images/docs/python/python_interpreter_download.png)

윈도우 OS(예. 윈도우 11, 윈도우 10, 윈도우 7 등)에서는 64비트와 32비트 인터프리터를 제공한다. 해당 컴퓨터의 운영체제 및 아키텍처는 아래의 파일 탐색기 주소를 통해 확인할 수 있다.

```
Control Panel\System and Security\System
```

32비트 시스템이면 `Windows installer (32-bit)` 인터프리터를, 64비트면 `Windows installer (64-bit)` 인터프리터를 설치한다.

> 64비트 시스템은 32비트 프로그램과 호환성이 보장되어 `Windows installer (32-bit)` 인터프리터도 설치할 수 있다. 하지만 이러한 경우는 대다수 64비트 컴퓨터에서 32비트 프로그램을 개발하던가 연동되는 소프트웨어가 32비트로 제한된 경우이다. 그러므로 본인 컴퓨터 아키텍처와 일치하는 인터프리터 설치를 권장한다.

파이썬 인터프리터 설치 방법에는 두 가지가 있다:

1. 압축파일 (embeddable zip file): 파이썬 인터프리터를 구성하는 파일 전체가 압축된 상태로 존재한다.
2. 설치 프로그램 (executable installer): 인터프리터를 설치하는 `.EXE` 확장자 프로그램이다.

> 파이썬 3.7까지 윈도우 32비트 및 64비트 인터프리터는 각각 `x86-64` 및 `x86`으로 표시되어 있다. 그러나 `x86`은 인텔 CPU라는 특정 아키텍처를 가리키기 때문에 ARM CPU를 사용하는 컴퓨터에서는 파이썬 설치가 불가하다. 버전 3.8 이상부터 `x86` 표시가 없어졌으며 인텔 및 ARM CPU 모두 지원한다고 설명되어 있다.

## 인터프리터 설치
인터프리터 설치 프로그램을 실행하면 아래와 같은 화면이 나타난다.

![파이썬 3 설치 프로그램 실행 화면](/images/docs/python/python_interpreter_install.png)

설치 화면에 있는 "Add Python 3.x to PATH" 옵션은 [환경 변수](https://ko.wikipedia.org/wiki/환경_변수)(environment variable) 설정 여부를 의미한다: 윈도우의 [명령 프롬프트](https://ko.wikipedia.org/wiki/Cmd.exe)(Command Prompt)나  [PowerShell](https://ko.wikipedia.org/wiki/파워셸), 리눅스의 터미널 등으로부터 파이썬을 실행할 수 있도록 한다. 다음 그림은 윈도우 PowerShell에서 파이썬을 실행하였을 시의 모습이다.

![윈도우 명령 프롬프트에서 실행된 파이썬 3](/images/docs/python/python_interpreter_cmd.png)

순수히 파이썬만 사용한다면 환경 변수 설정은 필수요소가 아니다. 그렇지만 외부 소프트웨어 또는 라이브러리와 연동하여 사용할 때 매우 유용하며 컴퓨터 성능에 영향을 주지 않으므로 본 문서는 환경 변수를 설정하는 것을 적극 권장한다. 설치 당시에 해당 옵션을 선택하지 않아도 방법만 알면 재설치 필요없이 손쉽게 설정할 수 있다 ([*환경 변수 설정 방법*](/blog/ko.environment_variable_configuration) 참조).

설치 화면에서 "Install Now"를 눌러 인터프리터 설치를 진행하고, 설치가 완료되면 파이썬을 곧바로 실행할 수 있다.

### 사용자 지정 설치
파이썬을 다른 경로에 설치하거나 오로지 인터프리터만 설치하고 싶다면 "Customize installation"을 클릭해 설치할 내용물을 선택할 수 있다. 가장 먼저 나타나는 "Optional Features" 화면은 인터프리터 동작에 영향을 주지 않는 부가적 설치 사항을 다룬다.

![파이썬 3 설치 프로그램 추가 설치 사항](/images/docs/python/python_interpreter_optional.png)

| 옵션                  | 설명                                |
|---------------------|-----------------------------------|
| `Documentation`     | 파이썬 문서 파일                      |
| [`pip`](#pip)       | 파이썬 패키지 관리 소프트웨어 |
| `tcl/tk and IDLE`   | 파이썬으로 프로그램 GUI 제작도구와 코드 편집기  |
| `Python test suite` | 파이썬 프로그램 동작을 시험하는 프레임워크      |
| `py launcher`       | 파이썬 인터프리터 관리 프로그램       |

필자는 `pip`와 `py launcher`만은 반드시 설치한다. 나머지 옵션들은 사용하지 않으며, 사용자 인터페이스를 가진 프로그램을 만든다 하더라도 대표적인 GUI 프레임워크 중 하나인 [PySide2](/docs/ko.Qt)를 사용하기 때문에 `tcl/tk`가 필요하지 않다. 코드 편집기 또한 IDLE보다 편한 것을 곧 소개할 예정이다.

다음에 나타나는 "Advanced Options" 화면은 실질적으로 인터프리터 동작에 영향을 미칠 수 있는 고급 옵션들이다.

![파이썬 3 설치 프로그램 고급 설정](/images/docs/python/python_interpreter_advanced.png)

여기서 `Download debug binaries (requires VS 2015 or later)`는 "디버깅 라이브러리 다운로드" 여부를 묻는데, 이를 필요로 하는 경우로써 [OpenCV](/docs/ko.OpenCV) 라이브러리를 생성할 때가 있다. 하지만 파이썬을 프로그래밍 입문 언어로 배우는 초급자의 입장에서 위의 선택사항들은 공부에 지장을 주지 않아 무시하여도 된다.

## 통합 개발 환경
[통합 개발 환경](https://ko.wikipedia.org/wiki/통합_개발_환경)(integrated development environment; IDE)은 최소한 프로그래밍 언어의 소스 코드 편집, 프로그램 빌드, 그리고 디버깅 기능을 제공하는 소프트웨어 개발 프로그램이다. 인터프리터는 파이썬 코드를 실행하는 소프트웨어이지만, 파이썬 코드 편집기가 아니다. 그러므로 파이썬 코드를 편집하고 곧바로 프로그램으로 실행하여 문제가 발생하면 검토할 수 있는 IDE가 절대적으로 필요하다.

### 비주얼 스튜디오 코드
[비주얼 스튜디오 코드](https://code.visualstudio.com/download)(Visual Studio Code; VS Code)는 마이크로소프트에서 개발한 무료 소스 코드 편집기이다. 기술적으로 IDE는 아니지만, 편집기 설정을 통해 IDE 역할을 수행할 수 있다. 파이썬 프로그래밍 언어의 경우에는 파이썬 확장도구 설치 및 인터프리터를 불러오기만 하면 된다.

![VS Code에서 파이썬 확장도구 설치](/images/docs/python/python_vscode_extension.png)

파이썬 확장도구는 VS Code를 파이썬 IDE로 사용할 수 있도록 한다. 즉, 소스 코드 편집 이외에도 프로그램 실행 및 디버깅도 가능하다는 의미이다. 확장도구 설치 방법은 다음과 같다: `F1` 키를 눌러 `Extensions: Install Extensions`을 입력하고, 왼쪽에 나타난 검색창에 `Python`을 검색한다. 그러면 위의 그림과 같은 화면이 나타나며, 초록색 `Install` 버튼을 눌러 설치한다.

확장도구 설치 이후, VS Code에서 사용할 파이썬 인터프리터를 선정해야 한다. `F1` 키를 눌러 `Python: Select Interpreter`을 입력하면 이전 단계에서 설치한 파이썬 인터프리터가 자동적으로 검색된다. 원하는 인터프리터를 선택하였으면, 파이썬 프로그래밍 준비는 끝난다.

VS Code에서 파이썬을 실행하는 방법에는 두 가지가 존재한다: 디버그 모드(`F5`)와 일반 실행 모드(`Ctrl+F5`)이다. 프로그램에 문제가 발생하여 하나씩 짚어보아야 할 경우 디버깅 모드를 사용하지만, 그렇지 않은 경우에는 일반 실행 모드를 사용할 것을 권장한다.

# 파이썬: 기초
각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 파이썬 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

## 주석
주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. 파이썬에는 두 가지의 주석이 존재하며, 이들은 각각 한줄 주석과 블록 주석이라 부른다.

* 한줄 주석 (line comment)
    : *코드 한 줄을 차지하는 주석이며, 해시 기호(`#`)로 표시된다.*

* 블록 주석 (block comment)
    : *코드 여러 줄을 차지하는 주석이며, 세 쌍의 작은 따옴표(`''' '''`) 혹은 큰 따옴표(`""" """`)로 표시된다. 그 중에서 큰 따옴표로 구성된 블록 주석을 [독스크링](https://en.wikipedia.org/wiki/Docstring)(docstrings)이라고도 부르는데, 이는 프로그램 실행 도중에도 볼 수 있다.*

```python
"""
블록 주석:
코드 여러 줄을 차지하는 주석이며, 프로그램 실행 중에서도 볼 수 있다.
"""
# 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 표현식 및 문장
프로그래밍에서는 표현식과 문장이 있다.

* [표현식](https://ko.wikipedia.org/wiki/식_(프로그래밍))(expression)
    : *값을 반환하는 구문적 존재를 가리킨다. 표현식에 대한 결과를 도출하는 것을 평가(evaluate)라고 부른다.*
    
    ```python
2 + 3       # 숫자 5를 반환
2 < 3       # 논리 참을 반환
    ```

* [문장](https://ko.wikipedia.org/wiki/문_(프로그래밍))(statement)
    : *실질적으로 무언가를 실행하는 하나의 완전한 코드를 의미한다. 파이썬 프로그래밍 언어는 기본적으로 [줄바꿈](https://ko.wikipedia.org/wiki/새줄_문자)(newline)을 기준으로 문장을 분별한다. 아래의 부호는 파이썬의 프로그래밍 문장과 줄바꿈을 유연하게 활용할 수 있도록 도와준다.*

    * 세미콜론 `;`: 여려 문장을 하나의 줄에 한꺼번에 기입하기 위해 사용된다.
    * 백슬래시 `\`: 하나의 긴 문장을 연속의 여러 줄로 나누어서 나타내기 위해 사용된다.

    ```python
variable = 2 + 3           # 숫자 5를 "variable" 변수에 초기화
if 2 < 3: statement        # 논리가 참이면 "statement" 문장 실행
    ```

## 입력 및 출력
파이썬은 다음과 같은 텍스트 기반의 입력 및 출력 함수를 가진다.

* 입력 함수: `input()`
    : *입력 함수가 실행될 시, `input()`의 소괄호(`()`) 안에 있는 텍스트가 터미널에 나타나며 Enter/Return을 누를 때까지 대기한다.*

* 출력 함수: `print()`
    : *출력 함수가 실행될 시, `print()`의 소괄호(`()`) 안에 있는 데이터가 터미널에 나타난다.*

```python
variable = input("입력: ")
print("출력:", variable)
# 동일: print("출력:", input("입력: "))
```
```
입력: Hello World!
출력: Hello World!
```

하나의 `print()` 함수에서 두 개 이상의 데이터를 한꺼번에 출력하는데 세 가지의 방법이 존재한다.

1. 쉼표(`,`)를 사용하여 연속적으로 데이터를 나열할 수 있지만 쉼표에는 항상 공백이 놓여진다.

   ```python
   A = 10.0
   B = "파이썬"
   
   # 텍스트와 숫자의 혼합된 데이터를 쉼표(,)를 사용해 나열한다.
   print("A는", A , ", \n그리고 B는", B, "이다.")
   ```
   ```
   A는 10.0 ,
   그리고 B는 파이썬 이다.
   ```

2. 더하기 기호(`+`)로 텍스트를 연결에 사용하면 사이에 공백이 생기지 않는다. 그러나 데이터를 텍스트로 직접 변환해야 한다.

   ```python
   A = 10.0
   B = "파이썬"
   
   # 텍스트와 숫자의 혼합된 데이터를 텍스트로 변환한 이후 더하기 기호(+)를 사용해 나열한다.
   print("A는", str(A) + ", \n그리고 B는", B + "이다.")
   ```
   ```
   A는 10.0,
   그리고 B는 파이썬이다.
   ```

3. 문자열 따옴표 앞에 `f` 접두사를 붙이면 중괄호(`{}`) 안에 입력된 데이터가 텍스트에 그대로 반영되어 별도의 변환이 필요하지 않다.

   ```python
   A = 10.0
   B = "파이썬"
   
   # 'f' 접두사를 붙여 지정된 위치에 데이터를 텍스트에 그대로 반영시킨다.
   print(f"A는 {A}\n그리고 B는 {B}이다.")
   ```
   ```
   A는 10.0,
   그리고 B는 파이썬이다.
   ```

## 식별자
[식별자](https://ko.wikipedia.org/wiki/식별자#컴퓨터_언어)(identifier)는 프로그램을 구성하는 데이터들을 구별하기 위해 사용되는 명칭이다. 즉, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. 파이썬에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 허용되지 않는다.
* 대소문자를 구분한다.

## 변수
변수(variable)는 할당 기호(`=`)를 사용하여 데이터를 할당(assignment)받을 수 있는 저장공간이다. 아래 예시의 변수는 `variable`이란 식별자를 가지며 `1`이란 값을 할당받는다.

```python
variable = 1
```

거의 모든 프로그래밍 언어는 할당 기호를 기준으로 왼쪽에는 피할당자(변수), 오른쪽에는 할당자(데이터 혹은 변수)가 위치한다. 반대로 놓여질 경우, 오류가 발생하거나 원치 않는 결과가 도출될 수 있다.

파이썬의 변수는 데이터 종류와 상관없이 새로운 데이터를 언제든지 할당받을 수 있다.

```python
variable = 1
variable = "Hello World!"
print(variable)
```

```
Hello World!
```

### 초기화
초기화(initialization)란, 변수의 첫 데이터 할당을 가리킨다.

```python
# variable 변수가 할당받은 값 1이 최초의 저장값이면, 변수는 1로 "초기화"되었다고 한다.
variable = 1
```

### `del` 키워드
`del` 키워드는 변수를 삭제 할 때 사용한다. 삭제된 변수 이름은 나중에 다시 사용할 수 있다.

```python
# 변수의 정의
variable = "Hello World!"
print(variable)

# 변수 "variable" 삭제
del variable
print(variable)
```
```
Hello World!
NameError: name 'variable' is not defined
```

### 상수
상수(constant)는 한 번 데이터를 할당한 후 변경할 수 없는 특별한 변수이다.

> 파이썬은 상수를 지원하지 않는다. 파이썬 개발자는 일반 변수들로부터 구분짓기 위해 상수를 전부 대문자로 표기한다.

```python
CONSTANT_VARIABLE = "Hello World!"
```

## 자료형
[자료형](https://ko.wikipedia.org/wiki/자료형)(data type)은 데이터의 내용물이 어떻게 표현되는지 결정하는 요소이며, 파이썬에서는 자료형이 크게 세 유형으로 나뉘어진다:

### 숫자 자료형
[숫자 자료형](https://docs.python.org/3/library/stdtypes.html?#numeric-types-int-float-complex)(numeric data type)은 숫자로 표현되는 데이터들을 가리키며, 총 세 가지로 세분화된다.

* 정수 자료형: `int`
    : *소수점이 없는 숫자*

* 부동소수점 자료형: `float`
    : *소수점을 포함한 64비트 실수*

* 복소수 자료형: `complex`
    : *실수 그리고/또는 허수로 이루어진 숫자*

위의 숫자 자료형들은 산술 연산이 가능하다: 가장 기본적인 `+`, `-`, `*`, `/` 사칙 연산자부터 나눗셈의 몫 `//`과 나머지 `%` 그리고 제곱 `**`을 구할 수 있다. 산술 연산을 쉽게 읽을 수 있도록 숫자와 산술 연산자 사이에 공백을 넣어도 연산에는 아무런 영향을 주지 않으므로 무관한다.

산술 연산자는 할당 기호(`=`)와 조합하여 산술 연산 코드를 더욱 간결하게 작성할 수 있다.

| 연산자 | 예시     | 동일                                          |
| :----: |--------| --------------------------------------------- |
|  `=`   | `x = y`  | `x = y`; `x` 변수에 `y` 변수의 값을 할당한다. |
|  `+=`  | `x += y` | `x = x + y`                                   |
|  `-=`  | `x -= y` | `x = x - y`                                   |
|  `*=`  | `x *= y` | `x = x * y`                                   |
|  `/=`  | `x /= y` | `x = x / y`                                   |
|  `%=`  | `x %= y` | `x = x % y`                                   |

> 파이썬은 증감 연산자(`++` 및 `--`)를 지원하지 않는다.

파이썬은 숫자 자료형을 처리할 수 있는 [함수](#파이썬-함수)(function)들을 제공한다. 아래의 대부분 함수는 [이터러블](#파이썬-이터러블)(iterable) 객체를 필요로 하며, 이는 차후에 소개될 예정이다.

| 함수      | 예시                | 설명                                                         |
|:---------:| ------------------- | ------------------------------------------------------------ |
| `abs()`   | `abs(-21)`          | 숫자의 절댓값을 구한다.                       |
| `round()` | `round(164.2597,2)` | 기본적으로 한 자릿수로 숫자를 반올림하거나 뒤의 소수 자릿수로 반올림한다. |
| `max()`   | `max([0,1,2,3,4])`  | 리스트 객체 내에서 가장 큰 숫자를 반환한다.                              |
| `sum()`   | `sum([0,1,2,3,4])`  | 리스트 객체 내에에서 숫자를 모두 더한다.                             |

```python
# "round()" 함수의 예시
print(round(164.259763145))
print(round(164.259763145,2))
```
```
164
164.26
```

### 논리 자료형
논리 자료형(Boolean data type)은 문장이 참인지 거짓인지 판별하는 논리 조건에 사용되는 데이터 유형이다.

* 논리적 참: `True`
    : *논리가 참일 때 반환된다; 숫자 0이 아닌 정수로 대체 가능하다.*

* 논리적 거짓: `False`
    : *논리가 거짓일 때 반환된다; 숫자 0으로 대체 가능하다.*

대표적인 논리 조건으로써 두 데이터를 대조하는 [비교 연산자](https://docs.python.org/3/library/stdtypes.html?#comparisons)(relational operator)가 있다: 초과 `>`와 미만 `<`, 이상 `>=`과 이하 `<=`, 그리고 동일 `==`와 다름 `!=` 관계 부합 여부에 따라 논리적 참 혹은 거짓이 반환된다. 연산자는 기호가 아닌 단어일 수도 있으며, 일치 여부의 `is` 및 논리 보수의 `not`이 존재한다.

> 동일 `==`과 일치 `is`는 얼핏 비슷하지만 전혀 다른 연산자이다: `==` 연산자는 데이터 유형마다 커스터마이징이 가능하여 무엇을 동일한 데이터로 판단할지 정할 수 있지만, `is` 연산자는 커스터마이징이 불가하며 데이터가 정확히 일치해야 한다. 일부 데이터에서 `==` 연산자는 `is` 연산자와 동일하게 동작한다.

논리 연산자(logical operator)는 논리 자료형의 조합이 논리적으로 참인지 거짓인지 판별한다.

| 연산자   | 이름  | 설명                                           |
|:-----:|:---:|----------------------------------------------|
| `and` | 논리곱 | 모든 데이터가 참이면 `True`를 반환하고, 그렇지 않으면 `False`를 반환한다.     |
| `or`  | 논리합 | 하나 이상의 데이터가 참이면 `True`를 반환하고, 그렇지 않으면 `False`를 반환한다. |

### 문자열 자료형
문자열 자료형(string data type)은 한 쌍의 작은 따옴표(`''`) 또는 큰 따옴표(`""`)로 구별되는 텍스트 데이터이다. 파이썬에서 문자열 자료형 데이터는 일반적으로 문자열 객체(string object)라고 부른다. 

텍스트에 따옴표를 넣으려면 해당 따옴표 앞에 백슬래시(`\`)를 배치하여 문자열이 도중이 끊기는 현상을 방지한다.

```python
# 문자열 작성의 적절한 예시와 부적절한 예시의 비교.
print('Where\'s my "Cat in the Hat" book?')
print('Where's my "Cat in the Hat" book?')
```
```
Where's my "Cat in the Hat" book?
Where
```

세 쌍의 작은 따옴표 혹은 큰 따옴표는 다중 문자열(multi-line string) 객체를 생성하는데, 이는 단순히 Enter/Return 키를 눌러 줄바꿈이 가능한 문자열이다. 일반 문자열로 줄바꿈을 구현하려면 원하는 위치에 `\n`을 직접 삽입해야 한다.

```python
# 다중 문자열 객체로 여러 줄의 텍스트 작성 및 출력.
print("Hello\nWorld!")
print("""Goodbye
World?""")
```
```
Hello
World!   
Goodbye
World?
```

파이썬의 문자열 객체는 숫자처럼 덧셈과 곱셈이 가능하다.

* 텍스트 연결: `+`
    : *서로 다른 두 문자열을 하나의 문자열에 병합한다 (따옴표 유형은 중요하지 않다).*

* 텍스트 복사: `*`
    : *문자열을 정수 값만큼 곱한다 (`float` 사용 불가).*

```python
print("파이" + '썬3')
print(4 * "2")
```
```
파이썬3
2222
```

[객체](#파이썬-클래스)(object)에 해당하는 문자열 자료형 데이터는 오로지 자신만이 사용할 수 있는 고유의 함수들을 갖는다. 해당 내용은 차후에 자세히 설명할 예정이다.

| 메소드            | 예시                        | 설명                                                                                                                   |
|:--------------:|---------------------------|----------------------------------------------------------------------------------------------------------------------|
| `format()`     | `text.format(value)`     | 문자열 또는 비문자열 `value`를 지정된 `{}` 공간에 위치별 혹은 이름별로 할당한다.                                                                  |
| `join()`       | `text.join(str_list)`     | 문자열로 이루어진 리스트 객체인 `str_list` 내의 문자열들 사이에 `text` 문자열을 삽입하여 하나의 문자열로 결합한다.                                             |
| `split()`      | `text.split()`            | 괄호 안에 문자열이 없는 경우, 공백에 따라 `text` 문자열을 구분하여 리스트 객체로 변환한다.<br/>*[선택사항: 괄호 안에 `str1`이 존재하면 `text`는 `str1`을 기준으로 나뉘어진다.]* |
| `replace()`    | `text.replace(str1,str2)` | `text` 문자열 내에서 `str1`을 `str2`로 바꾼다.                                                                                  |
| `startswith()` | `text.startswith()`       | `text` 문자열 시작 부분의 동등성을 확인한다.                                                                                         |
| `endswith()`   | `text.endswith()`         | `text` 문자열 끝 부분의 동등성을 확인한다.                                                                                          |
| `upper()`      | `text.upper()`            | `text` 문자열의 모든 영문을 대문자로 변환한다.                                                                                        |
| `lower()`      | `text.lower()`            | `text` 문자열의 모든 영문을 소문자로 변환한다.                                                                                        |

```python
# 문자열 형식: [1] 위치별 및 [2] 이름별 할당.
print("{2} {0} {1}".format(value1, value3, value2))
print("{x} {y} {z}".format(x = value1, y = value3, z = value2))

# 문자열 연결 및 분리
print(" ! ".join([str1, str2, str3]))
print("str1 ! str2 ! str3".split(" ! "))

# 문자열 확인
print("This is a sentence.".startswith("this"))
print("This is a sentence.".endswith("sentence."))

# ALPHABET UPPER/LOWERCASE
print("This is a SENTENCE.".upper())
print("This is a SENTENCE.".lower())
```
```
value2 value1 value3
value1 value3 value2

str1 ! str2 ! str3
[str1, str2, str3]

False       # 대문자 "T"와 소문자 "t"는 다른 존재이므로 거짓이다.
True        # 맨 마지막에 온점을 포함하여 참이다.

THIS IS A SENTENCE.
this is a sentence.
```

### 자료형 변환
데이터는 다른 자료형으로 변환될 수 있으며, 아래는 자료형 변환 함수 중에서 대표적인 세 개를 소개한다.

| 함수        | 이름       | 설명                                                       |
|:---------:|:--------:|----------------------------------------------------------|
| `int()`   | 정수 변환    | `float`: 분수는 제거되고 정수만 반환.<br />`string`: 숫자만 변환 및 반환 가능. |
| `float()` | 부동소수점 변환 | `int`: 제약없음.<br />`string`: 숫자만 변환 및 반환 가능.              |
| `str()`   | 문자열 변환   | `int`: 제약없음.<br />`float`: 제약없음.                         |

## 탈출 문자
[탈출 문자](https://ko.wikipedia.org/wiki/이스케이프_문자)(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 이전에 문자열 자료형을 소개할 때, `\n` 탈출 문자를 사용하여 문자열 줄바꿈을 구현한 것을 보여주었다.

```python
print("Hello\nWorld!")
```
```
Hello
World!
```

| 줄바꿈  | 탭    | 백슬래시 | 백스페이스 | 작은 따옴표 | 큰 따옴표 |
|:----:|:----:|:----:|:-----:|:------:|:-----:|
| `\n` | `\t` | `\\` | `\b`  | `\'`   | `\"`  |

## `None` 키워드
자료형과 관계없이 아무런 값이 없는 데이터이다. 비록 논리 조건에서는 `None`을 `False`로 사용할 수 있지만, 개념적으로는 `None`과 `False`는 완전히 다른 존재이다.

```python
# 조건부 확인: 논리 조건에서 None을 False로 간주할 수 있는가?
if not(None and True):
    print(None)
```
```
None    # 이는 논리 조건에서 None을 False로 사용할 수 있음을 보여준다.
```

# 파이썬: 조건 및 루프
조건문(conditional statement) 및 반복문(loop statement)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 파이썬 프로그래밍의 조건에 따라 실행하는 조건문과 반복적으로 실행하는 반복문을 소개한다.

## 들여쓰기
들여쓰기(indentation)는 문장이나 [함수](#파이썬-함수)(function), [클래스](#파이썬-클래스)(class) 코드의 경계를 표시하는데 사용된다. 이를 통해 코드가 조건문 혹은 반복문에 속하는지, 또는 어느 조건문 혹은 반복문의 코드인지 구분한다. 들여쓰기는 콜론(`:`)이 시작되는 이후부터 삽입되며 [탭](https://ko.wikipedia.org/wiki/Tab_키)(tab)이나 띄어쓰기 2칸 혹은 4칸으로 표현된다.

> 파이썬의 들여쓰기를 탭이나 띄어쓰기 중 어느 것을 사용하여도 무관하지만, 들여쓰기 방법은 반드시 하나로 통일해야 한다. 만일 탭과 띄어쓰기를 섞어서 사용하면 파이썬에서 들여쓰기를 제대로 구분하지 못하여 아래의 요류를 표시하면 실행되지 않는다.
>
> ```
> TabError: inconsistent use of tabs and space in indentation
> ```

들여쓰기의 여부에 따라 코드의 내용이 완전히 변경될 수 있으므로 주의해야 한다.

```python
# 두 번째 "print()" 함수에 들여쓰기 된 경우.
if False:
    print("본 문장은 거짓이다.") 
    print("조건문 종료.")
print("끝!") 

# 두 번째 "print()" 함수에 들여쓰기가 되지 않은 경우.
if False:
    print("본 문장은 거짓이다.") 
print("조건문 종료.")
print("끝!") 
```
```
끝!

조건문 종료.
끝!
```

## `if` 조건문
`if` 조건문은 조건 혹은 논리가 참(`True`)일 경우 코드를 실행하며, 거짓(`False`)일 경우에는 코드를 실행하지 않는다.

```python
if condition:
    ...

# 간략화된 문장
if condition: ...
```

### `else` 조건문
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 조건부가 거짓(`False`)으로 판정되면 실행할 코드를 포함한다.

```python
if condition:
    ...
else:
    ...
```

### `elif` 조건문
`elif` 조건문은 `else`와 `if` 조건문의 조합으로 이전 조건이 거짓(`False`)일 때 새로운 조건을 제시한다.

```python
if condition:
    ...
elif condition:
    ...
else:
    ...
```

### 조건 연산자
조건 연산자(ternary operator)는 세 가지 인수만을 사용하여 조건문을 아래와 같이 간략하게 표현한다.

```python
True_return if condition else False_return
```

조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에 유용하다.

## `while` 반복문
`while` 반복문은 조건 혹은 논리가 참(`True`)일 동안 코드를 반복적으로 실행하며, 거짓(`False`)일 경우에는 반복문을 종료한다.

```python
while condition:
    ...

# 간략화된 문장
while condition: ...
```

`else` 조건문을 `while` 반복문 다음에 위치시키면 해당 코드는 반복문의 조건에 의해 정상적으로 종료되었을 경우에만 실행된다.

```python
# 루프 종료: 반복 완료
index = 0
while index < 10:
    index += 1
    if index == 100:
        break
else:
    print("첫 번째 반복문...완료!")

# 루프 종료: 탈출문으로 강제 처리
index = 0
while index < 10:
    index += 1
    if index == 5:
        break
else:
    print("두 번째 반복문...완료!")
```
```
첫 번째 반복문...완료!
```

### `break` 문
`break` 문(일명 탈출문)은 반복문을 조기 종료시키는데 사용된다. 반복 실행 도중에 탈출문을 마주치는 즉시 가장 인접한 반복문으로부터 탈출한다.

### `continue` 문
`continue` 문은 반복문의 나머지 실행문을 전부 건너뛰어 다시 반복문의 조건부로 돌아간다. `break`와 달리 반복문은 종료되지 않고 여전히 살아있다.

## `for` 반복문
`for` 반복문은 유효한 범위 내에서 코드를 반복적으로 실행하고, 범위의 모든 값이 반복되면 종료한다.

```python
for index in iterable:
    statements

# 간략화된 문장
for index in iterable: statement
```

여기서 지역 변수 `index`는 `iterable`에서 값을 얻고, 내부의 실행문은 더 이상 불러올 값이 없을 때까지 하나씩 반복한다. 흔히 반복문에 사용되는 `iterable` 데이터는 다음과 같다.

1. [범위 객체](#범위-객체): 숫자를 순서대로 담고있는 객체이다.
2. [리스트 객체](#리스트-객체): 자료형과 순서에 상관없이 데이터를 담고있는 객체이다.
3. [문자열 객체](#문자열-자료형): 문자열을 구성하는 문자를 반환한다.

```python
for index in range(3):
    print("Hello World" , index)
```
```
Hello World 0
Hello World 1
Hello World 2
```

`else` 조건문을 `for` 반복문 다음에 위치시키면 해당 코드는 반복문의 조건에 의해 정상적으로 종료되었을 경우에만 실행된다.

```python
# 루프 종료: 반복 완료
for index in range(10):
    if index is 100:
        break
else:
    print("첫 번째 반복문...완료!")

# 루프 종료: 탈출문으로 강제 처리
for index in range(10):
    if index is 5:
        break
else:
    print("두 번째 반복문...완료!")
```
```
첫 번째 반복문...완료!
```

## `pass` 키워드
`pass` 혹은 생략(`...`; 일명 [ellipsis](https://ko.wikipedia.org/wiki/줄임표)) 키워드는 실행될 때 아무 작업도 수행하지 않는다. 코드 블록이 아직 작성하지 않은 상태에서 임시 코드로 사용된다.

# 파이썬: 이터러블
파이썬의 유용함은 단순함 이외에도 다른 프로그래밍 언어에서 볼 수 없는 강력하고 유연한 이터러블 객첵에서 비롯된다. 본 장에서는 파이썬이 가지는 네 개의 다른 특성의 이터러블 객체를 소개한다.

## 이터러블 객첵
[이터러블](https://docs.python.org/3/glossary.html#term-iterable)(iterable; 반복 가능한) 객체는 여러 데이터를 한꺼번에 저장하는데 사용되며, 반복자(iterator) 객체를 반환하는 `__iter__` 메소드를 보유하는 객체로 정의된다. 반복자 데이터의 다음 요소를 자동으로 호출하는 객체로, 이터러블 객체 내의 모든 데이터를 순차적으로 불러올 수 있도록 한다.

## 시퀀스 객체
[시퀀스](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)(sequence) 객체는 [슬라이싱](#슬라이싱)과 같은 추가 기능이 활성화된 이터러블 객체이다. 시퀀스는 하나는 대괄호(`[]`)을 사용하여 저장된 데이터 불러오거나 수정이 가능하다. [*파이썬: 기초 § 문자열 자료형*](#문자열-자료형)에 도입된 문자열 객체도 시퀀스 객체 중 하나이다.

```python
variable = "Hello World!" 
print(variable[1])
```
```
e
```

### 슬라이싱
슬라이싱(slicing; 자르다)은 시퀀스 객체 원본으로부터 원하는 부분만 추출하는 기능이다.

| 구문    | 예시                            |
|:---------:|------------------------------------|
| `[ : : ]` | `sequence[start : end : interval]` |

슬라이싱은 `start`에서부터 `end` 이전까지이며, `interval`만큼의 간격으로 데이터를 추출한다. 시퀀스 슬라이싱을 하기 위해 모든 인수를 채울 필요는 없다.

```python
variable = "Hello World!"
print(variable[2:8])     # >> 출력: "llo Wo"

# 시작 혹은 끝만 지정한 리시트 슬라이싱
print(variable[2: ])     # >> 출력: "llo World!"
print(variable[ :8])     # >> 출력: "Hello Wo"

# 간격을 통해 일부 데이터를 뛰어넘어 슬라이싱
print(variable[ : :2])   # >> 출력: "HloWrd"
print(variable[2:8:2])   # >> 출력: "oW"

# 역방향 슬라이싱
print(variable[8:2:-1])  # >> 출력: "roW ol"
```

## 범위 객체
[범위](https://docs.python.org/3/library/stdtypes.html#ranges)(range) 시퀀스 객체는 시작할 숫자(포함), 끝을 맺을 숫자(제외) 그리고 순서 간격을 지정하여 일련의 숫자들을 순서에 맞게 저장하는 객체이다. 범위 객체는 `range()` 함수를 사용하여 생성된다.

| 함수        | 예시                          | 설명                                                          |
|-----------|-----------------------------|-------------------------------------------------------------|
| `range()` | `range(start,end,interval)` | 정수 `start`에서부터 `end` 이전까지 `interval`만큼의 간견으로 순서대로 숫자를 나열한 범위 객체를 생성한다. |

```python
rng = range(3, 10, 2)

rng[0]        # >> 출력: 3
rng[1]        # >> 출력: 5
rng[2]        # >> 출력: 7
rng[3]        # >> 출력: 9
```

## 리스트 객체
[리스트](https://docs.python.org/3/library/stdtypes.html#lists)(list) 시퀀스 객체는 데이터 유형과 관계없이 인덱스(index) 위치에 따라 데이터를 저장한다. 리스트의 데이터 할당은 대괄호(`[]`) 내에 항목을 순서대로 쉼표로 나누어 나열한다. 또한 대괄호는 인덱스 위치의 요소(element)를 호출할 때에도 사용된다.

```python
lst = [value1, value2, value3, value4, ...]

print(lst)           # >> 출력: [value1, value2, value3, value4, ...]
print(lst[0])        # >> 출력: value1
```

개별 요소를 재할당하여 데이터를 변경할 수 있다. 리스트 범위를 벗어난 요소를 호출할 수 없으므로, 이러한 경우 오류가 발생한다.

```python
lst = [value1, value2, value3]

lst[1] = value4        # >> 결과: lst = [value1, value4, value3]
lst[3] = value5        # IndexError: list assignment index out of range
```

리스트 객체는 *리스트 컴프리헨션(list comprehension)*라는 프로그램적 규칙을 따르는 일련화 방법으로 생성될 수 있다. 이를 위해서 `for` 반복문과 선택사항인 `if` 조건문을 사용하여 구현할 수 있다.

| 구문          | 예시                                          |
|:-----------------:|--------------------------------------------------|
| `[ for in if ]` | `[element for variable in sequence if condition]` |

리스트 객체를 구성하는 `element` 요소는 `sequence` 시퀀스 객체 내에서 `condition` 조건에 부합한 항목을 넘겨받은 `variable` 변수의 값을 할당받는다. `if` 조건문은 리스트 컴프리헨션에 있어 선택사항이다.

```python
lst = [var**2 for variable in range(5)]
lst = [var**2 for variable in range(5) if (variable ** 2) % 2 == 0]
```
```
[0, 1, 4, 9, 16]
[0, 4, 16]
```

### 리스트 연산
리스트는 고유의 연산을 통해 항목을 추가하거나 곱할 수가 있다. 아래의 연산들은 리스트 객체에만 제한되지 않으며, 차후에 소개될 다른 시퀀스 객체에도 적용이 가능하다.

| 연산자  | 이름 | 설명                                 |
|:----:|:--:|------------------------------------|
| `+`  | 덧셈 | 서로 다른 두 리스트 객체를 하나의 리스트로 통합한다.     |
| `*`  | 곱셈 | 리스트 항목을 정수만큼 반복한다 (`float` 사용 불가). |
| `in` | 포함 | 해당 항목이 리스트에 있는지 확인한다.              |

```python
lst = [value1, value2, value3]

# + 연산자
print(lst + [value3, value4])      # >> 출력: [value1, value2, value3, value3, value4]

# * 연산자
print(lst * 2)                     # >> 출력: [value1, value2, value3, value1, value2, value3]

# in 연산자
print(value1 in lst)               # >> 출력: True
print(value2 not in lst)           # >> 출력: False
```

다음은 리스트 객체(혹은 포괄적으로 시퀀스 객체)에 관한 특정 기능을 수행하는 함수들이다:

| 함수          | 예시                                | 설명                                                         |
|:-------------:| ----------------------------------- | ------------------------------------------------------------ |
| `len()`       | `len(lst)`                     | 리스트 `lst` 내의 요소 개수(혹은 리스트 길이)를 확인한다. |
| `all()`       | `all([condition for var in lst])` | 리스트 `lst`의 모든 요소가 `condition` 조건에 부합하면 `True`를 반환한다. |
| `any()`       | `any([condition for var in lst])` | `lst`의 최소 한 요소가 `condition` 조건에 부합하면 `True`를 반환한다. |
| `enumerate()` | `enumerate(lst)` | `lst` 내의 데이터를 해당 인덱스 번호와 함께 나열한다. |
| `list()`      | `list(iterable)`             | 문자열이나 범위와 같은 `iterable` 객체를 리스트 객체로 변환한다; 만일 `iterable`이 없을 시 빈 리스트 객체를 생성한다. |

```python
lst = [10, 9, 8, 7, 6]

# "all()" 함수
if all( [variable > 5 for variable in lst] ):
    print("숫자는 모두 5보다 크다.")           # >> 출력: 숫자는 모두 5보다 크다.

# "any()" 함수
if any( [variable % 2 ==  0 for variable in lst] ):
    print("최소 하나의 숫자는 짝수이다.")       # >> 출력: 최소 하나의 숫자는 짝수이다.
    
# "enumerate()" 함수
for variable in enumerate(lst):
    print(variable)                           # >> 출력: (0,10)
                                              # >>       (1,9)
                                              # >>       (2,8)
                                              # >>       (3,7)
                                              # >>       (4,6)
```

리스트는 객체이므로 특정 기능을 수행하는 메소드 또한 가지고 있다.

| 메소드     | 예시                        | 설명                                                       |
|:----------:| -------------------------- | ---------------------------------------------------------- |
| `append()` | `lst.append(value)`        | `value`를 `lst`의 맨 끝에 추가한다.                          |
| `insert()` | `lst.insert(index, value)` | `value`를 `lst`의 `index` 위치에 추가한다.                   |
| `index()`  | `lst.index(value)`         | `value`가 위치하는 가장 작은 인덱스 값을 반환한다.             |

## 튜플 객체
[튜플](https://docs.python.org/3/library/stdtypes.html#tuples)(tuple) 시퀀스 객체는 리스트와 마찬가지로 항목을 순서대로 저장하는 데이터이나, 초기화 후에는 값을 변경할 수 없다. 이러한 시퀀스 객체의 속성을 불변(immutable)이라고 한다. 튜플을 초기화 할 때 소괄호(`()`)를 사용하거나 괄호 없이 사용할 수도 있다.

```python
tpl = (value1, value2, value3)
print(tpl)           # >> 출력: (value1, value2, value3)
print(tpl[0])        # >> 출력: value1

# 대안: 소괄호 없이 초기화된 튜플
tpl = value1, value2, value3
print(tpl)           # >> 출력: (value1, value2, value3)
print(tpl[0])        # >> 출력: value1
```

튜플은 리스트 객체의 상수 버전이므로 내부 항목은 변경이 불가능하다. 이를 시도할 경우 오류가 발생한다.

```python
tpl = (value1, value2, value3)
tpl[1] = value4
```
```
TypeError: 'tpl' object does not support item assignment
```

튜플의 연산은 [*파이썬: 이터러블 § 리스트 연산*](#리스트-연산)에서 언급된 연산자, 함수, 그리고 메소드를 참고한다. 

### 튜플 언패킹
튜플을 언패킹(unpacking)한다는 것은 튜플의 각 요소를 변수나 또 다른 튜플에 할당하는 작업을 의미한다. 변수 접두부에 별표(`*`)를 넣으면 남은 요소들을 할당도 함께 받아 리스트 객체가 된다. 이에 대한 보조설명은 [*파이썬: 함수 § 매개변수 및 전달인자*](#매개변수-및-전달인자)에서 확인할 수 있다.

```python
var1, var2, *var3, var3 = [value1, value2, value3, value4, value5]

print(var1)        # >> 출력: value1
print(var2)        # >> 출력: value2
print(var3)        # >> 출력: [value3, value4]
print(var3)        # >> 출력: value5
```

## 딕셔너리 객체
[딕셔너리](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)(dictionary)는 인덱싱 키(key) 데이터와 값(value) 데이터를 단일 요소로 쌍을 이루는 (시퀀스가 아닌) 이터러블 객체이다. 딕셔너리의 값은 해당하는 키를 통해 호출한다. 딕셔너리는 중괄호(`{}`)를 사용하여 초기화한다.

```python
dictionary = {key1: value1, key2: value2, key3: value3}

print(dictionary[key1])        # >> 출력: value1
print(dictionary[key2])        # >> 출력: value2
print(dictionary[key4])        # KeyError: key4
```

리스트와 딕셔너리와 같이 가변(mutable) 이터러블 객체는 딕셔너리의 키로 사용될 수 없으나 딕셔너리의 값으로 사용될 수 있다.

```python
dictionary = {lst1: value1, key2: value2}
```
```
TypeError: unhashable type: 'list'
```

딕셔너리의 키에 연동된 값을 변경할 수 있다. 리스트 객체와 달리, 새로운 키를 생성하여 값를 연동시키는 것도 함수나 메소드의 도움 없이 가능하다.

```python
dictionary = {key1: value1, key2: value2, key3: value3}
dictionary[key1] = value4
dictionary[key5] = value5
```
```
{key1: value1, key2: value2, key3: value3, key5: value5}
```

딕셔너리의 연산은 시퀀스 객체의 연산과 유사하나 약간의 차이점이 있다.

| 연산자  | 이름        | 설명                                           |
|:----:|:---------:|----------------------------------------------|
| `+`  | 덧셈        | 서로 다른 두 딕셔너리 객체를 하나의 딕셔너리로 통합한다.             |
| `in` | 포함 (키 제외) | 해당 키가 딕셔너리에 있는지 확인한다. 하지만 딕셔너리의 값은 확인하지 않는다. |

```python
dictionary = {key1: value1, key2: value2}

print(key1 in dictionary)            # >> 출력: True
print(value2 in dictionary)          # >> 출력: False
print(key3 not in dictionary)        # >> 출력: True
```

딕셔너리는 특정 함수와 메소드를 통해 딕셔너리 전용 연산을 수행할 수 있다.

|   연산   | 예시                         | 설명                                                         |
| :------: | ---------------------------- | ------------------------------------------------------------ |
| `get()`  | `dictionary.get(key,[desc])` | `key` 키를 찾아 해당 값을 호출한다. `key`를 찾지 못할 시, 덧붙인 `desc` 설명이 반환된다 (기본값: `None`). |
| `dict()` | `dictionary=dict()`          | 빈 딕셔너리 객체를 생성한다.                                 |

```python
dictionary = {key1: value1, key2: value2}

print(dictionary.get(key1))                            # >> 출력: value1
print(dictionary.get(key3))                            # >> 출력: None
print(dictionary.get(key3, "딕셔너리 내에 없음"))         # >> 출력: 딕셔너리 내에 없음
```

## 집합 객체
[집합](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)(set) 객체는 요소의 고유성을 보장하는 (시퀀스가 아닌) 이터러블 객체이다. 집합 객체의 특징은 중복 요소를 허용하지 않는다. 딕셔너리와 마찬가지로 집합 초기화에는 중괄호(`{}`)를 사용하지만 `key: value` 형태가 아니다. 이러한 이유로 집합은 리스트보다 요소를 더 빠른 시간 내에 확인할 수 있다.

```python
st = {value1, value2, value3}
print(st)
```
```
{value1, value2, value3}
```

집합의 연산자는 수학에서의 집합에서 사용되는 연산과 동일한 역할을 한다. 

| 연산자 | 이름   | 설명                                                       |
|:------:|:------:| ---------------------------------------------------------- |
| `|`    | 합집합 | 두 집합의 합을 반환한다.                                   |
| `&`    | 교집합 | 두 집합에 존재하는 요소만 반환한다.                        |
| `-`    | 여집합 | 피감수 집합에만 존재하며 감수 집합에 없는 요소를 반환한다. |
| `^`    | 대칭차 | 한 집합에는 존재하나 둘 다 속하지 않는 요소를 반환한다.    |

```python
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 | set2)        # >> 출력: {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(set1 & set2)        # >> 출력: {4, 5, 6}

print(set1 - set2)        # >> 출력: {1, 2, 3}
print(set1 - set2)        # >> 출력: {7, 8, 9}

print(set1 ^ set2)        # >> 출력: {1, 2, 3, 7, 8, 9}
```

집합은 특정 함수와 메소드를 통해 집합 전용 연산을 수행할 수 있다.

|  함수   | 예시            | 설명                                                         |
| :-----: | --------------- | ------------------------------------------------------------ |
| `set()` | `set(iterable)` | `iterable`로부터 집합을 생성하는 함수이다. 리스트와 튜플은 변환할 수 있으나, 딕셔너리는 불가하다. |

빈 집합 객체는 위의 함수로 통해서만 생성될 수 있으며, 아무런 요소가 없는 중괄호(`{}`)는 빈 딕셔너리 객체를 생성하기 때문이다. 한편, 집합 객체가 사용할 수 있는 메소드는 다음과 같다.

| 메소드        | 예시                 | 설명                        |
|:----------:|--------------------|---------------------------|
| `add()`    | `st.add(value)`    | 집합에서 `value` 요소를 끝에 추가한다. |
| `remove()` | `st.remove(value)` | 집합에서 `value` 요소를 제거한다.    |
| `pop()`    | `st.pop()`         | 무작위로 선택된 요소를 집합 내에서 제거한다. |

```python
st = set([value1, value2, value3, value1])
print(st)                # >> 출력: {value1, value2, value3}

st.add(value4)
st.remove(value1)
print(st)                # >> 출력: {value2, value3, value4}

print(st.pop())          # >> 출력: value2 (무작위로 제거)
print(st)                # >> 출력: {value3, value4}
```

## 제너레이터 객체
제너레이터(generator)는 `yield` 키워드와 반복문을 통해 요소들을 프로그램적으로 직접 생성할 수 있는 이터러블 객체이다. 요소들이 메모리에 저장되는 것이 아니라 코드를 통해 생성되는 것이기 때문에, 제너레이터 객체는 메모리 제한이 없는 점에서 무한한 개수의 데이터를 담을 수 있는 이점을 가진다.

> 제너레이터에서 가장 중요한 것은 `yield` 키워드로 이터러블 객체로써 반환될 데이터를 지정한다.

```python
# 제네레이터 생성
def generator_function():
    variable = 0
    while variable < 5
        yield var
        var += 1

# 제너레이터 반복으로 각 요소 반환
for variable in generator_function():
    print(variable)

# 리스트 객체로 변환
lst = list(generator_function())
print(lst)
```
```
0
1
2
3
4
[0, 1, 2, 3, 4]
```

# 파이썬: 함수
원하는 작업을 수행하도록 함수를 제작하고 필요할 때마다 사용하여 효율성을 높일 수 있는데, 이러한 프로그래밍 기법을 *[함수형 프로그래밍](https://ko.wikipedia.org/wiki/함수형_프로그래밍)(functional programming)*이라고 한다. 본 장은 파이썬에서 사용자 정의 함수의 생성 및 사용 방법에 대하여 소개한다.

## 함수
함수(function)는 독립적인 코드 블록으로써 데이터를 처리하며, 재사용이 가능하고 호출 시 처리된 데이터를 보여주어 유동적인 프로그램 코딩을 가능하게 한다. 함수는 이름 뒤에 소괄호가 있는 `function()` 형식으로 구별된다.

```python
variable = [0, 3, 5, 9]
print(len(variable))
# "print()" 출력 함수, 그리고 리스트 객체를 인자로 받아 리스트 길이를 반환하는 "len()" 함수
```
```
4
```

## `def` 키워드
`def` 키워드는 사용자가 직접 함수를 만드는데 사용된다. 함수를 호출할 때 전달할 데이터가 없을지언정 소괄호(`()`)가 반드시 필요하다. 만일 사용자가 함수를 정의하기도 전에 호출하면, 순차적으로 실행되는 파이썬의 특성에 의해 존재하지 않는 함수를 호출하는 것으로 간주하여 오류가 발생한다.

```python
# 올바른 함수 정의 및 호출 순서
def function():
    print("Hello World!")

function()
```
```
Hello World!
```
---
```python
# 잘못된 함수 정의 및 호출 순서
function()

def function(arg1, arg2):
    print("Hello World!")
```
```
NameError: name 'function' is not defined
```

### `return` 반환문
`return` 반환문은 함수로부터 데이터를 반환하는 함수 전용 문장이다. 반환문이 실행되면 하단에 코드가 남아 있음에도 불구하고 함수는 즉시 종료된다. 함수는 반환문을 반드시 필요로 하지 않으며, 이러한 경우에는 `None` 값이 반환되어 변수에 전달된다.

```python
# return 반환문이 있는 사용자 정의 함수
def function():
    print("Hello World!")
    return 3
    
print(function())
```
```
Hello World!
3
```

### 매개변수 및 전달인자
다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* 전달인자 (argument)
    : *간략하게 "인자"라고도 부르며, 함수로 전달되는 데이터이다.*

* 매개변수 (parameter)
    : *전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수 선언은 함수의 소괄호(`()`) 내에서 이루어진다.*

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 |    구문    | 설명                                                 |
| :------: | :----------: | ------------------------------------------------------------ |
|   `*`    |   `*args`    | 여러 개의 전달인자들을 한 번에 허용한다.<br />함수 내에서는 별표 없이 `args`로 호출하며 튜플을 반환한다. 반드시 일반 매개변수 뒤에 위치해야 한다. |
|   `**`   |  `**kwargs`  | 정의되지 않은 매개변수를 미리 사용할 수 있도록 한다.<br />함수 내에서는 별표 없이 `kwargs`로 호출하며 전달인자 이름과 해당 값으로 구성된 딕셔너리를 반환한다. 반드시 일반 매개변수 뒤에 위치해야 한다. |
|   `=`    | `arg=value` | 전달인자가 없으면 기본값 `value`가 대신 매개변수에 할당된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |

아래의 예제는 함수의 매개변수와 전달인자가 어떻게 동작하는지 보여준다.

```python
# 매개변수 *args는 하나 이상의 인자를 전달할 수 있다.
def function(arg1, *args):
    print(arg1)
    print(args)
    print(args[0])
    
function(1, 2, 3, 4)
```
```
1
(2, 3, 4)
2
```

----

```python
# 매개변수 **kwargs는 함수 내에서 정의되지 않은 매개변수를 수용할 수 있다.
def function(arg1, **kwargs):
    print(kwargs)
    
function(1, key1 = value1, key2 = value2)
```
```
{key1∶ value1, key2∶ value2}
```

----

```python
# 매개변수 arg2의 기본값 초기화
def function(arg1, arg2 = "Hello"):
    print(arg2)
    
function(1)
function(2, "World!")
```
```
Hello
World!
```

### 지역 변수 및 전역 변수
[*파이썬: 기초 § 변수*](#변수)에서 변수는 데이터를 저장하는 공간이라고 설명하였다. 하지만 변수가 파이썬 코드 중에서 어디에 정의되었는지에 따라 두 가지의 종류로 구분된다.

* 지역 변수(local variable)
    : *함수(function)나 [클래스](#파이썬-클래스)(class) 혹은 [모듈](#파이썬-패키지)(module) 내부에서 정의된 변수이다. 지역 변수에 저장된 데이터는 해당 함수, 클래스, 혹은 모듈 외부에서는 소멸되어 사용할 수 없다. 어차피 소멸될 변수이므로 지역 변수는 외부에서 정의된 전역 변수와 같은 이름을 가질 수 있다.*

* 전역 변수(global variable)
    : *지역 변수가 아닌 나머지 변수들을 가리키며, 프로그램이 끝나거나 `del` 키워드로 소멸되지 않는 이상 함수, 클래스, 모듈을 포함해 어디에서든 사용할 수 있다. 혹시나 하는 경우를 대비해 지역 변수가 아니라 전역 변수임을 확실하게 명시하려면 `global` 키워드를 사용한다.*

다음 예시 코드는 외부에서 정의된 전역 변수가 함수 내에서도 사용될 수 있음을 보여준다.

```python
variable = "Hello World!"
def function():
    print("- Local:", variable)

print("Initial:", variable)
function()
print("- Final:", variable)
```
```
Initial: Hello World!
- Local: Hello World!
- Final: Hello World!
```

그러나 함수 내에서 동일한 식별자를 갖는 지역 변수를 정의할 수 있다. 그러면 함수 내에 있는 동안 전역 변수가 아닌 지역 변수로 인식한다.

```python
variable = "Hello World!"
def function():
    variable = "Python"
    print("- Local:", variable)

print("Initial:", variable)
function()
print("- Final:", variable)
```
```
Initial: Hello World!
- Local: Python
- Final: Hello World!
```

만일 `global` 키워드로 함수 내에서 사용되는 변수가 전역 변수임을 명시한다면 다음과 같은 결과가 나타난다.

```python
variable = "Hello World!"
def function():
    global variable
    variable = "Python"
    print("- Local:", variable)

print("Initial:", variable)
function()
print("- Final:", variable)
```
```
Initial: Hello World!
- Local: Python
- Final: Python
```

> 전역 변수의 데이터를 함수로 불러올 목적으로 `global` 키워드를 사용할 수 있겠지만, 가장 안전한 방법은 전역 변수를 함수의 인자로 전달하는 것이다.

## 순수 함수 
순수 함수(pure function)는 동일한 인자를 전달하면 항상 같은 데이터가 반환되며, 전역변수와 같은 외부적 부작용(side effect) 영향이 없는 함수이다. 예를 들어, 코사인 함수 `cos(x)`의 반환값은 오로지 `x` 전달인자에만 의존하며 동일한 숫자가 입력되면 항상 같은 결과값이 나온다. 그러므로 코사인 함수는 순수 함수이다.

## 고차 함수
고차 함수(higher-order function)는 다른 함수를 전달인자로 사용하거나 함수를 반환하는 함수이다. 전달되거나 반환되는 함수들은 뒤에 소괄호 `()`가 없어 실행되지는 않고, 하나의 변수처럼 여겨저 참조될 뿐이다.

> 고차 함수의 인자로 전달되는 함수를 콜백 함수(callback function)라고 부른다.

### `map()` 함수
`map()` 함수는 이터러블 객체와 매개변수를 갖는 함수를 인자로 갖는 고차 함수이다. `map()` 함수는 이터러블 객체를 매개변수 함수의 인자로 전달하여 얻은 결과값으로 구성된, 즉 함수로 맵핑(mapping)된 리스트를 반환한다.

|                             구문                             |
| :----------------------------------------------------------: |
|          `map(function, iterable1, iterable2, ...)`          |
| 고차 `map()` 함수에서 이터러블 객체 `iterable1`와 `iterable2`가 `function`의 인자로 전달된다. |

`SyntaxError`와 같은 오류를 방지하려면 리스트나 튜플과 같은 이터러블 객체로 변환해야 한다.

```python 
lst1 = [1, 2, 3, 4, 5]
lst2 = [0, 9, 8, 7, 6, 5]

variable1 = map(lambda arg1, arg2: arg1 ** 2 + arg2, lst1, lst2)
variable2 = map(lambda arg2, arg1: arg1 ** 2 + arg2, lst2, lst1)

print(list(variable1))
print(list(variable2))
```
```
[1, 13, 17, 23, 31]
[1, 83, 67, 53, 41]
```

### `filter()` 함수
`filter()` 함수는 이터러블 객체와 조건 함수(일명 술어; predicate)를 인자로 갖는 고차 함수이다. 술어의 조건에 만족하는 데이터만 필터링되어 구성된 이터러블 객체를 반환한다.

|                             구문                             |
| :----------------------------------------------------------: |
|                `filter(predicate, iterable)`                 |
| 고차 `filter()` 함수에서 이터러블 객체 `iterable`는 `predicate`의 인자로 전달된다. |

`SyntaxError`와 같은 오류를 방지하려면 리스트나 튜플과 같은 이터러블 객체로 변환해야 한다.

```python
lst = [1, 2, 3, 4, 5]

variable = filter(lambda arg: arg % 2 is 0, lst)

print(list(variable))
```
```
[2, 4]
```

## 데코레이터
데코레이터(decorator)는 함수의 기능을 수정하기 위해 사용되는 함수이며, 값을 반환하는 게 아니라 함수 자체를 반환한다. 데코레이터 고차 함수의 작업으로 반환된 함수를 차후에 사용하기 위해 이를 받아줄 변수가 필요하다.

```python
# 본래 함수
def function():
    ...

# 데코레이터 생성
def decorator(func):
    def modified_function():
        """
        func() 함수를 포함한 문
        """
    return modified_function

# 함수 수정하기(데코레이팅)
variable = decorator(function) 
variable()                  # 실제로는 "variable"라는 이름의 변수에 할당된 함수이다.
                
# 함수 수정하기(데코레이팅): 함수 이름 유지
function = decorator(function)
function()
```

위의 데코레이터는 `function()`를 수정하였고 변수 `variable` 그리고 `function`에 할당하였으며, 후자의 경우는 함수명이 유지되었다고 볼 수 있다.

### `@` 기호
데코레이터의 `@` 기호는 적용될 데코레이터 이름과 함께 수정될 함수 앞에 놓여 사용된다.

| 연산자 | 예시           | 설명                                                     |
|:---:|--------------|--------------------------------------------------------|
| `@` | `@decorator` | `@decorator` 는 `function = decorator(function)`를 대체한다. |

```python
# 데코레이터 생성
def decorator(func):
    def modified_function():
        """
        func() 함수를 포함한 문
        """
    return modified_function

# 함수 수정하기: @ 기호 사용
@decorator
def function():        # "function()"의 본래 함수
    ...

# 함수 이름은 그대로 유지된다.
function()
```

추가적으로, 수정될 함수에는 하나 이상의 데코레이터를 적용 할 수 있다.

```python
@decorator1
@decorator2
def function():
    ...
```

수정될 함수로부터 가장 가까운 데코레이터가 우선적으로 적용된다. 그러므로 `function()` 함수는 먼저 `@decorator2` 다음 `@decorator1` 데코레이터 순서로 적용된다.

## 익명 함수
익명 함수(anonymous function), 일명 *람다 함수(lambda function)* 혹은 *람다식(lambda expression)*은 이름이 없는 (즉, 익명) 함수로, 데이터를 저장하지 않고 단일 표현식으로만 값을 반환한다. 익명 함수는 흔히 일회용 함수로 사용되거나 고차 함수의 전달인자로 사용된다.

| 구문                                                  |
|:---------------------------------------------------:|
| `lambda arg1, arg2 ∶ expression`                    |
| 익명 함수는 매개변수 `arg`와 이를 반환하는 표현식 `expression`으로 구성된다. |

비록 익명 함수는 한 번만 사용되는 이름없는 함수이더라도 변수에 할당하여 언제든지 호출할 수 있다.

```python
# (이름이 있는) 네임드 함수
def function(arg1, arg2):
    return 2 * arg1 + arg2

# 익명 함수
(lambda arg1, arg2: 2 * arg1 + arg2)(2, 3)

# 변수에 할당된 익명 함수
variable = lambda arg1, arg2: 2 * arg1 + arg2
variable(2,3)
```
```
7
```

## 재귀 함수 
재귀 함수(recursive function)는 스스로를 호출하는 함수이다. 재귀 함수는 반드시 스스로를 호출하는 반복으로부터 탈출하는 기저 조건(base case)이 필요하다. 기저 조건이 없을 시, 재귀는 무한히 발생하여 메모리 부족으로 프로세스 충돌이 발생한다.

```
RuntimeError: maximum recursion depth exceeded
```

수학에서의 펙토리얼이 재귀 함수 구현의 대표적인 예제이다.

```python
# 예제: 펙토리얼 "!"
def factorial(arg):
    # 기저 조건: 재귀로부터 탈출하는 조건
    if arg == 1: 
        return 1
    else:
        return arg * factorial(arg-1)

print(factorial(5))
```
```
120
```

# 파이썬: 클래스
파이썬은 객체와 클래스를 중심으로 프로그래밍하는 *[객체지향 프로그래밍](https://ko.wikipedia.org/wiki/객체_지향_프로그래밍)(object-oriented programming; OOP)* 기법도 적용할 수 있다. 본 장은 파이썬에서 객체지향 프로그래밍을 구현하기 위한 사용자 정의 클래스의 생성 및 사용 방법에 대하여 소개한다.

## 객체
이전 장에서 (데이터를 저장할 수 있는) 변수와 (데이터를 처리 할 수 있는) 함수를 소개하였다. 객체(object 혹은 instance)는 이러한 변수와 함수를 하나의 데이터로 캡슐화한 데이터이다. 현재까지 다룬 내용 중에서 객체에 해당되는 데이터로는 문자열 객체와 시퀀스 객체가 있다.

```python
variable = [0, 3, 5, 9]
print(variable.index(5))
# variable이란 이름을 가진 리스트 객체의 "index()" 메소드를 사용하여 값 5에 대한 위치를 반환한다
```
```
2
```

## 캡슐화
캡슐화(encapsulation)는 객체의 핵심 개념으로 아래의 특성을 가진다.

1. 변수와 함수를 하나의 객체로 결합한다.
2. 우연치 않은 수정을 방지하기 위해 이러한 변수 및 함수에 대한 직접적인 접근을 외부로부터 제한할 수 있다.

### 속성 및 메소드
속성(attribute)과 메소드(method)는 객체에 캡슐화된 변수와 함수를 가리키는 용어이며, 아래와 같은 방법으로 접근한다. 객체에 속한 변수와 함수들은 객체의 맴버(member)라고 부르며 맴버 연산자(`.`)로 접근한다.

| 객체 맴버 | 구문                   |
|:-------:|----------------------|
| 속성      | `instance.attribute` |
| 메소드     | `instance.method()`  |

## 클래스
클래스(class)는 객체를 생성하는데 사용된다. 클래스는 `class` 키워드를 사용하여 정의되며, 클래스 내부에는 객체의 속성과 메소드가 되는 변수와 함수를 정의한다. 클래스로부터 객체를 생성하는 절차를 *객체화(instantiation)*라고 한다. 아래는 `class` 키워드를 사용하여 제작한 사용자 정의 클래스의 간단한 예시 중 하나이며, 변수 및 함수와의 유사성을 확인할 수 있다.

```python
# 클래스 생성하기
class CLASS:
    # 인스턴스 초기화 (= 생성자)
    def __init__(self, arg1, arg2):
        # 속성 (변수와 비슷함)
        self.attr1 = arg1
        self.attr2 = arg2
        
    # 메소드 (함수와 비슷함)
    def method(self, arg3):
        self.attr3 = arg3
        return self.attr1 + self.attr2 - self.attr3

# 객체화
instance = CLASS(value1, value2)    # 클래스로부터 객체 생성

# 그러므로...
print(instance.attr3)
print(instance.method(value3))
```
```
value3
value1 + value2 - value3
```

### `self` 변수
`self` 변수는 객체 스스로를 가리키는 변수로, 사실상 `self`란 이름은 관습적인 명칭일 뿐이며 다른 식별자를 사용하여도 된다. 변수 또는 함수에 `self`를 두면 캡슐화에 의해 객체에서만 접근할 수 있는 속성 및 메소드로 정의된다. `self`가 없는 변수 및 함수는 객체 내부의 지역 변수 및 함수에 불과하여 외부에서 접근 할 수 없으며, 만일 접근을 시도하면 "AttributeError" 오류가 발생한다.

```python
# 클래스 생성
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = None        # 속성값을 초기화해주지 않으면 에러가 발생한다.
        attr3 = arg2             # 지역 변수


# 객체화
instance = CLASS(1, 2)
''' 동일: 
CLASS.__init__(self = instance, arg1 = 1, arg2 = 2)
'''

# 그러므로
instance.attr1        # >> 출력: 1
instance.attr2        # >> 출력: None
instance.attr3        # AttributeError: 'CLASS' object has no attribute 'attr3'
```

### `__init__()` 메소드
`__init__()` 메소드는 클래스를 객체화하면 자동으로 호출되는 메소드이다. 객체의 속성 초기화(initialization)에 사용되며, 객체화를 위해 필요한 인자 개수를 지정하기도 한다. 만일 별도의 초기화가 필요하지 않다면 정의하지 않아도 되는 선택사항이다.

## 객체 속성 및 메소드
객체 속성(instance attribute) 및 객체 메소드(instance method)는 클래스 내에서 `self`와 함께 정의된 객체만이 접근할 수 있는 속성과 메소드이다. 객체 속성은 객체 메소드 내에서만 정의될 수 있다.

```python
# 클래스 생성
class CLASS:
    def __init__(self, arg1, arg2):
        # 객체 속성
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    # 객체 메소드
    def method(self, arg3):
        self.attr3 = arg3
```

## 클래스 속성 및 메소드
클래스 속성(class attribute) 및 클래스 메소드(class method)는 객체뿐만 아니라 클래스도 접근할 수 있는 속성과 메소드이다. 클래스 속성은 객체 메소드가 아닌 클래스 내에 정의된 속성이다. 그리고 클래스 메소드를 선언하기 위해서는 아래의 데코레이터를 필요로 하다. 

|     구문     |설명                              |
| :------------: | ---------------------------------------- |
| `@classmethod` | 클래스 메소드를 선언하는데 사용되는 데코레이터이다. |

클래스 메소드 또한 객체 클래스의 `self` 변수와 같이 클래스 스스로를 가리키는 변수가 필요하며, 관습적으로 `cls`라는 식별자를 사용한다.

```python
# 클래스 생성
class CLASS:
    # 클래스 속성
    attribute = value
    
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    def method1(self, arg3):
        self.attr3 = arg3
    
    # 클래스 메소드
    @classmethod
    def method2(cls, arg4):
        return arg4
    
    # 객체화를 위한 클래스 메소드
    @classmethod
    def method3(cls, arg5, arg6):
        return cls(arg5**2, arg6**2)
    
    
# 객체화
instance1 = CLASS(1, 2)
instance1.method1(4)

# 객체화: arg1 = 1**1, arg2 = 2**2
instance2 = CLASS.method3(1, 2)
instance2.method1(4)

# 그러므로...
CLASS.attribute         # >> 출력: value
CLASS.method2(3)        # >> 출력: 3

instance1.attribute     # >> 출력: value
instance1.attr1         # >> 출력: 1
instance1.attr2         # >> 출력: 2
instance1.attr3         # >> 출력: 4

instance2.attribute     # >> 출력: value
instance2.attr1         # >> 출력: 1 (= 1**2)
instance2.attr2         # >> 출력: 4 (= 2**2)
instance2.attr3         # >> 출력: 4
```

## 정적 메소드
정적 메소드(static method)는 객체화없이 호출할 수 있으며, `self`나 `cls` 같은 변수를 필요로 하지 않는다. 이러한 변수가 없으므로 정적 메소드는 클래스 및 객체 속성과 메소드를 접근할 수 없다. 다시 말해, 정적 메소드는 단순히 클래스에 속해있는 일반 함수와 동일하게 취급하면 된다. 정적 메소드를 선언하기 위해서는 아래의 데코레이터가 필요하다. 

| 구문         |설명                               |
|:---------------:| ----------------------------------------- |
| `@staticmethod` | 정적 메소드를 선언하는데 사용되는 데코레이터이다. |

```python
# 클래스 생성
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None
        
    def method1(self, arg3)
        self.attr3 = arg3
        
    # 정적 메소드
    @staticmethod
    def method2(arg4):
        return True if arg4 is 4 else False


# 객체화
instance = CLASS(1, 2)
instance.method1(4)

# 그러므로...
instance.attr1            # >> 출력: 1
instance.attr2            # >> 출력: 2
instance.attr3            # >> 출력: 4

CLASS.method2(4)        # >> 출력: True
```

## 매직 메소드
매직 메소드(magic method)는 식별자 양쪽에 던더(dunder; double underscore)가 있는 특수한 메소드이다. 매직 메소드는 대부분 연산자를 나타내며 연산자 오버로딩으로 기능을 수정하는데 사용된다. 초기화에 사용된 `__init__()` 메소드는 널리 사용되는 매직 메소드 중 하나이다. 아래의 도표는 연산자에 대한 매직 메소드의 목록이다.

| 연산자  | 이름       | 매직 메소드                   |
|:----:|:--------:|--------------------------|
| `+`  | 산술: 덧셈   | `__add__(self, arg)`     |
| `-`  | 산술: 뺄셈   | `__sub__(self, arg)`     |
| `*`  | 산술 : 곱셈  | `__mul__(self, arg)`     |
| `/`  | 산술 : 나눗셈 | `__truediv__(self, arg)` |
| `&`  | 논리: AND  | `__and__(self, arg)`     |
| `^`  | 논리: XOR  | `__xor__(self, arg)`     |
| `|`  | 논리: OR   | `__or__(self, arg)` |
| `()` | 인자호출    | `__call__(self, arg)`    |

### 연산자 오버로딩
연산자 오버로딩(operator overloading)은 특정 클래스나 자료형에서 연산자의 기능을 변경하는 작업이다. 연산자 오버로드에는 매직 메소드가 사용되지만 오버로드 된 기능은 해당 특정 클래스에만 적용된다. 예를 들어,`x + y`는 `x.__add__(y)`와 동일하다.

```python
# 클래스 생성
class CLASS:
    def __init__(self, arg1):
        self.attribute = arg1
        
    def __add__(self, arg2):
        # 두 객체의 attribute 속성을 합한 새로운 CLASS 객체 생성
        return CLASS(self.attribute + " " + arg2.attribute)

# 객체화
instance1 = CLASS("Hello")
instance2 = CLASS("World!")

instance3 = instance1 + instance2
print(instance3.attribute)
```
```
Hello World!
```

## 상속
상속(inheritance)은 슈퍼클래스(일명 기반 클래스)가 파생되는 서브클래스(일명 자식 클래스)에게 속성과 메소드를 제공하는 행위이다. 슈퍼클래스와 서브클래스에 동일한 이름의 속성과 메소드가 존재할 경우, 슈퍼클래스의 속성과 메소드는 서브클래스에 의해 묻힌다.

```python
# 슈퍼클래스 생성
class SUPERCLASS:
    attr1 = value1
    attr2 = value2

# 서브클래스 생성
class SUBCLASS(SUPERCLASS):
    attr2 = "Hello World!"
    attr3 = value3

# 객체화  
instance = SUBCLASS()

# 그러므로...
instance.attr1        # >> 출력: value1
instance.attr2        # >> 출력: "Hello World!"
instance.attr3        # >> 출력: value3
```

### 슈퍼 함수
`super()` 함수는 슈퍼클래스의 속성과 메소드에 직접 접근한다. 해당 함수는 주로 슈퍼클래스 속성과 메소드가 서브클래스에 묻히는 것을 방지하기 위해 사용된다.

```python
# 슈퍼클래스 생성
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attribute = arg1

# 서브클래스 생성
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        print("Goodbye World?")


# 객체화
instance = SUBCLASS(3)

# 그러므로...
print(instance.attribute)
```
```
"Goodbye World?"
AttributeError: 'SUBCLASS' object has no attribute 'attribute'
```

슈퍼클래스 `SUPERCLASS`의 `__init__()` 메소드는 서브클래스 `SUBCLASS`의 `__init__()` 메소드에 의해 묻혀 상속되지 않은 것처럼 보인다. 결국 `print(Hello World")`가 실행되지 않고 `self.attribute`이 상속에도 불구하고 오류를 일으키는 이유이다.

슈퍼 함수를 사용하여 슈퍼클래스 `SUPERCLASS`의 `__init__()` 메소드를 다음과 같이 집적 불러올 수 있다.

```python
# 슈퍼클래스 생성
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attribute = arg1

# 서브클래스 생성
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        # 슈퍼클래스로부터 "__init__()" 메소드 직접 상속
        super().__init__(arg2)
        print("Goodbye World?")


# 객체화
instance = SUPERCLASS(3)

# 그러므로...
print(instance.attribute)
```
```
"Hello World!"
"Goodbye World?"
3
```

## 데이터 숨기기
파이썬의 캡슐화는 데이터 숨기기(data hiding)가 완전히 보장되지 않는다. 여전히 외부 코드에서 클래스의 속성과 메소드 접근이 가능하다. 클래스에서 가능한 숨겨져야 하는 속성과 메소드가 있는 경우 일반적으로 이름 뒤섞기(name mangling) 등의 방법으로 데이터를 숨길 수 있다.

| 기호   | 예시            | 설명                                                |
|:----:|---------------|---------------------------------------------------|
| `_`  | `_attribute`  | 이름 뒤섞기 기법이 아니지만, 클래스가 모듈로써 불러올 경우에 대하여 접근을 제한된다. |
| `__` | `__attribute` | 이름 뒤섞기: 모듈로써 접근과 클래스 외부에서의 접근을 제한한다.              |

### 프로퍼티
프로퍼티(property)는 단일 메소드를 `getter`,`setter` 그리고 `deleter`라는 세 개의 개별 메소드로 나누어 데이터 숨기기를 지원하는 데코레이터이다. 프로퍼티는 데코레이터 기호를 사용하여 선언되기 때문에 메소드에서만 사용할 수 있다.

| 메소드     | 구문                | 설명                            |
|:-------:|-------------------|-------------------------------|
| Getter  | `@property`       | 프로퍼티 속성에서 값을 가져 오는 메소드이다.     |
| Setter  | `@method.setter`  | [선택사항] 프로퍼티 속성 값을 설정하는 메소드이다. |
| Deleter | `@method.deleter` | [선택사항] 프로퍼티 속성을 삭제하는 메소드이다.   |

```python
# 클래스 생성
class CLASS:
    def __init__(self, arg1):
        self.attribute = arg1
    
    # 정의: GETTER 메소드
    @property
    def method(self):
        return self.attribute
    
    # 정의: SETTER 메소드
    @method.setter
    def method(self, arg2):
        self.attribute = arg2
    
    # 정의: DELETER 메소드
    @method.deleter
    def method(self):
        del self.attribute
        
# 객체화
instance = CLASS(3)

# 그러므로
print(instance.method)   # 예시: GETTER 메소드

instance.method = 1      # 예시: SETTER 메소드
print(instance.method)

del instance.method      # 예시: DELETER 메소드
print(instance.method)
```
```
3
1
AttributeError: 'CLASS' object has no attribute 'attribute'
```

프로퍼티로 메소드를 나누므로써 `setter` 및 `deleter`와 같은 수정되어서는 안될 민감한 코드를 숨기고 `getter`만으로 메소드를 호출한다. 즉, `getter`로부터 메소드를 지속적으로 사용 가능하게 하면서 메소드의 내부적 코딩 작업을 `setter`에서 진행할 수 있다.

# 파이썬: 예외 처리
예외(exception)는 잘못된 코딩이나 입력으로 인해 프로그램상 실행 불가능 코드 오류이다. 인터프리터에서 걸러지는 오류가 아니기에 정상적인 프로그램이 실행될 수 있으나, 예외가 발생하면 프로그램은 즉시 중단된다. 예외 처리는 실행된 프로그램이 예외로 인해 프로그램 실행이 중단되는 것을 방지하여 안정적으로 실행되는 것을 주목표로 한다.

## `try`/`except` 예외 처리문
`try`/`except` 쌍은 예외를 감지하고 발생한 예외 유형에 따라 기입된 코드를 실행하여 처리된다. 예외 처리된 파이썬 프로세스는 도중에 중단되지 않고 계속 실행된다.

| 키워드    | 설명                                                         |
|:---------:| ------------------------------------------------------------ |
| `try`     | 예외가 있는지 확인하는 코드 블록을 제공한다.               |
| `except`  | 특정 예외가 발생하였을 때 실행된다.         |
| `else`    | [선택사항] 예외가 감지되지 않았을 시 실행된다. |
| `finally` | [선택사항] 예외 처리 마지막에 반드시 실행되는 코드이다. |

```python
try:
    ...
except exception_type1:
    ...
except exception_type2:
    ...
except:            # 전조건 예외처리는 마지막에 위치한다.
    ...
```

## `raise` 문
`raise` 문은 의도적으로 예외를 발생시키는데 사용된다. 자체 제작 함수나 클래스에서 설계되지 않은 방식으로 접근하거나 사용하려는 경우, 해당 문으로 오류를 일으켜서 프로세스 실행을 즉시 중단시키는 용도로 활용된다.

```python
# 명시적 예외 발생: 위의 'except' 문 내에서도 단독으로 사용할 수 있음.
raise

# 명시적으로 발생된 예외에 대한 자세한 설명을 제공한다.
raise exception_description
```

# 파이썬: 파이썬다운
본 장에서는 개발자들이 파이썬으로 프로그래밍을 할 때 추천하는 파이썬 코딩 스타일에 대하여 소개를 하며, 이를 영어로 pythonic("파이썬"스러운)이라고 부른다.

## 파이썬의 젠
파이썬의 젠(Zen of Python)은 파이썬에 내장되어 있는 파이썬 코딩 지침을 담고 있으며, 아래의 코드로 확인할 수 있다.

```python
import this
```

## PEP8
PEP8이란, 여덟 가지의 파이썬 개선 제안(Python Enhancement Proposals)으로 경력있는 파이썬 개발자들이 조언하는 파이썬 프로그래밍 스타일이다.

1. 모듈 이름은 간결하고 소문자로만 구성되어야 한다.
2. 클래스 이름은 대문자로 시작하는 단어들로 구성되어야 한다 (일명 CapWords 스타일).
3. 대부분의 변수와 함수 이름은 소문자와 밑줄(띄어쓰기 대행)로만 구성되어야 한다.
4. 상수 변수는 대문자와 밑줄(띄어쓰기 대행)로만 구성되어야 한다.
5. 파이썬 키워드와 충돌이 일어날 수 있는 이름 접미부에 밑줄을 넣도록 한다.
6. 한 줄은 80자를 초과하지 않도록 한다.
7. `from module import *`는 되도록 사용하지 않는다.
8. 한 줄에는 하나의 문만 있어야 한다.

## 시작점
시작점(entry point)는 프로그램이 시작되는 부분을 의미하며, C/C++ 프로그래밍 언어의 경우 `main()` 함수에서부터 코드가 실행된다. 파이썬에는 시작점이 존재하지 않는다. 하지만 현재 어느 스크립트를 중심으로 실행되는지 판별하는 코드가 있으며 `__name__` 매직 메소드가 `"__main__"`과 일치 여부를 확인한다.

```python
# 시작점
if __name__ == "__main__":
    ...
```

파이썬에서는 이를 시작점이라고 부르며, 모듈로 가져온 스크립트에서는 시작점이 실행되지 않는다. 주의해야 할 점은 비교 연산자 `==`는 논리 연산자인 `is`로 절대 대체할 수 없다.

# 파이썬: 파일 관리
여러 데이터를 파이썬 프로세스에 전달하거나, 혹은 데이터를 외부로 출력하기 위해 파일을 불러와 read 혹은 write 하여 처리할 수 있다. 본 장은 파이썬에서 파일을 관리하는 방법에 대하여 소개한다.

## 파일 열기 및 닫기
파이썬에서 파일을 열고 닫으려면 `open()` 함수와 `close()` 메소드를 사용한다.

```python
# 파일 열기: 읽기 전용
file = open("filename.txt", "r")

# 파일 닫기
file.close()
```

`open()` 함수에는 열고자 하는 파일경로 외에도 파일을 열기 위한 옵션을 설정할 수 있다.

| 전달인자 | 설명                   |
|:----:|----------------------|
| `r`  | 읽기 모드 (기본값)          |
| `w`  | 덮어쓰기 모드 (새로 쓰기)      |
| `a`  | 덧붙이기 모드 (내용 추가)      |
| `rb` | 바이너리 읽기 모드 (비텍스트 파일) |
| `wb` | 바이너리 쓰기 모드 (비텍스트 파일) |

`close()` 메소드로 더 이상 사용하지 않는 파일을 닫아주는 습관은 리소스 낭비를 줄여주므로 매우 중요하다. 예외가 발생하여도 정상적으로 파일을 닫을 수 있도록 `try`/`except` 예외 처리문 혹은 `with` 문을 함께 사용할 것을 권장한다.

### `with` 문
`with` 문은 해당 코드 블록 안에서만 사용할 수 있는 임시 변수를 생성한다. `with` 문으로 파일을 열었을 경우, 코드 블록이 종료되면 파일은 자동적으로 닫힌다.

```python
with open("filename.txt") as file:
    ...
```

이를 가능케 하는 [문맥 관리자](https://docs.python.org/3/library/stdtypes.html#typecontextmanager)(context manager)는 `with` 문을 지원하는 인터페이스 역할을 담당한다. 함수나 메소드에 문맥 관리자를 설정하는 방법은 두 가지가 있다:

1. `__enter__()`와 `__exit__()` 메소드
    
    ```python
    # 컨텍스트 관리자 1
    class CLASS:
        def __init__(self):
            pass
        
        # "with" 문 시작 시 실행
        def __enter__(self):
            self.var = expression
            return self.var
        
        # "with" 문 종료 시 실행
        def __exit__(self):
            ...
    ```

2. `contextlib` 모듈
    
    ```python
    from contextlib import contextmanager
    
    # 컨텍스트 관리자 2 
    class CLASS:
        def __init__(self):
            ...
        
        # "with" 문 지원 함수 혹은 메소드
        @contextmanager
        def method(self):
            self.var = expression
            yield self.var
            ...
    ```

문맥 관리자는 `return` 혹은 `yield` 문으로 반환/양도된 데이터를 `with` 문에서 처리할 수 있는 리소스로 제공한다. 해당 리소스는 `as` 키워드로 별도의 명칭을 지정하지 않는 이상 암묵적으로 처리 대상으로 지목된다.

```python
# 객체화
instance = CLASS()

with instance.method():
    # "self.var"를 위주로 처리
    ...
```

대표적인 컨텍스트 관리자의 실제 적용 예시로는 *[텐서플로우: 텐서보드](/docs/ko.TensorFlow#텐서보드)*에서 확인할 수 있다.

### 절대경로 및 상대경로
컴퓨터에는 두 종류의 경로 탐색법이 존재한다.

* 절대경로(absolute path)
    : *시스템의 루트경로(예. 윈도우의 `C:\` 혹은 리눅스의 `/`)로부터 시작하여 탐색하는 방식이다.*

* 상대경로(relative path)
    : *실행되고 있는 프로세스의 현 위치를 기준으로 경로를 탐색하는 방식이다.*

경로를 지정할 때에는 백슬래시 두 개(`\\`)로 폴더 및 파일을 구분한다. 하나만 사용하면 [탈출 문자](#탈출-문자)가 되어 원치 않은 텍스트 연산이 수행될 수 있다.

```python
file = open("path\\filename.txt")
```

## 파일 읽기
파이썬에서 텍스트 기반 파일을 열었으면 `read()` 메소드로 파일 내용을 읽을 수 있다. 메소드의 인자로 정수를 건네면 파일로부터 지정한 바이트만큼 읽는다. 하나의 파일에서 `read()` 메소드는 여러 번 사용할 수 있으며, 마지막으로 읽은 부분에서부터 이어서 읽는다. 메소드에 인자를 전달하지 않으면 내용의 나머지 전부를 읽는다.

```python
with open("path\\filename.txt") as file:
    print(file.read(16))    # 내용 시작 부분에서부터 16 바이트를 읽는다.
    print(file.read(4))     # 16 바이트 이후로부터 4 바이트를 읽는다.
    print(file.read())      # 4 바이트 이후로부터 나머지 바이트를 읽는다.
    print(file.read())      # 더 이상 읽을 내용이 없어 아무런 텍스트를 반환하지 않는다.
```

`readlines()` 메소드는 각 줄의 내용을 하나의 요소로 갖는 [리스트 객체](#리스트-객체)를 반환한다. 메소드의 인자로 정수를 건네면 파일로부터 지정한 바이트만큼 읽는다. 그러나 한 줄만 읽는 `readline()` 메소드와 혼돈하지 않도록 주의한다.

```
<filename.txt>
첫 번째 줄은 여기에.
두 번째 줄은 저기에.
마지막 줄은 어딘가에.
```

```python
with open("path\\filename.txt") as file:
    print(file.readlines())
    print(file.readline())
```
```
['첫 번째 줄은 여기에.\n','두 번째 줄은 저기에.\n','마지막 줄은 어딘가에.']
첫 번째 줄은 여기에.
```

### 반복문을 이용한 내용 출력
각 줄의 텍스트 기반 파일 내용은 `for` 반복문을 다음과 같은 방법으로 사용해 출력할 수 있다.

```python
for variable in file:
    print(file)
```

## 파일 쓰기
파이썬에서 텍스트 기반 파일을 열었으면 `write()` 메소드로 파일 내용을 작성할 수 있다. 파일을 작성하는 모드에는 두 가지가 존재하며, 아래의 가상의 텍스트 파일을 예시로 든다:

```
<filename.txt>
첫 번째 줄은 여기에.
두 번째 줄은 저기에.
마지막 줄은 어딘가에.
```

1. 덮어쓰기(overwrite) 모드 `w`는 기존의 모든 내용들을 삭제하여 처음부터 새로 작성한다.
    
    ```python
    with open("path\\filename.txt", "w") as file:
        file.write("텍스트 덮어쓰기!")
    ```
    ```
    <filename.txt>
    텍스트 덮어쓰기!
    ```

2. 덧붙여 쓰기(append) 모드 `a`는 기존의 모든 내용들을 유지한 채 맨 끝 단락에서부터 작성한다.

    ```python
    with open("path\\filename.txt", "a") as file:
        file.write("텍스트 덧붙여 쓰기!")
    ```
    ```
    <filename.txt>
    첫 번째 줄은 여기에.
    두 번째 줄은 저기에.
    마지막 줄은 어딘가에.텍스트 덧붙여 쓰기!
    ```

성공적으로 파일 작성을 완료하였으면 `write()` 메소드는 작성된 내용의 바이트 개수를 반환한다.

### 파일 생성
파이썬 파일의 `write()` 메소드는 기존 파일을 작성할 뿐만 아니라, 해당하는 이름의 파일을 찾을 수가 없다면 새로운 파일을 생성한다.

```python
with open("path\\NEW_filename.txt", "w") as file:
    file.write("새 파일 생성!")
```
```
<NEW_filename.txt>
새 파일 생성!
```

# 파이썬: 패키지
파이썬에는 특정 목적을 수행하기 위한 여러 가지의 패키지들이 존재한다. 본 장에서는 패키지를 다운로드하여 사용하는 방법을 설명한다.

## 모듈
파이썬 모듈(module)은 부가적인 기능 및 데이터를 제공하는 파이썬 소스 코드이며, 이들은 일반 스크립트와 마찬가지로 `.py` 확장자를 갖는다. 개발자는 함수나 클래스를 담고 있는 파이썬 스크립트를 작성하고, 이를 `import` 키워드를 통해 다른 스크립트로 자료형, 연산, 객체 및 클래스를 제공할 수 있다. 아래는 `module.py`이란 파이썬 모듈을 불러오는 예시이다.

```python
import module
module.function()
```

위의 방법은 `function()`을 사용하기 위해 매번 `module`을 언급해야 하는 불편함이 있다. 이를 해소하기 위해 `from` 키워드를 통해 암묵적으로 모듈을 언급하는 방법을 택할 수 있다.

```python
from module import function1, function2
from module import function as name
```

그러나 모듈이 암묵적으로 언급되었기 때문에 서로 다른 모듈이 동일한 식별자를 가지므로써 생길 수 있는 충돌 문제가 잠재적으로 내포되어 있다. 함수 이름의 고유성이 확실히 보장되지 않는 이상, 모듈을 안전하게 불러오기 위해 전자의 방법을 사용할 것을 권장한다.

## 패키지
패키지(package)는 관련 파이썬 모듈들을 포괄하는 하나의 폴더이다. 모든 파이썬 패키지 폴더 내에는 `__init__.py`라는 특수한 파이썬 파일이 존재하며, 안에는 아무런 내용이 없거나 해당 패키지의 파일경로가 담겨있기도 한다.

```python
import package.module
from package.module import function
```

## PyPI
[PyPI](https://pypi.org/)(Python Package Index; 파이썬 패키지 목록)은 온라인 패키지 저장소이다. 모듈 및 패키지를 설치하기 위해서는 pip라는 소프트웨어가 반드시 필요하다.

### pip
pip 소프트웨어는 파이썬 패키지 관리 시스템이다. 패키지 관리 소프트웨어는 기본적으로 파이썬 3 인터프리터와 함께 설치되지만, 온라인에서 개별적으로 설치할 수도 있다. 패키지의 설치 및 관리는 명령 프롬프트나 파워셸과 같은 터미널 유형 콘솔창에서 진행된다. 

| 이름        | 설명               | 명령어                 |
| ----------- | ------------------ | ---------------------- |
| `install`   | 패키지 설치        | `pip install 패키지`   |
| `uninstall` | 패키지 제거        | `pip uninstall 패키지` |
| `list`      | 설치된 패키지 목록 | `pip list`             |

윈도우 OS에서 파이썬 pip를 사용할 경우, 단독적인 `pip`가 아닌 `python -m pip` 명령어를 사용하는 것을 권장한다(macOS 및 리눅스 제외).

```
python -m pip
```

특히 원도우 10 OS를 사용하는 경우 `python`을 입력하는 것만으로 마이크로소프트 스토어로 이동하게 되는데, 해결 방법은 두 가지가 있다.

1. `python`을 `py`로 대체 (Python Launcher 프로그램 사용)
2. 컴퓨터에서 `설정` → `앱` → `앱 및 기능` → `앱 실행 별칭 관리`에서 `python.exe` 및 `python3.exe`을 해제 (본질적 문제 해결)

위의 명령어는 컴퓨터 환경설정에서 지정된 파이썬 인터프리터의 pip를 접속한다는 것을 의미한다. 이를 통해 인터프리터 간의 패키지 관리에 혼돈을 줄일 수 있다. 만일 32비트 파이썬 3.8 인터프리터가 설치되었을 경우, 다음 명령어로 접근한다.  

```
py -3.8-32 -m pip
```

# 파이썬: 가상환경
파이썬에서 pip로 설치한 패키지들은 전부 인터프리터 경로에 설치된다. 이는 여러 파이썬 프로젝트를 진행할 시 치명적인 문제점이 될 수 있는데, 바로 인터프리터에는 하나의 패키지가 여러 개 존재할 수 없다는 것이다. 결국 두 프로젝트가 서로 다른 버전의 패키지를 요구하면 프로젝트를 작업할 때마다 모듈을 새로 설치하는 번거로움이 발생한다.

이러한 문제를 해결하기 위한 게 바로 가상환경(virtual environment)이다. 해당 프로젝트만을 위한 인터프리터를 복제하여 할당하면, 두 프로젝트 간의 패키지 충돌이 일어나지 않으며 패키지 관리도 훨씬 용이해진다.

## `venv` 패키지
파이썬 3에는 기본적으로 `venv`라는 가상환경 패키지가 포함되어 있다. 본 패키지는 간단한 가상환경을 지원해주며, 시스템 인터프리터와 분리되었으나 동일한 버전의 개별 인터프리터가 할당된다. 해당 인터프리터의 pip로 설치된 패키지는 가상환경에 설치된다.

### 가상환경 생성
원하는 파이썬 프로젝트에 `.venv` 이름의 가상환경을 생성하기 위해 아래의 명령어를 입력한다.

```
python -m venv D:\Workspace\Python\project\.venv
```

### 가상환경 실행
여기서 가상환경 "실행"이란 가상환경을 터미널을 통해 접속한다는 것을 의미한다. 파이썬 프로그램 실행에는 가상환경 실행을 요하지 않으나, 패키지를 설치하기 위해서는 가상환경 실행이 필요하다.

* 윈도우 OS:

    ```
D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* 유닉스 (예. macOS 및 리눅스):

    ```
source ~/Workspace/Python/project/.venv/bin/activate
    ```

### 가상환경 종료
터미널로부터 가상환경을 종료하기 위해 아래의 명령어를 입력한다.

```
deactivate
```

이는 `D:\Workspace\Python\.venv\Scripts\deactivate.bat` 명령어를 입력하는 것과 동일하다. 이러한 이유로, 가상환경 경로를 옮길 시 `deactivate` 명령어를 인식하지 못하여 직접 경로를 찾아서 `deactivate.bat` 파일을 실행해야 한다.
