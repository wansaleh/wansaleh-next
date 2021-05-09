const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

// #36a0c0
const brand = tailwindColorPalette('#3497b5', {
  name: 'brand',
  greyscale: false,
  ui: false
});

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...brand
        // gray: colors.trueGray
      },
      fontFamily: {
        sans: ['Sharp Grotesk', ...defaultTheme.fontFamily.sans],
        head: ['Clash Display', ...defaultTheme.fontFamily.sans],
        serif: ['Tiempos Headline', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
