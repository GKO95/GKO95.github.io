---
layout: docs
language: ko
category: 공업수학
title: 확률론
meta: Probability
order: 0xE0
---
# 확률론: 개요
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

# 확률론: 확률
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
