---
layout: docs
category: Script
title: 파워셸
slug: ko.PowerShell
icon: icon-powershell.png
order: null
---
# 파워셸
[파워셸](https://learn.microsoft.com/en-us/powershell/scripting/overview)(PowerShell)은 [마이크로소프트](https://www.microsoft.com)에서 개발한 [크로스 플랫폼](https://ko.wikipedia.org/wiki/크로스_플랫폼)을 지원하는 [.NET](https://ko.wikipedia.org/wiki/닷넷) 기반의 [명령 줄](https://ko.wikipedia.org/wiki/명령_줄_인터페이스) [셸](https://ko.wikipedia.org/wiki/셸)이자 [스크립트 언어](https://ko.wikipedia.org/wiki/스크립트_언어)이다. 작업 자동화 및 구성 관리에 특화되었으며, [윈도우](https://learn.microsoft.com/en-us/powershell/windows/get-started)나 [애저](https://learn.microsoft.com/en-us/powershell/azure/)와 같은 마이크로소프트 제품 이외에도 [AWS](https://aws.amazon.com/powershell/), [VMware](https://core.vmware.com/vmware-powercli), [구글 클라우드](https://cloud.google.com/powershell/) 등의 [서드 파티](https://ko.wikipedia.org/wiki/서드_파티_개발자#서드파티) 제품에도 활용이 가능하다. [윈도우 8](ko.WindowsNT) 이상의 운영체제에서는 파워셸이 기본적으로 설치되어 있어 곧바로 실행될 수 있다.

![<a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701">윈도우 터미널</a>의 파워셸에서 <a href="#cmdlet">cmdlet</a>을 실행하는 예제](/images/docs/powershell/powershell_terminal_sample.png)

### 명령 프롬프트
[명령 프롬프트](https://ko.wikipedia.org/wiki/Cmd.exe), 일명 cmd.exe은 윈도우 운영체제에 오래 전부터 존재하던 또 다른 셸 환경으로 `.BAT` 혹은 `.CMD` 확장자의 [배치 파일](https://ko.wikipedia.org/wiki/배치_파일)(batch file) 스크립트를 실행하여 작업을 수행할 수 있다. 비록 파워셸이란 보다 강력한 스크립트 도구가 있어도 윈도우를 구성하는 수많은 자동화 시스템이 오랜 시간동안 누적된 cmd.exe 스크립트의 결과물이기 때문에 절대로 대체될 수 없는 존재이다.

자세한 내용은 마이크로소프트 [Windows Command Line](https://devblogs.microsoft.com/commandline/rumors-of-cmds-death-have-been-greatly-exaggerated/) 게시글을 참고한다.

## 객체 지향
파워셸은 [객체 지향](https://ko.wikipedia.org/wiki/객체_지향_프로그래밍)(object-oriented) 성격이 짙은 스크립트 언어이며, 처리되는 입출력 데이터가 전부 [객체](ko.Csharp#클래스)(object)이다. 그 예시로 파워셸 버전을 확인할 수 있는 [`$PSVersionTable`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_powershell_editions#edition-in-psversiontable) 자동 변수를 불러오면 `PSVersion`, `PSEdition` 등의 다양한 정보가 출력되는 데, 이들은 [C#](ko.Csharp) 프로그래밍 언어에서 객체의 맴버를 접근하듯이 `.` 기호를 통해 정보를 선택적으로 호출할 수 있다.

> [자동 변수](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables)(automatic variables)란, 파워셸에 대한 상태 정보가 저장된 읽기 전용 변수이며 파워셸에서 자체적으로 생성하고 관리한다.

<table style="table-layout: fixed; width: 100%">
<thead style="text-align: left;"><tr><th><div class="language-powershell highlighter-rouge"><div class="highlight"><pre class="syntax"><code style="word-break: initial;"><span class="bp">$PSVersionTable</span><span class="w">
</span></code></pre></div></div></th><th><div class="language-powershell highlighter-rouge"><div class="highlight"><pre class="syntax"><code style="word-break: initial;"><span class="bp">$PSVersionTable</span><span class="o">.</span><span class="nf">PSVersion</span><span class="w">
</span></code></pre></div></div></th></tr></thead>
<tbody>
<tr style="vertical-align: top; overflow-wrap: break-word;">
<td>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="syntax"><code style="word-break: break-all;">Name                           Value
----                           -----
PSVersion                      5.1.22621.963
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.22621.963
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
</code></pre></div></div>
</td>
<td>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="syntax"><code style="word-break: initial;">Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      22621  963
</code></pre></div></div>
</td>
</tr>
</tbody>
</table>

반환된 객체의 유형 및 메소드나 이벤트 등의 맴버를 확인하려면 [`Get-Memeber`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-member)를 통해 확인을 해야 하며, 이에 대한 내용은 [파이프라인](#파이프라인)을 참고하도록 한다.

## Cmdlet
파워셸은 [cmdlet](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/cmdlet-overview)(발음: command-let)이란 수많은 명령어들을 제공한다. Cmdlet은 런타임에 빌드된 .NET 클래스의 객체인데, 이러한 특성으로부터 일관된 [파이프라인](#파이프라인) 동작 등이 보장된다.

> 반면, 다른 셸 환경의 명령어(예. `tasklist`)는 그에 해당하는 프로그램(예. `%Windir%\System32\tasklist.exe`)이 실행되는 방식으로 동작한다.

Cmdlet은 다음과 같이 동사(verb)와 명사(noun)의 조합으로 구성되며 [`Get-Commnad`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-command)으로 목록을 찾아볼 수 있다. 한편, 파워셸에서 사용 가능한 동사들은 [`Get-Verb`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-verb)으로 확인할 수 있다.

```powershell
Get-Command -Verb Add -Noun Appx*
```
```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Add-AppxPackage                                    2.0.1.0    Appx
Cmdlet          Add-AppxProvisionedPackage                         3.0        Dism
Cmdlet          Add-AppxVolume                                     2.0.1.0    Appx
```

Cmdlet은 사용자가 파워셸 또는 .NET을 활용하여 직접 제작하거나 온라인 커뮤니티에서 공유되고 있는 것을 가져와서 사용할 수도 있다.

### 파이프라인
[파이프라인](https://ko.wikipedia.org/wiki/파이프_(유닉스))(pipeline) 파워셸의 여러 cmdlet가 [파이프](https://ko.wikipedia.org/wiki/수직선_(기호)) `|`로 연계된 조합을 가리킨다.
