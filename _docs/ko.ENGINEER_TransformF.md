---
layout: docs
language: ko
category: 미적분학
title: 푸리에 변환
meta: Fourier
mathjax: true
order: 0xE1
---
# 푸리에 변환: 개요
[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 시간 $$t$$ 영역의 함수를 주파수 $$f$$ 영역의 함수로 분해하는 수학적 변환식이다. 탐구하고자 하는 함수를 다른 시점에서 관측하도록 하며, 대표적인 예시로 신호해석에서 시간에 따라 흐르는 신호가 어떠한 주파수로 구성되어 있는지 알 수 있다. 영역을 넘나드는 추상적인 개념으로 처음에는 다소 이해하기 어려운 내용으로, 본 장은 푸리에 변환에 대한 근본적인 원리를 소개한다.

## 푸리에 급수
[푸리에 급수](https://ko.wikipedia.org/wiki/푸리에_급수)(Fourier series)는 푸리에 변환의 시작점으로, *일반적인 함수(혹은 신호)들은 사인 $$\sin$$과 코사인 $$\cos$$과 같은 간단한 [삼각함수](https://ko.wikipedia.org/wiki/삼각함수)들의 합으로 표현될 수 있다*는 푸리에 해석(Fourier analysis)으로부터 탄생하였다.

> 푸리에 해석은 삼각함수간 합과 뺄셈에 의한 증폭과 상쇄로 어떠한 함수라도 표현할 수 있다는 가설에서 비롯된다. 저주파는 대략적은 함수의 큰 틀을 잡아주면, 고주파는 미세한 조정을 해주는 역할로 치부할 수 있다.

시간에 대한 함수 $$x(t)$$가 있다면 푸리에 급수는 다음과 같다.

$$
x(t) = c_0 + \sum_{k=1}^\infty{a_k}\cos{\omega_k t} + \sum_{k=1}^\infty{b_k}\sin{\omega_k t}  \quad ...\mathrm{where} \ \omega_k = k\omega_0
$$

$$
\quad = c_0 + \left( a_1\cos{\omega_0t} + b_1\sin{\omega_0t} \right) + \left( a_2\cos{2\omega_0t} + b_2\sin{2\omega_0t} \right) + \left( a_3\cos{3\omega_0t} + b_3\sin{3\omega_0t} \right) + \cdots
$$

여기서 $$\omega_k$$는 고조 주파수(harmonic frequency)로 이들의 [최대공약수](https://ko.wikipedia.org/wiki/최대공약수)로 계산되는 기본 주파수(fundamental frequency) $$\omega_0$$는 본 푸리에 급수가 갖는 가장 작은 단위 주파수이다.

삼각함수에서 $$\sin$$과 $$\cos$$ 함수간에 $$\frac{\pi}{2}$$ 위상차가 있다.

$$
x(t) = c_0 + \sum_{k=1}^\infty{c_k\cos{\left( \omega_kt + \phi_k \right)}}
$$

$$
\quad = \sum_{k=0}^\infty{c_k\cos{\left( \omega_kt + \phi_k \right)}}
$$
