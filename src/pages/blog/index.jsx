import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

import Head from '../../components/head';
import PostsList from '../../components/posts-list';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  return (
    <>
      <Head title="By Wan Saleh | In The Studio" />

      <Container maxW="7xl" mt="20" mb="10">
        <Heading
          as="h1"
          fontSize={['6xl', '7xl']}
          fontWeight="600"
          lineHeight="1"
          letterSpacing="tighter"
          transform="skew(-6deg)"
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
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, posts },
    revalidate: 1
  };
}
