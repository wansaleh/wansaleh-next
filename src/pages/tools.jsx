import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Head from '../components/head';
import SectionTitle from '../components/section-title';
import Tools from '../components/tools';
import devTools from '../data/tools/dev';
import musicTools from '../data/tools/music';

export default function Home() {
  return (
    <Box>
      <Head title="By Wan Saleh | Alatan | Tools" />

      <Container maxW="6xl" mt="24" mb="10">
        <Heading
          as="h1"
          fontSize={['6xl', '7xl']}
          fontWeight="600"
          lineHeight="1"
          letterSpacing="tighter"
          transform="skew(-6deg)"
        >
          My Tools
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
          Keperluan yang membantu kerja saya.
        </Heading>
      </Container>

      <Container maxW="6xl">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="20">
          <Box>
            <SectionTitle title="Alatan Muzik" subtitle="Peranti/software muzik kegunaan harian." />

            <Tools tools={musicTools} />
          </Box>

          <Box>
            <SectionTitle
              title="Alatan Developer"
              subtitle="DevTools yang saya guna bila membina perisian."
            />

            <Tools tools={devTools} />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
