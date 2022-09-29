---
layout: docs
category: 윈도우
title: 윈도우 오류 보고
slug: ko.WER
icon: icon-windows.svg
order: null
---
# 윈도우 오류 보고
[윈도우 오류 보고](https://learn.microsoft.com/en-us/windows/win32/wer/windows-error-reporting)(Windows Error Reporting; WER)은 [윈도우 비스타](https://ko.wikipedia.org/wiki/윈도우_비스타)부터 본격적으로 서비스를 시작했으며, 어플리케이션이 충돌하거나 응답이 없는 경우 [미니 덤프](ko.Dump#미니-덤프)를 생성하여 인터넷을 통해 [마이크로소프트](https://www.microsoft.com) 서버(일명 왓슨; Watson)로 전송하고 적용 가능한 해결책을 회답받는다. 이전 윈도우 운영체제에서 어플리케이션 디버깅에 사용된 [닥터 왓슨](https://en.wikipedia.org/wiki/Dr._Watson_(debugger))(Dr. Watson)의 진화형으로 [서비스](ko.Service) 프로그램으로 구동한다.

![Windows Error Reporting 서비스](/images/docs/windows/wer_service_description.png)

## 사용자 모드 덤프 수집
WER은 왓슨 서버로 전송되는 덤프와 별개로 로컬 시스템에서 덤프를 수집하도록 [설정](https://learn.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps)할 수 있다. 기본적으로 비활성화되어 있으나, 아래의 레지스트리 키를 생성하는 것만으로 충돌된 모든 어플리케이션의 덤프가 수집된다. 본 내용의 설정들은 곧바로 적용되며 재부팅이 필요하지 않다.

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps
```

<table style="width: 80%;">
<thead><tr><th>레지스트리 값</th><th>설명</th><th>레지스트리 종류</th><th>기본값</th></tr></thead>
<colgroup><col style="width: 15%;"/><col style="width: 45%;"/><col style="width: 15%;"/><col style="width: 25%;"/></colgroup>
<tbody>
<tr><td style="text-align: center;"><code>DumpFolder</code></td><td>어플리케이션 충돌 덤프가 저장되는 경로이다.</td><td style="text-align: center;">REG_EXPAND_SZ</td><td><code>%LOCALAPPDATA%\CrashDumps</code></td></tr>
<tr><td style="text-align: center;"><code>DumpCount</code></td><td>어플리케이션 충돌 덤프를 저장할 수 있는 최대 개수이다. 최대치에 도달한 상태에서 새로운 덤프가 생성되면 가장 오래된 덤프를 삭제한다.</td><td style="text-align: center;">REG_DWORD</td><td><code>0x0a</code>(10)</td></tr>
<tr><td style="text-align: center;"><code>DumpType</code></td><td>어플리케이션 충돌 덤프 종류를 지정한다.<ul><li><code>0x00</code>: 커스텀 덤프</li><li><code>0x01</code>: <a href="ko.Dump#미니-덤프">미니 덤프</a></li><li><code>0x02</code>: <a href="ko.Dump#전체-덤프">전체 덤프</a></li></ul></td><td style="text-align: center;">REG_DWORD</td><td><code>0x02</code>(2)</td></tr>
</tbody>
</table>

> 만일 아무런 레지스트리 값이 설정되어 있지 않으면, 어플리케이션 충돌 시 아래에 명시된 기본값에 따라 덤프를 생성한다.

WER 사용자 모드 덤프 수집은 개별 어플리케이션마다 설정될 수 있으며, 이는 위에서 소개한 모든 어플리케이션에 전역적으로 적용되는 설정보다 우선시된다. 예를 들어 [서비스 호스트](ko.Service#서비스-호스트)(`svchost.exe`) 충돌로 생성된 덤프를 별도로 설정하려면 아래의 레지스트리 키를 만들어야 한다:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\svchost.exe
```
