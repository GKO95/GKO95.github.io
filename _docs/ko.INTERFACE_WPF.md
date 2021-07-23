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
> *참조: [Microsoft Docs WPF 아키텍처 (영문)](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/wpf-architecture?view=netframeworkdesktop-4.8)*

* PresentationFramework

* PresentationCore

* milcore

### WinForms 비교

# WPF: 프로젝트 생성

## 비주얼 스튜디오

![비주얼 스튜디오 WPF 프로젝트 생성 (1단계)](/images/docs/wpf/wpf_vs_project1.png)

![비주얼 스튜디오 WPF 프로젝트 생성 (2단계)](/images/docs/wpf/wpf_vs_project2.png)

![비주얼 스튜디오 WPF 프로젝트 생성 (3단계)](/images/docs/wpf/wpf_vs_project3.png)

![비주얼 스튜디오 WPF 프로젝트](/images/docs/wpf/wpf_vs_project4.png)

* `App.xaml`: WPF 시작점

* `AssemblyInfo.cs`

* `MainWindow.xaml`

# WPF: XAML
[확장 응용 프로그램 마크업 언어](https://ko.wikipedia.org/wiki/XAML)(확장 응용 프로그램 마크업 언어), 혹은 간단히 XAML은 WPF에서 그래픽 사용자 인터페이스를 제작하는데 사용되는 선언형 언어이다. XAML은 정보화 사회에서 데이터를 저장 및 전달에 핵심 [XML](https://ko.wikipedia.org/wiki/XML)으로부터 응용 프로그램에도 적용할 수 있도록 확장된 것으로 XML의 기본 개념과 원리는 그대로 지니고 있다. 그러므로 본 장은 .NET에서의 XAML 사용법 이외에도 XML에 대한 내용을 다수 포함한다.

> XML은 데이터의 저장 및 전달에 매우 유용하게 사용되는 언어로 이미 수많은 분야에서 활용되고 있다. 단, XML 자체는 정보를 담는 데이터에 불과하며 이를 시각화시키거나 동작하는 소프트웨어가 별도로 필요하다. 대표적인 예시로 [SVG](https://ko.wikipedia.org/wiki/SVG) 이미지 파일은 XML로 구성되어 있으며, 웹에서는 확장된 HTML 언어로 [XHTML](https://ko.wikipedia.org/wiki/XHTML)가 사용되기도 한다.

## XML 요소
XML은 정해진 태그와 구조가 없다: 개발자가 직접 원하는 태그 이름을 지정하며 구조도 자유롭게 설계할 수 있다. 이는 HTML 언어가 `<div>`나 `<span>` 등의 미리 지정된 태그를 가지며 구조적으로 어디에서 어떻게 사용되어야 하는지 규칙이 있는 점과 상반된다. 만일 본 GitHub Pages를 XML로 표현한다면 다음과 같이 나타낼 수 있을 것이다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
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

    <document category="Interface">
        <title lang="ko">WPF</title>
        <order>33</order>
        <icon>icon-wpf.png</icon>
    </document>

</ghpages>
```

### 루트 요소


## XML 네임스페이스
> *참조: [XML namespace - Wikipedia](https://en.wikipedia.org/wiki/XML_namespace)*

XML 네임스페이스(namespace)는     [C++]()과 [C#]()의 네임스페이스와 동일한 역할을 한다. 

`xmlns`로부터 선언된다.

네임스페이스 이름을 [통합 자원 식별자](https://ko.wikipedia.org/wiki/통합_자원_식별자)(uniform resource identifier; URI)라고 부른다.

```xml
<Window x:Class="WPFApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WPFApplication"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>

    </Grid>
</Window>
```




`x:Class="WPFApplication.MainWindow"`는 `WPFApplication` 네임스페이스에 있는 `MainWindow`의 [분할](../ko.PRGMING_Csharp/#한정자) 클래스라는 것을 의미한다.

# WPF: 컨트롤

# WPF: 바인딩
