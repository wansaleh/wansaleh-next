import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

import Head from '../../components/head';
import PostsList from '../../components/posts-list';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  return (
    <Box>
      <Head title="By Wan Saleh | In The Studio" />

      <Container maxW="7xl" my="20">
        <Heading
          as="h1"
          mb="2"
          // ml="-0.04em"
          fontSize={['6xl', '7xl']}
          fontWeight="600"
          lineHeight="0.8"
          letterSpacing="tighter"
        >
          In The Studio
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
          My pursuit of sonic excellence.
        </Heading>
      </Container>

      <PostsList hero posts={posts} />
    </Box>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, posts },
    revalidate: 1
  };
}
