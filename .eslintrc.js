module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'strict-dependencies',
		'@typescript-eslint',
		'import',
		'unused-imports',
	],
	rules: {
		'unused-imports/no-unused-imports': 'warn',
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				'newlines-between': 'always',
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: { order: 'asc', caseInsensitive: true },
				pathGroups: [
					{
						pattern: 'src/types/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: 'src/repositories/**',
						group: 'internal',
						position: 'before',
					},
				],
			},
		],
	},
};
