---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
author: GKO95
layout: home
---

Welcome to [Jekyll]({% post_url 2020-03-23-welcome-to-jekyll %})!

## Documents

### Programming

{% for documents in site.documents %}
* [{{ documents.name }}]( {{ documents.url }} )
{% endfor %}

## Repository

* Tutorials
* Challenges
