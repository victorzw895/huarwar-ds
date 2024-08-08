import { vars } from "#/styles/theme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    cursor: "pointer",
    boxShadow:
      "1px 0px 0px 0px color(display-p3 0 0 0 / 0.13) inset, -1px 0px 0px 0px color(display-p3 0 0 0 / 0.13) inset, 0px -1px 0px 0px color(display-p3 0 0 0 / 0.50) inset, 0px 1px 0px 0px color(display-p3 0.8 0.8 0.8 / 0.50) inset",
  },

  variants: {
    style: {
      fill: {
        backgroundColor: vars.bg["brand-primary"],
        border: "1px solid transparent",
        color: "white",
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid #0A6DFF",
        color: vars.bg["brand-primary"],
      },
      text: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        color: vars.bg["brand-primary"],
      },
    },
    color: {
      primary: { backgroundColor: vars.bg["brand-primary"], color: "white" },
      secondary: {
        backgroundColor: vars.bg["brand-secondary"],
        color: "black",
      },
      neutral: { backgroundColor: "white", color: "black" },
    },
    size: {
      large: {
        padding: "10px 16px",
      },
      medium: {
        padding: "6px 12px",
      },
      small: {
        padding: "4px 8px",
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        style: "fill",
        color: "secondary",
      },
      style: { backgroundColor: vars.bg["brand-secondary"], color: "black" },
    },
    {
      variants: {
        style: "fill",
        color: "neutral",
      },
      style: { backgroundColor: "white", color: "black" },
    },
    {
      variants: {
        style: "outline",
        color: "primary",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid #0A6DFF",
        color: vars.bg["brand-primary"],
      },
    },
    {
      variants: {
        style: "outline",
        color: "secondary",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid #AEF500",
        color: vars.bg["brand-secondary"],
      },
    },
    {
      variants: {
        style: "outline",
        color: "neutral",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid black",
        color: "black",
      },
    },
    {
      variants: {
        style: "text",
        color: "primary",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        color: vars.bg["brand-primary"],
      },
    },
    {
      variants: {
        style: "text",
        color: "secondary",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        color: vars.bg["brand-secondary"],
      },
    },
    {
      variants: {
        style: "text",
        color: "neutral",
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        color: "black",
      },
    },
  ],

  defaultVariants: {
    style: "fill",
    color: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
