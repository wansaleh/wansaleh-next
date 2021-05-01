const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
        ...brand,
        gray: colors.trueGray
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        head: ['General Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              a: {
                color: theme('colors.brand.500'),
                '&:hover': {
                  color: '#000'
                }
              },
              blockquote: {
                fontSize: '1.5em',
                lineHeight: 1.5,
                color: 'inherit',
                opacity: 0.6
              },
              '> p': {
                lineHeight: 1.6,
                '&:first-of-type': {
                  fontSize: '1.75em',
                  lineHeight: 1.2
                }
              }
            }
          },
          dark: {
            css: {
              a: {
                '&:hover': {
                  color: '#fff'
                }
              }
            }
          }
        };
      }
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [require('@tailwindcss/typography')]
};
