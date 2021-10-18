---
layout: docs
language: ko
category: 미적분학
title: 미분방정식
meta: Differential
order: 0xE0
---
# 미분방정식: 개요
> 본 내용은 고등학교 교육과정 중 하나인 [미분](https://en.wikipedia.org/wiki/Derivative) 및 [적분](https://en.wikipedia.org/wiki/Integral), 그리고 [복소수](https://en.wikipedia.org/wiki/Complex_number)를 기반하므로 이에 대해 충분한 이해가 필요하다.

[미분방정식](https://en.wikipedia.org/wiki/Differential_equation)(differential equation)은 한 개 이상의 함수들 간 연관성을 나타내는 방정식이다. 하나의 함수가 나머지에 어떠한 영향을 주는지 연관성을 관측하는데, 이러한 변화는 수학적으로 미분이 동원되기 때문에 "미분"방정식이라 부른다. 연관성은 곧 시스템 내에서 발생하는 인과현상을 설명하기 때문에, 결과적으로 미분방정식은 시스템에서의 *현상을 수식으로 표현한 것*이라고 해석할 수 있다.

## 미분방정식 종류
미분방정식은 도함수에 따라 두 분류로 나뉘어진다.

* *[상미분방정식](https://ko.wikipedia.org/wiki/상미분방정식) (ordinary differential equation; ODE)*
    : 하나의 독립변수($x$)에만 의존하는 종속변수($y$)를 갖는 미분방정식이다.
      
    $$
    \frac{d^2y}{dx^2} + 2xy\frac{dy}{dx} + 3y = 0 \quad ...\mathrm{where} \ y = f(x)
    $$

* *[편미분방정식](https://ko.wikipedia.org/wiki/편미분방정식) (partial differential equation; PDE)*
    : 두 개 이상의 독립변수($x$, $y$)에 의존하는 종속변수($u$)로부터 하나의 독립변수에 대해서만 미분한 "[편미분](https://ko.wikipedia.org/wiki/편미분)(partial derivative)"이 관여된 미분방정식이다.
  
    $$
    \frac{du}{dx} + 4\frac{d^2u}{dxdy} + 5x\frac{du}{dy} = 0 \quad ...\mathrm{where} \ u = f(x, y)
    $$

혹은, 독립변수 개수와 무관하게 선형성에 의해서도 두 분류로 나뉘어진다.

* *선형미분방정식 (linear differential equation)*
    : 최고계(즉, 미분 횟수가 가장 많은 도함수)의 멱지수가 1차이며, 도함수의 계수가 상수 혹은 독립변수를 가지는 미분방정식이다.
      
    $$
    \frac{d^2u}{dx^2} + 6\frac{d^2u}{dxdy} + 8x\frac{du}{dy} = 0 \quad ...\mathrm{where} \ u = f(x, y)
    $$

* *비선형미분방정식 (non-linear differential equation; PDE)*
    : 선형미분방정식이 아닌 나머지 미분방정식을 가리킨다. 아래는 최고계의 멱지수가 2차이므로 선형이 아니다.
  
    $$
    \left( \frac{d^2u}{dx^2} \right)^2 + 6\frac{d^2u}{dxdy} + 8x\frac{du}{dy} = 0 \quad ...\mathrm{where} \ u = f(x, y)
    $$

## 미분방정식 해
미분방정식의 풀이 목적은 관측 현상이 어떻게 발생되는지 설명하는 해(solution)를 구하는 것이다. 미분방정식의 해는 도함수가 없으며, 삼각함수 $\sin$와 $\cos$의 조합이나 [오일러 법칙](https://en.wikipedia.org/wiki/Euler%27s_formula)에 의해 지수함수 $e^{j\alpha}$ 형태를 지닌다.

미분방정식에는 두 종류의 해가 존재한다.

* *일반해 (general solution)*
    : 미분방정식의 현상을 설명하는 가장 일반적이고 포괄적인 해이다.
  
    $$
    y = ce^{\kappa t}
    $$

* *특수해 (particular solution)*
    : 미분방정식의 현상 중에서 주어진 (초기)조건에서만 만족하는 해이다.

    $$
    y(0) = 2 \ \rightarrow y = 2e^{\kappa t} \quad (\because c=2)
    $$

# 미분방정식: 완전미분방정식
[완전미분방정식](https://ko.wikipedia.org/wiki/완전_미분_방정식)(exact differential equation)은 종속변수($u=f(x,y)$)가 의존하는 모든 독립변수의 편미분을 합한 [전미분](https://ko.wikipedia.org/wiki/전미분)(total derivative)이 완전한 형태를 갖는 미분방정식이다. 

$$
du = M(x,y)dx + N(x, y)dy = 0 \quad ... \mathrm{where} \ M(x,y) = \frac{\partial{u}}{\partial{x}} , \ N(x,y) = \frac{\partial{u}}{\partial{y}}
$$    

여기서 "[완전](https://en.wikipedia.org/wiki/Exact_differential)(exact)"한 미분방정식은 다음 필요충분조건을 반드시 만족해야 한다.

$$
\frac{\partial{M}}{\partial{y}} = \frac{\partial{N}}{\partial{x}} \ \left ( = \frac{\partial{u}}{\partial{x}\partial{y}} \right )
$$

이를 충족시키지 못하면 완전미분방정식이 아니다.

### 예제. 완전미분방정식
다음과 같은 미분방정식이 주어졌다:

$$
(x^3 + xy^2)dx + (x^2y+y^3)dy = 0
$$

위의 방정식이 완전미분방정식인지 확인하기 위해 필요충분조건 충족 여부를 살펴본다.

$$
\begin{cases}
\begin{align}

\frac{\partial{M}}{\partial{y}} = \frac{\partial{(x^3+xy^2)}}{\partial{y}} = 2xy

\\

\frac{\partial{N}}{\partial{x}} = \frac{\partial{(x^2y+y^3)}}{\partial{x}} = 2xy

\end{align}
\end{cases}
$$

두 식의 결과가 동일하므로 필요충분조건으로 인해 본 미분방정식은 완전미분방정식임을 확인하였다. $M(x,y)$와 $N(x,y)$가 $x$ 그리고 $y$ 독립변수의 편미분이므로, 각각에 대하여 $x$와 $y$에 대한 적분을 치한다.

$$
\begin{cases}

u = \int{M(x,y)dx} = \frac{1}{4}x^4 + \frac{1}{2}x^2y^2 + c_x

\\

u = \int{N(x,y)dy} = \frac{1}{2}x^2y^2 + \frac{1}{4}y^4 + c_y

\end{cases}
$$

여기서 $c_x$는 상수 및 순수 $y$에 수식, 그리고 $c_y$는 상수 및 순수 $x$에 대한 수식이다. 그러므로 두 방정식을 하나로 통합하면 다음과 같이 일반해를 구할 수 있다.

$$
u(x,y) = \frac{1}{4}x^4 + \frac{1}{2}x^2y^2 + \frac{1}{4}y^4 + c = 0
$$

$$
\qquad \therefore x^4 + 2x^2y^2 + y^4 + c = 0
$$

단, 뒤에 있는 $c$는 적분으로 인해 알 수 없는 상수이다. 계수를 정수로 만들기 위해 양변에 4를 곱하여도 $4c$라고 표기하지 않은 이유는 상수의 값을 처음부터 모르고 있으므로 계수를 붙여도 별 의미가 없기 때문이다. 알 수 없는 상수의 값을 찾아내려면 초기조건이 필요로 하다; 즉, 이를 구하는 이후부터 특수해가 된다.

## 적분인자
적분인자(integrating factor)는 완전하지 않은 미분방정식을 완전미분방정식으로 만들어 준다. 만일 비완전미분방정식 $P(x,y)dx + Q(x,y)dy = 0$이 있다면, 적분인자 $\mu (x,y)$를 양변에 곱하여 다음과 같이 완전미분방정식으로 표현한다.

$$
\mu Pdx + \mu Qdy = 0
$$

위의 방정식이 완전미분방정식임을 증명해야 하므로 필요충분조건을 확인한다.

$$
\frac{\partial}{\partial{y}}\left ( \mu P \right ) = \frac{\partial}{\partial{x}}\left ( \mu Q \right ) 
$$

양변에 편미분을 취하면 다음 방정식이 도출된다.

$$
P\frac{\partial{\mu}}{\partial{y}} + \mu\frac{\partial{P}}{\partial{y}} = Q\frac{\partial{\mu}}{\partial{x}} + \mu\frac{\partial{Q}}{\partial{x}}
$$

$$
\qquad \therefore P\frac{\partial{\mu}}{\partial{y}} - Q\frac{\partial{\mu}}{\partial{x}} + \mu \left ( \frac{\partial{P}}{\partial{y}} - \frac{\partial{Q}}{\partial{x}} \right ) = 0
$$

그러나 적분인자 $\mu$가 정말로 $x$와 $y$ 독립변수 모두에 의존하는지, 아니면 하나의 독립변수에만 의존하는지 정확하게 알 수 없다. 그러므로 여기서부터 적분인자에 대한 가정이 필요하며, 본 내용에서는 (1) 독립변수 $x$만으로 구성된 경우와 (2) 독립변수 $y$만으로 구성된 경우를 살펴본다.

1. 만일 독립변수 $x$만으로 구성된 경우...

    $$
    -Q\frac{\partial{\mu}}{\partial{x}} + \mu \left ( \frac{\partial{P}}{\partial{y}} - \frac{\partial{Q}}{\partial{x}} \right ) = 0
    $$

    $$
    \quad \Rightarrow \frac{1}{\mu} \partial{\mu} = \frac{1}{Q}\left ( \frac{\partial{P}}{\partial{y}} -\frac{\partial{Q}}{\partial{x}} \right ) \partial{x} = R(x)\partial{x}
    $$

    $$
    \quad \Rightarrow \ln{\mu} = \int{R(x)dx}
    $$

    $$
    \qquad \therefore \mu (x) = e^{\int{R(x)dx}} \quad ... \mathrm{where} \ R(x) = \frac{1}{Q}\left ( \frac{\partial{P}}{\partial{y}} -\frac{\partial{Q}}{\partial{x}} \right )
    $$

    적분인자가 $x$에만 종속된다고 가정한 경우, 이에 대한 수식 또한 독립변수 $x$만을 가지는 것을 확인할 수 있다.

2. 만일 독립변수 $y$만으로 구성된 경우, 위와 동일한 풀이 절차에 의하여 다음과 같은 식이 나온다.

    $$
    \qquad \therefore \mu (y) = e^{\int{R(y)dy}} \quad ... \mathrm{where} \ R(y) = \frac{1}{P}\left ( \frac{\partial{Q}}{\partial{x}} -\frac{\partial{P}}{\partial{y}} \right )
    $$

    적분인자가 $y$에만 종속된다고 가정한 경우, 이에 대한 수식 또한 독립변수 $y$만을 가지는 것을 확인할 수 있다.  

위의 두 적분인자 가정을 두어 풀이한 과정을 통해서 알 수 있듯이, 어떠한 가정을 사용하여도 결국 선정한 가정을 기반으로 적절한 수식이 도출되기 떄문에 하나만을 선택하여 풀이를 진행해도 된다. 

> 단, 풀이 과정 및 적분인자의 수식에서 어떠한 가정을 기반하였는지 분명히 명시해야 한다; 타 가정에서는 풀이 과정과 수식이 전혀 달라지기 때문이다!

# 미분방정식: 선형미분방정식
선형미분방정식(linear differential equation)은 가장 흔한 형태의 미분방정식으로 다음과 같이 표현된다.

$$
y^{(n)} + p_{(n-1)}(x)y^{(n-1)} + \cdots + p_{1}(x)y' + p_{0}(x)y = r(x)
$$

여기서 $r(x)$의 값에 따라 동차와 비동차미분방정식으로 구분된다.

* *동차 (homgeneous)*
    : $r(x) = 0$

* *비동차 (nonhomogeneous)*
    : $r(x) \neq 0$

동차 및 비동차는 미분방정식이 설명하는 시스템 현상에 외부 영향력의 유입 여부를 가리킨다. 간단한 예시로 공을 떨어트렸을 때 튀는 현상은 동차미분방정식, 그리고 튀어오른 공을 손으로 튕겨 드리블을 하는 현상은 비동차미분방정식으로 표현된다. 이는 차후 예제에서 미분방정식을 세우는 풀이 과정에서 직접 살펴볼 수 있다.

## 선형계
[선형계](https://en.wikipedia.org/wiki/Linear_system)(linear system)는 사칙연산 및 미적분과 같은 [선형 연산자](https://en.wikipedia.org/wiki/Linear_map)를 기반으로 구축된 수학적 모델 체계이다. 선형계는 반드시 중첩 원리를 충족하기 때문에 선형미분방정식 또한 중첩 원리가 적용된다.

### 중첩 원리
[중첩 원리](https://en.wikipedia.org/wiki/Superposition_principle)(superposition principle)란, 두 개 이상의 입력으로 발생한 응답이 각 입력으로 발생한 응답의 합과 동일하다. 중첩 원리를 충족하는 함수를 선형함수(linear function)라 부르며, 이는 반대로 모든 선형함수는 중첩 원리가 성립됨을 의미한다. 중첩 원리는 다음 두 가지 핵심 성질로부터 정의된다.

* *[가법성](https://ko.wikipedia.org/wiki/가법성) (additivity)*
    
    $$
    F(x_1 + x_2) = F(x_1) + F(x_2)
    $$

* *[동차성](https://ko.wikipedia.org/wiki/동차함수) (homogeneity)*
    
    $$
    F(ax) = aF(x)
    $$

> 즉, 미분방정식이 가지는 두 해($y_1$, $y_2$)의 합 또한 해당 미분방정식의 해가 되기 때문에 아래의 성질을 만족한다.
> 
> $$
> y = c_1y_1(x) + c_2y_2(x)
> $$

## 일계선형미분방정식
일계선형미분방정식(1st order of linear differential equation)은 일계도함수가 최고계인 가장 간단한 형태의 선형미분방정식이다.

$$
y' + p(x)y = q(x)
$$

### 동차미분방정식
일계선형동차미분방정식은 변수분리 미분방정식(separable differential equation)의 풀이 접근법을 그대로 사용하여 해를 구할 수 있다.

$$
y' + p(x)y = 0
$$

$$
\quad \Rightarrow 
\frac{1}{y}dy = -p(x)dx
$$

$$
\quad \Rightarrow 
\ln{y} = -\int{p(x)dx} + c_1
$$

$$
\quad \Rightarrow 
y = e^{-\int{p(x)dx} + c_1} = e^{-\int{p(x)dx}} \times e^{c_1}
$$

그러므로 해당 미분방정식은 다음과 같은 일반해를 가진다.

$$
\qquad \therefore y(x) = ce^{-\int{p(x)dx}} \quad ... \mathrm{where} \ c = e^{c_1}
$$

### 비동차미분방정식
일계선형비동차미분방정식은 완전미분방정식의 풀이 접근법을 그대로 사용하여 해를 구할 수 있다.

$$
y' + p(x)y = q(x)
$$

그 전에 해당 미분방정식이 완전한지 확인하기 위해 완전미분방정식의 필요충분조건을 충족하는지 우선 살펴본다.

$$
P(x,y)dx + Q(x,y)dy 
$$

$$
\quad = \left \{ p(x)y - q(x) \right \} dx + \left \{ 1 \right \} dy = 0
$$

$$
\quad \Rightarrow \frac{\partial{\left \{ p(x)y - q(x) \right \}}}{\partial{y}} = \frac{\partial{1}}{\partial{x}}
$$

$$
\qquad \therefore p(x) = 0
$$

이를 통해 어떠한 일계선형비동차미분방정식이든 적분인자 없이 완전미분방정식이 되려면 $p(x)=0$만이 유일하다는 것을 알아볼 수 있다. 그렇지 아니하면 적분인자를 구할 수 밖에 없다. 적분인자 $\mu$가 독립변수 $x$에만 의존한다고 가정한다.

$$
R(x) = \frac{1}{Q}\left ( \frac{\partial{P}}{\partial{y}} -\frac{\partial{Q}}{\partial{x}} \right )
$$

$$
\quad = \frac{\partial}{\partial{y}} \biggl ( p(x)y - q(x) \biggr ) = p(x)
$$

$$
\qquad \therefore \mu (x) = e^{h} = e^{\int{R(x)dx}} = e^{\int{p(x)dx}}
$$

해당 적분인자로 완전미분방정식을 만들어 구한 일반해는 다음과 같다.

$$
y(x) = e^{-h} \left \{ \int{e^h q(x)dx + c} \right \} \quad ... \mathrm{where} \ h = \int{p(x)dx}
$$

> 위의 공식 이외에도, 아래의 중첩 원리로 비동차미분방정식의 일반해를 구할 수도 있다.
> 
> : *비동차미분방정식 일반해 ($y$) $=$ 동차미분방정식 일반해 ($y_{\mathrm{c}}$) $+$ 비동차미분방정식 특수해 ($y_{\mathrm{p}}$)*
>
> 아래는 해당 성질에 대한 증명이다:
>
> $$
> y' + p(x)y = q(x) 
> $$
> 
> $$
> \quad \Rightarrow (y_{\mathrm{c}} + y_{\mathrm{p}})' + p(x)(y_{\mathrm{c}} + y_{\mathrm> {p}})
> $$
> 
> $$
> \qquad = \{y_{\mathrm{c}}' + p(x)y_{\mathrm{c}}\} + \{y_{\mathrm{p}}' + p(x)y_{\mathrm> {p}}\}
> $$
> 
> $$
> \qquad = \{\mathsf{Homogeneous}\} + \{\mathsf{Nonhomogeneous}\}
> $$
> 
> $$
> \qquad = \{0\} + \{q(x)\}
> $$
> 
> $$
> \qquad = q(x)
> $$

### 미정계수법
미정계수법(method of undetermined coefficient)은 $q(x)$가 무엇이냐에 따라 비동차미분방정식 특수해를 가정한다. 미분방정식의 특수해가 대체적으로 일정 패턴에 부합하기 때문에 가정법으로 풀이가 가능한 것이다. 그리고 비동차미분방정식의 특수해와 동차미분방정식의 일반해를 통해 최종적으로 비동차미분방정식의 일반해를 구한다.

다음과 같은 일계선형비동차미분방정식을 예로 들어보자:

$$
y'+2y = e^{3x}
$$

1. 해당 미분방정식의 동차일반해는 $q(x)$가 위치한 우변을 $0$으로 설정하여 구할 수 있다.

    $$
    y_c'+2y_c = 0
    $$
    
    $$
    \quad \Rightarrow y_c = ce^{-2x}
    $$

2. 해당 미분방정식의 비동차특수해는 $q(x)$가 어떠한 형태를 띄는지에 따라 결정된다. 

    $$
    q(x) = e^{3x} \ \rightarrow \ y_p = \alpha e^{3x}
    $$

    비동차특수해를 미분방정식에 대입하여 $\alpha$ 값을 계산한다.

    $$
    y_p' + 2y_p = 3\alpha e^{3x} + 2\alpha e^{3x} = e^{3x}
    $$

    $$
    \quad \Rightarrow y_p = \frac{1}{5}e^{3x} \quad ... \mathrm{as} \ \alpha = \frac{1}{5}
    $$

위에서 구한 동차일반해와 비동차특수해의 합으로 비동차일반해를 구한다.

$$
\qquad \therefore y = y_c + y_p = \frac{1}{5}e^{3x} + ce^{-2x}
$$

### 매개변수변환법
매개변수변화법(variation of parameters)은 비동차미분방정식 특수해를 동차미분방정식의 일반해에 적분인자를 곱하여 구한다. 그리고 비동차미분방정식의 특수해와 동차미분방정식의 일반해를 통해 최종적으로 비동차미분방정식의 일반해를 구한다.

다음과 같은 일계선형비동차미분방정식을 예로 들어보자:

$$
y'+2y = e^{3x}
$$

1. 해당 미분방정식의 동차일반해는 $q(x)$가 위치한 우변을 $0$으로 설정하여 구할 수 있다.

    $$
    y_c'+2y_c = 0
    $$
    
    $$
    \quad \Rightarrow y_c = ce^{-2x}
    $$

2. 해당 미분방정식의 비동차특수해는 동차일반해에 적분인자를 곱한 $y_p = \mu (x) y_c$라고 가정한다.

    $$
    y_p = \mu (x) \bigl ( ce^{-2x} \bigr )
    $$
    
    $$
    \quad = \mu (x) \bigl ( e^{-2x} \bigr )
    $$

    $$
    \quad = \mu(x) y_1 \quad ... \mathrm{where} \ y_1 = e^{-2x}
    $$

    비동차특수해를 미분방정식에 대입하여 적분인자를 계산한다.

    $$
    y_p' + 2y_p = \mu'(x)y_1 + \mu(x)\bigl(y_1'+2y_1\bigr)
    $$

    $$
    \quad = \mu'(x)y_1 + \mu(x)\bigl(0\bigr)
    $$

    $$
    \quad = \mu'(x)y_1 = e^{3x}
    $$

    $$
    \quad \Rightarrow d \mu(x) = \frac{e^{3x}}{y_1}dx = e^{5x}dx
    $$

    $$
    \quad \Rightarrow \mu(x) = \int{e^{5x}dx} = \frac{1}{5}e^{5x}
    $$

    $$
    \qquad \therefore y_p = \frac{1}{5}e^{3x}
    $$

위에서 구한 동차일반해와 비동차특수해의 합으로 비동차일반해를 구한다.

$$
\qquad \therefore y = y_c + y_p = \frac{1}{5}e^{3x} + ce^{-2x}
$$

## 고계선형미분방정식
고계선형미분방정식(higher order of linear differential equation)은 $n$계도함수가 최고계인 선형미분방정식이다.

일계선형미분방정식이 계수 1로 하나의 해를 가지며, 마찬가지로 고계선형미분방정식은 계수 $n$만큼의 해를 갖는다. 그 이유는 $n$ 개의 초기조건 $y(a) = A$, $y'(b) = B$, ..., $y^{(n)}(c)=C$가 주어질 때 모두 충족할 수 있어야 하기 때문이다. 아래는 $n$계선형미분방정식의 일반해 형태이다.

$$
y = c_1y_1(x) + c_2y_2(x) + \cdots + c_ny_n(x)
$$

일반해를 구성하는 $y_1$, $y_2$, ..., $y_n$들은 기저해(fundamental solution)라고 부르며 서로 [선형독립](https://en.wikipedia.org/wiki/Linear_independence)이어야 한다. 간단히 말하자면, 각 기저해는 서로 다른 기저해를 표현하지 못해야 한다. 만일 $y_2 = ay_1$로 나타낼 수 있다면 $n$ 개보다 적은 해밖에 구할 수 없게 된다.

> 선형계의 기저해를 좌표계의 표준기저(standard basis)에 비교하면 쉽게 이해할 수 있다: [데카르트 좌표계](https://ko.wikipedia.org/wiki/데카르트_좌표계)의 $x$, $y$, 그리고 $z$ 축에 놓인 [단위벡터](https://ko.wikipedia.org/wiki/단위벡터) $\hat{\mathbf{i}}=(1,0,0)$, $\hat{\mathbf{j}}=(0,1,0)$, 그리고 $\hat{\mathbf{k}}=(0,0,1)$는 서로 수직 방향을 가리키기 때문에 절대 서로를 표현할 수 없는 선형독립이다. 그러나 반대로 표준기저들만 있으면 어떠한 좌표든 모두 표현이 가능하다.

### 론스키언
[론스키언](https://en.wikipedia.org/wiki/Wronskian)(Wronskian), 일명 론스키 행렬식(Wronski determinant)은 미분방정식의 기저해들 간의 선형독립이 이루어져 있는지를 판별하는 행렬식이다. 기저해들이 선형독립인 경우 론스키언은 다음을 만족한다.

$$
W(y_1, y_2) =
\begin{vmatrix}
y_1  & y_2  \\
y_1' & y_2' \\
\end{vmatrix}
=y_1y_2' - y_2y_1' \neq 0
$$

### 동차미분방정식
고계선형미분방정식 중에서 상수계수에 한하여, 미분방정식의 특성을 나타내는 특성방정식(characteristic equation)은 다음과 같이 유도된다.

$$
a_ny^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_{1}y' + a_{0}y = 0
$$

$$
\quad \Rightarrow a_n\lambda^{n} + a_{n-1}\lambda^{n-1} + \cdots + a_{1}\lambda + a_{0} = 0
$$

> 상수계수 일계선형미분방정식 $y' + ky = 0$은 아래의 일반해를 가진다.
> 
> $$
> y = c_0e^{-kx}
> $$
>
> 중첩 원리로 인해 상수계수 고계선형미분방정식은 위와 같은 일계선형미분방정식 해를 기저해로 갖는 일반해를 갖는다. 이러한 점을 이용하여 $y = e^{\lambda x}$ 형태의 기저해를 갖는다고 할 수 있다. 이를 미분방정식에 대입하면 다음 식이 유도된다.
>
> $$
> a_n(e^{\lambda x})^{(n)} + a_{n-1}(e^{\lambda x})^{(n-1)} + \cdots + a_{1}(e^{\lambda x})' + a_{0}(e^{\lambda x})
> $$
>
> $$
> \quad = e^{\lambda x} \bigl ( a_n\lambda^{n} + a_{n-1}\lambda^{n-1} + \cdots + a_1\lambda + a_0 \bigr ) = 0
> $$
>
> 함수 $y=e^{\lambda x}$는 지수성질로 인해 절대 $0$이 될 수 없으므로, 위의 수식이 참이 되기 위해서는 아래의 식을 만족해야 한다.
>
> $$
> \qquad \therefore a_n\lambda^{n} + a_{n-1}\lambda^{n-1} + \cdots + a_1\lambda + a_0 = 0
> $$

특성방정식은 일반 대수방정식의 형태를 띄고 있어 $\lambda$를 $n$차 방정식의 근을 구하는 접근법을 그대로 적용할 수 있다. 그러므로 (1) 서로 다른 실근, (2) 중근, 그리고 (3) 복소근을 가지는 경우에 대하여 논할 필요가 있다.

1. 서로 다른 실근
    
    특성방정식이 서로 다른 실근인 $\lambda_1$, $\lambda_2$, ..., $\lambda_n$을 가질 시, 해당 미분방정식의 기저해는 다음과 같다.

    $$
    \qquad \therefore y_1 = e^{\lambda_1x}, \ y_2 = e^{\lambda_2x}, \ \cdots, \ y_n = e^{\lambda_nx}
    $$

2. 중근
    
    특성방정식이 중근을 가질 시, $y_1 = y_2 = e^{\lambda_1x}$와 같은 기저해로 인해 선형독립을 충족하지 않는다. 이러한 문제를 방지하기 위해 적분인자를 곱한 $y_2 = \mu(x) y_1$로 기저해를 구별한다. 이를 미분방정식에 대입하면 다음 수식이 나온다.

    $$
    a_ny_2^{(n)} + a_{n-1}y_2^{(n-1)} + \cdots + a_{1}y_2' + a_{0}y_2 = 0
    $$

    $$
    \quad \Rightarrow \bigl ( a_ny_1 \bigr) \mu^{(n)}(x) = 0
    $$

    $$
    \qquad \therefore \mu(x) = k_nx^n + k_{n-1}x^{n-1} + \cdots + k_1x+k_0
    $$

    여기에서 가장 간단하면서 선형독립을 만족시키는 수식은 $k_1 = 1$ 그리고 나머지 $k_0 = k_2 = \cdots = k_n = 0$일 때, 즉 $\mu(x) = x$로 $y_2=xe^{\lambda_1x}$가 된다. 만일 중근이 두 개가 아닌 세 개일 경우에는 차수만 하나 늘린 $y_3 = \mu y_2 = \mu \bigl( \mu y_1 \bigr) = x^2e^{\lambda_1x}$가 된다.

3. 복소근
    
    특성방정식이 복소근 $\lambda_1 = \alpha+\beta i$와 $\lambda_2 = \alpha-\beta i$를 가질 시, 오일러 법칙에 의해 아래와 같이 표기될 수 있다.

    $$
    \qquad \therefore y = e^{(\alpha \pm \beta i)x} = e^\alpha(\cos{\beta x} \pm i\sin{\beta x})
    $$

### 비동차미분방정식
다음은 고계선형비동차미분방정식이다.

$$
y^{(n)} + p_{n-1}y^{(n-1)} + \cdots + p_{1}y' + p_{0}y = r(x)
$$

고계선형비동차미분방정식에서고 일계선형미분방정식에서 사용한 중첩 원리, 즉 선형미분동차방정식 일반해와 선형미분비동차방정식 특수해의 합으로 선형미분비동차방정식 일반해를 구할 수 있다.

> 위의 공식 이외에도, 아래의 접근법으    로 비동차미분방정식의 일반해를 구할 수도 있다.
> 
> : *비동차미분방정식 일반해 ($y$) $=$ 비동차미분방정식 일반해 혹은 특수해 ($y_{\mathrm{2}}$) $-$ 비동차미분방정식 일반해 혹은 특수해 ($y_{\mathrm{1}}$)*
>
> 아래는 해당 성질에 대한 증명이다:
>
> $$
> \begin{cases}
> y_1''+py_1'+qy_1 = r \\
> y_2''+py_2'+qy_2 = r
> \end{cases}
> $$
> 
> 여기서 $y = y_2 - y_1$를 미분방정식에 대입한다.
>
> $$
> (y_2 - y_1)''+p(y_2 - y_1)'+q(y_2 - y_1)
> $$
> 
> $$
> \quad = (y_2''+py_2'+qy_2) - (y_1''+py_1'+qy_1) = r - r = 0
> $$

### 계수축소법
고계선형미분방정식은 계수축소법(reduction of order)을 사용하여 해를 찾을 수 있다. 해당 미분방정식의 한 해를 알고 있을 시, 그 해와 선형독립인 또다른 해를 구하는 방법이다.

다음과 같은 선형동차미분방정식을 예로 들어보자:

$$
y''+p(x)y' q(x)y = 0
$$

그리고 해당 미분방정식을 만족하는 해 $y_1$을 알고 있다고 하면, 나머지 $y_2 = \mu(x)y_1$도 만족할 수 있도록 하는 적분인자를 구해야 한다. $y_2$를 미분방정식에 대입한다.

$$
y_2'' + p(x)y_2' + q(x)y_2
$$

$$
\quad = \bigl\{ y_1'' + p(x)y_1' + q(x)y_1 \bigr\}\mu(x) + \bigl\{ 2y_1' + p(x)y_1 \bigr\}\mu'(x) + y_1 \mu''(x)
$$

$$
\quad = \bigl\{ 2y_1' + p(x)y_1 \bigr\}\mu'(x) + y_1 \mu''(x) = 0 \quad ... \mathrm{where} \ y_1'' + p(x)y_1' + q(x)y_1 = 0
$$

여기서 $U(x) = \mu'(x)$로 계수를 한 단계 낮추어 치환하여 계산하기 때문에 "계수축소법"이라고 부른다.

$$
U'(x) + \left\{ 2\frac{y_1'}{y_1} + p(x) \right\}U(x) = 0
$$

이를 기반으로 미분방정식 풀이를 진행하면 결과적으로 다음 수식이 도출된다 ($c$와 $k$는 적분상수이다).

$$
\mu(x) = \int{c\left\{ (y^{-2}_1)e^{-\int{p(x)dx}}\right\}dx} + k
$$

$$
\quad \Rightarrow y_2 = \mu(x)y_1 = cy_1\int{\left\{ (y^{-2}_1)e^{-\int{p(x)dx}} \right\}dx} + ky_1
$$

그러나 $ky_1$으로 인해 기저해 $y_1$와 선형독립이 이루어지지 않기 때문에 $k=0$으로 설정한다.

$$
\qquad \therefore \mu(x) = \int{c\left\{ (y^{-2}_1)e^{-\int{p(x)dx}}\right\}dx}
$$

# 미분방정식: 응용
본 장은 미분방정식이 활용되는 대표적인 일부 예시 중에서도, 고등학교 물리학에서 배우는 [고전역학](https://en.wikipedia.org/wiki/Classical_mechanics) 내용을 바탕으로 한 아래의 간단한 몇 가지 예시를 통해 미분방정식 수립 방법을 다룬다.

### 예제 1. 평형상태 (1)
아래의 그림은 천장에 달린 용수철에 물체가 매달려 가만히 있는 그림이다.

![천장에 달린 용수철에 매달린 물체](/images/docs/engineering/differential_equilibrium1.png)

그 전에 위의 그림은 아래로 향하는 방향을 양($+$)의 방향으로 잡았으며, 반대로 위로 향하는 방향을 음($-$)의 방향으로 설정하였다. 이러한 기준 설정은 물리학 문제에서 부호 선정을 하는데 매우 중요한 역할을 하기 때문에 반드시 염두하여 풀이를 진행하도록 한다.

현재 용수철에 매달린 물체에 작용되는 힘에는 두 가지가 있다: 

1. 먼저 물체를 아래로 잡아당기는 중력이다. 중력에 의한 힘의 방정식은 $F=ma$에서 가속도 $a$를 중력가속도 $g$로 바뀌면 된다. 또한 해당 가속도는 아래로 향하기 때문에 양의 부호를 가지는 중력 가속도이다.
  
    $$
    F_g = +mg
    $$

2. 그 외에 또다른 힘은 용수철이 물체를 위로 잡아당기는 힘이다. 이는 [훅 법칙](https://en.wikipedia.org/wiki/Hooke%27s_law)에 의해 물체에 작용되는 힘이 아래와 같이 계산된다. 아래의 식에서 상수 $y_0$는 용수철이 늘어난 길이를 의미한다.

    $$
    F_k = -ky_0
    $$
      
    여기서 음의 부호가 붙은 이유는 외부에서 물체를 밀어내거나 잡아당기면, 용수철은 항상 그 반대로 물체를 잡아당기거나 밀어내기 때문이다.

현재 물체는 어떠한 움직이 없는 평형상태, 즉 물체에 가해진 힘들이 어느 한 쪽으로도 쏠리지 않고 평형을 이룬 상태이다. 그 말인 즉슨 물체에 가해진 $F_g$와 $F_k$는 서로를 상쇄하여 물체에는 결국 아무런 힘이 가해지지 않았음을 의미한다. 이를 수식으로 표현하면 다음과 같다:

$$
F_g + F_k = 0
$$

물리학에서는 뺼셈이란 존재하지 않는다; 다만 음수를 더하는 개념만이 유효하다. 마찬가지로 힘은 빼앗기지 않고 오로지 가해질 수만 있으나, 그 힘이 어느 방향으로 작용하는지에 따라 부호가 결정되는 것이다. 좌변은 "물체에 가해진 힘들"을 가리키고 우변은 "어느 한 쪽으로도 쏠리지 않고 평형을 이룬 상태"를 의미한다.

그리고 위에서 구한 $F_g=+mg$와 $F_k=-ky$을 대입하면 최종적으로 아래의 방정식이 완성된다.

$$
F_g + F_k = (+mg) + (-ky_0) = 0
$$

$$
\qquad \therefore mg - ky_0 = 0
$$

> 그럼 만일 위로 향하는 방향을 양의 방향으로 잡으면 어떻게 계산이 되는가?
>
> 물체를 잡아당기는 방향이 음의 방향이므로 $F_g=-mg$가 된다. 용수철의 반잔용 성질로 인해 음의 부호는 그대로 있으나, 오히려 늘어난 거리 $y_0$가 음의 상수가 되어버린 상황이 되었다. 이를 절대값을 통해 양의 상수로 표현하면 다음과 같이 나타난다.
> 
> $$
> F_k=-ky_0 = -k(- \left\lvert y_0 \right\rvert ) = k\left\lvert y_0 \right\rvert
> $$
>
> 결국 두 힘을 합하면 다음과 같이 나타난다.
>
> $$
> F_g + F_k = (-mg) + ( k\left\lvert y_0 \right\rvert) = - mg + k\left\lvert y_0 \right\rvert = 0
> $$
> 
> $$
> \qquad \therefore mg - ky_0 = 0 \ \ \ (\mathrm{when} \ y_0 > 0)
> $$
>
> 모든 힘의 부호들은 반대로 바뀌었으나, 전체적인 시스템에는 아무런 변화가 없다. 그러므로 부호 기준 설정은 편한대로 선정하되 도중에 바뀌어서는 절대 아니된다.

### 예제 2. 평형상태 (2)
아래의 그림은 천장에 달린 용수철에 평형상태에 있던 물체를 아래로 더 잡아당긴 그림이다. 이번 예시에서도 아래로 향하는 방향을 양($+$)의 방향으로 잡았으며, 반대로 위로 향하는 방향을 음($-$)의 방향으로 설정하였다.

![천장에 달린 용수철에 매달린 물체를 잡아당긴 모습](/images/docs/engineering/differential_equilibrium2.png)

용수철에 매달린 물체를 잡아당겼을 때 세 가지의 힘이 작용된다:

1. 먼저 물체를 아래로 잡아당기는 중력이다. 중력에 의한 힘의 방정식은 $F=ma$에서 가속도 $a$를 중력가속도 $g$로 바뀌면 된다. 또한 해당 가속도는 아래로 향하기 때문에 양의 부호를 가지는 중력 가속도이다.

    $$
    F_g = +mg
    $$

2. 두 번째 힘은 용수철이 물체를 위로 잡아당기는 힘이다. 이는 [훅 법칙](https://en.wikipedia.org/wiki/Hooke%27s_law)에 의해 물체에 작용되는 힘이 아래와 같이 계산된다. 아래의 식에서 상수 $y_0$는 물체의 중력만으로 늘어난 길이 그리고 변수 $y$는 잡아당겨서 더 늘어난 길이를 의미한다. 

    $$
    F_k = -k(y_0 + y)
    $$

    여기서 음의 부호가 붙은 이유는 외부에서 물체를 밀어내거나 잡아당기면, 용수철은 항상 그 반대로 물체를 잡아당기거나 밀어내기 때문이다. 그리고 $y_0$가 상수임에 비해 $y$가 변수인 이유는 얼마나 세게 당기느냐에 따라 더 늘어나거나 줄어들 수 있는 확정된 값이 아니기 때문이다.

3. 마지막 힘으로는 물체를 잡아당기는 외력이다. 외력의 정체는 알 수 없으나 물체에 가해지는 것은 확실하므로 편의상 $F_\mathrm{app}$이라 표시하였다.

비록 잡아당겼으나 현 위지에서 움직이지 않는 물체는 평형상태에 놓인다. 즉, 물체에 가해진 $F_g$와 $F_k$ 그리고 $F_\mathrm{app}$는 서로를 상쇄하여 물체에는 결국 아무런 힘이 가해지지 않았음을 의미한다. 이를 수식으로 표현하면 다음과 같다:

$$
F_g + F_k + F_\mathrm{app} = mg - ky_0 -ky + F_\mathrm{app} = 0
$$

한편, *예시 1. 평형상태 (1)*에서 $mg - ky_0 = 0$임을 확인하였다.

$$
(mg - ky_0) - ky + F_\mathrm{app} = 0 -ky + F_\mathrm{app} = 0
$$

$$
\qquad \therefore F_\mathrm{app} - ky = 0
$$

### 예제 3. 자유진동
아래의 그림은 *예시 2. 평형상태 (2)*의 연속으로, 용수철에 매달린 물체를 잡아당기다 놓은 그림이다. 이번 예시에서도 아래로 향하는 방향을 양($+$)의 방향으로 잡았으며, 반대로 위로 향하는 방향을 음($-$)의 방향으로 설정하였다.

![용수철에 매달려 자유진동하는 물체](/images/docs/engineering/differential_free_oscillation.png)

본 내용에서 방정식을 세울 때 아래의 규칙을 토대로 수립되고 있음을 명시해야 한다.

| 방정식 | 의의             | 예시                        |
|:--:|:--------------:|:--------------------------|
| 좌변 | 시스템에서 영향을 주는 힘들의 합 | 물체에 가해진 중력, 용수철 탄성력, 외력 등 |
| 우변 | 결과적으로 시스템에서 일어나고 있는 힘 | 물체의 평형 혹은 운동상태        |

물체를 잡아당겨 평형상태에 있을 때의 방정식은 다음과 같음을 이전 예시를 통해 확인하였다.

$$
F_\mathrm{app} - ky = 0
$$

> 좌변은 외부에서 시스템(즉, 용수철에 매달린 물체)에 영향을 주는 모든 힘들의 합이다. 그리고 우변은 순수히 물체만을 바라보았을 때 작용하고 있는 힘을 나타낸다; 그림에서 용수철 그림을 지우고 물체만을 바라보면 아무런 힘이 작용하지 않기 때문에 $0$ 값을 갖는다.

만일 잡아당긴 물체를 놓았을 경우, 좌변에는 외력 $F_\mathrm{app}$이 사라진다. 그리고 시스템만 바라본 시점에서 물체는 늘어난 용수철 길이에 의하여 $F_\mathrm{net} = ma = my''$만큼의 힘이 작용된다. 그러므로 이에 대한 방정식은 다음과 같이 표현된다.

$$
-ky = my''
$$

$$
\qquad \therefore my'' + ky = 0
$$

물체는 외부로부터 영향을 받지 않는 이상 이론적으로 영원히 자유진동(free oscillation) 운동을 한다. 본 미분방정식은 상수계수 이계선형동차미분방정식으로 특성방정식의 고유값 $\lambda$를 구한다.

$$
m\lambda^2 + k = 0
$$

$$
\quad \Rightarrow \lambda = \pm \sqrt{\frac{k}{m}}i
$$

그러므로 자유진동이 가지는 일반해는 다음과 같다.

$$
\qquad \therefore y = c_1e^{+i\omega} + c_2e^{-i\omega} \quad ... \mathrm{where} \ \omega = \sqrt{\frac{k}{m}}
$$

### 예제 4. 감쇠자유진동
아래의 그림은 천장에 달린 용수철과 감쇠기에 물체가 매달려 가만히 있는 그림이다. 이번 예시에서도 아래로 향하는 방향을 양($+$)의 방향으로 잡았으며, 반대로 위로 향하는 방향을 음($-$)의 방향으로 설정하였다.

![천장에 달린 용수철과 감쇠기에 매달린 물체](/images/docs/engineering/differential_damped_oscillation1.png)

우선 본 시스템에서 사용되는 감쇠기(damper)의 성질을 이해해야 한다: 일반적으로 감쇠기는 물체의 운동을 저항하는데, 그 움직임이 격할수록 더 크게 저항한다. 즉, 해당 감쇠기가 $c$라는 감쇠계수를 가진다면 이에 대한 방정식은 다음과 같이 세워진다.

$$
F_c = -cv = -cy'
$$

평형상태에서는 감쇠기가 부착되었다 하더라도, 움직이지 않는 물체는 속도가 없으므로 감쇠기의 영향을 받지 않는다. 그렇기 때문에 평형상태에서의 방정식은 *예시 1. 평형상태 (1)*와 동일하다.

$$
F_g + F_k = (+mg) + (-ky_0) = 0
$$

$$
\qquad \therefore mg - ky_0 = 0
$$

그러나 아래의 그림과 같이 자유운동이 시작되면 감쇠기의 영향으로 인해 방정식이 달라진다.

![용수철과 감쇠기에 매달려 자유진동하는 물체](/images/docs/engineering/differential_damped_oscillation2.png)

시스템에 영향을 주고 있는 외부 힘들은 (잡아당겨 놓은 힘을 제외하면) 총 세 가지가 있다:

1. 중력: 지구가 물체를 아래로 당기는 힘

    $$
    F_g = mg
    $$

2. 탄성력: 용수철이 가지는 반발하는 힘

    $$
    F_k = -k(y_0 + y)
    $$

3. 감쇠력: 감쇠기가 운동에 저항하는 힘

    $$
    F_c = -cy'
    $$

그리고 용수철에 매달린 물체의 운동 방정식은 *예시 3. 자유진동*과 동일하게 $F_\mathrm{net} = my''$이다. 아무리 감쇠기가 부착되었다 하더라도 물체가 $F = ma$라는 힘의 방정식에 따라 운동하고 있음은 변함이 없기 때문이다. 그러므로 이를 모두 종합하면 다음 방정식이 세워진다.

$$
F_g + F_c + F_k= mg - ky_0 - ky - cy' = my''
$$

$$
\qquad \therefore my'' + cy' + ky = 0
$$

본 미분방정식의 특성방정식으로부터 계산한 고유값 $\lambda$는 아래의 절차를 걸쳐 다음과 같이 계산된다.

$$
m\lambda^2 + c\lambda + k = 0
$$

$$
\quad \Rightarrow \lambda = \frac{-c}{2m} \pm \frac{\sqrt{c^2-4km}}{2m}
$$

여기서 $c^2-4km$의 값에 따라 실근, 중근, 혹은 복수근인지 결정되는데, 이들이 갖는 의미를 하나씩 살펴볼 필요가 있다.

* *과도감쇠 (overdamped)*:
    : 진동없이 서서히 평형상태로 진입한다.

    $$
    c^2-4km > 0
    $$

* *임계감쇠 (critically damped)*:
    : 진동상태와 비진동상태의 중간지점으로, 가장 빨리 평형상태로 되돌아간다.

    $$
    c^2-4km = 0
    $$

* *과소감쇠 (critically damped)*
    : 진동을 하면서 서서히 평형상태로 진입한다.

    $$
    c^2-4km < 0
    $$

### 예제 5. 감쇠강제진동
아래의 그림은 천장에 달린 용수철과 감쇠기에 메달려 자유진동하는 물체에 주기적인 외력을 가하는 그림이다. 이번 예시에서도 아래로 향하는 방향을 양($+$)의 방향으로 잡았으며, 반대로 위로 향하는 방향을 음($-$)의 방향으로 설정하였다.

![용수철과 감쇠기에 매달려 강제진동하는 물체](/images/docs/engineering/differential_forced_oscillation.png)

이전 *예시 4. 감쇠자유진동*으로부터 아래의 방정식까지 도출하였다.

$$
F_g + F_c + F_k = mg - ky_0 - ky - cy' = my''
$$

$$
\qquad \therefore my'' + cy' + ky = 0
$$

그러나 이번에는 물체를 강제로 진동시키는 외력이 주기적으로 가해지는 경우를 다룬다. 이때 가해지는 외력은 $F_0$의 크기를 가지며 $\cos{\omega t}$ 주기로 물체에 힘이 가해진다.

$$
r(t) = F_0\cos{\omega t} \ \ \ (\mathrm{where} \ \omega = 2\pi f)
$$

여기서 $\omega$는 각주파수(angular frequency)로 주파수 $f$에 $2\pi$를 곱한 값이다. 각주파수를 사용하는 이유는 삼각함수가 한 주기(또는 한 바퀴)를 도는데 $2\pi$만큼 걸리기 때문이다. $f = 2\pi = 6.28318...$라는 주파수는 계산하기 매우 불편하기 때문에 각주파수 $\omega$를 통해 주파수를 정수로 나타나는 것이다.

이렇게 시스템에 영향을 주고 있는 외부 힘들은 총 네 가지로 정리된다:

1. 중력: 지구가 물체를 아래로 당기는 힘

    $$
    F_g = mg
    $$

2. 탄성력: 용수철이 가지는 반발하는 힘

    $$
    F_k = -k(y_0 + y)
    $$

3. 감쇠력: 감쇠기가 운동에 저항하는 힘

    $$
    F_c = -cy'
    $$

4. 외력: 외부에서 강제로 주기적으로 가하는 힘

    $$
    r(t) = F_0\cos{\omega t}
    $$

그리고 용수철에 매달린 물체의 운동 방정식은 *예시 3. 자유진동* 및 *예시 4. 감쇠자유진동*과 동일하게 $F_\mathrm{net} = my''$이다. 아무리 감쇠기가 부착되었다 하더라도 물체가 $F = ma$라는 힘의 방정식에 따라 운동하고 있음은 변함이 없기 때문이다. 그러므로 이를 모두 종합하면 다음 방정식이 세워진다.

$$
F_g + F_c + F_k + r(t) = mg - ky_0 - ky - cy' + F_0\cos{\omega t} = my''
$$

$$
\qquad \therefore my'' + cy' + ky = F_0\cos{\omega t}
$$

본 미분방정식은 상수계수 이계선형비동차미분방정식으로, 일반해를 구하기 위해 우선 동차일반해와 비동차특수해를 알아본다. 동차일반해는 이전 *예제 4. 감쇠자유진동*을 참조한다. 비동차특수해를 구하는데 본 내용에서는 미정계수법을 사용한다.

$$
r(t) = F_0\cos{\omega t} \ \rightarrow \ y_p = a\cos{\omega t} + b\sin{\omega t}
$$

이를 미분방정식에 대입하고 론스키언의 선형독립 필요조건을 통해 특수해의 계수 $a$와 $b$를 알아낼 수 있다.

$$
\left[ (k-m\omega^2)a+\omega cb \right]\cos{\omega t} + \left[ -\omega ca + (k-m\omega^2)b \right] \sin{\omega t} = F_0\cos{\omega t}
$$

$$
\quad \Rightarrow
\begin{bmatrix}

k-m\omega^2 & \omega c \\
-\omega c & k-m\omega^2

\end{bmatrix}
\begin{bmatrix}
a \\
b
\end{bmatrix}
=
\begin{bmatrix}
F_0 \\
0
\end{bmatrix}
$$

여기서 고유진동수(natural frequency)가 $\omega_0 = \sqrt{\frac{k}{m}}$임을 고려하여, $k=m\omega^2_0$로 행렬식을 달리 표현할 수 있다. 결과적으로 론스키언을 통해 각 계수가 도출된다.

$$
\begin{cases}
\displaystyle a = F_0\frac{m(\omega_0^2 - \omega^2)}{m^2(\omega^2_0-\omega)^2+\omega^2c^2}
\\
\displaystyle b = F_0\frac{\omega c}{m^2(\omega^2_0-\omega)^2+\omega^2c^2}
\end{cases}
$$

$$
\qquad \therefore y_p = C(\omega)\cos{(\omega t + \eta)} \quad ... \mathrm{where} \ C(x) = \sqrt{a^2 + b^2}, \ \tan{\eta} = \frac{b}{a}
$$

### 예제 6. 비감쇠강제진동
이번 예제는 순수히 수학적으로 접근한다. 감쇠기의 영향이 없는 경우, 즉 감쇠계수 $c=0$일 떄를 살펴보는 것이다. 이전 예제에서 보여준 $a$와 $b$는 다음과 같이 변한다.

$$
\begin{cases}
\displaystyle a = \frac{F_0}{m\omega_0^2-\omega^2} = \frac{F_0}{k\left[ 1-(\omega/\omega_0)^2 \right]}
\\
\displaystyle b = 0
\end{cases}
$$

$$
\qquad \therefore y_p = \frac{F_0}{k\left[ 1-(\omega/\omega_0)^2 \right]} \cos{\omega t}
$$
