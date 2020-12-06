---
layout: post
lang: ko
title: "GitHub Pages를 위한 Jekyll 생성하기"
date: 2020-09-04 00:00:00 + 0900
edited: 2020-12-05 18:07:00 +0900
tags: GitHub_Pages Jekyll
---
# GitHub Pages를 위한 Jekyll 생성하기
GitHub Pages는 여러가지 용도로 사용됩니다. 개발팀 웹사이트로 사용되거나, 개인 블로그 혹은 포트폴리오로도 활용될 수 있습니다. GitHub Pages를 생성하기 위해서는 우선 리포지터리를 만들어야 하는데, 사용자 아이디 뒤에 `.github.io`만 붙이면 됩니다. 제 아이디는 GKO95이므로 리포지터리 이름을 `GKO95.github.io`로 지정했습니다.

![20200901ko.cjs-01](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-01.png)

여러분은 방금 리포지터리가 바로 GitHub Pages가 되었습니다. 이제 리포지터리 안에 HTML 파일을 추가하여 원하는 디자인과 기능을 직접 꾸미시면 됩니다. 다만, 순수히 HTML만으로 장문의 글을 작성하거나 웹사이트를 관리한다는 것은 매우 불편합니다. 그래서 제가 소개하려는 소프트웨어가 바로 [Jekyll][jekyll-site]입니다.

## Jekyll 설치법
Jekyll은 간편하게 블로그 형식의 사이트를 생성하는데 사용되는데, GitHub Pages에도 활용할 수 있습니다. 게시글은 [마크다운][ko.wikipedia-markdown]으로 작성되기 때문에 HTML을 크게 신경쓰지 않으셔도 됩니다. 만일 HTML와 CSS, 그리고 자바스크립트를 전혀 몰라 어떻게 꾸며야 할지 모르시는 분들은 다른 개발자들이 이미 제작한 디자인을 그대로 사용할 수도 있습니다. 이미 머릿속에 어떻게 만들지 구상하신 분들은 저처럼 한 번 직접 디지인 해보시길 바랍니다.

macOS와 리눅스에서는 Jekyll 설치가 매우 간단하지만, Ruby 언어가 공식적으로 지원되지 않은 윈도우 OS에서는 몇 가지 절차를 거쳐야 합니다. [RubyInstaller][ruby-installer] 웹페이지 내 `WITH DEVKIT` 중에서 `=>`와 함께 볼드체로 표시된 설치 파일을 다운로드 받고 실행합니다.

![20200901ko.cjs-02](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-02.png)

RubyInstaller 설치 중 맨 마지막에 `ridk install` 실행 여부를 체크하는 박스가 있습니다. *절대로* 체크를 해제하면 안됩니다! Ruby 프로그래밍 언어를 윈도우 OS에 구동하는데 필요한 작업을 처리하기 위해서 입니다. Finish 버튼을 클릭하면 아래의 명령창이 나타나야 합니다.

![20200901ko.cjs-03](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-03.png)

숫자 1~3을 입력해서 원하는 옵션을 선택하라고 적혀있지만, 그냥 Enter 키를 누르시면 알아서 필요한 작업을 처리합니다. 명령창에서 몇 가지 프로그램을 설치 및 설정 작업이 진행되고 마무리가 되었을 시, 다시 한 번 Enter 키를 눌러서 명령창을 종료합니다.

Ruby 설치가 완료되었으니, 이제 Jekyll와 Bundler를 설치해야 합니다. 명령 프롬프트(command prompt; cmd) 혹은 파워셸(powershell)을 열어 다음 명령어를 입력합니다.

```powershell
gem install 'jekyll:3.9.0' 'bundler'
```

여기서 Jekyll 버전은 3.9.0으로 명시되어 있는데, 이는 GitHub Pages와의 호환성 때문입니다 (2020년 9월 4일 기준). 호환 버전은 시간이 지나면서 변하므로 반드시 [GitHub Pages: Dependency versions][dependency-ver]에서 확인하여 올바른 버전을 설치하기를 바랍니다.

설치가 완료되었는지 확인하기 위해 `jekyll -v`를 입력합니다. 정상적으로 설치되었으면 Jekyll 버전이 나타날 것이고, 그러면 Jekyll을 사용할 준비는 모두 마무리 되었습니다.

## Jekyll 사용법
우선 매우 간단한 블로그 형식부터 생성해보도록 하겠습니다. Jekyll은 명령 프롬프트나 파웨셸을 통해서만 동작할 수 있으므로 터미널 창을 항상 준비하도록 합니다. 터미널이 아직 익숙하지 않으신 분들이 분명히 계실 겁니다. 그래서 Jekyll 사용법에서는 [비주얼 스튜디오 코드][vscode-download](VS Code)로 보여드리겠습니다.

우선 VS Code에서 Jekyll 사이트를 생성할 빈 폴더를 엽니다. 제가 보여주는 예시에는 `D:\Workspace\Jekyll`로 되어 있습니다. 

![20200901ko.cjs-04](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-04.png)

제가 사용하는 VS Code는 하단부에 기본적으로 파워셸이 켜져 있는데, 만일 터미널이 안보이면 <code>CTRL + `</code> 단축키를 누르시면 됩니다. 여기서 <code>`</code>는 따옴표가 아닌 억음 부호(punctuation mark)로 물결표(`~`) 버튼과 함께 있습니다. 이때 나타난 터미널 창의 경로는 현재 VS Code에서 열고 있는 폴더로 설정됩니다.

터미널 창에 아래 명령어를 입력합니다.

```powershell
jekyll new .
```

![20200901ko.cjs-05](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-05.png)

Bundler가 Jekyll 사이트를 생성하는데 필요한 구성요소를 설치하기 위해 시간이 다소 걸릴 수 있습니다. 결과적으로 현재 여러분이 있는 `D:\Workspace\Jekyll` 안에 HTML과 마크다운 등 여러 종류의 파일을 볼 수 있습니다. 도대체 이 파일들이 무엇인가 궁금하시면 아래 명령어를 터미널에 입력합니다.

```powershell
bundle exec jekyll serve 
```

![20200901ko.cjs-06](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-06.png)

위의 명령어를 대략적으로 설명하자면 Bundler를 통해 Jekyll 사이트를 실행시킨 겁니다. 실행한 Jekyll 사이트는 터미널의 `Server address:`라고 적힌 주소에서 볼 수 있습니다. 해당 주소를 인터넷 브라우저로 열면 아래 화면처럼 나타납니다.

![20200901ko.cjs-07](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-07.png)

축하드립니다! 여러분은 방금 첫 Jekyll 사이트를 생성하여 실행시켰습니다. 현재 보이는 디자인은 Jekyll에서 기본적으로 제공하는 디자인으로, 원하시면 그대로 사용하셔도 됩니다. 실행 중인 Jekyll 사이트는 인터넷 브라우저를 종료해도 터미널이 열려있는 한 계속 활성화되어 있습니다. Jekyll 사이트를 종료하려면 터미널을 종료하거나, 아니면 `CTRL+C`를 누른 다음에 `Y` 버튼을 누릅니다.

하지만 저희의 최종 목적은 GitHub Pages를 Jekyll로 생성하는 겁니다. 현재 생성된 Jekyll 사이트에 있는 `Gemfile` 파일을 열어보면 16~18번 줄에 다음과 같은 설명이 적혀있습니다.

```ruby
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
```

GitHub Pages에 사용하기 위해서는 위의 `gem "jekyll"` 문장을 삭제하고 아래의 `gem "github-pages", group: :jekyll_plugins` 문장의 주석을 해제하라고 적혀 있습니다.

![20200901ko.cjs-08](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-08.png)

Gemfile을 저장한 다음, `D:\Workspace\Jekyll` 안에 있는 모든 파일을 여러분이 만든 `사용자.github.io` 리포지터리에 넣으시면 됩니다. 여러분의 GitHub Pages의 주소는 `https://사용자.github.io`에서 볼 수 있으며, 사이트가 적용되기까지 대략적으로 5분간 시간이 소요됩니다. 

이번 게시글을 통해 Jekyll 설치 및 GitHub Pages를 위한 사이트 생성 방법을 알아보셨습니다. 분명 Jekyll을 활용한 GitHub Pages 관리는 개발자를 꿈꾸는 분들께 관심있는 분야인 동시에 한국어 자료가 흔치 않을 것으로 보입니다. 다음에 더 유익한 Jekyll 내용을 알려드릴 것을 약속하며, 저의 Jekyll 작업 환경과 함께 이번 게시글을 마치겠습니다.

![20200901ko.cjs-09](/assets/images/blog/ko.creating-jekyll-site/20200901ko.cjs-09.png)

[jekyll-site]: https://jekyllrb.com/
[ruby-installer]: https://rubyinstaller.org/downloads/
[ko.wikipedia-markdown]: https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4
[vscode-download]: https://code.visualstudio.com/download
[dependency-ver]: https://pages.github.com/versions/