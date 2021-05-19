import { Box } from '@chakra-ui/react';

import Head from '../components/head';
import Discography from '../containers/works/discography';
import { fetchWorks } from '../lib/airtable';

export default function DiscographyPage({ initialWorks }) {
  return (
    <>
      <Head title="By Wan Saleh | Discography" />

      <Box pos="relative" zIndex="2" id="discography" bg="brand.900">
        <Discography initialWorks={initialWorks} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const initialWorks = await fetchWorks();

  return {
    props: { initialWorks }
  };
}
