# GKO95's GitHub Pages
Welcome to GKO95's GitHub Pages, my personal GitHub Pages for blogging and archiving information. Generated by Jekyll, the GH-Pages is made from scratch starting from theme design, JavaScript functions, documentations which I have been doing it ever since I discharged from the military service.

## Features
Here are some of the featured you can find on this GitHub Pages:
* Pure JavaScript functionality
* Theme selection - Light & Dark mode
* Language selection - English & Korean

For those who are interested in my GH-Pages theme, sorry but I didn't designed this for the distribution purpose. But you are free to use the code I made.

### Icons
Most of the icons in my GH-Pages are from [iconmonstr](https://iconmonstr.com/) and I love those simple designs!

### Fonts
The GH-Pages uses the following fonts:
* [JetBrains MonoNL v2.001](https://www.jetbrains.com/lp/mono/)
* [Nanum Gothic Coding](https://fonts.google.com/specimen/Nanum+Gothic+Coding?category=Monospace)
* [Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans+KR)

Browse the [Google Fonts](https://fonts.google.com/) for your Jekyll, and select one or more font styles to be implemented. A new section will appear on the right; once finished selecting the font style, click on the *Embed* tab and copy & paste the `<link>` tag to head of HTML.

### Syntax Highlight
For the syntax highlight, the GH-Pages use the [Rouge](http://rouge.jneen.net/) syntax highlighter with the [Monokai](https://raw.githubusercontent.com/jwarby/pygments-css/master/monokai.css) style.

To implement the style to the syntax highlighter, create `pygments.css` file under `/assets/css/` directory, and paste the content from the URL above. Then link the stylesheet as follows:

```html
<link href="{{ '/assets/css/pygments.css' | relative_url }}" rel="stylesheet">
```

The style for the syntax highlighter will be applied on every code fence. Both Ruby-styled or Markdown-styled code fence is available, but I personally prefer the latter since I love using the markdown.

```ruby
{% highlight python %}
{% endhighlight %}
```

<pre>
```python
```
</pre>
