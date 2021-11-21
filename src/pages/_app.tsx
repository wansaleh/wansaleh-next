import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';

import 'tailwindcss/tailwind.css';
import '../styles/font-sharp-grotesk.css';
import '../styles/font-tiempos.css';
import '../styles/main.css';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from '../components/layout';
import chakra from '../styles/chakra';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakra}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
