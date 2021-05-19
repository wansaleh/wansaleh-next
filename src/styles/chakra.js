import { extendTheme } from '@chakra-ui/react';
import { rgba } from 'polished';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

const theme = extendTheme({
  components: {
    Link: {
      // The styles all button have in common
      baseStyle: {
        textDecoration: 'none',
        _hover: { textDecoration: 'none' },
        _active: { opacity: 0.6 },
        _focus: { boxShadow: 'none' },
        _focusVisible: { boxShadow: 'outline' }
      }
    },
    Button: {
      // The styles all button have in common
      baseStyle: {
        _active: { opacity: 0.6 },
        _focus: { boxShadow: 'none' },
        _focusVisible: { boxShadow: 'outline' }
      }
    }
  },

  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode !== 'dark' ? 'white' : 'black',
        fontFamily: 'body',
        fontWeight: 400,
        letterSpacing: '-0.01em',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        transition: 'none'
      }
    })
  },

  colors: tailwind.colors,
  fonts: {
    ...tailwind.fontFamily,
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(',')
  },
  // fontSizes: Object.entries(tailwind.fontSize).reduce((ret, [key, val]) => {
  //   ret[key] = val[0];
  //   return ret;
  // }, {}),
  shadows: {
    outline: `0 0 0 2px ${rgba(tailwind.colors.brand[500], 0.4)}`
  }
});

export default theme;
