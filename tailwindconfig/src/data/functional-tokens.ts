import { FunctionalConfig } from "./functional-color-tokens";
import { baseColorTokens } from "./base-color-tokens";

export const functionalColors: FunctionalConfig = {
  backgroundColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-background": {
      low: [baseColorTokens.white, baseColorTokens.black[900]],
      medium: baseColorTokens.gray[300],
      high: baseColorTokens.black[900],
      "interactive-default": [
        baseColorTokens.white,
        baseColorTokens.black[800],
      ],
      "interactive-disabled": [
        baseColorTokens.gray[50],
        baseColorTokens.gray[800],
      ],
      "interactive-hover": [
        baseColorTokens.gray[50],
        baseColorTokens.gray[900],
      ],
    },
    "primary-background": {
      high: baseColorTokens.red[800],
      medium: baseColorTokens.red[700],
      low: baseColorTokens.red[100],
      "interactive-default": baseColorTokens.red[500],
      "interactive-hover": baseColorTokens.red[700],
      "interactive-active": baseColorTokens.red[600],
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
      high: [baseColorTokens.black[900], baseColorTokens.white],
      medium: [baseColorTokens.black[700], baseColorTokens.black[500]],
      inverse: "purple",
      "light-onbackground": [baseColorTokens.white, baseColorTokens.black[900]],
      "dark-onbackground": [baseColorTokens.black[900], baseColorTokens.white],
      "interactive-disabled": "purple",
    },
    "primary-text": {
      high: baseColorTokens.red[500],
      "interactive-default": [
        baseColorTokens.white,
        baseColorTokens.black[900],
      ],
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
      high: baseColorTokens.black[900],
      medium: baseColorTokens.black[600],
      low: "purple",
      "interactive-disabled": [
        baseColorTokens.gray[50],
        baseColorTokens.gray[800],
      ],
    },
    "primary-border": {
      high: "purple",
      "interactive-default": [
        baseColorTokens.red[500],
        baseColorTokens.red[700],
      ],
      "interactive-hover": baseColorTokens.red[500],
      "interactive-active": baseColorTokens.red[400],
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
