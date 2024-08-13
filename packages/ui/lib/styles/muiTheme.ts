import { createTheme, Theme } from '@mui/material/styles';
import { breakpoints, Breakpoints as BP } from './constants/breakpoints';

type Breakpoints = Record<BP, true>;

declare module '@mui/material/styles' {
	interface BreakpointOverrides extends Breakpoints {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
	}
}

export const muiTheme: Theme = createTheme({
	breakpoints: {
		values: {
			xSmall: breakpoints.xSmall,
			small: breakpoints.small,
			medium: breakpoints.medium,
			large: breakpoints.large,
			xLarge: breakpoints.xLarge,
			xxLarge: breakpoints.xxLarge,
		},
	},
	spacing: (factor: number) => `${0.125 * factor}rem`,
});
