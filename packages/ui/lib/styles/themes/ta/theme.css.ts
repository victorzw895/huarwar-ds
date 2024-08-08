import { aliasContract } from "#/styles/aliasContract.css";
import { taTokens } from "./tokens";
import { createTheme } from "@vanilla-extract/css";
import { makePrimaryAliasTokens } from "#/styles/utils/makePrimaryAliasTokens";
import { makeBaseAliasTokens } from "#/styles/utils/makeBaseAliasTokens";

export const taTheme = createTheme(aliasContract, {
  ...makeBaseAliasTokens(),
  ...makePrimaryAliasTokens("ta", taTokens),
  secondary: {
    softest: taTokens["ta-lime-50"],
    softer: taTokens["ta-lime-100"],
    soft: taTokens["ta-lime-200"],
    lightest: taTokens["ta-lime-300"],
    light: taTokens["ta-lime-400"],
    default: taTokens["ta-lime-500"],
    dark: taTokens["ta-lime-600"],
    darker: taTokens["ta-lime-700"],
    darkest: taTokens["ta-lime-900"],
  },
  tertiary: {
    default: taTokens["ta-green-500"],
    softest: taTokens["ta-green-50"],
  },
  quaternary: {
    default: taTokens["ta-aqua-500"],
    softest: taTokens["ta-aqua-50"],
  },
  quinary: taTokens["ta-lemon-500"],
});
