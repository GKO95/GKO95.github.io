---
layout: docs
language: ko
category: 웹사이트
title: Jekyll
tags: GitHub_Pages Jekyll
order: 0x01
toc: false
---
# JEKYLL: 소개
[Jekyll](https://jekyllrb.com/)은 정적 사이트 생성기로 GitHub Pages를 생성하는데 사용할 수 있다. Ruby 프로그래밍 언어로 작성되었으며, 블로그나 프로젝트 페이지, 심지어 간단한 홈페이지를 만드는데 활용된다. 본 문서는 Ruby 언어에 대한 심층적 지식을 요구하지 않으므로 프로그래밍 언어 설명은 포함되지 않으며, 오로지 Jekyll을 위해 필요한 구성요소 설치, 설정, 그리고 디자인을 중점으로 다룬다.

## GitHub Pages 생성
우선 개인 GitHub Pages 웹사이트를 생성하기 위해서는 리포지터리를 만들어야 하는데, 사용자 아이디 뒤에 `.github.io`만 붙이면 된다. 필자의 아이디는 GKO95이므로 GitHub Pages로 사용할 리포지터리 명칭을 `GKO95.github.io`로 지정한다.

![그림 1. GitHub Pages 리포지터리](/images/blog/DOCS_Jekyll/jekyll_github_io.png)

그리고 리포지터리의 GitHub Pages를 활성화하기 위해서는 `Settings` → `Options` → `GitHub Pages`에서 Source에서 branch 및 folder을 선택하여 저장한다. 설정을 저장하면 GitHub Pages 주소가 나타나지만, 활성화 및 적용에는 다소 시간이 소모되므로 최대 5분 정도 기다려본다. 리포지터리 안에 HTML 파일을 추가하여 원하는 디자인과 기능을 직접 꾸미면 해당 주소에 반영되는 것을 볼 수 있다.

# JEKYLL: 설치
Jekyll은 Ruby 언어로 개발되었으므로 프로그래밍 언어 설치가 필요로 하다. macOS나 리눅스와 같은 UNIX 시스템에서는 Ruby 설치가 매우 간단하지만, 윈도우 OS에서 설치하려면 몇 가지의 절차가 존재한다. [RubyInstaller](https://rubyinstaller.org/downloads/)에서 `WITH DEVKIT` 중에 `=>`와 함께 볼드체로 표시된 설치 파일을 다운로드 받고 실행한다.

![그림 2. 윈도우 OS에서 Ruby 프로그래밍 언어 설치 (1단계)](/images/blog/DOCS_Jekyll/jekyll_ruby_install1.png)

RubyInstaller 설치 중 맨 마지막에 `ridk install` 실행 여부를 체크하는 박스가 있는데 *절대로* 체크를 해제하면 안된다! Ruby 프로그래밍 언어를 윈도우 OS에 구동하는데 필요한 작업을 처리하기 위해서이다. Finish 버튼을 클릭하면 아래의 명령창이 나타난다.

![그림 3. 윈도우 OS에서 Ruby 프로그래밍 언어 설치 (2단계)](/images/blog/DOCS_Jekyll/jekyll_ruby_install2.png)

숫자 1~3을 입력해서 원하는 옵션을 선택하라고 적혀있지만, 그냥 Enter 키를 누르시면 알아서 필요한 작업을 처리한다. 명령창에서 몇 가지 프로그램을 설치 및 설정 작업이 진행되고 마무리가 되었을 시, 다시 한 번 Enter 키를 눌러서 명령창을 종료한다.

Ruby 설치가 완료되었으면, 다음으로 Jekyll과 Bundler를 설치한다. 명령 프롬프트(command prompt; cmd) 혹은 파워셸(powershell)을 열어 다음 명령어를 입력한다.

```bash
gem install 'jekyll:3.9.0' 'bundler'
```

여기서 Jekyll 버전은 3.9.0으로 명시되어 있는데, 이는 GitHub Pages와의 호환성 때문이다 (2020년 9월 4일 기준). 호환 버전은 시간이 지나면서 변하므로 반드시 [GitHub Pages: Dependency versions](https://pages.github.com/versions/)에서 확인하여 올바른 버전을 설치하도록 한다.

설치가 완료되었는지 확인하려면 `jekyll -v`를 입력한다. Jekyll 버전이 나타나면 정상적으로 설치되었음을 의미하므로 본격적으로 사용할 준비는 모두 마무리된다.

# JEKYLL: 생성
Jekyll 설치가 완료되었으면 GitHub Pages 리포지터리 안에 Jekyll을 실행하여 사이트를 생성한다. Jekyll은 명령 프롬프트나 파웨셸을 통해서만 동작할 수 있으므로 터미널 창을 항상 준비하기를 권장한다. 이러한 점을 감안하여 본 장에서는 Jekyll을 [비주얼 스튜디오 코드](https://code.visualstudio.com/download)(VS Code)에서 사용하는 것을 보여준다.

우선 VS Code에서 로컬 시스템으로 클론한 GitHub Pages 리포지터리를 연다. 폴더 이름은 `GKO95.github.io`와 같이 되어야 하나, 본 문서에서는 임시로 생성한 폴더로 예시를 보여주기 때문에 `D:\Workspace\Jekyll`로 되어 있는 점에 양해 부탁드립니다.

![그림 4. VS Code에서 GitHub Pages 리포지터리 열기](/images/blog/DOCS_Jekyll/jekyll_create_vscode.png)

VS Code 내에서 <code>CTRL + `</code> 단축키를 눌러 파워셸 터미널을 켠다. 여기서 <code>`</code>는 따옴표가 아닌 억음 부호(punctuation mark)로 물결표(`~`) 버튼과 함께 위치한다. 이때 나타난 터미널 창의 경로는 자동으로 현재 VS Code에서 열고 있는 폴더로 이동되어 있다. 그리고 터미널 창에 아래 명령어를 입력한다.

```bash
jekyll new .
```

![그림 5. Jekyll 사이트 생성](/images/blog/DOCS_Jekyll/jekyll_create_new.png)

Bundler가 Jekyll 사이트를 생성에 필요한 구성요소를 설치하는데 시간이 다소 걸린다. 결과적으로 GitHub Pages 리포지터리 폴더 안에는 HTML과 마크다운 등 여러 종류의 파일을 확인할 수 있다. 생성된 사이트를 실행하려면 아래의 명령어를 터미널에 입력한다.

```bash
bundle exec jekyll serve 
```

![그림 6. Jekyll 사이트 실행](/images/blog/DOCS_Jekyll/jekyll_bundle_exec.png)

위의 명령어를 대략적으로 설명하자면 Bundler를 통해 Jekyll 사이트를 실행시키는 것이다. 실행한 Jekyll 사이트는 터미널의 `Server address:`라고 적힌 주소에서 볼 수 있으며, 해당 주소를 인터넷 브라우저로 열면 아래 화면처럼 나타난다.

![그림 7. 브라우저에서의 실행된 Jekyll 사이트](/images/blog/DOCS_Jekyll/jekyll_bundle_run.png)

방금 명령어까지 입력한 것으로 Jekyll 사이트를 생성하여 실행하는 절차를 모두 진행하였다. 현재 보이는 디자인은 Jekyll에서 기본적으로 제공하는 디자인으로, 원하면 그대로 사용할 수 있다. 실행 중인 Jekyll 사이트는 인터넷 브라우저를 종료해도 터미널이 열려있는 한 계속 활성화되어 있다. Jekyll 사이트를 종료하려면 터미널을 종료하거나, 아니면 `CTRL+C`를 누른 다음에 `Y` 버튼을 누른다.

그러나 본 문서의 최종 목적은 Jekyll 사이트를 GitHub Pages로 실행하는 것이다. 현재 생성된 Jekyll 사이트에 있는 `Gemfile` 파일을 열어보면 16~18번 줄에 다음과 같은 설명이 적혀있다.

```ruby
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
```

주석에 달린 설명에 의하면 GitHub Pages에 사용하기 위해서는 위의 `gem "jekyll"` 문장을 삭제하고 아래의 `gem "github-pages", group: :jekyll_plugins` 문장의 주석을 해제한다.

![그림 8. GitHub Pages를 위한 Gemfile 변경 내용](/images/blog/DOCS_Jekyll/jekyll_gemfile_ghpages.png)

# JEKYLL: 설정
이전 장으로부터 매우 기본적인 Jekyll 사이트를 생성하여 실행까지 되는 것을 확인하였다. 그러나 사용자가 원하는대로 사이트 구조를 변경하거나 새로운 콘텐츠를 추가하기 위해서는 무엇을 편집해야 할 지 모르는 경우가 대다수이다. 본 장에서는 생성된 Jekyll 사이트의 이해와 활용도를 향상시키기 위한 구조 및 설정 방법에 대하여 설명한다.

## Jekyll 폴더 구조
Jekyll 사이트를 생성하면 아래와 같은 폴더와 파일들로 이루어진 것을 볼 수 있으며, 이들은 다음과 같은 역할을 한다:

![그림 9. Jekyll 사이트 구성 파일 및 폴더](/images/blog/DOCS_Jekyll/jekyll_config_files.png)

| 파일             | 설명                                      |
|:--------------:|-----------------------------------------|
| `_config.yml`  | Jekyll 사이트 설정                           |
| `.gitignore`   | GitHub 리포지터리에 업로드 시 필터링되는 파일 목록         |
| `404.html`     | GitHub Pages 내에서 잘못된 경로를 접속할 때 나타나는 페이지 |
| `about.md`     | GitHub Pages 소개글 페이지                    |
| `Gemfile`      | Jekyll 사이트에서 사용할 Ruby 구성요소 그리고 버전 선택    |
| `Gemfile.lock` | 동일한 Ruby 작업환경을 유지할 수 있도록 설정 잠금         |
| `index.md`     | GitHub Pages 메인 페이지                     |

이 중에서 `_site` 그리고 `.sass-cache` 폴더는 자동 생성 폴더라서 신경쓰지 않아도 된다. 삭제하여도 나중에서 다시 `build exec jekyll serve` 명령어를 입력하면 다시 생성되기 때문아다. 심지어 GitHub에 올릴 불필요한 파일을 필터링하는 `.gitignore` 파일에서도 이 둘은 무시하는 폴더로 지정되어 있다.

### `_posts` 폴더
블로그 형식 게시글을 담는 폴더이다. Jekyll 사이트를 생성하면 기본적으로 게시글 하나가 해당 폴더 안에 들어있으며, 브라우저에서는 아래와 같이 보여진다.

![그림 10. Jekyll의 "post" 형식 게시글 예시](/images/blog/DOCS_Jekyll/jekyll_config_post.png)

이를 바탕으로 Jekyll을 처음 접하는 사용자들은 `_posts` 폴더에 게시글을 올리려고 시도하지만 대부분 실패한다. 왜냐하면 직접 작성한 마크다운이 보이지 않기 때문이다. 그러나 이는 `_posts` 폴더가 가지는 고질적인 문제로 *마크다운 파일명을 날짜로 시작*해야만 게시글이 반영된다.

```
YYYY-MM-DD-파일명.md
```

실제로 많은 Jekyll 사용자들은 이를 불편하게 여기지만 변경할 수가 없어 아예 `_posts` 폴더를 사용하지 않는 것을 추천한다. 그리고 `_posts` 폴더를 사용하지 않으면서 게시글을 올리기 위해서는 Jekyll 설정 방법을 이후 Jekyll 컬렉션 부문에 다룰 예정이다.

### `_site` 폴더
Jekyll로 생성된 구성요소들로부터 HTML 형식으로 변환한 사이트를 담고 있다. 실제로 GitHub Pages 방문자는 `_site` 폴더 내의 파일 구조를 따라 각 페이지를 접속하기 때문에 사이트 구조를 확인하거나 상대경로를 지정할 때에는 좋은 참고자료가 된다. 해당 폴더는 `build exec jekyll serve` 명령어를 입력하면 자동적으로 생성 및 업데이트가 되며, 이미 명령어가 실행 중이면 파일에 변화가 감지될 때마다 자동 업데이트 된다.

### `.sass-cache` 폴더
SCSS 파일을 더 빨리 처리할 수 있도록 컴파일하여 저장하는 임시 폴더이다. SCSS 파일이란, HTML을 꾸며주는 CSS 파일과 동일한 역할을 하나 Ruby 언어가 지원되는 특징을 가진다. 하지만 `.scssc` 확장자를 가지는 SCSS 컴파일 파일은 이진코드로 변환되어 작성된 내용은 확인이 불가능하다.

## Jekyll 설정 파일
위의 부문에서 Jekyll 사이트의 기본적인 구조를 설명하였으면, 해당 부문에서는 Jekyll 사이트를 설정하는 방법에 대하여 소개한다. 특히 `_config.html` 그리고 `Gemfile` 및 `Gemfile.lock` 파일들이 핵심이다.

### `Gemfile`
Python 언어에서 [모듈](/docs/ko.PRGMING_Python/#모듈)(module)이란 배포용 라이브러리가 있으면, 이와 유사하게 Ruby 언어에서는 젬(gem)이 존재한다. 그리고 [Jekyll](https://rubygems.org/gems/jekyll) 또한 Ruby의 젬 중 하나이다. 이러한 이유로 Jekyll 생성 과정에서 Ruby를 설치한 것이며, Ruby 언어가 지원되는 SCSS 파일이 지속적으로 언급된 것이다.

`Gemfile` 파일은 현재 Ruby에 적용되고 있는 젬들을 관리하는 파일이다. Jekyll 사이트를 생성 및 사용하는 과정에서 `Gemfile`을 직접 수정한 적이 있으며, 바로 Jekyll을 GitHub Pages에 사용할 수 있도록 주석에 달린 설명대로 편집한 때이다. `jekyll` 젬을 Gemfile에서 제거하였는데 여전히 Jekyll을 사용할 수 있는 이유는 바로 `github-pages` 젬이 내부적으로 `jekyll` 젬을 호출하기 때문이다. Ruby 언어의 젬 저장소인 [rubygems.org](https://rubygems.org/)을 확인하면 `github-pages`가 `jekyll`을 디펜던시(dependency), 즉 의존하므로 자동적으로 두 젬을 함께 사용하게 된다.

`Gemfile` 내의 내용들은 각각 다음과 같은 의미를 가진다: 첫 번째 줄은 젬을 호출하는 기본 서버를 선정하는 코드이다.

```ruby
source "https://rubygems.org"
```

서버 선정 이후, 가져올 젬을 코드에 입력하면 해당 젬을 서버에서 불러와 Ruby 언어에 사용할 수 있다. 아래 문장은 그 중에서 현재 Jekyll 사이트에 적용되고 있는 minima 테마 젬에 대한 내용이다.

```ruby
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"
```

기본 서버에서 `minima` 젬을 적용하되, 버전은 2.0 이상(`">= 2.0"`)이고 3.0 미만(`"< 3.0"`)이어야 함을 의미한다. 만일 2.1 버전을 원한다면 간단히 `"2.1"`이라고 입력한다.

```ruby
gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end
```

`github-pages` 젬을 필두로 `jekyll_plugins` 그룹을 구성한다. 위의 코드에 의하면 현재 그룹에는 버전 0.6 이상이며 1.0 미만의 `jekyll-feed` 젬을 포함한다. 그룹은 Ruby 젬을 편리하기 관리할 수 있도록 하며, 젬 업데이트 시 묶음으로 제외하는 등에 활용된다.

`Gemfile`에 사용할 젬을 입력하는데 버전 선택은 매우 중요하며, 버전 차이로 인해 의도치 않은 방식으로 동작하거나 호환성 문제가 발생할 수 있다. 간단한 예시로 기본적으로 설치된 `minima` 젬 버전을 아래의 명령어로 확인해 본다.

```bash
gem list
```

확실히 버전은 2.0 이상이고 3.0 미만 버전이 나오겠지만, 간혹 그 내부에서도 버전간 큰 기능성 차이가 존재할 수 있다. 만일 현재 적용된 젬을 현재 Jekyll 사이트에 유지시키기 위해서는 버전을 고정시킬 필요가 있다. 그리고 이러한 역할을 하는 파일이 바로 `Gemfile.lock`이다.

`Gemfile.lock` 내용을 확인하면 여러 젬들과 버전들이 명시되어 있는 것을 확인할 수 있다. 이들은 실제로 Ruby에 적용되는 젬들이며, 한 번 생성되면 업데이트 명령어를 입력하거나 삭제되지 않는 이상 버전을 그대로 유지한다. 젬 업데이트를 하려면 다음 명령어를 입력한다:

```bash
bundle update
```

`Gemfile.lock`이 없을 경우, `Gemfile`에 명시된 젬들을 기반으로 새로 생성된다. 특히 `Gemfile.lock`는 다른 컴퓨터에서도 동일한 버전의 젬을 그대로 적용하여 사용할 수 있도록 하여 작업환경 유지에 매우 중요한 역할을 지닌다.

### `_config.yml`
`Gemfile`은 Ruby 작업환경을 관리한다면 `_config.yml`(혹은 `_config.toml`)은 Jekyll 설정을 관리하는 파일이다. 내용을 보면 가장 먼저 아래와 같은 코드를 확인할 수 있다.

```yml
title: Your awesome title
email: your-email@example.com
description: >- # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: jekyllrb
github_username:  jekyll
```

이들은 사실 HTML과 직접적으로 연동된 데이터가 아니다: `title`을 수정하면 이게 바로 HTML 웹사이트 제목이 되지 않는다. 정확히 말하자면 Jekyll에 지원되는 [Liquid](https://shopify.github.io/liquid/) 템플릿 언어를 위한 데이터이다. Liquid 템플릿 언어는 브라우저에 `F12`를 눌러 열리는 개발자 도구에서도 확인할 수 없으므로 직접 소스 코드를 확인해야 한다. 아래는 minima 테마 하단부에 어떻게 웹사이트 제목이 나타나는지 보여주는 소스 코드의 일부이다.

```html
<h2 class="footer-heading">{% raw %}{{ site.title | escape }}{% endraw %}</h2>
```

개발자 도구로 확인이 불가능한 이유는 HTML 사이트로 변환하면서 Liquid 템플릿 언어가 해당 위치를 `title` 데이터로 채워 넣기 때문이다. 다시 말해, `_config.yml`에 입력한 내용들은 Liquid 언어를 통해 HTML에 지정된 위치에 반영된다.

# JEKYLL: 디자인
새로 생성된 Jekyll 사이트는 기본적으로 minimal 테마 디자인이 적용되어 있다. 다른 테마를 불러와 사용할 수 있으며, 심지어 불러온 테마를 사용자가 원하는대로 변경할 수도 있다. 본 장에서는 Jekyll 디자인 변경 방법에 대하여 설명한다.

## Jekyll 테마 불러오기
Jekyll 사이트에 테마를 불러오는 것은 가장 간단한 설정 변경 중 하나이다. 테마 변경을 위해서는 `Gemfile`과 `_config.yml` 파일을 수정해야 하므로 이번 부문에 매우 적합한 예시이다. Jekyll에서 다른 테마를 불러오는 방법으로 `theme`과 `remote_theme` 옵션을 이용하는 두 가지 방법이 존재한다.
 
### `theme` 옵션
Jekyll 테마를 변경하는 가장 기본적인 방법으로 서버에 등록된 테마 젬을 불러오는 것이며, 현재 minima 테마가 `theme` 옵션으로 Jekyll에 적용되어 있다. 본 부분에서는 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)라는 다른 테마를 적용하는 것을 보여준다.

> 본 내용은 테마를 설정하는 방법을 아주 간략하게 소개한다. 각 테마마다 요구하는 플러그인이 있을 수 있으므로 각 Jekyll 테마 소스코드 리포지터리에 있는 `README.md` 파일을 반드시 주의깊게 읽도록 한다.

우선 `Gemfile` 파일에서 사용하고자 하는 테마를 입력한다. 기존에 있던 minima 테마를 주석처리하여 호출하지 않도록 만들고 추가하고자 하는 minimal-mistakes 테마를 아래와 같이 입력한다.

```ruby
# gem "minima", "~> 2.0"
gem 'minimal-mistakes-jekyll', '~> 4.21'
```

그러나 이대로 번들을 실행하면 `Gemfile.lock` 파일로 인해 이전에 적용된 minima 테마가 그대로 나타난다. `Gemfile.lock`을 업데이트하기 위해 아래의 명령어를 입력한다.

```bash
bundle update
```

그러면 `Gemfile.lock`은 `Gemfile`에 변경된 내용에 따라 필요한 젬을 새로 설치하고, 필요없는 젬을 제거한다. 젬 업데이트가 완료되었으면 `_config.yml` 파일을 수정하여 Jekyll 설정에서 테마를 불러온다. 

```yml
# theme: minima
theme: minimal-mistakes-jekyll
```

하지만 가장 좋은 방법은 해당 테마 리포지터리에에 있는 `_config.yml`을 그대로 가져와 사용하는 것이다. Jekyll을 위해 추가로 설치한 젬이나 레이아웃 등을 테마와 제대로 연동시키기 위해서는 `theme` 옵션만 바꿔서는 되지 않기 때문이다. minimal-mistakes의 경우, [여기](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/_config.yml)에 있는 내용을 그대로 복사해 사용해도 된다.

이제 `bundle exec jekyll serve` 명령어로 Jekyll을 실행하면 변경된 테마를 직접 확인할 수 있다. 일부 경우에는 터미널에 아래와 같은 경고문이 나타난다.

```
Build Warning: Layout 'page' requested in about.md does not exist.
```

이는 테마에서 선정한 레이아웃 이름이 아닌 다른 레이아웃을 발견하였을 때 나타나는 경고문이다. Jekyll 사이트는 정상적으로 실행되겠지만, 위의 경고문에서 알려준 `about.md` 문서는 레이아웃이 적용되지 않은 채로 나타나게 된다. 레이아웃에 대한 내용은 다음 장에서 Jekyll 디자인 내용을 다룰 때 설명할 예정이다.

### `remote_theme` 옵션
일부 테마는 `theme`이 아닌 `remote_theme` 옵션으로 테마를 설정한다. 이번 부분에서는 [jekyll-rtd-theme](https://github.com/rundocs/jekyll-rtd-theme)라는 테마를 적용하는 것을 보여준다. 우선 해당 옵션을 사용하기 위해서는 `jekyll-remote-theme` 플러그인이 필요하며 다음과 같이 `Gemfile`에 젬을 추가한다 (`group :jekyll-plugins` 그룹 안에 넣기를 권장한다).

```ruby
# theme: minima
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-remote-theme"
end
```

그러나 이대로 번들을 실행하면 `Gemfile.lock` 파일로 인해 새로 넣은 플러그인이 적용되지 않는다. `Gemfile.lock`을 업데이트하기 위해 아래의 명령어를 입력한다.

```bash
bundle update
```

그러면 `Gemfile.lock`은 `Gemfile`에 변경된 내용에 따라 필요한 젬을 새로 설치하고, 필요없는 젬을 제거한다. 젬 업데이트가 완료되었으면 `_config.yml` 파일을 수정하여 Jekyll 설정에서 테마를 불러온다. 

```yml
# theme: minima
remote_theme: minimal-mistakes-jekyll
```

하지만 가장 좋은 방법은 해당 테마 리포지터리에에 있는 `_config.yml`을 그대로 가져와 사용하는 것이다. Jekyll을 위해 추가로 설치한 젬이나 레이아웃 등을 테마와 제대로 연동시키기 위해서는 `theme` 옵션만 바꿔서는 되지 않기 때문이다. jekyll-rtd-theme의 경우, [여기](https://raw.githubusercontent.com/rundocs/jekyll-rtd-theme/develop/_config.yml)에 있는 내용을 그대로 복사해 사용해도 된다.

## Jekyll 디자인 구조
저번 장에서는 Jekyll 사이트를 구성하는 폴더 및 파일에 대하여 대략적으로 설명하였다. Jekyll 테마 디자인에서도 이러한 구조적인 면이 존재한다. 이를 활용하면 기존의 테마를 사용자가 원하는 디자인으로 변경할 수 있으며, 심지어 커스텀 테마를 제작할 수 있다. 예를 들어 minima 테마를 수정해서 사용하려고 하면 먼저 해당 테마의 소스코드가 필요하며, 이는 아래의 명령어를 입력하여 소스코드 위치를 확인할 수 있다.

```bash
bundle info --path minima
```

터미널에서는 minima 테마의 코드가 어디에 위치하는지 알려준다. 해당 경로로 이동하면 다음과 같이 폴더와 파일이 구성된 것을 확인할 수 있다.

![그림 11. Jekyll의 minima 테마 소스코드](/images/blog/DOCS_Jekyll/jekyll_minima_source.png)

여기서 명시해야 할 점음 밑줄(`_`)로 시작하는 폴더 및 파일들은 HTML로 변환될 때 나타나지 않으며 오로지 Jekyll에서만 다루어진다. 이와 마찬가지로 이전 게시글에서 소개한 `_config.yml` 파일과 `_site` 폴더도 Jekyll 관리용으로만 사용되어 HTML 사이트로 변환될 때에는 찾아볼 수 없다. 

### `_includes` 폴더
레이아웃을 구성하는 HTML 구성요소이다. 대표적으로 페이지 상단부인 `header.html`, 하단부인 `footer.html` 등의 구성요소를 레이아웃에 적용하기 위해서는 아래 코드를 입력한다.

```liquid
{% raw %}{% include header.html %}{% endraw %}
```

### `_layouts` 폴더
HTML 혹은 마크다운에 적용할 레이아웃을 담는 폴더이다. 레이아웃이란, 콘텐츠만 넣으면 완전한 페이지가 완성되는 기본적인 HTML 디자인 틀이다. 만일 `home.html` 레이아웃을 적용시키기 위해서는 아래의 코드를 파일 맨 위에 입력한다.

```ruby
{% raw %}---
layout: home
---{% endraw %}
```

레이아웃에 들어가는 콘텐츠는 다음 코드로부터 삽입된다.

```liquid
{% raw %}{{content}}{% endraw %}
```

### `_sass` 폴더
HTML 테마 디자인에 사용되는 스타일들을 담는 폴더이다. 여기에서 CSS가 아닌 SCSS 혹은 SASS를 사용하여 여러 스타일시트를 하나로 취합해 관리할 수 있다. 만일 `/_sass/home.scss` 스타일시트를 불러오기 위해서는 `@import "home";` 코드를 입력한다.

이렇게 불러와서 취합된 SCSS 및 SASS는 하나의 CSS로 변환되어 최종적으로 테마 스타일에 적용된다. CSS로 변환될 스타일시트는 반드시 아래와 같이 두 줄의 `---` 코드로 시작해야 한다.

```sass
---
---

// 여기서부터 스타일시트 작성 혹은 불러오기
@import "home";
```

또한 CSS로 변환될 SCSS 파일은 `asset` 폴더와 같이 HTML에서 보여지는 경로에 위치시킨다.

### `assets` 폴더
테마를 구동하는데 필요한 리소스들을 담는 폴더이다. 이 안에는 HTML 렌더링에 필요한 스타일시트, 아이콘, 자바스크립트 등의 파일들을 넣어둔다. 이는 Jekyll 관리전용 폴더가 아닌 순수히 리소스 저장공간이므로 `assets`는 통상적인 폴더명이며 명칭은 바꾸어도 아무런 문제가 없다.

## Jekyll 테마 수정하기
위 부문에서 설명한 Jekyll 테마 디자인 구조를 알고 있으면 수정하고 싶은 HTML 파일 경로를 그대로 가져와 손쉽게 변경할 수 있다. HTML 페이지 하단부, 즉 `footer.html`을 변경하고 싶다고 예시를 든다: 그러면 아래와 같이 `/_includes/footer.html`을 Jekyll 폴더에 추가하면 됩니다.

![그림 12. Jekyll의 minima 테마 디자인의 하단부 수정](/images/blog/DOCS_Jekyll/jekyll_minima_edit.png)

현재 `footer.html`에는 아무런 코드가 작성되지 않은 빈 파일이다. 만일 minima 테마의 코드가 아닌 Jekyll 폴더의 코드가 적용되었다면 HTML 페이지 하단부에는 빈 공간이 나타나야 한다. 이를 확인하기 위해 `bundle exec jekyll serve` 명령어를 터미널에 입력하면 다음과 같이 나타난다.

![그림 13. Jekyll의 minima 테마 디자인의 하단부 수정 모습](/images/blog/DOCS_Jekyll/jekyll_minima_change.png)

이를 통해 Jekyll 폴더에서 동일한 HTML 이름의 코드를 작성하면 기존 테마 디자인 코드가 오버라이트(overwrite), 즉 덮어쓰여진다는 점을 확인할 수 있다. 이를 기반으로 사용자는 원하는 테마를 가져와서 일부분만 개개인 취향에 맞게 간단히 수정할 수 있으며, 구성요소만이 아닌 레이아웃과 스타일시트, 그리고 리소스 또한 변경이 가능하다.

# JEKYLL: 컬렉션
Jekyll 사이트의 구조를 설명하였을 시 `_posts`는 블로그 형식의 게시글을 담는 폴더이지만 마크다운 파일명이 반드시 `YYYY-MM-DD-제목.md` 형식을 지켜야 한다는 치명적인 단점이 있다고 지적하였다. 많은 사용자들은 `_posts` 폴더를 비추천하는 대신 Jekyll의 컬렉션(Collection) 기능을 주로 사용하는 것을 권장한다.

아래는 필자의 GitHub Pages에 적용된 `_config.yml` 컬렉션 설정이다.

```yml
# Jekyll 컬렉션
collections:
  # _docs 폴더
  docs:
    output: true
    permalink: /:collection/:path/   # 고유링크: /docs/문서파일
  # _blog 폴더
  blog:
    output: true
    permalink: /:collection/:path/   # 고유링크: /blog/문서파일
    sort_by: date                    # 정렬 순서: date
```

이렇게 지정한 컬렉션은 `_posts`처럼 해당 이름의 폴더가 HTML 사이트에 반영되어 문서를 수월하게 관리할 수 있다. 심지어 날짜형식의 파일명을 사용하지 않아도 되어 훨씬 편리하다고 사용할 수 있다. 만일 위와 같이 컬렉션을 지정하지 않은 상태에서 폴더를 생성하면 결과적으로 HTML에 나타나지 않는다.

# JEKYLL: 프론트 매터
마크다운 문서에 레이아웃을 지정하는 것은 아래와 같은 코드를 통해 이루어진다고 설명하였다.

```ruby
{% raw %}---
layout: home
title: "문서 제목 01"
---{% endraw %}
```

이들은 마크다운에서 프론트 매터(front matter)라고 부르며, [Liquid](https://shopify.github.io/liquid/) 템플릿 언어에서는 이들을 할당된 값을 호출할 수 있어 문서를 관리에 유용하게 사용될 수 있다. 이전 게시글에서 `_config.yml` 파일 내에 `title`에 할당된 데이터를 가져오기 위해 다음과 같은 Liquid 구문을 사용하였다.

```liquid
{% raw %}{{ site.title }}{% endraw %}
```

프론트 매터를 사용하면 위와 같은 방식으로 문서를 관리 및 정돈, 심지어 필터링까지 가능하다. 그리고 이는 Jekyll의 컬렉션과 함께 사용되면 효율성이 배로 높아진다. 만일 `_docs` 컬렉션 안에 있는 모든 파일의 `title` 프론트 매터를 확인하기 위해서는 다음과 같은 Liquid 구문을 입력한다.

```liquid
{% raw %}{% for document in site.docs %}
{{ document.title }}
{% endfor %}{% endraw %}
```

이렇게 프론트 매터를 HTML에 활용하여 테마를 디자인하면 매우 간단한 자바스크립트 머지않은 기능성을 GitHub Pages에 부여할 수 있다. 결국 Jekyll을 활용도를 높이는기 위해서는 Liquid 템플릿 언어를 잘 활용할 수 있어야 한다.
