---
title: Writing
layout: /layouts/writing
eleventyExcludeFromCollections: ["posts"]
---
<h2 id="archive"><i class="fa-solid fa-box-archive"></i> All Posts</h2>

{% for post in collections.posts reversed %}
<ul>
    {{ post.data.date | postDate }} • <a href="{{ post.url }}">{{ post.data.title }}</a><br>
    <em>{{ post.data.blurb }}</em>
</ul>
{% endfor %}

<h2 id="feed"><i class="fa-solid fa-rss"></i> Feed</h2>
Subscribe for posts in your reader of choice with <a href="https://www.brianjasonford.com/feed.xml"></i>this feed</a>.

{% include "partials/homeButton.html" %}