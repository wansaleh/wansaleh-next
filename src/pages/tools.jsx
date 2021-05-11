import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Head from '../components/head';
import PageHeader from '../components/page-header';
import SectionTitle from '../components/section-title';
import Tools from '../components/tools';
import devTools from '../data/tools/dev';
import musicTools from '../data/tools/music';

export default function Home() {
  return (
    <Box>
      <Head title="By Wan Saleh • Alatan • Tools" />

      <PageHeader title="My Tools" subtitle="Keperluan yang membantu kerja saya." />

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
