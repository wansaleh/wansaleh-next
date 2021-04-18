const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const brand = tailwindColorPalette('#36a0c0', {
  name: 'brand',
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
