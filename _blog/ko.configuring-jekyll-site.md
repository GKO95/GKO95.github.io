---
layout: post
lang: ko
title: "GitHub Pages를 위한 Jekyll 설정하기"
date: 2020-12-05 00:00:00 + 0900
edited: 2020-12-06 13:38:00 +0900
tags: GitHub_Pages Jekyll
---
# GitHub Pages를 위한 Jekyll 설정하기
이전 *["GitHub Pages를 위한 Jekyll 생성하기"](/blog/ko.creating-jekyll-site.html)* 게시글에서는 Jeykll을 사용하여 GitHub Pages를 생성하는 방법을 설명하였습니다. 하지만 Jekyll을 처음으로 접한 대다수의 사용자는 원하는 내용을 어디서 그리고 어떻게 추가하거나 수정해야 하는지 모릅니다. 결국 의욕이 떨어져 생성한 Jekyll을 방치하는 대학교 후배를 보기도 하였습니다. 이러한 문제점을 인식하고 이번 내용은 생성된 Jekyll 사이트의 이해와 활용도를 향상시키기 위한 구조 및 설정 방법에 대하여 설명합니다. 

## Jekyll 폴더 구조
이전 게시글에서 설명한 Jekyll 생성 방법을 그대로 따랐으면 아래와 같은 폴더와 파일로 이루어진 것을 볼 수 있습니다.

![20201205ko.cjs-01](/assets/images/blog/ko.configuring-jekyll-site/20201205ko.cjs-01.png)

위에 보이는 파일들은 다음과 같은 역할을 합니다:

| 파일             | 설명                                      |
|:--------------:|-----------------------------------------|
| `_config.yml`  | Jekyll 사이트 설정                           |
| `.gitignore`   | GitHub 리포지터리에 업로드 시 필터링되는 파일 목록         |
| `404.html`     | GitHub Pages 내에서 잘못된 경로를 접속할 때 나타나는 페이지 |
| `about.md`     | GitHub Pages 소개글 페이지                    |
| `Gemfile`      | Jekyll 사이트에서 사용할 Ruby 구성요소 그리고 버전 선택    |
| `Gemfile.lock` | 동일한 Ruby 작업환경을 유지할 수 있도록 설정 잠금         |
| `index.md`     | GitHub Pages 메인 페이지                     |

이 중에서 `_site` 그리고 `.sass-cache` 폴더는 자동 생성 폴더라서 신경쓰지 않아도 됩니다. 삭제하신다 하더라도 나중에서 다시 `build exec jekyll serve` 명령어를 입력하면 다시 생성되기 때문입니다. 심지어 GitHub에 올릴 불필요한 파일을 필터링하는 `.gitignore` 파일에서도 이 둘은 무시하는 폴더로 지정되어 있습니다.

### `_posts` 폴더
블로그 형식 게시글을 담는 폴더입니다. Jekyll 사이트를 생성하였으면 기본적으로 게시글 하나가 해당 폴더 안에 들어있으며, 이는 HTML에서는 아래와 같이 보여집니다.

![20201205ko.cjs-02](/assets/images/blog/ko.configuring-jekyll-site/20201205ko.cjs-02.png)

이를 바탕으로 Jekyll을 처음 접하는 사용자들은 `_posts` 폴더에 게시글을 올리려고 하지만 대부분 실패합니다. 왜냐하면 직접 작성한 마크다운이 보이지 않기 때문입니다. 이는 `_posts` 폴더가 가지는 고질적인 문제로 *마크다운 파일명을 날짜로 시작*해야만 나타납니다.

```
YYYY-MM-DD-파일명.md
```

실제로 많은 Jekyll 사용자들은 이를 불편하게 여기지만 변경할 수가 없어 `_posts` 폴더를 사용하는 것을 추천하지 않습니다. 그리고 `_posts` 폴더를 사용하지 않으면서 게시글을 올리기 위해서는 Jekyll 설정 방법을 절대 빼놓을 수가 없습니다.

### `_site` 폴더
Jekyll로 생성된 구성요소들로부터 HTML 형식으로 변환한 사이트를 담고 있습니다. 실제로 GitHub Pages 방문자는 `_site` 폴더 내의 파일 구조를 따라 각 페이지를 접속하기 때문에 사이트 구조를 확인하거나 상대경로를 지정할 때에는 좋은 참고자료가 됩니다. 해당 폴더는 `build exec jekyll serve` 명령어를 입력하면 자동적으로 생성 및 업데이트가 되며, 이미 명령어가 실행 중이면 파일에 변화가 감지될 때마다 자동 업데이트 됩니다.

### `.sass-cache` 폴더
SCSS 파일을 더 빨리 처리할 수 있도록 컴파일하여 저장하는 임시 폴더입니다. SCSS 파일이란, HTML을 꾸며주는 CSS 파일과 동일한 역할을 하나 Ruby 언어가 지원되는 특징을 가집니다. 하지만 `.scssc` 확장자를 가지는 SCSS 컴파일 파일은 이진코드로 변환되어 작성된 내용은 확인이 불가능합니다.

## Jekyll 설정법
위의 장에서는 Jekyll 사이트 구조를 설명하면서 구성하는 파일 및 폴더에 대하여 알려드렸습니다. 특히 `_config.yml` 그리고 `Gemfile` 및 `Gemfile.lock`은 이번 게시글의 가장 핵심 내용이므로 자세하게 소개하려고 합니다.

### `Gemfile` 파일
Python 언어에서 모듈(module)이란 배포용 라이브러리가 있으면, 이와 유사하게 Ruby 언어에서는 젬(gem)이 존재합니다. 그리고 [Jekyll](https://rubygems.org/gems/jekyll) 또한 Ruby의 젬 중 하나입니다. 이러한 이유로 Jekyll 생성 과정에서 Ruby를 설치한 것이며, Ruby 언어가 지원되는 SCSS 파일이 지속적으로 언급된 겁니다.

`Gemfile` 파일은 현재 Ruby에 적용되고 있는 젬들을 관리하는 파일입니다. Jekyll 사이트를 생성 및 사용하는 과정에서 `Gemfile`을 직접 수정한 적이 있으며, 해당 내용은 *"GitHub Pages를 위한 Jekyll 생성하기 § Jekyll 사용법"*에 언급되어 있습니다.

> GitHub Pages에 사용하기 위해서는 위의 `gem "jekyll"` 문장을 삭제하고 아래의 `gem "github-pages", group: :jekyll_plugins` 문장의 주석을 해제하라고 적혀 있습니다.

`jekyll` 젬을 Gemfile에서 제거하였는데 여전히 Jekyll을 사용할 수 있는 이유는 바로 `github-pages` 젬이 내부적으로 `jekyll` 젬을 호출하기 때문입니다. Ruby 언어의 젬 저장소인 [rubygems.org](https://rubygems.org/)을 확인하면 `github-pages`가 `jekyll`을 디펜던시(dependency), 즉 의존하므로 자동적으로 두 젬을 함께 사용하게 됩니다.

`Gemfile`을 내용을 보며 각 문장의 의미를 하나씩 설명해 드리겠습니다. 아래는 젬을 호출하는 기본 서버를 선정하는 코드입니다.

```ruby
source "https://rubygems.org"
```

서버 선정 이후, 가져올 젬을 코드에 입력하면 해당 젬을 서버에서 불러와 Ruby 언어에 사용할 수 있게 됩니다. 아래 문장은 그 중에서 현재 Jekyll 사이트에 적용되고 있는 minima 테마 젬에 대한 내용입니다.

```ruby
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"
```

기본 서버에서 `minima` 젬을 적용하되, 버전은 2.0 이상(`">= 2.0"`)이고 3.0 미만(`"< 3.0"`)이어야 함을 의미합니다. 만일 2.1 버전을 원한다면 간단히 `"2.1"`이라고 입력하면 됩니다.

```ruby
gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end
```

`github-pages` 젬을 필두로 `jekyll_plugins` 그룹을 구성합니다. 위의 코드에 의하면 현재 그룹에는 버전 0.6 이상이며 1.0 미만의 `jekyll-feed` 젬이 포함되어 있습니다. 그룹은 Ruby 젬을 편리하기 관리할 수 있도록 하며, 젬 업데이트 시 묶음으로 제외하는 등에 활용됩니다.

이렇게 매우 기본적이면서 필수적인 `Gemfile` 구문을 확인하였습니다. 특히 버전 선택은 매우 중요하며, 버전 차이로 인해 의도치 않은 방식으로 동작하거나 호환성 문제가 발생할 수 있습니다. 간단한 예를 들어 `minima` 젬을 확인하도록 합시다. 현재 설치된 젬을 확인하기 위해 터미널에 아래 명령어를 입력합니다.

```powershell
gem list
```

확실히 버전은 2.0 이상이고 3.0 미만 버전이 나오겠지만, 간혹 그 내부에서도 버전간 큰 기능성 차이가 존재할 수 있습니다. 만일 현재 적용된 젬을 현재 Jekyll 사이트에 유지시키기 위해서는 버전을 고정시킬 필요가 있습니다. 그리고 이러한 역할을 하는 파일이 바로 `Gemfile.lock`입니다.

`Gemfile.lock` 내용을 확인하면 여러 젬들과 버전들이 명시되어 있는 것을 확인할 수 있습니다. 이들은 실제로 Ruby에 적용되는 젬들이며, 한 번 생성되면 업데이트 명령어를 입력하거나 삭제되지 않는 이상 버전을 그대로 유지합니다. 업데이트 명령어는 다음과 같습니다.

```powershell
bundle install
```

`Gemfile.lock`이 없을 경우, `Gemfile`에 명시된 젬들을 기반으로 새로 생성됩니다. 특히 `Gemfile.lock`는 다른 컴퓨터에서도 동일한 버전의 젬을 그대로 적용하여 사용할 수 있도록 하여 작업환경 유지에 매우 중요한 역할을 가집니다.

### `_config.yml` 파일
`Gemfile`은 Ruby 작업환경을 관리한다면 `_config.yml`(혹은 `_config.toml`)은 Jekyll 설정을 관리하는 파일입니다. 내용을 보면 가장 먼저 아래와 같은 코드를 확인할 수 있습니다.

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

이들은 사실 HTML과 직접적으로 연동된 데이터가 아닙니다: `title`을 수정하면 이게 바로 HTML 웹사이트 제목이 되지 않습니다. 정확히 말하자면 Jekyll에 지원되는 [Liquid](https://shopify.github.io/liquid/) 템플릿 언어를 위한 데이터입니다. Liquid 템플릿 언어는 브라우저에 `F12`를 눌러 열리는 개발자 도구에서도 확인할 수 없으므로 직접 소스 코드를 확인해야 합시다. 아래는 minima 테마 하단부에 어떻게 웹사이트 제목이 어떻게 나타나는지 보여주는 소스 코드의 일부입니다.

```html
<h2 class="footer-heading">{% raw %}{{ site.title | escape }}{% endraw %}</h2>
```

개발자 도구로 확인이 불가능한 이유는 HTML 사이트로 변환하면서 Liquid 템플릿 언어가 해당 위치를 `title` 데이터로 채워 넣기 때문입니다. 다시 말해, `_config.yml`에 입력한 내용들은 Liquid 언어를 통해 HTML에 지정된 위치에 반영되는 겁니다.

## Jekyll 테마 변경
Jekyll을 꾸미는 방법 중 가장 간단한 방법은 이미 존재하는 테마를 불러오는 겁니다. 테마 변경을 위해서는 `Gemfile`과 `_config.yml` 파일을 수정해야 하므로 이번 게시글을 마무리하기 딱 좋은 내용입니다. Jekyll에서 다른 테마를 불러오는 방법으로 `theme`과 `remote_theme` 옵션을 이용하는 게 있습니다.
 
### `theme` 옵션
Jekyll 테마를 변경하는 가장 기본적인 방법으로 서버에 등록된 테마 젬을 불러오는 것이며, 현재 minima 테마가 `theme` 옵션으로 Jekyll에 적용되어 있습니다. 본 예시로 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) 테마를 적용해 보도록 하겠습니다.

> 본 내용은 테마를 설정하는 방법을 아주 간략하게 소개합니다. 각 테마마다 요구하는 플러그인이 있을 수 있으므로 반드시 README.md를 주의깊게 읽으시기 바랍니다.

우선 `Gemfile` 파일에서 사용하고자 하는 테마를 명시해야 합니다. 기존에 있던 minima 테마를 주석처리하여 호출하지 않도록 만드면서 추가하고자 하는 minimal-mistakes 테마를 아래와 같이 입력합니다.

```ruby
# gem "minima", "~> 2.0"
gem 'minimal-mistakes-jekyll', '~> 4.21'
```

그러나 이대로 번들을 실행하면 `Gemfile.lock` 파일로 인해 이전에 적용된 minima 테마가 그대로 나타납니다. `Gemfile.lock`을 업데이트하기 위해 아래의 명령어를 입력합니다.

```powershell
bundle update
```

그러면 `Gemfile.lock`는 `Gemfile`에 변경된 내용에 따라 필요한 젬을 새로 설치하고, 필요없는 젬을 제거합니다. 파일 업데이트가 완료되었으면 `_config.yml` 파일을 수정하여 Jekyll 설정에서 테마를 불러옵니다. 

```yml
# theme: minima
theme: minimal-mistakes-jekyll
```

하지만 가장 좋은 방법은 해당 테마에서 사용하는 `_config.yml`을 그대로 가져와 사용하는 겁니다. 그 이유는 Jekyll을 위해 추가로 설치한 젬이나 레이아웃 등을 테마와 제대로 연동시키기 위해서는 `theme` 옵션만 바꿔서는 되지 않기 때문입니다. [여기](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/_config.yml)에 있는 내용을 그대로 복사해 사용하셔도 됩니다.

이제 `bundle exec jekyll serve` 명령어로 Jekyll을 실행하면 변경된 테마를 직접 확인할 수 있습니다. 일부 경우에는 터미널에 아래와 같은 경고문이 나타납니다.

```
Build Warning: Layout 'page' requested in about.md does not exist.
```

이는 테마에서 선정한 레이아웃 이름이 아닌 다른 레이아웃을 발견하였을 때 나타나는 경고문입니다. Jekyll 사이트는 정상적으로 실행되겠지만, 위의 경고문에서 알려준 `about.md` 문서는 레이아웃이 적용되지 않은 채로 나타나게 됩니다. 레이아웃에 대한 내용은 다음 게시물인 *["GitHub Pages를 위한 Jekyll 디자인하기"](/blog/ko.designing-jekyll-site.html)*에서 설명하도록 하겠습니다.

### `remote_theme` 옵션
일부 테마는 `theme`이 아닌 `remote_theme` 옵션으로 설정해야 합니다. 이번에는 [jekyll-rtd-theme](https://github.com/rundocs/jekyll-rtd-theme) 테마를 예시로 사용하겠습니다. 해당 옵션을 사용하기 위해서는 Jekyll의 플러그인 `jekyll-remote-theme`이 필요하며 다음과 같이 `Gemfile`에 젬을 추가합니다 (`group :jekyll-plugins` 그룹 안에 넣기를 권장).

```ruby
# theme: minima
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-remote-theme"
end
```

그러나 이대로 번들을 실행하면 `Gemfile.lock` 파일로 인해 새로 넣은 플러그인이 적용되지 않게 됩니다. `Gemfile.lock`을 업데이트하기 위해 아래의 명령어를 입력합니다.

```powershell
bundle update
```

그러면 `Gemfile.lock`는 `Gemfile`에 변경된 내용에 따라 필요한 젬을 새로 설치하고, 필요없는 젬을 제거합니다. 파일 업데이트가 완료되었으면 `_config.yml` 파일을 수정하여 Jekyll 설정에서 테마를 불러옵니다. 

```yml
# theme: minima
remote_theme: minimal-mistakes-jekyll
```

하지만 가장 좋은 방법은 해당 테마에서 사용하는 `_config.yml`을 그대로 가져와 사용하는 겁니다. 그 이유는 Jekyll을 위해 추가로 설치한 젬이나 레이아웃 등을 테마와 제대로 연동시키기 위해서는 `remote_theme` 옵션만 바꿔서는 되지 않기 때문입니다. [여기](https://raw.githubusercontent.com/rundocs/jekyll-rtd-theme/develop/_config.yml)에 있는 내용을 그대로 복사해 사용하셔도 됩니다.