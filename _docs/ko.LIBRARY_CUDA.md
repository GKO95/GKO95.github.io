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
[CUDA](https://ko.wikipedia.org/wiki/CUDA)(Compute Unified Device Architecture)는 게이밍 그래픽 카드로 매우 잘 알려진 [NVIDIA](https://www.nvidia.com/ko-kr/)에서 제공하는 병렬 컴퓨팅 플랫폼 및 API 모델이다. 해당 플랫폼은 [C](../ko.PRGMING_C)/[C++](../ko.PRGMING_Cpp) 그리고 [포트란](https://ko.wikipedia.org/wiki/포트란) 프로그래밍 언어와 함께 사용할 수 있도록 제작되어 접근성이 다른 그래픽 관련 API와 달리 용이하다.

컴퓨터의 중앙 처리 장치(CPU)에는 실질적인 연산을 담당하는 프로세서가 한 개 이상이 들어있다: 2개면 듀얼 코어, 4개면 쿼드 코어, 그리고 6개면 헥사 코어라 부른다. 그래픽 카드의 그래픽 처리 장치(GPU)에도 이러한 프로세서가 존재하는데 이들을 바로 스트리밍 프로세서(streaming processor; SP) 혹은 간단히 CUDA 코어라고 부르며, 흔히 규격상에는 [셰이더](https://ko.wikipedia.org/wiki/셰이더)(shader)로 알려져 있다. 단일 GPU 코어는 CPU 코어에 비해 비약적인 처리능력을 가졌으나, 게이밍에 사용되는 그래픽 카드에는 적어도 천 개 이상의 프로세서가 들어있어 한꺼번에 컴퓨팅을 진행하면 CPU보다 더 빠르고 높은 효율로 작업을 처리할 수 있다.

## 용어 정의
비록 CUDA는 C/C++ 언어를 기반하지만 CPU만이 아닌 GPU에서도 코드를 실행해야 하므로 CUDA 플랫폼에서만 사용되는 용어가 존재한다. 이들은 CUDA 프로젝트를 다룰 때 반드시 알아야 하는 용어이기에 숙지할 필요가 있다.

### 메모리 영역

| 용어 | 영문 | 설명 |
|:---:|:---:|-----|
| 호스트 | Host | 컴퓨터의 CPU 및 메모리 |
| 디바이스 | Device | 그래픽 카드의 GPU 및 메모리 |

그러므로 CPU에서 동작하는 코드를 *호스트 코드*라고 부르며, 반면에 GPU에서 동작하는 코드를 *디바이스 코드*라고 부른다.

### API

| 용어 | 영문 | 설명 |
|:---:|:---:|-----|
| 런타임 | Runtime | 고급 API: 사용하기 간편하지만 주어진 틀에서만 사용할 수 있다. |
| 드라이버 | Driver | 저급 API: 어렵고 복잡하지만 더 많은 기능을 수행할 수 있다. |

CUDA 플랫폼을 처음으로 접하기 때문에 본문에서는 CUDA 런타임 API를 중점으로 소개한다.

## NVCC
NVIDIA CUDA Compiler, 일명 NVCC는 CUDA 플랫폼의 핵심이 되는 컴파일러이다. NVCC는 `.cu` CUDA 소스 파일 및 `.cuh` CUDA 헤더 파일 컴파일에 있어 호스트 코드와 디바이스 코드를 구분한다. 그 중에서 호스트 코드는 일반 C/C++ 컴파일러에서 처리하고, 디바이스 코드는 NVCC에서 처리한다.

> 즉, NVCC는 독립적으로 사용할 수 없으며 반드시 MSVC(윈도우 OS)나 clang(macOS) 혹은 GNU 컴파일러(리눅스 OS)와 같은 일반 C/C++ 컴파일러가 필요하다.

# CUDA: 설치
> CUDA는 NVIDIA 그래픽 카드 전용 플랫폼이므로 타사 그래픽 카드로는 절대 구동할 수 없다. 반드시 자신이 가지고 있는 NVIDIA GPU가 CUDA를 지원하는 모델인지 [목록](https://developer.nvidia.com/cuda-gpus)에서 확인하도록 한다.

NVIDIA 개발자 웹사이트에서 CUDA Toolkit [다운로드](https://developer.nvidia.com/cuda-downloads) 페이지에서 아래의 그림과 같이 운영체제 및 아키텍처를 선택하여 설치 파일을 다운로드한다. 2021년 3월 31일 기준으로 가장 최신 버전은 11.2 업데이트이다.

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

## 프로젝트 생성
CUDA Toolkit 설치 절차가 모두 완료되었으면 CUDA 프로젝트를 생성하기 위해 Nsight 확장도구가 설치된 비주얼 스튜디오를 연다. 새 프로젝트 생성 옵션에는 새롭게 추가된 CUDA 11.2 Runtime 프로젝트가 추가된 것을 확인할 수 있다.

![비주얼 스튜디오 CUDA 11.2 Runtime 프로젝트 선택](/images/docs/cuda/cuda_project1.png)

생성된 CUDA Runtime 프로젝트는 다음과 같다.

![비주얼 스튜디오 CUDA 11.2 Runtime 프로젝트](/images/docs/cuda/cuda_project2.png)

비주얼 스튜디오에서 프로젝트를 설정하는 방법은 [여기](../ko.PRGMING_Cpp/#비주얼-스튜디오)를 참고한다.

# CUDA: 기초
> *출처: [NVIDIA CUDA C/C++ Basics - Supercomputing 2011 Tutorial](https://www.nvidia.com/docs/IO/116711/sc11-cuda-c-basics.pdf)*

CUDA 프로그램을 진행하기 전에 유의사항이 하나 있다: 바로 `<<<>>>` 커널 실행(kernel launch) 연산자이다. 해당 심볼은 C/C++에 존재하지 않으나 CUDA Runtime 프로젝트가 C/C++ 기반하기 때문에 비주얼 스튜디오에서는 이를 잘못된 구문으로 인식한다. 밑에는 붉은 밑줄이 표시되어 오류 메시지가 나타나지만, 컴파일에는 전혀 문제가 없는 불편한 상황이 항상 동반된다. 이는 NVIDIA 개발진의 잘못된 설계 탓이지만 개선하려는 의도가 전혀 보이지 않는다.

## 동작 원리
CUDA 프로젝트의 핵심 목적은 그래픽 카드의 GPU를 활용한 병렬 컴퓨팅을 수행하는 것이다. 이를 위한 절차는 세 단계로 나뉘어진다.

1. *입력: 호스트 → 디바이스*
    : 호스트 메모리에서 디바이스 메모리로 입력 데이터를 복사한다.

2. *처리: 호스트 → 디바이스*
    : 호스트에서 병렬 컴퓨팅 함수를 호출 및 디바이스로 전달하여 디바이스 메모리 데이터를 처리하도록 한다.

3. *출력: 디바이스 → 호스트*
    : 디바이스 메모리에서 호스트 메모리로 출력 데이터를 복사한다.

## CUDA 헤더
CUDA를 소개하는 첫 장에서 두 종류의 API가 있다고 언급하였다: 바로 드라이버(driver)와 런타임(runtime) API이다. 다음은 두 API를 불러오기 위해 필요한 헤더 파일이다.

* *드라이버 API*
    * `cuda.h`
    : C 형식 드라이버 API를 제공한다.

* *런타임 API*
    * `cuda_runtime_api.h`
    : C 형식 런타임 API를 제공하며, NVCC 컴파일러가 필요없다.

    * `cuda_runtime.h`
    : C 형식의 `cuda_runtime_api.h` API를 내포하며 오버로딩, 참조 등을 활용한 C++ 형식 런타임 API이다. 또한 CUDA 전용 형식도 제공하기 때문에 NVCC 컴파일러가 필요하다.

만일 CUDA 프로젝트에 NVCC 컴파일러가 사용되면 필요한 CUDA 관련 헤더 파일이 자동적으로 추가된다.

## CUDA 함수
CUDA 함수는 일반 C/C++ 함수와 동일한 구문을 가지나 호출 및 실행 위치에 따른 한정자(qualifier)를 지정해야 한다. 아래는 호스트에서 호출하여 디바이스에서 실행시키는 `__global__` 한정자를 가지는 함수의 프로토타입, 호출, 그리고 정의 예시이다.

```cpp
/* 함수 (혹은 커널) 프로토타입 */
__global__ void function(int* arg1, int* arg2, int* arg3);

/* 함수 (혹은 커널) 호출 */
function<<<1,1>>>(dptr1, dptr2, dptr3);

/* 함수 (혹은 커널) 정의 */
__global__ void function(int* arg1, int* arg2, int* arg3) {
    *arg3 = *arg1 + *arg2;
}
```

### 함수 한정자
CUDA에는 세 종류의 함수가 존재하며 이들은 아래의 한정자에 의해 정의된다.

| 한정자 | 호출 | 실행 | 설명 |
|:-----:|:---:|:---:|-----|
| `__host__` | 호스트 | 호스트 | 기본 한정자이며, 절대로 디바이스 코드에서 호출 불가하다.  |
| `__device__` | 디바이스 | 디바이스 | 절대로 호스트 코드에서 호출 불가하다.  |
| `__global__` | 호스트 | 디바이스 | 반드시 `void`만을 반환해야 하며, 해당 함수를 커널(kernel)이라 부른다. |    

그 중에서 `__host__`과 `__device__`를 조합하여 하나의 함수에 대하여 호스트 버전과 디바이스 버전 두 개를 한꺼번에 정의할 수 있다.

```cpp
/* 호스트 및 디바이스 함수 정의 */
__host__ __device__ void function() {
    // 아래에 코드를 입력하세요.
    ...
}
```

### 메모리 함수
> *참조: [NVIDIA Docs CUDA 런타임 메모리 (영문)](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__MEMORY.html)*

호스트 메모리와 디바이스 메모리는 독립된 존재이며 서로 직접적으로 관여할 수 없다. 다시 말해, 일반 C/C++ 언어에서 다룬 [메모리 함수](../ko.PRGMING_C/#메모리-함수)로는 디바이스에서 처리할 메모리 공간을 확보 및 관리가 불가하다. CUDA 프로젝트에서는 디바이스 메모리만을 위한 함수가 있으며, 아래는 일부 호스트와 디바이스의 메모리 함수를 비교한다.

* 메모리 할당

| 비교    | 구문                                       |
|:-----:|:----------------------------------------:|
| C/C++ | `malloc(size_t size)`                    |
| CUDA  | `cudaMalloc(void **devPtr, size_t size)` |

CUDA 메모리 할당 함수는 `void**`를 추가 인자로 가진다. CUDA 함수가 C/C++의 `malloc()` 함수와 달리 포인터 아닌 `cudaError_t`를 반환하기 때문이다. 그러므로 [참조에 의한 호출](../ko.PRGMING_Cpp/#포인터)(call by reference)을 활용하여 반환되어야 할 메모리 주소를 인자로 통해 건네주는 방식을 채택하였는데, 포인터를 반환해야 하므로 결과적으로 포인터가 할당된 메모리 주소를 가리키는 `void**` 자료형을 가지게 된다.

할당된 디바이스 메모리는 호스트와 동일한 포인터 체계를 사용하나 메모리 주소 값이 꾀나 크다는 점을 확인할 수 있다. 이는 아마 호스트 메모리에서 접근하지 못하는 메모리 주소로 보인다. 이러한 이유로 디바이스 메모리 주소를 `printf()`와 같은 출력 함수로 값을 읽으려 시도하면 메모리 접근 오류가 발생한다.

* 메모리 해제

| 비교    | 구문                       |
|:-----:|:------------------------:|
| C/C++ | `free(void *_Block)`     |
| CUDA  | `cudaFree(void *devPtr)` |

일반 C/C++ 호스트 메모리 해제 함수와 동일하게, CUDA 메모리 함수 `cudaMalloc()`을 통해 할당된 디바이스 메모리를 비할당시킨다.

* 메모리 복사

| 비교    | 구문                                                                 |
|:-----:|:---------------------------------------------------------------------:|
| C/C++ | `memcpy(void *_Dst, const void *_Src, size_t _Size)`                  |
| CUDA  | `cudaMemcpy(void *dst, void *src, size_t count, cudaMemcpyKind kind)` |

CUDA 메모리 복사 함수는 `cudaMemcpyKind`를 추가 인자로 가진다. CUDA 프로젝트에서는 호스트 메모리와 디바이스 메모리 영역이 존재하는데 어느 영역으로 복사할 것인지를 명시해야 하기 때문이다. 이를 통해 호스트에서 디바이스로 데이터를 전달하고 받을 수가 있다.

* 메모리 도배

| 비교    | 구문                                                  |
|:-----:|:---------------------------------------------------:|
| C/C++ | `memset(void *_Dst, int _Val, size_t _Size)`        |
| CUDA  | `cudaMemset(void *devPtr, int value, size_t count)` |

일반 C/C++ 호스트 메모리 해제 함수와 동일하게, CUDA 메모리 함수 `cudaMemset()`을 통해 디바이스 메모리에 값을 도배한다.

## *예시: 기초*
본 장에서 설명한 내용들을 모두 적용한 CUDA 프로젝트 예시 코드를 보여준다.

```cpp
#include <stdio.h>
#include "cuda_runtime.h"

/* 커널 프로토타입 */
__global__ void kernel(int* arg1, int* arg2, int* arg3);

int main() {
    
    // 호스트에 A, B, C 정수형 정의
    int A = 1, B = 3, C;

    // 디바이스 메모리 주소를 가리킬 dptrA, dptrB, dptrC 포인터
    //  * 비초기화 상태: 포인터에 메모리 주소 값이 없음
    int * dptrA, * dptrB, * dptrC;

    // 디바이스 메모리 할당 주소를 dptrA, dptrB, dptrC 포인터에 저장
    //  * 초기화 상태: 포인터에 메모리 주소 값이 있음
    cudaMalloc((void**)&dptrA, sizeof(int));
    cudaMalloc((void**)&dptrB, sizeof(int));
    cudaMalloc((void**)&dptrC, sizeof(int));

    // 호스트 메모리의 입력값을 디바이스 메모리에 복사
    cudaMemcpy(dptrA, &A, sizeof(int), cudaMemcpyHostToDevice);
    cudaMemcpy(dptrB, &B, sizeof(int), cudaMemcpyHostToDevice);

    /* 커널 호출 */
    kernel<<<1,1>>>(dA, dB, dC);

    // 디바이스 메모리의 출력값을 호스트 메모리에 복사
    cudaMemcpy(&C, dptrC, sizeof(int), cudaMemcpyDeviceToHost)
    printf("입력값: %d, %d\n출력값: %d", A, B, C);

    // 디바이스 메모리 해제
    cudaFree(dptrA); cudaFree(dptrB); cudaFree(dptrC);

    return 0;
}

/* 커널 정의 */
__global__ void kernel(int *arg1, int *arg2, int *arg3) {
    *arg3 = *arg2 + *arg1;
}
```

```
입력값: 1, 3
출력값: 4
```

# CUDA: 마이크로아키텍처
이전 장에서는 CUDA 프로젝트에서 호스트 영역과 디바이스 영역을 넘나들어 간단한 사칙연산을 하는 예시를 보여주었다. 그러나 CUDA의 장점인 병렬 컴퓨팅이 활용되지 않았으며, 호스트 코드만으로도 충분히 구현할 수 있다. 그 전에 본 장에서는 NVIDIA GPU가 가지는 [마이크로아키텍처](https://ko.wikipedia.org/wiki/마이크로아키텍처)(microarchitecture)를 간략하게 소개한다.

> 본 문서는 이해를 돕기 위해 [CUDA 계산 성능 6.1](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#compute-capability-6-x)을 지닌 [*NVIDIA GeForce GTX 1070* 8GB GDDR5](https://www.nvidia.com/ko-kr/geforce/10-series/)로 규격 예시를 든다.

아래는 CUDA의 병렬 컴퓨팅에 이해를 돕기 위한 NVIDIA의 한 블로그 [게시물](https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/)에 올라온 커널 및 쓰레드 계층 이미지이다.

![CUDA의 쓰레드, 블록, 그리고 그리드](/images/docs/cuda/cuda_kernel_execution.png)

## 쓰레드
쓰레드(thread)는 하나의 작업을 처리하는데 필요한 명령어 집합체이다. 여기서 명령어(instruction)란, 컴퓨터가 가지는 가장 기초적인 동작으로 하나 혹은 두 개의 피연산자(operand) 데이터를 가지고 산술 및 비트 연산 혹은 메모리 이동 등을 처리한다. 이런 명령어들의 집합에 의해 쓰레드라는 실질적인 프로그램 작업이 결국 커널을 실행시킨다.

> 하드웨어에서 각 쓰레드는 하나의 스트리밍 프로세서, 일명 CUDA 코어에서 처리된다. *NVIDIA GeForce GTX 1070*에는 총 1920개의 스트리밍 프로세서를 갖는다.
> 
> 스트리밍 프로세서 안에는 다음 구성장치를 가진다:
> 
> * 32비트 정수형 [ALU](../ko.EMBEDDED_MCU/#산술-논리-장치) (1개)
> * 단정밀도 부동소수점 [FPU](https://ko.wikipedia.org/wiki/부동_소수점_장치) (1개)

CUDA 프로젝트에서 각 쓰레드에 접근하려면 두 가지를 변경해야 한다.

1. 호스트: 쓰레드 개수를 커널 실행 연산자(`<<<>>>`)에 명시한다.

    ```cpp
    kernel<<<1,N>>>(dptrA, dptrB, dptrC);
    ```

2. 디바이스: 디바이스 메모리를 배열처럼 간주하여 `threadIdx`로 각 쓰레드에 접근한다.

    ```cpp
    __global__ void kernel(int *arg1, int *arg2, int *arg3) {
        arg3[threadIdx.x] = arg1[threadIdx.x] + arg2[threadIdx.x];
    }
    ```

## 블록
블록(block)은 동일한 커널을 실행하는 쓰레드의 집합체로 최대 1024개까지 수용할 수 있다. 다시 말해, 하나의 블록에 들어있는 모든 쓰레드는 (처리할 데이터만 다를 뿐) 전부 동일한 명령어들이 동작한다. 그러므로 블록 내의 쓰레드는 순차적(직렬)만이 아닌 동시(병렬)에 처리될 수 있다.

> 하드웨어에서 블록은 한 개의 스트리밍 멀티프로세서(streaming multiprocessor; SM)에서 처리하며, 자세한 내용은 [하위부분](#스트리밍-멀티프로세서)에서 설명한다.

CUDA 프로젝트에서 각 블록에 접근하려면 두 가지를 변경해야 한다.

1. 호스트: 블록 개수를 커널 실행 연산자(`<<<>>>`)에 명시한다.

    ```cpp
    kernel<<<N,1>>>(dptrA, dptrB, dptrC);
    ```

2. 디바이스: 디바이스 메모리를 배열처럼 간주하여 `blockIdx`로 각 블록에 접근한다.

    ```cpp
    __global__ void kernel(int *arg1, int *arg2, int *arg3) {
        arg3[blockIdx.x] = arg1[blockIdx.x] + arg2[blockIdx.x];
    }
    ```

### 스트리밍 멀티프로세서
스트리밍 멀티프로세서(streaming multiprocessor; SM)는 블록을 처리하는 장치로 안에는 여러 개의 스트리밍 프로세서가 들어있어 블록의 쓰레드를 동시에 처리한다.

> *NVIDIA GeForce GTX 1070*에는 15개의 스트리밍 멀티프로세서를 갖으며, CUDA 계산 성능 6.1에 의하면 스트리밍 멀티프로세서 하나에는 128개의 스트리밍 프로세서가 들어있다.

스트리밍 멀티프로세서는 SP(스트리밍 프로세서) 이외에도 다른 메모리와 장치들이 탑재되어 있다:

![CUDA 스트리밍 멀티프로세서 구조<sub><i>출처: <a href="http://users.umiacs.umd.edu/~ramani/cmsc828e_gpusci/lecture9.pdf">University of Mayland</a></i></sub>](/images/docs/cuda/cuda_streaming_multiprocessor.png)

* *L1 [캐시 메모리](https://ko.wikipedia.org/wiki/CPU_캐시) (cache memory)*
    : 처리장치(예. CPU, GPU 등)에서 매우 흔히 사용되는 데이터를 별도로 저장하는 가장 빠른 저용량 임시 휘발성 메모리이다.

    > GeForce 600 시리즈(Kepler 마이크로아키텍처)부터 성능이 대폭 향상되어 명령어 및 데이터 전용 L1 캐시 메모리가 하나로 통합되었다.

* *32비트 [레지스터](../ko.EMBEDDED_MCU/#레지스터) (32-bit register)*
    : 쓰레드를 처리하는 스트리밍 프로세서의 ALU 및 FPU에 입력되는 피연산자 데이터와 출력되는 결과 데이터를 저장하는 장치이다. 즉, 레지스터 개수는 스트리밍 멀티프로세서가 한 번에 처리할 수 있는 쓰레드 개수 결정 요인 중 하나이다.

    > CUDA 성능 6.1의 *NVIDIA GeForce GTX 1070*에는 각 SM마다 64K개의 32비트 레지스터가 들어있다. 여기서 32비트 크기이면 정수형 혹은 단정밀도 부동소수점 한 개를 저장할 수 있다.

* *공유 메모리 (shared memory)*
    : 블록 내의 쓰레드 사이에 공유되는 메모리로 쓰레드간 협업을 가능케 한다. 또한 CUDA 코어와 동일한 함께 스트리밍 멀티프로세서에 탑재되어 데이터를 매우 빠른 속도로 저장 및 호출한다.

* *특수 함수 장치 (special function unit; SPU)*
    : 일반 다항식으로 접근할 수 없는 [초월함수](https://ko.wikipedia.org/wiki/초월함수)(예. 삼각함수, 지수함수 등)의 산술을 위한 장치이다.
    
    > CUDA 성능 6.1의 *NVIDIA GeForce GTX 1070*에는 각 SM마다 32개의 SFU가 들어있다.

* *워프 스케줄러 (warp scheduler)*
    : 블록을 효율적으로 처리하는데 사용되는 병렬 컴퓨팅 장치이다.

스트리밍 멀티프로세서가 갖는 레지스터 및 공유 메모리 등의 리소스에 여유공간이 생기면 두 개 이상의 블록을 동시에 처리할 수 있다. 블록은 완전히 처리될 때까지 스트리밍 멀티프로세서에 거주(resident)한다. 그러므로 스트리밍 멀티프로세서에서 새로운 블록을 받으려면 리소스 공간이 충분해질 때까지 기존의 블록 처리가 완료되기를 기다려야 한다.

## 워프
워프(warp)는 스트리밍 멀티프로세서에서 블록을 처리하기 위해 쪼갠 32개의 쓰레드 묶음이다. 블록의 첫 번째 워프는 항상 0번 쓰레드를 시작으로, 모든 워프들은 일련의 32개 쓰레드를 순서대로 할당받는다. 만일 마지막 워프가 32개보다 적은 쓰레드를 할당받으면 나머지는 명령어를 수행하지 않는 비활성 쓰레드(inactive thread)로 채워진다.

> GeForce 400 시리즈(Fermi 마이크로아키텍처)에 처음 소개되었으나, 현재까지도 워프의 쓰레드 개수는 32개로 고정이다 ([참고](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#features-and-technical-specifications__technical-specifications-per-compute-capability)).

워프가 갖는 모든 활성 쓰레드는 해당 워프가 수령받은 하나의 명령어를 동시에 수행하여 병렬 컴퓨팅의 위상을 보여준다 (일명 [명령어 수준 병렬성](https://en.wikipedia.org/wiki/Instruction-level_parallelism)).

### 워프 스케줄러
워프 스케줄러(warp scheduler)는 어떤 워프를 실행시킬 것인지 선택하고, 해당 워프에게 동작할 명령어를 전달하는 장치이다. CUDA 성능에 따라 다르지만 스트리밍 멀티프로세서는 기본 두 개 이상의 워프 스케줄러를 갖는다. 스트리밍 멀티프로세서 내의 워프 스케줄러는 한꺼번에 동작하기 때문에, 한 번에 처리할 수 있는 워프 개수를 늘려 병렬 컴퓨팅의 효율을 더욱 높이는데 기여한다.

> CUDA 성능 6.1의 *NVIDIA GeForce GTX 1070*에는 각 SM마다 4개의 워프 스케줄러를 갖으며, 워프 하나에 32개의 쓰레드가 있으므로 총 128개의 프로세서와 일치한다.

워프 스케줄러는 [문맥 교환](https://ko.wikipedia.org/wiki/문맥_교환)(context switch)이란 작업으로 워프를 처리한다: *워프 A* 내의 쓰레드에서 피연산자가 준비되지 않아 명령어를 수행할 수 없을 시, 워프 스케줄러는 동일한 블록에서 준비된 다른 *워프 B*를 처리한다. 워프 스케줄러에서 *워프 B*에 명령어를 하달하는 동안, *워프 A*에서는 독립적으로 다음 명령어 처리 진행을 위해 쓰레드 레지스터에 피연산자를 인출한다. 그렇게 *워프 A*에서 준비를 마쳤으면 워프 스케줄러는 *워프 A*가 처리해야 할 다음 명령어를 하달한다.

# CUDA: 병렬 컴퓨팅
NVIDIA CUDA의 마이크로아키텍처를 설명하면서 쓰레드(thread)와 블록(block)에 대하여 간단히 소개하였다. 이 두 요소의 조합이 바로 병렬 컴퓨팅의 기초가 된다. 본 장에서는 CUDA 프로젝트에서 쓰레드와 블록을 활용한 병렬 컴퓨팅을 본격적으로 구현하는 방법을 설명한다.
