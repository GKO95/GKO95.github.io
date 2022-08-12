---
layout: docs
category: 라이브러리
title: OpenCV
slug: ko.OpenCV
icon: icon-opencv.svg
order: 0x12
---
#  소개
> *홈페이지: [https://opencv.org/](https://opencv.org/)*

OpenCV는 실시간 컴퓨터 비전을 위한 C/C++로 작성된 이미지 처리 라이브러리이다. 1999년에 인텔 연구소에서 프로젝트를 시작하여 첫 알파 버전이 2000년 6월에 출시되으며, 현재 프로젝트는 OpenCV.org 비영리 조직을 지원을 받고 있다. 이전부터 영상 처리 분야에서 압도적인 위치에 있던 OpenCV 라이브러리는 인공지능 개발 유행을 시작으로 더 폭넓은 관심을 받기 시작하였다. OpenCV에는 여러 버전이 존재하는데, 본 문서는 2020년 후반기 중 가장 최신의 4.5.1 버전을 기반으로 설명한다.

## OpenCV 버전
OpenCV 공식 홈페이지에는 크게 세 가지의 라이브러리 버전이 있는 것을 확인할 수 있다. 

* *OpenCV 2.x*
    : 현재 OpenCV 공식 홈페이지에서 찾을 수 있는 가장 오래된 버전이다. 공식 홈페이지에 따르면 OpenCV 1.x 버전은 처음에는 C 언어로 제작된 라이브러리이지만, OpenCV 2.x API로 바뀌면서 C++ 기반의 API로 바뀌었다고 설명한다. 특히 C 언어에는 존재하지 않는 네임스페이스를 사용한다는 점은 라이브러리가 공식적으로 C++에 집중되었다고 판단할 수 있다.

* *OpenCV 3.x*
    : OpenCV의 수행 및 처리 속도가 이전 버전보다 훨씬 더 빨라졌다. 파이썬 및 자바 언어 바인딩이 크게 개선되어 C++ 이외의 언어와 안드로이드 지원이 향상되었다. 네임스페이스를 활용한 내부 구조가 재구축되어 일부 기능은 이전 2.x API에서 호출한 방식을 그대로 사용하지 못한다. 또한 OpenCV의 추가 기능을 제공하는 `opencv_contrib` 리포지터리가 새로 추가되었다. 

* *OpenCV 4.x*
    : OpenCV가 순수 C 라이브러리에서 벗어나 완전한 C++11 라이브러리로 전환되었다. 일부 잔류해 있던 상당한 C 언어 API가 사라졌으며 머신러닝 관련 API가 향상되었다. 또한 마이크로소프트 Kinect 카메라를 활용한 Kinect Fusion 알고리즘이 적용되었다.

위의 각 버전에 대한 설명을 확인하면 알 수 있듯이, OpenCV 1.x 버전이 소개되지 않은 이유는 C 언어 API이기 때문이다. 비록 라이브러리의 일부 기능은 C 언어로 작성되어 있을지라도 C 안어 프로그램에서 사용하기에는 부적합하다.

#  설치
OpenCV는 크로스 플랫폼, 즉 하나의 플랫폼에 국한되지 않고 여러 종류의 운영체제 및 아키텍처에서도 동작할 수 있는 라이브러리이다. 그리고 OpenCV는 이를 하나의 소스 코드에서 해결한다. 해당 소스 코드는 [GitHub](https://github.com/opencv/opencv)에서 확인할 수 있으며, 본 장에서는 Git을 통해 불러온 소스 코드를 원하는 버전으로 선택하여 윈도우 및 데비안(혹은 우분투) 리눅스 운영체제에 적합한 라이브러리로 컴파일하는 방법을 설명한다.

## Git 리포지터리
> 아래 절차를 진행하기 전에 우선 [Git](/docs/ko.Git) 소프트웨어 설치 및 이해도가 필요하다. 본 장에서는 최대한 간단히 이해할 수 있도록 내용을 작성하였다.

아래는 OpenCV의 핵심 소스 코드를 담고 있는 `opencv` 리포지터리(repository; 저장소)와 추가 기능 모듈이 있는 `opencv_contrib` 리포지터리를 GitHub에서 컴퓨터로 불러오는 방법이다. 해당 절차는 Git 소프트웨어 설치를 필요로 한다: 윈도우에서는 [공식 홈페이지](https://git-scm.com/)에서 설치 프로그램을 다운로드, 데비안(혹은 우분투)에서는 아래 명령어를 입력하여 설치한다.

```bash
sudo apt install git
```

Git 소프트웨어 설치가 완료되었으면 아래의 `git clone` 명령어를 통해 현재 터미널 위치에 불러오고자 하는 리포지터리를 GitHub 서버측(일명 리모트; remote)에서 사용자 로컬(local) 컴퓨터로 가져온다.

* `opencv` 리포지터리 (필수)
  ```bash
  git clone https://github.com/opencv/opencv
  ```

* `opencv_contrib` 리포지터리 (선택사항)
  ```bash
  git clone https://github.com/opencv/opencv_contrib
  ```

![<code>opencv</code> 및 <code>opencv_contrib</code> 리포지터리 클론](/images/docs/opencv/opencv_git_clone.png)

클론(clone; 복제)한 리포지터리는 항상 최신 상태의 버전으로, 이전 버전 상태로 클론할 수는 없다. 이는 현재(2020년 12월) 기준으로 가장 최신 버전 4.5.1에서 조금 더 코드 수정이 커밋(commit; 기여)된 정식 출시 버전이 아닐 가능성이 매우 높다. 다행이 Git이 소스 코드 제어 소프트웨어이기 때문에 로컬에서 원하는 버전을 선택할 수 있다.

OpenCV와 같은 대부분의 오픈소스 라이브러리는 정식 출시 버전의 리포지터리 커밋에 태그(tag)를 붙인다. OpenCV의 주요 리포지터리 `opencv`로 이동하여 아래의 Git 명령어를 입력하면 다음과 같이 태그 목록을 확인할 수 있다.

```bash
git tag
```

![OpenCV 리포지터리 태그 목록](/images/docs/opencv/opencv_git_tag.png)

OpenCV 4.5.1 버전의 경우에는 `4.5.1`이란 태그를 가진다. 찾고자 하는 태그를 확인하였으면 키보드에 `q` 버튼을 눌러 태그 목록에서 나간다. 참고로 파란색의 `(master)`는 현재 사용자가 기본 master 브랜치에 있음을 뜻하며, Git에서 브랜치(branch; 가지)란 분리된 코딩 작업환경을 제공하여 효율적인 소스 코드 관리를 가능케 한다.

원하는 버전의 태그를 확인하였으면 Git의 체크아웃(checkout; 둘러보기) 명령어로 해당 커밋 당시의 리포지터리로 되돌아간다.

```bash
git checkout tags/4.5.1
```
    
![OpenCV 리포지터리 커밋 체크아웃](/images/docs/opencv/opencv_git_checkout.png)

> Git에서 `HEAD`란, 현재 사용자가 작업하고 있는 브랜치의 가장 최신 커밋을 가리키며, master 브랜치에서 작업하고 있으면 `HEAD`는 master가 된다. 브랜치를 변경하면 `HEAD`는 변경된 브랜치를 가리킨다.
>
> 하지만 커밋을 체크아웃 하였다면 `HEAD`는 브랜치가 아닌 커밋의 SHA-1 값을 가리키게 된다. 이때 `HEAD`는 가장 최신 커밋을 가리키지 않아 새로운 커밋이 기여되도 `HEAD`에 반영되지 않는, 다시 말해 브랜치에 반영되지 않는다. 이러한 이유로 브랜치로부터 분리된 `detached HEAD` 상태에 있다고 Git Bash에서 설명한 것이다.

원하는 출시 버전으로 체크아웃을 하였으면 본격적으로 OpenCV 라이브러리 컴파일 단계로 진입한다.

### Git GUI
위의 방법은 Bash라는 UNIX 셸을 통해 Git을 활용하는 방법을 설명하였다. 그러나 Git을 설치하면 GUI 프로그램이 함께 제공되는데, 이는 Git을 시각적으로 확인하므로써 더 편리하게 관리할 수 있다. Git GUI를 사용할 시 프로그램 툴바에서 `Branch > Checkout...`를 클릭하면 아래의 화면을 볼 수 있다.

![OpenCV 리포지터리를 Git GUI로 제어](/images/docs/opencv/opencv_git_gui.png)

그리고 확인하고자 하는 태그를 선택해 체크아웃 버튼을 클릭하면 리포지터리가 해당 커밋 당시로 되돌아간다.

## CMake 컴파일
OpenCV가 크로스 플랫폼을 지원할 수 있는 이유는 바로 완성된 라이브러리를 제공하는 게 아니라 소스 코드로부터 직접 라이브러리를 컴파일하기 때문이다. 이렇게 해서 생성된 라이브러리는 이미 해당 시스템에 최적화된 상태이다. CMake를 Bash를 사용하여 라이브러리를 생성할 빌드할 수 있으나, 본 문서에서는 CMake GUI를 사용하여 윈도우와 데비안(혹은 우분투)에서 각각 C++ 및 파이썬 3을 위한 OpenCV 4.5.1 라이브러리 생성 과정을 보여준다.

### 윈도우 OS
> 아래 절차는 파이썬 3을 위한 OpenCV 라이브러리 빌드를 함께 소개히며, 이를 위해서는 파이썬 3 인터프리터 및 [디버깅 라이브러리](/docs/ko.PYTHON#사용자-지정-설치) 그리고 [넘파이](/docs/ko.PYTHON#넘파이)가 준비되어야 한다.

우선 [CMake](https://cmake.org/) 공식 홈페이지에서 프로그램을 다운로드 및 설치를 한다.

![그림 5-1. CMake 프로그램 설치 (윈도우)](/images/docs/opencv/opencv_win_cmake_install.png)

CMake 설치가 완료되었으면 프로그램을 실행하여 상단의 두 입력란에 경로를 입력해야 한다. 

* `Where is the source code`: OpenCV의 CMake 프로젝트 소스 코드 경로 (대체로 `CMakeLists.txt`가 위치한 곳)
* `Where to build the binary`: OpenCV의 CMake 프로젝트 빌드 저장 경로 (혼잡을 방지하기 위해 새 폴더 생성 추천)

![그림 6-1. OpenCV의 CMake 프로젝트 소스 및 빌드 경로 지정 (윈도우)](/images/docs/opencv/opencv_win_cmake_path.png)

각 입력란에 대한 설명에 보면 추론할 수 있듯이, CMake는 OpenCV 라이브러리를 생성하지 않는다; 해당 플랫폼에 가장 적합한 OpenCV 라이브러리 프로젝트를 생성하는 게 바로 CMake의 역할이다. 경로를 지정한 이후 `Configure` 버튼을 누르면 CMake 프로젝트에서 어떠한 플랫폼 및 컴파일러를 대상으로 한 OpenCV 라이브러리 프로젝트를 생성할 것인지 선택한다.

![그림 7-1. OpenCV 빌드 플랫폼 및 컴파일러 지정 (윈도우)](/images/docs/opencv/opencv_win_cmake_compiler.png)

만일 64비트 윈도우 OS의 경우, 기본 플랫폼이 `x64`로 설정되어 있다. 이는 32비트 어플리케이션에 사용할 수 없어, 32비트 라이브러리를 생성하기 위해서는 `Win32`로 플랫폼을 변경해야 한다.

플랫폼과 컴파일러를 선택하였으면 CMake에서 자동적으로 시스템 요소들을 탐색하여 OpenCV의 어떤 기능이 빌드가 가능한지 판별하여 일부 옵션들은 자동적으로 활성/비활성화 된다. 아래에 붉은색 옵션들은 오류나 경고를 뜻하는 게 아니라 `Configure` 버튼을 눌러 새로 업데이트 된 옵션들을 의미한다.

![그림 8-1. OpenCV 빌드 옵션 목록 (윈도우)](/images/docs/opencv/opencv_win_cmake_config.png)

CMake의 OpenCV 빌드 옵션 중에서 `OPENCV_EXTRA_MODULES_PATH`가 있는데, 바로 여기가 OpenCV의 추가 모듈이 담겨있는 `opencv_contrib`의 모듈 폴더 경로를 입력하는 곳이다.

![그림 9-1. OpenCV 빌드 <code>opencv_contrib</code> 추가 (윈도우)](/images/docs/opencv/opencv_win_cmake_module.png)

옵션의 내용은 실시간으로 바뀌지 않는다. CMake 옵션에 변경사항이 발생하면 반드시 `Configure` 버튼을 다시 클릭해 내역을 업데이트해야 한다. 그러면 CMake는 `opencv_contrib`의 모듈에 필요한 요소들을 포함하여 시스템을 재탐색하여 새로운 빌드 옵션을 활성화시키기도 한다.

![그림 10-1. OpenCV의 CMake 옵션 업데이트 (윈도우)](/images/docs/opencv/opencv_win_cmake_update.png)

하지만 `opencv_contrib`를 추가할 시, 윈도우 OS를 사용하는 경우 십중팔구 CMake 터미널에서 다음과 같은 붉은 색 문장을 확인할 수 있다:

```
CMake Warning at cmake/OpenCVGenSetupVars.cmake:54 (message):
  CONFIGURATION IS NOT SUPPORTED: validate setupvars script in install
  directory
Call Stack (most recent call first):
  CMakeLists.txt:985 (include)
```

이는 오류가 아닌 경고문이지만, 발생 원인은 바로 파이썬 경로가 절대경로로 설정되어서 나타나는 문구이다. 그러나 필자의 경험을 공유하자면 해당 경고문은 최대한 무시하기를 권장하며, 아예 `OPENCV_GENERATE_SETUPVARS` 체크를 해제하였다. 상대경로로 바꾸면 오히려 라이브러리 컴파일 작업에서 파이썬 모듈 헤더 파일을 찾지 못하는 오류가 발생한다.

결과적으로 다음은 필자가 기본 CMake 빌드 옵션에서 변경한 모든 사항들이다.

* `BUILD_JAVA` - OFF<br/>: *자바 OpenCV 라이브러리는 현재 대상이 아니다.*

* `BUILD_PERF_TEST` - OFF<br/>: *OpenCV 성능 시험 프로그램 빌드는 필요하지 않다.*

* `BUILD_TEST` - OFF<br/>: *OpenCV 정확도 시험 프로그램 빌드는 필요하지 않다.*

* `BUILD_opencv_world` - ON<br/>: *수많은 OpenCV 라이브러리를 하나의 슈퍼 모듈로 통합하여 간편하게 사용할 수 있다. 단, OpenCV 라이브러리 빌드 시간이 상당히 길어진다.*

* `OPENCV_EXTRA_MODULES_PATH` - `${OpenCV}/opencv_contrib/modules`<br/>: *본 문서는 추가 모듈을 함께 사용할 수 있는 OpenCV 라이브러리 생성을 목표로 한다.*

* `OPENCV_GENERATE_SETUPVARS` - OFF<br/>: *설명 참조*

* `OPENCV_PYTHON3_VERSION` - ON<br/>: *파이썬 3을 주로 사용하므로 버전 3에 적합한 OpenCV 모듈을 생성한다.*

CMake 옵션 선택이 완료되었으면 `Generate` 버튼을 눌러 OpenCV 라이브러리 프로젝트를 생성한다.

![그림 11-1. OpenCV 라이브러리 프로젝트 생성 (윈도우)](/images/docs/opencv/opencv_win_cmake_generate.png)

아래의 `Open Project` 버튼을 누르면 `OpenCV.sln` 솔루션이 열린다 (Visual Studio 컴파일러 선택하였을 경우). 파일 탐색기에서 해당 솔루션은 `${OpenCV}/opencv/build/OpenCV.sln`에서 찾을 수 있다. 그리고 아래의 화면과 같이 솔루션 전체를 `Debug`와 `Release` 모드에서 빌드한다.

![그림 12-1. OpenCV 라이브러리 프로젝트 <code>Debug</code> 모드 빌드 (윈도우)](/images/docs/opencv/opencv_win_vs_build.png)

본 과정은 상당한 시간이 소요가 되는 동시에 CPU 내에서도 많은 양의 자료를 처리해야 하기 때문에 기다림이 필요하다. 특히 CUDA가 활성화된 OpenCV 라이브러리의 경우에는 1시간 이상을 기다릴 준비를 해야 한다. 일반적으로는 10~15분 이내에 마무리되나, `BUILD_opencv_world`가 활성되어 있으면 시간이 배로 소요될 수 있다. 반드시 빌드 결과를 확인하기를 권장한다.

![그림 13-1. OpenCV 라이브러리 프로젝트 <code>Debug</code> 모드 빌드 결과 (윈도우)](/images/docs/opencv/opencv_win_vs_output.png)

특히 컴파일을 실패한 프로젝트가 없는지 확인해 주는게 중요하다. 빌드 오류가 발생하였으면 다시 한 번 빌드를 시도한다. 빌드가 마무리되면 `${OpenCV}/opencv/build/bin`와 `${OpenCV}/opencv/biuld/lib` 경로에 DLL 동적 라이브러리 및 LIB 정적 라이브러리가 생성된 걸 확인할 수 있다. 그리고 추가적으로 파이썬 3 폴더가 생성된 것을 목격할 수 있는데 이들은 파이썬 3에서 사용할 수 있는 OpenCV 라이브러리이다.

OpenCV 라이브러리를 파이썬 3에서 사용할 수 있도록 파이썬 바인딩(binding) 작업을 진행한다. `${OpenCV}/opencv/build/python_loader` 경로로 이동하여 `setup.py` 파일을 `develop` 옵션을 추가하여 실행한다.

![그림 15. OpenCV 라이브러리 파이썬 바인딩](/images/docs/opencv/opencv_win_python_binding.png)

파이썬 바인딩이 완료되었으면 `import cv2` 문구로 OpenCV 모듈을 바로 즉시 불러올 수 있다. 해당 절차를 지금 진행하는 이유는 파이썬에서 모듈을 불러오는 데 발생할 수 있는 다음 오류를 방지하기 위해서이다.

```
ERROR: recursion is detected during loading of "cv2" binary extensions. Check OpenCV installation.
```

본래 설치의 마무리 단계에서 파이썬 바인딩이 모두 정상적으로 되어야 하나 OpenCV 개발은 현재진행형이다; 어디선가 버그가 발견될 수가 있으며, 확실치는 않지만 필자는 이것이 `setupvars`와 관련이 있는 것이 아닌가 생각한다. 만일 해당 방법에서도 파이썬 모듈을 불러오는데 문제가 발생하면 다른 해결책을 탐색하여 업데이트 하겠습니다. 

하지만 아직 C++에서의 OpenCV가 마무리되지 않았다. 솔루션 빌드를 통해 라이브러리가 생성되었으나 라이브러리를 사용하기 위해 필요한 헤더 파일은 찾아볼 수가 없다. OpenCV 라이브러리 생성의 마지막 단계로 라이브러리 파일과 헤더 파일을 한 군데에 취합하기 위해 `INSTALL.vcxproj` 프로젝트를 빌드해야 한다.

![그림 14-1. OpenCV 라이브러리 설치 (윈도우)](/images/docs/opencv/opencv_win_vs_install.png)

최종적으로 `${OpenCV}/opencv/build/install` 경로가 생성되며, 안에는 다음 폴더들이 들어있다.

* `${OpenCV}/opencv/build/install/include`: 헤더 파일 (.hpp)
* `${OpenCV}/opencv/build/install/x64/vc16/lib`: 정적 라이브러리 (.lib)
* `${OpenCV}/opencv/build/install/x64/vc16/bin`: 동적 라이브러리 (.dll)

프로젝트에 OpenCV 라이브러리를 불러올 때에는 오로지 `${OpenCV}/opencv/build/install` 경로 안에 있는 파일들만 사용하도록 한다. 라이브러리는 동일한 이름을 가진게 두 개가 있을 것이며, 그 중에서 뒤에 알파벳 `d`가 있는 파일은 디버깅 라이브러리를 의미한다. 라이브러리 폴더에 동일한 이름의 라이브러리가 보이지 않으면 `Debug` 혹은 `Release` 중 하나를 빌드하지 않았다는 의미로 나머지도 반드시 빌드하도록 한다.

만일 설치한 OpenCV 라이브러리를 제거하기 위해서는 `${OpenCV}/opencv/build/install` 폴더를 삭제하면 된다. 이름만 `install`일 뿐이지, 윈도우 제어판의 "프로그램 제거"에 설치된 프로그램 목록에는 OpenCV와 관련된 소프트웨어를 전혀 찾아볼 수 없다. 그러므로 파일 삭제만으로 안전하게 제거할 수 있다.

### 리눅스 OS
> 아래 절차는 리눅스 운영체제 중에서 데비안(Debian) 10 "Buster"를 기준으로 설명하였으며, 이는 우분투(Ubuntu)에도 동일하게 적용이 된다.

OpenCV 라이브러리 빌드 과정은 윈도우와 비슷하나 리눅스가 가지는 특성으로 인해 확연한 차이점이 몇 가지 존재하여 별개의 부문으로 나뉘어 소개한다. 본 부문의 초반은 대부분 CMake를 위한 패키지 설치를 다룬다.

* 우선 데비안에서 컴파일에 필요한 소프트웨어 패키지를 아래의 명령어로 설치한다.

    ```bash
    sudo apt install build-essential
    ```
  
  해당 명령어는 GNU `gcc` 컴파일러 및 `make` 자동 빌드 도구 소프트웨어 등을 설치한다. 윈도우에서 [비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)의 MSVC 컴파일러로 라이브러리를 빌드하였으면 리눅스에서는 GNU `make`를 사용할 것이다.

*  OpenCV 라이브러리는 이미지 및 영상 처리를 위한 것이므로 이러한 미디어를 다룰 수 있는 패키지들이 반드시 요구된다. 다음 명령어를 통해 OpenCV에 필수적인 패키지를 설치한다.
    
    ```bash
    sudo apt install libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
    ```

* 파이썬에도 사용할 수 있는 OpenCV 라이브러리를 생성하는 게 목표 중 하나이다. 우분투의 경우는 파이썬 2와 3에 pip가 이미 설치되어 있을 가능성이 매우 높으나, 데비안은 파이썬만 설치되어 있다. 아래의 명령어로 각 파이썬 버전의 pip를 설치한다.

    ```bash
    sudo apt install python-pip python3-pip
    ```

  파이썬의 OpenCV 모듈은 넘파이를 필요로 한다. 파이썬 2와 3의 pip에서 각각의 넘파이 모듈을 설치한다.

    ```bash
    python2.7 -m pip install numpy
    python3.7 -m pip install numpy
    ```
    
  데비안(혹은 우분투)에서 넘파이를 설치하는 다른 방법으로는 `sudo apt install python-numpy`가 있으나, 여기서는 윈도우와 비교하면서 설치를 진행하기 때문에 최대한 유사한 절차를 가는 방향으로 선택하였다.
    
  그리고 파이썬 확장도구를 개발 및 디버깅에 필요한 패키지도 함께 설치한다.
    
    ```bash
    sudo apt install python-dev python3-dev python-dbg python3-dbg
    ```

* `opencv_contrib`를 추가하면 일부 라이브러리 및 헤더 경로와 관련된 경고문을 볼 수 있다. 이를 미연에 방지하기 위해 아래의 패키지를 추가로 설치한다.

    ```bash
    sudo apt install libjpeg-dev libpng-dev libtiff-dev libwebp-dev
    ```

위의 패키지 설치가 완료되었으면 CMake를 설치한다. `sudo apt install cmake`로 설치할 수 있으나, 기본적으로 설치되어 있는 Gnome Software Center에서도 검색하여 설치할 수 있다.

![그림 5-2. CMake 프로그램 설치 (데비안)](/images/docs/opencv/opencv_deb_cmake_install.png)

CMake 설치가 완료되었으면 프로그램을 실행하여 상단의 두 입력란에 경로를 입력해야 한다. 

* `Where is the source code`: OpenCV의 CMake 프로젝트 소스 코드 경로 (대체로 `CMakeLists`가 위치한 곳)
* `Where to build the binary`: OpenCV의 CMake 프로젝트 빌드 저장 경로 (혼잡을 방지하기 위해 새 폴더 생성 추천)

![그림 6-2. OpenCV의 CMake 프로젝트 소스 및 빌드 경로 지정 (데비안)](/images/docs/opencv/opencv_deb_cmake_path.png)

각 입력란에 대한 설명에 보면 추론할 수 있듯이, CMake는 OpenCV 라이브러리를 생성하지 않는다; 해당 플랫폼에 가장 적합한 OpenCV 라이브러리 프로젝트를 생성하는 게 바로 CMake의 역할이다. 경로를 지정한 이후 `Configure` 버튼을 누르면 CMake 프로젝트에서 어떠한 플랫폼 및 컴파일러를 대상으로 한 OpenCV 라이브러리 프로젝트를 생성할 것인지 선택한다.

![그림 7-2. OpenCV 빌드 플랫폼 및 컴파일러 지정 (데비안)](/images/docs/opencv/opencv_deb_cmake_compiler.png)

Unix Makefiles를 선택하면 초반에 설치한 GNU `make` 소프트웨어가 Makefile 파일 안에 있는 지시문을 따라 OpenCV 라이브러리를 컴파일한다.

플랫폼과 컴파일러를 선택하였으면 CMake에서 자동적으로 시스템 요소들을 탐색하여 OpenCV의 어떤 기능이 빌드가 가능한지 판별하여 일부 옵션들은 자동적으로 활성/비활성화 된다. 아래에 붉은색 옵션들은 오류나 경고를 뜻하는 게 아니라 `Configure` 버튼을 눌러 새로 업데이트 된 옵션들을 의미한다.

![그림 8-2. OpenCV 빌드 옵션 목록 (데비안)](/images/docs/opencv/opencv_deb_cmake_config.png)

CMake의 OpenCV 빌드 옵션 중에서 `OPENCV_EXTRA_MODULES_PATH`가 있는데, 바로 여기가 OpenCV의 추가 모듈이 담겨있는 `opencv_contrib`의 모듈 폴더 경로를 입력하는 곳이다.

![그림 9-2. OpenCV 빌드 <code>opencv_contrib</code> 추가 (데비안)](/images/docs/opencv/opencv_deb_cmake_module.png)

파이썬 부분을 확인하면 `PYTHON2_LIBRARY_DEBUG`와 `PYTHON3_LIBRARY_DEBUG`에 파이썬 디버깅 라이브러리가 자동적으로 입력되지 않을 가능성이 있다. 파이썬 디버깅 라이브러리는 `PYTHON2_LIBRARY`와 `PYTHON3_LIBRARY`와 동일한 경로에 있으며, 이름도 단지 `_d` 혹은 `d`만 추가하여 수동으로 입력해 준다.

![그림 16. OpenCV의 CMake 파이썬 옵션 (데비안)](/images/docs/opencv/opencv_deb_cmake_python.png)

옵션의 내용은 실시간으로 바뀌지 않는다. CMake 옵션에 변경사항이 발생하면 반드시 `Configure` 버튼을 다시 클릭해 내역을 업데이트해야 한다. 그러면 CMake는 `opencv_contrib`의 모듈에 필요한 요소들을 포함하여 시스템을 재탐색하여 새로운 빌드 옵션을 활성화시키기도 한다.

![그림 10-2. OpenCV의 CMake 옵션 업데이트 (데비안)](/images/docs/opencv/opencv_deb_cmake_update.png)

일부 독자들은 CMake 터미널에 `Python (for build)`가 파이썬 버전 3이 아닌 버전 2로 선택된 것을 눈치챘을 것이다. 이는 빌드에 사용되는 파이썬이 버전 2임을 뜻하며 절대 파이썬 3에서 사용하지 못한다는 의미가 아니다.

결과적으로 다음은 필자가 기본 CMake 빌드 옵션에서 변경한 모든 사항들이다.

* `BUILD_JAVA` - OFF<br/>: *자바 OpenCV 라이브러리는 현재 대상이 아니다.*

* `BUILD_PERF_TEST` - OFF<br/>: *OpenCV 성능 시험 프로그램 빌드는 필요하지 않다.*

* `BUILD_TEST` - OFF<br/>: *OpenCV 정확도 시험 프로그램 빌드는 필요하지 않다.*

* `BUILD_opencv_world` - ON<br/>: *수많은 OpenCV 라이브러리를 하나의 슈퍼 모듈로 통합하여 간편하게 사용할 수 있다. 단, OpenCV 라이브러리 빌드 시간이 상당히 길어진다.*

* `OPENCV_EXTRA_MODULES_PATH` - `${OpenCV}/opencv_contrib/modules`<br/>: *본 문서는 추가 모듈을 함께 사용할 수 있는 OpenCV 라이브러리 생성을 목표로 한다.*

* `OPENCV_PYTHON3_VERSION` - ON<br/>: *파이썬 3을 주로 사용하므로 버전 3에 적합한 OpenCV 모듈을 생성한다.*

* `PYTHON2_LIBRARY_DEBUG` - `/usr/lib/x86_64-linux-gnu/libpython2.7_d.so`<br/>: *파이썬 2 디버깅 라이브러리가 자동 입력되지 않으면 직접 입력해 준다.*

* `PYTHON3_LIBRARY_DEBUG` - `/usr/lib/x86_64-linux-gnu/libpython3.7dm.so`<br/>: *파이썬 3 디버깅 라이브러리가 자동 입력되지 않으면 직접 입력해 준다.*

CMake 옵션 선택이 완료되었으면 `Generate` 버튼을 눌러 OpenCV 라이브러리 프로젝트를 생성한다.

![그림 11-2. OpenCV 라이브러리 프로젝트 생성 (데비안)](/images/docs/opencv/opencv_deb_cmake_generate.png)

생성된 Makefile은 `${OpenCV}/opencv/build/` 폴더에서 찾을 수 있다. 터미널에서 해당 경로로 이동하여 아래의 명령어를 입력하면 다음 그림과 같이 빌드가 진행된다.

```bash
make
```

본 과정은 상당한 시간이 소요가 되는 동시에 CPU 내에서도 많은 양의 자료를 처리해야 하기 때문에 기다림이 필요하다. 특히 CUDA가 활성화된 OpenCV 라이브러리의 경우에는 1시간 이상을 기다릴 준비를 해야 한다. 일반적으로는 10~15분 이내에 마무리되나, `BUILD_opencv_world`가 활성되어 있으면 시간이 배로 소요될 수 있다. 오류가 생기면 빌드가 도중에 중단된다.

![그림 13-2. OpenCV 라이브러리 프로젝트 빌드 과정 (데비안)](/images/docs/opencv/opencv_deb_make_build.png)

빌드를 완료하였으면 아래의 명령어로 `/usr/local` 경로로 라이브러리를 설치를 진행한다. 이는 시스템 내에서 소프트웨어를 설치할 때 사용되는 경로이며, 안에는 로컬에서 사용할 수 있는 라이브러리와 헤더 파일, 바이너리 파일 및 소스 코드 등이 들어있다.

```bash
sudo make install
```

![그림 14-2. OpenCV 라이브러리 설치 (데비안)](/images/docs/opencv/opencv_deb_make_install.png)

마지막으로 `/usr/local`에 새로 설치한 라이브러리를 시스템에서 인식할 수 있도록 다음 명령어를 입력한다.

```bash
sudo ldconfig
```

만일 설치한 OpenCV 라이브러리를 제거하기 위해서는 `make` 명령어를 사용했던 OpenCV 라이브러리의 Makefile이 있던 위치로 되돌아가야 한다. 아래의 명령어를 입력하면 `sudo make install` 과정에서 `/usr/local` 경로에 설치하였던 라이브러리 및 헤더 파일을 전부 삭제한다.

```bash
sudo make uninstall
```

#  프로젝트
본 장은 OpenCV 라이브러리를 활용한 프로젝트를 설정하는 방법을 소개한다. 이 과정에서 매우 복잡하고 까다로운 OpenCV 라이브러리 설치가 정상적으로 되었는지 확인할 수 있으며, 만일 아래의 절차에 불구하고 오류가 발생하면 [*OpenCV: 설치*](#설치)로 돌아가 재설치가 필요할 수 있다.

## 파이썬 3
파이썬에서 OpenCV를 적용은 매우 간단한다: 파이썬 버전의 OpenCV 라이브러리인 `cv2`를 패키지를 불러오는 `import` 구문으로 가져온다. 이는 어떠한 운영체제를 사용하든 공통된 방식이다.

```python
import cv2
```

## C++
C++에서 OpenCV를 적용하기 위해서는 라이브러리를 빌드 과정에서 직접 불러와야 한다. 윈도우 OS를 사용하는 경우 비주얼 스튜디오에서, 리눅스에서는 터미널 혹은 [비주얼 스튜디오 코드](https://code.visualstudio.com/download)에서 링크를 하는 방법을 소개한다.

### 윈도우 OS
> 본 절차를 비주얼 스튜디오에서 진행되었으며, 이해를 돕기 위해 C++ 문서의 [콘솔 어플리케이션 프로젝트 생성](/docs/ko.Cpp#비주얼-스튜디오)에 이어서 설명한다.

OpenCV 라이브러리를 적용시키고 싶은 프로젝트의 속성에 들어간다. 프로젝트 속성을 들어가기 위해서는 솔루션이 아닌 프로젝트를 오른쪽 클릭한 다음 `Properties`를 누른다. 솔루션 속성과 프로젝트 속성은 아예 다른 내용을 다룬다.

![그림 17. 비주얼 스튜디오 C++ 프로젝트 속성](/images/docs/opencv/opencv_win_cpp_property.png)

우선 프로젝트에서 라이브러리를 사용하기 위해 필요한 헤더 파일을 불러올 수 있도록 설정한다. 물론 `#include "..."`의 상대경로로 원하는 헤더 파일 위치까지 도달할 수 있겠으나, 경로가 매우 길고 복잡해질 수가 있어 절대로 권장하지 않는다. 혹은 OpenCV 헤더 파일을 직접 프로젝트로 가져오는 방법도 있으나, 새로운 헤더 파일을 추가할 때마다 프로젝트로 복사하는 번거로움이 발생한다. 하지만 아래의 절차는 헤더 파일을 탐색할 위치를 프로젝트에 미리 지정함으로써 언급되었던 불편함을 손쉽게 해결할 수 있다.

헤더 파일 경로를 추가하기 위해서는 설정 페이지에서 `C/C++` → `General`로 이동한 다음 `Additional Include Directories`를 클릭한다.

![그림 18. C++ 프로젝트 헤더 불러오기 (1단계)](/images/docs/opencv/opencv_win_cpp_include1.png)

그 다음 `${OpenCV}/opencv/build/install/include` 경로를 추가한다.

![그림 19. C++ 프로젝트 헤더 불러오기 (2단계)](/images/docs/opencv/opencv_win_cpp_include2.png)

그러면 상대경로가 아닌 `#include <...>`를 사용하여도 프로젝트 및 컴파일러가 헤더 파일을 찾아낼 수 있다. 아래는 헤더 파일 경로를 설정한 이후, C++ 스크립트에서 OpenCV 라이브러리 헤더 파일을 알아채는 모습을 보여준다.

![그림 20. C++ 프로젝트 헤더 불러오기 (3단계)](/images/docs/opencv/opencv_win_cpp_include3.png)

헤더 파일만 추가한다고 해서 OpenCV가 프로젝트에 적용되는 것이 아니다; LIB 정적 라이브러리를 프로젝트에 불러와야 OpenCV가 적용된 어플리케이션을 컴파일할 수 있다. 정적 라이브러리 경로를 추가하기 위해서는 설정 페이지에서 `Linker` → `General`로 이동한 다음 `Additional Library Directories`를 클릭한다.

![그림 21. C++ 프로젝트 라이브러리 적용 (1단계)](/images/docs/opencv/opencv_win_cpp_linker1.png)

그 다음 `${OpenCV}/opencv/build/install/x64/vc16/lib` 경로를 추가한다. 여기서 `vc16`은 비주얼 스튜디오 2019를 의미하며, 2017과 2015의 경우에는 폴더명이 `vc15`와 `vc14`로 되어있다.

![그림 22. C++ 프로젝트 라이브러리 적용 (2단계)](/images/docs/opencv/opencv_win_cpp_linker2.png)

라이브러리 경로를 지정하는 것만으로 필요한 라이브러리가 자동적으로 프로젝트에 적용되지 않는다. 경로 지정은 라이브러리를 간편하게 불러오기 위해서이며, 정적 라이브러리를 추가하기 위해서는 설정 페이지에서 `Linker` → `Input`으로 이동한 다음 `Additional Dependencies`를 클릭한다.

![그림 23. C++ 프로젝트 라이브러리 적용 (3단계)](/images/docs/opencv/opencv_win_cpp_linker3.png)

CMake 단계에서 `BUILD_opencv_world`를 활성화하여 거의 모든 라이브러리는 `opencv_world451.lib` 그리고 `opencv_world451d.lib` 파일 하나로 통합되어 있다. 현재 프로젝트는 Deubg 모드로 설정되어 있기 때문에 후자를 입력하였다. 반대로 Release 모드에서는 전자를 입력한다.

![그림 24. C++ 프로젝트 라이브러리 적용 (4단계)](/images/docs/opencv/opencv_win_cpp_linker4.png)

위의 프로젝트 속성 설정을 마쳤으면 아래와 같이 코드를 입력한다. 본 코드는 `opencv-logo.png` 파일을 불러와 이미지 창을 띄우는 기능을 수행한다.

```cpp
#include <iostream>
#include <opencv2/highgui.hpp>
using namespace cv;

int main()
{
    std::string image_path 
        = "D:\\Workspace\\GitHub\\OpenCV\\opencv\\doc\\opencv-logo.png";
    Mat image = imread(image_path);

    imshow("Sample", image);
    if (waitKey(0) == 13) destroyAllWindows;

    return 0;
}
```

그러나 `F5` 혹은 `CTRL+F5`로 코드를 컴파일하여 실행하려고 하면 다음 오류가 발생한다.

![그림 25. C++ 프로젝트 실행 에러](/images/docs/opencv/opencv_win_cpp_dynamic1.png)

이는 OpenCV 설치가 잘못된 것이 아니라 동적 라이브러리가 없어 실행할 수 없다는 오류를 나타낸다. 사실상 컴파일은 정상적으로 이루어졌으며 `CTRL+B` 단축키를 눌러서 성공적으로 빌드가 되었다는 알림 및 실행 파일이 생성된 점에서 확인할 수 있다. 비록 정적 라이브러리를 사용하여 성공적으로 컴파일 하였으나, 라이브러리 안에 있는 함수들이 컴파일된 어플리케이션에 내장되지 않는다. 어플리케이션가 제대로 동작하기 위해서는 여전히 라이브러리를 필요로 하며, 이때 필요한 것이 바로 DLL 동적 라이브러리이다.

프로젝트가 Debug 모드에서 컴파일하였으므로 아래의 그림과 같이 `${OpenCV}/opencv/build/install/x64/vc16/bin`에 있는 `opencv_world451d.dll` 파일을 컴파일된 실행 파일이 위치한 경로로 복사한다. 반대로 Release 모드에서는 `opencv_world451.dll` 파일을 복사한다.

![그림 26. C++ 프로젝트 DLL 파일 복사](/images/docs/opencv/opencv_win_cpp_dynamic2.png)

컴파일 필요없이 프로그램을 실행하면 다음 화면을 볼 수 있다.

![그림 27. C++ 프로젝트 컴파일 및 실행](/images/docs/opencv/opencv_win_cpp_exec.png)

위와 같은 화면이 나왔으면 라이브러리가 프로젝트에 정상적으로 적용되었음을 뜻하며, 본격적으로 OpenCV 프로젝트를 진행하면 된다. 이러한 절차는 OpenCV에서만 해당되는 게 아니라 C++ 전체적으로 외부 라이브러리를 불러오기 위해 거쳐야 하는 과정으로 반드시 숙지하고 있어야 한다.

### 리눅스 OS
> 본 절차를 [비주얼 스튜디오 코드](https://code.visualstudio.com/download)를 사용하였으며, [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) 확장도구를 필요로 한다.

리눅스에서 OpenCV 프로젝트를 생성하는데 어떠한 IDE 및 코드 편집기를 사용해도 무관한다. 그 중에서 비주얼 스튜디오 코드는 리눅스에서 설치할 수 있는 동시에 필자가 자주 사용하는 코드 편집기이므로, 이번 부문에서는 VS Code를 활요한 OpenCV 프로젝트 설정법을 소개한다.

필자는 `/home/gko95/Workspace/Cpp/OpenCV` 폴더를 만들어 `main.cpp` 파일을 생성하여 다음과 같이 코드를 작성하였다. 본 코드는 `opencv-logo.png` 파일을 불러와 이미지 창을 띄우는 기능을 수행한다.

![그림 28. 비주얼 스튜디오 코드 OpenCV C++ 스크립트](/images/docs/opencv/opencv_deb_cpp_script.png)

하지만 VS Code는 OpenCV 헤더 파일에 대한 정보가 없어 `#include <opencv2/highgui.hpp>`에 오류를 표시하였다. 그리고 발생한 문제를 해결하기 위해서는 `IncludePath` 목록을 업데이트하하는 문구를 하단부에 찾아볼 수 있다. 그러기 위해서 `F1`을 클릭한 다음 `C/C++: Edit Configuration`을 클릭한다.

![그림 29. VS Code의 C/C++ 구성 설정 (1단계)](/images/docs/opencv/opencv_deb_cpp_config1.png)

생성된 `.vscode/c_cpp_properties.json` 파일 안에는 위에서 언급한 `IncludePath` 목록이 있으며, 안에 OpenCV 라이브러리 헤더 파일이 있는 `/usr/local/include/opencv4` 경로를 입력한다. 또한 OpenCV는 C++ 라이브러리인 점을 감안하여 컴파일러 경로 `compilerPath`를 `/usr/bin/g++`로 수정한다: `gcc`는 C 컴파일러이고 `g++`는 C++ 컴파일러이기 때문이다.

![그림 30. VS Code의 C/C++ 구성 설정 (2단계)](/images/docs/opencv/opencv_deb_cpp_config2.png)

헤더 파일만 추가한다고 해서 OpenCV가 프로젝트에 적용되는 것이 아니다; OpenCV가 적용된 어플리케이션을 생성하기 위해서는 컴파일을 할 때 라이브러리를 불어와야 한다. 해당 설정을 위해서 임시로 `F5` 혹은 `CTRL+F5` 버튼을 눌러 어플리케이션 빌드 및 실행을 감행한다. 만일 어떠한 작업환경에서 진행할 것인지 묻는다면 GNU 디버거 `C++ (GDB/LLDB)`를 선택한다.

![그림 31. VS Code의 C/C++ 작업 설정 (1단계)](/images/docs/opencv/opencv_deb_cpp_task1.png)

그 다음 컴파일러 선택에서는 `/usr/bin/g++`을 택한다. 이전 단계에서의 `c_cpp_properties.json`에서 지정한 컴파일러 경로와 동일하나, 해당 JSON 파일은 컴파일 작업이 아닌 VS Code 작업환경 구성 설정이라는 아예 다른 성질을 가진다. 목록에 나열된 g++ 컴파일러는 파일명과 위치만 다를 뿐, 사실상 동일한 컴파일러이다.

![그림 32. VS Code의 C/C++ 작업 설정 (2단계)](/images/docs/opencv/opencv_deb_cpp_task2.png)

컴파일러까지 선택하였으면 아래와 같은 오류창이 나타난다. 

![그림 33. VS Code의 C/C++ 작업 설정 (3단계)](/images/docs/opencv/opencv_deb_cpp_task3.png)

이는 예상된 결과이며 동시에 `.vscode/launch.json` 및 `.vscode/task.json`가 생성되었음을 확인할 수 있다. 두 개의 JSON 파일 중에서 컴파일러 옵션에 관여하는 설정 파일은 바로 `.vscode/task.json`이다. 해당 파일에서 수정해야 할 부분은 `"args"` 목록이다.

![그림 34. VS Code의 C/C++ 작업 설정 (4단계)](/images/docs/opencv/opencv_deb_cpp_task4.png)

총 세 줄이 추가되었으며, 각 옵션은 다음과 같은 의미를 가진다.

* `-I/usr/local/include/opencv4`<br/>: 컴파일에 추가할 라이브러리 헤더 파일의 경로.

* `-L/usr/local/lib`<br/>: 컴파일에 추가할 라이브러리의 경로.

* `-lopencv_world`<br/>: 컴파일에 추가할 라이브러리. 라이브러리 파일명이 `libopencv_world.so`이면 접두사 `lib`와 접미사 `.so`를 제외하여 입력한다.

위의 `.vscode/task.json` 파일 설정은 사실상 아래와 같이 터미널에서 컴파일을 할 때 입력되는 옵션들을 가리킨다.

![그림 35. C++ 프로젝트 컴파일 및 실행](/images/docs/opencv/opencv_deb_cpp_terminal.png)

VS Code와 같은 코드 편집기 혹은 IDE를 사용하여 프로젝트 설정을 하면 매번 컴파일을 할 때마다 긴 명령어를 입력할 필요가 없다. 위의 설정을 모두 마친 다음 프로그램을 다시 실행하면 다음 화면을 볼 수 있다.

![그림 36. C++ 프로젝트 컴파일 및 실행](/images/docs/opencv/opencv_deb_cpp_exec.png)

위와 같은 화면이 나왔으면 라이브러리가 프로젝트에 정상적으로 적용되었음을 뜻하며, 본격적으로 OpenCV 프로젝트를 진행하면 된다. 이러한 절차는 OpenCV에서만 해당되는 게 아니라 C++ 전체적으로 외부 라이브러리를 불러오기 위해 거쳐야 하는 과정으로 반드시 숙지하고 있어야 한다.
