/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import CoverImage from './cover-image';
import Markdown from './markdown';
import PostDateTags from './post-date-tag';

export default function PostsList({ posts, hero, gridProps }) {
  const heroPost = hero ? posts[0] : null;
  const otherPosts = hero ? posts.slice(1) : posts;

  return (
    <>
      <Container maxW="6xl" sx={{ 'a:hover': { color: 'brand.500' } }}>
        {hero && (
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

            <Box maxW="4xl">
              <Heading
                fontSize={['4xl', '6xl']}
                fontWeight="500"
                lineHeight="1"
                letterSpacing="tight"
              >
                <NextLink href={`/blog/${heroPost.slug}`} passHref>
                  <LinkOverlay transition="all 0.3s ease">{heroPost.title}</LinkOverlay>
                </NextLink>
              </Heading>

              <Box mt="-2" mb="4" className="prose lg:prose-xl" lineHeight="1.5">
                <Markdown>{heroPost.excerpt}</Markdown>
              </Box>

              <PostDateTags post={heroPost} />
            </Box>
          </LinkBox>
        )}

        <SimpleGrid columns={[1, 1, 2, otherPosts.length > 2 ? 3 : 2]} spacing="10" {...gridProps}>
          {otherPosts.map((post) => (
            <LinkBox
              key={post.slug}
              columns={[1, 1, 2]}
              role="group"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue('gray.200', 'brandGray.900')}
              // border="1px solid"
              // borderColor={useColorModeValue('gray.200', 'trueGray.800')}
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
                    width={640}
                    height={300}
                  />
                </Box>
              )}

              <Flex
                direction="column"
                justify="flex-end"
                p="6"
                borderTop="3px solid"
                borderColor="transparent"
                transition="all 0.2s ease"
                _groupHover={{
                  borderColor: 'brand.500'
                }}
              >
                <PostDateTags post={post} mb="3" />

                <Heading
                  fontSize={['2xl', '4xl']}
                  fontWeight="500"
                  lineHeight="1"
                  letterSpacing="tight"
                  maxW="xl"
                >
                  <NextLink href={`/blog/${post.slug}`} passHref>
                    <LinkOverlay transition="all 0.3s ease">{post.title}</LinkOverlay>
                  </NextLink>
                </Heading>

                <Box mt="4" lineHeight="1.5" maxW="xl" fontSize="sm" fontWeight="400">
                  <Markdown>{post.excerpt}</Markdown>
                </Box>
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
