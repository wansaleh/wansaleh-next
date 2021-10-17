import { Box, Container } from '@chakra-ui/react';
import React from 'react';

import Head from '../components/head';
import PageHeader from '../components/page-header';
import Tools from '../components/tools';
import musicTools from '../data/tools/music';

export default function Home() {
  return (
    <Box>
      <Head title="By Wan Saleh • Alatan • Tools" />

      <PageHeader title="Alatan • Tools" subtitle="Keperluan harian yang membantu kerja saya." />

      <Container maxW="6xl" pb="10">
        <Tools tools={musicTools} />

        {/* <SimpleGrid columns={[1, 1, 1, 2]} spacing="20">
          <Box>
            <SectionTitle title="Peralatan Muzik" subtitle="Alatan muzik kegunaan harian." />

            <Tools tools={musicTools} />
          </Box>

          <Box>
            <SectionTitle
              title="Peralatan Developer"
              subtitle="DevTools saya semasa membina perisian."
            />

            <Tools tools={devTools} />
          </Box>
        </SimpleGrid> */}
      </Container>
    </Box>
  );
}
