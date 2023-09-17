module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,gif,png,jpg,html,json,ogg,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};