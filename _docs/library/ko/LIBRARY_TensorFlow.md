---
name: TensorFlow
lang: ko
layout: docs
author: GKO95
category: Library
title: "라이브러리 | 텐서플로우"
logo: "/assets/img/res/logo-tf2.png"
order: 0x12
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

그래프 모드에서의 함수는 최적화가 되었을 시, 즉시 실행 모드에서의 코드보다 훨씬 더 빠른 처리속도를 선보인다. 하지만 컨볼루션과 같은 일부 무거운 연산은 그만큼의 가속 효과를 기대할 수 없다. 오토그래프에 대한 자세한 설명은 다음 장인 *텐서플로우: 텐서보드*에서 이어진다.

# **텐서플로우: 텐서보드**
텐서보드(TensorBoard)는 텐서플로우의 그래프/데이터 시각화 및 분석 도구이다. 텐서플로우의 모든 데이터 기록에서부터 그래프 및 프로파일러 저장은 `tf.summary` API에서 관리된다. 텐서플로우의 그래프를 읽을 수 있는 능력은 인공지능 모델이 어떻게 구축되었는지 이해하고 분석하는데 도움이 될 수 있다.

```python
python -m pip install tensorboard
```

## `tf.function` API
`tf.function`는 오토그래프를 생성하는 매우 중요한 텐서플로우 API이며, 이는 텐서보드에서 그래프를 시각적으로 보여준다. 해당 API는 함수나 메소드와 같은 코드 블록을 전달인자로 받는 `func` 매개변수를 가지지만, 데코레이터 `@`를 사용하여 아래처럼 표현할 수 있다.

```python
@tf.function
def function(arg1, arg2):
    statements
    return something

''' 동일:
def function(arg1, arg2):
    statements
    return something
    
function = tf.function(func = function)
'''
```

본 API는 텐서플로우 스크립트의 모든 함수와 메소드에 적용될 필요가 없다. 오로지 학습에 사용되는 함수에만 적용해도 충분하며, 필요하다면 관측이 필요한 함수에도 활용 가능하다. 하나의 코드에 함수가 반복적으로 적용될 시, 해당 부분의 그래프는 단일의 `tf.PartitionedCall` 혹은 `tf.StatefulPartitionedCall` 노드로 대체된다.

### 콘크리트 함수
콘크리트 함수(concrete function)는 하나의 시그니처만을 지원하는 `tf.function` API의 그래프이다. 여기서 시그니처(signature)란, 연산자의 입력과 출력에 대한 설명을 의미한다. 아래의 코드와 같이 `input_signature` 인자를 `tf.function` API의 시그니처로 건네주므로써 지정된 텐서의 크기 및 자료형만 입력받을 수 있다.

```python
# 콘크리트 함수 (단일 시그니처 전용)
@tf.function(input_signature=[
    tf.TensorSpec(shape=[3,1], dtype=tf.float32), # -> 매개변수 arg1
    tf.TensorSpec(shape=None,  dtype=tf.float32)  # -> 매개변수 arg2
])
def function(arg1, arg2):
    statements
    return something
```

콘크리트 함수와 반대로, 특정 시그니처가 정해지지 않은 그래프 함수를 다형성 함수(polymorphic function)이라고 한다.

## 텐서보드 생성
다음과 같은 텐서플로우 코드가 작성되었을 시, 이를 텐서보드에서 그래프로 확인하려면 아래의 명령어를 터미널에 입력한다.

```python
import tensorflow as tf

A = tf.constant([[1,2,3],[4,5,6]], name="tensorA")
B = tf.constant(value=1, shape=[2,3], name="tensorB")

@tf.function
def forward(x, y):
    return tf.add(x, y, name="tensorAdd")

# 요약 파일 작성자 "writer" 생성
writer = tf.summary.create_file_writer("./tensorboard_logs")

# 그래프 기록 및 프로파일링: 여기서부터 시작!
tf.summary.trace_on(graph=True, profiler=False)
C = forward(A, B)

# 요약 파일 작성자 "writer" 활성화
with writer.as_default():
    # 그래프 기록 및 프로파일링: 활성화된 "writer"에 요약 작성 & 종료!
    tf.summary.trace_export(name="tf_summary", step=0)
```

```bash
tensorboard --logdir tensorboard_logs
```

![그림 2. 텐서보드 오토그래프 예시](/assets/img/docs/library/TensorFlow/tf_example_board.png)

`tf.summary` API로부터 생성된 데이터는 `_SummaryState` 쓰레드 객체 덕분에 내부적으로 공유되어 텐서보드 자료관리에 사용되며, 대표적인 예시로 요약 작성자 선택, 자료 기록 시작 및 종료, 파일로 건네주기 등이 있다.

| API                               | 설명                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| `tf.summary.create_file_writer()` | 요약 파일 생성하며, `tf.summary.SummaryWriter` 객체를 반환한다. |
| `tf.summary.trace_on()`           | 텐서플로우 그래프 기록 및 프로파일링을 위해 추적(trace)을 시작한다. |
| `tf.summary.trace_export()`       | 추적을 중단하고 기록된 내역을 요약 및 프로파일 파일로 건네준다. |
| `tf.summary.trace_off()`          | 추적을 중단하고 기록된 내역을 전부 삭제한다. |

### 텐서보드 노드
> *참조: [방언 'tf'정의](https://www.tensorflow.org/mlir/tf_ops)*

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
