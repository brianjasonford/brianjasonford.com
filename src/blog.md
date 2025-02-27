---
title: Brian's Blog
layout: /layouts/blog
---
{% for post in collections.posts reversed %}
<article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.date | postDate }}</p>
    <p>{{ post.data.blurb }}</p>
</article>
{% endfor %}