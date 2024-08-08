import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { breakpoints } from "./constants/breakpoints";

const responsiveProperties = defineProperties({
  conditions: {
    xSmall: {},
    small: { "@media": `screen and (min-width: ${breakpoints.small}px)` },
    medium: { "@media": `screen and (min-width: ${breakpoints.medium}px)` },
    large: { "@media": `screen and (min-width: ${breakpoints.large}px)` },
    xLarge: { "@media": `screen and (min-width: ${breakpoints.xLarge}px)` },
    xxLarge: { "@media": `screen and (min-width: ${breakpoints.xxLarge}px)` },
  },
  defaultCondition: "xSmall",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.text,
    backgroundColor: vars.bg,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
