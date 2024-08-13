# Design System Overview

## Theme Contracts

Pre-requisite: See Figma walkthrough of color system, to understand implementation

- [Design System Implementation](./THEME_CONTRACTS.md)

## Files

- Design system components and styles lives in `/lib`

Components

- Contains `*.tsx`, `*.spec.tsx`, `*.css.ts`, `index.ts`

Styles

- `index.ts`: exports component and component types
- `constants/breakpoints.ts`: screen breakpoints
- `constants/space.ts`: spacing
- `global.css.ts`: Global css and reset styles
- `aliasContract.css.ts`: Design system alias tokens and detailed in [Section: Alias Token](./THEME_CONTRACTS.md)
- `theme.css.ts`: Overarching theme and defined variables for Design System role tokens. Detailed in [Section: Role Token](./THEME_CONTRACTS.md)

`theme.css.ts` exports:

- `theme` (string className to be applied to root of application)
- `vars` (contains theme css variables that can easily be applied to css properties)

Example:

```js
vars.bg["brand-primary"]; // -> var(--bg-brand-primary)
vars.bg["fill-critical"]; // -> var(--bg-fill-critical)

// usage
import { vars } from "#/styles/theme.css";
import { style } from "@vanilla-extract/css";

export buttonStyle = style({
    backgroundColor: vars.bg["brand-primary"]
    // css property to Role Token -> backgroundColor: var(--bg-brand-primary)
    // Role Token to Alias Token -> --bg-brand-primary: var(--primary-default)
    // Aliast Token to Brand Token -> --primary-default: #0A6DFF
})
```

- `themes`: Folder containing prefix brand themes eg: `ai, bi, hwr`. These export string className that applies brand color css variables
- `sprinkless.css.ts`: These contain tailwind-like atomic css generated at build time. These would help reduce css files by making certain css properties and values reusable. Would be able to generate static CSS Framework to be consumed by applications that cannot leverage Design System components.

- `muiTheme.ts`: MUI library is leveraged for its layout components such as `Grid`, `Stack`, `Box`. This file contains overrides for the layout `breakpoints` and `spacing` values.
- `ThemeProvider.tsx`: Collectively applies `muiTheme overrides` and the `design system theme contracts`

## GETTING STARTED

### Install Package Dependency

This project dependency name is subject to change.
Make sure to check the published package for this and Install package dependency

```bash
npm i @huarwar/ui
```

### Apply Theme to App Root Element

Import `ThemeProvider` from `@huarwar/ui` along with a brand theme from `@huarwar/ui/themes/[brand-prefix]Theme`.
Pass the imported brand theme to props

With just installation and initial setup below. You are ready to start consuming design system components
See Storybook by running `npm run dev` on how to consume components.
Or See [Styling Guide](./STYLING_GUIDE.md) to see how styles are applied to components.

```tsx
// App.tsx

import { ThemeProvider } from '@huarwar/ui';
import { hwrTheme } from '@huarwar/ui/themes/hwrTheme';

function App() {
	return <ThemeProvider brand={hwrTheme}>{/* <div> ... */}</ThemeProvider>;
}
```
