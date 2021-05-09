/* eslint-disable no-sparse-arrays */
import { Box, Container, Heading, Link, useColorModeValue } from '@chakra-ui/react';
import smartypants from '@silvenon/remark-smartypants';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import React from 'react';
import MD from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

export default function Journal({ post }) {
  return (
    <Box>
      <Head title={`By Wan Saleh | Journal | ${post.title}`} />

      <Container maxW="7xl" mt="20" mb="8">
        <Heading as="h1" fontSize="4xl" fontWeight="700" lineHeight="0.8" letterSpacing="tighter">
          <NextLink href="/journal" passHref>
            <Link d="flex" alignItems="center">
              <Box
                as="svg"
                height="1em"
                width="1em"
                mr="1"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 8 8 12 12 16" />
                <line x1="16" x2="8" y1="12" y2="12" />
              </Box>
              <Box>Journal</Box>
            </Link>
          </NextLink>
        </Heading>
      </Container>

      <Container maxW="7xl">
        <Box key={post.slug}>
          <Heading fontSize={['6xl', '7xl', '8xl']} lineHeight="0.8" mb="4" letterSpacing="tighter">
            {post.title}
          </Heading>

          <Box mb="4" fontWeight="800">
            <Box
              as="span"
              bg={useColorModeValue('black', 'white')}
              color={useColorModeValue('white', 'black')}
              py="1.5"
              px="2"
              lineHeight="1"
              d="inline-block"
            >
              {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>
          </Box>

          <Box pos="relative" mx={[-4, -4, -4, -4, 0]}>
            <CoverImage
              src={post.coverImage.url}
              title={post.title}
              caption={post.coverImage.caption}
              width={1240}
              height={680}
            />
          </Box>

          <Box
            as="article"
            className="prose lg:prose-xl dark:prose-dark article"
            maxW="2xl"
            mx="auto"
            mt="10"
          >
            <MD remarkPlugins={[smartypants]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </MD>
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
    'coverImage',
    'coverImageCaption'
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
