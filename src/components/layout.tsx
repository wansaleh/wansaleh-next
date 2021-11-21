import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.classList[colorMode === 'dark' ? 'add' : 'remove']('dark');
  }, [colorMode]);

  const [marginBottom, setMarginBottom] = useState(0);
  useEffect(() => {
    setMarginBottom(document.getElementById('footer')?.clientHeight || 0);
  }, []);

  return (
    <Box overflowX="hidden" pos="relative">
      <Nav />
      <Box
        mb={`${marginBottom}px`}
        bg={useColorModeValue('white', 'black')}
        pos="relative"
        zIndex="1"
        boxShadow={useColorModeValue(
          '0 20px 20px rgba(0,0,0,0.05), 0 1px 0 0 rgba(0,0,0,0.1)',
          '0 20px 20px rgba(255,255,255,0.05), 0 1px 0 0 rgba(255,255,255,0.1)',
        )}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
