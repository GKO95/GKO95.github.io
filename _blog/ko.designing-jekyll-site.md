---
layout: post
lang: ko
title: "GitHub Pages를 위한 Jekyll 디자인하기"
date: 2020-12-06 00:00:00 + 0900
edited: #2020-12-05 18:20:00 +0900
tags: GitHub_Pages Jekyll
---
# GitHub Pages를 위한 Jekyll 디자인하기
이전 *["GitHub Pages를 위한 Jekyll 생성하기"](/blog/ko.creating-jekyll-site.html)* 그리고 *["GitHub Pages를 위한 Jekyll 설정하기"](/blog/ko.configuring-jekyll-site.html)* 게시글에서는 Jeykll을 사용하여 GitHub Pages를 생성 및 설정하는 방법을 설명하였습니다. 이에 추가적으로 테마를 변경하는 방법까지 설명하였으나, 이번에는 직접 테마를 디자인 및 스타일을 적용하는 방법을 설명하려 합니다. 해당 내용까지 이해하였으면 스스로 Jekyll 관리를 해낼 수 있을 정도로 개념과 원리를 충분히 터득하였다고 단언할 수 있습니다.

## Jekyll 테마 구조
저번에는 Jekyll 설정 방법에서는 폴더 구조 및 파일에 대하여 설명을 하였습니다. 이번 내용은 Jekyll이 어떻게 HTML로 반영이 되는지에 대한 테마 구조를 소개하려 합니다. 그러기 위해서는 테마 코드를 직접 확인할 필요가 있으며, 이번에도 가장 기본적인 minima 테마를 예시로 사용하겠습니다.

minima 테마의 코드를 보기 위해서는 아래의 명령어를 입력합니다.

```powershell
bundle info --path minima
```

터미널에서는 minima 테마의 코드가 어디에 위치하는지 알려줍니다. 해당 경로로 이동하면 다음과 같이 폴더와 파일이 구성된 것을 확인할 수 있습니다.

![20201206ko.cjs-01](/assets/images/blog/ko.designing-jekyll-site/20201206ko.cjs-01.png)

여기서 명시해야 할 점음 밑줄(`_`)로 시작하는 폴더 및 파일들은 HTML로 변환될 때 나타나지 않으며 오로지 Jekyll에서만 다루어집니다. 이와 마찬가지로 이전 게시글에서 소개한 `_config.yml` 파일과 `_site` 폴더도 Jekyll 관리용으로만 사용되어 HTML 사이트로 변환될 때에는 찾아볼 수 없습니다. 

### `_includes` 폴더
레이아웃을 구성하는 HTML 구성요소입니다. 대표적으로 페이지 상단부인 `header.html`, 하단부인 `footer.html` 등의 구성요소를 레이아웃에 적용하기 위해서는 아래 코드를 입력합니다.

```liquid
{% raw %}{% include header.html %}{% endraw %}
```

### `_layouts` 폴더
HTML 혹은 마크다운에 적용할 레이아웃을 담는 폴더입니다. 레이아웃이란, 콘텐츠만 넣으면 완전한 페이지가 완성되는 기본적인 HTML 디자인 틀입니다. 만일 `home.html` 레이아웃을 적용시키기 위해서는 아래의 코드를 파일 맨 위에 입력합니다.

```ruby
{% raw %}---
layout: home
---{% endraw %}
```

레이아웃에 들어가는 콘텐츠는 다음 코드로부터 삽입됩니다.

```liquid
{% raw %}{{content}}{% endraw %}
```

### `_sass` 폴더
HTML 테마 디자인에 사용되는 스타일들을 담는 폴더입니다. 여기에서 CSS가 아닌 SCSS 혹은 SASS를 사용하여 여러 스타일시트를 하나로 취합해 관리할 수 있도록 합니다. 만일 `/_sass/home.scss` 스타일시트를 불러오기 위해서는 `@import "home";` 코드를 입력합니다.

이렇게 불러와서 취합된 SCSS 및 SASS는 하나의 CSS로 변환되어 최종적으로 테마 스타일에 적용됩니다. CSS로 변환될 스타일시트는 반드시 아래와 같이 두 줄의 `---` 코드로 시작해야 합니다.

```sass
---
---

// 여기서부터 스타일시트 작성 혹은 불러오기
@import "home";
```

또한 CSS로 변환될 SCSS 파일은 `asset` 폴더와 같이 HTML에서 보여지는 경로에 위치하도록 합니다.

### `assets` 폴더
테마를 구동하는데 필요한 리소스들을 담는 폴더입니다. 이 안에는 HTML 렌더링에 필요한 스타일시트, 아이콘, 자바스크립트 등의 파일들을 넣어둡니다. 이는 Jekyll 관리전용 폴더가 아닌 순수히 리소스 저장공간이므로 폴더명을 바꾸어도 아무런 문제가 없습니다.

## Jekyll 테마 변경
기존 테마에서 변경하고 싶은 내용이 있으면 해당 HTML을 가져와 Jekyll 폴더 안에 넣어 수정하면 됩니다. 예를 들어 HTML 페이지 하단부, 즉 `footer.html`을 변경하고 싶다고 합시다. 그러면 아래와 같이 `/_includes/footer.html`을 Jekyll 폴더에 추가하면 됩니다.

![20201206ko.cjs-02](/assets/images/blog/ko.designing-jekyll-site/20201206ko.cjs-02.png)

현재 `footer.html`에는 아무런 코드가 작성되지 않은 빈 파일입니다. 만일 minima 테마의 코드가 아닌 Jekyll 폴더의 코드가 적용되었다면 HTML 페이지 하단부에는 빈 공간이 나타나야 합니다. 이를 확인하기 위해 `bundle exec jekyll serve` 명령어를 터미널에 입력하면 다음과 같이 나타납니다.

![20201206ko.cjs-03](/assets/images/blog/ko.designing-jekyll-site/20201206ko.cjs-03.png)

이를 통해 Jekyll 폴더에서 동일한 이름의 코드를 작성하면 기존 테마의 내용을 오버라이트(overwrite), 즉 덮어쓸수 있다는 점을 확인할 수 있었습니다. 이를 기반으로 사용자는 원하는 테마를 가져와서 일부분만 개개인 취향에 맞게 간단히 수정할 수 있으며, 구성요소만이 아닌 레이아웃과 스타일시트, 그리고 리소스 또한 변경이 가능합니다.

## Jekyll 컬렉션
이전 게시글에서 `_posts`는 게시글을 담는 폴더이지만 마크다운 형식이 반드시 `YYYY-MM-DD-파일명.md` 형식을 지켜야 한다는 치명적인 단점이 있다고 지적하였습니다. 많은 사용자들은 `_posts` 폴더를 비추천하며 Jekyll의 콜렉션(Collection) 기능을 주로 사용합니다.

아래는 저의 GitHub Pages에 적용된 `_config.yml` 콜렉션 설정입니다.

```yml
# Jekyll 콜렉션
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

이렇게 지정한 컬렉션은 `_posts`와 같이 해당 이름의 폴더가 HTML 사이트에 반영되어 문서를 수월하게 관리할 수 있습니다. 게다가 날짜형식의 파일명을 사용하지 않아도 되어 훨씬 편리하다고 느끼실 겁니다. 만일 위와 같이 컬렉션을 지정하지 않은 상태에서 폴더를 생성하면 결과적으로 HTML에 나타나지 않습니다.

## Jekyll 프론트 매터
마크다운 문서에 레이아웃을 지정하는 것은 아래와 같은 코드를 통해 이루어졌습니다.

```ruby
{% raw %}---
layout: home
title: "문서 제목 01"
---{% endraw %}
```

이를 프론트 매터(front matter)라고 하며, [Liquid](https://shopify.github.io/liquid/) 템플릿 언어와 연동되기 때문에 Jekyll 내에서 문서를 관리하는 데 유용하게 사용됩니다. 이전 게시글에서 `_config.yml` 파일 내에 `title`에 할당된 데이터를 가져오기 위해 다음과 같은 Liquid 구문을 사용하였습니다.

```liquid
{% raw %}{{ site.title }}{% endraw %}
```

프론트 매터를 사용하면 위와 같은 방식으로 문서를 관리 및 정돈, 심지어 필터링까지 가능해집니다. 그리고 이는 Jekyll의 컬렉션과 함께 사용되면 효율성이 배로 높아집니다. 위에서 지정한 컬렉션을 그대로 사용하여 예시를 들어보겠습니다. 만일 `_docs` 컬렉션 안에 있는 모든 파일의 `title` 프론트 매터를 확인하기 위해서는 다음과 같은 Liquid 구문을 사용합니다.

```liquid
{% raw %}{% for document in site.docs %}
{{ document.title }}
{% endfor %}{% endraw %}
```

이렇게 프론트 매터를 HTML에 활용하여 테마를 디자인하면 매우 간단한 자바스크립트 머지않은 기능성을 GitHub Pages에 부여할 수 있습니다. 결국 Jekyll을 활용도를 높이는기 위해서는 Liquid 템플릿 언어를 잘 활용해야 하겠습니다.

<br/>

----

## 마무리
이번 게시글을 마지막으로 Jekyll 생성 및 사용, 설정, 그리고 직접 테마를 디자인하는 방법에 대하여 설명드렸습니다. 제 [대학교 후배](https://github.com/fora22)가 먼저 저에게 Jekyll을 시작하겠다고 한건데, 오히려 제가 더 애용하고 있습니다. 원래 이 글을 작성한 목적도 후배가 Jekyll을 어떻게 사용할지 몰라서 방법을 알려주기 위해서인데, 이 글을 볼지 모르겠습니다.

### Q. 잠시만요, 여기서 HTML과 CSS는 알려주지 않는건가요?
그 정도는 여러분이 직접 공부하셔야 합니다. 제가 싱가포르로 교환학생을 다녀왔을 때, 경영학을 전공하는 고등학생도 수업을 듣고 자신만의 웹사이트를 만들어 과제로 제출했습니다. 물론 여기있는 학생들은 수업을 지도하는 교사가 있다는 점에서 차이가 있지만, 제가 강조하고 싶은 부분은 자신의 특기와 무관하게 관심만 있으면 쉽게 터득할 수 있는 언어가 바로 HTML이란 겁니다.

하지만 이건 꼭 당부드리고 싶습니다. 제발 HTML와 CSS 공부한다고 서점가서 책을 사지 마세요. 심지어 HTML을 인터넷으로 유료로 강좌하는 걸 보면 저는 오히려 헛웃음을 칩니다.

### Q. 그럼 아까 중요하다고 한 Liquid 템플릿 언어는요?
솔직히 Liquid 구문에 대해서 작성할까 생각을 하였지만, Liquid 필터 종류가 다양한 동시에 너무 내용이 간단하기 때문에 따로 내용을 정리할 필요가 없다고 판단해서 넣지 않았습니다. 아무리 제가 해외거주 경험이 있다고 하더라도, Liquid 홈페이지에서 제공하는 설명은 한국인들도 충분히 읽고 이해할 수 있다고 생각합니다.
