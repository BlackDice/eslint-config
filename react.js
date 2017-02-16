module.exports = {
	extends: [
		'eslint-config-airbnb',
		'./next.js',
	],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],
	},
}
