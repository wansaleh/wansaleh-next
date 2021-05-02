/* eslint-disable no-sparse-arrays */
import { Box, Container, Heading, Link } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';

import Head from '../../components/head';
import { getAllPosts } from '../../lib/posts';

export default function Journal({ posts }) {
  return (
    <Box>
      <Head title="By Wan Saleh | Journal" />

      <Container maxW="7xl" my="20">
        <Heading
          as="h1"
          pb="2"
          fontSize={['7xl', '8xl']}
          fontWeight="700"
          lineHeight="0.8"
          letterSpacing="tighter"
        >
          Journal.
        </Heading>
      </Container>

      <Container maxW="7xl">
        {posts.map((post) => (
          <Box key={post.slug}>
            <Heading
              fontSize={['4xl', '6xl']}
              lineHeight="0.9"
              mb="2"
              letterSpacing="tighter"
            >
              <NextLink href={`/journal/${post.slug}`} passHref>
                <Link>{post.title}</Link>
              </NextLink>
            </Heading>

            <Box as="time" d="block" mb="8" fontWeight="800">
              {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts([
    'slug',
    'title',
    'date',
    'excerpt',
    'author'
  ]);

  return {
    props: {
      posts
      // posts: posts?.posts?.edges
    },
    revalidate: 1
  };
}
