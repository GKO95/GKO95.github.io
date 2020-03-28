---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
author: GKO95
layout: home
---

Welcome to [Jekyll]({% post_url 2020-03-23-welcome-to-jekyll %})!

## Documents

### Programming
{% assign programmings = site.articles | where: "category", "Programming" %}
{% for programming in programmings %}
* [{{ programming.name }}]( {{ programming.url }} )
{% endfor %}

## Repository

* Tutorials
* Challenges
