---
layout: docs
language: ko
category: 미적분학
title: 푸리에 변환
meta: Fourier
order: 0xE1
---
# 푸리에: 개요
> 본 내용은 고등학교 교육과정 중 하나인 [삼각함수](https://ko.wikipedia.org/wiki/삼각함수), [미분](https://ko.wikipedia.org/wiki/미분) 및 [적분](https://ko.wikipedia.org/wiki/적분), 그리고 [복소수](https://ko.wikipedia.org/wiki/복소수)를 기반하므로 이에 대해 충분한 이해가 필요하다.

[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 시간 $t$ 영역의 함수를 주파수 $f$ 영역의 함수들로 분해하는 수학적 변환식이다. *일반적으로 함수(혹은 신호)는 서로 다른 주파수를 갖는 삼각함수($\sin$ 및 $\cos$)들의 합으로 표현될 수 있다*는 [푸리에 해석](https://en.wikipedia.org/wiki/Fourier_analysis)(Fourier analysis)을 기반으로 수립되었다. 대표적인 예시로 시간에 따라 흐르는 신호가 어떠한 주파수로 구성되어 있는지 알려주는 [스펙트럼 분석기](https://ko.wikipedia.org/wiki/스펙트럼_애널라이저)가 있다.

# 푸리에: 급수
[푸리에 급수](https://ko.wikipedia.org/wiki/푸리에_급수)(Fourier series)는 "연속시간"에서 지속적으로 동일한 패턴이 반복되는 "주기함수"를 주파수 영역으로의 변환한다. 비록 푸리에 급수는 주기함수에 한정된 변환이지만, 푸리에 변환의 시발점이므로 개념적인 면에서 큰 의의를 갖기 때문에 비중있게 다루는 내용 중 하나이다.

연속시간 $t$ 주기함수의 변환은 푸리에 급수가 갖는 방정식에 의해 주파수 영역은 항상 이산주파수 $kf_0$ 비주기함수가 도출된다. 여기서 $f_0$는 [기본 주파수](https://en.wikipedia.org/wiki/Fundamental_frequency)(fundamental frequency)로 연속시간 주기함수 신호를 구성하는 이산주파수들의 최소공배수이다.

| 시간 영역 $x_{T}(t)$ | 주파수 영역 $X(k)$ |
|:----------------:|:-------------:|
| 연속시간 주기함수        | 이산주파수 비주기함수   |

## 삼각함수 형태
푸리에 급수는 삼각함수 형태로 나타낼 수 있다. 이를 설명하기 위해서는 우주기함수 $x_{T_e}(t)$에 해당하는 $\cos$ 삼각함수와 기주기함수 $x_{T_o}(t)$에 해당하는 $\sin$ 삼각함수의 경우를 나누어서 서술한다. 종합적으로 두 경우의 주기함수를 합하면 일반 주기함수 $x_T(t)$로 나타나는 합성 방정식(synthesis equation)이 도출된다.

> $$
> x_T(t) = x_{T_e}(t) + x_{T_o}(t) = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}}
> $$
>
> $$
> \qquad \mathrm{...where} \ 
> \left\{
> \begin{array}{lll}
> 
> a_0 & \displaystyle = \frac{1}{T}\int_{T}{x_{T}(t)dt}
> 
> \\
> 
> a_k & \displaystyle = \frac{2}{T}\int_{T}{x_{T}(t)\cos{(k\omega_0 t)}dt}
> 
> \\
> 
> b_k & \displaystyle = \frac{2}{T}\int_{T}{x_{T}(t)\sin{(k\omega_0 t)}dt}
> 
> \end{array}
> \right.
> $$

여기서 $\omega_0$는 기본 [각주파수](https://ko.wikipedia.org/wiki/각진동수)(fundamental angular frequency)로 기본 주파수를 회전에 빗대어 나타낸 것으로 $2\pi f_0$와 같다. 기본 주파수로 푸리에 급수를 표현할 수 있으나, 수식의 간략화를 위해 본 부문에서는 각주파수를 택하였다.

### 우주기함수
주기함수 $x_T(t)$가 우함수인 주기함수, 일명 우주기함수(even periodic function)인 경우를 가정한다.

> 우함수(even function)은 $y$축을 기준으로 대칭을 이루는 함수이다.

코사인 삼각함수 $\cos$는 대표적인 우함수로, 우주기함수 $x_{T_e}(t)$의 합성 방정식은 기본 주파수의 배수인 고조 주파수(harmonic frequency) $k\omega_0$를 갖는 코사인 함수들의 합으로 나타난다.

$$
x_{T_e}(t) = \sum_{k=0}^{\infty}{a_k\cos{k\omega_0 t}} 
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} \quad \left( \because \ a_0\cos{0\omega_0 t} = a_0 \right)
$$

여기서 우주기함수의 푸리에 계수 $a_k$는 해당 주기함수(혹은 신호)를 구성하는 고조 주파수 $k\omega_0$ 성분이 얼만큼인지 알려주는 매우 중요한 인자로써 푸리에 해석의 핵심이다. 푸리에 계수 $a_k$를 구하기 위해 우선 합성 방정식의 양변에 $n$ 배수의 고조 주파수를 갖는 $\cos{(n\omega_0 t)}$ 삼각함수를 곱한다.

$$
x_{T_e}(t)\cos{(n\omega_0 t)} = \sum_{k=0}^{\infty}{a_k\cos{(k\omega_0 t)} \cos{(n\omega_0 t)}}
$$

위의 방정식 양변에 $T$ 주기만큼 적분한다.

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

코사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 갖는 양($+$)과 음($-$)의 면적이 서로를 상쇄하여 0이 되는 성질을 갖는다. 이러한 상쇄는 급수에 의해 무한히 반복되지만, $k=n$일 경우를 주목한다.

$$
\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ (n-n)\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt}

\\

\displaystyle \int_{T}{\cos{\left\{ (n+n)\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt}

\end{array}
\right.
$$

만일 $n$이 0이 아닌 정수인 경우, 적분식은 다음과 같이 계산된다.

$$
\quad \Rightarrow

\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\\

\displaystyle \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left(2\pi \alpha\right)}dt} &
\displaystyle = 0

\end{array}
\right.

\quad ...\mathrm{where} \ n \in \{1, 2, \cdots \}
$$

첫 번째 적분식은 주기 $T$로 계산되나, 두 번째 적분식은 $0$으로 상쇄된다. 이를 염두하여 합성 방정식을 정리하면 $n\in \lbrace 1, 2, \cdots \rbrace$일 때의 $a_n$에 대한 분석 방정식(analysis equation)이 도출된다.

$$
\qquad \int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} + \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

$$
\qquad \quad = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} + 0 \right]}
$$

$$
\qquad \quad = \frac{a_0}{2}\left( 0 \right) + \frac{a_1}{2}\left( 0 \right) + \cdots + \frac{a_n}{2}\left( T \right) + \cdots
$$

$$
\qquad \quad = a_n\frac{T}{2}
$$

$$
\qquad \qquad \therefore a_n = \frac{2}{T}\int_{T}{x_{T_e}(t)\cos{(n\omega_0 t)}dt} \quad ...\mathrm{where} \ n \in \{1, 2, \cdots \}
$$

만일 $n=0$인 경우, 적분식은 다음과 같이 계산된다.

$$
\quad \Rightarrow

\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\\

\displaystyle \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\end{array}
\right.

\quad ...\mathrm{where} \ n = 0
$$

첫 번째와 두 번째 적분식 모두 $0$으로 상쇄되지 않고 주기 $T$가 계산된다. 이를 염두하여 합성 방정식을 정리하면 $n=0$일 때의 $a_n$에 대한 분석 방정식(analysis equation)이 도출된다.

$$
\qquad \int_{T}{x_{T_e}(t)\cos{(0)}dt} = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ \int_{T}{\cos{\left\{ (k-0)\omega_0 t \right\} }dt} + \int_{T}{\cos{\left\{ (k+0)\omega_0 t \right \} }dt} \right] }
$$

$$
\qquad \quad = \sum_{k=0}^{\infty}{\frac{a_k}{2} \left[ 2\int_{T}{\cos{\left\{ k\omega_0 t \right\} }dt} \right]}
$$

$$
\qquad \quad = \frac{a_0}{2}\left( 2T \right) + \frac{a_1}{2}\left( 0 \right) + \frac{a_2}{2}\left( 0 \right) + \cdots
$$

$$
\qquad \quad = a_0T
$$

$$
\qquad \qquad \therefore a_0 = \frac{1}{T}\int_{T}{x_{T_e}(t)dt} \quad ...\mathrm{where} \ n = 0
$$

여기서 $a_0$ 계수는 주파수가 없는 수식에서 유도되었기 때문에 주기함수 $x_{T_e}(t)$의 평균값 혹은 전자기에서는 DC 성분과 동일하다.

### 기주기함수
주기함수 $x_T(t)$가 기함수인 주기함수, 일명 기주기함수(odd periodic function)인 경우를 가정한다.

> 기함수(odd function)은 원점을 기준으로 대칭을 이루는 함수이다.

사인 삼각함수 $\sin$는 대표적인 기함수로, 기주기함수 $x_{T_o}(t)$의 합성 방정식은 기본 주파수의 배수인 고조 주파수(harmonic frequency) $k\omega_0$를 갖는 사인 함수들의 합으로 나타난다.

$$
x_{T_o}(t) = \sum_{k=0}^{\infty}{b_k\sin{k\omega_0 t}} 
$$

$$
\quad = \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}} \quad \left( \because \ b_0\cos{0\omega_0 t} = 0 \right)
$$

여기서 기주기함수의 푸리에 계수 $b_k$는 해당 주기함수(혹은 신호)를 구성하는 고조 주파수 $k\omega_0$ 성분이 얼만큼인지 알려주는 매우 중요한 인자로써 푸리에 해석의 핵심이다. 푸리에 계수 $b_k$를 구하기 위해 우선 합성 방정식의 양변에 $n$ 배수의 고조 주파수를 갖는 $\sin{(n\omega_0 t)}$ 삼각함수를 곱한다.

$$
x_{T_o}(t)\sin{(n\omega_0 t)} = \sum_{k=0}^{\infty}{b_k\sin{(k\omega_0 t)} \sin{(n\omega_0 t)}}
$$

위의 방정식 양변에 $T$ 주기만큼 적분한다.
    
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

사인 삼각함수는 한 주기동안 적분하면 동일한 너비를 갖는 양($+$)과 음($-$)의 면적이 서로를 상쇄하여 0이 되는 성질을 갖는다. 이러한 상쇄는 급수에 의해 무한히 반복되지만, $k=n$일 경우를 주목한다.

$$
\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ (n-n)\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt}

\\

\displaystyle \int_{T}{\cos{\left\{ (n+n)\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt}

\end{array}
\right.
$$

만일 $n$이 0이 아닌 정수인 경우, 적분식은 다음과 같이 계산된다.

$$
\quad \Rightarrow

\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\\

\displaystyle \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{\cos{\left(2\pi \alpha\right)}dt} &
\displaystyle = 0

\end{array}
\right.

\quad ...\mathrm{where} \ n \in \{1, 2, \cdots \}
$$

첫 번째 적분식은 주기 $T$로 계산되나, 두 번째 적분식은 $0$으로 상쇄된다. 이를 염두하여 합성 방정식을 정리하면 $n\in \lbrace 1, 2, \cdots \rbrace$일 때의 $b_n$에 대한 분석 방정식(analysis equation)이 도출된다.

$$
\qquad \int_{T}{x_{T_e}(t)\sin{(n\omega_0 t)}dt} = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} - \int_{T}{\cos{\left\{ (k+n)\omega_0 t \right \} }dt} \right] }
$$

$$
\qquad \quad = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-n)\omega_0 t \right\} }dt} - 0 \right]}
$$

$$
\qquad \quad = \frac{b_0}{2}\left( 0 \right) + \frac{b_1}{2}\left( 0 \right) + \cdots + \frac{b_n}{2}\left( T \right) + \cdots
$$

$$
\qquad \quad = b_n\frac{T}{2}
$$

$$
\qquad \qquad \therefore b_n = \frac{2}{T}\int_{T}{x_{T_e}(t)\sin{(n\omega_0 t)}dt} \quad ...\mathrm{where} \ n \in \{1, 2, \cdots \}
$$

만일 $n=0$인 경우, 적분식은 다음과 같이 계산된다.

$$
\quad \Rightarrow

\left\{
\begin{array}{ll}

\displaystyle \int_{T}{\cos{\left\{ 0\omega_0 t \right\} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\\

\displaystyle \int_{T}{\cos{\left\{ 2n\omega_0 t \right \} }dt} & \displaystyle = \int_{T}{1\cdot dt} &
\displaystyle = T

\end{array}
\right.

\quad ...\mathrm{where} \ n = 0
$$

첫 번째와 두 번째 적분식 모두 $0$으로 상쇄되지 않고 주기 $T$가 계산된다. 이를 염두하여 합성 방정식을 정리하면 $n=0$일 때의 $b_n$에 대한 분석 방정식(analysis equation)이 도출된다.

$$
\qquad \int_{T}{x_{T_e}(t)\sin{(0)}dt} = \sum_{k=0}^{\infty}{\frac{b_k}{2} \left[ \int_{T}{\cos{\left\{ (k-0)\omega_0 t \right\} }dt} - \int_{T}{\cos{\left\{ (k+0)\omega_0 t \right \} }dt} \right] }
$$

$$
\qquad \quad = \sum_{k=0}^{\infty}{\frac{b_k}{2} \cdot \left( T - T \right)}
$$

$$
\qquad \quad = \frac{b_0}{2}\left( 0 \right) + \frac{b_1}{2}\left( 0 \right) + \frac{b_2}{2}\left( 0 \right) + \cdots
$$

$$
\qquad \quad = 0
$$

$b_0$ 계수를 구하기 위한 방정식에서 양변이 모두 $0$이 된다. 다시 말해, $b_0$ 계수는 푸리에 급수에서 제외된다. 하지만 이는 절대로 $b_0 = 0$임을 시사하는 것이 아니며 단순히 계산이 불가할 뿐이다.

## 지수함수 형태
지수함수 형태의 푸리에 급수는 삼각함수 형태로부터 지수함수와 삼각함수의 상관관계를 설명하는 [오일러 공식](https://ko.wikipedia.org/wiki/오일러_공식)을 통해 유도되며, 결론적으로 아래의 수식이 도출된다.

> $$
> x_T(t) = \sum_{k=-\infty}^{+\infty}{ X(k) e^{jk\omega_0t} } \quad ...\mathrm{where} \ X(k) = \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt}
> $$

삼각함수 형태의 푸리에 급수를 오일러 공식 $$e^{jx} = \cos{x} + j\sin{x}$$을 적용하면 다음과 같이 표현된다.

$$
x_T(t) = a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}}
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{a_k \left( \frac{e^{jk\omega_0} + e^{-jk\omega_0}}{2} \right)} + \sum_{k=1}^{\infty}{-jb_k \left( \frac{e^{jk\omega_0} - e^{-jk\omega_0}}{2} \right)}
$$

$$
\quad = a_0 + \sum_{k=1}^{\infty}{ \left(\frac{a_k-jb_k}{2}\right) e^{jk\omega_0t} } + \sum_{k=1}^{\infty}{ \left(\frac{a_k+jb_k}{2}\right) e^{-jk\omega_0t} }
$$

삼각함수 형태에서 도출한 푸리에 계수 $a_k$ 및 $b_k$ 계산식을 대입한다.

$$
x_T(t) = \frac{1}{T}\int_{T}{x_{T}(t)dt} + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)\left[ \cos{k\omega_0 t} - j\sin{k\omega_0 t} \right] dt} \right) e^{jk\omega_0t} }
\\ \qquad \qquad + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)\left[ \cos{k\omega_0 t} + j\sin{k\omega_0 t} \right] dt} \right) e^{-jk\omega_0t} }
$$

$$
\quad = \frac{1}{T}\int_{T}{x_{T}(t)dt} + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } + \sum_{k=1}^{\infty}{ \left( \frac{1}{T}\int_{T}{x_{T}(t)e^{jk\omega_0 t} dt} \right) e^{-jk\omega_0t} }
$$

위의 방정식은 $k$를 자세히 관찰하면 사실상 $(-\infty, \infty)$ 범위를 갖는 하나의 수식으로 정리할 수 있음을 알 수 있다.

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

그러므로 주기함수 $x_T(t)$의 지수함수 형태 푸리에 급수는 다음 합성 및 분석 방정식을 갖는다.

$$
\qquad \therefore x_T(t) = \sum_{k=-\infty}^{+\infty}{ X(k) e^{jk\omega_0t} } \quad ...\mathrm{where} \ X(k) = \frac{1}{T}\int_{T}{x_{T}(t) e^{-jk\omega_0 t} dt}
$$

### 삼각함수 비교
삼각함수와 지수함수 형태가 서로 달리 생겨도 하나의 주기함수에 대한 푸리에 급수를 표현하는 동일한 방정식이다.

$$
x_T(t) = 

\left\{ 
\begin{array}{ll}

\displaystyle a_0 + \sum_{k=1}^{\infty}{a_k\cos{k\omega_0 t}} + \sum_{k=1}^{\infty}{b_k\cos{k\omega_0 t}} & \quad \mathsf{Trigonometric}

\\

\displaystyle \sum_{k=-\infty}^{+\infty}{ X(k) e^{jk\omega_0t} } & \quad \mathsf{Exponential}

\end{array}
\right.
$$

동일한 합성 방정식이지만 형태만 다른 푸리에 급수로써, 본 부분은 두 형태간 상호비교를 목표로 한다.

삼각함수에서 지수함수 형태로 변환하는 과정에서 $k=0$일 경우, 삼각함수의 $a_0$와 지수함수의 $X(0)$ 분석 방정식은 어떠한 차이도 없이 동일하다는 것을 확인하였다.

$$
\quad [1] \qquad X(0) = a_0 = \frac{1}{T}\int_{T}{x_{T}(t)dt}
$$

영이 아닌 $k$ 배수의 고조 주파수에서 삼각함수와 지수함수 형태를 일대일 비교하면 아래의 식을 만족한다.

$$
a_k\cos{k\omega_0t} + b_k\sin{k\omega_0t} = X(-k)e^{-jk\omega_0t} + X(+k)e^{+jk\omega_0t} \quad ...\mathrm{where} \ X(-k) = X^*(+k)
$$

$$
\quad = \left[ X(-k) \left( \cos{k\omega_0t} - j\sin{k\omega_0t} \right) \right] + \left[ X(+k) \left( \cos{k\omega_0t} + j\sin{k\omega_0t} \right) \right]
$$

$$
\quad = \left[ \left( \mathfrak{R}\left\{X(k) \right\} - j\mathfrak{I}\left\{X(k) \right\} \right) \left( \cos{k\omega_0t} - j\sin{k\omega_0t} \right) \right] + \left[ \left( \mathfrak{R}\left\{X(k) \right\} + j\mathfrak{I}\left\{X(k) \right\} \right)  \left( \cos{k\omega_0t} + j\sin{k\omega_0t} \right) \right]
$$

$$
\quad = 2 \mathfrak{R}\left\{X(k) \right\} \cos{k\omega_0t} - 2 \mathfrak{I}\left\{X(k) \right\} \sin{k\omega_0t}
$$

그러므로 지수함수의 계수로부터 삼각함수 계수를 구하는 일반적인 관계식은 다음과 같다.

$$
\quad [2] \qquad a_k = 2 \mathfrak{R}\left\{X(k) \right\} \quad ...\mathrm{when} \ k \neq 0
$$

$$
\quad [3] \qquad b_k = - 2 \mathfrak{I}\left\{X(k) \right\} \quad ...\mathrm{when} \ k \neq 0
$$

반대로 삼각함수 계수로부터 지수함수 계수를 구하는 방법도 역으로 계산될 수 있다.

$$
\quad [4] \qquad X(k) = \frac{a_k}{2} - j\frac{b_k}{2} \quad ...\mathrm{when} \ k \neq 0
$$

$$
\qquad \qquad \quad = \lvert X(k) \rvert e^{j\angle{X(k)}} \quad
\left\{ 
\begin{array}{ll}

\displaystyle \lvert X(k) \rvert & \displaystyle = \sqrt{ \mathfrak{R} \left\{ X(k) \right\}^2 + \mathfrak{I}\left\{X(k) \right\}^2} & \displaystyle = \frac{1}{2}\sqrt{a_k^2 + b_k^2}

\\

\displaystyle \angle{X(k)} & \displaystyle = \arctan{\left( \frac{\mathfrak{I}\left\{X(k) \right\}}{\mathfrak{R}\left\{X(k) \right\}} \right)} & \displaystyle = -\arctan{\left( \frac{b_k}{a_k} \right)} 

\end{array}
\right.
$$

> 푸리에 계수 $X(k)$의 크기(amplitude; $\lvert X(k) \rvert$)와 위상(phase; $\angle{X(k)}$)은 [복소평면](https://ko.wikipedia.org/wiki/복소평면)(complex plane)에서 비롯된다. 가로축과 세로축은 각각 복소수의 실수 $\mathfrak{R}\lbrace X(k) \rbrace$와 허수 $\mathfrak{I}\lbrace X(k) \rbrace$를 의미하며, [직각좌표계](https://ko.wikipedia.org/wiki/데카르트_좌표계)로부터 [극좌표계](https://ko.wikipedia.org/wiki/극좌표계) 변환식이 그대로 적용된다.

## 디리클레 조건
디리클레 조건(Dirichlet condition)은 주기함수 $x_T(t)$가 모든 시간 $t$에 대하여 푸리에 급수의 합과 일치하기 위한 충분조건이다. 간단히 말해, 아래의 합성 방정식을 위해서는 디리클레 조건을 반드시 만족해야 하며 이는 한편 푸리에 변환의 가능여부를 의미하기도 한다.

$$
x_T(t) = \sum_{k=-\infty}^{+\infty}{ X(k) e^{jk\omega_0t} }
$$

1. 한 주기 $T$ 동안에 완전적분, 즉 적분값이 유한해야 한다.

    $$
    \int_{T}\lvert {x_T(t)\rvert dt} < \infty
    $$

2. 범위 내의 최댓값과 최솟값의 개수가 유한해야 한다.

3. 범위 내의 불연속점 개수가 유한해야 한다.

# 푸리에: 변환
[푸리에 변환](https://ko.wikipedia.org/wiki/푸리에_변환)(Fourier transform)은 주기함수에 극한된 푸리에 급수와 달리 비주기함수(aperiodic function)에서도 적용할 수 있는 일반화된 시간과 주파수 영역간의 적분 변환식이다. 비주기함수의 주기는 $T\rightarrow\infty$로 간주할 수 있으며, 덕분에 매우 작아진 기본 주파수 $f_0 = \frac{1}{T}$ 및 기본 각주파수 $\omega_0 = \frac{2\pi}{T}$는 더욱 미세한 고조 주파수 $f = kf_0$ 혹은 고조 각주파수 $\omega = k\omega_0$까지 표현할 수 있다.

| 시간 영역 $x(t)$ | 주파수 영역 $X(f)$ |
|:--------------:|:---------------:|
| 연속시간 비주기함수     | 연속주파수 비주기함수      |

푸리에 변환은 주기가 무한으로 확장된 푸리에 급수이기 때문에 아래의 디리클레 조건을 만족해야 한다. 그리고 비주기함수 $x(t)$가 유한한 개수의 최댓값과 최솟값, 그리고 불연속점을 가져야 한다.

$$
\int_{-\infty}^{\infty}{\lvert {x(t)\rvert dt}} < \infty
$$

## 푸리에 변환
푸리에 변환은 주기함수에 대한 푸리에 급수로부터 유도된다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{X(k) e^{jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \left( \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} } \quad ...\mathrm{where} \ X(k) = \frac{1}{T}\int_{T}{x(t) e^{-jk\omega_0 t} dt}
$$

주기함수가 무한한 주기 $T \rightarrow \infty$를 갖으면 절대로 반복하지 않는 비주기함수가 된다. 그러나 고조 주파수가 갖는 $k$에 따라 결정되는 푸리에 급수의 계수 $X(k)$는 $\lim_{T\rightarrow\infty}\frac{1}{T}$으로 인해 0으로 수렴하게 된다. 그러므로 비주기함수의 푸리에 변환에서는 $\frac{1}{T}$ 주기 성분이 없는 새로운 푸리에 계수 $X(k\omega_0)$를 정의한다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ \frac{1}{T} \left( \int_{-\infty}^{+\infty}{x(t) e^{-jk\omega_0 t} dt} \right) e^{jk\omega_0t} }
$$

$$
\quad = \sum_{k=-\infty}^{+\infty}{ \frac{1}{T} X(k\omega_0) e^{jk\omega_0t} } \quad ...\mathrm{where} \ X(k\omega_0) = \int_{-\infty}^{+\infty}{x(t) e^{-jk\omega_0 t} dt}
$$

주기가 증가하면 주파수는 감소하는 $\omega = k\omega_0 \propto \frac{1}{T}$ 반비례 관계를 갖는다. 즉, 주기가 무한대로 증가하면 주파수는 [무한소](https://ko.wikipedia.org/wiki/무한소)로 감소하여 $d\omega$ (혹은 $dk\omega_0$)가 된다. 이를 기반으로 방정식의 주기 $T$를 주파수 $\omega$에 대한 식으로 치환한다.

$$
x(t) = \sum_{k=-\infty}^{+\infty}{ \frac{d\omega}{2\pi} X(\omega) e^{j\omega t} } \quad ...\mathrm{where} \ \omega = k\omega_0
$$

$$
\quad = \frac{1}{2\pi} \sum_{k=-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega}
$$

무한소 $d\omega$에 대한 유한합 $\sum$은 적분으로 대체될 수 있으며, 일반함수의 $x(t)$ 합성 방정식과 $X(\omega)$ 분석 방정식은 다음과 같다.

$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega} \quad ...\mathrm{where} \ X(\omega) = \int_{-\infty}^{+\infty}{x(t) e^{-j\omega t} dt}
$$

결과적으로 분석 방정식은 시간 $t$ 영역에서 주파수 $\omega$ 영역으로 변환하여 해당 주파수가 함수에서 차지하는 비중을 계산하는 푸리에 변환(Fourier transform) $\mathcal{F}$을 의미한다. 반대로 합성 방정식은 주파수 영역 $\omega$에서 시간 $t$ 영역으로 변환하여 해당 시간에 함수가 각 주파수들의 합성을 통해 어떠한 값을 가지는지 구하는 푸리에 역변환(inverse Fourier transform) $\mathcal{F}^{-1}$이다.

$$
\left\{ 
\begin{array}{ll}

\displaystyle \mathcal{F}\left\{ x(t) \right\} & = X(\omega) & = \displaystyle \int_{-\infty}^{+\infty}{x(t) e^{-j\omega t} dt} & \quad \mathsf{Fourier \ transform \ (analysis \ equation)}

\\

\displaystyle \mathcal{F}^{-1}\left\{ X(\omega) \right\} & = x(t) & = \displaystyle \frac{1}{2\pi} \int_{-\infty}^{+\infty}{ X(\omega) e^{j\omega t} d\omega} & \quad \mathsf{Inverse \ Fourier \ transform \ (synthesis \ equation)}

\end{array}
\right.
$$

각주파수는 $\omega = 2\pi f$이므로, 이를 주파수 $f$에 대한 식으로 치환하면 다음 푸리에 방정식이 완성된다.

$$
\left\{ 
\begin{array}{ll}

\displaystyle \mathcal{F}\left\{ x(t) \right\} & = X(f) & = \displaystyle \int_{-\infty}^{+\infty}{x(t) e^{-j2\pi ft} dt} & \quad \mathsf{Fourier \ transform \ (analysis \ equation)}

\\

\displaystyle \mathcal{F}^{-1}\left\{ X(f) \right\} & = x(t) & = \displaystyle \int_{-\infty}^{+\infty}{ X(f) e^{j2\pi ft} df} & \quad \mathsf{Inverse \ Fourier \ transform \ (synthesis \ equation)}

\end{array}
\right.
$$

### 변환의 성질
> *참조: [위키백과 - 푸리에 변환 성질](https://en.wikipedia.org/wiki/Fourier_transform#Properties_of_the_Fourier_transform)*

푸리에 변환은 위에서 유도된 방정식을 토대로 반드시 아래의 성질들을 만족한다. 다음 푸리에 변환의 성질들은 신호 해석에서 매우 핵심되는 개념이므로 반드시 숙지하도록 한다.

* *[선형성](https://en.wikipedia.org/wiki/Linearity) (Linearity)*
    : 선형 연산자인 적분을 사용하는 푸리에 변환 또한 선형성을 지닌다.
    
    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-선형성">[증명]</a></sub></div>
    >
    > $$
    > Ax_1(t) + Bx_2(t) \quad \longleftrightarrow \quad AX_1(f) + BX_2(f)
    > $$

* *대칭성 (Symmetricity)*
    : 시간 영역에서 $x(t)$가 순실수 혹은 순허수 함수이면, 시간 영역에서의 우함수/기함수 대칭성은 주파수 영역에서도 그대로 유지된다.
    
    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-대칭성">[증명]</a></sub></div>
    >
    > $$
    > x^*(t) \quad \longleftrightarrow \quad X^*(-f)
    > $$

* *[쌍대성](https://ko.wikipedia.org/wiki/쌍대성) (Duality)*
    : 시간 영역에서 함수 $x(t)$가 주파수 영역에서 $X_f(f)$ 혹은 $X_\omega(\omega)$로 변환되면, 시간 영역에서 함수 $X_f(t)$ 및 $X_\omega(t)$는 주파수 영역에서 각각 $x(-f)$ 혹은 $2\pi x(-\omega)$로 변환된다.
    
    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-쌍대성">[증명]</a></sub></div>
    >
    > $$
    > x(t) \ \leftrightarrow \ X_f(f) = X_\omega(\omega) \quad \Longrightarrow \quad \left\{\begin{array}{ll} X_f(t) & \leftrightarrow & x(-f) \\ \\ X_\omega(t) & \leftrightarrow & 2\pi x(-\omega) \end{array}\right.
    > $$

* *시간 도치 (Time inversion)*
    : 시간 영역에서 시간 $t$가 반대로 도치되었을 시, 주파수 영역에서의 주파수 $f$가 도치 혹은 푸리에 변환 $X(f)$가 켤레 복소수를 갖는다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-도치">[증명]</a></sub></div>
    >
    > $$
    > x(-t) \quad \longleftrightarrow \quad X(-f) = X^*(f)
    > $$

* *시간 척도 (Time scaling)*
    : 시간 영역에서 시간 $t$에 대한 척도는 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-척도">[증명]</a></sub></div>
    >
    > $$
    > x(at) \quad \longleftrightarrow \quad \frac{1}{\lvert a \rvert}X\left(\frac{f}{a}\right)
    > $$

* *시간 이동 (Time shifting)*
    : 시간 영역에서 시간 $t$에 대한 이동은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-이동">[증명]</a></sub></div>
    > 
    > $$
    > x(t - t_0) \quad \longleftrightarrow \quad \left\{\begin{array}{ll} X_f(f)e^{-j2\pi ft_0} \\ \\ X_\omega(\omega)e^{-j\omega t_0} \end{array}\right.
    > $$

* *주파수 이동 (Frequency shifting)*
    : 주파수 영역에서 주파수 $f$ 혹은 각주파수 $\omega$에 대한 이동은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-주파수-이동">[증명]</a></sub></div>
    >
    > $$
    > \left\{\begin{array}{ll} \displaystyle x(t)e^{j2\pi f_0t} & \longleftrightarrow & X(f - f_0) \\ \\ \displaystyle x(t)e^{j\omega_0t} & \longleftrightarrow & X(\omega - \omega_0) \end{array}\right.
    > $$

* *시간 [합성곱](https://ko.wikipedia.org/wiki/합성곱) (Time convolution)*
    : 시간 영역에서 시간 $t$에 대한 합성곱은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-합성곱">[증명]</a></sub></div>
    >
    > $$
    > x(t) \ast y(t) \quad \longleftrightarrow \quad X(f) Y(f)
    > $$

* *주파수 [합성곱](https://ko.wikipedia.org/wiki/합성곱) (Frequency convolution)*
    : 주파수 영역에서 주파수 $f$ 혹은 각주파수 $\omega$에 대한 합성곱은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-주파수-합성곱">[증명]</a></sub></div>
    >
    > $$
    > x(t) y(t) \quad \longleftrightarrow \quad X(f) \ast Y(f)
    > $$

* *시간 미분 (Time differentiation)*
    : 시간 영역에서 시간 $t$에 대한 미분은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-미분">[증명]</a></sub></div>
    >
    > $$
    > \frac{d^nx(t)}{dt^n} \quad \longleftrightarrow \quad \left\{\begin{array}{ll} \left(j2\pi f\right)^nX_f(f) \\ \\ \left(j\omega\right)^n X_\omega(\omega) \end{array}\right.
    > $$

* *주파수 미분 (Frequency differentiation)*
    : 주파수 영역에서 주파수 $f$ 혹은 각주파수 $\omega$에 대한 미분은 시간 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-주파수-미분">[증명]</a></sub></div>
    > 
    > $$
    > \left\{\begin{array}{ll} \displaystyle 2\pi t x(t)e & \longleftrightarrow & jX_f(f) \\ \\ \displaystyle t x(t) & \longleftrightarrow & jX_\omega(\omega) \end{array}\right.
    > $$

* *시간 부정적분 (Time indefinite-integration)*
    : 시간 영역에서 시간 $t$에 대한 무한한 범위 $(-\infty, \infty)$에서의 부정적분, 즉 시간 영역의 총 면적은 주파수 영역에서 다음과 같은 계산된다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-부정적분">[증명]</a></sub></div>
    >
    > $$
    > \int_{-\infty}^{\infty}{x(t)dt} \quad = \quad X(0)
    > $$

* *주파수 부정적분 (Frequency indefinite-integration)*
    : 주파수 영역에서 주파수 $f$ 혹은 각주파수 $\omega$에 대한 무한한 범위 $(-\infty, \infty)$에서의 부정적분, 즉 주파수 영역의 총 면적은 시간 영역에서 다음과 같이 계산된다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-주파수-부정적분">[증명]</a></sub></div>
    > 
    > $$
    > x(0) \quad = \quad \left\{\begin{array}{ll} \displaystyle \int_{-\infty}^{\infty}{X_f(f)df} \\ \\ \displaystyle \int_{-\infty}^{\infty}{X_\omega(\omega)d\omega} \end{array}\right.
    > $$

* *시간 적분 (Time integration)*
    : 시간 영역에서 시간 $t$에 대한 적분은 주파수 영역에서 다음과 같은 푸리에 변환이 구해진다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-시간-적분">[증명]</a></sub></div>
    >
    > $$
    > \int_{-\infty}^{t}{x(\tau)d\tau} \quad \longleftrightarrow \quad \left\{\begin{array}{ll} \displaystyle \frac{1}{j2\pi f}X_f(f) + \frac{1}{2}X_f(0)\delta(f) \\ \\ \displaystyle \frac{1}{j\omega}X_\omega(\omega) + \frac{1}{2}X_\omega(0)\delta(\omega) \end{array}\right.
    > $$

* *[파스발 정리](https://en.wikipedia.org/wiki/Parseval%27s_theorem) (Parseval's theorem)*
    : 일명 레일레이의 에너지 정리(Rayleigh's energy theorem)라고도 부르며, 이는 시간 영역에서의 에너지는 주파수 영역에서의 에너지와 동일함을 보여준다.
    
    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#성질-파스발-정리">[증명]</a></sub></div>
    >
    > $$
    > E = \int_{-\infty}^{\infty}{\lvert x(t) \rvert^2dt} = \left\{\begin{array}{ll} \displaystyle \int_{-\infty}^{\infty}{\lvert X_f(f) \rvert^2df} \\ \\ \displaystyle \frac{1}{2\pi}\int_{-\infty}^{\infty}{\lvert X_\omega(\omega) \rvert^2d\omega} \end{array}\right.
    > $$

### 신호의 변환
다음은 시간 영역에서의 특정 신호들에 대한 푸리에 변환쌍이다. 신호해석 및 분석에서 자주 응용되는 신호 및 함수들이므로 미리 알아두면 차후에 유용하게 사용된다.

* *[단위 임펄스](https://ko.wikipedia.org/wiki/디랙_델타_함수) (Unit impulse)*
    : 일명 디렉 델타 함수(Dirac delta function) $\delta(t-a)$는 총 면적이 1인 함수이나, $t=a$에서만 면적을 가지므로 $\delta(0) = \infty$이고 나머지는 0을 갖는 함수이다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-단위-임펄스">[증명]</a></sub></div>
    >
    > $$
    > \delta(t) \quad \longleftrightarrow \quad 1
    > $$

* *[직류신호](https://ko.wikipedia.org/wiki/수학_상수) (DC signal)*
    : 일정한 값을 유지하면서 주파수가 없는 상수 신호를 가리킨다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-직류신호">[증명]</a></sub></div>
    >
    > $$
    > 1 \quad \longleftrightarrow \quad \left\{\begin{array}{ll} \displaystyle \delta(f) \\ \\ \displaystyle 2\pi \delta(\omega) \end{array}\right.
    > $$

* *[복소 지수함수](https://ko.wikipedia.org/wiki/지수_함수) (Complex exponential)*
    : 오일러 공식에 비롯된 $e^{\pm jt} = \cos{t} \pm j\sin{t}$ 형태를 복소 지수함수라고 부른다. 이와 유사한 내용으로 푸리에 변환의 주파수 이동 성질을 참고한다. 

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-복소-지수함수">[증명]</a></sub></div>
    > 
    > $$
    > \left\{\begin{array}{ll} \displaystyle e^{j2\pi f_0t} & \longleftrightarrow & \delta(f-f_0) \\ \\ \displaystyle e^{j\omega_0t} & \longleftrightarrow & \delta(\omega-\omega_0) \end{array}\right.
    > $$

* *[정현파](https://ko.wikipedia.org/wiki/삼각함수) (Sinusoidal)*
    : 복소 지수함수가 실수 및 허수 정현파로 구성된 것을 이용하여, 정현파에 대한 푸리에 변환 또한 복소 지수함수로 나타낸다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-정현파">[증명]</a></sub></div>
    >
    > $$
    > \left\{\begin{array}{ll} \displaystyle \cos{2\pi f_0t} & \longleftrightarrow & \displaystyle \frac{1}{2}\left[ \delta(f-f_0) + \delta(f+f_0) \right] \\ \\ \displaystyle \cos{2\omega_0t} & \longleftrightarrow & \displaystyle \frac{1}{2}\left[ \delta(\omega-\omega_0) + \delta(\omega+\omega_0) \right] \end{array}\right.
    > $$
    >
    > ----
    >
    > $$
    > \left\{\begin{array}{ll} \displaystyle \sin{2\pi f_0t} & \longleftrightarrow & \displaystyle \frac{1}{2j}\left[ \delta(f-f_0) - \delta(f+f_0) \right] \\ \\ \displaystyle \sin{2\omega_0t} & \longleftrightarrow & \displaystyle \frac{1}{2j}\left[ \delta(\omega-\omega_0) - \delta(\omega+\omega_0) \right] \end{array}\right.
    > $$

* *[시그넘 함수](https://ko.wikipedia.org/wiki/부호함수) (Signum function)*
    : 일명 부호 함수(sign function) $\mathrm{sgn}(t)$는 양의 시간에는 $+1$, 음의 시간에는 $-1$, 그리고 $\mathrm{sgn}(0)$일 때 0인 함수이다. 

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-시그넘-함수">[증명]</a></sub></div>
    > 
    > $$
    > \mathrm{sgn}(t) \quad \longleftrightarrow \quad \left\{\begin{array}{ll} \displaystyle \frac{1}{j\pi f} \\ \\ \displaystyle \frac{2}{j\omega} \end{array}\right.
    > $$ 

* *[단위 계단 함수](https://ko.wikipedia.org/wiki/단위_계단_함수) (Unit step function)*
    : 헤비사이드 계단 함수(Heaviside step function) $u(t-a)$는 $t > a$이면 1, 그리고 $t < a$이면 0인 함수이다.
    
    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-단위-계단-함수">[증명]</a></sub></div>
    > 
    > $$
    > u(t) \quad \longleftrightarrow \quad \frac{1}{2}\delta(t) + \frac{1}{j2\pi f}
    > $$

* *[구형 펄스](https://ko.wikipedia.org/wiki/구형함수) (Rectangular pulse)*
    : 구형 함수 $\operatorname{rect}(\frac{t}{a})$ 혹은 $\Pi(\frac{t}{a})$는 높이 1에 너비 $a$의 사각형을 그리는 함수이다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-구형-펄스">[증명]</a></sub></div>
    > 
    > $$
    > \Pi\left(\textstyle \frac{t}{a}\right) \quad \longleftrightarrow \quad a \operatorname{sinc}{af}
    > $$

* *[삼각 펄스](https://ko.wikipedia.org/wiki/삼각형함수) (Triangular pulse)*
    : 삼각형 함수 $\operatorname{tri}(\frac{t}{a})$ 혹은 $\Lambda(\frac{t}{a})$는 높이 1에 너비 $2a$의 삼각형을 그리는 함수이다.

    > <div style="float: right; text-align: right; margin-top: 0px;"><sub><a href="#신호-삼각-펄스">[증명]</a></sub></div>
    > 
    > $$
    > \Lambda\left(\textstyle \frac{t}{a}\right) \quad \longleftrightarrow \quad a^2 \operatorname{sinc}^2{af}
    > $$

# 푸리에: 이산
이전 장에서의 시간영역은 오로지 연속시간 함수에 대한 푸리에 변환을 다루었다. 푸리에 변환은 이산시간에 대해서도 적용할 수 있으며, 본 장에서는 총 세 가지의 이산형태의 푸리에 변환을 소개한다.

## 이산시간 푸리에 변환
이산시간 푸리에 변환(discrete-time Fourier transform)은 연속시간이 아닌 이산시간의 함수에 대한 푸리에 변환을 다룬다. 푸리에 변환이 갖는 무한한 무한소들을 합하는 적분 $\int{dt}$를 유한합 $\sum$으로 대체하고, 연속시간 $t$를 정수배의 이산시간 $n$으로 치환하면 다음과 같이 나타난다.

$$
X(e^{j2\pi f}) = \sum_{n=-\infty}^{\infty}{x(n)e^{-j2\pi fn}}
$$

여기서 이산시간 푸리에 변환의 $X(e^{j2\pi f})$는 사실상 푸리에 변환의 $X(f)$와 동일하나, 분석 방정식이 연속시간과 이산시간 중에서 어느 것에서 비롯되었지 구분짓기 위해 달리 표기하였다.

| 시간 영역 $x(n)$ | 주파수 영역 $X(e^{j2\pi f})$ |
|:--------------:|:-------------------------:|
| 이산시간 비주기함수     | 연속주파수 주기함수                 |

## 이산 푸리에 급수

| 시간 영역 $\tilde{x}(n)$ | 주파수 영역 $\tilde{X}(k)$ |
|:--------------:|:-------------------------:|
| 이산시간 주기함수      | 이산주파수 주기함수                 |

## 이산 푸리에 변환

| 시간 영역 $x[n]$ | 주파수 영역 $X[k]$ |
|:--------------:|:-------------------------:|
| 이산시간 주기함수      | 이산주파수 주기함수                 |

# 푸리에: 증명
본 장은 푸리에 변환의 성질 증명과 신호의 변환 과정을 설명하는 내용을 포함한다. 

#### [성질] 선형성

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

#### [성질] 대칭성

> 푸리에 급수에서도 언급하였듯이, 일반함수는 우함수와 기함수의 합으로 표현된다.
> 
> $$
> x(t) = x_e(t) + x_o(t)
> $$
>
> 시간 영역의 $x(t)$ 함수에 대한 푸리에 변환 $X(\omega)$는 다음과 같이 전개된다.
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
> 그리고 $x(t)$ 함수를 복소수 $\mathfrak{R}\lbrace x(t) \rbrace+j\mathfrak{I}\lbrace x(t) \rbrace$로 대입한다.
>
> $$
> X(\omega) = \int_{-\infty}^{\infty}{\mathfrak{R}\left\{ x_e(t) \right\}\cos{(2\pi ft)}dt} - j\int_{-\infty}^{\infty}{\mathfrak{R}\left\{ x_o(t) \right\}\sin{(2\pi ft)}dt}
> $$
>
> $$
> \qquad \qquad + j\int_{-\infty}^{\infty}{\mathfrak{I}\left\{ x_e(t) \right\}\cos{(2\pi ft)}dt} + \int_{-\infty}^{\infty}{\mathfrak{I}\left\{ x_o(t) \right\}\sin{(2\pi ft)}dt}
> $$
>
> 위의 전개식에서 $x(t)$ 함수로부터 네 가지 경우의 수를 찾아볼 수 있다.
>
> * $x(t)$가 실수 & 우함수 $\longrightarrow$ $X(f)$는 실수 & 우함수
>
> * $x(t)$가 실수 & 기함수 $\longrightarrow$ $X(f)$는 허수 & 기함수
>
> * $x(t)$가 허수 & 우함수 $\longrightarrow$ $X(f)$는 허수 & 우함수
>
> * $x(t)$가 허수 & 기함수 $\longrightarrow$ $X(f)$는 실수 & 기함수

#### [성질] 쌍대성

> 본 성질에 대한 증명은 푸리에 역변환인 합성 방정식으로부터 출발한다.
>
> 다음은 주파수 $f$에 대한 푸리에 변환의 쌍대성을 보여준다.
>
> $$
> x(t) = \int^{+\infty}_{-\infty}{X(f)e^{j2\pi ft}df}
> $$
>
> $$
> \quad \Rightarrow x(t) = \int^{+\infty}_{-\infty}{X(f)e^{j2pi ft}df}
> $$
>
> 만일 $t=-\tau$라고 가정하면 방정식은 다음과 같이 나타난다.
>
> $$
> x(-\tau) = \int^{+\infty}_{-\infty}{X(f)e^{-j2\pi f\tau}df}
> $$
>
> 여기서 $\tau \leftrightarrow f$ 기호를 서로 바꾼다. 비록 각 기호가 시간과 주파수를 의미하지만, 사실 이는 통상적인 해석일 뿐이다. 단순히 수학적인 관점에서 바라보면 이들은 단지 하나의 변수에 불과하며 기호를 바꾼다고 해서 변수의 본질이 바뀌는 게 아니다.
>
> $$
> x(-f) = \int^{+\infty}_{-\infty}{X(\tau)e^{-j2\pi f\tau}d\tau}
> $$
>
> 마무리로 $\tau$를 다시 익숙한 $t$로 돌려놓으면 다음 방정식이 완성된다.
>
> $$
> 2\pi x(-f) = \int^{+\infty}_{-\infty}{X(t)e^{-j2\pi ft}dt} = \mathcal{F}\left\{ X(t) \right\}
> $$
>
> ----
>
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 쌍대성을 보여준다.
>
> $$
> x(t) = \frac{1}{2\pi}\int^{+\infty}_{-\infty}{X(\omega)e^{j\omega t}d\omega}
> $$
>
> $$
> \quad \Rightarrow 2\pi x(t) = \int^{+\infty}_{-\infty}{X(\omega)e^{j\omega t}d\omega}
> $$
>
> 만일 $t=-\tau$라고 가정하면 방정식은 다음과 같이 나타난다.
>
> $$
> 2\pi x(-\tau) = \int^{+\infty}_{-\infty}{X(\omega)e^{-j\omega\tau}d\omega}
> $$
>
> 여기서 $\tau \leftrightarrow \omega$ 기호를 서로 바꾼다. 비록 각 기호가 시간과 주파수를 의미하지만, 사실 이는 통상적인 해석일 뿐이다. 단순히 수학적인 관점에서 바라보면 이들은 단지 하나의 변수에 불과하며 기호를 바꾼다고 해서 변수의 본질이 바뀌는 게 아니다.
>
> $$
> 2\pi x(-\omega) = \int^{+\infty}_{-\infty}{X(\tau)e^{-j\omega\tau}d\tau}
> $$
>
> 마무리로 $\tau$를 다시 익숙한 $t$로 돌려놓으면 다음 방정식이 완성된다.
>
> $$
> 2\pi x(-\omega) = \int^{+\infty}_{-\infty}{X(t)e^{-j\omega t}dt} = \mathcal{F}\left\{ X(t) \right\}
> $$

#### [성질] 시간 도치

> 본 성질에 대한 증명을 위해 $\tau = -t$라고 가정한다.
>
> $$
> \mathcal{F}\left\{ x(\tau) \right\} = -\int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(-\tau\right)}d\tau}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(-\tau\right)}d\tau}
> $$
>
> 여기서 푸리에 변환의 두 가지 분석 방정식 표현을 유도할 수 있다.
>
> $$
> \quad \Rightarrow \left\{ \begin{array}{ll} \displaystyle \int_{-\infty}^{\infty}{x(\tau)e^{-j\left(-2\pi f\right)\tau}d\tau} & = X(-f) \\ \displaystyle \int_{-\infty}^{\infty}{x(\tau)e^{j2\pi f\tau}d\tau} & = X^*(f) \end{array}\right.
> $$

#### [성질] 시간 척도

> 본 성질에 대한 증명을 위해 $\tau = at$라고 가정한다.
>
> $$
> \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\frac{\tau}{a}}d\frac{\tau}{a}}
> $$
>
> $$
> \quad = \frac{1}{\lvert a \rvert} \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\frac{\tau}{a}}d\tau}
> $$
>
> 여기서 분모 $a$에 절댓값이 씌워진 이유는 *시간 도치*에서 확인할 수 있듯이 무한한 범위의 적분에서 범위를 반대로 뒤집는 부호가 사실상 의미없기 때문이다. *시간 도치*의 증명과 유사한 방법으로 분석 방정식을 마무리짓는다.
>
> $$
> \quad \Rightarrow \frac{1}{\lvert a \rvert} \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi\frac{f}{a}\tau}d\tau} = \frac{1}{\lvert a \rvert} X\left(\frac{f}{a}\right)
> $$

#### [성질] 시간 이동

> 본 성질에 대한 증명을 위해 $\tau = t-t_0$라고 가정한다.
>
> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 이동을 보여준다.
>
> $$
> \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\left(\tau+t_0\right)}d\tau}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\tau}e^{-j2\pi ft_0}d\tau}
> $$
>
> 여기서 $t_0$는 상수이므로 이를 갖는 지수는 적분 밖으로 나올 수가 있다.
>
> $$
> \quad \Rightarrow e^{-j2\pi ft_0}\int_{-\infty}^{\infty}{x(\tau)e^{-j2\pi f\tau}d\tau} = X(f)e^{-j2\pi ft_0}
> $$
>
> ----
> 
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 시간 이동을 보여준다.
>
> $$
> \mathcal{F}\left\{ x(\tau) \right\} = \int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\left(\tau+t_0\right)}d\tau}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\tau}e^{-j\omega t_0}d\tau}
> $$
>
> 여기서 $t_0$는 상수이므로 이를 갖는 지수는 적분 밖으로 나올 수가 있다.
>
> $$
> \quad \Rightarrow e^{-j\omega t_0}\int_{-\infty}^{\infty}{x(\tau)e^{-j\omega\tau}d\tau} = X(f)e^{-j\omega t_0}
> $$

#### [성질] 주파수 이동

> 본 성질에 대한 증명을 위해 푸리에 변환 절차를 반대로 짚어본다.
>
> 다음은 주파수 $f$에 대한 푸리에 변환의 주파수 이동을 보여준다.
>
> $$
> X(f - f_0) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi \left(f - f_0\right)t}dt}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}e^{j2\pi f_0t}dt}
> $$
>
> 푸리에 변환의 분석 방정식과 동일한 형태로 변형한 다음에 시간 영역만을 추출한다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{\left[ x(t) e^{j2\pi f_0t}\right] e^{-j2\pi ft}dt} = \mathcal{F}\left\{ x(t) e^{j2\pi f_0t} \right\}
> $$
>
> ----
> 
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 주파수 이동을 보여준다.
>
> $$
> X(\omega - \omega_0) = \int_{-\infty}^{\infty}{x(t)e^{-j\left(\omega - \omega_0\right)t}dt}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}e^{j\omega_0t}dt}
> $$
>
> 푸리에 변환의 분석 방정식과 동일한 형태로 변형한 다음에 시간 영역만을 추출한다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{\left[ x(t) e^{j\omega_0t}\right] e^{-j\omega t}dt} = \mathcal{F}\left\{ x(t) e^{j\omega_0t} \right\}
> $$

#### [성질] 시간 합성곱

> 본 성질에 대한 증명을 위해 우선 합성곱에 대한 이해가 필요하다. 합성곱(convolution)이란, 두 함수 $x(t)$와 $y(t)$로부터 새로운 함수 $x\ast y(t)$를 합성하는 수학 연산이다.
>
> $$
> x(t) \ast y(t) = \int_{-\infty}^{\infty}{x(\tau)y(t-\tau)d\tau}
> $$
>
> 이에 대한 내용은 차후 문서에 다룰 예정이다.
>
> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
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
> 만일 $u = t - \tau$로 치환하면 도함수 $du - dt$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $\tau$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
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
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
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
> 만일 $u = t - \tau$로 치환하면 도함수 $du - dt$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $\tau$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
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

#### [성질] 주파수 합성곱

> 본 성질에 대한 증명을 위해 우선 합성곱에 대한 이해가 필요하다. 합성곱(convolution)이란, 두 함수 $x(t)$와 $y(t)$로부터 새로운 함수 $x\ast y(t)$를 합성하는 수학 연산이다.
>
> $$
> x(t) \ast y(t) = \int_{-\infty}^{\infty}{x(\tau)y(t-\tau)d\tau}
> $$
>
> 이에 대한 내용은 차후 문서에 다룰 예정이다.
>
> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
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
> 만일 $u = t - \tau$로 치환하면 도함수 $du - dt$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $\tau$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
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
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 시간 합성곱을 보여준다.
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
> 만일 $u = t - \tau$로 치환하면 도함수 $du - dt$가 나오는데, 적분 우선 순위에 의해 첫 번째 적분에서 $\tau$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
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

#### [성질] 시간 미분

> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 미분을 보여주며, 증명을 위해 푸리에 역변환을 사용한다.
>
> $$
> x(t) = \int_{-\infty}^{\infty}{X(f)e^{j2\pi ft}df}
> $$
>
> 합성 방정식의 양변에 시간 $t$에 대한 미분을 한다.
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
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 시간 미분을 보여주며, 증명을 위해 푸리에 역변환을 사용한다.
>
> $$
> x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty}{X(\omega)e^{j\omega t}d\omega}
> $$
>
> 합성 방정식의 양변에 시간 $t$에 대한 미분을 한다.
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
> \quad = \mathcal{F}^{-1}\left\{ j\omega X(\omega) \right\}
> $$

#### [성질] 주파수 미분

> 다음은 주파수 $f$에 대한 푸리에 변환의 주파수 미분을 보여주며, 증명을 위해 푸리에 변환을 사용한다.
>
> $$
> X(f) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}dt}
> $$
>
> 분석 방정식의 양변에 시간 $t$에 대한 미분을 한다.
>
> $$
> X'(f) = \frac{d}{df} \left( \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}dt} \right)
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(t)\cdot \left(-j2\pi t\right)e^{j2\pi ft}dt}
> $$
>
> 위의 분석 방정식을 정리하면 다음과 같다.
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
> 다음은 각주파수 $\omega$에 대한 푸리에 변환의 주파수 미분을 보여주며, 증명을 위해 푸리에 변환을 사용한다.
>
> $$
> X(\omega) = \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}dt}
> $$
>
> 분석 방정식의 양변에 시간 $t$에 대한 미분을 한다.
>
> $$
> X'(\omega) = \frac{d}{df} \left( \int_{-\infty}^{\infty}{x(t)e^{-j\omega t}dt} \right)
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{x(t)\cdot \left(-jt\right)e^{j\omega t}dt}
> $$
>
> 위의 분석 방정식을 정리하면 다음과 같다.
>
> $$
> \frac{dX(\omega)}{d\omega} = \int_{-\infty}^{\infty}{\left( jtx(t) \right) e^{j\omega t}dt}
> $$
>
> $$
> \quad = \mathcal{F}\left\{ j tx(t) \right\}
> $$

#### [성질] 시간 부정적분

> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 영역 함수의 총 면적을 보여주며, 각주파수 $$\omega$$에 대한 푸리에 변환도 동일한 방법으로 증명할 수 있다. 아래는 푸리에 변환을 나타내는 분석 방정식이다.
>
> $$
> X(f) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi ft}dt}
> $$
>
> 여기에서 $f=0$이면 아래의 식이 완성된다.
>
> $$
> X(0) = \int_{-\infty}^{\infty}{x(t)e^{-j2\pi 0 t}dt}
> $$
> 
> $$
> \quad = \int_{-\infty}^{\infty}{x(t)dt}
> $$

#### [성질] 주파수 부정적분

> 다음은 주파수 $f$에 대한 푸리에 변환의 주파수 영역 함수의 총 면적을 보여주며, 각주파수 $\omega$에 대한 푸리에 변환도 동일한 방법으로 증명할 수 있다. 아래는 푸리에 역변환을 나타내는 분석 방정식이다.
>
> $$
> x(t) = \int_{-\infty}^{\infty}{X(f)e^{j2\pi ft}df}
> $$
>
> 여기에서 $t=0$이면 아래의 식이 완성된다.
>
> $$
> x(0) = \int_{-\infty}^{\infty}{X(f)e^{-j2\pi f 0}df}
> $$
> 
> $$
> \quad = \int_{-\infty}^{\infty}{X(f)df}
> $$

#### [성질] 시간 적분

> 다음은 주파수 $f$에 대한 푸리에 변환의 시간 적분을 보여주며, 각주파수 $\omega$에 대한 푸리에 변환도 동일한 방법으로 증명할 수 있다. 위의 적분은 아래와 같은 합성곱으로 표현이 가능하다.
>
> $$
> \int_{-\infty}^{t}{x(\tau)d\tau} = \int_{-\infty}^{\infty}{x(\tau)u(t-\tau)d\tau}
> $$
>
> 여기서 $u(t-\tau)$는 [단위 계단 함수](https://ko.wikipedia.org/wiki/단위_계단_함수)(unit step function)로 아래와 같은 성질을 갖는다.
>
> $$
> u(t-\tau) = \left\{\begin{array}{rrr} 1, & \quad \tau < t \\ \frac{1}{2}, & \quad \tau = t \\ 0, & \quad \tau > t \end{array}\right.
> $$
>
> 그러므로 합성곱에 대한 푸리에 변환에 의해 시간 적분은 다음과 같이 표현될 수 있다.
>
> $$
> \mathcal{F}\left\{ \int_{-\infty}^{t}{x(\tau)d\tau} \right\} = \mathcal{F}\left\{ x \ast u(t) \right\}
> $$
>
> $$
> \quad = X(f) \left[ \frac{1}{j2\pi f} + \frac{1}{2}\delta(f) \right]
> $$
>
> $$
> \quad = \frac{1}{j2\pi f}X(f) + \frac{1}{2}X(0)\delta(f)
> $$
>
> 이는 단위 계단 함수 $u(t-\tau)$와 [델타 함수](https://ko.wikipedia.org/wiki/디랙_델타_함수) $\delta(f)$의 푸리에 변환에 의한 것으로, 해당 두 함수의 푸리에 변환은 차후에 설명할 예정이다.

#### [성질] 파스발 정리

> 파스발 정리에 앞서, 시간 영역에서 신호 $x(t)$의 에너지는 다음과 같이 계산된다.
>
> $$
> E = \lim_{T\rightarrow\infty}\int_{T}{\lvert x(t) \rvert^2dt}
> $$
>
> 여기서 $\lvert x(t) \rvert^2$, 즉 복소함수 $x(t)$의 절댓값은 켤레복소함수 $x^*(t)$와의 곱으로 계산된다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{\lvert x(t) \rvert^2dt} = \int_{-\infty}^{\infty}{x(t)x^*(t)dt}
> $$
>
> 여기서 켤레복소함수 $x(t)$$에 대해서만 푸리에 역변환을 대입시킨다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{x(t) \cdot \mathcal{F}^{-1}\left\{X^*(-f)\right\}dt} = \int_{-\infty}^{\infty}{x(t) \left[ \int_{-\infty}^{\infty}{X^*(-f)e^{j2\pi ft}df} \right] dt}
> $$
> 
> 주파수에 대해 $-f=\lambda$로 치환한다. 그러면 $df=-d\lambda$로 변하고 범위에도 영향을 미친다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{x(t) \left[ -\int_{\infty}^{-\infty}{X^*(\lambda)e^{-j2\pi\lambda t}d\lambda} \right] dt} = \int_{-\infty}^{\infty}{x(t) \left[ \int_{-\infty}^{\infty}{X^*(\lambda)e^{-j2\pi\lambda t}d\lambda} \right] dt}
> $$
>
> 함수 $X^*(\lambda)$와 $x(t)$는 순수히 각각 주파수 $\lambda$ 및 시간 $t$에만 의존하기 때문에 적분 순서를 쉽게 바꿀 수 있다.
>
> $$
> \quad \Rightarrow \int_{-\infty}^{\infty}{X^*(\lambda) \left[ \int_{-\infty}^{\infty}{x(t)e^{-j2\pi\lambda t}dt} \right] d\lambda} = \int_{-\infty}^{\infty}{X^*(\lambda) \cdot \mathcal{F}\left\{ x(t) \right\} d\lambda}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{X^*(\lambda) X(\lambda) d\lambda}
> $$
>
> $$
> \qquad \therefore E = \int_{-\infty}^{\infty}{ \lvert X(\lambda) \rvert^2 d\lambda}
> $$

#### [신호] 단위 임펄스

> 우선 단위 임펄스 신호에 대한 푸리에 변환은 다음과 같다.
>
> $$
> \mathcal{F}\left\{ \delta(t) \right\} = \int_{-\infty}^{\infty}{\delta(t)e^{-j2\pi ft}dt}
> $$
>
> 디렉 델타 함수 $\delta(t-a)$는 $t=a$ 이외에는 모두 0인 함수이다. 그러므로 푸리에 분석 방정식에서 실질적으로 의미있는 적분 범위는 아래와 같다.
>
> $$
> \quad \Rightarrow \int_{-0}^{+0}{\delta(t)e^{-j2\pi ft}dt}
> $$
>
> 그리고 디렉 델타 함수 $\delta(t-a)$는 $t=a$일 때 항상 적분값이 1이므로 분석 방정식은 다음과 같이 간략화된다.
>
> $$
> \quad \Rightarrow \int_{-0}^{+0}{e^{-j2\pi ft}dt} = \left. e^{-j2\pi ft} \right|_{t=0} = 1
> $$

#### [신호] 직류신호

> 우선 단위 임펄스 신호에 대한 푸리에 역변환은 다음과 같다.
>
> $$
> \mathcal{F}^{-1}\left\{ \delta(f) \right\} = \int_{-\infty}^{\infty}{\delta(f)e^{j2\pi ft}df}
> $$
>
> 디렉 델타 함수 $\delta(f-a)$는 $f=a$ 이외에는 모두 0인 함수이다. 그러므로 푸리에 분석 방정식에서 실질적으로 의미있는 적분 범위는 아래와 같다.
>
> $$
> \quad \Rightarrow \int_{-0}^{+0}{\delta(f)e^{j2\pi ft}df}
> $$
>
> 그리고 디렉 델타 함수 $\delta(t-a)$는 $t=a$일 때 항상 적분값이 1이므로 분석 방정식은 다음과 같이 간략화된다.
>
> $$
> \quad \Rightarrow \int_{-0}^{+0}{e^{j2\pi ft}df} = \left. e^{-j2\pi ft} \right|_{f=0} = 1
> $$

#### [신호] 복소 지수함수

> 복소 지수함수의 푸리에 변환은 다음과 같이 서술된다.
>
> $$
> \mathcal{F}\left\{ e^{j2\pi f_0t} \right\} = \int_{-\infty}^{\infty}{e^{j2\pi f_0t} \cdot e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{1 \cdot e^{-j2\pi (f-f_0)t}dt}
> $$
>
> 시간 영역에서의 직류신호에 대한 푸리에 변환과 동일하나, 주파수만 $f-f_0$으로 이동되었을 뿐이다.
>
> $$
> \quad \Rightarrow \delta(f-f_0)
> $$

#### [신호] 정현파

> 오일러 공식을 통해 정현파를 지수함수로 표현하여 증명한다.
>
> $$
> \mathcal{F}\left\{ \cos{2\pi f_0t} \right\} = \int_{-\infty}^{\infty}{\cos{(2\pi f_0t)} e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{\frac{1}{2}\left[ e^{j2\pi f_0t} + e^{-j2\pi f_0t} \right] e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \frac{1}{2}\int_{-\infty}^{\infty}{e^{j2\pi f_0t} e^{-j2\pi ft}dt} + \frac{1}{2}\int_{-\infty}^{\infty}{e^{-j2\pi f_0t} e^{-j2\pi ft}dt}
> $$
>
> 여기서 복소 지수함수의 푸리에 변환을 사용하여 주파수 영역에 대하여 구한다.
>
> $$
> \quad \Rightarrow \frac{1}{2}\delta(f-f_0) + \frac{1}{2}\delta(f+f_0)
> $$
>
> $$
> \quad = \frac{1}{2}\left[ \delta(f-f_0) + \delta(f+f_0) \right]
> $$
>
> ----
>
> 오일러 공식을 통해 정현파를 지수함수로 표현하여 증명한다.
>
> $$
> \mathcal{F}\left\{ \sin{2\pi f_0t} \right\} = \int_{-\infty}^{\infty}{\sin{(2\pi f_0t)} e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \int_{-\infty}^{\infty}{\frac{1}{2j}\left[ e^{j2\pi f_0t} - e^{-j2\pi f_0t} \right] e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \frac{1}{2j}\int_{-\infty}^{\infty}{e^{j2\pi f_0t} e^{-j2\pi ft}dt} - \frac{1}{2j}\int_{-\infty}^{\infty}{e^{-j2\pi f_0t} e^{-j2\pi ft}dt}
> $$
>
> 여기서 복소 지수함수의 푸리에 변환을 사용하여 주파수 영역에 대하여 구한다.
>
> $$
> \quad \Rightarrow \frac{1}{2j}\delta(f-f_0) - \frac{1}{2j}\delta(f+f_0)
> $$
>
> $$
> \quad = \frac{1}{2j}\left[ \delta(f-f_0) - \delta(f+f_0) \right]
> $$

#### [신호] 시그넘 함수

> 시그넘 함수를 다음과 같이 수식으로 나타낼 수 있다.
>
> $$
> \mathrm{sgn}(t) = \left\{\begin{array}{rrr} +1, & t > 0 \\ 0, & t = 0 \\ -1, & t < 0 \end{array}\right.
> $$
>
> 하지만 위의 식은 푸리에 변환을 위해 만족되어야 할 디리클레(Dirichlet) 조건을 충족하지 못한다. 그러므로 디리클레 조건을 만족하여 푸리에 변환이 가능하도록 지수함수로 시그넘 함수를 표현한다.
>
> $$
> \mathrm{sgn}(t) = \lim_{a\rightarrow0} \left\{\begin{array}{rrr} \displaystyle e^{-at}, & t > 0 \\ \displaystyle 0, & t = 0 \\ \displaystyle -e^{at}, & t < 0 \end{array}\right.
> $$
>
> 양과 음의 시간대 지수함수를 푸리에 변환하고 합하므로써 시그마 함수의 주파수 영역 수식을 구할 수 있다. 먼저 양의 시간대 $$t>0$$의 경우를 본다:
>
> $$
> \int_{+0}^{\infty}{e^{-at} \cdot e^{-j2\pi ft}dt} = \left. \frac{1}{-\left( a + j2\pi f \right)}e^{-\left(a + j2\pi f\right)t} \right|^{\infty}_{t=0}
> $$
>
> $$
> \quad = 0 - \left[ \frac{1}{-\left(a + j2\pi f\right)} \right]
> $$
>
> $$
> \quad = \frac{1}{a + j2\pi f}
> $$
>
> 그 다음 음의 시간대 $t<0$의 경우를 본다:
>
> $$
> \int^{-0}_{-\infty}{-e^{at} \cdot e^{-j2\pi ft}dt} = -\left\{ \left. \frac{1}{\left(a - j2\pi f \right)}e^{\left(a - j2\pi f\right)t} \right|^{0}_{t=-\infty} \right\}
> $$
>
> $$
> \quad = - \left\{ \left[ \frac{1}{a - j2\pi f} \right] - 0 \right\}
> $$
>
> $$
> \quad = \frac{-1}{a - j2\pi f}
> $$
>
> 위의 두 시간대 영역을 합치면 시그마 함수의 주파수 영역 수식이 된다. 물론 $$t=0$$의 경우도 포함해야 하지만, 어차피 0이기 때문에 과정을 생략한다. 
>
> $$
> \mathcal{F}\left\{ \mathrm{sgn}(t) \right\} = \lim_{a\rightarrow 0} \left[ \frac{1}{a + j2\pi f} + \frac{-1}{a - j2\pi f} \right]
> $$
>
> $$
> \quad = \lim_{a \rightarrow 0}{\frac{-j4\pi f}{a^2 + \left( 2\pi f\right)^2}}
> $$
>
> $$
> \quad = \frac{1}{j\pi f}
> $$

#### [신호] 단위 계단 함수

> 시그넘 함수의 진폭을 $\frac{1}{2}$ 줄인 다음에 $y$ 축으로 $\frac{1}{2}$만큼 이동시키면 단위 계단 함수가 된다.
>
> $$
> u(t) = \frac{1}{2}\mathrm{sgn}(t) + \frac{1}{2}
> $$
>
> 위의 식에 푸리에 변환을 적용한다.
>
> $$
> \mathcal{F}\left\{ u(t) \right\} = \mathcal{F}\left\{ \frac{1}{2}\mathrm{sgn}(t) \right\} + \mathcal{F}\left\{ \frac{1}{2} \right\}
> $$
>
> $$
> \quad = \frac{1}{2}\left[ \frac{1}{j\pi f} \right] + \frac{1}{2}\delta(f)
> $$
>
> $$
> \quad = \frac{1}{2}\delta(f) + \frac{1}{j2\pi f}
> $$

#### [신호] 구형 펄스

> 구형 펄스은 범위 $(-\frac{a}{2},+\frac{a}{2})$ 이외에는 모두 0을 갖기 떄문에 푸리에 변환의 분석 방정식을 다음과 같이 나타낼 수 있다.
>
> $$
> \mathcal{F}\left\{ \Pi\left(\textstyle\frac{t}{a}\right)\right\} = \int_{-\infty}^{\infty}{\Pi\left(\textstyle\frac{t}{a}\right)e^{-j2\pi ft}dt}
> $$
>
> $$
> \quad = \int_{-\frac{a}{2}}^{\frac{a}{2}}{e^{-j2\pi ft}dt}
> $$
>
> 정적분을 계산하면 다음과 같은 수식이 구해진다.
>
> $$
> \quad \Rightarrow \frac{1}{-j2\pi f}\left( e^{-j\pi fa} - e^{ja\pi f} \right)
> $$
>
> $$
> \quad = \frac{1}{-j2\pi f}\left( -j2\sin{a\pi f} \right)
> $$
>
> $$
> \quad = a \frac{\sin{a\pi f}}{a\pi f}
> $$
>
> 여기서 분수는 간략히 [싱크 함수](https://ko.wikipedia.org/wiki/싱크함수)(sinc function) $$\operatorname{sinc}$$로 표현된다.
>
> $$
> \qquad \therefore \mathcal{F}\left\{ \Pi\left(\textstyle\frac{t}{a}\right)\right\} = a \operatorname{sinc}{af}
> $$

#### [신호] 삼각 펄스

> 삼각형 펄스는 구형 펄스의 합성곱으로 표현된다.
>
> $$
> \Lambda\left(\textstyle \frac{t}{a}\right) = \Pi\left(\textstyle \frac{t}{a}\right) \ast \Pi\left(\textstyle \frac{t}{a}\right)
> $$
>
> 푸리에 변환 성질에 의하면 시간 영역에서의 합성곱은 주파수 영역에서 곱셈으로 나타난다. 그러므로 주파수 영역에서의 삼각형 펄스는 다음과 같이 간단히 구해진다.
>
> $$
> \mathcal{F}\left\{ \Lambda\left( \textstyle \frac{t}{a}\right)\right\} = \mathcal{F}\left\{ \Pi\left(\textstyle \frac{t}{a}\right) \ast \Pi\left(\textstyle \frac{t}{a}\right) \right\}
> $$
>
> $$
> \quad = a \operatorname{sinc}{af} \times a \operatorname{sinc}{af}
> $$
>
> $$
> \quad = a^2 \operatorname{sinc}^2{af}
> $$
