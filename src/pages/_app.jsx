import 'tailwindcss/tailwind.css';
import '../styles/font-sharp-grotesk.css';
import '../styles/font-tiempos.css';
import '../styles/main.css';
import 'react-medium-image-zoom/dist/styles.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { SWRConfig } from 'swr';

import Layout from '../components/layout';
import chakra from '../styles/chakra';

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
      }}
    >
      <ChakraProvider theme={chakra}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SWRConfig>
  );
}
