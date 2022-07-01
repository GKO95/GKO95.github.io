---
layout: docs
category: 프로그래밍
title: 타입스크립트
slug: ko.TypeScript
icon: icon-typescript.svg
order: 0x06
---
# 타입스크립트: 소개
[타입스크립트](https://ko.wikipedia.org/wiki/타입스크립트)(TypeScript)는 마이크로소프트에서 개발한 [자바스크립트](/docs/ko.JavaScript) ECMAScript 2015의 상위 프로그래밍 언어이다. 간단히 말해, 타입스크립트의 철학이 투영된 자바스크립이다. [동적 프로그래밍 언어](https://ko.wikipedia.org/wiki/동적_프로그래밍_언어)(dynamic programming language)인 자바스크립트는 데이터의 자료형 검사 및 오류 검증을 어플리케이션이 실행되고 있는 "런타임(runtime)" 도중에 처리하는데, 이는 코드가 방대하거나 복잡할수록 개발과 트러블슈팅이 매우 어려워진다. 이러한 과제를 해결하는 방안으로 자바스크립트를 위한 [정적 프로그램 분석](https://ko.wikipedia.org/wiki/정적_프로그램_분석)(static program analysis)을 제공하는 게 타입스크립트의 설계 목적이다.

## 컴파일 언어
> *참조: [컴파일러 vs 인터프리터](/blog/ko.compiler_vs_interpreter)*

자바스크립트와 달리, 타입스크립트는 [컴파일 언어](https://ko.wikipedia.org/wiki/컴파일_언어)(compiled language)이다. 하지만 컴파일러는 타입스크립트 언어를 [기계어](https://ko.wikipedia.org/wiki/기계어)가 아닌 자바스크립트 언어로 변환한다. 이러한 이유로 타입스크립트는 자바스크립트와 엄청난 호환성을 자랑하여 함께 병행되어 사용될 수 있다.

# 타입스크립트: 설치
1. npm 모듈

[TypeScript 패키지](https://www.npmjs.com/package/typescript)

```
npm install -g typescript
```

`-g` 옵션은 프로젝트 한정이 아닌 시스템 전역적으로 사용할 수 있도록 패키지를 설치한다.

만일 해당 옵션이 없으면 패키지를 프로젝트에 한정된 로컬에서만 사용할 수 있도록 설치한다. 즉, 프로젝트 경로를 삭제하면 설치한 패키지도 사라진다.

2. 비주얼 스튜디오 NuGet 패키지
3. 비주얼 스튜디오 확장도구

컴파일러 `tsc`

```
tsc main.ts
node main.js
```

create `tsconfig.json` which is used to run build task(`ctrl+shift+b`) via `tsc: build`. To set this as a default, go to Configure Default Build Task and select `tsc: build`.

configure `launch.json` as node.js

# 타입스크립트: 개요

