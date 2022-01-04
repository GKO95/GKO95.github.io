---
layout: docs
language: ko
category: 
title: 기계학습
meta: ML
mathjax: true
order: 0xF0
---
# 기계학습: 소개
기계학습, 일명 머신러닝(machine learning)은 인공지능(artificial intelligence)의 한 분야로 여러 경험을 통해 향상되는 컴퓨터 알고리즘을 지칭한다. 여기서 "경험"이란, 일반적으로 데이터를 제공하여 "학습"시키므로써 컴퓨터 스스로가 최적의 알고리즘을 도출하도록 한다. 머신러닝은 크게 세 부류로 나뉘어진다:

* 지도학습 (Supervised Learning)
* 비지도학습 (Unsupervised Learning)
* 강화학습 (Reinforcement Learning)

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

![퍼셉트론 모델<sub><i>출처: <a href="https://towardsdatascience.com/everything-you-need-to-know-about-activation-functions-in-deep-learning-models-84ba9f82c253">Towards Data Science</a></i></sub>](/images/docs/ml/ml_perceptron_model.png)

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
> *참조: [Activation Functions (Linear/Non-linear) in Deep Learning](https://xzz201920.medium.com/activation-functions-linear-non-linear-in-deep-learning-relu-sigmoid-softmax-swish-leaky-relu-a6333be712ea)*

활성함수(activation function) 혹은 전달함수(transfer function), 특성함수(characteristic function)는 각 노드마다 하나씩 갖는 입력에 대한 출력 판단 기준이 되는 함수이다. 일반적으로 활성(active; 논리형 `true`) 및 비활성(inactive; 논리형 `false`) 여부를 판별하기 때문에 "활성함수"라고 부른다.

![활성함수의 종류<sub><i>출처: <a href="https://slideplayer.com/slide/14135708/">SlidePlayer.com</a></i></sub>](/images/docs/ml/ml_activation_functions.jpg)

* *[항등 함수](https://ko.wikipedia.org/wiki/항등_함수) (identity function)*

    $$
    f(x) = x
    $$

    입력과 출력이 항상 동일한 선형 방정식이다. 그러나 퍼셉트론의 단점을 서술하였듯이, 선형 활성함수는 비선형회귀를 표현할 수 없어 부적합하지 않다.

* *[단위 계단 함수](https://ko.wikipedia.org/wiki/단위_계단_함수) (Heaviside step function; binary function)*

    $$
    f(x) = u(x)
    $$

    입력 $$x$$가 0 이상일 경우에만 출력 $$y = 1$$을 갖으며, 그 외에은 출력 $$y = 0$$을 갖는다. 이는 단일 퍼셉트론의 문턱함수와 동일한 형태의 활성함수이다. 비록 비연속적 함수이지만 부분적 선형함로써 $$x=0$$을 제외한 나머지가 오로지 0이란 미분값을 갖으므로 역전파에 부적합하다.

* *[시그모이드 함수](https://ko.wikipedia.org/wiki/시그모이드_함수) (sigmoid function; logistic function)*

    $$
    f(x) = \frac{1}{1+e^{-x}}
    $$

    비선형 시그모이드 함수 $$S(x)$$는 출력 $$y$$의 범위가 $$(0, \ +1)$$로 제한되었기 때문에 이진분류 중에서도 확률 예측에 매우 유용하다. 특히 $$y=1$$ 혹은 $$y=0$$에 점점 근접해지는 양측은 확고한 예측을 제공하는 역할을 하지만, 반면에 [경사소실](https://en.wikipedia.org/wiki/Vanishing_gradient_problem)(vanishing gradient)의 원인이기도 한다: 수평에 근접한 부분은 0에 가까운 미분값을 갖는데, 이는 전달될 피드백이 없어 모델 학습에 기여하지 못한다.

* *[쌍곡탄젠트](https://ko.wikipedia.org/wiki/쌍곡선_함수) (hyperbolic tangent)*

    $$
    f(x) = \frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}
    $$

    쌍곡탄젠트 $$\tanh(x)$$는 시그모이드 함수와 매우 유사하지만 두 가지의 차이점을 갖는다: 영점을 중심으로 출력 $$y$$의 범위가 $$(-1, \ +1)$$이며, 더 가파른 경사를 가지기 때문에 더 큰 미분값을 가질 수 있다. 그러나 유사성으로 인해 시그모이드 함수가 지닌 단점을 그대로 갖는다.

* *[정류 선형 유닛](https://ko.wikipedia.org/wiki/ReLU) (rectified linear unit; ReLU)*

    $$
    f(x) = x^{+} = \max(0,x)
    $$

    ReLU 함수는 엄연히 비선형 활성함수이다: 입력 $$x < 0$$일 경우에는 반드시 출력 $$y=0$$, 그리고 $$x \ge 0$$일 경우에는 $$y = x$$가 반환된다. ReLU는 시그모이드와 쌍곡탄젠트와 달리 양의 입력만이 활성화되므로, 계산 효율성이 매우 월등하여 다층 레이어 구조의 신경망에서 흔히 선호된다. 하지만 이는 역전파 과정에서 음의 입력이 미분값 0을 갖는 "죽어가는 ReLU(dying ReLU)" 원인이기도 한다.

* *[소프트맥스 함수](https://en.wikipedia.org/wiki/Softmax_function) (softmax function)*

    $$
    f_i(x) = \frac{e^{x_i}}{\sum_{j=1}^Ke^{x_j}} \qquad \mathrm{...where \ } i = 1, \ 2, \ 3, \ \cdots , \ K
    $$

    소프트맥스 함수는 입력층이나 은닉층이 아닌, 출력층에서 다중분류(multinomial classification) 목적으로 사용된다. 위의 $$K$$는 출력이 분류될 수 있는 클래스의 총 개수이다. 대략적으로 설명하자면 해당 입력이 각 클래스마다 분류될 확률을 전부 출력한다. 그 중에서 가장 높은 확률을 갖는 클래스가 입력이 속하는 분류이다.

## 딥러닝
딥러닝(deep learning)은 심층신경망(deep neural network; DNN)이 적용된 기계학습 모델이다. 그러나 사실은 이전에 소개한 인공신경망(ANN)과 동일하며, 단지 더 많은 신경망을 가졌을 뿐이다.

역전파 알고리즘의 발견으로 비선형성 계산이 가능해졌으나, 당시에는 시그모이드 함수(sigmoid function) 혹은 쌍곡탄젠트(hyperbolic tangent) 활성함수 위주의 신경망이 사용되었다. 결과적으로 더 많은 신경층을 쌓으면 역전파 과정에서 피드백이 사라지는 경사소실(vanishing gradient) 문제에 부딪히게 되었다. 다시 말해, 모델 학습이 이루어지지 않는 한계점에 도달하였다. 경사소실 문제는 새로운 ReLU 활성함수 및 적절한 가중치 매개변수의 초기화가 소개되면서 해결되었다.

# 기계학습: 순전파
기계학습의 주요 목적은 결과를 추론(inference)하는 것이며, 기계학습이서 이러한 과정을 순전파(forward propagation)이라 칭한다. 순전파 과정에서 모델에 입력 자료를 건네주면 매개변수에 의해 추론된 결과를 반환한다. 최적의 신경망 모델은 각 입력에 대해서 최소의 오차율(참값과 추론값의 차이)을 가져야 한다. 본 장에서는 기계학습의 추론에 대한 개념을 수학적으로 설명한다.

## 회귀분석
기계학습에서 [회귀분석](https://ko.wikipedia.org/wiki/회귀_분석)(regression analysis)은 입력 자료 $$x$$와 출력 추론 $$y$$ 간의 관계성을 가리킨다. 그 중 지도학습에서 입력 자료과 출력 추론은 각각 인스턴스의 특성 및 레이블이 된다. 기계학습은 입력과 출력을 기반으로 회귀모델(regression model)이 생성되는데, 여기서 모델은 기계학습에 있어 추론을 하는 핵심 요소이다.

회귀모델 중에서 독립 변수 $$x$$와 종속 변수 $$y$$가 선형성을 지니면 선형회귀(linear regression)라 부른다.

$$
y = Ax + B
$$

아래의 그림은 $$A=1.5$$ 그리고 $$B=2$$인 선형회귀를 보여주는 정규분포이다.

![정규분포 선형회귀분석<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:Normdist_regression.png">Wikimedia Commons</a></i></sub>](/images/docs/ml/ml_normdist_regression.png)

## 가설
가설(hypothesis)은 기계학습에서 입력과 출력 간의 관계성을 보여주는 회귀모델을 수학적으로 나타낸 방정식이다. 만일 선형회귀모델이 주어지면 다음과 같은 가설을 기대할 수 있다.

$$
\hat{y}=h(x)=Wx+b
$$

여기서 가설에 의한 추론값 $$\hat{y}$$는 참값 $$y$$로부터 차이값, 일명 손실(loss)을 최소화하도록 가설 $$h(x)$$의 가중치 $$W$$와 편향 $$b$$를 조정해야 한다.

> 가설의 매개변수 $$W$$ 및 $$b$$를 조정하는 절차를 기계학습에서는 바로 "학습(training)"이라 부른다.

### 간략화된 가설
간략화된 가설(simplified hypothesis)는 편향 매개변수 $$b$$가 생략되어 오로지 가중치 $$W$$에만 의존하는 가설이다.

$$
h(x)\cong Wx
$$

비록 편향 매개변수 $$b$$가 고려되지 않은 가설이지만, 모델의 추론은 거의 가중치 $$W$$에 결정된다. 편향 $$b$$는 가중치로 결정된 추론값에 섬세 조정을 하는 역할을 갖기 때문에 간략화된 가설은 모델을 수학적으로 설명하는데 충분히 유요하다.

### 다중변수 가설
다중변수 가설(multi-variable hypothesis)는 두 개 이상의 독립변수를 갖는 가설이다. 아래는 입력 $$x_1$$, $$x_2$$, 그리고 $$x_3$$를 갖는 선형회귀모델의 가설을 보여준다.

$$
h(x_1,x_2,x_3)=w_1x_1+w_2x_2+w_3x_3+b
$$

선형회귀모델은 선형성을 가지므로 중첩의 원리(superposition principle)를 적용하여 위와 같은 가설을 설립할 수 있는 것이다.

> [중첩의 원리](https://ko.wikipedia.org/wiki/중첩_원리)(superposition principle)는 [가산성](https://ko.wikipedia.org/wiki/가법성)(additivity)과 [동차성](https://ko.wikipedia.org/wiki/동차함수)(homogeneity)을 가지며, 중첩의 원리를 만족하는 함수는 선형성을 지닌 선형함수(linear function)이다.

가설은 행렬을 사용하여 다음과 같이 방정식을 더욱 간략하게 표현할 수 있다.

$$
h(\mathbf{X})=\mathbf{X}\cdot\mathbf{W}+b=\begin {bmatrix} x_1^{[1]}&x_2^{[1]}&x_3^{[1]} \end{bmatrix}\begin {bmatrix} w_1\\w_2\\w_3 \end{bmatrix}+b
$$

여기서 입력 행렬 $$\mathbf{X}$$의 각 열벡터(row vector)는 각 인스턴스를 의미한다. 위의 수식의 경우에 입력 행렬 $$\mathbf{X}$$은 세 개의 자료 $$x_1$$, $$x_2$$, 그리고 $$x_3$$로 구성된 하나의 인스턴스를 갖는다. 인스턴스가 두 개 이상의 경우에는 아래와 같이 나타난다 (예를 들어 세 개의 인스턴스의 경우).

$$
\mathbf{H}(\mathbf{X})=\mathbf{X}\cdot\mathbf{W}+b=\begin {bmatrix} x_1^{[1]}&x_2^{[1]}&x_3^{[1]}\\x_1^{[2]}&x_2^{[2]}&x_3^{[2]}\\x_1^{[3]}&x_2^{[3]}&x_3^{[3]} \end{bmatrix}\begin {bmatrix} w_1\\w_2\\w_3 \end{bmatrix}+b
$$

이전 가설 방정식과 유사하게 만들기 위해 행렬의 위치를 $$\mathbf{W}\cdot\mathbf{X}$$로 바꾸려고 할 수 있으나, 이는 통상적이지 않은 방식이다. 가설의 독립변수는 입력 $$\mathbf{X}$$가 아닌 가중치 $$\mathbf{W}$$이기 때문이다: 입력 자료는 변하지 않는 상수이며, 연전파 과정에서 조정되는 것은 바로 매개변수인 가중치와 편향인 점을 명시하도록 한다.

# 기계학습: 역전파
기계학습에서 매개변수를 조정하는 역전파 과정에서 가설로 세워진 추론값이 실제 참값으로부터 허용 가능한 오차범위 이내의 최소한의 차이를 갖도록 해야 한다. 해당 차이값, 일명 손실(loss; cost)은 모델의 학습이 얼마나 잘 학습되었는지 측정하는 척도가 된다. 본 장은 역전파의 기본적인 원리를 수학적으로 설명한다.

## 오차

오차(error) $$E$$는 가설로 세워진 추론값 $$h(x)$$와 참값 $$y$$가 갖는 차이값을 가리키며, 최적의 모델은 최소의 오차를 가져야 한다. 오류의 종류는 다양하지만, 본 내용에서는 두 가지의 이산자료 오류에 대하여 살펴본다. 다음은 단일 인스턴스에 대한 오류를 수식으로 나타낸 것이다.

1. 통계적 오류 (statistical error)

$$
E_1 = h(x)-y
$$

2. MSE (평균 제곱 오차; mean square error) 혹은 MSD (평균 제곱 편차; mean square deviation)

$$
E_2 = \left( h(x)-y \right)^2
$$

기계학습 영역에서 오차라고 하면 일반적으로 *MSE*, 즉 *평균 제곱 오차*를 가리킨다. 단, 해당 오류는 본 장의 소개글에 언급한 손실(loss)과는 전혀 다르다.

## 손실함수
손실함수(loss ufnction) 혹은 비용함수(cost function)는

Cost function is a measurement in continuous function on how well the model fits with multiple number of data $$x$$ (or dataset $$X$$) upon training. If there are total $N$ number of instance in the training data

$$
\mathrm{L}_1(W,b)=\frac{1}{N}\sum_{n=1}^N E_1^{[n]} =\frac{1}{N}\sum_{n=1}^N\left [ h( x^{[n]})-y^{[n]} \right ]
$$

L~1~ is a measurement of a normalized distance-sum between every instance of $$y$$ and $$h(x)$$. Greater the label difference has become, the lower the criterion accuracy is. Aka. LAD (least absolute deviation).

L~2~ is similar to L~1~ but measures using squared difference. Because it uses squared difference, it only returns positive number and emphasizes greater difference significantly than the smaller difference. This property makes greater difference less forgiving while smaller difference more forgiving. Aka LSD (least square error).

$$
\mathrm{L}_2(W,b)=\frac{1}{N}\sum_{n=1}^N E_2^{[n]}=\frac{1}{N}\sum_{n=1}^N\left [ h( x^{[n]})-y^{[n]} \right ]^2
$$

L~2~ cost function is more widely implemented than L~1~ cost function when it comes to machine learning, possibly relevant to usage of MSE for the error term, thus will be dealing mainly on L~2~ cost function.

### Application of Cost Function

Understanding how the cost function calculates the loss will be explained in detail on this section of the article. This will help the beginner able to grasp its mathematical mechanism. Before proceeding, make sure to be fully aware what meaning an input training variables has.

$$
x_m^{[n]}=\begin{cases} n\mathrm{ \ : \ n^{th} \ instance \ of \ the \ training \ data} \\ m\mathrm{ \ \ : \  m^{th} \ \ data \ of \ the \ instance } \end{cases}
$$

This means it is possible to use both term "data" and "instance" when instance only has a single variable ($m\in R^1$). Suppose the input training data and its labels for a single-variable instance for simplified linear regression are as follows:

$$
\begin{cases} \mathbb{x}=\left [ x^{[1]} , x^{[2]} , x^{[3]}\right ] \\ \mathbb{y}=\left [ y^ {[1]} , y^{[2]} ,  y^{[3]} \right ] \end{cases}
$$

Using simplified hypothesis

$$
\mathrm{L}_2(W,b)=\frac{1}{N}\sum_{n=1}^{N=3}\left [ h( x^{[n]})-y^{[n]} \right ]^2\\

=\frac{\left [ h( x^{[1]})-y^{[1]} \right ]^2}{3}+\frac{\left [ h( x^{[2]})-y^{[2]} \right ]^2}{3}+\frac{\left [ h( x^{[3]})-y^{[3]} \right ]^2}{3}\\

=\frac{\left [ \left ( W x^{[1]}+b \right )-y^{[1]} \right ]^2}{3}+\frac{\left [ \left ( W x^{[2]}+b \right )-y^{[2]} \right ]^2}{3}+\frac{\left [ \left ( W x^{[3]}+b \right )-y^{[3]} \right ]^2}{3}
$$

Each term on the RHS of the equation represents the cost calculated only from the n^th^ data, and its overall loss average across the training data is L~2~ loss below:

$$
\therefore\mathrm{L}_2(W,b)=\frac{1}{3}\left [ E^{[1]}+E^{[2]}+E^{[3]} \right ]\\

=\mathrm{L}_2^{[1]}(W,b)+\mathrm{L}_2^{[2]}(W,b)+\mathrm{L}_2^{[3]}(W,b)
$$

Same method can be applied to the linear regression with multiple-variables. Suppose the training data and their labels are as follows:

$$
\begin{cases} \mathbb{x}_1=\left [ x_1^{[1]} , x_2^{[1]} , x_2^{[1]}\right ] \\ \mathbb{x}_2=\left [ x_1^{[2]} , x_2^{[2]} , x_3^{[2]}\right ]\\ \mathbb{x}_3=\left [ x_1^{[3]} , x_2^{[3]} , x_3^{[3]}\right ] \\ \mathbb{y} \ \  = \left [ y^{[1]} , y^{[2]} , y^{[3]}\right ] \end{cases}
$$

Applying the training data to the multi-variable hypothesis

$$
\mathrm{L}_2(\mathbf{W},b)=\frac{1}{N}\sum_{n=1}^{N=3}\left [ h( x_1^{[n]},x_2^{[n]},x_3^{[n]})-y^{[n]} \right ]^2\\

=\frac{\left [ h( x_1^{[1]},x_2^{[1]},x_3^{[1]})-y^{[1]} \right ]^2}{N}+\frac{\left [ h( x_1^{[2]},x_2^{[2]},x_3^{[2]})-y^{[2]} \right ]^2}{N}+\frac{\left [ h( x_1^{[3]},x_2^{[3]},x_3^{[3]})-y^{[3]} \right ]^2}{N}\\

=\frac{\left [ \left ( w_1 x_1^{[1]}+w_2 x_2^{[1]}+w_3 x_3^{[1]}+b \right )-y^{[1]} \right ]^2}{3}+\frac{\left [ \left ( w_1 x_1^{[2]}+w_2 x_2^{[2]}+w_3 x_3^{[2]}+b \right )-y^{[2]} \right ]^2}{3}\\+\frac{\left [ \left ( w_1 x_1^{[3]}+w_2 x_2^{[3]}+w_3 x_3^{[3]}+b \right )-y^{[3]} \right ]^2}{3}
$$

Again, the loss is calculated separately according to the n^th^ instance and its overall average loss across the dataset results L~2~ loss below:

$$
\therefore\mathrm{L}_2(\mathbf{W},b)=\frac{1}{3}\left [ E^{[1]}+E^{[2]}+E^{[3]} \right ]\\

=\mathrm{L}_2^{[1]}(\mathbf{W},b)+\mathrm{L}_2^{[2]}(\mathbf{W},b)+\mathrm{L}_2^{[3]}(\mathbf{W},b)
$$

### Visualization of Cost Function

Cost function is a function, and is not a constant value, of the parameter $W$ and $b$ (since $x$ and $y$ is already given by a training data). Because it is a function, the cost function can be plotted under 3D plotting.

Following example is a cost function based on the training feature of $x=\{x^{[1]},x^{[2]},x^{[3]}\}=\{1,2,3\}$ and label of $y=\{1,2,3 \}$:

$$
\mathrm{L}_2(W,b)=\frac{1}{n}\sum_{n=1}^{N=3}\left [ h( x^{[n]})-y^{[n]} \right ]^2\\

=\frac{\left [ \left ( W x^{[1]}+b \right )-y^{[1]} \right ]^2}{3}+\frac{\left [ \left ( W x^{[2]}+b \right )-y^{[2]} \right ]^2}{3}+ \frac{\left [ \left ( W x^{[3]}+b \right )-y^{[3]} \right ]^2}{3}\\

=\frac{\left [ \left ( W (1)+b \right )-(1) \right ]^2+\left [ \left ( W (2)+b \right )-(2) \right ]^2+\left [ \left ( W (3)+b \right )-(3) \right ]^2}{3}\\
$$

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\3D plot.gif" width=50%><img src=".\.images\ai\Contour plot.gif" width=50%></div><center style="font-weight:bold">Figure #. 3D graph of the loss function generated by WolframAlpha.com</center>

The deepest curve indicates the lowest loss in the cost function, and the consecutive path of the deepest curve would be the optimal path to the lowest cost for the hypothesis $h (x)=W x+b$ which makes the best training model. Although clearly not shown, the 3D plot indicates the lowest cost is $W,b=(1,0)$.

## Gradient Descent Algorithm

Gradient descent algorithm is a mathematical algorithm used to find the lowest point or minimum value. The algorithm converts scalar to vector which its magnitude being and direction pointing to the steepest downslope, calculated from differentiation.

Supervised learning often uses the following two gradient descent algorithm terms to describe and explain the machine learning.

* Stochastic Gradient Descent (SGD): perform gradient descent in a single instance.
* Batch Gradient Descent (BGD): perform gradient descent in a group (batch) of instance.

In ML, gradient descent algorithm is used to minimize these errors from the cost function. This algorithm is important that it finds the lowest loss for the hypothesis close to the actual true model. This computation process is called "training" in ML, and the result of this training is called a "model" which will be used to make prediction afterward. The following figure is a gradient descent of the figure from above sub-section *Visualization of Cost Function*.

The figure on the right shows more vivid linear line and from this would be possible to find a mathematical relationship between weight parameter $W$ and bias parameter $b$.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\Plot.gif" width=50%><img src=".\.images\ai\Integral curves.gif" width=50%></div><center style="font-weight:bold">Figure #. Gradient descent of the example from Figure # of <i>Visualization of the Loss Function</i></center>

Suppose we have the simplified hypothesis for easier calculation and understanding on how the gradient descent algorithm works in mathematical concept:

$$
h(x)\cong Wx
$$

Cost function based on the simplified hypothesis has parameter $W$ only as its variable.

$$
\mathrm{cost}(W)=\frac{1}{2}\frac{1}{N}\sum_{n=1}^N \left [ h( x^{[n]})-y^{[n]} \right ]^2=\frac{1}{2}\frac{1}{N}\sum_{n=1}^N \left [ Wx^{[n]}-y^{[n]} \right ]^2
$$

Although the cost function above has $$\frac{1}{2}$$ as a coefficient doesn't mean anything special: whether dividing the average in half or not, both still represent average in mathematical perspective. Coefficient $$\frac{1}{2}$$ is to make the further equation simple as possible.

Meanwhile, the definition of the gradient descent is as follows:

$$
W:=W-\alpha\frac{\partial}{\partial W}\mathrm{cost}(W)
$$

...where the equal sign $:=$ means a [definition](https://en.wikipedia.org/wiki/Definition#In_logic_and_mathematics) and $\alpha$ a learning rate. For a programmer, this equation is similar to the assignment syntax such as `x = x - 1`. The equation also holds similarity (but not identical) to the root-finding algorithm, e.g., [Newton-Raphson method](https://en.wikipedia.org/wiki/Newton%27s_method), [Secant method](https://en.wikipedia.org/wiki/Secant_method), et cetera.

The term $\frac{\partial}{\partial W}\mathrm{cost}(W)$ tells how steep the slope is on current weight parameter $W$. Closer the cost reaches its minimum, the slope gets flatter and eventually be $\frac{\partial}{\partial W}\mathrm{cost}(W)=0$ when there is no loss. Negative sign describes gradient vector pointing toward downslope. The formula automatically adjust $W$ by shifting the parameter closer to the minimum cost. Learning rate hyperparameter $\alpha$ determines a factor how much to shift in a course of minimizing the cost (similar to a sampling interval on Digital Signal Processing); greater the learning rate is, much faster it will reach the minimum, but should take a risk on accuracy due to calculating wide area.

From the definition of the gradient descent, substituting $\mathrm{cost}(W)$ to its definition,

$$
W:=W-\alpha\frac{\partial}{\partial W}\frac{1}{2N}\sum_{n=1}^N \left [ Wx^{[n]}-y^{[n]} \right ]^2
=W-\alpha\frac{1}{2N}\sum_{n=1}^N 2\left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}
$$

$$
\therefore W:=W-\alpha\frac{1}{N}\sum_{n=1}^N \left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}
$$

While the equation above is based on simplified hypothesis, the same concept can be applied to the general hypothesis with both weight and bias parameter presented. The following are the definition of gradient descent algorithm on weight and bias parameter: 

$$
W:=W-\alpha\frac{\partial}{\partial W}\frac{1}{2N}\sum_{n=1}^N \left [Wx^{[n]}+b-y^{[n]} \right ]^2

=W-\alpha\frac{1}{N}\sum_{n=1}^N \left [ Wx^{[n]} + b -y^{[n]} \right ] x^{[n]}
\\
b:=b-\alpha\frac{\partial}{\partial b}\frac{1}{2N}\sum_{n=1}^N \left [Wx^{[n]}+b-y^{[n]} \right ]^2

=b-\alpha\frac{1}{N}\sum_{n=1}^N \left [ Wx^{[n]} + b -y^{[n]} \right ]
$$

### Batch Gradient Descent

Batch is a group of subject (in this case, instances of training dataset) to be processed altogether. The batch in machine learning is also used to train the model in efficient way, considering both computation memory and prediction accuracy of the model.

Suppose there is a simplified hypothesis as follows:

$$
W:=W-\alpha\frac{1}{N}\sum_{n=1}^N \left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}
$$

The equation trains the whole instances altogether but would require huge memory capacity. On the other hand, if the training is done instance by instance (aka. Stochastic Gradient Descent; SGD), the equation should look like this:

$$
W:=W-\alpha\frac{1}{1}\sum_{n=1}^1 \left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}=W-\alpha \left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}
$$

However, since the parameter is adjusted by an instance, the loss calculation that is crucial on finding minimum cost looses its meaning as a whole data because it fails to capture the relevance between data upon training. This leads to trained model become inaccurate.

Hence, it is important to find the mid-point between training with too many and too few instances. This group of instances that is trained together for machine learning is called batch, and the Batch Gradient Descent (abbrv. BGD) below has a batch size of $$M$$.

$$
\therefore W:=W-\alpha\frac{1}{M}\sum_{n=1}^M \left [ Wx^{[n]}-y^{[n]} \right ] x^{[n]}
$$

### Learning Rate

Learning rate hyperparameter defines a distance of the step the gradient descent algorithm takes for every process of computation. This rate is crucial in machine learning to minimize the cost but also does not have a correct answer on choosing the number of rate. Following reasons describe the effect of determining the learning rate:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\1_hGhRddOUV8h0pdQek8T35A.png" width=100%></div><center style="font-weight:bold">Figure #. Learning rate of extreme cases.</center>

On choosing learning rate of too big value would make the algorithm difficult, or maybe impossible to minimize the cost. In worst case, the cost can overshoot (similar definition of the term "overshoot" in signal processing) getting farther away from cost minimization, meaning the cost increases instead.

Meanwhile, learning rate of too small value would take too long time to train even the simplest model. If unlucky, the gradient descent algorithm would reach the unexpected local minimum only reachable by extremely small learning rate.

Thus, developer should decide the learning rate by first observing the cost function (possibly by plotting the function) and checking the rate the cost goes down. General recommendation is to start by setting the learning rate to 0.01.

### Convex Function

Some cost functions may have two or more different and/or separated minimum cost, where gradient descent algorithm could reach the minimum cost differently based on the initial point and learning rate. Although both reach may minimum cost, the path they took is different and thus grants two different model which is not appropriate.

To prevent this from happening, one must verify the cost function is in a form of a [convex function](https://en.wikipedia.org/wiki/Convex_function). Convex function has a single maximum/minimum point and its gradient descent will reach the same minimum point wherever and however. If the cost function is indeed verified to be a convex function, the training will always results a path that reaches a single and only minimum cost which is an appropriate behavior.

Thankfully, the linear regression will almost always have a cost function as a convex function with cost being quadratic equation of a parameter $W$ and $b$.
