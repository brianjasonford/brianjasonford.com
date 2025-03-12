---
title: Brian's Blog
layout: /layouts/blog
---

<h2><i class="fa-regular fa-newspaper"></i> Latest Posts</h2>
{% for post in collections.posts reversed %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <p>{{ post.data.date | postDate }}</p>
    <p>{{ post.data.blurb }}</p>
</article>
{% endfor %}
<h2><i class="fa-solid fa-rss"></i> Blog Feed</h2>
<p>{% include "partials/blogFeedLink.html" %}</p>