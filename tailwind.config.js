const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const { lighten, desaturate } = require('polished');

const brand = tailwindColorPalette('#6D58FF', {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = tailwindColorPalette('#ed1c2b', {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});
const brandGray = tailwindColorPalette(
  lighten(0.15, desaturate(0, '#6D58FF')),
  {
    name: 'brandGray',
    greyscale: true,
    ui: false
  }
);

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt,
        brandGray: brandGray.brandGray
      },
      fontFamily: {
        sans: [
          // 'DM Mono',
          'Graphik',
          ...defaultTheme.fontFamily.sans
        ],
        head: ['Graphik', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['Nanum Gothic Coding', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
};
