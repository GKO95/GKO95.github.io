---
layout: docs
category: 공업수학
title: 확률론
slug: ko.Probability
order: null
---
# 개요
[확률론](https://ko.wikipedia.org/wiki/확률론)(probability theory)은 [확률](https://ko.wikipedia.org/wiki/확률)(probability), 즉 사건이 발생하거나 명제가 참일 가능성을 수학적으로 접근하여 설명하는 학문이다. 이공계열에서는 확률을 통해 수집된 데이터를 분석하고 응용하는 수단으로 활용되지만 필연적이지 않다. 그러나 전자공학과의 [통신공학](https://ko.wikipedia.org/wiki/통신공학)이나 인공지능의 [기계학습](https://ko.wikipedia.org/wiki/기계_학습) 등의 일부 분야에서는 가장 핵심되는 수학이다.

## 용어집
#### [실험](https://en.wikipedia.org/wiki/Experiment_(probability_theory)) (experiment)
무한히 반복하여 수행할 수 있으면서 명확한 결과를 도출하는 행위이다.

> 주사위를 던지는 행위로부터 눈이 1, 2, 3, 4, 5, 혹은 6이 나오는 여섯 가지의 명확한 결과가 도출될 수 있으며 무한히 반복하여 수행할 수 있다.

위에서 설명한 "주사위 던지기"처럼, 도출 가능한 결과들을 알고 있으나 어떠한 결과가 나올지 예측할 수 없는 실험을 *확률 실험(random experiment)*이라 부른다. 그리고 확률 실험을 수행하는 것을 시행(trial)이라고 한다.

#### [결과](https://en.wikipedia.org/wiki/Outcome_(probability)) (outcome)
실험 혹은 시행을 통해 나온 결과이다.

> 주사위를 던지는 실험에서 눈이 1, 2, 3, 4, 5, 혹은 6이 나오는 결과가 존재한다.

#### [표본공간](https://ko.wikipedia.org/wiki/표본_공간) (sample space)
실험 혹은 시행을 통해 나올 수 있는 모든 결과들을 집합체이다.

> 주사위 던지기 실험의 표본공간 $\Omega$는 $\lbrace 1, 2, 3, 4, 5, 6 \rbrace$이다.

#### [사건](https://en.wikipedia.org/wiki/Event_(probability_theory)) (event)
실험 혹은 시행을 통해 나올 수 있는 결과들의 집합체이며, 표본공간의 하위집합체이기도 한다.

> 주사위 던지기 실험에서 눈이 숫자 3 이상일 사건 $A = \lbrace 3, 4, 5, 6\rbrace$ 또는 홀수일 사건 $B = \lbrace 1, 3, 5 \rbrace$ 등을 고려할 수 있다.

# 확률
[확률](https://ko.wikipedia.org/wiki/확률)(probability)은 사건이 발생할 가능성으로 확률론에서 가장 기초적인 내용이다. 사건이 발생할 확률은 0 (불가능) ~ 1 (무조건) 사이의 소수로 표현된다. 주사위 던지기를 시행할 때, 숫자 3 이상의 눈이 나오는 사건 $A = \lbrace 3, 4, 5, 6 \rbrace$의 확률 $P(A)$는 다음과 같다.

$$
P(A) = \frac{\left| A \right|}{\left| \Omega \right|} = \frac{\mathsf{number \ of \ elements \ in \ the \ event \ } \lbrace 3, 4, 5, 6\rbrace}{\mathsf{number \ of \ elements \ in \ the \ sample \ space \ }\lbrace 1, 2, 3, 4, 5, 6 \rbrace} = \frac{4}{6} = \frac{2}{3}
$$

### 상호 배타적
[상호 배타적](https://en.wikipedia.org/wiki/Mutual_exclusivity)(mutually exclusive), 혹은 서로소(disjoint) 사건은 한 번의 시행에서 절대 동시에 발생할 수 없는 두 사건을 일컫는다. 주사위 던지기에서 홀수가 나올 사건 $A$와 짝수가 나올 사건 $B$가 동시에 발생할 수 없으므로 상호 배타적이다. 동시에 발생할 수 없는 성질을 수학적으로 표현하면 다음과 같다.

$$
P(A \cap B) = 0
$$

만일 두 사건이 상호 베타적이면 아래의 확률 계산이 가능하다.

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) = P(A) + P(B)
$$

### 독립
[독립](https://ko.wikipedia.org/wiki/독립_(확률론))(independence)이란, 한 번의 시행에서 발생한 사건이 다음 시행의 사건 발생 확률에 영향을 주지 않는 관계를 일컫는다. 주사위 던지기의 첫 번째 시행에서 홀수가 나올 사건 $A$가 발생하였을 시, 두 번째 시행에서 짝수가 나올 사건 $B$의 확률은 변함이 없으므로 두 사건은 독립이다. 독립 사건은 아래의 필요충분조건을 만족한다.

$$
P(A \cap B) = P(A)P(B)
$$

일반적으로 독립이 아닐 때는 실험이 이전 시행의 결과를 요하는 경우로, 첫 번째와 두 번째의 주사위 던지기 시행의 결과 합을 물어보는 사건 등이 있다.

> 상호 배타적(mutually exclusive) 사건과 독립(indepedent) 사건은 얼핏 유사하지만 전혀 다른 개념이다
> * 배타적 사건
>     : *한 번의 시행에서 발생할 수 있는 사건들의 관계를 설명한다.*
> * 독립적 사건
>     : *시행 간 발생하는 사건들의 관계를 설명한다.*

## 조건부 확률
[조건부 확률](https://ko.wikipedia.org/wiki/조건부_확률)(conditional probability)은 사건 $B$가 우선 발생하였을 때, 사건 $A$가 다음으로 발생할 확률을 의미한다.

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

$P(A \cap B)$는 [결합 확률](https://ko.wikipedia.org/wiki/결합분포)(joint probability)로 사건 $A$와 사건 $B$가 동시에 발생할 확률을 의미한다. 조건부 확률은 매우 유용한 정보를 제공하나 제한적이기도 하다. 이러한 경우에는 베이즈 정리로부터 조건부 확률을 역으로 유도하는 것도 하나의 방법이다.

만일 독립 사건일 경우, $P(A \vert B) = P(A)$가 되므로 이전 사건 $B$의 확률로부터 의존하지 않는 것을 재차 확인할 수 있다.

### 베이즈 정리
[베이즈 정리](https://ko.wikipedia.org/wiki/베이즈_정리)(Bayes' theorem)는 사건과 관련된 조건에 대한 사전 지식을 기반으로 확률을 설명한다.

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$

> 베이즈 정리의 증명은 조건부 확률로부터 비롯된다.
> 
> $$
> P(A|B) = \frac{P(A \cap B)}{P(B)} \mathrm{, \ if \ } P(B) \neq 0
> $$
>
> $$
> P(B|A) = \frac{P(A \cap B)}{P(A)} \mathrm{, \ if \ } P(A) \neq 0 
> $$
>
> 여기서 두 번째 방정식으로부터 $P(B \vert A)P(A) = P(A \cap B)$로 수식을 정리한 다음, 이를 첫 번째 방정식에 치환한다.
>
> $$
> \quad \therefore P(A|B) = \frac{P(B|A)P(A)}{P(B)} \mathrm{, \ if \ } P(B) \neq 0
> $$

## 분할
[분할](https://ko.wikipedia.org/wiki/집합의_분할)(partition)은 표본공간 $\Omega$을 상호 배타적 사건들로 나눈 집합을 가리킨다. 단, 결과가 없는 사건 $\empty$은 분할에서 제외된다. 상호 배타적 사건들을 모두 합하면 표본공간이 되므로 다음 방정식이 세워진다.

$$
\Omega = \bigcup^{n}_{k=1}A_k \mathrm{, \ while \ } A_k \cap A_{\neg k} = \empty 
$$

여기서 $A_{\neg k}$란, $A_{k}$가 아닌 사건을 가리킨다.

> 표본공간 $\Omega = \lbrace 1, 2, 3 \rbrace$은 총 다섯 가지의 분할을 갖는다.
>
> 1. $\lbrace \lbrace 1 \rbrace , \lbrace 2 \rbrace , \lbrace 3 \rbrace \rbrace$
>
> 2. $\lbrace \lbrace 1 , 2 \rbrace , \lbrace 3 \rbrace \rbrace$
>
> 3. $\lbrace \lbrace 1 , 3 \rbrace , \lbrace 2 \rbrace \rbrace$
>
> 4. $\lbrace \lbrace 2 , 3 \rbrace , \lbrace 1 \rbrace \rbrace$
>
> 5. $\lbrace \lbrace 1, 2 , 3 \rbrace \rbrace$

### 전체 확률의 법칙
[전체 확률의 법칙](https://ko.wikipedia.org/wiki/전체_확률의_법칙)(law of total probability) 혹은 전활률 정리는 표본공간 $\Omega$ 분할의 각 사건 $\lbrace B_k : k = 1, 2, 3, ... , n \rbrace$으로부터 사건 $A$가 발생할 확률을 모두 합하면, 동일한 표본공간에서 순전히 사건 $A$가 발생할 확률과 같다. 이는 사실상 당연한 게 분할을 전부 합하면 표본공간이 되기 때문이다.

$$
P(A) = \sum_{k=0}^{n}P(A \cap B_k) = \sum_{k=0}^{n}P(A \vert B_k)P(B_k)
$$

$$
\quad \because \bigcup_{k = 0}^{n}A \cap B_k = A \cap \left[ \bigcup_{k = 0}^{n} B_k \right] = A \cap \Omega = A
$$

## 마르코프 연쇄
사건 $A_1$이 발생한 다음에 사건 $A_2$가 연속으로 발생할 확률은 조건부 확률을 통해 다음과 같이 구해진다.

$$
P(A_2 \vert A_1)P(A_1) 
$$

$$
\quad = P(A_2 \cap A_1)
$$

조건부 확률 $P(A_2 \vert A_1)$은 $A_1$ 사건이 일어났다는 가정 하에 $A_2$ 사건의 발생 확률만을 의미한다. 조건부 확률에서 $A_1$ 사건이 발생한 확률이 고려되지 않았기에 $P(A_1)$를 추가로 곱하였다. 마찬가지 방법으로 $A_3$ 사건이 연속으로 발생할 확률은 다음과 같이 구해진다.

$$
P(A_3 \vert A_2 \cap A_1)P(A_2 \cap A_1) = P(A_3 \vert A_2 \cap A_1)P(A_2 \vert A_1)P(A_1)
$$

$$
\quad = P(A_3 \cap A_2 \cap A_1)
$$

그러므로 $A_n$까지 일련의 사건이 연속적으로 발생할 확률은 다음과 같다.

$$
P\left( \bigcap_{k=1}^{n}A_k \right) = P(A_n \cap A_{n-1} \cap ... \cap A_3 \cap A_2 \cap A_1)
$$

$$
\quad = P(A_n \vert \cap_{k=1}^{n-1}A_k) P(A_{n-1} \vert \cap_{k=1}^{n-2}A_k) \cdots  P(A_3 \vert A_2 \cap A_1)P(A_2 \vert A_1)P(A_1)
$$

여기서 [마르코프 연쇄](https://ko.wikipedia.org/wiki/마르코프_연쇄)(Markov chain)는 $A_k$가 오로지 $A_{k-1}$에만 영향을 받으므로, 그 외의 나머지 사건들은 독립이기 때문에 정리하면 아래의 방정식이 구해진다.

$$
\quad \therefore P\left( \bigcap_{k=1}^{n}A_k \right) = P(A_n \vert A_{n-1}) P(A_{n-1} \vert A_{n-2}) \cdots  P(A_3 \vert A_2)P(A_2 \vert A_1)P(A_1)
$$

> 다음은 사건 $A$가 발생하는 조건부 확률을 나열한다.
>
> $$
> \left\{\begin{array}{ll}
>
> \displaystyle P(A_{\mathrm{curr}} \vert A_{\mathrm{prev}}) = 0.5
>
> \\ \\
>
> \displaystyle P(\bar{A}_{\mathrm{curr}} \vert A_{\mathrm{prev}}) = 0.5
>
> \end{array}\right.
> $$
>
> $$
> \left\{\begin{array}{ll}
>
> \displaystyle P(A_{\mathrm{curr}} \vert \bar{A}_{\mathrm{prev}}) = 0.3
>
> \\ \\
>
> \displaystyle P(\bar{A}_{\mathrm{curr}} \vert \bar{A}_{\mathrm{prev}}) = 0.7
>
> \end{array}\right.
> $$
>
> 그러면 사건 $A_{\mathrm{curr}}$가 발생할 확률은 아래와 같다.
>
> $$
> P(A_{\mathrm{curr}}) = P(A_{\mathrm{curr}} \vert A_{\mathrm{prev}})P(A_{\mathrm{prev}}) + P(A_{\mathrm{curr}} \vert \bar{A}_{\mathrm{prev}})P(\bar{A}_{\mathrm{prev}})
> $$
>
> $$
> \quad = 0.5P(A_{\mathrm{prev}}) + 0.3P(\bar{A}_{\mathrm{prev}})
> $$
>
> 시스템이 정상 상태(steady state), 즉 $\textstyle \lim_{t \rightarrow \infty}$로 인해 초기값의 영향이 미미해지므로 $A_{\mathrm{curr}}$ 및 $A_{\mathrm{prev}}$은 동일한 사건으로 간주할 수 있다.
>
> $$
> P(A) = 0.5P(A) + 0.3P(\bar A)
> $$ 
>
> $$
> \quad \therefore P(A) = 0.375 \ , \quad P(\bar A) = 1 - P(A) = 0.625
> $$

## 베르누이 시행
[베르누이 시행](https://ko.wikipedia.org/wiki/베르누이_시행)(Bernoulli trial), 일명 이항 시행(binomial trial)은 오로지 두 개의 결과, "성공" 및 "실패"만을 갖는 독립적 확률 실험이다. 각 시행마다 결과가 발생하는 확률은 동일하며, 결과는 {참, 거짓} 또는 {예, 아니오} 형식이여도 상관없다.

$$
\left\{\begin{array}{ll}

\displaystyle P(A) = p

\\ \\

\displaystyle P(\bar A) = 1 - p = q

\end{array}\right.
$$

$n$ 번의 확률 실험에서 결과 $A$가 $k$ 번 발생하였으면 다음 수식이 설립된다.

$$
P(k) = {n \choose k}p^kq^{n-k}
$$

너무나 당연한 게 결과 $A$가 발생한 실험 개수만큼 확률 $p$를 곱하고, 발생하지 않은 실험만큼 확률 $q$를 곱해주는 행위이다.

### 순열
[순열](https://ko.wikipedia.org/wiki/순열)(permutation)은 $n$ 개의 원소를 갖는 집합에서 $k$ 개를 순서대로 선택하는 경우의 수이다.

$$
P(n,k) = \frac{n!}{(n-k)!}
$$

> 집합 $\lbrace 1, 2, 3\rbrace$은 총 세 개의 원소를 갖고 있으며, 두 원소에 대한 순열은 다음과 같다.
>
> $$
> P(3,2) = \frac{3!}{(3-2)!} = \frac{3 \times 2 \times 1}{1} = 6
> $$
>
> $$
> \quad \because \mathsf{Number \ of \ permutation: \ } \lbrace 1, 2 \rbrace , \lbrace 2, 1 \rbrace , \lbrace 1, 3 \rbrace , \lbrace 3, 1 \rbrace , \lbrace 2, 3 \rbrace , \lbrace 3, 2 \rbrace
> $$

### 조합
[조합](https://ko.wikipedia.org/wiki/조합)(combination)은 $n$ 개의 원소를 갖는 집합에서 $k$ 개를 순서와 무관하게 선택하는 경우의 수이다.

$$
{n \choose k} = \frac{P(n,k)}{k!} = \frac{n!}{(n-k)!k!}
$$

흔히 한 줄만 차지하는 $C(n,k)$ 표시를 사용하기도 한다.

> 집합 $\lbrace 1, 2, 3\rbrace$은 총 세 개의 원소를 갖고 있으며, 두 원소에 대한 조합은 다음과 같다.
>
> $$
> {3 \choose 2} = \frac{3!}{(3-2)!2!} = \frac{3 \times 2 \times 1}{(1) (2 \times 1)} = 3
> $$
>
> $$
> \quad \because \mathsf{Number \ of \ combination: \ } \lbrace 1, 2 \rbrace , \lbrace 1, 3 \rbrace , \lbrace 2, 3 \rbrace
> $$    

# 변수
[확률변수](https://ko.wikipedia.org/wiki/확률_변수)(random variable, stochastic variable; RV)는 확률 실험에서 발생한 사건을 수치적 값으로 표현하는 함수이다. 확률 분포를 이해하기 위해서 반드시 알아야 하는 중요한 개념이지만, 처음으로 접하면 확률변수의 정의 및 의의에 대한 의문점이 생기기 마련이다. 이러한 궁금증을 해소하기 위해 간단한 예시를 들어본다:

동전 던지기를 시행하면 결과가 앞면(Head; $H$) 혹은 뒷면(Tail; $T$)이 나온다. 이러한 시행을 두 번 하는 확률 실험에서는 총 네 가지의 결과가 나오는 다음과 같은 표본공간이 도출된다.

$$
\Omega = \lbrace HH, HT, TH, TT \rbrace
$$

이번 확률 실험의 목적이 앞면 $H$가 나온 횟수를 측정하는 것이라면 위의 표본공간은 아래와 같이 [분할](#분할)된다.

$$
\mathsf{Partition:} \ \lbrace A , B , C \rbrace
$$

$$
\quad ...\mathrm{where} \
\left\{\begin{array}{ll}

A = \lbrace TT \rbrace && \mathsf{Heads:} \ 0

\\ \\

B = \lbrace TH, HT \rbrace && \mathsf{Heads:} \ 1

\\ \\

C = \lbrace HH \rbrace && \mathsf{Heads:} \ 2

\end{array}\right.
$$

확률변수 $X$는 분할된 상호 배타적 사건 $A$, $B$, $C$ 대신에 각 사건에서 앞면이 나오는 횟수로 대체한다.

$$
\quad \Rightarrow X \in \lbrace 0, 1, 2 \rbrace
$$

여기서 사건을 입력받아 그에 대응하는 수치적 값을 반환하는 것이 마치 함수 $y=f(x)$와 같아 확률변수 $X$는 사실상 함수이다. 그렇지만 현 예제의 경우에는 $\lbrace 0, 1, 2 \rbrace$ 중에서 확률적으로 값을 갖는 게 일반적인 변수 $x$와 같은 형태를 지니기 떄문에 "확률변수"라고 칭한다. 이러한 이유로 확률변수 $X$를 흔히 변수로 취급하여 $x$로 표기한다.

$$
\qquad \therefore X = x \in \lbrace 0, 1, 2 \rbrace
$$

본 장에서는 확률변수에 대한 설명을 중점으로 다루므로 혼란을 줄이기 위해, 확률변수를 $X$라 하고 확률변수가 갖는 값을 $x$라 표기한다. 

## 확률밀도함수
[확률밀도함수](https://ko.wikipedia.org/wiki/확률_밀도_함수)(probability density function; PDF) $f_X(x)$는 확률변수 $X$에서 사건이 발생할 상대적 가능성(relative likelihood)을 가리킨다. 여기서 가능성이란, 절대로 확률(probability) $P(x)$를 언급하는 것이 아니며 단순히 특정 결과가 나머지에 비해 얼마나 빈번히 발생할지 상대적 수치로 표현한 것이다. 그러므로 확률밀도함수는 $f_X(x) > 1$인 경우가 존재할 수 있으며, 이는 확률 $P(x)$에서는 절대로 나타날 수가 없다. 

확률변수 $X$의 PDF에서 확률은 적분 면적으로부터 구해지며, 무한범위에서 적분을 취하면 100% 확률이 된다.

$$
\Pr [a \le X \le b] = \int_a^b f_X(x) \, dx
$$

$$
\quad \therefore \int_{-\infty}^{\infty}f_X(x) \, dx = 1
$$

위의 식에 의하면 $a = b$인 경우에는 $0$으로 계산되는데, 이는 하나의 결과에 대한 확률을 구할 수 없음을 의미한다. 단, 이산확률변수(discrete random variable)에서는 각 결과에 대한 PDF가 [디랙 델타 함수](https://ko.wikipedia.org/wiki/디랙_델타_함수)(Dirac delta function) $\delta(x)$로 나타나기 때문에 한 결과에 대한 확률이 $P(x)$로 계산되는 특수한 경우이다. 자세한 내용은 [확률변수 유형](#확률변수-유형)을 참고하도록 한다.

본 장에서 소개한 동전 던지기를 두 번 시행하여 앞면이 나오는 횟수를 세는 확률 실험은 *이산확률변수*이므로 다음과 같은 PDF가 나온다.

$$
\left\{\begin{array}{lll}

\displaystyle \int_{-0.5}^{0.5} f_X(x=0) \, dx && = P(x=0) && = \displaystyle \frac{1}{4}

\\ \\

\displaystyle \int_{0.5}^{1.5} f_X(x=1) \, dx && = P(x=1) && = \displaystyle \frac{1}{2}

\\ \\

\displaystyle \int_{1.5}^{2.5} f_X(x=2) \, dx && = P(x=2) && = \displaystyle \frac{1}{4}

\end{array}\right.
$$

## 누적분포함수
[누적분포함수](https://ko.wikipedia.org/wiki/누적_분포_함수)(cumulative distribution function; CDF) $F_X(x)$는 확률변수 $X$가 수치 $x$까지 도달하는데 누적된 확률이 얼마인지 의미한다.

$$
F_X(x) = P(X \leq x)
$$

만일 $a$에서부터 $b$까지의 범위에서 누적된 확률을 구하려면 다음 수식이 완성된다. 여기서 $a < b$이면 CDF는 반드시 0 이상의 값이 나온다. 음의 확률이란 것은 존재하지 않으므로 CDF는 절대 감소하지 않는 함수이기 때문이다.

$$
P(a < X \leq b) = F_X(b) - F_X(a) > 0 \quad ... \mathrm{if} \ a < b
$$

본 장에서 소개한 동전 던지기를 두 번 시행하여 앞면이 나오는 횟수를 세는 확률 실험에서는 다음과 같은 CDF가 나온다.

$$
\left\{\begin{array}{lllll}

\displaystyle F_X(x=0) && = \displaystyle \frac{1}{4} && = P(0)

\\ \\

\displaystyle F_X(x=1) && = \displaystyle \frac{3}{4} && = P(0) + P(1)

\\ \\

\displaystyle F_X(x=2) && = \displaystyle 1 && = P(0) + P(1) + P(2)

\end{array}\right.
$$

### PDF & CDF 관계식
아래는 PDF에서 CDF, 혹은 CDF에서 PDF를 구하는 방법이다:
* PDF → CDF

    $$
    F_X(a) = \int_{-\infty}^{a}f_X(x) \, dx
    $$

* CDF → PDF

    $$
    f_X(a) = \left. \frac{d}{dx}F_X(x)\right|_{x=a}
    $$

## 확률변수 유형
확률변수 $X$의 값 $x$가 어떻게 분포되어 있는지에 따라 세 가지 유형으로 나뉘어진다.

![연속확률변수(左) 및 이산확률변수(右)<sub><i>출처: <a href="https://abaqus-docs.mit.edu/2017/English/SIMACAEMODRefMap/simamod-c-probdensityfunc.htm">Abaqus documentation - MIT</a></i></sub>](/images/docs/probability/probability_continuous_discrete.png)

1. 연속확률변수 (continuous RV)
    
    확률변수의 분포가 연속적이어서 값 $x$의 개수가 무한하다. 여기서 "연속"은 절대 확률변수$X$의 값 $x$가 갖는 확률분포 $f_X(x)$가 연속적인 그래프를 그려서가 아니다. 연속확률분포의 가장 대표적인 특징으로 한 점에 대한 확률을 표기할 수가 없다. 

    $$
    P(X = b) = P(b^{-} < X \leq b^{+}) = F_X(b^+) - F_X(b^-)
    $$

    $$
    \quad \therefore P(X = b) = 0 \quad ... \mathrm{if} \ F_X(x) \ \mathrm{is \ continuous \ at} \ b
    $$

2. 이산확률변수 (discrete RV)
    
    일명 [확률질량함수](https://ko.wikipedia.org/wiki/확률_질량_함수)(probability mass function; PMF)라고도 부르며 확률변수의 분포가 $x_k \in \lbrace 1, 2, 3, ... \rbrace$처럼 이산적이어서 값 $x$의 개수가 유한하다. 연속확률변수와 달리 한 점에 대한 확률을 표기할 수 있다.

    $$
    P(X = b) = P(a < X \leq b) = F_X(b) - F_X(a)
    $$

    $$
    \quad \therefore P(X = b) = P(b) \quad ... \mathrm{if} \ F_X(x_k) \ \mathrm{is \ discrete \ at} \ b \ \mathrm{and} \ x_k \in \lbrace a, b, ... \rbrace
    $$
    
    이산확률변수의 PDF 및 CDF는 각각 [디랙 델타 함수](https://ko.wikipedia.org/wiki/디랙_델타_함수)와 [계단 함수](https://ko.wikipedia.org/wiki/계단_함수)로 구성된다.

    $$
    \left\{\begin{array}{llll}

    \mathsf{PDF:} && f_X(x_k) = \displaystyle \sum_{n}P(x_k)u(x-x_k)

    \\ \\

    \mathsf{CDF:} && F_X(x_k) = \displaystyle \sum_{n}P(x_k)\delta(x-x_k)

    \end{array}\right.
    $$

3. 혼합확률변수 (mixed RV)

    연속과 이산이 혼합된 확률변수이다.

# 기대
[기댓값](https://ko.wikipedia.org/wiki/기댓값)(expected value) $\mu_X$, 일명 기대치(expectation)는 하나의 확률 실험으로부터 발생할 것으로 기대(혹은 예측)되는 결과로써 확률변수 $X$의 [가중평균](https://ko.wikipedia.org/wiki/가중_산술_평균)(weighted average)으로 계산된다. 비록 가장 일반적인 [산술평균](https://ko.wikipedia.org/wiki/산술_평균)이 아니지만 확률변수에서는 기댓값을 평균(mean; average)이라고도 칭한다. 

동전 던지기를 시행하면 결과가 앞면(Head; $H$) 혹은 뒷면(Tail; $T$)이 나온다. 이러한 시행을 두 번 하는 확률 실험에서 앞면 $H$가 나올 확률변수 $X$는 다음과 같은 결과를 갖는다:

$$
X = x \in \lbrace 0, 1, 2 \rbrace
$$

$$
\quad ...\mathrm{where} \
\left\{\begin{array}{ll}

\displaystyle P(x=0) && = \displaystyle \frac{1}{4}

\\ \\

\displaystyle P(x=1) && = \displaystyle \frac{1}{2}

\\ \\

\displaystyle P(x=2) && = \displaystyle \frac{1}{4}

\end{array}\right.
$$

기댓값은 일반적으로 [선형성](https://ko.wikipedia.org/wiki/선형성)을 지닌 기대연산자(expectation operator) $\operatorname{E}$를 사용하여 구하며 아래의 수식을 갖는다.

$$
\mu_X = \operatorname{E}[X] =

\left\{ 
\begin{array}{ll}

\displaystyle \int_{-\infty}^{\infty}xf_X(x)\,dx & \quad \mathsf{Continuous \ RV}

\\

\\

\displaystyle \sum_k x_kP(x_k) & \quad \mathsf{Discrete \ RV}

\end{array}
\right.
$$

그러므로 이산확률변수인 $X$의 기댓값은 다음과 같이 계산된다.

$$
\quad \Rightarrow \mu_X = 0 \left( \frac{1}{4} \right) + 1 \left( \frac{1}{2} \right) + 2 \left( \frac{1}{4} \right) = 1
$$

## 분산
[분산](https://ko.wikipedia.org/wiki/분산)(variance) $\sigma_X^2$은 확률변수 $X$가 기댓값 $\mu_X$로부터 얼마나 넓게 퍼져있는지를 나타내는 수치이다. 이는 확률변수 $X$의 값들이 기댓값 $\mu_X$로부터 얼마나 멀리 떨어져있는지를 제곱시켜 평균화시킨 것으로부터 얻어진다.

> 분산에서 제곱은 두 가지의 목적을 갖는다:
>
> 1. 분산을 $\sigma_X^2 \ge 0$으로 만든다. 만일 확률변수 $X$에서 $x < \mu_X$의 경우가 발생할 시, 확률변수의 값과 평균 간의 거리는 음의 값을 갖게 된다. 물론 [절댓값](https://ko.wikipedia.org/wiki/절댓값)(absolute value)을 사용할 수도 있겠지만 두 번째 이유를 살펴보아야 한다.
>
> 2. 확률변수의 퍼짐 정도를 절댓값보다 더 정확하게 나타낸다. 만일 동일한 $P(x) = 1/4$ 확률을 갖는 실험 결과들이 평균으로부터의 거리가 $\lbrace 4, 4, 4, 4 \rbrace$인 경우와 더 넓게 퍼진 $\lbrace 7, 1, 2, 6 \rbrace$인 경우가 있다고 가정한다: 절댓값만을 활용하면 모두 $4$로 계산되어 퍼짐 정도가 동일하다가 도출하지만, 제곱으로 계산하면 각각 $16$과 $22.5$로 계산되어 확실히 후자가 더 넓게 퍼져있다는 것을 알 수 있다. 제곱을 취하므로써 멀리있는 데이터를 수치적으로 더 멀게, 그리고 가까운 데이터를 수치적으로 더 가깝게 만들기에 구별이 가능한 것이다.

아래와 같은 수식으로 표현된다.

$$
\textstyle \operatorname{Var}[X] =  \operatorname{E}[(X-\mu_X)^2] = \operatorname{E}\left[ X^2 - 2 \mu_X X + \mu_X^2 \right]
$$

$$
\textstyle \quad = \operatorname{E}[ X^2 ] + \operatorname{E}[-2\mu_X X] + \mu_X^2 \quad \left( \because \mathrm{Linearity} \right)
$$

$$
\textstyle \quad = \operatorname{E}[ X^2 ] - 2\mu_X\operatorname{E}[X] + \mu_X^2
$$

기댓값 $\mu_X$는 상수이기 때문에 선형연산자 $\operatorname{E}$ 밖으로 나올 수 있으며, 또한 $\operatorname{E}[X] = \mu_X$이므로 아래의 식으로 정리된다.

$$
\textstyle \qquad \therefore \sigma_X^2 = \operatorname{E}[X^2] - \mu_X^2
$$

그러므로 이산확률변수인 $X$의 분산은 다음과 같이 계산된다.

$$
\quad \Rightarrow \sigma_X^2 = \left[ 0^2 \left( \frac{1}{4} \right) + 1^2 \left( \frac{1}{2} \right) + 2^2 \left( \frac{1}{4} \right) \right] - 1^2 = 0.5
$$

### 표준편차
[표준편차](https://ko.wikipedia.org/wiki/표준_편차)(standard deviation) $\sigma_X$는 분산의 제곱근이지만, 의미하는 바는 동일하다: 평균으로부터 얼마나 넓게 퍼져있는지 정도를 나타내는 수치이다. 그러므로 확률변수 퍼짐은 분산이나 표준편차로도 확인할 수 있다. 분산은 수학적 계산에서 유용하며, 표준편차는 기댓값과 동일한 차원을 갖으므로 데이터 분포 분석에 흔히 사용된다.

### 정규화
[정규화](https://en.wikipedia.org/wiki/Normalization_(statistics))(normalization)란 확률변수의 분포를 평균 $\mu_X = 0$, 표준편차 $\sigma_X = 1$, 그리고 최댓값 ${f_X(x)}_{\mathrm{Max}} = 1$로 조정하는 작업이다. 정규화를 하므로써 확률변수의 분포를 무차원(dimensionless)으로 만들고 공통된 평면 위에서 표현될 수 있도록 한다.
