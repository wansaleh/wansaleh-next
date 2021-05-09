import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';

import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }) {
  const { colorMode } = useColorMode();

  return (
    <Box className={colorMode}>
      <Nav />

      {children}

      <Footer />
    </Box>
  );
}
