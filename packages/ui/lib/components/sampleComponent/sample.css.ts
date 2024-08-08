import { vars } from "#/styles/theme.css";
import { sprinkles } from "#/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const box = style({
  height: '50px',
  width: '50px'
})

export const backgroundColor = styleVariants({
  "bg-brand-primary": {
    backgroundColor: vars.bg["brand-primary"],
  },
  "bg-brand-secondary": {
    backgroundColor: vars.bg["brand-secondary"],
  },
  "bg-brand-tertiary": {
    backgroundColor: vars.bg["brand-tertiary"],
  },
});

export const container = style([
  {
    padding: "16px 12px",
    borderColor: vars.border["brand-quaternary"],
    borderBlockWidth: "1px",
    borderStyle: "solid",
  },
  sprinkles({
    padding: "space-25",
  }),
]);

export const links = style({
  color: vars.text["link"],
  ":hover": {
    color: vars.text["link-hover"],
  },
  ":active": {
    color: vars.text["link-active"],
  },
});
