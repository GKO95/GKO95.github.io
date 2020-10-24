# Welcome to GKO95's GitHub Pages

This GitHub Pages implements local storage from JavaScript for language and theme selection.

## Syntax Highlight
> **Resource:** *Monokai - https://raw.githubusercontent.com/jwarby/pygments-css/master/monokai.css*

Install [Rouge](http://rouge.jneen.net/) syntax highlighter:
```ruby
gem install rouge
```

Create `pygments.css` file under `/assets/css/` directory, and copy & paste the content provided above URL. Link the stylesheet as shown below:

```html
<link href="{{ '/assets/css/pygments.css' | relative_url }}" rel="stylesheet">
```

The style for the syntax highlighter will now applied to every code fence available in the Jekyll. Either Ruby-styled or Markdown-styled code fence can be used.

```ruby
{% highlight python %}
{% endhighlight %}
```

<pre>
```python
```
</pre>

## Google Fonts
> **Resource:**
> - *Noto Sans KR - https://fonts.google.com/specimen/Noto+Sans+KR*
> - *Nanum Gothic Coding - https://fonts.google.com/specimen/Nanum+Gothic+Coding?category=Monospace*

Browse the [Google Fonts](https://fonts.google.com/) for your Jekyll, and select one or more font styles to be implemented. A new section will appear on the right; once finished selecting the font style, click on the *Embed* tab and copy & paste the `<link>` tag to head of HTML.

## Icons
> **Resource:** *iconmonstr: https://iconmonstr.com/*
