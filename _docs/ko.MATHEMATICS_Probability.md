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

위에서 설명한 "주사위 던지기"처럼, 도출 가능한 결과들을 알고 있으나 어떠한 결과가 나올지 예측할 수 없는 실험을 *무작위 실험(random experiment)*이라 부른다. 그리고 무작위 실험을 수행하는 것을 시행(trial)이라고 한다.

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

조건부 확률은 매우 유용한 정보를 제공하나 제한적이기도 하다. 이러한 경우에는 베이즈 정리로부터 조건부 확률을 역으로 유도하는 것도 하나의 방법이다.

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
[분할](https://ko.wikipedia.org/wiki/집합의_분할)(partition)은 표본공간 $\Omega$을 상호 배타적 사건들로 나눈 집합을 가리킨다.

$$
\Omega = \bigcup^{n}_{k=0}A_k \mathrm{, \ while \ } A_k \cap A_{\neg k} = \empty 
$$
