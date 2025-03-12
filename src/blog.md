---
title: Brian's Blog
layout: /layouts/blog
---

<h2>Latest Posts</h2>
{% for post in collections.posts reversed %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <p>{{ post.data.date | postDate }}</p>
    <p>{{ post.data.blurb }}</p>
</article>
{% endfor %}