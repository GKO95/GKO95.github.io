---
layout: docs
category: 윈도우
title: BSOD
slug: ko.BSOD
icon: icon-windows.svg
order: null
---
# 블루스크린
![윈도우 10에서 발생한 블루스크린 화면: <a href="https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0xd1--driver-irql-not-less-or-equal">0xD1 DRIVER_IRQL_NOT_LESS_OR_EQUAL</a>](/images/docs/windows/bsod_bugcheck_0xd1.png)

[블루스크린](https://ko.wikipedia.org/wiki/블루스크린), 일명 BSOD(Blue Screen of Death; 죽음의 파란 화면)는 시스템에 더 이상의 손상이 가해지는 것을 방지하기 위한 화면이며, 해당 문제의 원인을 [버그 확인 코드](#버그-확인-코드)와 함께 표시하여 분석에 필요한 [메모리 덤프](ko.Dump#커널-모드-덤프) 파일을 생성한다. BSOD는 아래의 사유로부터 [`KeBugCheck()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/ntddk/nf-ntddk-kebugcheck) (또는 [`KeBugCheckEx()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/wdm/nf-wdm-kebugcheckex)) 루틴이 호출되어 나타난다.

* **시스템 충돌**: 운영체제 커널상 처리되지 않은 [오류](https://ko.wikipedia.org/wiki/예외_처리), 일명 커널 모드 충돌이다 (예시. [0x19 BAD_POOL_HEADER](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x19--bad-pool-header)).
* **유효하지 않은 동작**: 운영체제가 본래 설계에 벗어난 동작을 하였을 때, 복구가 불가하다고 판정되면 커널 초기화를 명분으로 발생한다 (예시. [0x133 DPC_WATCHDOG_VIOLATION](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x133-dpc-watchdog-violation)).

## 버그 확인 코드
버그 확인(bug check) 코드는 블루스크린이 발생한 원인을 설명하는 운영체제 오류 번호이다. `KeBugCheck()` 매개변수 (또는 `KeBugCheckEx()` 첫 번째 매개변수) 명칭인 `BugCheckCode`에서 유래된 용어이며, 여기로 전달되는 인자가 바로 버그 확인 코드이다. 특히 `KeBugCheckEx()` 루틴은 추가 매개변수 네 개가 있어 오류에 대한 구체적인 정보를 제공한다.

> 버그 확인 코드는 매우 다양하기 때문에, [참조 문서](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-code-reference2)로부터 정확한 블루스크린 발생 경위를 파악하고 [근본 원인 분석](https://en.wikipedia.org/wiki/Root_cause_analysis)(root cause analysis; RCA)을 진행한다.

## 강제 시스템 충돌
시스템 충돌이 수동으로 일으켜야 할 경우가 발생할 수 있으며, 대표적으로 시스템 [프리징](https://ko.wikipedia.org/wiki/프리징_(컴퓨팅))이 있다. 본 부문에서는 BSOD를 강제로 발생시키는 방법을 설명한다.

* **NMI**

    일명 [마스크 불가능 인터럽트](https://en.wikipedia.org/wiki/Non-maskable_interrupt)(Non-maskable Interrupt)는 가장 최우선적으로 처리되어 시스템이 절대 무시할 수 없는 [인터럽트](ko.Processor#인터럽트) 신호이다. 흔히 서버용 PC는 NMI 버튼이 존재하여, 누를 시 버그 확인 코드 [0x80 NMI_HARDWARE_FAILURE](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x80--nmi-hardware-failure)이 발생한다. BSOD를 일으키기에 가장 확실한 방법이지만, NMI 버튼이 없는 서버용 PC가 있으며 특히 가정용 PC에는 거의 찾아볼 수 없다.

    * **Debug-VM**

        [`Debug-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/debug-vm) 파워셸 명령어는 마이크로소프트에서 개발한 [하이퍼바이저](https://ko.wikipedia.org/wiki/하이퍼바이저), 일명 [하이퍼-V](https://ko.wikipedia.org/wiki/하이퍼-V)(Hyper-V)에서 호스트 서버로부터 가상 머신에 NMI 신호를 전송하여 BSOD를 발생시킬 수 있다. 파워셸은 관리자 권한으로 실행되어야 하며, 가상 머신의 이름은 [`Get-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/get-vm) 명령어로 확인이 가능하다.
    
        ```powershell
      Debug-VM -Name "<VM name>" -InjectNonMaskableInterrupt
        ```
* **키보드**

    키보드로부터 커널에 `KeBugCheck()` 루틴을 호출하므로써 윈도우 운영체제에 버그 확인 코드 [0xE2 MANUALLY_INITIATED_CRASH](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0xe2--manually-initiated-crash)를 발생시키는 방법이다. [PS/2](https://ko.wikipedia.org/wiki/PS/2_단자) 혹은 [USB](https://ko.wikipedia.org/wiki/USB) 신호로 동작하는 키보드, 그리고 하이퍼-V의 가상 머신에서 키보드로 일으킨 강제 BSOD를 설정하는 방법은 아래의 두 방법 중에서 오로지 하나만이 적용된다.

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
    
    전원 버튼을 7초 동안 누르고 있으면 버그 확인 코드 [0x1C8 MANUALLY_INITIATED_POWER_BUTTON_HOLD](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x1c8--manually-initiated-power-button-hold)가 반환되지만, 10초 이상 누르면 UEFI 재설정이 되므로 그 전에 전원 버튼에 손을 떼도록 한다. 해당 레지스트리 값을 새로 생성해야 한다면 재부팅이 필요할 수 있다.

* **[WinDbg](ko.WinDbg)**

    [윈도우 NT](ko.WindowsNT) 운영체제를 [디버깅](https://ko.wikipedia.org/wiki/디버그)하는 프로그램으로 커널 모드에서 [`.crash`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/-crash--force-system-crash-) 명령어를 입력하여 시스템 강제 충돌을 일으킬 수 있다. `KeBugCheck()` 루틴으로부터 버그 확인 코드 0xE2 MANUALLY_INITIATED_CRASH가 반환되는데, 만일 시스템 충돌이 발생하지 않으면 중단점 탈출을 시도한다.

* **[NotMyFault](ko.NotMyFault)**

    [Sysinternals](ko.Sysinternals) 유틸리티 중에서 몇 가지 방식으로 시스템 충돌을 일으킬 수 있는 프로그램이다. 비록 시스템 응답이 없는 상태에서 적합하지 않으나, 일반적인 상황에서 BSOD를 일으킬 때는 유용하다.

### 블루스크린 색상 변경
윈도우 7까지는 NotMyFault 프로그램으로 블루스크린 색상을 변경할 수 있었으나, 윈도우 8 이후로는 아예 색상이 파란색으로 고정되어 변경이 불가하다.

> [윈도우 참가자 프로그램](https://support.microsoft.com/ko-kr/windows/windows-참가자-프로그램에-참여하기-ef20bb3d-40f4-20cc-ba3c-a72c844b563c)(Windows Insider Program)을 통해 사용할 수 있는 Preview 버전의 윈도우 운영체제는 "초록색" 블루스크린이 나타난다.

# BSOD 덤프 설정
BSOD가 발생하면 시스템은 기본적으로 [자동 메모리 덤프](ko.Dump#자동-메모리-덤프)를 생성한다. 다른 유형의 덤프를 생성하거나 BSOD 동작을 바꾸는 등 설정을 변경할 수 있다. 하지만 대부분의 설정 변경 사항들은 적용되려면 재부팅이 필요하다는 점을 유의해야 한다.

> 이전 운영체제의 시스템 기본 덤프 유형은 달리 설정되어 있다: [윈도우 7](https://ko.wikipedia.org/wiki/윈도우_7) 및 [윈도우 비스타](https://ko.wikipedia.org/wiki/윈도우_비스타)에서는 [커널 메모리 덤프](ko.Dump#커널-메모리-덤프), 그리고 [윈도우 XP](https://ko.wikipedia.org/wiki/윈도우_XP)는 [작은 메모리 덤프](ko.Dump#작은-메모리-덤프)이다.

## 고급 시스템 설정
고급 시스템 설정(Advanced System Properties)은 [사용자 인터페이스](https://ko.wikipedia.org/wiki/그래픽_사용자_인터페이스)를 활용하여 덤프를 설정할 수 있도록 한다. 검색창에서 View advanced system settings를 검색하거나, 혹은 `WIN+R` 실행창에서 `systempropertiesadvanced.exe`을 실행한다. 아래는 고급 시스템 설정에서 BSOD 덤프 생성에 필요한 구성을 설명한다.
    
### 시작 및 복구
시작 및 복구(Start and Recovery)에서 BSOD가 발생하였을 때 시스템이 행하는 동작 및 메모리 덤프를 어떻게 처리할 것인지 설정한다.

![시작 및 복구 다이얼로그 창](/images/docs/windows/bsod_advanced_startup.png)

아래는 시스템 오류(System failure) 그룹의 각 체크박스에 대한 설명이다.

<ul><li><dl><table style="margin: initial; width: 100%; border-width: 0;"><thead><tr style="background: transparent;"><th style="background: inherit; border-width: inherit;">시스템 로그에 이벤트 기록 (Write an event to the system log)</th><th style="text-align: right; background: inherit; border-width: inherit; width: 10%;">기본값: ✔️</th></tr></thead><tbody><tr style="background: inherit;"><td colspan="2" style="border-width: inherit;">BSOD로 재부팅되면 오류 수준의 이벤트 ID 1001 시스템 로그를 <a href="https://ko.wikipedia.org/wiki/이벤트_뷰어">이벤트 뷰어</a>(Event Viewer)에서 찾아볼 수 있다.</td></tr></tbody></table></dl></li>
<li><dl><table style="margin: initial; width: 100%; border-width: 0;"><thead><tr style="background: transparent;"><th style="background: inherit; border-width: inherit;">자동으로 다시 시작 (Automatically restart)</th><th style="text-align: right; background: inherit; border-width: inherit; width: 10%;">기본값: ✔️</th></tr></thead><tbody><tr style="background: inherit;"><td colspan="2" style="border-width: inherit;">BSOD가 발생한 이후 자동으로 재부팅된다. 비활성 시 덤프 수집이 100% 완료되어도 사용자가 전원을 직접 끌 때까지 블루스크린이 나타난다.</td></tr></tbody></table></dl></li>
<li><dl><table style="margin: initial; width: 100%; border-width: 0;"><thead><tr style="background: transparent;"><th style="background: inherit; border-width: inherit;">기존 파일 덮어쓰기 (Overwrite any existing file)</th><th style="text-align: right; background: inherit; border-width: inherit; width: 10%;">기본값: ✔️</th></tr></thead><tbody><tr style="background: inherit;"><td colspan="2" style="border-width: inherit;">기존 BSOD 덤프 파일이 존재하면 최신 덤프로 덮어씌운다. 비활성 시 기존 BSOD 덤프 파일을 제거하거나 경로 혹은 파일명을 바꾸지 않는 이상 최신 BSOD 덤프가 생성되지 않는다.</td></tr></tbody></table></dl></li>
<li><dl><table style="margin: initial; width: 100%; border-width: 0;"><thead><tr style="background: transparent;"><th style="background: inherit; border-width: inherit;">디스크 공간이 부족할 때 메모리 덤프의 자동 삭제를 사용하지 않도록 설정 (Disable automatic deletion of memory dumps when disk space is low)</th><th style="text-align: right; background: inherit; border-width: inherit; width: 10%;">기본값: ❌</th></tr></thead><tbody><tr style="background: inherit;"><td colspan="2" style="border-width: inherit;">윈도우 10부터 추가된 항목이며, 저장공간이 부족할 시 용량 확보를 위해 시스템에서 BSOD 덤프 파일을 자동 삭제한다. 체크박스 활성 시 생성된 BSOD 덤프 파일은 사용자가 직접 제거하지 않는 이상 계속 잔여한다.</td></tr></tbody></table></dl></li></ul>

하위 디버깅 정보 쓰기(Write debugging information) 그룹에는 BSOD가 발생하면 생성할 [덤프 종류](ko.Dump#커널-모드-덤프-종류)를 선택할 수 있으며, 자세한 내용은 [커널 모드 덤프](ko.Dump#커널-모드-덤프)를 참고한다. BSOD 메모리 덤프 파일이 저장될 경로 및 파일명을 지정할 수 있다. 심지어 OS 드라이브(대표적으로 `C:\`)가 아닌 `D:\` 또는 `E:\`와 같은 타 드라이브로 경로 변경이 가능하다.

### 가상 메모리
가상 메모리(Virtual Memory), 즉 [페이징 파일](ko.Memory#페이징-파일)은 BSOD 발생 시 메모리 덤프 파일을 생성하기 전에 수집된 데이터를 임시로 저장할 수 있는 공간으로 활용된다. 재부팅되어 모든 시스템이 정상적으로 동작할 때 비로소 페이징 파일에 저장된 데이터들로부터 덤프 파일이 생성된다. 그러나 페이징 파일이 수집된 덤프를 수용하기에 부족한 크기라면 덤프 파일은 아예 생성되지 않는다.

BSOD 덤프 수집에서 페이징 파일의 충분한 공간 확보는 매우 중요한 작업이다. 일반적으로 "시스템이 관리하는 크기"로 설정하여도 무관하지만, 서버와 같은 매우 중요한 시스템이라면 원활한 서비스 운영을 위해 문제가 발생하여도 빠른 복구와 확실한 재발 방지가 이루어져야 한다. 이러한 경우 "사용자 지정 크기"로 충분한 페이징 파일 크기를 직접 기입하여 저장공간을 확보하도록 한다.

> 대체로 "RAM 용량 × 1.1" 정도의 페이징 파일 크기가 적당하다: RAM 용량이 4 GB(= 4096 MB)이면 페이징 파일은 4500 MB로 지정하는 게 안전하다.

메모리 덤프 파일을 생성하는데 아무런 드라이브의 페이징 파일을 사용하여도 무관하다 (단, 위도우 7 이전에는 [`DedicatedDumpFile`](#전용-덤프-파일) 레지스트리를 설정해야 하였다). OS 외의 드라이브 페이징 파일을 사용하려면 다음 사항들에 숙지해야 한다:

1. OS 드라이브에는 페이징 파일이 없어야 한다.
2. 페이징 파일이 존재하는 드라이브 중에서 알파벳 순서로 맨 앞에 있는 드라이브 문자가 선정된다.

만일 페이징 파일 크기가 충분하지 않으면 다른 드라이브를 조회할 정도로 시스템이 정교하지 않으며, 결국 덤프 파일이 생성되지 않는다. 그러므로 RAM 용량을 충분히 수용할 수 있는 페이징 파일을 나누어 여러 드라이브에 분배하는 방법 또한 적합하지 않다.

한편, 손상된 덤프 파일이 생성되기도 하는데 대표적인 원인으로 블루스크린이 화면이 나타나면서 덤프가 수집 도중에 시스템의 전원이 꺼져버린 경우이다. 특히 서버용 컴퓨터는 ASR(automatic server recovery), 즉 자동 서버 복구 기능이 있는데 정상적인 덤프 수집을 위해 반드시 비활성화시킨다.

## 레지스트리 편집기
[고급 시스템 설정](#고급-시스템-설정)의 데이터들은 아래 레지스트리 키에 위치한 값들을 통해서도 동일하게 설정이 가능하다.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

다음은 고급 시스템 설정에서 언급된 BSOD 및 메모리 덤프 설정에 대응하는 레지스트리 값들에 대한 설명이며, 데이터 `0x0`와 `0x1`은 각각 비활성화 및 활성화를 의미한다.

<table style="width: 80%"><thead><tr><th>레지스트리 값</th><th>설명</th></tr></thead><tbody>
<tr><td style="text-align: center;"><code>AlwaysKeepMemoryDump</code></td><td>디스크 공간이 부족할 때 메모리 덤프의 자동 삭제를 사용하지 않도록 설정</td></tr>
<tr><td style="text-align: center;"><code>AutoReboot</code></td><td>자동으로 다시 시작</td></tr>
<tr><td style="text-align: center;"><code>CrashDumpEnabled</code></td><td>커널 모드 덤프 종류 설정<ul><li><code>0x0</code>: (없음)</li><li><code>0x1</code>: 전체 메모리 덤프</li><li><code>0x2</code>: 커널 메모리 덤프</li><li><code>0x3</code>: 작은 메모리 덤프</li><li><code>0x7</code>: 자동 메모리 덤프</li></ul></td></tr>
<tr><td style="text-align: center;"><code>DumpFile</code></td><td>메모리 덤프 파일이 저장될 경로 및 파일명</td></tr>
<tr><td style="text-align: center;"><code>LogEvent</code></td><td>시스템 로그에 이벤트 기록</td></tr>
<tr><td style="text-align: center;"><code>Overwrite</code></td><td>기존 파일 덮어쓰기</td></tr>
</tbody></table>

### 전용 덤프 파일
전용 덤프 파일(dedicated dump file)은 본래 OS 외의 드라이브에 가상 메모리로 사용될 수 없는 덤프 수집 전용 페이징 파일을 가리킨다. OS 드라이브에 용량이 부족하면 타 드라이브에 전용 덤프 파일을 지정하여 메모리 덤프를 생성하였으나, 윈도우 7부터 어떠한 드라이브의 페이징 파일도 덤프 수집에 자유롭게 사용될 수 있으면서 활용도가 축소되었다.

비록 다른 드라이브의 페이징 파일로 BSOD 메모리 덤프를 생성할 수 있으나, 전용 덤프 파일은 몇 가지 강점을 가진다:

1. OS 드라이브에 페이징 파일이 있어도 사용할 수 있다.
2. 설정을 적용하는 데 재부팅이 필요하지 않으며, 레지스트리 값을 추가하면 곧바로 사용이 가능하다.

위에서 소개한 동일한 레지스트리 키에서 다음 두 개의 레지스트리 데이터를 추가한다.

<table style="table-layout: fixed; width: 80%">
<thead><tr><th><code>DedicatedDumpFile</code></th><th><code>DumpFileSize</code></th></tr></thead>
<tbody><tr style="overflow: auto;"><td style="overflow: inherit;"><img src="/images/docs/windows/bsod_dedicated_dump_file.png" alt="전용 덤프의 경로 및 파일명 설정"/></td><td style="overflow: inherit;"><img src="/images/docs/windows/bsod_dedicated_dump_size.png" alt="전용 덤프 파일의 크기 지정"/></td></tr><tr><td style="text-align: center;">덤프 수집 전용 페이징 파일 경로 및 파일명 지정</td><td style="text-align: center;">덤프 수집 전용 페이징 파일 크기 지정</td></tr></tbody>
</table>

> BSOD 메모리 덤프가 생성되는 위치는 `DumpFile` 레지스트리 값을 그대로 사용한다.

전용 덤프 파일은 폴더 안에 위치할 수 있다는 특징이 있으나, 해당 경로가 시스템 부팅 당시에 이미 존재해야 한다는 제약을 받는다. 그리고 전용 덤프 파일을 통해 메모리 덤프가 생성된 이후에 `DumpFileSize`의 값은 0으로 초기화된다.

# 참조
* [키보드에서 시스템 충돌 강제 적용 - Windows dirvers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-keyboard)
* [디버거에서 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-debugger)
* [전원 단추를 사용하여 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-with-the-power-button)
