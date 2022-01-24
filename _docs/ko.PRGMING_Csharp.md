---
layout: docs
language: ko
category: 프로그래밍
title: C#
icon: icon-csharp.svg
meta: Csharp
order: 0x03
---
# C#: 소개
> *참조: [Microsoft Docs C# 언어 설명서 (한국어)](https://docs.microsoft.com/ko-kr/dotnet/csharp/)*

C# (한국어:씨샵) 프로그래밍 언어는 [자바](https://ko.wikipedia.org/wiki/자바_(프로그래밍_언어))(Java) 언어를 대응하기 위해 마이크로소프트에서 개발한 [객체지향 프로그래밍](https://ko.wikipedia.org/wiki/객체_지향_프로그래밍)(object-oriented programming) 언어이다. 자바와 상당한 유사점을 가지면서 [C](../ko.PRGMING_C)/[C++](../ko.PRGMING_Cpp) 언어로부터 이질감이 없도록 설계되었다. 또한 .NET (한국어: 닷넷) 프레임워크라는 방대한 데이터 라이브러리를 접속하고 사용할 수 있어 개발의 편리성을 제공하는 장점을 가진다.

## .NET
> *참조: [컴파일 vs 인터프리트 언어](/blog/ko.compiler_vs_interpreter/)*

[.NET](https://ko.wikipedia.org/wiki/닷넷)(혹은 .NET Core)은 마이크로소프트에서 개발한 오픈소스 소프트웨어 프레임워크이다. 국제표준기구 ISO와 ECMA에서 표준으로 채택된 공통 언어 기반(Common Language Infrasturcture; CLI)이 적용되어 운영체제 및 아키텍쳐가 다르더라도 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)(cross-platform)을 지원해야 하며 여러 고급 프로그래밍 언어을 사용할 수 있다. 그 중에서 C# 언어가 .NET이 지원하는 프로그래밍 언어 중 하나이며 윈도우 NT, macOS, 그리고 리눅스 운영체제에서 사용할 수 있다.

![.NET 공통 언어 기반 (CLI) <sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Overview_of_the_Common_Language_Infrastructure.svg">위키백과</a></i></sub>](/images/docs/csharp/csharp_wiki_netframework.png)

프레임워크는 CoreFX*(FCL)* 그리고 CoreCLR*(CRL)*로 구성되어 있다. 아래의 표는 FCL과 CLR의 역할을 간략하게 설명한다:

| 구성요소                    | 설명                                                     |
|-------------------------------|-----------------------------------------------------------------|
| 프레임워크 클래스 라이브러리 (FCL) | .NET 프로그램을 개발하는데 필요한 표준 라이브러리를 제공한다. |
| 공통 언어 런타임 (CLR) | JIT 컴파일러를 통해 .NET 프로그램을 컴파일 및 실행한다.      |

### 어셈블리
C/C++ 프로그래밍 언어는 컴파일러(예. Visual C++, Clang, GCC 등)가 소스 코드로부터 `.exe` 실행 파일 혹은 `.dll` 라이브러리 파일과 같은 컴퓨터가 읽을 수 있는 이진코드 기계어로 변환한다.

> C/C++ 프로그램은 실행되기 전에 컴퓨터가 읽을 수 있도록 완전히 컴파일된다: 그러므로 해당 작업을 *AOT(ahead-of-time)* 컴파일이라고 부른다.

반면, .NET 컴파일러 플랫폼(일명 "로즐린"; Roslyn)은 소스 코드에서 이진코드가 아닌 공통 중간 언어(Common Intermediate Language; CIL) 파일을 생성한다. 여기서 CIL은 바이트코드(bytecode)이며, 컴퓨터가 읽을 수 있는 기계어는 아니지만 아키텍처 독립 언어로 크로스 플랫폼 지원이 가능한 핵심 요소이다.

> 바이트코드 파일은 컴퓨터가 읽을 수 있는 기계어로 번역하기 위해 프로그램 실행 시 추가 컴파일 작업이 요구된다: 바이트코드에서 이진코드 변환 작업을 *런타임(runtime)* 혹은 *JIT(just-in-time)* 컴파일이라고 부른다.

어셈블리(assembly)는 C# 프로그래밍 언어에서 바이트코드 파일을 의미한다. C/C++ 프로그래밍 언어와 같이 어셈블리에도 `.exe` 프로세스 어셈블리(process assembly)와 `.dll` 라이브러리 어셈블리로 나뉘어진다. 하지만 어셈블리는 이진파일이 아니므로 C#은 .NET (정확히는 CoreCLR) 없이 프로그램을 실행할 수 없다.

### .NET 프레임워크
[.NET 프레임워크](https://ko.wikipedia.org/wiki/닷넷_프레임워크)(.NET Framework)는 .NET 이전에 활발히 사용되던 데스크탑 전용 윈도우 NT에서만 사용할 수 있는 프레임워크이다. 비록 2020년 11월부로 .NET Core가 주요 프레임워크로 전환되었으나, .NET 프레임워크로 개발된 프로그램이 상당히 많아 여전히 지원되고 있다.

## 객체지향 프로그래밍
C# 프로그래밍 언어는 "객체"라는 데이터를 위주로 프로그램을 개발하는 [객체지향 프로그래밍](https://ko.wikipedia.org/wiki/객체_지향_프로그래밍)(object-oriented programming; OOP) 언어이다. 이에 대한 자세한 내용은 차후에 설명될 예정이지만, 최소한 객체와 클래스에 대한 개념을 이해하여야만 C# 프로그래밍 언어의 기초를 이해할 수 있다.

### 객체
객체(object 혹은 instance)는 *필드(field)*와 *메소드(method)* 맴버들로 구성된 독립적인 데이터 단위이다. 객체의 맴버를 접근하기 위해서는 맴버 연산자(`.`)를 사용한다:

| 맴버   | 구문              | 설명                                                                                 |
|:----------:|---------------------|---------------------------------------------------------------------------------------------|
| 필드    | `object.field`      | 데이터 값을 저장하는 객체 맴버이다.                                                          |
| 메소드   | `object.method()`   | 데이터를 처리하거나 반환하는 객체 맴버이다.                                           |
| 속성 | `object.property` | 필드 값을 간접적으로 반환하는 메소드를 지칭한다; 필드를 직접 접근하지 않으므로, 필드의 값이 의도치 않게 변경되는 것을 방지한다. |

### 클래스
클래스(class)는 객체를 생성하는데 사용된다. 객체의 필드가 어떤 값을 갖는지 또는 메소드가 어떤 동작을 수행하는지 등을 모두 클래스 내에 정의한다. 맴버들은 클래스에서 바로 사용할 수 없으며 객체를 통해서만 사용할 수 있다. 여기서 클래스로부터 객체를 생성하는 과정을 *객체화(instantiation)*라고 부른다.

### `static` 접근 한정자
`static` 접근 한정자(access modifier), 혹은 접근 지정자(access specifier) 키워드를 가지는 맴버는 객체화가 필요없이 클래스에서 바로 접근하여 사용할 수 있다. 객체를 생성하지 않아도 메소드를 사용할 수 있는 점에서 매우 편리함을 제공하지만, `static` 한정자가 가지는 특성으로 인해 빈번한 사용은 결과적으로 코드를 복잡하게 만들 수 있다.

## 시작점
C/C++ 프로그래밍 언어와 달리 코드 블록을 의미하는 중괄호(`{}`)가 많아 복잡해 보이겠지만, C# 프로그래밍 언어에서 모든 프로그램은 `static void Main()`에서부터 시작한다.

> 여기서 [코드 블록](https://ko.wikipedia.org/wiki/블록_(프로그래밍))(code block)이란, 소스 코드를 그룹화시키는 요소로 중괄호(`{}`)로 블록을 명시한다.

```csharp
using System;

namespace PROJECT
{
    class Program
    {
        static void Main(string[] args)
        {
            // 여기서부터 코드 입력...
        }
    }
}
```

본문의 대부분 예시 코드는 위와 같이 코드 전체를 보여주지 않고 설명하고자 하는 부분만 작성되어 있다. 그러나 이들 대부분은 `static void Main()` 안에 있어야만 실행된다는 점을 명시하도록 한다.

# C#: 설치
본문은 윈도우 NT 운영체제에서 C# 프로그래밍 언어 소스 코드 편집, 프로그램 빌드, 그리고 디버깅 기능을 제공하는 [통합 개발 환경](https://ko.wikipedia.org/wiki/통합_개발_환경)(integrated development environment; IDE) 설치 및 프로젝트 생성 단계를 소개한다. 프레임워크는 .NET 프레임워크가 아닌 .NET Core 위주로 진행한다.

## 비주얼 스튜디오
[비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)(Visual Studio)는 마이크로소프트에서 개발한 IDE이며 .NET을 제공한다. 비주얼 스튜디오의 세 가지 에디션 중에서 무료 버전인 커뮤니티 에디션으로도 충분하다. 통합 개발 환경인 만큼 [C](../ko.PRGMING_C/)/[C++](../ko.PRGMING_Csharp/)이나 [자바스크립트](../ko.PRGMING_JavaScript/) 등 다른 프로그래밍 언어도 함께 지원하므로 여러 종류의 구성요소를 제공한다. C# 프로그래밍 언어 개발을 위해서면 ".NET desktop development"를 선택한다.

![비주얼 스튜디오 C# 프로그래밍을 위한 구성요소](/images/docs/csharp/csharp_vs_component.png)

만일 한국어 지원을 원한다면 "Language packs" 탭에서 한국어를 함께 선택한다.

비주얼 스튜디오를 실행하면 아래와 같은 시작화면이 나타난다. 새로운 프로젝트를 생성하려면 오른쪽 하단의 "Create a new project" 버튼을 클릭한다.

![비주얼 스튜디오 시작화면](/images/docs/csharp/csharp_vs_project1.png)

C# 프로그래밍 언어로 다양할 어플리케이션을 만들 수 있어, 비주얼 스튜디오에서도 다양한 종류의 프로젝트 생성 선택지를 제공한다. 그 중에서 간단한 콘솔 어플리케이션을 위한 C# 프로그래밍 언어 프로젝트 생성은 아래의 절차를 따른다:

1. 프로그래밍 언어를 C#으로 선택하여 "Console App (.NET Core)"을 클릭한다.

    ![비주얼 스튜디오 C# 프로젝트 생성 (1단계)](/images/docs/csharp/csharp_vs_project2.png)

2. 프로젝트 및 솔루션 이름을 선정한다. 여기서 프로젝트란, 소스 코드와 컴파일러 설정 등의 실질적인 코딩 내용을 관리하는 `.csproj` 확장자 파일이며, 솔루션은 여러 프로젝트 파일을 하나의 폴더처럼 관리하는 `.sln` 확장자 파일이다. 비주얼 스튜디오에서 프로젝트는 `.sln` 파일로 열기를 권장한다.

    ![비주얼 스튜디오 C# 프로젝트 생성 (2단계)](/images/docs/csharp/csharp_vs_project3.png)

3. 비주얼 스튜디오에서 알아서 준비한 프로젝트를 그대로 사용한다.

    ![비주얼 스튜디오 C# 프로젝트 생성 (3단계)](/images/docs/csharp/csharp_vs_project4.png)

위의 3단계 절차는 콘솔 어플리케이션 프로젝트를 생성하는 가장 간단한 방법이다. 만일 아무것도 없는 빈 프로젝트를 생성하려면 [여기](../ko.PRGMING_C/#비주얼-스튜디오)를 참조한다.

비주얼 스튜디오는 두 가지의 실행 방법이 있다: 일반 실행 모드(`Ctrl+F5`)와 디버그 모드(`F5`)이다. [디버그](https://ko.wikipedia.org/wiki/디버그)(debug)는 프로그램에 발생한 문제를 해결하는 행위로, IDE에서 각 줄의 코드마다 어떠한 변화가 생겼는지 혹은 얼만큼의 시스템 리소스를 소모하는지 등을 확인할 수 있는 정보를 제공한다. 디버깅 목적이 아니면 일반 실행 모드를 사용하는 것을 권장한다.

# C#: 기초
각 프로그래밍 언어마다 준수되어야 할 규칙(일명 [구문](https://ko.wikipedia.org/wiki/구문_(프로그래밍_언어)); syntax)과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 C# 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

## 주석
주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. C# 프로그래밍 언어에는 두 가지의 주석이 존재하며, 이들은 각각 한줄 주석과 블록 주석이라 부른다.

* 한줄 주석 (line comment)
    : *코드 한 줄을 차지하는 주석이며, 두 개의 슬래시(`//`)로 표시된다.*

* 블록 주석 (block comment)
    : *코드 여러 줄을 차지하는 주석이며, 한 쌍의 슬래시와 별표(`/* */`)로 표시된다.*

```csharp
/*
블록 주석:
코드 여러 줄을 차지하는 주석이다.
*/  
// 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 표현식 및 문장
프로그래밍에서는 표현식과 문장이 있다.

* [표현식](https://ko.wikipedia.org/wiki/식_(프로그래밍))(expression)
    : *값을 반환하는 구문적 존재를 가리킨다. 표현식에 대한 결과를 도출하는 것을 평가(evaluate)라고 부른다.*
    
    ```csharp
2 + 3       // 숫자 5를 반환
2 < 3       // 논리 참을 반환
    ```

* [문장](https://ko.wikipedia.org/wiki/문_(프로그래밍))(statement)
    : *실질적으로 무언가를 실행하는 하나의 완전한 코드를 의미한다. C# 프로그래밍 언어에서 모든 문장은 문장 종단자(statement terminator)인 세미콜론 `;`으로 마무리 되어야 한다.*

    ```csharp
int variable = 2 + 3;      // 숫자 5를 "variable" 변수에 초기화
if (2 < 3) statement;      // 논리가 참이면 "statement" 문장 실행
    ```

## 식별자
[식별자](https://ko.wikipedia.org/wiki/식별자#컴퓨터_언어)(identifier)는 프로그램을 구성하는 데이터들을 구별하기 위해 사용되는 명칭이다. 즉, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. C# 프로그래밍 언어에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 허용되지 않는다.
* 대소문자를 구분한다.

## 네임스페이스
[네임스페이스](https://ko.wikipedia.org/wiki/이름공간)(namespace)은 식별자의 유일성을 보장하기 위한 데이터 분류 공간으로, `namespace` 키워드를 통해 생성하여 코드 블록으로 데이터들을 분류시킨다. 컴퓨터에 대조하자면, 동일한 이름의 파일(데이터)을 서로 다른 폴더(네임스페이스)에 넣어 관리하는 것과 동일한 개념이다. 네임스페이스에 들어있는 데이터를 접근하기 위해서는 맴버 연산자(member access operator; `.`)를 사용한다. 그러나 네임스페이스 또한 유일한 식별자를 가져야 하며, 다른 네임스페이스와 동일한 이름을 가져서는 안된다.

```csharp
namespace NAMESPCAE1
{
	class Program{
        static void Main(){
            /* 다른 네임스페이스의 클래스 및 맴버 호출하기 */
            NAMESPACE2.CLASS.field;
            NAMESPACE3.NAMESPACE4.CLASS.method();
        }
    }
    
    /* 네스티드(NESTED) 네임스페이스 */
    namespace NAMESPACE2
    {
        static class CLASS { public var field; }
    }
}

/* NAMESPACE1과 독립된 별도의 네임스페이스 */
namespace NAMESPACE3
{
    namespace NAMESPACE4
    {
	    static class CLASS { public void method() statement; }
    }
}
```

### 전역 네임스페이스
전역 네임스페이스(global namespace)는 어느 네임스페이스에도 속하지 않는 최외각 영역범위이다. 전역 네임스페이스의 데이터는 `global` 키워드와 함께 네임스페이스 별칭 한정자(namespace alias qualifier)인 `::` 연산자를 데이터 식별자의 접두부에 위치하여 접근할 수 있다.

```csharp
global::variable;
```

### `using` 선언
`using` 키워드는 네임스페이스 내의 데이터를 간편하게 접근할 수 있도록 한다. 다시 말해, 네임스페이스 명시없이 데이터 호출이 가능하도록 만든다.

```csharp
/* using 선언: System 네임스페이스 생략 가능 */
using System;
```

그러나 `using` 키워드를 무분별하게 사용할 시 컴파일러는 네임스페이스로 나뉘어진 동일한 이름의 데이터를 구별하지 못하는 오류가 발생할 위험이 있다.

C# 프로그래밍 언어는 네임스페이스 별칭 기능을 지원한다. 네임스페이스 별칭은 네임스페이스 자체를 참조하거나, 혹은 네임스페이스에 내포된 데이터를 참조할 수 있다. 전자의 경우는 네임스페이스 내에 어떠한 데이터를 호출할지 `::` 연산자로 선택할 수 있으나, 후자는 이미 선택된 데이터만 호출할 수 있다.

```csharp
// 네임스페이스 별칭: 네임스페이스 참조
using scope1 = System;            // "System" 네임스페이스
scope1::Console.WriteLine("First Line");

// 네임스페이스 별칭: 데이터 참조
using scope2 = System.Console;    // "System.Console" 클래스
scope2.WriteLine("Second Line");
```

## 입력 및 출력
C# 프로그래밍 언어는 `System` 네임스페이스 안에 `Console` 클래스, 혹은 간단히 `System.Console`에서 텍스트 입력 및 출력 기능을 제공한다.

* `Console.Write()`
    : *줄바꿈 없이 텍스트를 터미널에 출력한다.*

* `Console.WriteLine()`
    : *줄바꿈과 함께 텍스트를 터미널에 출력한다.*

```csharp
class Program{
    static void Main(){
        System.Console.Write("Hello");
        System.Console.Write("World!");
        System.Console.WriteLine("Spam");
        System.Console.WriteLine("Egg");
    }
}
```
```
HelloWorld!Spam
Egg
```
----

* `Console.Read()`
    : *하나의 문자(character)를 읽는다.*

* `Console.ReadLine()`
    : *한 줄의 텍스트를 읽는다.*

* `Console.ReadKey()`
    : *키보드 버튼 입력을 읽는다.*

```csharp
using System;

class Program{
    static void Main(){
        Console.Write("Console.Read: ");
            int value1 = Console.Read();
            Console.WriteLine(">>> {0}\n", value1);
        
        Console.Write("Console.ReadLine: ");
            string value2 = Console.ReadLine();
            Console.WriteLine(">>> {0}\n", value2);
        
        Console.Write("Console.ReadKey: ");
            ConsoleKeyInfo value3 = Console.ReadKey();
            Console.WriteLine(">>> {0}", value3);
    }
}
```
```
Console.Read: Ko
>>> 75

Console.ReadLine: Hello World!
>>> Hello World!

Console.ReadKey:  
>>> Spacebar
```

### 자리 표시자
자리 표시자(placeholder)는 데이터를 텍스트의 특정 위치에 나타나도록 하며, 중괄호(`{}`) 안에 0부터 시작하여 숫자를 기입한다. 형식 텍스트 이후부터를 자리 표시자에 들어갈 데이터를 순차적 입력한다.

```csharp
System.Console.Write("첫 번째: {0}, 두 번째: {1}, 그리고 다시 첫 번째: {0}.", 3, 'G');
```
```
첫 번쨰: 3, 두 번째: G, 그리고 다시 첫 번째: 3.
```

### 문자열 보간
문자열 보간(string interpolation)은 데이터를 텍스트의 특정 위치에 나타나도록 하며, 중괄호(`{}`) 사이에 데이터나 표현식을 직접 삽입한다. 자리 표시자와 유사하지만, 두 가지의 차이점을 가진다.

1. 텍스트를 표시하는 큰 따옴표(`" "`) 앞에 달러 기호(`$`)가 붙는다.
2. 중괄호 안에는 번호가 아닌 실제 나타날 데이터가 삽입된다.

```csharp
int number = 3;
string str = "G";

System.Console.Write($"첫 번째: {number}, 두 번째: {str}, 그리고 다시 첫 번째: {number}.");
```
```
첫 번쨰: 3, 두 번째: G, 그리고 다시 첫 번째: 3.
```

### 탈출 문자
[탈출 문자](https://ko.wikipedia.org/wiki/이스케이프_문자)(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 이전에 문자열 자료형을 소개할 때, `\n` 탈출 문자를 사용하여 문자열 줄바꿈을 구현한 것을 보여주었다.

```csharp
System.Console.Write("Hello\nWorld!");
```
```
Hello
World!
```

| 줄바꿈  | 탭    | 백슬래시 | 백스페이스 | 작은 따옴표 | 큰 따옴표 |
|:----:|:----:|:----:|:-----:|:------:|:-----:|
| `\n` | `\t` | `\\` | `\b`  | `\'`   | `\"`  |

## 자료형
[자료형](https://ko.wikipedia.org/wiki/자료형)(data type)은 데이터의 내용물이 어떻게 표현되는지 결정하는 요소이며, C# 프로그래밍 언어에서는 여러 자료형이 존재한다. 각 자료형마다 데이터를 표현하기 위해 필요한 바이트 크기가 정해져 있다.

> [바이트](https://ko.wikipedia.org/wiki/바이트)(byte)란, 컴퓨터에서 메모리에 저장하는 가장 기본적인 단위이다. 자료형마다 크기가 정해진 이유는 효율적인 메모리 관리 차원도 있으나 CPU 연산과도 깊은 연관성을 갖는다.

아래는 C# 프로그래밍 언어가 갖는 자료형이다:

| 식별자       | 자료형       | 설명                                                            |
|-----------|-----------|---------------------------------------------------------------|
| `byte`     | 정수        | 8비트 양의 정수<br />크기: 1바이트                                    |
| `sbyte`     | 정수        | 8비트 정수<br />크기: 1바이트                                    |
| `short`    | 정수        | 16비트 정수<br />크기: 2바이트                                    |
| `ushort`    | 정수        | 16비트 양의 정수<br />크기: 2바이트                                    |
| `int`     | 정수        | 32비트 정수<br />크기: 4바이트                                    |
| `uint`     | 정수        | 32비트 양의 정수<br />크기: 4바이트                                    |
| `long`     | 정수        | 64비트 정수<br />크기: 8바이트                                    |
| `ulong`     | 정수        | 64비트 양의 정수<br />크기: 8바이트                                    |
| `Half`   | 부동소수점: 이진    | 16비트 반정밀도 실수<br />크기: 2바이트 (.NET 5 한정)                     |
| `float`   | 부동소수점: 이진    | 32비트 단정밀도 실수<br />크기: 4바이트 (`f` 혹은 `F` 접미사 필요)                     |
| `double`  | 부동소수점: 이진    | 64비트 배정밀도 실수<br />크기: 8바이트 (`d` 혹은 `D` 접미사 사용; 선택사항)    |
| `decimal` | 부동소수점: 십진    | 128비트 실수<br/>크기: 16바이트 (`m` 혹은 `M` 접미사 필요)         |
| `char`    | 문자: `''`  | 단일 문자: `'A'` 및 `'?'`.<br />크기: 2바이트                           |
| `string`  | 문자열: `""` | 일련의 문자들: `"Hello World!"`<br />크기: 알수 없음 (문자 개수에 따라 다름)       |
| `bool`    | 논리형       | 논리의 참과 거짓을 `true`(0이 아닌 정수)와 `false`(정수 0)로 표시.<br />크기: 1바이트 |
| `var`     | 자동        | 적절한 자료형으로 자동 선택.<br />복잡한 자료형을 간략히 선언하는데 매우 유용하다.             |
| `object`  | 객체         | 아무런 자료형.<br />모든 자료형의 기반으로 어떠한 자료형도 수용할 수 있다.                  |
| `void`    | 보이드       | 불특정 자료형.<br />크기: 1바이트                                        |

C# 프로그래밍 언어의 자료형은 필드와 메소드를 갖는 (클래스와 유사한) [구조체](#구조체)란 매우 독특한 성질을 가진다. 이를 간단히 확인하는 방법으로 비주얼 스튜디오에서 `F12`를 누르면 데이터 정의를 찾아볼 수 있는데, 대부분의 자료형이 `struct`라는 구조체 데이터인 것을 확인할 수 있다. 그러므로 C# 프로그래밍 언어에서는 `double` 자료형으로 다음을 수행할 수 있다.

```csharp
System.Console.WriteLine(double.MaxValue);   // 출력: 1.7976931348623157E+308
```

위의 내용을 더 깊이 해석하자면, *자료형의 데이터는 전부 객체이다*.

```csharp
System.Console.WriteLine(3.14.GetType());    // 출력: System.Double
```

### `sizeof()` 연산자
`sizeof()` 함수는 데이터나 자료형가 메모리에 할당된 바이트 크기를 반환한다.

```csharp
sizeof(int);        // 크기: 4바이트
sizeof(char);       // 크기: 2바이트
```

## 변수
변수(variable)는 데이터를 지정된 자료형으로 저장하는 식별자를 갖는 저장공간이다. 객체지향 프로그래밍에서 객체 및 클래스의 필드 맴버(field member)에 해당한다. 아래 예시는 `variable`이란 식별자를 갖는 정수형 변수에 숫자 3을 할당한다. 시스템적 관점에서 바라보면 `variable` 정수형 변수의 존재가 컴파일러에 각인되고 메모리가 할당되어 3이란 값이 저장되는 것으로, 이를 변수의 "선언(declaration)" 혹은 "정의(definition)"라고 부른다.

> C/C++ 프로그래밍 언어와 달리, C# 프로그래밍 언어는 ECMA-334 표준에 의하면 선언과 정의의 개념이 명확히 구분되어 있지 않다. 오히려 선언과 정의가 동일한 개념으로 보고 있다.

```csharp
/* 변수 "variable"의 정의 (혹은 선언) */
int variable = 3;
```

정수형 변수인 `variable`을 생성한 동시에 값 3을 할당하였는데, 변수로의 최초 할당을 "초기화(initialization)"라고 부른다. 그러나 변수 정의 과정에서 데이터 할당이 없다고 해서 초기화되지 않는 것이 아니다. "안전한 언어"를 추구하는 C# 프로그래밍 언어는 자료형마다 [기본값](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/default-values)(default value)이 있어, 정의할 때 별도의 데이터 할당이 없으면 기본값으로 초기화된다.

```csharp
/* 변수 "variable"의 정의 (혹은 선언) */
int variable;    // variable = default(int), 즉 0
variable = 3;    // variable = 3
```

한 번 정의된 변수는 컴파일러 측에서 이미 존재를 알고 있으므로, 이후 변수에 다른 데이터를 저장하거나 호출할 때 자료형을 함께 언급할 필요가 없다.

동일한 자료형의 변수 여러 개를 한꺼번에 정의하려면, 식별자마다 쉼표(`,`)로 구분지을 수 있다.

```csharp
/* 다수의 정수형 변수 정의 */
int variable1 = 3, variable2 = 4, variable3;
```

변수는 오로지 지정된 자료형 데이터만을 할당받아야 하지 않다. 아래 예시 코드는 정수형 및 문자형 변수에 값 75로 초기화하였다. 정수형 변수에는 정수 75로 저장되지만, 문자형 변수의 경우 UTF-16 인코딩 코드에 의하여 대문자 'K'로 저장된다.

```csharp
long variable1 = 75;    // variable1에는 정수 75가 저장
char variable2 = 75;    // variable2에는 문자 'K'가 저장
```

거의 모든 프로그래밍 언어는 할당 기호를 기준으로 왼쪽에는 피할당자(변수), 오른쪽에는 할당자(데이터 혹은 변수)가 위치한다. 반대로 놓여질 경우, 오류가 발생하거나 원치 않는 결과가 도출될 수 있다.

### 상수
상수(constant)는 한 번 데이터를 할당한 후 변경할 수 없는 특별한 변수이며, `const` 키워드와 함께 정의한다.

```csharp
/* 상수 선언 */
const int variable = 3;
```

### 지역 변수 및 전역 변수
C# 프로그래밍 언어에서 변수가 코드 중에서 어디에 정의되었는지에 따라 두 가지의 종류로 구분된다.

* 지역 변수(local variable)
    : *코드 블록 내부에서 정의된 변수이다. 지역 변수에 저장된 데이터는 코드 블록 밖에서는 소멸되므로 외부에서 사용할 수 없다.*

  ```csharp
  class Program {
      static void Main() {

          /* 지역 변수 */
          int variable;
      }
  }
  ```

* 전역 변수(global variable)
    : *이론적으로는 코드 블록 내에 속하지 않은 외부에 정의된 변수로써 어느 코드 블록에서도 호출만으로 지역 변수와 함께 사용할 수 있다. 그러나 객체지향 프로그래밍인 C# 언어에서 클래스 외부에 변수를 선언할 수 없기 때문에 공식적으로 지원되지 않는다.*

## 자료형 변환
자료형 변환(type casting)은 상수 혹은 변수로부터 호출한 데이터를 강제로 다른 자료형으로 바꾸는 작업이다.

* 암시적 자료형 변환(implicit type casting)
    : *변환 시 데이터 손실이 없어 컴파일러에서 자연적으로 처리되는 변환이다. 흔히 유사한 자료형을 작은 크기에서 큰 크기로 키울 때 자동적으로 발생한다.*

    ```csharp
short A = 1;    // 2바이트 정수형
int B = A;      // 4바이트 정수형
    ```

* 명시적 자료형 변환(explicit type casting)
    : *변환 시 데이터 손실의 위험을 감수하며 데이터의 자료형을 바꾼다. C 형식 캐스팅은 소괄호 `()` 안에 자료형을 기입한다.*
    
    ```csharp
float A = 1.9;  // 4바이트 부동소수점
int B = (int)A; // 4바이트 정수형 - 완전 호환 불가: 정수 부분만 반환된다.
    ```

### 도우미 클래스 변환
도우미 클래스(helper class)는 특정 기능을 제공하므로써 *도와주는* 클래스 유형이다. `System.Convert` 클래스는 도우미 클래스 중 하나로써 자료형 변환에 사용된다.

```csharp
int    ivalue = System.Convert.ToInt32(Console.ReadLine());
bool   bvalue = System.Convert.ToBoolean(Console.ReadLine());
double dvalue = System.Convert.ToDouble(Console.ReadLine());
```

### `is` 연산자
`is` 연산자는 주어진 데이터가 비교하고자 하는 자료형과 호환되는지 확인하는 C# 프로그래밍 언어의 연산자이다. 호환이 되면 논리적 참(`true`)이 반환되며, 그렇지 않으면 거짓(`false`)이 반환된다.

```csharp
variable is Type;
```

### `typeof` 연산자
`typeof` 연산자는 런타임 도중에 해당 자료형이 어느 `System.Type` 시스템 자료형 객체에 해당하는지 반환한다.

```csharp
typeof(int);            // >> 출력: System.Int32
```

`typeof` 연산자는 변수나 객체 등의 데이터를 인자로 받지 않으므로, 만일 데이터의 `System.Type`을 구하려면 `GetType()` 메소드를 사용하도록 한다.

```csharp
int variable;
variable.GetType();     // >> 출력: System.Int32
```

## 연산자
연산자(operator)는 피연산 데이터를 조작할 수 있는 가장 간단한 형태의 데이터 연산 요소이다. 연산자는 피연산자의 접두부, 접미부, 혹은 두 데이터 사이에 위치시켜 사용한다.

### 산술 연산자
산술 연산자(arithmetic operator)는 정수나 부동소수점 자료형 산술 연산에 사용된다: 가장 기본적인 `+`, `-`, `*`, `/` 사칙 연산자부터 나눗셈의 나머지 `%`를 구할 수 있다. 산술 연산을 쉽게 읽을 수 있도록 숫자와 산술 연산자 사이에 공백을 넣어도 연산에는 아무런 영향을 주지 않으므로 무관한다.

### 할당 연산자
할당 연산자(assignment operator)는 할당 기호(`=`)와 조합하여 산술 연산 코드를 더욱 간결하게 작성할 수 있도록 한다.

| 연산자  | 예시       | 동일                                |
|:----:|----------|-----------------------------------|
| `=`  | `x = y`  | `x = y`; `x` 변수에 `y` 변수의 값을 할당하고, 할당된 값을 반환한다. |
| `+=` | `x += y` | `x = x + y`                       |
| `-=` | `x -= y` | `x = x - y`                       |
| `*=` | `x *= y` | `x = x * y`                       |
| `/=` | `x /= y` | `x = x / y`                       |
| `%=` | `x %= y` | `x = x % y`                       |

> 여기서 `=` 연산자가 할당된 값을 반환한다는 것을 통해 다음과 같은 표현식을 구현할 수 있다.
>
> ```csharp
> int variable;
> System.Console.WriteLine(variable = 3);
> ```
> ```
> 3
> ```

### 증감 연산자
증가 연산자(increment operator) 및 감소 연산자(decrement operator)는 데이터를 1만큼 증가 혹은 감소하는데 간략하게 한 줄로 표현할 수 있도록 한다.

| 연산자      | 예시        | 설명                |
|----------|-----------|-------------------|
| `++` 접두사 | `x = y++` | `x = y; y = y + 1;` |
| `++` 접미사 | `x = ++y` | `y = y + 1; x = y;` |
| `--` 접두사 | `x = y--` | `x = y; y = y - 1;` |
| `--` 접미사 | `x = --y` | `y = y - 1; x = y;` |

### 비교 연산자
비교 연산자(relational operator)는 두 데이터를 대조하는데 사용된다: 초과 `>`와 미만 `<`, 이상 `>=`과 이하 `<=`, 그리고 동일 `==`와 다름 `!=` 관계 부합 여부에 따라 논리적 참 혹은 거짓이 반환된다.

### 논리 연산자
논리 연산자(logical operator)는 논리 자료형의 조합이 논리적으로 참인지 거짓인지 판별한다.

| 연산자  | 논리  | 설명                                        |
|:----:|-----|-------------------------------------------|
| `&&` | 논리곱 | 모든 데이터가 참이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.     |
| `||` | 논리합 | 하나 이상의 데이터가 참이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다. |
| `!`  | 보수  | 참을 거짓으로, 또는 거짓을 참으로 변경한다.                 |

# C#: 조건 및 루프
조건문(conditional statement) 및 반복문(loop statement)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 C# 프로그래밍의 조건에 따라 실행하는 조건문과 반복적으로 실행하는 반복문을 소개한다.

## `if` 조건문
`if` 조건문은 조건 혹은 논리가 참(`true`)일 경우 코드를 실행하며, 거짓(`false`)일 경우에는 코드를 실행하지 않는다.

```csharp
if (condition)
{
    statements;
}

// 간략화된 문장
if (condition) statement;
```

### `else` 조건문
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 조건부가 거짓(`false`)으로 판정되면 실행할 코드를 포함한다.

```csharp
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
`elif` 조건문은 `else`와 `if` 조건문의 조합으로 이전 조건이 거짓(`false`)일 때 새로운 조건을 제시한다.

```csharp
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

## 조건 연산자
조건 연산자(ternary operator; `?:`)는 세 가지 인수만을 사용하여 조건문을 아래와 같이 간략하게 표현한다.

```csharp
condition ? true_return : false_return;
```

조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에 유용하다.

### `as` 연산자
`as` 연산자는 데이터를 주어진 자료형으로 캐스팅하여 반환하는데, 만일 데이터와 자료형의 호환성 문제로 변환이 불가하면 `null`을 반환한다.

```csharp
/* "as" 연산자 */
variable as Type;

/* 동일:
variable is Type ? (Type)variable : (Type)null;
*/
```

## `switch` 조건문
`switch` 조건문은 전달받은 인자를 `case`의 상수와 동일한지 비교하여 논리가 참일 경우 해당 지점부터 코드를 실행하며, 거짓일 경우에는 다음 `case`로 넘어간다. 선택사항으로 `default` 키워드를 통해 어떠한 `case` 조건에도 부합하지 않으면 실행될 지점을 지정한다.

```csharp
switch (argument)
{
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
}
```

`switch` 조건문이 어느 `case` 코드를 실행할지 결정하는 것이라고 쉽사리 착각할 수 있으나, 이는 사실상 `break` 탈출문 덕분이다. 탈출문이 없었더라면 아래 예시 코드처럼 해당 조건의 `case` 코드 실행을 마쳤어도 다음 `case` 코드로 계속 진행하는 걸 확인할 수 있다. 즉, `case` 키워드는 코드 실행 영역을 분별하는 것이 아니라 진입 포인트 역할을 한다.

```csharp
int variable = 2;

// switch 조건문의 동작 예시
switch (int variable)
{
case 1:
    System.Console.WriteLine("Statement 1");

case 2:
    System.Console.WriteLine("Statement 2");

case 3:
    System.Console.WriteLine("Statement 3");
 
default:
    System.Console.WriteLine("Statement 4");
}
```
```
Statement 2
Statement 3
Statement 4
```

## `while` 반복문
`while` 반복문은 조건 혹은 논리가 참(`true`)일 동안 코드를 반복적으로 실행하며, 거짓(`false`)일 경우에는 반복문을 종료한다.

```csharp
while (condition)
{
    statements;
}

// 간략화된 문장
while (condition) statement;
```

### `do`-`while` 반복문
`do`-`while` 반복문은 코드를 우선 실행하고 조건 혹은 논리가 참(`true`)일 경우 코드를 반복하며, 거짓(`false`)일 경우에는 반복문을 종료한다.

```csharp
do
{
    statements
} while (condition);
```

### `break` 문
`break` 문(일명 탈출문)은 반복문을 조기 종료시키는데 사용된다. 반복 실행 도중에 탈출문을 마주치는 즉시 가장 인접한 반복문으로부터 탈출한다.

### `continue` 문
`continue` 문은 반복문의 나머지 실행문을 전부 건너뛰어 다시 반복문의 조건부로 돌아간다. `break`와 달리 반복문은 종료되지 않고 여전히 살아있다.

## `for` 반복문
`for` 반복문은 조건 혹은 논리가 참(`true`)일 동안 코드를 반복적으로 실행하며, 거짓(`false`)일 경우에는 반복문을 종료한다. `for` 반복문은 조건 평가 외에도 지역 변수를 초기화 및 증감할 수 있는 인자가 있다.

```csharp
for (initialize; condition; increment)
{
    statements;
}

// 간략화된 문장
for (initialize; condition; increment) statement;
```

`for` 반복문의 반복 절차는 다음과 같다:

1. 변수 할당: `initialize`에서 반복문 지역 변수를 정의하거나 외부 변수를 불러와 반복문을 위한 초기값을 할당한다.
2. 조건 평가: `condition`에서 조건을 평가한다. 논리가 참이면 코드를 반복적으로 실행하며, 거짓일 경우에는 반복문을 종료한다.
3. 변수 증감: 블록 내의 코드가 마무리되었거나 `continue` 문을 마주하면 `increment`에서 변수를 증감하고, "조건 평가" 단계로 돌아가 반복한다.

## `foreach` 반복문
`foreach` 반복문은 조건 만족 여부가 아닌 주어진 범위 내에서만 반복한다. 범위로 사용되는 데이터는 요소를 하나씩 나열할 수 있는 [컬렉션](#c-컬렉션)(collection)을 일반적으로 사용한다.

```csharp
foreach (element in range)
{
	statements;
}

// 간략화된 문장
foreach (element in range) statement;
```

# C#: 컬렉션
C# 프로그래밍 언어는 여러 데이터를 하나의 변수에 저장하는 컬렉션(collection)을 생성할 수 있다. 컬렉션은 여러 데이터를 한 번에 관리하는 편리성을 제공한다. 본 장에서는 .NET에서 활용할 수 있는 몇 가지의 컬렉션 유형들을 소개한다.

## 배열
배열(array)은 동일한 자료형의 데이터를 일련의 순서로 담는 저장공간이다. 배열을 선언할 시, 자료형 뒤에 대괄호(`[]`)를 기입하여 변수가 배열임을 명시해야 한다.

```csharp
/* 배열 선언 */
int[] arr;
```

배열에 별도의 초기화가 이루어지지 않으면 기본값으로 빈 데이터 `null`을 갖는다. 배열 객체를 생성하려면 `new` 키워드와 함께 배열 자료형 및 크기를 지정하여 객체화(instantiation)한다.

```csharp
/* 배열 선언 및 객체화 */
int[] arr = new int[size];

/* 동일:
int[] arr;
arr = new int[size];
*/
```

> C/C++ 프로그래밍 언어와 달리, C# 프로그래밍 언어는 변수로 배열의 크기를 지정할 수 있다.

배열 객체화 과정에서 초기화를 하지 않으면 모든 요소들은 배열 자료형의 기본값을 갖는다. 배열 객체의 초기화는 중괄호(`{}`)를 사용하여 데이터를 순번에 맞게 배열 요소에 할당한다.

```csharp
/* 배열 선언 및 객체 초기화 */

int[] arr = new int[size] {value1, value2, ... };
// 설명: 정해진 `size` 개수만큼 요소를 채워야 하며, 그렇지 않을 시 컴파일 오류가 발생한다.

int[] arr = new int[] {value1, value2, ... };
// 설명: 초기의 배열 크기는 할당되는 요소 개수만큼 동적으로 설정된다.

int[] arr = {value1, value2, ... };
// 설명: 위의 초기화 방법보다 더 간략화된 구문이다.
```

배열 자체를 호출하면 할당된 데이터를 불러오지 않으며, 그 대신 배열의 자료형이 반환된다. 단, 자료형이 `char` 문자인 배열은 문자들을 하나씩 나열한 게 문자열처럼 반환된다.

```csharp
int[] arr = new int[size] {value1, value2, ... };

System.Console.WriteLine(arr);      // 출력: System.Int32[]
System.Console.WriteLine(arr[0]);   // 출력: value1
```

이러한 배열의 특징으로 인해 배열의 정의 외에는 한꺼번에 할당이 불가능하다. 그렇지만 0번부터 시작해 대괄호(`[]`)로 각 요소를 인덱싱하여 하나씩 할당하는 방법이 있다.

```csharp
int[] arr = new int[3];

/* 배열의 개별 요소 할당 */
arr[0] = value1;
arr[1] = value2;
arr[2] = value3;
```

### `new` 키워드
`new` 키워드는 자료형의 객체를 생성, 즉 객체화에 사용되는 연산자이다.

```csharp
object instance = new object();
```

만일 변수와 동일한 자료형의 객체를 생성하려면, 아래와 같이 구문을 간략화할 수 있다.

```csharp
object instance = new();
```

### 다차원 배열
배열은 또 다른 배열을 요소로 가질 수 있으나, 이들은 모두 동일한 자료형과 배열 크기를 가져야 한다.

```csharp
/* 다차원 배열 1 */
int[ , ] arr = new int[3,2] { {value1, value2}, {value3, value4}, {value5, value6} };

/* 다차원 배열 2 */
int[ , ] arr = new int[ , ] { {value1, value2}, {value3, value4}, {value5, value6} };

/* 다차원 배열 3 */
int[ , ] arr = { {value1, value2}, {value3, value4}, {value5, value6} };
```

다차원 배열은 한 번의 객체화로 생성되었기 때문에, 비록 배열 안에 또 다른 배열이 있다 하더라도 전부 하나의 데이터로 간주된다.

### 가변 배열
가변 배열(jagged array)은 크기와 상관없이 또 다른 동일 자료형 배열을 요소로써 가질 수 있다.

```csharp
int[][] arr = new int[3][] {
    new int[] {3}, 
    new int[] {1, 4, 1}, 
    new int[] {5, 9}
};
```

가변 배열은 이미 객체화를 통해 메모리가 할당된 배열을 요소로 가지므로, 가변 배열은 두 개 이상의 배열 데이터가 활용되는 것이다.

## 컬렉션
> 본 내용은 차후에 소개될 [제네릭](#c-제네릭)과 연관이 깊은 부분이므로, 필수는 아니지만 해당 장을 읽으면 이해에 도움이 된다.

[컬렉션](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections)(collection)은 내장된 데이터 요소에 따라 크기를 확장하고 축소시킬 수 있는 또 다른 배열 형식의 데이터이며, 컬렉션마다 고유의 특징과 기능이 탑재되어 있다. 제네릭(generic) 및 비제네릭(non-generic) 컬렉션으로 나뉘어지는데, 간단히 설명하자면 제네릭은 홑화살괄호(`<>`) 안애 원하는 자료형을 넣어 객체화 할 수 있는 클래스이다.

```csharp
using System.Collections.Generic;

/* 제네릭 컬렉션<정수형>의 객체화 */
Collection<int> collectionName = new();
```

### `List` 컬렉션
`List<T>`는 배열과 유사한 제네릭 컬렉션이지만, 요소 추가 및 제거를 통해 컬렉션 크기 및 요소 관리를 유동적으로 제어할 수 있도록 한다. C++ 프로그래밍 언어의 벡터 클래스와 동일하다고 간주할 수 있다.

```csharp
using System.Collections.Generic;

/* List<T> 컬렉션<정수형>의 객체화 */
List<int> LIST = new();
```
----
```csharp
using System.Collections.Generic;

/* List<T> 컬렉션<정수형>의 초기화 */
List<int> LIST = new() {3, 1, 4, 1, 5};

System.Console.WriteLine(LIST[0]);
```
```
3
```

### `SortedList` 컬렉션
`SortedList<TKey,TValue>`는 기존의 `List<T>` 컬렉션에서 요소가 `{key, value}` 형식으로 변경된 제네릭 컬렉션이다. 여기서 `key`는 요소의 `value`를 호출하는데 사용되는 식별자 역할을 한다. 요소의 순서는 `key`를 기준으로 자동적으로 정리된다.

```csharp
using System.Collections.Generic;

/* SortedList<TKey,TValue> 컬렉션<문자열,정수형>의 객체화 */
SortedList<string, int> SLIST = new();
```
----
```csharp
using System.Collections.Generic;

/* SortedList<TKey,TValue> 컬렉션<문자열,정수형>의 초기화 */
SortedList<string, int> SLIST = new() { {"B", 3}, {"A", 1} };

System.Console.WriteLine(SLIST["B"]);
```
```
3
```

### `Dictionary` 컬렉션
`Dictionary<TKey,TValue>`는 기존의 `List<T>` 컬렉션에서 요소가 `{key, value}` 형식으로 변경된 제네릭 컬렉션이다. 여기서 `key`는 요소의 `value`를 호출하는데 사용되는 식별자 역할을 한다. 요소의 순서는 자동적으로 정리되지 않는다.

```csharp
using System.Collections.Generic;

/* Dictionary<TKey,TValue> 컬렉션<문자열,정수형>의 객체화 */
Dictionary<string, int> DICT = new();
```
----
```csharp
using System.Collections.Generic;

/* Dictionary<TKey,TValue> 컬렉션<문자열,정수형>의 초기화 */
Dictionary<string, int> DICT = new() { {"B", 3}, {"A", 1} };

System.Console.WriteLine(DICT["B"]);
```
```
3
```

### `BitArray` 컬렉션
`BitArray`는 오로지 논리적 참(`false`) 혹은 거짓(`true`)만을 저장하는 컬렉션이다. 이미 자료형이 논리형으로 굳혀졌기 때문에 비제네릭 컬렉션으로 분류된다. `BitArray` 컬렉션의 크기는 객체화 이후에 변경 불가하다.

```csharp
using System.Collections;

/* BitArray 컬렉션의 객체화 */
BitArray BITARR = new(4);
```
----
```csharp
using System.Collections;

/* BitArray 컬렉션의 초기화 */
bool[] arr = new bool[4] {false, true, false, true};
BitArray BITARR = new(arr);

System.Console.WriteLine(BITARR[0]);
```
```
False
```

### `Stack` 컬렉션
`Stack<T>`은 선형적 LIFO(Last-In-First-Out), 즉 마지막에 입력된 데이터가 먼저 출력되는 스택 메모리 구조를 따르는 제네릭 컬렉션이다. `Stack<T>` 컬렉션은 개별 요소를 대괄호(`[]`)로 호출할 수 없다.

```csharp
using System.Collections.Generic;

/* Stack<T> 컬렉션<정수형>의 객체화 */
Stack<int> STACK = new();
```
----
```csharp
using System.Collections.Generic;

/* Stack<T> 컬렉션<정수형>의 초기화 */
int[] arr = new bool[4] {1, 2, 3, 4};
Stack<int> STACK = new(arr);

System.Console.WriteLine(STACK.Pop());
System.Console.WriteLine(STACK.Pop());
```
```
4
3
```

### `Queue` 컬렉션
`Queue<T>`는 선형적 FIFO(First-In-First-Out), 즉 먼저 입력된 데이터가 먼저 출력되는 큐 메모리 구조를 따르는 제네릭 컬렉션이다. `Queue<T>` 컬렉션은 개별 요소를 대괄호(`[]`)로 호출할 수 없다.

```csharp
using System.Collections.Generic;

/* Queue<T> 컬렉션<정수형>의 객체화 */
Queue<int> QUEUE = new();
```
----
```csharp
using System.Collections.Generic;

/* Queue<T> 컬렉션<정수형>의 초기화 */
int[] arr = new bool[4] {1, 2, 3, 4};
Queue<int> QUEUE = new(arr);

System.Console.WriteLine(STACK.Dequeue());
System.Console.WriteLine(STACK.Dequeue());
```
```
1
2
```

### `HashSet` 컬렉션
`HashSet<T>`는 중복되는 요소를 갖지 않으므로써 유일성을 유지하는 제네릭 컬렉션이다. `HashSet<T>`는 고성능의 수학 집합 연산을 수행하나, 개별 요소를 대괄호(`[]`)로 호출할 수 없다.

```csharp
using System.Collections.Generic;

/* HashSet<T> 컬렉션<정수형>의 객체화 */
HashSet<int> HSET = new();
```
----
```csharp
using System.Collections.Generic;

/* HashSet<T> 컬렉션<정수형>의 초기화 */
int[] arr = new bool[6] {1, 2, 3, 4, 1, 3};
HashSet<int> HSET = new(arr);

System.Console.WriteLine(HSET.Count);
```
```
4
```

# C#: 메소드
C# 프로그래밍 언어는 하나의 핵심 함수인 `Main()`을 기점으로 모든 프로그램이 실행된다. 메소드에 대한 이해는 매우 중요하며, 원하는 작업을 수행하도록 메소드를 제작하고 필요할 때마다 사용하여 효율성을 높일 수 있다. 본 장은 C# 프로그래밍 언어에서 사용자 정의 메소드의 생성 및 사용 방법에 대하여 소개한다.

## 메소드
메소드(method)는 데이터를 처리하는 클래스와 객체의 구성 맴버 중 하나이며, 재사용이 가능하고 호출 시 데이터 처리 또는 반환하여 유동적인 프로그램 코딩을 가능하게 한다. 메소드는 클래스 혹은 객체 뒤에 맴버 연산자(`.`)로 소괄호와 함께 호출되는 `object.method()` 형식으로 구별된다.

```csharp
System.Console.WriteLine("Hello World!");
// "System.Console" 클래스의 "WriteLine()" 메소드
```

함수의 기능을 정의하기 위해서는 두 가지의 구성요소가 반드시 필요하다:

* 코드 블록(`{}`): *메소드를 호출할 때, 실행되는 코드가 들어있다.*
* 자료형: *메소드가 종료될 때, 반환되는 데이터의 자료형을 결정한다.* 

```csharp
/* 메소드 정의 */
int function()
{
    return 1 + 2;
}

/* 메소드 호출 */
function();     // >> 출력: 3
```

한 줄로 표현될 수 있는 매우 간단한 메소드는 다음 코드처럼 간략화 할 수 있다.

```csharp
/* 메소드 정의: 간략화 */
int function() => 1 + 2;
```

C# 프로그래밍 언어는 객체지향 프로그래밍 언어가 갖는 [캡슐화](#캡슐화)(encapsulation) 성질에 의해 스크립트 상에서 메소드 정의 순서가 뒤늦어도 호출하여 실행시키는데 영향을 미치지 않는다. 하지만 메소드 안에 또 다른 메소드를 정의하는 것은 허용되지 않는다.

### `return` 반환문
`return` 반환문은 함수로부터 데이터를 함수에 지정된 자료형으로 반환하는 함수 전용 문장이다. 반환문이 실행되면 하단에 코드가 남아 있음에도 불구하고 함수는 즉시 종료된다. 함수의 자료형이 `void`이면 반환문은 필요가 없으나, 조기 종료를 위해 아무런 데이터를 반환하지 않는 `return;`을 사용할 수 있다.

### 매개변수 및 전달인자
다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* 전달인자 (argument)
    : *전달인자, 혹은 간략하게 "인자"는 함수로 전달되는 데이터이다.*

* 매개변수 (parameter)
    : *전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수 선언은 함수의 소괄호(`()`) 내에서 이루어진다.*

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 | 구문          | 설명                                                            |
|:---:|:-----------:|---------------------------------------------------------------|
| `=` | `arg=value` | 전달인자가 없으면 기본값 `value`가 대신 매개변수에 할당된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |
| `:` | `arg:value` | 전달인자 `value`를 매개변수 `arg`로 넘겨주며, 매개변수의 순서는 중요하지 않다.            |

아래의 예제는 메소드의 매개변수와 전달인자가 어떻게 동작하는지 보여준다.

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        /* 메소드 호출 */
        Console.WriteLine(method(1, 3.0));                // >> 출력: 4.0
        Console.WriteLine(method(1));                     // >> 출력: 8.0
        Console.WriteLine(method(arg2: 3.0, arg1: 1));    // >> 출력: 4.0
    }
    
    /* 메소드 선언 */
    static double method(int arg1, double arg2 = 7.0) => arg1 + arg2;
}
```

메소드에서 전달인자를 매개변수로 전달하는 방법에는 값에 의한 호출(call by value) 그리고 참조에 의한 호출(call by reference)이 있다.

* 값에 의한 호출 
    : *값에 의한 호출은 오로지 전달인자의 값만 매개변수로 건네준다. 전달인자와 매개변수는 별개의 존재로 취급되어, 매개변수의 변화는 전달인자에 아무런 영향을 주지 않는다.*

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(A, B);    // >> 출력: 4 (1 + 3.0)
            Console.WriteLine(A, B);    // >> 출력: 4 (1 + 3.0)
        }
        
        /* 값에 의한 호출 */
        static int method(int arg1, int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```

* 참조에 의한 호출: `ref` 키워드
    : *`ref` 키워드를 사용하는 참조에 의한 호출은 전달인자 자체를 매개변수로 건네준다. 전달인자와 매개변수는 하나의 존재로 취급되어, 매개변수의 변화는 전달인자에 그대로 영향을 준다.*

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(ref A, ref B);    // >> 출력: 4 (1 + 3.0)
            Console.WriteLine(ref A, ref B);    // >> 출력: 7 ((1 + 3.0) + 3.0)
        }
        
        /* 참조에 의한 호출 */
        static int method(ref int arg1, ref int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```

* 참조에 의한 호출: `in` 키워드
    : *`in` 키워드를 사용한 참조에 의한 호출에서 전달인자와 매개변수는 하나의 존재로 취급되지만 매개변수는 읽기 전용이 되어 데이터 변동이 불가능하다. 매개변수 데이터를 수정할 수 없으므로 전달인자는 그대로 유지된다.*

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(in A, in B);    // 컴파일 오류: "arg1 += arg2;" 실행 불가!
        }
        
        /* 참조에 의한 호출: in 키워드 */
        static int method(in int arg1, in int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```
    ```
    Cannot assign to variable 'in int' because it is a readonly variable
    ```

* 참조에 의한 호출: `out` 키워드
    : *`out` 키워드를 사용한 참조에 의한 호출에서 전달인자와 매개변수는 하나의 존재로 취급되지만 오로지 초기화되지 않은 전달인자만 가능하다. 그리고 매개변수는 메소드가 종료되기 전에 반드시 초기화되어야 한다.*

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A, B;    // 초기화되지 않은 변수
            
            Console.WriteLine(out A, out B);              // >> 출력: 4 (1 + 3.0)
            Console.WriteLine("A: {0}, B: {1}", A, B);    // >> 출력: "A: 4, B: 3"
        }
        
        /* 참조에 의한 호출: out 키워드 */
        static int method(out int arg1, out int arg2)
        {
            arg1 = 1; arg2 = 3;
            arg1 += arg2;
            return arg1;
        }
    }
    ```

### 정적 변수
정적 변수(static variable)는 프로그램이 실행되는 동안 함수를 탈출하여도 데이터가 소멸되지 않고 보존되는 `static` 키워드의 특수한 지역 변수이다. 해당 함수를 다시 호출하면 함수 종료 직전의 데이터를 그대로 이어서 사용할 수 있다. 이러한 성질로 정적 변수는 C# 프로그래밍 언어에서 전역 변수의 대안으로 사용되고 있다.

```csharp
class Program {

    /* 정적 변수: public은 외부에서 변수 접근이 가능하도록 한다. */
    public static int variable;

    static void Main() {

    }
}
```

## 메소드 오버로딩
메소드 오버로딩(method overloading)은 동일한 이름의 메소드가 전달받은 인자의 자료형 및 개수에 따라 달리 동작하는 것을 의미한다. 오버로딩 메소드들은 동일한 자료형과 식별자가 지정되지만 제각각의 정의를 가진다.

```csharp
using System;

class Program
{
	static void Main(string[] args)
    {
        Console.WriteLine(method(1, 3));        // >> 출력: 4
        Consoel.WriteLine(method(1.0, 3.0));    // >> 출력: -2.0
    }
    
    // 오버로딩된 메소드의 정의 1
    static double method(int arg1, int arg2) => arg1 + arg2;
    
    // 오버로딩된 메소드의 정의 2
    static double method(double arg1, double arg2) => arg1 - arg2;
}
```

## 시작점
시작점(entry point)는 프로그램이 시작되는 부분을 의미하며, C# 프로그래밍 언어의 경우 `Main()` 정적 메소드에서부터 코드가 실행된다. 시작점은 호출이 존재하지 않으며, 유일해야 하므로 복수의 `Main()` 정적 메소드가 존재하거나 찾지 못하면 요류가 발생하여 컴파일이 불가하다.

```csharp
class Program
{
    // 시작점: 매개변수를 가진 Main() 정적 메소드
    static void Main(string[] args)
    {
    	statements;
    }
}
```

`Main()` 시작점의 `string[] args` 매개변수는 터미널 명령창을 통해 전달된 텍스트 데이터를 문자열 배열로 받는다.

```
./app.exe option1 option2
```

| 전달인자   | 데이터     |
|-----------|-----------|
| `args[0]` | `option1` |
| `args[1]` | `option2` |

## `delegate` 자료형
`delegate` 자료형은 특정 매개변수와 반환 자료형을 갖는 메소드를 캡슐화하는 객체를 생성한다.

> C/C++ 프로그래밍 언어에 비교하면 [함수 포인터](../ko.PRGMING_Cpp/#함수-포인터)와 동일한 역할을 한다.

아래는 하나의 문자열 매개변수와 보이드를 반환하는 메소드를 위임(delegate)받을 수 있는 `delegate` 대리자를 객체화하는 예시 코드이다.

```csharp
/* delegate 선언 */
delegate void Del(string arg);
```

`delegate` 객체는 언제든지 다른 메소드를 할당받아 캡슐화할 수 있다. 아래 예시 코드는 `static` 한정자가 있는 정적 메소드만을 보여주고 있지만, 일반 메소드도 `delegate` 객체에서 캡슐화할 수 있다.

```csharp
static void Main(string[] args)
{
    // method1 캡슐화
    Del handle = method1;
    handle("Hello World!");

    // method2 캡슐화
    handle = method2;
    handle("Hello World!");
}

static void method1(string arg)
{
    Console.WriteLine(arg.ToUpper());
}

static void method2(string arg)
{
    Console.WriteLine(arg.ToLower());
}
```
```
HELLO WORLD!
hello world!
```

### 콜백 메소드
[콜백 메소드](../ko.PRGMING_Cpp/#콜백-함수)(callback method)는 인자로 전달되는 메소드이다. 콜백 메소드를 전달받는 메소드, 일명 호출 메소드(calling method)는 코드 블록 내에서 매개변수 호출을 통해 콜백 메소드를 실행한다. `delegate` 자료형을 매개변수로 사용하여 콜백 메소드를 구현할 수 있다.

```csharp
void method(string arg, Del callback)
{
    callback(arg);
}
```

# C#: 클래스
[객체지향 프로그래밍](https://ko.wikipedia.org/wiki/객체_지향_프로그래밍)(object-oriented programming; OOP)은 클래스와 객체 사용을 기반한는 프로그래밍 기법이다. 본 장은 C# 프로그래밍 언어에서 객체지향 프로그래밍을 구현하기 위한 사용자 정의 클래스의 생성 및 사용 방법에 대하여 소개한다.

## 객체
객체(object 혹은 instance)는 데이터를 저장할 수 있는 필드(field)와 데이터를 처리 할 수 있는 메소드(method)들을 하나의 데이터로 캡슐화한 데이터이다. 메소드 중에서도 필드의 값만 반환해주는 메소드를 속성(property)이라고 하는데, 이는 필드에 직접 접근하지 못하게 하여 의도치 않은 필드 데이터 변경을 방지한다.

| 맴버   | 구문              | 설명                                                                                 |
|:----------:|---------------------|---------------------------------------------------------------------------------------------|
| 필드    | `object.field`      | 클래스 및 객체에서 데이터를 저장하는 변수를 지칭한다; 메소드의 매개변수 및 지역변수는 필드가 아니다. |
| 메소드   | `object.method()`   | 클래스 및 객체에서 데이터를 처리하거나 역할을 한다; 메소드에 따라 인자를 전달받거나 데이터를 반환할 수 있다. |
| 속성 | `object.property()` | 클래스 및 객체의 필드 값을 간접적으로 반환하는 메소드를 지칭한다; 필드를 직접 접근하지 않으므로, 필드의 값이 의도치 않게 변경되는 것을 방지한다. |

```csharp
string variable = "Hello World!";
System.Console.WriteLine(variable.Length);
// "variable"이란 이름을 가진 문자열 객체의 "Length" 필드를 사용하여 값 널 문자를 제외한 총 문자 개수를 반환한다.
```
```
12
```

## 캡슐화
캡슐화(encapsulation)는 객체의 핵심으로 아래의 특성을 가진다.

1. 변수와 함수를 하나의 객체로 결합한다.
2. 우연치 않은 수정을 방지하기 위해 이러한 변수 및 함수에 대한 직접적인 접근을 외부로부터 제한할 수 있다.

## 클래스
클래스(class)는 객체를 생성하는데 사용된다. 클래스는 `class` 키워드를 사용하여 정의되며, 클래스 내부에는 객체의 속성과 메소드가 되는 변수와 함수를 정의한다. 클래스로부터 객체를 생성하는 절차를 *객체화(instantiation)*라고 한다. 아래는 `class` 키워드를 사용하여 제작한 사용자 정의 클래스의 간단한 예시 중 하나이다.

```csharp
/* 클래스 생성하기 */
class CLASS
{
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
    	// 객체화
        CLASS instance = new CLASS();

        // 그러므로...
        instance.field1;       // >> 출력: 1
        instance.field2;       // >> 출력: 3.0
        instance.method(2);    // >> 출력: 2.0 (= 1 + 3.0 - 2)
    }
}
```

### 생성자
생성자(constructor)는 객체화가 이루어질 때마다 자동적으로 실행되는 특수한 메소드이다. 비록 생성자는 선택사항이지만, 만일 생성자를 정의한다면 메소드의 이름은 클래스 식별자와 동일해야 하며 객체화 과정에서 객체로 전달할 인자의 자료형과 개수를 결정해야 한다. 반환 자료형은 `void`로 고정되어 있어 자료형 지정을 하지 않는다. 생성자는 흔히 객체화 단계에서 맴버 필드를 초기화하는 용도로 사용된다.

```csharp
/* 클래스 생성하기 */
class CLASS
{
    /* 생성자 */
    public CLASS(int arg1, double arg2)
    {
        field1 = arg1;
        field2 = arg2;
    }
    
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화
        CLASS instance = new CLASS(1, 3.0);
    }
}
```

만일 생성자가 전달인자를 받도록 정의되었으면 반드시 소괄호(`()`)를 통해 값을 전달하도록 한다. 단, 클래스에 정의된 생성자가 없거나 혹은 생성자가 전달인자를 받지 않을 때에는 소괄호를 사용하지 않는다. 메소드 오버로딩에 의해 여러 생성자를 정의할 수 있다.

### 종료자
종료자(finalizer), 혹은 소멸자(destructor)는 객체가 메모리에서 할당 해제되어 소멸되기 직전에 자동적으로 실행되는 특수한 메소드이다. 비록 소멸자는 선택사항이지만, 만일 소멸자를 정의한다면 메소드의 이름은 클래스 식별자와 동일하되 물결표(`~`)를 접두사로 가져야 한다. 반환 자료형은 `void`로 고정되어 있어 자료형 지정을 하지 않는다.

```csharp
/* 클래스 생성하기 */
class CLASS
{
    /* 종료자 */
    ~CLASS()
    {
        statements
    }
    
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화
        CLASS instance = new CLASS(1, 3.0);
    }
}
```

소멸자는 전달인자를 허용하지 않아 메소드 오버로딩이 불가하므로 하나만 정의될 수 있다.

### `this` 키워드
`this` 키워드는 객체 스스로를 가리키는 연산자로, 이를 통해 객체 내에서 맴버 필드 및 메소드 접근이 가능하다.

```csharp
/* 클래스 생성 */
class CLASS{
    private int field;
    
    public int method() => this.field;
}
```

## 정적 클래스
클래스에 선언된 맴버들은 객체를 통해 접근할 수 있으나, 클래스 자체에서 직접 접근할 수는 없다. 그러나 `static` 키워드로 정적 클래스(static class)로 선언하면 객체화 없이 클래스에서 맴버를 접근할 수 있다. 단, 정적 클래스는 오로지 정적 맴버만 가질 수 있으며 객체화를 할 수 없다.

```csharp
/* 정적 클래스 생성 */
static class CLASS
{
    public static int field1 = 1;
    public static double field2 = 3.0;
    
    public static double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
        // 그러므로...
        CLASS.field1;       // >> 출력: 1
        CLASS.field2;       // >> 출력: 3.0
        CLASS.method(2);    // >> 출력: 2.0 (= 1 + 3.0 - 2)
        
        // 객체화: 오류!
        CLASS instance = new CLASS();
    }
}
```
```
Error	CS0723	Cannot declare a variable of static type 'CLASS'
Error	CS0712	Cannot create an instance of the static class 'CLASS'
```

정적 클래스의 대표적인 예시로는 콘솔 터미널 입출력 기능이 내포된 `Console` 클래스가 있으며, 이들은 객체화 없이도 특정 목적의 필드 및 메소드만을 제공하는 역할을 가진다.

### 정적 생성자
정적 생성자(static constructor)는 정적 클래스의 맴버가 호출될 때마다 실행되는 메소드이다.

```csharp
/* 정적 클래스 생성 */
static class CLASS
{
    /* 정적 생성자 */
    public static CLASS()
    {
        statements;
    }
    
    public static int field1 = 1;
    public static double field2 = 3.0;
    
    public static double method(int arg) => field1 + field2 - arg;
}
```

정적 생성자는 선택사항이며, 전달인자를 허용하지 않아 함수 오버로딩이 불가하므로 하나만 선언할 수 있다.

## 한정자
한정자(modifier)는 객체 맴버를 선언할 때 성질을 지정하기 위해 사용된다.

1. `static` 한정자
    : 객체화 없이 클래스에서 바로 접근할 수 있는 정적 맴버, 혹은 정적 맴버만을 가지는 정적 클래스를 선언하는데 사용된다.

    ```csharp
    /* 정적 필드 */
    static int field = 3;
    
    /* 정적 메소드 */
    static void method()
    { 
        statements;
    }
    ```

2. `const` 한정자
    : 초기화 이후 값 변동이 불가한 정적 상수(constant) 필드를 선언하는데 사용된다. 해당 맴버는 반드시 선언 시 초기화가 되어야 하며, 그렇지 않으면 컴파일 오류가 발생한다.

    ```csharp
    /* (정적) 상수 필드 */
    const int field = 3;
    ```

3. `readonly` 한정자
    : 초기화 이후 값 변동이 불가한 비정적(non-static) 비완전상수(semi-constant) 필드를 선언하는데 사용된다. 해당 맴버는 선언 단계는 물론, 생성자를 통해서도 초기화가 될 수 있다.

    ```csharp
    // (비정적) 읽기전용 필드
    readonly int field;
    ```

4. `sealed` 한정자
    : 기반 클래스 혹은 기반 클래스의 맴버에 사용되어 파생 클래스가 상속받지 못하도록 제한하는 한정자이다.

    ```csharp
    // 봉인 필드
    sealed int field;
    ```

5. `virtual` 및 `override` 한정자
    : 오버라이딩을 위해 사용되는 한정자 쌍이다: `virtual` 한정자는 기반 클래스의 맴버가 오버라이딩 될 수 있도록 하며, `override` 한정자는 파생 클래스가 해당 맴버를 오버라이딩 할 수 있도록 한다.

    ```csharp
    // 가상 메소드
    virtual void method()
    {
        statements;
    }
    
    // 오버라이드 메소드
    override void method()
    {
        statements; 
    }
    ```

6. `abstract` 한정자
    : 코드 블록 없는 가상 메소드를 선언하는데 사용되는 한정자이다. 해당 한정자는 메소드 이외에도 클래스 자체에도 사용할 수 있다.

    ```csharp
    // 추상 메소드
    abstract void method();
    ```

7. `partial` 한정자
    : 클래스 또는 메소드를 분할하여 정의하는데 사용되는 한정자이다.

    ```csharp
    // 분할 클래스
    partial class CLASS
    {
        void method1();
    }

    partial class CLASS
    {
        void method2();
    }

    /* 동일:
    class CLASS
    {
        void method1();
        void method2();
    } */
    ```

### 접근 한정자
접근 한정자(access modifier)는 외부에서 클래스 맴버의 접근성을 지정한다. C# 언어에는 세 가지의 접근 지정자가 존재하며, 이는 각각 `public`, `private`, `protected`, 그리고 `internal`이 있다.

| 키워드     | 설명                                                |
|:-----------:| ------------------------------------------------------------ |
| `public`    | 클래스 외부에서도 접근이 가능하다. |
| `private`   | 클래스 내에서만 접근이 가능하다 (기본값). |
| `protected` | 파생 클래스는 접근할 수 있으나, 여전히 클래스 외부에서는 접근할 수 없다 (클래스 *상속* 부문 참조). |
| `internal`  | 클래스 외부에서도 접근이 가능하나, 해당 어셈블리 내에서만 한정되어 있다 (타 어셈블리 접근 불가).                         |

## 상속
상속(inheritance)은 기반 클래스(base class)가 파생 클래스(derived class)에게 맴버 필드와 메소드를 제공하는 행위이다. 기반 클래스와 파생 클래스 둘 다에 동일한 이름의 속성과 메소드가 존재하는 경우, 기반 클래스의 맴버 필드와 메소드는 파생 클래스에 의해 묻힌다.

```csharp
using System;

/* 기반 클래스 생성 */
class BASECLASS
{
    public BASECLASS() { Console.WriteLine("기반 클래스 생성자"); }
    ~BASECLASS() { Console.WriteLine("기반 클래스 종료자"); }
    
    public int field1 = 1;
    public double field2 = 3.0;
}

/* 파생 클래스 생성 */
class DERIVEDCLASS
    : BASECLASS
{
    public DERIVEDCLASS() { Console.WriteLine("파생 클래스 생성자"); }
    ~DERIVEDCLASS() { Console.WriteLine("파생 클래스 종료자"); }
    
    public double field2 = 7.0;
    public char field3 = 'A';
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화
        DERIVEDCLASS instance = new();
        Console.WriteLine("{0}, {1}, {2}",
            instance.field1, instance.field2, instance.field3);
    }
}
```
```
"기반 클래스 생성자"
"파생 클래스 생성자"

1, 7.0, A

"파생 클래스 소멸자"
"기반 클래스 소멸자"
```

C# 프로그래밍 언어에서 파생 클래스는 여러 기반 클래스로부터 동시에 상속받을 수 없다. 오로지 한 기반 클래스로부터만 파생될 수 있다. 여러 기반 클래스로부터 동시에 상속받기 위해서는 *인터페이스*를 참고한다.

### `base` 키워드
`base` 키워드는 상속과 관련하여 다음 용도를 갖는다:

* 파생 클래스로부터 기반 클래스 맴버에 접근한다.
* 객체화에서 호출할 기반 클래스 생성자를 선택할 수 있다.

단, `base` 키워드는 정적 메소드에서 사용하면 오류가 발생한다.

```csharp
using System;

/* 기반 클래스 생성 */
class BASECLASS
{
    public method()
    {
        Console.WriteLine("기반 클래스 메소드");
    }
}

/* 파생 클래스 생성 */
class DERIVEDCLASS
    : BASECLASS
{
    public method()
    {
        // 기반 클래스 메소드 호출
        base.method();
        Console.WriteLine("파생 클래스 메소드");
    }
}

class Program
{
    static void Main(string[] args)
    {
        DERIVEDCLASS instance = new();
        instance.method();
    }
}
```
```
"기반 클래스 메소드"
"파생 클래스 메소드"
```
----
```csharp
using System;

/* 기반 클래스 생성 */
class BASECLASS
{
    protected int value;    

    public BASECLASS()
    {
        value = 1;
    }

    public BASECLASS(int arg)
    {
        value = arg;
    }
}

/* 파생 클래스 생성 */
class DERIVEDCLASS
    : BASECLASS
{
    public DERIVEDCLASS() : base()
    {
        Console.WriteLine($"클래스 생성자 {value}!");
    }

    public DERIVEDCLASS(int arg) : base(arg)
    {
        Console.WriteLine($"클래스 생성자 {value}?");
    }
}

class Program
{
    static void Main(string[] args)
    {
        DERIVEDCLASS instance1 = new();
        DERIVEDCLASS instance2 = new(3)
    }
}
```
```
클래스 생성자 1!
클래스 생성자 3?
```

## 다형성
다형성(polymorphism)은 "여러가지의 형태를 가진"이란 사전적 의미를 가지며, C#에서는 상황과 용도에 따라 달리 동작하는 것을 의미한다. 객체지향 프로그래밍에서 다형성은 매우 중요한 특징이며 두 가지로 분류할 수 있다:

* 컴파일타임 다형성(compile-time polymorphism)
    : *컴파일 시 이루어지는 다형성 (일명 정적 다형성; static polymorphism)*

* 런타임 다형성(run-time polymorphism)
    : *프로그램 실행 시 이루어지는 다형성 (일명 동적 다형성; dynamic polymorphism)*

컴파일타임 다형성 중 하나는 이미 소개가 되었으며, 바로 전달인자의 자료형과 개수에 따라 달리 동작하는 *메소드 오버로딩*이다.

### 연산자 오버로딩
연산자 오버로딩(operator overloading)은 또 다른 컴파일타임 다형성으로, 특정 클래스에서 연산자가 달리 동작하도록 한다. 메소드 오버로딩과 마찬가지로 전달인자의 유일성이 보장되는 한, 하나의 연산자에 여러 다른 정의가 가능하다. 오버로딩된 연산자는 클래스 한정이므로 해당 클래스 및 객체 외에는 적용되지 않는다.

`operator` 키워드는 기능성을 새로 정의할 연산자를 명시하기 위해 사용되며, 연산자 선언 구문은 메소드 선언와 동일하다.

```csharp
/* 클래스 생성 */
class CLASS
{
    public int field;

    // 연산자 오버로딩
    public static int operator + (CLASS arg1, CLASS arg2) => arg1.field + arg2.field;
}
```

### 메소드 오버라이딩
메소드 오버라이딩(function overriding)은 런타임 다형성으로 파생 클래스가 기반 클래스의 맴버를 재정의하는 행위이다. 메소드 오버로딩이 여러 개의 기능 중에서 하나를 선택하는 것이라면, 메소드 오버라이딩은 하나의 기능을 새롭게 *재정의(re-definition)*한다는 것으로 이해하면 된다.

*가상 메소드(virtual method)*은 메소드 오버라이딩이 가능한 메소드이며 기반 클래스에서 `virtual` 키워드를 통해 선언된다. 가상 메소드는 실행문을 갖도록 정의될 수 있으며, 해당 정의는 (1) 기반 클래스로부터 객체화되어 사용하거나 (2) 파생 클래스가 오버라이딩 하지 않고 객체화하여 사용하면 실행된다.

```csharp
/* 기반 클래스 생성 */
class BASECLASS
{
    // 가상 메소드
    public virtual void polymorph()
    {
        statements1; 
    }
}

/* 파생 클래스 생성 */
class DERIVEDCLASS1
    : BASECLASS
{
    // 메소드 오버라이딩
    public override void polymorph()
    {
        statements2;
    }
}
```

*추상 메소드(abstract method)*는 정의가 없이 선언만 된 가상 메소드를 가리킨다. 기반 클래스에서 정의되지 않았으므로, 파생 클래스에서는 반드시 오버라이딩을 해야 한다. 오버라이딩하지 않으면 컴파일 오류가 발생한다.

```csharp
/* 추상 메소드 */
public abstract void polymorph();
```

### 추상 클래스
추상 클래스(abstract class)는 `abstract` 키워드로 선언된 특수한 클래스로, 객체화를 하지 못하며 오로지 상속을 위해 존재하는 기반 클래스를 의미한다. 객체화 시도 시, 컴파일 오류가 발생한다.

```csharp
/* 추상 클래스 생성 */
abstract class CLASS
{
    public int field1 = 1;
    public double field2 = 3.0;
    
    /* 추상 메소드 */
    public abstract void polymorph();
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화: 오류!
        CLASS instance = new();
    }
}
```
```
Error	CS0144	Cannot create an instance of the abstract class or interface 'CLASS'
```

추상 클래스는 다른 접근 한정자를 갖는 맴버들을 가질 수 있다. 하지만 추상 클래스에서 파생된 클래스는 추상 메소드들을 *반드시* 오버라이딩을 해야 한다. 이러한 특징으로 인해 동일한 맴버 구조를 갖는 파생 클래스들을 생성해야 할 때 추상 클래스를 사용하여 효율을 높일 수 있다.

### 인터페이스
인터페이스(interface)는 추상 클래스의 변이로, 모든 맴버가 기본적으로 `abstract` 및 `public`으로 선언되기 때문에 별도로 한정자를 명시할 필요가 없다. 다시 말해, 인터페이스의 모든 메소드는 아무런 코드가 정의되지 않고 선언만 된 추상 메소드이다. 때문에 인터페이스의 파생 클래스는 메소드 오버라이딩이 아닌 *메소드를 정의하는* 개념으로 바라보므로 `override` 한정자를 사용하지 않는다.

```csharp
/* 인터페이스 생성 */
interface INTERFACE
{
    int property { get; set; }
    void polymorph();
}

/* 파생 클래스 생성 */
class DERIVEDCLASS
    : INTERFACE
{
    public DERIVEDCLASS(int arg) { property = arg; }
    public void polymorph()
    {
        statements;
    }
}
```

인터페이스의 기본 한정자 `abstract`으로 인해 메소드와 속성을 맴버로 가질 수 있으나, 필드는 맴버로 가질 수 없다. 그리고 파생 클래스에 동일한 메소드 및 코드가 적용되어야 한다면 매번 정의를 해야하는 인터페이스보다 필요할 때에만 오버라이딩하면 되는 추상 클래스를 사용하는 것을 권장한다.

파생 클래스는 한 개 이상의 인터페이스로부터 동시에 상속받을 수 있다.

```csharp
/* 파생 클래스 생성: 두 인터페이스로부터 상속 */
class DERIVEDCLASS
    : INTERFACE1, INTERFACE2
{
    // ...
}
```

이러한 인터페이스의 특징은 오히려 기존 클래스에 메소드 및 속성을 추가하는 기능 확장에 더욱 적합하다.

## 속성
속성(property)은 하나의 필드를 두 개의 영역인 `get`와 `set`로 나누어 데이터 숨기기를 지원한다. 속성은 메소드와 유사하게 생겼지만 소괄호(`()`)가 없어 필드처럼 사용된다.

| 접근자 | 키워드 | 설명                                     |
|:--------:| ------- | ----------------------------------------------- |
| Getter   | `get`   | 필드로부터 값을 반환받는 맴버이다. |
| Setter   | `set`   | 필드로부터 값을 설정하는 맴버이다. |

```csharp
using System;

/* 클래스 생성 */
class CLASS
{
    private int field;
    
    /* 속성 */
    public int property
    {
        get => field;            // GETTER 속성
        set => field = value;    // SETTER 속성
        
        /* 동일:
        get { return field; }
        set { field = value; }
        */
    }
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화
        CLASS instance = new();
        
        instance.method = 1;
        instance.method;        // >> OUTPUT: 1
    }
}
```

속성은 위의 예시 코드 구문에서도 볼 수 있듯이 전달인자를 하나만 받을 수 있다. 인자는 속성이 가지는 매개변수로 전달되는데, 해당 매개변수는 `value` 연산자를 통해 접근한다.

속성을 통해 필드를 나누므로써 수정되지 말아야 하는 `set`와 같은 민감한 코드를 숨기면서 `get`을 통해서 필드 값을 반환받을 수 있다.

### 자동 구현 속성
자동 구현 속성(auto-implemented property)는 간략화된 속성이지만, `get` 및 `set` 영역의 코드를 수정할 수 없다.

```csharp
/* 클래스 생성 */
public int property {get; set;}

/* 동일:
string field;
public int property{
    get => field;
    set => field = value;
}
*/
```

## 인덱서
인덱서(indexer) 맴버는 객체를 배열과 같이 사용할 수 있도록 한다. 속성과 유사하게 `get`와 `set` 접근자를 사용하며, 인덱서는 데이터를 `private` 필드에 선언된 컬렉션에 저장한다.

```csharp
using System;

/* 클래스 생성 */
class CLASS
{
    /* 인덱서를 위한 컬렉션 */
    private int[] arr = new int[2];
    
    /* 인덱서 */
    public int this[int index]
    {
        get => arr[index];
        set => arr[index] = value;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // 객체화
        CLASS instance = new();
        
        instance[0] = 1;        // >> 출력: 1
        instance[1] = 3;        // >> 출력: 3
    }
}
```

# C#: 사용자 정의 자료형
C$ 프로그래밍 언어에서 흔히 사용되는 `int`, `float`, `char` 등과 같은 내부 자료형을 기반으로 목적에 알맞은 사용자 정의 자료형을 새롭게 지정할 수 있다. 본 장은 일반 자료형보다 더 많은 자료를 복합적으로 저장할 수 있는 사용자 정의 자료형의 정의 및 활용법을 설명한다.

## 구조체
구조체(structure)는 자료형과 상관없이 여러 맴버 변수(일명 맴버 필드)를 하나의 단일 데이터로 통합시킨 사용자 정의 자료형이다. 구조체의 정의는 `struct` 키워드를 통해 이루어진다.

```csharp
/* 구조체 선언 */
public struct STRUCTURE
{
    public int    field1;
    public double field2;
    
    public double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
        /* 구조체 변수 선언 */
        STRUCTURE variable;
        
        variable.field1 = 1;
        variable.field2 = 3.0;
        System.Console.WriteLine(variable.method(2));    // >> 출력: 2.0 (= 1 + 3.0 - 2)
    }
}
```
----
```csharp
/* 구조체 선언: 생성자 포함 */
public struct STRUCTURE
{
    public STRUCTURE(int arg1, double arg2)
    { field1 = arg1; field2 = arg2; }
    
    public int    field1;
    public double field2;
    
    public double method(int arg) => field1 + field2 - arg;
}

class Program
{
    static void Main(string[] args)
    {
        /* 구조체 변수 초기화 */
        STRUCTURE variable = new(1, 3.0);
        
        System.Console.WriteLine(variable.method(2));    // >> 출력: 2.0 (= 1 + 3.0 - 2)
    }
}
```

클래스와 구조체는 서로 유사하지만 확연한 차이점이 존재한다:

| 클래스             | 구조체               |
|:---------------:|:-----------------:|
| 힙 영역 메모리에 할당된다. | 스택 영역 메모리에 할당된다.  |
| 상속이 허용된다.       | 상속이 허용되지 않는다.     |
| 필드 초기화가 허용된다.   | 필드 초기화가 허용되지 않는다. |

## 열거형
열거형(enumeration)은 열거된 항목들을 정수로 순번을 매기는 자료형이다. 열거자(enumerator)라고 부르는 열거 항목들은 기본적으로 정수 0부터 시작하여 순서대로 1만큼 값이 증가한다.

```csharp
/* 열거형 선언 */
enum ENUMERATION {
    enumerator1,    // = 0
    enumerator2,    // = 1
    enumerator3     // = 2
};

class Program
{
    static void Main(string[] args)
    {
        /* 열거형 변수 초기화 */
        ENUMERATION variable = ENUMERATION.enumerator1;
        
        System.Console.WriteLine(variable);         // >> 출력: enumerator1
        System.Console.WriteLine((int)variable);    // >> 출력: 0
    }
}
```

열거자들에 할당되는 정수는 할당 연산자(`=`)를 통해 달리 지정이 가능하며, 다른 열거자와 동일한 값이 할당되어도 상관없다. C/C++ 언어와 달리 동일한 이름의 열거자는 다른 열거형에 존재할 수 있다.

```csharp
enum ENUMERATION {
    enumerator1 = 2,    // >> 출력: 2
    enumerator2,        // >> 출력: 3
    enumerator3 = 1,    // >> 출력: 1
    enumerator4,        // >> 출력: 2
    enumerator5	        // >> 출력: 3
};
```

# C#: 제네릭
제네릭(generic)은 자료형과 무관하게 메소드 또는 클래스의 형식 틀을 제공한다. 개발자는 제네릭을 활용해 여러 유사한 함수 및 클래스를 손쉽게 생성할 수 있다. 본 장은 제네릭 선언 및 활용법을 설명한다.

## 제네릭 메소드
제네릭 메소드(generic method)는 다음과 같은 구문으로 선언된다.

```csharp
class CLASS
{
    /* 제네릭 메소드 선언 */
    static U method<T, U>(T arg1, U arg2)
    {
        statements;
        return something;
    }
}
```

정의된 제네릭 메소드를 사용하기 위해서는 꺽쇠괄호 (`<>`) 안에 자료형을 지정하여 객체화한다.

```csharp
/* 제네릭 메소드 객체화 */
CLASS.method<int, double>(1, 3.0);
```

## 제네릭 클래스
제네릭 클래스(generic class)는 다음과 같은 구문으로 선언된다.

```csharp
/* 제네릭 클래스 선언 */
class CLASS<T, U>
{
    public CLASS(T arg1, U arg2) { field1 = arg1,=; field2 = arg2; }
    ~CLASS() { }
    
    T field1;
    U field2;
    
    U method(T arg) => field1 + field2 - arg;
}
```

정의된 제네릭 클래스를 사용하기 위해서는 꺽쇠괄호 (`<>`) 안에 자료형을 지정하여 객최화한다.

```csharp
/* 제네릭 클래스 객체화 */
CLASS<int, double> instance = new(1, 3.0);
```

# C#: 예외 처리
예외(exception)는 잘못된 코딩이나 입력으로 인해 프로그램상 실행 불가능 코드 오류이다. 컴파일러에서 걸러지는 오류가 아니기에 정상적인 프로그램이 실행될 수 있으나, 예외가 발생하면 프로그램은 즉시 중단된다. 예외 처리는 실행된 프로그램이 예외로 인해 프로그램 실행이 중단되는 것을 방지하여 안정적으로 실행되는 것을 주목표로 한다.

## `try`/`catch` 예외 처리문
`try`/`catch` 쌍은 예외를 감지하고 발생한 예외 유형에 따라 기입된 코드를 실행하여 처리된다. 예외 처리된 파이썬 프로세스는 도중에 중단되지 않고 계속 실행된다.

* `try` 문
    : *블록 내의 코드에 예외가 발생하는지 확인한다. 예외가 발생하였을 시, 나머지 코드는 실행되지 않고 예외 종류에 따라 해당하는 `catch` 블록으로 넘어간다.*

* `catch` 문
    : *`try` 블록에서 예외가 발생하면 실행되는 코드를 포함한다. 하나의 `try` 블록에 여러 `catch` 블록을 사용하여 다양한 예외에 대비할 수 있다. 만일 `catch` 블록이 없으면 컴파일 오류가 발생한다 (컴파일 오류는 예외가 아니다).*

```csharp
/* try 블록 */
try
{
	statements;
}
catch(IndexOutOfRangeException e)
{
	// catch: 범위를 벗어난 요소 접근 시 발생 예외
}
catch(DivideByZeroException e)
{
	// catch: 숫자를 0으로 나눌 시 발생 예외
}
```

`catch` 블록이 모든 예외 사항을 처리하도록 하기 위해서는 소괄호 내에 `Exception` 클래스를 넣는다. 

```csharp
catch(Exception e)
{
	// catch: 모든 예외
}
```

## `throw` 키워드
`throw` 키워드는 내에서 의도적으로 예외를 발생시키는데 사용된다. 자체 제작 함수나 클래스에서 설계되지 않은 방식으로 접근하거나 사용하려는 경우, 해당 문으로 오류를 일으켜서 프로세스 실행을 즉시 중단시키는 용도로 활용된다.

```csharp
try
{
    statements;
    
    // 예외 발생: "INDEX OUT OF RANGE"
	throw new IndexOutOfRangeException("오류 메시지!");
}
catch(IndexOutOfRangeException e)
{
    statements;
}
catch(DivideByZeroException e)
{
    statements;
}
```
```
오류 메시지!
```

### 예외 건네주기
`try`/`catch` 예외 처리문에서 감지한 예외는 또 다른 예외 처리문으로 넘겨줄 수 있다.

```csharp
class Program
{
    static void method()
    {
        try { throw new IndexOutOfRangeException("오류 메시지!"); }
        catch(Exception e) { throw; }    // 예외 건네주기: method() -> Main()
    }

    static void Main(string[] args)
    {
        try { method(); }                // 건네진 예외 수신
        catch (Exception e) { System.Console.WriteLine(e.Message) }
    }
}
```
```
오류 메시지!
```

## `finaly` 처리문
`finally` 처리문은 선택사항으로 `try`/`catch` 다음에 위치하여 예외 처리 마지막에 반드시 실행되는 블록이다.

```csharp
try
{
    statements;
}
catch(IndexOutOfRangeException e)
{
    statements;
}
catch(DivideByZeroException e)
{
    statements;
}
/* try/catch 이후의 실행 코드 */
finally
{
	statements;
}
```

# C#: 파일 관리
여러 데이터를 파이썬 프로세스에 전달하거나, 혹은 데이터를 외부로 출력하기 위해 파일을 불러와 read 혹은 write 하여 처리할 수 있다. 본 장은 C# 프로그래밍 언어에서 파일을 관리하는 방법에 대하여 소개한다.

### 절대경로 및 상대경로
컴퓨터에는 두 종류의 경로 탐색법이 존재한다.

* 절대경로(absolute path)
    : *시스템의 루트경로(예. 윈도우의 `C:\` 혹은 리눅스의 `/`)로부터 시작하여 탐색하는 방식이다.*

* 상대경로(relative path)
    : *실행되고 있는 프로세스의 현 위치를 기준으로 경로를 탐색하는 방식이다.*

경로를 지정할 때에는 백슬래시 두 개(`\\`)로 폴더 및 파일을 구분한다. 하나만 사용하면 [탈출 문자](#탈출-문자)가 되어 원치 않은 텍스트 연산이 수행될 수 있다.

## 파일 생성
C# 프로그래밍 언어에서 텍스트 기반 파일을 `System.IO.File.Create()` 메소드로 파일을 생성할 수 있다.

```csharp
static void Main()
{
    var file = System.IO.File.Create("path\\filename.txt");
}
```

## 파일 읽기
C# 프로그래밍 언어에서 텍스트 기반 파일을 `System.IO.File.ReadAllText()` 메소드로 파일 내용을 읽을 수 있다. 

```csharp
static void Main()
{
    string output = System.IO.File.ReadAllText("path\\filename.txt");
    System.Console.WriteLine(output);
}
```

## 파일 쓰기
C# 프로그래밍 언어에서 텍스트 기반 파일을 `System.IO.File.WriteAllText()` 메소드로 파일 내용을 작성할 수 있다. 파일이 이미 존재하면 기존의 내용은 덮어쓴다.

```csharp
static void Main()
{
    string input = "Hello World!";
    System.IO.File.WriteAllText("path\\filename.txt", input);
}
```
