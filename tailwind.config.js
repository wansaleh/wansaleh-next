const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const { lighten, desaturate } = require('polished');

const brand = tailwindColorPalette('#f45d48', {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = tailwindColorPalette('#078080', {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});
const brandGray = tailwindColorPalette(
  lighten(0.15, desaturate(0, '#f45d48')),
  {
    name: 'brandGray',
    greyscale: true,
    ui: false
  }
);

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt,
        brandGray: brandGray.brandGray
      },
      fontFamily: {
        sans: ['Inter', 'roc-grotesk', ...defaultTheme.fontFamily.sans],
        head: ['aktiv-grotesk-extended', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
};
