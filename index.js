module.exports = {
	extends: 'eslint-config-airbnb-base',
	settings: {
		ecmascript: 8,
	},
	rules: {
		'quotes': ['warn', 'single', {
			avoidEscape: true, allowTemplateLiterals: true,
		}],

		'max-len': ['warn', 120, {
			ignoreTrailingComments: true,
			ignoreUrls: true,
		}],

		'indent': ['warn', 'tab'],
		'no-tabs': 'off',

		'semi': ['warn', 'never'],

		'no-use-before-define': ['error', 'nofunc'],
		'no-unused-vars': 'warn',
		'no-param-reassign': ['error', {
			props: false,
		}],
		'no-mixed-operators': ['error', {
			allowSamePrecedence: true,
		}],

		'arrow-parens': ['error', 'always'],
		'padded-blocks': 'off',

		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: true,
		}],

		'import/extensions': ['error', 'always', {
			js: 'never',
			mjs: 'never',
			coffee: 'never',
		}],
	}
}
