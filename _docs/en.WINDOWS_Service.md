---
layout: docs
category: Windows
title: Service
slug: en.Service
icon: icon-windows.svg
order: null
---
# Service
A [Windows Service](https://en.wikipedia.org/wiki/Windows_service) is a program managed by [Service Control Manager](#service-control-manager).

| Program | Lifecycle | Duplicate Instance | GUI Implementation |
|:-------:|-----------|:------------:|:-----:|
| [Process](/docs/en.Process) | Bounds to user account | ✔️ | ✔️ |
| Service | Runs on its own dedicated user account | ❌<br/>(only one instance per service) | ❌<br/>(should be avoided) |

> The table indicates services (1) run without user login and (2) remain running even after user logout.

Service must conform to the interface rules and protocol designated by Service Control Manager. Therefore, do not assume programs that run in the background are services.

## Protected Service
Protected service is a service with additional protection to the system.

1. Early Launch Antimalware (ELAM)
2. Signed binary

Service Control Manager checks for certification validity before starting protected services and cannot stop by other means such as non-protected process or administrator privilege.

# Service Host
[Service Host](https://en.wikipedia.org/wiki/Svchost.exe) (aka. svchost) is a system process that can host one or more services implemented as `.DLL` dynamically-linked libraries. This approach can make multiple services share resources in a single svchost.exe process.

* **Advantage**: reduces resource consumption, hence saving more memory.
* **Disadvatnage**: one bad behavior (such as an unhandled exception) from a single service can havoc on the entire services hosted by the same svchost.exe.

Starting from [Windows 10 version 1703](https://docs.microsoft.com/en-us/windows/application-management/svchost-service-refactoring), however, the system with more than 3.5 GB of RAM is designed to have only a single service per process.

* **Advantage**: endurable to service failures; easier to debug.
* **Disadvantage**: memory overhead.

To disable this change, set the value of the `SvcHostSplitDisable` registry value located in its service registry (ex. `LocalServiceNoNetworkFirewall` svchost).

## Mechanism
Registry of every service can be found under the registry key below.

```
HKLM\SYSTEM\CurrentControlSet\Services
```

Services have the `ImagePath` registry value indicating where their executable locates. "Winmgmt" service (aka. WMI) is one of the services implemented as DLL and depends on svchost.exe to run.

![<code>ImagePath</code> registry value of the DLL-implemented "Winmgmt" service](/images/docs/windows/svchost_winmgmt_imagepath.png)

| Flag | Description                                                                             |
|:----:|-----------------------------------------------------------------------------------------|
| `-k` | Designate which svchost should the service associate to; aka. Service Host Group. |
| `-p` | Enforce DynamicCodePolicy, BinarySignaturePolicy, and ExtensionPolicy                   |

Services with the `-k` flag send this information to the Service Host registry key. This registry key contains various svchost.exe, each containing data on what services should be hosted by this process.

```
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Svchost
```

The following registry value of svchost is the one that hosts the Winmgmt service.

![<code>netsvcs</code> Service Host Group (includes the Winmgmt service)](/images/docs/windows/svchost_winmgmt_netsvcs.png)

Therefore, executing `netsvcs` group of svchost starts the services listed under the data, including WMI.

# Service Control Manager
[Service Control Manager](https://en.wikipedia.org/wiki/Service_Control_Manager) (SCM; `services.exe`) is a process that manages [services](#service) and [svchost.exe](#service-host). The process runs as Windows operating system initializes during system startup.

# Reference
* [Protecting anti-malware services - Win32 apps &#124; Microsoft Learn](https://docs.microsoft.com/en-us/windows/win32/services/protecting-anti-malware-services-)
* [Service Host - Win32 apps &#124; Microsoft Learn](https://docs.microsoft.com/en-us/windows/win32/wsw/service-host)
* [Demystifying the "SVCHOST.EXE" Process and Its Command Line Options &#124; by Nasreddine Bencherchali &#124; Medium](https://nasbench.medium.com/demystifying-the-svchost-exe-process-and-its-command-line-options-508e9114e747)
