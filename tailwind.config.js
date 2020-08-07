const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');

const brand = tailwindColorPalette('#09369F', {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = tailwindColorPalette('#ed1c2b', {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt
      },
      fontFamily: {
        sans: ['Graphik', ...defaultTheme.fontFamily.sans],
        head: ['Graphik', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: []
};
