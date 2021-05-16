import { Box, Container, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import SocialLinks from './social-links';

export default function Footer() {
  return (
    <Box
      py="4"
      boxShadow="inset 0 20px 10px rgba(0,0,0,0.05)"
      borderTop="1px solid"
      borderColor={useColorModeValue('brandGray.300', 'brandGray.900')}
    >
      <Container maxW="6xl">
        <Flex
          as="ul"
          justifyContent="space-between"
          align="center"
          direction={['column', 'row']}
          // fontFamily="mono"
          fontWeight="600"
          fontSize="xs"
        >
          <li>
            <Text
              as="span"
              // bg={useColorModeValue('black', 'white')}
              // color={useColorModeValue('white', 'black')}
              // py="1"
              // px="2"
            >
              © {new Date().getFullYear()} By Wan Saleh
            </Text>
          </li>

          <li>
            <HStack
              as="ul"
              justify="space-between"
              align="center"
              py="2"
              fontWeight="600"
              spacing="0"
            >
              <SocialLinks showContact />
            </HStack>
          </li>
        </Flex>
      </Container>
    </Box>
  );
}
