---
layout: docs
category: 프로그래밍
title: 러스트
slug: ko.Rust
icon: icon-rust.svg
order: 0x08
---
# 소개
> *출처: [The Rust Programming Language <sub>(영문)</sub>](https://doc.rust-lang.org/book/)*

[러스트](https://www.rust-lang.org/)(Rust)는 성능과 보안이 매우 강조된 프로그래밍 언어이며, 특히 자료형 및 메모리 관리 측에서 강점을 지닌다. 뿐만 아니라, 하드웨어 제어가 가능하다는 점에서 [펌웨어](https://ko.wikipedia.org/wiki/펌웨어) 개발에도 활용할 수 있다. 이러한 특성들에 의해 [C++](ko.Cpp) 언어와 유사한 성능을 지닌 동시에 훌륭한 보안성이 보장되어 [마이크로소프트](https://www.microsoft.com/), [구글](https://www.google.com/), [아마존](https://www.amazon.com/) 등의 주요 IT 기업의 관심과 지원을 받고 있다.

## 컴파일 인어
러스트 프로그래밍 언어는 `rustc`라는 AOT 컴파일러(compiler)를 사용한다. 

# 설치
러스트 프로그래밍 언어를 실행하는 데 필요한 [툴체인](https://ko.wikipedia.org/wiki/툴체인)은 공식 홈페이지에서 `rustup_init.exe`을 [다운로드](https://www.rust-lang.org/tools/install) 받아 설치한다.

> 설치 과정에서 2013 버전 이상의 [비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)이 요구되는 데, 미리 Desktop development with C++ 그리고 윈도우 10 또는 11 SDK를 준비하도록 한다.

![<code>rustup_init.exe</code> 시작 화면](/images/docs/rust/rustup_init_setup.png)

여기서 러스트 프로그래밍 언어의 툴체인(toolchain)이란, 소프트웨어 제품 개발에 활용되는 프로그래밍 도구들의 집합을 가리키며 대표적으로 다음 세 개의 프로그램이 있다.

* `rustc`: 러스트 프로그래밍 언어 컴파일러
* `cargo`: 러스트 프로젝트 및 패키지 관리자
* `rustup`: 러스트 툴체인 관리자, 즉 위의 `rustc` 및 `cargo` 프로그램을 다른 버전으로 설치 및 선택한다.

설치가 완료되면 `%UserProfile%`에 두 경로가 생성된다: `.rustup` 그리고 `.cargo` 폴더이다. 전자는 러스트 툴체인이 실질적으로 설치되는 공간으로, 설치된 툴체인은 `toolchains` 하위폴더에 저장된다. 이렇게 설치된 여러 툴체인들 중에서 원하는 버전으로 경로를 바꿔가며 사용하는 번거로움을 해소하기 위해, 후자 폴더에 위치한 `rustc` 또는 `cargo` 등 명령어 프로그램들은 `rustup`에서 선택한 버전으로 연동된다. 그러므로 콘솔창은 `.cargo` 폴더에서 벗어나지 않고서도 다양한 버전의 툴체인을 활용할 수 있게 된다.

## 통합 개발 환경
[통합 개발 환경](https://ko.wikipedia.org/wiki/통합_개발_환경)(integrated development environment; IDE)은 최소한 프로그래밍 언어의 소스 코드 편집, 프로그램 빌드, 그리고 디버깅 기능을 제공하는 소프트웨어 개발 프로그램이다. 툴체인은 러스트 코드를 컴퓨터가 실행할 수 있도록 하는 개발 도구이지만 러스트 코드 편집기는 아니다. 러스트 코드를 작성하고 프로그램으로 실행하여 문제가 발생하면 검토할 수 있는 IDE가 절대적으로 필요하다.

### 비주얼 스튜디오 코드
[비주얼 스튜디오 코드](https://ko.wikipedia.org/wiki/비주얼_스튜디오_코드)<sub>([다운로드](https://code.visualstudio.com/download))</sub>, 일명 VS Code는 마이크로소프트에서 개발한 무료 소스 코드 편집기이다. 비록 기술적으로 IDE는 아니지만, rust-analyzer 확장도구<sub>([다운로드](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer))</sub>를 설치하면 코드 자동완성, 자료형 정의, 구문 하이라이트 등의 기능들을 제공한다.

![VS Code에서 러스트 프로그래밍 언어 작업 환경 예시](/images/docs/rust/rust_vscode_example.png)
