---
name: 파이썬3
lang: ko
layout: docs
author: GKO95
category: Programming
title: "프로그래밍 | 파이썬3"
logo: "/assets/images/logo/logo-python.png"
order: 0x00
---
# **파이썬: 소개**
파이썬은 웹 프로그래밍, 컴퓨터 과학, 인공지능을 포함한 수많은 영역에서 응용 가능한 고급 프로그래밍 언어이다. 파이썬은 위에서부터 아래로 순차적으로 실행되며 코드 문(文) 끝에는 세미콜론(`;`)이 필요하지 않다.

## 인터프리터
C/C++와 같은 프로그래밍 언어는 (영문) 소스 코드를 컴퓨터가 이해하고 실행할 수 있는 (이진코드) 컴퓨터 언어로 번역하는 컴파일러가 사용된다. 그러나 인터프리터는 컴퓨터 언어로의 번역 없이 소스 코드에서 직접 프로그램을 실행한다.

파이썬은 인터프리터로 동작하는 고급 언어이다. 비록 코드 작성은 컴파일러보다 쉽지만, 프로그램 실행 시간은 비교적 느리다.

### C파이썬
가장 첫 파이썬 인터프리터는 C 프로그래밍 언어를 기반하여 개발되었다. C 기반의 인터프리터를 C파이썬(CPython)이라 부르며 가장 널리 사용되는 인터프리터이다. 다른 언어로 구현된 것으로는 Jython(자바로 구현된 인터프리터), IronPython(.NET으로 구현된 인터프리터), 그리고 PyPy(순수 파이썬으로 구현된 인터프리터) 등이 있다.

파이썬은 인터프리터 언어로 소개되었으나, 실제로는 인터프리터와 컴파일러 둘 다 사용한다. C파이썬은 우선 파이썬 코드를 바이트코드(bytecode)로 컴파일한 다음 C파이썬 인터프리터에 의해 실행된다. 이로 인해, 파이썬을 처음으로 실행하면 컴파일 작업이 필요해 시간이 더 소요된다.

# **파이썬: 기초**
일반적으로 프로그래밍 언어에는 코딩에 있어 준수하고 인식되어야 하는 프로그래밍의 기반이 되는 중요한 데이터나 구문이 존재한다. 실질적이 프로그래밍에 있어, 본 장에서는 파이썬 프로그램 코딩에 기초적인 정보를 제공한다.

## 주석
프로그래밍에 있어 주석은 실행되지 않으며, 흔히 코드와 관련된 정보를 입력하는데 사용되기도 한다. 파이썬에는 두 가지의 주석이 존재한다: *한줄 주석*과 *블록 주석*이 있다.

* **한줄 주석**
  : 코드 한 줄을 차지하는 주석이며, 해시 기호(`#`)로 표시된다.
* **블록 주석** (일명. **독스트링**)
  : 코드 여러 줄을 차지하는 주석이며, 세 쌍의 작은 따옴표(`''' '''`) 혹은 큰 따옴표 (`""" """`)로 표시된다. 독스크링(docstrings)은 또한 여러 줄의 문장을 쓰는데 사용되기도 하며, 프로그램 실행 도중에도 볼 수 있다.

```python
"""
블록 주석:
코드 여러 줄을 차지하는 주석이며, 프로그램 실행 중에서도 볼 수 있다.
"""
# 한줄 주석: 코드 한 줄을 차지하는 주석
```

## 입력 & 출력
파이썬은 텍스트 기반의 터미널을 위한 입력 및 출력 함수를 가진다.

| 입력/출력    | 구문                      | 설명                                                         |
| --------- | ------------------------- | ------------------------------------------------------------ |
| `input()` | `input("입력:")`          | 터미널에서 입력을 요구할 시, 입력 함수 `input()` 내의 텍스트 데이터가 나타나며 입력 데이터는 항상 문자열 자료형이다. |
| `print()` | `print("출력:", 변수)` | 출력 함수 `input()`가 실행될 시, 자료형과 관계없이 함수 내의 데이터가 터미널에 나타난다. 여기서 `변수`는 함께 표시할 문자열 데이터이다. |

```python
변수 = input("입력: ")
print("출력:", 변수)
# 동일: print("출력:", input("입력: "))
```

```
입력: Hello World!
출력: Hello World!
```

하나의 `print()` 함수에서 두 가지 이상의 자료형을 한 번에 출력하는 데 두 가지의 방법이 존재하며, 이들의 출력 방식은 약간 다르다.

1. 쉼표(`,`)를 사용하여 연속적으로 데이터를 나열할 수 있으나, 쉼표에는 항상 공백이 놓여진다.

   ```python
   A = 10.0
   B = "파이썬3"
   
   # 문자열과 정수의 혼합된 데이터를 쉼표(",")를 사용해 나열한다.
   print("A는", A , ", \n그리고 B는", B, "이다.")
   ```

   ```
   A는 10.0 ,
   그리고 B는 파이썬3 이다.
   ```

2. 더하기 기호(`+`)를 문자열 연결에 사용하면 사이에 공백이 생기지 않는다. 그러나 문자열 자료형이 아닌 데이터는 우선 문자열로 변환해야 한다.

   ```python
   A = 10.0
   B = "파이썬3"
   
   # 문자열과 정수의 혼합된 데이터를 문자열 변환 이후 더하기 기호("+")를 사용해 나열한다.
   print("A는", str(A) + ", \n그리고 B 는", B + "이다.")
   ```

   ```
   A는 10.0,
   그리고 B는 파이썬3이다.
   ```

## 식별자
식별자는 프로그래밍에서 데이터(일명 구성체; construct)를 구별하기 위해 사용되는 명칭이다. 다시 말해, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. 파이썬에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다:

* 오직 영문, 숫자, 밑줄(`_`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 허용되지 않는다.

## 변수
변수는 할당 연산자(`=`)를 사용하여 데이터를 할당할 수 있는 저장공간이다. 변수에는 선언, 정의, 초기화란 세 가지 공통 단계가 있다.

* **선언**
  : 선언이란 변수, 함수, 객체와 같은 구성체(construct)에 이름(일명 식별자)을 붙여 존재를 알리는 단계이다. 다른 프로그래밍 언어에서 선언은 일반적으로 구성체에 자료형을 지정하지만, 파이썬은 예외적으로 구성체에 자료형 지정이 없다.

* **정의**
  : 정의란 구성체가 가지는 데이터 값(혹은 실행 가능한 기능)을 담는 코드 블록을 의미한다. 일부 경우, 변수와 함수의 정의는 각각 *할당(assignment)*과 *구현(implementation)*이라고도 부른다.

  ```python
  # 변수의 정의 (+ 선언)
  변수 = 1
  
  # 함수의 정의 (+ 선언)
  def 함수():
      실행문
      return 0
  ```
  
* **초기화**
  : 초기화는 구성체에 초기값을 할당하는 것이며, 간단히 *최초* 정의라고 간주할 수 있다. 구성체의 가장 첫 정의는 일반적으로 선언 단계와 함께 이루어진다. 이러한 이유로 초기화는 *선어 + 정의*라고 흔히 여겨지지만 이는 사실이 아니다.

변수의 자료형은 고정되어 있지 않다. 그러므로 프로그래머는 하나의 변수로 원하는 어떠한 값으로 언제든지 변경할 수 있다.

### 지역 변수 & 전역 변수
**지역 변수**는 함수나 클래스의 코드 블록 내부에서 선언된 변수이다. 단, 이는 조건문이나 반복문, `with` 문 등 일부 경우에는 적용되지 않는다. 지역 변수에 저장된 데이터는 코드 블록 밖에서는 소멸되므로 외부에서 사용할 수 없다. 지역 변수는 외부에서 선언된 변수의 이름을 가질 수 있다.

**전역 변수**는 스크립트 내에서 어떠한 코드 블록에도 속하지 않은 외부에 선언된 변수이다. `global` 키워드를 이용해 코드 블록 내부에서 전역 변수를 사용할 수 있다. 단, 변수의 충돌로 인한 예상치 못한 결과와 오류를 방지하기 위해 가급적 전역 변수는 피해야 한다.

### 상수 변수
상수 변수는 초기화 후 변경할 수 없는 특별한 유형의 변수이다. 그러나 파이썬은 선언의 개념이 없기 때문에 실질적으로 상수 변수란 존재하지 않는다. C/C++와 같은 언어는 이러한 기능을 가지고 있지만, 파이썬 개발자는 상수 변수로 사용될 변수의 할당값을 수정하지 않도록 주의할 수 밖에 없다.

파이썬에서 상수 변수임을 알리는데 통상적으로 변수의 이름을 전부 대문자로 표기한다.

### `del` 키워드
`del` 키워드는 변수를 삭제 할 때 사용한다. 삭제된 변수 이름으로 나중에 재선언 할 수 있다.

```python
# 변수 "x"의 선언
x = "파이썬3"
print(x)

# 변수 "x"의 삭제
del x
print(x)
```

```
파이썬3
NameError: name 'x' is not defined
```

## 자료형
변수가 파이썬에 저장할 수 있는 자료형은 숫자형, 문자열, 논리형 등 세 가지 유형으로 분류할 수 있다. 파이썬은 데이터의 자료형에 따라 수행할 수 있는 기능이 있으며, 이는 연산이라고 부른다. 연산이 가능한 것으로는 (1) 연산자, (2) 함수, 그리고 (3) 메소드가 있다.

비록 함수와 메소드는 후반부에 소개될 예정이지만, 이 세 가지 사이의 주요 차이점을 아는 것은 프로그래밍 언어의 개념을 전반적으로 이해하는 데 있어서 혼동을 예방할 수 있다.

* **연산자**
  : 사칙 연산자와 같이 피연산자의 값을 조작하는 데 사용되는 코드이다. 간단히 피연산자의 앞, 뒤 혹은 두 피연산자 사이에 배치하여 사용한다.
* **함수**
  : 실행하고자 하는 기능을 이름으로 호출하여 재사용 가능한 코드 조각이다. 함수는 `function()`과 같이 이름 접무사에 괄호(`()`)를 가지므로써 연산자와 구별할 수 있다.
* **메소드**
  : 객체에서만 사용할 수 있는 함수이다. 메소드는 `object.method()`와 같이 이름 접미사에 괄호(`()`)가 있지만 항상 객체에 종속되어 있다.

### 숫자 자료형
숫자 자료형은 그래프, 연산처리, 인공지능의 신경망 모델링 등 과학적인 목적으로 파이썬에서 널리 사용된다. 다음은 숫자 자료형의 목록이다:

| 키워드    | 자료형                | 설명                                                         |
| --------- | --------------------- | ------------------------------------------------------------ |
| `int`     | 정수               | 32 비트 정밀 정수.<br />크기: 무제한 (최대 400 바이트) |
| `float`   | 부동소수점수 | 소수점을 포함한 실수.<br />크기: 무제한 (최대 400 바이트) |
| `complex` | 복소수        | 부동 소수와 허수의 합.<br />크기: 무제한 (최대 400 바이트) |

숫자 자료형의 바이트 크기는 다른 언어에서 보다 크다. 이는 숫자 자료형이 가질 수 있는 최대 바이트 크기를 말하며, 값에 따라 훨씬 더 작을 수 있다. 이러한 바이트 크기의 유연성은 파이썬에 자료형 선언이 불필요하게 만든다.

`float` 자료형은 가장 흔히 사용되는 숫자 자료형이며 `complex` 외에 분수를 표현할 수 있는 가장 작은 자료형이다. `float` 자료형은 다음과 같은 특징을 가진다:


* 소수점 끝에 있는 추가 숫자 0은 무시된다.
* 다음 계산은 자동적으로 `float` 자료형을 반환한다.
  * `float`를 하나라도 포함한 연산
  * `int`의 나눗셈 연산

```python
print(9.8765000)
print(4 ** 2.0)
print(4 + 1.0)
```

```
9.8765
16.0
5.0
```

숫자 자료형의 산술 연산은 다음과 같다:

| 이름                           | 연산자 | 설명                                                         |
| ------------------------------ | :----: | ------------------------------------------------------------ |
| 덧셈                       |  `+`   | -                                                            |
| 뺄셈                    |  `-`   | 파이썬은 뺄셈이 없다. 그 대신 기호는 음수를 의미하며, 수학적으로도 음수를 더하는 것은 뺄셈과 동일하다. |
| 곱셈                 |  `*`   | -                                                            |
| 제곱                    |  `**`  | -                                                            |
| 나눗셈                       |  `/`   | 나눗셈을 할 시, 값은 자동적으로 `float` 자료형으로 변환된다. |
| 몫 |  `//`  | 나눗셈에서 나머지를 제외한 몫만 도출한다.    |
| 나머지                      |  `%`   | 나눗셈에서 몫을 제외한 나머지만 도출한다.                         |

산술 연산을 쉽게 읽을 수 있도록 숫자 사이에 공백을 넣어도 된다. 이 공백은 숫자나 수학 연산에 아무런 영향을 주지 않는다.

숫자 자료형에 국한된 파이썬 내장 함수 및 메소드를 사용하여 추가적인 연산을 수행할 수 있다. 아래의 대부분 연산은 *리스트(list)*라는 이터러블(iterable) 객체가 필요하며, 해당 객체는 이후에 소개될 예정이다.

| 함수      | 예시                | 설명                                                         |
| --------- | ------------------- | ------------------------------------------------------------ |
| `abs()`   | `abs(-21)`          | 숫자의 절댓값을 구한다.                       |
| `round()` | `round(164.2597,2)` | 기본적으로 한 자릿수로 숫자를 반올림하거나 뒤의 소수 자릿수로 반올림한다. |
| `max()`   | `max([0,1,2,3,4])`  | 리스트 객체 내에서 가장 큰 숫자를 반환한다.                              |
| `sum()`   | `sum([0,1,2,3,4])`  | 리스트 객체 내에에서 숫자를 모두 더한다.                             |

```python
# round() 함수의 예시
print(round(164.259763145))
print(round(164.259763145,2))
```

```
164
164.26
```

할당 연산자는 산술 기호와 할당 기호(`=`)의 조합으로, 숫자 계산 코드를 보다 간결하게 작성하도록 한다.

| 연산자 | 예시     | 동일                                                |
| :----: | -------- | --------------------------------------------------------- |
|  `=`   | `x = y`  | `x = y`; `x` 변수에 `y`변수의 값을 할당한다. |
|  `+=`  | `x += y` | `x = x + y`                                               |
|  `-=`  | `x -= y` | `x = x - y`                                               |
|  `*=`  | `x *= y` | `x = x * y`                                               |
|  `/=`  | `x /= y` | `x = x / y`                                               |
|  `%=`  | `x %= y` | `x = x % y`                                               |

파이썬 프로그래밍 언어에는 증감 연산자가 존재하지 않는다.

### 논리 자료형
논리 자료형은 문장이 참인지 거짓인지 판별하는 논리적 조건이 요구되는 코드에 유용하게 사용된다:

| 값             | 이름            | 설명                          |
| -------------- | --------------- | ----------------------------- |
| `True` 혹은 `1`  | 논리적 참  | 논리가 참일 때 반환된다.  |
| `False` 혹은 `0` | 논리적 거짓 | 논리가 거짓일 때 반환된다. |

숫자 0이 아닌 아무런 정수는 `True` 논리값을 나타낸다. 즉, 정수 `2`와 `3`도 `True` 논리값이며, `False`은 오로지 정수 `0`으로만 표현된다.

비교 연산자는 둘 이상의 값의 관계를 비교하는데 사용되며, 조건이 참인지 거짓인지 여부에 따라 해당하는 논리 자료형을 반환한다.

| 연산자 | 설명 |
|------|----|
| `<`  | 미만 |
| `<=` | 이하 |
| `>`  | 초과 |
| `>=` | 이상 |
| `==` | 동일 |
| `!=` | 상이 |

한편, 논리 자료형은 논리합, 논리곱, 및 보수 연산아 가능하다

| 연산자 | 이름           | 설명                                                    |
| :----: | -------------- | ------------------------------------------------------- |
|  `is`  | 동등    | 두 데이터 사이의 논리 판단자이며, `==`와 유사하다.  |
| `and`  | 논리곱 | 모든 인수가 `True`이면 `True`이고 그렇지 않으면 `False`이다.       |
|  `or`  | 논리합  | 하나 이상의 인수가 `True`이면 `True`이고 그렇지 않으면 `False`이다.    |
| `not`  | 보수     | `True`를 `False`로 변경 혹은 `False`를 `True`로 변경한다.     |

### 문자열 자료형
문자열 자료형은 한 쌍의 작은 따옴표 `''` 또는 큰 따옴표 `""`로 구별되는 텍스트 기반 데이터이다. 문자열 자료형의 변수 또는 데이터 값을 일반적으로 *문자열 객체*라고 부른다.

문자열 객체 내부에 따옴표를 배치하면 문자열 데이터이 도중에 끊길 수 있으며, 따옴표 앞에 `\`를 배치하여 문자열을 유지할 수 있다.

```python
# 문자열 작성의 부적절한 예시와 적절한 예시의 비교.
print('Where's my "Cat in the Hat" book?')
print('Where\'s my "Cat in the Hat" book?')
```

```
Where
Where's my "Cat in the Hat" book?
```

세 쌍의 (작은 혹은 큰) 따옴표는 다중 문자열 객체를 생성한다. 이는 단순히 키보드의 Enter/Return 버튼을 눌러 줄바꿈이 가능하도록 한다. 이를 사용하지 않을 시, 줄바꿈은 `\n`을 직접 삽입해야 한다.

```python
# 다중 문자열 객체로 여러 줄의 텍스트 작성 및 출력.
print("안녕하세요.\n처음 뵙겠습니다!")
print("""안녕하세요.
처음 뵙겠습니다!""")
```

```
안녕하세요.
처음 뵙겠습니다!    
안녕하세요.
처음 뵙겠습니다!
```

파이썬의 문자열 객체는 숫자 자료형과 마찬가지로 덧셈과 곱셈이 가능하다.

| 연산자 | 이름           | 설명                                                         |
|:--------:|----------------|---------------------------------------------------------------------|
| `+`      | 연결  | 서로 다른 두 문자열을 하나의 문자열에 병합한다 (따옴표 유형은 중요하지 않다).  |
| `*`      | 곱셈 | 문자열을 정수 값만큼 곱한다 (`float` 사용 불가). |

```python
print("파이" + '썬3')
print(4 * "2")
```

```
파이썬3
2222
```

문자열은 변수와 함수가 하나의 데이터로 통합된 독립적 존재인 "객체"이다. 그러므로 이전 두 자료형에는 소개되지 않은 고유의 연산을 가진다:

| 메소드         | 예시                  | 설명                                                                                                                                                                                                               |
|----------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `format()`     | `텍스트.format(데이터)`       | 문자열 또는 비문자열 `데이터`를 지정된 `{}` 공간에 위치별 혹은 이름별로 할당한다.     |    
| `join()`       | `텍스트.join(문자열_리스트)`      | 문자열로 이루어진 리스트 객체인 `문자열_리스트` 내의 문자열들 사이에 `텍스트` 문자열을 삽입하여 하나의 문자열로 결합한다.      |
| `split()`      | `텍스트.split()`      | 괄호 안에 문자열이 없는 경우, 공백에 따라 `텍스트` 문자열을 구분하여 리스트 객체로 변환한다.<br/><br/>*[선택사항: 괄호 안에 `문자열1`이 존재하면 `텍스트`는 `문자열1`을 기준으로 나뉘어진다.]* |
| `replace()`    | `텍스트.replace(문자열1,문자열2)` | `텍스트` 문자열 내에서 `문자열1`을 `문자열2`로 바꾼다.       |
| `startswith()` | `텍스트.startswith()`       | `텍스트` 문자열 시작 부분의 동등성을 확인한다. |
| `endswith()`   | `텍스트.endswith()`         | `텍스트` 문자열 끝 부분의 동등성을 확인한다. |
| `upper()`      | `텍스트.upper()`            | `텍스트` 문자열의 모든 영문을 대문자로 변환한다. |
| `lower()`      | `텍스트.lower()`            | `텍스트` 문자열의 모든 영문을 소문자로 변환한다. |


```python
# 문자열 형식: [1] 위치별 및 [2] 이름별 할당.
print("{2} {0} {1}".format(데이터1, 데이터3, 데이터2))
print("{x} {y} {z}".format(x = 데이터1, y = 데이터3, z = 데이터2))

# 문자열 연결 및 분리
print(" ! ".join([문자열1, 문자열2, 문자열3]))
print("문자열1 ! 문자열2 ! 문자열3".split(" ! "))

# 문자열 확인
print("This is a sentence.".startswith("this"))
print("This is a sentence.".endswith("sentence."))

# ALPHABET UPPER/LOWERCASE
print("This is a SENTENCE.".upper())
print("This is a SENTENCE.".lower())
```

```
데이터2 데이터1 데이터3
데이터1 데이터3 데이터2

문자열1 ! 문자열2 ! 문자열3
[문자열1, 문자열2, 문자열3]

False       # 대문자 "T"와 소문자 "t"는 다른 존재이므로 거짓이다.
True        # 맨 마지막에 온점을 포함하여 참이다.

THIS IS A SENTENCE.
this is a sentence.
```

### 자료형 변환
자료형은 다른 자료형으로 변환될 수 있다. 다음 세 가지의 변환은 파이썬 프로그램 개발에서 가장 흔히 사용되는 변환이다:

| 함수      | 이름              | 설명                                                         |
| --------- | ----------------- | ------------------------------------------------------------ |
| `int()`   | 정수 변환         | `float`: 분수는 제거되고 정수만 반환.<br />`string`: 숫자만 변환 및 반환 가능. |
| `float()` | 부동소수점수 변환 | `int`: 제약없음.<br />`string`: 숫자만 변환 및 반환 가능. |
| `str()`   | 문자열 변환       | `int`: 제약없음.<br />`float`: 제약없음.                     |

## 탈출 문자
탈출 문자 `\`는 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 문자열 자료형을 소개할 때 문자열의 조기 종료를 방지하기 위해 `\`를 사용하였다.

| 구문 | 설명           |
| ---- | -------------- |
| `\n` | 줄바꿈       |
| `\t` | 탭 |
| `\\` | 백슬래시      |
| `\b` | 백스페이스      |
| `\'` | 작은 따옴표    |
| `\"` | 큰 따옴표      |

문자열로부터 탈출하여 연산을 수행하는 것 이외에, 탈출 문자는 하나의 긴 문장을 연속의 다수 짧은 문장으로 작성하는 데에도 사용된다.

## `None` 키워드
자료형에 관계없이 아무런 값이 없는 데이터이다. 비록 논리 조건에서는 `None`을 `False`으로 사용할 수 있지만, 개념적으로는 `None`과 `False`는 완전히 다른 존재이다.

```python
# 조건부 확인: 논리 조건에서 None을 False로 간주할 수 있는가?
if not(None and True):
    print(None)
```

```
None                    # 이는 논리 조건에서 None을 False로 사용할 수 있음을 보여준다.
```

# **파이썬: 조건 및 루프**
조건문 및 반복문(혹은 루프문)은 일반적으로 사용되며 프로그래밍에 필수적인 코드 중 하나이다. 본 장에서는 파이썬 프로그래밍의 조건문과 반복문을 소개한다.

## 들여쓰기
들여쓰기는 특정 조건문이나 반복문 등에 해당되는 코드 블록의 경계를 표시하는 데 사용된다. 들여쓰기는 콜론(`:`)이 시작되는 이후부터 삽입된다.

들여쓰기의 여부에 따라 코드가 완전히 변경될 수 있으므로 주의해야 한다.

```python
# 두 번째 print() 함수에 들여쓰기 된 경우.
if False:
    print("본 문장은 거짓이다.") 
    print("조건문 종료.")
print("끝!") 

# 두 번째 print() 함수에 들여쓰기가 되지 않은 경우.
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
조건부 `if` 문은 조건이 참일 경우 코드를 실행한다. 조건이 `True`일 때 문장이 수행되지만 그렇지 않으면 무시된다.

```python
if 조건:
    실행문
```

### `else` 조건문
조건부 `else` 문은 단독으로 사용될 수 없으며 반드시 `if` 문 이후에 사용되어야 한다. 실행문에는 조건부가 `False`로 평가되었을 경우 호출되는 코드가 포함되어 있다.

```python
if 조건:
    실행문_참
else:
    실행문_거짓
```

`if` 문과 `else` 문을 다음과 같이 조건의 연속을 연쇄적으로 사용할 수 있다:

```python
if 조건1: 
    실행문
else:
    if 조건2:
        실행문
    else:
        실행문
```

### `elif` 조건문
조건부 `elif` 문은 `else`와 `if` 문의 조합으로 첫 번째 조건이 거짓일 경우, 첫 번째 조건과 다른 새로운 조건을 제시한다.

```python
if 조건1: 
    실행문
elif 조건2:
    실행문
else:
    실행문
```

하지만 우선 소개된 `else`-`if` 연쇄 조건문은 두 조건부가 함께 사용되는 점과 비교해, `elif` 조건문은 여전히 하나의 조건부에서 처리되므로, 이 둘은 구체적으로 서로 다른 조건문임을 명시해야 한다.

### 조건 연산자
조건문은 아래와 같이 조건 연산자를 사용하여 간략히 표현될 수 있다:

```python
반환값_참 if 조건 else 반환값_거짓
```

조건 연산자는 영어로 *ternary operator*로, 이는 세 가지 인수를 사용하는 것을 의미한다. 조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에는 유용하다.

## `while` 반복문
`while` 반복문은 조건이 유지되는 한 내부 코드를 반복적으로 실행한다. 조건이 `False`임이 판정되면 반복문을 종료한다.

```python
while 조건:
    실행문
```

`else` 조건문은 `while` 반복문 뒤에 따라올 수 있으며, 이는 반복문이 조건부에 의해 정상적으로 종료되었을 때만 실행된다.

```python
# 루프 종료: 반복 완료
while 변수 < 10:
    변수 += 1
    if 변수 == 100:
        break
    else:
        print("첫 번째 반복문...완료!")

# 루프 종료: 탈출문으로 강제 처리
while 변수 < 10:
    변수 += 1
    if 변수 == 5:
        break
    else:
        print("두 번째 반복문...완료!")
```

```
첫 번째 반복문...완료!
```

### `break` 문
`break` 문 (일명 탈출문)은 반복이 완료되기 전에 루프를 조기 종료하는데 사용된다. 루프 내부에서 탈출문을 마주치는 즉시 현재 루프에서 탈출하지만 그 바깥 루프로부터는 탈출하지 않는다.

```python 
while 단일반복_조건:
    실행문1
    실행문2
    break
    실행문3
```

```
실행문1
실행문2
```

### `continue` 문
`continue` 문은 반복문 내에서 나머지 실행문을 전부 건너뛰고 다시 조건부 판정부분으로 돌아가게 한다. 이는 반복문을 종료하는 `break` 문과 달리 반복문의 루프를 유지한다.

```python 
while 변수 < 5:
    실행문1
    실행문2
    continue
    실행문3
```

```
실행문1
실행문2
실행문1
실행문2
실행문1
실행문2
...
```


## `for` 반복문
`for` 반복문은 유효한 범위에 있는 한 내부 코드를 반복적으로 실행한다. 범위 내의 모든 값이 반복되면 반복문을 종료한다.

```python
for 변수 in 이터러블:
    실행문
```

여기서 지역 변수 `변수`는 `이터러블`에서 값을 얻고, 내부의 실행문을 더이상 불러올 값이 없을 때까지 하나씩 실행한다. 흔히 반복문에 사용되는 `이터러블` 데이터는 다음과 같다.

1. 범위 객체: 숫자를 순서대로 담고있는 객체이다 (*파이썬: 이터러블 객체 § 범위 객체* 참고)
2. 리스트 객체: 자료형과 순서에 상관없이 데이터를 담고있는 객체이다 (*파이썬: 이터러블 객체 § 리스트 객체* 참고).
3. 문자열 객체: 문자열을 구성하는 문자를 반환한다.

```python
for 변수 in range(3):
    print("Hello World" , 변수)
```

```
Hello World 0
Hello World 1
Hello World 2
```

`while` 반복문과 마찬가지로, 코드를 반복적으로 실행하는 `for` 문에서도 `break`와 `continue` 문을 사용할 수 있다.

`else` 조건문은 `for` 반복문 뒤에 따라올 수 있으며, 이는 반복문이 범위 내에서 더 이상 호출할 값이 없음에 의해 정상적으로 종료되었을 때만 실행된다.

```python
# 루프 종료: 반복 완료
for 변수 in range(10):
    if 변수 == 100:
        break
    else:
        print("첫 번째 반복문...완료!")

# 루프 종료: 탈출문으로 강제 처리
while 변수 in range(10):
    if 변수 == 5:
        break
    else:
        print("두 번째 반복문...완료!")
```

```
첫 번째 반복문...완료!
```

## 예외
예외는 잘못된 코딩이나 입력으로 인해 실행 불가능 코드 오류이며, 이를 마주할 시 프로그램을 즉시 중지한다. 스크립트 예외처리에 사용할 수 있는 일부 문들이 존재한다.

### `try`/`except` 문
`try`/`except` 쌍의 문은 예외를 처리하고 발생한 예외에 따라 특정 실행문을 호출하는 데 사용된다. 이 두 가지 이외에도 예외처리에 사용되는 추가 문들도 있다.

| 키워드    | 설명                                                         |
| --------- | ------------------------------------------------------------ |
| `try`     | 예외가 있는지 확인하는 코드 블록을 제공한다.               |
| `except`  | 특정 예외가 발생하였을 때 실행된다.         |
| `else`    | [선택사항: 오류(예외)가 감지되지 않았을 시 실행된다.] |
| `finally` | [선택사항: 오류 발생 여부를 떠나 반드시 실행되는 코드이다.] |

```python
try:
    실행문
except 예외유형1:
    실행문
except 예외유형2:
    실행문
except:            # 전조건 예외처리는 마지막에 위치한다.
    실행문
finally:
    실행문
```

`try`/`except` 문이 실행된 후에도 프로그램은 멈추지 않고 계속된다.

### `raise` 문
`raise` 문은 의도적으로 직접 예외를 발생시키는 데 사용된다. 해당 문으로 오류를 발생시키면 프로그램이 즉시 중단되어 더 이상의 실행이 이루어지지 않는다.

```python
# 명시적 예외 발생: 위의 'except' 문 내에서도 단독으로 사용할 수 있음.
raise

# 명시적으로 발생된 예외에 대한 자세한 설명을 제공한다.
raise 예외설명
```

### `assert` 문
`assert` 문은 표현식의 타당성(일명 진술)을 확인한다. 확인한 표현식이 유효하고 문제가 없으면 해당 진술은 `True`를 반환한다. 예외가 발생하였으면 해당 진술은 `False`를 반환한다.

```python
print(0)
assert 표현식_참
print(1)
assert 표현식_거짓, "예외유형"
print(2)
```

```
0
1
AssertionError: 예외유형
```

## `pass` 문
`pass` 문은 실행될 때 아무 작업도 수행하지 않는다. 실행문 코드가 아직 작성하지 않은 상태에서 임시 코드로 유용하게 사용된다.

# **파이썬: 이터러블 객체**
파이썬의 유용함은 단순함 이외에도 다른 프로그래밍 언어에서 볼 수 없는 강력하고 유연한 이터러블 객첵에서 비롯된다. 파이썬은 네 개의 약간 다른 특성의 이터러블 객체를 가진다.

## 이터러블 객첵
이터러블(iterable; 반복 가능한) 객체는 수집한 데이터를 저장하는데 사용되며, 반복자(iterator) 객체를 반환하는 `__iter__` 메소드를 보유하는 객체로 정의된다. 반복자 데이터의 다음 요소를 자동으로 호출하는 객체로, 이터러블 객체 내의 모든 데이터를 순차적으로 불러올 수 있도록 한다.

이터러블 객체의 특징 중 하나는 대괄호(`[]`)을 사용하여 저장된 데이터 불러오거나 수정이 가능하다. *파이썬: 기초 § 문자열 자료형*에 도입된 문자열 객체도 이터러블 객체이다.

```python
variable = "Hello World!" 
print(variable[1])
```

```
e
```

### 이터러블 슬라이싱
슬라이싱(slicing; 자르다)은 이터러블 객체와 같은 데이터 묶음을 처리하는 데 있어 다른 프로그래밍 언어보다 뛰어난 파이썬의 강점 중 하나이다. 이터러블 객체의 슬라이싱으로 원본에서 원하는 부분만을 추출할 수 있다.

| 구문    | 예시                            |
|:---------:|------------------------------------|
| `[ : : ]` | `이터러블[시작 : 끝 : 간격]` |

슬라이싱은 `시작`에서부터 `끝` 이전까지이며, `간격`만큼의 간격으로 데이터를 추출한다. 이터러블 슬라이싱을 위해 위의 세 인수를 전부 채울 필요는 없다.

```python
변수 = "Hello World!"
print(변수[2:8])    # >> 출력: "llo Wo"

# 시작 혹은 끝만 지정한 리시트 슬라이싱
print(변수[2: ])    # >> 출력: "llo World!"
print(변수[ :8])    # >> 출력: "Hello Wo"

# 간격을 통해 일부 데이터를 뛰어넘어 슬라이싱
print(변수[ : :2])    # >> 출력: "HloWrd"
print(변수[2:8:2])    # >> 출력: "oW"

# 역방향 슬라이싱
print(변수[8:2:-1])    # >> 출력: "roW ol"
```

## 범위 객체
범위(range) 이터러블 객체는 시작할 숫자(포함), 끝을 맺을 숫자(제외) 그리고 순서 간격을 지정하여 일련의 숫자들을 순서에 맞게 저장한다. 범위 객체는 `range()` 함수를 사용하여 생성된다.

| 함수        | 예시                          | 설명                                                          |
|-----------|-----------------------------|-------------------------------------------------------------|
| `range()` | `range(시작,끝,간격)` | 정수 `시작`에서부터 `끝` 이전까지 `간격`만큼의 간견으로 순서대로 숫자를 나열한 범위 객체를 생성한다. |

```python
범위 = range(3, 10, 2)

범위[0]        # >> 출력: 3
범위[1]        # >> 출력: 5
범위[2]        # >> 출력: 7
범위[3]        # >> 출력: 9
```

## 리스트 객체
리스트(list) 이터러블 객체는 데이터 유형과 관계없이 인덱스(index) 순서에 따라 데이터를 저장한다. 리스트의 데이터 할당은 대괄호(`[]`) 내에 항목을 순서대로 쉼표로 나누어 나열한다. 또한 대괄호는 인덱스 위치의 요소(element)를 호출하는 데에도 사용된다.

```python
리스트 = [데이터1, 데이터2, 데이터3, 데이터4, ... ]

print(리스트)            # >> 출력: [데이터1, 데이터2, 데이터3, 데이터4, ... ]
print(리스트[0])        # >> 출력: 데이터
```

개별 요소를 재할당하여 데이터를 변경할 수 있다. 리스트 범위를 벗어난 요소를 호출할 수 없으므로, 이러한 경우 오류가 발생한다.

```python
리스트 = [데이터1, 데이터2, 데이터3]

리스트[1] = 데이터4        # >> 결과: 변수 = [데이터1, 데이터4, 데이터3]
리스트[3] = 데이터5        # IndexError: list assignment index out of range
```

리스트 객체는 **리스트 컴프리헨션(list comprehension)**라는 프로그램적 규칙을 따르는 일련화 방법으로 생성될 수 있다. 이를 위해서 `for` 반복문과 선택사항인 `if` 조건문을 사용하여 구현할 수 있다.

| 구문          | 예시                                          |
|-----------------|--------------------------------------------------|
| `[ for in if ]` | `[요소 for 변수 in 이터러블 if 조건]` |

리스트 객체를 구성하는 `요소`는 `이터러블` 객체 내에서 `조건`에 부합한 항목을 넘겨받은 `변수`의 값을 할당받는다. `if` 조건문은 리스트 컴프리헨션에 있어 선택사항이다.

```python
리스트 = [변수**2 for 변수 in range(5)]
리스트 = [변수**2 for 변수 in range(5) if (변수**2) % 2 == 0]
```

```
[0, 1, 4, 9, 16]
[0, 4, 16]
```

### 리스트 연산
리스트는 고유의 연산을 통해 항목을 추가하거나 곱할 수가 있다. 아래의 연산들은 리스트 객체에만 제한되지 않으며, 차후에 소개될 다른 이터러블 객체에도 적용이 가능하다.

| 연산자 | 이름           | 설명                                                         |
| ------ | -------------- | ------------------------------------------------------------ |
| `+`    | 덧셈    | 서로 다른 두 리스트 객체를 하나의 리스트로 통합한다.          |
| `*`    | 곱셈    | 리스트 항목을 정수만큼 반복한다 (`float` 사용 불가). |
| `in`   | 포함       | 해당 항목이 리스트에 있는지 확인한다.                               |

```python
리스트 = [데이터1, 데이터2, 데이터3]

# + 연산자
print(리스트 + [데이터3, 데이터4])     # >> 출력: [데이터1, 데이터2, 데이터3, 데이터3, 데이터4]

# * 연산자
print(리스트 * 2)                       # >> 출력: [데이터1, 데이터2, 데이터3, 데이터1, 데이터2, 데이터3]

# in 연산자
print(데이터1 in 리스트)               # >> 출력: True
print(데이터2 not in 리스트)        # >> 출력: False
```

다음은 리스트 객체(광범위적으로 이터러블 객체)에 관한 특정 기능을 수행하는 함수들이다:

| 함수          | 예시                                | 설명                                                         |
| ------------- | ----------------------------------- | ------------------------------------------------------------ |
| `len()`       | `len(리스트)`                          | Find the length of the `리스트`내의 요소 개수 (혹은 리스트 길이)를 확인한다.      |
| `all()`       | `all([조건 for 변수 in 리스트])` | `리스트`의 모든 요소가 `조건`에 부합하면 `True`를 반환한다. |
| `any()`       | `any([조건 for 변수 in 리스트])` | `리스트`의 최소 한 요소가 `조건`에 부합하면 `True`를 반환한다. |
| `enumerate()` | `enumerate(리스트)`   | `리스트` 내의 데이터를 해당 인덱스 번호와 함께 나열한다. |
| `list()`      | `list(이터러블)`                    | 문자열이나 범위와 같은 `이터러블` 객체를 리스트 객체로 변환한다; 만일 `이터러블`이 없을 시 빈 리스트 객체를 생성한다. |

```python
리스트 = [10, 9, 8, 7, 6]

# "all()" 함수
if all( [변수 > 5 for 변수 in 리스트] ):
    print("숫자는 모두 5보다 크다.")           # >> 출력: 숫자는 모두 5보다 크다.

# "any()" 함수
if any( [ 변수 % 2 ==  0 for 변수 in 변수] ):
    print("최소 하나의 숫자는 짝수이다.")       # >> 출력: 최소 하나의 숫자는 짝수이다.
    
# "enumerate()" 함수
for 변수 in enumerate(리스트):
    print(변수)                                 # >> 출력: (0,10)
                                                # >>         (1,9)
                                                # >>         (2,8)
                                                # >>         (3,7)
                                                # >>         (4,6)
```
리스트는 (이터러블) 객체이므로 특정 기능을 수행하는 메소드 또한 가지고 있다:

| 메소드     | 예시                       | 설명                                                       |
| ---------- | -------------------------- | ---------------------------------------------------------- |
| `append()` | `리스트.append(데이터)`        | `데이터`를 `리스트`의 맨 끝에 추가한다.   |
| `insert()` | `리스트.insert(인덱스, 데이터)` | `데이터`를 `리스트`의 `인덱스` 위치에 추가한다. |
| `index()`  | `리스트.index(데이터)`         | `데이터`가 위치하는 가장 작은 인덱스 값을 반환한다.   |

## 튜플 객체
튜플(tuple) 이터러블 객체는 리스트와 마찬가지로 항목을 순서대로 저장하나, 초기화 후에는 값을 변경할 수 없다. 이러한 이터러블 객체의 속성을 불변(immutable)이라고 한다. 튜플을 초기화 할 때 소괄호(`()`)를 사용하거나 괄호 없이 사용할 수도 있다.

```python
튜플 = (데이터1, 데이터2, 데이터3)
print(튜플)            # >> 출력: (데이터1, 데이터2, 데이터3)
print(튜플[0])        # >> 출력: 데이터1

# ALTERNATIVE: tuple without parentheses
튜플 = 데이터1, 데이터2, 데이터3
print(튜플)            # >> 출력: (데이터1, 데이터2, 데이터3)
print(튜플[0])        # >> OUTPUT: 데이터1
```

튜플은 리스트 객체의 상수 버전이므로 내부 항목은 변경이 불가능하다. 이를 시도할 경우 오류가 발생한다.

```python
튜플 = (데이터1, 데이터2, 데이터3)
튜플[1] = 데이터4
```

```
TypeError: '튜플' object does not support item assignment
```

튜플의 연산은 *파이썬: 이터러블 객체 § 리스트 연산*에서 언급된 연산자, 함수, 그리고 메소드를 참고한다. 

### 튜플 언패킹
튜플을 언패킹한다는 것은 튜플의 각 요소를 변수나 또다른 튜플에 할당하는 것을 의미한다. 변수 접두부에 별표(`*`)을 넣으면 남은 요소들을 할당도 함께 받아 리스트 객체가 된다. 이에 대한 보조설명은 *파이썬: 함수형 프로그래밍 § 매개변수 및 전달인자*에서 확인할 수 있다.

```python
변수1, 변수2, *변수3, 변수3 = [데이터1, 데이터2, 데이터3, 데이터4, 데이터5]

print(변수1)        # >> 출력: 데이터1
print(변수2)        # >> 출력: 데이터2
print(변수3)        # >> 출력: [데이터3, 데이터4]
print(변수4)        # >> 출력: 데이터5
```

## 딕셔너리 객체
Dictionary is an iterable object that has indexing `key` data and `value` data paired as a single element. Dictionary does not call value by integer index but through `key`. Dictionary uses curly bracket `{}` to distinguish itself from other iterable.

```python
딕셔너리 = {key1: value1, key2: value2, key3: value3}

print(딕셔너리[key1])        # >> OUTPUT: value1
print(딕셔너리[key2])        # >> OUTPUT: value2
print(딕셔너리[key4])        # KeyError: key4
```

Mutable object (e.g. list and dictionary) cannot be used as `key` of the element; only immutable object is allowed. However, mutable object can still be used as a `value` of the element.

```python
딕셔너리 = {lst1: value1, key2: value2}
```

```
TypeError: unhashable type: 'list'
```

It is possible to change the existing `value` of the `key` within a dictionary. Unlike list object, creating new `key` data and assigning its `value` is also possible without needing any help from a method.

```python
딕셔너리 = {key1: value1, key2: value2, key3: value3}
딕셔너리[key1] = value4
딕셔너리[key5] = value5
```

```
{key1: value1, key2: value2, key3: value3, key5: value5}
```

Operations for a dictionary is same as other iterable objects but have slight difference:

| 연산자 | 이름                     | 설명                                                         |
| ------ | ------------------------ | ------------------------------------------------------------ |
| `+`    | Addition                 | Merge two or more different lists to a single list.          |
| `*`    | Multiplication           | Multiply the string by the number of integer (float does not work). |
| `in`   | Included (key exclusive) | Check if the key is in a dictionary. However, it does not check the value. |

```python
dictionary = {key1: value1, key2: value2}

print(key1 in 딕셔너리 )            # >> OUTPUT: True
print(value2 in 딕셔너리 )        # >> OUTPUT: False
print(key3 not in 딕셔너리 )        # >> OUTPUT: True
```

Dictionary have its own function and method to execute certain features exclusive for dictionary:

| 연산     | 예시                                | 설명                                                         |
| -------- | ----------------------------------- | ------------------------------------------------------------ |
| `get()`  | `dictionary.get(key,[description])` | Find the key and get its value; additional description can be added when the key is not found (`None` by default). |
| `dict()` | `dictionary=dict()`                 | Can create empty dictionary.                                 |

```python
dictionary = {key1: value1, key2: value2}

print(딕셔너리.get(key0))                            # >> OUTPUT: value1
print(딕셔너리.get(key2))                            # >> OUTPUT: None
print(딕셔너리.get(key3, "not in dictionary"))      # >> OUTPUT: not in dictionary
```

## 집합 객체
Set is an iterable object that guarantees uniqueness, meaning it does not allow duplicate element within the object. Just like dictionary, set uses curly bracket `{}` to assign values but without `key`-`value` pair. Due to the reasons above, set is much faster to check the elements than list.

```python
st = {value1, value2, value3}
print(st)
```

```
{value1, value2, value3}
```

Set have mathematical operations available which works exactly like mathematical set.

| OPERATION | NAME                 | DESCRIPTION                                                     |
|-----------|----------------------|-----------------------------------------------------------------|
| `|`       | Union                | Returns the combined of two sets.                               |
| `&`       | Intersection         | Returns data which only exist in both sets.                     |
| `-`       | Difference           | Returns data which only exist in subtrahend and not in minuend. |
| `^`       | Symmetric difference | Return data exclusive to each set, but not both.                |

```python
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 | set2)        # >> OUTPUT: {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(set1 & set2)        # >> OUTPUT: {4, 5, 6}

print(set1 - set2)        # >> OUTPUT: {1, 2, 3}
print(set2 - set1)        # >> OUTPUT: {7, 8, 9}

print(set1 ^ set2)        # >> OUTPUT: {1, 2, 3, 7, 8, 9}
```

Set have its own function to execute certain features exclusive for set:

| FUNCTION | EXAMPLE         | DESCRIPTION                                                                                                              |
|----------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| `set()`  | `set(iterable)` | Function which creates a set: list and tuple assigned with parentheses `()` are allowed, but dictionary is not possible. |

The function above is necessary when creating an empty set, as `{}` creates an empty dictionary instead. Meanwhile, the methods used by set object are as follows:

| METHOD     | EXAMPLE             | DESCRIPTION                                                 |
|------------|---------------------|-------------------------------------------------------------|
| `add()`    | `set.add(value)`    | Add `value` at the end of the set.                          |
| `remove()` | `set.remove(value)` | Remove `value` in the set.                                  |
| `pop()`    | `set.pop()`         | Randomly selected element is popped (removed) from the set. |

```python
st = set([value1, value2, value3, value1])
print(st)                # >> OUTPUT: {value1, value2, value3}

set0.add(value4)
set0.remove(value1)
print(st)                # >> OUTPUT: {value2, value3, value4}

print(st.pop())            # >> OUTPUT: value2 (randomly popped)
print(st)                # >> OUTPUT: {value3, value4}
```

## Generator
Generator is an iterable object that can be created by developer using `yield` and `for` loop statement. Generator is especially useful due to its absence of memory restrictions, allowing generator to yield infinite number of data.

```python
# CREATING THE GENERATOR.
def generator_function():
    var = 0
    while var < 5
        yield var
        var += 1

# ITERATING GENERATOR ELEMENT-BY-ELEMENT.
for var in generator_function():
    print(var)

# CONVERSION TO "LIST" DATA TYPE.
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

### `yield` 키워드
A keyword used to create a generator; keyword returns the value when iterated by `for` loop statement.

# **파이썬: 함수형 프로그래밍**
Functional programming is a style of program scripting that is based mostly around usage of the functions. This chapter will be introducing the guide on how to create and use function in Python for functional programming.

## 함수
Function is an independent block of code which can process the data and present newly processed data once it's called, allowing dynamic program scripting. Function can be distinguished from its code format which has parenthesis after its name; `function()`.

The programming based around use of custom functions is called *functional programming*.

```python
x = [0, 3, 5, 9]
print(len(x))
# Using "print()" function, and "len( )" function that returns the length of list object.
```

```
4
```

Although function acts quite different from variable, they can be treated just the same when assigned to variable.

```python
# ORIGINAL FUNCTION
function(arg1, arg2)

# ASSIGNING AND EXECUTING FUNCTION VIA VARIABLE
variable = function
print(variable(arg1, arg2))
```

Not only can it be assigned to variable, but function can also be passed as parameter of the other function. Therefore, developer can define new function using already-defined function.

### 순수 함수
Function that returns a value that depends only on their arguments without any side effects.

As for an example, cosine function `cos(x)` that only has single parameter `x` returns the value which depends only on the argument `x`; hence, the the cosine function is a pure function.

```python
# FUNCTION WITH x AND y PARAMETER.
def function(x,y):
    variable = 2 * x
    vairable += y
    return variable            # RETURN DEPENDS ONLY ON x AND y PARAMETER.
```

### Higher-Order Function
A function that takes other function(s) as parameters or return the function(s) as a result.

## `def` 키워드
The `def` keyword is used to create custom function. When calling newly created function before defining one, an error occurs as Python executes sequentially, thus is deemed calling non-existing function.

```python
def function(arg1, ar2):
    print(arg1 * arg2)
    return arg2

function("Hello",3)
print(function("World",2))
```

```
HelloHelloHello
WorldWorld
2
```

Parentheses `()` is necessary when defining a function even the function does not have any parameter.

### `return` 반환문
The `return` statement is a function-exclusive statement that returns value of certain data that can be directly used from the function. Once a return statement is executed, the function ends immediately despite there are codes still left inside.

Function does not need to have a `return` statement which will return `None` when passed to variable or be printed on console terminal (for example, by using `print()` function).

```python
def function_name():
    print("Hello!")

print(function_name())
```

```
Hello!
None
```

### 매개변수 & 전달인자
Following is a difference between parameter and argument that is referred significantly when discussing function:

**매개변수**
Parameter is a function-internal local variable: because parameters is a function-exclusive local variable, it cannot be called from outside.

**전달인자**
Argument is a value or object being passed to the function parameter and those passed values and objects will be processed by the function code.

| 연산자 |    구문     | 설명                                                         |
| :----: | :---------: | ------------------------------------------------------------ |
|  `*`   |   `*args`   | Allows multiple number of arguments.<br />Call by `args`(arguments) without asterisk, and returns tuple of arguments. Must locate after normal parameter. |
|  `**`  | `**kwargs`  | Allows use of undefined parameter in advance.<br />Call by `kwargs`(keyword arguments) without asterisks, and returns dictionary of arguments' name and corresponding values. |
|  `=`   | `arg=value` | Passes default value to parameter unless argument value is specified. Must locate after normal parameter. |

Examples below show how function parameter and argument works:

```python
# PARAMETER *args ALLOWS MORE ARGUMENT TO BE PASSED.
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
# PARAMETER **kwargs ACCEPTS FUNCTION-UNDEFINED PARAMETER.
def function(arg1, **kwargs):
    print(kwargs)
    
function(1, key0 = value0, key1 = value1)
```

```
{key0∶ value0, key1∶ value1}
```

----

```python
# DEFAULT-INITIALIZED PARAMETER arg2
def function(arg1, arg2 = "Hello"):
    print(arg2)
    
function(1)
function(2, "World!")
```

```
Hello
World!
```

## 익명 함수
Also known as **람다 함수** (혹은 **람다 표현식**), is an unnamed function without declaration (thus, anonymous) and does not store data, returning value only from a single expression. Anonymous function is generally used for a single-use function, or as an argument of higher-order function's parameter.

| 구문                                                         |
| ------------------------------------------------------------ |
| `lambda param0, param1 ∶ expression`                         |
| A main body of anonymous function consisting parameters and its return expression. |

Although anonymous function is a function without a name for a single-use, it can be assigned to variables and called when the function is needed. The anonymous function of the *PYTHON: FUNCTIONAL PROGRAMMING § Pure Function* example section can be expressed as follows:

```python
# NAMED FUNCTION
def function(x, y):
    return 2 * x + y

# ANONYMOUS FUNCTION
(lambda x, y: 2 * x + y)(2, 3)

# ANONYMOUS FUNCTION ASSIGNED TO VARIABLE
variable = lambda x, y: 2 * x + y
variable(2,3)
```

```
7
```

## Map 함수
Built-in function which takes iterable objects and function with parameters as arguments. Map function returns a list consisting return value of the function with iterable objects as its arguments.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `map(function, iterable1, iterable2, ...)`                   |
| In higher-order `map` function, iterable object `iterable1` and `iterable2` are passed as argument for `function`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python 
lst1 = [1, 2, 3, 4, 5]
lst2 = [0, 9, 8, 7, 6, 5]

variable1 = map(lambda x, y: x ** 2 + y, lst1, lst2)
variable2 = map(lambda y, x: x ** 2 + y, lst2, lst1)

print(list(variable1))
print(list(variable2))
```

```
[1, 13, 17, 23, 31]
[1, 83, 67, 53, 41]
```

## Filter 함수
Built-in function which takes iterable object and Boolean conditioning function (aka. predicate) as arguments and returns iterable object containing only with the data that passed the predicate.

| 구문                                                         |
| ------------------------------------------------------------ |
| `filter(predicate, iterable)`                                |
| In higher-order `filter` function, iterable object `iterable`are passed as argument for `predicate`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python
lst = [1, 2, 3, 4, 5]

variable = filter(lambda x: x % 2 is 0, lst)

print(list(variable))
```

```
[2, 4]
```

## 회귀 함수
Recursive function is a function that calls itself (recursion). Factorial $!$ in mathematic is the best example of recursive function implementation.

```python
# EXAMPLE: FACTORIAL "!"
def factorial( x ):
    # BASE CASE: a case when to escape from the recursion.
    if x == 1: 
        return 1
    else:
        return x * factorial(x-1)

print( factorial(5) )
```

```
120
```

Recursion can occur indirectly by multiple number of functions calling one to another, then back to the beginning.

### Base Case
A case of recursion which doesn't involve referring to itself anymore. It can be deemed as an exit condition. Without a base case, recursion results infinitely and thus crashes due to memory shortage:

```
RuntimeError: maximum recursion depth exceeded
```

## 데코레이터
Decorator is a function which modifies original function's functionality and returns the modified "function" itself (rather than returning value). Hence, assignment to a variable is needed for a function to properly work after processing through the decorator. Its function will then have a same name as the variable.

```python
# ORIGINAL FUNCTION
def function():
    statements

# CREATING DECORATOR
def decorator(func):
    def modified_function():
        """
        statements including func()
        """
    return modified_function

# DECORATING (MODIFYING) FUNCTION
variable = decorator(function) 
variable()        # WHICH IS ACTUALLY A FUNCTION ASSIGNED TO "variable".

# DECORATING (MODIFYING) FUNCTION: MAINTAIN FUNCTION NAME
function = decorator(function)
function()
```

Decorator above have decorated (modified) `function()` and assigned the decorated function to a variable `variable` and `function`, where latter maintains the function name.

When passing function as a parameter of a decorator, no parenthesis are needed like `function()`. This is because former passes function itself and latter passes return value of the function.

### `@` 기호
A decorator symbol `@` used for pre-pending the function definition, placed before pre-decorated function.

| 연산자 | 예시         | 설명                                                      |
| :----: | ------------ | --------------------------------------------------------- |
|  `@`   | `@decorator` | `@decorator` is a replacement of `func = decorator(func)` |

```python
# CREATING DECORATOR.
def decorator(func):
    def modified_function():
        """
        statements including func()
        """
    return modified_function

# DECORATING FUNCTION: @ SYMBOL
@decorator
def function():    # ORIGINAL FUNCTION OF "function()"
    statements

# FUNCTION NAME REMAINS THE SAME.
function()
```

Additionally, more than one decorator can be applied to a single pre-decorated function.

```python
@decorator1
@decorator2
def function():
    statements
```

A decorator located closest to pre-decorated function will be applied firsthand. Thus, the function object `function()` will first be decorated by `@decorator2`  then `@decorator1` sequentially.


# **파이썬: 객체지향 프로그래밍**
Previous chapter has explained and dealt with procedural and functional programming. The third scripting method, object-oriented programming (abbrev. OOP) is based around usage of classes and objects instead of functions.

## 객체
Previous chapters have introduced variable (which can store data) and function (which can process data). Object, aka. instance, is a block of data which encapsulate these variables and functions into a single identity.

The programming based around use of a custom objects is called *object-oriented programming*.

```python
x = [0, 3, 5, 9]
print(x.index(5))
# Using "index()" method that returns index of the value 5.
```

```
2
```

### 캡슐화
Encapsulation is the core concept in object which...

1. combines variables and functions into a single object
2. restrict direct access to these variables and functions to prevent accidental modification from external code. 

### 속성 & 메소드
The variables and function encapsulated to the object is called differently:

* **Attribute** is an object-dependent variable, accessed by `object.attribute` format.
* **Method** is an object-dependent function, accessed by `object.method()` format.

## 클래스
Class is used to create objects (aka. instance), hence can be deemed as a blueprint of the object. Classes are created using keyword `class` and inside defines variables and functions which becomes attributes and methods for the object.

```python
# CREATING CLASS
class CLASS∶
    # INSTANCE INITIALIZATION (= CONSTRUCTOR)
    def __init__(self, arg1, arg2):
        # ATTRIBUTES (similar to VARIABLE)
        self.attr1 = arg1
        self.attr2 = arg2
        
    # METHOD (similar to FUNCTION)
    def method(self, arg3):
        self.attr3 = arg3
        return self.attr1 + self.attr2 - self.attr3

# INSTANTIATION
instance = CLASS(value1, value2)    # CREATE INSTANCE FROM THE CLASS

# THEREFORE...
print(instance.attr3)
print(instance.method(value3))
```

```
value3
value1 + value2 - value3
```

### `self` 변수
The `self` variable is a conventional name to indicate an instance itself. Placing `self` on variables or functions bounds them to an object, thus declares as attributes and methods. These attributes and methods can be accessed only from the instance.

Variables and functions without `self` are local variables and functions inside the instance, and is not accessible. Attempting to do so results "AttributeError".

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = None        # ATTRIBUTE MUST BE INITIALIZED, ELSE RESULTS "AttributeError"
        attr3 = arg2             # LOCAL VARIABLE


# INSTANTIATION
instance = CLASS(1, 2)
''' EQUIVALENT: 
Class.__init__(self = instance, arg1 = 1, arg2 = 2, arg3 = 3)
'''

# THEREFORE...
instance.attr1        # >> OUTPUT: 1
instance.attr2        # >> OUTPUT: None
instance.attr3        # AttributeError: 'CLASS' object has no attribute 'C'
```

### `__init__` 메소드
The `__init__` method is the most important method needed to create instance. As the name implies (abbreviation of *initialization*), this method is automatically called when creating an object from class and is responsible for defining the number of arguments needed on instance initialization.

## 객체 속성/메소드
All methods (and attributes) that are declared normally within the class with `self` for self-indication are instance methods (and attributes). There is no special syntax that need to declare for instance method.

However, instance attribute cannot be defined outside instance method where `self` variable in valid. Variables declared outside the method becomes class attribute instead.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        # INSTANCE ATTRIBUTES
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    # INSTANCE METHOD
    def method1(self, arg3):
        self.attr3 = arg3
```


## 클래스 속성/메소드
Class attributes and methods can be accessed both from instance and class without any instantiation. Class attribute is declared without under class definition, indented along with methods. `self` variable is not used.

Class method is a method which can be accessed through class alone without needing to create an instance.

|      구문      | 설명                                     |
| :------------: | ---------------------------------------- |
| `@classmethod` | Decorator used to declare class methods. |

Though class method is defined by the decorator syntax mentioned above, the method also requires parameter to indicate the class itself (just like instance method have `self` parameter to mention instance itself), conventionally written as `cls`.

```python
# CREATING CLASS
class CLASS:
    # CLASS ATTRIBUTE
    attribute = value
    
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    def method1(self, arg3):
        self.attr3 = arg3
    
    # CLASS METHOD
    @classmethod
    def method2(cls, arg4):
        return arg4
    
    # CLASS METHOD FOR INSTANTIATION
    @classmethod
    def method3(cls, x, y):
        return cls(x**2, y**2)
    
    
# INSTANTIATION
instance1 = CLASS(1, 2)
instance1.method1(4)

instance2 = CLASS.method3(1, 2)    # INSTANTIATE: arg1 = 1**1, arg2 = 2**2
instance2.method1(4)

# THEREFORE...
CLASS.attribute            # >> OUTPUT: value
CLASS.method2(3)        # >> OUTPUT: 3

instance1.attribute         # >> OUTPUT: value
instance1.attr1            # >> OUTPUT: 1
instance1.attr2            # >> OUTPUT: 2
instance1.attr3            # >> OUTPUT: 4

instance2.attribute         # >> OUTPUT: value
instance2.attr1            # >> OUTPUT: 1 (= 1**2)
instance2.attr2            # >> OUTPUT: 4 (= 2**2)
instance2.attr3            # >> OUTPUT: 4
```

## 정적 메소드
Static method is a method that can be called without instantiation, but without parameter to call itself like `self` and `cls`.

| 구문            | 설명                                      |
| --------------- | ----------------------------------------- |
| `@staticmethod` | Decorator used to declare static methods. |

Since static method does not have a parameter to call itself, static method cannot access or modify any attribute from class and instance. This makes static method identical to normal function belonged to class.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None
        
    def method1(self, arg3)
        self.attr3 = arg3
        
    # STATIC METHOD
    @staticmethod
    def method2(arg4):
        return True if arg4 is 4 else False


# INSTANTIATION
instance = CLASS(1, 2)
instance.method1(4)

# THEREFORE...
instance.attr1            # >> OUTPUT: 1
instance.attr2            # >> OUTPUT: 2
instance.attr3            # >> OUTPUT: 4

CLASS.method2(4)        # >> OUTPUT: True
```

## 매직 메소드
Magic method is a special method which has Double UNDERscores(dunder) on both side of its name. These method generally represents operator, and are used when overloading operator to modify the operator's functionality. 

Previously encountered `__init__` method used for instance initialization is one of the widely used magic method. More can be seen on the table below:

| OPERATOR | NAME           | MAGIC METHOD               |
|----------|----------------|----------------------------|
| `+`      | Addition       | `__add__(self, other)`     |
| `-`      | Subtraction    | `__sub__(self, other)`     |
| `*`      | Multiplication | `__mul__(self, other)`     |
| `/`      | Division       | `__truediv__(self, other)` |
| `&`      | AND            | `__and__(self, other)`     |
| `^`      | XOR            | `__xor__(self, other)`     |
| `|`      | OR             | `__or__(self, other)`      |

### Operator Overloading
Overloading operator means customizing operator to function differently on certain classes or portion of the script. Magic method is used to overload operator but overloaded functionality is only exclusive to that specific class. As an example, `x + y`  is expressed as `x.__add__(y)` .

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1):
        self.A = arg1
        
    def __add__(self, arg2):
        return "\0".join([self.A, arg2.A])        # INSERT "\0" BETWEEN TWO STRING OBJECTS.

# INSTANTIATION
instance1 = CLASS("Hello")
instance2 = CLASS("World!")

instance1 + instance2        # >> OUTPUT: "Hello World!"
```

## 상속
Inheritance is an act of superclass (base class) providing attributes and methods to derived subclass (child class). When the same name of attributes and methods exists on both superclass and subclass, attributes and methods from superclass are overridden by subclass's.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    attr1 = value1
    attr2 = value2

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    attr2 = "Hello World!"
    attr3 = value3

# INSTANTIATION  
instance = SUBCLASS()

# THEREFORE...
instance.attr1        # >> OUTPUT: value1
instance.attr2        # >> OUTPUT: "Hello World!"
instance.attr3        # >> OUTPUT: value3
```

### 슈퍼 함수
The `super()` function is used to access the superclass properties, such as class attributes instance/class/static methods directly. This function is mainly used to avoid overriding superclass attributes and methods.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attr = arg1

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        print("Goodbye World?")


# INSTANTIATION
instance = SUBCLASS(3)

# THEREFORE...
print(instance.attr)
```

```
"Goodbye World?"
AttributeError: 'SUBCLASS' object has no attribute 'attribute'
```

Originally, the `__init__()` method in `SUPERCLASS` would have been overridden by `SUBCLASS` since both methods share the same name. This is the reason `print(Hello World")` did not appeared and `self.attribute` cause an error despite inheritance.

On the other hand, when using super function to called the `__init__()` method directly from the `SUPERCLASS`

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attribute = arg1

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        # DIRECTLY INHERITING "__init__()" METHOD FROM SUPERCLASS
        super().__init__(arg2)
        print("Goodbye World?")


# INSTANTIATION
instance = SUBCLASS(3)

# THEREFORE...
print(instance.attribute)
```

```
"Hello World!"
"Goodbye World?"
3
```

## 데이터 숨기기
Previously on *Encapsulation* subsection mentioned creating an object provides restriction on accessing attributes and methods, called *Data Hiding*. In Python, however, data hiding is not guaranteed and can be accessed easily from the code outside the class.

Still, manual approach such as name mangling is possible to prevent access to attributes and methods of the class:

| SYMBOL | EXAMPLE       | DESCRIPTION                                                                                                                                            |
|:------:|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `_`    | `_attribute`  | Though not a name mangling, it can prevent accessing attributes and methods from being passed via module import but not from codes outside the class.  |
| `__`   | `__attribute` | Name mangling: this prevents accessing attributes and methods from being passed via module import and codes outside the class, thus becomes "private". |

### 프로퍼티
Property is a decorator that supports data hiding by dividing a single method into three separate methods: `getter`, `setter`, and `deleter`. Because property is declared using decorator symbol, it can only be used on method.

| METHOD  | SYNTAX            | DESCRIPTION                                           |
|---------|-------------------|-------------------------------------------------------|
| Getter  | `@property`       | Method for getting the value from property attribute. |
| Setter  | `@method.setter`  | Method for setting the value of property attribute.   |
| Deleter | `@method.deleter` | Method for deleting property attribute.               |

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1):
        self.attr1 = arg1
    
    # DEFINITION: GETTER METHOD
    @property
    def method(self):
        return self.attr1
    
    # DEFINITION: SETTER METHOD
    @method.setter
    def method(self, arg3):
        self.attr1 = arg3
    
    # DEFINITION: DELETER METHOD
    @method.deleter
    def method(self):
        del self.attr1
        
# INSTANTIATION
instance = CLASS(3)

# THEREFORE
print(instance.method)        # EXAMPLE: GETTER METHOD

instance.method = 1           # EXAMPLE: SETTER METHOD
print(instance.method)

del instance.method           # EXAMPLE: DELETER METHOD
print(instance.method)
```

```
3
1
AttributeError: 'CLASS' object has no attribute 'attr1'
```

Separating method using property encapsulate sensitive code that shouldn't be modified by the user (such as `setter` and `deleter` method), while providing constant access to the method via `getter` method despite any changes were made on `setter` and `deleter`.

Although `getter` method is essential in property, the `setter` and `deleter` are optional; using `getter` method alone would make unmodifiable read-only method.

# **파이썬: PYTHONICNESS**
As learning to understand how the Python can and be use on programming, there is a Python's unique style of programming recommended for Python developer to implement as possible.

## Zen of Python
A set of principle guide when coding Python, provided within Python itself. Accessible via example below.

```python
import this
```

## Python Enhancement Proposals
Eight scripting style guides for Python suggested by experienced Python developers, aka. **PEP8**.
1.    Module should have short, all-lowercase name.
2.    Class name should be in the CapWords style.
3.    Most variables and function names should be lowercase_with_underscores.
4.    Constants (variables that never change value) should be CAPS_WITH_UNDERSCORES.
5.    Names that would clash with Python keywords (such as 'class' or 'if') should have a trailing underscore.
6.    Line shouldn't be longer than 80 characters.
7.    `from module import *` should be avoided.
8.    There should be only one statement per line.

## 시작점
While other program language such as C/C++ has a traditional entry point called `main()` which is the function where the program execution starts, Python does not have one.

Instead, Python uses special variable `__name__` which indicates the current Python script being executed. When this script is the main executing file, the `__name__` variable is assigned as `"__main__"` value. 

```python
# ENTRY POINT
if __name__ == "__main__":
    statements
```

Codes and statements indented under this condition will not be executed when it is imported as a module to the other script. Beware, the equivalent `==` operator cannot be replaced to logical `is` operator.

# **파이썬: REGULAR EXPRESSION**
Regular expression is a domain specific language (DSL) for string manipulation. Regular expression is not Python-exclusive feature, and is utilized by other programming languages as well (aka. regex).

## `re` Module
The module which allows Python to access regular expressions. To use the regular expression, place the letter `r` before the string object which indicates raw string.

| SYNTAX | EXAMPLE     | DESCRIPTION        |
|--------|-------------|--------------------|
| `r`    | `r"string"` | Raw string object. |

### Special Sequences
In regular expression not only the backslash works as an escape character `\` but also as a metacharacter that supports various features.

| SYNTAX | EXAMPLE | DESCRIPTION                                      |
|--------|---------|--------------------------------------------------|
| `\`    | `r"\"`  | Metacharacter for special sequence (+ *escaper*) |


## Grouping
Grouping makes series of characters or strings to be as one and allows grouped to become an argument for other metacharacters as seen in example of the previous section.

| OPERATION  | EXAMPLE                | DESCRIPTION                                      |
|------------|------------------------|--------------------------------------------------|
| `()`       | `r"^str0(str1)" `      | Grouping `str1`  separately from `str0` .        |
| `group()`  | `re.search.group(...)` | Method used for calling a grouped.               |
| `groups()` | `re.search.groups( )`  | Method used for calling all the groups in tuple. |

Calling `group(0)` is same as `group()` which returns matched characters or strings between compared two. The rest of integer starting from 1 calls individual group starting from left to right and outer to inner group.

### Named Groups
Group can be specified to have its own name to be called. No double quotations are needed when inserting name but are needed when calling the named groups.

| SYNTAX | EXAMPLE                | DESCRIPTION                            |
|--------|------------------------|----------------------------------------|
| `?P<>` | `r"(?P<name>string)" ` | Designate group with name for calling. |

### Non-capturing Groups
Group that cannot be accessible by `group(...)` and `groups()` methods, which results skipping index on such groups. However, `group(0)` is an exception where it calls matched comparison between two rather than groups.

| SYNTAX | EXAMPLE          | DESCRIPTION                                             |
|--------|------------------|---------------------------------------------------------|
| `?:`   | `r"(?:string)" ` | Inaccessible via `group(...)`  and `groups()`  methods. |

# **파이썬: 파일 관리**
When using the Python in advanced scripting, such as use for scientific research and artificial intelligence, the input data that needs to be computed cannot be stored through console command of the Python and may need to read through files if necessary.

## 파일 열기
Before reading or manipulating files via Python, the file must be opened firsthand. The `open()` function is used to open a file user want to open.

```python
open("filename.txt")
```

| 전달인자 | 설명                               |
| -------- | ---------------------------------- |
| `r`      | Read mode (default)                |
| `w`      | Write mode (rewrites content)      |
| `a`      | Append mode (adding new content)   |
| `rb`     | Binary read mode (non-text files)  |
| `wb`     | Binary write mode (non-text files) |

The `close()` method is used to close currently opened files. Closing file in very important on avoiding wasting resource. Ensure the files are always closed even on exceptions by using try/except or with statement.

```python
file = open("file.txt", "r")
file.close()
```

### `with` 문
The `with` statement creates temporary variable only available inside an indented code block of the `with` statement. When the file is opened using this statement, the file automatically closes at the end of the code block even if exceptions occur within it.

```python
with open("file.txt") as file:
    statements
```

### Context Manager
Context manager is an interface that allows support of `with` statement. There are two methods available for setting object method and function as context manager: (1) using `__enter__()` & `__exit__()` method pair and (2) using `contextlib` module.

```python
# CONTEXT MANAGER 1
class CLASS:
    def __init__(self):
        pass
    
    # EXECUTE UPON ENTERING "WITH"
    def __enter__(self):
        self.variable = expression
        return self.variable
    
    # EXECUTE UPON EXITING "WITH"
    def __exit__(self):
        statements
```

----

```python
from contextlib import contextmanager

# CONTEXT MANAGER 2 
class CLASS:
    def __init__(self):
        pass
    
    # "WITH" SUPPORTED FUNCTION/METHOD
    @contextmanager
    def method(self):
        self.variable = expression`
        yield self.variable
        statements
```

Context manager returns (or yields) attribute (or variable) when using `with` statement, which becomes a resource to be handled while within the statement. Having implicitly determined resource makes `as` keyword unnecessary, unless there is a need to alias the name.

```python
# INSTANTIATION
instance = CLASS()

with instance.method():
    # HANDLES "self.variable"
    statements
```

One of the actual implementation of this syntax can be found on chapter *TENSORFLOW: BASIC § TensorBoard* in [*PRGMING_TensorFlow*](./PRGMING_TensorFlow.md) document.

### 절대주소 및 상대주소
Just as other programming languages are, Python have two different types of path: absolute and relative path. When designating a path, use double backslash `\\` as a single backslash is an escape character that can cause unwanted operation.

```python
variable = open("path\\file.txt")
```

## 파일 읽기
After opening the text-based file, Python can read lines of file's content using `read()` method. Argument inside the method represent the number of bytes the method will read.

Read method can be used on the same file over again, but it will continue from where Python last read. When there's no argument, the read method reads the rest of the text from where it last left off.

```python
with open("path\\file.txt") as file:
    print(file.read(16))    # READ 16 BYTES FROM THE START OF THE CONTENT.
    print(file.read(4))        # READ 4 BYTES FROM THE POINT AFTER PREVIOUS 16 BYTES.
    print(file.read())        # READ THE REST OF THE TEXT AFTER PREVIOUS 4 BYTES.
    print(file.read())        # READ NO TEXT AS NO MORE CONTENT TO READ.
```

The `Readlines()` method is used to return a list of text of each line. The method do accepts argument, but it works exactly same as a read method: it designates how many bytes to read.

Don't get confused with `Readline()`s method which only reads the first line in string.

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

```python
with open("path\\file.txt") as file:
    print(file.readlines())
    print(file.readline())
```

```
['First line here.\n','Second line there.\n','Last line somewhere.']
First line here.
```

### Printing Line using Loop
Each line of text-base content can be retrieved using `for` loop statement:

```python
for file in variable:
    print(variable)
```

## 파일 쓰기
In Python, file can be created or (over)written by the `write()` method of the text-based file object. There are two options user can choose when writing: overwrite and append.

Suppose there is a file with text content written as follows:

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

Overwrite mode `w` deletes all of previously existing content and write down fresh from the beginning.

```python
with open("path\\file.txt", "w") as file:
    file.write("TEXT OVERWRITTEN!")
```

```
<file.txt>
TEXT OVERWRITTEN!
```

On the other hand, append mode `a` does not delete existing content but continue writing from the end.

```python
with open("path\\file.txt", "a") as file:
    file = file.write("TEXT APPENDED.")
    print(file)
```

```
<file.txt>
First line here.
Second line there.
Last line somewhere.TEXT APPENDED.
```

Upon successfully written, `write()` method returns the number of bytes written.

### 파일 생성하기
New file can be created using the `write()` method which does not bound by just writing on existing file. Creating file is simply done by designating file name is doesn't exist on the specified path.

```python
with open("path\\new_file.txt", "w") as file:
    file.write("NEW FILE CREATED!")
```

```
<new_file.txt>
NEW FILE CREATED!
```

# **파이썬: 패키지**
Python has variety of packages that can be easily downloaded and used on-demand. This chapter describes what the package is and how to implement it to the script.

## 모듈
A Python module is simply a Python source code file with `.py` extension. Developer may developed their own code containing class or function, and calling those codes from distribute Python file can be done using `import` keyword.

```python
import module
module.function()
```

Above approach still requires name of the module to be mentioned every time when using its function. To ignore referring to the module while still using module's function, use the `from` keyword beforehand.

```python
from module import function1, function2
from module import function as name
```

However, because module is not referred to use the function, there is potential conflict caused by function naming. Unless the function is named with guaranteed uniqueness, it is safe to use the previous approach to import modules.

## 패키지
Package is a directory of folder that holds a collection of Python modules or sub-packages. Every package folder must have a special Python file called `__init__.py` which can be blank or contains directory path of current package to prevent directories error caused by a common name.

```python
import package.module
from package.module import function
```

## Python Package Index
Python Package Index (aka. PyPI) is an external module storage website (*https://pypi.python.org/pypi*). To download and install the modules and packages, a software called pip is necessary.

### PIP
The pip software is a package management system required to install and manage the Python package. Nowadays, pip comes installed by default with modern distribution of Python. User can install pip separately online. Installation and management of packages are done using Command Prompt.

| NAME         | DESCRIPTION               | COMMAND                 |
|--------------|---------------------------|-------------------------|
| Installation | Install the package       | `pip install package`   |
| Remove       | Uninstall the package     | `pip uninstall package` |
| List         | Show the list of packages | `pip list`              |

When using Python on Windows, it is recommended to use `python -m pip` instead of `pip` alone. 

```
python -m pip
```

In case `python` command does not work but opens Microsoft Store, type `py` instead.

The command means accessing the pip under the python interpreter specified as `python` in environment variable. This allows package management by each interpreter more controllable, even when using virtual environment. When there is another version of Python installed, say 32 bits of Python 3.5

```
py -3.5-32 -m pip
```

# **파이썬: 가상환경**
C-based project needs to include header files and libraries individually when compiling the script. Python, on the other hand, requires installation of modules under the interpreter directory.

However, when working with multiple Python projects, having all the packages installed in a single interpreter is inconvenient and inefficient. This is why separating Python environment is essential which can be done using virtual environment.

## `venv` 패키지
The Python3 has virtual environment package `venv` included by default. The package support creating lightweight virtual environments with their own site directory, optionally isolated from system site directory.

Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directory.

### 가상환경 생성
Creating a virtual environment under the name `.venv` on desired project directory is done as follows:

```
python -m venv D:\Workspace\Python\project\.venv
```

### 가상환경 실행
Here, the term "activating" means activating virtual environment on the command prompt or terminal. While this is unnecessary when running the script under virtual environment, activation is required when installing packages using pip on console.

* Windows:

    ```
    D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* Unix (e.g. Linux and macOS):

    ```
    source ~/Workspace/Python/project/.venv/bin/activate
    ```

### 가상환경 종료
To exit from virtual environment activated console, user need to "deactivate" virtual environment.

```
deactivate
```

This is same as enter the command `PATH=D:\Workspace\Python\.venv\Scripts\deactivate.bat`. Because of this, relocating the virtual environment directory will cause `deactivate` command unable to recognize the path.

# **파이썬: NUMPY**
NumPy is an extremely powerful and useful library used in Python which supports multi-dimensional matrix (aka. NumPy array). As one of the best known scientific libraries, it is implemented on other well-recognized libraries such as [Matplotlib](https://matplotlib.org/), [TensorFlow](https://www.tensorflow.org/), et cetera.

To install NumPy library, open command prompt window and enter the command below: 

```
python -m pip install numpy
```

Since NumPy is a huge scientific library and is still growing, this chapter will briefly introduce basic usage of the array. For more information on its API, refer to the following URL: https://numpy.org/

## NumPy Array
NumPy array is a very flexible matrix. Compared to Python's List iterable object, the array has better performance both advantageous in faster speed and efficient memory management.

Declaration of the NumPy array is be done as follows:

```python
import numpy as np

# NUMPY DECLARATION
variable = np.ndarray(shape = (2, 3))
print(variable)
```

```
[[800191312     32765 800196048]
 [    32765 870097920     32765]]
```

This creates NumPy array object based on the given size, but its value is randomly generated.

Initialization of the NumPy array is done as follows:

```python
import numpy as np

# NUMPY INITIALIZATION 
variable = np.array([[1, 2, 3], [4, 5, 6]])
print(variable)
```

```
[[1 2 3]
 [4 5 6]]
```

This creates NumPy array object based on the given value, but has disadvantage on creating the array with huge size or deeper dimension. 

More NumPy methods exist that is used to create the array with better convenience:

| NUMPY ARRAY             | DESCRIPTION                                                   |
|-------------------------|---------------------------------------------------------------|
| `np.zeros(shape)`       | Create a NumPy filled with number 0 with the size of `shape`. |
| `np.ones(shape)`        | Create a NumPy filled with number 1 with the size of `shape`. |
| `np.eye(N)`             | Create a NumPy identity matrix of `N` x `N` size.             |
| `np.full(shape, value)` | Create a NumPy filled with `value` with the size of `shape`.  |

### NumPy Element
While accessing elements of NumPy array is similar to Python's iterable object, but its syntax is different:

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

print(variable[0])        # >> OUTPUT: [1, 2, 3]
print(variable[0, 1])    # >> OUTPUT: 2
```

### NumPy Shape
Shape of the NumPy cannot be extracted using method of Python's iterable object such as `len()`. Instead, NumPy has its own attribute containing length of each dimension.

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

variable.shape        # >> OUTPUT: (2, 3)
variable.shape[0]    # >> OUTPUT: 2
```

## NumPy Indexing
The term "indexing" means slicing the array to specific range only. Each dimension is indexed using colon `:` and are distinguished via comma `,`. Indexing shares the same rules as slicing of iterable object.

* `n:m` : start indexing from n^th^ element (included) to m^th^ element (excluded)
* `:` : start indexing from beginning to the end, thus skip indexing.

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

print(variable[:, 1:-1])
```

```
[[1 2]
 [4 5]]
```

# **파이썬: MATPLOTLIB**
Matplotlib is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms. Developer can generate plots, histograms, power spectra, bar charts, error charts, scatterplots, and more with just a few lines of code.

To install Matplotlib library, open command prompt window and enter the command below: 

```
python -m pip install matplotlib
```

Since Matplotlib is a huge scientific library and is still growing, this chapter will briefly introduce basic terminology and its mechanism. For more information, refer to the following URL: https://matplotlib.org/

## Terminology
Matplotlib has various term user and developer may not be familiar of. This section is hereby provide terminology used in the library that could help understand. Below is a figure from official Matplotlib website:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src="{{ '/assets/images/docs/Python/matplotlib_terminology.png' | relative_url }}" width="100%"></div><center style="font-weight:bold">Figure #. Matplotlib terminology.</center>
### Figure

Figure is considered an empty window of easel (a standing frame for a canvas):

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src="{{ '/assets/images/docs/Python/matplotlib_figure_no_axes.png' | relative_url }}" width="70%"></div><center style="font-weight:bold">Figure #. Matplotlib figure without any axes.</center>
Calling a figure using API such as `matplotlib.pyplot.figure()` returns pure white window background without anything.

### Axes
Axes (aka. subplot) is the region of the image with the data space, considered as canvas that goes up on easel. Do not be confused with axes and axis which is completely different. A following is a figure with four empty axes:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src="{{ '/assets/images/docs/Python/matplotlib_figure_with_axes.png' | relative_url }}" width="70%"></div><center style="font-weight:bold">Figure #. Matplotlib figure with four axes.</center>
API such as `matplotlib.pyplot.subplot()` or `matplotlib.pyplot.subplots()` returns both figure and a single or multiple empty axes simultaneously.