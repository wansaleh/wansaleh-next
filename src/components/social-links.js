import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const links = [
  { href: '/contact', label: 'Contact' },
  { href: 'https://twitter.com/wansaleh', label: 'Twitter' },
  { href: 'https://github.com/wansaleh', label: 'Github' }
  // { href: 'https://instagram.com/wansaleh', label: 'In' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const SocialLinks = () => (
  <Flex
    as="ul"
    justifyContent="space-between"
    align="center"
    // fontFamily="mono"
    fontWeight="600"
  >
    {links.map(({ key, href, label }) => (
      <li key={key}>
        {href.startsWith('https://') ? (
          <Link
            href={href}
            // color="gray.900"
            px="2"
            // _hover={{ color: 'white', textDecoration: 'underline' }}
          >
            {label}
          </Link>
        ) : (
          <NextLink href={href}>
            <Link
              // color="gray.900"
              px="2"
              // _hover={{ color: 'white', textDecoration: 'underline' }}
            >
              {label}
            </Link>
          </NextLink>
        )}
      </li>
    ))}
  </Flex>
);

export default SocialLinks;
