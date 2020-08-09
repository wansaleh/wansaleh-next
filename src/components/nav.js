import React from 'react';
import {
  Link,
  Box,
  IconButton,
  useColorMode,
  Flex,
  LightMode
} from '@chakra-ui/core';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const links = [
  { href: 'https://github.com/wansaleh', label: 'Github' },
  { href: 'https://twitter.com/wansaleh', label: 'Twitter' },
  { href: 'https://instagram.com/wansaleh', label: 'Instagram' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" pos="absolute" top="0" right="0">
      <Flex as="ul" justifyContent="space-between" align="center" p="3">
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link
              fontFamily="mono"
              fontWeight="600"
              href={href}
              // color="gray.900"
              px="2"
              // _hover={{ color: 'white', textDecoration: 'underline' }}
            >
              {label}
            </Link>
          </li>
        ))}

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
    </Box>
  );
};

export default Nav;
