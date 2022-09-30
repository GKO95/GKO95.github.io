---
layout: docs
language: ko
title: "KGU 졸업작품 내용정리: 소프트웨어"
tags: OpenCV YOLOv3 CUDA Dlib
date: 2019-11-14 00:00:00
notice: false
toc: true
---
본 내용은 2019년 경기대학교 졸업작품 및 제17회 임베디드 소프트웨어 경진대회 등에 출전한 *[DNN 모델을 활용한 사람추적 무인자율주행차량](https://github.com/moonyeol/HumanTracking_UV)* 프로젝트에서 본인이 작성한 소프트웨어 관련 문서를 보관 목적으로 [원본](https://github.com/moonyeol/HumanTracking_UV/wiki/소프트웨어-설치-가이드라인)으로부터 발췌한 문서입니다.

# 라이브러리: CUDA 10.0

본 내용은 CUDA 10.0을 설치, 검증, 그리고 제거하는 정석 절차를 설명한다.

## CUDA 10.0 설치

CUDA를 설치하기 전에 전체적으로 리눅스 시스템에 설정해 주어야 할 것이 있다: 바로 BIOS에서 Secure Boot를 비활성화시키는 거다. Secure Boot가 그래픽 카드에 접속하는데 필요한 커널에 제약을 걸어버리기 때문에 정상적인 사용을 위해서는 Secure Boot를 비활성화 해야 한다.

> *참조: [NVIDIA Forum: NVIDIA-SMI has failed because it couldn't communicate with the NVIDIA driver](https://devtalk.nvidia.com/default/topic/1045353/linux/nvidia-smi-has-failed-because-it-couldn-t-communicate-with-the-nvidia-driver/)*

Secure Boot 비활성화 이후, CUDA 10.0을 설치하기 전에 학습에 사용할 컴퓨터가 CUDA를 사용할 수 있는 여건이 되는지 확인해야 한다. 점검 사항은 GPU의 CUDA, 지원가능 리눅스 체계, GCC 설치 여부, 그리고 커널 버전 호환성을 확인한다. 본 내용은 [*NVIDIA CUDA Installation Guide for Linux (리눅스를 위한 NVIDIA CUDA 사전설치 점검사항)*](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#pre-installation-actions)을 참조하였다.

1. **GPU의 CUDA 사용가능 여부 확인:**

   아래의 코드는 현재 리눅스 체계에서 인식한 GPU를 확인하는 터미널 명령어이지만 CUDA를 확인하지 않는다.

   ```bash
   $ lspci | grep -i nvidia
   ```

   CUDA 사용가능 여부 확인은 NVIDIA에서 제공하는 [*CUDA 사용가능한 GPU 목록*](https://developer.nvidia.com/cuda-gpus)을 확인해야 한다. 터미널에서 인식한 GPU가 목록에 없을 경우, 이는 컴퓨터가 CUDA를 사용할 수 없는 GPU를 탑재하였음을 의미한다. CUDA를 사용하기 위해서는 반드시 목록에 명시된 GPU를 사용해야 한다.

   본 프로젝트에서 사용한 GPU는 GeForce GTX 1060 Ti 및 GeForce GTX 1070을 사용하였다.

2. **지원가능 리눅스 체계 여부 확인:**

   아래의 코드는 현재 리눅스가 어떠한 운영체계 기반 하에 돌아가고 있는지를 확인한다.

   ```bash
   $ uname -m && cat /etc/*release
   ```

   CUDA를 사용하기 위해서는 적어도 운영체계는 64비트이어야 한다. 지원 가능한 리눅스 운영체계 내용은 [*시스템 요구사항*](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#system-requirements) 내용을 참고하도록 한다.

   본 프로젝트에서 사용한 리눅스 체계는 Ubuntu 18.04.02 LTS를 사용하였다.

3. **시스템 GCC 설치 여부 확인:**

   아래의 코드는 현재 리눅스 시스템에 개발에 사용될 GCC가 설치되었는지 확인한다.

   ```bash
   $ gcc -v
   ```

   GCC가 설치되지 않았으면 개발에 필요한 패키지인 `gcc` 및 `g++` 그리고 `make` 등을 설치하는 아래의 명령어를 입력한다.
   
   ```bash
   $ sudo apt install build-essential
   ```
   
   만일 GCC만 설치하기를 원하면 `sudo apt-get install gcc` 명령어를 입력하여 GCC만 설치할 수 있다.
   
4. **리눅스 커널의 버전 호환성 확인:**

   컴퓨터의 하드웨어와 직접적으로 상호작용을 하는 가장 작은 단위의 업데이트 가능한 소프트웨어를 커널(kernel)이라고 부른다. 이 커널이 제대로 작동하기 위해서는 동일한 버전의 커널 헤더 (kernel-header) 및 커널 개발 패키지(kernel development package; kernel-devel)가 필요하다.

   커널 헤더는 리눅스 커널 전용의 C 헤더 파일을 담고 있으며, 커널을 컴파일하는데 시스템 환경 정의 및 커널과 상호작용하는 코드에 다양한 함수를 제공한다. 커널 개발 피키지는 커널을 컴파일하고 커널의 일부로써 실행될 파일(예. 커널 모듈)을 담는 파일 패키지이다. 즉, 커널은 NVIDIA GPU 하드웨어를 정상적으로 실행하기 위해서 반드시 확인해야 하는 사항이다. 잘못된 커널 버전의 설치는 GPU의 정상적 실행을 보장하지 않는다.

   현재 리눅스에서 사용 중인 커널은 아래의 명령어로 확인할 수 있다.

   ```bash
   $ uname -r 
   ```

   이를 토대로 커널 버전에 맞는 커널 헤더 및 커널 개발 패키지를 다음 명령어를 통해 설치한다.

   ```bash
   $ sudo apt-get install linux-headers-$(uname -r)
   ```

위의 점검사항이 모두 확인되었으며 CUDA 설치가 가능하다고 판단될 시, [*CUDA Toolkit 10.0 Archive*](https://developer.nvidia.com/cuda-10.0-download-archive) 웹페이지에서 안내하는 절차를 그대로 이행한다. 아래는 .deb 확장장 (network) 방식을 채택하여 설치하였으며, .run 확장자는 다루지 않았다.

```bash
$ sudo dpkg -i cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
$ sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
$ sudo apt-get update
$ sudo apt-get install cuda-10-0
```

.deb 확장자 파일로 설치를 하되 라이브러리 패키지를 CUDA 10.0으로 유지시키기 위해서는 마지막 4단계에서 `sudo apt-get install cuda-10-0`이라고 명시를 해야한다. 이를 명시하지 않을 경우 자동적으로 CUDA가 새 버전 출시 시 업그레이드되는 불상사를 격게 된다. 

위의 절차를 정상적으로 마쳤으면 CUDA 10.0 Toolkit 및 그래픽 드라이버가 설치되었을 거다. CUDA 10.0이 제대로 설치되었는지 확인하기 위해서는 아래의 명령어로 확인한다:

```bash
$ cat /usr/local/cuda/version.txt
```

마지막 4단계에서 `cuda-10-0`이라고 명시를 하였으면 `CUDA VERSION 10.0.130`과 같이 CUDA 10.0이라고 나타나지만, 라이브러리를 명시하지 않았으면 더 높은 버전의 CUDA가 설치되었을 거다.

POWER9 문서 내용은 무시하면 되며, 이에 대한 설명은 아래와 같다.

> NVIDIA에서 제공한 CUDA 설치 문서에서는 POWER9은 설치 이후에 반드시 점검해야 하는 사항이라고 설명한다. 심지어 POWER9 요소를 처리하지 않을 시 CUDA 드라이버는 실행되지 않는다고 하지만, POWER9는 간단히 설명하자면 IBM에서 제작한 고성능 *서버용* CPU이다. 심지어 대부분 사용자들은 자신들이 사용하는 CPU가 POWER9인지도 모르는 상황에서 NVIDIA가 거의 포괄적으로 일반화하여 반드시 작업하라거 설명한 것은 NVIDIA의 문서작성에 문제가 있음을 지적한다.
>
> *참조: [NVIDIA Forum: Power9 for Ubuntu16.04](https://devtalk.nvidia.com/default/topic/1028338/power9-for-ubuntu16-04/)*

## CUDA 10.0 검증

검증을 위해 작업 중인 현재 터미널 창에 일시적 환경변수를 설정한다. 명령어 export를 통해 현재 터미널 창에서만 일시적 환경변수를 지정해 주고 이후 해당 터미널에서 실행되는 모든 프로세스에서도 설정한 환경변수를 바로 사용할 수 있도록 한다. 즉, 실수로 터미널 창을 닫았다면 아래의 명령어를 다시 입력해 주어야 한다는 의미이다.

```bash
$ export PATH=/usr/local/cuda-10.0/bin${PATH:+:${PATH}}
```

CUDA Toolkit이 제대로 설치되었는지를 버전을 확인하여 알아볼 수 있다.

```bash
$ nvcc -V
```

위의 명령어가 작동하지 않으면 방금 전에 언급한 환경변수 설정을 잘못한 것이다. `echo $PATH` 명령어를 통해 경로를 제대로 설정하였는지 확인한다.

CUDA Toolkit를 설치하는 과정에서 그래픽 드라이버도 같이 설치된다. 그래픽 드라이버 확인은 아래의 명령어로 확인할 수 있다.

```bash
$ cat /proc/driver/nvidia/version
```

위의 명령어가 작동하지 않으면 리눅스를 재부팅을 해본다. 그래도 여전히 문제가 생기면 Secure Boot가 활성화되어 있음을 의심해야 한다. BIOS에 들어가 제대로 꺼져있는지 확인하며, CUDA 및 그래픽 드라이버 재설치는 필요없다.

CUDA 및 그래픽 드라이버 버전을 확인한 것으로 설치가 제대로 되었으며, 컴퓨터에서 정상 작동한다는 보장을 할 수 없다. Ubuntu 18.04.02 LTS 기준으로 CUDA를 설치하면 `/usr/local/cuda-10.0/samples`에 CUDA 샘플을 돌릴 수 있는 파일들이 존재한다. 이들을 `~/NVIDIA_CUDA-10.0_Samples` 경로로 복사하여 빌드를 한다.

```bash
$ mkdir ~/NVIDIA_CUDA-10.0_Samples
$ cd ~/NVIDIA_CUDA-10.0_Samples
$ cp -r /usr/local/cuda-10.0/samples/* .
$ make
```

빌드를 완료했으면 `./bin/x86_64/linux/release/deviceQuery`를 실행시킨다. 아래는 실행 시 나타난 하나의 예제이다.

```
./deviceQuery Starting...

 CUDA Device Query (Runtime API) version (CUDART static linking)

Detected 1 CUDA Capable device(s)

Device 0: "GeForce GTX 1070"
  CUDA Driver Version / Runtime Version          10.1 / 10.0
  CUDA Capability Major/Minor version number:    6.1
  Total amount of global memory:                 8112 MBytes (8505524224 bytes)
  (15) Multiprocessors, (128) CUDA Cores/MP:     1920 CUDA Cores
  GPU Max Clock rate:                            1683 MHz (1.68 GHz)
  Memory Clock rate:                             4004 Mhz
  Memory Bus Width:                              256-bit
  L2 Cache Size:                                 2097152 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)
  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 65536
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 2 copy engine(s)
  Run time limit on kernels:                     Yes
  Integrated GPU sharing Host Memory:            No
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            Yes
  Supports Cooperative Kernel Launch:            Yes
  Supports MultiDevice Co-op Kernel Launch:      Yes
  Device PCI Domain ID / Bus ID / location ID:   0 / 1 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >

deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.1, CUDA Runtime Version = 10.0, NumDevs = 1
Result = PASS
```

본 내용에서 확인해야 할 내용은 세 가지이다:

1. CUDA 사용 가능한 장치 탐색여부: `Detected 1 CUDA Capable device(s)`
2. 시스템에서 사용하고 있는 장치가 맞는지 확인 여부: `Device 0: "GeForce GTX 1070"`
3. 최종적 샘플 시험 결과: `Result = PASS`

이어서 동일한 경로에서 시스템과 그래픽 장치간 통신이 원활한지 `./bin/x86_64/linux/release/bandwidthTest`를 통해 대역폭 시험을 실행한다. 아래는 위와 동일한 시스템 및 그래픽 장치에서의 대역폭 시험 결과를 보여준다.

```
[CUDA Bandwidth Test] - Starting...
Running on...

 Device 0: GeForce GTX 1070
 Quick Mode

 Host to Device Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(MB/s)
   33554432			12486.8

 Device to Host Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(MB/s)
   33554432			12776.3

 Device to Device Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(MB/s)
   33554432			192464.5

Result = PASS

NOTE: The CUDA Samples are not meant for performance measurements. Results may vary when GPU Boost is enabled.
```

본 내용에서 확인해야 할 내용은 두 가지이다:

1. 호스트 시스템 및 장치들의 그래픽 장치와의 통신으로 측정값이 나왔는지 확인 여부.
2. 최종적 대역폭 시험 결과: `Result = PASS`

만일 대역폭 통신 시험이 실패하였다면 탑재한 그래픽 장치가 CUDA 사용가능한 GPU가 아니거나 혹은 CUDA 설치가 제대로 되었는지 다시 확인할 필요가 있다.

## CUDA 10.0 제거

CUDA를 정상적인 절차를 거쳐 제거하기 위해서는 Toolkit 및 드라이버를 모두 삭제해야 한다. 아래는 .deb 확장자 파일로 설치한 경우 각각 CUDA 10.0 Toolkit 및 드라이버를 삭제하는 명령어이다.

```bash
$ sudo apt-get --purge remove "*cublas*" "cuda*"
$ sudo apt-get --purge remove "*nvidia*"
```

.run 확장자로 설치하였을 경우는 삭제 방법이 다르므로 문서를 확인하도록 한다.

# **라이브러리: OpenCV 4.0.1**

본 내용은 OpenCV 4.0.1을 설치, 검증, 그리고 제거하는 정석 절차를 설명한다.

## OpenCV 4.0.1 설치


OpenCV 4.0.1에 대한 설치 방법은 [*OpenCV 웹사이트*](http://docs.opencv.org/4.0.1/d7/d9f/tutorial_linux_install.html)에서도 명시되어 있으나, 본 문서에서는 각 절차에 대한 설명과 해석을 담아 이해를 도울 것이다. 설치는 Ubuntu 10.04을 통해서만 검증되었으므로, Ubuntu 18.04 LTS에도 작동할 수 있으나 일부 설치 과정에서는 문제가 생길 수가 있다. 그러므로 본 문서는 설치 중 발생할 수 있는 오류에 대한 대안과 주의사항을 알려주기 위해 작성되었다.

JetPack에서 기본적으로 설치되는 OpenCV를 제거한다.
```bash
sudo apt-get purge libopencv*
```

OpenCV 4.0.1를 설치하기 위해 필요한 라이브러리 및 패키지를 아래의 명령어를 통해 설치한다.
```bash
$ sudo apt-get install build-essential
$ sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
$ sudo apt-get install python-dev python3-dev python-numpy python3-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22-dev
```

위의 명령어에서 설치한 것은 순서대로 다음과 같다:

1. 컴파일에 필요한 `gcc` 및 `make` 명령어를 사용할 수 있도록 하는 패키지를 설치.
2. OpenCV를 설치하는데 직접적으로 필요한 라이브러리 및 패키지 설치.
3. 그 외에 필수요소가 아닌 선택적 설치 요소이며 OpenCV에 사용하는데 유용한 패키지 설치.

위의 설치 패키지 목록에는 OpenCV 웹사이트에서 언급하지 않은 `python3-dev` 및 `python3-numpy`가 추가되었으며, 이 패키지들이 있어야 OpenCV 설치를 Python3과 연동시켜 사용할 수 있다. 이 중에서 JasPer 관련 패키지 중 하나인 `libjasper-dev`는 비록 선택적 설치 요소로 되어 있으나, Ubuntu 17.0 이상부터 `sudo apt-get install libjasper`로 설치가 불가해졌다.

```
E: Unable to locate package libjasper-dev
```
해당 JasPer 패키지를 설치하기 위해서는 이전 Ubuntu 버전의 패키지를 통해 설치하는 우회 방법을 적용할 수 있다.
```bash
$ sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"
$ sudo apt update
$ sudo apt install libjasper1 libjasper-dev
```

> *참조: GitHub: OpenCV Issue [#8622](https://github.com/opencv/opencv/issues/8622)*

본격적으로 설치를 진행하기 전에 OpenCV 소스코드를 처리할 개별의 작업폴더를 만들기를 권장한다. 본 예시에서는 작업폴더를 `OpenCV`라고 지정하였다. 그 안에 `wget` 명령어를 통해 OpenCV 설치에 필요한 소스파일들을 한꺼번에 다운로드할 수 있다.

```bash
$ mkdir ~/OpenCV
$ cd ~/OpenCV
$ wget -O opencv-4.0.1.zip https://github.com/opencv/opencv/archive/4.0.1.zip
$ wget -O opencv_contrib-4.0.1.zip https://github.com/opencv/opencv_contrib/archive/4.0.1.zip
$ wget -O opencv_extra-4.0.1.zip https://github.com/opencv/opencv_extra/archive/4.0.1.zip
$ unzip '*.zip'
```

다운로드한 파일들은 다음과 같다.

* `opencv-4.0.1`: OpenCV 4.0.1를 설치하는 주요 소스코드
* `opencv_contrib-4.0.1`: OpenCV 4.0.1에 추가적인 모듈을 제공하는 부가 소스코드; **CUDA 활성화에 반드시 필요(cudev 모듈 포함)!**
* `opencv_extra-4.0.1`: OpenCV 4.0.1 설치 검증용 파일

OpenCV는 github.com에 직접 들어가 소스코드를 받을 수 있으나, 아카이브에 들어가지 않는 이상 주어진 소스코드는 지속적으로 업데이트되어 현재는 4.1.0 이상의 버전을 제공한다. 인터넷 브라우저에 직접 들어가서 다운로드 받기를 희망하면 [*OpenCV Release*](https://opencv.org/releases/)에 들어가서 소스코드를 직접 다운로드 받을 수 있다.

OpenCV 주요 소스코드 `opencv-4.0.1` 폴더 안에 설치에 필요한 Makefile 및 프로젝트 파일을 담을 임시 폴더 `build`를 생성하고 이동한다.

```bash
$ mkdir ~/OpenCV/opencv-4.0.1/build
$ cd ~/OpenCV/opencv-4.0.1/build
```

빌드의 첫 번째 단계로 `cmake`를 통해 Makefile 생성한다.

> CUDA 10.0 샘플 설치 과정에서는 Makefile이 있어 `make` 명령어를 통해 컴파일하여 바로 빌드(build; 소스코드를 컴퓨터에서 실행할 수 있는 독립적 소프트웨어로 변환시키는 절차 혹은 그 결과물)를 생성하였으나, 이와 달리 OpenCV는 우선 `cmake` 명령어를 통해 빌드 환경을 구축하고 빌드를 생성한다.
>
> 이렇게 CMake이 사용되는 빌드에는 두 단계를 거쳐서 빌드가 이루어지는데, 이에 대한 장점은 이름에서 힌트를 얻을 수 있듯이 크로스-플랫폼 특징이다(**C**ross-platform **Make**). 일반적인 빌드에 필요한 Makefile은 시스템 아키텍처(MS 윈도우, 애플, 안드로이드 등)에 의존하므로 서로 다른 플랫폼에서는 마찬가지로 서로 다른 Makefile이 필요하다. 그러나 CMake가 있으면 시스템 아키텍처와 설정한 시스템 환경을 기반으로 적합한 Makefile을 생성한다.

`cmake` 명령어로 Makefile을 만드는데 설정할 시스템 환경은 다음과 같이 한다.

```bash
$ cmake -D CMAKE_BUILD_TYPE=Release \
-D CMAKE_INSTALL_PREFIX=/usr/local \
-D OPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.0.1/modules/ \
-D OPENCV_GENERATE_PKGCONFIG=ON \
-D WITH_CUDA=ON \
-D CUDA_FAST_MATH=ON \
-D BUILD_opencv_cudacodec=OFF \
-D BUILD_JAVA=OFF \
-D BUILD_PERF_TESTS=OFF \
-D BUILD_TESTS=OFF \
-D PYTHON_DEFAULT_EXECUTABLE=/usr/bin/python3 \
..
```

CMake가 빈 폴더에 빌드를 시작하면 우선적으로 `CMakeCache.txt`를 생성한다. 이 파일 안에 `-D` 옵션으로 입력한 설정 캐시(cache)들이 들어가며 CMake 프로젝트 생성에 기여하게 된다 (예. 환경변수 등). 빌드 옵션들은 `CMakeList.txt`에서 확인할 수 있다.

빌드 캐시 중에서 `-D OPENCV_GENERATE_PKGCONFIG`는 사용이 권장되지 않는 캐시이며 곧 사용되지 않을 캐시이기도 한다. 일부 사용자들은 해당 캐시를 켜야만 OpenCV를 빌드할 수 있다고 하지만, 이는 사실이 아니다. 이에 대한 내용은 *OpenCV 4.0.1 실행 - 실행법: C++*에서 자세히 다뤄질 거다. 그러나 해당 캐시를 켜놓은 이유는 YOLOv3와 관련이 있다.

또한 `BUILD_opencv_cudacodec=OFF` 캐시는 반드시 해제하도록 한다: `nvcuvid.h` 헤더로부터 발생된 오류이며, 해당 헤더는 더이상 사용되지 않는다. 그러므로 빌드가 불가능한 모듈이기에 빌드 선택지에서 제외해야 한다.

터미널에서 명령어를 입력하는 방법 이외에 Ubuntu에서는 CMake를 GUI를 통해 손쉽게 캐시를 선택하고 해제할 수 있도록 Ubuntu Software에서 제공한다. CMake GUI로 빌드를 할 시에는 다음과 같이 설정한다.

* `Where is the source code:` -> `/home/<username>/OpenCV/opencv-4.0.1`
* `Where to build the binarries:` -> `/home/<username>/OpenCV/opencv-4.0.1/build`

`Configure` 버튼을 누르면 Makefile 형식을 지정할 수 있으며, 일반적인 Unix Makefiles로 선택하여 진행한다. 프로그램은 빌드 디버깅으로 필요한대로 캐시 설정을 바꿔준다. 만일 `PYTHON_DEFAULT_EXECUTABLE`과 같이 목록에 없는 캐시는 `Add Entry` 버튼을 눌러 직접 추가한다. Makefile을 본격적으로 생성할 준비가 되었으면 `Generate` 버튼을 눌러 생성한다.

CMake를 통해 적합한 Makefile을 생성하였으면 컴파일을 시작한다. Makefile로 빌드를 생성하는 방법은 CUDA Toolkit 10.0 샘플 설치와 동일한 방법으로 `make` 명령어를 사용하면 되지만, OpenCV는 빌드를 여러 개의 스레드로 나누어 작업하는 것을 권장한다. 분할 작업으로 빠른 컴파일 처리를 위해 본 컴퓨터의 CPU 코어 개수는 아래의 명령어로 확인할 수 있다.

```bash
$ nproc --all
```

본 컴퓨터는 코어 개수가 8개 이상으로 나왔으므로 작업을 7개로 분할시켜 컴파일을 진행한다.

```bash
$ cd ~/OpenCV/opencv-4.0.1/build
$ make -j7
```

컴파일 도중에 CUDA와 관련되어 다음과 같이 오류가 흔히 나타나는 것을 확인할 수 있다.

```shell
In file included from /home/gihwanko/OpenCV/opencv-4.0.1/modules/core/include/opencv2/core/cuda/functional.hpp:50:0,
                 from /home/gihwanko/OpenCV/opencv_contrib-4.0.1/modules/cudalegacy/src/cuda/fgd.cu:50:
/usr/local/cuda/include/device_functions.h:54:2: warning: #warning "device_functions.h is an internal header file and must not be used directly.  This file will be removed in a future CUDA release.  Please use cuda_runtime_api.h or cuda_runtime.h instead." [-Wcpp]
 #warning "device_functions.h is an internal header file and must not be used directly.  This file will be removed in a future CUDA release.  Please use cuda_runtime_api.h or cuda_runtime.h instead."
  ^~~~~~~
```

본 내용을 해석하면 이는 다행이 오류가 아닌 경고문이다. 현재 사용되고 있는 모듈들은 `device_functions.h` 헤더를 사용하고 있는데 이는 차후 CUDA 버전에는 사용되지 않을 것이므로 `cuda_runtime_api.h` 혹은 `cuda_runtime.h` 헤더를 사용할 것은 당부하는 메시지이다. 아직은 `device_functions.h`가 CUDA 디렉토리에 존재하여 오류가 아닌 경고문에 그친거다.

컴파일은 OpenCV에 사용되는 수많은 라이브러리들이 `~/OpenCV/opencv-4.0.1/build`에 생성되었으나 아직 리눅스에 적용 가능하도록 설치되지 않았다. 아마 `cmake_install.cmake`가 라이브러리 설치를 담당하는 파일로 추정되며, 캐시에서 설정하였던 `/usr/local` 경로로 라이브러리들이 설치된다.

```bash
$ sudo make install
```

라이브러리 설치 경로가 현재 작업 중이 폴더와 전혀 별개인 것을 보면 알 수 있듯이, `build` 파일 전체적으로는 아무런 수정사항이 없다.

### NVIDIA Jetson Nano에서 OpenCV 4 설치

Jetson Nano does not require to install NVIDIA GPU driver as those are for PCIe graphics driver. Jetson has GPU already integrated as a part of Tegra, thus does not need GPU driver such as "nvidia-driver-430".

Refer to the link [here](https://devtalk.nvidia.com/default/topic/1054949/process-to-install-opencv-4-1-on-nano/).

### CMake 캐시 목록

아래는 OpenCV 4.0.1의 CMake 빌드 옵션에 대한 설명이며, 전부는 아니지만 눈여겨 볼 필요가 있는 몇 가지를 다룬다.


|            환경설정             | 설명                                                         |
| :-----------------------------: | ------------------------------------------------------------ |
|     **`CMAKE_BUILD_TYPE`**      | `Release` 타입: CMake로 시스템 아키텍처에 따라 최대한 최적화하여 정식 빌드 파일들을 생성한다.<br />`Debug` 타입: CMake로 정식 빌드를 만들지 않고, 최적화 없이 빌드를 디버깅한다. 프로그래밍에서의 디버깅과 동일한 개념으로 볼 수 있다. |
|   **`CMAKE_INSTALL_PREFIX`**    | 기본 CMake 설치 경로이다 (기본값: `/usr/local`).             |
| **`OPENCV_EXTRA_MODULES_PATH`** | `opencv_contrib` 폴더의 추가모듈 경로를 입력받고 참고하여 빌드를 진행한다. |
| **`OPENCV_GENERATE_PKGCONFIG`** | pkg-config 빌드 도구를 위한 .pc 파일을 생성한다 (기본값: OFF); 사용 비권장. |
|        **`BUILD_DOCS`**         | OpenCV 빌드 규정 문서 생성한다 (기본값: OFF).                |

아래는 영상과 관련된 빌드 옵션이다: V4L (Video4Linux)는 리눅스에서 실시간 영상을 위한 드라이버와 API를 종합적으로 제공한며, FFmpeg는 영상과 오디오, 그리고 그 외의 멀티미디어 파일을 다루는데 사용되는 다양한 소프트웨어 및 라이브러리를 제공한다. Xine은 유닉스-기반 OS (예. 리눅스, 맥OS)를 위한 멀티미디어 플레이어 프로그램이다.

|     환경설정      | 설명                                                      |
| :---------------: | --------------------------------------------------------- |
|  **`WITH_V4L`**   | 빌드 시 V4L (Video4Linux) 지원을 포함시킨다 (기본값: ON). |
| **`WITH_FFMPEG`** | 빌드 시 FFmpeg 지원을 포함시킨다 (기본값: ON).            |
|  **`WITH_XINE`**  | 빌드 시 Xine 지원을 포함시킨다 (기본값: OFF).             |

아래는 그래픽과 관련된 빌드 옵션이다: QT("cute"라고 읽음)란, GUI 및 다양한 플랫폼에서 동작시킬 수 있는 어플리케이션을 개발하는데 사용된다. GTK도 마찬가지로 GUI 개발에 사용되지만, QT는 완성된 프레임워크를 제공한다면 GTK는 GUI Toolkit를 제공한다. 둘 다 GUI를 지원하지만 QT를 설치하지 않았으므로 GTK 설정으로 유지한다. OpenGL(Open Graphic Library)는 2D 및 3D 벡터 그래픽을 렌더링하는데 사용되는 API를 지원하는 라이브러리이며, GPU와 상호작용하여 동작한다. CUDA 지원 빌드 여부도 존재하며, CUDA를 사용하는 본 프로젝트의 경우에는 CUDA와 관련된 모든 빌드 옵션은 켜두기를 권장한다.

|     환경설정      | 설명                                                         |
| :---------------: | ------------------------------------------------------------ |
|   **`WITH_QT`**   | 빌드 시 QT 백엔드 지원을 포함시킨다.                         |
|  **`WITH_GTK`**   | 빌드 시 GTK 지원을 포함시킨다.                               |
| **`WITH_OPENGL`** | 빌드 시 OpenGL(Open Graphic Library) 지원을 포함시킨다.      |
|  **`WITH_CUDA`**  | 빌드 시 NVIDIA CUDA Runtime 지원을 포함시킨다.               |
| **`WITH_CUFFT`**  | 빌드 시 NVIDIA CUDA Fast Fourier Transform (FFT) 라이브러리 지원을 포함시킨다. |
| **`WITH_CUBLAS`** | 빌드 시 NVIDIA CUDA Basic Linear Algebra Subprogram (BLAS) 라이브러리 지원을 포함시킨다. |

다음은 하드웨어 성능과 관련된 빌드 옵션이다: TBB(Threading Building Blocks)란, 멀티코어 프로세서에서 병렬 컴퓨팅을 위해 인텔에서 개발한 C++ 템플릿 라이브러리이다. 즉, 하나의 컴퓨팅을 작은 단위의 작업으로 나누어서 처리할 수 있도록 한다. 인텔에서 개발한 또다른 멀티스레딩 소프트웨어 라이브러리인 IPP(Integrated Performance Primitives)는 멀티미디어 및 데이터 처리 어플리케이션에 특화되었다. IEEE 1394는 고속통신 및 동기식 실시간 데이터 전송을 위한 직렬 통신 인터페이스 기준을 의미한다. 이는 USB 통신과 비교가 되며, 비록 2.0에 비해서는 전송속도가 빠르지만 3.0부터는 USB가 우위를 차지하였다.

|    환경설정     | 설명                                                |
| :-------------: | --------------------------------------------------- |
| **`WITH_TBB`**  | 빌드 시 인텔의 TBB 지원을 포함시킨다 (기본값: OFF). |
| **`WITH_IPP`**  | 빌드 시 인텔의 IPP 지원을 포함시킨다 (기본값: OFF). |
| **`WITH_1394`** | 빌드 시 IEEE 1394 지원을 포함시킨다 (기본값: ON).   |

다음은 OpenCV 설치 후 점검을 위한 빌드 옵션이다.

|           환경설정            | 설명                                                         |
| :---------------------------: | ------------------------------------------------------------ |
|     **`BUILD_EXAMPLES`**      | OpenCV 예시 전체를 설치한다; C, Python, Android (기본값: OFF). |
|   **`INSTALL_C_EXAMPLES`**    | C 언어 기반의 OpenCV 예시 파일들을 함께 설치한다 (기본값: OFF). |
| **`INSTALL_PYTHON_EXAMPLES`** | Python 기반의 OpenCV 예시 파일들을 함께 설치한다 (기본값: OFF). |

명령어의 맨 마지막에 `..`은 상위폴더를 의미한다: 현재 위치한 폴더는 `~/OpenCV/opencv-4.0.1/build`이며 CMakeList.txt 파일은 `~/OpenCV/opencv-4.0.1`에 있기 때문에 상위폴더로 이동한 것이다.

## OpenCV 4.0.1 검증

OpenCV 웹사이트에서는 OpenCV가 제대로 설치되었는지 확인하는 절차를 설명한다. 설치 절차에서 받은 세 개의 파일 중에서 `opencv_extra-4.0.1` 파일이 여기에서 사용된다. 설치 점검을 위해서는 CMake 단계에서 반드시 `BUILD_TEST=ON`으로 옵션을 설정해야 한다. 설정하지 않을 시, `opencv_test_core`이라는 파일이 생성되지 않아 설치 점검이 불가능하다.

설치 점검 전에 사용될 시험데이터들을 환경변수로 불러와야 한다.

```bash
$ export OPENCV_TEST_DATA_PATH=/home/<username>/OpenCV/opencv_extra-4.0.1/testdata
```

환경변수 추가는 `export` 없이도 할 수 있으나 프로세스에 바로 적용되지 않아 시험이 실패한다고 한다.

점검 시험에 필요한 파일 위치는 `opencv-4.0.1/build/bin/opencv_test_core`에 있다.

```bash
$ ./bin/opencv_test_core
```

이 중에서 시험 실패 내용이 `Core_globbing.accuracy`와 연관되었다면 이는 환경변수 설정가 제대로 되지 않은 것이므로 환경변수를 다시 한 번 확인할 필요가 있다.

## OpenCV 4.0.1 실행

설치 검증도 중요하지만, OpenCV는 실질적이면서도 시각적으로 실행되는 것을 확인할 수 있는 유틸리티 프로그램이다. OpenCV를 개발 용도에 맞게 사용할 수 있어야 하며, 본 내용은 기본적인 OpenCV 실행법에 대하여 설명한다. 두 가지의 부문으로 나눌 것이며 전자는 C++, 그리고 후자는 Python3에서의 실행법을 다룬다.

### 실행법: C++

CMake 단계에서 `-D INSTALL_C_EXAMPLES=ON` 옵션을 추가한다.

C++ 언어로 작성된 OpenCV 예제코드는 `OpenCV/opencv-4.0.1/samples/cpp` 내에 들어있으며, 그 중에서 본 문서는 얼굴인식인 `facedetect` 파일을 실행을 목표한다. 그러나 아직 프로그래밍 언어로 작성된 .cpp 파일로 존재하며, 실행 가능한 오브젝트 파일로 컴파일 해야 한다.

컴파일을 하는 대표적인 방법으로는 `gcc` 혹은 `g++`이 있다. 이들은 `build-essential` 설치에 이미 포함되어 있어 별도로 설치할 필요가 없다. GNU Compiler Collection으로, 이들은 여러 프로그래밍 언어를 지원해주는 컴파일러 프로그램으로, 전자는 C 및 C++ 언어 컴파일러라면 후자는 C++ 전용 컴파일러인 차이점이 있다.

```bash
gcc 'pkg-config --cflags --libs <file_name>'
```

`pkg-config`를 사용하면 어떠한 OS나 배포판이든 컴파일을 하는데 필요한 라이브러리 및 링크할 라이브러리들을 바로 가져와 컴파일을 더 쉽게 진행할 수 있다. 이는 각 다른 OS 및 배포판이 컴파일 플래그가 각자 다르다는 점을 고려하면 `pkg-config`는 `gcc` 컴파일을 더욱 쉽게 한다.

> `pkg-config`이란, 소프트웨어가 컴파일하는데 필요한 설치된 라이브러리를 조회하는 컴퓨터 프로그램이다. 라이브러리가 설치되면 `.pc` 확장자 파일이 생성된다. 아래는 `libpng` 라이브러리의 `.pc` 파일을 예시로 사용하여 확인하자.
>
> ```bash
> prefix=/usr/local
> exec_prefix=${prefix}
> libdir=${exec_prefix}/lib
> includedir=${exec_prefix}/include
> 
> Name: libpng
> Description: Loads and saves PNG files
> Version: 1.2.8
> Libs: -L${libdir} -lpng12 -lz
> Cflags: -I${includedir}/libpng12
> ```
>
> 위의 코드는 환경변수이며 `libdir` 및 `includedir`은 각각 `libpng` 라이브러리와 헤더 파일이 위치한 경로를 의미한다. 이름과 버전은 `libpng` 및 `1.2.8`이다. 프로그램이 본 패키지를 사용하는데 있어 추가적으로 컴파일이 필요한 종속 라이브러리 목록을 나열한다. `Cflags`는 반드시 필요한 컴파일러 flag이며, `-I`는 include path 플래그를 의미한다.
>
> ​	*여기에서 컴퓨터 용어인 플래그(flag) 값은 함수나 프로세스의 흐름을 제어한다.*
>
> `Libs`는 컴파일러 링크 플래그를 담는다. Linker란, 컴퓨터 유틸리티 프로그램으로 컴파일러에서 생성된 하나 이상의 오브젝트 파일들을 하나의 실행파일 혹은 라이브러리 파일 또는 또다른 오브젝트 파일로 만든다.  `-L`는 library path 플래그를 의미하며, `-l`은 라이브러리 이름 플래그이다.

그러나 최근 버전의 OpenCV는 빌드 옵션에서 기본적으로 `OPENCV_GENERATE_PKGCONFIG=OFF`로 설정되어 있어 `pkg-config` 지원이 처음부터 꺼져있다. `pkg-config`의 기능이 매우 제한적인 이유로 심지어 해당 옵션 자체가 차후에는 없어질 것으로 보인다(deprecated). 이전 버전의 OpenCV에 익숙한 유저들은 `OPENCV_GENERATE_PKGCONFIG=ON`으로 설정을 변경하여 사용하기를 추천하지만 권장되지 않은 방법이다.

OpenCV에서 대신 CMake를 사용하여 예제코드를 빌드(컴파일 절차 포함)하기를 권장한다. 심지어 CMake를 사용할 수 있도록 `opencv-4.0.1/samples` 경로 안에는 `CMakeList.txt` 파일이 존재한다. 그러므로 우선 해야할 작업은 예제코드를 컴파일 할 수 있는 Makefile을 CMake로 생성해야 한다. 절차적 이해를 돕기위해 `OpenCV/opencv_samples-4.0.1`이란 새로운 폴더에 예제코드를 저장한다.

```bash
$ mkdir ~/OpenCV/opencv_samples-4.0.1
$ cd ~/OpenCV/opencv_samples-4.0.1
$ cmake ../opencv-4.0.1/samples
```

혹은 OpenCV GUI를 사용한다면 다음과 같이 경로를 설정한다.

* `Where is the source code:` -> `/home/<username>/OpenCV/opencv-4.0.1/samples`
* `Where to build the binarries:` -> `/home/<username>/OpenCV/opencv_samples-4.0.1`

이를 통해 `OpenCV/opencv_samples-4.0.1`에는 Makefile 및 컴파일에 필요한 파일들이 함께 생성된다. C++ 예제코드는 `OpenCV/opencv_samples-4.0.1/cpp` 안에 종합적으로 들어있으며, 그 안에는 얼굴인식을 담당하는 `CMakeFiles/example_cpp_facedetect.dir` 파일도 들어있다. Makefile이 있는 `./cpp` 경로로 이동하여 컴파일을 진행한다.

```bash
$ cd cpp
$ make
```

그러면 `OpenCV/opencv_samples-4.0.1/cpp`에 C++ 예제코드 전체가 실행가능한 오브젝트 파일로 빌드된 것을 확인할 수 있다. 바로 이 파일들을 실행하여 사용하면 되지만, 실행 위치는 주요 소스코드가 있는 `OpenCV/opencv-4.0.1`이어야 한다. 이는 얼굴인식에 필요한 리소스들이 `OpenCV/opencv-4.0.1/data` 내에 들어있으며 상대주소가 적용되어있기 때문이다.

```bash
$ cd ../../opencv-4.0.1
$ ./../opencv_samples-4.0.1/cpp/example_cpp_facedetect
```

웹캠이 장착되어 있은 컴퓨터라면 카메라 화면이 나타나 (인식률은 매우 낮지만) 얼굴을 인식한다. 만일 오브젝트 파일 실행 위치에 상관하지 않고 정상적인 작동을 원하면 추가 명령어를 넣어주어야 한다. 예를 들어 `/home/<username>`에서 바로 작동시켜보려고 하자.

```bash
$ cd ~
$ ./OpenCV/opencv_samples-4.0.1/cpp/example_cpp_facedetect --cascade="/home/<username>/OpenCV/opencv-4.0.1/data/haarcascades/haarcascade_frontalface_alt.xml" --nested-cascade="/home/<username>/OpenCV/opencv-4.0.1/data/haarcascades/haarcascade_eye_tree_eyeglasses.xml"
```

명령어 중에서 `--cascade` 및 `--nested-cascade`는 원래 소스코드에서 입력 데이터를 받을 수 있는 변수 `cascade`와 `nested_cascade`로, `cv::CommandLineParser`에서 확인할 수 있다(그러면 `scale`이란 변수도 존재함을 알 수 있다). 바로 이들이 `OpenCV/opencv-4.0.1/data` 내에 위치한 얼굴인식에 필요한 리소스들이다.

### 실행법: Python3

CMake 단계에서 `-D INSTALL_PYTHON_EXAMPLES=ON` 옵션을 추가한다.

Python3 파일 실행법은 간단하다. 컴파일 작업 필요없이 바로 해당 파일을 바로 실행시키면 된다. 그러기에 CMake 등을 통한 빌드 작업이 불필요하며, 바로 `OpenCV/opencv-4.0.1/samples/python` 안에 있는 파일을 실행하면 된다. 여기에서 얼굴인식인 `facedetect.py` 실행에는 Python3을 통해 실행되어야 한다.

```bash
$ cd ~/OpenCV/opencv-4.0.1
$ python3 /home/<username>/OpenCV/opencv-4.0.1/samples/python/facedetect.py
```

그러나 본 소스코드는 독립적으로 실행될 수 없으며, 외부 스크립트를 모듈로 가져와 사용하기 때문이다. `facedetect.py`를 사용하기 위해서 필요한 소스코드 파일은 동일한 폴더에 들어있는 `video.py`, `common.py` 그리고 `tst_scene_render.py`이다.

마찬가지로 다른 위치에서 정상적인 실행을 원하며 다음과 같이 변수를 입력해 주어야 한다.

```bash
$ python3 /usr/local/share/opencv4/samples/python/facedetect.py --cascade "/usr/local/share/opencv4/haarcascades/haarcascade_frontalface_alt.xml" --nested-cascade "/usr/local/share/opencv4/haarcascades/haarcascade_eye_tree_eyeglasses.xml"
```

## OpenCV 4.0.1 제거

본 프로젝트는 YOLOv3 학습 모델을 OpenCV에 사용할 수 있도록 하기 위해서는 OpenCV 3.4.2 이상이어야 한다. 그러나 JetPack 4.2는 자동적으로 3.3.1을 설치하는 관계로 새로 설치해야 할 필요가 있다. 그 전에 충돌을 방지하기 위해 JetPack 4.2로부터 설치된 OpenCV 3.3.1을 우선적으로 제거해야 한다.

설치할 때에는 빌드 경로에서 `sudo make install` 명령어를 통해 컴파일로 통해 생성된 라이브러리들을 `/usr/local`에 설치하였다. 설치한 라이브러리들을 제거하기 위해서는 동일한 빌드 경로로 이동하고 아래의 명령어로 OpenCV 라이브러리들을 제거할 수 있다.

```bash
$ sudo make uninstall
```

위의 방법은 빌드 경로를 알고 있을 경우 OpenCV를 제거하는 정석이다. 그러나 NVIDIA JetPack 4.2로부터 설치된 OpenCV는 빌드 경로를 알 수 없어 직접 OpenCV 파일들을 하나씩 찾아서 삭제해야 한다. OpenCV 파일을 전부 찾아 제거하는 터미널 명령어는 다음과 같다.

```bash
$ sudo find / -name "*opencv*" -exec rm -i {} \;
```

만일 탐색한 파일들이 무엇인지 확인하기 위해서는 뒤에 있는 제거 명령어 `-exec rm -i {} \;` 무시하고 입력하면 볼 수 있다.

# 라이브러리: YOLOv3

## YOLOv3 설치

현재까지도 큰 인기와 각광을 받고 있는 물체인식 라이브러리 YOLOv3를 실행시키기 위해서 사용되는 프레임워크가 바로 Darknet이다. YOLOv3를 사용하기 위해서는 Darknet을 우선 설치해야 하므로, 이를 설차하는 방법을 알아보자.

OpenCV와 마찬가지의 이유로, Darknet 전용의 개별 작업경로를 홈 디렉토리에 생성하고, 인터넷에서 Darknet 빌드에 필요한 파일들을 다운로드한다. 다운로드를 마친 파일을 빌드하기 이전까지 과정을 아래의 명령어로 처리한다

```bash
$ mkdir ~/Darknet
$ cd ~/Darknet
$ git clone https://github.com/pjreddie/darknet.git
$ cd darknet
```

빌드를 진행하기 전에 설치한 CUDA와 OpenCV 설정하기 위해 Makefile을 아래와 같이 수정한다.

```makefile
GPU=1
CUDNN=0
OPENCV=1
OPENMP=0
DEBUG=0
```

우선 CUDA와 관련된 `GPU=1` 설정 아래에 빌드를 진행하기 전에는 *CUDA 10.0 검증*에서 사용했던 환경변수를 다시 한 번 넣어주어야 한다. Darknet이 `nvcc` 경로를 찾으려고 하는데 환경변수 없이는 찾을 수가 없기 때문이다. 그 외에는 GPU 설정은 아무런 문제가 없다.

문제는 바로 OpenCV와의 버전 호환성이다. 여기에서 만일 OpenCV 캐시 중 `OPENCV_GENERATE_PKGCONFIG=OFF`로 해제되어 있다면 `.pc` 확장자 파일이 생성되지 않는다. Darknet은 OpenCV가 있는지를 패키지 설정 내용이 들어있는 `.pc` 파일을 통해 확인하나 해당 파일이 존재하지 않으면 OpenCV를 접목시킬 수가 없다. 그러한 이유로 OpenCV 설치에서 `OPENCV_GENERATE_PKGCONFIG=ON` 설정이 필수이다.

그렇지만 아무리 `.pc` 확장자 파일이 있더라도 빌드는 오류와 함께 실패한다. 오류이 내용은 다음과 같다:

```shell
Package opencv was not found in the pkg-config search path.
Perhaps you should add the directory containing `opencv.pc'
to the PKG_CONFIG_PATH environment variable
No package 'opencv' found
./src/image_opencv.cpp:5:10: fatal error: opencv2/opencv.hpp: No such file or directory
 #include "opencv2/opencv.hpp"
          ^~~~~~~~~~~~~~~~~~~~
compilation terminated.
Makefile:86: recipe for target 'obj/image_opencv.o' failed
make: *** [obj/image_opencv.o] Error 1
```

다시말해, Darknet은 `opencv.pc`를 찾도록 되어있으나 OpenCV 4.0.1을 설치하면 `opencv4.pc`가 생성되어 찾지를 못하고 있다. 이를 해결하기 위해서는 Makefile 내용 중에서 `pkg-config`가 찾을 파일을 `opencv.pc`에서 `opencv4.pc`로 변경한다.

```makefile
ifeq ($(OPENCV), 1) 
COMMON+= -DOPENCV
CFLAGS+= -DOPENCV
LDFLAGS+= `pkg-config --libs opencv4` -lstdc++ # Originally `pkg-config --libs opencv`
COMMON+= `pkg-config --cflags opencv4`         # Originally `pkg-config --cflags opencv`
endif
```

하지만 곧 이어 다른 오류가 발생한다.

```shell
./src/image_opencv.cpp:12:1: error: ‘IplImage’ does not name a type; did you mean ‘image’?
 IplImage *image_to_ipl(image im)
 ^~~~~~~~
 image
compilation terminated due to -Wfatal-errors.
Makefile:86: recipe for target 'obj/image_opencv.o' failed
make: *** [obj/image_opencv.o] Error 1
```

해당 오류는 OpenCV에서 제공하던 C 언어 API 중 하나인 `IplImage` 구조체 자료형을 더이상 지원하지 않으면서 발생한 문제이다. 이는 `IplImage`에만 극한된 게 아니며 OpenCV가 전체적으로 C 언어 라이브러리에서 C++ 라이브러리로 전환되면서 나타난 현상이다. 이를 해결하기 위해서 사용자는 직접 C 언어 API를 C++ 언어 API인 `cv::Mat`로 변경해주어야 한다.

> *참조: Darknet Issue [#1347](https://github.com/pjreddie/darknet/issues/1347), [#1348](https://github.com/pjreddie/darknet/pull/1348) (문제 및 해결방안)*

이 두 문제를 해결하는 방법으로 [*darknet-fix-opencv-4.patch* 패치](https://gist.github.com/tiagoshibata/f322466e8b31c14a4b98d53bf74e4f6c)를 GitHub에서 찾을 수 있다. 본 패치는 Darknet 빌드를 OpenCV 4 이상의 버전에 적용시킬 수 있도록 하며, 비록 YOLOv3 개발자가 만든 패치가 아니지만 마이크로소프트 직원이 수정한 것으로 충분한 신빙성이 있다.

```bash
$ mv darknet-fix-opencv-4.patch ~/Darknet
$ patch -p1 < ../darknet-fix-opencv-4.patch
```

여기에서 `-p1`이란, patch 파일에 명시된 경로에서 첫 번째 주소를 제외해서 진행한다는 의미이다. 이해를 돕기 위해 해당 패치 내용을 예시로 본다:

```patch
diff --git a/Makefile b/Makefile
index 63e15e6..c148d4b 100644
--- a/Makefile
+++ b/Makefile
@@ -42,8 +42,8 @@ CFLAGS+=$(OPTS)
 ifeq ($(OPENCV), 1) 
 COMMON+= -DOPENCV
 CFLAGS+= -DOPENCV
-LDFLAGS+= `pkg-config --libs opencv` -lstdc++
-COMMON+= `pkg-config --cflags opencv` 
+LDFLAGS+= `pkg-config --libs opencv 2> /dev/null || pkg-config --libs opencv4` -lstdc++
+COMMON+= `pkg-config --cflags opencv 2> /dev/null || pkg-config --cflags opencv4`
 endif
```

여기에서 `a/Makefile`은 패치 이전의 Makefile이고, `b/Makefile`은 패치 이후의 Makefile이며, 이들 경로의 첫 번째 주소인 `a`와 `b`를 제외하게 된다. 결과적으로, 만일 `~/Darknet/darknet`에서 터미널을 실행하였으면 본 주소는 `~/Darknet/darknet/Makefile`이 되는 셈이다. 다시 말해, `-p1`은 여러 파일 및 하위폴더가 존재하는 파일에 패치를 적용하는데 사용된다.

위의 모든 설정이 완료되었으면 빌드를 시작한다.

```bash
$ cd ~/Darknet/darknet
$ make
```

컴파일 도중에서 `nvcc` 문제가 발생하였으면 CUDA 10.0 환경변수 설정을 다시 한 번 확인하기를 바란다. 만일 `bin/sh: 1: nvcc: not found` 에러가 지속된다면 Darknet 빌드 과정에서 `nvcc`를 찾지 못한 것이므 Makefile의 20번째 줄을 `NVCC=/usr/local/cuda-10.0/bin/nvcc`로 수정한다.

비록 빌드가 완료되었으나 링크와 관련된 설정이 제대로 되어있지 않을 것이다. 아래의 명령어는 여러장의 독수리 사진이 나타나게 하지만, 다음과 같은 오류가 발생할 수 있다:

```bash
$ ./darknet imtest data/eagle.jpg
```

```
./darknet ./darknet: error while loading shared libraries: libopencv_highgui.so.3.4: cannot open shared object file: No such file or directory
```

동적 링커 바인딩을 하여 정상적인 실행이 가능하도록 하려면 다음과 같이 [`ldconfig`](http://man7.org/linux/man-pages/man8/ldconfig.8.html) 명령어를 입력한다.

```bash
$ sudo ldconfig
```

이를 마무리로 Darknet 프레임워크는 정상적으로 실행될 것이다.

# 라이브러리: Dlib 19.17

## Dlib 설치

Dlib는 머신러닝에 필요한 알고리즘 및 도구를 제공해 주는 라이브러리이다. Dlib는 PASCAL VOC나 COCO 데이터세트에 포함되어 있지 않은 얼굴을 찾아낼 수 있으며, OpenCV에서 할 수 있는 랜드마크 추출 API 또한 해당 라이브러리를 통해 사용할 수 있다. 프로젝트의 본 목적은 얼굴을 탐지하여 추적하는 것을 목표로 Dlib의 활용은 유용할 것으로 판단되어, 해당 부문에서는 Dlib 19.17을 설치하는 방법을 소개한다.

Dlib를 설치하기 전, 아래의 명령어로 라이브러리에서 권장하는 패키지를 설치하도록 한다.
```bash
$ sudo apt-get install libopenblas-dev liblapack-dev
```
이는 OpenBLAS를 설치하는 패키지이며, Dlib 자체의 BLAS(Basic Linear Algebra Subprogram; 기초선형대수 서브프로그램)을 이용하기 위해서 필요하다. 본 패키지를 설치하므로써 Dlib 코드 실행속도는 개선시킬 수 있다.

Dlib 라이브러리를 설치하기 위해서 아래와 같은 경로를 생성하고, GitHub의 아카이브에 있는 19.17 버전을 다운로드 하여 압축을 푼다.
```bash
$ mkdir ~/Dlib
$ cd ~/Dlib
$ wget -O dlib-19.17.zip https://github.com/davisking/dlib/archive/v19.17.zip
```

OpenCV 설치와 동일한 방법으로 빌드를 위한 경로를 생성하여 이동한다.
```bash
$ mkdir ~/Dlib/dlib-19.17/build
$ cd ~/Dlib/dlib-19.17/build
```

Dlib 또한 CMake를 통해 아키텍쳐에 따른 Makefile을 만들어 주어야 한다. 하지만 설정 옵션은 OpenCV만큼 다양하지 않으므로 간단히 터미널에서 짧은 명령어 하나만 입력하는 것으로 CMake가 가능하다. 그러나 Dlib 웹사이트에서 소개하는 절차가 OpenCV 빌드 방법과 다른 점이 존재한다: 바로 `make` 명령어 대신 `cmake --build .` 를 사용했다는 점이다. 하지만 이 둘은 소스파일에서 빌드를 하는 명령어라는 점에서 동일한 역할을 하므로 어는 것을 사용해도 상관없다.
```bash
$ cmake ..
$ cmake --build . --config Release
```

빌드가 완료되었으면 이들을 시스템에서 본격적으로 범용적 사용이 가능한 경로로 이동(일명 "설치")시킨다. 이를 통해 Dlib에서 생성된 라이브러리들은 시스템의 공유 라이브러리로 설치된다. 만일 발생할 수 있는 공유 라이브러리 에러를 교정하기 위해 Darknet에서 사용한 동적 링커 바인딩 명령어를 입력한다.
```bash
sudo make install
sudo ldconfig
```

본 절차까지는 C++에서 바로 사용할 수 있도록 하지만, 파이썬으로 사용하기 위해서는 추가적인 절차가 필요하다. Dlib 경로를 보면 `setup.py`라는 파이썬 파일이 있는데, 이를 실행하면 파이썬에서 사용할 수 있는 Dlib 모듈을 설치한다.
```bash
python3 setup.py install
```
