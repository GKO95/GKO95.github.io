---
layout: docs
language: ko
category: 라이브러리
title: NumPy
icon: icon-numpy.png
meta: NumPy
order: 0x10
---
# 넘파이: 소개
[넘파이](https://numpy.org/)(NumPy)는 다차원 배열을 지원하는 강력한 [파이썬](../ko.PRGMING_Python/) 전용 라이브러리이다. 본래 [SciPy](https://www.scipy.org/)라는 수학, 과학, 그리고 공학을 위한 파이썬 전용 오픈소스 프로젝트의 일부였으나, SciPy 없이도 사용할 수 있도록 독립된 패키지로 출시되었다. 덕분에 넘파이는 SciPy 이외에 [matplotlib](#넘파이-matplotlib) 및 [텐서플로우](../ko.LIBRARY_TensorFlow/)와 같은 라이브러리에서도 흔히 사용된다.

넘파이 라이브러리를 설치하기 위해, 아래의 명령어를 입력한다.

```
python -m pip install numpy
```

### vs. MATLAB
> 본 내용은 [MATLAB](../ko.PRGMING_MATLAB/) 문서와 깊은 연관성이 있어, 관심이 있을 경우 한 번 확인하여 비교해 보는 것을 권장한다.

[MATLAB](https://www.mathworks.com/products/matlab.html)은 1991년에 출시된 파이썬보다 더 역사가 깊은 1970년대 후반에 개발된 행렬 처리 프로그래밍 언어 및 환경이다. 비록 Mathworks라는 기업에서 판매하는 유료 프로그램이지만, 그만큼 서비스를 보장받을 수 있으며 오랜 기술 축적과 커뮤니티를 보유하고 있다. 그러나 2010년대 초반부터 시작하여 파이썬의 고속성장으로 MATLAB의 입지는 위협을 받고 있다.

# 넘파이: 기초
넘파이는 파이썬 전용 라이브러리인 관계로 파이썬 구문을 그대로 따른다. 메모리 효율이 파이썬의 [리스트 객체](../ko.PRGMING_Python/#리스트-객체)보다 우월하여 큰 규모의 배열을 다룰 때에는 매우 유용하다. 본 장에서는 넘파이 배열이 갖는 특징 및 장단점, 배열 연산 등의 기초적인 내용을 설명한다.

본 문서에서 넘파이를 불러오기 위해 아래와 같은 가장 통상적인 코드를 사용한다.

```python
import numpy as np
```

## 넘파이 배열
넘파이 배열(array)은 동일한 자료형의 데이터를 일련의 순서대로 담는 저장공간이다. N-차원 배열(**N**-**D**imensional **ARRAY**)을 의미하는 `ndarray` 클래스를 핵심 데이터 구조로 갖는다. 넘파이의 배열 데이터들은 메모리의 한 곳에 밀집하여 저장되기 때문에 유연성은 떨어지나 처리속도가 월등히 빠르다.

넘파이 배열은 저급 `ndarray` 생성자로 생성할 수 있으나, 일부 한계로 인해 배열 객체화에 적합하지가 않다. 그 중 하나가 바로 배열 요소를 지정할 수 없다는 것이다.

```python
import numpy as np

# 넘파이 정의
var = np.ndarray(shape = (2, 3), dtype = np.int)
print(var)
```
```
[[800191312     32765 800196048]
 [    32765 870097920     32765]]
```

넘파이는 `ndarray` 객체를 반환하는 `numpy.array` 함수를 사용할 것을 권장한다. 헤당 함수는 파이썬 리스트, 튜플, 범위 객체 등을 인자로 받아 넘파이 배열을 생성한다.

```python
import numpy as np

# 넘파이 초기화 
var = np.array([[1, 2, 3], [4, 5, 6]])
print(var)
```
```
[[1 2 3]
 [4 5 6]]
```

각 대괄호(`[]`)는 배열의 차원 성분을 의미하는데, 이는 파이썬의 리스트와도 동일하게 적용된다. 이렇게 리스트와의 유사성은 넘파이 배열을 쉽게 익히고 활용할 수 있도록 한다.

> 수학과 마찬가지로 대괄호가 없는 0차원 배열을 *스칼라(scalar)*, 그리고 하나만을 갖는 1차원을 *벡터(vector)*라고 부른다.

넘파이는 `numpy.arange` 함수로 행벡터를 간펴하게 생성할 수 있다. 시작부터 끝을 특정 간격으로 만드는 점은 시퀀스 객체 슬라이싱과 매우 유사하므로 참고하도록 한다.

```python
import numpy as np

# 행벡터 초기화
var = np.arange(2, 4, 0.2)
print(var)
```
```
[2.  2.2 2.4 2.6 2.8 3.  3.2 3.4 3.6 3.8]
```

그 외에도 넘파이 배열을 생성하는 함수가 있으며, 아래는 대표적인 몇 가지를 소개한다.

| 함수     | 설명                   |
|---------|----------------------|
| `numpy.full`  | 특정 값으로 채워진 넘파이 배열 생성 |
| `numpy.zeros` | 0으로 채워진 넘파이 배열 생성  |
| `numpy.ones`  | 1로 채워진 넘파이 배열 생성  |
| `numpy.eye`   | 단위 정방행렬 생성          |
| `numpy.linspace` | 균일한 간격의 기본 50개 요소로 구성된 행벡터 생성 |
| `numpy.random.rand` | 균일분포 의사난수 배열 생성 |

## 넘파이 인덱싱
인덱싱(indexing)은 배열의 일부를 호출하는 과정으로, 대괄호(`[]`)를 사용한다. 파이썬 이터러블 객체와 달리 각 차원에 대한 위치를 쉼표(`,`)로 구분하여 하나의 대괄호에 전부 나타낸다. 인덱싱 자체는 배열에 어떠한 영향을 주지 않으며, 단순히 해당 위치의 데이터만 보여준다.

배열의 단일 요소 인덱싱은 다음과 같이 작성한다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

print(var[2, 3])    # >> 출력: 13
```

배열의 개별 요소가 아닌 일부분을 호출하려면 원하는 차원 범위를 [시퀀스 슬라이싱](#시퀀스-슬라이싱)이나 리스트(또는 튜플) 객체로 지정한다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

# 배열 A의 행 전체에서 0번째 열부터 4번째 열 이전까지 호출
print(var[:, 0:4])
''' 출력:
[[ 0  1  2  3]
 [ 5  6  7  8]
 [10 11 12 13]]
'''

# 배열 A의 1, 3번째 행의 1번째 열부터 마지막 열까지 2의 간격으로 호출
print(var[[0,2], 1::2])
''' 출력:
[[ 1  3]
 [11 13]]
'''
```

넘파이 배열도 리스트 객체와 마찬가지로 인덱싱에 숫자 `-1`은 차원의 마지막 요소를 가리킨다.

### 넘파이 편집
넘파이 배열의 값을 변경하려면 우선 인덱싱으로 원하는 위치 또는 부분을 호출해야 한다. 그리고 인덱싱 크기와 일치하는 새로운 배열을 할당한다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

# 배열 A의 3번째 행의 4번째 열의 요소 변경
var[3, 4] = 0
''' 결과:
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12  0 14]]
'''

# 배열 A의 1번째부터 2번째 행의 3번째와 5번째 열 범위 변경
var(1:2, [3,5]) = zeros(2)
''' 결과:
[[ 0  1  0  3  0]
 [ 5  6  0  8  0]
 [10 11 12  0 14]]
'''
```

### 넘파이 형태
넘파이 배열의 형태, 즉 차원 개수와 크기는 배열의 `ndarray.shape` 속성으로 확인할 수 있다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

# 넘파이 배열의 크기
print(var.shape)
```
```
(3, 5)
```

넘파이 배열은 `ndarray.reshape` 메소드를 통해 원하는 형태를 갖는 넘파이 배열을 반환할 수 있다. 단, 이는 해당 배열 자체의 형태를 변경하는 게 아니라는 점을 주의해야 한다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

# 5x3x1 크기의 3차원 배열 반환
print(var.reshape((5, 3, 1)))
''' 출력:
[[[ 0] 
  [ 1] 
  [ 2]]
       
 [[ 3] 
  [ 4]
  [ 5]]

 [[ 6]
  [ 7]
  [ 8]]

 [[ 9]
  [10]
  [11]]

 [[12]
  [13]
  [14]]]
'''

print(var)
''' 출력:
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12  0 14]]
'''
```

### 넘파이 확장
넘파이 배열은 처리속도가 빠른 대신 동적 배열을 갖지 않는다. 그러므로 기존 `ndarray` 객체에서 크기를 확장한다는 것은 불가능하다. 위의 부분에서 `ndarray.reshape`을 사용한 것만 보더라도 기존의 넘파이 배열 크기는 절대 변하지 않으며, 단지 새로운 넘파이 배열을 반환할 뿐이다.

연결(concatenation)은 배열들을 연결시켜 하나의 더 큰 배열로 만드는 과정으로, 두 가지의 함수를 소개한다: 

저급 `numpy.concatenate` 함수는 두 개 이상의 넘파이 배열을 한꺼번에 연결할 수 있다. 기본적으로 연결 차원축이 `axis = 0`으로 되어있으며, 반드시 동일한 차원을 가져야 한다. 만일 `None`일 경우, 함수는 배열들을 1차원 배열로 납작하게 만들어(일명 flatten) 연결한다.

```python
import numpy as np
A = np.array([[0, 1], [2, 3]])    # 2x2 넘파이 배열
B = np.array([[4, 5]])            # 1x2 넘파이 배열
C = np.array([[6], [7]])          # 2x1 넘파이 배열

# 1차원 축으로 배열 연결: 3x2 넘파이 배열
np.concatenate((A, B), axis = 0)
''' 출력:
[[1 2]
 [3 4]
 [5 6]]
'''

# 2차원 축으로 배열 연결: 2x3 넘파이 배열
np.concatenate((A, C), axis = 1)
''' 출력:
[[1 2 7]
 [3 4 8]]
'''
```

고급 `numpy.append` 함수는 넘파이 연결을 더 쉽게 활요할 수 있도록 하나, 사실상 내부적으로 저급 `numpy.concatenate` 함수를 사용하고 있다. 한 번에 두 개의 배열만 연결할 수 있으며, `axis = None`으로 기본적으로 납작하게 만들어 연결한다.

```python
import numpy as np
A = np.array([[0, 1], [2, 3]])    # 2x2 넘파이 배열
B = np.array([[4, 5]])            # 1x2 넘파이 배열

# 납작하게 만들어 배열 연결: 1x6 넘파이 배열
np.append(A, B)
''' 출력:
[0 1 2 3 4 5]
'''

# 1차원 축으로 배열 연결: 3x2 넘파이 배열
np.append(A, B, axis = 0)
''' 출력:
[[0 1]
 [2 3]
 [4 5]]
'''
```

## 넘파이 자료형
넘파이 배열의 자료형은 `numpy.dtype` 클래스로부터 지정되는데, 다음 자료형의 성질들을 설정할 수 있다.

1. *데이터 유형*
    * `?`: 논리형
    * `b`/`B`: signed/unsigned 바이트
    * `i`/`u`: signed/unsigned 정수
    * `f`: 부동소수점 실수
    * `c`: 부동소수점 복소수
    * `U`: 유니코드 문자열
    * `a`: 바이트 문자열

1. *데이터 크기*
    * 숫자형: 구성 바이트 개수
    * 문자열: 구성 문자 개수

1. *[엔디언](https://ko.wikipedia.org/wiki/엔디언)(endianess)*
    * `>`: 빅 엔디언
    * `<`: 리틀 엔디언

넘파이 자료형의 일부는 파이썬 내장 자료형과 호환되어 사용할 수 있다.

| 파이썬 자료형   | 넘파이 자료형              | 설명             |
|:---------:|:---------------------|----------------|
| `bool`    | `numpy.dtype('?')`   | 논리형            |
| `int`     | `numpy.dtype('i8')`  | 64비트 정수        |
| `float`   | `numpy.dtype('f8')`  | 배정밀도 부동소수점 실수  |
| `complex` | `numpy.dtype('c16')` | 배정밀도 부동소수점 복소수 |
| `str`     | `numpy.dtype('a')`   | 유니코드 문자열       |
| `bytes`   | `numpy.dtype('U')`   | 바이트 문자열        |

```python
import numpy as np

np.array([[0, 1], [2, 3]], dtype = np.dtype('c8'))
''' 결과:
[[0.+0.j 1.+0.j]
 [2.+0.j 3.+0.j]]
'''

np.array([[0, 1], [2, 3]], dtype = bool)
''' 결과:
[[False  True]
 [ True  True]]
'''
```

### 넘파이 자료형 변환
넘파이 배열의 자료형을 `ndarray.dtype` 속성에서 확인할 수 있다. 그러나 해당 속성을 직접 수정하는 것은 매우 위험한 행위이다.

> C++로 설명하자면 `static_cast` 연산자가 아닌 `reinterpret_cast` 연산자로 변환한 것과 동일하다. 즉, 메모리에 할당된 데이터는 그대로인 채 자료형만 바뀌는 잘못된 캐스팅이 일어난다.

넘파이 배열의 자료형을 안전하게 변환하려면 `ndarray.astype`을 사용한다.

```python
import numpy as np

var = np.array([[0, 1], [2, 3]], dtype = np.dtype('<f4'))
print(var)
''' 출력:
[[0. 1.]
 [2. 3.]]
'''

# 올바른 자료형 변환: 바이트
print(var.astype(np.ubyte))
''' 출력:
[[0 1]
 [2 3]]
'''

# 잘못된 자료형 변환: 바이트
var.dtype = np.ubyte
print(var)
''' 출력:
[[  0   0   0   0   0   0 128  63]
 [  0   0   0  64   0   0  64  64]]
'''
```

## 넘파이 연산
다음은 넘파이 배열에 사용되는 연산자의 목록이다.

| 연산                          | 이름                                              | 설명                                               |
|:---------------------------:|-------------------------------------------------|--------------------------------------------------|
| `numpy.add`(`+`)            | 덧셈                                              | `+A`와 같이 단항 연산자로 사용되면 `A`의 부호가 유지된다.             |
| `numpy.subtract`(`-`)       | 뺄셈                                              | `-A`와 같이 단항 연산자로 사용되면 `A`의 부호가 반전된다.             |
| `numpy.numltiply`(`*`)      | [아다마르 곱셈](https://ko.wikipedia.org/wiki/아다마르_곱) | 동일한 크기를 갖는 두 배열의 각 요소를 곱한다.                      |
| `numpy.matmul`(`@`)         | [행렬 곱셈](https://ko.wikipedia.org/wiki/행렬_곱셈)    | 두 배열을 곱하는 이항연산이며, 첫 번째의 열과 두 번째의 행의 크기가 동일해야 한다. |
| `numpy.divide`(`/`)         | 아마다르 나눗셈                                        | 동일한 크기를 갖는 두 배열의 각 요소를 나눈다.                      |
| `numpy.power`(`**`)         | 아마다르 제곱                                         | 동일한 크기를 갖는 두 배열의 각 요소로 제곱을 구한다.                  |
| `numpy.linalg.matrix_power` | 행렬 제곱                                           | 행렬의 제곱을 구한다; `matrix_power(A,2)`는 `A*A`와 동일하다.   |
| `numpy.linalg.inv`          | 역행렬                                             | 행렬 곱셈으로 단위정방행렬이 나오는 배열을 구한다.                     |
| `numpy.transpose`           | [전치](https://ko.wikipedia.org/wiki/전치행렬)        | 행과 열을 교환한다.                                      |

> `numpy.linalg`는 선형대수학(**LIN**ear **ALG**ebra)을 처리하는 함수들과 데이터를 갖는다.

### 브로드캐스팅
브로드캐스팅(broadcasting)은 형태가 다른 배열 간의 연산을 넘파이가 어떻게 처리하는지를 설명한다. 작은 배열은 큰 배열에 걸쳐 "브로캐스트"되어 호환되는 형태로 연산된다.

```python
import numpy as np
var = np.array([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]])

# 브로드캐스팅 1
print(var * 2)
''' 출력:
[[ 0  2  4  6  8]
 [10 12 14 16 18]
 [20 22 24 26 28]]
'''

# 브로드캐스팅 2
print(var + [0, 1, 2, 3, 4])
''' 출력:
[[ 0  2  4  6  8]
 [ 5  7  9 11 13]
 [10 12 14 16 18]]
'''
```

# 넘파이: Matplotlib
[Matplotlib](https://matplotlib.org/)는 그래프를 그리는데 활용되는 파이썬 프로그래밍 언어의 라이브러리이다. 넘파이와 함께 사용될 수 있으며, 인터페이스는 [MATLAB](../ko.PRGMING_MATLAB/)과 유사하도록 디자인되었다. 2020년부터 matplotlib는 파이썬의 공식 선언에 따라 파이썬 3에서만 지원한다.

Matplotlib는 독립적인 라이브러리이므로 별도로 설치해야 하며, 아래의 명령어를 입력한다.

```
python -m pip install matplotlib
```

## `pyplot` 모듈
`matplotlib.pyplot` 모듈은 matplotlib 라이브러리가 [MATLAB](../ko.PRGMING_MATLAB/#matlab-그래프)과 유사하게 동작하도록 하는 API들의 묶음이다. 즉, MATLAB과 동일하게 간단한 프로그래밍으로 원하는 그래프를 그릴 수 있도록 하는 목적을 갖는다. 아래의 코드로 `pyplot` 모듈을 불러온다. 여기서 플롯(plot; 전개)이란, 함수를 전개하므로써 "그래프를 그린다"는 의미를 갖는다.

```python
import matplotlib.pyplot as plt
```

그 외에도 matplotlib는 다양한 모듈을 갖지만, 그래프 생성에서는 `pyplot` 모듈이 가장 대표적이다.

## 도면
도면(figure)은 그래프를 그릴 수 있는 창이며, `pyplot.figure` 함수로 생성된다.

> Matplotlib에서는 용어 "figure"에 대한 공식 한국어 번역이 없다. "도면"은 본 문서에서 임시로 정한 번역 용어이다.

![Matplotlib 도면 창](/images/docs/numpy/matplotlib_figure_window.png)

Matplotlib 도면 설정은 다음과 같이 변경할 수 있다.

```python
import matplotlib.pyploy as plt

# MATPLOTLIB 도면 제목을 "Hello World!" 그리고 크기는 너비 4인치, 높이 3인치
plt.figure("Hello World!", (4, 3))

# MATPLOTLIB 도면을 활성화
plt.show()
```

## 도표
도표(axes)는 도면 위에서 실제로 그래프를 그리게 되는 영역이며, `pyplot.axes` 함수로 생성된다. 한 도면에은 여러 도표를 위치시킬 수 있다. 도표마다 제목을 붙여주려면 `Axes.set_title` 함수를 사용한다.

> Matplotlib에서는 용어 "axes"에 대한 공식 한국어 번역이 없다. "도표"은 본 문서에서 임시로 정한 번역 용어이다.

![Matplotlib 도면](/images/docs/numpy/matplotlib_figure_axes.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)
y2 = np.cosh(x)

plt.figure()

# 도면 전체를 채우는 도표를 생성
ax1 = plt.axes()
ax1.plot(x, y1)
ax1.set_title("Axes 1")

# 도면에서 좌향 0.45, 상향 0.25, 너비 0.4, 그리고 높이 0.3 비율에 위치
ax2 = plt.axes((0.45, 0.25, 0.4, 0.3))
ax2.plot(x, y2)
ax2.set_title("Axes 2")

plt.show()
```

### 축 범위 설정
도표의 축 범위 설정은 `Axes.set_xlim` 및 `Axes.set_ylim` 함수를 사용한다. 도표의 축 범위를 지정할 때에는 축의 최소치 및 최대치 순서로 기입한다. 그리고 `Axes.set_xlable` 및 `Axes.set_ylabel` 함수로 $$x$$ 축과 $$y$$ 축에 레이블을 넣을 수 있다.

![Matplotlib 도표 축 범위 설정](/images/docs/numpy/matplotlib_axes_axis.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)

plt.figure()

ax1 = plt.axes()
ax1.plot(x, y1)

# ax1 도표의 x축 [0, 20] 그리고 y축 [-1.5, 1.5] 범위 설정
ax1.set_xlim([0, 20])
ax1.set_ylim([-1.5, 1.5])

# x축 및 y축에 레이블 기입
ax1.set_xlabel("Horizontal")
ax1.set_ylabel("Vertical")

plt.show()
```

### 격자 레이아웃
도표는 `pyplot.axes` 함수 외에 생성할 수 있는 방법이 다양하다. 그 중에서는 `gridspec.GridSpec` 격자형 레이아웃을 도면에 적용하여 `pyplot.subplot`으로 원하는 위치와 크기로 레이아웃에 맞게 도표를 삽입하는 방법이 있다.

![Matplotlib 격자형 레이아웃](/images/docs/numpy/matplotlib_figure_gridspec.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)
y2 = np.cosh(x)
y3 = np.tanh(x)
y4 = -2 * x**3

# 도면에 3x3 격자형 레이아웃 gs을 적용
fig = plt.figure()
gs = fig.add_gridspec(3, 3)

# 격자형 레이아웃의 0번 열 & 0번 행에 도표 생성
ax1 = fig.add_subplot(gs[0, 0])
ax1.plot(x, y1)

# 격자형 레이아웃의 1~마지막 열 & 첫~2번 행에 도표 생성
ax2 = fig.add_subplot(gs[1:,:2])
ax2.plot(x, y2)

# 격자형 레이아웃의 0번 열 & 1~마지막 행에 도표 생성
ax3 = fig.add_subplot(gs[0, 1:])
ax3.plot(x, y3)

# 격자형 레이아웃의 1~마지막 열 & 2번 행에 도표 생성
ax4 = fig.add_subplot(gs[1:, 2])
ax4.plot(x, y4)

plt.show()
```

Matplotlib는 아래와 같이 `gridspec.GridSpec`을 사용하지 않고 `pyplot.subplot`만으로도 격자 레이아웃으로 도표를 배치시킬 수 있다. 이는 도면들이 반드시 직사각형 형태이어야 한다는 전재가 바탕이 되기에 가능하다.

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)
y2 = np.cosh(x)
y3 = np.tanh(x)
y4 = -2 * x**3

# 도면 생성
fig = plt.figure()

# 3x3 레이아웃의 1번 위치에 도표 생성
ax1 = fig.add_subplot(3, 3, 1)
ax1.plot(x, y1)

# 3x3 레이아웃의 2~3번 위치에 도표 생성
ax2 = fig.add_subplot(3, 3, (2, 3))
ax2.plot(x, y2)

# 3x3 레이아웃의 4~8번 위치에 도표 생성
# ...그러나 직사각형을 유지해야 하기에 6번에는 도표가 생성되지 않는다.
ax3 = fig.add_subplot(3, 3, (4, 8))
ax3.plot(x, y3)

# 3x3 레이아웃의 6~9번 위치에 도표 생성
# ...그러나 직사각형을 유지해야 하기에 7번 및 8번에는 도표가 생성되지 않는다.
ax4 = fig.add_subplot(3, 3, (6, 9))
ax4.plot(x, y4)

plt.show()
```

이는 `gridspec.GridSpec`을 사용한 예시와 동일한 결과를 보여준다.

## 그래프 결합
Matplotlib에서는 하나의 도표에 여러 그래프를 그릴 수 있도록 지원한다. 단순히 해당 도표에서 `Axes.plot` 함수를 사용하면 기존 그래프 플롯을 유지한 채 덧붙여 그린다. `Axes.legend` 함수를 통해 도표가 갖는 플롯의 범례를 표시할 수 있다.

![Matplotlib 그래프 결합](/images/docs/numpy/matplotlib_plot_combined.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure()
ax1 = plt.axes()

# y1(x) 및 y2(x) 그래프를 하나의 ax1 도표에 플롯
p1, = ax1.plot(x, y1)
p2, = ax1.plot(x, y2)
''' 동일:
ax1.plot(x, y1, x, y2)
'''

# 2열 범례의 테두리 하단부 중앙이 도표의 (0.5, 1.0)에 위치하도록 추가
ax1.legend([p2, p1], ["cos(x)", "sin(x)"], 
    loc='lower center', bbox_to_anchor=(0.5, 1), ncol = 2)

plt.show()
```

## 그래프 스타일
그래프 곡선의 색상, 선 종류 및 너비와 같은 스타일은 `Axes.plot` 함수에서 추가 인자를 건네주어 설정할 수 있다.

![Matplotlib 그래프 스타일](/images/docs/numpy/matplotlib_plot_style.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure()
ax1 = plt.axes()

# y1(x): 적색 파선 & 'X'자 표시
ax1.plot(x, y1, 'r--x')

# y2(x): RGB(34,187,34) 4.0 너비의 실선 & 8.0 크기의 원형 표시
ax1.plot(x, y2, c = '#22BB22',
    linestyle = '-', linewidth = 4,
    marker = 'o', markersize = 8)

plt.show()
```

## 산점도
Matplotlib는 `Axes.scatter` 함수로도 도표에 데이터를 플롯할 수 있다. 이는 각 포인트마다 직선으로 연결되는 `Axes.plot` 함수와 달리, 산점도 플롯은 원형 표시만으로 대체된다.

![Matplotlib 산점도 플롯](/images/docs/numpy/matplotlib_plot_scatter.png)

```python
import matplotlib.pyplot as plt
import numpy as np

x  = np.linspace(-10, 10, 100)
y1 = np.sin(x)

fig = plt.figure()

# plot 함수로 사인 함수 플롯
ax1 = fig.add_subplot(2, 1, 1)
ax1.plot(x, y1)
ax1.set_title("Plot Function")

# scatter 함수로 사인 함수 플롯
ax2 = fig.add_subplot(2, 1, 2)
ax2.scatter(x, y1)
ax2.set_title("Scatter Function")

# 1번 도표의 x축 레이블과 2번 도표의 제목 겹침 현상 방지
fig.set_tight_layout(True)
plt.show()
```

산점도는 $$x$$ 축에 따른 함수의 변화를 관측하는 목적으로 사용되지 않는다. 오히려 변수 $$x$$와 변수 $$y$$의 분포를 통해 관계성을 확인 및 분석하기 위한 목적을 갖는다.
