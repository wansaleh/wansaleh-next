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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        head: ['General Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Gambetta', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              color: 'inherit',
              'h1,h2,h3,h4,h5,h6,p,b,em,strong': {
                color: 'inherit'
              },
              'h1,h2,h3,h4,h5,h6': {
                paddingTop: '1rem'
              },
              a: {
                color: theme('colors.brand.500'),
                '&:hover': {
                  color: '#000'
                }
              },
              blockquote: {
                fontFamily: theme('fontFamily.serif').join(','),
                fontSize: '1.5em',
                lineHeight: 1.5,
                color: 'inherit',
                opacity: 0.6
              },
              '> p': {
                // lineHeight: 1.6
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
