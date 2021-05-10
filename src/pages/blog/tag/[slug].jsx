/* eslint-disable no-sparse-arrays */
import { Box, Container, Heading, Link } from '@chakra-ui/react';
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
    <Box>
      {router.isFallback ? (
        <Box>Loading…</Box>
      ) : (
        <>
          <Head title="By Wan Saleh | Journal" />

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
              <NextLink href="/blog" passHref>
                <Link>In The Studio</Link>
              </NextLink>

              <Box as="span" fontSize="0.75em" letterSpacing="0" fontWeight="400" ml="4">
                {tag.title}
              </Box>
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
              {tag.description ? (
                <Markdown>{tag.description}</Markdown>
              ) : (
                'My pursuit of sonic excellence.'
              )}
            </Heading>
          </Container>

          <PostsList posts={posts} tag={tag} />
        </>
      )}
    </Box>
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
