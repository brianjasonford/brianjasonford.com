---
title: Brian's Blog Archive
layout: /layouts/page
eleventyExcludeFromCollections: ["posts"]
---

<h2><i class="fa-solid fa-box-archive"></i> All Blog Posts</h2>
{% for post in collections.posts reversed %}
<ul>
    {{ post.data.date | postDate }} • <a href="{{ post.url }}">{{ post.data.title }}</a><br>
    <em>{{ post.data.blurb }}</em>
</ul>
{% endfor %}