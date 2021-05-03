/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  useTheme
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import MD from 'react-markdown';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
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
          pb="2"
          fontSize={['7xl', '8xl']}
          fontWeight="700"
          lineHeight="0.8"
          letterSpacing="tighter"
        >
          Blog
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
        <Box id="hero-post" mb="20">
          {heroPost.coverImage && (
            <CoverImage
              title={heroPost.title}
              slug={heroPost.slug}
              src={heroPost.coverImage.url}
              width={1240}
              height={680}
              mb="4"
            />
          )}

          <Box maxW="3xl">
            <Heading
              fontSize={['4xl', '6xl']}
              lineHeight="0.8"
              mb="8"
              letterSpacing="tighter"
            >
              <NextLink href={`/blog/${heroPost.slug}`} passHref>
                <Link>{heroPost.title}</Link>
              </NextLink>
            </Heading>

            <Box mb="2" className="prose lg:prose-xl" lineHeight="1.25">
              <MD>{heroPost.excerpt}</MD>
            </Box>

            <Box
              d="block"
              fontWeight="800"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="wider"
            >
              {format(parseISO(heroPost.date), 'd MMMM yyy')} &middot;{' '}
              {heroPost.tags.join(', ')}
            </Box>
          </Box>
        </Box>

        {otherPosts.map((post) => (
          <Flex key={post.slug} mb="8" sx={{ gap: 16 }}>
            {post.coverImage && (
              <Box w={[1 / 3]}>
                <CoverImage
                  title={post.title}
                  slug={post.slug}
                  src={post.coverImage.url}
                  width={1240}
                  height={680}
                />
              </Box>
            )}

            <Flex direction="column" justify="flex-end">
              <Heading
                fontSize={['3xl', '5xl']}
                lineHeight="0.8"
                mb="4"
                letterSpacing="tighter"
                maxW="xl"
              >
                <NextLink href={`/blog/${post.slug}`} passHref>
                  <Link>{post.title}</Link>
                </NextLink>
              </Heading>

              <Box
                mb="2"
                className="prose lg:prose-xl"
                lineHeight="1.25"
                maxW="xl"
              >
                <MD>{post.excerpt}</MD>
              </Box>

              <Box
                d="block"
                fontWeight="800"
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="wider"
              >
                {format(parseISO(post.date), 'd MMMM yyy')} &middot;{' '}
                {heroPost.tags.join(', ')}
              </Box>
            </Flex>
          </Flex>
        ))}
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
