---
layout: docs
category: 윈도우
title: 프로세스
slug: ko.Process
icon: icon-windows.svg
order: null
---
# 프로세스
[프로세스](https://ko.wikipedia.org/wiki/프로세스)(process)는 [윈도우 NT](ko.WindowsNT)와 같은 운영체제에서 프로그램을 실행하기 위해 필요한 데이터와 리소스를 담는 컨테이너이다. 프로세스와 프로그램(일명 [어플리케이션](https://ko.wikipedia.org/wiki/응용_소프트웨어); application)은 엄연히 다른 존재이다. 아래는 [파일 탐색기](https://ko.wikipedia.org/wiki/파일_탐색기) 프로그램에서 창을 세 개 열어 각각 문서(Documents), 다운로드(Download), 그리고 사진(Pictures) 디렉토리로 이동한 것을 [작업 관리자](https://ko.wikipedia.org/wiki/작업_관리자_(윈도우))로 보여준다.

![작업 관리자에 표시된 파일 탐색기 (Windows Explorer) 프로그램의 프로세스들](/images/docs/process/process_application_difference.png)

[C](/docs/ko.C)/[C++](/docs/ko.Cpp) 등의 프로그래밍 언어로 작성된 코드를 컴파일하여 생성된 부산물이 바로 프로그램이다. 프로그램은 운영체제가 이해할 수 있는 [기계어](https://ko.wikipedia.org/wiki/기계어)의 집합체에 불과하며, 새로 컴파일을 하거나 파일에 손상이 가하지 않는 이상 내용물은 절대 변하지 않는다. 다시 말해, 프로그램은 목적을 완수하기 위해 따라야 하는 작업 지침서이고 이를 수행할 작업자와 준비물이 배치된 공간이 바로 프로세스이다.

> 객체지향 프로그래밍 개념에 익숙하다면, 프로그램과 프로세스를 각각 클래스와 객체로 간주할 수 있다. 실제로 프로세스를 프로그램의 객체(instance)라고 부르기도 한다.

동일한 프로그램이라도 각 프로세스는 독립적으로 다른 작업을 수행할 수 있다. 위의 예시에서 세 개의 파일 탐색기 프로세스가 각자 다른 경로로 이동하여도 이러한 행위가 타 프로세스에게 어떠한 영향을 미치지 않는다. 프로그램을 실행하면 여러 프로세스가 생성될 수 있는데, 이들은 필요하지만 각각 수행하는 역할이 달라 효율성을 고려한 개발자의 설계 의도가 반영된 것이다.
