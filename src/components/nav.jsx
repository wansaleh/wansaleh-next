import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { rgba } from 'polished';
import React from 'react';
import { useWindowScroll } from 'react-use';

import Logo from '../images/logo';

export default function Nav() {
  const router = useRouter();
  const { y } = useWindowScroll();

  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      right="0"
      w="100vw"
      zIndex="2000"
      transition="all 0.3s ease-in-out"
      py="3"
      boxShadow={y > 20 ? '0 2px 15px rgba(0,0,0,0.075)' : 'unset'}
      bg={y > 20 ? useColorModeValue(rgba('#fff', 0.8), rgba('#000', 0.8)) : 'unset'}
      sx={{
        backdropFilter: y > 20 ? 'blur(20px)' : 'none'
      }}
    >
      <Container maxW="6xl" pos="relative">
        <Flex as="nav" zIndex="100" justify="space-between" align="center" fontSize="sm">
          <Flex as="ul" justify="space-between" align="center">
            <li>
              <NextLink href="/">
                <Link d="block">
                  <Flex align="center">
                    <Logo
                      w="1.75em"
                      fill={useColorModeValue('brand.500', 'brand.500')}
                      css={{ transition: 'all 1s ease' }}
                    />
                    <Box ml="2" fontWeight="600" d={['none', 'block']}>
                      By Wan Saleh
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </li>
          </Flex>

          <Box flex="1" />

          <HStack
            as="ul"
            justify="space-between"
            align="center"
            fontWeight="700"
            spacing={[0, 1, 2]}
            fontSize="xs"
            // textTransform="uppercase"
            sx={{
              a: {
                p: 0.5,
                px: 1.5,
                lineHeight: 1,
                d: 'block',
                borderRadius: 'md',
                border: '2px solid transparent'
              },
              'a:hover': { border: '2px solid' },
              'a:active': { color: 'brand.500' },
              'a.active': { border: '2px solid' }
            }}
          >
            <li>
              <NextLink href="/blog">
                <Link className={router.pathname.includes('/blog') && 'active'}>In The Studio</Link>
              </NextLink>
            </li>

            <li>
              <NextLink href="/tools">
                <Link className={router.pathname.includes('/tools') && 'active'}>Tools</Link>
              </NextLink>
            </li>

            <li>
              <ToggleMode />
            </li>
          </HStack>
        </Flex>
      </Container>
    </Box>
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
      <VisuallyHidden>Toggle Mode</VisuallyHidden>
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
