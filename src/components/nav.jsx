import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Logo from '../assets/images/logo';

export default function Nav() {
  return (
    <Container maxW="7xl" pos="relative">
      <Flex
        as="nav"
        zIndex="100"
        justify="space-between"
        align="center"
        fontSize={['sm', 'sm', 'sm', 'md']}
        sx={{
          a: { textDecoration: 'none !important' }
        }}
      >
        <Flex as="ul" justify="space-between" align="center" py="4">
          <li>
            <NextLink href="/">
              <Link d="block">
                <Flex align="center">
                  <Logo
                    w="1.75em"
                    fill={useColorModeValue('brand.500', 'brand.500')}
                    css={{ transition: 'all 1s ease' }}
                  />
                  <Box ml="2" fontWeight="600">
                    By Wan Saleh
                  </Box>
                </Flex>
              </Link>
            </NextLink>
          </li>
        </Flex>

        <Box flex="1" />

        <HStack as="ul" justify="space-between" align="center" py="4" fontWeight="600" spacing="2">
          <li>
            <NextLink href="/blog">
              <Link>In The Studio</Link>
            </NextLink>
          </li>

          <li>
            <ToggleMode />
          </li>
        </HStack>
      </Flex>
    </Container>
  );
}

function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      minW="unset"
      p="1"
      bg="none"
      variant="unstyled"
      h="auto"
      borderRadius="0"
      onClick={toggleColorMode}
    >
      <Box
        as="svg"
        height="1.25em"
        width="1.25em"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        transition="transform 0.5s ease, opacity 0.2s"
        opacity={colorMode !== 'dark' ? 1 : 0}
        transform={colorMode !== 'dark' ? 'rotate(0)' : 'rotate(-180deg)'}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </Box>
      <Box
        as="svg"
        height="1.25em"
        width="1.25em"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        pos="absolute"
        top="calc(50% - 0.625em)"
        left="calc(50% - 0.625em)"
        transition="transform 0.5s ease, opacity 0.2s"
        opacity={colorMode === 'dark' ? 1 : 0}
        transform={colorMode === 'dark' ? 'rotate(0)' : 'rotate(180deg)'}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" x2="12" y1="1" y2="3" />
        <line x1="12" x2="12" y1="21" y2="23" />
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
        <line x1="1" x2="3" y1="12" y2="12" />
        <line x1="21" x2="23" y1="12" y2="12" />
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
      </Box>
    </Button>
  );
}
