import { ChakraProvider } from '@chakra-ui/core';

import { useEffect } from 'react';
import SmoothScroll from '../lib/smoothscroll';

import chakra from '../styles/chakra';
import '../styles/main.css';
// import '../styles/font-inter.css';
// import '../styles/font-jetbrains.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    SmoothScroll(document, 80, 12);
  }, []);

  return (
    <ChakraProvider resetCSS theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
