/** @type {import('tailwindcss').Config} */
module.exports = {
  // presets: [require("./components/tailwind.pluginhack.cjs")],
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    accentColor: "#b40000",
    /* START | Generated functional colors */
    ...{
      colors: {
        current: "var(--colors-current)",
        transparent: "var(--colors-transparent)",
        "neutral-background": {
          low: "var(--colors-neutral-background-low)",
          medium: "var(--colors-neutral-background-medium)",
          "interactive-default":
            "var(--colors-neutral-background-interactive-default)",
          "interactive-disabled":
            "var(--colors-neutral-background-interactive-disabled)",
          "interactive-hover":
            "var(--colors-neutral-background-interactive-hover)",
        },
        "primary-background": {
          high: "var(--colors-primary-background-high)",
          medium: "var(--colors-primary-background-medium)",
          low: "var(--colors-primary-background-low)",
          "interactive-default":
            "var(--colors-primary-background-interactive-default)",
          "interactive-hover":
            "var(--colors-primary-background-interactive-hover)",
          "interactive-active":
            "var(--colors-primary-background-interactive-active)",
        },
        "accent1-background": {
          high: "var(--colors-accent1-background-high)",
          medium: "var(--colors-accent1-background-medium)",
          low: "var(--colors-accent1-background-low)",
          "interactive-default":
            "var(--colors-accent1-background-interactive-default)",
          "interactive-hover":
            "var(--colors-accent1-background-interactive-hover)",
          "interactive-active":
            "var(--colors-accent1-background-interactive-active)",
        },
        "accent2-background": {
          high: "var(--colors-accent2-background-high)",
          medium: "var(--colors-accent2-background-medium)",
          low: "var(--colors-accent2-background-low)",
        },
        "accent3-background": {
          high: "var(--colors-accent3-background-high)",
          medium: "var(--colors-accent3-background-medium)",
          low: "var(--colors-accent3-background-low)",
          "interactive-default":
            "var(--colors-accent3-background-interactive-default)",
        },
        "neutral-text": {
          high: "var(--colors-neutral-text-high)",
          medium: "var(--colors-neutral-text-medium)",
          inverse: "var(--colors-neutral-text-inverse)",
          "light-onbackground": "var(--colors-neutral-text-light-onbackground)",
          "dark-onbackground": "var(--colors-neutral-text-dark-onbackground)",
          "interactive-disabled":
            "var(--colors-neutral-text-interactive-disabled)",
        },
        "primary-text": {
          high: "var(--colors-primary-text-high)",
          "interactive-default":
            "var(--colors-primary-text-interactive-default)",
          "interactive-hover": "var(--colors-primary-text-interactive-hover)",
          "interactive-active": "var(--colors-primary-text-interactive-active)",
        },
        "accent1-text": {
          high: "var(--colors-accent1-text-high)",
        },
        "accent3-text": {
          high: "var(--colors-accent3-text-high)",
        },
        "accent2-text": {
          high: "var(--colors-accent2-text-high)",
        },
        "neutral-border": {
          high: "var(--colors-neutral-border-high)",
          medium: "var(--colors-neutral-border-medium)",
          low: "var(--colors-neutral-border-low)",
          "interactive-disabled":
            "var(--colors-neutral-border-interactive-disabled)",
        },
        "primary-border": {
          high: "var(--colors-primary-border-high)",
          "interactive-default":
            "var(--colors-primary-border-interactive-default)",
          "interactive-hover": "var(--colors-primary-border-interactive-hover)",
          "interactive-active":
            "var(--colors-primary-border-interactive-active)",
        },
        "promo-border": {
          high: "var(--colors-promo-border-high)",
        },
        "select-border": {
          high: "var(--colors-select-border-high)",
        },
        "accent1-border": {
          high: "var(--colors-accent1-border-high)",
        },
        "accent3-border": {
          high: "var(--colors-accent3-border-high)",
        },
        "accent2-border": {
          high: "var(--colors-accent2-border-high)",
        },
      },
      backgroundColor: {
        current: "var(--backgroundColor-current)",
        transparent: "var(--backgroundColor-transparent)",
        "neutral-background": {
          low: "var(--backgroundColor-neutral-background-low)",
          medium: "var(--backgroundColor-neutral-background-medium)",
          "interactive-default":
            "var(--backgroundColor-neutral-background-interactive-default)",
          "interactive-disabled":
            "var(--backgroundColor-neutral-background-interactive-disabled)",
          "interactive-hover":
            "var(--backgroundColor-neutral-background-interactive-hover)",
        },
        "primary-background": {
          high: "var(--backgroundColor-primary-background-high)",
          medium: "var(--backgroundColor-primary-background-medium)",
          low: "var(--backgroundColor-primary-background-low)",
          "interactive-default":
            "var(--backgroundColor-primary-background-interactive-default)",
          "interactive-hover":
            "var(--backgroundColor-primary-background-interactive-hover)",
          "interactive-active":
            "var(--backgroundColor-primary-background-interactive-active)",
        },
        "accent1-background": {
          high: "var(--backgroundColor-accent1-background-high)",
          medium: "var(--backgroundColor-accent1-background-medium)",
          low: "var(--backgroundColor-accent1-background-low)",
          "interactive-default":
            "var(--backgroundColor-accent1-background-interactive-default)",
          "interactive-hover":
            "var(--backgroundColor-accent1-background-interactive-hover)",
          "interactive-active":
            "var(--backgroundColor-accent1-background-interactive-active)",
        },
        "accent2-background": {
          high: "var(--backgroundColor-accent2-background-high)",
          medium: "var(--backgroundColor-accent2-background-medium)",
          low: "var(--backgroundColor-accent2-background-low)",
        },
        "accent3-background": {
          high: "var(--backgroundColor-accent3-background-high)",
          medium: "var(--backgroundColor-accent3-background-medium)",
          low: "var(--backgroundColor-accent3-background-low)",
          "interactive-default":
            "var(--backgroundColor-accent3-background-interactive-default)",
        },
      },
      textColor: {
        current: "var(--textColor-current)",
        transparent: "var(--textColor-transparent)",
        "neutral-text": {
          high: "var(--textColor-neutral-text-high)",
          medium: "var(--textColor-neutral-text-medium)",
          inverse: "var(--textColor-neutral-text-inverse)",
          "light-onbackground":
            "var(--textColor-neutral-text-light-onbackground)",
          "dark-onbackground":
            "var(--textColor-neutral-text-dark-onbackground)",
          "interactive-disabled":
            "var(--textColor-neutral-text-interactive-disabled)",
        },
        "primary-text": {
          high: "var(--textColor-primary-text-high)",
          "interactive-default":
            "var(--textColor-primary-text-interactive-default)",
          "interactive-hover":
            "var(--textColor-primary-text-interactive-hover)",
          "interactive-active":
            "var(--textColor-primary-text-interactive-active)",
        },
        "accent1-text": {
          high: "var(--textColor-accent1-text-high)",
        },
        "accent3-text": {
          high: "var(--textColor-accent3-text-high)",
        },
        "accent2-text": {
          high: "var(--textColor-accent2-text-high)",
        },
      },
      borderColor: {
        current: "var(--borderColor-current)",
        transparent: "var(--borderColor-transparent)",
        "neutral-border": {
          high: "var(--borderColor-neutral-border-high)",
          medium: "var(--borderColor-neutral-border-medium)",
          low: "var(--borderColor-neutral-border-low)",
          "interactive-disabled":
            "var(--borderColor-neutral-border-interactive-disabled)",
        },
        "primary-border": {
          high: "var(--borderColor-primary-border-high)",
          "interactive-default":
            "var(--borderColor-primary-border-interactive-default)",
          "interactive-hover":
            "var(--borderColor-primary-border-interactive-hover)",
          "interactive-active":
            "var(--borderColor-primary-border-interactive-active)",
        },
        "promo-border": {
          high: "var(--borderColor-promo-border-high)",
        },
        "select-border": {
          high: "var(--borderColor-select-border-high)",
        },
        "accent1-border": {
          high: "var(--borderColor-accent1-border-high)",
        },
        "accent3-border": {
          high: "var(--borderColor-accent3-border-high)",
        },
        "accent2-border": {
          high: "var(--borderColor-accent2-border-high)",
        },
      },
    },
    /* END | Generated functional colors */
    fontFamily: {
      title: ["SuperiorTitle", "serif"],
      heading: ["Geologica", "serif"],
      body: ["Inter", "Arial", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },
  },
};
