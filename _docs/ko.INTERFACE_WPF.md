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

# WPF: 프로젝트 생성

![비주얼 스튜디오 WPF 프로젝트 생성 (1단계)](/images/docs/wpf/wpf_vs_project1.png)

![비주얼 스튜디오 WPF 프로젝트 생성 (2단계)](/images/docs/wpf/wpf_vs_project2.png)

![비주얼 스튜디오 WPF 프로젝트 생성 (3단계)](/images/docs/wpf/wpf_vs_project3.png)

![비주얼 스튜디오 WPF 프로젝트](/images/docs/wpf/wpf_vs_project4.png)

* `App.xaml`

* `AssemblyInfo.cs`

* `MainWindow.xaml`

# WPF: XAML
[확장 응용 프로그램 마크업 언어](https://ko.wikipedia.org/wiki/XAML)(확장 응용 프로그램 마크업 언어), 혹은 간단히 XAML은 WPF에서 그래픽 사용자 인터페이스를 제작하는데 사용되는 선언형 언어이다.

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