import { ChakraProvider, cookieStorageManager } from '@chakra-ui/core';

import { useEffect } from 'react';
import SmoothScroll from '../lib/smoothscroll';

import chakra from '../styles/chakra';
import '../styles/main.scss';
import '../styles/font-graphik.css';
import '../styles/font-nanum.css';
import '../styles/font-dm-mono.css';

const App = ({ Component, pageProps, cookies = '' }) => {
  useEffect(() => {
    SmoothScroll(document, 80, 12);
  }, []);

  return (
    <ChakraProvider
      resetCSS
      theme={chakra}
      storageManager={cookieStorageManager(cookies)}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  return {
    cookies: ctx.req.headers.cookie
  };
};

export default App;
