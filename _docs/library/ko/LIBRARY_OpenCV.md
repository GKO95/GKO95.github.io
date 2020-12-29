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

## Git 리포지터리
> 아래 절차를 진행하기 전에 우선 [Git](/docs/software/ko/SFTWARE_Git) 소프트웨어 설치 및 이해도가 필요하다. 본 장에서는 최대한 간단히 이해할 수 있도록 내용을 작성하였다.

아래는 OpenCV의 핵심 소스 코드를 담고 있는 `opencv` 리포지터리(repository; 저장소) 및 추가 기능 모듈이 있는 `opencv_contrib` 리포지터리를 GitHub에서 컴퓨터로 불러오는 방법이다. 각 리포지터리를 불러오고자 하는 폴더 위치로 이동하여 아래의 명령어를 입력한다.

```bash
git clone https://github.com/opencv/opencv
```

```bash
git clone https://github.com/opencv/opencv_contrib
```

![그림 1. <code>opencv</code> 및 <code>opencv_contrib</code> 리포지터리 클론](/assets/img/docs/library/opencv/opencv_git_clone.png)

클론(clone)이란 명령을 통해 GitHub 서버측(일명 리모트; remote)에 있는 리포지터리 전체를 사용자 로컬(local) 컴퓨터로 불러왔다. 그러나 이전 버전의 OpenCV 라이브러리를 사용하고 싶어도 Git은 항상 가장 최신 상태의 리포지터리를 클론시키며, 이는 현재(2020년 12월) 기준으로 가장 최신 버전 4.5.1에서 조금 더 코드 수정이 커밋(commit; 기여)된 정식 출시 버전이 아닐 가능성이 매우 높다. 다행이 Git이 소스 코드 제어 소프트웨어이기 때문에 로컬에서 원하는 버전을 선택할 수 있다.

OpenCV와 같은 대부분의 오픈소스 라이브러리는 정식 출시 버전의 리포지터리 커밋에 태그(tag)를 붙인다. OpenCV의 주요 리포지터리 `opencv`로 이동하여 아래의 Git 명령어를 입력하면 다음과 같이 태그 목록을 확인할 수 있다.

```bash
git tag
```

![그림 2. OpenCV 리포지터리 태그 목록](/assets/img/docs/library/opencv/opencv_git_tag.png)

OpenCV 4.5.1 버전의 경우에는 `4.5.1`이란 태그를 가진다. 찾고자 하는 태그를 확인하였으면 키보드에 `q` 버튼을 눌러 태그 목록에서 나간다. 참고로 파란색의 `(master)`는 현재 사용자가 기본 master 브랜치에 있음을 뜻하며, Git에서 브랜치(branch; 가지)란 분리된 코딩 작업환경을 제공하여 효율적인 소스 코드 관리를 가능케 한다.

원하는 버전의 태그를 확인하였으면 Git의 체크아웃(checkout; 둘러보기) 명령어로 해당 커밋 당시의 리포지터리로 되돌아간다.

```bash
git checkout tags/4.5.1
```
    
![그림 3. OpenCV 리포지터리 커밋 체크아웃](/assets/img/docs/library/opencv/opencv_git_checkout.png)

> Git에서 `HEAD`란, 현재 사용자가 작업하고 있는 브랜치의 가장 최신 커밋을 가리키며, master 브랜치에서 작업하고 있으면 `HEAD`는 master가 된다. 브랜치를 변경하면 `HEAD`는 변경된 브랜치를 가리킨다.
>
> 하지만 커밋을 체크아웃 하였다면 `HEAD`는 브랜치가 아닌 커밋의 SHA-1 값을 가리키게 된다. 이때 `HEAD`는 가장 최신 커밋을 가리키지 않아 새로운 커밋이 기여되도 `HEAD`에 반영되지 않는, 다시 말해 브랜치에 반영되지 않는다. 이러한 이유로 브랜치로부터 분리된 `detached HEAD` 상태에 있다고 Git Bash에서 설명한 것이다.

원하는 출시 버전으로 체크아웃을 하였으면 본격적으로 OpenCV 라이브러리 컴파일 단계로 진입한다.

### Git GUI
위의 방법은 Bash라는 UNIX 셸을 사용하여 Git을 사용하는 방법을 설명하였다. 그러나 현재는 Git GUI라는 프로그램을 함께 제공하여 시각적으로 확인하므로써 더 편리하게 관리할 수 있다. Git GUI를 사용할 시 프로그램 툴바에서 `Branch > Checkout...`를 클릭하면 아래의 화면을 볼 수 있다.

![그림 4. OpenCV 리포지터리를 Git GUI로 제어](/assets/img/docs/library/opencv/opencv_git_gui.png)

그리고 확인하고자 하는 태그를 선택해 체크아웃 버튼을 클릭하면 리포지터리가 해당 커밋 당시로 되돌아간다.

## CMake 컴파일
> 아래 절차를 진행하기 전에 [CMake](https://cmake.org/) 소프트웨어 설치가 필요하며, 또한 파이썬 3 인터프리터 및 [디버깅 라이브러리](/docs/programming/ko/PRGMING_PYTHON/#사용자-지정-설치)가 미리 준비되어 있어야 한다.

OpenCV가 크로스 플랫폼을 지원할 수 있는 이유는 바로 완성된 라이브러리를 제공하는 게 아니라 소스 코드로부터 직접 라이브러리를 컴파일하기 때문이다. 이렇게 해서 생성된 라이브러리는 이미 해당 시스템에 최적화된 상태이다. CMake를 Bash를 사용하여 라이브러리를 생성할 빌드할 수 있지만, 본 문서에서는 CMake GUI를 사용하여 C++ 및 파이썬 3을 위한 OpenCV 4.5.1 라이브러리 생성을 목표로 한다.

먼저 CMake 상단의 두 입력란에 경로를 입력해야 한다. 

* `Where is the source code`: OpenCV의 CMake 프로젝트 소스 코드 경로 (대체로 `CMakeLists.txt`가 위치한 곳)
* `Where to build the binary`: OpenCV의 CMake 프로젝트 빌드 저장 경로 (혼잡을 방지하기 위해 새 폴더 생성 추천)

![그림 5. OpenCV의 CMake 프로젝트 소스 및 빌드 경로 지정](/assets/img/docs/library/opencv/opencv_cmake_path.png)

각 입력란에 대한 설명에 보면 추론할 수 있듯이, CMake는 라이브러리를 생성하지 않는다; 해당 플랫폼에 가장 적합한 라이브러리 생성 프로젝트를 만드는 게 바로 CMake의 역할이다. 경로를 지정한 이후 `Configure` 버튼을 누르면 CMake 프로젝트에서 어떠한 플랫폼 및 컴파일러를 대상으로 한 OpenCV 라이브러리 프로젝트를 생성할 것인지 선택한다.

![그림 6-1. OpenCV 빌드 플랫폼 및 컴파일러 지정 (윈도우 화면)](/assets/img/docs/library/opencv/opencv_cmake_msvc.png)

만일 64비트 윈도우 OS의 경우, 기본 플랫폼이 `x64`로 설정되어 있다. 이는 32비트 어플리케이션에 사용할 수 없어, 32비트 라이브러리를 생성하기 위해서는 `Win32`로 플랫폼을 변경해야 한다.

플랫폼과 컴파일러를 선택하였으면 CMake에서 자동적으로 시스템 요소들을 탐색하여 OpenCV의 어떤 기능이 빌드가 가능한지 판별하여 일부 옵션들은 자동적으로 활성/비활성화 된다. 아래에 붉은색 옵션들은 오류나 경고를 뜻하는 게 아니라 `Configure` 버튼을 눌러 새로 업데이트 된 옵션들을 의미한다.

![그림 7. OpenCV 빌드 옵션 목록](/assets/img/docs/library/opencv/opencv_cmake_configure.png)

CMake의 OpenCV 빌드 옵션 중에서 `OPENCV_EXTRA_MODULES_PATH`가 있는데, 바로 여기가 OpenCV의 추가 모듈이 담겨있는 `opencv_contrib`의 모듈 폴더 경로를 입력하는 곳이다.

![그림 8. OpenCV 빌드 <code>opencv_contrib</code> 추가](/assets/img/docs/library/opencv/opencv_cmake_extra.png)

옵션의 내용은 실시간으로 바뀌지 않는다. CMake 옵션에 변경사항이 발생하면 반드시 `Configure` 버튼을 다시 클릭해 내역을 업데이트해야 한다. 그러면 CMake는 `opencv_contrib`의 모듈에 필요한 요소들을 포함하여 시스템을 재탐색하여 새로운 빌드 옵션을 활성화시키기도 한다.

![그림 9. OpenCV의 CMake 옵션 업데이트](/assets/img/docs/library/opencv/opencv_cmake_update.png)

하지만 `opencv_contrib`를 추가할 시, 윈도우 OS를 사용하는 경우 십중팔구 CMake 터미널에서 다음과 같은 붉은 색 문장을 확인할 수 있다:

```
CMake Warning at cmake/OpenCVGenSetupVars.cmake:54 (message):
  CONFIGURATION IS NOT SUPPORTED: validate setupvars script in install
  directory
Call Stack (most recent call first):
  CMakeLists.txt:985 (include)
```

이는 오류가 아닌 경고문이지만, 발생 원인은 바로 파이썬 경로가 절대경로로 설정되어서 나타나는 문구이다. 그러나 필자의 경험을 공유하자면 해당 경고문은 최대한 무시하기를 권장하며, 아예 `OPENCV_GENERATE_SETUPVARS` 체크를 해제하였다. 상대경로로 바꾸면 오히려 라이브러리 컴파일 작업에서 파이썬 모듈 헤더 파일을 찾지 못하는 오류가 발생한다.

참고로 CMake 옵션에서 `BUILD_PERF_TESTS`와 `BUILD_TESTS` 두 개를 해제하기를 권장한다. CMake 테스트 용도이기 때문에 활용도가 거의 없어 필요하지 않다. 필자는 추가적으로 자바 언어를 사용하지 않기에 `BUILD_JAVA`를 추가로 해제하였으며, 파이썬 2를 사용하지 않으므로 `OPENCV_PYTHON3_VERSION`를 체크하였다.

CMake 옵션 선택이 완료되었으면 `Generate` 버튼을 눌러 OpenCV 라이브러리 프로젝트를 생성한다.

![그림 10. OpenCV 라이브러리 프로젝트 생성](/assets/img/docs/library/opencv/opencv_cmake_generate.png)

### 윈도우 OS
윈도우 OS의 경우, `Open Project` 버튼을 누르면 `OpenCV.sln` 솔루션이 열린다 (Visual Studio 컴파일러 선택하였을 경우). 본 솔루션은 `./opencv/build/OpenCV.sln`에서 찾을 수 있다. 그리고 아래의 화면과 같이 솔루션 전체 빌드를 진행한다.

![그림 11. OpenCV 라이브러리 프로젝트 빌드](/assets/img/docs/library/opencv/opencv_vs_build.png)

본 과정은 상당한 시간이 소요가 되는 동시에 CPU 내에서도 많은 양의 자료를 처리해야 하기 때문에 기다림이 필요하다. 특히 CUDA가 활성화된 OpenCV 라이브러리의 경우에는 훨씬 1시간 이상을 기다릴 준비를 해야 한다. 그러나 일반적으로는 10~15분 이내에 마무리되며, 반드시 빌드 결과를 확인하기를 권장한다.

![그림 11. OpenCV 라이브러리 프로젝트 빌드 결과](/assets/img/docs/library/opencv/opencv_vs_output.png)

특히 컴파일을 실패한 프로젝트가 없는지 확인해 주는게 중요하다. 빌드 오류가 발생하였으면 다시 한 번 빌드를 해 본다.

빌드가 완료되면 `./opencv/build/bin`와 `./opencv/biuld/lib` 경로에 DLL 동적 라이브러리 및 LIB 정적 라이브러리가 생성된 걸 확인할 수 있다. 그러나 라이브러리를 사용하기 위해 필요한 헤더 파일은 찾아볼 수가 없다. OpenCV 라이브러리 생성의 마지막 단계로 라이브러리 파일과 헤더 파일을 한 군데에 취합하기 위해 `INSTALL.vcxproj` 프로젝트를 빌드해야 한다.

![그림 11. OpenCV 라이브러리 프로젝트 빌드 결과](/assets/img/docs/library/opencv/opencv_vs_install.png)

최종적으로 `./opencv/build/install` 경로가 생성되며, 안에는 다음 폴더들이 들어있다.

* `./install/include`: 헤더 파일 (.hpp)
* `./install/x64/vc16/lib`: 정적 라이브러리 (.lib)
* `./install/x64/vc16/bin`: 동적 라이브러리 (.dll)

프로젝트에 OpenCV 라이브러리를 불러올 때에는 오로지 `./opencv/build/install` 경로 안에 있는 파일들만 사용하도록 한다. 라이브러리는 동일한 이름을 가진게 두 개가 있을 것이다; 그 중에서 뒤에 알파벳 `d`가 있는 파일은 디버깅 라이브러리를 의미한다. 

> 본 과정은 `Debug`에서만 빌드하였으나 반드시 `Release`에서도 위의 모든 빌드 과정을 진행해야 한다. 라이브러리 폴더에 동일한 이름의 라이브러리가 보이지 않으면 `Debug` 혹은 `Release` 중 하나를 빌드하지 않았다는 의미로 나머지도 반드시 빌드하도록 한다.

### 리눅스 OS
Debian 10 "Buster"를 기준으로 설명한다. 

# **OpenCV: 프로젝트**

## C++

## 파이썬 3

Recursion 오류 발생 시...
경로: `./opencv/build/python_loader/`

```powershell
python -m setup.py build
python -m setup.py install
```

```powershell
python -m setup.py develop
```
