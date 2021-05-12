const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// #36a0c0
const brand = tailwindColorPalette('#3497b5', {
  name: 'brand',
  grayscale: true,
  ui: false,
  colorscale: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  grayscaleMix: 0.035
});

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: brand.brand,
        brandGray: brand.gray,
        black: brand.black,
        trueGray: colors.trueGray
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['Sharp Grotesk', ...defaultTheme.fontFamily.sans],
        head: ['Clash Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['Bespoke Serif', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
