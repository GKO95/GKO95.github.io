# Welcome to GKO95's GitHub Pages

## Bundler

```ruby
bundle exec jekyll serve
```


## Syntax Highlight

Code highlight: `rouge`
```
gem install rouge
```

Install `pygments.css` theme: http://jwarby.github.io/jekyll-pygments-themes/languages/javascript.html

```html
<head>
    <link href="{{ '/assets/css/pygments.css' | relative_url }}" rel="stylesheet">
</head>
```

Highlight with
```
{% highlight python %}

{% endhighlight %}
```