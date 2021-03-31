---
layout: docs
language: ko
category: 프로그래밍
title: 자바스크립트
icon: icon-javascript.png
meta: JavaScript
order: 0x04
---
# 자바스크립트: 소개
자바스크립트(JavaScript)는 절차형 웹프로그래밍 언어로 HTML & CSS 웹디자인 언어와 함께 사용되어, 상호작용 가능한 동적 웹페이지를 만드는데 기여한다. 현재 자바스크립트의 용도는 데이터 처리 및 어플리케이션 제작 등 범위가 넓어지고 있다.

본 문서는 전체적으로 웹프로그래밍 위주의 자바스크립트를 소개하기 때문에, 구체적인 내용은 생략하고 가장 중요하다고 판단되는 개념들만 함축적으로 설명할 예정이다.

## 인터프리트 언어
> 자바스크립트는 인터프리트 언어이며, 아래는 컴파일 언어와 인터프리트 언어에 대한 설명이다.

프로그래밍 언어는 크게 두 종류로 나뉘어진다: 바로 컴파일 언어와 인터프리트 언어이다. 컴퓨터에서 동작하는 모든 프로그램은 0과 1로만 구성된 이진코드와 같은 기계언어로 되어 있다. 하지만 프로그램이 어떻게 동작하는지 설계하는 소스 코드(source code)는 모두 영어로 작성된다. 그렇기 때문에 프로그램을 실행시키기 위해서는 컴퓨터가 이해하지 못하는 영문 코드를 기계언어로 변환시켜야 한다.

아래는 대표적인 컴파일 언어인 [C](../ko.PRGMING_C)/[C++](../ko.PRGMING_Cpp) 소스 코드(`.CPP`)와 그로부터 생성된 실행 프로그램(`.EXE`) 내부를 보여준다.

![컴파일 언어의 소스 코드와 실행 파일](/images/docs/shared/programming_lang_compile.png)

왼쪽의 프로그램 소스 코드에는 인간이 사용하는 공용어인 영어를 사용한 것을 볼 수 있다. 하지만 오른쪽의 프로그램 실행 파일 내부는 전혀 이해할 수 없는 숫자와 알파벳의 조합으로 구성되어 있다. 이는 이진코드를 십육진수로 표현하였을 뿐, 숫자 0과 1로 이루어져 있음은 변함없다. 그리고 이렇게 영문 소스 코드에서 이진코드 실행 파일로 변환하는 작업을 컴파일(compile)이라고 부르며, 컴파일을 처리하는 프로그램을 컴파일러(compiler)라고 부른다.

컴파일 언어는 컴퓨터가 이해할 수 있는 언어로 최적화되어 프로그램을 실행하기 때문에 매우 빠르다는 장점을 가진다. 그러나 "최적화"로 인하여 다른 운영체제(윈도우, macOS, 리눅스 등) 혹은 아키텍처(x86, x64, ARM 등)를 가진 컴퓨터에는 실행할 수 없다. 다른 시스템에서도 동작하게 하려면 대상 시스템에 적합한 설정으로 새로이 컴파일해야 한다.

그 다음은 대표적인 인터프리터 언어인 [파이썬](../ko.PRGMING_Python) 파일(`.PY`)에 대한 예시를 보여준다.

![인터프리터 언어의 소스 코드와 실행 파일](/images/docs/shared/programming_lang_interpret.png)

왼쪽의 파일 탐색기에 있는 파이썬 파일은 소스 코드인 동시에 실행 파일이기도 한다. 오른쪽의 상단은 파일을 코드 편집기로 열었을 때, 그리고 하단은 동일한 파일을 실행 파일로 열었을 때이다. 이것이 가능한 이유는 바로 인터프리트 언어인 파이썬은 인터프리터(interpreter)라는 언어 통역가가 영문 소스 코드를 이진코드로 곧바로 통역(interpret)하여 컴퓨터에게 전달하기 때문이다.

인터프리트 언어는 인터프리터만 설치되어 있으면 어느 컴퓨터라도 동일한 파일로 프로그램을 실행할 수 있는 장점을 가졌으며, 이를 크로스 플랫폼(cross platform)이라 부른다. 단, 프로그램을 실행할 때마다 인터프리터가 영문 소스 코드를 기계어로 통역해야 하기 때문에 실행 속도가 컴파일된 프로그램보다 상대적으로 느리다.

## HTML 웹프로그래밍 언어
HTML(Hypertext Markup Language) 선언형 웹디자인 프로그래밍 언어는 정적 웹사이트를 생성하는데 흔히 사용되는 언어이다. 여기서 정적 웹사이트(static website)란 모든 웹페이지 방문자들에게 동일한 콘텐츠를 보여주는 것을 의미한다. 즉, HTML 언어만으로는 웹사이트에 다양한 기능을 구현할 수가 없다.

하지만 자바스크립트를 배우기 전에 HTML을 공부하기 적극 추천한다: HTML은 매우 쉬운 언어이며, 자바스크립트만으로 웹페이지를 만들 수 있으나 상당히 불편하고 비효율적인 작업이다. HTML으로 우선적으로 디자인을 마치고 자바스크립트로 기능을 추가하는 방법이 가장 보편적이다.

아래는 HTML 언어의 사용 예시이다.

```html
<html>
    <!-- HTML 주석 -->
    <body style="text-align: center">
        <span class="example">Hello World!</span>
    </body>
</html>
```

### CSS 스크립팅 언어
CSS(Cascade Style Sheets) 스크립팅 언어는 HTML을 보조하는 언어로, HTML에 사용되는 구성요소(예를 들어 태크, 아이디, 클래스 등)의 디자인 내용만을 담고 있다. HTML을 공부하면 CSS 또한 함께 공부할 가치가 있는 매우 간단한 언어이다.

아래는 CSS 언어의 사용 예시이다.

```css
body {
    background-color: rgb(42, 45, 46);
    border: solid 3px black;
}

.example {
    font-family: 'Consola', monospace;
    color: white;
}
```

# 자바스크립트: 실행
자바스크립트를 실행하기 위해서는 인터넷 브라우저만 있으면 된다: 마이크로소프트 엣지(Edge), 구글 크롬(Chrome), 모질라 파이어폭스(FireFox), 애플 사파리(Safari) 등 모두 자바스크립트를 실행할 수 있다.

하지만 `.js` 파일만으로 인터넷 브라우저로 자바스크립트를 실행할 수 없으며, 실행한다 하더라도 자바스크립트 파일의 내용을 텍스트로 보여줄 뿐이다. Node.js 프로그램을 사용하면 브라우저 없이 자바스크립트를 실행시킬 수 있으나, "입문자를 위한 자바스크립트 설명"이란 본질과 멀어지게 된다. 그러므로 본 장에서는 브라우저를 활용한 간단한 자바스크립트 작업 환경을 구축하는 방법을 설명한다.

## 비주얼 스튜디오 코드
[비주얼 스튜디오 코드](https://code.visualstudio.com/download)(Visual Studio Code; VS Code)는 마이크로소프트에서 개발한 무료 소스 코드 편집기이다. 특히 마이크로소프트에서 타입스크립트(TypeScript)라는 자바스크립트의 상위호환 언어 사용을 적극적으로 권장하므로써 자바스크립트 개발 환경에도 같이 신경쓰고 있다.

VS Code에서 자바스크립트 작업 환경을 구축하기 위해서는 최소 세 가지의 파일이 필요하다: 자바스크립트, HTML, 그리고 JSON 파일이다.

### `script.js` 파일
자바스크립트 파일은 당연히 현재 배우고자 하는 자바스크립트 언어를 작성하는 파일이다. 자바스크립트 파일명은 `script.js`라고 가정한다.

### `index.html` 파일
HTML 파일을 통해 자바스크립트를 실행할 수 있는 런타임 환경을 제공한다. 자바스크립트 파일명이 `script.js`일 경우, 아래와 같이 HTML 파일을 생성하고 파일명은 간편하게 `index.html`로 지정한다.

```html
<html>
    <!-- 자바스크립트 불러오기 -->
    <script type="text/javascript" src="script.js"></script>
</html>
```

### `.vscode/launch.json` 파일
VS Code에서 자바스크립트를 실행하기 위해서는 확장도구가 필요하다: `F1` 키를 눌러 `Extensions: Install Extensions`을 입력한다. 선호하는 브라우저에 따라 왼쪽에 나타난 검색창에 다음과 같이 검색한다.

* 구글 크롬: `Debugger for Chrome`
* 모질라 파이어폭스: `Debugger for FireFox`
* 마이크로소프트 엣지: `Debugger for Microsoft Edge`

선택한 후, 초록색 `Install` 버튼을 눌러 설치한다. 이후 `F5` 버튼을 누르면 자바스크립트를 선택한 브라우저로 실행하는 옵션을 볼 수 있으며, 클릭할 시 자동적으로 `.vscode/launch.json` 파일이 생성된다.

해당 파일에 설정을 추가해야 한다: `"file": "${workspaceFolder}/index.html"`. 여기서 설정을 추가할 시 쉼표(`,`)를 잊지말고 넣어주어야 한다. 아래는 브라우저를 마이크로소프트 엣지로 선택하였을 때의 예시이다.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "edge",
            "request": "launch",
            "name": "Launch Edge against localhost",
            "url": "http://localhost:8080",
            "file": "${workspaceFolder}/index.html"
        }
    ]
}
```

종합적으로 아래와 같이 파일들이 준비되어야 한다.

![VS Code의 자바스크립트 작업 환경.](/images/docs/javascript/js_vs_workspace.png)

현 상태에서 `F5` 버튼을 누르면 자바스크립트를 디벙깅 모드로 실행, 그리고 `CTRL+F5` 버튼을 누르면 디버깅 없이 실행된다. 여기서 디버깅 모드란, 코드를 단계별로 실행하여 데이터가 어떻게 변하는지 확인할 수 있도록 한다.

# 자바스크립트: 기초
각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 자바스크립트 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

여기서 본 문서는 ECMAScript 2015, 일명 ES6 스크립트 언어 표준에서부터 소개된 자바스크립트 데이터 및 구문을 함께 설명한다.

## `<script>` 태그
HTML에서 자바스크립트를 사용하기 위해서는 `<script>` 태그가 반드시 필요하다. `<script>` 태그 안에 자바스크립트를 작성할 수 있으며, 혹은 외부 자바스크립트 파일을 불러올 수 있다.

```html
<!-- 자바스크립트 작성하기 -->
<script type="text/javascript">
	Write JavaScript Here... 
</script>

<!-- 자바스크립트 불러오기 -->
<script type="text/javascript" src="path/to/script.js"></script>
```

## 주석
주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. 자바스크립트에는 두 가지의 주석이 존재하며, 이들은 각각 "한줄 주석"과 "블록 주석"이라 부른다.

* **한줄 주석**
    : 코드 한 줄을 차지하는 주석이며, 두 개의 슬래시(`//`)로 표시된다.
* **블록 주석**
    : 코드 여러 줄을 차지하는 주석이며, 한 쌍의 슬래시와 별표(`/* */`)로 표시된다.

```js
/*
블록 주석:
코드 여러 줄을 차지하는 주석이다.
*/  
// 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 출력
자바스크립트는 두 가지 종류의 출력이 존재한다:

| 출력             | 예시                         | 설명                                                  |
|------------------ | ------------------------------ | ------------------------------------------------------------ |
| `document.write()` | `document.write("text")` | HTML에 직접 텍스트를 삽입한다; HTML 콘텐츠에 영향을 주기 때문에 권장되지 않는다. |
| `console.log()`    | `console.log("text")`    | 데이터를 터미널로 출력한다; 브라우저에서 `F12` 버튼을 눌러 "Console" 탭을 확인한다.                                  |

하나의 출력 함수에서 두 가지 이상의 데이터를 한꺼번에 출력하는 데 두 가지의 방법이 존재하며, 이들의 출력 방식은 약간 다르다.

1. 쉼표(`,`)를 사용하여 연속적으로 데이터를 나열할 수 있으나, 쉼표에는 항상 공백이 놓여진다.

    ```js
    console.log("Hello World!", 1);
    ```
    ```
    Hello World! 1
    ```

2. 더하기 기호(`+`)를 문자열 연결에 사용하면 사이에 공백이 생기지 않는다.

    ```js
    console.log("Hello World!" + 1);
    ```
    ```
    Hello World!1
    ```

## 팝업창
자바스크립트에는 HTML과 함께 사용할 수 있는 세 가지 종류의 팝업창(pop-up box)가 존재한다:

| 팝업창      | 예시                         | 설명                                                  |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| `alert()`   | `alert("description")`            | `"description"` 설명과 함께 OK 버튼이 있는 팝업창이다.        |
| `prompt()`  | `prompt("description","value")` | `"description"` 설명과 함께 `value`가 기본값으로 입력된 입력창이 있는 팝업창이다. |
| `confirm()` | `confirm("description")`          | `"description"` 설명과 함께 OK 및 Cancel 버튼이 있어 논리값 `True` 혹은 `False`를 반환한다. |

## 식별자
식별자(identifier)는 프로그래밍을 구성하는 데이터들을 구별하기 위해 사용되는 명칭이다. 다시 말해, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. 자바스크립트 언어에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`), 그리고 달러 표시(`$`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 사용할 수 없다.

## 변수
변수(variable)는 할당 기호(`=`)를 사용하여 데이터를 할당할 수 있는 저장공간이다. ECMAScript 2015 이후부터, 자바스크립트에는 세 가지 종류의 변수가 존재한다.

| 변수 | 예시            | 설명                       |
| -------- | ------------------ | --------------------------------- |
| `var`    | `var x = value;`   | 전역 변수                  |
| `let`    | `let x = value;`   | 지역 변수 |
| `const`  | `const x = value;` | 변경불가 전역/지역 변수      |

한 번 선언된 변수는 이후 `var`, `let`, 혹은 `const` 키워드를 사용하지 않고 호출된다. 자바스크립트의 변수는 데이터 종류와 상관없이 새로운 데이터를 언제든지 할당받을 수 있다.

### 초기화
초기화(initialization)란, 변수의 첫 데이터 할당(assignment)을 가리키며 일반적으로 정의 과정에서 이루어진다.

```js
// 변수의 초기화
let variable = 1;
```

### 지역 변수 & 전역 변수
자바스크립트에는 전역 변수와 지역 변수라는 개념이 존재한다.

* **지역 변수(local variable)**는 함수(function)와 같은 코드 블록 내부에서 정의된 변수이다. 지역 변수에 저장된 데이터는 코드 블록 밖에서는 소멸되므로 외부에서 사용할 수 없다. 그러므로 지역 변수는 외부에서 정의된 변수의 이름을 가질 수 있다.

    ```js
    /* "let" 지역 변수 */
    let y = "Outer Scope";
    if (true) {
        let y = "Inner Scope";
        console.log(y);
    }
    console.log(y);
    ```
    ```
    Outer Scope
    Inner Scope
    ```
    
* **전역 변수(global variable)**는 스크립트 내에서 어떠한 코드 블록에도 속하지 않은 외부에 정의된 변수이다. 단, 변수의 충돌로 인한 예상치 못한 결과와 오류를 방지하기 위해 가급적 전역 변수의 사용은 피하도록 한다.

    ```js
    /* "var" 전역 변수 */
    var x = 123.456;
    console.log(x);
    
    x = "This is a string.";
    console.log(x);
    ```
    ```
    123.456
    This is a string
    ```

### 상수
상수(constant)는 한 번 데이터를 할당한 후 변경할 수 없는 특별한 변수이다. 상수는 어디서 선언되었는지에 따라 전역 변수인지 지역 변수인지 나뉘어진다: 만일 코드 블록 외에 선언되었으면 전역 변수가 되며, 코드 블록 내에 선언되었으면 지역 변수가 된다.

## 자료형
파이썬은 기본적으로 세 가지의 데이터 유형이 존재하며, 이들은 숫자, 논리, 그리고 문자열 자료형(data type)으로 구분된다.

### 숫자 자료형
일반적으로 C/C++, 파이썬, 그리고 자바와 같은 프로그래밍 언어는 두 개 이상의 숫자 자료형을 가진다 (예를 들어 `int`, `float` 등). 하지만 자바스크립트는 `number` 자료형이란 오로지 하나의 숫자 자료형을 가지며, 이는 정수와 실수 모두 표현할 수 있다.

자바스크립트에는 다음과 같은 숫자 자료형의 산술 연산이 존재한다. 

| 이름  | 연산자 | 설명                      |
|-----|:---:|-------------------------|
| 덧셈  | `+` | -                       |
| 뺄셈  | `-` | -                       |
| 곱셈  | `*` | -                       |
| 나눗셈 | `/` | -                       |
| 나머지 | `%` | 나눗셈에서 몫을 제외한 나머지만 도출한다. |

할당 연산자(assignment operator)는 숫자 자료형에 사용되는 또다른 연산자이다. 이에 대한 설명은 아래의 도표를 참고한다.

| 연산자 | 예시  | 동일  |
|:--------:| -------- | ----------- |
| `+=`     | `x += 1` | `x = x + 1` |
| `-=`     | `x -= 1` | `x = x - 1` |
| `*=`     | `x *= 1` | `x = x * 1` |
| `/=`     | `x /= 1` | `x = x / 1` |
| `%=`     | `x %= 1` | `x = x % 1` |

비록 할당 연산자는 아니지만, 이와 유사한 증감 연산자(increment & decrement)는 다음과 같은 표현식을 의미한다.

| 연산자    | 예시   | 설명       |
| ----------- | --------- | ----------------- |
| `++` 접두사 | `x = y++` | `x = y; y = y+1;` |
| `++` 접미사 | `x = ++y` | `y = y+1; x = y;` |
| `--` 접두사 | `x = y--` | `x = y; y = y-1;` |
| `--` 접미사 | `x = --y` | `y = y-1; x = y;` |

### 논리 자료형
논리 자료형(Boolean data type)은 문장이 참인지 거짓인지 판별하는 논리 조건에 사용되는 데이터 유형이다.

| 값       | 이름     | 설명              |
|:-------:|:------:|-----------------|
| `True`  | 논리적 참  | 논리가 참일 때 반환된다.  |
| `False` | 논리적 거짓 | 논리가 거짓일 때 반환된다. |

논리값은 숫자 자료형으로도 표현이 가능하다. 0이 아닌 양의 정수는 `True`로 표현되며, 반대로 `False`는 오로지 숫자 0으로만 표현된다.

비교 연산자는 두 개의 데이터 관계를 비교하는데 사용되며, 조건이 참인지 거짓인지 여부에 따라 해당하는 논리값을 반환한다.

| 미만 | 이하 | 동일 | 일치 | 상이 | 이상 | 초과 |
|:----:|:----:|:----:|:---:|:----:|:----:|:----:|
| `<`  | `<=` | `==` | `===` | `!=` | `>=` | `>`  |

여기서 `===` 연산자는 `==` 연산자보다 더욱 엄격하며, 값의 일치 여부와 자료형의 동일성도 함께 확인하다.

논리 연산자(logical operator)에는 논리곱, 논리합, 그리고 보수가 있다. 논리 연산자를 사용할 시, `true`와 `false` 논리값을 각각 이진수의 1과 0으로 간주하면 된다.

| 연산자 | 논리 | 설명                                                |
|:--------:| ----- | ---------------------------------------------------------- |
| `&&`     | 논리곱   | 모든 인수가 `true`이면 `true`이고, 그렇지 않으면 `false`이다.    |
| `||`     | 논리합    | 하나 이상의 인수가 `true`이면 `true`이고, 그렇지 않으면 `false`이다. |
| `!`      | 보수   | `true`를 `false`로 변경 혹은 `false`를 `true`로 변경한다.             |

### 문자열 자료형
문자열 자료형(string data type)은 한 쌍의 작은 따옴표(`''`) 또는 큰 따옴표(`""`)로 구별되는 텍스트 데이터이다. 문자열 데이터에 따옴표를 넣을 시, 해당 따옴표 앞에 백슬래시(`\`)를 배치하여 문자열이 도중이 끊기는 문제를 방지한다.

```js
/* 문자열 작성의 부적절한 예시와 적절한 예시의 비교. */
console.log('Where's my "Cat in the Hat" book?');
console.log('Where\'s my "Cat in the Hat" book?');
```

```
Where
Where's my "Cat in the Hat" book?
```

문자열 데이터 줄바꿈은 탈출 문자 중 하나인 `\n`을 직접 삽입하여 구현할 수 있으며, 아래의 예시는 줄바꿈 사용 예시를 보여준다.

```js
console.log("Hello\nWorld!");
```

```
Hello
World!
```

이전 자바스크립트 구문은 데이터를 문자열에 넣기 위해 문자열을 나누어 더하기 기호(`+`)를 매번 넣어야 하는 불편함이 있었다. 하지만 ES6 이후부터 템플릿 리터럴(template literal)이 소개되면서 `${}` 연산자만으로 원하는 위치에 문자열을 나눌 필요없이 데이터 삽입이 가능해졌다.

```js
/* ES6 이전 */
let variable = 6;
let text = "This is before ES" + variable + "!";

/* ES6 이후 */
let variable = 6;
let text = `This is after ES${variable}!`
```

## 탈출 문자
탈출 문자(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 아래는 탈출 문자 중에서 흔히 사용되는 줄바꿈(`\n`)이다.

| 줄바꿈 | 탭 | 백슬래시 | 백스페이스 | 작은 따옴표 | 큰 따옴표 |
|:----:|:----:|:----:|:---:|:----:|:----:|
| `\n` | `\t` | `\\` | `\b` | `\'` | `\"` |

# 자바스크립트: 조건 및 루프
조건문 및 반복문(혹은 루프문)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 자바스크립트 프로그래밍의 조건에 따라 실행하는 조건문(conditional statement)과 반복적으로 실행하는 반복문(loop statement)을 소개한다.

## `if` 조건문
`if` 조건문은 조건이 참일 경우 코드를 실행한다. 조건이 `True`일 때 문장이 수행되지만 그렇지 않으면 무시된다.

```js
if (condition)
{
    statements;
}

// 간략화된 문장
if (condition) statement;
```

`if` 조건문 안에 또다른 `if` 조건문을 넣을 수 있으며, 이를 *네스티드(nested)* `if` 조건문이라고 부른다. 이러한 경우, 코드 블록(`{}`)을 사용하여 두 `if` 조건문의 경계를 명확히 구별하기를 권장한다.

```js
if (condition)
{
    if (condtion)
    { 
        statements;
    } 
}
```

### `else` 조건문
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 실행문에는 조건부가 `false`로 평가되었을 경우 호출되는 코드가 포함되어 있다.

```js
if (condition)
{
    statements;
}
else
{
    statements; 
}
```

### `else if` 조건문
`else if` 조건문은 `else`와 `if` 조건문의 조합으로 첫 번째 조건이 거짓일 경우, 첫 번째 조건과 다른 새로운 조건을 제시한다.

```js
if (condition)
{
    statements;
}
else if (condition)
{
    statements;
}
else
{
    statements;
}
```

하지만 우선 소개된 `else`-`if` 연쇄 조건문은 두 조건부가 함께 사용되는 점과 비교해 `else if` 조건문은 여전히 하나의 조건부에서 처리되므로, 이 둘은 구체적으로 서로 다른 조건문임을 명시해야 한다.

### 조건 연산자
조건문은 아래와 같이 조건 연산자(ternary operator; `?:`)를 사용하여 간략히 표현될 수 있다.

```js
condition ? true_return : false_return;
```

조건 연산자는 영어로 *ternary operator*로, 이는 세 가지 인수를 사용하는 것을 의미한다. 조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에는 유용하다.

## `switch` 조건문
`switch` 조건문은 건네받은 데이터를 `case` 키워드에서 제공하는 값과 일치하는지 비교하며, 참일 경우 코드를 실행한다. 참 조건 이후, 더 이상의 조건 평가를 방지하기 위해 모든 `case` 키워드에는 `break`라는 탈출문이 필요하다.

모든 경우에 조건이 부합하지 않을 시, `default` 키워드에 연동된 문장이 실행되며, `switch` 조건문에는 반드시 있어야 한다. 그러나 `case` 키워드와 달리 `break` 탈출문을 필요로 하지 않는다.

```js
switch ( argument ) {
    case value_1:
        statements;
        break;
    case value_2:
        statements;
        break;
    default:
        statements;
}
```

`switch` 조건문은 복수의 경우가 하나의 실행문을 공유할 수 있다.

```js
switch (argument)
{
    case value1:
    default:
        statements;
        break;
    case value2:
    case value3:
        statements;
        break;
    case value4:
        statements;
        break;
}
```

### `break` 문
`break` 문(일명 탈출문)은 반복이 완료되기 전에 루프를 조기 종료하는데 사용된다. 루프 내부에서 탈출문을 마주치는 즉시 현재 루프에서 탈출하지만 그 바깥 루프로부터는 탈출하지 않는다.

### `continue` 문
`continue` 문은 반복문 내에서 나머지 실행문을 전부 건너뛰고 다시 조건 판정부분으로 돌아가게 한다. 이는 반복문을 종료하는 `break` 문과 달리 반복문의 루프를 유지한다.

## `while` 반복문
`while` 반복문은 조건이 유지되는 한 내부 코드를 반복적으로 실행한다. 조건이 `false`임이 판정되면 반복문을 종료한다.

```js
while (condition)
{
    statements;
}

// 간략화된 문장
while (condition) statement;
```

### `do`-`while` 반복문
`do`-`while` 반복문은 `while` 반복문과 유사한다. 그러나 후자는 조건을 먼저 확인하고 문장을 실행하였으면, 전자는 문장을 우선 실행하고 조건을 확인한다.

```js
do
{
    statements
} while (condition);
```

## `for` 반복문
`for` 반복문은 정의된 지역 변수가 조건에 만족하는 한 지속적으로 반복한다. 한 번 반복할 때마다 지역 변수에는 반복문에 명시된 대로 변화가 발생하며, 일반적으로 정수형 증감을 사용한다.

```js
for (variable; condition; increment) {
    statements;
}

// 간략화된 문장
for (variable; condition; increment) statement;
```

### 범위형 `for` 반복문
ES6 표준부터 범위형 `for` 반복문 변형이 새로 소개되었으며, 조건 만족여부가 아닌 주어진 범위 내에서만 반복한다. 범위로 사용되는 데이터는 일반적으로 여러 데이터를 하나로 묶은 배열(array)을 사용한다.

`for-of` 형식의 반복문은 배열 요소들의 값을 하나씩 변수에 반환한다.

```js
for (let i of [1, 2, 3]) {
    console.log(i);
} 
```

```
1
2
3
```

한편, `for-in` 형식의 반복문은 배열 요소들의 값을 호출하는데 사용되는 이름을 하나씩 변수에 반환한다.

```js
for (let i in {a:1, b:2, c:3}) {
    console.log(i);
}
```

```
a
b
c
```

여기서 자바스크립트 언어의 배열은 차후 *자바스크립트: 이터러블* 장에서 구체적으로 설명한다.

# 자바스크립트: 이터러블
자바스크립트는 여러 데이터를 하나의 변수에 저장하는 이터러블을 가진다. 위에서 언급된 바가 있는 배열과 문자열은 자바스크립트에 내장된 이터러블 중 하나이다. 본 장에서는 가장 흔히 사용되는 배열을 중점으로 설명할 것이다.

## 배열
배열(array)은 동일한 자료형의 데이터를 순번대로 담는 저장공간이다. 배열의 초기화는 대괄호(`[]`)를 사용하여 데이터를 순번에 맞게 배열 요소에 할당한다.

```js
/* 배열 선언 */
var arr = [value1, value2, value3];
```

배열은 `Array()` 생성자(constructor)와 괄호 안에 요소에 할당될 데이터를 입력하므로써 생성 및 초기화될 수 있다.

```js
/* 배열 선언: Array 생성자 사용 */
var arr = new Array(value1, value2, value3);
```

`Array()` 생성자에 단 하나의 정수만을 입력하여 크기만 존재하는 빈 배열을 생성할 수 있다. 하지만 자바스크립트의 배열은 항상 동적, 즉 크기가 언제든지 변경할 수 있어 무의미한 절차이다.

```js
/* 크기 3의 빈 배열 선언 */
var arr1 = new Array(3);

/* 크기 0의 빈 배열 선언 */
var arr2 = new Array();
var arr3 = [];
```

### 전개 연산자
전개 연산자(spread operator; `...`)는 배열의 접두부에 위치시켜, 하나의 배열을 출력하는 게 아닌 배열 내의 요소들을 전개하여 한꺼번에 출력한다.

```js
let arr = [value1, value2, value3];

console.log(arr);
console.log(...arr);
```

```
Array [value1, value2, value3]
value1, value2, value3
```

또한 전개 연산자는 나머지 데이터를 모두 할당받는 데에도 사용되며, 대표적인 예시로는 아래의 *베열 구조 분해*의 예시 코드를 참고한다.

### 배열 구조 분해
배열의 구조 분해(array destructuring)는 배열의 각 요소마다 변수에 할당하는 작업을 의미한다. 

```js
let arr = [value1, value2, value3, value4, value5];

/* 배열의 구조 분해 할당 */
let [variable1, , ...variable3] = arr;

// 그러므로...
console.log(variable1);
console.log(variable3);
```

```
value1
Array [value3, value4, value5]
```

## 연관 배열
자바스크립트는 배열의 값을 정수가 아닌 문자열로 호출하는 연관 배열을 공식적으로 지원하지 않는다. 방법은 존재하나 권장되지는 않으며, 오히려 객체를 사용할 것을 권고한다.

```js
var arr = [];

/* 비록 배열을 선언하였으나, 아래의 코드로 인해 배열이 아닌 일반 객체로 변환 */
arr['property1'] = value1;
arr['proprety2'] = value2;

// 그러므로 배열 정보나 함수를 더이상 사용할 수 없다!
console.log(arr.length)
```

```
0
```

# 자바스크립트: 함수
개발자가 직접 함수를 제작하고 필요할 때마다 사용하여 효율성을 높일 수 있는데, 이러한 프로그래밍 기법을 *함수형 프로그래밍(functional programming)*이라고 한다. 본 장은 자바스크립트 언어에서 사용자 정의 함수의 생성 및 사용 방법에 대하여 소개한다.

## 함수
함수(function)는 독립적인 코드 블록으로써 데이터를 처리하며, 재사용이 가능하고 호출 시 처리된 데이터를 보여주어 유동적인 프로그램 코딩을 가능하게 한다. 함수는 이름 뒤에 소괄호가 있는 `function()` 형식으로 구별된다.

```js
/* ES6 이전 */
function functionName() {
	console.log(4)
}

/* ES6 이후 */
const functionName = () => {
    console.log(4);
}

// 함수 호출
functionName();
```

```
4
```

ES6 구문은 특히 한줄 함수를 생성하는데 매우 유용하게 사용된다.

```js
/* 한 줄만 사용하여 함수 정의 (ES6). */
const functionName = (arg) => console.log(arg);
functionName(value1);

/* 배열 요소 열거에 적용 (ES6). */
let arr = [1, 2, 3, 4];
arr.forEach((arg) => console.log(arg*2) );
```

### 매개변수 & 전달인자
다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* **전달인자 (argument)**
    : 전달인자, 혹은 간략하게 "인자"는 함수로 전달되는 데이터이다.
* **매개변수 (parameter)**
    : 매개변수는 전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수의 정의은 함수의 소괄호(`()`) 내에서 이루어진다.

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 |    구문    | 설명                                                 |
| :------: | :----------: | ------------------------------------------------------------ |
|   `=`    | `arg=value` | 매개변수에 전달인자가 없으면 기본값 `value`가 대신 반환된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |

아래의 예제는 함수의 매개변수와 전달인자가 어떻게 동작하는지 보여준다.

```js
/* ES6 이전 */
function functionName(arg1 = value1, arg2 = value2) {
    console.log(arg1 + arg2);
}

/* ES6 이후 */
const functionName = (arg1 = value1, arg2 = value2) => {
    console.log(arg1 + arg2);
}

// 함수 호출
functionName(2,3);
```

```
5
```

### 나머지 매개변수
나머지 매개변수(rest parameter)는 전개 연산자(`...`)를 가지는 매개변수로, 보다 더 많은 전달인자들을 배열로 받아낸다. 만일 추가 전달인자가 없으면 나머지 매개변수는 단순히 빈 배열인 상태가 된다.

```js
/* 나머지 매개변수를 가지는 함수 */
function functionName(arg, ...rest) {
	for(let variable of rest) {
    	statements;
    }
} 
```

### `return` 반환문
`return` 반환문은 함수로부터 데이터를 반환하는 함수 전용 문장이다. 반환문이 실행되면 코드가 남아 있음에도 불구하고 함수는 즉시 종료된다. 함수는 반환문을 반드시 필요로 하지 않으며, 이러한 경우에는 `undefined` 값이 반환되어 변수에 전달되거나 콘솔창에 출력되어 나타난다. 

```js
/* ES6 이전 */
function functionName(arg1 = value1, arg2 = value2) {
    return arg1 + arg2;
}

/* ES6 이후 */
const functionName = (arg1 = value1, arg2 = value2) => {
    return arg1 + arg2;
}

console.log(functionName(2,3));
```

```
5
```

# 자바스크립트: 객체
프로그래밍 방법 중 하나인 객체지향 프로그래밍(object-oriennted programming; OOP)은 함수 대신 클래스와 객체 사용을 기반으로 한다. 본 장은 자바스크립트에서 객체지향 프로그래밍을 구현하기 위한 사용자 정의 객체의 생성 및 사용 방법에 대하여 소개한다.

## 객체
이전 챕터에서는 (데이터를 저장할 수 있는) 변수와 (데이터를 처리 할 수 있는) 함수를 소개하였다. 객체(object 혹은 instance)는 이러한 변수와 함수를 하나의 데이터로 캡슐화한 데이터이다.

여기서 캡슐화(encapsulation)은 다음과 같은 역할을 지닌다.

1. 변수와 함수를 하나의 객체로 결합한다.
2. 우연치 않은 수정을 방지하기 위해 이러한 변수 및 함수에 대한 직접적인 접근을 외부로부터 제한할 수 있다.

사용자 정의 객체 중심으로 한 프로그래밍을 *객체지향 프로그래밍*이라고 한다.

```js
let variable = "Hello World!";
console.log(variable.search("World"));
// variable 이름을 가진 문자열 객체의 "search()" 메소드를 사용하여 단어의 위치를 반환한다.
```

```
6
```

### 속성 & 메소드
속성(property)과 메소드(method)는 객체에 캡슐화된 변수와 함수를 의미하며 아래와 같은 방법으로 접근한다.

| 객체 구성요소 | 구문                 |
| :-----------: | -------------------- |
|     속성      | `instance.property` 혹은 `instance["property"]` |
|    메소드     | `instnace.method()`  |

### 사용자 정의 객체
개발자는 직접 객체를 정의하여 사용할 수 있다.

메소드가 객체 내의 속성이나 또다른 메소드를 접근하기 위해서는 `this` 키워드를 사용해야 한다. 이는 객체 스스로를 가리키는 연산자로, 해당 키워드 없이는 인터프리터는 변수로 인식한다.

```js
/* 사용자 정의 객체 생성: ES6 이전 */
const variable = {
    /* 속성 (변수와 비슷함) */
    property1: value1,
    property2: value2,

    /* 메소드 (함수와 비슷함) */
    method: function(arg) {
        statements;
        return this.property1 + this.property2 - arg;    
    }
};
```
----
```js
var property1 = value1;

/* 사용자 정의 객체 생성: ES6 이후 */
const variable = {
    /* 속성 (변수와 비슷함) */
    property1,
    ["property2"]: value2,

    /* 메소드 (함수와 비슷함) */
    method(arg) {
        statements;
        return this.property1 + this.property2 - arg;   
    }
};
```

## 클래스
클래스(class)는 객체를 생성하는 데 사용된다. 클래스는 `class` 키워드를 사용하여 정의되며, 내부는 객체 속성과 메소드가 되는 변수와 함수를 정의한다. 아래는 `class` 키워드를 사용하여 제작한 사용자 정의 클래스의 간단한 예시 중 하나이다.

```js
/* 클래스 생성하기 */
class CLASS {
    /* 속성 */
    property1 = value1;
    property2 = value2;

    /* 메소드 */
    method(arg) {
        statements;
        return this.property1 + this.property2 - arg;   
    }
}
```

클래스를 통해 객체를 생성, 즉 객체화(instantiation)를 하기 위해서는 `new` 키워드를 사용해야 한다. 아래는 하나의 클래스로 두 개 이상의 객체를 생성하는 예시 코드이다.

```js
const variable1 = new CLASS;
const variable2 = new CLASS;

console.log(variable1.property1);
console.log(variable2.property2);
```
```
value1
value2
```

### 생성자 메소드
생성자(constructor) 메소드는 객체를 생성하는 데 필요한 가장 중요한 메소드이다. 해당 메소드는 클래스에서 객체를 만들 때 자동으로 호출되며 객체 초기화에 필요한 인수의 수를 결정한다.

```js
/* 클래스 생성하기 */
class CLASS {
    /* 생성자 메소드 */
    constructor(arg1, arg2) {
        this.property1 = arg1;
        this.property2 = arg2;
    }

    /* 메소드 */
    method(arg) {
        statements;
        return this.property1 + this.property2 - arg;   
    }
}
```

만일 위와 같이 생성자가 따로 정의되지 않아도 클래스는 기본적으로 아래와 같은 생성자를 가진다.

```js
/* 생성자 메소드: 기본값 */
constructor() {}
```

### 정적 메소드
정적 메소드(static method)는 객체화없이 클래스에서 바로 호출할 수 있으며, `static` 키워드로 선언된다. 그러나 객체는 정적 메소드를 접근할 수 없다. 다시 말해, 정적 메소드는 단순히 클래스에 속해있는 일반 함수와 동일하게 취급하면 된다.

```js
class CLASS {
    /* 정적 메소드 */
    static method(arg) {
        return arg * arg;
    }
}

console.log(CLASS.method(3));
```
```
9
```

### Setter 및 Getter 메소드
Setter 및 Getter 메소드는 클래스에 정의된 하나의 속성을 할당 전용 메소드와 반환 전용 메소드로 나누어 접근한다. 각 메소드는 `set`와 `get`으로 선언되며, 이는 코드의 민감한 부분은 숨기면서 지속적으로 접근할 수 있도록 하는 데이터 숨기기(data hiding)의 일종이다.

```js
class CLASS {
    
    /* SETTER 메소드 */
    set method(arg) {
        this.property = arg * arg;
    }

    /* GETTER 메소드 */
    get method(arg) {
        return `Property: ${this.property}`;
    }
}

// 객체화
const variable = new CLASS;

variable.method = 3;
console.log(varible.method);
```
```
Property: 9
```

이를 통해 `CLASS.property` 속성을 직접 호출하지 않고 데이터 할당과 반환 메소드를 개별적으로 정의하므로써, 속성을 더욱 유동적으로 접근 및 관리할 수 있게 된다.

## 클래스 표현식
클래스 표현식(class expression)은 이름없는 클래스를 정의하는 동시 객체를 선언하는 표현식이다. `new` 연산자 없이도 객체화가 되어 코드가 간략화되지만, 클래스는 한 객체만 정의할 수 있는 단점을 가진다.

```js
/* 클래스 표현식을 사용한 객체 선언 */
const variable = new class {
	constructor(arg1, arg2){
        this.property1 = arg1;
    	this.property2 = arg2;
    }
}
```

## 객체형
객체형(object type)은 함수를 통해 동일한 객체를 여러 개 생성한다. 이는 클래스와 매우 유사하며, 객체형은 함수 자체가 생성자 메소드 역할을 한다.

```js
/* 생성자 함수를 통한 객체형 정의 */
function OBJTYPE(arg1, arg2) {
    /* 속성 */
	this.property1 = arg1;
 	this.property2 = arg2;
    
    /* 메소드 */
    this.method(arg) {
    	statements;
        return this.property1 + this.property2 - arg;
    }
}

// 객체화
const variable = new OBJTYPE(value1, value2);
```

## 상속
상속(inheritance)는 하나의 클래스가 다른 클래스에게 속성과 메소드를 그대로 사용할 수 있도록 제공해주는 행위이며, 이를 각각 기반 클래스(base class)와 파생 클래스(derived class)라고 부른다.

파생 클래스는 `extend` 키워드를 통해 어느 기반 클래스로부터 상속되었는지 명시한다. 파생 클래스로부터 기반 클래스의 속성 및 메소드에 접근하기 위해서는 `super` 키워드가 사용된다. 단, `super()`는 기반 클래스의 생성자를 호출한다.

```js
/* 기반 클래스 생성 */
class BASECLASS {
	constructor(arg1, arg2) {
    	this.property1 = arg1;
        this.property2 = arg2;
    }

    method(arg) {
    	statements;
        return this.property1 + this.property2 - arg;
    }
}

/* 파생 클래스 생성 */
class DERIVEDCLASS extends BASECLASS {
    
    /* "SUPER()" 함수는 기반 클래스의 생성자 메소드를 호출 */
    constructor(arg1, arg2) {
    	super(arg1, arg2)
    }

    /* 이름이 동일한 메소드가 정의되면, 기반 클래스가 파생 클래스에 묻힘 */
    method(arg1) {
    	statements;
        return (this.property1 + this.property2) * arg;
    }

	method2() {
        /* 기반 클래스의 속성 및 메소드 호출은 `super` 키워드 사용 */
        let temp = super.method();
    	statements;
    }
}
```

## 내장 객체
흔히 사용되는 객체는 이미 자바스크립트에 내장되어 있어, 단순히 호출만 하여 사용할 수 있다. 아래는 자바스크립트의 대표적이고 매우 유용한 내장 객체 몇 가지를 소개한다.

### `Math` 객체
`Math`는 수학적 계산을 위해 사용되는 자바스크립트 내장 객체이며, 흔히 사용되는 상수들을 속성으로 가진다.

| 속성       | 구문            | 설명                |
|----------|---------------|-------------------|
| `E`      | `Math.E`      | 오일러 상수            |
| `PI`     | `Math.PI`     | 파이 상수             |
| `LN2`    | `Math.LN2`    | 2의 자연로그           |
| `LOG10E` | `Math.LOG10E` | 오일러 상수의 로그 (밑 10) |

`Math` 객체는 일부 수학 계산식을 메소드로 가진다.

| 메소드     | 예시           | 설명                       |
| ---------- | ----------------- | --------------------------------- |
| `abs()`    | `Math.abs(-3)`    | 절대값                   |
| `sqrt()`   | `Math.sqrt(36)`   | 제곱근                      |
| `power()`  | `Math.power(x,y)` | `x`의 `y` 거듭제곱 |
| `random()` | `Math.random()`   | 0과 1 사이의 난수 발생기    |

### `Date` 객체형
`Date` 객체형은 날짜와 관련된 객체를 생성하여 시간 측정, 일자 날짜 확인 및 계산 등의 용도로 사용된다. 아무런 전달인자가 건네지지 않으면 객체는 현재 시각 데이터를 갖는다.

```js
/* 객체화: 현재 날짜 및 시각 (실시간이 아님) */
var variable = new Date();
```

만일 전달인자가 건네지면 객체는 전달된 데이터를 기반하여 계산된 날짜 및 시각을 저장한다. 세 가지의 전달인자를 건네줄 수 있으며, 이들은 다음과 같다:

| 전달인자                      | 예시                                      |
|:-------------------------:|-----------------------------------------|
| 타임스탬프 (1970년 1월 1일 00시부터) | `new Date(789971670000)`                |
| 날짜 및 시간 문자열               | `new Date("January 13, 1995 13:34:30")` |
| 년, 월, 일, 시, 분, 초, 밀리초     | `new Date(95,0,13,13,34,30,0)`          |

생성된 객체는 날짜와 시간 계산을 위한 메소드를 제공한다.

| 메소드          | 구문                  | 설명                                               |
| --------------- | ------------------------ | --------------------------------------------------------- |
| `getFullYear()` | `variable.getFullYear()` | `variable` 객체에 저장된 데이터에서 연도를 반환한다.             |
| `getMonth()`    | `variable.getMonth()`    | `variable` 객체에 저장된 데이터에서 월(月)을 반환한다.            |
| `getDate()`     | `variable.getDate()`     | `variable` 객체에 저장된 데이터에서 일(日)을 반환한다. |
| `getHours()`    | `variable.getHours()`    | `variable` 객체에 저장된 데이터에서 시(時)를 반환한다. |

# 자바스크립트: 모듈
기존의 자바스크립트는 웹페이지에 자그만한 상호작용 요소를 입히는 것이 주된 목적이었다. 그러나 현재의 자바스크립트는 거의 모든 웹사이트 페이지에 들어가며 어플리케이션을 제작하는 데에도 사용되는 등 활용도가 훨씬 넓어졌다. 그러면서 코드 일부분을 기능성 모듈(module)로 분할하여 필요에 따라 언제든지 불러올 수 있는 매커니즘이 요구되기 시작하였다. 본 장에서는 자바스크립트로 모듈을 내보내거나 불러오는 방법에 대하여 소개한다.

## 모듈
모듈(module)이란, 데이터를 저장하거나 기능을 수행할 수 있는 자바스크립트 코드들을 하나로 묶은 파일을 가리킨다. 즉, 일반적인 변수나 함수, 객체 등을 담고 있는 자바스크립트 파일 또한 모듈로 사용될 수 있다. 모듈을 활용하기 위해서는 아래에 설명하는 두 개의 부문 `export` 및 `import` 문이 반드시 필요하다.

본 장의 설명을 돕기 위해 모듈로 사용할 `./module.js` 파일 안에는 다음 코드가 작성되어 있다고 가정한다.

```javascript
/* 예시 변수 및 배열*/
var variableName = 3;
var arrayName = { value1, value2, value3 };

/* 예시 함수 */
function functionName(arg1, arg2) {
    return arg1 + arg2;
}

/* 예시 객체 */
const objectName = {
    property1: value1,
    property2: value2,

    method: function(arg) {
        statements;
        return this.property1 + this.property2 - arg;    
    }
}; 
```

## `export` 문
`export` 문은 모듈에서 내보내고 싶은 데이터 및 기능을 지정하는데 사용된다. 모듈에서 코드를 내보내는 방법에는 두 종류가 존재한다: 네임드(named)와 기본(default) 내보내기가 있다.

```javascript
/* 네임드 내보내기 */
export variableName;               // 단일 네임드 내보내기
export { arrayName, functionName}; // 다중 네임드 내보내기

/* 기본 내보내기 */
export default objectName;
```

이를 하나의 `export` 문으로 표현하려면 다음과 같이 작성하도록 한다.

```javascript
/* 기본 및 네임드 내보내기 */
export { objectName as default, variableName, arrayName, functionName };
```

여기서 네임드와 기본 내보내기의 차이점이 존재한다: 네임드 내보내기는 여러 데이터를 내보낼 수 있으나, 기본 내보내기는 오로지 하나만 지정할 수 있다. 특히 기본 내보내기는 모듈에서 해당 데이터 혹은 기능을 불러올 때 식별자 지정이 자유롭다. 이에 대한 내용은 `import` 문에서 다시 설명할 예정이다.

네임드 내보내기 또한 식별자 충돌을 방지하기 위해 별칭을 사용해 내보낼 수 있다.

```javascript
/* 별칭 네임드 내보내기 */
export { variableName as aliasName1, functionName as aliasName2 }
```

### 내보내기 시 정의
`export` 문으로 내보낼 데이터 및 기능은 미리 정의가 되어야 할 필요는 없다. 내보내는 단계에서 바로 정의하여 내보낼 수 있으며, 아래는 각각 네임드 및 기본 내보내기 시 데이터를 정의하는 방법을 보여준다.

```javascript
/* 네임드 내보내기 시 정의 */
export let variableName = 3;
export function functionName(arg1, arg2) { ... }
export class CLASS { ... }

/* 기본 내보내기 시 정의 */
export default function (arg1, arg2) { ... }
export default class { ... }
```

기본 내보내기는 모듈을 불러올 때 식별자를 자유롭게 지정할 수 있다는 특성으로 함수 및 클래스에 대한 식별자를 필요로 하지 않는다.

### 다시 내보내기
`export` 문은 다른 모듈의 데이터 및 기능을 불러와서 그대로 다시 내보낼 수 있다. 이를 통해 여러 모듈을 하나로 통합할 수 있는 장점을 가진다. 예를 들어 `./sample.js` 모듈에 `data1`과 `data2`가 있다고 가정한다.

```javascript
/* 모둘에서 불러온 데이터 및 기능 그대로 다시 내보내기 */
export { data1 as default, data2 as aliasName } from "./sample.js"
```

위의 코드는 `./sample.js`에서 불러온 `data1`을 기본 내보내기, 그리고 `data2`를 `aliasName`이란 별칭으로 내보낸다.

## `import` 문
`import` 문은 모듈에서 `export` 된 데이터 및 기능을 불러오는데 사용된다. 모듈에서 네임드(named)와 기본(default) 내보내기에 대한 불러오는 방법이 약간 다르다. `./module.js`에서 다음과 같이 데이터 및 기능을 내보냈다고 가정한다.

```javascript
export { objectName as default, variableName as exportName, arrayName, functionName };
```

이에 대한 네임드 및 기본 불러오기는 다음과 같다.

```javascript
/* 네임드 불러오기 */
import { exportName, arrayName, functionName } from "./module.js";

/* 기본 불러오기 */
import defaultName from "./module.js";
```

이를 하나의 `import` 문으로 표현하려면 다음과 같이 작성하도록 한다.

```javascript
/* 기본 및 네임드 내보내기 */
import defaultName, { exportName, arrayName, functionName } from "./module.js";
```

여기에서 네임드와 기본 내보내기/불러오기의 차이점이 명확해진다. 네임드 내보내기 데이터 및 기능들을 불러올 때에는 정의될 때의 식별자 혹은 그에 해당하는 별칭으로 불어와야 한다. 그러나 기본 내보내기는 이와 별개로 불러오는 과정에서 `defaultName`처럼 아무런 변수 식별자를 사용할 수 있으며, 자동적으로 `objectName`이 해당 변수로 할당된다.

`export` 문에서 별칭을 지정할 수 있듯이, `import` 문에서도 불러온 데이터 및 기능에 별칭을 지정할 수 있다.

```javascript
import { exportName as aliasName1, functionName as aliasName2 } from "./module.js";
```

### 전부 불러오기
`import` 문으로 불러오고 싶은 데이터 및 기능을 하나씩 명시하지 않고서도 한꺼번에 전부 가져올 수 있다.

```javascript
/* 네임드 전부 불러오기 */
import * as moduleName from "./module.js";
```

여기서 `moduleName`은 네임스페이스(namespace)로, 모듈에서 불러온 데이터 및 기능들은 네임스페이스를 거쳐 호출하게 된다. 만일 모듈 내 함수를 사용하려면 `moduleName.functionName()`라고 호출해야 한다.

하지만 위의 명령어는 네임드에만 적용이 가능하며, 기본 데이터도 함께 `moduleName` 네임스페이스에 포함시키려면 다음과 같이 코드를 입력한다.

```javascript
/* 기본 및 네임드 전부 불러오기 */
import defaultName, * as moduleName from "./module.js";
```

# 자바스크립트: DOM
자바스크립트는 HTML 및 CSS와 함께 사용하여 다양한 기능을 제공하는 데 기여한다. 선언형 언어인 HTML은 아래와 같이 트리 구조(tree structure)의 문서 객체 모델(Document Object Model; DOM)로 문서를 표현한다.

![문서 객체 모델 <sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg">위키백과</a></i></sub>](/images/docs/javascript/js_html_dom.png)

자바스크립트는 HTML의 DOM에 접근하여 요소를 추가, 제거, 그리고 변경할 수 있어 동적이고 유연한 웹사이트를 표현할 수 있도록 한다. 트리 구조의 각 블록은 HTML의 요소를 의미하며, 이는 DOM에서 노드(node)라고 부른다.

본 장은 본격적으로 자바스크립트를 HTML 및 CSS와 함께 통합하여 사용하는 방법을 간략하게 설명한다.

## 노드 관계
`<html>`, `<head>`, `<h1>`과 같은 HTML의 요소는 DOM의 노드에 해당한다. 노드는 다른 노들들과 상하 관계가 존재하며, 이는 가족 구성에 빗대어 부모(parent), 자식(child), 그리고 형제(sibling)이라 부른다.

| 관계 | 설명                     |
|:--:|------------------------|
| 부모 | 해당 노드를 포함하고 있는 상위 노드.  |
| 자식 | 해당 노드가 포함하고 있는 하위 노드.  |
| 형제 | 해당 노드와 동일한 부모를 가지는 노드. |

## `document` 객체
자바스크립트의 `document` 내장 객체는 DOM의 노드를 최상위 권한으로 접근하는 데 사용된다. 노드 생성, 스타일 변경, 이벤트 설정 등은 전부 `document` 객체를 통해서 이루어진다.

### 요소 선택
DOM에서 원하는 요소 선택은 다음과 같은 `document` 객체 메소드를 통해 실현된다. 

| 메소드                                         | 설명                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `getElementById("ID")`            | `ID`란 아이디를 가진 요소를 접근한다.                           |
| `getElementsByClassName("CLASS")[index]` | `CLASS`란 클래스를 가진 `index` 번째 요소를 접근한다 (JS의 클래스가 아님). |
| `getElementsByTagName("DIV")[index]`     | `DIV` 태그를 가진 `index` 번째 요소를 접근한다. |

여기서 `document.getElementById()`만 배열 형식이 아닌 이유는 아이디는 DOM 내에서 하나의 요소에만 할당할 수 있는 유일성을 지녔기 때문이다.

이렇게 선택된 요소는 아래의 속성을 통해서 해당 요소의 부모, 자식, 혹은 형제 노드를 선택할 수도 있다.

| 속성          | 구문                | 설명                                                  |
| ----------------- | ---------------------- | ------------------------------------------------------------ |
| `parentNode`      | `node.parentNode`      | `node`의 부모 노드를 호출한다.                       |
| `childNodes`      | `node.childNodes[0]`      | `node`의 0 번째 자식 노드를 호출한다.                |
| `firstChild`      | `node.firstChild`      | `node`의 첫 자식 노드를 호출한다.                  |
| `lastChild`        | `node.lastChild`       | `node`의 마지막 자식 노드를 호출한다.                   |
| `hasChildNodes`   | `node.hasChildNodes`   | `node`가 자식 노드를 가지면 `true`, 아니면 `false`를 반환한다. |
| `nextSibling`     | `node.nextSibling`     | `node`의 다음 형제를 호출한다.                |
| `previousSibling` | `node.previousSibling` | `node`의 이전 형제를 호출한다.            |

### 요소 스타일 변경
DOM은 각 요소를 개별 객체로 간주한다. 즉, 요소의 특성(attribute)들은 객체의 속성처럼 접근할 수 있다.

```html
<!-- 예시 HTML -->
<div id="SAMPLE">
    <img src="path/to/image1.png" style="width:400px; height:300px;">
    <span>그림 1. 예시 이미지</span>
</div>

<!-- 자바스크립트 -->
<script>
    /* "SAMPLE" 아이디를 가진 요소의 자식 노드 배열 접근 */
    const node = document.getElementById("SAMPLE").ChildNodes;
    
    /* 0 번째 자식 노드, 즉 <IMG> 요소 접근 및 스타일 변경 */
    node[0].src = "path/to/image2.png";
    node[0].style.width = "800px";
    node[0].style.height = "600px";
</script>
```

### 요소 생성
HTML이 아닌 자바스크립트를 사용해서 새로운 요소를 생성할 수 있다.

| 메소드             | 설명                                                  |
| ------------------  | ------------------------------------------------------------ |
| `createElement("DIV")` | `DIV` 요소를 생성하지만, 아직 DOM 내에는 위치하지 않은 상태이다.  |
| `createTextNode("String")` | `String` 텍스트를 가진 노드를 생성하지만, 아직 DOM 내에는 위치하지 않은 상태이다. |

생성된 요소는 도표에서 설명한 대로 아직 DOM 어딘가에도 속하지 않은 상태이므로 웹사이트에 표시되지 않는다. 웹사이트에 나타나게 하기 위해서는 DOM에 추가해야 한다.

### 요소 추가 및 제거
DOM에 요소를 추가하는 방법은 다음과 같다:

| 메소드             | 설명                                                  |
| ------------------  | ------------------------------------------------------------ |
| `appendChild(node)`  | `node`를 현재 노드의 자식 노드로 둔다.                           |
| `insertBefore(node1,node2)` | `node1`을 현재 노드의 자식 노드로 두지만, `node2` 다음 형제로 위치시킨다. |
| `insertAfter(node1,node2)` | `node1`을 현재 노드의 자식 노드로 두지만, `node2` 이전 형제로 위치시킨다. |

DOM에 요소를 제거하는 방법은 다음과 같다:

| 메소드                 | 설명                          |
|---------------------|-----------------------------|
| `remove()`          | 현재 노드를 제거한다.                |
| `removeChild(node)` | 현재 노드에서 `node` 자식 노드를 제거한다. |

```html
<!-- 예시 HTML -->
<div>
    <p id="P1">첫 번째 문장.</p>
    <p id="P2">두 번째 문장.</p>
</div>

<!-- 자바스크립트 -->
<script>
    /* 텍스트 노드를 새로 생성된 <P> 요소에 삽입 */
    const textNode = document.createTextNode("JS로 생성된 텍스트.");
    const paraNode = document.createElement("p");
    paraNode.appendChild(textNode);
    
    /* 새로 생성된 <P> 요소를 <DIV> 자식 노드의 맨 끝에 추가 */
    document.getElementsByTagName("div")[0].appendChild(paraNode);
</script>
```

## 이벤트
자바스크립트는 클릭이나 키보드 입력, 혹은 입력창 데이터 제출 등과 같은 이벤트(event)가 발생할 시 코드를 수행할 수 있다. 비록 이벤트는 HTML에서 인식하나, 해당 이벤트에 대한 동작(일명 이벤트 처리자; event handler)은 자바스크립트에서 정의된다.

이벤트를 실행하는 방법에는 몇 가지가 존재한다: 그 중 하나는 HTML 소스 코드에 요소들이 어떠한 이벤트를 인식할지 미리 지정해 두는 것이다.

```html
<!-- 예시 1 -->
<div>
    <!-- <BUTTON> 요소는 클릭 이벤트 발생 시 "functionName()" 이벤트 처리자 실행 -->
    <button onclick="functionName()">클릭</button>
</div>

<!-- 자바스크립트 -->
<script>
    /* "functionName()" 이벤트 처리자 */
    const functionName = () => {
        statements;
    }
</script>
```

하지만 HTML의 특성을 활용하지 않고 직접 자바스크립트에서 직접 이벤트를 동적으로 할당할 수 있다.

```html
<!-- 예시 2 -->
<div>
    <!-- DOM으로 이벤트 지정 예정 -->
    <button>클릭</button>
</div>

<!-- 자바스크립트 -->
<script>
    /* DOM을 통한 <BUTTON> 요소 이벤트 지정 및 이벤트 처리자 정의 */
    const variable = document.getElementsByTagName("BUTTON")[0];

    /* "functionName()" 이벤트 처리자 */
    variable.onclick = () => {
        statements;
    }
</script>
```

`addEventListener()` 메소드는 DOM에서 이벤트와 이벤트 처리자를 동시에 지정하는 자바스크립트 메소드이다. 여기서 주의할 점은 이벤트 이름이 이전 이벤트 관련 예시 코드와 다르다는 것이다.

| 메소드                  | 설명                                    |
| ----------------------- | -------------------------------------------- | ---------------------------------------------- |
| `addEventListener("click",funcName)`   | `funcName` 함수를 실행하는 `click` 이벤트를 해당 요소에 추가한다.   |
| `removeEventListener("click",funcName)` | `funcName` 함수를 실행하는 `click` 이벤트를 해당 요소로부터 제거한다. |

```html
<!-- 예시 3 -->
<div>
    <!-- DOM에서 "addEventListener()" 메소드로 이벤트 지정 예정 -->
    <button>클릭</button>
</div>

<!-- 자바스크립트 -->
<script>
    /* "addEventListener()"로 <BUTTON> 요소 이벤트 지정 및 이벤트 처리자 정의 */
    const variable = document.getElementsByTagName("BUTTON")[0];
    variable.addEventListener("click", functionName);
    
    /* "functionName()" 이벤트 처리자 */
    function functionName() {
        statements;
        
        // 이벤트 실행 시, statements 이후 마지막에 이벤트 할당 해제: 일회용 이벤트
        variable.removeEventListener("click", functionName);
    }
</script>
```

### 이벤트 전파
이벤트 전파(event propagation)은 이벤트 처리자의 실행 순서를 결정한다. 아래의 HTML 소스 코드를 예시로 들어본다.

```html
<div onclick="functionDIV()">
    <span onclick="functionSPAN()">
        Hello World!
    </span>
</div>
```

만일 "Hello World!" 텍스트를 클릭하였을 시, 어떤 요소의 이벤트 처리자가 우선적으로 실행되는가: `<DIV>` 아니면 `<SPAN>`인가?

* **캡쳐링 (capturing)**
  : DOM 트리 구조에서 상위 노드에서 하위 노드 순서로 내려간다 (`<DIV>` 먼자, `<SPAN>` 이후).
* **버블링 (bubbling)**
  : DOM 트리 구조에서 하위 노드에서 상위 노드 순서로 올라간다 (`<SPAN>` 먼자, `<DIV>` 이후).

이러한 이벤트 전파는 `addEventListener()` 메소드에서 `useCapture` 논리형 매개변수를 통해 설정할 수 있다. 기본적으로 `usvCapture = faluse`로 버블링이 설정되어 있다.

| 예시                                              | 
|:----------------------------------------------------:| 
| `elem.addEventListener("click",funcName,useCapture)` | 
|`useCapture`는 논리 자료형을 받는 매개변수로, `true`이면 캡쳐링이고 `false`이면 버블링으로 설정된다. |

## 반복 실행
자바스크립트는 하나의 함수를 일정 주기에 맞춰 반복적으로 실행하도록 할 수 있으며, 이는 `setInterval` 및 `clearInterval` 쌍으로 구현할 수 있다.

| 함수            | 예시                          | 설명                                          |
| ----------------- | -------------------------------- | ---------------------------------------------------- |
| `setInterval()`   | `setInterval(funcName,millisec)` | `funcName` is executed with delayed `millisec` time. |
| `clearInterval()` | `clearInterval(setInterval)`     | Disable `setInterval()` object.                      |

```html
<!-- 예시 HTML -->
<div>
    <span>Hello World!</span>
</div>

<!-- 자바스크립트 -->
<script>
    /* "functionName()" 함수를 매 0.5초 동안 반복 실행 */
    let variable = setInterval(functionName, 500);

    var index = 0;    // 전역 변수
    const functionName = () => {
        /* 세 번 반복하도록 설정 */
        if (index == 3)
        {
            /* 반복 실행 해제 */
            clearInterval(variable);
        }
        else
        {
            statements;
            index++;    // 전역 변수이기에 값이 유지된다.
        }
    }
</script>
```

이러한 반복 실행은 결국 HTML 요소의 위치 이동 및 스타일이 시간에 따라 서서히 변하는 애니메이션 동작을 구현하는데 흔히 활용된다.

# JQUERY: 소개
jQuery는 자바스크립트 라이브러리 중 하나로 HTML DOM 구조 이동, 제어, 그리고 이벤트 처리 등을 간략화하는데 목적을 둔다. 해당 특징들은 많은 웹사이트에서는 jQuery 라이브러리 사용을 독려하여, [W3Techs](https://w3techs.com/technologies/overview/javascript_library) 통계에 의하면 75% 이상의 전세계 웹사이트에서 jQuery를 사용하는 매우 유명한 라이브러리이다. 본 장에서는 jQuery를 사용하는 방법에 대해서 소개한다.

라이브러리 파일은 `jquery-3.x.y.min.js`과 `jquery-3.x.y.js`로 나뉘어지는데, 전자는 압축된 배포용이며 후자는 개발용으로 사용된다. jQuery 라이브러리를 스크립트로 불러오는 방법은 두 가지가 있다:

* 첫 번째로는 jQuery 자바스크립트 파일을 [다운로드](https://jquery.com/download/)하여 사용하는 것이다. 만일 jQuery 3.5.1 배포용을 불러오고 싶으면 다음과 같이 코드를 `<head>` 태그 아래에 입력한다.

  ```html
  <head>
      <!-- 로컬 JQUERY 라이브러리 불러오기 -->
      <script src="jquery-3.5.1.min.js"></script>
  <head>
  ```

* 두 번째 방법으로는 온라인에서 jQuery 라이브러리만 전달하는 CDN을 통해 불러올 수 있다. 다음과 같이 코드를 `<head>` 태그 아래에 입력하여 jQuery 3.5.1 배포용 라이브러리를 Google 서버에서 직접 불러온다.

  ```html
  <head>
      <!-- CDN JQUERY 라이브러리 불러오기 -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></  script>
  </head>
  ```
