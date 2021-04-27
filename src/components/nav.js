import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  LightMode,
  Link,
  useColorMode,
  useColorModeValue,
  VisuallyHidden
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
      w="full"
      top="0"
      left="0"
      right="0"
    >
      <Flex as="ul" justify="space-between" align="center" p="3">
        <li>
          <NextLink href="/">
            <Link px="2" d="block">
              <Logo
                w="30px"
                fill={useColorModeValue('#000', 'brand.500')}
                css={{ transition: 'all 1s ease' }}
              />
              <VisuallyHidden>Wan Saleh</VisuallyHidden>
            </Link>
          </NextLink>
        </li>
      </Flex>

      <Box flex="1" />

      <Flex as="ul" justify="space-between" align="center" p="3">
        <li>
          <SocialLinks />
        </li>

        <li>
          <LightMode>
            <IconButton
              ml="3"
              colorScheme="brand"
              aria-label={colorMode !== 'dark' ? 'Dark' : 'Light'}
              icon={colorMode !== 'dark' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </LightMode>
        </li>
      </Flex>
    </Flex>
  );
};

export default Nav;
