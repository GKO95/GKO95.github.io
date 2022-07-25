---
layout: docs
category: Windows
title: BSOD
slug: en.BSOD
order: null
---
# Blue Screen of Death
[Blue Screen of Death](https://en.wikipedia.org/wiki/Blue_screen_of_death) (BSOD) is an error screen to prevent further damage to the system and generates a [dump](en.Dump#kernel-mode-dump) file to investigate and analyze the problem. The BSOD appears when [`KeBugCheck()`](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/ntddk/nf-ntddk-kebugcheck) (or [`KeBugCheckEx()`](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/nf-wdm-kebugcheckex)) routine is called by either reasons.

* **[System crash](#system-crash)**: unhandled kernel-mode exceptions (aka. kernel-mode crash).
* **Invalid operation**: triggered intentionally by the kernel source code when an unrecoverable issue arises from Windows, such as security, privacy, critical user-mode program, etc., which is not a system failure.

## System Crash
A system crash is due to an unhandled exception in the kernel that can lead to critical system failure. Here are several scenarios on what causes a system to crash.

* **Pool Corruption**
    
    Corruption of memory allocated at kernel space (aka. Pool memory; a collective term referring to both paged and non-paged pool) can cause a system crash. The best example of pool corruption would be an out-of-bound commit that can affect other kernel allocation of different kernel components or drivers.

    > The Special Pool can help detect inappropriate pool memory access when debugging.

* **Race Condition**

    A [race condition](https://en.wikipedia.org/wiki/Race_condition#In_software) in software is due to poor synchronization or heavily stressed code execution which can cause invalid code execution on time-sensitive components or possibly corrupt the shared state of mutual exclusion objects.

* **Memory Depletion**

    Any program that attempts but fails to allocate more memory is subject to termination. This behavior is especially critical to kernel-mode as all programs share resources (including memory), affecting other kernel-mode programs.

* **Hardware Failure**

    Hardware failure such as a corrupted physical memory page, broken device, and more can also lead to a system crash.

## Force System Crash
There are some occasions where a system crash needs to be triggered: most notably when encountering a system hang. Here are several methods for forcing BSOD manually.

* **Keyboard**

    There are approaches to setting up keyboard crash on Windows that issue bug check [`0xE2`](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0xe2--manually-initiated-crash) MANUALLY_INITIATED_CRASH by calling the `KeBugCheck()` routine in the kernel, but only one can be selected.

    1. **`Ctrl+Scroll` Shortcut**

        To enable a system crash by holding the right `CTRL` and pressing the `SCROLL LOCK` key twice, go to the registry key based on the currently in-use keyboard.

        | Keyboard | Registry Key                                                 |
        |:--------:|--------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\Parameters` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\Parameters`   |
        | Hyper-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\Parameters` |

        Create a new DWORD (32-bit) value as shown below.

        ![<code>CrashOnCtrlScroll</code> registry value for triggering BSOD via <code>CTRL+SCROLL</code> shortcut](/images/docs/windows/bsod_keyboard_scroll.png)

    2. **Alternate Keyboard Shortcut**

        Most keyboard nowadays does not have the `SCROLL LOCK` key, requiring an alternative shortcut to trigger BSOD. Remove the `CrashOnCtrlScroll` registry value if it is already defined in the registry key since it overrides the alternative shortcut. Go to the following registry key based on the currently in-use keyboard.

        | Keyboard | Registry Key                                                |
        |:--------:|-------------------------------------------------------------|
        | PS/2     | `HKLM\SYSTEM\CurrentControlSet\Services\i8042prt\crashdump` |
        | USB      | `HKLM\SYSTEM\CurrentControlSet\Services\kbdhid\crashdump`   |
        | Hyper-V  | `HKLM\SYSTEM\CurrentControlSet\Services\hyperkbd\crashdump` |

        Create or modify DWORD (32-bit) registry values as shown below.

        * `Dump1Keys`: select the leftmost/rightmost `SHIFT`, `CTRL`, or `ALT` as the first hotkey.
        * `Dump2Key`: select which key to use as the second hotkey that requires double taps. The data that goes to the registry value is the zero-based index of the array, which refers to the keyboard scan code.

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

* **Debugger**

    While kernel-mode debugging with WinDbg, enter the Force Crash System [`.crash`](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/-crash--force-system-crash-) command, which will issue bug check `0xE2` MANUALLY_INITIATED_CRASH by calling the `KeBugCheck()` routine. If the system did not crash when entering the command, try to break out of a breakpoint.

* **Power Button**

    To trigger BSOD by holding the power button, go to the following registry key and create a new DWORD (32-bit) value.
    
    ```
  HKLM\SYSTEM\CurrentControlSet\Control\Power
    ```

    ![<code>PowerButtonBugcheck</code> registry value for triggering BSOD via power button](/images/docs/windows/bsod_force_powerbutton.png)
    
    Holding the power button for seven seconds issues bug check [`0x1C8`](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0x1c8--manually-initiated-power-button-hold) MANUALLY_INITIATED_POWER_BUTTON_HOLD but should release before ten seconds which is for resetting UEFI. A reboot may require if the DWORD registry value did not exist beforehand.


* **Debug-VM**

    System crash using the [`Debug-VM`](https://docs.microsoft.com/en-us/powershell/module/hyper-v/debug-vm) command is specific for triggering BSOD on virtual machines from the host server using elevated Windows PowerShell (i.e., run as administrator). Enter the following PowerShell command to signal a non-maskable interrupt (NMI) to the virtual machine identified by [`Get-VM`](https://docs.microsoft.com/en-us/powershell/module/hyper-v/get-vm).
    
    ```powershell
  Debug-VM -Name "<VM name>" -InjectNoneMaskableInterrupt
    ```

# BSOD: Dump Configuration
By default, a system generates an [Automatic Memory Dump](en.Dump#automatic-memory-dump) file on BSOD. Modify a dump configuration to create different types of dump or change BSOD behaviors. 

## Advanced System Setting
Advanced System Setting allows configuring BSOD dump and behaviors with GUI.
    
1. **Startup and Recovery**: configure BSOD behaviors and select which dump type to generate.

    ![Startup and Recovery dialog window](/images/docs/windows/bsod_advanced_startup.png)

2. **Virtual Memory**: define the size of the paging file, a copy of physical memory used for generating the dump. Disable the "Automatically manage paging file size for all drives" checkbox and select "Custom size" to manually set the paging file size.

    ![Virtual Memory dialog window](/images/docs/windows/bsod_advanced_memory.png)

## Registry Editor
The following registry key contains values that configure equivalently to the Advanced System Setting.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

# Reference
* [Bug Check Code Reference - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-code-reference2)
* [Forcing a System Crash from the Keyboard - Windows dirvers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-keyboard)
* [Forcing a System Crash from the Debugger - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-from-the-debugger)
* [Forcing a System Crash with the Power Button - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/forcing-a-system-crash-with-the-power-button)
