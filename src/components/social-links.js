import { Link, useColorMode, Flex } from '@chakra-ui/react';

const links = [
  { href: 'https://github.com/wansaleh', label: 'Github' },
  { href: 'https://twitter.com/wansaleh', label: 'Twitter' },
  { href: 'https://instagram.com/wansaleh', label: 'Instagram' }
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
