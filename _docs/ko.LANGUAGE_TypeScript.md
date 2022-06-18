---
layout: docs
category: 프로그래밍
title: 타입스크립트
slug: ko.TypeScript
icon: icon-typescript.svg
order: 0x06
---
# 타입스크립트: 소개

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

