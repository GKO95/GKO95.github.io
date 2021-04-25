---
layout: docs
language: ko
category: 프로그래밍
title: MATLAB
icon: icon-matlab.png
meta: MATLAB
order: 0x05
---
# MATLAB: 소개
[MATLAB](https://www.mathworks.com/products/matlab.html)은 MathWorks에서 개발한 프로그래밍 및 수치해석 환경을 제공하는 유로 소프트웨어로 선형 방정식 계산을 위한 행렬 프로그래밍이 시초이다. 행렬 계산 이외에도 함수 및 데이터 그래프 출력, 알고리즘 정의, 사용자 인터페이스는 기본이며 필요에 따라 각 분야를 위한 툴박스(toolbox)를 추가하여 더 많은 기능을 수행할 수 있다. 현재 소프트웨어는 매년 상반기와 하반기마다 새로 업데이트되는데 만일 2021년 상반기에 출시된 MATLAB이면 R2021a 출시 번호가 붙는다.

무료로 제공되는 [비주얼 스튜디오](https://ko.wikipedia.org/wiki/마이크로소프트_비주얼_스튜디오)나 [Xcode](https://ko.wikipedia.org/wiki/엑스코드) 프로그래밍 개발 소프트웨어와 달리, MATLAB은 유료 서비스 정책을 갖는다. 가격 정책은 12개월 구독형 혹은 소장용 가격 정책이 있는데, 후자의 경우 명년 출시 버전까지만 업데이트가 가능하다: R2021a 출시버전을 소장용으로 구매하였면 2022b까지는 MATLAB 업데이트가 가능하나, 그 이후부터는 MathWorks 소프트웨어 관리 서비스를 별도로 구매해야만 소프트웨어 업데이트를 할 수 있다.

문제점은 MATLAB 제품 및 서비스 가격이 만만치 않다는 것이다. 2021년 4월 기준, 일반 MATLAB 프로그램 하나의 가격이 연당 104.4만원에 달하며, 아무리 가장 저렴하게 구매할 수 있는 MATLAB Home 소장용도 가격이 대략 13만원(115.00 USD)이다. 참고로 선택사항인 툴박스는 미포함된 가격이다. 이러한 이유로 매우 오래된 버전의 MATLAB을 여전히 사용하는 사용자들 대다수이다.     

## 대안 소프트웨어
MATLAB의 불편하고 비싼 가격 정책은 많은 사용자들로 하여금 대안 소프트웨어를 찾도록 하였다: Scilab, R 프로그래밍 언어 등이 있는데, 그 중에서 대표적인 두 개의 대안 소프트웨어를 소개한다.

### GNU 옥타브
[GNU 옥타브](https://www.gnu.org/software/octave/index)(GNU Octave)는 매우 유명한 MATLAB 대안 소프트웨어로 심지어 (완벽하지 않지만) 훌륭한 호환성을 자랑한다. 옥타브는 GCC 컴파일러와 마찬가지로 [GNU 프로젝트](https://ko.wikipedia.org/wiki/GNU_프로젝트)이기 때문에 오픈 소스 프로그램이다. MATLAB보다 메모리 소모량이 적다는 장점이 있으나, 대기업의 자본이 투입된 MATLAB에 비하여 인터페이스 및 처리속도 그리고 커뮤니티가 비약하다.

### 파이썬
> *출처: [MathWorks - MATLAB vs. Python: Top Reasons to Choose MATLAB](https://www.mathworks.com/products/matlab/matlab-vs-python.html)*

MATLAB은 유난히 [파이썬](../ko.PRGMING_Python/)을 경계하는 것으로 보인다. 위의 출처에서 알 수 있듯이, MATLAB 제품 사이트에서 파이썬을 콕 집어 설명한다. 그도 그럴 것이 파이썬은 무료 소프트웨어이며 MATLAB 못지 않게 폭넓은 커뮤니티와 방대한 양의 라이브러리가 오픈 소스로 공유되고 있기 때문이다. 그 중에서 대표적인 네 개의 공학용 라이브러리인 [NumPy](https://numpy.org/), [SciPy](https://scipy.org/scipylib/), [matplotlib](https://matplotlib.org/), 그리고 [pandas](https://pandas.pydata.org/)가 있으면 MATLAB만큼 혹은 그 이상의 작업을 기대할 수 있다.

# MATLAB: 기초
> *참고: [Wikibooks - MATLAB Programming](https://en.wikibooks.org/wiki/MATLAB_Programming)*

각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 MATLAB 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

![MATLAB 초기화면](/images/docs/matlab/matlab_initial_window.png)
