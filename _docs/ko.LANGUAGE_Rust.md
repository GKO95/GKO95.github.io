---
layout: docs
category: 프로그래밍
title: 러스트
slug: ko.Rust
icon: icon-rust.svg
order: 0x05
---
# 소개

# 설치
러스트를 실행하기 위해서는 두 가지 프로그램이 필요하다: (1) [컴파일러](#Rustup) 그리고 (2) [통합 개발 환경](#통합-개발-환경)이다. 리눅스와 macOS는 기본적으로 파이썬 2와 3 인터프리터가 설치되어 있으나, 다른 특정 버전을 원하면 새로 설치해야 한다. 본 장에서는 파이썬 인터프리터와 IDE의 설치 및 연동을 통해 파이썬과 같은 인터프리터 언어가 어떻게 동작하는지 이해를 돕는다.

## Rustup
Rustup<sub>([다운로드](https://www.rust-lang.org/tools/install))</sub>은 러스트 프로그래밍에서 컴파일러 제공은 물론, 빌드 선택 및 버전 업데이트 등을 도맡는 [툴체인](https://ko.wikipedia.org/wiki/툴체인) 관리 프로그램이다.

![Rustup 설치 화면](/images/docs/rust/rustup_init_startup.png)

Rustup을 설치하면 `rustc`, `cargo`, 그리고 `rustup`를 포함한 러스트 개발환경의 모든 툴체인은 기본적으로 `%UserProfile%\.cargo\bin`에 저장된다. 그러므로 설치 과정에서 해당 경로를 `PATH` 환경 변수에 추가한다.

## 통합 개발 환경
[통합 개발 환경](https://ko.wikipedia.org/wiki/통합_개발_환경)(integrated development environment; IDE)은 최소한 프로그래밍 언어의 소스 코드 편집, 프로그램 빌드, 그리고 디버깅 기능을 제공하는 소프트웨어 개발 프로그램이다. 컴파일러는 러스트 코드를 기계어로 변환하는 소프트웨어이지만, 러스트 코드 편집기가 아니다. 그러므로 러스트 코드를 편집하고 프로그램으로 실행하여 문제가 발생하면 검토할 수 있는 IDE가 절대적으로 필요하다.

### 비주얼 스튜디오 코드
[비주얼 스튜디오 코드](https://ko.wikipedia.org/wiki/비주얼_스튜디오_코드)<sub>([다운로드](https://code.visualstudio.com/download))</sub>, 일명 VS Code는 마이크로소프트에서 개발한 무료 소스 코드 편집기이다. 비록 기술적으로 IDE는 아니지만, rust-analyzer 확장도구<sub>([다운로드](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer))</sub>를 설치하면 코드 자동완성, 자료형 정의, 구문 하이라이트 등의 기능들을 제공한다.

![VS Code에서 파이썬 3 작업 환경 예시](/images/docs/python/python_vscode_example.png)

# 기초
각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 러스트 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.
