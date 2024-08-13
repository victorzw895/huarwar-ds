/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ['@repo/eslint-config/storybook.js'],
	plugins: ['import'],
	ignorePatterns: ['.storybook'],
	rules: {
		'import/no-unresolved': [1, { ignore: ['^@huarwar/'] }],
	},
	settings: {
		'import/no-resolver': {
			typescript: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
