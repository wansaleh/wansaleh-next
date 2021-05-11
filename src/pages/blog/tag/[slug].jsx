/* eslint-disable no-sparse-arrays */
import { Box, Container, Heading, Link, useColorModeValue } from '@chakra-ui/react';
import ErrorPage from 'next/error';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Head from '../../../components/head';
import Markdown from '../../../components/markdown';
import PostsList from '../../../components/posts-list';
import { getAllPostsForTag, getAllTags } from '../../../lib/graphcms';

export default function Tag({ posts, tag }) {
  const router = useRouter();

  if (!router.isFallback && !tag?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Box>Loading…</Box>
      ) : (
        <>
          <Head title="By Wan Saleh | In The Studio" />

          <Container maxW="6xl" mt="24" mb="10">
            <Heading
              as="h1"
              fontSize={['6xl', '7xl']}
              fontWeight="600"
              lineHeight="1"
              letterSpacing="tighter"
              transform="skew(-6deg)"
            >
              <NextLink href="/blog" passHref>
                <Link>In The Studio</Link>
              </NextLink>
            </Heading>

            <Heading
              as="h2"
              fontSize={['3xl', '4xl']}
              fontWeight="300"
              lineHeight="1"
              // mt="-2"
              mb="4"
            >
              <Box
                as="span"
                d="inline-block"
                bg={useColorModeValue('black', 'white')}
                color={useColorModeValue('white', 'black')}
                px="2"
              >
                {tag.title}
              </Box>
            </Heading>

            <Heading
              as="h3"
              pb="2"
              fontSize={['2xl', '3xl']}
              fontWeight="400"
              lineHeight="1.2"
              letterSpacing="0"
              maxW="2xl"
            >
              {tag.description ? (
                <Markdown>{tag.description}</Markdown>
              ) : (
                'Pencarianku ke arah kecemerlangan bunyi.'
              )}
            </Heading>
          </Container>

          <PostsList posts={posts} tag={tag} />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { posts, tag } = (await getAllPostsForTag(params.slug, preview)) ?? [];

  return {
    props: { preview, posts, tag },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const posts = await getAllTags();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: true
  };
}
