/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import smartypants from '@silvenon/remark-smartypants';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import MD from 'react-markdown';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

export default function Journal({ post }) {
  return (
    <Box>
      <Head title={`By Wan Saleh | Journal | ${post.title}`} />

      <Flex
        w="full"
        mt="8"
        mb="2"
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
            fontSize="4xl"
            fontWeight="700"
            lineHeight="0.8"
            letterSpacing="tighter"
          >
            <NextLink href="/journal" passHref>
              <Link>Journal.</Link>
            </NextLink>
          </Heading>
        </Container>
      </Flex>

      <Container maxW="7xl">
        <Box key={post.slug}>
          <Heading
            fontSize="8xl"
            lineHeight="0.9"
            mb="2"
            letterSpacing="tighter"
          >
            {post.title}
          </Heading>

          <Box mb="8" fontWeight="800">
            <Box
              as="span"
              bg={useColorModeValue('black', 'white')}
              color={useColorModeValue('white', 'black')}
              py="1.5"
              px="2"
              lineHeight="1"
              d="inline-block"
            >
              By Wan Saleh. {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>
          </Box>

          <Box pos="relative">
            <CoverImage
              title={post.title}
              src={post.coverImage}
              width={1240}
              height={680}
            />
          </Box>

          <Box
            as="article"
            className="prose lg:prose-xl dark:prose-dark"
            color="inherit"
            maxW="2xl"
            mx="auto"
            mt="20"
          >
            <MD remarkPlugins={[smartypants]}>{post.content}</MD>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);

  return {
    props: {
      post
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
}
