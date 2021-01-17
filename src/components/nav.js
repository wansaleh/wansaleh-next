import React from 'react';
import {
  Link,
  Box,
  IconButton,
  useColorMode,
  Flex,
  LightMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import SocialLinks from './social-links';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      pos="absolute"
      justifyContent="space-between"
      align="center"
      w="full"
      top="0"
      left="0"
      right="0"
    >
      <Box flex="1" />

      <Flex as="ul" justifyContent="space-between" align="center" p="3">
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
