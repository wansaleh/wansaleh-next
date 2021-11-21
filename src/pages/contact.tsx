import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import Head from '../components/head';
import Sapiens from '../images/sapiens';

export default function ContactPage() {
  return (
    <>
      <Head title="By Wan Saleh • Contact" />

      <Container maxW="6xl">
        <SimpleGrid
          columns={[1, 1, 2]}
          gap="16"
          py="20"
          pos="relative"
          alignItems="center"
        >
          <Box zIndex="0">
            <Heading
              fontSize="6xl"
              lineHeight="0.9"
              letterSpacing="tight"
              mb="2"
            >
              Contact me.
            </Heading>

            <Heading
              fontSize="3xl"
              fontWeight="500"
              lineHeight="0.9"
              letterSpacing="tight"
              mb="8"
              color="gray.500"
            >
              Let&apos;s get in touch.
            </Heading>

            <Box mt="16" pos="relative" fontSize="xl">
              Drop a line to my email.
              <br />
              It&apos;s <b>wansaleh [at] gmail [dot] com</b>.
              <br />
              Or DM me on{' '}
              <Link href="https://twitter.com/wansaleh" isExternal>
                Twitter
              </Link>
              .
            </Box>
          </Box>

          <Box zIndex="-1">
            <Box w="150%" ml="-25%">
              <Sapiens
                w="100%"
                h="100%"
                maxW="unset"
                transform="scaleX(-1)"
                alt="Contact"
                filter={useColorModeValue('invert(0)', 'invert(1)')}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
