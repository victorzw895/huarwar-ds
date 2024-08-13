import { baseTokens } from '#/styles/themes/hwr/baseTokens';

export const makeBaseAliasTokens = () => ({
	slate: baseTokens['hwr-slate'],
	white: baseTokens.white,
	grey: {
		softest: baseTokens['hwr-grey-50'],
		softer: baseTokens['hwr-grey-100'],
		soft: baseTokens['hwr-grey-200'],
		lightest: baseTokens['hwr-grey-300'],
		light: baseTokens['hwr-grey-400'],
		default: baseTokens['hwr-grey-500'],
		dark: baseTokens['hwr-grey-600'],
		darker: baseTokens['hwr-grey-700'],
		darkest: baseTokens['hwr-grey-900'],
	},
	success: {
		softest: baseTokens['hwr-green-50'],
		default: baseTokens['hwr-green-700'],
		dark: baseTokens['hwr-green-800'],
		darkest: baseTokens['hwr-green-900'],
	},
	critical: {
		softest: baseTokens['hwr-red-50'],
		default: baseTokens['hwr-red-700'],
		dark: baseTokens['hwr-red-800'],
		darkest: baseTokens['hwr-red-900'],
	},
	warning: {
		softest: baseTokens['hwr-orange-50'],
		default: baseTokens['hwr-orange-500'],
		dark: baseTokens['hwr-orange-600'],
		darkest: baseTokens['hwr-orange-700'],
	},
	information: {
		softest: baseTokens['hwr-aqua-50'],
		default: baseTokens['hwr-aqua-600'],
		dark: baseTokens['hwr-aqua-700'],
		darkest: baseTokens['hwr-aqua-800'],
	},
	attention: {
		softest: baseTokens['hwr-yellow-50'],
		default: baseTokens['hwr-yellow-500'],
		dark: baseTokens['hwr-yellow-700'],
		darkest: baseTokens['hwr-yellow-800'],
	},
	blackAlternative: baseTokens['hwr-slate'],
});
