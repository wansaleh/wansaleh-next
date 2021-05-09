import {
  Box,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import MD from 'react-markdown';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import PostDateTags from '../../components/post-date-tag';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  const theme = useTheme();

  const heroPost = posts[0];
  const otherPosts = posts.slice(1);

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
        <LinkBox id="hero-post" mb="20" role="group">
          {heroPost.coverImage && (
            <CoverImage
              title={heroPost.title}
              slug={heroPost.slug}
              src={heroPost.coverImage.url}
              width={1240}
              height={600}
              mb="8"
              borderRadius="lg"
              overflow="hidden"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'gray.800')}
            />
          )}

          <Box maxW="3xl">
            <Heading
              fontSize={['4xl', '6xl']}
              fontWeight="600"
              lineHeight="0.8"
              mb="8"
              letterSpacing="tight"
            >
              <NextLink href={`/blog/${heroPost.slug}`} passHref>
                <LinkOverlay transition="all 0.3s ease">{heroPost.title}</LinkOverlay>
              </NextLink>
            </Heading>

            <Box mb="2" className="prose lg:prose-xl" lineHeight="1.5">
              <MD>{heroPost.excerpt}</MD>
            </Box>

            <PostDateTags post={heroPost} />
          </Box>
        </LinkBox>

        <SimpleGrid columns={[1, 1, 2, 3]} spacing="8">
          {otherPosts.map((post) => (
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
                  <MD>{post.excerpt}</MD>
                </Box>
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
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
