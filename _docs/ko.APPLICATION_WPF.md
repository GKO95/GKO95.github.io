---
layout: docs
category: 어플리케이션
title: WPF
slug: ko.WPF
order: null
---
# WPF: 소개
[Windows Presentation Foundation](https://github.com/dotnet/wpf)(일명 WPF)은 마이크로소프트에서 개발한 [WinForms](https://github.com/dotnet/winforms)와 유사한 무료 오픈소스 그래픽 서브시스템으로 [.NET](/docs/ko.Csharp) 플랫폼에서 사용자 인터페이스 제공을 목표로 한다. 비록 윈도우 OS에서만 실행할 수 있는 제약이 있으나, [XAML](https://ko.wikipedia.org/wiki/XAML)을 통해 시각적으로 UI를 제작할 수 있으며 [비즈니스 로직](https://ko.wikipedia.org/wiki/비즈니스_로직)과 별도로 관리할 수 있는 장점을 갖는다.

## 아키텍처
> *참조: [Microsoft Docs WPF 아키텍처 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/wpf-architecture)*

* PresentationFramework

* PresentationCore

* milcore

### WinForms 비교

# WPF: 프로젝트 생성
> *본 내용부터 실질적인 WPF 프로그래밍을 소개하므로, 반드시 [C#](/docs/ko.Csharp) 내용을 숙지하도록 한다.*

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
<GHPages>

    <Document Category="Programming">
        <Title Language="en">Python</Title>
        <Order>0</Order>
        <Icon>icon-python.png</Icon>
    </Document>

    <Document Category="Library">
        <Title Language="ko">NumPy</Title>
        <Order>16</Order>
        <Icon>icon-numpy.png</Icon>
    </Document>

</GHPages>
```
----
```xml
<!--METHOD 2-->
<GHPages>

    <Document Category="Programming" Order="0">
        <Title Language="en">Python</Title>
        <Icon Source="icon-python.png" />
    </Document>

    <Document Category="Library" Order="16">
        <Title Language="ko">NumPy</Title>
        <Icon Source="icon-numpy.png" />
    </Document>

</GHPages>
```
여기서 `<GHPages>` 태그와 같이 XML의 가장 최외각에 있는 루트 요소(root element)는 XML 파일마다 오로지 하나만 선언될 수 있다.

## XML 네임스페이스
[XML 네임스페이스](https://en.wikipedia.org/wiki/XML_namespace)(namespace)는 개발자가 직접 부여한 태그 이름이 동일한 이름의 태그를 갖는 다른 XML 파일과 함께 사용될 때 충돌이 발생하는 것을 방지하기 위한 데이터 분류 공간이다. 이는 [C# 네임스페이스](/docs/ko.Csharp#네임스페이스)와 동일한 역할을 하면서도 유사점이 매우 많다. 그러므로 본 XML 네임스페이스 설명에서는 C# 네임스페이스가 자주 언급될 예정이다.

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
<GHPages xlmns="https://gko95.github.io/">

    <Document Category="Programming" Order="0">
        <Title Language="en">Python</Title>
        <Icon Source="icon-python.png" />
    </Document>

    <Document Category="Library" Order="16">
        <Title Language="ko">NumPy</Title>
        <icon Source="icon-numpy.png" />
    </Document>

</GHPages>
```
XML 요소들은 하나의 네임스페이스에만 속할 수 있다는 원칙에 의해, 각 요소는 오로지 하나의 기본 네임스페이스만 선언할 수 있다. 또한, 부모와 자식이 서로 다른 기본 네임스페이스를 선언하였으면 부모에 선언된 기본 네임스페이스가 자식에 선언된 기본 네임스페이스보다 우선시된다.

### 네임스페이스 접두사
네임스페이스 접두사(namespace prefix)는 `xmlns:` 속성으로 네임스페이스를 별칭(alias)과 함께 선언하여, 해당 별칭을 태그 앞에 기입하므로써 네임스페이스에 요소를 연결시키므로 접두사(prefix)라고 부른다. 비록 네임스페이스 접두사가 선언되어도 자식들의 네임스페이스 연결은 명시적으로 이루어져야 한다.

> C# 언어에 비하면 리스트 클래스를 사용하기 위해 `using prefix = System.Collections.Generic;`을 기입하여 별칭을 지정하고 `prefix::List<T>`를 통해 네임스페이스 내의 리스트 클래스에 접근한다.

아래는 URI `https://gko95.github.io/PRGMING`와 `https://gko95.github.io/LIBRARY`의 네임스페이스를 각각 접두사 `prefix1`와 `prefix2` 로 선언하여 사용한 예시 코드이다.

```xml
<GHPages xmlns="https://gko95.github.io/">

    <prefix1:Dcoument xmlns:prefix1="https://gko95.github.io/PRGMING" 
                      Category="Programming" Order="0">
        <prefix1:Title Language="en">Python</prefix1:Title>
        <prefix1:Icon Source="icon-python.png" />
    </prefix1:Document>

    <prefix2:Document xmlns:prefix2="https://gko95.github.io/LIBRARY"
                      Category="Library" Order="16">
        <prefix2:Title Language="ko">NumPy</prefix2:Title>
        <prefix2:Icon Source="icon-numpy.png" />
    </prefix2:Document>

</GHPages>
```
비록 위의 예시 코드에는 기본 네임스페이스가 루트 요소에 선언되었으나, 네임스페이스 접두사가 기본 네임스페이스보다 우선시된다. 단, 접두사가 없는 XML 요소들은 기본 네임스페이스에 연결된다.

위의 예시 코드의 네임스페이스 선언들을 루트 요소로 모두 옮겨 다음과 같이 나타내는 방법도 고려할 수 있다.

```xml
<GHPages xmlns="https://gko95.github.io/"
         xmlns:prefix1="https://gko95.github.io/PRGMING"
         xmlns:prefix2="https://gko95.github.io/LIBRARY">

    <prefix1:Document Category="Programming" Order="0">
        <prefix1:Title Language="en">Python</prefix1:Title>
        <prefix1:Icon Source="icon-python.png" />
    </prefix1:Document>

    <prefix2:Document Category="Library" Order="16">
        <prefix2:Title Language="ko">NumPy</prefix2:Title>
        <prefix2:Icon Source="icon-numpy.png" />
    </prefix2:Document>

</GHPages>
```

## XML 스키마
[XML 스키마](https://ko.wikipedia.org/wiki/XML_스키마)(XML schema)는 자유로운 설계가 가능한 XML에 사용할 수 있는 유효한 태그와 속성 및 구조를 규정한다. 비록 XML 스키마는 필수요소가 아니지만, 이러한 XML 규칙을 정의하므로써 외부에서 유입되었거나 소유하고 있는 XML 문서가 정의된 규칙에 부합하는지 유효성을 판단할 수 있다. 즉, 스키마는 XML 문서 작성 표준이라고 간주할 수 있다.

> 유사한 역할을 수행하는 [XML DTD](https://ko.wikipedia.org/wiki/문서_형식_정의)가 있으나, 스키마는 XML로 작성되었으면 네임스페이스를 지원하는 차이점이 있다.

## WPF XAML 네임스페이스
WPF 프로젝트의 XAML 네임스페이스는 기존 XML 네임스페이스처럼 단순히 데이터 분류를 위해 URI로 유일성을 제공할 뿐만 아니라, 입력된 URI에 따라 XAML 문서에 특정 CLR 네임스페이스 혹은 참조 어셈블리로부터 지원받는 스키마 개념을 내포한다. 여기서 CLR은 [.NET](/docs/ko.Csharp#net) 공통 언어 런타임(Common Language Runtime)으로 XAML 마크업이 아닌 C# 언어 코드를 가리킨다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">
</Window>
```

WPF 프로젝트에는 크게 기본 네임스페이스와 접두사 `x:`를 갖는다.

### WPF 네임스페이스
XAML 언어로부터 구현된 WPF 전용 클라이언트 및 프레임워크 XAML의 종합 네임스페이스이다; WPF 프로젝트에서 가장 흔히 쓰이므로 기본 네임스페이스로 연결하였다. 대표적인 예시로 `<Window>`, `<Grid>`, `<Button>` 등이 있다.

```xml
xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
```

### XAML 네임스페이스
XAML 언어 정의에 내포된 내장형(intrinsics)을 지원하는 별도의 XAML 네임스페이스이다; 간단한 WPF 어플이케이션에도 필연적으로 흔히 사용되는 다수의 언어 기능들을 정의한다. 대표적인 예시로 `x:Class`, `x:Name` 지시문 등이 있다.

```xml
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
```

* `x:Class` 지시문
    : XAML 마크업 문서를 C# 코드의 [분할](/docs/ko.Csharp#한정자) 클래스에 연동시킨다. 본 지시문은 XAML 루트 요소에서만 기입할 수 있으며, 그 이외의 요소에서는 컴파일 오류가 발생한다.

* `x:Name` 지시문
    : XAML 요소에 [식별자](/docs/ko.Csharp#식별자)를 지정한다. 해당 식별자는 C# 코드에서 객체명으로 간단히 호출 및 접근하는데 유용하게 사용될 수 있으나, 식별자는 XAML 네임스페이스에서 요소마다 유일해야 한다. 이와 본질적으로 동일한 WPF 프레임워크 속성으로 [`Name`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.frameworkelement.name)이 있다.

* `x:Key` 지시문
    : XAML로 정의된 딕셔너리에서 데이터를 불러올 호출자를 지정한다. 이는 C# 코드에서의 [딕셔너리](/docs/ko.Csharp#dictionary-컬렉션) 컬렉션과 같이 `{key, value}`의 `key`와 동일한 역할을 하며, 대표적은 [리소스 딕셔너리](#wpf-리소스)에서 사용된다.

* `x:Type` 마크업 확장문
    : XAML 요소의 자료형을 반환한다. 이는 C# 코드의 [`typeof`](/docs/ko.Csharp#typeof-연산자) 연산자의 XAML 버전으로 간주할 수 있다.

### CLR 네임스페이스
CLR 네임스페이스는 간단히 말해 C# 프로그래밍 소스 코드에서 선언된 [네임스페이스](/docs/ko.Csharp#네임스페이스)이다; 접두사 `clr-namespace:`로부터 C# 네임스페이스 내의 클래스를 객체화하여 XAML에서 활용할 수 있다. 다음은 C# 소스 코드의 `WPFApplication` 네임스페이스를 불러온다.

```xml
xmlns:local="clr-namespace:WPFApplication"
```

단, XAML 컴파일 작업 성질에 의해 객체화 과정에서 호출되는 생성자는 어떠한 전달인자도 받을 수 없다. 그리고 XAML에서 객체의 데이터를 접근하기 위해서는 [속성](/docs/ko.Csharp#객체)(property) 맴버를 사용해야 한다.

```csharp
using System.Windows;

namespace WPFApplication
{
    public class CLASS
    {
        public CLASS() { }
        public string Property { get; set; } = "";
    }
}
```

```xml
<local:CLASS Property="Hello World!" />
```

전달인자를 받아야 한다면 CLR, 즉 C# 프로그래밍으로 객체를 생성하여 코드로부터 XAML에 추가하는 방법을 택할 수 있다.

## WPF XAML 트리
WPF 사용자 인터페이스를 제작하는데 XAML 요소들은 .NET 객체들의 [트리 구조](https://ko.wikipedia.org/wiki/트리_구조)로 구성된다. WPF에서는 두 가지 개념의 트리 구조가 존재한다.

### 논리 트리 구조
논리 트리 구조(logical tree structure)는 XAML 인터페이스 요소들에 의해 구성된 트리 구조이다. 본 문서에서 여태 보여준 XAML 코드가 전부 논리 트리 구조이며, 종속성 및 리소스 그리고 바인딩 등을 확인할 수 있다.

### 시각 트리 구조
시각 트리 구조(visual tree structure)는 렌더링되어 화면에 출력되는 인터페이스 요소 위주로 구성된 트리 구조이다. 해당 트리 구조를 확인하려면 디버깅 모드로 실행하여 `Debug → Windows → Live Visual Tree`에서 확인할 수 있다. 논리 트리 구조의 상위호환으로 간주되며, 성능 최적화에 사용되기도 한다.

# WPF: 컨트롤
WPF 컨트롤(control)은 사용자 인터페이스를 제공하는 구성요소로 C# 혹은 XAML을 통해 불러올 수 있다. C#에서 WPF 컨트롤을 사용하려면 아래의 CLR 네임스페이스를 선언해야 한다.

```csharp
using System.Windows.Controls;
```

WPF 프로젝트를 생성하였을 때 기본으로 생성된 `Window` 컨트롤은 흔히 어플리케이션의 루트 요소로 사용된다. 크기 최소화 및 최대화, 어플리케이션 제목과 테두리 그리고 시스템 메뉴 등이 포함된 어플리케이션 창 컨트롤이다.

![WPF 컨트롤 도구상자](/images/docs/wpf/wpf_xaml_toolbox.png)

WPF 컨트롤은 메뉴에서 `View → Toolbox` 혹은 `Ctrl + Alt + X` 단축키로 도구상자를 통해 찾아볼 수 있다. 도구상자에서 컨트롤을 선택하고 편집기에 원하는 위치에 클릭하거나 드래그한 만큼의 크기로 삽입한다. XAML 편집기와 코드는 동기화되어 있으므로, XAML 문서를 통해 컨트롤을 삽입하여도 편집기에 그대로 반영된다.

### 사용자 컨트롤
사용자 컨트롤(User Control)은 WPF 내장 컨트롤들을 활용하거나 조합하여 만든 자체 제작 XAML 컨트롤이다.

### 커스텀 컨트롤
커스텀 컨트롤(Custom Control)은 찾고자 하는 컨트롤이 WPF 내에 없거나, WPF 내장 컨트롤에서 기능을 추가해야 할 경우, 혹은 자체 테마를 적용해야 할 시에 제작하여 사용한다. 커스텀 컨트롤의 스타일 및 테마는 일반적으로 `generic.xaml` 파일에 정의된다.

## 패널
비록 WPF 컨트롤은 원하는 위치에 삽입할 수 있으나, 어플리케이션 창 크기에 따라 컨트롤의 크기 및 배치가 유연한지 여부는 안정성에 있어 매우 중요하다. 도구상자는 컨트롤 이외에도 컨트롤 간의 레이아웃을 지정할 수 있는 패널(panel)을 제공한다.

| 패널     | 영문           | 설명                                                                       |
|--------|--------------|--------------------------------------------------------------------------|
| [스택 패널](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.stackpanel)  | Stack Panel  | 자식을 수직 혹은 수평 방향으로 한 줄로 나열한다: 나열할 공간이 부족하여도 계속 이어나간다.                     |
| [줄바꿈 패널](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.wrappanel) | Wrap Panel   | 자식을 수직 혹은 수평 방향으로 한 줄로 나열한다: 나열할 공간이 부족하다면 다음 줄로 이동한다.                   |
| [도크 패널](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.dockpanel)  | Dock Panel   | 자식을 상하좌우 중 한 곳으로 도킹한다: `LastChildFill` 속성으로 마지막 자식을 나머지 공간에 채울지 여부를 정한다. |
| [캔버스](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.canvas) | Canvas | 자식을 상대좌표로 배치한다: 2D 그래픽 요소 (타원, 직사각형 등) 전용이다.                             |
| [그리드](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.grid) | Grid   | 자식을 도표처럼 행과 열을 설정하여 배치한다: `*`로 비율을 조절할 수 있다.                             |

# WPF: 리소스
> *참조: [Microsoft Docs XAML 리소스 개요 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/systems/xaml-resources-overview)*    

XAML 리소스(resource)는 브러시와 스타일과 같이 어플리케이션의 다른 곳에서도 재사용할 수 있는 객체를 가리킨다. 단, 이는 외부 파일이나 데이터와 같은 어플리케이션 리소스와 별개이다. 저장된 XAML 리소스는 컨트롤이나 창 이외에도 전역적으로 어플리케이션 전체에서 사용할 수 있다. XAML 리소스는 루트의 `FrameworkElement.Resource` 하에 정의되어야 하며, 어떠한 객체라도 리소스로 정의되어 공유될 수 있다. 

XAML 리소스는 리소스 딕셔너리(resource dictionary)에 정의하며, 별도로 선언하지 않아도 리소스를 정의하면 암묵적으로 선언된다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <Window.Resource>
        <Object x:Key="Resource1" />
        <Object x:Key="Resource2" />
    </Window.Resource>

    <!-- EQUIVALENT:
    <Window.Resource>
        <ResourceDictionary>
            <Object x:Key="Resource1" />
            <Object x:Key="Resource2" />
        </ResourceDictionary>
    </Window.Resource>
    -->

</Window>
```

위에는 임의의 두 `Object` 객체를 리소스로 사용하였다. 리소스 딕셔너리인 만큼 C# [딕셔너리](/docs/ko.Csharp#dictionary-컬렉션) 컬렉션과 마찬가지로 `{key, value}` 형식에서 `value`에 해당하는 리소스를 불러오기 위해 필요한 `key`를 `x:Key`로 지정한다.

WPF 어플리케이션은 리소스를 정적(static) 혹은 동적(dynamic)으로 참조할 수 있다:

* [StaticResource](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/staticresource-markup-extension)
    : 이미 정의된 리소스를 어플리케이션 준비 과정에서 참조하며, 한 번 참조된 리소스는 더이상 변경이 불가하다.

* [DynamicResource](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/dynamicresource-markup-extension)
    : 어플리케이션 실행 도중에 객체를 생성하는데 정의된 리소스가 필요할 때 참조한다. 리소스가 참조된 이후에도 차후에 변경할 수 있다.

StaticResource와 DynamicResource는 공통적으로 다음과 같은 절차에 따라 리소스를 탐색한다: (1) 우선 XAML 요소가 참조하는 리소스가 해당 요소의 리소스 딕셔너리로부터 탐색한다. 그 다음 (2) 논리 트리 구조를 거슬러 올라가 루트 요소의 리소스 딕셔너리로 이동하며, 이후에는 (3) `Application` 객체에 정의된 어플리케이션 리소스 딕셔너리를 확인한다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <!--RESOURCE-->
    <Window.Resource>
        <Object x:Key="Resource1" />
        <Object x:Key="Resource2" />
    </Window.Resource>

    <!--INTERFACE-->
    <StackPanel>
        <Control Resource="{StaticResource Resource1}" />
        <Control Resource="{StaticResource Resource2}" />
    </StackPanel>

</Window>
```

## 스타일
[스타일](https://docs.microsoft.com/en-us/dotnet/api/system.windows.style)(Style)은 컨트롤의 외관을 변경하는데 사용되며, 흔히 리소스로 사용되어 컨트롤에 공통된 혹은 `x:Key`에 해당하는 스타일을 적용한다. 그 중에서 `TargetType` 속성은 해당 스타일이 적용될 컨트롤이 어느 것인지 명시한다; `System.Windows.Setter`을 통해 컨트롤의 속성을 설정하기 위해서 반드시 필요하다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <!--RESOURCE-->
    <Window.Resource>
        <Style x:Key="Resource1" TargetType="Button">
            <Setter Property="BorderBrush" Value="Red"/>
            <Setter Property="BorderThickness" Value="5" />
            <Setter Property="Height" Value="50" />
        </Style>
        <Style TargetType="Button">
            <Setter Property="Background" Value="Blue"/>
            <Setter Property="Height" Value="100" />
        </Style>
    </Window.Resource>

    <!--INTERFACE-->
    <StackPanel>
        <Button x:Name="btnControl1" Style="{StaticResource Resource1}" />
        <Button x:Name="btnControl2"/>
    </StackPanel>

</Window>
```

`System.Windows.Style` 스타일 중에서 `x:Key` 마크업 확장자가 없는 경우, `TargetType` 속성에 명시된 컨트롤에 일관적으로 스타일이 적용되는데 이를 암묵적 스타일(implicit style)이라 부른다. 반면 명시적 스타일(explicit style)의 경우, 리소스 딕셔너리에서 `x:Key`와 일치하는 지정된 스타일이 있으면 일관된 스타일이 아닌 별도의 스타일이 반영된다.

명시적 스타일은 XAML이 아닌 아래와 같은 C# 프로그래밍으로도 적용할 수 있다:

```csharp
btnControl1.Style = (Style)Resources["Resource1"];
```

### 스타일 확장
기존의 스타일로부터 정의를 확장하려면, 파생 스타일의 `BaseOn` 속성에 StaticResource 혹은 DynamicResource과 함께 기반 스타일을 기입한다. 그러나 `x:Key`가 없는 암묵적 스타일로부터 파생하려면 `x:Type`를 활용해 컨트롤의 자료형을 반환하므로써 기반 스타일을 명시한다.

아래 XAML 코드에서 `Resource1` 스타일은 기본 `Button` 스타일을 기반하여 추가 및 변경된 스타일을 적용한다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <!--RESOURCE-->
    <Window.Resource>
        <Style x:Key="Resource1" TargetType="Button" 
               BaseOn="{StaticResource {x:Type Button}}">
            <Setter Property="BorderBrush" Value="Red"/>
            <Setter Property="BorderThickness" Value="5" />
            <Setter Property="Height" Value="50" />
        </Style>
        <Style TargetType="Button">
            <Setter Property="Background" Value="Blue"/>
            <Setter Property="Height" Value="100" />
        </Style>
    </Window.Resource>

    <!--INTERFACE-->
    <StackPanel>
        <Button x:Name="btnControl1" Style="{StaticResource Resource1}" />
        <Button x:Name="btnControl2"/>
    </StackPanel>

</Window>
```

# WPF: 컨트롤
> *참조: [Microsoft Docs WPF 컨트롤 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/controls)*

[컨트롤](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.control)(Control)은 WPF 어플리케이션 구성에 사용되는 사용자 인터페이스이다. 흔히 사용되는 [레이블](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.label), [버튼](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.button), [텍스트 상자](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.textbox) 등의 UI는 모두 WPF 컨트롤이다. 컨트롤 내부에는 두 개의 정의로 구성되어 있다: UI의 상태와 이벤트 및 속성을 정의하는 논리(logic), 그리고 UI의 그래픽을 정의하는 템플릿(template)으로 이루어진다.

## 컨트롤 템플릿
[컨트롤 템플릿](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.controltemplate)(Control Template)은 컨트롤의 외형을 가리킨다. WPF 프레임워크에서 제공하는 컨트롤들은 기본적으로 템플릿이 미리 정의되어 있다. 리소스에서 [`<ControlTemplate>`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.controltemplate)을 통해 템플릿을 직접 디자인할 수 있으며, 컨트롤의 [`Template`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.frameworktemplate.template) 속성으로 적용한다.

```xml
<!--DEFINITION-->
<Window.Resource>
    <ControlTemplate x:Key="Template1" TargetType="Control">
        ...
    </ControlTemplate>
</Window.Resource>

<!--IMPLEMENTATION-->
<Control x:Name="btnControl1" Template="{StaticResource Template1}" />
```

`<ControlTemplate>` 요소 내에 템플릿을 정의할 때에는 외형만을 제작하기 때문에 템플릿 루트 요소로는 흔히 [`<Rectangle>`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.shapes.rectangle), [`<Ellipse>`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.shapes.ellipse) 등의 단순 모양이나 `<Grid>`와 같은 레이아웃을 사용하여 복합적인 디자인이 가능하다.

```xml
<Window.Resource>
    <ControlTemplate x:Key="Template1" TargetType="Control">
        <Grid>
            
        </Grid>
    </ControlTemplate>
</Window.Resource>
```

# WPF: 바인딩
데이터 바인딩(Data binding)이란 피(被)바인딩 객체를 아무런 바인딩 소스(binding source)에 연동하는 것이다. 흔히 WPF 프로젝트에서는 컨트롤을 데이터베이스 혹은 XML 파일 등에 바인딩하여 사용되는데, 컨트롤의 상호작용 및 바인딩 소스의 데이터 변동은 서로에게 영향을 주어 실시간으로 업데이트된다.

> 바인딩에서 [소스](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.source)(source)란, 바인딩 데이터로 가져올 객체를 가리킨다. 그리고 바인딩 [경로](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.path)(path)는 바인딩 소스로부터 접근하려는 속성을 의미한다.

## `Binding` 클래스
[`Binding`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding) 클래스는 기본적인 바인딩 기능을 제공하는 고급 API이다. 비록 C# 클래스이지만 흔히 아래와 같이 WPF 프레임워크 XAML에서 `{Binding}`을 통해 바인딩이 이루어진다.

```xml
<!--XAML DATA BINDING-->
<TextBlock x:Name="txtBlock" Text="{Binding Path=Text, ElementName=txtValue}" />
```

위의 XAML에서는 `txtValue` 식별자를 갖는 바인딩 소스의 `Text` 속성 데이터를 `txtBlock` 피바인딩 객체의 `Text` 속성에 연동시킨다. 여기서 바인딩 소스를 지정하는 방법은 여러 가지가 있으며 차후에 상세히 설명할 예정이다.

아래는 XAML에서 보여준 것과 동일한 바인딩을 C# 언어로 구현한 코드이다:

```csharp
// CLR DATA BINDING
Binding binding = new Binding("Text")
{ 
    ElementName = "txtValue",
};
txtBlock.SetBinding(TextBlock.TextProperty, binding);
```

### 바인딩 소스
> *참조: [Microsoft Docs 방법: 바인딩 소스 지정 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/data/how-to-specify-the-binding-source)*

다음은 WPF 프로젝트에서 바인딩 소스를 지정하는 몇 가지 방법들을 소개한다.

#### `Binding.Source`
[`Source`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.source) 속성은 원하는 객체를 바인딩 소스로 지정하는데 사용된다. WPF 프레임워크나 XAML 요소가 아닌 단순 CLR 클래스로부터 객체화하여 바인딩시키는데, 아래는 C# 소스 코드에 정의된 `CLASS` 클래스로부터 생성된 객체를 `Source` 속성으로 연동시키는 작업이며 [CLR 네임스페이스](#clr-네임스페이스) 내용을 참조할 것을 권장한다.

```csharp
using System.Windows;

namespace WPFApplication
{
    /* CLASS FOR THE BINDING SOURCE */
    public class CLASS
    {
        public CLASS() { }
        public string Property { get; set; } = "";
    }
}
```
```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <!--RESOURCE: BINDING SOURCE-->
    <Window.Resources>
        <local:CLASS x:Key="resCLASS" Property="Hello World!" />
    </Window.Resources>
    
    <!--BINDING: SOURCE PROPERTY-->
    <StackPanel>
        <TextBox x:Name="txtValue"
                 Text="{Binding Path=Property, Source={StaticResource resCLASS}, UpdateSourceTrigger=PropertyChanged}" />
        <WrapPanel>
            <TextBlock x:Name="txtLabel" Text="Value: " FontWeight="Bold" />
            <TextBlock x:Name="txtBlock"
                       Text="{Binding Path=Property, Source={StaticResource resCLASS}}" />
        </WrapPanel>
    </StackPanel>

</Window>
```

CLR 네임스페이스의 `CLASS`는 XAML 요소가 아니기 때문에 리소스 하에 선언되어 `x:Key` 지시문을 함께 기입하였다. 그러므로 바인딩 소스로 지정하기 위해서는 [`{StaticResource}`](#wpf-리소스)를 통해 리소스의 객체를 가져온다. 그리고 [`Binding.UpdateSourceTrigger`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.updatesourcetrigger) 속성이 `PropertyChanged`로 설정되어 있는데, 이는 피바인딩 객체의 `Text` 속성에 변화가 발생하면 바인딩 소스를 즉시 업데이트한다.

#### `Binding.RelativeSource`
[`RelativeSource`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.relativesource) 속성은 피바인딩 객체의 부모 요소를 바인딩 소스로 지정하는데 사용된다. 그러나 자식과 형제 요소는 접근할 수 없으며, 다음은 [`{RelativeSource}`](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/relativesource-markupextension) 확장문을 통해 선택할 수 있는 네 가지의 모드에 대하여 소개한다.

* [`Self`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.relativesourcemode#System_Windows_Data_RelativeSourceMode_Self): 피바인딩 객체 스스로를 가리킨다.

  ```xml
  <Button Content="Square" Width="100" Height="{Binding Path=Width, RelativeSource={RelativeSource Self}}" />
  ```

* [`FindAncestor`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.relativesourcemode#System_Windows_Data_RelativeSourceMode_FindAncestor): 피바인딩 객체로부터 `AncestorType` 종류의 `AncestorLevel` 번째의 부모 요소를 가리킨다.

  ```xml
  <StackPanel Name="Column" Orientation="Vertical">
      <StackPanel Name="Row1" Orientation="Horizontal">
          <Button Content="{Binding Path=Name,
                                    RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type StackPanel}, AncestorLevel=1}}" />
          <Button />
      </StackPanel>
      <StackPanel Name="Row2" Orientation="Horizontal">
          <Button />
          <Button Content="{Binding Path=Name,
                                    RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type StackPanel}, AncestorLevel=2}}" />
      </StackPanel>
  </StackPanel>
  ```

* [`TemplatedParent`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.relativesourcemode#System_Windows_Data_RelativeSourceMode_TemplatedParent)

  ```xml
  
  ```

* [`PreviousData`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.relativesourcemode#System_Windows_Data_RelativeSourceMode_PreviousData)

  ```xml
  
  ```

#### `Binding.ElementName`
[`ElementName`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.binding.elementname) 속성은 원하는 XAML 요소의 `Name` 속성 혹은 `x:Name` 지시문으로 할당된 식별자를 통해 바인딩 소스로 지정하는데 사용된다. 바인딩 소스를 XAML 요소의 식별자로 찾아내 편리하지만, 리소스 하에 선언된 CLR 객체나 WPF 컨트롤을 대상으로는 사용 불가하다. 아래는 XAML 요소 간을 바인딩한 간단한 예시 코드이다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WPFApplication">

    <!--BINDING: ELEMENTNAME PROPERTY-->
    <StackPanel>
        <TextBox x:Name="txtValue" Text="Hello World!" />
        <WrapPanel>
            <TextBlock x:Name="txtLabel" Text="Value: " FontWeight="Bold" />
            <TextBlock x:Name="txtBlock" Text="{Binding Path=Text, ElementName=txtValue}" />
        </WrapPanel>
    </StackPanel>

</Window>
```

## `MultiBinding` 클래스

### `DataContext`


바인딩 소스를 지정하는 대표적인 방법으로 [`FrameworkElement.DataContext`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.frameworkelement.datacontext), 일명 데이터 컨텍스트(data context)가 있다.

데이터 컨텍스트(data context)는 요소가 부모로부터 데이터 소스 및  정보를 상속받도록 하는 개념이다.

### 단방향 데이터 바인딩
단방향 데이터 바인딩(One-way Data Binding)

### 양방향 데이터 바인딩
양방향 데이터 바인딩(Two-way Data Binding)

# WPF: 이벤트
