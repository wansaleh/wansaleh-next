import { Box, Flex, Link, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';

const links = [
  { href: '/contact', label: 'Contact' },
  {
    href: 'https://twitter.com/wansaleh',
    label: 'Tw',
    icon: <Twitter mx="1" />
  },
  { href: 'https://github.com/wansaleh', label: 'Gh', icon: <Github mx="1" /> }
  // { href: 'https://instagram.com/wansaleh', label: 'In' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function Twitter(props) {
  return (
    <Box
      as="svg"
      className="feather feather-twitter"
      height="1.25em"
      width="1.25em"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </Box>
  );
}

function Github(props) {
  return (
    <Box
      as="svg"
      className="feather feather-github"
      height="1.25em"
      width="1.25em"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Box>
  );
}

export default function SocialLinks() {
  return (
    <Flex
      as="ul"
      justifyContent="space-between"
      align="center"
      // fontFamily="mono"
      fontWeight="600"
    >
      {links.map(({ key, href, label, icon }) => (
        <li key={key}>
          {href.startsWith('https://') ? (
            <Link
              href={href}
              // color="gray.900"
              px="2"
              d="block"
              // _hover={{ color: 'white', textDecoration: 'underline' }}
            >
              {icon || label}
              {icon && <VisuallyHidden>{label}</VisuallyHidden>}
            </Link>
          ) : (
            <NextLink href={href}>
              <Link
                // color="gray.900"
                px="2"
                d="block"
                // _hover={{ color: 'white', textDecoration: 'underline' }}
              >
                {icon || label}
                {icon && <VisuallyHidden>{label}</VisuallyHidden>}
              </Link>
            </NextLink>
          )}
        </li>
      ))}
    </Flex>
  );
}
