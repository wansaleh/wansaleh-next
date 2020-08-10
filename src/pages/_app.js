import { ChakraProvider, cookieStorageManager } from '@chakra-ui/core';

import { useEffect } from 'react';
import SmoothScroll from '../lib/smoothscroll';

import chakra from '../styles/chakra';
import '../styles/main.scss';
import '../styles/font-graphik.css';
import '../styles/font-nanum.css';
import '../styles/font-dm-mono.css';

const App = ({ Component, pageProps, cookies }) => {
  useEffect(() => {
    SmoothScroll(document, 50, 8);
  }, []);

  return (
    <ChakraProvider
      resetCSS
      storageManager={cookieStorageManager(cookies)}
      theme={chakra}
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
