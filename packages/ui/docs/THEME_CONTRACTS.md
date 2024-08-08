# Theme Contract Overview

These follow specifications detailed in the Design System Figma.
Theme contracts are equivalent to a token layer

|token layer|theme contract       |example                                                          |
|-----------|---------------------|-----------------------------------------------------------------|
|base token |themes/ta/tokens.ts  |taTokens['ta-blue-50'] -> '#E6E6FF'                              |
|alias token|aliasContract.css.ts |aliasContract['primary-softest'] -> taTokens['ta-blue-50']       |
|role token |theme.css.ts         |vars.bg['brand-primary-soft'] -> aliasContract['primary-softest']|

## Base Token

These are brand specific tokens. Generally prefixed by the brand shortname (eg. 'ta')
There are common shared tokens among all the brands located in [baseTokens](../lib/styles/themes/ta/baseTokens.ts)

- baseTokens: include `slate`, `white`, `grey variants`, and `semantic variants`
- tokens: These are brand specific color variants constants (eg. [ai/tokens.ts](../lib/styles/themes/ai/tokens.ts))

## Alias Token

In `[brand-prefix]/theme.css.ts` you will have a `brand theme` generated using `brand tokens` + [aliasContract](../lib/styles/aliasContract.css.ts).
These `alias-token layer` theme is a constant used throughout the design system, and will reference a different brand color variant depending on which brand was applied to the application's root element.

```ts
// ta/theme.css.ts

// Alias Token Layer

// exports string className with following properties

// .theme_taTheme__1lyyd4x0 {
//     --primary-softest__1con5qz0: #E7F0FF;
//     --primary-softer__1con5qz1: #B3D2FF;
//     --primary-soft__1con5qz2: #8EBCFF;
//     --primary-lightest__1con5qz3: #5B9DFF;
//     --primary-light__1con5qz4: #3B8AFF;
//     --primary-default__1con5qz5: #0A6DFF;
//     --primary-dark__1con5qz6: #0963E8;
//     --primary-darker__1con5qz7: #074DB5;
//     --primary-darkest__1con5qz8: #042E6B;
//     --secondary-softest__1con5qz9: #F7FEE6;
//     --secondary-softer__1con5qza: #E6FCB0;
//     --secondary-soft__1con5qzb: #DAFA8A;
//     --secondary-lightest__1con5qzc: #C9F854;
//     --secondary-light__1con5qzd: #BEF733;
//     --slate__1con5qzo: #001F3D;
//     --white__1con5qzp: #FFFFFF;
//     --grey-softest__1con5qzq: #F7F8FA;
//     --grey-softer__1con5qzr: #E5EAF0;
//     --grey-soft__1con5qzs: #D8E0E8;
//     --grey-lightest__1con5qzt: #C6D2DE;
//     --grey-light__1con5qzu: #AABCCF;
//     --grey-default__1con5qzv: #8D9EAE;
//     --grey-dark__1con5qzw: #80909E;
//     --grey-darker__1con5qzx: #64707C;
// etc...

```

## Role Token

Role Token layers leverages generated alias tokens and assigns/reuses these alias tokens to specific roles including `background`, `text`, `button`, etc.

```ts
// theme.css.ts

// Role Token Layer

// exports string className with following properties

// .theme_theme__1con5qz1j {
//     --bg-brand-primary__1con5qz1k: var(--primary-default__1con5qz5);
//     --bg-brand-primary-soft__1con5qz1l: var(--primary-softest__1con5qz0);
//     --bg-brand-secondary__1con5qz1m: var(--secondary-default__1con5qze);
//     --bg-brand-secondary-soft__1con5qz1n: var(--secondary-softest__1con5qz9);
//     --bg-brand-tertiary__1con5qz1o: var(--tertiary-default__1con5qzi);
//     --bg-brand-tertiary-soft__1con5qz1p: var(--tertiary-softest__1con5qzj);
//     --bg-brand-quaternary__1con5qz1q: var(--quaternary-default__1con5qzk);

// roles included in this css className include:
// bg -> background
// text
// icon
// border
// button
```

We will end up having
`"bg-brand-primary-softest" -> "primary-softest" -> "[brand-prefix]-blue-50"`

By applying the desired `alias brand theme` and `role theme` to the application's root element.
Your app will be able to apply the correct brand tokens to css properties.

See More details on [ThemeProvider](../lib/styles/ThemeProvider.tsx)

```tsx
// App.tsx
import { taTheme } from "@huarwar/ui/themes/taTheme";
// role theme already applied within ThemeProvider
import { ThemeProvider } from "@huarwar/ui";

function App() {
  return (
    <ThemeProvider brand={taTheme}>
        {/* <div ... */}
        {/* 
          // Example <Button> component had a 
          // backgroundColor style that references `--primary-softest`
          // with `taTheme` applied above, we would be able to link 
          // `--primary-softest` with `#E7F0FF` hexcode specific to the `ta` brand
        */}
    </ThemeProvider>
  )
}
```
