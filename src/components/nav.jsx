import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
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
    <Flex
      as="nav"
      pos="absolute"
      zIndex="100"
      justify="space-between"
      align="center"
      fontSize={['sm', 'sm', 'sm', 'md']}
      w="full"
      top="0"
      left="0"
      right="0"
      sx={{
        a: { textDecoration: 'none !important' }
      }}
    >
      <Flex as="ul" justify="space-between" align="center" p="4">
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

      <Flex as="ul" justify="space-between" align="center" p="4">
        <li>
          <SocialLinks />
        </li>

        <li>
          <LightMode>
            <IconButton
              ml={[1, 1, 1, 2]}
              colorScheme="brand"
              aria-label={colorMode !== 'dark' ? 'Dark' : 'Light'}
              icon={colorMode !== 'dark' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              w="1.75em"
              h="1.75em"
              minW="unset"
              p="0"
            />
          </LightMode>
        </li>
      </Flex>
    </Flex>
  );
};

export default Nav;