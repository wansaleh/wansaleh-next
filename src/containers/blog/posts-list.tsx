/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Markdown from '../../components/markdown';
import { PostType } from '../../types/post';
import CoverImage from './cover-image';
import PostDateTags from './post-date-tags';

type PostsListProps = {
  posts: PostType[];
  hero?: boolean;
  excerpt?: boolean;
  gridProps?: any;
};

export default function PostsList({
  posts,
  hero = false,
  excerpt = true,
  gridProps = null,
}: PostsListProps) {
  const theme = useTheme();

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
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.800')}
              />
            )}

            <Box maxW="4xl">
              <Heading
                fontSize={['4xl', '5xl']}
                fontWeight="600"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                <NextLink href={`/blog/${heroPost.slug}`} passHref>
                  <LinkOverlay transition="all 0.3s ease">
                    {heroPost.title}
                  </LinkOverlay>
                </NextLink>
              </Heading>

              <Box
                mt="-2"
                mb="4"
                className="prose lg:prose-xl"
                lineHeight="1.5"
              >
                <Markdown>{heroPost.excerpt}</Markdown>
              </Box>

              <PostDateTags post={heroPost} />
            </Box>
          </LinkBox>
        )}

        <SimpleGrid
          columns={[1, 1, 2, otherPosts.length > 2 ? 3 : 2]}
          spacing="8"
          {...gridProps}
        >
          {otherPosts.map((post) => (
            <LinkBox
              key={post.slug}
              columns={[1, 1, 2]}
              role="group"
              borderRadius="xl"
              overflow="hidden"
              d="flex"
              flexDir="column"
              // bg={useColorModeValue(
              //   mix(0.4, '#fff', theme.colors.brandGray[200]),
              //   mix(0.4, '#000', theme.colors.brandGray[900])
              // )}
              // border="1px solid"
              // borderColor={useColorModeValue('gray.200', 'trueGray.800')}
              boxShadow={useColorModeValue(
                `0 0 0 1px ${theme.colors.brandGray[300]}`,
                `0 0 0 1px ${theme.colors.brandGray[900]}`,
              )}
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: useColorModeValue(
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
                ),
              }}
            >
              {post.coverImage && (
                <Box>
                  <CoverImage
                    title={post.title}
                    slug={post.slug}
                    src={post.coverImage.url}
                    width={640}
                    height={220}
                  />
                </Box>
              )}

              <Flex
                direction="column"
                justify="flex-end"
                flex="1"
                p="4"
                // pb="6"
                // borderTop="3px solid"
                // borderColor="transparent"
                // transition="all 0.2s ease"
                // _groupHover={{
                //   borderColor: 'brand.500'
                // }}
              >
                <Heading
                  fontSize={['xl', '2xl']}
                  fontWeight="600"
                  lineHeight="1.1"
                  letterSpacing="tight"
                  maxW="xl"
                >
                  <NextLink href={`/blog/${post.slug}`} passHref>
                    <LinkOverlay transition="all 0.3s ease">
                      {post.title}
                    </LinkOverlay>
                  </NextLink>
                </Heading>

                {excerpt && (
                  <Box
                    mt="4"
                    lineHeight="1.5"
                    maxW="xl"
                    fontSize="sm"
                    fontWeight="400"
                  >
                    <Markdown>{post.excerpt}</Markdown>
                  </Box>
                )}

                <Box flex="1" />

                <Divider
                  my="4"
                  borderColor={useColorModeValue(
                    'trueGray.300',
                    'trueGray.700',
                  )}
                  opacity="0.5"
                />

                <PostDateTags post={post} fontSize="0.7rem" />
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
