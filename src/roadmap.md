---
title: Roadmap
layout: /layouts/page
---
This page tracks changes I've made to this website and what I would like to do going forward. Is there a glaring omission in the list below? Is there something fun and cool that I should try? [Let me know on Mastodon](https://mastodon.social/@brianjasonford)! 

I am considering changing this from a &#8220;roadmap&#8221; to a &#8220;changelog,&#8221; becuase my ideas for what I want to do with this webpage keep shifting.

## 📝 To Do 
- A favicon would be nice.
- Add robots.txt ([if that matters](https://www.tomshardware.com/tech-industry/artificial-intelligence/several-ai-companies-said-to-be-ignoring-robots-dot-txt-exclusion-scraping-content-without-permission-report)). 

## 🤔 Considering
- Not sure if every blog post needs to display as a full `<article>` on the blog page.
- Using CSS or Sass to make this website look nicer. 
    - [tailwindcss](https://tailwindcss.com) looks incredible but is probably more than I need and certainly over my head. 
- Making my sporadic, rare social media posts show up here (if possible). Likely not worth the effort.

## 🚧 In Progress
- Making separate pages for my primary interests (paused until I have more content).

## ✅ Done
- 2025-03-17: Moved the [Blog Archive](/blog/blogArchive/) page to `/src/blog` and [excluded it](https://www.11ty.dev/docs/collections/#how-to-exclude-content-from-collections) from the "posts" collection so that the Blog nav bar link shows `aria-current="true"` from the Archive page.
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

## 🛑 Stopped
- 2025-03-16: <s>A light/dark toggle.</s> The juice isn't worth the squeeze. 
- 2025-02-25: <s>Get the "slugs" right for blog posts.</s> _Each post's file name results in a decent URL._
- 2025-02-27 <s>Make it so that Eleventy only rebuilds files that have changed, not everything every time.</s> [Eleventy's documenation about this](https://www.11ty.dev/docs/usage/) is very good, but I solved the problem by using `rsync` to upload only changed files to the server.