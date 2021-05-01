/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';

import Head from '../../components/head';
import { getAllPosts } from '../../lib/posts';

export default function Journal({ posts }) {
  return (
    <Box>
      <Head title="By Wan Saleh | Journal" />

      <Flex
        w="full"
        pt={['4rem', , '5rem']}
        pb={['2rem', , '5rem']}
        flexDir="column"
        justify="center"
        align="center"
        pos="relative"
        overflow="hidden"
        // borderBottom="1px solid #fff"
        // borderColor={useColorModeValue('gray.200', 'gray.800')}
        zIndex="0"
      >
        <Container maxW="7xl">
          <Heading
            as="h1"
            pb="2"
            fontSize={['5xl', '6xl', '7xl', '8xl']}
            fontWeight="700"
            lineHeight="0.8"
            letterSpacing="tighter"
          >
            Journal.
          </Heading>
        </Container>
      </Flex>

      <Container maxW="7xl">
        {posts.map((post) => (
          <LinkBox key={post.slug}>
            <Heading
              fontSize="6xl"
              lineHeight="0.9"
              mb="2"
              letterSpacing="tighter"
            >
              <NextLink href={`/journal/${post.slug}`} passHref>
                <LinkOverlay>{post.title}</LinkOverlay>
              </NextLink>
            </Heading>

            <Box mb="8" fontWeight="800">
              By Wan Saleh. {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>
          </LinkBox>
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
