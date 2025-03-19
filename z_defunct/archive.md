---
title: Archive
layout: /layouts/base
eleventyExcludeFromCollections: ["posts"]
---
<h2><i class="fa-solid fa-box-archive"></i> All Posts</h2>
{% include "partials/homeButton.html" %}
{% for post in collections.posts reversed %}
<ul>
    {{ post.data.date | postDate }} • <a href="{{ post.url }}">{{ post.data.title }}</a><br>
    <em>{{ post.data.blurb }}</em>
</ul>
{% endfor %}