import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useColorMode,
  VisuallyHidden
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// import { rgba } from 'polished';
import React from 'react';
import { useWindowScroll } from 'react-use';

import Logo from '../images/logo';
import Slash from './slash';

export default function Nav() {
  // const [isReady] = useTimeout(50);
  const router = useRouter();
  const { y } = useWindowScroll();

  const isColoredHeader = false; // router.pathname.includes('/works');

  return (
    <Box
      id="navbar"
      pos="absolute"
      // top="0"
      // left="0"
      // right="0"
      zIndex="2000"
      w="100vw"
      transition="all 0.1s ease"
      py="3"
      overflow="hidden"
      // boxShadow={
      //   isReady() && y > 20
      //     ? useColorModeValue(`0 1px 0 0 rgba(0,0,0,0.08)`, `0 1px 0 0 rgba(255,255,255,0.08)`)
      //     : 'unset'
      // }
      // bg={isReady() && y > 20 ? useColorModeValue(rgba('#fff', 0.8), rgba('#000', 0.8)) : 'unset'}
      // sx={{
      //   backdropFilter: isReady() && y > 20 ? 'blur(20px)' : 'none'
      // }}
    >
      <Container
        maxW="6xl"
        pos="relative"
        fontSize="sm"
        color={isColoredHeader ? 'white' : 'inherit'}
      >
        <Flex as="nav" zIndex="100" justify="space-between" align="center">
          <Flex as="ul" justify="space-between" align="center">
            <li>
              <NextLink href="/" passHref>
                <Link d="block">
                  <Flex align="center">
                    <Logo
                      w="1.75em"
                      fill={!isColoredHeader ? 'brand.500' : 'brand.200'}
                      transition="all 0.25s ease"
                      transform={y > 20 ? 'scale(1.2)' : 'none'}
                      // opacity={y > 20 ? 0.5 : 1}
                    />
                    <Box
                      ml="2"
                      fontWeight="600"
                      d={['none', 'block']}
                      transition="all 0.15s ease-out"
                      transform={y > 20 ? 'translateX(-10px)' : 'none'}
                      opacity={y > 20 ? 0 : 1}
                    >
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
            spacing="0.5"
            sx={{
              a: {
                p: 0.5,
                // px: 1.5,
                lineHeight: 1,
                d: 'block',
                borderRadius: '5px'
                // border: '2px solid transparent'
              },
              'a:hover, a:active, a.active': { color: isColoredHeader ? 'brand.200' : 'brand.500' }
            }}
          >
            <li>
              <NextLink href="/works" passHref>
                <Link className={router.pathname.includes('/works') && 'active'}>Works</Link>
              </NextLink>
            </li>

            <li>
              <Slash />
            </li>

            <li>
              <NextLink href="/blog" passHref>
                <Link className={router.pathname.includes('/blog') && 'active'}>Blog</Link>
              </NextLink>
            </li>

            <li>
              <Slash />
            </li>

            <li>
              <NextLink href="/tools" passHref>
                <Link className={router.pathname.includes('/tools') && 'active'}>Tools</Link>
              </NextLink>
            </li>

            <li>
              <Slash />
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
      borderRadius="5px"
      onClick={toggleColorMode}
    >
      <VisuallyHidden>Toggle Mode</VisuallyHidden>
      <Box
        as="svg"
        height="1.1em"
        width="1.1em"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
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
