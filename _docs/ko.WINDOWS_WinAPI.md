---
layout: docs
category: 윈도우
title: 윈도우 API
slug: ko.WinAPI
icon: icon-windows.svg
order: null
---
# 윈도우 API
[윈도우 API](https://ko.wikipedia.org/wiki/윈도우_API)(일명 WinAPI)는 윈도우 운영체제 리소스에 접근하여 활용할 수 있도록 하는 [어플리케이션 프로그래밍 인터페이스](https://ko.wikipedia.org/wiki/API)이다. 이전에는 32비트 윈도우 운영체제의 프로그래밍 인터페이스인 Win32 API로 알려졌으나, 마이크로소프트는 특정 아키텍처에 종속되지 않는 명칭으로 변경한 것이다. 윈도우가 개발되는 당시 가장 널리 사용된 저급 [C](ko.C) 프로그래밍 언어로 작성되었으므로 윈도우 API는 타 프로그래밍 언어에서도 불러와 활용이 가능하다.

## 컴포넌트 오브젝트 모델
> *참조: [구성 요소 개체 모델 - Win32 apps &#124; Microsoft Docs](https://docs.microsoft.com/ko-kr/windows/win32/com/the-component-object-model)*

[컴포넌트 오브젝트 모델](https://ko.wikipedia.org/wiki/컴포넌트_오브젝트_모델)(Component Object Model; COM)은 마이크로소프트가 1993년에 프로세스 간 통신에 호환성을 보장하기 위해 표준화한 [어플리케이션 "이진" 인터페이스](https://ko.wikipedia.org/wiki/응용_프로그램_이진_인터페이스)이다. 본 내용을 진행하기 전에 API와 ABI의 차이점을 간단히 소개할 필요가 있다.

| 비교 | API | ABI |
|-----|:----:|:-----:|
| 라이브러리 연관성 | 함수는 무엇이 존재하며<br/>인자의 개수와 순서가 어떤지 선언 | 함수는 어떻게 접근되며<br/>인자는 어떻게 전달이 되는지 정의 |
| 인터페이스 영역 | 소스 코드 | [머신 코드](https://ko.wikipedia.org/wiki/기계어) |
| 하드웨어 독립 | ⭕ | ❌ |

라이브러리에 정의된 데이터와 함수를 소스 코드로 불러올 때는 API가 활용되나, 이를 컴파일 된 이진 파일에서 접근 및 호출할 때에는 ABI가 활용된다. 이는 개발에 사용된 프로그래밍 언어와 컴파일러 상관없이, 서로 달리 제작된 어플리케이션이나 라이브러리 사이에서도 상호작용을 가능케 만든다. 단, COM 제작 및 사용을 할 수 있는 프로그래밍 언어로써는 [가상 메소드 테이블](https://ko.wikipedia.org/wiki/가상_메소드_테이블)을 활용할 수 있는 [포인터](ko.C#c-포인터)가 지원되어야 한다.

[C#](ko.Csharp) 프로그래밍 언어의 [인터페이스](ko.Csharp#인터페이스) 및 [클래스](en.Csharp#c-클래스)에 대한 지식은 개념의 유사성으로 COM을 이해하는데 도움이 된다: COM 클래스는 도입된 COM 인터페이스의 텅 빈 가상 메소드에 실질적인 함수 코드(일명 컴포넌트, 혹은 COM 오브젝트)를 정의하는데, 해당 컴포넌트를 사용하기 위해서는 오로지 COM 인터페이스로만 접근될 수 있다. 그리고 COM 오브젝트 호출하는 자를 COM 클라이언트, 그리고 제공하는 자를 COM 서버라고 지칭한다.

## 윈도우 런타임
[윈도우 런타임](https://ko.wikipedia.org/wiki/윈도우_런타임) (일명 WinRT)

# 같이 보기
* [Windows API index](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
* [COM Technical Overview](https://docs.microsoft.com/en-us/windows/win32/com/com-technical-overview)
