import React from 'react';
import { Link, Box } from '@chakra-ui/core';

const links = [
  { href: 'https://github.com/wansaleh', label: 'Github' },
  { href: 'https://twitter.com/wansaleh', label: 'Twitter' },
  { href: 'https://instagram.com/wansaleh', label: 'Instagram' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <Box as="nav" pos="absolute" top="0" right="0">
    <Box as="ul" display="flex" justifyContent="space-between" p="3">
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link
            href={href}
            color="white"
            px="2"
            _hover={{ color: 'white', textDecoration: 'underline' }}
          >
            {label}
          </Link>
        </li>
      ))}
    </Box>
  </Box>
);

export default Nav;
