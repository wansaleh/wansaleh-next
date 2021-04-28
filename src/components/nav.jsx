import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  LightMode,
  Link,
  useColorMode,
  useColorModeValue
  // VisuallyHidden
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Logo from '../assets/images/logo';
import SocialLinks from './social-links';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
                    fill={useColorModeValue('brand.600', 'brand.500')}
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

        <Flex as="ul" justify="space-between" align="center" py="4">
          <li>
            <SocialLinks />
          </li>

          <li>
            <Button
              minW="unset"
              p="1"
              ml="1"
              bg="none"
              variant="unstyled"
              h="auto"
              onClick={toggleColorMode}
            >
              {colorMode !== 'dark' ? (
                <svg
                  className="feather feather-moon"
                  height="1.25em"
                  width="1.25em"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  className="feather feather-sun"
                  height="1.25em"
                  width="1.25em"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                </svg>
              )}
            </Button>

            {/* <LightMode>
              <IconButton
                ml={[1, 1, 1, 2]}
                colorScheme="gray"
                aria-label={colorMode !== 'dark' ? 'Dark' : 'Light'}
                icon={colorMode !== 'dark' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                w="1.75em"
                h="1.75em"
                minW="unset"
                p="0"
              />
            </LightMode> */}
          </li>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Nav;
