import { FunctionalConfig } from "../data/functional-color-tokens";
import colors from "./base.colors";

export const functionalColors: FunctionalConfig = {
  backgroundColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-background": {
      low: [colors.white, colors.black[900]],
      medium: colors.gray[300],
      "interactive-default": [colors.white, colors.black[800]],
      "interactive-disabled": [colors.gray[50], colors.gray[800]],
      "interactive-hover": [colors.gray[50], colors.gray[900]],
    },
    "primary-background": {
      high: colors.red[800],
      medium: colors.red[700],
      low: colors.red[100],
      "interactive-default": colors.red[500],
      "interactive-hover": colors.red[700],
      "interactive-active": colors.red[600],
    },
    "accent1-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-default": "purple",
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "accent2-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
    },
    "accent3-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-default": "purple",
    },
  },
  textColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-text": {
      high: [colors.black[900], colors.white],
      medium: [colors.black[700], colors.black[500]],
      inverse: "purple",
      "light-onbackground": "purple",
      "dark-onbackground": [colors.black[900], colors.white],
      "interactive-disabled": "purple",
    },
    "primary-text": {
      high: colors.red[500],
      "interactive-default": [colors.white, colors.black[900]],
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "accent1-text": {
      high: "purple",
    },
    "accent3-text": {
      high: "purple",
    },
    "accent2-text": {
      high: "purple",
    },
  },
  borderColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-border": {
      high: colors.black[900],
      medium: colors.black[600],
      low: "purple",
      "interactive-disabled": [colors.gray[50], colors.gray[800]],
    },
    "primary-border": {
      high: "purple",
      "interactive-default": [colors.red[500], colors.red[700]],
      "interactive-hover": colors.red[500],
      "interactive-active": colors.red[400],
    },
    "promo-border": {
      high: "purple",
    },
    "select-border": {
      high: "purple",
    },
    "accent1-border": {
      high: "purple",
    },
    "accent3-border": {
      high: "purple",
    },
    "accent2-border": {
      high: "purple",
    },
  },
};
