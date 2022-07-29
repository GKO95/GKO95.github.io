---
layout: docs
category: Windows
title: Windows API
slug: en.WinAPI
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

While API is used to access data and call functions from libraries on source code level, these actions are done using ABI once the source code is compiled to binary file. If all programs in the system conforms to the same ABI, applications can interact with other binary files in spite of its programming language and compiler used for development. Most notable example would be calling function or accessing resources from `.DLL` [dynamically-linked libraries](https://en.wikipedia.org/wiki/Dynamic-link_library). Windows OS uses COM, introduced by Microsoft, as its ABI.

COM uses [virtual method table](https://en.wikipedia.org/wiki/Virtual_method_table) to navigate to the implementation, and any language supporting [pointer](en.C#c-pointer) to access via memory address directly can create and use COM. Programming knowledge on an [interface](en.Csharp#interface) and [class](en.Csharp#c-class) of [C#](en.Csharp) language can help understand the concept of COM due to similarity: a COM interface acts as the one and only access point to a COM class that defines implementations (aka. components, or COM objects) of the interface. A caller and provider of a COM object is referred to as a COM client and a COM server respectively.


[Component Object Model](https://en.wikipedia.org/wiki/Component_Object_Model) (COM) is an [application "binary" interface](https://en.wikipedia.org/wiki/Application_binary_interface) standardized by Microsoft in 1993 to guarantee [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) compatibility of a `.DLL` library or an `.EXE` executable file. Unlike the Windows API that exposes interfaces to a language-specific source code, COM uses binary [machine code](https://en.wikipedia.org/wiki/Machine_code) as a mean to interface. This means .

## Windows Runtime
[Windows Runtime](https://en.wikipedia.org/wiki/Windows_Runtime) (aka. WinRT)

# See also
* [Windows API index](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
* [COM Technical Overview](https://docs.microsoft.com/en-us/windows/win32/com/com-technical-overview)
