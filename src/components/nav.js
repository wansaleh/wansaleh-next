import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  LightMode,
  Link,
  useColorMode
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import SocialLinks from './social-links';

const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      pos="absolute"
      zIndex="100"
      justifyContent="space-between"
      align="center"
      w="full"
      top="0"
      left="0"
      right="0"
    >
      <Flex as="ul" justify="space-between" align="center" p="3">
        <li>
          {router.pathname !== '/' && (
            <NextLink href="/">
              <Link fontWeight="600" px="2">
                Home
              </Link>
            </NextLink>
          )}
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
              aria-label="Search database"
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
