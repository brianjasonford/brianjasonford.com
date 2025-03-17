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

{% for post in collections.posts %}
  <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}

</body>
</html>