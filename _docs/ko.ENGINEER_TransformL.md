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

[라플라스 변환](https://en.wikipedia.org/wiki/Laplace_transform)은 복잡한 미분방정식을 극히 익숙한 [대수방정식](https://en.wikipedia.org/wiki/Algebraic_equation)으로 풀 수 있는 매우 강력한 미적분학 기법이다. 이러한 변환이 가능한 이유는 바로 영역(또는 공간; domain)을 넘나드는 풀이 방식을 사용하기 때문이다. 그리고 이 두 영역을 $$t$$-영역과 $$s$$-영역이라고 부른다.

* *$$t$$-영역 (일명 시간 영역)*
    : 변수 $$t$$, 일명 시간이 중심이 되는 공간이다. 

* *$$s$$-영역 (일명 복소주파수 영역)*
    : 변수 $$s = \sigma + j\omega$$가 중심이 되는 공간이다. 여기서 $$\omega = 2\pi f$$는 각주파수(angular frequency)이며 허수가 붙기 때문에 "복소"주파수라고 부른다. 또한 이는 상수계수 선형미분방정식의 특성방정식 고유값 $$\lambda$$와 유사한 형태를 지니고 있다.

라플라스 변환식은 다음과 같다:

$$
F(s) = \mathcal{L} \{ f(t) \} = \int^{\infty}_{0^-}e^{-st}f(t)dt
$$