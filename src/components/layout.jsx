import { Box, useColorMode } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.classList[colorMode === 'dark' ? 'add' : 'remove']('dark');
  }, [colorMode]);

  return (
    <Box>
      <Nav />

      {children}

      <Footer />
    </Box>
  );
}
