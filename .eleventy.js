const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addPassthroughCopy('./src/images/');

	// Filters
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLLL yyyy");
	});

	// This filter removes "all" and "posts" from the tag list
	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	// This filter puts the tags in alphabetical order
	eleventyConfig.addFilter("sortTags", function(tags) {
		if (!Array.isArray(tags)) return tags;
		return tags
			.filter(tag => typeof tag === "string") // Ensure only strings are processsed 
			.sort((a, b) => a.localeCompare(b));
	});

	// This is for the blog feed
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Brian's Blog",
			subtitle: "A small, personal blog.",
			base: "https://www.brianjasonford.com",
			author: {
				name: "Brian Ford",
				email: "https://mastodon.social/@brianjasonford", // Optional - 11.dev example uses email
			}
		}
	});


	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};