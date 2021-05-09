import { Box, Container, Heading, Link } from '@chakra-ui/react';
import ErrorPage from 'next/error';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import Markdown from '../../components/markdown';
import PostDateTags from '../../components/post-date-tag';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/graphcms';

export default function JournalPost({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box>
      {router.isFallback ? (
        <Box>Loading…</Box>
      ) : (
        <>
          <Head title={`By Wan Saleh | Blog | ${post.title}`} />

          <Container maxW="7xl" mt="20" mb="8">
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="700"
              lineHeight="0.8"
              letterSpacing="tighter"
            >
              <NextLink href="/blog" passHref>
                <Link d="flex" alignItems="center">
                  <Box
                    as="svg"
                    height="1em"
                    width="1em"
                    mr="1"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" x2="8" y1="12" y2="12" />
                  </Box>
                  <Box>Blog</Box>
                </Link>
              </NextLink>
            </Heading>
          </Container>

          <Container maxW="7xl" mt="40" textAlign="center">
            <Heading
              fontSize={['6xl', '7xl', '8xl']}
              fontWeight="600"
              lineHeight="0.85"
              mb="4"
              letterSpacing="tight"
            >
              {post.title}
            </Heading>

            <Heading
              as="h2"
              fontFamily="body"
              fontSize={['xl', '2xl', '3xl']}
              fontWeight="300"
              lineHeight="0.9"
              mb="4"
              letterSpacing="tight"
            >
              {post.subtitle}
            </Heading>

            <PostDateTags post={post} showFull mb="10" />
          </Container>

          {post.coverImage && (
            <CoverImage
              src={post.coverImage.url}
              title={post.title}
              caption={post.coverImage.caption}
              width={1240}
              height={540}
            />
          )}

          <Container maxW="7xl">
            <Box
              as="article"
              className="prose lg:prose-lg xl:prose-xl dark:prose-dark article"
              maxW="3xl"
              mx="auto"
              mt="10"
            >
              <Markdown>{post.content}</Markdown>
            </Box>
          </Container>
        </>
      )}
    </Box>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || []
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: true
  };
}
