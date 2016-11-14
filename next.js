module.exports = {
	extends: './index.js',
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
	},
	plugins: ['babel'],
	rules: {
		'generator-star-spacing': 'off',
		'babel/generator-star-spacing': ['warn', 'before'],

		'array-bracket-spacing': 'off',
		'babel/array-bracket-spacing': 'warn',

		'object-curly-spacing': 'off',
		'babel/object-curly-spacing': ['error', 'always', {
			objectsInObjects: false, arraysInObjects: true,
		}],

		'object-shorthand': 'off',
		'babel/object-shorthand': ['error', 'always'],

		'arrow-parens': 'off',
		'babel/arrow-parens': ['warn', 'always'],

		'babel/no-await-in-loop': 'warn',
	},
}
