---
layout: docs
language: ko
category: 인공지능
title: 기계학습
meta: ML
mathjax: true
order: 0xF0
---
# 기계학습: 소개
기계학습, 일명 머신러닝(machine learning)은 인공지능(artificial intelligence)의 한 분야로 여러 경험을 통해 향상되는 컴퓨터 알고리즘을 지칭한다. 여기서 "경험"이란, 일반적으로 데이터를 제공하여 "학습"시키므로써 컴퓨터 스스로가 최적의 알고리즘을 도출하도록 한다. 머신러닝은 크게 세 부류로 나뉘어진다:

* 지도 학습 (Supervised Learning)
* 비지도 학습 (Unsupervised Learning)
* 강화 학습 (Reinforcement Learning)

## 용어 정의
기계학습에 사용되는 용어는 개인이나 단체에 따라 다를 수가 있는데, 이는 오히려 해당 분야를 처음으로 접하는 초보자에게는 혼란을 야기할 수 있다. 이를 방지하기 위해 본 부문은 다음과 같이 용어를 통일시킨다.

### 자료의 분류

![데이터, 인스턴스, 그리고 데이터세트 구분](/images/docs/ml/ml_term_data.png)

머신러닝의 자료는 두 가지 유형으로 분류된다: (1) 무언가가 가지는 특성과 (2) 그러한 특성을 갖는 무언가가 무엇인지 알리는 라벨(혹은 레이블)이 있다. 이 두 자료는 코드 상에서 다음과 같은 역할을 갖는다.

* *특성 (feature)*
    : 머신러닝의 모델을 구성하는 가중치(weight) 조정에 기여하는 입력 자료(`x_data`)이다.

* *레이블 (label)*
    : 해당 특성을 갖는 자료가 속하는 분류, 즉 머신러닝에서는 입력에 대한 정답(`y_data`)에 해당한다.

여기서 특성 자료에 대한 용어는 조금 더 세분화하여 가리킬 수 있다.

| 용어    | 영문       | 정의                                   |
|:-----:|:--------:|--------------------------------------|
| 데이터   | data     | 머신러닝에 기여하는 특성(feature)의 가장 작은 정보 단위. |
| 인스턴스  | instance | 레이블 분류가 가능한 일련의 데이터로 구성되어 있는 정보.     |
| 데이터세트 | dataset  | (레이블 분류가 없는) 인스턴스 집합                 |

### 데이터세트의 분류
데이터세트가 어떠한 목적에 사용되는지에 따라 다음과 같이 분류된다.

| 용어 | 영문         | 정의                                                                                             |
|:--:|:----------:|------------------------------------------------------------------------------------------------|
| 학습 | training   | 모델을 학습하기 위해 사용되는 데이터세트이며, 전체 데이터세트 중에서 70~90%를 차지한다.                                           |
| 검증 | validation | 초매개변수(hyperparameter; $$\alpha$$, $$\lambda$$ 등) 조정을 위한 시험 데이터세트의 일부이며, 가상 성능 시험 역할을 담당하기도 한다. |
| 시험 | test       | 학습된 모델의 성능을 시험하기 위한 데이터세트이며 전체 데이터세트 중 10~30%로 할당된 데이터세트이다.                                    |

> 학습 데이터세트로 사용된 데이터세트는 절대 시험 데이터세트로 사용되어서는 안된다. 확실한 모델 시험을 위하여 시험 데이터세트는 단 한 번만 사용되어야 한다.

### 학습의 분류
머신러닝 학습 작업에 있어 흔히 사용되는 용어들의 정의이다.

| 용어 | 영문        | 정의                                                              |
|:--:|:---------:|-----------------------------------------------------------------|
| 반복 | iteration | 하나의 입력 자료를 통해 모델 매개변수 업데이트하는 가장 작은 단위의 학습 작업 또는 작업 횟수이다.          |
| 배치 | batch     | 매 반복(iteration)마다 모델 학습을 위해 건네지는 입력 자료가 갖는 인스턴스(instance) 개수이다. |
| 세대 | epoch     | 학습 데이터세트 전체가 모델에 학습된 횟수이다.                                      |

> 배치 크기가 과다하면 RAM 메모리 부족 및 낮은 일반화, 그리고 과소하면 학습 시간 장기화 및 낮은 전역 최적화 보장율을 보여준다.

# 기계학습: 기초
기계학습의 시초는 인간이 두뇌라는 중추 신경계를 갖듯이, 단일 [뉴런](https://ko.wikipedia.org/wiki/%EC%8B%A0%EA%B2%BD_%EC%84%B8%ED%8F%AC) 신경세포를 알고리즘으로 재현하여 기계에 적용하고자 하는 연구로부터 시작되었다. 현재는 여러 신경층으로 이루어진 복잡한 신경망을 갖는 심층 신경망(deep neural network; DNN) 단계까지 도달하였다. 본 장은 기계학습의 신경망에 대한 간단한 역사와 기초적인 개념을 소개한다.

## 퍼셉트론
[퍼셉트론](https://ko.wikipedia.org/wiki/퍼셉트론)(perceptron)은 뉴런 신경세포를 기반한 1세대 이진분류 머신러닝 알고리즘이다.

> 이진분류(binary classification)란, 주어진 입력 자료가 $$A$$와 $$B$$ 분류 중에 어느 곳에 속하는지 판단하는 작업을 가리킨다.

![퍼셉트론 모델<sub><i>출처: <a href="https://towardsdatascience.com/everything-you-need-to-know-about-activation-functions-in-deep-learning-models-84ba9f82c253">Towards Data Science</a></i></sub>    ](/images/docs/ml/ml_perceptron_model.png)

퍼셉트론은 모든 머신러닝 모델이 선형적인 수학 방정식으로 표현될 수 있다고 가정한다: 뉴런의 [수상돌기](https://ko.wikipedia.org/wiki/가지돌기)(dendrite)로 입력 신호 $$x_0$$가 전달되는 과정에서 [시냅스](https://ko.wikipedia.org/wiki/시냅스)가 갖는 가중치(weight) $$w_0$$가 곱해진다. 뉴런에서 수신받은 모든 $$w_ix_i$$들은 편향(bias) $$b$$를 포함하여 뉴런 신경세포체(soma)에서 전부 합하여 아래의 표현식이 완성된다.

$$
w_0x_0+w_1x_1+\cdots+w_mx_m+b = \sum_{i=0}^{m}{w_ix_i} + b = \mathbf{w} \cdot \mathbf{x} + b
$$

위의 선형방정식은 퍼셉트론이 갖는 문턱함수(threshold function) $$f$$에 의해 간단한 선형 이진분류가 가능하다. 퍼셉트론에서 이진분류라 하면 주로 활성(`true`) 및 비활성(`false`) 여부를 판별하는 목적을 갖는다.

$$
f(\mathbf{x}) = \begin{cases} 1 \qquad \mathrm{if} \ \mathbf{w} \cdot \mathbf{x} + b > 0 \\ 0 \qquad \mathrm{otherwise} \end{cases}
$$

이러한 입력으로부터 문턱함수로 분류를 판별하는 전체적인 "예측 과정"을 *순전파(forward propagation)*라 부른다.

퍼셉트론은 [논리합](https://ko.wikipedia.org/wiki/논리합)과 [논리곱](https://ko.wikipedia.org/wiki/논리곱) 연산 모델을 선형회귀로 구현할 수 있었으며, 아래의 그림에서도 좌측에 있는 논리곱과 논리합을 하나의 선형식으로 0과 1을 나눌 수 있는 것을 보여준다. 반면, 비선형에 해당하는 [배타적 논리합](https://ko.wikipedia.org/wiki/배타적_논리합)은 절대로 하나의 선형식으로 0과 1을 완벽하게 나눌 수가 없으므로 선형분류가 불가능하였다.

![<code>OR</code>, <code>AND</code>, 그리고 <code>XOR</code>의 선형분류<sub><i>출처: <a href="https://medium.com/@lucaspereira0612/solving-xor-with-a-single-perceptron-34539f395182">Lucas Araújo (medium.com)</a></i></sub>](/images/docs/ml/ml_linearly_separable.png)

즉, 단일 퍼셉트론은 비성형성 문제를 풀 수 없는 치명적인 단점을 갖는다. 이때로부터 신경망 알고리즘 분야는 침체기에 잠겼으나 기계학습의 시발점이 된 사례로 매우 의미있는 발견이다.

## 인공신경망
인공신경망(artificial neural network; ANN) 혹은 간단히 신경망(neural network)은 한 개 이상의 퍼셉트론(일명 노드; node)으로 구성된 신경층(layer)을 여러 개 쌓아 만들었으며, 다층 퍼셉트론(multi-layered perceptron; MLP)이라고도 부른다.

![기본적인 다층 퍼셉트론(MLP) 신경망<sub><i>출처: <a href="https://www.freecodecamp.org/news/the-ultimate-guide-to-recurrent-neural-networks-in-python/">freeCodeCamp.org</a></i></sub>](/images/docs/ml/ml_neural_network.png)

MLP 신경망은 단일 퍼셉트론만으로 예측 불가한 비선형회귀의 해결방안으로 제안되었으나, 당시 퍼셉트론의 매개변수는 손수 조정되어야 하였다. 다층의 여러 퍼셉트론 매개변수들을 직접 조정한다는 것은 거의 불가능에 가까운 작업으로 매력적이지 않은 설계였다. 그러나 차후 순전파의 피드백으로부터 매개변수를 자동으로 조정하는 [역전파](https://ko.wikipedia.org/wiki/역전파)(backpropagation) 알고리즘이 소개되면서 신경망 분야가 재조명되었다.

> 역전파 최적화는 [미분](https://ko.wikipedia.org/wiki/미분)(derivative)이 동반되며, 대표적인 예시로 [경사하강법](https://ko.wikipedia.org/wiki/경사_하강법)(gradient descent)이 존재한다.

역전파 알고리즘으로 인해 다층 퍼셉트론 구조가 가능해졌으면, 각 층에 대한 명칭을 다음과 같이 정의한다.

* *입력층 (input layer)*
    : MLP 모델에서 예측되어야 할 데이터 입력을 받는 페셉트론 층

* *출력층 (output layer)*
    : MLP 모델에서 예측한 데이터 결과물을 출력하는 퍼셉트론 층

* *은닉층 (hidden layer)*
    : 입력층과 출력층을 제외한 나머지 퍼셉트론 층; 외부에서 상호작용이 불가하며 데이터 특성에 따른 모델 학습에 큰 비중을 차지한다.

### 활성함수
활성함수(activation function) 혹은 전달함수(transfer function), 특성함수(characteristic function)는 각 노드마다 하나씩 갖는 입력에 대한 출력 판단 기준이 되는 함수이다. 일반적으로 활성(active; 논리형 `true`) 및 비활성(inactive; 논리형 `false`) 여부를 판별하기 때문에 "활성함수"라고 부른다.

![활성함수의 종류<sub><i>출처: <a href="https://slideplayer.com/slide/14135708/">SlidePlayer.com</a></i></sub>](/images/docs/ml/ml_activation_functions.jpg)

* *항등 함수 (identity function)*

    $$
    f(x) = x
    $$

    입력과 출력이 항상 동일한 선형 방정식이다. 그러나 퍼셉트론의 단점을 서술하였듯이, 선형 활성함수는 비선형회귀를 표현할 수 없어 매우 부적합하다. 해당 함수는 오로지 1이란 미분값을 갖으므로 역전파에서도 아무런 도움이 되지 않는다.

* *단위 계단 함수 (Heaviside step function; binary function)*

    $$
    f(x) = u(x)
    $$

    입력 $$x$$가 0 이상일 경우에만 출력 $$y = 1$$을 갖으며, 그 외에은 출력 $$y = 0$$을 갖는다. 이는 단일 퍼셉트론의 문턱함수와 동일한 형태의 활성함수이다. 비록 비연속적 함수이지만 부분적 선형함로써 $$x=0$$을 제외한 나머지가 오로지 0이란 미분값을 갖으므로 역전파에 부적합하다.

* *시그모이드 함수 (sigmoid function; logistic function)*

Aka. logistic function, this non-linear but step-like sigmoid function can resolve all the problems step and linear function have encountered. As one of the widely used activation functions, it was a great activation function for a classification problem from the fact it was able to give a bounded range of answer even when given an infinite range of input data.

Unfortunately, the function has a flaw on "vanishing gradient": on both side of the near-horizontal lanes are where the gradient is almost insignificant that training model is impossible. Despite the fact, sigmoid is still widely used in output activation function in binary classification (softmax function for multinomial classification).

* *쌍곡탄젠트 (hyperbolic tangent)*

Tangent hyperbolic $\tanh$ shares almost identical traits shown by the sigmoid function: non-linear, infinite-range input and bounded output, and even the flaw of vanishing gradient as well but less prone to it compare to the sigmoid. Its noticeable difference would be stronger gradient compared to the sigmoid function. Eventually, tangent hyperbolic is a scaled sigmoid function:
$$
\tanh(x)=\frac{2}{1+e^{-2x}}-1=2 \ \mathrm{ sigmoid}(2x)-1
$$

* *정류 선형 유닛 (rectified linear unit; ReLU)*

Although similar to the linear function, ReLU (**Re**ctified **L**inear **U**nit) actually bears non-linearity due to left and right plane of the coordinate holds complete different linear function that cannot be expressed as a single linear function.
$$
A(x) = \max(0,x)
$$

Non-linearity means the layers for the neural network is stackable, and most of the functions can be approximated using the ReLU function.

Another benefit of using the ReLU function is the efficiency on signaling activation: sigmoid and tangent hyperbolic sends analog activation regardless of the input $x$, creating dense neural network. Meanwhile, ReLU function reduces the number of activation by half due to the characteristic the function has on negative $x$ range (constant output of 0), making the neural network lighter. Therefore, ReLU activation function is great for the deep neural network including the fact it involves simpler mathematical operations.

However, upon activation on negative range of input data $x$ would result zero gradient, which unable to adjust the parameters for loss minimization. This state makes the substantial part of the neural network passive (not functioning) due to unresponsive neuron (aka. node), called "dying ReLU".

Leaky ReLU is implemented to resolve this matter; it has a very slight degree of slope instead of having none at all. This eventually allows the training possible even on negative input range.

## 딥러닝

Although discovery of backpropagation have led to significant development on machine learning, it soon encountered another problem called vanishing gradient. Back then, sigmoid activation function was universal in neural network and neural network didn't had too deep layers.

In an attempt to create deeper neural network, the influence of the input training data never reached to the output. In other word, training was unsuccessful and its main reason was a vanishing gradient from the sigmoid. This made another age of depression to artificial neural network scientist.

The solution was found

* New activation function for hidden layers: ReLU
* Better initialization of weight parameters.

# 기계학습: 선형회귀

