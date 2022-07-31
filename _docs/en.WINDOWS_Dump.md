---
layout: docs
category: Windows
title: Dump
slug: en.Dump
icon: icon-windows.svg
order: null
---
# User-Mode Dump
[User-mode dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/user-mode-dump-files) collects resources in the [virtual address space](en.Memory#virtual-address-space) (VAS) memory of a process at a specific point in time. This dump represents what the user-mode application was doing by then. Dumps are typically collected using the programs listed below:

* ProcDump
* Task Manager
* Process Explorer
* WinDbg

Use ProcDump when collecting user-mode dump because it has an advantage on matching an appropriate architecture to its target process (i.e., automatically switching to 32-bit ProcDump when generating a dump file of a 32-bit process). Otherwise, dump file generated of 32-bit process from 64-bit Task Manager or Process Explorer results referencing [WoW64](https://en.wikipedia.org/wiki/WoW64) and adds difficulty on navigating [call stack](https://en.wikipedia.org/wiki/Call_stack).

## Types of User-Mode Dump
This section introduces the types of user-mode dump available based on collected data.

### Full Dump
[Full User-Mode Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/user-mode-dump-files#full) collects the entire VAS memory of a process, including the program executable image.

> A Full Dump is not the same as a [Complete "Kernel-mode" Memory Dump](#complete-memory-dump).

### Minidump
[Minidump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/user-mode-dump-files#minidumps) mainly collects thread stacks which are enough to identify a problem (e.g., unusual activities). Resources that are significant on RCA, such as executable image, heap memory, and shareable memory, are considered unnecessary in this case and deemed wasteful as it takes up a lot of space, hence excluded from a Minidump.

### MiniPlus Dump
MiniPlus Dump is generated exclusively from ProcDump. It is a [Full Dump](#full-dump) but without a program executable image that takes up most of the process VAS memory. However, MiniPlus Dump can substitute Full Dump simply by specifying the path to a process executable image *directly* to a debugger as a purpose for navigating assembly code.

# Kernel-Mode Dump
[Kernel-mode dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/kernel-mode-dump-files) mainly collects resources in [physical memory](https://en.wikipedia.org/wiki/Computer_memory) (i.e., [RAM](https://en.wikipedia.org/wiki/Random-access_memory)) dedicated to the kernel at a specific time. This dump represents what the operating system was going through at the time and is typically collected using the approaches listed below:

* BSOD  
* LiveKD

## Types of Kernel-Mode Dump
This section introduces the types of kernel-mode dump available from BSOD.

### Complete Memory Dump
A [Complete Memory Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/complete-memory-dump) collects all contents inside a physical memory, including user mode. It is the largest dump created, requiring a paging file at least as large as the entire physical memory + 1 MB of header.

### Kernel Memory Dump
A [Kernel Memory Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/kernel-memory-dump) only collects the kernel contents inside a physical memory, excluding user mode. The generated dump is significantly smaller, around one-third of a [Complete Memory Dump](#complete-memory-dump).

| Includes                         | Excludes              |
|:--------------------------------:|:---------------------:|
| Windows kernel                   | Unallocated memory    |
| Kernel-mode driver               | User-mode application |
| Kernel-mode program              | -                     |
| Hardware Abstraction Layer (HAL) | -                     |

### Small Memory Dump
A [Small Memory Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/small-memory-dump) collects a 64 KB dump that is useful within limited memory space. Though the information may be limited, it still includes the following information.

* Kernel context and information, kernel-mode call stack of the crashed thread.
* Kernel context and information of the crashed process
* Context of the crashed processor
* Bug check code and parameters
* List of loaded drivers
* List of loaded and unloaded modules *(since Windows XP)*

### Automatic Memory Dump
An [Automatic Memory Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/automatic-memory-dump) is equivalent to a [Kernel Memory Dump](#kernel-memory-dump) with a paging file size automatically set by the system. Most of the time, the paging file size is lesser than a physical memory but large enough to capture the kernel memory. If the paging file is not large enough to capture kernel memory when the system crashes, Windows increases the paging file size to at least as large as physical memory.

The `LastCrashTime` registry value of the following registry key records the time when the Automatic Memory Dump size expanded, and this change lasts for four weeks.

```
HKLM\SYSTEM\CurrentControlSet\Control\CrashControl
```

> The registry key above contains relevant registry values for generating a kernel-mode dump file.

### Active Memory Dump
An [Active Memory Dump](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/active-memory-dump) is a variation of a [Complete Memory Dump](#complete-memory-dump) that filters out irrelevant data when debugging, making the dump file size between Complete Memory Dump and [Kernel Memory Dump](#kernel-memory-dump).

| Includes                         | Exclude            |
|:--------------------------------:|:------------------:|
| Windows kernel                   | Unallocated memory |
| Kernel-mode driver               | Guest VM pages     |
| Kernel-mode program              | File cache         |
| User-mode application            | -                  |
| Hardware Abstraction Layer (HAL) | -                  |

> Use an Active Memory Dump for dumping hypervisor host machine since its child VMs are filtered out.

# Reference
* [Varieties of Kernel-Mode Dump Files - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/varieties-of-kernel-mode-dump-files)
* [Enabling a Kernel-Mode Dump File - Windows drivers &#124; Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/enabling-a-kernel-mode-dump-file)
