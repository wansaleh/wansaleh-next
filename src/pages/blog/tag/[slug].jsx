/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import ErrorPage from 'next/error';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import CoverImage from '../../../components/cover-image';
import Head from '../../../components/head';
import Markdown from '../../../components/markdown';
import PostDateTags from '../../../components/post-date-tag';
import { getAllPostsForTag, getAllTags } from '../../../lib/graphcms';

export default function Tag({ posts, tag }) {
  const theme = useTheme();

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
              mb="6"
              // ml="-0.04em"
              fontSize={['7xl', '8xl']}
              fontWeight="700"
              lineHeight="0.8"
              letterSpacing="tighter"
            >
              <NextLink href="/blog" passHref>
                <Link>Blog</Link>
              </NextLink>{' '}
              <Box as="span" fontSize="0.75em" letterSpacing="0" fontWeight="400">
                {tag.title}
              </Box>
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
              {tag.description ? (
                <Markdown>{tag.description}</Markdown>
              ) : (
                'My pursuit of sonic excellence.'
              )}
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
            <SimpleGrid columns={[1, 1, 2, 3]} spacing="8">
              {posts.map((post) => (
                <LinkBox
                  key={post.slug}
                  columns={[1, 1, 2]}
                  role="group"
                  borderRadius="lg"
                  overflow="hidden"
                  bg={useColorModeValue('gray.100', 'gray.900')}
                  // border="1px solid"
                  // borderColor={useColorModeValue('gray.200', 'gray.800')}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'xl'
                  }}
                >
                  {post.coverImage && (
                    <Box>
                      <CoverImage
                        title={post.title}
                        slug={post.slug}
                        src={post.coverImage.url}
                        width={1240}
                        height={600}
                      />
                    </Box>
                  )}

                  <Flex direction="column" justify="flex-end" p="6">
                    <PostDateTags post={post} mb="3" />

                    <Heading
                      fontSize={['2xl', '4xl']}
                      fontWeight="400"
                      lineHeight="0.8"
                      mb="6"
                      letterSpacing="tight"
                      maxW="xl"
                    >
                      <NextLink href={`/blog/${post.slug}`} passHref>
                        <LinkOverlay transition="all 0.3s ease">{post.title}</LinkOverlay>
                      </NextLink>
                    </Heading>

                    <Box mb="4" className="prose" lineHeight="1.5" maxW="xl">
                      <ReactMarkdown>{post.excerpt}</ReactMarkdown>
                    </Box>
                  </Flex>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Container>
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
