---
layout: docs
language: ko
category: 라이브러리
title: CUDA
icon: icon-cuda.png
meta: CUDA
order: 0x14
---
# CUDA: 소개
> CUDA는 Nvidia 그래픽 카드 전용 플랫폼이므로 타사 그래픽 카드로는 절대 구동할 수 없다. 반드시 자신이 가지고 있는 Nvidia GPU가 CUDA를 지원하는 모델인지 [목록](https://developer.nvidia.com/cuda-gpus)에서 확인하도록 한다.

[CUDA](https://ko.wikipedia.org/wiki/CUDA)는 게이밍 그래픽 카드로 매우 잘 알려진 [Nvidia](https://www.nvidia.com/ko-kr/)에서 제공하는 병렬 컴퓨팅 플랫폼 및 API 모델이다. 해당 플랫폼은 [C](../ko.PRGMING_C)/[C++](../ko.PRGMING_Cpp) 그리고 [포트란](https://ko.wikipedia.org/wiki/포트란) 프로그래밍 언어와 함께 사용할 수 있도록 제작되어 접근성이 다른 그래픽 관련 API와 달리 용이하다.

컴퓨터의 중앙 처리 장치(CPU)에는 실질적인 연산을 담당하는 프로세서가 한 개 이상이 들어으며, 개수에 따라 듀얼 코어(프로세서 2개), 쿼드 코어(프로세서 4개), 헥사 코어(프로세서 6개) 등으로 불린다. 그래픽 카드의 그래픽 처리 장치(GPU)에도 이러한 코어가 존재하는데 이들을 바로 CUDA 코어라고 부르며, 게이밍에 사용되는 그래픽 카드에는 적어도 천 개 이상의 CUDA 코어가 들어있다. 단일 GPU 코어는 CPU 코어에 비해 비약적인 처리능력을 가졌으나, 방대한 양의 GPU 코어로 한꺼번에 컴퓨팅을 진행하면 CPU보다 더 빠르고 높은 효율로 작업을 처리할 수 있다.

2021년 3월 31일 기준, 본 문서는 총 1920 개의 CUDA 코어가 탑재되어 있는 NVIDIA GeForce GTX 1070 8GB GDDR5로 예시를 든다.

# CUDA: 설치
> 설치를 진행하기 전, NVIDIA 개발자 웹사이트에 회원가입 및 로그인이 반드시 필요하다.

Nvidia 개발자 웹사이트에서 CUDA Toolkit [다운로드](https://developer.nvidia.com/cuda-downloads) 페이지에서 아래의 그림과 같이 운영체제 및 아키텍처를 선택하여 설치 파일을 다운로드한다. 2021년 3월 31일 기준으로 가장 최신 버전은 11.2 업데이트이다.

![CUDA Toolkit 설치 파일 다운로드](/images/docs/cuda/cuda_download.png)

다운로드한 설치 파일을 실행하면 CUDA Toolkit 설치에 필요한 파일을 임시 폴더에 압축을 풀어 저장한다.

![CUDA Toolkit 설치 파일 임시저장](/images/docs/cuda/cuda_install1.png)

설치 파일 임시저장까지 완료되었으면 아래의 화면이 나타나 본격적으로 설치 준비를 진행한다.

![CUDA Toolkit 설치 파일 시작화면](/images/docs/cuda/cuda_install2.png)

CUDA Toolkit 설치 방법에는 권장 설정으로 빠르게 설치하는 *Express*, 그리고 사용자가 원하는 설정으로 설치하는 *Custom*이 있다. 

![CUDA Toolkit 설치방법](/images/docs/cuda/cuda_install3.png)

여기서 CUDA Toolkit은 기본적으로 운영체제가 들어있는 C 드라이브에 설치되기 때문에 설정이라 하여도 샘플 및 문서 파일 설치 여부 및 경로 선택 한정이므로 *Express* 설치법을 선택하도록 한다.

설치가 완료되면 두 가지의 두 개의 설치 결과를 알려주는데, 그 중 하나가 [비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)의 Nsight 확장도구이다.

![CUDA Toolkit Nsight 설치 결과](/images/docs/cuda/cuda_install4.png)

해당 확장도구는 비주얼 스튜디오에서 Nvidia GPU 컴퓨팅을 지원한다. 만일 비주얼 스튜디오 2019만 설치하였을 시, 비주얼 스튜디오 2017 Nsight 확장도구가 설치할 수 없다는 알림은 무시한다. 또한 *Integrated Graphics Frame Debugger and Profiler* 및 *Integrated CUDA Profilers*가 설치되지 않았다고 보고하는데, 해당 기능들은 비주얼 스튜디오 Nsight 확장도구 버전 2020.3부터 제외되었기 때문이다. 원한다면 비주얼 스튜디오 확장도구 관리자에서 [NVIDIA Nsight Integration](https://developer.nvidia.com/nsight-tools-visual-studio-integration) 확장도구를 설치한다.

![비주얼 스튜디오 NVIDIA Nsight Integration 확장도구](/images/docs/cuda/cuda_install5.png)

그리고 설치 파일은 마지막으로 CUDA Toolkit을 통해 설치된 내역들을 전부 보여준다. 대부분의 파일들은 새로 설치되었을 것이며, 그 중에서 기존 컴퓨터에 설치된 그래픽 드라이버 등은 최신 버전으로 설치하였을 것이다.

![CUDA Toolkit 종합 설치 결과](/images/docs/cuda/cuda_install6.png)

위의 절차를 모두 완료하였으면 CUDA 프로젝트를 생성하기 위해 Nsight 확장도구가 설치된 비주얼 스튜디오를 연다. 새 프로젝트 생성 옵션에는 새롭게 추가된 CUDA 11.2 Runtime 프로젝트가 추가된 것을 확인할 수 있다.

![비주얼 스튜디오 CUDA 11.2 Runtime 프로젝트 선택](/images/docs/cuda/cuda_project1.png)

생성된 CUDA Runtime 프로젝트는 다음과 같다.

![비주얼 스튜디오 CUDA 11.2 Runtime 프로젝트](/images/docs/cuda/cuda_project2.png)

비주얼 스튜디오에서 프로젝트를 설정하는 방법은 [여기](../ko.PRGMING_Cpp/#비주얼-스튜디오)를 참고한다.

# CUDA: 기초
> *본 내용부터 실질적인 CUDA 프로그래밍을 소개하므로, 반드시 C/C++ 내용을 숙지하도록 한다.*

CUDA 프로그램을 진행하기 전에 유의사항이 하나 있다: 바로 `<<<>>>`이다. 해당 심볼은 C/C++에 존재하지 않으나 CUDA Runtime 프로젝트가 C/C++ 기반하기 때문에 비주얼 스튜디오에서는 이를 잘못된 구문으로 인식한다. 밑에는 붉은 밑줄이 표시되어 오류 메시지가 나타나지만, 컴파일에는 전혀 문제가 없는 불편한 상황이 자주 발생한다. 이는 NVIDIA 개발진의 잘못된 설계 탓이지만 개선하려는 의도가 전혀 보이지 않는다.

아래는 현재 CUDA 사용자 커뮤니티에서 사용하는 오류 메시지 우회 방법으로 매크로를 활용하고 있다.

```cpp
#ifdef __CUDACC__
    #define KERNEL_ARGS2(grid, block) <<< grid, block >>>
    #define KERNEL_ARGS3(grid, block, sh_mem) <<< grid, block, sh_mem >>>
    #define KERNEL_ARGS4(grid, block, sh_mem, stream) <<< grid, block, sh_mem, stream >>>
#else
    #define KERNEL_ARGS2(grid, block)
    #define KERNEL_ARGS3(grid, block, sh_mem)
    #define KERNEL_ARGS4(grid, block, sh_mem, stream)
#endif
```

그러나 본 문서에서는 혼잡을 방지하기 위해 매크로를 사용하지 않는 구문으로 설명한다.