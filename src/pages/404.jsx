import { Box, Button, Container, Heading, LightMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import Head from '../components/head';

export default function FourOhFour() {
  const router = useRouter();
  return (
    <>
      <Head title="By Wan Saleh | 404" />

      <Container
        maxW="6xl"
        mt="24"
        mb="10"
        minH="70vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading
          as="h1"
          fontSize={['6xl', '7xl']}
          fontWeight="600"
          lineHeight="1"
          letterSpacing="tighter"
          transform="skew(-6deg)"
        >
          404
        </Heading>
        <Heading
          as="h2"
          pb="2"
          fontSize={['2xl', '3xl']}
          fontWeight="400"
          lineHeight="1.2"
          letterSpacing="0"
          maxW="2xl"
        >
          Oops. Sesat? Lost?
        </Heading>

        <Box mt="8">
          <LightMode>
            <Button colorScheme="brand" size="lg" onClick={() => router.push('/')}>
              Go back home
            </Button>
          </LightMode>
        </Box>
      </Container>
    </>
  );
}
