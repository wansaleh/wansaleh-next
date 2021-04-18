const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const brand = tailwindColorPalette('#2cb67d', {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = tailwindColorPalette('#078080', {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt,
        gray: colors.trueGray
      },
      fontFamily: {
        sans: ['General Sans', 'roc-grotesk', ...defaultTheme.fontFamily.sans],
        head: ['General Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
};
