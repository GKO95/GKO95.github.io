---
layout: docs
language: ko
category: 인터페이스
title: WPF
icon: .png
meta: WPF
order: 0x21
---
# WPF: 소개
[Windows Presentation Foundation](https://github.com/dotnet/wpf)(일명 WPF)은 마이크로소프트에서 개발한 [WinForms](https://github.com/dotnet/winforms)와 유사한 무료 오픈소스 그래픽 서브시스템으로 [.NET](../ko.PRGMING_Csharp) 플랫폼에서 사용자 인터페이스 제공을 목표로 한다. 비록 윈도우 OS에서만 실행할 수 있는 제약이 있으나, [XAML](https://ko.wikipedia.org/wiki/XAML)을 통해 시각적으로 UI를 제작할 수 있으며 [비즈니스 로직](https://ko.wikipedia.org/wiki/비즈니스_로직)과 별도로 관리할 수 있는 장점을 갖는다.

## 아키텍처
> *참조: [Microsoft Docs WPF 아키텍처 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/wpf-architecture)*

* PresentationFramework

* PresentationCore

* milcore

### WinForms 비교

# WPF: 프로젝트 생성
> *본 내용부터 실질적인 WPF 프로그래밍을 소개하므로, 반드시 [C#](../ko.PRGMING_Csharp/) 내용을 숙지하도록 한다.*

위의 내용은 WPF 인터페이스 플랫폼에 대한 매우 기본적인 내용이다. 그 외에도 인터페이스의 실행 단계, 데이터 바인딩 등 중요한 내용들을 아직 설명하지 않았으나, 기본적인 WPF 어플리케이션이 어떻게 구성되어 있는지 알아보는 것도 차후 내용을 이해하는데 큰 도움이 될 수 있다. 그러므로 본 장에서는 직접 비주얼 스튜디오에서 WPF 어플리케이션 프로젝트를 생성 및 기본적인 코드과 API를 설명한다.

## 비주얼 스튜디오
[비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)(Visual Studio)는 마이크로소프트에서 개발한 윈도우 OS의 대표적인 IDE이다. 비주얼 스튜디오는 총 세 가지의 에디션이 존재하며, 무료 버전인 커뮤니티 에디션으로도 WPF 프로젝트를 생성할 수 있다. 통합 개발 환경인 만큼 다른 프로그래밍 언어도 함께 지원하므로 여러 종류의 구성요소를 제공한다. 그 중에서 WPF 어플리케이션 프로젝트를 위해서는 ".NET desktop development"를 선택한다.

![비주얼 스튜디오 WPF 프로젝트를 위한 구성요소](/images/docs/wpf/wpf_vs_component.png)

만일 한국어 지원을 원한다면 "Language packs" 탭에서 한국어를 함께 선택하면 된다.

비주얼 스튜디오를 실행하면 아래와 같은 시작화면이 나타난다. 새로운 프로젝트를 생성하려면 오른쪽 하단의 "Create a new project" 버튼을 클릭한다.

![비주얼 스튜디오 시작화면](/images/docs/wpf/wpf_vs_project1.png)

WPF는 윈도우 OS 어플리케이션을 위한 .NET 라이브러리이다. WPF 프로젝트를 생성하기 위해서는 아래의 필터를 설정하던가 직접 "WPF Application" 옵션을 선택한다. 단, 만일 .NET(일명 .NET Core)이 아닌 .NET 프레임워크를 사용하기를 원하면 "WPF App (.NET Framework)" 옵션을 선택한다. 

![비주얼 스튜디오 WPF 프로젝트 생성 (1단계)](/images/docs/wpf/wpf_vs_project2.png)

프로젝트 및 솔루션 이름을 선정한다. 여기서 프로젝트란, 소스 코드와 컴파일러 설정 등의 실질적인 코딩 내용을 관리하는 `.csproj` 확장자 파일이며, 솔루션은 여러 프로젝트 파일을 하나의 폴더처럼 담는 `.sln` 파일이다. 비주얼 스튜디오에서 프로젝트는 `.sln` 파일로 열기를 권장한다.

![비주얼 스튜디오 WPF 프로젝트 생성 (2단계)](/images/docs/wpf/wpf_vs_project3.png)

프로젝트 생성 버튼을 클릭하면 WPF 어플리케이션 추가 정보 창이 나타나며 어떤 .NET을 사용할 것인지 물어본다. 본 부문은 아직 미완성이지만 ARM64까지 지원하는 .NET 6.0 (Preview)를 선택하였다. 실제 어플리케이션을 개발할 때에는 사용환경을 고려하여 신중하게 .NET 버전을 선택하도록 한다.

![비주얼 스튜디오 WPF 프로젝트 생성 (3단계)](/images/docs/wpf/wpf_vs_project4.png)

프로젝트 설정을 완료하면 WPF 어플리케이션 프로젝트가 생성되며 가장 먼저 `MainWindow.xaml` 창을 띄운다.

![비주얼 스튜디오 WPF 프로젝트](/images/docs/wpf/wpf_vs_project5.png)

# WPF: XAML
[확장 응용 프로그램 마크업 언어](https://ko.wikipedia.org/wiki/XAML)(확장 응용 프로그램 마크업 언어), 혹은 간단히 XAML은 WPF에서 그래픽 사용자 인터페이스를 제작하는데 사용되는 선언형 언어이다. XAML은 정보화 사회에서 데이터를 저장 및 전달에 핵심 [XML](https://ko.wikipedia.org/wiki/XML)으로부터 응용 프로그램에도 적용할 수 있도록 확장된 것으로 XML의 기본 개념과 원리는 그대로 지니고 있다. 그러므로 본 장은 .NET에서의 XAML 사용법 이외에도 XML에 대한 내용을 간략히 설명한다.

> XML은 데이터의 저장 및 전달에 매우 유용하게 사용되는 언어로 이미 수많은 분야에서 활용되고 있다. 단, XML 자체는 정보를 담는 데이터에 불과하며 이를 시각화시키거나 동작하는 소프트웨어가 별도로 필요하다. 대표적인 예시로 [SVG](https://ko.wikipedia.org/wiki/SVG) 이미지 파일은 XML로 구성되어 있으며, 웹에서는 확장된 HTML 언어로 [XHTML](https://ko.wikipedia.org/wiki/XHTML)가 사용되기도 한다.

## XML 요소
XML은 정해진 태그나 구조가 없다: 개발자가 원하는 태그 이름과 속성(attribute)을 직접 지정하여 자유롭게 설계할 수 있다. 이는 HTML 언어가 `<div>`나 `<span>` 등의 미리 지정된 태그를 가지며 어떻게 사용되어야 하는지 규칙이 있는 점과 상반된다. 만일 본 GitHub Pages를 XML로 표현한다면 다음과 같은 유사한 방법으로 나타낼 수 있을 것이다.

```xml
<!--METHOD 1-->
<ghpages>

    <document category="Programming">
        <title lang="en">Python</title>
        <order>0</order>
        <icon>icon-python.png</icon>
    </document>

    <document category="Library">
        <title lang="ko">NumPy</title>
        <order>16</order>
        <icon>icon-numpy.png</icon>
    </document>

</ghpages>
```
----
```xml
<!--METHOD 2-->
<ghpages>

    <document category="Programming" order="0">
        <title lang="en">Python</title>
        <icon source="icon-python.png" />
    </document>

    <document category="Library" order="16">
        <title lang="ko">NumPy</title>
        <icon source="icon-numpy.png" />
    </document>

</ghpages>
```
여기서 `<ghpages>` 태그와 같이 XML의 가장 최외각에 있는 루트 요소(root element)는 XML 파일마다 오로지 하나만 선언될 수 있다.

## XML 네임스페이스
[XML 네임스페이스](https://en.wikipedia.org/wiki/XML_namespace)(namespace)는 개발자가 직접 부여한 태그 이름이 동일한 이름의 태그를 갖는 다른 XML 파일과 함께 사용될 때 충돌이 발생하는 것을 방지하기 위한 데이터 분류 공간이다. 이는 [C# 네임스페이스](../ko.PRGMING_Csharp/#네임스페이스)와 동일한 역할을 하면서도 유사점이 매우 많다. 그러므로 본 XML 네임스페이스 설명에서는 C# 네임스페이스가 자주 언급될 예정이다.

### 통합 자원 식별자
[통합 자원 식별자](https://ko.wikipedia.org/wiki/통합_자원_식별자)(uniform resource identifier; URI)는 네임스페이스 식별자를 지칭한다.

> C# 언어에 비하면 리스트 클래스를 내포하는 `System.Collections.Generic`이 XML의 URI와 같다고 볼 수 있다.

URI에는 어떠한 텍스트가 사용되어도 무관하지만, 서로 다른 목적의 XML 간에 URI가 동일하여 생길 수 있는 충돌을 방지하기 위해 유일성이 보장된 웹사이트 혹은 서버 URL을 사용하는 게 관습이다. 그러므로 `xmlns` 속성에 입력된 URL은 단순히 텍스트에 불과하며 해당 사이트에는 아무것도 없는 게 대다수이다.

아래는 WPF로 생성된 XAML 네임스페이스 중 하나인 `http://schemas.microsoft.com/winfx/2006/xaml/presentation`에 직접 접근하면 아래와 같이 아무것도 없는 화면을 볼 수 있다.

![WPF 지정 XAML 네임스페이스 URL 접근 결과](/images/docs/wpf/wpf_xaml_namespace.png)

### 기본 네임스페이스
기본 네임스페이스(default namespace)는 `xmlns` 속성으로 선언되는 즉시 태그의 시작부터 종단까지 기본적으로 적용되는 네임스페이스이다. 기본 네임스페이스가 선언된 태그의 모든 자식요소들은 암묵적으로 해당 네임스페이스에 포함된다.

> C# 언어에 비하면 리스트 클래스를 사용하기 위해 `using System.Collections.Generic;`을 입력하는 것과 동일하다.

아래는 URI `https://gko95.github.io/`의 기본 네임스페이스가 선언된 예시 코드이다.

```xml
<ghpages xlmns="https://gko95.github.io/">

    <document category="Programming" order="0">
        <title lang="en">Python</title>
        <icon source="icon-python.png" />
    </document>

    <document category="Library" order="16">
        <title lang="ko">NumPy</title>
        <icon source="icon-numpy.png" />
    </document>

</ghpages>
```
XML 요소들은 하나의 네임스페이스에만 속할 수 있다는 원칙에 의해, 각 요소는 오로지 하나의 기본 네임스페이스만 선언할 수 있다. 또한, 부모와 자식이 서로 다른 기본 네임스페이스를 선언하였으면 부모에 선언된 기본 네임스페이스가 자식에 선언된 기본 네임스페이스보다 우선시된다.

### 네임스페이스 접두사
네임스페이스 접두사(namespace prefix)는 `xmlns:` 속성으로 네임스페이스를 별칭(alias)과 함께 선언하여, 해당 별칭을 태그 앞에 기입하므로써 네임스페이스에 요소를 연결시키므로 접두사(prefix)라고 부른다. 비록 네임스페이스 접두사가 선언되어도 자식들의 네임스페이스 연결은 명시적으로 이루어져야 한다.

> C# 언어에 비하면 리스트 클래스를 사용하기 위해 `using prefix = System.Collections.Generic;`을 기입하여 별칭을 지정하고 `prefix::List<T>`를 통해 네임스페이스 내의 리스트 클래스에 접근한다.

아래는 URI `https://gko95.github.io/PRGMING`와 `https://gko95.github.io/LIBRARY`의 네임스페이스를 각각 접두사 `prefix1`와 `prefix2` 로 선언하여 사용한 예시 코드이다.

```xml
<ghpages xmlns="https://gko95.github.io/">

    <prefix1:document xmlns:prefix1="https://gko95.github.io/PRGMING" 
                      category="Programming" order="0">
        <prefix1:title lang="en">Python</prefix1:title>
        <prefix1:icon source="icon-python.png" />
    </prefix1:document>

    <prefix2:document xmlns:prefix2="https://gko95.github.io/LIBRARY"
                      category="Library" order="16">
        <prefix2:title lang="ko">NumPy</prefix2:title>
        <prefix2:icon source="icon-numpy.png" />
    </prefix2:document>

</ghpages>
```
비록 위의 예시 코드에는 기본 네임스페이스가 루트 요소에 선언되었으나, 네임스페이스 접두사가 기본 네임스페이스보다 우선시된다. 단, 접두사가 없는 XML 요소들은 기본 네임스페이스에 연결된다.

위의 예시 코드의 네임스페이스 선언들을 루트 요소로 모두 옮겨 다음과 같이 나타내는 방법도 고려할 수 있다.

```xml
<ghpages xmlns="https://gko95.github.io/"
         xmlns:prefix1="https://gko95.github.io/PRGMING"
         xmlns:prefix2="https://gko95.github.io/LIBRARY">

    <prefix1:document category="Programming" order="0">
        <prefix1:title lang="en">Python</prefix1:title>
        <prefix1:icon source="icon-python.png" />
    </prefix1:document>

    <prefix2:document category="Library" order="16">
        <prefix2:title lang="ko">NumPy</prefix2:title>
        <prefix2:icon source="icon-numpy.png" />
    </prefix2:document>

</ghpages>
```

## XML 스키마
[XML 스키마](https://ko.wikipedia.org/wiki/XML_스키마)(XML schema)는 자유로운 설계가 가능한 XML에 사용할 수 있는 유효한 태그와 속성 및 구조를 규정한다. 비록 XML 스키마는 필수요소가 아니지만, 이러한 XML 규칙을 정의하므로써 외부에서 유입되었거나 소유하고 있는 XML 문서가 정의된 규칙에 부합하는지 유효성을 판단할 수 있다. 즉, 스키마는 XML 문서 작성 표준이라고 간주할 수 있다.

> 유사한 역할을 수행하는 [XML DTD](https://ko.wikipedia.org/wiki/문서_형식_정의)가 있으나, 스키마는 XML로 작성되었으면 네임스페이스를 지원하는 차이점이 있다.

## WPF XAML 네임스페이스
WPF 프로젝트의 XAML 네임스페이스는 기존 XML 네임스페이스처럼 단순히 데이터 분류를 위해 URI로 유일성을 제공할 뿐만 아니라, 입력된 URI에 따라 XAML 문서에 특정 CLR 네임스페이스 혹은 참조 어셈블리로부터 지원받는 스키마 개념을 내포한다. 여기서 CLR은 [.NET](../ko.PRGMING_Csharp/#net) 공통 언어 런타임(Common Language Runtime)으로 XAML 마크업이 아닌 C# 언어 코드를 가리킨다.

WPF 프로젝트에는 크게 기본 네임스페이스와 접두사 `x:`를 갖는다.

### WPF 네임스페이스
XAML 언어로부터 구현된 WPF 전용 클라이언트 및 프레임워크 XAML의 종합 네임스페이스이다; WPF 프로젝트에서 가장 흔히 쓰이므로 기본 네임스페이스로 연결하였다. 대표적인 예시로 `<Window>`, `<Grid>`, `<Button>` 등이 있다.

```xml
xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
```

### XAML 네임스페이스
XAML 언어 정의에 내포된 내장형(intrinsics)을 지원하는 별도의 XAML 네임스페이스이다; 간단한 WPF 어플이케이션에도 필연적으로 흔히 사용되는 다수의 언어 기능들을 정의한다. 대표적인 예시로 `x:Class`, `x:Name` 등이 있다.

```xml
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
```

* `x:Class` 지시문
    : XAML 마크업 문서를 C# 코드의 [분할](../ko.PRGMING_Csharp/#한정자) 클래스에 연동시킨다. 본 지시문은 XAML 루트 요소에서만 기입할 수 있으며, 그 이외의 요소에서는 컴파일 오류가 발생한다.

* `x:Name` 지시문

# WPF: 컨트롤

# WPF: 바인딩
