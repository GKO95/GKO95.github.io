---
name: MFC
lang: ko
layout: docs
author: GKO95
category: Library
title: "라이브러리 | MFC"
logo: "/assets/images/logo/logo-mfc.png"
summary: "."
order: 0x00
---
# **MFC: 소개**
> *참조: [Microsoft Docs MFC 데스크톱 애플리케이션 (한국어)](https://docs.microsoft.com/ko-kr/cpp/mfc/)*

MFC(Microsoft Foundation Class)는 1992년에 마이크로소프트에서 소개한 윈도우 OS 데스크톱 프로그램 개발을 위한 C++ 객체지향 라이브러리이다. 이후 마이크로소프트에서는 여러 다른 종류의 어플리케이션 프레임워크를 출시하였으나, MFC는 현재까지도 개발 관련 분야에서 여전히 널리 사용되고 있다. 특히 C++ 라이브러리라는 점이 C 언어와 최적의 호환성을 보여주기 때문에 펌웨어 혹은 임베디드 분야에서는 MFC 수요가 상당한 편이다.

## MFC 구조
MFC와 같은 어플리케이션 프레임워크의 대표적인 기능 중 하나로 그래픽 사용자 인터페이스, 일명 GUI를 제공하는 것이다. 응용 프로그램에 GUI를 사용하기 위해서는 MFC 라이브러리 프레임워크가 어떻게 구성되어야 하는지 알아야 한다. 이들은 상당히 추상적인 개념인 관계로, MFC 구조의 이해를 돕기 위해 메모장 프로그램을 예시로 들어 설명한다. 

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_architecture_example.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 1. MFC 구조 설명을 위한 예시.</center>



### 문서
`CDocument` 클래스의 객체인 문서(document)는 MFC 구조 중에서 가장 작은 요소이며, 응용 프로그램이 가지는 텍스트 데이터 혹은 이미지나 오디오와 같은 미디어 자료를 가리킨다. 위의 메모장 예시에서 문서는 아래에 해당한다.

```
Hello World!
Welcome to GKO95's GitHub Pages.
```

### 뷰
`CView` 클래스의 객체인 뷰(view)는 문서를 어떻게 보여줄 것인지 혹은 처리할 것인지 등의 상호작용 방식을 결정한다. 마치 이미지 파일을 사진으로 볼 수 있는 반면, 메모장으로 열어 이미지 파일을 구성하는 자료를 텍스트로 확인할 수도 있는 이치이다. 문서를 담고있기 때문에 문서 창(document window)라고 부르기도 한다. 위의 메모장 예시에서 뷰는 아래에 해당한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; margin-left:auto; margin-right: auto; width: fit-content"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_architecture_view.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 2. 메모장의 뷰(view) 구조물.</center>

### 프레임 창
우선 윈도우 OS에서 창(window)란 무엇인지 확실히 짚고 갈 필요가 있다. 영어를 공부하면 아시다시피, window는 창문을 의미한다: 우리는 창문 너머 무언가를 바라보는데, 바로 윈도우 OS 명칭이 이런 사각형 창문에서 따온 이름이다. 그리고 동일한 이유로 직사각형 모양의 프로그램 GUI를 어플리케이션 창(application window)라고 부른다.

프레임 창(frame window)은 뷰 구조물을 담을 수 있는 테두리(frame)를 제공한다. 그러나 MFC에서는 프레임 창을 생성하는 클래스가 크게 두 가지로 나뉘어지며, 이는 각각 SDI 및 MDI로 구별된다:

* 단일 문서 인터페이스(Single Document Interface; SDI)는 하나의 문서만을 처리하도록 되어있으며, `CFrameWnd` 클래스로부터 객체화된다. 메모장 프로그램이 바로 SDI 형식에 해당한다.

* 다중 문서 인터페이스(Multiple Document Interface; MDI)는 여러 문서들을 하나의 프로그램에서 처리할 수 있도록 하며, `CMDIFrameWnd` 및 `CMDIChildWnd` 클래스로부터 객체화된다. 여기서 `CMDIFrameWnd` 클래스가 프레임 창의 본체이며, `CMDIChildWnd` 클래스를 자식으로 두어 각 문서들을 보여준다. 비주얼 스튜디오가 MDI 형식의 프로그램 중 하나이다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; margin-left:auto; margin-right: auto; width: fit-content"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_architecture_framewnd.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 3. 메모장의 프레임 창(frame window) 구조물.</center>

### 어플리케이션
`CWinApp` 클래스 객체인 어플리케이션(application)은 본격적으로 프로그램을 초기화하고 실행하는 역할을 담당한다. 그래픽 사용자 인터페이스를 마련하여도 어플리케이션이 해당 창을 호출하여 실행하지 않으면 GUI가 없는 프로그램이 되거나, 일반적으로 프로그램이 즉시 종료된다. 위의 메모장 예시에서 어플리케이션은 아래에 해당한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; margin-left:auto; margin-right: auto; width: fit-content"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_architecture_application.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 4. 메모장의 어플리케이션(frame window) 구조물.</center>

### 쓰레드
`CWinThread` 클래스 객체인 쓰레드(thread) 여러 작업을 동시에 진행할 수 있도록 한다. 비록 GUI 요소가 아니지만 어플리케이션 객체를 생성하는 `CWinApp` 클래스의 기반 클래스로 상당한 중요성을 가진다. 다시 말해, 어플리케이션은 쓰레드 중 하나이지만 가장 핵심이 되는 쓰레드이다.

## MFC 리소스
리소스(resource)는 어플리케이션을 사용하기 위해 필요한 데이터와 정보를 제공한다. 비트맵 이미지 및 아이콘, 마우스 포인터, 메뉴와 툴바, 다이얼로그 창 등이 MFC의 리소스에 해당한다.

| 리소스        | 설명                                |
|:------------:|------------------------------------|
| Accelerator  | 프로그램 전용 단축키                        |
| Bitmap       | 비트맵 이미지                            |
| Cursor       | 마우스 포인터                            |
| Dialog       | 다이얼로그 (일명 팝업창)                     |
| HTML         | HTML 파일                               |
| Icon         | 프로그램 아이콘                           |
| Menu         | 텍스트로 구성된 프로그램 기본 컨트롤바              |
| Ribbon       | *Menu* 그리고 *Toolbar* 리소스가 병합된 컨트롤바 |
| String Table | 사전등록 문자열 목록; 각 문자열마다 할당된 ID로 호출    |
| Toolbar      | 비트맵 및 아이콘으로 구성된 프로그램 보조 컨트롤바       |
| Version      | 프로그램 버전 정보                         |

여기서 메뉴와 툴바의 차이점이 명확하지 않아 잘 구분이 되지 않을 수 있다. 비주얼 스튜디오를 예를 들어보면 메뉴는 아래와 같다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_menu.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 5. 비주얼 스튜디오 메뉴 리소스.</center>

메뉴는 각 프레임 창마다 하나만 가질 수 있는 특징이 있으며, 주로 프로그램 옵션 및 설정에 자주 사용된다. 메모장 프로그램에도 메뉴 리소스가 존재하는 것을 확인할 수 있다.

한편, 비주얼 스튜디오에서 툴바는 아래와 같다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_toolbar.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 6. 비주얼 스튜디오 툴바 리소스.</center>

비트맵 이미지나 아이콘이 버튼을 구성하고 있으며, 일반적으로 도구의 접근성을 제공하기 위해 사용된다. 그러한 이유로 메뉴와 달리, 하나의 프레임 창에 여러 개의 툴바를 삽입할 수 있다. 메모장 프로그램에서는 툴바가 존재하지 않는다.

다이얼로그 창이란, 규모가 작은 프레임 창으로 대체로 어플리케이션에서 사용자에게 알림이나 메시지를 전달므로써 대화(dialog)하기 위해 사용된다. 하지만 다이얼로그 창은 소규모 프로그램을 개발하는 데에도 흔히 사용된다. 아래는 비주얼 스튜디오에서 나타나는 다이얼로그 창을 활용한 예시 중 하나이다. 

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; margin-left:auto; margin-right: auto; width: fit-content"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_dialog.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 7. 비주얼 스튜디오 다이얼로그 리소스.</center>

이처럼 MFC에는 여러 종류의 리소스가 존재하며, 이들은 `.rc` 확장자 파일에서 모두 관리된다. 리소스들을 접근하기 위해서는 각각에 부여된 ID를 호출하며 이들은 `Resource.h` 헤더 파일에 자동적으로 기입된다. 이들은 비주얼 스튜디오에서 MFC 프로젝트를 생성하면 기본적으로 생성되는 파일들이며, 아래는 리소스 파일과 해당 헤더 파일의 일부를 보여준다.

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
> 본 내용부터 실질적인 MFC 프로그래밍을 소개하므로, 반드시 C++ 내용을 숙지하도록 한다.