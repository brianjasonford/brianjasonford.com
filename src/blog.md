---
title: Brian's Blog
layout: /layouts/blog
---

<h2><i class="fa-regular fa-newspaper"></i> Latest Posts</h2>
{% for post in collections.posts reversed %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <p><time datetime="{{ post.data.date | cleanISO }}">{{ post.data.date | postDate }}</time></p>
    <p>{{ post.data.blurb }}</p>
</article>
{% endfor %}
<h2><i class="fa-solid fa-box-archive"></i> <a href="/archive/">Blog Archive</a></h2>
A list of all blog posts.
<h2><i class="fa-solid fa-rss"></i> <a href="https://www.brianjasonford.com/feed.xml">Blog Feed</a></h2>
Add this blog to your favorite reader.