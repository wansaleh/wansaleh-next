import { Container, Flex, HStack, Text } from '@chakra-ui/react';

import SocialLinks from './social-links';

export default function Footer() {
  return (
    <Container maxW="7xl" my="10" mt="40">
      <Flex
        as="ul"
        justifyContent="space-between"
        align="center"
        // fontFamily="mono"
        fontWeight="600"
        fontSize="sm"
      >
        <li>
          <Text as="span" bg="black" color="#fff" py="1" px="2">
            Copyright © {new Date().getFullYear()} By Wan Saleh
          </Text>
        </li>
        <li>
          <HStack
            as="ul"
            justify="space-between"
            align="center"
            py="4"
            fontWeight="600"
            spacing="2"
          >
            <SocialLinks />
          </HStack>
        </li>
      </Flex>
    </Container>
  );
}
