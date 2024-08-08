import { aliasContract } from '#/styles/aliasContract.css';
import { aiTokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { makePrimaryAliasTokens } from '#/styles/utils/makePrimaryAliasTokens';
import { makeBaseAliasTokens } from '#/styles/utils/makeBaseAliasTokens';
import { taTokens } from '#/styles/themes/ta/tokens';

export const aiTheme = createTheme(
	aliasContract,
	{
		...makeBaseAliasTokens(),
		...makePrimaryAliasTokens('ai', aiTokens),
		secondary: {
			softest: aiTokens['ai-green-50'],
			softer: aiTokens['ai-green-100'],
			soft: aiTokens['ai-green-200'],
			lightest: aiTokens['ai-green-300'],
			light: aiTokens['ai-green-400'],
			default: aiTokens['ai-green-500'],
			dark: aiTokens['ai-green-600'],
			darker: aiTokens['ai-green-700'],
			darkest: aiTokens['ai-green-900'],
		},
		tertiary: {
			default: aiTokens['ai-darkgreen-500'],
			softest: aiTokens['ai-green-50'],
		},
		quaternary: {
			default: aiTokens['ai-navy-1000'],
			softest: taTokens['ta-red-50'],
		},
		quinary: aiTokens['ai-darkgreen-500'],
	},
	'aiTheme'
);
