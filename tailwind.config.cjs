import { baseColors, colors, convertPalettteToTailwind } from './src/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    accentColor: '#b40000',
    colors: {
      ...baseColors,
      ...convertPalettteToTailwind(colors)
    },
    fontFamily: {
      sans: ['Inter', "Arial", "Helvetica", "sans-serif"],
      serif: ['Geometria', 'Geometria-light', "serif"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      colors: {
        primary: convertPalettteToTailwind(colors).red,
      }
    }
  }
}