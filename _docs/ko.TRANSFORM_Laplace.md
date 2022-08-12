---
layout: docs
category: 공업수학
title: 라플라스 변환
slug: ko.Laplace-Transform
order: 0xE3
---
# 개요
> 본 내용은 고등학교 교육과정 중 하나인 [삼각함수](https://ko.wikipedia.org/wiki/삼각함수), [미분](https://ko.wikipedia.org/wiki/미분) 및 [적분](https://ko.wikipedia.org/wiki/적분), 그리고 [복소수](https://ko.wikipedia.org/wiki/복소수)를 기반하므로 이에 대해 충분한 이해가 필요하다.

[라플라스 변환](https://en.wikipedia.org/wiki/Laplace_transform)(Laplace transform)은 복잡한 [미분방정식](/docs/ko.Differential)을 극히 익숙한 [대수방정식](https://en.wikipedia.org/wiki/Algebraic_equation)으로 풀 수 있는 매우 유용한 미적분학 기법이다. 이러한 변환이 가능한 이유는 바로 $t$-영역(또는 공간; domain)과 $s$-영역을 넘나드는 풀이 방식을 사용하기 때문이다.

* *$t$-영역 (일명 시간 영역)*
    : 변수 $t$, 일명 시간이 중심이 되는 공간이다. 

* *$s$-영역 (일명 복소주파수 영역)*
    : 변수 $s = \sigma + j\omega$가 중심이 되는 공간이며, 허수가 붙기 때문에 "복소"주파수라고 부른다. 여기서 $\omega$는 [각주파수](https://ko.wikipedia.org/wiki/각진동수)(angular frequency)로 $2\pi f$와 같다. 

# 변환
라플라스 변환은 $t$-영역을 $s$-영역으로 공간을 전환하며 다음과 같은 방정식을 갖는다.

$$
F(s) = \mathcal{L} \{ f(t) \} = \int^{\infty}_{0}f(t)e^{-st}dt
$$

위의 방정식은 적분되는 시간 범위가 $t \in \left[ 0, \infty \right)$인 단방향(uniliteral) 변환으로, 오로지 현재와 과거의 입력에만 의존하는 [인과 시스템](https://en.wikipedia.org/wiki/Causal_system)(causal system)을 설명한다. 반면, 적분 범위가 $t \in \left( -\infty , \infty \right)$인 [양방향 라플라스 변환](https://en.wikipedia.org/wiki/Two-sided_Laplace_transform)(bilteral Laplace transform)은 현재 및 과거 그리고 미래의 입력에 의존하는 [비인과 시스템](https://en.wikipedia.org/wiki/Anticausal_system)(non-causal system)을 설명한다.

> *일반적으로 라플라스 변환을 언급하면 단방향을 의미한다.* 이러한 이유는 실제 물리적 시스템은 전부 인과 시스템을 따르기 때문이다.

## 라플라스 변환
> *참조: [MIT 온라인 공개수업 - 강의 19: 라플라스 변환의 소개](https://ocw.mit.edu/courses/mathematics/18-03-differential-equations-spring-2010/video-lectures/lecture-19-introduction-to-the-laplace-transform/)*

라플라스 변환은 [확률 이론](/docs/ko.Probability)(probability theory)으로부터 유도된 변환식이다.

### 푸리에 변환
라플라스 변환은 아래의 [푸리에 변환](/docs/ko.Fourier-Transform#푸리에-변환)과 매우 유사한 형태를 띈다.

$$
X(\omega) = \mathcal{F} \{ x(t) \} = \int^{\infty}_{-\infty}x(t)e^{-j\omega t}dt
$$

만일 푸리에 변환의 유도 과정을 접하였다면 $j\omega$를 $\sigma + j\omega$로 확장하여 라플라스 변환의 유도를 설명하려고 시도할 수 있으나, 이는 매우 잘못된 접근법이다. 라플라스 변환의 유도 과정은 [푸리에 급수](/docs/ko.Fourier-Transform#푸리에-급수)가 아닌 확률 이론(probability theory)에서 비롯되었기 때문이다. 그렇지만 라플라스와 푸리에 변환이 서로 연관성이 없다는 것은 전혀 아니며, 푸리에 변환은 복소변수 $s=\sigma + j\omega$에서 감쇠 $\sigma = 0$인 특수한 경우의 라플라스 변환이다.

### 변환의 성질
> *참조: [위키백과 - 라플라스 성질 및 이론](https://en.wikipedia.org/wiki/Laplace_transform#Properties_and_theorems)*

라플라스 변환은 선형계 분석에 있어 매우 유용한 성질들을 가지고 있다. 시간 영역의 미분과 적분이 


시간 영역의 미분과 적분이 복소수 영역에서는 라플라스 변수 $s$의 곱셈과 나눗셈으로 표현하여 미분방정식을 대수방정식으로 변환시키는 강력한 장점을 지닌다. 그 외에도 라플라스 변환은 아래의 성질을 가지고 있다:

* *[선형성](https://en.wikipedia.org/wiki/Linearity) (Linearity)*
    : 선형 연산자인 적분을 사용하는 라플라스 변환 또한 선형성을 지닌다.

    $$
    af(t) + bg(t) \quad \Longleftrightarrow \quad aF(s)+bG(s)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ af(t) + bg(t) \right\} = \int^{\infty}_{0}\left\{ af(t) + bg(t) \right\} e^{-st}dt
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0}\left\{af(t)e^{-st} + bg(t)e^{-st}\right\}dt
    > $$
    >
    > $$
    > \quad = a\int^{\infty}_{0}f(t)e^{-st}dt + b\int^{\infty}_{0}g(t)e^{-st}dt
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
    : 함수 $f(t)$가 미분가능한 함수이며 지수 형태의 도함수를 가진다고 가정할 시, $s$-영역의 방정식은 부분 적분을 통해 도출된다.

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
    : 아래의 라플라스 합성곱 성질을 참고한다; 합성곱의 $g(t)$ 함수가 적분에서는 단위 계단 함수 $u(t)$로 대체되었다.

    $$
    \int^t_0{f(\tau)d\tau} = \bigl( u \ast f \bigr)(t) \quad \Longleftrightarrow \quad \frac{1}{s}F(s)
    $$

* *[합성곱](https://en.wikipedia.org/wiki/Convolution) (Convolution)*
    : 시간축 $\tau$에 놓여있는 두 함수 $f(\tau)$, $g(\tau)$간 서로 겹치는 총 면적이 발생한다. 여기서 함수 $g(\tau)$를 시간축에서 $t$만큼 이동시켰을 때 겹치는 면적이 변하는데, 주어진 $t$ 범위에 대하여 겹치는 면적을 적분하는 것이 두 함수의 합성곱이다.

    $$
    \bigl( f \ast g \bigr) (t) = \int^t_0{f(\tau)g(t-\tau)d\tau} \quad \Longleftrightarrow \quad F(s)G(s)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ f \ast g \right\} = \int^{\infty}_{0^-} \bigl( f \ast g \bigr) (t) e^{-st}dt
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{ \int^{t}_{0^-}{f(\tau)g(t-\tau) e^{-st} d\tau} dt}
    > $$
    >
    > 현재 $d\tau dt$ 순서로 되어 있는 적분을 $dtd\tau$로 바꾸어도 적분되는 면적은 동일해야 한다. 순서가 바뀌기 전에는 변수 $\tau$가 $0$에서부터 $t$까지 적분되었으나, 그 다음 적분에서 $t$가 무한으로 적분하면서 $\tau$ 또한 변수 $t$를 따라 함께 무한으로 뻗어나간다. 그러므로 적분 순서를 바꾸면 범위는 아래와 같이 바뀐다.
    >
    > $$
    > \quad \Rightarrow \int^{\infty}_{0^-}{ \int^{\infty}_{0^-}{f(\tau)g(t-\tau) e^{-st} dt} d\tau}
    > $$
    >
    > 위에서 설명한 $\tau$가 무한으로 적분되는 것이 수식에 반영된 것을 볼 수 있다.
    >
    > 만일 $u=t-\tau$로 치환하면 도함수 $du=dt$가 나오는데, 적분 우선순위에 의해 $\tau$는 상수로 취급되었기 때문이다. 이들을 적분식에 대입하면 다음과 같이 표현된다.
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
    > \quad = \mathcal{L}\left\{ f(\tau) \right\} \cdot \mathcal{L}\left\{ g(u) \right\}
    > $$
    >
    > $$
    > \quad = F(s)G(s)
    > $$

* *[켤레 복소수](https://en.wikipedia.org/wiki/Complex_conjugate) (Complex conjugate)*
    : 허수가 반대의 부호를 가지는 복소수이다; 비록 증명은 간단하지만, 켤레 복소수의 성질의 이해를 필요로 한다.

    $$
    f^*(t) \quad \Longleftrightarrow \quad F^*(s^*)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ f^*(t) \right\} = \int^{\infty}_{0^-}  f^*(t) e^{-st}dt
    > $$
    >
    > $$
    > \quad = \left[ \int^{\infty}_{0^-}  f(t) e^{-s^*t}dt \right]^* \quad \left( \ \because \left\{ A^* \right\}^* = A \quad \mathrm{and} \quad \left\{ B\cdot C\right\}^* = B^*\cdot C^* \ \right)
    > $$
    >
    > $$
    > \quad = F^*(s^*)
    > $$

* *시간 이동 (Time shifting)*
    : 시간축으로 $a$만큼 이동하였을 시, 단위 계단 함수 $u(t-a)$를 함께 사용하여 $t=a$에서 함수가 활성화하도록 한다.
    
    $$
    f(t-a)u(t-a) \quad \Longleftrightarrow \quad e^{-as}F(s)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ f(t-a)u(t-a) \right\} = \int^{\infty}_{0^-}{f(t-a)u(t-a) e^{-st}dt}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{a}{f(t-a) e^{-st}dt}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0}{f(\tau) e^{-s(\tau+a)}d\tau} \quad ... \mathrm{where} \ \tau = t-a
    > $$
    >
    > $$
    > \quad = e^{-sa}\int^{\infty}_{0}{f(\tau) e^{-s\tau}d\tau}
    > $$
    >
    > $$
    > \quad = e^{-as}\mathcal{L}\left\{ f(\tau) \right\}
    > $$
    >
    > $$
    > \quad = e^{-as}F(s)
    > $$

* *시간 척도 (Time scaling)*
    : 시간 척도로 인한 라플라스 변환은 다음과 같이 나타난다.

    $$
    f(at) \quad \Longleftrightarrow \quad \frac{1}{a}F\left(\frac{s}{a}\right)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ f(at) \right\} = \int^{\infty}_{0^-}{f(at)e^{-st}dt}
    > $$
    >
    > $$
    > \quad = \frac{1}{a}\int^{\infty}_{0^-}{f(\tau) e^{-\frac{s}{a}\tau}d\tau} \quad ... \mathrm{where} \ \tau = at
    > $$
    >
    > $$
    > \quad = \frac{1}{a}F\left(\frac{s}{a}\right)
    > $$

* *주파수 이동 (Frequency shifting)*
    : 시간 이동과 반대로, 본 성질은 주파수축에서의 $a$만큼 이동을 다룬다.
    
    $$
    e^{at}f(t) \quad \Longleftrightarrow \quad F(s-a)
    $$

    > 본 성질에 대한 증명은 아래를 참고한다:
    >
    > $$
    > \mathcal{L}\left\{ e^{at}f(t) \right\} = \int^{\infty}_{0^-}{e^{at}f(t)e^{-st}dt}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{f(t)e^{-(s-a)t}dt}
    > $$
    >
    > $$
    > \quad = F(s-a)
    > $$

* *[초기값 정리](https://en.wikipedia.org/wiki/Initial_value_theorem) (Initial value theorem)*
    : 시간 영역에서의 함수가 $0$으로 수렴할 시, 복소주파수 영역에서는 다음 수식과 동일한 값을 가진다.

    $$
    f(0^+) = \lim_{s\rightarrow\infty}{sF(s)}
    $$

    > 만일 $f(0^+) = \alpha$라고 가정하고 $s$-영역에서부터 증명을 시작한다:
    >
    > $$
    > sF(s) = s\int^{\infty}_{0^-}{f(\tau)e^{-s\tau}d\tau}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{f\left(\frac{t}{s}\right)e^{-t}dt} \quad ... \mathrm{assuming} \ \tau = \frac{t}{s} , \ \mathrm{thus} \ sd\tau = dt
    > $$
    >
    > 여기서 복소주파수 영역의 $s$ 변수를 무한으로 발산시키면 아래의 방정식이 표현된다.
    >
    > $$ 
    > \lim_{s\rightarrow\infty}{sF(s)} = \lim_{s\rightarrow\infty}{\int^{\infty}_{0^-}{f\left(\frac{t}{s}\right)e^{-t}dt}}
    > $$
    >
    > $$
    > \quad = \int^{\infty}_{0^-}{f(0)e^{-t}dt}
    > $$
    >
    > $$
    > \quad = \alpha\int^{\infty}_{0^-}{e^{-t}dt}
    > $$
    >
    > $$
    > \quad = \alpha \left[ 1-0 \right]
    > $$
    >
    > $$
    > \quad = f(0^+)
    > $$

* *[최종값 정리](https://en.wikipedia.org/wiki/Final_value_theorem) (Final value theorem)*
    : 시간 영역에서의 함수가 무한으로 발산할 시, 복소주파수 영역에서는 다음 수식과 동일한 값을 가진다.

    $$
    f(\infty) = \lim_{s\rightarrow 0}{sF(s)}
    $$
    
    단, 위의 정리가 만족하기 위해서는 복소주파수 영역에서 $sF(s)$ 함수의 [극점](https://en.wikipedia.org/wiki/Zeros_and_poles)(poles)이 모두 $s$ 좌표계의 왼쪽에 위치하여야 한다. 정리하자면, 시간 영역의 함수가 반드시 수렴해야 한다는 의미이다.

    > 1계도함수에 대한 라플라스 변환은 다음과 같다
    >
    > $$
    > \int^{\infty}_{0^-}{f'(t)e^{-st}dt} = sF(s) - f(0)
    > $$
    >
    > 여기서 복소주파수 영역의 $s$ 변수를 $0$으로 수렴시키면 아래의 방정식이 표현된다.
    >
    > $$
    > \lim_{s\rightarrow 0}{\int^{\infty}_{0^-}{f'(t)e^{-st}dt}} = \int^{\infty}_{0^-}{f'(t)dt}
    > $$
    >
    > $$ 
    > \quad = f(\infty) - f(0) = \lim_{s\rightarrow 0}{\left[ sF(s) - f(0) \right]}
    > $$
    >
    > $$
    > \qquad \therefore f(\infty) = \lim_{s\rightarrow 0}{sF(s)}
    > $$

## 라플라스 변환표
> *참조: [위키백과 - 라플라스 변환 목록](https://en.wikipedia.org/wiki/List_of_Laplace_transforms)*

아래는 라플라스 변환에서 흔히 사용되는 단일변수 함수의 시간 영역과 복소주파수 영역간의 변화표를 제공한다. 또한 해당 변환표로 복소주파수 영역에서 시간 영역으로 되돌아가는 라플라스 역변환에서도 사용된다.

| 함수 | 시간 $t$-영역: $f(t)$  | 복소주파수 $s$-영역: $F(s)$  |
|:--:|:----------:|:------------:|
| [단위 임펄스](https://en.wikipedia.org/wiki/Dirac_delta_function) | $\delta(t)$ | $1$ |
| [단위 계단 함수](https://en.wikipedia.org/wiki/Heaviside_step_function) | $u(t)$ | $\displaystyle \frac{1}{s}$ |
| 지수 함수 | $t^n \cdot u(t)$ | $\displaystyle \frac{n!}{s^{n+1}}$ |
| [지수적 감쇠](https://en.wikipedia.org/wiki/Exponential_decay) | $e^{-at} \cdot u(t)$ | $\displaystyle \frac{1}{s+a}$ |
| [사인 함수](https://en.wikipedia.org/wiki/Sine) | $\sin{(\omega t)}\cdot u(t)$ | $\displaystyle \frac{\omega}{s^2+\omega^2}$ |
| [코사인 함수](https://en.wikipedia.org/wiki/Cosine) | $\cos{(\omega t)}\cdot u(t)$ | $\displaystyle \frac{s}{s^2+\omega^2}$ |
| 사인 함수<br/>+ 지수적 감쇠 | $e^{-at}\sin{(\omega t)}\cdot u(t)$ | $\displaystyle \frac{\omega}{(s+a)^2+\omega^2}$ |
| 코사인 함수<br/>+ 지수적 감쇠 | $e^{-at}\cos{(\omega t)}\cdot u(t)$ | $\displaystyle \frac{s+a}{(s+a)^2+\omega^2}$ |

### 부분분수전개
[부분분수전개](https://en.wikipedia.org/wiki/Partial_fraction_decomposition)(partial fraction expansion)는 복합적인 분수를 여러 간단한 분수들의 합으로 풀어쓰는 기법이다. 라플라스 변환표를 보면 알 수 있듯이 수많은 $s$-영역 함수들은 분수 형태를 띄고 있다. 이를 다시 $t$-영역으로 역변환시키기 위해서는 최소한 라플라스 성질 및 변환표를 활용할 수 있는 형태로 되돌려야 한다.

1. 서로 다른 극점
    
    $$
    F(s) = \frac{N(s)}{(s-\alpha)(s-\beta)} = \frac{A}{s-\alpha} + \frac{B}{s-\beta}
    $$

    함수 $F(s)$가 위의 형태를 가질 시, 해당 방정식에서 분자 $A$와 $B$는 아래 계산식으로 구한다.

    $$
    \begin{cases}
    A = \left.(s-\alpha)F(s) \right|_{s=\alpha}
    \\
    B = \left.(s-\beta)F(s) \right|_{s=\beta}
    \end{cases}
    $$

1. 중극 (multiple poles)
    
    $$
    F(s) = \frac{N(s)}{(s-\alpha)^n} = \frac{A_n}{(s-\alpha)^n} + \frac{A_{n-1}}{(s-\alpha)^{n-1}} + \cdots + \frac{A_1}{(s-\alpha)}
    $$

    함수 $F(s)$가 위의 형태를 가질 시, 해당 방정식에서 분자 $A_n$ ~ $A_1$은 아래 계산식으로 구한다. 

    $$
    A_{n-k} = \frac{1}{(n-k-1)!}\frac{d^k}{ds^k} \left[ (s-\alpha)^nF(s) \right]_{s=\alpha} \quad ... \mathrm{where} \ k = 0, \ 1, \ 2, \ \cdots, \ n-1
    $$

# 응용
본 장은 [미분방정식 예시](/docs/ko.Differential#미분방정식-응용)를 라플라스 변환으로 풀이하는 절차를 살펴본다. 또한 고전역학을 벗어나 전기회로라는 전혀 다른 분야에서는 어떻게 적용되는지 보여준다. 단, 미분방정식이 아닌 *예제 1. 평형상태 (1)*과 *예제 2. 평형상태 (2)*는 다루지 않으며 미분방정식 수립 과정은 동일하다.

## 고전역학

### 예제 3. 자유진동
미분방정식 문서에 의해 자유진동에 대한 미분방정식은 다음과 같다:

$$
my''(t) + ky(t) = 0
$$

$$
\quad \Rightarrow \mathcal{L}\left\{ my''(t) + ky(t) \right\} = m\bigl( s^2Y(s) - sy(0) - y'(0) \bigr) + kY(s) = 0 \quad ... \mathrm{since} \ \mathcal{L}\left\{ 0 \right\} = 0
$$

방정식의 좌변과 우변을 각각 $Y(s)$에 대한 식과 그렇지 아니한 식으로 나눈다.

$$
Y(s) \left(s^2 + \frac{k}{m}\right)= y(0)s + y'(0)
$$

$$
\quad \Rightarrow Y(s) = \frac{y(0)s + y'(0)}{s^2 + \frac{k}{m}} = \frac{c_1}{s-j\sqrt{\frac{k}{m}}} + \frac{c_2}{s+j\sqrt{\frac{k}{m}}}
$$

이를 다시 역변환시키면 시간 영역에서는 다음 방정식이 도출된다.

$$
\qquad \therefore \mathcal{L}^{-1}\left\{ Y(s) \right\} = y(t) = c_1e^{+j\omega t} + c_2e^{-j\omega t} \quad ...\mathrm{where} \ \omega = \sqrt{\frac{k}{m}}
$$

이는 미분방정식의 일반해와 동일한 결과이며, 만일 초기값 $y(0)$ 및 $y'(0)$가 주어지면 특수해를 구할 수 있게 된다.

### 예제 4. 감쇠자유진동
미분방정식 문서에 의해 감쇠자유진동에 대한 미분방정식은 다음과 같다:

$$
my''(t) + cy'(t) + ky(t) = 0
$$

$$
\quad \Rightarrow \mathcal{L}\left\{ my''(t) + cy'(t) + ky(t) \right\} = m\bigl( s^2Y(s) - sy(0) - y'(0) \bigr) + c\bigl( sY(s) - y(0) \bigr) + kY(s) = 0
$$

방정식의 좌변과 우변을 각각 $Y(s)$에 대한 식과 그렇지 아니한 식으로 나눈다.

$$
Y(s) \left(s^2 + \frac{c}{m}s + \frac{k}{m}\right)= y(0)s + y'(0) + \frac{c}{m}y(0)
$$

$$
\quad \Rightarrow Y(s) = \frac{y(0)s + y'(0) + \frac{c}{m}y(0)}{s^2 + \frac{c}{m}s + \frac{k}{m}} = \frac{c_1}{s - \left( \frac{-c}{2m} + j\sqrt{\frac{4km-c^2}{4m^2}} \right)} + \frac{c_2}{s - \left( \frac{-c}{2m} - j\sqrt{\frac{4km-c^2}{4m^2}} \right)}
$$

이를 다시 역변환시키면 시간 영역에서는 다음 방정식이 도출된다.

$$
\qquad \therefore \mathcal{L}^{-1}\left\{ Y(s) \right\} = y(t) = c_1e^{\left( \sigma+j\omega \right) t} + c_2e^{\left( \sigma-j\omega \right) t} \quad ...\mathrm{where} \ \sigma = \frac{-c}{2m}, \ \omega = \sqrt{\frac{4km-c^2}{4m^2}}
$$

이는 미분방정식의 일반해와 동일한 결과이며, 만일 초기값 $y(0)$ 및 $y'(0)$가 주어지면 특수해를 구할 수 있게 된다.

### 예제 5. 감쇠강제진동
미분방정식 문서에 의해 감쇠강제진동에 대한 미분방정식은 다음과 같다:

$$
my''(t) + cy'(t) + ky(t) = F_0\cos{\omega t}
$$

$$
\quad \Rightarrow \mathcal{L}\left\{ my''(t) + cy'(t) + ky(t) \right\} = m\bigl( s^2Y(s) - sy(0) - y'(0) \bigr) + c\bigl( sY(s) - y(0) \bigr) + kY(s) = F_0\frac{s}{s^2+\omega^2}
$$

방정식의 좌변과 우변을 각각 $Y(s)$에 대한 식과 그렇지 아니한 식으로 나눈다.

$$
Y(s) \left(s^2 + \frac{c}{m}s + \frac{k}{m}\right)= y(0)s + y'(0) + \frac{c}{m}y(0) + F_0\frac{s}{s^2+\omega^2}
$$

$$
\quad \Rightarrow Y(s) = \frac{ \left(y(0)s + y'(0) + \frac{c}{m}y(0)\right)\left(s^2 + \omega^2\right) + F_0s}{\left(s^2 + \frac{c}{m}s + \frac{k}{m}\right)\left( s^2 + \omega^2 \right)}
$$

## 전기회로

### 예제 7. RLC 회로
아래의 그림은 [저항](https://en.wikipedia.org/wiki/Resistor)(resistor; $R$)과 [인덕터](https://en.wikipedia.org/wiki/Inductor)(inductor; $L$) 그리고 [커패시터](https://en.wikipedia.org/wiki/Capacitor)(capacitor; $C$) 소자로 이루어진 회로이다.

![RLC 회로](/images/docs/engineering/laplace_circuit_rlc.png)

[키르히호프의 전기회로 법칙](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws)에 의하면 전원으로부터 생성된 전압(voltage)은 각 소자에로부터 소모된 전압들의 합과 동일하다. 여기서 각 소자들의 소모전압은 다음과 같이 계산된다.

1. 저항: 전기의 흐름, 일명 전류(current)를 방해하는 소자

    $$
    V_R = Ri(t)
    $$

2. 인덕터: 전류의 변화를 방해하는 소자

    $$
    V_L = L\frac{di}{dt}
    $$

3. 커패시터: 전기를 충전하는 소자

    $$
    V_C = \frac{1}{C}\int{idt}
    $$

4. 독립전압원: 전압으로 전기를 생성하는 소자

    $$
    V_{\mathrm{in}}(t) = E\cos{\omega t} \cong \mathrm{Re} \left\{ E\cos{\omega t} + jE\sin{\omega t} \right\} = Ee^{j\omega t}
    $$

이를 모두 종합하면 다음 키르히호프 방정식이 세워진다.

$$
V_{\mathrm{in}}(t) = Ri(t) + L\frac{di(t)}{dt} + \frac{1}{C}\int{i(t)dt}
$$

$$
\quad \Rightarrow Li''(t) + Ri'(t) + \frac{1}{C}i(t) = j\omega Ee^{j\omega t}
$$

$$
\quad \Rightarrow \mathcal{L}\left\{ Li''(t) + Ri'(t) + \frac{1}{C}i(t) \right\} = L\bigl( s^2I(s) - si(0) - i'(0) \bigr) + R\bigl( sI(s) - i(0) \bigr) + \frac{1}{C}I(s) = \frac{j\omega E}{s-j\omega}
$$

방정식의 좌변과 우변을 각각 $I(s)$에 대한 식과 그렇지 아니한 식으로 나눈다.

$$
I(s) \left(s^2 + \frac{R}{L}s + \frac{1}{LC}\right)= i(0)s + i'(0) + \frac{R}{L}i(0) + \frac{j\omega E}{s-j\omega}
$$
