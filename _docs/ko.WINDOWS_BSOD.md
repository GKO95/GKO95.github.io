---
layout: docs
category: 윈도우
title: BSOD
slug: ko.BSOD
icon: icon-windows.svg
order: null
---
# 블루스크린
[블루스크린](https://ko.wikipedia.org/wiki/블루스크린), 일명 BSOD(Blue Screen of Death; 죽음의 파란 화면)는 시스템에 더 이상의 손상이 가해지는 것을 방지하기 위한 에러 화면이며, 해당 문제를 파악 및 분석할 수 있는 [덤프](ko.Dump#커널-모드-덤프) 파일을 생성한다. BSOD는 아래의 사유로부터 호출된 [`KeBugCheck()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/ntddk/nf-ntddk-kebugcheck) (또는 [`KeBugCheckEx()`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/ddi/wdm/nf-wdm-kebugcheckex)) 루틴에 의해 나타난다.

* **[시스템 충돌](#시스템-충돌)**: 처리되지 않은 커널 모드 예외 (일명. 커널 모드 충돌).
* **유효하지 않은 동작**: 윈도우 운영체제에서 (보안, 개인 정보, 치명적인 사용자 모드 프로그램 등에 의한) 복구 불가한 문제가 나타나면 커널 소스 코드로부터 의도적으로 발생되는데, 이는 시스템 장애가 절대 아니다.

## 시스템 충돌
시스템 충돌은 치명적인 시스템 장애로 야기될 수 있는 커널상 처리되지 않은 예외(exception)로부터 일어난다. 다음은 시스템이 충돌될 수 있는 몇 가지 시나리오에 대한 설명이다.

* **손상된 풀 메모리**
    
    커널 공간에 할당된 메모리(일명 풀 메모리; 커널의 페이징 및 비페이징 풀을 종합적으로 지칭하는 용어)의 손상은 시스템 충돌을 일으킬 수 있다. 메모리 손상의 대표적인 예시로 영역을 침범하여 커밋(commit)이 있으며, 이미 해당 메모리를 할당받은 타 커널 구성요소 또는 드라이버에 영향을 미친다.

    > 특수 풀(Special Pool)은 디버깅 작업 중에 부적합한 풀 메모리 할당 및 접근을 감지하는데 유용하다.

* **경쟁 상태**

    소프트웨어에서 [경쟁 상태](https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%9F%81_%EC%83%81%ED%83%9C)(race condition)는 취약한 동기화 혹은 과도한 코드 실행에 의해 타이밍에 민감한 구성요소가 의도치 않은 방향으로 코드가 실행되거나 상호 배제(mutual exclusion) 객체의 공유 상태를 손상시킬 수 있다.

* **메모리 소진**

    어느 프로그램이든 메모리 할당을 시도하나 소진되어 실패하였으면 종료된다. 이러한 시스템 동작은 특히 모든 프로그램이 메모리를 포함한 리소스를 공유하는 커널 모드에 치명적으로 작용하며, 자칫 타 커널 모드 프로그램에 영향을 미칠 수 있기 때문이다.    

* **하드웨어 장애**

    물리 메모리상 손상된 페이지, 고장난 장치 등의 하드웨어 장애는 시스템 충돌의 원인이 될 수 있다.

## 강제 시스템 충돌
시스템 충돌이 수동으로 일으켜야 할 경우가 발생할 수 있으며, 대표적으로 시스템 응답 없음이 있다. 본 부문에서는 BSOD를 강제로 발생시키는 방법을 설명한다.

* **키보드**

    키보드로부터 커널에 `KeBugCheck()` 루틴을 호출하므로써 윈도우 운영체제에 오류 검사 [`0xE2`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0xe2--manually-initiated-crash) MANUALLY_INITIATED_CRASH 코드를 발생시키는 방법이 있으나, 오로지 하나만이 적용할 수 있다.

    1. **`Ctrl+Scroll` 단축키**

        우측 `CTRL`를 누르는 동시에 `SCROLL LOCK` 키를 두 번 클릭하여 시스템 충돌을 발생시키기 위해, 사용하고 있는 키보드에 따라 아래 레지스트리 키로 이동한다.

        | 키보드 | 레지스트리 키                                                 |
        |:--------:|--------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\Parameters` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\Parameters`   |
        | Hyper-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\Parameters` |

        아래와 같이 새로운 DWORD (32-bit) 레지스트리 값을 생성한다.

        ![<code>CTRL+SCROLL</code> 단축키로 BSOD를 발생시키기 위한 <code>CrashOnCtrlScroll</code> 레지스트리 값](/images/docs/windows/bsod_keyboard_scroll.png)

    2. **대안 키보드 단축키**

        현재 대부분의 키보드는 `SCROLL LOCK` 키가 없어 BSOD를 강제할 대안의 단축키가 필요하다. 만일 `CrashOnCtrlScroll` 레지스트리 값이 이미 존재하면 대안 단축키가 인식되지 않으므로 삭제하도록 한다. 사용하고 있는 키보드에 따라 아래 레지스트리 키로 이동한다.

        | 키보드 | 레지스트리 키                                                |
        |:--------:|-------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\crashdump` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\crashdump`   |
        | Hyper-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\crashdump` |

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

* **디버거**

    WinDbg 프로그램으로 커널 모드를 디버깅하는 중에 [`.crash`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/-crash--force-system-crash-) 명령어로 시스템 강제 충돌을 일으킬 수 있으며, 이를 통해 `KeBugCheck()` 루틴으로부터 오류 검사 `0xE2` MANUALLY_INITIATED_CRASH 코드가 반환된다. 만일 시스템 충돌이 발생하지 않으면 중단점 탈출을 시도한다.

* **전원 버튼**

    전원 버튼으로 BSOD를 발생키려면 아래의 레지스트리 키로 이동하여 새로운 DWORD (32-bit) 값을 생성한다.
    
    ```
  HKLM\SYSTEM\CurrentControlSet\Control\Power
    ```

    ![전원 버튼으로 BSOD를 발생시키기 위한 <code>PowerButtonBugcheck</code> 레지스트리 값](/images/docs/windows/bsod_force_powerbutton.png)
    
    전원 버튼을 7초 동안 누르고 있으면 오류 검증 [`0x1C8`](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/bug-check-0x1c8--manually-initiated-power-button-hold) MANUALLY_INITIATED_POWER_BUTTON_HOLD 코드가 반환되지만, 10초간 누르면 UEFI 재설정이 되므로 그 전에 전원 버튼에 손을 뗴도록 한다. 해당 레지스트리 값을 새로 생성해야 한다면 재부팅이 필요할 수 있다.

* **Debug-VM**

    [`Debug-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/debug-vm) 파워셸 명령어는 호스트 서버로부터 가상 머신에 BSOD를 발생시키기 위해 사용되며, 이때 파워셸은 관리자 권한으로 실행되어야 한다. 아래의 명령어를 입력하므로써 [`Get-VM`](https://docs.microsoft.com/ko-kr/powershell/module/hyper-v/get-vm) 명령어로 확인된 가상 머신에 NMI 신호를 전송하여 시스템 충돌을 일으킨다.
    
    ```powershell
  Debug-VM -Name "<VM name>" -InjectNoneMaskableInterrupt
    ```

# BSOD: 덤프 설정
기본적으로 시스템은 BSOD가 발생하면 [자동 메모리 덤프](ko.Dump#자동-메모리-덤프)를 생성한다. 설정을 변경하여 타 유형의 덤프를 생성하거나 BSOD 동작을 바꿀 수 있다.

## 고급 시스템 설정
고급 시스템 설정은 BSOD 덤프 및 동작을 GUI로 구성할 수 있도록 한다.
    
1. **시작 및 복구**: BSOD 동작 및 생성될 덤프 유형을 선택을 구성한다.

    ![시작 및 복구 다이얼로그 창](/images/docs/windows/bsod_advanced_startup.png)

2. **가상 메모리**: 덤프를 생성하는데 사용되는 물리 메모리의 복사본인 페이징 파일 크기를 선정한다. 페이징 파일 크기를 직접 지정하려면 "모든 드라이브에 대한 페이징 파일 크기 자동 관리" 체크박스를 해제하고 "사용자 지정 크기"를 선택한다.

    ![가상 메모리 다이얼로그 창](/images/docs/windows/bsod_advanced_memory.png)

## 레지스트리 편집기
[고급 시스템 설정](#고급-시스템-설정)의 데이터들은 아래 레지스트리 키에 위치한 값들을 통해서도 동일하게 설정이 가능하다.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

# 참조
* [오류 검사 코드 참조 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-code-reference2)
* [키보드에서 시스템 충돌 강제 적용 - Windows dirvers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-keyboard)
* [디버거에서 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-debugger)
* [전원 단추를 사용하여 시스템 충돌 강제 적용 - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-with-the-power-button)
