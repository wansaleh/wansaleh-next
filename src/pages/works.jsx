import { Box } from '@chakra-ui/react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import Discography from '../components/discography';
import Head from '../components/head';
import fetchDiscographyAirtable, { fetchWorks } from '../lib/airtable';
// import fetchDiscographyAirtable from '../lib/airtable';

export default function DiscographyPage() {
  return (
    <>
      <Head title="By Wan Saleh | Discography" />

      <Box pos="relative" zIndex="2" id="discography" bg="brand.900">
        <Discography />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('works', fetchDiscographyAirtable);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

// export async function getStaticProps() {
//   const initialData = await fetchDiscographyAirtable();

//   return {
//     props: {
//       initialData: {
//         ...initialData,
//         offset: initialData.offset || null
//       }
//     },
//     revalidate: 1
//   };
// }
