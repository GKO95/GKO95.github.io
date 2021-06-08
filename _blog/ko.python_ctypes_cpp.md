---
layout: docs
language: ko
title: 파이썬에서 C/C++ 동적 라이브러리 불러오기
tags: Python
order: 0x02
toc: false
---
이전 *[C#에서 C/C++ 동적 라이브러리 불러오기](/blog/ko.csharp_dllimport_cpp/)* 게시글을 작성하면서 문득 한 가지 생각이 떠올랐습니다: "그렇다면 동일한 원리로 [파이썬](/docs/ko.PRGMING_Python)에서도 불러올 수 있지 않을까?" 파이썬 인터프리터도 C 언어로 작성되었으니 가능성이 있다고 판단하였고, 조사한 결과 파이썬 문서에서 방법을 찾을 수 있었습니다. 최근에 파이썬과 [C](/docs/ko.PRGMING_C)/[C++](/docs/ko.PRGMING_Cpp)를 병행해서 사용하려는 분들께 유용한 내용이 될 겁니다.

# `ctypes` 패키지
파이썬 3은 기본적으로 [`ctypes`](https://docs.python.org/3/library/ctypes.html) 패키지가 있어, 안에는 동적 라이브러리를 가져와 파이썬 코드와 호환되는 데이터로 사용할 수 있도록 하는 모듈들을 포함합니다. 다시 말해, `ctypes` 라이브러리를 사용하기 위해서는 파이썬에 다음과 같이 모듈을 불러옵니다.

```python
from ctypes import *
from ctypes.wintypes import *
```
