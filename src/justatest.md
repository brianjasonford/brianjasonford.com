---
title: Just a test
---
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/simple.css">
    <!-- outputs all the icons used on the page -->
    {% getBundle "fontawesome" %}
</head>
<body>
    <h2><i class="fa-regular fa-newspaper"></i> Latest Posts</h2>
    {% for post in collections.posts reversed %}
    <article>
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p><time datetime="{{ post.data.date | cleanISO }}">{{ post.data.date | postDate }}</time></p>
        <p>{{ post.data.blurb }}</p>
    </article>
{% endfor %}
</body>
</html>