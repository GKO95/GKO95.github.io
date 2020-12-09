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

## 구조
MFC의 구조를 

## 리소스
MFC에서 리소스는 사용자에게 정보를 제공하는 상호작용 요소이다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_menu.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 #. 비주얼 스튜디오 메뉴.</center>

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_toolbar.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 #. 비주얼 스튜디오 툴바.</center>

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; margin-left:auto; margin-right: auto; width: fit-content"><img class="-tv-ignore-access" src="./../../../assets/images/docs/library/MFC/mfc_resource_dialog.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 #. 비주얼 스튜디오 다이얼로그.</center>

| 리소스    | 설명                                                 |
|:------------:| ------------------------------------------------------------ |
| Accelerator  | Application-exclusive hotkey for faster action using keyboard only. |
| Bitmap       | 비트맵 이미지 |
| Cursor       | 마우스 포인터 |
| Dialog  | 다이얼로그 (일명 팝업창)  |
| HTML         |                                                              |
| Icon         | 프로그램 아이콘 |
| Menu         | 문자Control bar containing text-only; mainly for options.        |
| Ribbon       | *Menu* 그리고 *Toolbar* 리소스가 병합된 컨트롤바 |
| String Table | 미리 등록된 문자열 목록; 각 문자열마다 할당된 ID로 호출 |
| Toolbar      | Control bar containing bitmaps and icons; mainly for tools.  |
| Version      | 프로그램 버전 정보 |

# **MFC: 프로젝트 생성**
> 본 내용부터 실질적인 MFC 프로그래밍을 소개하므로, 반드시 C++ 내용을 숙지하도록 한다.