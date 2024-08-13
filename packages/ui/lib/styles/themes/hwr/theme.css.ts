import { aliasContract } from '#/styles/aliasContract.css';
import { hwrTokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { makePrimaryAliasTokens } from '#/styles/utils/makePrimaryAliasTokens';
import { makeBaseAliasTokens } from '#/styles/utils/makeBaseAliasTokens';

export const hwrTheme = createTheme(
	aliasContract,
	{
		...makeBaseAliasTokens(),
		...makePrimaryAliasTokens('hwr', hwrTokens),
		secondary: {
			softest: hwrTokens['hwr-lime-50'],
			softer: hwrTokens['hwr-lime-100'],
			soft: hwrTokens['hwr-lime-200'],
			lightest: hwrTokens['hwr-lime-300'],
			light: hwrTokens['hwr-lime-400'],
			default: hwrTokens['hwr-lime-500'],
			dark: hwrTokens['hwr-lime-600'],
			darker: hwrTokens['hwr-lime-700'],
			darkest: hwrTokens['hwr-lime-900'],
		},
		tertiary: {
			default: hwrTokens['hwr-green-500'],
			softest: hwrTokens['hwr-green-50'],
		},
		quaternary: {
			default: hwrTokens['hwr-aqua-500'],
			softest: hwrTokens['hwr-aqua-50'],
		},
		quinary: hwrTokens['hwr-lemon-500'],
	},
	'hwrTheme'
);
