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
파이썬 3은 기본적으로 [`ctypes`](https://docs.python.org/3/library/ctypes.html) 패키지가 있어, 안에는 동적 라이브러리를 가져와 파이썬 코드와 호환되는 데이터로 사용할 수 있도록 하는 모듈들을 포함합니다. 그러므로 `ctypes` 라이브러리를 사용하기 위해서는 파이썬에 다음과 같이 모듈을 불러옵니다.

```python
from ctypes import *
```

`ctypes`를 활용한 파이썬 프로젝트는 [Win32.EDID](https://github.com/GKO95/Win32.EDID) 또는 [Win32.DDCCI](https://github.com/GKO95/Win32.DDCCI) 리포지터리에서 확인할 수 있습니다. Win32는 C 언어로 작성된 라이브러리로 본 게시글에서는 윈도우 시스템에 기본적으로 들어있는 `setupapi.dll`이란 C/C++ 동적 라이브러리를 예시로 사용하겠습니다.

## 라이브러리 선택
파이썬에서 동적 라이브러리를 불러오려면 아래 크드를 기반이 되어야 합니다.

```python
# 윈도우 OS
windll.LoadLibrary("setupapi.dll")
''' 동일
windll.setupapi
'''
```

위의 코드로부터 `setupapi.dll`를 파이썬으로 불러왔지만 파이썬 인터프리터는 어떤 함수들이 존재하는지 아무것도 모릅니다. *[C: 라이브러리](/docs/ko.PRGMING_C/#c-라이브러리)* 문서에서 언급된 바와 같이 C/C++ 언어도 [헤더 파일](/docs/ko.PRGMING_C/#헤더-파일)을 통해 컴파일러는 함수의 존재를 인식합니다. 그러나 `.H` 또는 `.HPP` 헤더 파일을 불러오거나 사용하지 않는 파이썬은 함수에 대한 정보를 `.PY` 스크립트에 직접 입력해야 합니다.

```python
# 윈도우 OS
function = windll.LoadLibrary("setupapi.dll").SetupDiClassGuidsFromNameW
''' 동일:
function = windll.setupapi.SetupDiClassGuidsFromNameW
'''

function.argtypes = [PWCHAR, POINTER(GUID), DWORD, PDWORD]
function.restype  = c_bool
```

`SetupDiClassGuidsFromNameW` 시작점을 불러온 이후에 두 가지의 추가사항이 설정되었습니다.
* `argtypes`: 라이브러리로부터 불러온 함수의 전달인자 자료형들을 시퀀스 객체로 명시합니다.
* `restype`: 라이브러리로부터 불러온 함수의 반환 자료형을 명시합니다.

### `ctypes.wintypes` 모듈
윈도우 API 라이브러리를 사용하면 `DWORD`, `HANDLE` 등의 윈도우 자료형들을 자주 접하게 됩니다. 비록 이들은 `typedef` 선언에 불과하지만, `ctypes`는 윈도우에서 선언된 `typedef` 자료형 식별자를 그대로 사용할 수 있도록 `wintypes` 모듈을 제공합니다. 그 외에도 유용한 `MSG` 혹은 `RECT` 구조체도 찾아볼 수 있습니다.

```python
from ctypes import *
from ctypes.wintypes import *
```

## 매개변수 지정
저번 *C#에서 C/C++ 동적 라이브러리 불러오기* 게시글에서 다룬 내용에 비하면 파이썬은 매우 간단하고 편리하게 되어 있습니다. 그렇지만 막상 동적 라이브러리로부터 함수를 불러오면 원하는 결과가 나오지 않은 경우가 대다수 있을 겁니다. 대체로 이러한 문제는 매개변수 지정에서 오류를 범한 것으로 볼 수 있으므로 규칙성을 파악하면 이러한 걱정거리는 쉽게 해결됩니다.

아래는 Win32 API 자료형에서 제공하는 자료형, 혹은 포인터와 관련된 C/C++ 자료형을 파이썬의 `ctypes` 및 `wintypes`에서 어떻게 처리해야 하는지를 도표로 간략히 정리하였습니다.

| C/C++   | 동일 자료형        | `ctypes`   | `wintypes` |
|:-------:|:----------------:|:----------:|:----------:|
| `BYTE`  | `unsigned char`  | `c_byte`   | `BYTE`     |
| `WORD`  | `unsinged short` | `c_ushort` | `WORD`     |
| `DWORD` | `unsigned long`  | `c_ulong`  | `DWORD`    |

여기서 주의할 점은 파이썬의 기본 자료형 `int`와 `ctypes`의 `c_int`는 엄연히 다른 존재입니다.

### 포인터
[포인터](/docs/ko.PRGMING_Cpp/#포인터)는 데이터가 저장되는 메모리 주소입니다.