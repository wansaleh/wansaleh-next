import { extendTheme } from '@chakra-ui/react';
import { rgba } from 'polished';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode !== 'dark' ? 'white' : 'black',
        fontFamily: 'body',
        fontWeight: 300,
        // letterSpacing: '-0.0125em',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900'
      }

      // a: {
      //   color: props.colorMode === 'dark' ? 'brand.300' : 'brand.500'
      // }
    })
  },

  colors: {
    brand: tailwind.colors.brand,
    brandAlt: tailwind.colors.brandAlt,
    gray: tailwind.colors.gray,
    brandGray: tailwind.colors.brandGray
  },
  fonts: {
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(','),
    serif: tailwind.fontFamily.serif.join(','),
    mono: tailwind.fontFamily.mono.join(',')
  },
  fontSizes: {
    '2xs': '11px',
    '7xl': '5rem',
    '8xl': '7rem'
  },
  shadows: {
    outline: `0 0 0 3px ${rgba(tailwind.colors.brand[500], 0.6)}`
  }
});
