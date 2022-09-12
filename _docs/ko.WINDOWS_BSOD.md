---
layout: docs
category: 윈도우
title: BSOD
slug: ko.BSOD
icon: icon-windows.svg
order: null
---
# 블루스크린
![윈도우 10에서 발생한 블루스크린 화면](/images/docs/windows/bsod_bugcheck_0xd1.png)

[블루스크린](https://ko.wikipedia.org/wiki/블루스크린), 일명 BSOD(Blue Screen of Death; 죽음의 파란 화면)는 시스템에 더 이상의 손상이 가해지는 것을 방지하기 위한 에러 화면이며, 해당 문제의 발생 원인인 [오류 검사 코드](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-code-reference2)(bug check)와 함께 분석에 필요한 [메모리 덤프](ko.Dump#커널-모드-덤프) 파일을 생성한다. BSOD는 아래의 사유로부터 호출된 [`KeBugCheck()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/ntddk/nf-ntddk-kebugcheck) (또는 [`KeBugCheckEx()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/wdm/nf-wdm-kebugcheckex)) 루틴에 의해 나타난다.

* **[시스템 충돌](#시스템-충돌)**: 처리되지 않은 커널 모드 오류, 일명 커널 모드 충돌이다 (예시. [0x19 BAD_POOL_HEADER](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x19--bad-pool-header))
* **유효하지 않은 동작**: 운영체제가 본래 설계에 벗어난 동작을 하였을 때, 복구가 불가하다고 판정되면 커널 초기화를 명분으로 발생한다 (예시. [0x133 DPC_WATCHDOG_VIOLATION](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x133-dpc-watchdog-violation)).

## 시스템 충돌
시스템 충돌은 치명적인 시스템 장애로 야기될 수 있는 커널상 처리되지 않은 [예외](https://ko.wikipedia.org/wiki/예외_처리)(exception)로부터 일어난다. 다음은 시스템이 충돌될 수 있는 몇 가지 시나리오에 대한 설명이다.

* **손상된 풀 메모리**
    
    커널 공간에 할당된 메모리(일명 풀 메모리; 커널의 페이징 및 비페이징 풀을 종합적으로 지칭하는 용어)의 손상은 시스템 충돌을 일으킬 수 있다. 메모리 손상의 대표적인 예시로 영역을 침범하여 커밋(commit)이 있으며, 이미 해당 메모리를 할당받은 타 커널 구성요소 또는 드라이버에 영향을 미친다.

    > 특수 풀(Special Pool)은 디버깅 작업 중에 부적합한 풀 메모리 할당 및 접근을 감지하는데 유용하다.

* **경쟁 상태**

    소프트웨어에서 [경쟁 상태](https://ko.wikipedia.org/wiki/경쟁_상태)(race condition)는 취약한 동기화 혹은 과도한 코드 실행에 의해 타이밍에 민감한 구성요소가 의도치 않은 방향으로 코드가 실행되거나 상호 배제(mutual exclusion) 객체의 공유 상태를 손상시킬 수 있다.

* **메모리 소진**

    어느 프로그램이든 메모리 할당을 시도하나 소진되어 실패하였으면 종료된다. 이러한 시스템 동작은 특히 모든 프로그램이 메모리를 포함한 리소스를 공유하는 커널 모드에 치명적으로 작용하며, 자칫 타 커널 모드 프로그램에 영향을 미칠 수 있기 때문이다.    

* **하드웨어 장애**

    물리 메모리상 손상된 페이지, 고장난 장치 등의 하드웨어 장애는 시스템 충돌의 원인이 될 수 있다.

## 강제 시스템 충돌
시스템 충돌이 수동으로 일으켜야 할 경우가 발생할 수 있으며, 대표적으로 시스템 [프리징](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅))이 있다. 본 부문에서는 BSOD를 강제로 발생시키는 방법을 설명한다.

* **NMI**

    일명 [마스크 불가능 인터럽트](https://en.wikipedia.org/wiki/Non-maskable_interrupt)(Non-maskable Interrupt)는 가장 최우선적으로 처리되어 시스템이 절대 무시할 수 없는 [인터럽트](ko.Processor#인터럽트) 신호이다. 흔히 서버용 PC는 NMI 버튼이 존재하여, 누를 시 [오류 검사 코드](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-code-reference2)(bug check) [0x80 NMI_HARDWARE_FAILURE](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x80--nmi-hardware-failure)이 발생한다. BSOD를 일으키기에 가장 확실한 방법이지만, NMI 버튼이 없는 서버용 PC가 있으며 특히 가정용 PC에는 거의 찾아볼 수 없다.

    * **Debug-VM**

        [`Debug-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/debug-vm) 파워셸 명령어는 마이크로소프트에서 개발한 [하이퍼바이저](https://ko.wikipedia.org/wiki/하이퍼바이저), 일명 [하이퍼-V](https://ko.wikipedia.org/wiki/하이퍼-V)(Hyper-V)에서 호스트 서버로부터 가상 머신에 NMI 신호를 전송하여 BSOD를 발생시킬 수 있다. 파워셸은 관리자 권한으로 실행되어야 하며, 가상 머신의 이름은 [`Get-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/get-vm) 명령어로 확인이 가능하다.
    
        ```powershell
      Debug-VM -Name "<VM name>" -InjectNonMaskableInterrupt
        ```
* **키보드**

    키보드로부터 커널에 `KeBugCheck()` 루틴을 호출하므로써 윈도우 운영체제에 오류 검사 코드 [0xE2 MANUALLY_INITIATED_CRASH](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0xe2--manually-initiated-crash)를 발생시키는 방법이다. [PS/2](https://ko.wikipedia.org/wiki/PS/2_단자) 혹은 [USB](https://ko.wikipedia.org/wiki/USB) 신호로 동작하는 키보드, 그리고 하이퍼-V의 가상 머신에서 키보드로 일으킨 강제 BSOD를 설정하는 방법은 아래의 두 방법 중에서 오로지 하나만이 적용된다.

    1. **`CTRL+SCROLL` 단축키**

        우측 `CTRL`를 누르는 동시에 `SCROLL LOCK` 키를 두 번 클릭하여 시스템 충돌을 발생시키기 위해, 사용하고 있는 키보드에 따라 아래 레지스트리 키로 이동한다.

        | 키보드 | 레지스트리 키                                                 |
        |:--------:|--------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\Parameters` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\Parameters`   |
        | 하이퍼-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\Parameters` |

        아래와 같이 `CrashOnCtrlScroll`이란 새로운 DWORD (32-bit) 레지스트리 값을 생성한다.

        ![<code>CrashOnCtrlScroll</code> 레지스트리 값](/images/docs/windows/bsod_keyboard_scroll.png)

    2. **대안 키보드 단축키**

        현재 대부분의 키보드는 `SCROLL LOCK` 키가 없어 BSOD를 강제할 대안의 단축키가 필요하다. 만일 `CrashOnCtrlScroll` 레지스트리 값이 이미 존재하면 대안 단축키가 인식되지 않으므로 삭제하도록 한다. 사용하고 있는 키보드에 따라 아래 레지스트리 키로 이동한다.

        | 키보드 | 레지스트리 키                                                |
        |:--------:|-------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\crashdump` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\crashdump`   |
        | 하이퍼-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\crashdump` |

        아래와 같이 DWORD (32-bit) 레지스트리 값을 생성하거나 편집한다.

        * `Dump1Keys`: 첫 번째 단축키 조합으로 좌측/우측 `SHIFT`, `CTRL`, 혹은 `ALT` 키 중 택한다.
        * `Dump2Key`: 두 번째 단축키 조합으로 두 번 클릭할 버튼을 지정한다. 레지스트리 값에 들어갈 데이터로 배열에 기입된 키보드 스캔 코드의 인덱스를 입력한다.

            ```c
          const UCHAR keyToScanTbl[134] = {
              0x00,0x29,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,
              0x0A,0x0B,0x0C,0x0D,0x7D,0x0E,0x0F,0x10,0x11,0x12,
              0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x00,
              0x3A,0x1E,0x1F,0x20,0x21,0x22,0x23,0x24,0x25,0x26,
              0x27,0x28,0x2B,0x1C,0x2A,0x00,0x2C,0x2D,0x2E,0x2F,
              0x30,0x31,0x32,0x33,0x34,0x35,0x73,0x36,0x1D,0x00,
              0x38,0x39,0xB8,0x00,0x9D,0x00,0x00,0x00,0x00,0x00,
              0x00,0x00,0x00,0x00,0x00,0xD2,0xD3,0x00,0x00,0xCB,
              0xC7,0xCF,0x00,0xC8,0xD0,0xC9,0xD1,0x00,0x00,0xCD,
              0x45,0x47,0x4B,0x4F,0x00,0xB5,0x48,0x4C,0x50,0x52,
              0x37,0x49,0x4D,0x51,0x53,0x4A,0x4E,0x00,0x9C,0x00,
              0x01,0x00,0x3B,0x3C,0x3D,0x3E,0x3F,0x40,0x41,0x42,
              0x43,0x44,0x57,0x58,0x00,0x46,0x00,0x00,0x00,0x00,
              0x00,0x7B,0x79,0x70 };
            ```

    만일 키보드로 BSOD가 발생되지 않았을 경우, 처리되어야 할 우선순위(일명 [IRQL](https://en.wikipedia.org/wiki/IRQL_(Windows)))가 상당히 높은 인터럽트에 의해 시스템이 장애를 겪고 있을 가능성이 매우 크다. 시스템 응답 없음을 야기한 인터럽트보다 낮은 IRQL의 키보드 입력 신호를 전달하면 인식되지 않는다. 때문에 키보드로 BSOD를 강제하려면 IRQL이 상대적으로 높은 PS/2 키보드를 사용하기를 권장한다.

    > [`CTRL+ALT+DELETE`](https://ko.wikipedia.org/wiki/Control-Alt-Delete) 단축키가 인식되지 않아도 키보드로 강제 BSOD를 일으킬 수 있으나, 해당 문제는 사실상 키보드와 상관없는 [`winlogon.exe`](https://docs.microsoft.com/ko-kr/windows/win32/secauthn/initializing-winlogon) 프로세스의 문제일 확률이 높다.

* **전원 버튼**

    전원 버튼으로 BSOD를 발생키려면 반드시 하드웨어, 펌웨어, 그리고 운영체제 요건이 충족되어야 한다:

    1. [GPIO](https://ko.wikipedia.org/wiki/GPIO) 기반의 전원 버튼
    2. 전원 이벤트를 Windows Power Manager로 전달하는 펌웨어
    3. [윈도우 10, 버전 1809](https://ko.wikipedia.org/wiki/윈도우_10#레드스톤_5) 혹은 [윈도우 서버 2019](https://ko.wikipedia.org/wiki/윈도우_서버_2019) 이상의 운영체제

    위의 요건을 모두 충족한다면 아래의 레지스트리 키로 이동하여 `PowerButtonBugcheck`이란 새로운 DWORD (32-bit) 값을 생성한다.
    
    ```
  HKLM\SYSTEM\CurrentControlSet\Control\Power
    ```

    ![<code>PowerButtonBugcheck</code> 레지스트리 값](/images/docs/windows/bsod_force_powerbutton.png)
    
    전원 버튼을 7초 동안 누르고 있으면 오류 검사 코드 [0x1C8 MANUALLY_INITIATED_POWER_BUTTON_HOLD](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x1c8--manually-initiated-power-button-hold)가 반환되지만, 10초 이상 누르면 UEFI 재설정이 되므로 그 전에 전원 버튼에 손을 떼도록 한다. 해당 레지스트리 값을 새로 생성해야 한다면 재부팅이 필요할 수 있다.

* **[WinDbg](ko.WinDbg)**

    [윈도우 NT](ko.WindowsNT) 운영체제를 [디버깅](https://ko.wikipedia.org/wiki/디버그)하는 프로그램으로 커널 모드에서 [`.crash`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/-crash--force-system-crash-) 명령어를 입력하여 시스템 강제 충돌을 일으킬 수 있다. `KeBugCheck()` 루틴으로부터 오류 검사 코드 0xE2 MANUALLY_INITIATED_CRASH가 반환되는데, 만일 시스템 충돌이 발생하지 않으면 중단점 탈출을 시도한다.

* **[NotMyFault](ko.NotMyFault)**

    [Sysinternals](ko.Sysinternals) 유틸리티 중에서 몇 가지 방식으로 시스템 충돌을 일으킬 수 있는 프로그램이다. 비록 시스템 응답이 없는 상태에서 적합하지 않으나, 일반적인 상황에서 BSOD를 일으킬 때는 유용하다.

### 블루스크린 색상 변경
윈도우 7까지는 NotMyFault 프로그램으로 블루스크린 색상을 변경할 수 있었으나, 윈도우 8 이후로는 아예 색상이 파란색으로 고정되어 변경이 불가하다.

> [윈도우 참가자 프로그램](https://support.microsoft.com/ko-kr/windows/windows-참가자-프로그램에-참여하기-ef20bb3d-40f4-20cc-ba3c-a72c844b563c)(Windows Insider Program)을 통해 사용할 수 있는 Preview 버전의 윈도우 운영체제는 "초록색" 블루스크린이 나타난다.

# BSOD 덤프 설정
기본적으로 시스템의 덤프는 [자동 메모리 덤프](ko.Dump#자동-메모리-덤프)로 설정되어 있다. 설정을 변경하여 타 유형의 덤프를 생성하거나 BSOD 동작을 바꿀 수 있다.

## 고급 시스템 설정
고급 시스템 설정은 BSOD 덤프 및 동작을 GUI로 구성할 수 있도록 한다.
    
1. **시작 및 복구**: BSOD 동작 및 생성될 덤프 유형을 선택을 구성한다.

    ![시작 및 복구 다이얼로그 창](/images/docs/windows/bsod_advanced_startup.png)

2. **가상 메모리**: 덤프를 생성하는데 사용되는 물리 메모리의 복사본인 페이징 파일의 존재 여부 및 크기를 선정한다. 시스템은 기본적으로 OS 드라이브에만 페이징 파일이 설정되어 있으나, 만일 각 드라이브마다 페이징 파일 여부 및 크기를 직접 지정하려면 "모든 드라이브에 대한 페이징 파일 크기 자동 관리" 체크박스를 해제한다.

    > BSOD 덤프를 굳이 페이징 파일로부터 생성하는 이유는, 만일 파일 시스템이 충돌의 원인이라면 일반적인 파일을 생성하는 방법으로는 덤프에 문제가 생길 수 있기 때문이다.

    ![가상 메모리 다이얼로그 창](/images/docs/windows/bsod_advanced_memory.png)

    * 사용자 지정 크기: 페이징 파일의 처음 및 최대 크기를 직접 지정하는 방식이다.
    * 시스템이 관리하는 크기: 물리 메모리의 사용량에 따라 시스템에서 알아서 페이징 파일 크기를 조정하는 방식이다.
    * 페이징 파일 없음

## 레지스트리 편집기
[고급 시스템 설정](#고급-시스템-설정)의 데이터들은 아래 레지스트리 키에 위치한 값들을 통해서도 동일하게 설정이 가능하다.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

### 전용 덤프 파일
전용 덤프 파일(dedicated dump file)은 페이징 파일을 지원하는 아무런 로컬 볼륨에서 BSOD 시스템 충돌 덤프를 생성할 수 있도록 한다. 위에서 소개한 동일한 레지스트리 키에서 다음 두 개의 레지스트리 데이터를 생성한다.

<table style="table-layout: fixed; width: 80%">
<thead><tr><th><code>DedicatedDumpFile</code></th><th><code>DumpFileSize</code></th></tr></thead>
<tbody><tr style="overflow: auto;"><td style="overflow: inherit;"><img src="/images/docs/windows/bsod_dedicated_dump_file.png" alt="전용 덤프의 경로 및 파일명 설정"/></td><td style="overflow: inherit;"><img src="/images/docs/windows/bsod_dedicated_dump_size.png" alt="전용 덤프 파일의 크기 지정"/></td></tr></tbody>
</table>

단, 해당 레지스트리 설정은 페이징을 위한 가상 메모리로 사용될 수 없다.

# 참조
* [오류 검사 코드 참조 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-code-reference2)
* [키보드에서 시스템 충돌 강제 적용 - Windows dirvers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-keyboard)
* [디버거에서 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-debugger)
* [전원 단추를 사용하여 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-with-the-power-button)
