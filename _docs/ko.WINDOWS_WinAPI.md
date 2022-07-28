---
layout: docs
category: 윈도우
title: 윈도우 API
slug: ko.WinAPI
order: null
---
# 윈도우 API
[Windows API](https://en.wikipedia.org/wiki/Windows_API) (aka. WinAPI) is an [application programming interface](https://en.wikipedia.org/wiki/API) for accessing resources in Windows operating system. Formally known as Win32 API, a programming interface for 32-bit Windows operating system, Microsoft changed the name so it would be not an architecture-specific. Written in [C](en.C) programming language, which was the most commonly used low-level language by the time of Windows development, it is possible for other programming languages to implement Windows API as well.

## 컴포넌트 오브젝트 모델
> *참조: [The Component Object Model - Win32 apps &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows/win32/com/the-component-object-model)*

[컴포넌트 오브젝트 모델](https://ko.wikipedia.org/wiki/컴포넌트_오브젝트_모델)(Component Object Model; COM) is an [application "binary" interface](https://en.wikipedia.org/wiki/Application_binary_interface) standardized by Microsoft in 1993 to guarantee [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) compatibility of a `.DLL` library or an `.EXE` executable file. Unlike the [Windows API](#windows-api) that provides interfaces through C programming language, COM uses binary [machine code](https://en.wikipedia.org/wiki/Machine_code) as a mean to interface. This means any language supporting [pointer](en.C#pointer) to access via memory address directly can create and use COM.

Programming knowledge on an [interface](en.Csharp#interface) and [class](en.Csharp#c-class) of [C#](en.Csharp) language can help understand the concept of COM due to similarity: a COM interface acts as the one and only access point to a COM class that defines implementations (aka. COM objects) of the interface. A caller and provider of a COM object is referred to as a COM client and a COM server respectively.

## 윈도우 런타임
[윈도우 런타임](https://ko.wikipedia.org/wiki/윈도우_런타임) (일명 WinRT)

# 같이 보기
* [Windows API index](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
* [COM Technical Overview](https://docs.microsoft.com/en-us/windows/win32/com/com-technical-overview)
