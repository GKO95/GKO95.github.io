---
layout: docs
category: Windows
title: Windows API
slug: en.WinAPI
icon: icon-windows.svg
order: null
---
# Windows API
[Windows API](https://en.wikipedia.org/wiki/Windows_API) (aka. WinAPI) is an [application programming interface](https://en.wikipedia.org/wiki/API) for accessing resources in Windows operating system. Formally known as Win32 API, a programming interface for 32-bit Windows operating system, Microsoft changed the name so it would be not an architecture-specific. Written in [C](en.C) programming language, which was the most common low-level language by the time of Windows development, it is possible for other programming languages to implement Windows API as well.

## Component Object Model
> *Reference: [The Component Object Model - Win32 apps &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows/win32/com/the-component-object-model)*

[Component Object Model](https://en.wikipedia.org/wiki/Component_Object_Model) (COM) is an [application "binary" interface](https://en.wikipedia.org/wiki/Application_binary_interface) standardized by Microsoft in 1993 to guarantee compatibility of inter-process communication. Below is a comparison table between API and ABI.

| Comparison                 | API                                                              | ABI                                                             |
|----------------------------|:----------------------------------------------------------------:|:---------------------------------------------------------------:|
| Association with libraries | Declares what function exists<br/>and the number of its argument | Defines how functions are accessed<br/>and arguments are passed |
| Scope of interface         | Source code                                                      | [Machine code](https://en.wikipedia.org/wiki/Machine_code)      |
| Hardware independency      | ⭕                                                               | ❌                                                               |

While API is used to access data and call functions from libraries on source code level, these actions are done using ABI once the source code is compiled to binary file. This allows interaction between different applications or libraries possible irrelevant to its programming language and compiled used on development. To creata and use COM, however, the programming language must support [pointer](en.C#pointer) to utilize [virtual method table](https://en.wikipedia.org/wiki/Virtual_method_table).

Programming knowledge on an [interface](en.Csharp#interface) and [class](en.Csharp#class) of [C#](en.Csharp) language can help understand the concept of COM due to similarity: a COM interface acts as the one and only access point to a COM class that defines implementations (aka. components, or COM objects) of the interface. A caller and provider of a COM object is referred to as a COM client and a COM server respectively.

## Windows Runtime
[Windows Runtime](https://en.wikipedia.org/wiki/Windows_Runtime) (aka. WinRT)

# See also
* [Windows API index](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
* [COM Technical Overview](https://docs.microsoft.com/en-us/windows/win32/com/com-technical-overview)
