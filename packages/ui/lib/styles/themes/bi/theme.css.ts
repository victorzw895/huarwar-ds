import { aliasContract } from '#/styles/aliasContract.css';
import { biTokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { makeBaseAliasTokens } from '#/styles/utils/makeBaseAliasTokens';
import { makePrimaryAliasTokens } from '#/styles/utils/makePrimaryAliasTokens';
import { taTokens } from '#/styles/themes/ta/tokens';

export const biTheme = createTheme(
	aliasContract,
	{
		...makeBaseAliasTokens(),
		...makePrimaryAliasTokens('bi', biTokens),
		secondary: {
			softest: biTokens['bi-yellow-50'],
			softer: biTokens['bi-yellow-100'],
			soft: biTokens['bi-yellow-200'],
			lightest: biTokens['bi-yellow-300'],
			light: biTokens['bi-yellow-400'],
			default: biTokens['bi-yellow-500'],
			dark: biTokens['bi-yellow-700'],
			darker: biTokens['bi-yellow-700'],
			darkest: biTokens['bi-yellow-900'],
		},
		tertiary: {
			default: biTokens['bi-red-500'],
			softest: biTokens['bi-red-50'],
		},
		quaternary: {
			default: biTokens['bi-darkblue-500'],
			softest: taTokens['ta-aqua-50'],
		},
		quinary: biTokens['bi-red-500'],
	},
	'biTheme'
);
