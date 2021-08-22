---
layout: docs
language: ko
title: 파이썬에서 C/C++ 동적 라이브러리 불러오기
tags: Python
date: 2021-02-14 13:15:00
notice: false
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

### 포인터
[포인터](/docs/ko.PRGMING_C/#포인터)는 데이터가 저장된 메모리 주소를 담는 변수입니다. 비록 파이썬 메모리 주소를 표면적으로 드러내어 처리하지 않으나, `ctypes`은 자료형의 포인터를 지정하는 `POINTER()` 함수가 있습니다. 아래는 간단히 4 바이트 정수형과 8 바이트 부동소수점형의 메모리 주소를 건네받을 포인터, 그리고 [핸들](/docs/ko.INTERFACE_MFC/#핸들) 매개변수를 지정합니다.

| C/C++     | 동일 자료형  | `ctypes`            | `wintypes` |
|:---------:|:-------:|:-------------------:|:----------:|
| `int*`    | -       | `POINTER(c_int)`    | `PINT`     |
| `double*` | -       | `POINTER(c_double)` | -          |
| `HANDLE*` | `void*` | `c_void_p`          | `HANDLE`   |

여기서 포인터 지정 함수 `POINTER()`는 전부 대문자로 표기되어야 합니다. `ctypes`는 소문자로 된 `pointer()` 함수도 가지고 있지만 변수의 메모리 주소를 호출하는 용도로 사용됩니다. 이에 대한 예시는 다음 부분에서 확인할 수 있습니다.

### 배열
C 언어에서 [배열](/docs/ko.PRGMING_C/#배열)을 호출하면 메모리 주소가 반환되므로 흔히 포인터와 함께 사용됩니다. C#의 경우에는 [`unsafe`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe) 키워드로 코드의 안정성을 감안하지 않는 이상 변수의 메모리 주소를 알아낼 수 없었습니다. 그러나 파이썬은 `ctypes`로부터 자료형이 반영된 변수의 메모리 주소를 호출할 수 있습니다. 즉, 위의 포인터 매개변수 지정과 동일한 구문으로도 참조에 의한 호출이 가능합니다.

| C/C++       | 동일 자료형    | `ctypes`  | `wintypes` |
|:-----------:|:---------:|:------------:|:-----------:|
| `int []`    | `int*`    | `POINTER(c_int)`    | `PINT`  |
| `double []` | `double*` | `POINTER(c_double)` | -  |
| `BYTE []`     | `BYTE*`   | `POINTER(c_byte)`   | `PBYTE`  |
| `WORD []`     | `WORD*`   | `POINTER(c_ushort)` | `PWORD`  |
| `DWORD []`    | `DWORD*`  | `POINTER(c_uint)`   | `PDWORD`  |

단, C/C++에서 배열 자체를 호출하면 배열 첫 요소의 메모리 주소가 반환되는 점을 감안하여 배열 변수를 인자로 건네줄 때 첫 번째 요소를 전달하는 것을 권장합니다. 아래는 `ptrGUID`라는 배열을 동적 라이브러리의 함수에 전달인자로 건네주는 코드입니다.

```python
ptrGUID = GUID() * dwSize.value

bResult = SetupAPI.SetupDiClassGuidsFromNameW("Monitor", pointer(ptrGUID[0]), dwSize, pointer(dwSize))
```
### 문자열
C/C++ 프로그래밍 언어에서 문자열을 문자 포인터 혹은 문자 배열로 나타내는 경우가 많습니다. 그러나 결국 이들이 표현하려는 것은 문자열이기 때문에 오히려 간단합니다.

| C/C++       | 동일 자료형    | `ctypes`  | `wintypes` |
|:-----------:|:---------:|:------------:|:-----------:|
| `CHAR*`    | `CHAR []`    | `c_char_p`    | `LPSTR` 혹은 `LPCSTR`  |
| `WCHAR*` | `WCHAR []` | `c_wchar_p` | `LPWSTR` 혹은 `LPCWSTR`  |

Win32 API에서는 더욱 다양한 종류의 문자열을 표현하는 자료형들이 있으나, 이들도 결국 문자 포인터이므로 `string`을 사용하여 맞춰줍니다. 아래는 Win32이 갖는 문자 포인터 자료형 일부입니다.

| C/C++       | 의미 (영문)    | 의미 (한글)           |
|:-----------:|-----------|--------------|
| `PCSTR`     | Pointer to a Constant character, thus STRing | 상수 문자 포인터 형식의 문자열 |
| `LPCSTR`    | Long Pointer to a Constant character, thus STRing | 상수 문자 롱포인터 형식의 문자열 |
| `PCWSTR`    | Pointer to a Constant Wide-character, thus STRing | 상수 확장문자 포인터 형식의 문자열 |
| `LPCWSTR` | Long Pointer to a Constant Wide-character, thus STRing | 상수 확장문자 롱포인터 형식의 문자열 |

여기서 포인터(pointer)와 롱포인터(long pointer)가 따로 구별된 이유는 예전의 16비트 시스템에서 2 바이트와 4 바이트 메모리 주소를 구분짓기 위해서였습니다. 그러나 32비트 시스템 이상에서는 이 둘은 사실상 동일한 포인터가 되었습니다.

### 구조체
Win32 API 함수 일부는 기본 자료형이 아닌 구조체를 전달인자로 받는 경우도 있습니다. 이러한 경우 `ctypes`의 [`Structure`](https://docs.python.org/3/library/ctypes.html#structures-and-unions) 클래스를 통해 동적 라이브러리에 전달할 수 있는 동일한 형태의 구조체를 생성해야 합니다.

```python
class SP_DEVINFO_DATA(Structure):
    _fields_ = [
        ("cbSize", DWORD),
        ("ClassGuid", GUID),
        ("DevInst", DWORD),
        ("Reserved", POINTER(ULONG))
    ]
```
