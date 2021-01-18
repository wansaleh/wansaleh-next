import { Link, useColorMode, Flex } from '@chakra-ui/react';

const links = [
  { href: 'https://github.com/wansaleh', label: 'Gh' },
  { href: 'https://twitter.com/wansaleh', label: 'Tw' },
  { href: 'https://instagram.com/wansaleh', label: 'In' }
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
        <Link
          href={href}
          // color="gray.900"
          px="2"
          // _hover={{ color: 'white', textDecoration: 'underline' }}
        >
          {label}
        </Link>
      </li>
    ))}
  </Flex>
);

export default SocialLinks;
