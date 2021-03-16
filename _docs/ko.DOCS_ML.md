---
layout: docs
language: ko
category: 인공지능
title: 기계 학습
meta: ML
mathjax: true
order: 0xF0
---
# 기계 학습: 소개
기계 학습, 일명 머신러닝(machine learning)은 인공지능(artificial intelligence)의 한 분야로 여러 경험을 통해 향상되는 컴퓨터 알고리즘을 지칭한다. 여기서 "경험"이란, 일반적으로 데이터를 제공하여 "학습"시키므로써 컴퓨터 스스로가 최적의 알고리즘을 도출하 게 한다. 머신러닝은 크게 세 부류로 나뉘어진다:

* 지도 학습 (Supervised Learning)
* 비지도 학습 (Unsupervised Learning)
* 강화 학습 (Reinforcement Learning)

## 용어 정의
머신러닝에 사용되는 용어는 개인이나 단체에 따라 다를 수가 있는데, 이는 오히려 해당 분야를 처음으로 접하는 초보자에게는 혼란을 야기할 수 있다. 이를 방지하기 위해 본 부문은 다음과 같이 용어를 통일시킨다.

### 자료의 의미

| 용어  | 영문      | 정의                                                                             |
|:---:|:-------:|--------------------------------------------------------------------------------|
| 특성  | feature | 머신러닝에서 매개변수(parameter) 중 가중치(weight) 조정에 기여하는 하나의 머신러닝 입력 데이터 자료 혹은 그의 구성요소이다. |
| 레이블 | label   | 해당 특성을 가지는 자료가 속하는 분류, 즉 머신러닝에서는 입력 데이터의 정답에 해당한다.                             |

### 자료의 크기

| 용어    | 영문       | 정의                                           |
|:-----:|:--------:|----------------------------------------------|
| 데이터   | data     | 머신러닝에 기여하는 가장 작은 단위의 정보.                     |
| 인스턴스  | instance | 일련의 데이터로 구성되어 있는 분류 가능한 정보 (즉, 레이블을 가지는 정보). |
| 데이터세트 | dataset  | (레이블 분류가 없는) 데이터 집합                          |

### 데이터세트 분할

| 용어 | 영문         | 정의                                                                                          |
|:--:|:----------:|---------------------------------------------------------------------------------------------|
| 학습 | training   | 머신러닝에서 모델을 학습하기 위해 전체 데이터세트 중에서 70~90%로 할당된 데이터세트이다.                                        |
| 검증 | validation | 초매개변수(hyperparameter; $$\alpha$$, $$\lambda$$ 등) 조정을 위한 시험 데이터세트의 일부분이며, 가상 성능 시험 역할을 담당하기도 한다. |
| 시험 | test       | 학습된 모델의 성능을 시험하기 위한 전체 데이터세트 중 10~30%로 할당된 데이터세트이다.<br/>시험 데이터세트는 단 한 번만 사용되어야 한다!              |

### 모델 학습

| 용어 | 영문        | 정의                                                                                                               |
|:--:|:---------:|------------------------------------------------------------------------------------------------------------------|
| 반복 | iteration | 1회 받은 입력 데이터로 모델 매개변수가 업데이트되는 학습 작업 혹은 그에 대한 횟수이다.                                                               |
| 배치 | batch     | 매 반복마다 학습 작업을 위해 건네지는 입력 데이터가 가지는 인스턴스 개수이다.<br/>(배치 크기 과다: RAM 메모리 부족 & 낮은 일반화; 배치 크기 과소: 학습 시간 장기화 & 낮은 전역 최적화 보장) |
| 세대 | epoch     | 학습 데이터 전체가 모델에 학습된 횟수이다.                                                                                         |

# 기계 학습: 기초
머신러닝 분야의 시초는 신경학적 두뇌를 단일 시냅스로부터 시작하여 알고리즘으로 재현하려는 연구로부터 시작되었다. 그리고 현재는 여러 신경층을 가진 복잡한 신경망을 가지는 심층 신경망(deep neural network; DNN) 단계까지 도달하였다. 본 장은 머신러닝의 신경망에 대한 기초적인 개념에 대한 설명을 다룬다.

## 퍼셉트론
퍼셉트론(perceptron)은 머신러닝의 시발점을 알리는 1세대 알고리즘이다.

![뉴런 신경세포의 수학적 접근](/images/docs/ml/ml_neuron_modeling.png)

퍼셉트론은 모든 뉴런들은 아래의 선형 수학식으로 표현될 수 있다고 가정한다:

$$
y=w_0x_0+w_1x_1+\cdots+w_mx_m+b
$$

시냅스를 통해 전달된 입력 신호 $$x_0$$가 그에 해당하는 가중치 $$w_0$$와 곱하여 



Perceptron is the first generation of the algorithm which opened up the field of machine learning. While the detail mathematical description will be explained in later chapter of "*ML::SUPERVISED LEARNING*" series, the following provides brief information to help understands the basic concept underlying the algorithm.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\neuron_modeling.png" width=100%></div><center style="font-weight:bold">Figure #. Drawing of a neuron and its counterpart model, the Perceptron.</center>

Perceptron assumes every model could be expressed using linear mathematical equations:
$$
y=w_0x_0+w_1x_1+\cdots+w_mx_m+b
$$
An input signal $x_0$ is multiplied to the corresponding weight $w_0$, which functions as dendrites in synapse counterpart. All these $w_ix_i$ are summed together including bias $b$ at cell body. The linear equation is eventually processed using activation function which can do simple binary classification of distinguishing 0(deactivated) and 1(activated). This whole process of making a prediction is called "**forward propagation**".

While the perceptron proved worked well on linear regression on OR and AND logic operation, it failed to execute XOR logic which follows non-linear regression. Although such flaws had made the science of neural network enter the dark era, it still bears an important meaning as a first model for neural network for artificial intelligence.

## 신경망

Neural network (or Artificial neural network; ANN) is a next generation of the perceptron with multiple layers of node (perceptron), thus is also known as Multi-Layered Perceptron, abbreviated as MLP. Neural network was proposed to resolve what original perceptron failed to capture the non-linear regression.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\MLP.jpeg" width=100%></div><center style="font-weight:bold">Figure #. Multi-Layered Perceptron.</center>

Prediction of non-linear regression using multiple layers of perceptron was proposed even back when depression from failure of perceptron lingered. However, this idea was shortly turned down due to an extreme difficulty on finding the appropriate parameters which was adjusted manually.

After couple of decades, the algorithm to find these parameters in spite of multiple layers has been discovered, called "**backpropagation**". While forward propagation is to make a prediction, back propagation is to provide feedback to the parameters that is responsible on making prediction automatically. The most common application of backpropagation is the gradient descent optimization.

Now that  stacking multiple layers of perceptron became possible, the term to distinguish layers are needed. The layer where input and output is passed in and out are called "input layer" and "output layer" respectively. Rest of the layers between them cannot be interfaced is called a "hidden layer" and is responsible for training the features that are not shown.

The activation function for each perceptron in neural network should be applicable on non-linear data, thus must use different functions beside a unit-step function. Currently well-knowns for the activation functions are

* Sigmoid
* Tangent Hyperbolic
* Rectified Linear Unit (ReLU)

...and the output of the activation function is called activation.

## 활성화 함수

Activation function (aka. transfer function, characteristic function) is a function which defines the bounded classification output based on the input of score value which can have an infinite range.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\activationFunction.jpg" width=100%></div><center style="font-weight:bold">Figure #. Activation function: (1) step, (2) sigmoid, (3) tanh, and (4) ReLU.</center>

Three activation function have been introduced: sigmoid, tangent hyperbolic, and ReLU function. Current trend for an activation function is ReLU function, and each has its own advantages and disadvantages.

### STEP: range {0, 1}

Step function is a simplest and easiest activation function: if above threshold returns 1 (activated), else returns 0 (deactivated). While the function is great for binary classification, it is not suitable for a linear regression since it can only return 0 and 1 but not the probability. Any value with sufficiently high number above the threshold will be send the signal "activated".



**2. LINEAR** : range ($-\infty$, $\infty$)

Linear function $y=Ax$ can return wide range of number instead of just sending binary classification of 0 and 1. However, the derivative of the function is constant to $A$ it is inappropriate to use gradient descent algorithm to find the minimum cost. Additionally, linearity property shows no matter how many deep the connected layers are will always result another linear activation. This means any neural network can be simplified to a single-layered, and cannot be used on non-linear figures.



**3. SIGMOID** : range (0, 1)

Aka. logistic function, this non-linear but step-like sigmoid function can resolve all the problems step and linear function have encountered. As one of the widely used activation functions, it was a great activation function for a classification problem from the fact it was able to give a bounded range of answer even when given an infinite range of input data.

Unfortunately, the function has a flaw on "vanishing gradient": on both side of the near-horizontal lanes are where the gradient is almost insignificant that training model is impossible. Despite the fact, sigmoid is still widely used in output activation function in binary classification (softmax function for multinomial classification).



**4. TANGENT HYPERBOLIC** : range (0, 1)

Tangent hyperbolic $\tanh$ shares almost identical traits shown by the sigmoid function: non-linear, infinite-range input and bounded output, and even the flaw of vanishing gradient as well but less prone to it compare to the sigmoid. Its noticeable difference would be stronger gradient compared to the sigmoid function. Eventually, tangent hyperbolic is a scaled sigmoid function:
$$
\tanh(x)=\frac{2}{1+e^{-2x}}-1=2 \ \mathrm{ sigmoid}(2x)-1
$$

**5. ReLU** : range [0, $\infty$)

Although similar to the linear function, ReLU (**Re**ctified **L**inear **U**nit) actually bears non-linearity due to left and right plane of the coordinate holds complete different linear function that cannot be expressed as a single linear function.
$$
A(x) = \max(0,x)
$$

Non-linearity means the layers for the neural network is stackable, and most of the functions can be approximated using the ReLU function.

Another benefit of using the ReLU function is the efficiency on signaling activation: sigmoid and tangent hyperbolic sends analog activation regardless of the input $x$, creating dense neural network. Meanwhile, ReLU function reduces the number of activation by half due to the characteristic the function has on negative $x$ range (constant output of 0), making the neural network lighter. Therefore, ReLU activation function is great for the deep neural network including the fact it involves simpler mathematical operations.

However, upon activation on negative range of input data $x$ would result zero gradient, which unable to adjust the parameters for loss minimization. This state makes the substantial part of the neural network passive (not functioning) due to unresponsive neuron (aka. node), called "dying ReLU".

Leaky ReLU is implemented to resolve this matter; it has a very slight degree of slope instead of having none at all. This eventually allows the training possible even on negative input range.

## 옵티마이저

**1. SGD**

# 기계 학습: 선형 분류
선형 분류(linear classification)










## **Nearest Neighbor Classifier**

Nearest neighbor classifier (aka. NN classifier) doesn’t have anything to do with CNN but does help understand the concept on how the neural network works.

Nearest neighbor classifier predicts (or selects) one test image that has the highest confidence that looks almost identical to the referenced image (i.e. training image). However, that does not mean all the predicted images from test set shares same label as the referenced training image as it selected based on L1 loss function; even if the label is different, the classifier will select an image with lowest loss function distance.

k-Nearest Neighbor (aka. kNN) Classifier predicts more than one (k number) image with the highest confidence (k=1 is a NN classifier mentioned above). Choosing multiple images from prediction has smoothing or generalization effect.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\kNN classifier.jpg" width=100%></div>
<center style="font-weight:bold">Figure #. Differnce between NN and kNN classifier.</center>

Notice an island of green island either located at sea of blue region or red region can create incorrect prediction when using NN classifier. Meanwhile 5-NN classifier smoothen out the data region, leading to better generalization and its gray region is due to tied vote on prediction (neutral).

NN-classifier is very easy to understand, simple to implement, and time required to train is extremely short. However, time required to test is extremely longer than of training time. Not suitable for practical use but can be used for low dimensional image classification.

### Selecting Hyperparameter K

Selecting an adequate value of hyperparameter k (for k-NN classifier) is one thing that needs to be considered. There’s no such algorithmic calculation to find the optimal hyperparameter and the only way to find optimal hyperparameter would be trying every possible value case-by-case.

Generally, when the training set is large, we can just partition training set and validation set between 50-90% and see which hyperparameter value suits the best (split to have validation set to use test set only once for evaluation; validation set is deemed "fake test set"). However, when the training set is small to partition, it is better to use cross-validation technique.

Cross-validation divides training set (that has not been partitioned to have validation set yet) in equal length of fold. For example, when choosing 5-fold cross-validation like it did on the plot below, four folds would be used for training and the remaining fold would become a validation set. Four different training folds would be used for training and the validation set would check the accuracy and be used to tune the hyperparameters k. The trace below is connected from the average point on distributed point of accuracy from each fold on individual hyperparameter k. The highest peak of the trace, i.e., k=7 represents best value of hyperparameter k for the k-NN classifier.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\Hyperparameter k.png" width=100%></div>
<center style="font-weight:bold">Figure #. Selecting hyperparameter K</center>

Beware that choosing the number of folds is done carefully
as well. General number used is 10-fold cross validation which is based on
experimental. Another way to choose the number of folds is by having n-fold cross validation where n is number of class.

## **Linear Classifier**

kNN classifier have disadvantages of having to store all the training dataset in order to make prediction and requires too much time to predict test data. Linear classifier is a stronger classifier than kNN classifier for image classification.

Input and output of the linear classification can be expressed mathematically as follows:
$$
x_i \in R^D
$$
…where $i$ is number of total image examples $\mathrm{range}(1,N)$, thus $x_i$ represents the image data of each examples flattened as a column vector  $[D:1]$. D is a dimension of an examples (e.g. $D=28\times28\times1=784$). Therefore $R^D$ represents the domain of input images with $y_i$ superscripted on D is $R^D$ just to distinguish from output codomain.
$$
y_i \in R^K
$$
…where $y_i$ is a label of each $x_i$ and K represent the number of categories (label). Thus, $y_i$ would be one of the values within range of $\mathrm{range}(1,N)$.

A score function that scores images which category it belongs to would be expressed $R^D\mapsto R^K$. And in linear classifier, the function is constituted with linear equation below.
$$
f(x_i,W,b)=Wx_i+b
$$
…where W is a weight of matrix $[K:D]$ and b is a bias of matrix $[K:1]$, and this also explains why $x_i$ is a column vector and not a row vector. Parameter b is called "bias" as it does influence the output scores and does not interact with actual data $x_i$.






# **ML::NEURAL NETWORK**

The field of machine learning has been researched based on the fact the researcher trying to replicate the neurological brain system starting by designing from a single cell of synapse. This eventually leads to a complex neural network with multiple layers called Deep Neural Network nowadays. In this chapter, the history and the concepts of the neural network is going to be explained here.

## Perceptron

Perceptron is the first generation of the algorithm which opened up the field of machine learning. While the detail mathematical description will be explained in later chapter of "*ML::SUPERVISED LEARNING*" series, the following provides brief information to help understands the basic concept underlying the algorithm.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\neuron_modeling.png" width=100%></div><center style="font-weight:bold">Figure #. Drawing of a neuron and its counterpart model, the Perceptron.</center>

Perceptron assumes every model could be expressed using linear mathematical equations:
$$
y=w_0x_0+w_1x_1+\cdots+w_mx_m+b
$$
An input signal $x_0$ is multiplied to the corresponding weight $w_0$, which functions as dendrites in synapse counterpart. All these $w_ix_i$ are summed together including bias $b$ at cell body. The linear equation is eventually processed using activation function which can do simple binary classification of distinguishing 0(deactivated) and 1(activated). This whole process of making a prediction is called "**forward propagation**".

While the perceptron proved worked well on linear regression on OR and AND logic operation, it failed to execute XOR logic which follows non-linear regression. Although such flaws had made the science of neural network enter the dark era, it still bears an important meaning as a first model for neural network for artificial intelligence.

## Neural Network

Neural network (or Artificial neural network; ANN) is a next generation of the perceptron with multiple layers of node (perceptron), thus is also known as Multi-Layered Perceptron, abbreviated as MLP. Neural network was proposed to resolve what original perceptron failed to capture the non-linear regression.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\MLP.jpeg" width=100%></div><center style="font-weight:bold">Figure #. Multi-Layered Perceptron.</center>

Prediction of non-linear regression using multiple layers of perceptron was proposed even back when depression from failure of perceptron lingered. However, this idea was shortly turned down due to an extreme difficulty on finding the appropriate parameters which was adjusted manually.

After couple of decades, the algorithm to find these parameters in spite of multiple layers has been discovered, called "**backpropagation**". While forward propagation is to make a prediction, back propagation is to provide feedback to the parameters that is responsible on making prediction automatically. The most common application of backpropagation is the gradient descent optimization.

Now that  stacking multiple layers of perceptron became possible, the term to distinguish layers are needed. The layer where input and output is passed in and out are called "input layer" and "output layer" respectively. Rest of the layers between them cannot be interfaced is called a "hidden layer" and is responsible for training the features that are not shown.

The activation function for each perceptron in neural network should be applicable on non-linear data, thus must use different functions beside a unit-step function. Currently well-knowns for the activation functions are

* Sigmoid
* Tangent Hyperbolic
* Rectified Linear Unit (ReLU)

...and the output of the activation function is called activation.

### Activation Function

Activation function (aka. transfer function, characteristic function) is a function which defines the bounded classification output based on the input of score value which can have an infinite range.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\activationFunction.jpg" width=100%></div><center style="font-weight:bold">Figure #. Activation function: (1) step, (2) sigmoid, (3) tanh, and (4) ReLU.</center>

Three activation function have been introduced: sigmoid, tangent hyperbolic, and ReLU function. Current trend for an activation function is ReLU function, and each has its own advantages and disadvantages.

**1. STEP** : range {0, 1}

Step function is a simplest and easiest activation function: if above threshold returns 1 (activated), else returns 0 (deactivated). While the function is great for binary classification, it is not suitable for a linear regression since it can only return 0 and 1 but not the probability. Any value with sufficiently high number above the threshold will be send the signal "activated".



**2. LINEAR** : range ($-\infty$, $\infty$)

Linear function $y=Ax$ can return wide range of number instead of just sending binary classification of 0 and 1. However, the derivative of the function is constant to $A$ it is inappropriate to use gradient descent algorithm to find the minimum cost. Additionally, linearity property shows no matter how many deep the connected layers are will always result another linear activation. This means any neural network can be simplified to a single-layered, and cannot be used on non-linear figures.



**3. SIGMOID** : range (0, 1)

Aka. logistic function, this non-linear but step-like sigmoid function can resolve all the problems step and linear function have encountered. As one of the widely used activation functions, it was a great activation function for a classification problem from the fact it was able to give a bounded range of answer even when given an infinite range of input data.

Unfortunately, the function has a flaw on "vanishing gradient": on both side of the near-horizontal lanes are where the gradient is almost insignificant that training model is impossible. Despite the fact, sigmoid is still widely used in output activation function in binary classification (softmax function for multinomial classification).



**4. TANGENT HYPERBOLIC** : range (0, 1)

Tangent hyperbolic $\tanh$ shares almost identical traits shown by the sigmoid function: non-linear, infinite-range input and bounded output, and even the flaw of vanishing gradient as well but less prone to it compare to the sigmoid. Its noticeable difference would be stronger gradient compared to the sigmoid function. Eventually, tangent hyperbolic is a scaled sigmoid function:
$$
\tanh(x)=\frac{2}{1+e^{-2x}}-1=2 \ \mathrm{ sigmoid}(2x)-1
$$

**5. ReLU** : range [0, $\infty$)

Although similar to the linear function, ReLU (**Re**ctified **L**inear **U**nit) actually bears non-linearity due to left and right plane of the coordinate holds complete different linear function that cannot be expressed as a single linear function.
$$
A(x) = \max(0,x)
$$

Non-linearity means the layers for the neural network is stackable, and most of the functions can be approximated using the ReLU function.

Another benefit of using the ReLU function is the efficiency on signaling activation: sigmoid and tangent hyperbolic sends analog activation regardless of the input $x$, creating dense neural network. Meanwhile, ReLU function reduces the number of activation by half due to the characteristic the function has on negative $x$ range (constant output of 0), making the neural network lighter. Therefore, ReLU activation function is great for the deep neural network including the fact it involves simpler mathematical operations.

However, upon activation on negative range of input data $x$ would result zero gradient, which unable to adjust the parameters for loss minimization. This state makes the substantial part of the neural network passive (not functioning) due to unresponsive neuron (aka. node), called "dying ReLU".

Leaky ReLU is implemented to resolve this matter; it has a very slight degree of slope instead of having none at all. This eventually allows the training possible even on negative input range.

## Deep Learning

Although discovery of backpropagation have led to significant development on machine learning, it soon encountered another problem called vanishing gradient. Back then, sigmoid activation function was universal in neural network and neural network didn't had too deep layers.

In an attempt to create deeper neural network, the influence of the input training data never reached to the output. In other word, training was unsuccessful and its main reason was a vanishing gradient from the sigmoid. This made another age of depression to artificial neural network scientist.

The solution was found

* New activation function for hidden layers: ReLU
* Better initialization of weight parameters.




# **ML::SUPERVISED LEARNING: BASIC**

Supervised learning is one of the learning algorithm in machine learning where both input and output data is fed to computer for training. Computer receives the input data and compare the corresponding output which is an answer for the input. As the training goes on, computer eventually finds the patterns between the input and the output, thus be able to make a prediction.





# **ML::SUPERVISED LEARNING: PREDICTION**

The main purpose of the machine learning is to "predict" (inference) the output/outcome. When set of data is given to predict the model, the model returns predicted value based on the parameters in the model. The best model makes minimum error (difference between true value and predicted value) data-wide.

The prediction is occurred as the input data is passed through an artificial neural network with initialized parameters from the beginning to the end. Hence, another term to describe the technical process of making prediction is called **forward propagation**.

## Regression Analysis

Etymology of the "regression analysis" was first coined by biologist Francis Galton to explain the phenomena that statistic figures tends to return to its average (regression to the mean).

In modern study, the meaning of regression analysis changed to something more general of any statistical analysis of the relationship between independent and dependent variable (e.g., $x$ and $y$)

Regression in ML (machine learning) would be a relationship between the input training data $x$ and its prediction $y$. In a supervised machine learning, *features* of the training data is going to be an input data $x$ and its *label* of the training data would be an output data  $y$. Machine learning creates regression model based on the input and output data where the model becomes the core factor in prediction of machine learning.

A regression model where relationship between independent and dependent variable follows linearity is called linear regression:

$$
y=Ax+B
$$

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\1_KwdVLH5e_P9h8hEzeIPnTg.png" width=100%></div><center style="font-weight:bold">Figure #. Linear regression model for a classification</center>

## Hypothesis

The objective of machine learning is to achieve the mathematical model that best represent the patterns and regressions. This mathematical model we want to make it to be similar to its true model is called "hypothesis" Suppose we have a linear regression model, then the hypothesis would 
$$
\hat{y}=h(x)=Wx+b
$$
The **best optimized hypothesis** $h(x)$ is and should be determined to have a lowest loss(aka. cost), which is a difference between the true value $y$ and hypothetically predicted value $h(x)$ by tweaking its weight parameter $W$ and bias parameter $b$.
$$
y(x)\cong h_{opt}(x)=W_{opt}x+b_{opt}
$$
This process of tweaking the parameter $W$ and $b$ is called "training" in ML and the method it uses to optimize the hypothesis is "gradient descent algorithm".

### Simplified Hypothesis

Simplified hypothesis is a hypothesis without a bias parameter $b$ and only depends on weight parameter $W$.
$$
h(x)\cong Wx
$$
The formula is simple, hence, less technical then with bias considered. Simplified hypothesis, however, is useful in explaining mathematical approach in ML as the function only depends on a single parameter $W$.

### Multi-variable Hypothesis

Linear regression may be expressed far more complex by having multiple independent data of $x$. The more independent data there are, the more weight parameters are needed as a coefficient. The number of the independent data in a single instance is denoted with subscripted number. For linear regression with three independent variable $x_1$, $x_2$, and $x_3$
$$
h(x_1,x_2,x_3)=w_1x_1+w_2x_2+w_3x_3+b
$$
This is because of the linearity property of linear regression system where superposition principle and proportionality both satisfies. Matrix can simplify the expression and shorten the length of the equation despite the number of variables.
$$
h(\mathbf{X})=\mathbf{X}\cdot\mathbf{W}+b=\begin {bmatrix} x_1^{[1]}&x_2^{[1]}&x_3^{[1]} \end{bmatrix}\begin {bmatrix} w_1\\w_2\\w_3 \end{bmatrix}+b
$$
...where the row vector of the data is called instance, and the superscripted number represent it is a 1^st^ instance of the training data that has data of $x_1, \ x_2, \ x_3$. In case the input has more than one instance in the training data (three, for example)
$$
\mathbf{H}(\mathbf{X})=\mathbf{X}\cdot\mathbf{W}+b=\begin {bmatrix} x_1^{[1]}&x_2^{[1]}&x_3^{[1]}\\x_1^{[2]}&x_2^{[2]}&x_3^{[2]}\\x_1^{[3]}&x_2^{[3]}&x_3^{[3]} \end{bmatrix}\begin {bmatrix} w_1\\w_2\\w_3 \end{bmatrix}+b
$$
It is possible to switch back the location of matrix to $\mathbf{W}\cdot\mathbf{X}$ to make it look more familiar. However, it is advised not to since weight parameter $W$ is deemed as a independent variable and is the one developers are trying to find out using backpropagation.

# **ML::SUPERVISED LEARNING: COST FUNCTION**

Although making prediction is the main purpose to train the model, it is also crucial to verify whether the hypothetical prediction and its true value does not differ too much by exceeding the tolerance. This difference can used to measure how well the model got trained called "cost function".

This chapter also explains how the problem encountered during perceptron period got resolved: automatically adjusting the parameter of hidden layers using the Gradient Descent Algorithm. While its mathematical concept behind the fundamental mechanism will be explained on later chapter, how the gradient descent optimization works can be understood in this chapter.

## Error

The best optimized model should have minimum difference between hypothetical prediction value $h(x)$ and its true value $y$. This difference is called an error $E$. There are two different discrete data of error that requires an attention, and below is an equation for a single instance.

1. Statistical Error

$$
E_1 = h(x)-y = \left ( w_1 x_1+w_2 x_2+\cdots+w_m x_m +b \right ) - y
$$

2. MSE (Mean Square Error; or Mean Deviation Error)

$$
E_2 = (h(x)-y)^2 = \left ( \left ( w_1 x_1+w_2 x_2+\cdots+w_m x_m +b \right ) - y \right )^2
$$

In the field of machine learning, error is generally refers to MSE than statistical error.

## Cost Function

Cost function is a measurement in continuous function on how well the model fits with multiple number of data $x$ (or dataset $X$) upon training. If there are total $N$ number of instance in the training data
$$
\mathrm{L}_1(W,b)=\frac{1}{N}\sum_{n=1}^N E_1^{[n]} =\frac{1}{N}\sum_{n=1}^N\left [ h( x^{[n]})-y^{[n]} \right ]
$$
L~1~ is a measurement of a normalized distance-sum between every instance of $y$ and $h(x)$. Greater the label difference has become, the lower the criterion accuracy is. Aka. LAD (least absolute deviation).

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
Although the cost function above has $\frac{1}{2}$ as a coefficient doesn't mean anything special: whether dividing the average in half or not, both still represent average in mathematical perspective. Coefficient $\frac{1}{2}$ is to make the further equation simple as possible.

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

Hence, it is important to find the mid-point between training with too many and too few instances. This group of instances that is trained together for machine learning is called batch, and the Batch Gradient Descent (abbrv. BGD) below has a batch size of $M$.
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

# **ML::SUPERVISEDS LEARNING: CLASSIFICATION**

Classification is one of the very important field in machine learning, especially in understanding how the neural network works. Although linear regression model is responsible for making prediction, the model alone is not enough for a decision-making. Classification not just predicts but can also make decision what linear regression model is poor at (thus, advanced version of linear regression).

## **Binary Classification**

Binary classification classifies whether the predicted label of the feature belongs within two (binary) classes, encoded as 0 or 1. Like quantization in DSP, the classification of the label for the feature is returned based on the reference level of the classification which would be a mid-point between the two labels. This concept is equivalent to the quantization in digital signal processing.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\VVtRW.png" width=100%></div><center style="font-weight:bold">Figure #. Classification using pure linear regression model.</center>

The example figure above is a linear regression model ($H(x)=Wx+b$) whether to classify malignancy ($H(x)$) of the brain tumor from its size ($x$). The above figure is a linear regression model plotted based on training from the training data comprised of tumor size feature and malignancy label. The classification seems non-problematic on this point as the training data is classified correctly due to the training data being (seems to be) selected to have it classifiable in linear regression model.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\nEC4H.png" width=100%></div><center style="font-weight:bold">Figure #. Problem encountered with an extreme data affecting the classification.</center>

This linear classification, however, do have a serious drawback. Even a single data of an extreme value can change how the model should classifies the data. Above figure of example shows the changed linear regression model after training an extreme feature data. The slope of the re-optimized model has decreased compared to the previous model, and will now predicts tumor data including 5^th^ to 7^th^ from the left is not malignant when it actually is.

Not only shows this serious problem on training, but also could lead severe prediction error. Optimized linear regression model with binary classification is trained (aka. adjusted weight and bias parameter) to predict label of features within the range of $\left [ 0,1 \right]$.  Predicting an extreme feature can and may return label that is far out of range which should not be happened from the prediction model.

This explains the need of finding new classification equation while maintaining the linear regression model.

## **Logistic Hypothesis**

Mathematician and computer scientist has found a solution to resolve the classification problem encountered above by using a function called "sigmoid function" (aka. logistic function). Formula of the sigmoid is as follows:
$$
S(x)=\frac{1}{1+e^{-x}}
$$

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\Logistic-curve.svg" width=100%></div><center style="font-weight:bold">Figure #. Sigmoid Function</center>

Because of its exponential term in the formula, the function never reaches zero and one.
$$
\lim_{x\rightarrow+\infty}S(x)=1 \\ \lim_{x\rightarrow-\infty}S(x)=0
$$
The sigmoid function takes hypothesis as a variable to perform classification. For better readability, let  $Z=H(\mathbf{X})=\mathbf{X}\cdot\mathbf{W}$ which is a simplified hypothesis in linear regression. The formula of the sigmoid function
$$
S(Z)=S(H(\mathbf{X}))=\frac{1}{1+e^{-Z}}=\frac{1}{1+e^{-\mathbf{X}\cdot\mathbf{W}+b}}
$$

Therefore, simply by changing denotation from $S(H(\mathbf{X}))\rightarrow H(\mathbf{X})$ derives the equation called "logistic hypothesis":
$$
\therefore H(\mathbf{X})=\frac{1}{1+e^{-\mathbf{W^T}\cdot\mathbf{X}+b}}
$$

Since logistic hypothesis is just another variation of the sigmoid function, it shares the same properties of where it never reaches zero and one. This is a perfect formula for implementation as it can also accept extreme features but still returns the label in-range.

While the hypothesis in linear regression model represents the value the input data will have based on the adjusted model by gradient descent algorithm, hypothesis in classification model represents the probability to be labeled as a certain class:  hypothesis value between encoded class of 0 and 1 means the probability between 0~100% to be labeled as an encoded class 1.

### Logits

With sigmoid function converts input numbers to probability, the value from input expression $\mathbf{X}\cdot\mathbf{W}+b$ prior to being activated (by ReLU, softmax, et cetera) is called logit in classification. Logit is an abbreviation of "logistic unit" and is defined as logarithm of the "odds".
$$
\operatorname{logit}(p)=\log \left( \frac{p}{1-p} \right)
$$
...where odds is a ratio of probability of success to probability to failure. The logit function ranges from $\left [ -\infty,\infty \right ]$. Most importantly, logit function is inverse to sigmoid function.
$$
\operatorname{logit}^{-1}(\alpha)=S(\alpha)
$$
However, logits in classification is not truly defined as "logarithm of the odds"; instead it has more meaning as a mere score that ranges $\left [ -\infty,\infty \right ]$. The score is relevant to classification but is not a probability, which is where sigmoid function comes in to convert the logits score to probability of classification.

## **Logistic Cost Function**

Although logistic hypothesis now allows better classification compared to a sole linear regression, the cost function based on the logistic hypothesis has brought another new problem: the cost function is not a convex function anymore.

The exponential term creates bulks on the graph which makes cost function not only have a (global) minimum cost but also multiple points of a local minimum. Local minimum is not a point where it returns minimum cost of the function; it is a point where gradient descent algorithm think it is a minimum cost. With cost function having multiple local minimum, the gradient descent algorithm cannot find the minimum cost (of overall function) appropriately.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\GradientDescentOfErrorFunction.jpg" width=100%></div><center style="font-weight:bold">Figure #. Cost function with global and local minimums</center>

Therefore a new cost function for a classification (aka. logistic cost function) is necessary, and the function would share the same format of equation as the previous cost function.

$$
\mathrm{cost}(W)=\frac{1}{N}\sum_{n=1}^N c(H(x^{[n]}),y)
$$
...where the function $c()$ measures the difference between predicted label from its corresponding true label. Eventually the function would be as the following equation for a binary classification which will be explained later:

$$
c(H(x)),y)=\begin{cases}-\ln(H_L(x)) \ \ \ \ \ \ \ \ \ \ : y=1 \\-\ln(1-H_L(x)) \ \ \ :y=0 \end{cases}
$$
<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\logistic_cost.png" width=100%></div><center style="font-weight:bold">Figure #. Logistic cost function for classification</center>

The logarithm term in logistic cost function cancels the effect of exponential term in sigmoid function that is responsible for creating local minimum. The slope of the logarithm also satisfies the fact it can have a smooth downslope.

The function is divided into two different section:

* On $y=1$, the cost function $-\ln(H(x))$ calculates cost which returns no loss on correct label $\ln(1)=0$ while return infinite loss on $\ln(0)=\infty$

* On $y=0$, the cost function $-\ln(1-H(x))$ calculates cost which returns no loss on correct  label $\ln(1-0)=0$ while return infinite loss on $\ln(1-1)=\infty$

Combining these to one, results a graph similar to convex function, which is the one that gradient descent algorithm is applicable. Simply adding two graphs into one does not create function that satisfies both cases above. To satisfy two cases in a single equation
$$
c(H(x)),y)=-y\ln(H(x))-(1-y)\ln(1-H(x))
$$
Substituting the function into logistic cost function
$$
\therefore \mathrm{cost}(W)=-\frac{1}{N}\sum \left [ y\ln(H(x))+(1-y)\ln(1-H(x)) \right ]
$$
Both term $y$ and $1-y$ is to cancel each others property. Only $-\ln(H_L(x))$ term survives on predicting label that corresponds to the true label $y=1$ while $\ln(1-H_L(x))$ survives alone on predicting for true label $y=0$. This means logistic cost function cannot have both logarithmic curve at the same time.

Applying this to the definition of the gradient descent algorithm previously used on linear regression will also find the minimum cost. There's no need to redefine the definition of the gradient descent algorithm.

### Difference between Regression and Classification model

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\class_vs_reg.jpg" width=100%></div><center style="font-weight:bold">Figure #. Difference between classification model and linear regression model</center>

Linear regression is about finding a relationship between independent and its dependent variable. The model would trace the line of trend how the data is distributed. However, the model for the classification behave differently which can be understood by explanation below:

* On $y=1$, the function $c(H(x)),y)=-y\ln(H(x))-(1-y)\ln(1-H(x))=-\ln(H(x))$ calculates the cost only based around data with its true label of 1.
* On $y=0$, the function $c(H(x)),y)=-y\ln(Hx))-(1-y)\ln(1-H(x))=-\ln(1-H(x))$ calculates the cost only based around data with its true label of 0.

Eventually, the calculated cost is actually divided into two labels, but summing this all up and dividing it by the number of the total data (averaging the cost) would optimize the parameters that tries to satisfy minimization of both label 0 and 1. Therefore, training logistic hypothesis divide the label by the region of class labeled 0 and 1 instead.

# **ML::SUPERVISED LEARNING: SOFTMAX CLASSIFICATION**

Binary classification is a simple but is fundamental classification which can be used to classify more than two classes as well, aka. multinomial classification. Multinomial classification is encountered more often than of binary classification. This chapter explains how multinomial classification works with an introduction of a new "softmax" function.


## **Multinomial Classification**

There are systems where classification of more than two is required, called multinomial classification. Suppose there is a three-class system labeled A, B, and C:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\one_vs_all.png" width=100%></div><center style="font-weight:bold">Figure #. Difference between classification and linear regression model</center>

The binary classification can only distinguish binary class 0 and 1. Creating a new function every time   as the number of category increases is inefficient method of computation. To classify more than one class using already defined binary classification:

1. Binary classification to classify whether is A or not A
2. Binary classification to classify whether is B or not B
3. Binary classification to classify whether is C or not C

Thus needs $K=3$ number of binary classification and sigmoid functions when processing system with $K$-classes. This also means the system needs $K$ number of different pair of weight and bias parameters to trace $K$ number of line of classification model.

Example below shows a process of three-class classification of a single instance with three data $x_1$, $x_2$, and $x_3$:
$$
\begin{cases} \mathrm{A \ CLASS: \ } \begin{bmatrix} x^{[1]}_1 &x^{[1]}_2 & x^{[1]}_3 \end{bmatrix} \begin{bmatrix}w_{A1}  \\ w_{A2}\\w_{A3} \end{bmatrix} +b_A = w_{A1}x^{[1]}_1 + w_{A2}x^{[1]}_2 + w_{A3}x^{[1]}_3 +b_A  =\operatorname{logit}(A) \\

\mathrm{B \ CLASS: \ }\begin{bmatrix}x^{[1]}_1  & x^{[1]}_2 & x^{[1]}_3 \end{bmatrix} \begin{bmatrix}  w_{B1}\\w_{B2}\\w_{B3} \end{bmatrix} +b_B =  w_{B1}x^{[1]}_1 + w_{B2}x^{[1]}_2 + w_{B3}x^{[1]}_3 +b_B  =\operatorname{logit}(B) \\

\mathrm{C \ CLASS: \ }\begin{bmatrix} x^{[1]}_1 & x^{[1]}_2 & x^{[1]}_3 \end{bmatrix} \begin{bmatrix} w_{C1} \\w_{C2}\\w_{C3} \end{bmatrix} +b_C= w_{C1}x^{[1]}_1 + w_{C2}x^{[1]}_2 + w_{C3}x^{[1]}_3 + b_C  =\operatorname{logit}(C)

\end{cases}
$$
...where logit is a score for classification which has been mentioned above previously. These three separate matrices can be merged to a single matrix for better data management.
$$
\begin{bmatrix} x^{[1]}_1 &x^{[1]}_2&x^{[1]}_3 \end{bmatrix}\begin{bmatrix} w_{A1} & w_{B1} & w_{C1} \\ w_{A2} & w_{B2} & w_{C2} \\ w_{A3} & w_{B3} & w_{C3} \end{bmatrix}+b
=\begin{bmatrix} \operatorname{logit}(A) & \operatorname{logit}(B) & \operatorname{logit}(C) \end{bmatrix} = \mathrm{Logits}
$$
The logits are now returned as a vector instead of a scalar. Theoretically, passing the logits to sigmoid function for classification will return the probabilities of which category to be classified to. However, sigmoid function was designed for binary classification, hence is not suitable for multinomial classification as the probability may go off-range from $\left [ 0,1 \right]$.

Softmax function is more generalized form of the sigmoid function that can classify more than one category, which is suitable for multinomial classification. While $K$ is a number of classes
$$
\sigma(\mathbf{z})=\frac{e^{z_i}}{\sum_{j=1}^Ke^{z_j}} \ \ \ \left ( i=1,2,\cdots,K \ \mathrm{and} \ \mathbf{z}=(z_1,z_2,\cdots,z_K)\in\mathbb{R}^K \right )
$$
Let softmax function takes logits matrix as an input
$$
\sigma(\mathrm{Logits})=\frac{e^{\mathrm{logit}(i)}}{\sum_{j=1}^Ke^{\mathrm{logit}(j)}}
=\begin{bmatrix} H_{A}(\mathbf{X}) & H_{B}(\mathbf{X}) & H_{C}(\mathbf{X}) \end{bmatrix}
\\
=\begin{bmatrix}\bar{y}_A & \bar{y}_B & \bar{y}_C \end{bmatrix} \ \ \ (i: 1(\mathrm{is \ }A), 2(\mathrm{is \ }B), 3(\mathrm{ is \ }C) \ \ \ \ \ K=3)
$$
...where $H_A, H_B, H_C$ are the hypothesis, i.e., the probability to be classified as A, B, and C. The hypothesis is ranged $\left[ 0,1 \right]$ and $\sum \mathbf{H}=H_A+H_B+H_C$ equals to 1.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img src=".\.images\ai\softmax_function.png" width=100%></div><center style="font-weight:bold">Figure #. Coverting logits score to probability by softmax function</center>

The objective of this process is to declare which class the data belongs to: this is done by setting the class with highest probability to fixed-probability of 1 with the rest setting to 0 via "one-hot encoding".

## **Multinomial Cost Function**	

With hypothesis figured out, finding the cost function that returns how much difference there is between true label and predicted label is now possible.

Same as logistic cost function, the multinomial cost function would be in a format as below:
$$
\mathrm{cost}(W)=\frac{1}{N}\sum_{n=1}^N C(H(x^{[n]}),y)
$$
Function $C()$ is called cross-entropy formula. While $\mathbf{L}$ is a vector of true label and $\sigma$ a softmax function, the cross-entropy formula is expressed as follows: 
$$
C(\sigma,\mathbf{L})=-\mathbf{L}\circ\ln(\sigma)= L\circ\left(-\ln(\sigma)\right) 
\\
= \begin{bmatrix}y_A & y_B & y_C \end{bmatrix} \circ\left(-\ln\begin{bmatrix} H_{A} & H_{B} & H_{C} \end{bmatrix}\right)= \begin{bmatrix}-y_A \ln H_{A} & -y_B \ln H_{B} & -y_C \ln H_{C} \end{bmatrix}
$$

...where $\circ$ operator is an elementwise multiplication.

Suppose hypothesis (aka. probability) for each class $H_A, H_B, H_C$ and its true label is categorized by classes $y_A, y_B, y_C$ for a single instance. If the true label of the data is $y_B$
$$
C(\sigma,\mathbf{L})= \begin{bmatrix}0 & 1 & 0 \end{bmatrix} \circ \left(-\ln\begin{bmatrix} H_{A} & H_{B} & H_{C} \end{bmatrix}\right)= \begin{bmatrix}0 & -\ln H_{B} & 0 \end{bmatrix}
$$
This allows only to calculate how much loss there is respect to true label. This mathematical expression is identical to of logistic cost function: higher/lower the probability, lesser/greater the cost is. Hence, probability of 1 and 0 would return the cost of $0$ and $\infty$.

Therefore, cost function for the multinomial classification, namely **cross-entropy cost function** is

$$
\mathcal{L}(\mathbf{W},\mathbf{b})=\frac{1}{N}\sum_{n=1}^N C\left ( \sigma(\mathbf{X}_n\mathbf{W}+\mathbf{b}),\mathbf{L}_n \right )
$$

...where $n$ is n^th^ instance of the training data, and $N$ is a total number of instance in training data. With regularization considered, the cost function is modified
$$
\therefore\mathcal{L}(\mathbf{W},\mathbf{b})=\frac{1}{N}\sum_{n=1}^N C\left ( \sigma(\mathbf{X}_n\mathbf{W}+\mathbf{b}),\mathbf{L}_n \right )+ \lambda\sum \mathbf{W} ^2
$$
Since the cost function also is a convex function, applying gradient descent algorithm would optimize the model to minimize the loss between true and predicted label.


# **ML::SUPERVISED LEARNING: TRAINING**

The previous chapter explained how the neural network predicts and adjust the parameters using the gradient descent algorithm on the cost function. Thera are, however, more factors to consider when training the model for better performance and accuracy. The underlying concepts of the gradient descent algorithm, i.e., backpropagation, autoencoder, and more will be described on this chapter.

## **Normalization**

Normalization scales the input data into a single standard bounded range and shift to zero-centered for faster model training and for better optimization. Such data is called a "preprocessed" data and is another important factor to consider upon using gradient descent algorithm.

Suppose the unnormalized training data consist two independent parameter where one ranges $\left [  0,1\right ]$ vertically and the other ranges $\left [ 0, 10 \right ]$ horizontally, shown on the following bottom-left figure:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\Screen-Shot-2018-01-23-at-2.27.20-PM.png" width=100%></div><center style="font-weight:bold">Figure #. Up-down topology of cost function and its gradient on unnormalized and normalized.</center>

Applying gradient descent algorithm on the cost function will minimize the cost by differentiating the cost function. Since the horizontal parameter has greater value range than of vertical parameter, the derivative value is dominated by the horizontal parameter that provides steeper slope than vertical parameter. Hence, the gradient step that is appropriate for horizontal parameter is also applied to smaller-ranged vertical parameter that is little too big, resulting the zig-zag path to minimum cost.

Meanwhile, the right figure shows the same cost function but normalized instead. Unifying the ranges to the single standard range can eliminate zig-zag effect and lead to faster descent to the minimum cost.

The normalized $i^{\mathrm{th}}$ data of instances from the unnormalized input data $\mathbf{X}$ is calculated as follows:
$$
\mathbf{X}'_i=\frac{\mathbf{X}_i-\mu_{\mathbf{X},i}}{\sigma_{\mathbf{X},i}}
$$
...where $\mu_{\mathbf{X},i}$ is a mean respect to $i^{\mathrm{th}}$ data of every instance, and $\sigma_{\mathbf{X},i}$ is a standard deviation respect to $i^{\mathrm{th}}$ data of every instance. The Python syntax for the above expression is coded below:

```python
X_norm[:,i]=(X[:,i] - X[:,i].mean())/X[:,i].std()
```

## **Backpropagation**

Forward propagation was introduced as a "process of making prediction" due to passing the value from the beginning to the end of neural network. Meanwhile, backpropagation does backward by going through the neural network from the end to the beginning.

Gradient descent algorithm was introduced as one of the backpropagation techniques for adjusting the parameters on each layer (there are others like Adam). Although its mathematical concept behind may not be necessary on pure application, those who wants better understanding is recommended to know how it works.

Backpropagation uses the chain rule. Assume the forward propagation was made for a prediction:
$$
y=f(x)=A(B(C(x)))
$$
The function $f$ is an overall neural network consisting three different function of each layer $A$, $B$, and $C$. Its input data $x$ is first passed to the function $C$ of the first layer of the neural network, which its output $C(x)$ is passed to next layer's function $B$ as an input.

The derivative of the function above is calculated as below:
$$
f'(x)=\frac{df(x)}{dx}=\frac{dA(B(C(x)))}{dx}=\frac{A(B(C(x)))}{B(C(x))} \cdot \frac{dB(C(x))}{dC(x)} \cdot \frac{dC(x)}{dx}\\
\therefore y'=A'(B(C(x)) \cdot B'(C(x)) \cdot C'(x)
$$
To find the derivative respect to $C(x)$, substitute function $C(x)$ as a constant value $C$.
$$
f'(C)=A'(B(C)) \cdot B'(C)
$$
This allows which nodes in each layer has certain affect on total prediction on forward propagation. Therefore, this technique can provides a method to adjust the parameter for better prediction.

To help understand how chain rule is applied on backpropagation, this section shows two examples of backpropagation.


### CASE 1: Perceptron

A single neuron predicts by accepts data through synapses which also designate weight parameters as it passes along, and returns activation based on the value. By this, it is clear a single neuron processes two different functions: weighted input, and activation function.

* **Weighted Input**

$$
Z(x)=Wx+b
\\ \mathrm{Derivative} \rightarrow \begin{cases} Z'(x)  = W \\ Z'(W)  = x \\ Z'(b)  =1 \end{cases}
$$

* **Activation Function (ReLU)**

$$
R(Z)=\max(0,Z)
\\ \mathrm{Derivative} \rightarrow R'(Z)=\begin{cases} 0 && Z<0 \\ 1 && Z>0 \end{cases}
$$

While its cost function $C$ is not used on prediction, it is used on backpropagation and its formula is as follows (suppose only a single data as been passed; $N=1$):
$$
C(R)=\frac{1}{2}\sum^{N=1}_{n=1}(R-y)^2=\frac{1}{2}(R-y)^2
\\ \mathrm{Derivative} \rightarrow C'(R)=(R-y)
$$
The derivative of the cost function results the difference between hypothesis and true value, that is, an (statistical) error.

Expanding the function with weighted input and activation function

$$
\mathrm{cost} = C(R(Z(x)))=\frac{1}{2}(\max(0,Wx+b)-y)^2
\\ \mathrm{Derivative} \rightarrow \mathrm{cost}'(x)=\frac{d\mathrm{cost}}{dx}=C'(R(Z(x))) \cdot R'(Z(x)) \cdot Z'(x)=\frac{dC}{dR}\cdot\frac{dR}{dZ}\cdot\frac{dZ}{dx}
$$
Meanwhile, the derivative of the cost function respect to the weight parameter is
$$
\mathrm{cost}'(W)=\frac{d\mathrm{cost}}{dW}=C'(R(Z(W)) \cdot R'(Z(W)) \cdot Z'(W)
$$

### CASE 2: Neural Network

Suppose the neural network is given as the following figure.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\single_neuron_chainrule.png" width=100%></div><center style="font-weight:bold">Figure #. Functions processed in a neural network (no hidden layer here).</i></center>

Currently presented neural network has a single input/output layer, and no hidden layer. The expression below interprets each node of layers and synapses in neural network.

$$
\mathrm{ANN}=
\begin{cases} \mathrm{Input} && : X  
\\  \mathrm{ \ \ \ synapses} && : Z_1(X) && = W_1X+b_1
\\ \mathrm{Input \ Layer} && : R_1(Z_1(X)) && = \max(0, Z_1(X))=H_1 && \mathit{ \ activated}
\\ \mathrm{ \ \ \ synapses} && :Z_2(H_1)  && =W_2H_1+b_2
\\ \mathrm{Output \ Layer} &&: R_2(Z_2(H_1)) && =\max(0,Z_2(H_1))=H_2=O && \mathit{ \ activated}
\end{cases}
$$

The cost function of the neural network for backpropagation will be same as the one introduced from a single neuron case.

$$
C(R)=\frac{1}{2}\sum^{N=1}_{n=1}(O-y)^2=\frac{1}{2}(O-y)^2
\\ \mathrm{Derivative} \rightarrow C'(O)=(O-y)
$$
Expanding the function with weighted input and activation function


$$
\mathrm{cost} = C(R_2(Z_2(R_1(Z_1(X)))))=\frac{1}{2}(\max(0,W_2\cdot\max(0,W_1X+b_1)+b_2)-y)^2
\\ =\frac{1}{2}(\max(0,W_2\cdot\max(0,W_1X+b_1)+b_2)-y)^2
$$
The derivative of the expanded equation of cost function respect to input data $X$ is as below.
$$
\mathrm{cost}'(X)=\frac{dC}{dH_2}\cdot\frac{dH_2}{dZ_2}\cdot\frac{dZ_2}{dH_1}\cdot\frac{dH_1}{dZ_1}\cdot\frac{dZ_1}{dX}
$$
This pattern shown on the derivative equation all implies to the chain rule.

If the neural network has more than one hidden layer, say two hidden layers (which is layer 2 and 3), the derivative of the cost function respect to input data $X$ is expressed as follows.
$$
\mathrm{cost}'(X)=\frac{dC}{dH_4}\cdot\frac{dH_4}{dZ_4}\cdot\frac{dZ_4}{dH_3}\cdot\frac{dH_3}{dZ_3}\cdot\frac{dZ_3}{dH_2}\cdot\frac{dH_2}{dZ_2}\cdot\frac{dZ_2}{dH_1}\cdot\frac{dH_1}{dZ_1}\cdot\frac{dZ_1}{dX}
$$
Compared to the previous one, the derivative equation is has extended following the certain pattern:
$$
\frac{dH_n}{dZ_n}\cdot\frac{dZ_n}{dH_{n-1}}
$$
This redundant patterns is likely to repeat over as deeper the neural network gets.

### Mathematical Approach

In computer science, memoization is a term of technique which stores previously computed results to avoid recalculation of the same function over again. This is different from memorization which remembers the results even before computation began. Application of memoization on backpropagation is extremely useful as it already remembered the previously calculated derivative that involves in chain rule.

To find the solution on relation between input to the certain layer of its neural network and the cost function, backpropagation introduces new term called layer error; a derivative of the cost function respect to a layer's direct input (just before activation; $Z$). Derivative of the cost function outputs error and was shown on *"CASE 1: Single Neuron"* section.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\single_neuron_chainrule_visualization.png" width=100%></div><center style="font-weight:bold">Figure #. Visualized detail on backpropagation of the neural network (no hidden layer here).</i></center>

First, the output layer error $E_o$

$$
C'(Z_o)=\frac{dC}{dR_o}\cdot\frac{dR_o}{dZ_o}=(R_o(Z_o)-y)\cdot R_o'(Z_o)=E_o
$$
...and to compare this with previous neural network equation, substitute $Z_o=Z_2$ and $R_o=R_2$.

Its input layer error $E_i$
$$
C'(Z_h)=\frac{dC}{dR_o}\cdot\frac{dR_o}{dZ_o}\cdot\frac{dZ_o}{dR_i}\cdot\frac{dR_i}{dZ_i}
\\ = E_o\cdot W_o \cdot R_i'(Z_i) =E_i
$$
...where $Z_o=W_oR_i$. Input layer error $E_i$ includes the output layer error $E_o$, and its output layer error was, in fact, already calculated above. While the derivative calculation is processed backward by starting from output to input layer (hence, backpropagation), the error for each layer could be figured out with lesser calculation due to the property of the chain rule.

If the cost function is differentiated respect to output weight parameter

$$
C'(W_o)=\frac{dC}{dR_o}\cdot\frac{dR_o}{dZ_o}\cdot\frac{dZ_o}{dW_o}=E_o\cdot R_i
\\ C'(b_o)=\frac{dC}{dR_o}\cdot\frac{dR_o}{dZ_o}\cdot\frac{dZ_o}{db_o}=E_o
$$
Considering that cost function uses weight and bias parameter as independent variable, it shows how much cost is effected by the weight and bias parameter value. For better understanding, let's use the equation above as an example: changes on $W_o$ and $b_o$ affect the cost proportional to $E_o\cdot R_i$ and $E_o$ respectively.

Let $l$ is a layer number that weight or bias parameter is involved, $j$ as a node of its previous layer respect to forward propagation, and $i$ a node of the specified layer
$$
W_{l_{ij}}:=W_{l_{ij}}-\alpha\frac{\partial}{\partial W_{l_{ij}}}\mathrm{cost}(X)=W_{l_{ij}}-\alpha ( E_l \cdot R_{l-1})
\\
b_{l_{ij}}:=b_{l_{ij}}-\alpha\frac{\partial}{\partial b_{l_{ij}}}\mathrm{cost}(X)=b_{l_{ij}}-\alpha(E_l)
$$
...is how the backpropagation algorithm conceptually updates the neural network parameters.

## **Restricted Boltzmann Machine**

*This section does not provide explanation in detail, and requires more study and research!*

* https://pathmind.com/wiki/restricted-boltzmann-machine
* https://towardsdatascience.com/restricted-boltzmann-machines-simplified-eab1e5878976 
* https://towardsdatascience.com/deep-learning-meets-physics-restricted-boltzmann-machines-part-i-6df5c4918c15 

Restricted Boltzmann Machine (aka. RBM) is a probabilistic energy-based machine learning structure introduced to initialize weight parameters of the neural network using only two layers; visible (input) and hidden layer. The model is structured simply to help provide conceptual understanding on how the algorithm works.

Energy-based model has never been introduced before, thus below provides easy explanation:

> Energy-based machine learning model (abbrev. EBM) is a unified framework for representing many machine learning algorithms, both in probabilistic and non-probabilistic approaches.
>
> The term "energy" was coined from the Hopfield network: the network have a scalar value associated with each neuron that resembles the notion of energy. The sum of these individual scalar gives the energy of the whole network $E$, and its energy function is as follows:
>
> $$
> E=-\frac{1}{2}\sum_{ij}w_{ij}s_is_j+\sum_i\theta_is_i
> $$
> Reason the quantity is called "energy" because of its conceptual familiarity to the energy in physics; for example, atoms with high energy is in the excited state which is unstable. These particles attempt to lower their energy which goes to the ground state that is stable by any means of releasing the energy, such as emitting heat, sound, light, et cetera.
>
> Similarly in the field of machine learning, the neural network with high energy is unstable network that has bad compatibility between each neuron (meaning the parameters are terribly initialized). The energy based model will try to maximize the compatibility, in other word, minimize the energy to stable ground level. This characteristic is where the quantitative measurement of the network got its name as the "energy".
>
> While the energy minimization is done using the energy function above, it is clear the function is greatly dependent on the states of the visible/hidden states and weight/bias parameters. Therefore, training in EBM is equivalent on finding the parameters which minimize the energy function specifically for the given input.

The forward propagation (predicting) of the RBM is same as the previously encountered neural network system. Let the column vector $X=\{x_1,x_2,\cdots,x_j \}$ and $A=\{ a_1, a_2, \cdots, a_i \}$:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\weighted_input_RBM.png" width=100%></div><center style="font-weight:bold">Figure #. Forward propagation on RBM from a perspective of a single hidden layer node.</center>

$$
A=\sigma(WX+b_h)
$$

...where each node can only have a binary state of either 0 (False) or 1 (True).

As a *symmetrical bipartite graph*, each visible node is connected to every hidden nodes (symmetrical) between two layers (bipartite). The term "restricted" means the nodes within the same layer are not connected in anyhow: no intra-layer communication. As the model is raw from training, input signal will make stochastic decision where the parameters are randomly set.

The forward passed input data is eventually activated by the activation function. These activations are now become the inputs for the backward passes (not a backpropagation) from hidden to visible.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\multiple_inputs_RBM.png" width=50%><img src=".\.images\ai\reconstruction_RBM.png" width=50%></div><center style="font-weight:bold">Figure #. Forward (left) and backpropagation (right) between only two layers.</center>

$$
R=WA+b_v
$$

The backward pass is done exactly like forward pass: activations are multiplied by the weights on synapses and the sum of its products and bias is called reconstruction $r$. Yes, biases for input layer is another distinction from the artificial neural network. The difference between reconstruction and original input data $r-x$ is the one that is backpropagated to reduce the cost.

Reduction of the cost is done using Kullback-Leibler(KL) divergence.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\KL_divergence_RBM.png" width=100%></div><center style="font-weight:bold">Figure #. KL-divergence.</center>

It measures the non-overlapping areas under the two graphs. The goal is to reduce the integration of the difference shown on the right curve area. This is done most like using gradient ascent (head toward the maximum): as it heads to maximum, the peak of the curve will be lowered. It should not head to negative as negative peak is away from the original.

### 













----

input is binary, mostly 0 and 1, so I guess the term probabilistic means model is basically under Bernoulli distribution (i.e., discrete probability distribution where 1(activated) with $p$ and 0(inactivated) with $1-p$ probability).

v = [[1],[0],[1],[1]]	Boolean vector visible layer (four nodes)

h=[[0],[0],[1]]	Boolean vector of hidden layer (three nodes)



----

Column vector of random variable assigned to each node in visible layer and hidden layer is denoted $\mathbf{v}$ and $\mathbf{h}$.
$$
p(\mathbf{v}, \mathbf{h})=\frac{1}{Z}e^{-E(\mathbf{v},\mathbf{h})}
\\
Z=\sum_{\mathbf{v}, \mathbf{h}}e^{-E(\mathbf{v},\mathbf{h})}
$$
$Z$ is a (canonical) partition function and the reason it was named like this was: it encodes how the probabilities are partitioned among the different microstates, based on their individual energies. Thus, partition function plays the role of a normalizing constant (note that it does not depend on v, h), ensuring the probabilities sum up to one.



$P_s$ is a probability that system occupies microstate $s$.
$$
P_s=\frac{1}{Z}e^{-\beta E_s}
\\
\sum_s P_s = \frac{1}{Z}\sum e^{-\beta E_s}=\frac{1}{Z}Z=1
$$

> Microstate:  microstates appear as different possible ways the system can achieve a particular macrostate . 
>
> Macrostate: All macroscopic thermodynamic properties of a system may be calculated from the partition function that sums the energy of all its microstates.  a particular set of values of energy, the number of particles, and the volume of an isolated thermodynamic system is said to specify a particular macrostate of it 
>
>   [macroscopic](https://theory.physics.manchester.ac.uk/~judith/stat_therm/node95.html#gl:Macroscopic) systems in terms of a few variables [(functions of state)](https://theory.physics.manchester.ac.uk/~judith/stat_therm/node95.html#gl:FoS): temperature, pressure, volume... But such a system is really made of atoms, so a much richer description must be possible in principle: we could specify the quantum state of all the atoms--the [microstate](https://theory.physics.manchester.ac.uk/~judith/stat_therm/node95.html#gl:Microstate). 
>
>  This suggests we can calculate the macroscopic behaviour of the system by averaging over the corresponding microstates. We can derive thermodynamics from the quantum behaviour of atoms and molecules. 
>
>  https://theory.physics.manchester.ac.uk/~judith/stat_therm/node55.html 
>
> Flips a coin:
>
> macrostate of getting two H is 1 (H,H), getting two T is 1 (T,T) and H and T (H,T and T,H).
>
> Thus, Flip two coin and there are 1(achieved by macrostate HH)+1(achieved by macrostate TT)+2(achieved by macrostate HT and TH) = 4 different microstates (HH, HT, TH, TT)





The reason why the model is called Boltzmann Machine is because it implements Boltzmann distribution.













Its original model, Boltzmann machine, is a network of units with an "energy" (Hamiltonian) defined for the overall network (aka. energy-based models; EBM). The global energy $E$ follows the function
$$
E=-\left( \sum_{i<j}w_{ij}s_js_i + \sum_i\theta_is_i \right)
$$

* $w_{ij}$ is the weight, a connection strength between unit $i$ and $j$.
* $s_i$ is the state of the unit $i$, $s_i\in \{0 , 1 \}$.
* $\theta_i$ is the bias of the unit $i$ in global energy function, an activation offset for the unit.

The term $i<j$ notes the number of visible layer nodes are greater than the number of hidden layer nodes. However, this is just a condition for the function; according to Ising model, the first summation term deals with every nearest neighbor.

Taking this concept to RBM, where the infra-layer communication is unavailable and both forward/backward pass should be considered, its global energy function by a pair of Boolean vector $(X,A)$ is written as below.
$$
E(x,a)=-\left( \sum_i \sum_j w_{ij} x_ia_j +\sum_ib_ha_i + \sum_jb_vx_j \right)
\\
=-\left(X^\mathrm{T}WA+ b_h^{\mathrm{T}}A+ b_v^{\mathrm{T}}X \right)
$$














Unsupervised learning is a machine learning approach where the input data is given but without any label. A whole bunch of dataset will be provided but the model has to figure out their classes.

Suppose the input data for the node 1 is denoted random variable $x_1$ and its value is determined under the probability distribution function of $P(x_1)$. The pdf for each input varies differently: e.g., $P(x_1) \neq P(x_2)$. The total sum of every probability is equal to
$$
\mathrm{Overall \ Probability}:1=
\begin{cases}
\displaystyle\int_{-\infty}^{\infty}P(x_1=x)dx && \mathit{continuous}
\\
\\
\displaystyle\sum_{x=-\infty}^{\infty}P(x_1=x) && \mathit{discrete}
\end{cases}
$$
 where
$$
\begin{cases}
P(X)=\{ P(x_1), P(x_2), \cdots, P(x_i) \}
\\
\\
P(A)=\{ P(a_1), P(a_2), \cdots, P(a_j) \}
\end{cases}
$$
Be aware that $P(X) \ne \sum P(x) \ne 1$ and $P(A) \ne \sum P(a) \ne 1$.

Conditional probability: a to happen when x occurred (sequence of events) [portion out of total $x$]
$$
P(a|x)=\frac{P(a \cap x)}{P(x)}
$$
combination of event $P(x)$ [probability of input data x to be true (1); portion out of total $U$ ] and event $P(a \cap x)$ [probability of output a and input data x is both true; portion of portion $x$ out of total $U$ ]. 

This is a Bayes Theorem, but I don't think this really matters.
$$
P(a\cap x)=P(a|x)P(x)=P(x|a)P(a)
\\ \therefore P(a|x)=\frac{P(x|a)P(a)}{P(x)}
$$
What's important is a chain rule in probability: if input x is true which also leads to have output a true (forward), or if output a is true which also leads to have input x true (backward)...
$$
P(x)P(a|x)=P(a)P(x|a)=P(a \cap x)
$$




Reconstruction is not a regression and classification: it estimates the probability distribution(pdf) of the original input data x (input pdf means how much probability each input data x has to be inputted: x={0,1,2,3} -> P(x)={0.1, 0.4, 0.3, 0.2} ); it does not return continuous regression value and discrete classification value). Meaning, it tries to guess multiple values at the same time. This is known as generative learning (while opposing discriminative learning)

* Generative learning: statistical model of the joint probability distribution $P(X,Y)$.
* Discriminative learning: model of the conditional probability of the target Y given the observation x; $P(Y\mid X=x)$.  tries to model by just depending on the observed data while learning how to do the classification from the given statistics. (such as classifier)




 https://skymind.ai/wiki/restricted-boltzmann-machine 





## Model

Model is a product of training in machine learning which contains the parameter setting that can be used for making prediction when given a new data. There exist three different type of model based on how well the training has gone. The figure located bottom-middle is the most appropriate model where parameters are set to predict the "generalized" trend of the data. 

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\1__7OPgojau8hkiPUiHoGK_w.png" width=100%></div><center style="font-weight:bold">Figure #. Three type of model in machine learning.</center>

Two other model, underfitting and overfitting, are the models that should be avoided when training in machine learning. The following sections will explain the effects of the model and how to avoid them.

### Underfitting

Underfitting is when the ML model cannot capture the trend due to having too simplified model. The cause of the problem may be from insufficient training data or application of inappropriate/wrong algorithm (low variance and high bias).

### Overfitting

Overfitting occurs when the ML trains the model based on the given training data *too well*. This can be noticed when the training model reaches its accuracy to near 100% perfection. Although minimizing the cost is the objective developer seeks, it is not a generalized model but particular model for that given data only; in other word, the model will make poor prediction when encounters new data it has never dealt before (high variance and low bias).

Overfitting problem can be resolved by following methods:

* Implement more various data when training for generalization.
* Reduce the number of features on training to reduce complexity.
* Neglect portion of the data after training to prevent perfection.
* Use **regularization**.

Regularization is a technique to discourage the complexity of the model. It does this by penalizing the cost function. This helps to solve the overfitting problem.

L~1~ regularization (aka. L~1~-norm, Lasso)
$$
\mathcal{L}_{R_1}(W^{[n]},b^{[n]})=\mathrm{cost}(W^{[n]},b^{[n]}) + \lambda\sum_{i=1}^m\left | W_i^{[n]} \right |\\
=\frac{1}{2}\frac{1}{N}\sum_{n=1}^N \left [ W_1x_1^{[n]}+W_2x_2^{[n]}+\cdots+W_mx_m^{[n]}+b-y^{[n]} \right ]+\lambda\sum_{i=1}^m\left | W_i^{[n]} \right |
$$
L~2~ regularization (aka. L~2~-norm, Rigid regularization)
$$
\mathcal{L}_{R_2}(W^{[n]},b^{[n]})=\mathrm{cost}(W^{[n]},b^{[n]}) + \lambda\sum_{i=1}^m\left ( W_i^{[n]} \right )^2\\
=\frac{1}{2}\frac{1}{N}\sum_{n=1}^N \left [ W_1x_1^{[n]}+W_2x_2^{[n]}+\cdots+W_mx_m^{[n]}+b-y^{[n]} \right ]^2+\lambda\sum_{i=1}^m\left ( W_i^{[n]} \right )^2
$$
The cost function (with regularization) $\mathcal{L}$ depends on the parameter $W$ and $b$. The minimum cost of the function $\mathcal{L}$ is fixed (because it's a function) and the parameter $W$ and $b$ are adjusted to reach that fixed-minimum cost.

When variable $x_i$ in the cost function $x_1W_1+x_2W_2+\cdots+b$ has gone significant, the parameter $W_i$ can have comparatively smaller value to achieve the fixed-minimum cost. Hence, the regularization term on RHS greatens the coefficient $x_i$ to lessens the value of the weight parameter $W_i$. This can also penalizes the effect of the parameter $W_i$, and its non-affective weight parameters can change the complex-overfitting model to simpler-generalized model.

How much to penalize the weight parameter is decided by the value of lambda $\lambda$, aka. regularization hyperparameter (strength). When $\lambda=0$, it means there are no regularization in consideration. Greater the regularization parameter is, more penalization is in affect on the weight parameters.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\ai\reg_strengths.png" width=100%></div><center style="font-weight:bold">Figure #. Changes of the model according to the regularization parameter.</center>

The difference between two regularization, L~1~-norm and L~2~-norm, is as follows:

| Features                                  | L~1~-norm | L~2~-norm |
| :---------------------------------------- | :-------: | :-------: |
| Sparse solution<br />(zero-weight)        | Possible  |    No     |
| Feature selection                         | Possible  |    No     |
| Number of solution                        | Multiple  |    One    |
| Training under <br />complex data pattern | Difficult |    Yes    |

L~1~ regularization has benefit of creating simple and interpretable model but L~2~ regularization is far better on creating a model that even works under complex pattern of data. The document here will be using L~2~ regularization from now upon implementation.





# **ML::SUPERVISED LEARNING: CONVOLUTION NEURAL NETWORK**

Based on how brain perceives the images, not all neuron becomes active on perceiving a certain image, but only parts are responsible on specific pattern (horizontal line, vertical line, circle, etc.), and merging all these pattern to a single would how the brain sees the image.

Applying this algorithm is called convolution of filter.



# **ML::UNSUPERVISED LEARNING: BASIC**

Unsupervised learning is one of the learning algorithm in machine learning where only the input data, without any output data, is fed to computer for training.



