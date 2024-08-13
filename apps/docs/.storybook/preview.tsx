import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '@huarwar/ui';
import { aiTheme } from '@huarwar/ui/themes/aiTheme';
import { biTheme } from '@huarwar/ui/themes/biTheme';
import { hwrTheme } from '@huarwar/ui/themes/hwrTheme';

const preview: Preview = {
	parameters: {},
	decorators: [
		(Story, context) => {
			const brandTheme = context.parameters.theme || context.globals.theme;
			const storyTheme = {
				ai: aiTheme,
				bi: biTheme,
				hwr: hwrTheme,
			};

			return (
				<ThemeProvider brand={storyTheme[brandTheme]}>
					{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
					<Story />
				</ThemeProvider>
			);
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'hwr',
			toolbar: {
				// The icon for the toolbar item
				icon: 'circlehollow',
				// Array of options
				items: [
					{ value: 'ai', title: 'ai' },
					{ value: 'bi', title: 'bi' },
					{ value: 'hwr', title: 'hwr' },
				],
				// Property that specifies if the name of the item will be displayed
				showName: true,
			},
		},
	},
};

export default preview;
