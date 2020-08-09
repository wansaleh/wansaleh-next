import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import { useEffect } from 'react';
import SmoothScroll from '../lib/smoothscroll';

import chakra from '../styles/chakra';
import '../styles/main.scss';
import '../styles/font-graphik.css';
import '../styles/font-nanum.css';
import '../styles/font-dm-mono.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    SmoothScroll(document, 50, 8);
  }, []);

  return (
    <ChakraProvider theme={chakra}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
