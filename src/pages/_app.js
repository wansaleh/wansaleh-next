import 'tailwindcss/tailwind.css';
import '../styles/main.css';

import { ChakraProvider } from '@chakra-ui/react';

// import { useEffect } from 'react';
// import SmoothScroll from '../lib/smoothscroll';
// import Butter from '../lib/butter';
import chakra from '../styles/chakra';
// import '../styles/font-inter.css';
// import '../styles/font-jetbrains.css';

const App = ({ Component, pageProps }) => (
  // useEffect(() => {
  //   SmoothScroll({ speed: 80 });
  //   // new Butter().init();
  // }, []);

  <div id="butter">
    <ChakraProvider resetCSS theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  </div>
);
export default App;
