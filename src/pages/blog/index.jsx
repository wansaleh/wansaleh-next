import { Box, Container, Heading, useTheme } from '@chakra-ui/react';
import React from 'react';

import Head from '../../components/head';
import PostsList from '../../components/posts-list';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  const theme = useTheme();

  return (
    <Box>
      <Head title="By Wan Saleh | Journal" />

      <Container maxW="7xl" my="20">
        <Heading
          as="h1"
          mb="6"
          // ml="-0.04em"
          fontSize={['7xl', '8xl']}
          fontWeight="700"
          lineHeight="0.8"
          letterSpacing="tighter"
        >
          Blog
        </Heading>
        <Heading
          as="h2"
          pb="2"
          fontSize={['2xl', '3xl']}
          fontWeight="400"
          lineHeight="1"
          letterSpacing="0"
          maxW="2xl"
        >
          My pursuit of sonic excellence.
        </Heading>
      </Container>

      <Container
        maxW="7xl"
        sx={{
          a: {
            _hover: { color: theme.colors.brand[500] }
            // _focus: { boxShadow: 'none' }
          }
        }}
      >
        <PostsList hero posts={posts} />
      </Container>
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
