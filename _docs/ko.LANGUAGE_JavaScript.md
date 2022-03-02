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

![VS Code에서 파이썬 3 작업 환경 예시](/images/docs/javascript/js_vscode_example.png)

VS Code에서 자바스크립트를 실행하는 방법에는 두 가지가 존재한다: 디버그 모드(`F5`)와 일반 실행 모드(`Ctrl+F5`)이다. 프로그램에 문제가 발생하여 하나씩 짚어보아야 할 경우 디버깅 모드를 사용하지만, 그렇지 않은 경우에는 일반 실행 모드를 사용할 것을 권장한다. 최초 실행 당시에는 상단에 `Select Environment` 문구가 나타나면 Node.js을 선택하도록 한다.

# 자바스크립트: 기초
각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 자바스크립트 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

> 본문은 [ECMAScript 2015](https://ko.wikipedia.org/wiki/ECMA스크립트), 일명 ES6 스크립트 언어 표준으로부터 소개된 자바스크립트 데이터 및 구문을 기준으로 소개한다.

## 주석
주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. 자바스크립트 프로그래밍 언어에는 두 가지의 주석이 존재하며, 이들은 각각 한줄 주석과 블록 주석이라 부른다.

* **한줄 주석 (line comment)**: 코드 한 줄을 차지하는 주석이며, 두 개의 슬래시(`//`)로 표시된다.
* **블록 주석 (block comment)**: 코드 여러 줄을 차지하는 주석이며, 한 쌍의 슬래시와 별표(`/* */`)로 표시된다.

```javascript
/*
블록 주석:
코드 여러 줄을 차지하는 주석이다.
*/  
// 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 표현식 및 문장
프로그래밍에서는 표현식과 문장이 있다.

* **[표현식](https://ko.wikipedia.org/wiki/식_(프로그래밍))(expression)**

    값을 반환하는 구문적 존재를 가리킨다. 표현식에 대한 결과를 도출하는 것을 평가(evaluate)라고 부른다.
    
    ```javascript
  2 + 3       // 숫자 5를 반환
  2 < 3       // 논리 참을 반환
    ```

* **[문장](https://ko.wikipedia.org/wiki/문_(프로그래밍))(statement)**

    실질적으로 무언가를 실행하는 하나의 완전한 코드를 의미한다. 자바스크립트 프로그래밍 언어에서 모든 문장은 문장 종단자(statement terminator)인 세미콜론 `;`으로 마무리 된다. 하지만 이는 강제되지 아니하며, 런타임 도중에 자바스크립트 엔진은 문장의 끝을 자체적으로 판단하여 세미콜론을 자동기입한다 (일명 Automatic Semicolon Insertion; ASI).

    ```javascript
  variable = 2 + 3;          // 숫자 5를 "variable" 변수에 초기화
  if (2 < 3) statement;      // 논리가 참이면 "statement" 문장 실행
    ```

## 입력 및 출력
자바스크립트는 본래 동적 웹페이지를 제공하기 위해 설계된 스크립트 언어라는 점을 감안해야 한다. 출력의 경우에는 진단을 위한 [로그](https://ko.wikipedia.org/wiki/로그파일)(log) 형식으로 출력이 가능하나, 일반적인 프로그래밍 언어가 갖는 콘솔 입력을 기대할 수 없다. 그러므로 예외적으로 자바스크립트 입력은 Node.js 모듈을 소개한다.

* **입력 함수 `PromptSync.Prompt()`**
    
    입력 함수가 실행될 시, `PromptSync.Prompt()`의 소괄호 `()` 안에 있는 텍스트가 터미널에 나타나며 Enter/Return을 누를 때까지 대기한다.

    > 본 함수를 사용하기 위해서는 npm으로부터 [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) 모듈을 설치해야 한다. 자세한 내용은 [모듈](#자바스크립트-모듈)(module)에서 설명한다.
    >
    > ```bash
    > npm install prompt-sync
    > ```

* **출력 함수 `console.log()`**

    출력 함수가 실행될 시, `console.log()`의 소괄호 `()` 안에 있는 데이터가 터미널에 나타난다.

```javascript
// "prompt-sync" 모듈을 불러오는 절차이다.
const prompt = require('prompt-sync')();

variable = prompt("입력: ");
console.log("출력:", variable);
```
```
입력: Hello World!
출력: Hello World!
```

하나의 `console.log()` 함수에서 두 개 이상의 데이터를 한꺼번에 출력하려면 쉼표(`,`)를 사용하여 연속적으로 데이터를 나열할 수 있다. 단, 각 쉼표가 위치한 곳에는 항상 공백이 놓여진다. 그 외의 다른 방법은 [문자열 자료형](#문자열-자료형)을 설명하는 부분에서 소개한다.

```javascript
A = 10.0;
B = "자바스크립트";

// 텍스트와 숫자의 혼합된 데이터를 쉼표(,)를 사용해 나열한다.
console.log("A는", A , ",\n그리고 B는", B, "이다.");
```
```
A는 10.0 ,
그리고 B는 자바스크립트 이다.
```

## 식별자
[식별자](https://ko.wikipedia.org/wiki/식별자#컴퓨터_언어)(identifier)는 프로그램을 구성하는 데이터들을 구별하기 위해 사용되는 명칭이다. 즉, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. 자바스크립트에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`), 그리고 달러 표시(`$`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 허용되지 않는다.
* 대소문자를 구분한다.

## 변수
변수(variable)는 할당 기호(`=`)를 사용하여 데이터를 할당(assignment)받을 수 있는 저장공간이다. 아래 예시는 `variable`이란 식별자를 갖는 변수에 숫자 3을 할당한다. 시스템적 관점에서 바라보면 `variable`이란 이름에 숫자 3이란 데이터를 엮는 절차를 [네임 바인딩](https://ko.wikipedia.org/wiki/네임_바인딩)(name binding)이라고 하며, 비로서 해당 식별자가 변수로 "정의(definition)"되었다고 한다.

```javascript
// 변수 "variable"의 정의
variable = 3;
```

자바스크립트의 변수는 반드시 네임 바인딩으로부터 정의되어야 한다. 즉, 아무런 데이터 할당이 없으면 인터프리터는 식별자를 변수로 간주하지 않아 오류가 발생한다.

```javascript
variable;
console.log(variable);
```
```
Uncaught ReferenceError: variable is not defined
```

> 본 내용은 가장 근본된 자바스크립트의 변수 정의이다. 이후 ES6에서는 새로운 변수 유형 세 개를 소개하였으며, 이들과 구분짓기 위해 해당 변수를 "선언 생략형"이라 칭한다.

거의 모든 프로그래밍 언어는 할당 기호를 기준으로 왼쪽에는 피할당자(변수), 오른쪽에는 할당자(데이터 혹은 변수)가 위치한다. 반대로 놓여질 경우, 오류가 발생하거나 원치 않는 결과가 도출될 수 있다.

자바스크립트의 변수는 데이터 종류와 상관없이 새로운 데이터를 언제든지 할당받을 수 있다.

```javascript
variable = 3;
variable = "Hello World!";
console.log(variable);
```
```
Hello World!
```

### 유효범위
[유효범위](https://developer.mozilla.org/en-US/docs/Glossary/Scope)(scope)란, 현재 실행되는 코드로부터 값 또는 표현식이 가시적이거나 참조가 가능한 문맥을 가리킨다. 간단히 말해, 변수는 유효범위 내에서만 접근이 가능하며 벗어날 시에는 사용불가하다. 자바스크립트에는 총 세 가지의 유효범위가 존재한다.

| 유효범위 | ES6 추가 | 설명 |
|:-----:|:--:|------|
| 블록 | ○ |  [코드 블록](https://ko.wikipedia.org/wiki/블록_(프로그래밍)) (code block) `{}` 내부에 정의/선언된 변수는 해당 코드 블록 어디서든 사용될 수 있다. |
| 함수 | - | [함수](#자바스크립트-함수)(function) `function` 내부에 코드 블록 `{}` 여부 상관없이 정의/선언된 변수는 해당 함수 어디서든 사용될 수 있다. |
| 전역 | - | 함수 `function` 외부에 코드 블록 `{}` 여부 상관없이 정의/선언된 변수는 해당 자바스크립트 프로그램 어디서든 사용될 수 있다. |

> ES6 이전의 자바스크립트는 함수와 전역 범위만 존재하였으며, 비록 소스 코드 문장을 그룹화시키는 요소인 코드 블록이 있어도 별도의 범위로 구분하지 않았다.

자바스크립트의 선언 생략형 변수는 항상 전역 범위(global scope)이다.

* **웹 브라우저**: 현 웹페이지에 연관된 모든 자바스크립트가 브라우저 창에 대한 `window` 전역 객체를 통해 공유된다.

    ```javascript
  /* 웹 브라우저 */
  variable = "Hello World!";
  console.log(window.variable);    // 출력: Hello World!
    ```

* **Node.js**: 실행되고 있는 자바스크립트 파일, 일명 [모듈](#자바스크립트-모듈)(module)에서만 `global` 전역 객체를 통해 모듈 내에서만 데이터가 공유된다.

    ```javascript
  /* Node.js */
  variable = "Hello World!";
  console.log(global.variable);    // 출력: Hello World!
    ```

이러한 차이점은 브라우저의 경우에 웹페이지 HTML이 중심이 되어 여러 자바스크립트 파일들을 `<script>` 태그로 불러와 마치 하나처럼 실행하는 반면, Node.js는 하나의 자바스크립트 파일이 중심이 되어 실행되는 게 원인으로 볼 수 있다. 타 변수와 중복된 이름을 가진다면 예상치 못한 결과와 오류가 발생할 수 있어 가급적 전역 변수의 사용은 피하도록 한다.

### 변수 선언문
ES6부터는 새로운 방식의 바인딩이 소개되어 식별자 앞단에 특정 키워드를 기입하는 것만으로 변수로 "선언(declaration)"한다. 선언된 변수는 자동으로 `undefined`(즉, 아직 정의되지 않음)으로 네임 바인딩되지만, 선언 당시에 개발자가 직접 값을 할당하는 작업을 "초기화(initialization)"라고 일컫는다. 아래는 ES6에서 추가된 세 가지 변수 유형을 지정하는 선언문이다.

* **`let` 선언문**

    블록 유효범위의 지역 변수(local variable)로 작용하며, 코드 블록 외부에서는 바인딩된 데이터가 소멸되어 더 이상 변수로써 사용할 수 없다. 지역 변수의 특징을 활용하면 코드 블록 외부에서 선언된 변수 이름을 그대로 가져와 코드 블록 내부에서 동일한 이름이지만 전혀 다른 존재의 변수를 새롭게 선언할 수 있다.

    ```javascript
  let x = 3;
  let y;

  /* 코드 블록 내부 */
  {
      x = 7;
      let y = "Hello World!";
      let z = true;
      
      console.log("x:", x);    // x: 7
      console.log("y:", y);    // y: Hello World!
      console.log("z:", z);    // z: true
  }

  console.log("x:", x);        // x: 7
  console.log("y:", y);        // y: undefined
  console.log("z:", z);        // ReferenceError: z is not defined
    ```

* **`const` 선언문**

    블록 유효범위의 지역 상수(local constant)로 작용하며, 코드 블록 외부에서는 바인딩된 데이터가 소멸되어 더 이상 상수로써 사용할 수 없다. 여기서 상수는 한 번 초기화된 이후에는 변경이 불가하므로, 선언과 동시에 반드시 초기화를 해주어야 한다.

    ```javascript
  /* "const" 변수의 잘못된 사용법 */
  const x;                     // SyntaxError: Missing initializer in const declaration
  x = "Hello World!";          // TypeError: Assignment to constant variable
    ```

* **`var` 선언문**

    해당 선언문은 두 가지 경우의 수가 있다:

    1. 함수 내부에 선언될 시 함수 유효범위의 지역 변수(local variable)
    2. 함수 외부에 선언될 시 전역 유효범위의 전역 변수(global variable)
    
    > [유효범위](#유효범위)(scope)에서 언급한 바에 따르면 Node.js의 전역 변수는 실행되는 자바스크립트 모듈 내에서 한정된다. 심지어 Node.js의 전역 객체 `global`의 속성과 연동되지 않는 점에서, 오히려 모듈 유효범위의 지역 변수라고 표현하는 게 적합하다.
    >
    > ```javascript
    > /* Node.js */
    > var variable = "Hello World!";
    > console.log(global.variable);    // 출력: undefined
    > ```

    변수 중에서 유일하게 선언 [호이스팅](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#variable_hoisting)(hoisting)을 지원한다. 즉, 변수를 선언하기 전에 미리 할당 및 호출되어 사용될 수 있다는 의미이다.

    ```javascript
  /* 변수 호이스팅 예시 */
  variable = "Hello World!";
  var variable;

  /* 동일:
  var variable;
  variable = "Hello World!";
  */
    ```

### `delete` 키워드
`delete` 키워드는 식별자에 바인딩된 데이터를 해제, 즉 변수의 정의를 무효화할 때 사용한다. 차후 동일한 식별자로 변수를 다시 정의할 수 있다.

> 단, `var` 선언문의 변수만이 유일하게 적용되지 않으며, 그 이유로 변수 호이스팅과 연관이 있는 것으로 판단된다.

```javascript
// 변수 "variable"의 정의
variable = "Hello World!";
console.log(variable);

// 변수 "variable" 네임 바인딩 해제
delete variable;
console.log(variable);
```
```
Hello World!
Uncaught ReferenceError: variable is not defined
```

## 자료형
[자료형](https://ko.wikipedia.org/wiki/자료형)(data type)은 데이터의 내용물이 어떻게 표현되는지 결정하는 요소이며, 자바스크립트에서는 자료형이 크게 세 유형으로 나뉘어진다:

### 숫자 자료형
숫자 자료형(number type)은 소수점을 포함한 64비트 실수를 표현하는 자료형이다.

자바스크립트 숫자 자료형들은 산술 연산이 가능하다: 가장 기본적인 `+`, `-`, `*`, `/` 사칙 연산자부터 나눗셈의 나머지 `%` 그리고 제곱 `**`을 구할 수 있다. 산술 연산을 쉽게 읽을 수 있도록 숫자와 산술 연산자 사이에 공백을 넣어도 연산에는 아무런 영향을 주지 않으므로 무관한다.

할당 연산자(assignment operator)는 할당 기호(`=`)와 조합하여 산술 연산 코드를 더욱 간결하게 작성할 수 있도록 한다.

| 연산자 | 예시     | 동일                                          |
| :----: |--------| --------------------------------------------- |
|  `=`   | `x = y`  | `x = y`; `x` 변수에 `y` 변수의 값을 할당한다. |
|  `+=`  | `x += y` | `x = x + y`                                   |
|  `-=`  | `x -= y` | `x = x - y`                                   |
|  `*=`  | `x *= y` | `x = x * y`                                   |
|  `/=`  | `x /= y` | `x = x / y`                                   |
|  `%=`  | `x %= y` | `x = x % y`                                   |

> 여기서 `=` 연산자가 할당된 값을 반환한다는 것을 통해 다음과 같은 표현식을 구현할 수 있다.
>
> ```javascript
> var variable;
> console.log(variable = 3);
> ```
> ```
> 3
> ```

증가 연산자(increment operator) 및 감소 연산자(decrement operator)는 데이터를 1만큼 증가 혹은 감소하는데 간략하게 한 줄로 표현할 수 있도록 한다.

| 연산자      | 예시        | 설명                |
|----------|-----------|-------------------|
| `++` 접두사 | `x = y++` | `x = y; y = y + 1;` |
| `++` 접미사 | `x = ++y` | `y = y + 1; x = y;` |
| `--` 접두사 | `x = y--` | `x = y; y = y - 1;` |
| `--` 접미사 | `x = --y` | `y = y - 1; x = y;` |

### 논리 자료형
논리 자료형(Boolean type)은 문장이 참인지 거짓인지 판별하는 논리 조건에 사용되는 데이터 유형이다.

* **논리적 참 `true`**: 논리가 참일 때 반환된다; 숫자 0이 아닌 정수로 대체 가능하다.
* **논리적 거짓 `false`**: 논리가 거짓일 때 반환된다; 숫자 0으로 대체 가능하다.

대표적인 논리 조건으로써 두 데이터를 대조하는 [비교 연산자](https://docs.python.org/3/library/stdtypes.html?#comparisons)(relational operator)가 있다: 초과 `>`와 미만 `<`, 이상 `>=`과 이하 `<=`, 그리고 동일 `==`와 다름 `!=` 관계 부합 여부에 따라 논리적 참 혹은 거짓이 반환된다. 자바스크립트는 `===` 연산자를 갖는 소수의 프로그래밍 언어 중 하나이며, 값 뿐만 아니라 자료형의 일치 여부도 확인한다.

논리 연산자(logical operator)는 논리 자료형의 조합이 논리적으로 참인지 거짓인지 판별한다.

| 연산자  | 논리  | 설명                                        |
|:----:|-----|-------------------------------------------|
| `&&` | 논리곱 | 모든 데이터가 참이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.     |
| `||` | 논리합 | 하나 이상의 데이터가 참이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다. |
| `!`  | 보수  | 참을 거짓으로, 또는 거짓을 참으로 변경한다.                 |

### 문자열 자료형
문자열 자료형(string type)은 한 쌍의 작은 따옴표(`''`) 또는 큰 따옴표(`""`)로 구별되는 텍스트 데이터이다. 자바스크립트에서 문자열 자료형 데이터는 일반적으로 문자열 객체(string object)라고 부른다. 

텍스트에 따옴표를 넣으려면 해당 따옴표 앞에 백슬래시(`\`)를 배치하여 문자열이 도중이 끊기는 현상을 방지한다.

```javascript
/* 문자열 작성의 부적절한 예시와 적절한 예시의 비교. */
console.log('Where's my "Cat in the Hat" book?');
console.log('Where\'s my "Cat in the Hat" book?');
```
```
Where
Where's my "Cat in the Hat" book?
```

문자열 객체는 다른 데이터와 더하기 기호(`+`)를 통해 공백없이 하나의 문자열로 연결할 수 있다. 원래는 문자열 간에만 사용할 수 있으나, 자바스크립트가 자동으로 숫자 및 논리 자료형 등을 문자열로 변환해 준다. 그 외에도 ES6부터 추가된 한 쌍의 [억음 부호](https://ko.wikipedia.org/wiki/억음_부호)로 표시되는 [템플릿 리터럴](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)(template literal) <code>&grave;&grave;</code>에서 `${}` 연산자를 통해 원하는 위치에 곧바로 데이터 삽입이 가능하다.

```javascript
A = 10.0;
B = "자바스크립트";

/* 문자열 연결 */
console.log("A는", A + ",\n그리고 B는", B + "이다.");

/* 템플릿 리터럴 */
console.log(`A는 ${A},\n그리고 B는 ${B}이다.`);
```
```
A는 10.0,
그리고 B는 자바스크립트이다.
```

차후에 설명할 예정이지만, [객체](#자바스크립트-객체)(object)에 해당하는 문자열 자료형 데이터는 오로지 자신만이 사용할 수 있는 고유의 기능(일명 메소드)을 갖으며 목록은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)에서 확인할 수 있다.

```javascript
/* 문자열 객체의 메소드에 대한 몇 가지 예시 */
console.log("Hello World!".toUpperCase());
console.log("Hello World!".replace(" ", "-"));
```
```
HELLO WORLD!
Hello-World!
```

### `typeof` 연산자
[`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) 연산자는 변수 혹은 상수 데이터의 자료형을 문자열로 알려준다. 

```js
console.log(typeof 3);                // 출력: number
console.log(typeof 'Hello World!');   // 출력: string
```

## 탈출 문자
[탈출 문자](https://ko.wikipedia.org/wiki/이스케이프_문자)(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 이전에 문자열 자료형을 소개할 때, `\n` 탈출 문자를 사용하여 문자열 줄바꿈을 구현한 것을 보여주었다.

```javascript
print("Hello\nWorld!")
```
```
Hello
World!
```

# 자바스크립트: 조건 및 루프
조건문(conditional statement) 및 반복문(loop statement)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 자바스크립트 프로그래밍의 조건에 따라 실행하는 조건문과 반복적으로 실행하는 반복문을 소개한다.

## `if` 조건문
`if` 조건문은 조건 혹은 논리가 참(`true`)일 경우 코드를 실행하며, 거짓(`false`)일 경우에는 코드를 실행하지 않는다.

```javascript
if (condition) {
    statements;
}

// 간략화된 문장
if (condition) statement;
```

### `else` 조건문
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 조건부가 거짓(`false`)으로 판정되면 실행할 코드를 포함한다.

```javascript
if (condition) {
    statements;
}
else {
    statements; 
}
```

### `else if` 조건문
`else if` 조건문은 `else`와 `if` 조건문의 조합으로 이전 조건이 거짓(`false`)일 때 새로운 조건을 제시한다.

```javascript
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
조건 연산자(ternary operator; `?:`)는 세 가지 인수만을 사용하여 조건문을 아래와 같이 간략하게 표현한다.

```javascript
condition ? true_return : false_return;
```

조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에는 유용하다.

## `switch` 조건문
`switch` 조건문은 전달받은 인자를 `case`의 상수와 동일한지 비교하여 논리가 참일 경우 해당 지점부터 코드를 실행하며, 거짓일 경우에는 다음 `case`로 넘어간다. 선택사항으로 `default` 키워드를 통해 어떠한 `case` 조건에도 부합하지 않으면 실행될 지점을 지정한다.

```javascript
switch (argument) {
    case value1:
        statements;
        break;
    
    case value2:
        statements;
        break;
    
    case value3:
        statements;
        break;
    
    default:
        statements;
        break;
}
```

`switch` 조건문이 어느 `case` 코드를 실행할지 결정하는 것이라고 쉽사리 착각할 수 있으나, 이는 사실상 `break` 탈출문 덕분이다. 탈출문이 없었더라면 아래 예시 코드처럼 해당 조건의 `case` 코드 실행을 마쳤어도 다음 `case` 코드로 계속 진행하는 걸 확인할 수 있다. 즉, `case` 키워드는 코드 실행 영역을 분별하는 것이 아니라 진입 포인트 역할을 한다.

```javascript
var variable = 2;

// switch 조건문의 동작 예시
switch (variable) {
    case 1:
        console.log("Statement 1");
    
    case 2:
        console.log("Statement 2");
    
    case 3:
        console.log("Statement 3");
     
    default:
        console.log("Statement 4");
}
```
```
Statement 2
Statement 3
Statement 4
```

## `while` 반복문
`while` 반복문은 조건 혹은 논리가 참(`true`)일 동안 코드를 반복적으로 실행하며, 거짓(`false`)일 경우에는 반복문을 종료한다.

```javascript
while (condition) {
    statements;
}

// 간략화된 문장
while (condition) statement;
```

### `do`-`while` 반복문
`do`-`while` 반복문은 코드를 우선 실행하고 조건 혹은 논리가 참(`true`)일 경우 코드를 반복하며, 거짓(`false`)일 경우에는 반복문을 종료한다.

```javascript
do {
    statements;
} while (condition);
```

### `break` 문
`break` 문(일명 탈출문)은 반복문을 조기 종료시키는데 사용된다. 반복 실행 도중에 탈출문을 마주치는 즉시 가장 인접한 반복문으로부터 탈출한다.

### `continue` 문
`continue` 문은 반복문의 나머지 실행문을 전부 건너뛰어 다시 반복문의 조건부로 돌아간다. `break`와 달리 반복문은 종료되지 않고 여전히 살아있다.

## `for` 반복문
`for` 반복문은 조건 혹은 논리가 참(`true`)일 동안 코드를 반복적으로 실행하며, 거짓(`false`)일 경우에는 반복문을 종료한다. `for` 반복문은 조건 평가 외에도 지역 변수를 초기화 및 증감할 수 있는 인자가 있다.

```javascript
for (initialize; condition; increment) {
    statements;
}

// 간략화된 문장
for (initialize; condition; increment) statement;
```

`for` 반복문의 반복 절차는 다음과 같다:

1. 변수 할당: `initialize`에서 반복문 지역 변수를 정의하거나 외부 변수를 불러와 반복문을 위한 초기값을 할당한다.
2. 조건 평가: `condition`에서 조건을 평가한다. 논리가 참이면 코드를 반복적으로 실행하며, 거짓일 경우에는 반복문을 종료한다.
3. 변수 증감: 블록 내의 코드가 마무리되었거나 `continue` 문을 마주하면 `increment`에서 변수를 증감하고, "조건 평가" 단계로 돌아가 반복한다.

### 범위형 `for` 반복문
ES6부터 범위형 `for` 반복문이 소개되었으며, 조건 만족 여부가 아닌 주어진 범위 내에서만 반복한다.

* **`for...of`**: 문자열과 배열 등의 [이터러블](#자바스크립트-이터러블)(iterable) 객체가 갖는 요소를 순서대로 하나씩 반환한다.

    ```javascript
  for (const element of "ES6") console.log(element);
    ```
    ```
  E
  S
  6
    ```

* **`for...in`**: [객체](#자바스크립트-객체)(object) 중에서 열거 가능한(enumerable) 속성들의 이름을 하나씩 반환한다.

    ```javascript
  for (const property in "ES6") console.log(property);
    ```
    ```
  0
  1
  2
    ```

# 자바스크립트: 이터러블
자바스크립트는 여러 데이터를 하나의 변수에 저장하는 [이터러블](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)(iterable) 객체를 생성할 수 있다. 이터러블 객체는 여러 데이터를 한 번에 관리하는 편리성을 제공한다. 대표적인 이터러블 객체로 [문자열](#문자열-자료형)(string)이 있다. 본 장에서는 자바스크립트에서 활용할 수 있는 몇 가지의 이터러블 유형들을 소개한다.

## 배열
배열(array) 이터러블 객체는 자료형과 관계없이 데이터를 나열한 순서대로 인덱스(index) 위치에 저장한다. 배열은 두 가지 방법으로 생성할 수 있다:

* 대괄호(`[]`) 내에 데이터를 순서대로 쉼표로 나누어 나열한다.
* [`Array()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [클래스](#클래스)의 소괄호 `()` 내에 데이터를 순서대로 쉼표로 나누어 나열한다.

> 아무런 데이터를 입력하지 않으면 빈 배열을 생성한다.

대괄호는 인덱스 위치의 요소(element)를 호출할 때에도 사용되며, 해당 요소에 새로운 값을 재할당하여 데이터를 변경할 수 있다.

```javascript
var array = [value1, value2, value3, value4, ...];
/* 동일:
var array = new Array(value1, value2, value3, value4, ...);
*/

console.log(array);        // 출력: [ value1, value2, value3, value4, ... ]
console.log(array[0]);     // 출력: value1
```

배열 인덱스 범위를 벗어난 요소를 호출하면 `undefined`, 즉 정의되지 않은 요소라고 반환되는데 값을 할당할 수 있다.

```javascript
var array = [];
console.log(array);        // 출력: []

array[2] = "Hello World!";
console.log(array);        // 출력: [ <2 empty items>, 'Hello World!' ]
```

### 전개 연산자
[전개 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)(spread operator; `...`)는 배열에서 두 가지 역할을 지닌다:

* 배열 접두부에 위치할 경우, 배열의 모든 요소들을 전개하여 한꺼번에 반환한다.

    ```javascript
  var array = [value1, value2, value3, value4, value5];

  console.log(array);       // 출력: [ value1, value2, value3, value4, value5 ]
  console.log(...array);    // 출력: value1 value2 value3 value4 value5
    ```

* [배열 구조 분해](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)(array destructuring), 즉 배열의 요소를 각 변수마다 나누어서 할당하는 과정에서 나머지 요소들을 한꺼번에 받을 변수 앞단에 기입된다.

    ```javascript
  var array = [value1, value2, value3, value4, value5];

  var [variable1,  , ...variable2] = array;
  console.log(variable1);    // 출력: value1
  console.log(variable2);    // 출력: [ value3, value4, value5 ]
    ```

## 연관 배열
자바스크립트는 배열의 요소를 문자열로 호출하는 [연관 배열](https://ko.wikipedia.org/wiki/연관_배열)(associative array)을 지원하지 않는다. 설령 빈 배열에 요소 확장을 할 때 문자열을 입력하는 방법을 사용하여도, 이때부터는 배열이 아닌 [객체](#자바스크립트-객체)(object)가 된다. 자바스크립트는 이러한 경우에 오히려 객체를 사용하는 것을 권고한다.

```javascript
var array = [];

/* 비록 배열을 선언하였으나, 아래의 코드로 인해 배열이 아닌 일반 객체로 변환 */
array['property1'] = value1;
array['proprety2'] = value2;

console.log(array);            // 출력: [ property1: value1, proprety2: value2 ]
console.log(array.length);     // 출력: 0
```

# 자바스크립트: 함수
[함수](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)(function)는 독립적인 코드 블록으로써 데이터를 처리하며, 재사용이 가능하고 호출 시 처리된 데이터를 보여주어 유동적인 프로그램 코딩을 가능하게 한다. 함수는 이름 뒤에 소괄호가 있는 `function()` 형식으로 구별된다.

```javascript
var variable = '3.14';
console.log(parseInt(variable));
// 문자열에서 정수를 반환하는 "parseInt()" 함수
```

함수의 기능을 정의(definition)하기 방법에는 두 가지가 있다: `function` 키워드를 사용한 기존 자바스크립트 방식, 그리고 ES6에서 추가된 [화살표 함수 표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)(arrow function expression) 방식이다.

```javascript
/* 방법 1: 기존 자바스크립트 구문 */
function func() {
    
}

/* 방법 2: ES6 화살표 함수 표현식 */
const func = () => {
    
}
```

> 두 방식은 함수를 생성하는데 기여하지만 차이점이 존재한다: 대표적인 예시로 `function` 키워드는 함수가 정의되기 전에 미리 호출하여 사용할 수 있는 [함수 호이스팅](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#function_hoisting)(function hoisting)을 지원하는 반면, ES6부터 추가된 화살표 함수 표현식으로는 그렇지 못한다.

자바스크립트에서 함수 내에 선언된 변수 및 표현식은 [함수 유효범위](#유효범위)(function scope)를 갖는다. 그리고 자바스크립트는 이례적으로 함수 내에서 또 다른 함수를 정의하는 것이 허용되며, 유효범위에 의하여 정의된 함수 내에서만 사용할 수 있다.

함수명 뒤에 소괄호 `()` 기입여부에 따라 의미하는 바가 다르다.

* `function()`은 함수에 정의된 코드를 실행한다.

    ```javascript
  const func = () => {
      console.log('Hello World!');
  }

  var variable = func();
  console.log(variable);
    ```
    ```
  Hello World!
  undefined
    ```

* `function`은 함수 자체를 가리킨다.

    ```javascript
  const func = () => {
      console.log('Hello World!');
  }

  var variable = func;
  console.log(variable);
    ```
    ```
  [Function: func]
    ```

### `return` 반환문
`return` 반환문은 함수로부터 데이터를 반환하는 함수 전용 문장이다. 반환문이 실행되면 하단에 코드가 남아 있음에도 불구하고 함수는 즉시 종료된다. 반환문을 반드시 필요로 하지 않으며, 없을 경우에 함수는 `undefined`을 반환된다.

```javascript
function func() {
    console.log("Hello World!");
    return 3;
}

console.log(func());
```
```
Hello World!
3
```

## 매개변수 및 전달인자
다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* **전달인자 (argument)**: 간략하게 "인자"라고도 부르며, 함수로 전달되는 데이터이다.
* **매개변수 (parameter)**: 전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수 선언은 함수의 소괄호 `()` 내에서 이루어진다.

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 | 구문          | 설명                                                            |
|:---:|:-----------:|---------------------------------------------------------------|
| `=` | `arg=value` | 전달인자가 없으면 기본값 `value`가 대신 매개변수에 할당된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |
| `...` | `...arg` | 여러 개의 전달인자들을 배열로 한꺼번에 받을 수 있다. 반드시 일반 매개변수 뒤에 위치해야 한다. |

아래의 예제는 함수의 매개변수와 전달인자가 어떻게 동작하는지 보여준다.

```javascript
/* 택1: 기존 자바스크립트 구문 */
function func(arg1, arg2 = 2) {
    return arg1 + arg2;
}

/* 택2: ES6 구문 */
const func = (arg1, arg2 = 2) => {
    return arg1 + arg2;
}

/* 함수 호출 */
func(3);        // 출력: 5 (= 3 + 2)
func(3, 4);     // 출력: 7 (= 3 + 4)
```
----
```javascript
/* 택1: 기존 자바스크립트 구문 */
function func(arg1, ...arg2) {
    console.log(arg1);
    console.log(arg2);
}

/* 택2: ES6 구문 */
const func = (arg1, ...arg2) => {
    console.log(arg1);
    console.log(arg2);
}

/* 함수 호출 */
func(1, 2, 3, 4);   // 출력: 1
                    // 출력: [ 2, 3, 4 ]
```

### 콜백 함수
[콜백 함수](https://ko.wikipedia.org/wiki/콜백)(callback function)는 인자로 전달되는 함수이다. 콜백 함수를 전달받는 함수, 일명 호출 함수(calling function)는 코드 블록 내에서 매개변수 호출을 통해 콜백 함수를 실행한다.

> 여기서 콜백이란, 전달인자로 전달된 함수가 다른 함수에서 언젠가 다시 호출(call back)되어 실행된다는 의미에서 붙여진 용어이다.

```javascript
/* 호출 함수 */
const calling = (arg1, arg2) => {
    arg1(arg2);
}

/* 콜백 함수 */
const callback = arg => {
    console.log(`callback: ${arg}`);
}

calling(callback, "Hello World!");
```
```
callback: Hello World!
```

## 람다 표현식
[람다 표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)(lambda expression), 일명 람다 함수(lambda function) 혹은 익명 함수(anonymous function)는 이름이 없는 (즉, 익명) 함수로, 데이터를 저장하지 않고 단일 표현식으로만 값을 반환한다. 익명 함수는 흔히 일회용 함수나 콜백 함수로 사용된다. 아래는 [콜백 함수](#콜백-함수)의 예시 코드에 람다 표현식을 활용하였다.

```javascript
/* 호출 함수 */
const calling = (arg1, arg2) => {
    arg1(arg2);
}

calling(arg => {
    console.log(`callback: ${arg}`);
}, "Hello World!");
```
```
callback: Hello World!
```

비록 익명 함수는 한 번만 사용되는 이름없는 함수이더라도 변수에 할당하여 언제든지 호출할 수 있다.

# 자바스크립트: 객체
[객체](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)(object 혹은 instance)는 데이터를 저장할 수 있는 변수와 처리할 수 있는 함수를 하나로 묶은 데이터이다. 현재까지 다룬 내용 중에서 객체에 해당되는 데이터로는 문자열 객체와 배열이 있다.

```javascript
var variable = [0, 3, 5, 9];
console.log(variable.indexOf(5));
// "variable" 이름을 가진 배열 이터러블 객체의 "indexOf()" 메소드를 사용하여 값 5에 대한 위치를 반환한다.
```
```
2
```

객체에 속하는 변수와 함수를 각각 속성(property)과 메소드(method)라고 부르며 [속성 접근자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)를 통해 접근한다. 

| 객체 속성 | 속성 접근자                                      |
|:-------:|-----------------------------------------------|
| 변수 (일명 필드; field) | `instance.property` 혹은 `instance["property"]` |
| 함수 (또는 메소드)    | `instance.method()` 혹은 `instance["method"]()` |

여기서 속성의 개념이 매우 포괄적이고 애매모한데, 자바스크립트 특성상 식별자에 어떤 데이터가 바인딩 되는지에 따라 변수가 되거나 함수가 되는 유동적인 태도를 취하기 때문이다. 비록 메소드가 객체의 함수 역할을 하지만 속성에 함수가 바인딩되면 메소드처럼 사용될 수 있다. 그래도 [메소드 정의](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)와 구분되어 엄연히 다른 존재이므로 자바스크립트는 "속성 및 메소드"를 분별한다.

다음은 자바스크립트에서 사용자 정의 객체(user-defined object)를 생성하는 방법을 소개한다:

> 아래 방법을 소개하기 앞서 두 개의 연산자에 대하여 설명한다.
>
> * **`this` 연산자**: 객체 스스로를 가리키기 위해 사용된다. 만일 `this` 연산자가 없이 속성을 호출하면 자바스크립트는 이를 일반 지역 변수 또는 함수로 간주한다.
> * **`new` 연산자**: 사용자 정의 또는 생성자 함수를 갖는 객체 자료형으로부터 객체를 생성하는데 사용된다.

* [객체 초기자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)(object initializer), 일명 객체 리터럴(object literal) `{}` 안에 각 속성을 쉼표로 나누어 `property: definition` 형식으로 값을 할당하거나 함수를 정의하여 생성한다.

    ```javascript
  /* 객체 생성: 객체 초기자 */
  const instance = {
      
      // 속성 정의 (변수)
      property1: value1,
      property2: value2,
  
      // 속성 정의 (함수)
      property3: function(arg) {
          return this.field1 + this.field2 - arg;
      },
      
      // 메소드 정의
      method(arg) {
          return this.field1 + this.field2 - arg;
      }
  };
    ```

* [생성자 함수](https://developer.mozilla.org/en-US/docs/Glossary/Constructor)(constructor function), 즉 객체를 생성하기 위해 동작하는 함수를 사용한다. 생성자 함수에는 속성들이 정의되고, `new` 연산자를 통해 객체가 생성된다.

    ```javascript
  /* 객체 생성: 생성자 함수 */
  function func(arg1, arg2) {
      
      // 속성 정의 (변수)
      this.field1 = arg1;
      this.field2 = arg2;

      // 속성 정의 (함수)
      this.method = function(arg) {
          return this.field1 + this.field2 - arg;
      }
  }
  
  const instance = new func(value1, value2);
    ```

* [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) 클래스 자료형이 갖는 `Object.create()` 정적 메소드에 [프로토타입](#프로토타입)을 기입해 생성자 함수 정의가 필요없이 객체를 생성한다.

    ```javascript
  /* 객체 생성: 프로토타입 */
  const prototype = {

      // 속성 정의 (변수)
      property1: value1,
      property2: value2,

      // 속성 정의 (함수)
      property3: function(arg) {
          return this.field1 + this.field2 - arg;
      },
      
      // 메소드 정의
      method(arg) {
          return this.field1 + this.field2 - arg;
      }
  };

  const instance = Object.create(prototype);
    ```

### 프로토타입
[프로토타입](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)(prototype)은 기본적으로 객체에 내장된 속성 및 메소드를 일컬으며, 모든 자바스크립트 객체는 프로토타입을 갖는다. 프로토타입 또한 객체이므로 자신만의 프로토타입이 있는데 이러한 연속을 프로토타입 연쇄(prototype chain)라고 부르며, `null`을 프로토타입으로 갖는 프로토타입까지 이어진다. 객체의 프로토타입은 `Object.getPrototypeOf()` 정적 메소드로 반환된다.

## 클래스
[클래스](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)(class)는 동일한 구조를 갖는 객체를 매번 정의할 필요없이 간단히 생성할 수 있도록 한다. ES6부터 소개되었으며 `class` 키워드와 함께 객체의 속성 및 메소드를 클래스 내부에 정의한다. 클래스로부터 객체를 생성하는 절차를 *객체화(instantiation)*라고 한다. 직접 생성된 객체와 달리, 클래스로부터 생성된 객체는 [캡슐화](https://ko.wikipedia.org/wiki/캡슐화)(encapsulation)로부터 아래의 특성을 가진다:

1. 변수와 함수를 하나의 객체로 결합한다.
2. 우연치 않은 수정을 방지하기 위해 이러한 변수 및 함수에 대한 직접적인 접근을 외부로부터 제한할 수 있다.

특히 2번 특성의 의해 클래스 및 객체는 외부에서 접근이 가능한 [public](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) 속성 (및 메소드)와 외부에서 접근이 불가한 [private](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) 속성 (및 메소드)를 지정할 수 있다. 기본적으로 public으로 선언되지만 private으로 선언하려면 식별자 앞에 해시 기호 `#`를 붙인다.

> private 속성 및 메소드에 대해 몇 가지 유의할 사항이 있다.
>
> * 객체 리터럴에서 사용할 수 없다.
> * 선언이 먼저 이루어져야 한다; 즉, 메소드 내에서 `this` 키워드로 정의하려면 오류가 발생한다.
> * 2021년 4월 기준으로 아직 ECMAScript 실험 단계에 있으나 대부분의 브라우저에서 지원하고 있다.

```javascript
/* 클래스 생성 */
class CLASS {

    public = value1;     // public  속성 정의
    #private = value2;   // private 속성 정의

    // 속성 정의 (함수)
    property = function(arg) {
        return this.public + this.#private - arg;
    }

    // 메소드 정의
    method(arg) {
        return this.public + this.#private - arg;
    }
}

/* 클래스 객체화 */
const instance = new CLASS();
```

자바스크립트는 [클래스 호이스팅](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#class_hoisting)(class hoisting)을 지원하지 않는다.

### 생성자
[생성자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)(constructor)는 객체화가 이루어질 때마다 자동적으로 실행되는 특수한 `constructor()` 메소드이다. 비록 생성자는 선택사항이지만, 만일 생성자를 정의한다면 객체화 과정에서 객체로 전달할 인자의 개수를 결정하는 요인으로 작용한다. 생성자는 흔히 객체화 단계에서 필드를 초기화하는 용도로 사용된다.

```javascript
/* 클래스 생성 */
class CLASS {

    // 생성자 정의
    constructor(arg1, arg2) {
        this.public = arg1;
        this.#private = arg2;
    }

    // private 속성 선언
    #private;

    method(arg) {
        return this.property1 + this.#property2 - arg;
    }
}
```

생성자를 정의하지 않으면 아래의 기본 생성자가 클래스에 제공된다.

```javascript
constructor() {}
```

### 정적 속성 및 메소드
[정적 속성 및 메소드](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties)(static property & method)는 `static` 키워드로 선언된 속성 및 메소드로 객체화 없이 클래스에서 곧바로 사용할 수 있다. 그러나 클래스 객체화로 생성된 객체는 정적 속성 및 메소드를 접근할 수 없다. 다시 말해, 정적 속성 및 메소드는 단순히 클래스에 속해있는 일반 변수 및 함수와 동일하게 취급하면 된다.

> 객체 속성 및 메소드(instance property & method)는 정적 속성 및 메소드와 서로 별개의 영역으로 간주되므로 `static`만 확실히 표시해주면 동일한 식별자를 가질 수 있다.

```javascript
/* 클래스 생성 */
class CLASS {

    // 정적 속성 정의
    static property = 2;

    // 정적 메소드 정의
    static method(arg) {
        return this.field * arg;
    }
}

/* 정적 메소드 호출 */
console.log(CLASS.property);    // 출력: 2
console.log(CLASS.method(3));   // 출력: 6
```

### Setter 및 Getter
자바스크립트의 클래스는 하나의 속성을 [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)와 [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) 영역으로 나누어 데이터 숨기기를 지원한다.

| 접근자 | 키워드 | 설명                                     |
|:--------:| ------- | ----------------------------------------------- |
| Getter   | `get`   | 속성으로부터 값을 반환받는 맴버이다. |
| Setter   | `set`   | 속성으로부터 값을 설정하는 맴버이다. |

속성을 나누므로써 수정되어서는 안될 민감한 코드를 `set` 영역에 숨기고 `get`만을 통해서 데이터를 반환한다. 정의된 형태는 메소드와 유사하지만 실제로 사용할 때는 소괄호 `()` 없이 속성처럼 사용된다. 또한 setter를 정의할 때에는 매개변수가 하나만 존재해야 하고 getter를 정의할 때에는 매개변수가 없어야 한다.


```javascript
/* 클래스 정의 */
class CLASS {
    
    #property;

    // Setter 정의
    set property(arg) {
        this.#property = arg;
    }

    // Getter 정의
    get property() {
        return this.#property ** 2;
    }
}

/* 클래스 객체화 */
const instance = new CLASS();

instance.property = 3;
console.log(instance.property);    // 출력: 9 (= 3 ** 2)
```

## 클래스 표현식
[클래스 표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)(class expression)은 익명의 클래스를 정의하는 동시 객체를 선언하는 표현식이다. `new` 연산자가 없어도 객체화가 되어 코드가 간략하지만, 단 하나의 객체만 정의할 수 있는 단점을 갖는다.

```javascript
/* 클래스 표현식 */
const instance = class {
    ...
};
```

## 상속
[상속](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)(inheritance)은 기반 클래스(base class)가 파생 클래스(derived class)에게 속성을 제공하는 행위이다. 파생 클래스는 `extends` 키워드로 상속받을 기반 클래스를 명시하지만, 오로지 한 기반 클래스로부터만 파생될 수 있다. 기반 클래스와 파생 클래스에 동일한 이름의 속성과 메소드가 존재할 경우,

* 기반 클래스의 속성은 파생 클래스에서 명시된 데이터로 재할당된다.
* 기반 클래스의 메소드는 파생 클래스의 속성에 의해 묻혀진다.

여기서 "묻힌다"는 표현은 기반 클래스의 메소드가 아직 살아있음을 시사한다. 이러한 차이점이 존재하여 자바스크립트에서 객체를 다룰 때 속성과 메소드를 확실히 구별짓는 것이다.

```javascript
/* 기반 클래스 생성 */
class BASECLASS
{
    property1 = null;
    property2 = 3;

    method() {
        this.property1 = "JavaScript";
    }
}

/* 파생 클래스 생성 */
class DERIVEDCLASS extends BASECLASS
{
    property2 = 7;
    property3 = true;

    method() {
        this.property1 = "Hello World!";
    }
}

const instance = new DERIVEDCLASS();

console.log(instance);
instance.method();
console.log(instance);
```
```
DERIVEDCLASS { property1: null, property2: 7, property3: true }
DERIVEDCLASS { property1: 'Hello World!', property2: 7, property3: true }
```

### `super` 키워드
[`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) 키워드는 파생 클래스가 기반 클래스의 생성자 및 메소드를 호출하는데 사용된다:

* `super()`은 기반 클래스의 생성자를 호출하며, 반드시 `this` 키워드가 사용되기 전에 기입되어야 한다. 단, 파생 클래스에 별도 생성자가 정의되지 않았다면 해당 키워드는 무시해도 된다.

    ```javascript
  class BASECLASS {
      constructor(arg1, arg2) {
          ...
      }
  }

  class DERIVEDCLASS extends BASECLASS {
      constructor(arg) {
          super(arg, arg);
          ...
      }
  }
    ```

* `super.method()`은 기반 클래스의 메소드를 호출한다. 단, 메소드가 아닌 `function` 키워드 또는 화살표 함수 표현식에 바인딩된 속성에는 `super`를 인식하지 못하는 구문 오류가 발생한다.

    ```javascript
  class BASECLASS {
      method(arg1, arg2) {
          ...
      }
  }

  class DERIVEDCLASS extends BASECLASS {
      method(arg) {
          super.method(arg, arg);
          ...
      }
  }
    ```

# 자바스크립트: 모듈
[모듈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)(module)은 부가적인 기능 및 데이터를 제공하는 자바스크립트 소스 코드이며, 이들은 일반 스크립트와 마찬가지로 `.JS` 혹은 일부 런타임에서 모듈로 인식할 수 있는 `.MJS` 확장자를 갖는다. 개발자는 변수나 함수 혹은 클래스를 담고 있는 자바스크립트 모듈을 작성하여 `export` 문으로 제공하고, 이들을 활용하려는 스크립트는 `import` 문을 통해 전달받는다.
