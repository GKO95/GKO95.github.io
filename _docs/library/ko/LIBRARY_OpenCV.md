---
name: OpenCV
lang: ko
layout: docs
author: GKO95
category: Library
title: "라이브러리 | OpenCV"
logo: "/assets/img/res/logo-opencv.png"
order: 0x11
---
# **OpenCV: 소개**
> *홈페이지: [https://opencv.org/](https://opencv.org/)*

OpenCV는 실시간 컴퓨터 비전을 위한 C/C++로 작성된 이미지 처리 라이브러리이다. 1999년에 인텔 연구소에서 프로젝트를 시작하여 첫 알파 버전이 2000년 6월에 출시되으며, 현재 프로젝트는 OpenCV.org 비영리 조직을 지원을 받고 있다. 이전부터 영상 처리 분야에서 압도적인 위치에 있던 OpenCV 라이브러리는 인공지능 개발 유행을 시작으로 더 폭넓은 관심을 받기 시작하였다. OpenCV에는 여러 버전이 존재하는데, 본 문서는 2020년 후반기 중 가장 최신의 4.5.1 버전을 기반으로 설명한다.

## OpenCV 버전
OpenCV 공식 홈페이지에는 크게 세 가지의 라이브러리 버전이 있는 것을 확인할 수 있다. 

* **OpenCV 2.x**
    : 현재 OpenCV 공식 홈페이지에서 찾을 수 있는 가장 오래된 버전이다. 공식 홈페이지에 따르면 OpenCV 1.x 버전은 처음에는 C 언어로 제작된 라이브러리이지만, OpenCV 2.x API로 바뀌면서 C++ 기반의 API로 바뀌었다고 설명한다. 특히 C 언어에는 존재하지 않는 네임스페이스를 사용한다는 점은 라이브러리가 공식적으로 C++에 집중되었다고 판단할 수 있다.

* **OpenCV 3.x**
    : OpenCV의 수행 및 처리 속도가 이전 버전보다 훨씬 더 빨라졌다. 파이썬 및 자바 언어 바인딩이 크게 개선되어 C++ 이외의 언어와 안드로이드 지원이 향상되었다. 네임스페이스를 활용한 내부 구조가 재구축되어 일부 기능은 이전 2.x API에서 호출한 방식을 그대로 사용하지 못한다. 또한 OpenCV의 추가 기능을 제공하는 `opencv_contrib` 리포지터리가 새로 추가되었다. 

* **OpenCV 4.x**
    : OpenCV가 순수 C 라이브러리에서 벗어나 완전한 C++11 라이브러리로 전환되었다. 일부 잔류해 있던 상당한 C 언어 API가 사라졌으며 머신러닝 관련 API가 향상되었다. 또한 마이크로소프트 Kinect 카메라를 활용한 Kinect Fusion 알고리즘이 적용되었다.

위의 각 버전에 대한 설명을 확인하면 알 수 있듯이, OpenCV 1.x 버전이 소개되지 않은 이유는 C 언어 API이기 때문이다. 비록 라이브러리의 일부 기능은 C 언어로 작성되어 있을지라도 C 안어 프로그램에서 사용하기에는 부적합하다.

# **OpenCV: 설치**
OpenCV는 크로스 플랫폼, 즉 하나의 플랫폼에 국한되지 않고 여러 종류의 운영체제 및 아키텍처에서도 동작할 수 있는 라이브러리이다. 그리고 OpenCV는 이를 하나의 소스 코드에서 해결한다. 해당 소스 코드는 [GitHub](https://github.com/opencv/opencv)에서 확인할 수 있으며, 본 장에서는 Git을 통해 불러온 소스 코드를 원하는 버전으로 선택하여 윈도우 및 리눅스 운영체제에 적합한 라이브러리로 컴파일하는 방법을 설명한다.

> 아래 절차를 진행하기 전에 우선 [Git](https://git-scm.com/) 프로그램을 설치하도록 한다. 해당 작업은 Git에 대한 지식이 요구되나, 본 장에서는 최대한 간단히 이해할 수 있도록 내용을 작성하였다.

아래는 OpenCV의 핵심 소스 코드를 담고 있는 `opencv` 리포지터리 및 추가 기능을 담는 `opencv_contrib` 리포지터리를 컴퓨터로 불러오는 방법이다. 각 리포지터리를 불러오고자 하는 폴더 위치로 이동하여 아래의 명령어를 입력한다.

```bash
git clone https://github.com/opencv/opencv
```

```bash
git clone https://github.com/opencv/opencv_contrib
```

![그림 1. OpenCV 및 <code>opencv_contrib</code> 리포지터리 클론](/assets/img/docs/library/opencv/opencv_git_clone.png)

클론(clone)이란 명령을 통해 GitHub 서버측(일명 리모트; remote)에 있는 리포지터리 전체를 사용자 로컬(local) 컴퓨터로 불러왔다. 그러나 이전 버전의 OpenCV 라이브러리를 사용하고 싶어도 Git은 항상 가장 최신 상태의 리포지터리를 클론시키며, 이는 현재(2020년 12월) 기준으로 가장 최근에 출시 버전이 4.5.1에서 조금 더 코드 수정이 커밋(commit; 기여)된 정식 출시 버전이 아닐 가능성이 매우 높다. 다행이 Git이 소스 코드 제어 소프트웨어이기 때문에 로컬에서 원하는 버전을 선택할 수 있다.

OpenCV와 같은 대부분의 오픈소스 라이브러리는 정식 출시 버전의 리포지터리 커밋에 태그(tag)를 붙인다. OpenCV의 주요 리포지터리 `opencv`로 이동하여 아래의 Git 명령어를 입력하면 다음과 같이 태그 목록을 확인할 수 있다.

```bash
git tag
```

![그림 2. OpenCV 소스 코드 태그 목록](/assets/img/docs/library/opencv/opencv_git_tag.png)

OpenCV 4.5.1 버전의 경우에는 `4.5.1`이란 태그를 가진다. 찾고자 하는 태그를 확인하였으면 키보드에 `q` 버튼을 눌러 태그 목록에서 나간다. 참고로 파란색의 `(master)`는 현재 사용자가 기본 master 브랜치에 있음을 뜻하며, Git에서 브랜치(branch; 가지)란 분리된 코딩 작업환경을 제공하여 효율적인 소스 코드 관리를 가능케 한다.

원하는 버전의 태그를 확인하였으면 Git의 체크아웃 명령어를 사용하여 리포지터리의 해당 커밋 당시의 리포지터리로 되돌아간다.

```bash
git checkout tags/4.5.1
```
    
![그림 3. OpenCV 소스 코드 태그 체크아웃](/assets/img/docs/library/opencv/opencv_git_checkout.png)

> Git에서 `HEAD`란, 현재 사용자가 작업하고 있는 브랜치의 가장 최신 커밋을 가리키며, master 브랜치에서 작업하고 있으면 `HEAD`는 master가 된다. 브랜치를 변경하면 `HEAD`는 변경된 브랜치를 가리킨다.
>
> 하지만 커밋을 체크아웃 하였다면 `HEAD`는 브랜치가 아닌 커밋의 SHA-1 값을 가리키게 된다. 이때 `HEAD`는 가장 최신 커밋을 가리키지 않아 새로운 커밋이 기여되도 `HEAD`에 반영되지 않는, 다시 말해 브랜치에 반영되지 않는다. 이러한 이유로 브랜치로부터 분리된 `detached HEAD` 상태에 있다고 Git Bash에서 설명한 것이다. 

반면, 이를 Git GUI를 통해 시각적으로 더 편리하게 제어할 수 있다. 프로그램 툴바에서 `Branch > Checkout...`를 클릭하면 다음 화면을 볼 수 있다.

![그림 4. OpenCV 소스 코드 Git GUI로 제어](/assets/img/docs/library/opencv/opencv_git_gui.png)

## 윈도우
윈도우 10 기준으로 설명한다.

## 리눅스
Debian 10 "Buster"를 기준으로 설명한다. 
