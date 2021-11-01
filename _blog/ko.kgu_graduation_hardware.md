---
layout: docs
language: ko
title: "KGU 졸업작품 내용정리: 하드웨어"
tags: RPLIDAR ROS JetsonTX2
date: 2019-11-13 00:00:00
notice: false
toc: true
---
본 내용은 2019년 경기대학교 졸업작품 및 제17회 임베디드 소프트웨어 경진대회 등에 출전한 *[DNN 모델을 활용한 사람추적 무인자율주행차량](https://github.com/moonyeol/HumanTracking_UV)* 프로젝트에서 본인이 작성한 하드웨어 관련 문서를 보관 목적으로 [원본](https://github.com/moonyeol/HumanTracking_UV/wiki/하드웨어-구동-가이드라인)으로부터 발췌한 문서입니다.

# NVIDIA JETSON TX2
본 내용은 NVIDIA Jetson TX2에 대한 정보를 포함한다.

## J17 UART 직렬통신 모듈
NVIDIA Jetson TX2의 J17 직렬통신 모듈은 `/sys/class/tty/ttyTHS2`에서 접속할 수 있다. 그러나 본 파일은 카메라 모듈과도 관계가 있으므로 제대로 작동이 되지 않으면 카메라 모듈을 제거하고 시도해 보도록 한다.
> 참조: *NVIDIA 포럼 - [tx2-uarts](https://devtalk.nvidia.com/default/topic/1001264/jetson-tx2/tx2-uarts/)*

```shell
sudo su
echo (value) > /dev/ttyTHS2
```

# RPLIDAR_ROS
ROS(Robot Operating System)은 로봇과 같은 다양한 기계적 장치를 제어하는데 사용되는 미들웨어(middleware)이다.

## ROS 설치
본 설치의 원본 가이드라인은 JetPack 4.2을 기준으로 설명하였으나, JetPack 4.2.2에도 정상적으로 작동되는 것을 확인하였다. Jetson TX2를 위한 설치는 eLinux.org라는 임베디드 시스템을 위한 리눅스 라이브러리나 프레임워크, 그리고 설치를 위한 요구사항 및 설치방법을 알려주는 사이트에서 확인할 수 있다. Jetson TX2에 대한 내용은 [Jetson Zoo](https://elinux.org/Jetson_Zoo#ROS)라는 문서에서 확인할 수 있다.

아래의 코드는 eLinux.org에서 제공하는 JetPack 4.2에서의 Melodic 버전의 ROS 설치 절차이다.
```bash
# Ubuntu의 모든 패키지 리포지토리 활성화:
$ sudo apt-add-repository universe
$ sudo apt-add-repository multiverse
$ sudo apt-add-repository restricted

# apt 소스에 ROS 리포지토리 추가.
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

# 기본 ROS 및 rviz(GUI 제공 패키지) 설치.
$ sudo apt-get update
$ sudo apt-get install ros-melodic-ros-base
$ sudo apt install ros-melodic-rviz

# ROS 환경을 자동적으로 불러오도록 .bashrc에 항목 추가.
$ sudo sh -c 'echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc'
$ source ~/.bashrc
```

기본 ROS 안에는 ROS 패키지와 `catkin_make` 명령어를 위한 빌드 패키지, 그리고 통신 라이브러리만을 포함한다. RPLidar A1는 2D 맵핑을 하는 센서이므로 시각적 정보를 제공하는 rviz 패키지도 필요한 것이다. 만일 추가로 설치해야 할 ROS 패키지를 찾으려면 그 목록은 `apt search ros-melodic`로 확인할 수 있다.

위의 절차를 마쳤으면 ROS에 사용되는 패키지들을 빌드하는데 핵심요소가 되는 `catkin_make` 명령어가 정상적으로 작동한다. 

## RPLidar A1 패키지 설치

추가 패키지가 없는 기본 ROS만 설치하였으므로 RPLidar A1 센서를 구동하기 위해서는 추가적 패키지가 필요하다. 비록 apt 소스를 통해서 설치 가능한 패키지를 확인하면 `ros-melodic-rplidar-ros`가 존재하지만, RPLidar 웹사이트에서는 GitHub의 [robopeak/rplidar_ros](https://github.com/robopeak/rplidar_ros)에 있는 소스코드로 설치하기를 권장한다.

패키지 설치를 위한 빌드 전에 우선 catkin 작업공간을 생성해야 하는데, 반드시 아래와 같이 생성해야 한다:
```bash
$ mkdir -p ~/catkin_ws/src
```

기본적으로 설정된 `catkin_make`는 `~/catkin_ws/`에서만 작동을 하게 되어있다. GitHub에서 가져온 소스코드들은 모두 `~/catkin_ws/src` 안에 들어가야한다. 그러므로 GitHub 소스코드는 다음과 같이 넣어준다.
```bash
$ cd ~/catkin_ws/src
$ git clone https://github.com/robopeak/rplidar_ros
```

소스 공간에 들어있는 패키지들을 빌드하기 위해서는 catkin 작업공간으로 돌아가 빌드 명령어를 실행한다.
```bash
$ cd ~/catkin_ws
$ catkin_make
```

명령어 `catkin_make`가 구체적으로 어떻게 동작되는지 [여기](http://wiki.ros.org/catkin/commands/catkin_make) 문서에서 확인할 수 있다. 요약하자면, 두 개의 명령어 `cmake`와 `make`를 하나의 명령어로 통합시킨 것으로 볼 수 있다. rplidar_ros를 빌드하였으면 결과적으로 rplidarNode 및 rplidarNodeClient를 빌드하였다고 나타난다.

본 명령어로 두 개의 경로가 생성된다: 빌드공간 `build` 그리고 개발공간 `devel`이 작업공간에 나타난다. CMake를 해보았으면 알 수 있듯이 빌드공간은 소스공간에 있던 패키지들이 빌드된 곳으로, 아직 완성된 패키지가 아니다. 반면 개발공간은 실제로 실행 가능한 패키지가 들어있으나 소스공간에 들어있는 소스코드에 의존한다. 그러므로 소스코드가 변경되면 개발공간의 패키지도 영향을 받게 된다.

CMake에서도 빌드 이후에 `make install`이란 명령어로 시스템에 설치를 한다. catkin도 마찬가지로 시스템 설치가 필요한데, 이는 아래 명령어를 입력하여 진행한다.
```bash
$ cd ~/catkin_ws
$ catkin_make install
```

이는 작업공간에 `install`이란 설치공간을 생성한다. 설치공간도 실행 가능한 패키지가 들어있는 곳이지만, 개발공간과 달리 소스코드에 의존하지 않는 완전히 독립적으로 실행되는 완성품 패키지이다.

최종적으로 `rplidar_ros` 패키지를 사용하려면 기존의 ROS 환경에 패키지 환경을 불러와야 한다. 패키지 환경은 두 경로에서 찾을 수 있는데, 바로 `devel` 개발공간과 `install` 설치공간에 있는 `setup.bash`이다. 하지만 두 파일은 불러오는 패키지가 다르므로 경우에 따라 불러와야 한다. 만일 아직 개발 중이나 시험용으로 사용하기 위해서는 개발환경의 파일을 가져오면 된다.

```bash
$ source ~/catkin_ws/devel/setup.bash
```

반대로 완제품에 적용에는 `source ~/catkin_ws/install/setup.bash`로 설치공간의 환경설정을 불러오면 된다. RPLidar로 여러가지 실험하는 개발자들은 개발공간의 파일을 ROS 환경에 얹어쓰도록(overlay) 한다. 다만, 환경설정을 얹히기는 터미널에 극한되므로 새 터미널에서는 다시 명령어를 입력해주어야 한다.

## RPLidar A1 접속

위의 절차를 따랐으면 RPLidar A1은 이제 정상적으로 작동한다. 그러나 직렬통신 문제로 RPLidar의 센서 정보를 받아낼 수가 없어 에러가 나타난다. 이에 대한 해결책은 [여기](https://github.com/robopeak/rplidar_ros/wiki)에서 확인할 수 있으며, 궁극적으로 직렬통신 권한 문제로 발생한 문제이다.

RPLidar A1을 USB를 통해 컴퓨터에 연결을 한 다음, 아래의 명령어를 입력한다. 그러면 최소한 다음과 같은 결과가 나타날 것이다.
```bash
$ ls -l /dev |grep ttyUSB
crw-rw----  1 root  dialout 188,   0 Sep 20 00:13 ttyUSB0
```

문제가 되는 부분은 바로 RPLidar가 연결된 `ttyUSB0`가 관리자에게만 읽기 및 쓰기 권한이 부여되어 있어 RPLidar의 정보를 그 외의 일반 사용자로써 받아들일 수 없는 것이다. 이를 해결하기 위해 아래의 명령어로 직렬통신 접속 권한을 변경한다.
```bash
$ sudo chmod 666 /dev/ttyUSB0
```

RPLidar A1(노드)이 실행되는 것을 시각적으로 확인하기 위해서는 아래의 명령어를 입력한다.
```bash
$ roslaunch rplidar_ros view_rplidar.launch
```

만일 RPLidar A1 노드를 실행시키고 이에 대한 극좌표계 값을 클라이언트에서 보고 싶으면 아래의 명령어들을 입력한다.
```bash
$ roslaunch rplidar_ros rplidar.launch
$ rosrun rplidar_ros rplidarNodeClient
```

## RPLidar SDK

RPLidar SDK는 RPLidar 센서를 C++로 프로그래밍 할 수 있도록 하는 소프트웨어 개발 키트(software development kit)이다. 위의 예시는 RPLidar 센서의 측정값만 터미널로 확인하였으나, SDK를 이용하여 측정값을 원하는 형식으로 직접 가공/처리할 수 있다. 직접 프로그래밍에 활용하여 컴파일하기 위해서는 두 가지의 요구사항이 있다: RPLidar와 관련된 함수를 불러올 (1) 헤더 파일, 그리고 이들을 컴파일하는데 필요한 (2) 라이브러리이다.

SDK는 `catkin_make`를 사용하지 않으므로 아무데서나 빌드할 수 있다. 본 문서에서는 `~/RPLidar`라는 경로에서 진행한다.
```bash
$ mkdir ~/RPLidar
$ cd ~/RPLidar
$ git clone https://github.com/Slamtec/rplidar_sdk
```

GitHub로 다운로드 한 리포지토리 자체에 헤더 파일이 존재하지만, 라이브러리는 시스템 환경에 따라 다르므로 따로 생생해야 한다. 이는 리포지토리를 간단히 Make 빌드만으로도 충분하다.
```bash
$ cd ~/RPLidar/rplidar_sdk/sdk
$ make
```

최종적으로 헤더 파일들과 정적 라이브러리 `.a`는 아래와 같은 경로에 위치한다:
```
// 헤더 파일 경로
/home/<username>/RPLidar/rplidar_sdk/sdk/sdk/include
/home/<username>/RPLidar/rplidar_sdk/sdk/sdk/src

// 라이브러리 경로
/home/<username>/RPLidar/rplidar_sdk/sdk/output/Linux/Release
```

그 외에도 `libpthread.a` 라이브러리도 함께 필요할 수 있으며, 컴파일하여 사용하기 위해서는 `g++`에 추가할 옵션들이 여러가지 생긴다. Visual Studio Code의 기준으로 다음과 같이 설정하였으며, 이 설정을 그대로 사용하려는 분들은 `gko95`를 해당 사용자 이름으로 변경하도록 한다. 또한 [OpenCV 4.0.1](../ko.kgu_graduation_software/#라이브러리-opencv-401)과 [Dlib 19.17](../ko.kgu_graduation_software/#라이브러리-dlib-1917) 라이브러리가 포함되어 있으므로, 이를 설치하지 않았으면 해당하는 줄은 삭제하여도 된다.

**c_cpp_properties.json**
```json
{
    "configurations": [
        {
            "name": "Linux",
            "includePath": [
                "${workspaceFolder}/**",
                "/usr/local/include/opencv4",
                "/home/gko95/RPLidar/rplidar_sdk/sdk/sdk/include",
                "/home/gko95/RPLidar/rplidar_sdk/sdk/sdk/src"
            ],
            "defines": [],
            "compilerPath": "/usr/bin/gcc",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "clang-x64"
        }
    ],
    "version": 4
}
```

**task.json**
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "shell",
            "label": "g++ build active file",
            "command": "/usr/bin/g++",
            "args": [
                "-g",
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}",
                "$(pkg-config", "opencv4", "--cflags", "--libs)",
                "$(pkg-config", "dlib-1", "--cflags", "--libs)",
                "-I/home/gko95/RPLidar/rplidar_sdk/sdk/sdk/include",
                "-I/home/gko95/RPLidar/rplidar_sdk/sdk/sdk/src",
                "-L/home/gko95/RPLidar/rplidar_sdk/sdk/output/Linux/Release/",
                "-lrplidar_sdk", "-lpthread"
            ],
            "options": {
                "cwd": "/usr/bin"
            },
            "problemMatcher": [
                "$gcc"
            ]
        }
    ]
}
```

설정을 모두 마쳤으면 본격적으로 `#include <rplidar.h>`를 사용할 수 있다.
