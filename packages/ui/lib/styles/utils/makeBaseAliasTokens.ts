import { baseTokens } from "#/styles/themes/ta/baseTokens";

export const makeBaseAliasTokens = () => ({
  slate: baseTokens["ta-slate"],
  white: baseTokens.white,
  grey: {
    softest: baseTokens["ta-grey-50"],
    softer: baseTokens["ta-grey-100"],
    soft: baseTokens["ta-grey-200"],
    lightest: baseTokens["ta-grey-300"],
    light: baseTokens["ta-grey-400"],
    default: baseTokens["ta-grey-500"],
    dark: baseTokens["ta-grey-600"],
    darker: baseTokens["ta-grey-700"],
    darkest: baseTokens["ta-grey-900"],
  },
  success: {
    softest: baseTokens["ta-green-50"],
    default: baseTokens["ta-green-700"],
    dark: baseTokens["ta-green-800"],
    darkest: baseTokens["ta-green-900"],
  },
  critical: {
    softest: baseTokens["ta-red-50"],
    default: baseTokens["ta-red-700"],
    dark: baseTokens["ta-red-800"],
    darkest: baseTokens["ta-red-900"],
  },
  warning: {
    softest: baseTokens["ta-orange-50"],
    default: baseTokens["ta-orange-500"],
    dark: baseTokens["ta-orange-600"],
    darkest: baseTokens["ta-orange-700"],
  },
  information: {
    softest: baseTokens["ta-aqua-50"],
    default: baseTokens["ta-aqua-600"],
    dark: baseTokens["ta-aqua-700"],
    darkest: baseTokens["ta-aqua-800"],
  },
  attention: {
    softest: baseTokens["ta-yellow-50"],
    default: baseTokens["ta-yellow-500"],
    dark: baseTokens["ta-yellow-700"],
    darkest: baseTokens["ta-yellow-800"],
  },
  blackAlternative: baseTokens["ta-slate"],
});
