---
layout: docs
category: 윈도우
title: 디버그 심볼
slug: ko.Symbol
icon: icon-windows.svg
order: null
---
# 디버그 심볼
[디버그 심볼](https://ko.wikipedia.org/wiki/디버그_심볼)은 이진 파일(대표적으로 실행 파일, 라이브러리 등)의 기계어를 소스 코드로 변환하여 나타낼 수 있는 정보이며, 이를 통해 컴파일된 원본 스크립트가 필요없이 내부를 들여다 볼 수 있다. 비록 심볼은 원본과 같은 완전한 소스 코드를 재구성하지 못하지만, 변수와 함수의 식별자 및 메모리상 위치하는 주소를 알아낼 수 있다.

> 본 문서에서 `.EXE` 및 `.DLL` 확장자와 같은 이진 파일은 "모듈"이라고도 지칭한다.

## 윈도우 심볼
마이크로소프트 윈도우 NT는 관측할 수 있는 정보의 유형과 제약에 따라 심볼을 세 가지로 나눈다.

<table>
<thead>
<tr><th style="text-align: center">심볼</th><th>관측 가능한 데이터</th></tr>
</thead>
<tbody>
<tr><td style="text-align: center">Export</td><td><ul><li>함수 (export 테이블 한정)</li></ul><sub>서버: N/A</sub></td></tr>
<tr><td style="text-align: center">Public</td><td><ul><li>함수 (비정적 한정)</li><li>전역 변수 (<code>extern</code> 한정)</li></ul><sub>서버: <code>https://msdl.microsoft.com/download/symbols</code></sub></td></tr>
<tr><td style="text-align: center">Private</td><td><ul><li>함수</li><li>전역 변수</li><li>지역 변수</li><li>사용자 정의 구조체, 클래스, 그리고 자료형</li><li>소스 파일 정보: 파일명, 줄번호, 기타 등등</li></ul><sub>서버: N/A</sub></td></tr>
</tbody>
</table>

## 프로그램 데이터베이스
[프로그램 데이터베이스](https://en.wikipedia.org/wiki/Program_database), 일명 `.PDB` 확장자 파일은 해당 모듈의 디버깅 정보가 들어있는 마이크로소프트 형식이며, 그 안에는 심볼도 포함된다. 비주얼 스튜디오(Visual Studio)로 소스 코드를 빌드하면 이진 파일 외에 함께 생성되는 파일 중 하나이다. 만일 트러블슈팅 과정에서 자체 개발 어플리케이션 등을 함께 분석할 필요가 있으면 해당하는 `.PDB` 파일이 필요할 수 있다.

# 심볼 경로
사용자 및 커널 모드 어플리케이션을 디버깅하는데 심볼 파일이 위치한 경로를 지정하는 작업은 매우 중요하다. 디버거가 모듈 내부를 살펴보기 위해 필요한 심볼을 불러올 수 있도록 한다.

* 심볼을 로컬에 캐싱하므로써 디버깅 성능 속도를 개선할 수 있다.

    | 구문 | 설명 |
    |--------|-------------|
    | `cache*;` | 세미콜론 우측에 기입된 주소로부터 불러온 심볼을 기본 로컬 캐시 경로에 저장한다. |
    | `cache*C:\Symbols;` | 세미콜론 우측에 기입된 주소로부터 불러온 심볼을 `C:\Symbols` 경로에 저장한다. |

* 심볼은 인터넷이나 사내망으로부터 심볼을 불러올 수 있다.

    | 구문 | 설명 |
    |--------|-------------|
    | `srv*` | 기본 심볼 서버로부터 필요한 심볼을 획득한다. |
    | `srv*https://example.com` | `https://example.com` 서버로부터 필요한 심볼을 획득한다. |
    | `srv*C:\Symbols*https://example.com` | `https://example.com` 서버로부터 필요한 심볼을 획득하여 `C:\Symbols` 경로에 캐싱한다. |

* 시스템 환경 변수 `_NT_SYMBOL_PATH`는 하나의 심볼 경로를 다른 디버거 프로그램에 동일하게 적용하는데 매우 유용하게 사용된다.

    ![환경 변수<code>_NT_SYMBOL_PATH</code>의 예시](/images/docs/windbg/windbg_setting_symbol.png)

# 심볼 검증
빌드 당시에 생성된 심볼을 불러오면 함수 이름이 표시되지 않는 "불일치" 현상을 목격할 수 있다. 심지어 올바른 심볼이라도 서버로부터 불러오는 과정에서 손상되면 불일치 현상이 나타난다. 그러므로 심볼 검증은 불러온 심볼이 해당 빌드에 부합한지 확인하고 손상 여부를 살펴보는 작업이다.

[윈도우 디버거](ko.WinDbg) 프로그램은 심볼을 불러오는 당시에 검증 절차가 자동으로 동작한다.

# 같이 보기
* [공용 및 개인 기호](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/public-and-private-symbols)
* [Windows 디버거의 기호 경로](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/symbol-path)
* [이식 가능한 PDB 기호](https://docs.microsoft.com/ko-kr/windows-hardware/drivers/debugger/symbols-portable-pdb)
