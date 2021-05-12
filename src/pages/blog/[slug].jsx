import { Box, Container, Heading, Link } from '@chakra-ui/react';
import ErrorPage from 'next/error';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import Markdown from '../../components/markdown';
import PostDateTags from '../../components/post-date-tag';
import PostsList from '../../components/posts-list';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/graphcms';

export default function JournalPost({ post, morePosts }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Box>Loading…</Box>
      ) : (
        <>
          <Head title={`By Wan Saleh • In The Studio • ${post.title}`} />

          <Container maxW="6xl" mt="20">
            <Heading
              as="h1"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="600"
              lineHeight="1"
              letterSpacing="tight"
              role="group"
            >
              <NextLink href="/blog" passHref>
                <Link pos="relative" d="inline-block" w="full">
                  <Box
                    as="svg"
                    height="0.75em"
                    width="0.75em"
                    mr="2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    transition="all 0.3s ease"
                    opacity="0"
                    _groupHover={{ opacity: 1 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" x2="8" y1="12" y2="12" />
                  </Box>

                  <Box
                    transform="skew(-6deg)"
                    pos="absolute"
                    top="-0.075em"
                    left="0"
                    transition="all 0.2s ease-out"
                    _groupHover={{ left: '0.85em' }}
                  >
                    In The Studio
                  </Box>
                </Link>
              </NextLink>
            </Heading>
          </Container>

          <Container maxW="6xl">
            <Heading
              fontSize={['5xl', '6xl', '8xl']}
              fontWeight="600"
              lineHeight="0.9"
              mb="4"
              letterSpacing="tight"
              // transform="skew(-6deg)"
              maxW="4xl"
            >
              {post.title}
            </Heading>

            <Heading
              as="h2"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="400"
              lineHeight="1.1"
              mb="4"
              maxW="4xl"
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
              width={1920}
              height={960}
            />
          )}

          <Container
            as="article"
            maxW="3xl"
            mt="10"
            className="prose lg:prose-lg xl:prose-xl dark:prose-dark article"
          >
            <Markdown>{post.content}</Markdown>
          </Container>

          <Box mt="20">
            <PostsList posts={morePosts} />
          </Box>
        </>
      )}
    </>
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
