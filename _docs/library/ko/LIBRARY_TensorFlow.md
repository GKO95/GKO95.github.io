---
layout: docs
author: GKO95
category: Library
title: "라이브러리 | 텐서플로우"
logo: "/assets/img/res/logo-tf2.png"
order: 0x13
---
{% include expand.html %}
# **텐서플로우: 소개**
> *홈페이지: [https://www.tensorflow.org/](https://www.tensorflow.org/)*

텐서플로우(TensorFlow; 일명 TF)는 구글에서 개발한 데이터 흐름(dataflow) 라이브러리이며 인공지능의 신경망을 구축하는데 사용된다. C++ 언어로 작성된 라이브러리이지만 C 언어, 파이썬, 자바 등 다른 프로그래밍 언어에서도 사용될 수 있다. 그리고 2017년에 출시된 텐서플로우 1과 2019년에 출시된 텐서플로우 2가 있으며, 이 둘의 API 및 동작 방식은 상당히 다르다. 본 문서는 파이썬 3에서 텐서플로우 2를 기준으로 설명을 하나 중간에 텐서플로우 1를 참고사항으로 함께 설명할 수 있다.

## 텐서
텐서(tensor)란, 다중차원의 배열 형태 데이터를 의미하며 파이썬의 [넘파이](/docs/programming/ko/PRGMING_Python/#파이썬-넘파이)와 동일한 역할을 한다. 수학에서 [텐서](https://ko.wikipedia.org/wiki/텐서)는 차원형 데이터의 일반적인 형태로써, 스칼라(scalar)와 벡터(vector)는 각각 0과 1차원을 가지는 텐서를 지칭한다.

만일 미디어 자료를 텐서로 표현하자면 다음과 같이 나타낼 수 있다.

* 이미지: 3차원 텐서 (차원: RGB 색상, 너비, 높이)
* 비디오: 4차원 텐서 (차원: 프레임, RGB 색상, 너비, 높이)

```python
3                              # 0차원 텐서 (일명 스칼라): 크기 []
[1.,2.,3.]                     # 1차원 텐서 (일명 벡터): 크기 [3]
[[1.,2.,3.],[4.,5.,6.]]        # 2차원 텐서; 크기 [2,3]
[[[1.,2.,3.]],[[7.,8.,9.]]]    # 3차원 텐서: 크기 [2,1,3]
```

텐서플로우 1에서는 텐서의 배열값을 보기 위해서는 복잡한 절차가 필요하였으며, 파이썬의 `print()` 출력 함수는 단순히 텐서의 정보만을 보여주었다. 하지만 텐서플로우 2에서는 텐서 정보는 물론 넘파이처럼 배열값을 볼 수 있다. 다음은 텐서플로우 2의 텐서를 출력하였을 시 나타나는 자료이다.

```python
# 출력 대상: (독립적) 상수 텐서.
A = tf.constant([[1,2,3],[4,5,6]], name="tensorA")
print(A)

# 출력 대상: (종속적) 변수 텐서. 
B = tf.Variable(x + 2, name="tensorB")
print(B)
```

```
tf.Tensor(
[[1 2 3]
 [4 5 6]], shape=(2, 3), dtype=int32)
 
<tf.Variable 'B:0' shape=(2, 3) dtype=int32, numpy=
array([[3, 4, 5],
       [6, 7, 8]])>
```

## 텐서플로우
텐서플로우의 어원은 두 단어의 조합이다: tensor + flow, 즉 "텐서 데이터의 흐름"이다. 이러한 데이터 흐름 알고리즘은 [트리 구조](https://ko.wikipedia.org/wiki/트리_구조) 그래프로 나타나며, 이는 또한 텐서플로우 결과물의 메모리 구조이기도 한다. 다음은 텐서플로우 그래프를 데이터 흐름도로 나타낸 것을 보여준다.

![그림 1. 텐서플로우 그래프 예시](/assets/img/docs/library/TensorFlow/tf_example_graph.png)

| 구성요소     | 기호     | 설명           |
|:--------:|:------:|--------------|
| 가지(edge) | 화살표    | 텐서의 이동 경로    |
| 노드(node) | 테두리 도형 | 텐서 연산자, 즉 `Operation` 객체 |

## 텐서플로우 객체
텐서플로우 라이브러리는 크게 `Tensor`와 `Operation`이라는 두 가지의 객체로 구성되며, 이 둘에 대한 구분은 확실히 할 수 있어야 한다.

|   객체    | 설명                                      |
| :---------: | :------------------------------------- |
|  `Tensor`<br/>(텐서)   | 텐서 형태의 데이터 객체이며, 텐서플로우 그래프의 "가지"로부터 크기를 확인할 수 있다. 공식 홈페이지에서는 `Tensor` 객체를 "`Operation` 객체 결과물의 심볼릭 핸들"이라고 정의한다. 프로그래밍 언어에 대조하면 [값](https://ko.wikipedia.org/wiki/값_(컴퓨터_과학))(value)과 같다.<br /><br />예시: "`tf.constant()`" 혹은 "`tensor = tf.add(A,B)` 문에서 `tensor` 변수" |
| `Operation`<br/>(연산) | `Tensor` 객체의 연산자이며, 텐서플로우 그래프의 "노드"에 해당한다. 공식 홈페이지에는 `Operation` 객체를 "0개 이상의 `Tensor` 객체를 입력으로 받아 0개 이상의 `Tensor` 객체를 반환"한다고 정의한다. 프로그래밍 언어에 대조하면 [함수](https://ko.wikipedia.org/wiki/함수_(프로그래밍))(function)와 같다.<br /><br />예시: "`tf.Variable()`" 혹은 "`tensor = tf.add(A,B)` 문에서 `tf.add(A,B)` 함수" |

# **텐서플로우: 설치**
텐서플로우는 오픈소스 라이브러리로 [GitHub](https://github.com/tensorflow/tensorflow)에서 소스 코드를 확인할 수 있다. 그러나 본 GitHub Pages에서 소개한 또다른 라이브러리인 [OpenCV](/docs/library/ko/LIBRARY_OPENCV/)와 다르게, 이번에는 이미 빌드가 완료된 라이브러리 파일을 다운로드 및 설치할 것이다. 소스 코드로부터 빌드하는 과정이 매우 골치아프며 그러할 필요도 없기 때문이다.

## 파이썬
파이썬에서 최신 버전의 텐서플로우를 사용하려면 [pip](/docs/programming/ko/PRGMING_PYTHON/#pip)에서 다음과 같이 패키지를 설치한다.

```python
python -m pip install tensorflow
```

현재(2021년 1월) 기준으로 텐서플로우는 2.4가 가장 최신 버전이다. 특정 버전의 텐서플로우를 설치하려면 아래와 같이 `==` 뒤에 설치하고 싶은 버전 번호를 입력한다.

```python
python -m pip install tensorflow==2.3
```

텐서플로우 2에서는 하나의 텐서플로우 패키지에서 CPU 및 GPU 동작이 모두 가능하나, 이전의 텐서플로우 1에서는 CPU 버전과 GPU 버전이 나뉘어져 있다. 그러므로 텐서플로우 1 패키지를 설치하려면 이를 명확히 명시해야 한다.

```python
python -m pip install tensorflow==1.15        # 텐서플로우 1 CPU 버전
python -m pip install tensorflow-gpu==1.15    # 텐서플로우 1 GPU 버전
```

## C 언어
> *참조: [TensorFlow for C 설치](https://www.tensorflow.org/install/lang_c)*

텐서플로우는 C 언어 API를 제공하나, 사용할 수 있는 플랫폼이 다음과 같이 제한된다.

* 윈도우 64비트, x86 아키텍처
* 리눅스 64비트, x86 아키텍처
* macOS 버전 10.12.6 시에라 이상

C 언어 API 라이브러리는 위에 참조된 링크를 통해 압축파일을 다운로드 할 수 있다. 윈도우와 리눅스에서는 CPU 버전과 GPU 버전이 별개로 제공되지만, macOS는 CPU 버전만 사용할 수 있다.

윈도우에서 텐서플로우 라이브러리를 사용하는 방법은 [여기](/docs/library/ko/LIBRARY_OpenCV/#윈도우-os-1)에서 참고한다.

리눅스 (그리고 macOS)의 경우, 압축파일 안에 `lib` 및 `include` 폴더 내용물을 각각 `/usr/local/lib`와 `/usr/local/include` 경로에 넣기를 권장한다. 이는 시스템 내에서 소프트웨어를 설치할 때 사용되는 경로이며, 파일을 옮기기 위해 관리자 권한이 필요하다. 옮긴 이후에는 새 라이브러리를 시스템에서 인식할 수 있도록 다음 명령어를 입력한다.

```bash
sudo ldconfig
```

# **텐서플로우: 기초**
텐서플로우를 사용하기 위해서는 반드시 준수되어야 할 규칙과 인지하고 있어야 하는 API가 존재한다. 이를 어길 시에는 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장은 텐서플로우 라이브러리의 기초적인 동작 원리 및 API 소개를 목표로 한다.

## 상수 텐서
상수 텐서(constant tensor)는 고정된 값을 가진 텐서를 가리키며 `tf.constant()` API로 생성된다. 상수 텐서를 생성하는 방법에는 두 가지가 존재한다: (1) 넘파이 형식의 배열값을 직접 입력하거나 (2) 텐서 크기와 채워질 하나의 값을 입력한다.

```python
import tensorflow as tf

tf.constant("Hello World!")          # 문자열 상수 텐서
tf.constant([[1,2,3],[4,5,6]])       # 상수 텐서 생성: 방식 (1)
tf.constant(value=1, shape=[2,3])    # 상수 텐서 생성: 방식 (2)
```

### 바이트 리터럴
문자열 기반의 텐서를 출력하면 `b` 접두사를 가지는 것을 확인할 수 있는데, 이는 바이트 리터럴(byte literal)로 간단히 ASCII 문자임을 의미한다. 

```
tf.Tensor(b'Hello World!', shape=(), dtype=string)
```

ASCII 이외에도 UTF-8이나 UTF-16 등의 문자 인코딩 형식이 존재한다. 이들은 한 개 이상의 바이트(byte)를 사용하여 더 많은 문자를 표현할 수 있는 장점을 지닌다. 그러나 하나의 문자를 표현하기 위해 사용되는 바이트 개수나 동일한 문자를 표현하는 값이 다르면 호환성을 보장할 수 없다.

그에 반해 ASCII는 단 하나의 바이트만을 사용하여 표현할 수 있는 문자가 총 256개로 제한적이지만 알파벳 및 숫자를 표현하기에는 충분하다. 특히 UTF와 달리 호환성이 보장되므로 컴퓨터 가독(machine-readable) 데이터로 가장 적합하다.

## 변수 텐서
변수 텐서(variable tensor)는 값이 변하는 텐서를 가리키며 `tf.Variable()` API로 생성된다. 변수 텐서는 반드시 사용하기 전에 반드시 스칼라나 배열값, 혹은 연산 객체로 초기화하여야 한다.

```python
import tensorflow as tf

tf.Variable(1.0)                      # 변수 텐서 초기화: 스칼라
tf.Variable([[1,2,3],[4,5,6]])        # 변수 텐서 초기화: 배열값
tf.Variable(tf.random.normal([1]))    # 변수 텐서 초기화: 연산 객체
```

## 텐서플로우 실행
텐서플로우 1에서는 실행 방법이 오로지 하나만 존재하였으며, 이는 두 단계로 나뉘어져 있었다: (1) 그래프 메모리 구조 구축, 그리고 (2) 세션을 실행하여 그래프를 동작시켰다. 다음은 텐서플로우 1에서 두 개의 상수 텐서를 더하는 코드이다.

```python
import tensorflow as tf

# 그래프 구축 (텐서플로우 1)
A = tf.constant([[1,2,3],[4,5,6]], name="tensorA")
B = tf.constant(1, shape=[2,3], name="tensorB")
C = tf.add(A, B, name="tensorAdd")

# 세션 실행 (텐서플로우 1)
with tf.compat.v1.Session() as sess:
    print(sess.run(C))
```

```
[[2,3,4]
 [5,6,7]]
```

텐서플로우 2에서는 실행 방식이 두 가지로 늘어났으며, 이들은 간략히 설명하면 다음과 같다.

* 즉시 실행: 쉽고 빠른 텐서플로우 실행 방식으로 *Debug* 용도로 사용한다.
* 오토그래프: 최적화 및 배포를 위한 텐서플로우 실행 방식으로 *Release* 용도로 사용한다.

### 즉시 실행
즉시 실행(eager execution)은 텐서플로우 2의 기본 실행 방식으로, 그래프 메모리 구조 구축 없이 일반적인 파이썬 프로그래밍 언어처럼 실행된다. 본 방식은 소량의 자료만으로 실행하거나 텐서플로우 동작을 시험, 혹은 디버깅 목적으로 활용된다. 비록 그래프를 구축하지 않아도 GPU 가속이 지원된다. 

```python
import tensorflow as tf

# 즉각 모드 (eager mode)
A = tf.constant([[1,2,3],[4,5,6]], name="tensorA")
B = tf.constant(value=1, shape=(2,3), name="tensorB")
C = tf.add(A, B, name="tensorAdd")

print(C)
```

```
tf.Tensor(
[[2 3 4]
 [5 6 7]], shape=(2, 3), dtype=int32)
```

그러나 즉시 실행 모드는 학습 처리작업을 여러 개의 처리요소에게 분담시키지 못하며, 그래프 메모리 구축 시 기대할 수 있는 성능 최적화 및 배포에 매우 취약한 치명적인 단점을 지닌다.

### 오토그래프
오토그래프(AutoGraph)는 `tf.function` API를 사용하여 그래프를 구축하므로써 즉시 실행 시 가지는 취약점을 보완하는 실행 방식이다. 오토그래프로 실행하기 전에 즉시 실행을 통해 우선 시험하는 것을 적극 권장한다. 그 다음 `@tf.function` 구문을 통해 함수로 [데코레이팅](/docs/programming/ko/PRGMING_Python/#-기호)하여 그래프를 구축한다.

```python
import tensorflow as tf

# 그래프 모드 (graph mode)
A = tf.constant([[1,2,3],[4,5,6]], name="tensorA")
B = tf.constant(value=1, shape=(2,3), name="tensorB")

@tf.function
def forward(x, y):
    return tf.add(x, y, name="tensorAdd")

C = forward(A, B)

print(C)
```

그래프 모드에서의 함수는 최적화가 되었을 시, 즉시 실행 모드에서의 코드보다 훨씬 더 빠른 처리속도를 선보인다. 하지만 컨볼루션과 같은 일부 무거운 연산은 그만큼의 가속 효과를 기대할 수 없다. 오토그래프에 대한 자세한 설명은 다음 장인 *텐서플로우: 그래프*에서 이어진다.

# **텐서플로우: 그래프**
텐서플로우에서 그래프는 단순히 데이터 흐름도가 아닌 신경망을 구성하는 메모리 구조를 의미한다. 그리고 그래프는 텐서보드(TensorBoard)라는 텐서플로우 전용 그래프/데이터 분석 도구를 통해 시각적으로 볼 수 있다. 텐서플로우의 그래프 및 프로파일러와 같은 요약(summary) 데이터 저장은 `tf.summary` API에서 관리된다. 텐서플로우의 그래프를 읽을 수 있는 능력은 인공지능 모델이 어떻게 구축되었는지 이해하고 분석하는데 도움이 될 수 있다.

```python
python -m pip install tensorboard
```

## `tf.function` API
`tf.function`는 오토그래프를 생성하는 매우 중요한 텐서플로우 API이며, 이는 텐서보드에서 그래프를 시각적으로 보여준다. 해당 API는 함수나 메소드와 같은 코드 블록을 전달인자로 받는 `func` 매개변수를 가지지만, 데코레이터 `@`를 사용하여 아래처럼 표현할 수 있다.

```python
@tf.function
def forward(x, y):
    return tf.add(x, y, name="tensorAdd")

''' 동일:
def function(x, y):
    return tf.add(x, y, name="tensorAdd")
    
function = tf.function(func = function)
'''
```

본 API는 텐서플로우 스크립트의 모든 함수와 메소드에 적용될 필요가 없다. 오로지 학습에 사용되는 함수에만 적용해도 충분하며, 필요하다면 관측이 필요한 함수에도 활용 가능하다. 하나의 코드에 함수가 반복적으로 적용될 시, 해당 부분의 그래프는 단일의 `tf.PartitionedCall` 혹은 `tf.StatefulPartitionedCall` 노드로 대체된다.

### 콘크리트 함수
콘크리트 함수(concrete function)는 하나의 시그니처만을 지원하는 `tf.function` API의 그래프이다. 여기서 시그니처(signature)란, 연산자의 입력과 출력에 대한 설명을 의미한다. 아래의 코드와 같이 `input_signature` 인자를 `tf.function` API의 시그니처로 건네주므로써 지정된 텐서의 크기 및 자료형만 입력받을 수 있다.

```python
# 콘크리트 함수 (단일 시그니처 전용)
@tf.function(input_signature=[
    tf.TensorSpec(shape=[3,1], dtype=tf.float32), # -> 매개변수 x
    tf.TensorSpec(shape=None,  dtype=tf.float32)  # -> 매개변수 y
])
def forward(x, y):
    return tf.add(x, y, name="tensorAdd")
```

콘크리트 함수와 반대로, 특정 시그니처가 정해지지 않은 그래프 함수를 다형성 함수(polymorphic function)이라고 한다.

## 텐서보드
> *참조: [TensorBoard 시작하기](https://www.tensorflow.org/tensorboard/graphs#graphs_of_tffunctions)*

우선 텐서플로우 그래프 요약 데이터 수집에는 기본적으로 아래의 API들이 필요하다.

| API                               | 설명                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| `tf.summary.create_file_writer()` | 요약 파일 생성하며, `tf.summary.SummaryWriter` 객체를 반환한다. |
| `tf.summary.trace_on()`           | 텐서플로우 그래프 기록 및 프로파일링을 위해 추적(trace)을 시작한다. |
| `tf.summary.trace_export()`       | 추적을 중단하고 기록된 내역을 요약 및 프로파일 파일로 건네준다. |
| `tf.summary.trace_off()`          | 추적을 중단하고 기록된 내역을 전부 삭제한다. |

`tf.summary` API로부터 생성된 데이터는 `_SummaryState` 쓰레드 객체 덕분에 내부적으로 공유되어 텐서보드 자료관리에 사용되기 때문에, 네 개의 별개의 API처럼 보이지만 전부 동일한 하나의 요약 데이터를 처리하고 있다.

이전 장에서의 [오토그래프](#오토그래프) 예시 코드를 그대로 가져와서 그래프를 텐서보드에서 시각화 하는 방법을 소개한다.

```python
# 요약 파일을 지정된 경로에 생성 & 요약 작성자 객체화
writer = tf.summary.create_file_writer("tmp/tensorboard_logs")

# 그래프 및 프로파일 기록: 여기서부터 시작!
tf.summary.trace_on(graph=True)

C = forward(A,B)

# 요약 작성자 활성화
with writer.as_default():
    # 그래프 및 프로파일 기록: 기록된 요약 데이터를 "writer"의 0번째 단계에 작성 및 중단!
    tf.summary.trace_export(name="tf_summary", step=0)
```

여기서 `tf.summary.trace_on` API 이후에 최소한 한 번이라도 `tf.function` 함수를 실행해야 한다. 텐서플로우의 데이터 흐름을 "추적"한 내역을 기반으로 그래프를 시각화하기 때문이다. 만일 `forward(A,B)` 함수가 실행되지 않았거나 혹은 API 이전에 실행되었다면 텐서보드에 Graph visualization failed 오류문이 나타난다.

생성된 텐서플로우 그래프를 텐서보드에서 확인하려면 아래의 명령어를 터미널에 입력한다.

```bash
tensorboard --logdir tensorboard_logs
```

![그림 2. 텐서보드 오토그래프 예시](/assets/img/docs/library/TensorFlow/tf_example_board.png)

### 텐서보드 노드
> *참조: [`tf` 연산 정의](https://www.tensorflow.org/mlir/tf_ops)*

비록 텐서보드에서 그래프를 시각화하여 보여주어도, 함수에 넣은 적도 없는 다소 생소한 노드 및 연산을 때때로 발견한다. 이들은 `tf.Graph`라는 객체가 내부적으로 생성한 것이므로, 이들이 가지는 의미를 이해하는 것은 그래프 독해 능력을 향상시키는데 도움을 줄 것이다.

일반적으로 텐서플로우 그래프는 입력과 출력이 존재하며, 이는 각각 `_Arg` 및 `_RetVal` 연산 객체가 담당한다.

| 연산 객체   | 설명                                                  |
| ------------ | ------------------------------------------------------------ |
| `tf._Arg`    | 그래프의 시작점을 의미하는 함수의 전달인자이다. |
| `tf._RetVal` | 변수를 통해 가져올 수 있는 텐서; 그러나 이는 그래프의 종단점을 의미하는 게 절대 아니다. |

위의 부문에 있는 텐서보드에서 `x`와 `y` 노드가 `_Arg`에, 그리고 `identity_RetVal` 노드가 `_RetVal`에 해당한다. 여기서 변수 `C`가 `_RetVal`이 아닌 이유는 그래프를 나타내는 함수 밖에 있기 때문이다. 추적되지 않았기에 그래프에 반영되지 않은 것이다.

그 외에도 `Identity` 연산의 노드를 확인할 수 있는데, 다음은 텐서보드에서 텐서를 나타내는 연산 객체 혹은 노드에 대한 목록이다.

| 연산 객체          | 설명                                                  |
| ------------------- | ------------------------------------------------------------ |
| `tf.Const`          | 상수 텐서 (혹은 스칼라)이다. |
| `tf.ReadVariableOp` | `tf.Variable`와 같은 텐서 변수의 값을 읽어낸다. |
| `tf.Identity`       | 입력과 동일한 크기와 내용의 텐서를 그대로 반환한다. 다시 말해, 입력받은 텐서에 아무런 처리없이 출력하는 연산작업이다 (즉슨 단순히 *텐서*를 의미한다). |

# **텐서플로우: 모델**
텐서플로우로부터 데이터 흐름을 처리한 이후, 취하고자 하는 목적에 따라 그래프 내부적으로 가중치(weight) 혹은 편향(bias) 파라미터 변화가 생겼을 것이다. 해당 그래프와 파라미터는 하나의 모델(model)로 저장하여 차후에 추론 및 추가 학습에 활용될 수 있다. 텐서플로우에서 모델을 저장한다고 하면 둘 중 하나를 의미한다:

1. 체크포인트(checkpoint)
2. 파일형 모델(SavedModel)

본 장에서는 체크포인트 및 모델을 저장하는 방법을 소개한다.

## `tf.Module` API
> *참조: [모듈, 레이어 및 모델 소개](https://www.tensorflow.org/guide/intro_to_modules)*

`tf.Module` API는 학습모델 신경망의 기반이 되는 [슈퍼클래스](/docs/programming/ko/PRGMING_Python/#상속)이며, 간단히 모듈(module)이라고 부른다. 모듈 자체는 모델이 아니지만, 신경망 층과 모델을 구성하는데 반드시 필요한 존재이다.

아래는 텐서플로우 공식 홈페이지에 `tf.Module`을 활용한 간단한 신경망 층을 정의한 예시 코드이다. 아래의 코드에 대한 설명은 차후에 자세히 설명할 예정이므로, 지금은 `tf.Module` API가 어떻게 사용되는지 확인만 한다.

```python
import tensorflow as tf

# tf.Module 밀집층 (DENSE LAYER)
class Dense(tf.Module):
    def __init__(self, variable_num, outcome_num, name = None):
        super().__init__(name=name)
        self.w = tf.Variable(tf.random.normal([variable_num, outcome_num]), name = "weight")
        self.b = tf.Variable(tf.zeros([outcome_num], name = "bias"))

    def __call__(self, x):
        y = tf.matmul(x, self.w) + self.b
        return tf.nn.relu(y)

# tf.Module 순차모델 (SEQUENTIAL MODEL)
class SequentialModel(tf.Module):
    def __init__(self, name = None):
        super().__init__(name=name)

        # 순차모델에 밀집층 적용
        self.dense_1 = Dense(variable_num = 3, outcome_num = 3)
        self.dense_2 = Dense(variable_num = 3, outcome_num = 2)

    @tf.function
    def __call__(self, x):
        # 입력된 데이터는 밀집층을 dense_1 그리고 dense_2 순서로 이동
        x = self.dense_1(x)
        return self.dense_2(x)


# tf.Module 모델 생성
model = SequentialModel(name = "model")
print(model([[2.,2.,2.],[-2.,0.,2.]]))
""" 넘파이:
[[ 2. 2. 2.]   <- 데이터 1
 [-2. 0. 2.]]  <- 데이터 2
"""
```

```
tf.Tensor(
[[0.         1.5895488 ]
 [0.2083415  0.47999465]], shape=(2, 2), dtype=float32)
```

신경망의 파라미터 역할을 하는 `tf.Variable` 객체와 하위모듈(submodule)을 클래스 속성에 [시퀀스](/docs/programming/ko/PRGMING_Python/#파이썬-이터러블) 형태로 저장하여 변화 양상을 추적한다. 여기서 하위모듈이란, 해당 모듈의 속성으로 선언된 또다른 모듈들을 하위모듈이라 부른다.

* `submodules` 속성: 내포된 모든 하위모듈의 시퀀스.
* `variables` 속성: 내포된 모든 `tf.Variable` 객체의 시퀀스
* `trainable_variabes` 속성: 내포된 모든 학습 가능한 `tf.Variable` 객체의 시퀀스

위의 코드에서 `SequentialModel`은 두 개의 밀집층을 하위모듈로 가지며, 이는 `submodules` 속성을 통해 아래와 같이 확인할 수 있다.

```python
print("\nSubmodules:\n{0}".format(list(model.submodules)))
print("\nVariables:\n{0}".format(list(model.variables)))
```

```
Submodules:
[<__main__.Dense object at 0x00000275E08F51F0>, <__main__.Dense object at 0x00000275876DCCD0>]

Variables:
[<tf.Variable 'Variable:0' shape=(3,) dtype=float32, numpy=array([0., 0., 0.], dtype=float32)>, <tf.Variable 'weight:0' shape=(3, 3) dtype=float32, numpy=
array([[ 0.32746065,  1.370195  , -0.55914354],
       [ 0.17620184,  1.333335  , -0.03349701],
       [ 1.3157411 ,  0.45712298, -0.94311625]], dtype=float32)>, <tf.Variable 'Variable:0' shape=(2,) dtype=float32, numpy=array([0., 0.], dtype=float32)>, <tf.Variable 'weight:0' shape=(3, 2) dtype=float32, numpy=
array([[ 0.54036826,  2.2503784 ],
       [-0.06424242, -1.1178447 ],
       [ 0.22346036, -1.0360601 ]], dtype=float32)>]
```

변화하는 요소들이 무엇인지 알고 이들을 따로 관리하고 있는 특성은 체크포인트 및 모델을 저장하는데 매우 중요하므로 `tf.Module` 슈퍼클래스로부터의 상속은 불가피하다.

## 체크포인트
> *참조: [체크포인트 학습하기](https://www.tensorflow.org/guide/checkpoint)*

`tf.train.Checkpoint`는 체크포인트 저장 및 불러오는데 필요한 객체를 생성하는 핵심 API이다. 해당 API는 체크포인트를 `tf.Variable` 값을 저장하고자 하는 객체를 전달인자로 받으며, 정해진 파라미터가 없이 `**kwargs`를 사용하여 유연한 전달인자 수용이 가능하다. 다음은 `tf.train.Checkpoint` 체크포인트 API 객체화에 전달할 수 있는 인자들의 목록이다.

* `tf.keras.optimizers.Optimizer`
* `tf.keras.Layer`
* `tf.keras.Model`
* `tf.Variable`
* `tf.Module`

선택사항이지만 `step`이란 파라미터를 지정하여 `tf.Variable` 변수 텐서를 인자로 받을 수 있다. 여기서 스텝(step)은 하나의 데이터에 대한 학습 단계를 의미한다. 비록 `step` 카운터는 `assign_add()` 메소드를 활용하는 등 직접 수동으로 증가시켜야 하지만, 이를 통해 몇 번째 학습마다 체크포인트를 저장할 것인지를 설정할 수 있다.

> 이와 유사한 용어로 에포크(epoch; 연대)가 있는데, 이는 수많은 데이트가 들어있는 하나의 데이터세트(dataset)에 대한 학습 단계를 일컫는다.

아래는 체크포인트를 생성할 모델과 스텝 카운터를 0부터 시작하도록 설정한 코드이다.

```python
# tf.Module 모델 생성
model = SequentialModel(name = "model")
        
# 체크포인트 선언
ckpt = tf.train.Checkpoint(model=model, step=tf.Variable(0))

""" 참고:
체크포인트 스텝 활용하기
"""
for _ in range(10):
    # 체크포인트 스텝 카운터 +1
    ckpt.step.assign_add(1)

    # 체크포인트 스텝이 짝수일 때...
    if int(ckpt.step) % 2 == 0:
        statement
```

### 체크포인트 저장하기
텐서플로우에는 체크포인트를 저장하는 두 가지의 저급 API가 존재하며, 이는 `write()`와 `save()` 메소드이다. 이 둘은 사실상 같은 기능을 수행하나 체크포인트 저장 시 파일명 차이만 존재할 뿐이다:

* `write()`: 정해진 경로로 체크포인트를 저장한다.
* `save()`: 체크포인트를 저장하는 `write()` 메소드에 `save_counter`가 추가되어 자동적으로 생성 번호를 부여한다.

본 내용은 관습적인 `save()` 메소드를 사용하여 체크포인트를 저장하는 방법을 소개한다. 체크포인트를 저장하기 위해서 체크포인트 경로(예시. `tmp/checkpoints`)와 체크포인트 파일 접두사(예시. `ckpt`)를 지정해야 한다.

```python
# tf.Module 모델 생성 및 체크포인트 생성
model = SequentialModel(name = "model")
ckpt = tf.train.Checkpoint(model=model)

print(model([[2.0,2.0,2.0]]))

# 체크포인트 저장하기 (자동 형식)
ckpt.save("tmp/checkpoints/ckpt")
""" 대안:
import os

ckpt_dir    = "tmp/checkpoints"
ckpt_prefix = os.path.join(ckpt_dir, "ckpt")

ckpt.save(ckpt_prefix)
"""
```
```
tf.Tensor([[0.6436929  0.53985757]], shape=(1, 2), dtype=float32)
```

위의 텐서플로우를 실행시키면 아래와 같이 체크포인트 경로 및 파일이 생성된다.

```
./
+-- main.py
+-- tmp/
|   +-- checkpoints/
|   |   +-- checkpoint
|   |   +-- ckpt-1.data-00000-of-00001
|   |   +-- ckpt-1.index
```

체크포인트를 저장할 때 세 종류의 파일이 생성된다: `checkpoint`. `data`, 그리고 `index` 확장자 파일이 있다.

| 확장자   | 설명                                                  |
| ------------ | ------------------------------------------------------------ |
| `checkpoint` | 최신 체크포인트 파일 경로를 가리킨다 (예시. `ckpt-1`)     |
| `data`       | 체크포인트 파편(shard)이라고 부르며, 파라미터의 값을 저장한다.<br/>여기서 `data-XXXXX-of-YYYYY`는 총 `YYYYY` 개의 체크포인트 파편 중에서 `XXXXX` 번째 파편을 가리킨다. |
| `index`      | 파라미터의 값이 어느 파편에 저장되어 있는지 알려준다. |

### 체크포인트 불러오기
텐서플로우 체크포인트를 저장하는 방식이 두 가지가 있듯이, 체크포인트를 불러오는 API도 두 개가 존재한다:

* `read()`: `write()` 메소드 전용으로 `save_counter`를 확인하지 않는다.
* `restore()`: `save()` 메소드 전용으로 `save_counter`를 확인한다.

위의 부문에서 `save()` 메소드로 저장하였기 때문에, 본 부문에서는 `restore()` 메소드를 사용하여 체크포인트를 불러와야 한다. 이는 주어진 경로의 최신 체크포인트를 불러오는 `tf.train.latest_checkpoint()` 함수와 흔히 함께 사용된다. 

```python
# tf.Module 모델 생성 및 체크포인트 생성
model = SequentialModel(name = "model")
ckpt = tf.train.Checkpoint(model=model)

# 체크포인트 불러오기 (최신 체크포인트 기준)
ckpt.restore(tf.train.latest_checkpoint("tmp/checkpoints"))

print(model([[2.0,2.0,2.0]]))

# 체크포인트 저장하기 (자동 형식)
ckpt.save("tmp/checkpoints")
```

```
tf.Tensor([[0.6436929  0.53985757]], shape=(1, 2), dtype=float32)
```

`tf.train.latest_checkpoint()` 함수에서 체크포인트를 발견하지 못하면 `None`이 `restore()` 메소드로 전달되는데, 원래 경로를 찾지 못하면 발생하는 `NotFoundError` 예외처리 없이 실행할 수 있다.

### 체크포인트 관리자
체크포인트 관리자(checkpoint manager)는 체크포인트 파일을 더욱 효율적으로 관리할 수 있도록 하는 고급 API이다. 체크포인트 관리자는 `tf.train.CheckpointManger` API로 생성되며 오직 하나만 활성될 수 있다. 체크포인트 관리자로 체크포인트 저장 및 불러오기도 가능하며, 아래의 코드는 체크포인트 관리자를 활용한 예시이다.

```python
# tf.Module 모델 생성 및 체크포인트 생성
model = SequentialModel(name = "model")
ckpt = tf.train.Checkpoint(model=model)

# 체크포인트 관리자: 체크포인트, 경로, 파일 개수
manager = tf.train.CheckpointManager(ckpt, "tmp/checkpoints", max_to_keep=3)

# 체크포인트 불러오기 (최신 체크포인트 기준)
manager.restore_or_initialize()
""" 대안:
ckpt.restore(tf.train.latest_checkpoint("tmp/checkpoints"))
"""
    
print(model([[2.0,2.0,2.0]]))

# 체크포인트 저장하기 (자동 형식)
manager.save()
""" 대안:
ckpt.save("tmp/checkpoints")
"""
```

```
tf.Tensor([[0.6436929  0.53985757]], shape=(1, 2), dtype=float32)
```

여기서 `max_to_keep` 매개변수는 보관할 최대 체크포인트 파일 개수를 의미하며, 그 이상의 체크포인트가 생성되면 가장 오래된 체크포인트 파일을 삭제한다. 전달인자가 `None`일 경우, 생성된 모든 체크포인트를 보관한다.

## SavedModel
> *참조: [SavedModel 포맷 사용하기](https://www.tensorflow.org/guide/saved_model)*

`tf.saved_model` API는 파일 형태의 모델 그래프, 일명 SavedModel을 저장 및 불러오는데 필요한 핵심 API이다. 이전 부문에서는 체크포인트에 저장된 `tf.Variable` 파라미터만을 불러오는 것만으로도 동일한 결과를 추론할 수 있었으나, 이는 해당 스크립트에 이미 모델 그래프 코드가 작성되어 있기 때문이다. 만일 다른 파이썬 스크립트에서 모델을 불러오기 위해서는 신경망 파라미터 이외에 신경망 모델 그래프가 함께 요구된다. 이러한 이유로 [*텐서플로우: 모델 § `tf.Module` API*](#tfmodule-api)의 예시 코드에 `@tf.function` 데코레이팅 되었다.

### SavedModel 저장하기
텐서플로우에는 SavedModel 파일형 모델을 `save()` 메소드로 저장한다. SavedModel 저장에는 체크포인트를 별개로 생성할 필요가 없다.

```python
# tf.Module 모델 생성
model = SequentialModel(name = "model")

print(model([[2.0,2.0,2.0]]))

# SavedModel 저장하기
tf.saved_model.save(model, "tmp/saved_model")
```

```
tf.Tensor([[0.6436929  0.53985757]], shape=(1, 2), dtype=float32)
```

SavedModel을 저장하면 다음과 같이 한 개의 파일과 두 개의 폴더가 생성된다.

```
./
+-- main.py
+-- tmp/
|   +-- saved_model/
|   |   +-- saved_model.pb
|   |   +-- variables/
|   |   |   +-- variables.data-00000-of-00001
|   |   |   +-- variables.index
|   |   +-- assets/
```

SavedModel을 저장할 때 세 종류의 파일 및 폴더가 생성된다: `pb` 확장자. `variables` 폴더, 그리고 `assets` 폴더가 있다.

| 경로   | 설명                                                  |
| ------------ | ------------------------------------------------------------ |
| `.pb` 확장자 | 신경망 모델 그래프 정보가 담겨있는 프로토콜 버퍼 파일이다.     |
| `variables` | 체크포인트와 동일한 형태의 파라미터 관련 파일 `.data` 및 `.index`가 들어있다. |
| `assets`    | `tf.saved_model.Asset` API로 저장할 수 있는 외부 파일을 담고 있다. |

여기서 시그니처에 대하여 주의해야 할 점이 있다: 예시 코드의 모델은 SavedModel을 저장하기 전에 `shape=(1, 3)` 크기의 텐서를 입력을 받았다. 이론상으로 해당 그래프는 아무런 `shape=( , 3)` 크기의 텐서는 수용가능하나, SavedModel은 이전에 입력받은 `shape=(1, 3)` 텐서만 수용가능한 시그니처로 인식한다. 포괄적인 시그니처를 위해서 아래와 같이 `@tf.function` API에 입력 시그니처 형식을 지정한다.

```python
# tf.Module 순차모델 (SEQUENTIAL MODEL)
class SequentialModel(tf.Module):

    ...

    # 시그니처 설정: 포괄적 입력 데이터 개수 허용
    @tf.function(input_signature=[
        tf.TensorSpec(shape=[None, 3], dtype=tf.float32)
    ])
    def __call__(self, x):
        x = self.dense_1(x)
        return self.dense_2(x)
```

위의 `SequentialModel` 모델은 이제 어떠한 `shape=( , 3)` 크기의 텐서를 입력으로 받을 수 있다.

### SavedModel 불러오기
텐서플로우 SavedModel 파일형 모델을 `load()` 메소드로 불러온다. 아래의 예시 코드는 모델이 정의된 `main.py`가 아닌 전혀 다른 스크립트이다.

```python
import tensorflow as tf

# SavedModel 불러오기
model = tf.saved_model.load("tmp/saved_model")

print(model([[2.0,2.0,2.0],[-2.,0.,2.]]))
```

```
tf.Tensor(
[[0.6436929  0.53985757]
 [1.0628603  0.        ]], shape=(2, 2), dtype=float32)
```

위의 결과는 모델 그래프를 저장할 떄와 동일한 결과이므로, SavedModel을 성공적으로 저장 및 불러온 것을 확인할 수 있다.

# **텐서플로우: KERAS**
텐서플로우는 인공 신경망에 활용되는 [Keras](https://ko.wikipedia.org/wiki/케라스) 오픈소스 라이브러리를 접목시킨 고급 API를 제공한다. 위에서 소개한 저급 `tf.Module` API를 기반하고 있어 텐서플로우를 활용하는 방식은 동일하나, 추가적인 기능이 포함되거나 간편하게 사용할 수 있도록 기본적인 틀이 제공되는 등의 이점을 가진다. 그러나 고급 API라는 점에서 신경망 커스터마이징에는 한계가 존재할 수 있다. 비록 Keras가 사용하기 편리할 수 있겠으나, 텐서플로우 동작 원리를 이해하기 위해서는 저급 API들을 우선적으로 읽어보는 것을 권장한다.

## Keras 모델
> *참조: [케라스 순차모델](https://www.tensorflow.org/guide/keras/sequential_model)*

본 예시 코드는 [*텐서플로우: 모델 § `tf.Module` API*](#tfmodule-api)의 순차모델을 Keras 고급 API를 통해 작성한 것이다.

```python
import tensorflow as tf

# tf.keras 밀집층 (DENSE LAYER)
dense_1 = tf.keras.layers.Dense(units=3, activation="relu", name="Dense_1")
dense_2 = tf.keras.layers.Dense(units=2, activation="relu", name="Dense_2")

# tf.keras 순차모델 (SEQUENTIAL MODEL) & 객체화
model = tf.keras.Sequential(
    layers=[
        dense_1,
        dense_2
    ], name="model"
)

# tf.Keras 모델 빌드
model(tf.constant([[2.,2.,2.],[-2.,0.,2.]]))

# tf.Keras 모델 간략정보
model.summary()
```

```
Model: "model"
_________________________________________________________________
Layer (type)                 Output Shape              Param #
=================================================================
Dense_1 (Dense)              (2, 3)                    12
_________________________________________________________________
Dense_2 (Dense)              (2, 2)                    8
=================================================================
Total params: 20
Trainable params: 20
Non-trainable params: 0
_________________________________________________________________
```

Keras 모델을 작성하면서 출력 데이터 개수를 정하지만, 입력 개수는 빌드를 하는 과정에서 결정된다. `tf.keras.layers.Dense` API에서도 출력 데이터 개수만 지정하고 입력 데이터 개수를 지정하는 매개변수가 전혀 없다. 그 대신 입력 개수는 가장 처음 입력된 데이터에 의해 자동적으로 결정되는데, 이러한 모델 가중치 파라미터 개수가 결정되는 단계를 빌드(build)한다고 칭한다.
