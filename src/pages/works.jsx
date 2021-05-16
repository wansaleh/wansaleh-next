import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Discography from '../components/discography';
import Head from '../components/head';
import fetchDiscographyAirtable from '../lib/airtable';

export default function DiscographyPage({ initialData }) {
  const [marginTop, setMarginTop] = useState(0);
  useEffect(() => {
    setMarginTop(document.getElementById('navbar').clientHeight);
  }, []);

  return (
    <>
      <Head title="By Wan Saleh | Discography" />

      <Box pos="relative" mt={`${marginTop}px`} zIndex="2" id="discography" bg="brand.900">
        <Discography initialData={initialData} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const initialData = await fetchDiscographyAirtable();

  return {
    props: {
      initialData: {
        ...initialData,
        offset: initialData.offset || null
      }
    },
    revalidate: 1
  };
}
