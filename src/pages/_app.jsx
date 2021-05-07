import 'tailwindcss/tailwind.css';
import '../styles/font-sharp-grotesk.css';
import '../styles/main.css';

// import '../styles/font-inter.css';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/layout';
import chakra from '../styles/chakra';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakra}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
