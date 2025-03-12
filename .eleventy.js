const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { default: fontAwesomePlugin } = require("@11ty/font-awesome");

module.exports = (eleventyConfig) => {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addPassthroughCopy('./src/images/');

	// Filters
	eleventyConfig.addFilter("postDate", (dateObj) => { // This filter converts 11ty's default date output to DD Month YYYY
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLLL yyyy");
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) { // This filter removes "all" and "posts" from the tag list
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortTags", function(tags) { // This filter puts the tags in alphabetical order
		if (!Array.isArray(tags)) return tags;
		return tags
			.filter(tag => typeof tag === "string") // Ensure only strings are processsed 
			.sort((a, b) => a.localeCompare(b));
	});

	// Plugins
	eleventyConfig.addPlugin(feedPlugin, { // This plugin is for the blog feed.
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

	eleventyConfig.addPlugin(fontAwesomePlugin);

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};