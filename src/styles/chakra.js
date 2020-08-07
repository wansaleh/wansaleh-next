import theme from '@chakra-ui/theme';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

export default {
  ...theme,
  colors: {
    ...theme.colors,
    brand: tailwind.colors.brand,
    brandAlt: tailwind.colors.brandAlt
  },
  fonts: {
    ...theme.fonts,
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(','),
    serif: tailwind.fontFamily.serif.join(',')
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xs': '11px',
    '7xl': '5rem',
    '8xl': '7rem'
  }
  // sizes: {
  //   ...theme.sizes
  // }
};
