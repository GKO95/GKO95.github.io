---
layout: docs
category: 윈도우
title: 프로세스
slug: ko.Process
icon: icon-windows.svg
order: null
---
# 프로세스
[프로세스](https://ko.wikipedia.org/wiki/프로세스)(process)는 [윈도우 NT](ko.WindowsNT)와 같은 운영체제에서 `.EXE` 확장자 등의 프로그램을 실행하기 위해 필요한 데이터와 리소스를 담는 컨테이너이다. 프로세스와 프로그램(일명 [어플리케이션](https://ko.wikipedia.org/wiki/응용_소프트웨어); application)은 엄연히 다른 존재이다. 아래는 [파일 탐색기](https://ko.wikipedia.org/wiki/파일_탐색기) 프로그램에서 창을 세 개 열어 각각 문서(Documents), 다운로드(Download), 그리고 사진(Pictures) 디렉토리로 이동한 것을 [작업 관리자](https://ko.wikipedia.org/wiki/작업_관리자_(윈도우))로 보여준다.

![작업 관리자에 표시된 파일 탐색기 (Windows Explorer) 프로그램의 프로세스들](/images/docs/process/process_application_difference.png)

[C](/docs/ko.C)/[C++](/docs/ko.Cpp) 등의 프로그래밍 언어로 작성된 코드를 컴파일하여 생성된 부산물이 바로 프로그램이다. 프로그램은 운영체제가 이해할 수 있는 [기계어](https://ko.wikipedia.org/wiki/기계어)의 집합체(일명 프로그램 이미지)에 불과하며, 새로 컴파일을 하거나 파일에 손상이 가하지 않는 이상 내용물은 절대 변하지 않는다. 다시 말해, 프로그램은 목적을 완수하기 위해 따라야 하는 작업 지침서이고 이를 수행할 작업자와 준비물이 배치된 공간이 바로 프로세스이다.

> 객체지향 프로그래밍 개념에 익숙하다면, 프로그램과 프로세스를 각각 클래스와 객체로 간주할 수 있다. 실제로 프로세스를 프로그램의 객체(instance)라고 부르기도 한다.

동일한 프로그램이라도 각 프로세스는 독립적으로 다른 작업을 수행할 수 있다. 위의 예시에서 세 개의 파일 탐색기 프로세스가 각자 다른 경로로 이동하여도 이러한 행위는 타 프로세스에 어떠한 영향을 미치지 않는다. 프로그램을 실행하면 다수의 프로세스가 생성될 수 있는데, 이들은 각각 수행하는 역할이 달라 효율성을 고려한 개발자의 설계 의도가 반영되기도 한다.

다음은 프로세스를 구성하고 있는 리소스들이다.

* 프로그램 이미지
* [가상 주소 공간](#가상-주소-공간)
* [스레드](#스레드)
* 핸들

## 가상 주소 공간
[가상 주소 공간](https://ko.wikipedia.org/wiki/가상_주소_공간)(virtual address space; VAS)은 프로세스마다 데이터를 저장할 수 있는 가상의 메모리 공간이다. 여기서 "가상"이 갖는 의미는 매우 중요하며, 아래의 성질들을 충족시킨다.

1. **독립성**

    가상의 메모리 공간이므로, 설치된 [물리 메모리](https://ko.wikipedia.org/wiki/주기억장치)(즉, [RAM](https://ko.wikipedia.org/wiki/랜덤_액세스_메모리))의 크기에 의한 제약이 없다. 시스템에 4 GB RAM이 설치되었다고 가정할 시, 1 GB 메모리 용량이 필요한 프로세스가 동시에 네 개 이상 실행되어도 메모리 부족 문제가 발생하지 않는다. 다만, 성능 저하가 나타날 수 있으며 자세한 내용은 페이징(paging) 기법을 다룰 때 설명할 예정이다.

2. **고립성**

    개별적 메모리 공간이므로, 일반적으로 프로세스 간 접근이 불가하고 어떠한 영향을 미치거나 받지도 않는다. 위의 파일 탐색기 예시에서 제가각 다른 작업을 할 수 있던 것은 VAS 때문이며, 만일 프로세스 하나가 충돌로 종료되어도 나머지는 아무렇지 않은 듯 온전히 실행된다. 예외로 모든 프로세스가 공통적으로 갖는 시스템 공간이나 타 프로세스와 함께 리소스를 사용하기 위한 공유 메모리 등이 있다.

3. **연속성**

    매핑된 메모리 공간이므로, 물리 메모리상 띄엄띄엄 분산된 메모리 조각(페이지 프레임; page frame)들을 하나의 연속된 가상 메모리 공간으로 구현한다. [메모리 관리 장치](https://ko.wikipedia.org/wiki/메모리_관리_장치)(MMU) 하드웨어에서 가상 메모리의 가장 작은 조각인 페이지(page)를 물리 메모리의 페이지 프레임과 일대일 매핑을 담당한다. 해당 성질은 메모리의 [파편화](https://en.wikipedia.org/wiki/Fragmentation_(computing))를 방지하는 효과를 기대할 수 있다.

가상 주소 공간은 크게 (1) 개별 프로세스 데이터 및 리소스를 저장하는 "프로세스 공간"과 (2) 모든 프로세스에 공통적인 윈도우 운영체제 데이터 및 리소스를 담고있는 "시스템 공간"으로 나뉘어지는데, 흔히 전자와 후자를 각각 사용자 공간(user space) 및 커널 공간(kernel space)이라고 부르기도 한다. 윈도우 운영체제 및 아키텍처에 따라 각 공간들이 가질 수 있는 최대 크기는 아래와 같이 [지정](https://docs.microsoft.com/ko-kr/windows/win32/memory/memory-limits-for-windows-releases)되어 있다.

<table style="table-layout: fixed; width: 80%">
<thead><tr><th rowspan="2" style="width: 10%;">가상 주소 공간</th><th rowspan="2" style="width: 20%;">32비트 프로세스</th><th colspan="2" style="border-bottom-style:none">64비트 프로세스</th></tr>
<tr><th>윈도우 8 (혹은 윈도우 서버 2012) 그리고 이전</th><th>윈도우 8.1 (혹은 윈도우 서버 2012 R2) 그리고 이후</th></tr></thead>
<tbody style="text-align: center;">
<tr><td>사용자 공간</td><td>2 GB</td><td>8 TB</td><td>128 TB</td></tr>
<tr><td>커널 공간</td><td>2 GB</td><td>8 TB</td><td>128 TB</td></tr>
</tbody>
</table>

> 32비트와 64비트는 각각 4 GB (= $2^{32}$) 그리고 16 EB (= $2^{64}$) 크기만큼의 주소를 표현할 수 있다.

프로세스에 `IMAGE_FILE_LARGE_ADDRESS_AWARE` 플래그 설정여부에 따라 사용자 공간을 2 GB으로 제한할 지 (32비트 프로세스 기본값), 혹은 그 이상 크기를 확장할 지 (64비트 프로세스 기본값) 선택할 수 있다. 32비트 프로세스에 해당 플래그가 설정되면 32비트가 표현할 수 있는 최대 주소 크기인 4 GB까지 사용자 공간으로 활용할 수 있으나, 32비트 윈도우 운영체제에서는 3 GB만 사용자 공간으로 사용하고 나머지 1 GB는 커널 공간으로 분배된다.

![비주얼 스튜디오에서 <code>IMAGE_FILE_LARGE_ADDRESS_AWARE</code> 플래그 설정여부 위치](/images/docs/process/process_large_addresses.png)
