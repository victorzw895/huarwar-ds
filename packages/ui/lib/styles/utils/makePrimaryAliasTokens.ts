export const makePrimaryAliasTokens = (
  brand: string,
  tokens: Record<string, string>,
) => ({
  primary: {
    softest: tokens[`${brand}-blue-50`],
    softer: tokens[`${brand}-blue-100`],
    soft: tokens[`${brand}-blue-200`],
    lightest: tokens[`${brand}-blue-300`],
    light: tokens[`${brand}-blue-400`],
    default: tokens[`${brand}-blue-500`],
    dark: tokens[`${brand}-blue-600`],
    darker: tokens[`${brand}-blue-700`],
    darkest: tokens[`${brand}-blue-900`],
  },
});
