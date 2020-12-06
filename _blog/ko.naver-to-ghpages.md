---
layout: post
lang: ko
title: "네이버에서 GitHub Pages로 이전"
date: 2020-08-10 00:00:00 + 0900
edited: #2020-12-05 18:20:00 +0900
tags: GitHub_Pages Naver
---
# 네이버에서 GitHub Pages로 이전

GitHub Pages를 시작하기 전, 대체로 영문으로 된 프로그래밍 지식을 한국어로 알려주자는 취지로 네이버 블로그를 시작하였습니다. 대한민국 대표 포털 사이트인 동시에 네이버 블로그 경험이 있어 네이버를 선택했던 겁니다. 처음에는 최선을 다해 게시글을 작성하였지만, 세 번째 게시글만에 네이버 블로그의 불편함을 뼈저리게 느꼈습니다. 특히 "소스코드"라는 도구는 자동 들여쓰기 기능이 결여되어 있으며, [구문 강조][ko.wikipedia-syntax_hightlight]가 생각보다 비약하다고 판단하였습니다. 그러나 "소스코드" 도구를 사용하지 않고서는 투자한 노력에 비해 시간이 너무 소비되는 문제점가 있었습니다.

결국 한국인의 접근성이 매우 뛰어난 네이버 블로그를 뒤로하고 새로운 블로그 매체를 탐색하기로 결정하였습니다: Blogger, Wix, Wordpress 등 여러가지를 개설해 보고 기능성을 확인하였으나, 모두 만족스럽지가 않았습니다. 그러다가 개발자 커뮤니티인 동시에 온라인 코드 저장소인 [GitHub][github]로 눈을 돌리게 되었는데, 제공하는 서비스 중 GitHub Pages는 리포지터리(repository)란 코드 저장공간을 개인 웹사이트처럼 사용할 수 있도록 합니다. 대표적인 예시로 *[카카오 Tech][ghpage-kakao]*가 있습니다.

GitHub Pages는 매우 자유롭게 디자인할 수 있는 장점이 있지만 이는 또한 단점이 될 수 있습니다. 그 이유는 블로그의 모든 것을 처음부터 스스로 직접 만들어야 하기 때문입니다. 다시 말해, HTML과 CSS는 기본이며 동적 기능을 추가하고 싶으면 최소한 자바스크립트라도 할 수 있어야 합니다. 그럼에도 불구하고 GitHub Pages를 선택한 이유는 바로 [마크다운][ko.wikipedia-markdown] 지원입니다. 개인적으로 마크다운을 매우 선호하며, 이미 전부터 공부한 내용은 마크다운으로 정리하고 있었습니다. 프로그래밍을 정리한 내용을 처음부터 다시 만들 필요가 없기 때문에 GitHub Pages에 집중적으로 투자하기로 결심했습니다.

의도치 않은 싱가포르 경영학부 교환학생을 다녀오면서 (참고로 전공은 전자공학과입니다) 배운 HTML과 CSS, 그리고 군대에 있으면서 독학한 자바스크립트는 GitHub Pages 제작에 큰 도움이 되었습니다. 하지만 원하는 디자인과 기능을 순수히 HTML/CSS와 자바스크립트로 구현하는 작업은 만만치가 않으며, 비롯 완성이 되더라도 만족스럽지 못한 결과에 새로 디자인하는 경우가 빈번하였습니다.

한 해가 지나 현재 여러분이 보시는 디자인이 완성되었으며, 비록 미완성본이지만 블로그의 역할로써는 충분하다고 판단하여 이렇게 소개드립니다. GitHub Pages 소스 코드가 궁금하신 분은 [여기][ghrepo-gko95.github.io]에서 확인하실 수 있습니다. 네이버 블로그는 구성을 재개편하여 알림 및 소통 공간으로 사용할 계획입니다.

[github]: https://github.com/
[ghpage-kakao]: https://kakao.github.io/
[ghrepo-gko95.github.io]: https://github.com/GKO95/GKO95.github.io
[ko.wikipedia-syntax_hightlight]: https://ko.wikipedia.org/wiki/%EA%B5%AC%EB%AC%B8_%EA%B0%95%EC%A1%B0
[ko.wikipedia-markdown]: https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4
