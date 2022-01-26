---
layout: docs
language: ko
title: C#에서 C/C++ 동적 라이브러리 불러오기
tags: Csharp
date: 2021-02-14 13:15:00
notice: false
toc: false
---
제가 소프트웨어 및 펌웨어 엔지니어 직책으로 있으면서 [C](/docs/ko.C)/[C++](/docs/ko.Cpp)와 [C#](/docs/ko.Csharp) 프로그래밍 언어를 빈번히 사용하는데, 두 프로그래밍 언어를 동시에 사용하는 경우도 흔히 있습니다. 대체로 C++ 언어를 DLL 동적 라이브러리로 컴파일하여 C#에서 해당 라이브러리를 불러와 사용하는 형식입니다. 이는 C#의 편리함을 보여주는 기능 중 하나로써 매우 유용하게 활용할 수 있어 이번 게시글에서 소개하려고 합니다.

# `DllImportAttribute` 클래스
C# 언어의 `System.Runtime.InteropServices` 네임스페이스에 [`DllImportAttribute`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.dllimportattribute) 클래스는 동적 라이브러리를 가져와 C# 코드에서 직접 사용할 수 있도록 합니다. 다시 말해, 해당 클래스를 사용하기 위해서는 C#에 다음과 같은 네임스페이스 선언을 권장합니다.

```csharp
using System.Runtime.InteropServices;
```

`DllImportAttribute`를 활용한 C# 프로젝트는 [Win32.EDID](https://github.com/GKO95/Win32.EDID) 또는 [Win32.DDCCI](https://github.com/GKO95/Win32.DDCCI) 리포지터리에서 확인할 수 있습니다. Win32는 C 언어로 작성된 라이브러리로 본 게시글에서는 윈도우 시스템에 기본적으로 들어있는 `setupapi.dll`이란 C/C++ 동적 라이브러리를 예시로 사용하겠습니다.

## 라이브러리 선택
C#에서 동적 라이브러리를 불러오려면 아래 코드를 기반이 되어야 합니다.

```csharp
[DllImport("setupapi.dll")]
```

위의 코드는 `setupapi.dll`를 불러오지만 컴파일을 할 수 없는 불완전한 코드입니다; `DllImportAttribute` 클래스를 사용하려면 라이브러리로부터 불러올 함수까지 함께 명시해야 합니다. 그러므로 C#에서 동적 라이브러리를 불러오기 위한 가장 기본적인 구문은 아래와 같습니다.

```csharp
[DllImport("setupapi.dll")]
public static extern bool SetupDiClassGuidsFromNameW(string ClassName, ref Guid ClassGuidList, uint ClassGuidListSize, ref uint RequiredSize);
```

여기서의 함수 선언에는 몇 가지의 한정자가 추가되어 있는 것을 볼 수 있습니다.
* `public`: 라이브러리로부터 불러온 함수를 클래스 외부에서도 접근이 가능하다.
* `static`: 라이브러리로부터 불러온 함수를 객체화 없이 바로 접근할 수 있다.
* `extern`: 라이브러리와 같은 외부에서 이미 선언된 변수 및 함수를 불러온다.

그 이후부터는 C/C++와 같은 일반적인 함수 프로토타입이 입력합니다. 위의 경우에서는 라이브러리에서 `SetupDiClassGuidsFromNameW()` 이름의 함수를 자동으로 찾아 논리 자료형으로 함수값을 반환합니다. 만일 C# 내에서 함수를 다른 명칭으로 호출하고 싶다면 `DllImportAttribute`에 추가 옵션을 입력해야 합니다.

```csharp
[DllImport("setupapi.dll", EntryPoint = "SetupDiClassGuidsFromNameW")]
public static extern bool SetupDiClassGuidsFromNameW(string ClassName, ref Guid ClassGuidList, uint ClassGuidListSize, ref uint RequiredSize);
```

### `CharSet` 필드
클래스의 `CharSet`는 C# 소스코드와 C/C++ 동적 라이브러리 간에 문자 데이터를 전달하는 형식을 지정합니다. C#에서는 유니코드-16로 문자가 인코딩되지만, 라이브러리에서는 ASCII나 ANSI와 같은 유니코드가 아닌 전혀 다른 인코딩을 가질 수 있습니다. 그러므로 문자 혹은 문자열을 전달인자로 받는 함수의 경우에는 `CharSet`를 지정할 필요가 있습니다.

본 예시에서 선보이는 함수의 경우, 뒤에 `W`가 있으므로 16 비트의 확장 문자를 가지는 것을 확인할 수 있습니다. 그렇기 때문에 `CharSet`에는 다음 데이터를 전달인자로 건네줍니다.

```csharp
[DllImport("setupapi.dll", CharSet = CharSet.Unicode, EntryPoint = "SetupDiClassGuidsFromNameW")]
public static extern bool SetupDiClassGuidsFromNameW(string ClassName, ref Guid ClassGuidList, uint ClassGuidListSize, ref uint RequiredSize);
```

반면 동일한 기능을 수행하지만 ANSI 인코딩을 사용하는 `SetupDiClassGuidsFromNameA()` 함수를 불러온다고 하면 `CharSet.Ansi`를 건네줍니다.

### `SetLastError` 필드
C/C++ 프로그래밍에서 오류가 발생하면 `GetLastError()` 함수로 어떠한 오류가 발생하였는지 확인할 수가 있습니다. 이를 C#에서 사용하기 위해서는 `SetLastError`에 `true` 논리값을 전달인자로 건네줍니다 (기본값: `false`).

```csharp
[DllImport("setupapi.dll", SetLastError = true, EntryPoint = "SetupDiClassGuidsFromNameW")]
public static extern bool SetupDiClassGuidsFromNameW(string ClassName, ref Guid ClassGuidList, uint ClassGuidListSize, ref uint RequiredSize);
```

그러나 오류 번호를 확인하기 위해서는 `DllImportAttribute` 클래스로부터 `GetLastError()` 함수를 불러와서 사용할 것이 아니라, 동일한 네임스페이스에 있는 아래의 C# 별개 메소드를 사용해야 합니다.

```csharp
Marhsal.GetLastWin32Error()
```

## 매개변수 지정
`DllImportAttribute` 클래스에서 동적 라이브러리의 함수에 접근하기 위한 설정은 큰 어려움이 없지만, 가장 골치아픈 작업은 C#과 C/C++ 프로그래밍 언어의 자료형을 맞춰주는 겁니다. 유사하지만 결코 동일하지 않으며, 특히 포인터 개념의 유무 여부는 자료형을 그대로 가져와서 사용할 수 없게 합니다. 그렇지만 규칙성을 파악하면 이러한 걱정거리는 쉽게 해결됩니다.

아래는 Win32 API 자료형에서 제공하는 자료형, 혹은 포인터와 관련된 C/C++ 자료형을 C#에서 어떻게 처리해야 하는지를 도표로 간략히 정리하였습니다.

| C/C++    | 동일 자료형        | C#           |
|:--------:|:----------------:|:------------:|
| `BYTE`   | `unsigned char`  | `byte`       |
| `WORD`   | `unsinged short` | `ushort`     |
| `DWORD`  | `unsigned long`  | `uint`       |

### 포인터
[포인터](/docs/ko.C#포인터)는 데이터가 저장된 메모리 주소를 담는 변수입니다. 비록 C#은 메모리 주소를 표면적으로 드러내어 처리하지 않으나, 메모리 주소를 저장할 수 있는 `IntPtr` 혹은 `UIntPtr` 구조체가 존재합니다. 아래는 간단히 4 바이트 정수형과 8 바이트 부동소수점형의 메모리 주소를 건네받을 포인터, 그리고 [핸들](/docs/ko.MFC#핸들) 매개변수를 지정합니다.

| C/C++     | 동일 자료형  | C#    |
|:---------:|:-------:|:--------:|
| `int*`    | -       | `IntPtr` |
| `double*` | -       | `IntPtr` |
| `HANDLE`  | `void*` | `IntPtr` |

여기서 자료형과 무관히 전부 `IntPtr` 자료형을 사용하고 있는 특징을 확인할 수 있습니다. 자료형이 4 바이트 정수형이든 8 바이트 부동소수점형이라도 메모리 주소의 크기는 항상 동일하기 때문입니다: 32비트와 64비트 아키텍처는 각각 4 바이트와 8 바이트입니다. 하지만 이는 다른 의미로 C#의 포인터는 자료형이 반영되지 않기 때문에 참조에 의한 호출로 사용될 수 없습니다.

> 실은 C#도 C/C++ 언어와 동일한 구문으로 자료형이 반영된 포인터를 정의할 수 있습니다. 하지만 `unsafe` 블록 내에서만 사용되어야 하는 안전하지 않는 코드이기 때문에 본문에서 소개하지 않은 겁니다.

### 배열
C 언어에서 [배열](/docs/ko.C#배열)을 호출하면 메모리 주소가 반환되므로 흔히 포인터와 함께 사용됩니다. 그러나 배열은 순전히 메모리 주소만을 전달하는 게 아니라 배열이 갖는 데이터를 전달해야 하므로 자료형이 반드시 반영되어야 합니다. 즉, [참조에 의한 호출](/docs/ko.C#포인터)(call by reference)에서는 포인터 매개변수에서 사용한 `IntPtr`을 사용할 수 없습니다. 그 대신 C#에서 참조에 의한 호출에서 사용한 `ref` 혹은 `out` 키워드를 그대로 사용합니다.

| C/C++       | 동일 자료형    | C#           |
|:-----------:|:---------:|:------------:|
| `int []`    | `int*`    | `ref int`    |
| `double []` | `double*` | `ref double` |
| `PBYTE`     | `BYTE*`   | `ref byte`   |
| `PWORD`     | `WORD*`   | `ref ushort` |
| `PDWORD`    | `DWORD*`  | `ref uint`   |

단, 전달인자로는 배열 자체가 아닌 배열의 첫 요소만을 건네주어야 합니다. C 언어에서 배열 자체를 호출하면 배열 첫 요소의 메모리 주소가 반환되지만 C#에서는 배열에 대한 간략한 정보가 반환되기 때문입니다. 아래는 `ptrGUID`라는 배열을 동적 라이브러리의 함수에 전달인자로 건네주는 코드입니다.

```csharp
Guid[] ptrGUID =  new Guid[1];

bool bResult = SetupDiClassGuidsFromNameW("Monitor", ref ptrGUID[0], 0, ref dwSize);
```

### 문자열
C/C++ 프로그래밍 언어에서 문자열을 문자 포인터 혹은 문자 배열로 나타내는 경우가 많습니다. 그러나 결국 이들이 표현하려는 것은 문자열이기 때문에 오히려 간단합니다.

| C/C++   | 동일 자료형    | C#       |
|:-------:|:---------:|:--------:|
| `CHAR*` | `CHAR []` | `string` |
| `WCHAR*` | `WCHAR []` | `string` |

Win32 API에서는 더욱 다양한 종류의 문자열을 표현하는 자료형들이 있으나, 이들도 결국 문자 포인터이므로 `string`을 사용하여 맞춰줍니다. 아래는 Win32이 갖는 문자 포인터 자료형 일부입니다.

| C/C++       | 의미 (영문)    | 의미 (한글)           |
|:-----------:|-----------|--------------|
| `PCSTR`     | Pointer to a Constant character, thus STRing | 상수 문자 포인터 형식의 문자열 |
| `LPCSTR`    | Long Pointer to a Constant character, thus STRing | 상수 문자 롱포인터 형식의 문자열 |
| `PCWSTR`    | Pointer to a Constant Wide-character, thus STRing | 상수 확장문자 포인터 형식의 문자열 |
| `LPCWSTR` | Long Pointer to a Constant Wide-character, thus STRing | 상수 확장문자 롱포인터 형식의 문자열 |

여기서 포인터(pointer)와 롱포인터(long pointer)가 따로 구별된 이유는 예전의 16비트 시스템에서 2 바이트와 4 바이트 메모리 주소를 구분짓기 위해서였습니다. 그러나 32비트 시스템 이상에서는 이 둘은 사실상 동일한 포인터가 되었습니다.

### 구조체
Win32 API 함수 일부는 기본 자료형이 아닌 구조체를 전달인자로 받는 경우도 있습니다. 이러한 경우 동일한 네임스페이스에 있는 [`StructLayoutAttribute`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.structlayoutattribute) 클래스를 통해 동적 라이브러리에 전달할 수 있는 동일한 형태의 구조체를 생성해야 합니다.

구조체 레이아웃에는 두 가지 종류가 존재합니다: 순차적(sequential)과 명시적(explicit) 레이아웃이 있습니다. 순차적 레이아웃을 적용하면 구조체의 맨 첫 메모리 주소를 기점으로 위에서부터 아래로 순차적으로 맴버들이 구조체를 구성합니다.

```csharp
[StructLayout(LayoutKind.Sequential)]
public struct SP_DEVINFO_DATA
{
    public DWORD cbSize;
    public Guid ClassGuid;
    public DWORD DevInst;
    public IntPtr Reserved;
}
```

반면, 명시적 레이아웃은 맴버들이 구조체의 몇 번쨰 주소에 있는지 정확히 명시해야 하므로 반드시 [`FieldOffsetAttribute`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.fieldoffsetattribute) 클래스로 주소 위치를 표기해야 합니다. 순차적 레이아웃에 비하여 신경써야 할 점이 있지만 맴버 주소를 자유롭게 조절할 수 있는 장점을 가집니다.

```csharp
[StructLayout(LayoutKind.Explicit, Size = 32, CharSet = CharSet.Unicode)]
public struct SP_DEVINFO_DATA
{
    [FieldOffset(0)] public DWORD cbSize;
    [FieldOffset(4)] public Guid ClassGuid;
    [FieldOffset(20)] public DWORD DevInst;
    [FieldOffset(24)] public ulong Reserved;
}
```

### 구조체 (문자열 포함)
일부 C/C++ 구조체는 크기가 제한된 문자 배열 형식의 문자열을 맴버로 가지는 경우가 종종 있습니다. 아래는 Win32 API 중에서 모니터 정보를 담는 [`DISPLAY_DEVICEW`](https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-display_devicew) 구조체의 정의입니다.

```cpp
typedef struct _DISPLAY_DEVICEW {
    DWORD cb;
    WCHAR DeviceName[32];
    WCHAR DeviceString[128];
    DWORD StateFlags;
    WCHAR DeviceID[128];
    WCHAR DeviceKey[128];
} DISPLAY_DEVICEW, *PDISPLAY_DEVICEW, *LPDISPLAY_DEVICEW;
```

여기서 주목할 점은 문자 배열의 자료형이 확장문자(wide-character)을 의미하는 `WCHAR`이란 점입니다. 문자 하나에 1 바이트를 차지하는 `CHAR` 자료형과 달리, `WCHAR`은 문자 하나에 2 바이트를 차지하는 16비트 유니코드(일명 UTF-16) 인코딩입니다. 반대로 흔히 알고있는 `CHAR`은 8비트를 사용하는 ANSI 인코딩을 사용합니다.

구조체가 문자 배열을 가질 시, 명시적 레이아웃으로 크기와 위치를 지정하는 것으로 해결되지 않습니다. 이러한 경우에는 [`MarshalAsAttribute`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.marshalasattribute) 클래스를 사용하여 C# 소스 코드와 C/C++ 라이브러리 간에 데이터를 주고받도록 합니다.

```csharp
[StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
public struct DISPLAY_DEVICEW
{
    public uint cb;
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)] public string DeviceName;
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 256)] public string DeviceString;
    public uint StateFlags;
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 256)] public string DeviceID;
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 256)] public string DeviceKey;
}
```

C/C++에서 정의된 것과 달리 문자열 부분에만 크기가 두 배로 늘어난 것을 확인할 수 있으며, 이는 확장문자를 고려한 결과입니다. 만일 `CharSet.Ansi`로 하였으면 C/C++에서 정의된 배열 크기만큼 지정하면 됩니다.
