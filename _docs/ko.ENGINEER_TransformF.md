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
[푸리에 급수](https://ko.wikipedia.org/wiki/푸리에_급수)(Fourier series)는 푸리에 변환의 시작이자 푸리에 해석을 가장 쉽게 설명한다. 단, 푸리에 급수는 일반함수가 아닌 주기함수의 푸리에 해석에 초점을 두고 있다는 제약이 있다. 주기 $$T$$ 간격으로 반복하는, 혹은 기본 주파수(fundamental frequency) $$\omega_0 = 2\pi f_0 = \frac{2\pi}{T}$$를 갖는 주기함수 $$x_T(t)$$가 주어질 떄 푸리에 급수가 어떻게 유도되는지 삼각함수와 지수함수 형태에 대하여 각각 살펴본다.

## 삼각함수 형태
삼각함수 형태의 푸리에 급수를 설명하기 위해서는 우함수와 기함수의 경우를 나누어서 서술한다.

### 우주기함수
먼저 주기함수 $$x_T(t)$$가 우함수인 주기함수, 일명 우주기함수(even periodic function) 가정하자.

> 우함수(even function)은 $$y$$축을 기준으로 대칭을 이루는 함수이다.

코사인 $$\cos$$ 삼각함수는 대표적인 우함수로, 우주기함수 $$x_{T_e}(t)$$의 합성 방정식(synthesis equation)은 기본 주파수의 배수인 고조 주파수(harmonic frequency) $$k\omega_0$$를 갖는 코사인 함수들의 합으로 나타낼 수 있다.

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

코사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 같는 양($$+$$)과 음($$-$$)의 면적이 서로를 상쇄시켜 0이 되는 성질을 갖는다. 그리고 고조 주파수가 기본 주파수의 정수배가 아닌 이상 무조건 적분구간 $$T$$ 내에서는 $$\lvert k-n \rvert$$ 혹은 $$\lvert k+n \rvert$$번 반복한다.

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

사실상 첫 번째 적분식에서만 0이 아닌 다른 결과가 나왔으며, 두 번째 적분식은 다른 경우와 마찬가지로 0이 계산되었다. 후자는 어떠한 경우에서도 0이 나오기 때문에 생략하여 다음과 같이 방정식을 간략하게 변경할 수 있다.

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

그러므로 푸리에 계수 $$a_n$$에 대한 해석 방정식(analysis equation)으로 표현하면 다음과 같이 나타난다.

$$
\qquad \therefore a_n = \frac{2}{T}\int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} \quad ...\mathrm{where} \ n \in k = \{1, 2, \cdots \}
$$

그러나 해당 푸리에 계수는 $$n=0$$인 경우에는 성립하지 않으며, 이는 "$$n$$ 배수의 고조 주파수를 갖는" 조건이 전재하였기 때문이다. $$a_0$$에 대해서는 다시 합성 방정식에서 시작하되, 주파수가 0인 관계로 훨씬 더 간단하게 유도된다.

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

사인 $$\sin$$ 삼각함수는 대표적인 기함수로, 기주기함수 $$x_{T_o}(t)$$의 합성 방정식(synthesis equation)은 마찬가지로 기본 주파수의 배수인 고조 주파수 $$k\omega_0$$를 갖는 사인 함수들의 합으로 나타낼 수 있다.

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

사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 같는 양($$+$$)과 음($$-$$)의 면적이 서로를 상쇄시켜 0이 되는 성질을 갖는다. 그리고 고조 주파수가 기본 주파수의 정수배가 아닌 이상 무조건 적분구간 $$T$$ 내에서는 $$\lvert k-n \rvert$$ 혹은 $$\lvert k+n \rvert$$번 반복한다.

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

사실상 첫 번째 적분식에서만 0이 아닌 다른 결과가 나왔으며, 두 번째 적분식은 다른 경우와 마찬가지로 0이 계산되었다. 후자는 어떠한 경우에서도 0이 나오기 때문에 생략하여 다음과 같이 방정식을 간략하게 변경할 수 있다.

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

그러므로 푸리에 계수 $$b_n$$에 대한 해석 방정식(analysis equation)으로 표현하면 다음과 같이 나타난다.

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

그러므로 주기함수 $$x_T(t)$$의 지수함수 형태 푸리에 급수는 다음 합성 및 해석 방정식을 갖는다.

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

동일한 합성 방정식이지만 형태만 다른 푸리에 급수로써, 본 부분은 두 형태간 상호비교를 목표로 한다.

삼각함수에서 지수함수 형태로 변환하는 과정에서 $$k=0$$일 경우, 삼각함수의 $$a_0$$와 지수함수의 $$c_0$$ 해석 방정식은 어떠한 차이도 없이 동일하다는 것을 확인하였다.

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

$$
\qquad \qquad \quad = \lvert c_k \rvert e^{j\angle{c_k}} \quad
\left\{ 
\begin{array}{ll}

\displaystyle \lvert c_k \rvert & \displaystyle = \sqrt{\left( \lvert c_k \rvert e^{j\angle{c_k}} \right)^2 + \left( \mathrm{Im}\left\{c_{k} \right\} \right)^2} & \displaystyle = \frac{1}{2}\sqrt{a_k^2 + b_k^2}

\\

\displaystyle \angle{c_k} & \displaystyle = \arctan{\left( \frac{\mathrm{Im}\left\{c_{k} \right\}}{\mathrm{Re}\left\{c_{k} \right\}} \right)} & \displaystyle = -\arctan{\left( \frac{b_k}{a_k} \right)} 

\end{array}
\right.
$$

> 푸리에 계수 $$c_k$$의 크기(amplitude; $$\lvert c_k \rvert$$)와 위상(phase; $$\angle{c_k}$$)은 [복소평면](https://ko.wikipedia.org/wiki/복소평면)(complex plane)에서 비롯된다. 가로축과 세로축은 각각 복소수의 실수 $$\mathrm{Re}\left\{c_{k} \right\}$$와 허수 $$\mathrm{Im}\left\{c_{k} \right\}$$를 의미하며, [직각좌표계](https://ko.wikipedia.org/wiki/데카르트_좌표계)로부터 [극좌표계](https://ko.wikipedia.org/wiki/극좌표계) 변환식이 그대로 적용된다.

# 푸리에 변환: 변환
[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 주기함수에 극한된 푸리에 급수와 달리 비주기함수(aperiodic function)에서도 적용할 수 있는 적분 변환식이다. 비주기함수의 주기는 $$T\rightarrow\infty$$로 간주할 수 있으며, 덕분에 매우 작아진 기본 주파수 $$\omega_0 = \frac{2\pi}{T}$$는 더욱 미세한 고조 주파수 $$\omega = k\omega_0$$까지 표현할 수 있다.

## 푸리에 변환
푸리에 변환은 주기함수에 대한 푸리에 급수로부터 유도된다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ c_k e^{jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } \quad ...\mathrm{where} \ c_k = \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt}
$$

주기함수가 무한한 주기 $$T \rightarrow \infty$$를 갖으면 절대로 반복하지 않는 비주기함수가 된다. 그러나 고조 주파수가 갖는 $$k$$에 따라 결정되는 푸리에 급수의 계수 $$c_k$$는 $$\lim_{T\rightarrow\infty}\frac{1}{T}$$으로 인해 0으로 수렴하게 된다. 그러므로 비주기함수의 푸리에 변환에서는 $$\frac{1}{T}$$ 주기 성분이 없는 새로운 푸리에 계수 $$X(k\omega_0)$$를 정의한다.

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

$$
\quad = \frac{1}{2\pi} \sum_{k=-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega}
$$

무한소 $$d\omega$$에 대한 유한합 $$\Sigma$$은 적분으로 대체될 수 있으며, 일반함수의 $$x(t)$$ 합성 방정식과 $$X(\omega)$$ 해석 방정식은 다음과 같다.

$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega} \quad ...\mathrm{where} \ X(\omega) = \int_{-\infty}^{+\infty}{x(t) e^{-j\omega t} dt}
$$

결과적으로 해석 방정식은 시간 $$t$$ 영역에서 주파수 $$\omega$$ 영역으로 변환하여 해당 주파수가 함수에서 차지하는 비중을 계산하는 푸리에 변환(Fourier transform) $$\mathcal{F}$$을 의미한다. 반대로 합성 방정식은 주파수 영역 $$\omega$$에서 시간 $$t$$ 영역으로 변환하여 해당 시간에 함수가 각 주파수들의 합성을 통해 어떠한 값을 가지는지 구하는 푸리에 역변환(inverse Fourier transform) $$\mathcal{F}^{-1}$$이다.

$$
\left\{ 
\begin{array}{ll}

\displaystyle \mathcal{F}\left\{ x(t) \right\} & = X(\omega) & = \displaystyle \int_{-\infty}^{+\infty}{x(t) e^{-j\omega t} dt} & \quad \mathsf{Fourier \ transform \ (analysis \ equation)}

\\

\displaystyle \mathcal{F}^{-1}\left\{ X(\omega) \right\} & = x(t) & = \displaystyle \frac{1}{2\pi} \int_{-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega} & \quad \mathsf{Inverse \ Fourier \ transform \ (synthesis \ equation)}

\end{array}
\right.
$$

각주파수는 $$\omega = 2\pi f$$이므로, 이를 주파수 $$f$$에 대한 식으로 치환하면 다음 푸리에 방정식이 완성된다.

$$
\left\{ 
\begin{array}{ll}

\displaystyle \mathcal{F}\left\{ x(t) \right\} & = X(f) & = \displaystyle \int_{-\infty}^{+\infty}{x(t) e^{-j2\pi ft} dt} & \quad \mathsf{Fourier \ transform \ (analysis \ equation)}

\\

\displaystyle \mathcal{F}^{-1}\left\{ X(f) \right\} & = x(t) & = \displaystyle \int_{-\infty}^{+\infty}{ X(f) e^{j2\pi ft} df} & \quad \mathsf{Inverse \ Fourier \ transform \ (synthesis \ equation)}

\end{array}
\right.
$$

### 푸리에 변환 성질
> *참조: [위키백과 - 푸리에 변환 성질](https://en.wikipedia.org/wiki/Fourier_transform#Properties_of_the_Fourier_transform)*

푸리에 변환은 위에서 유도된 방정식을 토대로 반드시 아래의 성질들을 만족한다. 다음은 푸리에 변환에서 매우 핵심되는 성질들로 반드시 숙지하도록 한다.

* *[선형성](https://en.wikipedia.org/wiki/Linearity) (Linearity)*
    : 선형 연산자인 적분을 사용하는 푸리에 변환 또한 선형성을 지닌다.

    $$
    Ax_1(t) + Bx_2(t) \quad \longleftrightarrow \quad AX_1(f) + BX_2(f)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{F}\left\{ Ax_1(t) + Bx_2(t) \right\} = \int^{+\infty}_{-\infty}\left\{ Ax_1(t) + Bx_2(t) \right\} e^{-j2\pi ft}dt
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{-\infty}\left\{Ax_1(t)e^{-j2\pi ft} + Bx_2(t)e^{-j2\pi ft}\right\}dt
    > $$
    >
    > $$
    > \quad = A\int^{\infty}_{-\infty}x_1(t)e^{-j2\pi ft}dt + B\int^{\infty}_{-\infty}x_2(t)e^{-j2\pi ft}dt
    > $$
    >
    > $$
    > \quad = A\mathcal{F}\left\{ x_1(t) \right\} + B\mathcal{F}\left\{ x_2(t) \right\}
    > $$
    >
    > $$
    > \quad = AX_1(f) + BX_2(f)
    > $$

* *대칭성 (Symmetricity)*
    : 시간 영역에서 $$x(t)$$가 순실수 혹은 순허수 함수이면, 시간 영역에서의 우함수/기함수 대칭성은 주파수 영역에서도 그대로 유지된다.
    
    $$
    x^*(t) \quad \longleftrightarrow \quad X^*(-f)
    $$

    > 푸리에 급수에서도 언급하였듯이, 일반함수는 우함수와 기함수의 합으로 표현된다.
    > 
    > $$
    > x(t) = x_e(t) + x_o(t)
    > $$
    >
    > 시간 영역의 $$x(t)$$ 함수에 대한 푸리에 변환 $$X(\omega)$$는 다음과 같이 전개된다.
    >
    > $$
    > X(\omega) = \int_{-\infty}^{\infty}{x_e(t)\cos{(2\pi ft)}dt} - j\int_{-\infty}^{\infty}{x_e(t)\sin{(2\pi ft)}dt}
    > $$
    >
    > $$
    > \qquad \qquad + \int_{-\infty}^{\infty}{x_o(t)\cos{(2\pi ft)}dt} - j\int_{-\infty}^{\infty}{x_o(t)\sin{(2\pi ft)}dt}
    > $$
    >
    > 우함수와 기함수를 곱하면 우함수가 되는데, 우함수의 적분은 0이므로 전개식은 아래와 같이 간략화될 수 있다.
    >
    > $$
    > X(\omega) = \int_{-\infty}^{\infty}{x_e(t)\cos{(2\pi ft)}dt} - j\int_{-\infty}^{\infty}{x_o(t)\sin{(2\pi ft)}dt}
    > $$
    >
    > 그리고 $$x(t)$$ 함수를 복소수 $$\mathrm{Re}\left\{ x(t) \right\} + j\mathrm{Im}\left\{ x(t) \right\}$$로 대입한다.
    >
    > $$
    > X(\omega) = \int_{-\infty}^{\infty}{\mathrm{Re}\left\{ x_e(t) \right\}\cos{(2\pi ft)}dt} - j\int_{-\infty}^{\infty}{\mathrm{Re}\left\{ x_o(t) \right\}\sin{(2\pi ft)}dt}
    > $$
    >
    > $$
    > \qquad \qquad + j\int_{-\infty}^{\infty}{\mathrm{Im}\left\{ x_e(t) \right\}\cos{(2\pi ft)}dt} + \int_{-\infty}^{\infty}{\mathrm{Im}\left\{ x_o(t) \right\}\sin{(2\pi ft)}dt}
    > $$
    >
    > 위의 전개식에서 $$x(t)$$ 함수로부터 네 가지 경우의 수를 찾아볼 수 있다.
    >
    > * $$x(t)$$가 실수 & 우함수 $$\longrightarrow$$ $$X(f)$$는 실수 & 우함수
    >
    > * $$x(t)$$가 실수 & 기함수 $$\longrightarrow$$ $$X(f)$$는 허수 & 기함수
    >
    > * $$x(t)$$가 허수 & 우함수 $$\longrightarrow$$ $$X(f)$$는 허수 & 우함수
    >
    > * $$x(t)$$가 허수 & 기함수 $$\longrightarrow$$ $$X(f)$$는 실수 & 기함수

* *[쌍대성](https://ko.wikipedia.org/wiki/쌍대성) (Duality)*
    : 시간 영역에서 함수 $$x(t)$$가 주파수 영역에서 $$X_f(f)$$ 혹은 $$X_\omega(\omega)$$로 변환되면, 시간 영역에서 함수 $$X_f(t)$$ 및 $$X_\omega(t)$$는 주파수 영역에서 각각 $$x(-f)$$ 혹은 $$2\pi x(-\omega)$$로 변환된다.

    $$
    x(t) \leftrightarrow X_f(f) = X_\omega(\omega) \quad \Longrightarrow \quad \left\{\begin{array}{ll} X_f(t) & \leftrightarrow & x(-f) \\ \\ X_\omega(t) & \leftrightarrow & 2\pi x(-\omega) \end{array}\right.
    $$

    > 본 성질에 대한 증명은 푸리에 역변환인 합성 방정식으로부터 출발한다.
    >
    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 쌍대성을 보여준다.
    >
    > $$
    > x(t) = \int^{+\infty}_{-\infty}{X(f)e^{j2\pi ft}df}
    > $$
    >
    > $$
    > \quad \Rightarrow x(t) = \int^{+\infty}_{-\infty}{X(f)e^{j2pi ft}df}
    > $$
    >
    > 만일 $$t=-\tau$$라고 가정하면 방정식은 다음과 같이 나타난다.
    >
    > $$
    > x(-\tau) = \int^{+\infty}_{-\infty}{X(f)e^{-j2\pi f\tau}df}
    > $$
    >
    > 여기서 $$\tau \leftrightarrow f$$ 기호를 서로 바꾼다. 비록 각 기호가 시간과 주파수를 의미하지만, 사실 이는 통상적인 해석일 뿐이다. 단순히 수학적인 관점에서 바라보면 이들은 단지 하나의 변수에 불과하며 기호를 바꾼다고 해서 변수의 본질이 바뀌는 게 아니다.
    >
    > $$
    > x(-f) = \int^{+\infty}_{-\infty}{X(\tau)e^{-j2\pi f\tau}d\tau}
    > $$
    >
    > 마무리로 $$\tau$$를 다시 익숙한 $$t$$로 돌려놓으면 다음 방정식이 완성된다.
    >
    > $$
    > 2\pi x(-f) = \int^{+\infty}_{-\infty}{X(t)e^{-j2\pi ft}dt} = \mathcal{F}\left\{ X(t) \right\}
    > $$
    >
    > ----
    >
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 쌍대성을 보여준다.
    >
    > $$
    > x(t) = \frac{1}{2\pi}\int^{+\infty}_{-\infty}{X(\omega)e^{j\omega t}d\omega}
    > $$
    >
    > $$
    > \quad \Rightarrow 2\pi x(t) = \int^{+\infty}_{-\infty}{X(\omega)e^{j\omega t}d\omega}
    > $$
    >
    > 만일 $$t=-\tau$$라고 가정하면 방정식은 다음과 같이 나타난다.
    >
    > $$
    > 2\pi x(-\tau) = \int^{+\infty}_{-\infty}{X(\omega)e^{-j\omega\tau}d\omega}
    > $$
    >
    > 여기서 $$\tau \leftrightarrow \omega$$ 기호를 서로 바꾼다. 비록 각 기호가 시간과 주파수를 의미하지만, 사실 이는 통상적인 해석일 뿐이다. 단순히 수학적인 관점에서 바라보면 이들은 단지 하나의 변수에 불과하며 기호를 바꾼다고 해서 변수의 본질이 바뀌는 게 아니다.
    >
    > $$
    > 2\pi x(-\omega) = \int^{+\infty}_{-\infty}{X(\tau)e^{-j\omega\tau}d\tau}
    > $$
    >
    > 마무리로 $$\tau$$를 다시 익숙한 $$t$$로 돌려놓으면 다음 방정식이 완성된다.
    >
    > $$
    > 2\pi x(-\omega) = \int^{+\infty}_{-\infty}{X(t)e^{-j\omega t}dt} = \mathcal{F}\left\{ X(t) \right\}
    > $$

* *시간 도치 (Time inversion)*
    : 시간 영역에서 시간 $$t$$가 반대로 도치되었을 시, 주파수 영역에서의 주파수 $$f$$가 도치 혹은 푸리에 변환 $$X(f)$$가 켤레 복소수를 갖는다.

    $$
    x(-t) \quad \longleftrightarrow \quad X(-f) = X^*(f)
    $$

    > 본 성질에 대한 증명을 위해 $$\tau = -t$$라고 가정한다.
    >
    > $$
    > \mathcal{F}\left\{ x(\tau) \right\} = -\int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(-\tau\right)}d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(-\tau\right)}d\tau}
    > $$
    >
    > 여기서 푸리에 변환의 두 가지 해석 방정식 표현을 유도할 수 있다.
    >
    > $$
    > \quad \Rightarrow \left\{ \begin{array}{ll} \displaystyle \int_{-\infty}^{\infty}{x(\tau)e^{-j\left(-2\pi f\right)\tau}d\tau} & = X(-f) \\ \displaystyle \int_{-\infty}^{\infty}{x(\tau)e^{j2\pi f\tau}d\tau} & = X^*(f) \end{array}\right.
    > $$

* *시간 척도 (Time scaling)*
    : 시간 영역에서 시간 $$t$$에 대한 척도는 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    x(at) \quad \longleftrightarrow \quad \frac{1}{\lvert a \rvert}X\left(\frac{f}{a}\right)
    $$
    
    > 본 성질에 대한 증명을 위해 $$\tau = at$$라고 가정한다.
    >
    > $$
    > \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\frac{\tau}{a}}d\frac{\tau}{a}}
    > $$
    >
    > $$
    > \quad = \frac{1}{\lvert a \rvert} \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\frac{\tau}{a}}d\tau}
    > $$
    >
    > 여기서 분모 $$a$$에 절댓값이 씌워진 이유는 *시간 도치*에서 확인할 수 있듯이 무한한 범위의 적분에서 범위를 반대로 뒤집는 부호가 사실상 의미없기 때문이다. *시간 도치*의 증명과 유사한 방법으로 해석 방정식을 마무리짓는다.
    >
    > $$
    > \quad \Rightarrow \frac{1}{\lvert a \rvert} \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi\frac{f}{a}\tau}d\tau} = \frac{1}{\lvert a \rvert} X\left(\frac{f}{a}\right)
    > $$

* *시간 이동 (Time shifting)*
    : 시간 영역에서 시간 $$t$$에 대한 이동은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    x(t - t_0) \quad \longleftrightarrow \quad \left\{\begin{array}{ll} X_f(f)e^{-j2\pi ft_0} \\ \\ X_\omega(\omega)e^{-j\omega t_0} \end{array}\right.
    $$

    > 본 성질에 대한 증명을 위해 $$\tau = t-t_0$$라고 가정한다.
    >
    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 시간 이동을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(\tau+t_0\right)}d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\tau}e^{-j2\pi ft_0}d\tau}
    > $$
    >
    > 여기서 $$t_0$$는 상수이므로 이를 갖는 지수는 적분 밖으로 나올 수가 있다.
    >
    > $$
    > \quad \Rightarrow e^{-j2\pi ft_0}\int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\tau}d\tau} = X(f)e^{-j2\pi ft_0}
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 시간 이동을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\left(\tau+t_0\right)}d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\tau}e^{-j\omega t_0}d\tau}
    > $$
    >
    > 여기서 $$t_0$$는 상수이므로 이를 갖는 지수는 적분 밖으로 나올 수가 있다.
    >
    > $$
    > \quad \Rightarrow e^{-j\omega t_0}\int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\tau}d\tau} = X(f)e^{-j\omega t_0}
    > $$

* *주파수 이동 (Frequency shifting)*
    : 주파수 영역에서 주파수 $$f$$ 혹은 각주파수 $$\omega$$에 대한 이동은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    \left\{\begin{array}{ll} \displaystyle x(t)e^{j2\pi f_0t} & \longleftrightarrow & X(f - f_0) \\ \\ \displaystyle x(t)e^{j\omega_0t} & \longleftrightarrow & X(\omega - \omega_0) \end{array}\right.
    $$

    > 본 성질에 대한 증명을 위해 푸리에 변환 절차를 반대로 짚어본다.
    >
    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 주파수 이동을 보여준다.
    >
    > $$
    > X(f - f_0) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi \left(f - f_0\right)t}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}e^{j2\pi f_0t}dt}
    > $$
    >
    > 푸리에 변환의 해석 방정식과 동일한 형태로 변형한 다음에 시간 영역만을 추출한다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\left[ x(t) e^{j2\pi f_0t}\right] e^{-j2\pi ft}dt} = \mathcal{F}\left\{ x(t) e^{j2\pi f_0t} \right\}
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 주파수 이동을 보여준다.
    >
    > $$
    > X(\omega - \omega_0) = \int_{-\infty}^{\infty}{x(t)e^{-j\left(\omega - \omega_0\right)t}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}e^{j\omega_0t}dt}
    > $$
    >
    > 푸리에 변환의 해석 방정식과 동일한 형태로 변형한 다음에 시간 영역만을 추출한다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\left[ x(t) e^{j\omega_0t}\right] e^{-j\omega t}dt} = \mathcal{F}\left\{ x(t) e^{j\omega_0t} \right\}
    > $$

* *시간 [합성곱](https://ko.wikipedia.org/wiki/합성곱) (Time convolution)*
    : 시간 영역에서 시간 $$t$$에 대한 합성곱은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    x(t) \ast y(t) \quad \longleftrightarrow \quad X(f) Y(f)
    $$

    > 본 성질에 대한 증명을 위해 우선 합성곱에 대한 이해가 필요하다. 합성곱(convolution)이란, 두 함수 $$x(t)$$와 $$y(t)$$로부터 새로운 함수 $$x\ast y(t)$$를 합성하는 수학 연산이다.
    >
    > $$
    > x(t) \ast y(t) = \int_{-\infty}^{\infty}{x(\tau)y(t-\tau)d\tau}
    > $$
    >
    > 함수 $$x(\tau)$$와 $$y(\tau)$$는 단순히 함수 $$x(t)$$와 $$y(t)$$의 통상적인 시간 기호를 $$t \rightarrow \tau$$로 변경한 것에 불과하다. 여기서 함수 $$y(\tau)$$의 시간 $$\tau$$가 음의 부호를 갖는 이유는 함수 $$x(\tau)$$와 함께 시간 순차적으로 합성된다는 것을 수학적으로 표현하기 위해서이다. 그리고 시간 $$t$$는 함수 $$y(\tau)$$가 얼마나 이동하였는지 의미한다. 그러므로 합성곱의 적분식은 *두 함수간 겹치는 총 면적은 시간 $$t$$만큼 신호가 진행되었을 때 얼마인가*를 나타낸다.
    >
    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x \ast y (t) \right\} = \int_{-\infty}^{\infty}{x \ast y (t) e^{-j2\pi ft}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau) e^{-j2\pi ft}d\tau} dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau)} e^{-j2\pi ft}dt d\tau}
    > $$
    >
    > 만일 $$u = t - \tau$$로 치환하면 도함수 $$du - dt$$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $$\tau$$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{x(\tau)y(u) e^{-j2\pi f(\tau+u)} du} d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau) e^{-j2\pi f\tau} d\tau} \cdot \int_{-\infty}^{\infty}{y(u) e^{-j2\pi fu} du}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ x(\tau) \right\} \cdot \mathcal{F}\left\{ y(u) \right\}
    > $$
    >
    > $$
    > \quad = X(f)Y(f)
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x \ast y (t) \right\} = \int_{-\infty}^{\infty}{x \ast y (t) e^{-j\omega t}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau) e^{-j\omega t}d\tau} dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau)} e^{-j\omega t}dt d\tau}
    > $$
    >
    > 만일 $$u = t - \tau$$로 치환하면 도함수 $$du - dt$$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $$\tau$$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{x(\tau)y(u) e^{-j\omega(\tau+u)} du} d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau) e^{-j\omega \tau} d\tau} \cdot \int_{-\infty}^{\infty}{y(u) e^{-j\omega u} du}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ x(\tau) \right\} \cdot \mathcal{F}\left\{ y(u) \right\}
    > $$
    >
    > $$
    > \quad = X(\omega)Y(\omega)
    > $$

* *주파수 [합성곱](https://ko.wikipedia.org/wiki/합성곱) (Frequency convolution)*
    : 주파수 영역에서 주파수 $$f$$ 혹은 각주파수 $$\omega$$에 대한 합성곱은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    x(t) y(t) \quad \longleftrightarrow \quad X(f) \ast Y(f)
    $$

    > 본 성질에 대한 증명을 위해 우선 합성곱에 대한 이해가 필요하다. 합성곱(convolution)이란, 두 함수 $$x(t)$$와 $$y(t)$$로부터 새로운 함수 $$x\ast y(t)$$를 합성하는 수학 연산이다.
    >
    > $$
    > x(t) \ast y(t) = \int_{-\infty}^{\infty}{x(\tau)y(t-\tau)d\tau}
    > $$
    >
    > 함수 $$x(\tau)$$와 $$y(\tau)$$는 단순히 함수 $$x(t)$$와 $$y(t)$$의 통상적인 시간 기호를 $$t \rightarrow \tau$$로 변경한 것에 불과하다. 여기서 함수 $$y(\tau)$$의 시간 $$\tau$$가 음의 부호를 갖는 이유는 함수 $$x(\tau)$$와 함께 시간 순차적으로 합성된다는 것을 수학적으로 표현하기 위해서이다. 그리고 시간 $$t$$는 함수 $$y(\tau)$$가 얼마나 이동하였는지 의미한다. 그러므로 합성곱의 적분식은 *두 함수간 겹치는 총 면적은 시간 $$t$$만큼 신호가 진행되었을 때 얼마인가*를 나타낸다.
    >
    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x \ast y (t) \right\} = \int_{-\infty}^{\infty}{x \ast y (t) e^{-j2\pi ft}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau) e^{-j2\pi ft}d\tau} dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau)} e^{-j2\pi ft}dt d\tau}
    > $$
    >
    > 만일 $$u = t - \tau$$로 치환하면 도함수 $$du - dt$$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $$\tau$$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{x(\tau)y(u) e^{-j2\pi f(\tau+u)} du} d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau) e^{-j2\pi f\tau} d\tau} \cdot \int_{-\infty}^{\infty}{y(u) e^{-j2\pi fu} du}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ x(\tau) \right\} \cdot \mathcal{F}\left\{ y(u) \right\}
    > $$
    >
    > $$
    > \quad = X(f)Y(f)
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
    >
    > $$
    > \mathcal{F}\left\{ x \ast y (t) \right\} = \int_{-\infty}^{\infty}{x \ast y (t) e^{-j\omega t}dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau) e^{-j\omega t}d\tau} dt}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{ x(\tau) y(t-\tau)} e^{-j\omega t}dt d\tau}
    > $$
    >
    > 만일 $$u = t - \tau$$로 치환하면 도함수 $$du - dt$$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $$\tau$$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
    >
    > $$
    > \quad \Rightarrow \int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{x(\tau)y(u) e^{-j\omega(\tau+u)} du} d\tau}
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(\tau) e^{-j\omega \tau} d\tau} \cdot \int_{-\infty}^{\infty}{y(u) e^{-j\omega u} du}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ x(\tau) \right\} \cdot \mathcal{F}\left\{ y(u) \right\}
    > $$
    >
    > $$
    > \quad = X(\omega)Y(\omega)
    > $$

* *시간 미분 (Time differentiation)*
    : 시간 영역에서 시간 $$t$$에 대한 미분은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    \frac{d^nx(t)}{dt^n} \quad \leftrightarrow \quad \left\{\begin{array}{ll} \left(j2\pi f\right)^nX_f(f) \\ \\ \left(j\omega\right)^n X_\omega(\omega) \end{array}\right.
    $$

    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 시간 미분을 보여주며, 증명을 위해 푸리에 역변환을 사용한다.
    >
    > $$
    > x(t) = \int_{-\infty}^{\infty}{X(f)e^{j2\pi ft}df}
    > $$
    >
    > 합성 방정식의 양변에 시간 $$t$$에 대한 미분을 한다.
    >
    > $$
    > x'(t) = \frac{d}{dt} \left( \int_{-\infty}^{\infty}{X(f)e^{j2\pi ft}df} \right)
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{X(f)\cdot j2\pi fe^{j2\pi ft}df}
    > $$
    >
    > 위의 합성 방정식을 정리하면 다음과 같다.
    >
    > $$
    > \frac{dx(t)}{dt} = \int_{-\infty}^{\infty}{\left( j2\pi fX(f) \right) e^{j2\pi ft}df}
    > $$
    >
    > $$
    > \quad = \mathcal{F}^{-1}\left\{ j2\pi fX(f) \right\}
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 시간 미분을 보여주며, 증명을 위해 푸리에 역변환을 사용한다.
    >
    > $$
    > x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty}{X(\omega)e^{j\omega t}d\omega}
    > $$
    >
    > 합성 방정식의 양변에 시간 $$t$$에 대한 미분을 한다.
    >
    > $$
    > x'(t) = \frac{1}{2\pi} \frac{d}{dt} \left( \int_{-\infty}^{\infty}{X(\omega)e^{j\omega t}d\omega} \right)
    > $$
    >
    > $$
    > \quad = \frac{1}{2\pi} \int_{-\infty}^{\infty}{X(\omega)\cdot j\omega e^{j\omega t}d\omega}
    > $$
    >
    > 위의 합성 방정식을 정리하면 다음과 같다.
    >
    > $$
    > \frac{dx(t)}{dt} = \frac{1}{2\pi} \int_{-\infty}^{\infty}{\left( j\omega X(\omega) \right) e^{j\omega t}d\omega}
    > $$
    >
    > $$
    > \quad = \mathcal{F}^{-1}\left\{ j\omegaX(\omega) \right\}
    > $$

* *주파수 미분 (Frequency differentiation)*
    : 주파수 영역에서 주파수 $$f$$ 혹은 각주파수 $$\omega$$에 대한 미분은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    \left\{\begin{array}{ll} \displaystyle 2\pi t x(t)e & \longleftrightarrow & jX(f) \\ \\ \displaystyle t x(t) & \longleftrightarrow & jX(\omega) \end{array}\right.
    $$

    > 다음은 주파수 $$f$$에 대한 푸리에 변환의 주파수 미분을 보여주며, 증명을 위해 푸리에 변환을 사용한다.
    >
    > $$
    > X(f) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}dt}
    > $$
    >
    > 해석 방정식의 양변에 시간 $$t$$에 대한 미분을 한다.
    >
    > $$
    > X'(f) = \frac{d}{df} \left( \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}dt} \right)
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(t)\cdot \left(-j2\pi t\right)e^{j2\pi ft}dt}
    > $$
    >
    > 위의 해석 방정식을 정리하면 다음과 같다.
    >
    > $$
    > \frac{dX(f)}{df} = \int_{-\infty}^{\infty}{\left( j2\pi tx(t) \right) e^{j2\pi ft}dt}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ j2\pi tx(t) \right\}
    > $$
    >
    > ----
    > 
    > 다음은 각주파수 $$\omega$$에 대한 푸리에 변환의 주파수 미분을 보여주며, 증명을 위해 푸리에 변환을 사용한다.
    >
    > $$
    > X(\omega) = \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}dt}
    > $$
    >
    > 해석 방정식의 양변에 시간 $$t$$에 대한 미분을 한다.
    >
    > $$
    > X'(\omega) = \frac{d}{df} \left( \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}dt} \right)
    > $$
    >
    > $$
    > \quad = \int_{-\infty}^{\infty}{x(t)\cdot \left(-jt\right)e^{j\omega t}dt}
    > $$
    >
    > 위의 해석 방정식을 정리하면 다음과 같다.
    >
    > $$
    > \frac{dX(\omega)}{d\omega} = \int_{-\infty}^{\infty}{\left( jtx(t) \right) e^{j\omega t}dt}
    > $$
    >
    > $$
    > \quad = \mathcal{F}\left\{ j tx(t) \right\}
    > $$

* *시간 적분 (Time integration)*
    : 시간 영역에서 시간 $$t$$에 대한 적분은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    $$
    \int_{-\infty}^{t}{x(t)dt} \quad \longleftrightarrow \quad 
    $$