---
layout: docs
category: 윈도우
title: 부팅
slug: ko.Boot
icon: icon-windows.svg
order: null
---
# 부팅
[부팅](https://ko.wikipedia.org/wiki/부팅)(booting)은 버튼과 같은 하드웨어 혹은 소프트웨어 명령으로 컴퓨터를 켜는 절차이다. 부팅 초기에 전력을 공급받은 컴퓨터의 [메모리](ko.Memory)는 [휘발성](https://ko.wikipedia.org/wiki/휘발성_메모리)에 의해 아무런 소프트웨어도 로드되지 않은 상태로 [CPU](ko.Processor)는 어떠한 작업도 수행할 수 없는 데, 시스템 하드웨어나 CPU 펌웨어 혹은 또 다른 프로세서의 도움으로 CPU가 실행할 작업을 메모리에 주입시키는 작업이 필요하다.

![윈도우 NT 운영체제의 부팅 절차 트러블슈팅 (예시. 윈도우 10)](/images/docs/windows/windows_boot_sequence.png)

### 부트스트랩
[부트스트랩](https://ko.wikipedia.org/wiki/부트스트랩_(컴퓨팅))(bootstrap)은 외부로부터 아무런 도움을 받지 않고 자체적으로 실행하는 절차를 가리킨다. 부트스트랩 어원의 유래는 다음과 같다:

> 미국 관용구 "[pull yourself up by your bootstraps](https://en.wiktionary.org/wiki/pull_oneself_up_by_one%27s_bootstraps)," 즉 *스스로를 부트스트랩을 당겨 들어올린다*라는 표현이 있는 데 사실상 물리적으로 불가능하다. 하지만 현재는 "아무런 도움없이 어려움을 극복하고 성취하다"라는 의미로 변질되면서, 부트스트랩이란 용어가 이러한 의미를 함축하게 되었다.

컴퓨터에 전력이 공급되는 시점부터 운영체제가 로드될 때까지 자력으로 해내는 부트스트랩 과정을 일명 [부팅](#부팅)(booting)이라 부르게 된 것이다.
