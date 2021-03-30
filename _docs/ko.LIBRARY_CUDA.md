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
[CUDA](https://ko.wikipedia.org/wiki/CUDA)는 게이밍 그래픽 카드로 매우 잘 알려진 [Nvidia](https://www.nvidia.com/ko-kr/)에서 제공하는 병렬 컴퓨팅 플랫폼 및 API 모델이다. 컴퓨터의 중앙 처리 장치(CPU)에는 실질적인 연산을 담당하는 프로세서가 한 개 이상이 들어으며, 개수에 따라 듀얼 코어(프로세서 2개), 쿼드 코어(프로세서 4개), 헥사 코어(프로세서 6개) 등으로 불린다. 그래픽 카드의 그래픽 처리 장치(GPU)에도 이러한 코어가 존재하는데 이들을 바로 CUDA 코어라고 부르며, 게이밍에 사용되는 그래픽 카드에는 적어도 천 개 이상의 CUDA 코어가 들어있다. 단일 GPU 코어는 CPU 코어에 비해 비약적인 처리능력을 가졌으나, 방대한 양의 GPU 코어로 한꺼번에 컴퓨팅을 진행하면 CPU보다 더 빠르고 높은 효율로 작업을 처리할 수 있다.

CUDA 플랫폼은 [C](../ko.PRGMING_C)/[C++](../ko.PRGMING_Cpp) 그리고 [포트란](https://ko.wikipedia.org/wiki/포트란) 프로그래밍 언어와 함께 사용할 수 있도록 제작되어 접근성이 다른 그래픽 관련 API와 달리 용이하다. 단, CUDA 플랫폼은 오로지 Nvidia 그래픽 카드에서만 사용할 수 있으며, 제품에 따라 GPU에 들어있는 CUDA 코어 개수가 상이 혹은 지원을 안 할 수도 있다.

2021년 3월 30일 기준, 본 문서는 총 1920 개의 CUDA 코어가 탑재되어 있는 NVIDIA GeForce GTX 1070 8GB GDDR5로 예시를 든다.

# CUDA: 설치
> 설치를 진행하기 전, NVIDIA 개발자 홈페이지에 회원가입 및 로그인이 반드시 필요하다.

![CUDA Toolkit 설치 파일 다운로드](/images/docs/cuda/cuda_download.png)
