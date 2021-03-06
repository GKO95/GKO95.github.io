---
layout: docs
language: ko
category: 라이브러리
title: MFC
icon: icon-mfc.png
meta: MFC
order: 0x14
---
# **MFC: 소개**
> *참조: [Microsoft Docs MFC 데스크톱 애플리케이션 (한국어)](https://docs.microsoft.com/ko-kr/cpp/mfc/)*

MFC(Microsoft Foundation Class)는 1992년에 마이크로소프트에서 소개한 윈도우 OS 데스크톱 프로그램 개발을 위한 C++ 객체지향 라이브러리이다. 이후 마이크로소프트에서는 여러 다른 종류의 어플리케이션 프레임워크를 출시하였으나, 비주얼 스튜디오에서 간단히 생성할 수 있는 동시에 C++ 라이브러리라는 점이 [윈도우 API](https://ko.wikipedia.org/wiki/윈도우_API)와의 호환성을 보여주기 때문에 개발 분야에서는 여전히 MFC 수요가 있다. 그러나 오래된 어플리케이션 프레임워크인 만큼 최종 사용자들을 위한 (게임이나 유틸리티 등의) 프로그램 개발에는 적합하지 않으며, 그 대신에 필자는 [Qt](../ko.LIBRARY_Qt/) 프레임워크를 시도해 볼 것을 추천한다.

## 윈도우 자료형
윈도우 OS에는 `minwindef.h` 헤더 파일에 정의된 윈도우 자료형이 존재한다. 이는 Win32이나 MFC와 같은 윈도우 시스템 관련 라이브러리를 사용할 시 반드시 알아야 하는 자료형들이다. 아래는 가장 많이 사용되는 세 가지의 윈도우 자료형에 대한 설명이다.

| 자료형                       | 32비트 | 64비트 |
|---------------------------|:----:|:----:|
| `BYTE` (`unsigned char`)  | 1바이트 | 1바이트 |
| `WORD` (`unsigned short`) | 2바이트 | 2바이트 |
| `DWORD` (`unsigned long`) | 4바이트 | 4바이트 |

윈도우 자료형 중에서 `WORD`와 `DWORD`의 명칭이 각각 2바이트와 4바이트를 의미하게 된 이유에는 다음과 같은 역사를 바탕으로 결정되었다.

> 1987년에 출시된 윈도우 2.0과 같은 초창기 PC는 16비트, 즉 2바이트 아키텍처 환경의 운영체제였다. 16비트 아키텍처란, 시스템 내에서 데이터를 주고받는데 16비트 단위로 통신이 이루어진다는 의미이다. 그리고 아키텍처가 가지는 가장 자연스러운 데이터 길이 단위를 워드(word)라고 부른다. 이를 기반으로 윈도우 자료형 `WORD`가 2바이트가 된 것이다.
>
> 이후 1993년에 출시된 윈도우 NT 3.1 운영체제부터 32비트 아키텍처가 소개되었다. 32비트 아키텍처의 워드 길이는 32비트, 즉 4바이트이다. 그러나 이미 수많은 윈도우 라이브러리에서는 `WORD`가 2바이트 데이터로 고정되어 있다. 이러한 이유로 `WORD` 자료형의 두 배(double) 크기인 `DWORD` 4바이트 자료형을 새로 만들었다.
>
> 이와 동일한 원리로 64비트 아키텍처가 소개되면서 기존 워드의 네 배(quadruple) 크기인 `QWORD` 8바이트 자료형이 등장하였다. 

### 핸들
핸들(handle)은 윈도우 관련 라이브러리에서 수없이 언급되는 또다른 윈도우 자료형 중 하나이다. 핸들이 도대체 무엇인지 이해하기 위해 마이크로소프트 문서를 찾아보아도 "A handle to an object"라는 설명이 전부이다. 하지만 `HANDLE` 핸들 자료형이 어떻게 선언되었는지 확인하면 아래와 같은 코드를 발견하게 된다.

```cpp
typedef void* HANDLE;
```

즉, 데이터의 포인터에 불과하다!

하지만 포인터 중에서도 보이드 포인터만이 핸들이 될 수 있다. C/C++ 언어에는 `int` 정수형도 있고 `bool` 논리형도 있고, 심지어 보이드와 동일한 1바이트의 `char` 문자형이 있는데 왜 `void`를 사용하는지 의문을 가질 수 있다. 여기서 명심해야 할 두 가지 정보가 있다:

* 어떠한 자료형의 포인터라도 항상 메모리 주소의 크기인 4바이트(32비트) 혹은 8바이트(64비트)만큼 할당된다. 즉, *포인터의 크기는 자료형의 크기와 무관하다!*
* 보이드는 자료형이 없다는 의미이지만, 다른 의미로는 자료형이 아직 정해지지 않았다고 해석된다. 핸들은 단순히 데이터의 시작 메모리 위치를 알려줄 뿐이며, 본격적인 데이터 사용은 자료형 변환 후에 진행된다.

위의 내용을 보면 보이드 포인터가 왜 데이터 핸들("손잡이")이라고 불리는지 이해하는데 도움이 될 것이다.

## MFC 구조
MFC와 같은 어플리케이션 프레임워크의 대표적인 기능 중 하나로 그래픽 사용자 인터페이스, 일명 GUI를 제공하는 것이다. 응용 프로그램에 GUI를 사용하기 위해서는 MFC 라이브러리 프레임워크가 어떻게 구성되어야 하는지 알아야 한다. 이들은 상당히 추상적인 개념인 관계로, MFC 구조의 이해를 돕기 위해 메모장 프로그램을 예시로 들어 설명한다. 

![MFC 구조 설명을 위한 예시.](/images/docs/mfc/mfc_architecture_example.png)

### 문서
`CDocument` 클래스의 객체인 문서(document)는 MFC 구조 중에서 가장 작은 요소이며, 응용 프로그램이 가지는 텍스트 데이터 혹은 이미지나 오디오와 같은 미디어 자료를 가리킨다. 위의 메모장 예시에서 문서는 아래에 해당한다.

```
Hello World!
Welcome to GKO95's GitHub Pages.
```

### 뷰
`CView` 클래스의 객체인 뷰(view)는 문서를 어떻게 보여줄 것인지 혹은 처리할 것인지 등의 상호작용 방식을 결정한다. 마치 이미지 파일을 사진으로 볼 수 있는 반면, 메모장으로 열어 이미지 파일을 구성하는 자료를 텍스트로 확인할 수도 있는 이치이다. 문서를 담고있기 때문에 문서 창(document window)라고 부르기도 한다. 위의 메모장 예시에서 뷰는 아래에 해당한다.

![메모장의 뷰(view) 구조물.](/images/docs/mfc/mfc_architecture_view.png)

### 프레임 창
우선 윈도우 OS에서 창(window)란 무엇인지 확실히 짚고 갈 필요가 있다. 영어를 공부하면 아시다시피, window는 창문을 의미한다: 우리는 창문 너머 무언가를 바라보는데, 바로 윈도우 OS 명칭이 이런 사각형 창문에서 따온 이름이다. 그리고 동일한 이유로 직사각형 모양의 프로그램 GUI를 어플리케이션 창(application window)라고 부른다.

프레임 창(frame window)은 뷰 구조물을 담을 수 있는 테두리(frame)를 제공한다. 그러나 MFC에서는 프레임 창을 생성하는 클래스가 크게 두 가지로 나뉘어지며, 이는 각각 SDI 및 MDI로 구별된다:

* 단일 문서 인터페이스(Single Document Interface; SDI)는 하나의 문서만을 처리하도록 되어있으며, `CFrameWnd` 클래스로부터 객체화된다. 메모장 프로그램이 바로 SDI 형식에 해당한다.

* 다중 문서 인터페이스(Multiple Document Interface; MDI)는 여러 문서들을 하나의 프로그램에서 처리할 수 있도록 하며, `CMDIFrameWnd` 및 `CMDIChildWnd` 클래스로부터 객체화된다. 여기서 `CMDIFrameWnd` 클래스가 프레임 창의 본체이며, `CMDIChildWnd` 클래스를 자식으로 두어 각 문서들을 보여준다. 비주얼 스튜디오가 MDI 형식의 프로그램 중 하나이다.

![메모장의 프레임 창(frame window) 구조물.](/images/docs/mfc/mfc_architecture_framewnd.png)

### 어플리케이션
`CWinApp` 클래스 객체인 어플리케이션(application)은 본격적으로 프로그램을 초기화하고 실행하는 역할을 담당한다. 그래픽 사용자 인터페이스를 마련하여도 어플리케이션이 해당 창을 호출하여 실행하지 않으면 GUI가 없는 프로그램이 되거나, 일반적으로 프로그램이 즉시 종료된다. 위의 메모장 예시에서 어플리케이션은 아래에 해당한다.

![메모장의 어플리케이션(application) 구조물.](/images/docs/mfc/mfc_architecture_application.png)

### 쓰레드
`CWinThread` 클래스 객체인 쓰레드(thread) 여러 작업을 동시에 진행할 수 있도록 한다. 비록 GUI 요소가 아니지만 어플리케이션 객체를 생성하는 `CWinApp` 클래스의 기반 클래스로 상당한 중요성을 가진다. 다시 말해, 어플리케이션은 쓰레드 중 하나이지만 가장 핵심이 되는 쓰레드이다.

## MFC 리소스
리소스(resource)는 어플리케이션을 사용하기 위해 필요한 데이터와 정보를 제공한다. 비트맵 이미지 및 아이콘, 마우스 포인터, 메뉴와 툴바, 다이얼로그 창 등이 MFC의 리소스에 해당한다.

| 리소스        | 설명                                |
|:------------:|------------------------------------|
| Accelerator  | 프로그램 전용 단축키                        |
| Bitmap       | 비트맵 이미지                            |
| Cursor       | 마우스 포인터                            |
| Dialog       | 다이얼로그 (일명 대화 상자)                     |
| HTML         | HTML 파일                               |
| Icon         | 프로그램 아이콘                           |
| Menu         | 텍스트로 구성된 프로그램 기본 컨트롤바              |
| Ribbon       | *Menu* 그리고 *Toolbar* 리소스가 병합된 컨트롤바 |
| String Table | 사전등록 문자열 목록; 각 문자열마다 할당된 ID로 호출    |
| Toolbar      | 비트맵 및 아이콘으로 구성된 프로그램 보조 컨트롤바       |
| Version      | 프로그램 버전 정보                         |

여기서 메뉴와 툴바의 차이점이 명확하지 않아 잘 구분이 되지 않을 수 있다. 비주얼 스튜디오를 예를 들어보면 메뉴는 아래와 같다.

![비주얼 스튜디오 메뉴 리소스.](/images/docs/mfc/mfc_resource_menu.png)

메뉴는 각 프레임 창마다 하나만 가질 수 있는 특징이 있으며, 주로 프로그램 옵션 및 설정에 자주 사용된다. 메모장 프로그램에도 메뉴 리소스가 존재하는 것을 확인할 수 있다.

한편, 비주얼 스튜디오에서 툴바는 아래와 같다.

![비주얼 스튜디오 툴바 리소스.](/images/docs/mfc/mfc_resource_toolbar.png)

비트맵 이미지나 아이콘이 버튼을 구성하고 있으며, 일반적으로 도구의 접근성을 제공하기 위해 사용된다. 그러한 이유로 메뉴와 달리, 하나의 프레임 창에 여러 개의 툴바를 삽입할 수 있다. 메모장 프로그램에서는 툴바가 존재하지 않는다.

다이얼로그 창이란, 규모가 작은 프레임 창으로 대체로 어플리케이션에서 사용자에게 알림이나 메시지를 전달므로써 대화(dialog)하기 위해 사용된다. 비록 다이얼로그 창은 `CWnd:CDialog` 클래스로 프레임 창인 `CWnd:CFrameWnd`와 다르지만 형제 클래스로서 유사한 기능성을 가진다. 다이얼로그 창은 소규모 프로그램을 개발하는 데에도 흔히 사용되며, 아래는 비주얼 스튜디오에서 나타나는 다이얼로그 창을 활용한 예시 중 하나이다. 

![비주얼 스튜디오 다이얼로그 리소스.](/images/docs/mfc/mfc_resource_dialog.png)

이처럼 MFC에는 여러 종류의 리소스가 존재하며, 이들은 `.rc` 확장자 파일에서 모두 관리된다. 리소스들을 접근하기 위해서는 각각에 부여된 ID를 호출하며 이들은 `Resource.h` 헤더 파일에 자동적으로 기입된다. 리소스 파일과 헤더 파일의 연동은 아래의 코드로부터 이루어진다.

```cpp
1 TEXTINCLUDE 
BEGIN
    "resource.h\0"
END
```

`.rc` 파일과 `Resource.h` 헤더 파일은 비주얼 스튜디오에서 MFC 프로젝트를 생성하면 기본적으로 생성되는 파일들이며, 아래는 리소스 파일과 해당 헤더 파일의 일부를 보여준다.

```cpp
IDD_ABOUTBOX DIALOGEX 0, 0, 170, 62
STYLE DS_SETFONT | DS_MODALFRAME | DS_FIXEDSYS | WS_POPUP | WS_CAPTION | WS_SYSMENU
CAPTION "About MFC Application"
FONT 8, "MS Shell Dlg"
BEGIN
    ICON            IDR_MAINFRAME,IDC_STATIC,14,14,21,20
    LTEXT           "MFC Application, Version 1.0",IDC_STATIC,42,14,114,8,SS_NOPREFIX
    LTEXT           "Copyright (C) 2020",IDC_STATIC,42,26,114,8
    DEFPUSHBUTTON   "OK",IDOK,113,41,50,14,WS_GROUP
END
```

```cpp
#define IDD_ABOUTBOX				100
```

`IDD_ABOUTBOX`는 다이얼로그 창의 ID 중 하나이며, 위의 예시에서는 `IDD_ABOUTBOX`에 고유번호 양의 정수 `100`이 할당되었다. 그러므로 해당 다이얼로그를 호출하기 위해서는 문자열 `IDD_ABOUTBOX` 혹은 정수형 `100`을 기입하면 된다. 그렇지만 문자형과 정수형 ID는 고정된 값이 아니며 개발자가 원하는대로 변경해서 사용할 수 있다. 단, 문자열 및 정수형 ID는 절대 중복되어서는 안되며, 문자열 ID는 리소스 파일에 명시된 ID와 반드시 동일한 명칭을 가져야 한다.

### 컨트롤
MFC에서 컨트롤(control)이란, 데이터를 입력 혹은 수정할 수 있는 상호작용 가능한 리소스를 가리킨다. 일반적으로 다이얼로그 창의 버튼이나 텍스트 등으로 사용되는데, 대표적으로  버튼을 생성하는 `CButton`, 입력란을 생성하는 `CEdit`, 텍스트를 생성하는 `CStatic` 클래스 등이 있다. 컨트롤은 창을 생성하는 `CWnd` 클래스로부터 파생되었으므로, 하나의 창(window)처럼 다루면 된다.

컨트롤 또한 리소스이기 때문에 리소스 파일 및 `Resource.h` 헤더 파일에 ID를 가지고 있다.

# **MFC: 프로젝트 생성**
> *본 내용부터 실질적인 MFC 프로그래밍을 소개하므로, 반드시 C++ 내용을 숙지하도록 한다.*

위의 내용은 MFC 프레임워크에 대한 매우 기본적인 내용이다. 그 외에도 프레임워크 실행 단계, 메시지, 디바이스 컨텍스트 등 중요한 내용들을 아직 설명하지 않았으나, 기본적인 MFC 어플리케이션이 어떻게 구성되어 있는지 알아보는 것도 차후 내용을 이해하는데 큰 도움이 될 수 있다. 그러므로 본 장에서는 직접 비주얼 스튜디오에서 MFC 프로젝트를 생성 및 기본적인 코드과 API를 설명한다.

## 비주얼 스튜디오
[비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)(Visual Studio)는 마이크로소프트에서 개발한 윈도우 OS의 대표적인 IDE이다. 비주얼 스튜디오는 총 세 가지의 에디션이 존재하며, 무료 버전인 커뮤니티 에디션으로도 MFC 프로젝트를 생성할 수 있다. 통합 개발 환경인 만큼 다른 프로그래밍 언어도 함께 지원하므로 여러 종류의 구성요소를 제공한다. 그 중에서 MFC 프로젝트를 위해서는 "Desktop development with C++"를 선택한다.

![비주얼 스튜디오 MFC 프로젝트를 위한 구성요소.](/images/docs/mfc/mfc_vs_component.png)

만일 한국어 지원을 원한다면 "Language packs" 탭에서 한국어를 함께 선택하면 된다.

비주얼 스튜디오를 실행하면 아래와 같은 시작화면이 나타난다. 새로운 프로젝트를 생성하려면 오른쪽 하단의 "Create a new project" 버튼을 클릭한다.

![비주얼 스튜디오 시작화면.](/images/docs/mfc/mfc_vs_project1.png)

MFC는 윈도우 OS 어플리케이션을 위한 C++ 객체지향 라이브러이다. MFC 프로젝트를 생성하기 위해서는 아래의 필터를 설정하던가 직접 "MFC App" 옵션을 선택한다.

![그림 10. 비주얼 스튜디오 MFC 프로젝트 생성 (1단계).](/images/docs/mfc/mfc_vs_project2.png)

프로젝트 및 솔루션 이름을 선정한다. 여기서 프로젝트란, 소스 코드와 컴파일러 설정 등의 실질적인 코딩 내용을 관리하는 `.vcxproj` 확장자 파일이며, 솔루션은 여러 프로젝트 파일을 하나의 폴더처럼 담는 `.sln` 파일이다. 비주얼 스튜디오에서 프로젝트는 `.sln` 파일로 열기를 권장한다.

![그림 11. 비주얼 스튜디오 MFC 프로젝트 생성 (2단계).](/images/docs/mfc/mfc_vs_project3.png)

프로젝트 생성 버튼을 클릭하면 MFC 어플리케이션 설정 창이 나타난다. 본 장은 MFC 어플리케이션 프로젝트를 생성하는 방법과 API들을 설명하기 위함으로 가장 기본적인 어플리케이션 종류, 즉 Application type: `Dialog based`를 선택한다. 

![그림 12. 비주얼 스튜디오 MFC 프로젝트 생성 (3단계).](/images/docs/mfc/mfc_vs_project4.png)

비록 SDI나 MDI가 아닌 다이얼로그 창을 선택하였으나 간단하면서도 넓은 활용도를 가지는 어플리케이션 종류이다. SDI 및 MDI 어플리케이션이 아닌 관계로 Document Template Properties 단계는 비활성화 되어있다.

User Interface Feature 단계에서는 기본적인 프레임 창 구성을 설정한다. 다음은 다이얼로그 기반 어플리케이션을 생성할 시 기본설정 스타일이다.
* 두꺼운 프레임 (Thick frame)
* 시스템 메뉴 (System menu)
* About 상자 (About box)

여기서 시스템 메뉴란, 아래의 이미지처럼 프로그램의 최상단에 위치하여 아이콘, 어플리케이션 이름, 최소화 및 최대화 그리고 닫기 버튼을 제공하는 어플리케이션 창 제어요소이다.

![그림 13. MFC 어플리케이션 시스템 메뉴.](/images/docs/mfc/mfc_sysmenu_bar.png)

비록 MFC 어플리케이션 설정 단계에서 시스템 메뉴를 누락시켜도, 이후 다이얼로그 리소스 속성을 간단히 변경할 수 있다.

![그림 14. 비주얼 스튜디오 MFC 프로젝트 생성 (4단계).](/images/docs/mfc/mfc_vs_project5.png)

Advanced Features는 MFC 프로젝트에서 추가적인 고급 옵션 설정을 다룬다. 다음은 다이얼로그 기반 어플리케이션을 생성할 시 기본설정 기능들이다.
* 프린트 및 프린트 미리보기 (Print and print preview)
* 액티브엑스 컨트롤 (ActiveX controls)
* 공통 컨트롤 선정 (Common Control Manifest)
* 재시작 관리자 지원 (Support Restart Manager)
* 이전 문서 다시열기 (Reopen previously open documents)
* 어플리케이션 복구 지원 (Support application recovery)

하지만 가장 기본적인 MFC 개념 및 원리 설명이 목적이므로 이번 프로젝트에서는 해당 고급 옵션을 아래와 같이 모두 해제한다.

![그림 15. 비주얼 스튜디오 MFC 프로젝트 생성 (5단계).](/images/docs/mfc/mfc_vs_project6.png)

MFC 어플리케이션 설정 마지막 단계로 Generate Classes가 있다. C++ 객체지향 라이브러리이기 때문에 객체를 기반으로 어플리케이션이 실행되며, 다이얼로그 기반 어플리케이션은 기본적으로 두 개의 클래스가 생성된다: 어플리케이션의 `CWinApp` 그리고 다이얼로그 창의 `CDialog`(혹은 확장된 기능을 가진 `CDialogEx`)가 있다. 해당 단계에서는 각 클래스의 이름을 선정하는 작업이며, 이해를 돕기 위해 기본명칭인 `CMFCApplicationApp` 그리고 `CMFCApplicationDlg`를 그대로 사용하였다.

![그림 16. 비주얼 스튜디오 MFC 프로젝트 생성 (6단계).](/images/docs/mfc/mfc_vs_project7.png)

프로젝트 설정을 완료하면 MFC 어플리케이션에서 설정한 내용대로 `CWinApp`을 기반으로 한 `CMFCApplicationApp` 어플리케이션 클래스와 `CDialogEx`을 기반으로 한 `CMFCApplicationDlg` 다이얼로그 클래스가 생성된 것을 확인할 수 있다.

![그림 17. 비주얼 스튜디오 MFC 프로젝트.](/images/docs/mfc/mfc_vs_project8.png)

그 외에도 솔루션 탐색기를 보면 추가적인 파일이 생성된 것을 볼 수 있다.

| 파일 | 설명 |
|:-:|---|
| `pch.h` | [컴파일된 헤더](../ko.PRGMING_Cpp/#컴파일된-헤더) |
| `Resource.h` | 리소스 헤더 파일 |
| `framework.h` | MFC 동작을 위한 요소 호출 |
| `targetver.h` | OS에 따른 MFC 컨트롤 버전 선택 |
| `MFCApplication.rc` | 리소스 파일 (시스템 자동기입) |
| `res/MFCApplication.rc2` | 리소스 파일 (부가적 수동기입) |
| `res/MFCApplication.ico` | 기본 아이콘 파일 |

여기서 `.rc2` 파일은 개발자가 추가적인 리소스를 추가하고자 할 때 `.rc`를 건들지 않고 안전하게 추가하고자 할 때 사용된다. `.rc2` 확장자는 아래와 같이 간접적으로 프로젝트의 `.rc` 리소스 파일에 추가된다. 즉, `.rc2` 확장자 파일은 외부 리소스를 불러오기 위해 사용된다.

```cpp
#include "res\MFCApplication.rc2"  // non-Microsoft Visual C++ edited resources
```

`.rc` 리소스 파일을 클릭하면 비주얼 스튜디오에서 리소스 뷰를 보여준다. 이는 해당 파일 안에 어떠한 리소스가 들어있는지 텍스트가 아닌 시각적으로 보여준다. 아래는 다이얼로그 리소스를 비주얼 스튜디오에서 열었을 때의 모습이다.

![그림 18. 비주얼 스튜디오 MFC 다이얼로그 리소스.](/images/docs/mfc/mfc_vs_project9.png)

Toolbox에는 다이얼로그에 삽입할 수 있는 여러가지 컨트롤들이 존재하며, 이와 함께 속성에서 스타일을 변경하여 다이얼로그를 꾸밀 수 있다.

## MFC 프로젝트 분석
이전 부문에서 설명한 절차를 따라 가장 기초적인 다이얼로그 기반 MFC 프로젝트를 생성하였다. 이제부터 각 코드와 API가 MFC 어플리케이션 생성에 어떠한 역할을 하는지 하나씩 알아보는 차례를 갖는다.

먼저 C++ 프로그래밍 언어에는 [`WinMain()` 시작점](../ko.PRGMING_Cpp/#winmain-함수)이 있다는 점을 다시 한 번 언급할 필요가 있다; MFC 어플리케이션은 전통적인 `main()` 시작점이 아닌 `WinMain()` 시작점에서부터 프로그램이 실행된다. 그러나 MFC 프로젝트에는 `WinMain()` 시작점을 찾아볼 수가 없으며, 이는 MFC 라이브러리가 내부적으로 시작점을 꾸며주기 때문에 코드 상으로 드러나지 않는 것이다. 그리고 이에 직접 관여하는 클래스가 바로 `CWinApp`이다.

### `CWinApp` 클래스
MFC 어플리케이션을 실행할 때 가장 먼저 수행되는 코드가 바로 `CWinApp` 클래스 객체화이다. 객체가 없으면 프로그램을 실행하는 프로세스가 생성되지 않기 때문이다.

```cpp
CMFCApplicationApp theApp;
```

그러면 자동적으로 객체의 생성자가 수행된다.

```cpp
CMFCApplicationApp::CMFCApplicationApp()
{
    // TODO: add construction code here,
    // Place all significant initialization in InitInstance
}
```

`CWinApp`의 객체화 및 생성자 이후부터 본격적으로 `WinMain()` 시작점이 동작한다. 그 중에서 가장 우선적으로 실행되는 메소드가 바로 `InitInstance()`이다. 해당 메소드는 객체(즉, 어플리케이션)를 초기화하는데 사용된다.

```cpp
BOOL CMFCApplicationApp::InitInstance()
{
    CWinApp::InitInstance();

    ...

}
```

여기서 `CWinApp::InitInstance()` 메소드가 객체 초기화를 담당하는 가상 메소드이다. 하지만 가상 메소드가 `CMFCApplicationApp::InitInstance()`에 의해 오버라이딩 되어 객체 초기화 기능이 상실된다. 이러한 이유로 내부에 `CWinApp`의 메소드를 별개로 호출한 것이다.

다음 코드들은 어플리케이션 구동에 영향을 미치지 않는 부가적 기능들에 대한 내용이다. MFC 어플리케이션에 필요가 없으면 삭제해도 전혀 문제가 없다.

* 셸 관리자: 명령 프롬프트나 파워셸을 MFC 어플리케이션에서 접근할 수 있다.

  ```cpp
      // Create the shell manager, in case the dialog contains
      // any shell tree view or shell list view controls.
      CShellManager *pShellManager = new CShellManager;
  
      // Delete the shell manager created above.
      if (pShellManager != nullptr)
      {
          delete pShellManager;
      }
  ```

* 비주얼 관리자: MFC 어플리케이션 컨트롤이 어떠한 스타일로 보여질지 선택한다. 라이브러리에서 제공하는 일부 스타일은 [여기](https://docs.microsoft.com/ko-kr/cpp/mfc/visualization-manager?view=msvc-160)에서 확인할 수 있다. 기본 스타일은 "Window Native/Default"이다.

  ```cpp
      // Activate "Windows Native" visual manager for enabling themes in MFC   controls
      CMFCVisualManager::SetDefaultManager(RUNTIME_CLASS  (CMFCVisualManagerWindows));
  ```

* 레지스트리 키 설정: 프로그램 설정과 같은 일부 데이터를 어떠한 레지스트리(registry)에 저장할 것인지 선정한다. 레지스트리를 사용하지 않을 시에는 프로그램 용량을 줄이기 위해 해당 코드를 삭제하는 것을 권장한다.

  ```cpp
      // Standard initialization
      SetRegistryKey(_T("Local AppWizard-Generated Applications"));
  ```

모든 초기 설정이 완료되었으면 다이얼로그 리소스를 활성화하여 어플리케이션 창을 보여준다. 아래는 `CMFCApplicationDlg` 다이얼로그 창 클래스를 객체화하여 `DoModal()` 메소드로 다이얼로그 창을 띄어준다.

```cpp
    CMFCApplicationDlg dlg;
    m_pMainWnd = &dlg;
    INT_PTR nResponse = dlg.DoModal();
    if (nResponse == IDOK)
    {
        // TODO: Place code here to handle when the dialog is
        //  dismissed with OK
    }
    else if (nResponse == IDCANCEL)
    {
        // TODO: Place code here to handle when the dialog is
        //  dismissed with Cancel
    }
    else if (nResponse == -1)
    {
        // TODO: Place code here to handle when the dialog is
        //  dismissed with the others
    }
```

만일 다이얼로그 창이 OK 및 Cancel 버튼을 가진다면 클릭 시 `CDialog.DoModal()` 메소드가 종료된다. 다이얼로그 창이 닫히는 동시 메소드는 클릭된 버튼에 따라 정수형을 반환된다. OK 버튼을 클릭하면 `IDOK`(정수형 1), Cancel 버튼을 클릭하면 `IDCANCEL`(정수형 2)가 반환된다.

### `CDialog` 클래스
MFC 어플리케이션은 `CWinApp`의 객체에서 `CDialog` 클래스를 객체화하여 다이얼로그 창을 생성하였다. 이번 내용은 객체화된 다이얼로그 창이 어떠한 절차를 걸쳐 프로그램에 나타나는지 설명한다.

다이얼로그를 생성하면 우선 객체의 생성자가 실행된다.

```cpp
CMFCApplicationDlg::CMFCApplicationDlg(CWnd* pParent /*=nullptr*/)
    : CDialogEx(IDD_MFCAPPLICATION_DIALOG, pParent)
{
    m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}
```

이는 아이콘 리소스를 `m_hIcon` 맴버로 할당하는 코드이며, 주의해야 할 점은 절대로 `m_hIcon`를 메소드 내의 지역 변수로 정의하지 말아야 한다는 것이다. 지역 변수는 스택 메모리에 할당되므로 메소드가 끝나는 즉시 할당 해제되어 데이터가 사라진다. 이러한 이유로 리소스는 클래스 맴버 혹은 힙 메모리 영역에 할당하여 호출해야 한다.

`CWinApp::InitInstance()` 메소드와 유사하게, `CDialog::OnInitDialog()` 메소드는 다이얼로그 리소스 객체를 초기화하는데 사용된다. 이 또한 가상 메소드이므로 `CDialog` 클래스에서 직접 호출할 필요가 있다. 

```cpp
BOOL CMFCApplicationDlg::OnInitDialog()
{
    CDialogEx::OnInitDialog();

    ...

}
```

다음 코드들은 다이얼로그 창 생성에 영향을 미치지 않는 부가적 기능들에 대한 내용이다. MFC 어플리케이션에 필요가 없으면 삭제해도 전혀 문제가 없다.

* 시스템 메뉴에 About 상자 추가: MFC 어플리케이션 시스템 메뉴 우클릭 시 간단한 프로그램 정보를 알려주는 About 상자를 띄우는 옵션이 나타난다. 만일 About 상자가 시스템 메뉴에 나타나기를 원치 않으면 해당 코드 부문을 삭제하면 된다.

  ```cpp  
      // IDM_ABOUTBOX must be in the system command range.
      ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
      ASSERT(IDM_ABOUTBOX < 0xF000);
          
      CMenu* pSysMenu = GetSystemMenu(FALSE);
      if (pSysMenu != nullptr)
      {
          BOOL bNameValid;
          CString strAboutMenu;
          bNameValid = strAboutMenu.LoadString(IDS_ABOUTBOX);
          ASSERT(bNameValid);
          if (!strAboutMenu.IsEmpty())
          {
              pSysMenu->AppendMenu(MF_SEPARATOR);
              pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
          }
      }
  ```

  위의 코드가 적용될 시, 아래의 이미지처럼 `About MFCApplication...` 옵션이 나타난 것을 확인할 수 있다.

![그림 19. MFC 어플리케이션 시스템 메뉴 About 상자.](/images/docs/mfc/mfc_sysmenu_about.png)

* 다이얼로그 창 아이콘 설정: 다이얼로그 클래스 생성자에서 불러온 아이콘 리소스를 어플리케이션 창 아이콘으로 적용시킨다. `TRUE`와 `FALSE` 전달인자는 각각 16비트 및 32비트 아이콘 설정을 구별 짓는다.

  ```cpp
      SetIcon(m_hIcon, TRUE);         // Set big icon
      SetIcon(m_hIcon, FALSE);        // Set small icon
  ```

# MFC: 메시지
현재까지 MFC 프로젝트 분석 내용은 대체로 몇 가지의 메소드만 콕 집어 정의되어 있는 코드가 어떠한 기능과 역할을 하는지 설명하는 것이었다. 하지만 객체지향 라이브러리인 만큼 어떤 메소드가 언제 실행되는지 전혀 알려진 게 없다. 이를 가능케 하는 데이터가 바로 메시지(message)이며, 본 장에서는 메시지의 구성 및 순환에 대하여 소개한다.

## 메시지
MFC 어플리케이션에서 상호작용 혹은 데이터의 변화 등의 이벤트(event)가 발생하면 메시지(message)를 송신한다. 예를 들어 창 크기 조절, 마우스/키보드 버튼 클릭, 혹은 컨트롤 입력란 텍스트 변화 등은 모두 이벤트에 해당한다.

아래는 메시지 자료형인 `MSG` 구조체이다.

```cpp
typedef struct tagMSG {
    HWND   hwnd;
    UINT   message;
    WPARAM wParam;
    LPARAM lParam;
    DWORD  time;
    POINT  pt;
} MSG, *PMSG, *NPMSG, *LPMSG;
```

메시지 구조체는 다음과 같이 구성되어 있다.

| 맴버 | 설명 |
|---|-----|
| `HWND hwnd`  | 해당 메시지를 받을 `CWnd` 클래스 기반의 객체 [핸들](./#핸들) |
| `UINT message`  | [메시지 ID](https://wiki.winehq.org/List_Of_Windows_Messages); 최대 32,767 (0x7FFF) 종류를 나타낼 수 있다. |
| `WPARAM wParam` | `INT` 기반의 추가 정보; 메시지 종류에 따라 가지는 의미가 다르다. |
| `LPARAM lParam` | `LONG` 기반의 추가 정보; 메시지 종류에 따라 가지는 의미가 다르다. |
| `DWORD time` | 메시지가 보내진 시간 |
| `POINT pt` | 메시지가 보내졌을 때의 마우스 포인터 위치 |

> 위의 도표에서 `WPARAM`과 `LPARAM`을 각각 "`int` 기반" 및 "`long` 기반"이라고 명시하였다. 바로 전자는 `INT` 자료형의 포인터이고 후자는 `LONG` 자료형의 포인터이기 때문에 붙여진 이름이다. 이때 `INT`는 16비트 아키텍처에서 4바이트가 아닌 2바이트, 즉 `WORD`와 동일한 크기를 가졌다.

MFC 어플리케이션에서 메시지는 몇 가지의 분류로 나뉘어진다: *[Microsoft Docs - Message Categories](https://docs.microsoft.com/ko-kr/cpp/mfc/message-categories)*

### 윈도우 메시지
윈도우 메시지는 `CWnd` 윈도우 클래스 기반의 객체에서 수신하여 처리하는 메시지이다. 일반적으로 윈도우 메시지 ID는 `WM_` 접두사를 가지며, 메시지 종류에 따라 `wParam` 및 `lParam`은 메시지를 어떻게 처리해야 하는지에 대한 정보가 있는가 하면 아예 사용하지 않는 윈도우 메시지도 존재한다.

윈도우 메시지는 크게 두 가지의 종류로 나뉘어진다:

* 알림 메시지 (Notification message)

  알림 메시지는 해당 윈도우에서 이벤트가 발생하였을 때 송신되는 메시지이다. 예를 들어 시스템 메뉴 우클릭 시에 `WM_SYSCOMMAND`가 발송되며, (윈도우 7 이후는 불가능하지만) 최소화된 상태에서 어플리케이션 창을 이동시키면 `WM_QUERYDRAGICON`가 발송된다.

* 컨트롤 알림 메시지 (Control-Notification message)

  알림 메시지와 동일하게 윈도우에게 이벤트가 발생하였다는 것을 알리는 메시지이지만, MFC 컨트롤에서 `WM_COMMAND` 메시지로 발송되는 차이점을 가진다. 컨트롤도 사실상 보면 `CWnd`의 파생 클래스이므로 창(window)으로 간주된다. 컨트롤 알림 메시지는 다음과 같은 정보를 가진다.

  | 메시지 발생지 | `wParam` (상위 2바이트) | `wParam` (하위 2바이트) | `lParam` (전체 4바이트)              |
  | -------------- |:---------------:|:--------------------------------:|:------:|
  | MFC 컨트롤        | 알림 코드 | 메시지 발생 컨트롤 ID | 메시지 발생 컨트롤 핸들 |

  여기서 알림 코드는 어떠한 MFC 컨트롤을 사용하는가에 따라 제각각이다. 예를 들어 `CButton` 클래스의 버튼 클릭 알림 코드는 `BN_CLICK` (정수형 0), 그리고 `CEdit` 클래스의 텍스트 입력란 클릭 알림 코드는 `EN_SETFOCUS` (정수형 256)이다.

### 명령 메시지
명령 메시지는 `WM_COMMAND`를 사용하는 또다른 메시지이지만, MFC 컨트롤 이외의 리소스인 메뉴, 툴바, 혹은 단축키로부터 발송된다. 명령 메시지는 다음과 같은 정보를 가진다. 

| 메시지 발생지 | `wParam` (상위 2바이트) | `wParam` (하위 2바이트) | `lParam` (전체 4바이트)              |
| -------------- |:---------------:|:--------------------------------:|:------:|
| 메뉴, 툴바  | 0               | 메시지 발생 메뉴 혹은 툴바 리소스 ID | 0      |
| 단축키    | 1               | 메시지 발생 단축키 ID            | 0      |

## 메시지 루프
MFC 어플리케이션에서 이벤트가 발생하면 메시지가 발송된다. 발송된 메시지는 반드시 메시지 큐(Message queue)라는 [큐 구조 메모리](../ko.PRGMING_Cpp/#큐-구조)를 걸쳐 하나씩 순서대로 메시지 루프로 보내어진다.

![그림 20. MFC 어플리케이션 실행 절차.](/images/docs/mfc/mfc_msg_execution.gif)

메시지 루프(Message loop)는 메시지 큐로부터 수신받은 메시지가 있으면 최종적으로 메시지를 수신받을 메시지 처리자(message handler)로 보내야 하는지 결정하는 GUI 어플리케이션의 핵심 작업을 수행한다. 위의 흐름도에서 메시지 루프는 "Available Messages?" 단계에서 메시지를 받으며 "Get/Translate/Dispatch" 단계에서 메시지를 올바른 메시지 처리자로 보내는 작업을 반복적으로 실행한다.

메시지 루프를 종료하기 위해서는 `WM_QUIT` 윈도우 메시지를 생성한다. 해당 메시지는 사용자가 파일 메뉴에서 "Exit"을 선택하거나 시스템 메뉴에서 닫기 버튼을 클릭, 혹은 키보드로 `Alt+F4`를 누르면 발송된다.

## 메시지 처리자
메시지 처리자(Message handler)는 메시지 루프에게 메시지를 어디로 보내야하는지 유도 및 처리하는 역할을 맡는다. 메시지 처리자는 메시지를 수신받을 시작점(entry)와 실질적으로 코드를 수행하는 함수(function)이 한 쌍을 이룬다.

일반 윈도우 메시지와 `WM_COMMAND` 메시지는 유사하지만 서로 다른 형태의 메시지 처리자를 가진다. 전자는 `WM_SYSCOMMAND` 메시지, 후자는 `ID_HELP`에서 발생된 `WM_COMMAND` 메시지를 위한 메시지 처리자이다.

```cpp
// 일반 윈도우 메시지 처리자 시작점
ON_WM_SYSCOMMAND()

void CMFCApplicationDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
    ...
}
```

```cpp
// ID_HELP에서 발송된 WM_COMMAND 메시지 처리자 시작점
ON_COMMAND(ID_HELP, &CMFCApplicationDlg::OnHelp)

void CMFCApplicationDlg::OnHelp()
{
    ...
}
```

## 메시지 맵
메시지 루프는 발송된 메시지를 체크하여 올바른 메시지 처리자로 보내는 작업을 처리하지만, MFC 라이브러리에는 수많은 종류의 메시지가 있으며 이를 모두 확인하는 것은 매우 비효율적이다. 그렇기 때문에 메시지 루프는 오로지 메시지 맵(Message map)에 입력된 메시지 처리자만 확인한다.

먼저 아래의 `.h` 헤더 파일은 `DELCARE_MESSAGE_MAP()` 매크로로 메시지 맵을 선언하는 코드이다.

```cpp
protected:
    // 메시지 처리자 프로토타입
    afx_msg OnSysCommand(UINT nID, LPARAM lParam);
    afx_msg OnHelp();
    DECLARE_MESSAGE_MAP()
```

그 다음 `.cpp` 소스 파일에서는 `BEGIN_MESSAGE_MAP()`과 `END_MESSAGE_MAP()` 매크로로 메시지 맵의 시작과 끝을 지정하는 매크로이다.

```cpp
BEGIN_MESSAGE_MAP(CMFCApplicationDlg, CDialogEx)
    
    // 메시지 처리자 시작점
    ON_WM_SYSCOMMAND()
    ON_COMMAND(ID_HELP, &CMFCApplicationDlg::OnHelp)
    
END_MESSAGE_MAP()
```

여기서 `afx_msg` 매크로는 사실상 무의미하며, 없어도 컴파일하거나 동작하는데 전혀 문제가 발생하지 않는다. 그렇지만 비주얼 스튜디오의 MFC 클래스 마법사가 메시지 처리자를 인식할 수 있도록 넣어주는 것을 권장한다. 또한 함수를 정의하였다 하더라도 해당 메시지 처리자의 시작점이 메시지 맵에 없으면 절대로 동작하지 않는다.

# **MFC: 실행**
> *참조: [Microsoft Docs - CWinApp: 어플리케이션 클래스](https://docs.microsoft.com/ko-kr/cpp/mfc/cwinapp-the-application-class)*

전통적인 `main()` 함수를 사용하는 C++ 콘솔 어플리케이션과 달리, 프레임워크 어플리케이션은 `WinMain()` 함수를 중점으로 코드가 수행된다. MFC 라이브러리 또한 프레임워크 어플리케이션을 생성하므로써 `WinMain()` 시작점을 사용하나 표면적으로 드러나지 않는다. 그 대신 MFC 어플리케이션은 `CWinApp` 클래스로 네 단계의 실행 절차로 나뉘어져 진행된다.

## 초기화
> *참조: [Microsoft Docs - InitInstance 맴버 함수](https://docs.microsoft.com/en-us/cpp/mfc/initinstance-member-function)*

초기화(initialization) 단계는 `CWinApp::InitInstance()` 메소드에서 프레임워크 어플리케이션 시작점인 `WinMain()` 함수가 실행되기 전에 프로세스 초기화 작업을 담당한다. 하지만 해당 메소드의 핵심 기능은 하나의 이상의 객체(즉, 어플리케이션)가 동시에 실행될 수 있도록 한다.

```cpp
BOOL CApplication::InitInstance() {
    CWinApp::InitInstance();
    
    // 부가적 어플리케이션 초기화 코드
    
    return TRUE;
}
```

본 메소드는 어플리케이션 실행에 있어 가장 중요하며, 어플리케이션의 메인 윈도우를 가리키는 `m_pMainWnd` 맴버에 프레임 창이나 다이얼로그 창 등을 할당할 수 있는 유일한 메소드이다. 그러므로 `CWinApp::InitInstance()` 함수는 GUI를 가진 어플리케이션 개발을 할 경우 `m_pMainWnd` 맴버 때문이라도 반드시 오버라이드를 거쳐야 한다.

## 실행
> *참조: [Microsoft Docs - Run 맴버 함수](https://docs.microsoft.com/ko-kr/cpp/mfc/run-member-function)*

초기화 단계를 마친 MFC 어플리케이션은 `WinMain()` 시작점에 진입하는데, 이때 실행(run) 단계에서의 메시지 루프 역할을 `CWinApp::Run()` 메소드가 담당한다. 해당 메소드는 처리되어야 할 새로운 메시지를 확인하기 위해 지속적으로 메시지 루프를 구동한다. 더이상 처리할 메시지가 없을 시, `CWinApp::Run()` 메소드는 `CWinApp::OnIdle()` 메소드를 호출해 어플리케이션은 아무런 작업을 하지 않는 유휴 상태에 진입한다. 만일 어플리케이션이 종료되면 `CWinApp::Run()` 메소드는 `CWinApp::ExitInstance()` 메소드를 호출해 소멸 단계에 들어간다.

일반적으로 `CWinApp::Run()` 메소드는 메시지 루프에 특수한 기능을 추가하지 않는 이상 오버라이딩을 하지 않는다.

## 유휴
> *참조: [Microsoft Docs - OnIdle 맴버 함수](https://docs.microsoft.com/ko-kr/cpp/mfc/onidle-member-function)*


메시지 루프에서 더이상 처리할 메시지가 없을 시, 어플리케이션은 `CWinApp::OnIdle()` 메소드를 통해 유휴(idle) 단계에 진입한다. 하지만 해당 단계에서 어플리케이션은 어떠한 작업도 하지 않는다는 것이 아니다. 기본적으로 유휴 단계에서 어플리케이션은 GUI 요소 업데이트 및 데이터 구조 정리(일명, 코드 리팩터링; code refactoring)를 진행한다. 여기서 데이터 구조 정리란, 내부적으로 메모리 및 파일시스템에 남아있는 잉여 데이터 구조나 불필요한 자료를 정리하는 작업을 의미한다.

```cpp
BOOL CApplication::OnIdle(LONG lCount) {
    BOOL bMore = CWinApp::OnIdle(lCount);
    
    // 부가적 어플리케이션 유휴 작업 코드
    
    return bMore;
}
```

유휴 작업을 마무리 하였으면 MFC 어플리케이션은 다시 한 번 메시지 여부를 확인한다. 새로운 메시지를 발견하면 `CWinApp::Run()` 메소드를 통해 메시지 루프가 재가동되지만, 여전히 아무런 메시지를 발견하지 못하면 어떠한 작업도 할 것이 없는 어플리케이션은 대기 상태에 들어간다.

## 소멸
> *참조: [Microsoft Docs - ExitInstance 맴버 함수](https://docs.microsoft.com/ko-kr/cpp/mfc/exitinstance-member-function)*

소멸(terminate) 단계는 `CWinApp::ExitInstance()` 메소드에서 MFC 어플리케이션을 종료할 때 수행되는 단계로 MFC 라이브러리 데이터나 리소스를 정리하는 작업을 담당한다. MFC 관련 데이터 외의 동적 할당 메모리를 해제하는 등의 부가적인 정리가 필요하면 아래와 같이 메소드 오버라이딩을 한다.

```cpp
int CApplication::ExitInstance() {

    // 부가적 어플리케이션 정리 코드
    
    return CWinApp::ExitInstance();
}
```
