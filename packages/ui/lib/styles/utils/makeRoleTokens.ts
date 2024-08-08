import { aliasContract } from "#/styles/aliasContract.css";

export const makeRoleTokens = ({
  primary,
  secondary,
  tertiary,
  quaternary,
  quinary,
  information,
  critical,
  warning,
  attention,
  success,
  grey,
  slate,
  white,
  blackAlternative,
}: typeof aliasContract) => ({
  bg: {
    "brand-primary": primary.default,
    "brand-primary-soft": primary.softest,
    "brand-secondary": secondary.default,
    "brand-secondary-soft": secondary.softest,
    "brand-tertiary": tertiary.default,
    "brand-tertiary-soft": tertiary.softest,
    "brand-quaternary": quaternary.default,
    "brand-quaternary-soft": quaternary.softest,
    "brand-quinary": quinary,

    "fill-critical": critical.default,
    "fill-critical-hover": critical.dark,
    "fill-warning": warning.default,
    "fill-success": success.default,
    "fill-success-hover": success.dark,

    "surface-primary": white,
    "surface-primary-hover": grey.softest,
    "surface-primary-active": primary.softest,
    "surface-secondary": grey.softest,
    "surface-secondary-hover": secondary.softest,
    "surface-secondary-active": secondary.softer,
    "surface-tertiary": grey.soft,
    "surface-tertiary-hover": grey.lightest,
    "surface-tertiary-active": primary.softer,

    "surface-inverse": slate,
    "surface-inverse-hover": slate,
    "surface-inverse-active": slate,

    "surface-disabled": grey.soft,
    "surface-info": information.softest,
    "surface-critical": critical.softest,
    "surface-warning": warning.softest,
    "surface-attention": attention.softest,
    "surface-success": success.softest,
  },
  text: {
    primary: slate,
    secondary: grey.darker,
    tertiary: grey.dark,

    "brand-primary": primary.default,
    "brand-primary-onwhite": primary.default,
    "brand-secondary": secondary.default,
    "brand-secondary-onprimary": secondary.default,

    inverse: white,
    "inverse-hover": grey.soft,
    "inverse-active": grey.default,
    "inverse-disabled": grey.darker,

    disabled: grey.default,
    info: information.darkest,
    critical: critical.default,
    warning: warning.darkest,
    attention: attention.default,
    success: success.default,

    link: primary.dark,
    "link-hover": primary.darker,
    "link-active": primary.darkest,
  },
  icon: {
    primary: slate,
    secondary: grey.darkest,

    "brand-primary": primary.default,
    "brand-primary-onwhite": primary.default,
    "brand-secondary": secondary.default,
    "brand-secondary-onwhite": secondary.default,

    inverse: white,
    "inverse-hover": grey.soft,
    "inverse-active": grey.default,
    "inverse-disabled": grey.darker,

    disabled: grey.default,
    "disabled-secondary": grey.softer,
    info: information.darkest,
    critical: critical.default,
    warning: warning.darkest,
    attention: attention.darkest,
    success: success.default,

    link: primary.dark,
    "link-hover": primary.darker,
    "link-active": primary.darkest,
  },
  border: {
    border: grey.lightest,
    hover: grey.default,
    active: grey.darker,
    focus: primary.default,

    "brand-primary": primary.default,
    "brand-secondary": secondary.default,
    "brand-tertiary": tertiary.default,
    "brand-quaternary": quaternary.default,

    inverse: grey.darker,
    critical: critical.default,
    "critical-hover": critical.dark,
    success: success.default,
    "success-hover": success.dark,
    info: information.default,
    warning: warning.default,
  },
  button: {
    "fill-primary": primary.default,
    "fill-primary-hover": primary.dark,
    "fill-primary-active": primary.darker,
    "fill-secondary": secondary.default,
    "fill-secondary-hover": secondary.light,
    "fill-secondary-active": secondary.lightest,

    "text-onprimary": white,
    "text-onsecondary": blackAlternative,
    "text-primary": primary.dark,
    "text-secondary": secondary.darkest,

    "icon-onprimary": white,
    "icon-onsecondary": blackAlternative,
    "icon-primary": primary.dark,
    "icon-secondary": secondary.darkest,
  },
});
