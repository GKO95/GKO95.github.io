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

![Windows Error Reporting Service](/images/docs/windows/wer_service_description.png)

## 사용자 모드 덤프 수집
WER은 마이크로소프트의 왓슨 서버로 전송되는 덤프와 별개로 로컬 시스템에서 덤프를 수집하도록 [설정](https://learn.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps)할 수 있다. 기본적으로 비활성화되어 있으나, 아래의 레지스트리 키를 생성하는 것만으로 충돌된 어플리케이션의 덤프가 수집된다. 본 내용의 모든 설정들은 곧바로 적용되며 재부팅이 필요하지 않다.

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps
```
