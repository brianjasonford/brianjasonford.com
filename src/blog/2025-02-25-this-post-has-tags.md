---
title: This Post Has Tags
date: 2025-02-25
blurb: How I learned to tag my posts.
tags: 
    - This Website
    - Code
    - Eleventy
---
Not every blog post will be about making this website, but I am learning so much and I want to share. There is a lot of documentation and tutorials about how to add tags to blog posts with Eleventy. Much of that is written above my level, so it took me a while to understand what people were trying to teach me. This is my effort to explain the process to people like me: folks with no training or background in programming. Hopefully, this will help you avoid a lot of the trial and error that I went through! 

If you follow Stephanie Eckles' wonderful course ["Build An Eleventy (11ty) Site From Scratch"](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3), you will make a website with a blog using Eleventy. Each blog post is a Markdown file in a folder. A .json file also goes in that folder, giving everything in the folder the "posts" tag. Additionally, in the front matter of each post file, you can [add whatever tags you like](https://www.11ty.dev/docs/collections/#add-to-a-collection-using-tags).

Eleventy takes all the tags and puts them into a collection. You can get every tag from the collection and display those tags on a page by adding some code to your layout file:

{% raw %}
<pre><code>{% for tag in tags %}
    {{ tag }}
{% endfor %}
</code></pre>
{% endraw %}

There are a few problems with that though. First, all of the tags means _all_ of the tags, so you will get the "posts" tag as well. Second, the tags will be smooshed together into one string. Third, the tags will appear in the order they were written into the front matter instead of alphabetically (this is a bigger deal later).

Making each tag display as its own word or words, separated by commas, was fairly straightforward once I had spent some time learning about arrays and .njk files. The solution looks like this:

{% raw %}
```
{% for tag in tags %}
	{{ tag }}{% if not loop.last %}, {% endif %}
{% endfor %}
```
{% endraw %}

Next, to sort out the "posts" filter and the "all" filter, I created a filter called `filterTagList`. The "all" filter wasn't a problem just yet, but it would be a problem when I tried to make pages for the links. I'm saving you some trial and error here. The filters go into the `.eleventy.js` configuration file, below (or inside of – I don't know the correct term) `module.exports` but above `return {`. It looks like this

{% raw %}
```
// This filter removes "all" and "posts" from the tag list
eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
	return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
});
```
{% endraw %}

You can add that filter anywhere you get a list of tags, and it will knock out the "posts" and "all" tags. In Eleventy, the pipe character – `|` – indicates that the next part is a filter (I think). Continuing with my post layout, I added the filter like this:

{% raw %}
```
{% for tag in tags | filterTagList %}
	{{ tag }}{% if not loop.last %), {% endif %}
{% endfor %}
```
{% endraw %}

The process to sort the tags alphabetically was the same. I made a filter in `.eleventy.js` then added the filter to my blog post template. The filter looks like this:

{% raw %}
```
// This filter puts the tags in alphabetical order
eleventyConfig.addFilter("sortTags", function(tags) {
	if (!Array.isArray(tags)) return tags;
	return tags
	.filter(tag => typeof tag === "string") // Ensure only strings are processsed 
	.sort((a, b) => a.localeCompare(b));
});
```
{% endraw %}

Adding that filter in the blog post layout looks like this: 

{% raw %}
```
{% for tag in tags | filterTagList | sortTags %}
	{{ tag }}{% if not loop.last %), {% endif %}
{% endfor %}
```
{% endraw %}

The next step was to turn the tags into links. This blog post has the "This Website" tag. If you click on the tag, you should go to a page listing every post with that tag. Just about every blog I've ever seen has this feature. Eleventy can make those pages for you and keep them up to date automatically. The nice people who make Eleventy even made a page called [Quick Tip: Zero Maintenance Tag Pages for your Blog](https://www.11ty.dev/docs/quicktips/tag-pages/). That page has all the info you _should_ need, but I still did not understand what to do. It took a bunch of trial and error, but I did get there.

The first thing on that page gives you sample code to make a pagination template using Nunjucks. It took me a while to realize that – unlike every other .njk file I'm using – that this file goes in /src. I called mine `tagpages.njk`, and it looks almost exactly like the example on Eleventy's Quick Tip page. Note that the code on that page includes `permalink: /tags/{{ tag }}/` in the front matter. In the end, that tells eleventy to make a subfolder in the output folder called "tags" and to put the tag pages there. If your permalink is something other than "tags," you need to adjust the link in the next step.

Once that file is in place, I went back to the blog post layout file and made the list of tags into links. Notice the `| slugify` in the code below. That's Eleventy's [slugify Universal Filter](https://www.11ty.dev/docs/filters/slugify/). It turns a tag like "This Website" into "this-website" when it goes into a URL, so things look neat and tidy! Building from what I had in the posts layout, it looks like this:

{% raw %}
```
{% for tag in tags | filterTagList | sortTags %}
	<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% if not loop.last %), {% endif %}
{% endfor %}
```
{% endraw %}

Now, each blog post includes a list of tags, and each tag is a link that brings you to every post with that tag! The next step was to add a list of every tag to the blog page. I think that my way of doing this is not the "right" way. I think the right way involves making a collection in the control file. But, even if my way is not the right way, it works! Also, this took an absurd amount of trial and error, and I can't truly backtrack to fully understand everything I did. I'm giving you the short version by jumping right to the solution. 

I had two layout files: `page.njk` and `post.njk`. I made a new layout file called `blog.njk` and copied everything from `page.njk` there. Then, I added some Nunjucks to get all the tags from all the posts. If I understand correctly, this code says:

> Make an array called allTags. Then, for every post, get every tag. Then, for each tag, check to see if the tag is in the allTags array. If it is not there, add it. To prevent duplication, skip it if it is already there. 

The code looks like this:

{% raw %}
```
<!-- Get all the tags from posts -->
{% set allTags = [] %}
{% for post in collections.all %}
	{% if post.data.tags %}
		{% for tag in post.data.tags %}
			{% if tag not in allTags %}
				{% set allTags = allTags.concat([tag]) %}
			{% endif %}
		{% endfor %}
	{% endif %}
{% endfor %}
```
{% endraw %}

Now "allTags" is an array of all the tags in posts, including the "posts" tag. So, I added code to the `blog.njk` layout to filter and sort those tags and present them as links. This works just like the post pages:

{% raw %}
```
<!--- Display unique tags as links, filtering "all and "posts," sorted alphabetically --->
<strong>Tags:</strong>
	{% for tag in allTags | filterTagList | sortTags %}
		<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% if not loop.last %}, {% endif %}
	{% endfor %}
```
{% endraw %}

And that's it! I ran Eleventy and it just made everything for me. Better yet, this was a one-time pain. Now, when I make a new blog post, I can tag it however I like and everything else just auto-updates. Hooray!