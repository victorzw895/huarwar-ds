# Getting started

```bash
npm i
```

```bash
npm run build
```

```bash
npm run dev
```

## Scripts

```js
"scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "turbo run build --filter=docs^... && changeset publish",
    "test": "turbo run test",
    "test:coverage": "turbo run test:coverage",
    "test:interactive": "turbo run test:interactive"
  },
```
### Scripts Detail:
```bash
npm run build
```
Builds the packages and the storybook docs.  For packages it will output a dist folder at `packages/ui/dist`.  For Storybook it will output a storybook-static folder at `apps/docs/storybook-static`.

```bash
npm run dev
```
This will open storybook on `http://localhost:6006/` automatically and a local vite/react app can be viewed on `http://localhost:5173/`
```bash
npm run lint
```
This will lint all the files.
```bash
npm run clean
```
Will delete all node modules and package locks from all packages and apps.  
```bash
npm run format
```
Will run prettier over all the files for conformity.
```bash
npm run changeset
```
Will start the changeset process.
```bash
npm run changeset-version
```
Versions the packages.
```bash
npm run release
```
TODO - this should be used in an action to publish the packages to npm registry
```bash
npm run test
```
Runs the tests in watch mode in the terminal.
```bash
npm run test:interactive
```
This will run a coverage report in the terminal and open a graphical interface at `http://localhost:51204/` which will open automatically and update upon test save.
```bash
npm run test:coverage
```
This will give you a coverage report in the terminal and create two folders of test results. `packages/ui/coverage` and `packages/ui/html` .
The coverage folder is used by the github actions and the html folder is a static representation of the test results which can be uploaded to a static site with one of the pipeline steps. Both of these folders are included in the `.gitignore` and are currently not checked into the repo.


## Apps & Packages

This repo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `packages/ui`: Core React components
- `packages/ui/src`: Contains a React/Vite App - while this is not 100% necessary and can be removed if needed, it's helpful as a means of testing components during development
- `packages/typescript-config`: Shared `tsconfig.json`s used throughout the repo
- `packages/eslint-config`: ESLint preset used throughout the repo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo.

## Detailed Docs

Further documentation details can be found in `packages/ui/docs`:

- Design System: Design system overview and applying brand themes [DESIGN_SYSTEM.md](./packages/ui/docs/DESIGN_SYSTEM.md)
- Styling Guide: Conntribuiting guide, using vanilla-extract css [STYLING_GUIDE.md](./packages/ui/docs/STYLING_GUIDE.md)
- Theme Contracts: Overview on design system tokens and implementation [THEME_CONTRACTS.md](./packages/ui/docs/THEME_CONTRACTS.md)

## Components

Each file inside of `packages/ui/lib/components` is a component inside our design system. For example:

```tsx
import * as styles from "./button.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style"
> &
  styles.ButtonVariants & {
    children: ReactNode;
    disabled?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
  };

export const Button = ({
  children,
  style = "fill",
  disabled = false,
  size = "large",
  color = "primary",
  ...other
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type="button"
      {...other}
      className={styles.button({
        style,
        color,
        size,
      })}
    >
      {children}
    </button>
  );
};
```

When adding a new file, ensure the component is also exported from the entry `index.ts` file:

```js
export { Button, type ButtonProps } from "./button";
```

## Testing

This repo uses [Vitest](https://vitest.dev/) as a testing framework.

For the component testing, we have two frameworks. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Vitest Axe](https://www.npmjs.com/package/vitest-axe).

### React Testing Library

React testing library is build onto of DOM testing library that allows us to test React components. The DOM Testing Library is a very light-weight solution for testing DOM nodes (simulated). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence in your UI code.

### Vitest Axe

Vitest Axe is a fork of `Jest Axe` and allows us to run accessibility tests on our components. **_IMPORTANT_** **_Vitest Axes does not guarantee that your components are accessible._** Treat it as a linter for a11y. It will pick up the common mistakes made around a11y but components needs to be tested manually with assistive technology and an independent audit needs to happen.

## Running Tests Locally

From the root of the project run the following:

```bash
npm run test
```

## Troubleshooting

### Error: The package "@esbuild/darwin-x64" could not be found, and is needed by esbuild.

When encountering this error. Try `npm run clean` followed up by `npm i`.

## Github Actions

Github actions are located at `.github/workflows`

### Test.yml

This action kicked off when a PR is opened against `main` branch. It will run the coverage report and fail if the components are not meeting the coverage threshold. If the tests fail to meet the coverage threshold, the PR can not be merged.

### TestA11y.yml

TODO

### Changeset.yml

TODO

## Versioning & Publishing Packages TODO

This repo uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `npm run changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

#TODO
