import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import chakra from '../styles/chakra';
import '../styles/main.scss';
import '../styles/font-graphik.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakra}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
