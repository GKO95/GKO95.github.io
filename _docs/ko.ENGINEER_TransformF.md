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
> 본 내용은 고등학교 교육과정 중 하나인 [삼각함수](https://ko.wikipedia.org/wiki/삼각함수), [미분](https://ko.wikipedia.org/wiki/미분) 및 [적분](https://ko.wikipedia.org/wiki/적분), 그리고 [복소수](https://ko.wikipedia.org/wiki/복소수)를 기반하므로 이에 대해 충분한 이해가 필요하다.

[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 시간 $$t$$ 영역의 함수를 주파수 $$f$$ 영역의 함수로 분해하는 수학적 변환식이다. *일반적인 함수(혹은 신호)들은 다른 주파수를 갖는 사인 $$\sin$$ 및 코사인 $$\cos$$ 삼각함수들의 합으로 표현될 수 있다*는 [푸리에 해석](https://en.wikipedia.org/wiki/Fourier_analysis)(Fourier analysis)을 기반으로 수립되었다. 대표적인 예시로 신호해석에서 시간에 따라 흐르는 신호가 어떠한 주파수로 구성되어 있는지 알 수 있다.

# 푸리에 변환: 급수
[푸리에 급수](https://ko.wikipedia.org/wiki/푸리에_급수)(Fourier series)는 푸리에 변환의 시작이자 푸리에 해석을 가장 쉽게 설명한다. 단, 푸리에 급수는 일반함수가 아닌 주기함수의 푸리에 해석에 초점을 두고 있다는 제약이 있다. 주기 $$T$$ 간격으로 반복하는, 혹은 기본 주파수(fundamental frequency) $$\omega_0 = 2\pi f = \frac{2\pi}{T}$$를 갖는 주기함수 $$x_T(t)$$가 주어질 떄 푸리에 급수가 어떻게 유도되는지 삼각함수와 지수함수 형태에 대하여 각각 살펴본다.

## 삼각함수 형태
삼각함수 형태의 푸리에 급수를 설명하기 위해서는 우함수와 기함수의 경우를 나누어서 서술한다.

### 우주기함수
먼저 주기함수 $$x_T(t)$$가 우함수인 주기함수, 일명 우주기함수(even periodic function) 가정하자.

> 우함수(even function)은 $$y$$축을 기준으로 대칭을 이루는 함수이다.

코사인 $$\cos$$ 삼각함수는 대표적인 우함수로, 우주기함수 $$x_{T_e}(t)$$ 합성 방정식은 기본 주파수의 배수인 고조 주파수(harmonic frequency) $$k\omega_0$$를 갖는 코사인 함수들의 합으로 나타낼 수 있다.

$$
x_{T_e}(t) = \sum_{k=0}^{\infty}{a_k\cos{k\omega_0 t}} 
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} \quad \left( \because \ a_0\cos{0\omega_0 t} = a_0 \right)
$$

여기서 우주기함수의 푸리에 계수 $$a_k$$는 해당 주기함수(혹은 신호)를 구성하고 있는 고조 주파수 $$k\omega_0$$ 성분이 얼만큼인지 결정하는 매우 중요한 인자이며, 푸리에 해석의 핵심이다. 푸리에 계수 $$a_k$$를 구하기 위해 우선 합성 방정식의 양변에 $$n$$ 배수의 고조 주파수를 갖는 $$\cos{(n\omega_0 t)}$$ 삼각함수를 곱한다.

$$
x_{T_e}(t)\cos{(n\omega_0 t)} = \sum_{k=0}^{\infty}{a_k\cos{(k\omega_0 t)} \cos{(n\omega_0 t)}}
$$

위의 방정식 방정식 양변에 $$T$$ 주기만큼 적분한다.

$$
\int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} = \int_{T}{\sum_{k=0}^{\infty}{a_k\cos{(k\omega_0 t)} \cos{(n\omega_0 t)}}dt}
$$

$$
\quad = \sum_{k=0}^{\infty}{a_k \int_{T}{\cos{(k\omega_0 t)} \cos{(n\omega_0 t)}dt}  }
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{a_k}{2} \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} } + \cos{\left\{ (k+n)\omega_0 t \right \} }dt}}
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} + \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

코사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 같는 양($$+$$)과 음($$-$$)의 면적이 서로를 상쇄시켜 $$0$$이 되는 성질을 갖는다. 그리고 고조 주파수가 기본 주파수의 정수배가 아닌 이상 무조건 적분구간 $$T$$ 내에서는 $$\lvert k-n \rvert$$ 혹은 $$\lvert k+n \rvert$$번 반복한다.

단, $$k=n$$일 경우에는 전혀 다른 적분 결과가 나타난다.

$$
\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ (n-n)\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1 \cdot dt} & = T

\\

\displaystyle \int_{T}{\cos{\left\{ (n+n)\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & = 0

\end{array}
\right.
$$

사실상 첫 번째 적분식에서만 0이 아닌 다른 결과가 나왔으며, 두 번째 적분식은 다른 경우와 마찬가지로 $$0$$이 계산되었다. 후자는 어떠한 경우에서도 $$0$$이 나오기 때문에 생략하여 다음과 같이 방정식을 간략하게 변경할 수 있다.

$$
\int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} + \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} \right]}
$$

$$
\quad = \frac{a_0}{2}\left( 0 \right) + \frac{a_1}{2}\left( 0 \right) + \cdots + \frac{a_n}{2}\left( T \right) + \cdots
$$

$$
\quad = a_n\frac{T}{2}
$$

그러므로 푸리에 계수 $$a_n$$에 대한 방정식으로 표현하면 다음과 같이 나타난다.

$$
\qquad \therefore a_n = \frac{2}{T}\int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} \quad ...\mathrm{where} \ n \in k = \{1, 2, \cdots \}
$$

그러나 해당 푸리에 계수는 $$n=0$$인 경우에는 성립하지 않으며, 이는 "$$n$$ 배수의 고조 주파수를 갖는" 조건이 전재하였기 때문이다. $$a_0$$에 대해서는 다시 합성 방정식에서 시작하되, 주파수가 $$0$$인 관계로 훨씬 더 간단하게 유도된다.

$$
\int_{T}{x_{T_e}(t)\cos{(0\omega_0 t)}dt} = \sum_{k=0}^{\infty}{a_k \int_{T}{\cos{(k\omega_0 t)} \cos{(0\omega_0 t)}dt} }
$$

$$
\quad \Rightarrow \int_{T}{x_{T_e}(t)dt} = \sum_{k=0}^{\infty}{a_k \int_{T}{\cos{(k\omega_0 t)} dt} }
$$

$$
\qquad \therefore a_0 = \frac{1}{T}\int_{T}{x_{T_e}(t)dt}
$$

그리고 $$a_0$$ 계수는 주파수가 없는 수식에서 유도되었기 때문에 주기함수 $$x_{T_e}(t)$$의 평균값 혹은 전자기에서는 DC 성분과 동일하다.

### 기주기함수
이번에는 주기함수 $$x_T(t)$$가 기함수인 주기함수, 일명 기주기함수(odd periodic function) 가정하자.

> 기함수(odd function)은 원점을 기준으로 대칭을 이루는 함수이다.

사인 $$\sin$$ 삼각함수는 대표적인 기함수로, 기주기함수 $$x_{T_o}(t)$$ 합성 방정식은 마찬가지로 기본 주파수의 배수인 고조 주파수 $$k\omega_0$$를 갖는 사인 함수들의 합으로 나타낼 수 있다.

$$
x_{T_o}(t) = \sum_{k=0}^{\infty}{b_k\sin{k\omega_0 t}} 
$$

$$
\quad = \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}} \quad \left( \because \ b_0\cos{0\omega_0 t} = 0 \right)
$$

여기서 기주기함수의 푸리에 계수 $$b_k$$는 해당 주기함수(혹은 신호)를 구성하고 있는 고조 주파수 $$k\omega_0$$ 성분이 얼만큼인지 결정하는 매우 중요한 인자이며, 푸리에 해석의 핵심이다. 푸리에 계수 $$b_k$$를 구하기 위해 우선 합성 방정식의 양변에 $$n$$ 배수의 고조 주파수를 갖는 $$\sin{(n\omega_0 t)}$$ 삼각함수를 곱한다.

$$
x_{T_o}(t)\sin{(n\omega_0 t)} = \sum_{k=0}^{\infty}{b_k\sin{(k\omega_0 t)} \sin{(n\omega_0 t)}}
$$

위의 방정식 방정식 양변에 $$T$$ 주기만큼 적분한다.

$$
\int_{T}{x_{T_o}(t)\sin{(n\omega_0 t)}dt} = \int_{T}{\sum_{k=0}^{\infty}{b_k\sin{(k\omega_0 t)} \sin{(n\omega_0 t)}}dt}
$$

$$
\quad = \sum_{k=0}^{\infty}{b_k \int_{T}{\sin{(k\omega_0 t)} \sin{(n\omega_0 t)}dt}  }
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{b_k}{2} \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} } - \cos{\left\{ (k+n)\omega_0 t \right \} }dt}}
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} - \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 같는 양($$+$$)과 음($$-$$)의 면적이 서로를 상쇄시켜 $$0$$이 되는 성질을 갖는다. 그리고 고조 주파수가 기본 주파수의 정수배가 아닌 이상 무조건 적분구간 $$T$$ 내에서는 $$\lvert k-n \rvert$$ 혹은 $$\lvert k+n \rvert$$번 반복한다.

단, $$k=n$$일 경우에는 전혀 다른 적분 결과가 나타난다.

$$
\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ (n-n)\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1 \cdot dt} & = T

\\

\displaystyle \int_{T}{\cos{\left\{ (n+n)\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & = 0

\end{array}
\right.
$$

사실상 첫 번째 적분식에서만 0이 아닌 다른 결과가 나왔으며, 두 번째 적분식은 다른 경우와 마찬가지로 $$0$$이 계산되었다. 후자는 어떠한 경우에서도 $$0$$이 나오기 때문에 생략하여 다음과 같이 방정식을 간략하게 변경할 수 있다.

$$
\int_{T}{x_{T_o}(t)\sin{(n\omega_0 t)}dt} = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} - \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

$$
\quad = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} \right]}
$$

$$
\quad = \frac{b_0}{2}\left( 0 \right) + \frac{b_1}{2}\left( 0 \right) + \cdots + \frac{b_n}{2}\left( T \right) + \cdots
$$

$$
\quad = b_n\frac{T}{2}
$$

그러므로 푸리에 계수 $$b_n$$에 대한 방정식으로 표현하면 다음과 같이 나타난다.

$$
\qquad \therefore b_n = \frac{2}{T}\int_{T}{x_{T_o}(t)\sin{(n\omega_0 t)}dt} \quad ...\mathrm{where} \ n \in k = \{1, 2, \cdots \}
$$

그러나 해당 푸리에 계수는 $$n=0$$인 경우에는 성립하지 않으며, 이는 "$$n$$ 배수의 고조 주파수를 갖는" 조건이 전재하였기 때문이다. 하지만 기주기함수에서는 $$\sin(0) = 0$$로 인해 $$b_0$$ 계수가 방정식에서 아예 사라진다. 이는 $$b_0 = 0$$임을 시사하는 게 절대 아니므로 주의하도록 한다.

### 주기함수
종합적으로 우주기함수 $$x_{T_e}(t)$$와 기주기함수 $$x_{T_o}(t)$$의 합은 일반 주기함수 $$x_T(t)$$에 대한 합성 방정식으로 도출된다.

$$
\qquad \therefore x_T(t) = x_{T_e}(t) + x_{T_o}(t) = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}}
$$

$$
\qquad \quad
\left\{
\begin{array}{lll}

a_0 & \displaystyle = \frac{1}{T}\int_{T}{x_{T}(t)dt}

\\

a_k & \displaystyle = \frac{2}{T}\int_{T}{x_{T}(t)\cos{(k\omega_0 t)}dt}

\\

b_k & \displaystyle = \frac{2}{T}\int_{T}{x_{T}(t)\sin{(k\omega_0 t)}dt}

\end{array}
\right.
$$

## 지수함수 형태
지수함수 형태의 푸리에 급수는 삼각함수 형태로부터 지수함수와 삼각함수의 상관관계를 설명하는 [오일러 공식](https://ko.wikipedia.org/wiki/오일러_공식)을 통해 유도된다.

> 오일러 공식: $$e^{jx} = \cos{x} + j\sin{x}$$

$$
x_T(t) = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}}
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{a_k \left( \frac{e^{jk\omega_0} + e^{-jk\omega_0}}{2} \right)} + \sum_{k=1}^{\infty}{-jb_k \left( \frac{e^{jk\omega_0} - e^{-jk\omega_0}}{2} \right)}
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{ \left(\frac{a_k-jb_k}{2}\right) e^{jk\omega_0t} } + \sum_{k=1}^{\infty}{ \left(\frac{a_k+jb_k}{2}\right) e^{-jk\omega_0t} }
$$

삼각함수 형태에서 도출한 푸리에 계수 $$a_k$$ 및 $$b_k$$ 계산식을 대입한다.

$$
x_T(t) = \frac{1}{T}\int_{T}{x_{T}(t)dt} + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)\left[ \cos{k\omega_0 t} - j\sin{k\omega_0 t} \right] dt} \right) e^{jk\omega_0t} }
\\ \qquad \qquad + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)\left[ \cos{k\omega_0 t} + j\sin{k\omega_0 t} \right] dt} \right) e^{-jk\omega_0t} }
$$

$$
\quad = \frac{1}{T}\int_{T}{x_{T}(t)dt} + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

위의 방정식은 $$k$$를 자세히 관찰하면 사실상 $$(-\infty, \infty)$$ 범위를 갖는 하나의 수식으로 정리할 수 있음을 알 수 있다.

$$
x_T(t) = \frac{1}{T}\int_{T}{x_{T}(t)dt} + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

$$
\quad = \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{-j0\omega_0 t} dt} \right) e^{-j0\omega_0t} + \sum_{k=-\infty}^{-1}{ \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} } + \sum_{k=1}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{-1}{ \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} } + \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{-j0\omega_0 t} dt} \right) e^{-j0\omega_0t} + \sum_{k=1}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

그러므로 주기함수 $$x_T(t)$$의 지수함수 형태 푸리에 급수는 다음과 같다.

$$
\qquad \therefore x_T(t) = \sum_{k=-\infty}^{+\infty}{ c_k e^{jk\omega_0t} } \quad ...\mathrm{where} \ c_k = \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt}
$$

### vs. 삼각함수 형태
삼각함수와 지수함수 형태가 서로 달리 생겨도 하나의 주기함수에 대한 푸리에 급수를 표현하는 동일한 방정식이다.

$$
x_T(t) = 

\left\{ 
\begin{array}{ll}

\displaystyle a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}} & \quad \mathsf{Trigonometric}

\\

\displaystyle \sum_{k=-\infty}^{+\infty}{ c_k e^{jk\omega_0t} } & \quad \mathsf{Exponential}

\end{array}
\right.
$$

동일한 방정식이지만 형태만 다른 푸리에 급수로써, 본 부분은 두 형태간 상호비교를 목표로 한다.

삼각함수에서 지수함수 형태로 변환하는 과정에서 $$k=0$$일 경우, 삼각함수의 $$a_0$$와 지수함수의 $$c_0$$ 계수는 어떠한 차이도 없이 동일하다는 것을 확인하였다.

$$
\quad [1] \qquad a_0 = c_0 = \frac{1}{T}\int_{T}{x_{T}(t)dt}
$$

영이 아닌 $$k$$ 배수의 고조 주파수에서 삼각함수와 지수함수 형태를 일대일 비교하면 아래의 식을 만족한다.

$$
a_k\cos{k\omega_0t} + b_k\sin{k\omega_0t} = c_{-k}e^{-jk\omega_0t} + c_{+k}e^{+jk\omega_0t} \quad ...\mathrm{where} \ c_{-k} = c_{+k}^*
$$

$$
\quad = \left[ c_{-k} \left( \cos{k\omega_0t} - j\sin{k\omega_0t} \right) \right] + \left[ c_{+k} \left( \cos{k\omega_0t} + j\sin{k\omega_0t} \right) \right]
$$

$$
\quad = \left[ \left( \mathrm{Re}\left\{c_{k} \right\} - j\mathrm{Im}\left\{c_{k} \right\} \right) \left( \cos{k\omega_0t} - j\sin{k\omega_0t} \right) \right] + \left[ \left( \mathrm{Re}\left\{c_{k} \right\} + j\mathrm{Im}\left\{c_{k} \right\} \right)  \left( \cos{k\omega_0t} + j\sin{k\omega_0t} \right) \right]
$$

$$
\quad = 2 \mathrm{Re}\left\{c_{k} \right\} \cos{k\omega_0t} - 2 \mathrm{Im}\left\{c_{k} \right\} \sin{k\omega_0t}
$$

그러므로 지수함수의 계수로부터 삼각함수 계수를 구하는 일반적인 관계식은 다음과 같다.

$$
\quad [2] \qquad a_k = 2 \mathrm{Re}\left\{c_{k} \right\} \quad ...\mathrm{when} \ k \neq 0
$$

$$
\quad [3] \qquad b_k = - 2 \mathrm{Im}\left\{c_{k} \right\} \quad ...\mathrm{when} \ k \neq 0
$$

반대로 삼각함수 계수로부터 지수함수 계수를 구하는 방법도 역으로 계산될 수 있다.

$$
\quad [4] \qquad c_k = \frac{a_k}{2} - j\frac{b_k}{2} \quad ...\mathrm{when} \ k \neq 0
$$

# 푸리에 변환: 변환
[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 주기함수에 극한된 푸리에 급수와 달리 비주기함수(aperiodic function)에서도 적용할 수 있는 적분 변환식이다. 비주기함수의 주기는 $$T\rightarrow\infty$$로 간주할 수 있으며, 덕분에 매우 작아진 기본 주파수 $$\omega_0 = \frac{2\pi}{T}$$는 더욱 미세한 고조 주파수 $$\omega = k\omega_0$$까지 표현할 수 있다.

## 변환식 유도
푸리에 변환은 주기함수에 대한 푸리에 급수로부터 유도된다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ c_k e^{jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } \quad ...\mathrm{where} \ c_k = \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt}
$$

주기함수가 무한한 주기 $$T \rightarrow \infty$$를 갖으면 절대로 반복하지 않는 비주기함수가 된다. 그러나 고조 주파수가 갖는 $$k$$에 따라 결정되는 푸리에 급수의 계수 $$c_k$$는 $$\lim_{T\rightarrow\infty}\frac{1}{T}$$으로 인해 $$0$$으로 수렴하게 된다. 그러므로 비주기함수의 푸리에 변환에서는 $$\frac{1}{T}$$ 주기 성분이 없는 새로운 푸리에 계수 $$X(k\omega_0)$$를 정의한다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ \frac{1}{T} \left( \int_{-\infty}^{+\infty}{x(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \frac{1}{T} X(k\omega_0) e^{jk\omega_0t} } \quad ...\mathrm{where} \ X(k\omega_0) = \int_{-\infty}^{+\infty}{x(t) e^{-jk\omega_0 t} dt}
$$

주기가 증가하면 주파수는 감소하는 $$\omega = k\omega_0 \propto \frac{1}{T}$$ 반비례 관계를 갖는다. 즉, 주기가 무한대로 증가하면 주파수는 [무한소](https://ko.wikipedia.org/wiki/무한소)로 감소하여 $$d\omega$$ (혹은 $$dk\omega_0$$)가 된다. 이를 기반으로 방정식의 주기 $$T$$를 주파수 $$\omega$$에 대한 식으로 치환한다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ \frac{d\omega}{2\pi} X(\omega) e^{j\omega t} } \quad ...\mathrm{where} \ \omega = k\omega_0
$$
