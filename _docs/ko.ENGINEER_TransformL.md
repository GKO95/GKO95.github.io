---
layout: docs
language: ko
category: 미적분학
title: 라플라스 변환
meta: Laplace
mathjax: true
order: 0xE1
---
# 라플라스 변환: 개요
> 본 내용은 [미분방정식](../ko.ENGINEER_Differential/)을 기반하므로 이에 대해 충분한 이해가 필요하다.

[라플라스 변환](https://en.wikipedia.org/wiki/Laplace_transform)(Laplace transform)은 복잡한 미분방정식을 극히 익숙한 [대수방정식](https://en.wikipedia.org/wiki/Algebraic_equation)으로 풀 수 있는 매우 강력한 미적분학 기법이다. 이러한 변환이 가능한 이유는 바로 영역(또는 공간; domain)을 넘나드는 풀이 방식을 사용하기 때문이다. 그리고 이 두 영역을 $$t$$-영역과 $$s$$-영역이라고 부른다.

* *$$t$$-영역 (일명 시간 영역)*
    : 변수 $$t$$, 일명 시간이 중심이 되는 공간이다. 

* *$$s$$-영역 (일명 복소주파수 영역)*
    : 변수 $$s = \sigma + j\omega$$가 중심이 되는 공간이다. 여기서 $$\omega = 2\pi f$$는 각주파수(angular frequency)이며 허수가 붙기 때문에 "복소"주파수라고 부른다. 또한 이는 상수계수 선형미분방정식의 특성방정식 고유값 $$\lambda$$와 유사한 형태를 지니고 있다.

라플라스 변환은 $$t$$-영역을 $$s$$-영역으로 공간을 전환하며 다음과 같은 방정식을 가진다.

$$
F(s) = \mathcal{L} \{ f(t) \} = \int^{\infty}_{0^-}f(t)e^{-st}dt
$$

## 라플라스 성질
> *참조: [위키백과 - 라플라스 성질 및 이론](https://en.wikipedia.org/wiki/Laplace_transform#Properties_and_theorems)*

라플라스 변환은 선형계 분석에 있어 매우 유용한 성질들을 가지고 있으며, 그 중에서도 시간에 대한 미분과 적분이 각각 라플라스 변수 $$s$$의 곱셈과 나눗셈으로 표현하여, 미분방정식을 대수방정식으로 변환시키는 강력한 장점을 지닌다. 그 외에도 라플라스 변환은 아래의 성질을 가지고 있다:

| 함수 | 시간 영역 $$f(t)$$  | $$s$$-영역 $$F(s)$$  |
|:--:|:----------:|:------------:|
| [선형성](https://en.wikipedia.org/wiki/Linearity) | $$af(t) + bg(t)$$ | $$aF(s)+bG(s)$$ | 
| [미분](https://en.wikipedia.org/wiki/Derivative) | $$\begin{align}f^{(n)}(t)\end{align}$$ | $$\begin{align} s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0) \end{align}$$ |
| [적분](https://en.wikipedia.org/wiki/Derivative)  | $$\begin{align}\int^t_0{f(\tau)d\tau}\end{align}$$  | $$\begin{align}\frac{1}{s}F(s)\end{align}$$  |
| 시간 이동 | $$f(t-a)u(t-a)$$  | $$e^{-as}F(s)$$  |
| 시간 척도 | $$f(at)$$ | $$\begin{align}\frac{1}{a}F\left(\frac{s}{a}\right)\end{align}$$  |
| 주파수 이동 | $$e^{at}f(t)$$  | $$F(s-a)$$  |
| [합성곱](https://en.wikipedia.org/wiki/Convolution) |  |  |
| [켤레 복소수](https://en.wikipedia.org/wiki/Complex_conjugate) |  |  |

## 라플라스 변환표
> *참조: [위키백과 - 라플라스 변환 목록](https://en.wikipedia.org/wiki/List_of_Laplace_transforms)*

| 함수 | 시간 영역 $$f(t)$$  | $$s$$-영역 $$F(s)$$  |
|:--:|:----------:|:------------:|
| [단위 임펄스](https://en.wikipedia.org/wiki/Dirac_delta_function) | $$\begin{align}\delta(t)\end{align}$$ | $$1$$ |
| [단위 계단 함수](https://en.wikipedia.org/wiki/Heaviside_step_function) | $$u(t)$$ | $$\begin{align}\frac{1}{s}\end{align}$$ |




| $$\begin{align}e^{at}\end{align}$$ | $$\begin{align}\frac{1}{s-a}\end{align}$$ |
| $$1$$ | $$\begin{align}\frac{1}{s}\end{align}$$ |
| $$\begin{align}t^{n}\end{align}$$ | $$\begin{align}\frac{n!}{s^{n+1}}\end{align}$$ |
| $$\begin{align}\sin{\omega t}\end{align}$$ | $$\begin{align}\frac{\omega}{s^2+\omega^2}\end{align}$$ |
| $$\begin{align}\cos{\omega t}\end{align}$$ | $$\begin{align}\frac{s}{s^2+\omega^2}\end{align}$$ |
| $$\begin{align}e^{at}\sin{\omega t}\end{align}$$ | $$\begin{align}\frac{\omega}{(s-a)^2+\omega^2}\end{align}$$ |
| $$\begin{align}e^{at}\cos{\omega t}\end{align}$$ | $$\begin{align}\frac{s}{(s-a)^2+\omega^2}\end{align}$$ |
