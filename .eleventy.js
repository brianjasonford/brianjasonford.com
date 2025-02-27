const { DateTime } = require("luxon");

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

	

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};