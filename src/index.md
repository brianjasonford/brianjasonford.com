---
title: Brian's Website
layout: /layouts/base
---
<section>
    <h2><i class="fa-solid fa-house"></i> Welcome</h2>
    
    Hello! My name is Brian. I enjoy keyboards, coffee, stories told though all sorts of media, and nerdy games.
    
    I made this website because I am curious about how websites work and want the challenge of making something new. Also, Sophie Koonin's <a href="https://localghost.dev/blog/this-page-is-under-construction/">blog post about building personal websites</a> resonated with me. 
    
    ![Screen shot of this website in VS Code](/images/vscScreenShot.png)
    _What this website looked like in VS Code on the day it first went online._
</section>

<section>
    <h2 id="writing"><i class="fa-solid fa-pencil"></i></i> Writing</h2>
        <h3><i class="fa-regular fa-newspaper"></i> Latest Posts</h3>
        {% assign new_posts = collections.posts | reverse %}
        {% for post in new_posts limit:3 %}
            <strong><a href="{{ post.url }}">{{ post.data.title }}</a></strong><br>
            <time datetime="{{ post.data.date | cleanISO }}">{{ post.data.date | postDate }}</time><br>
            _{{ post.data.blurb }}_
        {% endfor %}
        <h3><a href="/blog/writing#archive/"><i class="fa-solid fa-box-archive"></i></a> &nbsp; <a href="/blog/writing#tags/"><i class="fa-solid fa-tags"></i></a> &nbsp; <a href="/blog/writing#feed"><i class="fa-solid fa-rss"></i></a> </h3>
</section>

<section>
    <h2><i class="fa-solid fa-address-card"></i> Me</h2>
    
    There is a reasonable chance that you have found this page by searching for my name. If you did that, you might know me in a professional context. Please note that this is my personal website. <strong>I will never talk about my work here.</strong> Do not contact me about my work through this website or on social media.
    
    I rarely post to social media, but you can find me on Mastodon: [@brianjasonford@mastodon.social](https://mastodon.social/@brianjasonford)
</section>

<section>
    <h2><i class="fa-solid fa-code"></i> Website</h2>
    
    I have no background in coding, programming, or development, so I needed help to make this. I appreciate the people who took time to make guides and walk me though some of the more confusing bits. 
    
    I used [HTML for People](https://htmlforpeople.com) by Blake Watson to learn how to make a website. If, like me, you are starting at _zero_, HTML for People is the right place to start. 
    
    I made this website [Eleventy](https://www.11ty.dev), learning from Stephanie Eckles' great [11ty from scratch](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3) course and her website, [11ty Rocks!](https://11ty.rocks) The [Learn Eleventy project](https://learn-eleventy.pages.dev) and [11tybundle.dev](https://11tybundle.dev) are fantastic. The folks at the [11ty Discord server](https://www.11ty.dev/blog/discord/) have been welcoming, kind, and helpful - sometimes going out of their way to help me.
    
    <p class="notice">
        <strong>Want to see what this website looks like under the hood?</strong><br>
        GitHub is a great way to see how other people put their websites togheter. You can see how I bulit the website at its <a href="https://github.com/brianjasonford/brianjasonford.com">GitHub repository</a>.
    </p>
    
    {% include "partials/changelog.html" %}
</section>