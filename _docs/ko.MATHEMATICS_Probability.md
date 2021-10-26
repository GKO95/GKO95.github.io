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
#### [실험](https://en.wikipedia.org/wiki/Experiment_(probability_theory))(experiment)
무한히 반복하여 수행할 수 있으면서 명확한 결과를 도출하는 행위이다.

> 주사위를 던지는 행위로부터 눈이 1, 2, 3, 4, 5, 혹은 6이 나오는 여섯 가지의 명확한 결과가 도출될 수 있으며 무한히 반복하여 수행할 수 있다.

위에서 설명한 "주사위 던지기"처럼, 도출 가능한 결과들을 알고 있으나 어떠한 결과가 나올지 예측할 수 없는 실험을 *무작위 실험(random experiment)*이라 부른다. 그리고 무작위 실험을 수행하는 것을 시행(trial)이라고 한다.

#### [결과](https://en.wikipedia.org/wiki/Outcome_(probability))(outcome)
실험 혹은 시행을 통해 나온 결과이다.

> 주사위를 던지는 실험에서 눈이 1, 2, 3, 4, 5, 혹은 6이 나오는 결과가 존재한다.

#### [표본공간](https://ko.wikipedia.org/wiki/표본_공간)(sample space)
실험 혹은 시행을 통해 나올 수 있는 모든 결과들을 집합체이다.

> 주사위 던지기 실험의 표본공간 $\Omega$는 $\lbrace 1, 2, 3, 4, 5, 6 \rbrace$이다.

#### [사건](https://en.wikipedia.org/wiki/Event_(probability_theory))(event)
실험 혹은 시행을 통해 나올 수 있는 결과들의 집합체이며, 표본공간의 하위집합체이기도 한다.

> 주사위 던지기 실험에서 눈이 숫자 3 이상일 사건 $A = \lbrace 3, 4, 5, 6\rbrace$ 또는 홀수일 사건 $B = \lbrace 1, 3, 5 \rbrace$ 등을 고려할 수 있다.

이때부터 실험으로부터 사건이 발생할 확률(probability)이 다음 공식으로 계산된다.

$$
P(A) = \frac{\left| A \right|}{\left| \Omega \right|} = \frac{\lbrace 3, 4, 5, 6\rbrace}{\lbrace 1, 2, 3, 4, 5, 6 \rbrace} = \frac{4}{6} = \frac{2}{3}
$$

# 확률론: 확률
