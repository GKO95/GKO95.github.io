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

| 플랫폼                                                   | 언어    | 개발사                 | 라이선스   |
|:-----------------------------------------------------:|:-----:|---------------------|:--------:|
| [PyQt](https://riverbankcomputing.com/software/pyqt/) | 파이썬 3 | Riverbank Computing | GPLv3  |
| [PySide](https://www.qt.io/qt-for-python)             | 파이썬 3 | The Qt Company      | LPGLv3 |

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

## 어플리케이션
어플리케이션(application)이란 프로그램 자체를 가리키는 용어이다. 그리고 Qt 기반의 프로그램을 실행시키기 위해서는 `QApplication` 클래스가 필요하다. 아래는 Qt 어플리케이션을 실행하는 간단한 PySide 코드이다.

```python
from PySide6.QtWidgets import QApplication

# QApplication 클래스로부터 Qt 어플리케이션을 나타내는 app 객체 생성
app = QApplication()

# Qt 어플리케이션 실행
app.exec_()
```

위의 Qt 코드는 GUI가 없는 상태에서 어플리케이션을 실행한다. 때문에 아무런 창이 나타나지 않더라도 Qt 프로그램이 파이썬 프로세서로 계속 실행되고 있음을 작업 관리자에서 확인할 수 있다.

## 위젯
위젯(widget)은 Qt 어플리케이션 GUI를 구성하는 가장 기본적인 상호작용 요소이다. 텍스트를 표시하는 `QLabel`, 버튼을 제공하는 `QPushButton`, 입력창을 제공하는 `QLineEdit` 클래스 등이 있다. 위젯들은 모두 `QWidget`이란 위젯 클래스로부터 파생된다.

### 윈도우
위젯 중에서 임베디드 되지 않은, 즉 부모가 없는 위젯은 윈도우(window)라 부른다. 윈도우는 말 그대로 프로그램 GUI 창을 가리킨다. 아래는 텍스트를 표시하는 `QLabel` 위젯이 윈도우 창으로 나타나는 것을 확인할 수 있는 코드이다.

![윈도우로 나타난 QLabel 위젯](/images/docs/qt/qt_widget_window.png)

```python
from PySide6.QtWidgets import QApplication. QLabel

app = QApplication()

# 어플리케이션이 실행되는 도중, QLabel의 모습을 드러내어 프로그램 GUI 역할을 한다.
widget = QLabel("Hello World!")
widget.show()

app.exec_()
```

> Qt 프레임워크 중에서 창을 나타내는 `QWindow` 윈도우 클래스가 별도로 존재하지만, 윈도우 클래스보다 `QWidget` 위젯 클래스로 GUI 창을 나타내는 게 일반적이다.

### 메인 윈도우
> *참조: [Qt for Python - QMainWindow](https://doc.qt.io/qtforpython/PySide6/QtWidgets/QMainWindow.html)*

메인 윈도우(main window)는 프로그램 창으로 최적화된 위젯으로 `QMainWindow` 클래스가 필요하다. 즉, 일반 위젯과 달리 `QMenuBar` 메뉴바, `QToolBar` 툴바, `QDockWidget` 도크, 그리고 `QStatusBar` 상태바를 지원하는 윈도우 창을 제공한다.

![Qt 어플리케이션의 기반 구조](/images/docs/qt/qt_mainwindowlayout.png)

`QMainWindow`은 아무것도 없는 텅 빈 위젯이다. 직접 사용하기보다 원하는대로 디자인할 수 있도록 서브클래스를 파생시키는데 활용된다. 아래 코드는 `MainWindow` 서브클래스를 파생하여 QLabel 텍스트 위젯을 삽입하여 Qt 프로그램 GUI 창으로 사용한다.

![QMainWindow 위젯으로 생성된 메인 윈도우](/images/docs/qt/qt_widget_mainwindow.png)

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel

""" 설명:
QMainWindow를 슈퍼클래스로 갖는 MainWindow 클래스를 정의한다.
생성자의 show() 메소드로 인해 객체화에서 자동으로 모습을 보여준다.
"""
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setCentralWidget(QLabel("Hello World!"))
        self.show()

app = QApplication()
    
# MainWindow 객체화
window = MainWindow()

app.exec_()
```

> 중앙위젯(central widget)은 메인 윈도우의 콘텐츠가 담기는 곳이다.

## 레이아웃
레이아웃(layout)은 위젯을 배치시키는데 사용되는 틀이다. 흔히 하나의 부모 위젯(parent widget) 안에 여러 자식 위젯(child widget)을 놓기 위해 활용된다. 레이아웃에는 여러 종류가 있으며, 대표적으로 수평배치 레이아웃 `QHBoxLayout`과 수직배치 레이아웃 `QVBoxLayout`이 있다.

![QVBoxLayout 수직배치 레이아웃에 삽입된 두 위젯](/images/docs/qt/qt_widget_layout.png)

```python
from PySide6.QtWidgets import *

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        # QWidget으로 빈 위젯을 만들어 수직배치 QVBoxLayout 레이아웃을 입힌다.
        widget = QWidget(self)
        layout = QVBoxLayout(widget)

        # 레이아웃에 QLabel 위젯을 차례대로 삽입한다.
        layout.addWidget(QLabel("Hello World!"))
        layout.addWidget(QPushButton("PySide6"))

        self.setCentralWidget(widget)
        self.show()

app = QApplication()
window = MainWindow()
app.exec_()
```

> 본 부문을 통해 알 수 있듯이, Qt 플랫폼은 MFC와 달리 각 위젯에 좌표를 설정하여 위치시키지 않는다.
