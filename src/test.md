---
title: Brian's Website
layout: /layouts/page
---
<section>
<h2><i class="fa-solid fa-house"></i> Welcome</h2>

My name is Brian. I made this website because I am curious about how websites work and want the challenge of learning how to make something new. I also like the idea of having a space on the internet that I control directly. I enjoy keyboards, coffee, stories told though all sorts of media, and nerdy games. My plan is to talk about those things here, but first I have to learn how to make this website. 

![Screen shot of this website in VS Code](/images/vscScreenShot.png)
_What this website looked like in VS Code on the day it first went online._
</section>
<section>
<h2><i class="fa-solid fa-pencil"></i></i> Writing</h2>
<h3><i class="fa-regular fa-newspaper"></i> Latest Posts</h3>
{% assign new_posts = collections.posts | reverse %}
{% for post in new_posts limit:3 %}
    <strong><a href="{{ post.url }}">{{ post.data.title }}</a></strong><br>
    <time datetime="{{ post.data.date | cleanISO }}">{{ post.data.date | postDate }}</time><br>
    _{{ post.data.blurb }}_
{% endfor %}
<h3><a href="/blog/archive/"><i class="fa-solid fa-box-archive"></i></a> &nbsp; <a href="/blog/postsbysubject/"><i class="fa-solid fa-tags"></i></a> &nbsp; <a href="https://www.brianjasonford.com/feed.xml"><i class="fa-solid fa-rss"></i></a> </h3>
</section>
<section>
    <h2><i class="fa-solid fa-address-card"></i> Me</h2>
    There is a reasonable chance that you have found this page by searching for my name. If you did that, you might know me in a professional context. Please note that this is my personal website. <strong>I will never talk about my work here.</strong> Do not contact me about my work through this website or on social media.

    I rarely post to social media, but you can find me on Mastodon: [@brianjasonford@mastodon.social](https://mastodon.social/@brianjasonford)
</section>
<section>
    <h2><i class="fa-solid fa-code"></i> Website</h2>

    I have no background in coding, programming, or developemnt. I needed a lot of help to make this, and want to give credit and show appreication to the people who took time to make guides and walk me though some of the more confusing bits. I used [HTML for People](https://htmlforpeople.com) by Blake Watson to learn how to make a website. I made this website [Eleventy](https://www.11ty.dev), learning from Stephanie Eckles' great [11ty from scratch](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3) course and her website, [11ty Rocks!](https://11ty.rocks) The [Learn Eleventy project](https://learn-eleventy.pages.dev) and [11tybundle.dev](https://11tybundle.dev) are fantastic. The folks at the [11ty Discord server](https://www.11ty.dev/blog/discord/) have been welcoming, kind, and helpful - sometimes going out of their way to help me.

    <p class="notice">
        <strong>Want to learn how to make a website like this?</strong><br>
        There are lots of resaons why you might want to build website of your own. Sophie Koonin's [blog post about building personal websites](https://localghost.dev/blog/this-page-is-under-construction/) resonated with me. If, like me, you are starting from zeron, check out the free web book <a href="https://htmlforpeople.com/">HTML for People</a>. It's made for everyone and teaches you how to make a webpage in a friendly, approachable way.
   </p>

   You can see what this website looks like "under the hood" at its [GitHub repository](https://github.com/brianjasonford/brianjasonford.com). I've also tried my best to track the changes I've made to this website along the way. You can follow along in the changelog below.

   <details>
    <summary>Changelog</summary>
    
- 2025-03-17: Moved the [Blog Archive](/blog/archive/) page to `/src/blog` and [excluded it](https://www.11ty.dev/docs/collections/#how-to-exclude-content-from-collections) from the "posts" collection so that the Blog nav bar link shows `aria-current="true"` from the Archive page.
- 2025-03-16: Limited &ldquo;Latest Posts&rdquo; to the three most recent.
- 2025-03-16: Added `<time>` tags to blog post dates on the blog page and each post.
- 2025-03-12: Added [Font Awesome](https://fontawesome.com) icons by upgading to 11ty `3.0.1-alpha.4` and installing the [11ty Font Awesom plugin](https://github.com/11ty/eleventy-plugin-font-awesome) (with a lot of help from the very kind people at the [11ty Discord server](https://discord.gg/GBkBy9u)).
- 2025-03-09: Added an [Atom feed to the blog](https://www.brianjasonford.com/feed.xml).
- 2025-03-07: Revised home page, removed &ldquo;about&rdquo; page.
- 2025-03-07: Using Github for backup. I about 87% sure I'm doing that correctly!
- 2025-02-27: Generated SSH keys and added a build script to `package.json` so that only changed files in my output folder go to the server using `rsync`.
- 2025-02-25: Added tags to blog posts and made auto-updating tag pages. 
- 2025-02-20: Added this roadmap.
- 2025-02-20: Checked accessibility with [WAVE](https://wave.webaim.org).
- 2025-02-20: Re-wrote the website using [Eleventy](https://www.11ty.dev) and put it online.
- 2025-01-04: Finished making a website with [HTML for People](https://htmlforpeople.com) and put it online. 
</details>


</section>