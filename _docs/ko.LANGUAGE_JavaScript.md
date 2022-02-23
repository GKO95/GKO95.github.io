---
layout: docs
category: 프로그래밍
title: 자바스크립트
slug: ko.JavaScript
icon: icon-javascript.svg
order: 0x05
---
# 자바스크립트: 소개
[자바스크립트](https://ko.wikipedia.org/wiki/자바스크립트)(JavaScript)는 웹디자인에 사용된 [HTML](#html-웹프로그래밍-언어) & [CSS](https://ko.wikipedia.org/wiki/CSS)만으로는 제한적인 [동적 웹페이지](https://ko.wikipedia.org/wiki/동적_웹페이지)를 구현하기 위해 개발된 스크립트 언어였다. 자바스크립트가 [웹 브라우저](https://ko.wikipedia.org/wiki/웹_브라우저)에서만 실행될 수 있던 당시에는 활용도가 클라이언트 측에서 웹페이지 상호작용을 위한 [프론트엔드](https://ko.wikipedia.org/wiki/프론트엔드와_백엔드)(front-end)에 한정되었다. 현재는 데이터 처리 및 어플리케이션 제작 등 서버 측에서 [백엔드](https://ko.wikipedia.org/wiki/프론트엔드와_백엔드)(back-end)로도 활발히 사용되고 있다.

## 인터프리트 언어
> *참조: [컴파일러 vs 인터프리터](/blog/ko.compiler_vs_interpreter)*

자바스크립트 프로그래밍 언어는 [인터프리트 언어](https://ko.wikipedia.org/wiki/인터프리트_언어)(interpreted language)이다. 초창기 자바스크립트 코드를 실행하는 [자바스크립트 엔진](https://ko.wikipedia.org/wiki/자바스크립트_엔진)(JavaScript engine)은 단순 인터프리터였으나, 현대에는 성능 향상을 위해 [JIT 컴파일](/blog/ko.compiler_vs_interpreter#jit-컴파일)(just-in-time compile)을 활용한다.

# 자바스크립트: 설치
자바스크립트를 실행하기 위해서는 두 가지 프로그램이 필요하다: (1) 자바스크립트 엔진 그리고 (2) 통합 개발 환경이다. 자바스크립트 엔진은 기본적으로 웹 브라우저에 탑재되어 있으나, 본문은 자바스크립트를 최대한 프로그래밍 언어적인 측면에서 설명하기 위해 백엔드 관점에서 바라본다.

## Node.js
[Node.js](https://ko.wikipedia.org/wiki/Node.js)<sub>([다운로드](https://nodejs.org/ko/))</sub>은 구글에서 개발한 [크롬](https://ko.wikipedia.org/wiki/구글_크롬) 및 [크로미엄](https://en.wikipedia.org/wiki/크로미엄_(웹_브라우저)) 웹 브라우저에 탑재된 [V8](https://ko.wikipedia.org/wiki/V8_(자바스크립트_엔진)) 자바스크립트 엔진을 활용하는 런타임 환경(runtime environment)이다.

> 자바스크립트는 [인터프리트 언어](#인터프리트-언어)이기 때문에 런타임 환경만 있으면 프로그램을 실행하는데 충분하다.

![Node.js 설치 화면](/images/docs/javascript/nodejs_install_startup.png)

Node.js는 "JavaScript everywhere(어디서든 자바스크립트)" 패러다임을 반영하여 웹 브라우저(즉, 클라이언트)로 한정되었던 자바스크립트의 활용도를 서버에서도 사용할 수 있도록 한다. 이는 웹 어플리케이션을 개발하는데 인터페이스와 알고리즘을 동일한 자바스크립트 언어로 구현할 수 있다는 점에서 강력한 장점 중 하나로 작용한다.

### 런타임 환경
> *참고: [What the heck is the event loop anyway? &#124; Philip Roberts &#124; JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)*

Node.js에서 가장 주목할 특징은 [비동기 입출력](https://ko.wikipedia.org/wiki/비동기_입출력)(asynchronous I/O)이 가능한 [이벤트 기반 아키텍처](https://ko.wikipedia.org/wiki/이벤트_기반_아키텍처)(event-driven architecture)라는 점이다. 비록 아래 이미지는 웹 브라우저의 런타임 환경을 시각화하였으나, 브라우저가 자체적으로 제공하는 [Web APIs](https://en.wikipedia.org/wiki/Web_API) 대신에 C 언어로 제작된 [libuv](https://en.wikipedia.org/wiki/Libuv) 라이브러리로 대체하면 바로 Node.js의 런타임 환경이다.

![웹 브라우저 런타임 환경<sub><i>출처: <a href="https://medium.com/@lizfaria/the-javascript-engine-and-runtime-environment-e0ed86fea903">Medium @Liz Faria</a></i></sub>](/images/docs/javascript/browser_runtime_environment.png)

좌측은 자바스크립트 엔진을 의미하며, Node.js 런타임 환경에서는 V8 엔진이 해당한다. 엔진 내부에는 데이터를 저장할 [힙](https://ko.wikipedia.org/wiki/동적_메모리_할당#힙_영역)(heap) 영역 메모리와 자바스크립트 코드를 실행하는 [스택](https://ko.wikipedia.org/wiki/스택) 메모리, 일명 [콜 스택](https://ko.wikipedia.org/wiki/콜_스택)(call stack)을 갖는다. 자바스크립트는 단일 [스레드](/docs/ko.Process#스레드)(thread)만을 사용하기 떄문에 하나의 콜 스택만을 활욯하는데, 스택 구조로 인해 한 코드가 완전히 끝날 때까지 다음 코드로 실행되지 않는 블로킹(blocking)이 작용한다.

자바스크립트는 웹 브라우저에 탑재된 웹 API를 호출하여 함수 및 기능을 사용할 수 있다. 만일 웹 API 중에서 [DOM](https://ko.wikipedia.org/wiki/문서_객체_모델)으로부터 `onClick`, `onLoad`, 그리고 `onDone` 등의 이벤트가 동작하면 인자로써 전달된 [콜백](https://ko.wikipedia.org/wiki/콜백)(callback)이 [큐](https://ko.wikipedia.org/wiki/큐_(자료_구조))(queue)에 대기한다. 자바스크립트 엔진의 콜 스택이 비었으면 대기 중인 콜백을 불러와 실행하는데, 이를 처리하는 요소가 바로 [이벤트 루프](https://ko.wikipedia.org/wiki/이벤트_루프)(event loop)이다. 정리하자면, 자바스크립트는 콜백과 이를 지원하는 런타임 환경 덕분에 비동기 입출력이 가능한 것이다.

## 통합 개발 환경
[통합 개발 환경](https://ko.wikipedia.org/wiki/통합_개발_환경)(integrated development environment; IDE)은 최소한 프로그래밍 언어의 소스 코드 편집, 프로그램 빌드, 그리고 디버깅 기능을 제공하는 소프트웨어 개발 프로그램이다. 자바스크립트 엔진은 자바스크립트 코드를 실행하는 소프트웨어이지만, 자바스크립트 코드 편집기가 아니다. 그러므로 자바스크립트 코드를 편집하고 곧바로 프로그램으로 실행하여 문제가 발생하면 검토할 수 있는 IDE가 절대적으로 필요하다.

### 비주얼 스튜디오 코드
[비주얼 스튜디오 코드](https://code.visualstudio.com/download)(Visual Studio Code; VS Code)는 마이크로소프트에서 개발한 무료 소스 코드 편집기이다. VS Code에는 자바스립트 자동 코드 완성(일명 IntelliSense), 코드 탐색기, 디버거 등이 이미 탑재되어 있어 다른 프로그래밍 언어처럼 별도의 확장도구 설치가 불필요하다.

VS Code에서 자바스크립트를 실행하는 방법에는 두 가지가 존재한다: 디버그 모드(`F5`)와 일반 실행 모드(`Ctrl+F5`)이다. 프로그램에 문제가 발생하여 하나씩 짚어보아야 할 경우 디버깅 모드를 사용하지만, 그렇지 않은 경우에는 일반 실행 모드를 사용할 것을 권장한다. 최초 실행 당시에는 상단에 `Select Environment` 문구가 나타나면 Node.js을 선택하도록 한다.

# 자바스크립트: 기초
각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 자바스크립트 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

> 본문은 [ECMAScript 2015](https://ko.wikipedia.org/wiki/ECMA스크립트), 일명 ES6 스크립트 언어 표준으로부터 소개된 자바스크립트 데이터 및 구문을 기준으로 소개한다.

## 주석
주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. 자바스크립트 프로그래밍 언어에는 두 가지의 주석이 존재하며, 이들은 각각 한줄 주석과 블록 주석이라 부른다.

* **한줄 주석 (line comment)**
    : *코드 한 줄을 차지하는 주석이며, 두 개의 슬래시(`//`)로 표시된다.*

* **블록 주석 (block comment)**
    : *코드 여러 줄을 차지하는 주석이며, 한 쌍의 슬래시와 별표(`/* */`)로 표시된다.*

```js
/*
블록 주석:
코드 여러 줄을 차지하는 주석이다.
*/  
// 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 표현식 및 문장
프로그래밍에서는 표현식과 문장이 있다.

* **[표현식](https://ko.wikipedia.org/wiki/식_(프로그래밍))(expression)**
    : *값을 반환하는 구문적 존재를 가리킨다. 표현식에 대한 결과를 도출하는 것을 평가(evaluate)라고 부른다.*
    
    ```js
2 + 3       // 숫자 5를 반환
2 < 3       // 논리 참을 반환
    ```

* **[문장](https://ko.wikipedia.org/wiki/문_(프로그래밍))(statement)**
    : *실질적으로 무언가를 실행하는 하나의 완전한 코드를 의미한다. 자바스크립트 프로그래밍 언어에서 모든 문장은 문장 종단자(statement terminator)인 세미콜론 `;`으로 마무리 된다. 하지만 이는 강제되지 아니하며, 런타임 도중에 자바스크립트 엔진은 문장의 끝을 자체적으로 판단하여 세미콜론을 자동기입한다 (일명 Automatic Semicolon Insertion; ASI).*

    ```js
let variable = 2 + 3;      // 숫자 5를 "variable" 변수에 초기화
if (2 < 3) statement;      // 논리가 참이면 "statement" 문장 실행
    ```

## 입력 및 출력
자바스크립트는 본래 동적 웹페이지를 제공하기 위해 설계된 스크립트 언어라는 점을 감안해야 한다. 출력의 경우에는 진단을 위한 [로그](https://ko.wikipedia.org/wiki/로그파일)(log) 형식으로 출력이 가능하나, 일반적인 프로그래밍 언어가 갖는 콘솔 입력을 기대할 수 없다. 그러므로 예외적으로 자바스크립트 입력은 Node.js 모듈을 소개한다.

* **입력 함수: `PromptSync.Prompt()`**
    : *입력 함수가 실행될 시, `PromptSync.Prompt()`의 소괄호(`()`) 안에 있는 텍스트가 터미널에 나타나며 Enter/Return을 누를 때까지 대기한다.*

    > 본 함수를 사용하기 위해서는 npm으로부터 `prompt-sync` 모듈을 설치해야 한다. 자세한 내용은 [모듈](#자바스크립트-모듈)(module)에서 설명한다.
    >
    > ```bash
    > npm install prompt-sync
    > ```

* **출력 함수: `console.log()`**
    : *출력 함수가 실행될 시, `console.log()`의 소괄호(`()`) 안에 있는 데이터가 터미널에 나타난다.*

```js
const prompt = require('prompt-sync')();

let variable = prompt("입력: ");
console.log("출력:", variable);
```
```
입력: Hello World!
출력: Hello World!
```

하나의 `console.log()` 함수에서 두 개 이상의 데이터를 한꺼번에 출력하는데 세 가지의 방법이 존재한다.

1. 쉼표(`,`)를 사용하여 연속적으로 데이터를 나열할 수 있지만 쉼표에는 항상 공백이 놓여진다.

   ```js
   let A = 10.0;
   let B = "자바스크립트";
   
   // 텍스트와 숫자의 혼합된 데이터를 쉼표(,)를 사용해 나열한다.
   console.log("A는", A , ", \n그리고 B는", B, "이다.");
   ```
   ```
   A는 10.0 ,
   그리고 B는 자바스크립트 이다.
   ```

2. 더하기 기호(`+`)로 텍스트를 연결에 사용하면 사이에 공백이 생기지 않는다. 텍스트 간에만 사용할 수 있으나, 자바스크립트에서 자동으로 `toString()`을 통해 텍스트로 변환해 준다.

   ```js
   let A = 10.0;
   let B = "자바스크립트";
   
   // 텍스트와 숫자의 혼합된 데이터를 자바스크립트가 자동으로 텍스트로 변환한 이후 나열한다.
   print("A는", A + ", \n그리고 B는", B + "이다.");
   ```
   ```
   A는 10.0,
   그리고 B는 자바스크립트이다.
   ```

3. ES6부터 소개된 [템플릿 리터럴](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)(template literal) <code>&grave; &grave;</code>에서 `${}` 연산자를 통해 원하는 위치에 곧바로 데이터 삽입이 가능하다. 여기서 사용된 기호는 [억음 부호](https://ko.wikipedia.org/wiki/억음_부호)(grave accent)이다.

   ```js
   let A = 10.0
   let B = "자바스크립트"
   
   // 'f' 접두사를 붙여 지정된 위치에 데이터를 텍스트에 그대로 반영시킨다.
   console.log(`A는 ${A}\n그리고 B는 ${B}이다.`)
   ```
   ```
   A는 10.0,
   그리고 B는 자바스크립트이다.
   ```

## 식별자
식별자(identifier)는 프로그램을 구성하는 데이터들을 구별하기 위해 사용되는 명칭이다. 간단히 말해, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. 자바스크립트 언어에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`), 그리고 달러 표시(`$`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 사용할 수 없다.
* 대소문자를 구분한다.

## 변수
변수(variable)는 할당 기호(`=`)를 사용하여 데이터를 할당받을 수 있는 저장공간이다. ECMAScript 2015 이후부터, 자바스크립트에는 세 가지 종류의 변수가 존재한다.

| 변수      | 예시                 | 설명            |
|---------|--------------------|---------------|
| `var`   | `var x = value;`   | 전역 변수         |
| `let`   | `let x = value;`   | 지역 변수         |
| `const` | `const x = value;` | 변경불가 전역/지역 변수, 일명 상수 |

한 번 선언된 변수는 이후 `var`, `let`, 혹은 `const` 키워드를 사용하지 않고 호출된다. 자바스크립트의 변수는 데이터 종류와 상관없이 새로운 데이터를 언제든지 할당받을 수 있다.

### 초기화
초기화(initialization)란, 변수의 첫 데이터 할당(assignment)을 가리키며 일반적으로 정의 과정에서 이루어진다.

```js
// 변수의 초기화
let variable = 1;
```

### 지역 변수 및 전역 변수
자바스크립트에는 전역 변수와 지역 변수라는 개념이 존재한다.

* *지역 변수(local variable)*
    : 함수(function)와 같은 코드 블록 내부에서 정의된 변수이다. 지역 변수에 저장된 데이터는 코드 블록 밖에서는 소멸되므로 외부에서 사용할 수 없다. 그러므로 지역 변수는 외부에서 정의된 변수의 이름을 가질 수 있다.

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
    
* *전역 변수(global variable)*
    : 스크립트 내에서 어떠한 코드 블록에도 속하지 않은 외부에 정의된 변수이다. 단, 변수의 충돌로 인한 예상치 못한 결과와 오류를 방지하기 위해 가급적 전역 변수의 사용은 피하도록 한다.

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
일반적으로 C/C++, 파이썬, 그리고 자바와 같은 프로그래밍 언어는 두 개 이상의 숫자 자료형을 가진다 (예를 들어 `int`, `float` 등). 하지만 자바스크립트는 오로지 하나의 숫자 자료형인 `number`만을 가지며, 이는 정수와 실수 모두 표현할 수 있다.

자바스크립트에는 다음과 같은 숫자 자료형의 산술 연산이 존재한다. 

| 이름  | 연산자 | 설명                      |
|-----|:---:|-------------------------|
| 덧셈  | `+` | -                       |
| 뺄셈  | `-` | -                       |
| 곱셈  | `*` | -                       |
| 나눗셈 | `/` | -                       |
| 나머지 | `%` | 나눗셈에서 몫을 제외한 나머지만 도출한다. |

할당 연산자(assignment operator)는 숫자 자료형에 사용되는 또 다른 연산자이다. 이에 대한 설명은 아래의 도표를 참고한다.

| 연산자  | 예시       | 동일          |
|:----:|----------|-------------|
| `+=` | `x += 1` | `x = x + 1` |
| `-=` | `x -= 1` | `x = x - 1` |
| `*=` | `x *= 1` | `x = x * 1` |
| `/=` | `x /= 1` | `x = x / 1` |
| `%=` | `x %= 1` | `x = x % 1` |

비록 할당 연산자는 아니지만, 이와 유사한 증감 연산자(increment & decrement)는 다음과 같은 표현식을 의미한다.

| 연산자      | 예시        | 설명                |
|----------|-----------|-------------------|
| `++` 접두사 | `x = y++` | `x = y; y = y+1;` |
| `++` 접미사 | `x = ++y` | `y = y+1; x = y;` |
| `--` 접두사 | `x = y--` | `x = y; y = y-1;` |
| `--` 접미사 | `x = --y` | `y = y-1; x = y;` |

### 논리 자료형
논리 자료형(Boolean data type)은 문장이 참인지 거짓인지 판별하는 논리 조건에 사용되는 데이터 유형이다.

| 값       | 이름     | 설명              |
|:-------:|:------:|-----------------|
| `true`  | 논리적 참  | 논리가 참일 때 반환된다.  |
| `false` | 논리적 거짓 | 논리가 거짓일 때 반환된다. |

논리값은 정수 자료형으로도 표현이 가능하며, 정수 0과 그 이외의 정수들은 각각 논리형 `false`와 `true`로 대체된다.

비교 연산자(relational operator)는 두 개의 데이터 관계를 비교하는데 사용되며, 이에 대한 결과로 참(`true`) 혹은 거짓(`false`) 논리값을 반환한다. 비교 연산자는 아래의 도표에서 확인할 수 있다.

| 미만 | 이하 | 동일 | 일치 | 상이 | 이상 | 초과 |
|:----:|:----:|:----:|:---:|:----:|:----:|:----:|
| `<`  | `<=` | `==` | `===` | `!=` | `>=` | `>`  |

여기서 `===` 연산자는 `==` 연산자보다 더욱 엄격하며, 값의 일치 여부와 자료형의 동일성도 함께 확인하다.

논리 연산자(logical operator)는 두 데이터의 논리 연산을 계산한다. 대표적인 논리 연산으로 논리곱, 논리합, 그리고 보수가 있으며, 참(`true`)과 거짓(`false`) 논리값을 각각 이진수의 1과 0으로 간주하면 된다.

| 연산자 | 논리 | 설명                                                |
|:--------:| ----- | ---------------------------------------------------------- |
| `&&`     | 논리곱   | 모든 인수가 참이면 `true`이고, 그렇지 않으면 `false`이다.    |
| `||`     | 논리합    | 하나 이상의 인수가 참이면 `true`이고, 그렇지 않으면 `false`이다. |
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
탈출 문자(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다.

| 줄바꿈  | 탭    | 백슬래시 | 백스페이스 | 작은 따옴표 | 큰 따옴표 |
|:----:|:----:|:----:|:-----:|:------:|:-----:|
| `\n` | `\t` | `\\` | `\b`  | `\'`   | `\"`  |

# 자바스크립트: 조건 및 루프
조건문(conditional statement) 및 반복문(loop statement)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 자바스크립트 프로그래밍의 조건에 따라 실행하는 조건문과 반복적으로 실행하는 반복문을 소개한다.

## `if` 조건문
`if` 조건문은 조건 혹은 논리값이 참(`true`)일 경우 코드를 실행한다. 반대로 거짓(`false`)일 경우에는 코드를 수행하지 않는다.

```js
if (condition)
{
    statements;
}

// 간략화된 문장
if (condition) statement;
```

`if` 조건문 안에 또 다른 `if` 조건문을 넣을 수 있는데 이를 *네스티드(nested)* `if` 조건문이라고 부른다. 코드 블록(`{}`)을 사용하여 서로 다른 `if` 조건문들의 경계를 명확히 구별하기를 권장한다.

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
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 실행문에는 조건부가 `false`로 평가되었을 경우 호출되는 코드를 포함한다.

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
`else if` 조건문은 `else`와 `if` 조건문의 조합으로 이전 조건이 거짓이면 새로운 조건을 제시한다.

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

### 조건 연산자
조건 연산자(ternary operator; `?:`)는 세 가지 인수만을 사용하여 조건문을 아래와 같이 간략히 표현할 수 있다.

```js
condition ? true_return : false_return;
```

조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에는 유용하다.

## `switch` 조건문
`switch` 조건문은 인자를 `case` 키워드에서 제공하는 값과 일치하는지 비교하며, 참일 경우 코드를 실행한다. 참 조건 실행 이후, 더 이상의 조건 평가를 방지하기 위해 모든 `case` 키워드에는 `break`라는 탈출문이 필요하다.

어떠한 경우에도 부합하지 않으면 `default` 키워드에 연동된 문장이 실행되며, `switch` 조건문에는 반드시 있어야 한다. 그러나 `case` 키워드와 달리 `break` 탈출문을 필요로 하지 않는다.

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
`break` 문(일명 탈출문)은 반복문을 조기 종료시키는데 사용된다. 반복 실행 도중에 탈출문을 마주치는 즉시 가장 인접한 반복문으로부터 탈출한다.

### `continue` 문
`continue` 문은 반복문의 나머지 실행문을 전부 건너뛰어 다시 반복문의 조건부로 돌아간다. `break`와 달리 반복문은 종료되지 않고 여전히 살아있다.

## `while` 반복문
`while` 반복문은 조건 혹은 논리값이 참(`true`) 동안 내부 코드를 반복적으로 실행한다. 반대로 거짓(`false`)일 경우에는 반복문을 종료한다.

```js
while (condition)
{
    statements;
}

// 간략화된 문장
while (condition) statement;
```

### `do`-`while` 반복문
`do`-`while` 반복문은 `while` 반복문과 유사하지만 다르다: 후자는 조건을 먼저 확인하고 문장을 실행하였으면, 전자는 문장을 우선 실행하고 조건을 확인한다.

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
배열(array)은 동일한 자료형의 데이터를 일련의 순서로 담는 저장공간이다. 배열을 정의할 시, 대괄호(`[]`) 안에는 얼마나 많은 데이터를 담을 수 있는지 용량을 정해야 한다.

```js
/* 배열 선언 */
var arr = [value1, value2, value3];
```

배열은 `Array()` 생성자(constructor)와 괄호 안에 요소에 할당될 데이터를 입력하므로써 생성 및 초기화될 수 있다.

```js
/* 배열 선언: Array 생성자 사용 */
var arr = new Array(value1, value2, value3);
```

`Array()` 생성자에 단 하나의 정수만을 입력하여 크기만 존재하는 빈 배열을 생성할 수 있다. 하지만 자바스크립트의 배열은 항상 동적, 즉 크기를 언제든지 변경할 수 있어 무의미한 절차이다.

```js
/* 크기 3의 빈 배열 선언 */
var arr1 = new Array(3);

/* 크기 0의 빈 배열 선언 */
var arr2 = new Array();
var arr3 = [];
```

### 전개 연산자
전개 연산자(spread operator; `...`)는 배열의 접두부에 위치시켜, 하나의 배열 자체를 반환하는 게 아닌 배열 내의 모든 요소들을 전개하여 한꺼번에 반환한다.

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
배열의 구조 분해(array destructuring)는 배열의 요소들들 각 변수에 순서대로 할당하는 작업을 의미한다. 

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

### 매개변수 및 전달인자
다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* 전달인자 (argument)
    : *전달인자, 혹은 간략하게 "인자"는 함수로 전달되는 데이터이다.*

* 매개변수 (parameter)
    : *매개변수는 전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수의 정의은 함수의 소괄호(`()`) 내에서 이루어진다.*

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 | 구문          | 설명                                                            |
|:---:|:-----------:|---------------------------------------------------------------|
| `=` | `arg=value` | 매개변수에 전달인자가 없으면 기본값 `value`가 대신 반환된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |

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
프로그래밍 방법 중 하나인 객체지향 프로그래밍(object-oriented programming; OOP)은 함수 대신 클래스와 객체 사용을 기반으로 한다. 본 장은 자바스크립트에서 객체지향 프로그래밍을 구현하기 위한 사용자 정의 객체의 생성 및 사용 방법에 대하여 소개한다.

## 객체
이전 장에서 (데이터를 저장할 수 있는) 변수와 (데이터를 처리 할 수 있는) 함수를 소개하였다. 객체(object 혹은 instance)는 이러한 변수와 함수를 하나의 데이터로 캡슐화한 데이터이다.

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

### 속성 및 메소드
속성(property)과 메소드(method)는 객체에 캡슐화된 변수와 함수를 의미하며 아래와 같은 방법으로 접근한다.

| 객체 구성요소 | 구문                                            |
|:-------:|-----------------------------------------------|
| 속성      | `instance.property` 혹은 `instance["property"]` |
| 메소드     | `instance.method()`                           |

### 사용자 정의 객체
개발자는 직접 객체를 정의하여 사용할 수 있다.

메소드가 객체 내의 속성이나 또 다른 메소드를 접근하기 위해서는 `this` 키워드를 사용해야 한다. 이는 객체 스스로를 가리키는 연산자로, 해당 키워드 없이는 인터프리터는 변수로 인식한다.

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
클래스(class)는 객체를 생성하는데 사용된다. 클래스는 `class` 키워드를 사용하여 정의되며, 클래스 내부에는 객체의 속성과 메소드가 되는 변수와 함수를 정의한다. 아래는 `class` 키워드를 사용하여 제작한 사용자 정의 클래스의 간단한 예시 중 하나이며, 변수 및 함수와의 유사성을 확인할 수 있다.

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

클래스를 통해 객체를 생성, 즉 객체화(instantiation)하려면 `new` 키워드를 사용한다. 아래는 하나의 클래스로 두 개 이상의 객체를 생성하는 예시 코드이다.

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
생성자(constructor) 메소드는 객체를 생성하는데 필요한 가장 중요한 메소드이다. 해당 메소드는 클래스에서 객체를 만들 때 자동으로 호출되며 객체 초기화에 필요한 인수의 수를 결정한다.

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
정적 메소드(static method)는 객체화없이 클래스에서 바로 호출할 수 있는 메소드이며, `static` 키워드로 선언된다. 그러나 객체는 정적 메소드를 접근할 수 없다. 다시 말해, 정적 메소드는 단순히 클래스에 속해있는 일반 함수와 동일하게 취급하면 된다.

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

이를 통해 `CLASS.property` 속성을 직접 호출하지 않고 데이터 할당과 반환 메소드를 개별적으로 정의하므로써, 속성을 더욱 유동적으로 접근 및 관리할 수 있다.

## 클래스 표현식
클래스 표현식(class expression)은 이름없는 클래스를 정의하는 동시 객체를 선언하는 표현식이다. `new` 연산자 없이도 객체화가 되어 코드가 간략화되지만, 단 하나의 객체만 정의할 수 있는 단점을 가진다.

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
객체형(object type)은 객체를 생성하는 함수를 가리킨다. 이는 클래스와 매우 유사하며, 객체형은 함수 자체가 생성자 메소드 역할을 한다.

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
상속(inheritance)은 기반 클래스(base class)가 그로부터의 파생 클래스(derived class)에게 속성과 메소드를 제공하는 행위이다. 기반 클래스와 파생 클래스 둘 다에 동일한 이름의 속성과 메소드가 존재하는 경우, 기반 클래스의 속성과 메소드는 파생 클래스에 의해 묻힌다.

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

# 자바스크립트: 패키지
기존의 자바스크립트는 웹페이지에 자그만한 상호작용 요소를 입히는 게 주된 목적이었다. 현재는 거의 모든 웹사이트 페이지에 들어가며 어플리케이션 제작에도 사용되는 등 활용도가 광범위하다. 방대해진 자바스크립트로부 코드 일부분을 기능성 모듈(module)로 분할하여 필요에 따라 언제든지 불러올 수 있는 매커니즘이 요구되기 시작하였다. 본 장에서는 자바스크립트로 모듈을 내보내거나 불러오는 방법에 대하여 소개한다.

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
`export` 문은 모듈에서 내보내고 싶은 데이터 및 기능을 지정하는데 사용한다. 모듈에서 코드를 내보내는 방법에는 두 종류가 존재한다: 네임드(named)와 기본(default) 내보내기가 있다.

```js
/* 네임드 내보내기 */
export variableName;               // 단일 네임드 내보내기
export { arrayName, functionName}; // 다중 네임드 내보내기

/* 기본 내보내기 */
export default objectName;
```

이를 하나의 `export` 문으로 표현하려면 다음과 같이 작성하도록 한다.

```js
/* 기본 및 네임드 내보내기 */
export { objectName as default, variableName, arrayName, functionName };
```

네임드 내보내기는 여러 데이터를 내보낼 수 있으나, 기본 내보내기는 오로지 하나만 지정할 수 있다. 특히 기본 내보내기는 모듈에서 해당 데이터 혹은 기능을 불러올 때 식별자 지정이 자유롭다. 이에 대한 내용은 `import` 문에서 다시 설명할 예정이다.

네임드 내보내기 또한 식별자 충돌을 방지하기 위해 별칭을 사용해 내보낼 수 있다.

```js
/* 별칭 네임드 내보내기 */
export { variableName as aliasName1, functionName as aliasName2 }
```

### 내보내기 시 정의
`export` 문으로 내보낼 데이터 및 기능은 미리 정의가 되어야 할 필요는 없다. 내보내는 단계에서 바로 정의하여 내보낼 수 있다. 아래는 각각 네임드 및 기본 내보내기 시 데이터를 정의하는 방법을 보여준다.

```js
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

```js
/* 모둘에서 불러온 데이터 및 기능 그대로 다시 내보내기 */
export { data1 as default, data2 as aliasName } from "./sample.js"
```

위의 코드는 `./sample.js`에서 불러온 `data1`을 기본 내보내기, 그리고 `data2`를 `aliasName`이란 별칭으로 내보낸다.

## `import` 문
`import` 문은 모듈에서 `export` 된 데이터 및 기능을 불러오는데 사용된다. 모듈에서 네임드(named)와 기본(default) 내보내기에 대한 불러오는 방법이 약간 다르다. `./module.js`에서 다음과 같이 데이터 및 기능을 내보냈다고 가정한다.

```js
export { objectName as default, variableName as exportName, arrayName, functionName };
```

이에 대한 네임드 및 기본 불러오기는 다음과 같다.

```js
/* 네임드 불러오기 */
import { exportName, arrayName, functionName } from "./module.js";

/* 기본 불러오기 */
import defaultName from "./module.js";
```

이를 하나의 `import` 문으로 표현하려면 다음과 같이 작성한다.

```js
/* 기본 및 네임드 내보내기 */
import defaultName, { exportName, arrayName, functionName } from "./module.js";
```

여기에서 네임드와 기본 내보내기/불러오기의 차이점이 명확해진다: 네임드 내보내기 데이터 및 기능들을 불러올 때에는 정의될 때의 식별자 혹은 그에 해당하는 별칭으로 불어와야 한다. 그러나 기본 내보내기는 이와 별개로 불러오는 과정에서 `defaultName`처럼 아무런 변수 식별자를 사용할 수 있으며, 자동적으로 `objectName`이 해당 변수로 할당된다.

`export` 문에서 별칭을 지정할 수 있듯이, `import` 문에서도 불러온 데이터 및 기능에 별칭을 지정할 수 있다.

```js
import { exportName as aliasName1, functionName as aliasName2 } from "./module.js";
```

### 전부 불러오기
`import` 문으로 불러오고 싶은 데이터 및 기능을 하나씩 명시하지 않고서도 한꺼번에 전부 가져올 수 있다.

```js
/* 네임드 전부 불러오기 */
import * as moduleName from "./module.js";
```

여기서 `moduleName`은 네임스페이스(namespace)로, 모듈에서 불러온 데이터 및 기능들은 네임스페이스를 거쳐 호출하게 된다. 만일 모듈 내 함수를 사용하려면 `moduleName.functionName()`라고 호출해야 한다.

하지만 위의 명령어는 네임드에만 적용이 가능하며, 기본 데이터도 함께 `moduleName` 네임스페이스에 포함시키려면 다음과 같이 코드를 입력한다.

```js
/* 기본 및 네임드 전부 불러오기 */
import defaultName, * as moduleName from "./module.js";
```

# 자바스크립트: DOM
자바스크립트는 HTML 및 CSS와 함께 사용하여 다양한 기능을 제공하는데 기여한다. 선언형 언어인 HTML은 아래와 같이 트리 구조(tree structure)의 문서 객체 모델(Document Object Model; DOM)로 문서를 표현한다.

![문서 객체 모델 <sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg">위키미디어</a></i></sub>](/images/docs/javascript/js_html_dom.png)

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

| 메소드                                      | 설명                                                  |
|------------------------------------------|-----------------------------------------------------|
| `getElementById("ID")`                   | `ID`란 아이디를 가진 요소를 접근한다.                             |
| `getElementsByClassName("CLASS")[index]` | `CLASS`란 클래스를 가진 `index` 번째 요소를 접근한다 (JS의 클래스가 아님). |
| `getElementsByTagName("DIV")[index]`     | `DIV` 태그를 가진 `index` 번째 요소를 접근한다.                   |

여기서 `document.getElementById()`만 배열 형식이 아닌 이유는 아이디는 DOM 내에서 하나의 요소에만 할당할 수 있는 유일성을 지녔기 때문이다.

이렇게 선택된 요소는 아래의 속성을 통해서 해당 요소의 부모, 자식, 혹은 형제 노드를 선택할 수도 있다.

| 속성                | 구문                     | 설명                                            |
|-------------------|------------------------|-----------------------------------------------|
| `parentNode`      | `node.parentNode`      | `node`의 부모 노드를 호출한다.                          |
| `childNodes`      | `node.childNodes[0]`   | `node`의 0 번째 자식 노드를 호출한다.                     |
| `firstChild`      | `node.firstChild`      | `node`의 첫 자식 노드를 호출한다.                        |
| `lastChild`       | `node.lastChild`       | `node`의 마지막 자식 노드를 호출한다.                      |
| `hasChildNodes`   | `node.hasChildNodes`   | `node`가 자식 노드를 가지면 `true`, 아니면 `false`를 반환한다. |
| `nextSibling`     | `node.nextSibling`     | `node`의 다음 형제를 호출한다.                          |
| `previousSibling` | `node.previousSibling` | `node`의 이전 형제를 호출한다.                          |

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

| 메소드                        | 설명                                                   |
|----------------------------|------------------------------------------------------|
| `createElement("DIV")`     | `DIV` 요소를 생성하지만, 아직 DOM 내에는 위치하지 않은 상태이다.            |
| `createTextNode("String")` | `String` 텍스트를 가진 노드를 생성하지만, 아직 DOM 내에는 위치하지 않은 상태이다. |

생성된 요소는 도표에서 설명한 대로 아직 DOM 어딘가에도 속하지 않은 상태이므로 웹사이트에 표시되지 않는다. 웹사이트에 나타나게 하기 위해서는 DOM에 추가해야 한다.

### 요소 추가 및 제거
DOM에 요소를 추가하는 방법은 다음과 같다:

| 메소드                         | 설명                                                |
|-----------------------------|---------------------------------------------------|
| `appendChild(node)`         | `node`를 현재 노드의 자식 노드로 둔다.                         |
| `insertBefore(node1,node2)` | `node1`을 현재 노드의 자식 노드로 두지만, `node2` 다음 형제로 위치시킨다. |
| `insertAfter(node1,node2)`  | `node1`을 현재 노드의 자식 노드로 두지만, `node2` 이전 형제로 위치시킨다. |

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

이벤트를 실행하는 방법에는 몇 가지가 존재한다. 그 중 하나는 HTML 소스 코드에 요소들이 어떠한 이벤트를 인식할지 미리 지정해 두는 것이다.

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

* 캡쳐링 (capturing)
  : *DOM 트리 구조에서 상위 노드에서 하위 노드 순서로 내려간다 (`<DIV>` 먼자, `<SPAN>` 이후).*
* 버블링 (bubbling)
  : *DOM 트리 구조에서 하위 노드에서 상위 노드 순서로 올라간다 (`<SPAN>` 먼자, `<DIV>` 이후).*

이러한 이벤트 전파는 `addEventListener()` 메소드에서 `useCapture` 논리형 매개변수를 통해 설정할 수 있다. 기본적으로 `usvCapture = faluse`로 버블링이 설정되어 있다.

| 예시                                                                   |
|:--------------------------------------------------------------------:|
| `elem.addEventListener("click",funcName,useCapture)`                 |
| `useCapture`는 논리 자료형을 받는 매개변수로, `true`이면 캡쳐링이고 `false`이면 버블링으로 설정된다. |

## 반복 실행
자바스크립트는 하나의 함수를 일정 주기에 맞춰 반복적으로 실행하도록 할 수 있으며, 이는 `setInterval` 및 `clearInterval` 쌍으로 구현할 수 있다.

| 함수                | 예시                               | 설명                                                   |
|-------------------|----------------------------------|------------------------------------------------------|
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
