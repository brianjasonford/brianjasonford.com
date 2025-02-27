---
title: Roadmap
layout: /layouts/page
---
Is there a glaring omission in the list below? Is there something fun and cool that I should try? [Let me know on Mastodon](https://mastodon.social/@brianjasonford) and I'll add it! 

## 📝 To Do 
- Add RSS feed to the blog.
- Limit the number of posts that appear on the blog page, and put the rest in an archive.

## 🤔 Considering
- Using CSS or Sass to make this website look nicer. 
- Making my sporadic, rare social media posts show up here (if possible). Likely not worth the effort.
- Making separate pages for my primary interests (this might be better accomplished through the blog and tags).

## 🚧 In Progress
- Figure out a better way to backup this website and roll back to prior versions when I make mistakes. This is fairly high priority, since I make mistakes often.
    - I am trying to learn about GitHub, we have different definitions of ["get started"](https://support.github.com/get-started).

## ✅ Done
- 2025-02-27: Generated SSH keys and added a build script to `package.json` so that only changed files in my output folder go to the server using `rsync`.
- 2025-02-25: Added tags to blog posts and made auto-updating tag pages. 
- 2025-02-20: Added this roadmap.
- 2025-02-20: Checked accessibility with [WAVE](https://wave.webaim.org).
- 2025-02-20: Re-wrote the website using [Eleventy](https://www.11ty.dev) and put it online.
- 2025-01-04: Finished making a website with [HTML for People](https://htmlforpeople.com) and put it online. 

## 🛑 Stopped
- 2025-02-25: <s>Get the "slugs" right for blog posts.</s> _Each post's file name results in a decent URL._
- 2025-02-27 <s>Make it so that Eleventy only rebuilds files that have changed, not everything every time.</s> [Eleventy's documenation about this](https://www.11ty.dev/docs/usage/) is very good, but I solved the problem by using `rsync` to upload only changed files to the server.