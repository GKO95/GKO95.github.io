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

* *[선형성](https://en.wikipedia.org/wiki/Linearity) (Linearity)*
    : 선형 연산자인 적분을 사용하는 라플라스 변환 또한 선형성을 지닌다.

    $$
    af(t) + bg(t) \quad \Longleftrightarrow \quad aF(s)+bG(s)
    $$

    > 증명:
    >
    > $$
    > \mathcal{L}\left\{ af(t) + bg(t) \right\} = \int^{\infty}_{0^-}\left\{ af(t) + bg(t) \right\} e^{-st}dt
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}\left\{af(t)e^{-st} + bg(t)e^{-st}\right\}dt
    > $$
    >
    > $$
    > \quad = a\int^{\infty}_{0^-}f(t)e^{-st}dt + b\int^{\infty}_{0^-}g(t)e^{-st}dt
    > $$
    >
    > $$
    > \quad = a\mathcal{L}\left\{ f(t) \right\} + b\mathcal{L}\left\{ g(t) \right\}
    > $$
    >
    > $$
    > \quad = aF(s) + bG(s)
    > $$

* *[미분](https://en.wikipedia.org/wiki/Derivative) (Derivative)*
    : 함수 $$f(t)$$가 미분가능한 함수이며 지수 형태의 도함수를 가진다고 가정할 시, $$s$$-영역의 방정식은 부분 적분을 통해 도출된다.

    $$
    f^{(n)}(t) \quad \Longleftrightarrow \quad s^nF(s) - \sum^n_{k=1}{s^{n-k}f^{(k-1)}(0^-)}
    $$

    > 예시 (3계도함수):
    >
    > $$
    > \mathcal{L}\left\{ f'''(t) \right\} = s^3F(s) - s^2f(0) - sf'(0) - f''(0)
    > $$
    >

* *[적분](https://en.wikipedia.org/wiki/Integral) (Integral)*
    : 아래의 라플라스 합성곱 성질을 참고한다; 합성곱의 $$g(t)$$ 함수가 적분에서는 단위 계단 함수 $$u(t)$$로 대체되었다.

    $$
    \int^t_0{f(\tau)d\tau} = \bigl( u \ast f \bigr)(t) \quad \Longleftrightarrow \quad \frac{1}{s}F(s)
    $$

* *[합성곱](https://en.wikipedia.org/wiki/Convolution) (Convolution)*
    : 시간축 $$\tau$$에 놓여있는 두 함수 $$f(\tau)$$, $$g(\tau)$$간 서로 겹치는 총 면적이 발생한다. 여기서 함수 $$g(\tau)$$를 시간축에서 $$t$$만큼 이동시켰을 때 겹치는 면적이 변하는데, 주어진 $$t$$ 범위에 대하여 겹치는 면적을 적분하는 것이 두 함수의 합성곱이다.

    $$
    \bigl( f \ast g \bigr) (t) = \int^t_0{f(\tau)g(t-\tau)d\tau} \quad \Longleftrightarrow \quad F(s)G(s)
    $$

    > 증명:
    >
    > $$
    > \mathcal{L}\left\{ f \ast g \right\} = \int^{\infty}_{0^-} \bigl( f \ast g \bigr) (t) e^{-st}dt
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{ \int^{t}_{0^-}{f(\tau)g(t-\tau) e^{-st} d\tau} dt}
    > $$
    >
    > 현재 $$d\tau dt$$ 순서로 되어 있는 적분을 $$dtd\tau$$로 바꾸어도 적분되는 면적은 동일해야 한다. 순서가 바뀌기 전에는 변수 $$\tau$$가 $$0$$에서부터 $$t$$까지 적분되었으나, 그 다음 적분에서 $$t$$가 무한으로 적분하면서 $$\tau$$ 또한 변수 $$t$$를 따라 함께 무한으로 뻗어나간다. 그러므로 적분 순서를 바꾸면 범위는 아래와 같이 바뀐다.
    >
    > $$
    > \quad \Rightarrow \int^{\infty}_{0^-}{ \int^{\infty}_{0^-}{f(\tau)g(t-\tau) e^{-st} dt} d\tau}
    > $$
    >
    > 위에서 설명한 $$\tau$$가 무한으로 적분되는 것이 수식에 반영된 것을 볼 수 있다.
    >
    > 만일 $$u=t-\tau$$로 치환하면 도함수 $$du=dt$$가 나오는데, 적분 우선순위에 의해 $$\tau$$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
    >
    > $$
    > \quad \Rightarrow \int^{\infty}_{0^-}{ \int^{\infty}_{0^-}{f(\tau)g(u) e^{-s(\tau + u)} du} d\tau}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{ f(\tau)e^{-s\tau} d\tau} \cdot \int^{\infty}_{0^-}{g(u) e^{-su} du}
    > $$
    >
    > $$
    > \quad = \mathcal{L}\left\{ f(t) \right\} \cdot \mathcal{L}\left\{ g(t) \right\}
    > $$
    >
    > $$
    > \quad = F(s)G(s)
    > $$

* *[켤레 복소수](https://en.wikipedia.org/wiki/Complex_conjugate) (Complex conjugate)*
    : ...

    $$
    f^*(t) \quad \Longleftrightarrow \quad F^*(s^*)
    $$


| 성질 | 시간 영역 $$f(t)$$  | $$s$$-영역 $$F(s)$$  | 설명 |
|:--:|:----------:|:------------:|:---|
| 시간 이동 | $$f(t-a)u(t-a)$$  | $$e^{-as}F(s)$$  |
| 시간 척도 | $$f(at)$$ | $$\begin{align}\frac{1}{a}F\left(\frac{s}{a}\right)\end{align}$$  |
| 주파수 이동 | $$e^{at}f(t)$$  | $$F(s-a)$$  |

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
