# Styling Guide

We use Vanilla-extract css to easily maintain the design system styles.
Which are writted in Typescript and compiled in build time.
Visit [vanilla-extract docs](https://vanilla-extract.style/documentation/api/style/) for more info.

## Defining styles

```ts
// button.css.ts

// basic styling
import { style } from '@vanilla-extract/css';

const buttonStyle = style({
	padding: '10px',
	backgroundColor: 'red',
});

// using Desing System variable tokens defined in styles/theme.css
import { style } from '@vanilla-extract/css';
import { vars } from '#/styles/theme.css'; // no need to include .ts extension

const buttonStyle = style({
	padding: '10px',
	backgroundColor: vars.button['fill-primary'],
});
```

## Applying style in a React component

```tsx
// button.tsx

import * as styles from './button.css';

function Button({children}) {
    return {
        <button className={styles.buttonStyle}>
            {children}
        </button>
    }
}

```

## Advanced Styling

There are a couple more advanced vanilla-extract styling used in the design system.

- `@vanilla-extract/recipes`: are very useful and a great way of applying multiple variants (Instead of using `styleVariants`) to a component determined by props.
  - These allow to customise css properties based off which props were applied together
  - See [button.css.ts](../lib/components/button/button.css.ts) for an example.
- `@vanilla-extract/sprinkles`: is used to generate a tailwind-like CSS framework with atomic CSS className/properties.
  - This can help reduce CSS lines by applying reusable CSS properties in component classNames.

### Sprinkles

This is defined once in [styles/sprinkless.css.ts](../lib/styles/sprinkles.css.ts)
Currently it references the Design system spacing values

#### Usage

Defining styles using sprinkles is similar to defining styles with regular @vanilla-extract/css.

- Import and use `sprinkles` instead of `style`
- Because sprinkles has been defined with a reference to our design system tokens `vars`, we can specify the tokens as strings.
- NOTE: That you can use `sprinkles` with `style`. See [styles.container](../lib/components/sampleComponent/sample.css.ts)

```ts
// button.css.ts

// Sprinkles styling
import { sprinkles } from '#/styles/sprinkles.css';

const buttonStyle = sprinkles({
	padding: 'space-125',
	backgroundColor: 'fill-primary',
});
```

#### Sprinkles in component Props

We can also leverage Typescript from Vanilla-extract to make our Component prop types.

- See `@vanilla-extract/recipes` with component props: [button](../lib/components/button/button.tsx)
- See `@vanilla-extract/css styleVariants` with component props: [sampleComponent backgroundColor](../lib/components/sampleComponent/sample.tsx)
- See `@vanilla-extract/sprinkles` with component props: [sampleComponent paddingX](../lib/components/sampleComponent/sample.tsx)

- Notice how when using these components now and applying prop values, these will take in Design system token strings
