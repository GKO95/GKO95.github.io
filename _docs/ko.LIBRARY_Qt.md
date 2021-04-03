---
layout: docs
language: ko
category: 라이브러리
title: Qt
icon: icon-qt.png
meta: Qt
order: 0x11
---
# QT: 소개
[Qt](https://www.qt.io/) (한국어: 큐트)는 The Qt Company에서 개발한 대표적인 어플리케이션 프레임워크 중 하나이며 크로스 플랫폼(cross platform)을 통해 윈도우 OS, macOS, 리눅스 이외에도 안드로이드 및 iOS에서도 안정적인 어플리케이션 동작을 보장한다. 이러한 이유로 프로그램 개발 부문에서는 Qt 개발자의 수요가 상당히 있다. 또한 폭넓은 커뮤니티와 잘 정리된 API 문서는 GUI 입문자들에게도 쉽게 접근할 수 있다.

그러나 Qt가 가지는 두 가지의 치명적인 단점을 가진다.

1. *프로그래밍 언어*
    : 수많은 프로그래밍 언어 중에서도 Qt는 [C++](../ko.PRGMING_Cpp/)을 사용한다. 컴파일 언어이기 때문에 빠른 실행 및 처리 속도를 자랑하지만, 프로그래밍 언어 자체가 간단하지가 않아 GUI 어플리케이션 개발에는 친숙하지 않다. 물론 파이썬 버전의 Qt인 PyQt가 존재하나, 이는 복잡한 이야기가 얽혀있어 차후에 설명한다.

2. *라이선스*
    : Qt 프레임워크는 기본적으로 [LGPLv3](https://ko.wikipedia.org/wiki/GNU_약소_일반_공중_사용_허가서) (그리고 일부 [GPLv3](https://ko.wikipedia.org/wiki/GNU_일반_공중_사용_허가서)) 라이선스를 지닌다. 이는 프로그램 소스 코드를 공개하도록 하는 오픈소스(open source) 정책의 일환으로 개발자 커뮤니티에게는 반가울 수 있다. 하지만 해당 라이선스를 지닌 소프트웨어로 개발을 하면 강제적으로 GNU 라이선스가 할당되어 소스 코드를 공개할 의무가 생긴다. 사업용 Qt가 별도로 존재하는 이유는 바로 라이선스 차이에 있다.

## PySide
PySide는 파이썬 버전의 Qt이다.

그렇다, 파이썬 버전의 Qt는 두 개가 있다:

* *[PyQt](https://riverbankcomputing.com/software/pyqt/) (GPLv3 라이선스)*
    : 영국의 Riverbank Computing에서 개발
* *[PySide](https://www.qt.io/qt-for-python) (LPGLv3 라이선스)*
    : 핀란드의 The Qt Company에서 개발

이 두 제품은 거의 동일한 API를 가지고 있으나 라이선스에 큰 차이점이 있다. PyQt는 모든 소프트웨어가 자동으로 GPLv3 라이선스가 할당되어 소스 코드 공개 의무가 발생하지만, PySide는 라이브러리에만 적용되므로 정적으로 링크되지 않는 한 소스 코드 공개 의무를 지니지 않는다. 그리고 이는 Qt를 개발한 The Qt Company와 파이썬 바이딩을 최초로 제공한 Riverbank Computing 회사 간의 입장 차이로 생긴 결과이다.

비록 본 문서는 Qt라는 제목을 가졌으나, 이미 C++ 어플리케이션 프레임워크인 [MFC](../ko.LIBRARY_MFC/)를 다룬 적이 있다. 그러므로 이번에는 어플리케이션 프레임워크를 파이썬으로 다루는 PySide를 중점으로 소개한다.

# QT: 설치
2020년 3월 31일 기준, 가장 최신 버전의 Qt 6.0을 기반으로 설명한다. 위에서도 설명하였듯이, Qt 프레임워크는 C++과 파이썬 버전으로 나뉘어져 있다. 이들을 설치하는 방법은 각자 다르며, PySide를 중점으로 설명한다 하여도 C++를 선호하는 사용자를 위하여 함께 설명한다.

## C++
Qt 오픈소스 라이선스는 설치 파일은 여기에서 [다운로드](https://www.qt.io/download-qt-installer) 할 수 있다. 설치 파일에는 C++ 전용 Qt 라이브러리 외에도 파이썬 버전의 PySide 및 Qt 플랫폼에 최적화된 Qt Creator IDE도 함께 포함된다. 그러나 방대한 양의 파일들이 설치되므로 용량을 충분히 확보할 필요가 있다.

## 파이썬 3
파이썬 버전의 Qt 6.0인 PySide6는 [pip](https://pypi.org/project/PySide6/)를 통해 간단히 설치할 수 있다.

```
py -m pip install pyside6
```

여기서 뒤에 있는 버전 숫자는 반드시 넣어야 하며, 그렇지 않으면 2015년을 마지막으로 업데이트 된 PySide 1.2.4 버전을 설치하게 된다.

# QT: 기초
Qt는 마이크로소프트의 [MFC](../ko.LIBRARY_MFC/) 라이브러리와 동일하게 OOP, 즉 객체지향 프로그래밍을 사용한다. 각 클래스는 어플리케이션을 구성하는 요소를 나타내며, 이들을 주어진 레이아웃에 삽입하므로써 GUI를 나타내는 방식을 채택한다. 본 장에서는 Qt 프레임워크에서 어플리케이션을 디자인하는 방법을 소개한다.

![Qt 어플리케이션의 기반 구조](/images/docs/qt/qt_mainwindowlayout.png)
