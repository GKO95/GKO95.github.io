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

    A race condition in software is due to poor synchronization or heavily stressed code execution which can cause invalid code execution on time-sensitive components or possibly corrupt the shared state of mutual exclusion objects.

* **Memory Depletion**

    Any program that attempts but fails to allocate more memory is subject to termination. This behavior is especially critical to kernel-mode as all programs share resources (including memory), affecting other kernel-mode programs.

* **Hardware Failure**

    Hardware failure such as a corrupted physical memory page, broken device, and more can also lead to a system crash.
