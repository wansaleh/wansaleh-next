/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
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
          mb="6"
          ml="-0.04em"
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
          lineHeight="0.8"
          letterSpacing="tighter"
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
        <Box id="hero-post" mb="20" role="group">
          {heroPost.coverImage && (
            <CoverImage
              title={heroPost.title}
              slug={heroPost.slug}
              src={heroPost.coverImage.url}
              width={1240}
              height={680}
              mb="8"
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

            <Box mb="2" className="prose lg:prose-xl" lineHeight="1.5">
              <MD>{heroPost.excerpt}</MD>
            </Box>

            <Box
              d="block"
              fontWeight="800"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="widest"
            >
              {format(parseISO(heroPost.date), 'd MMMM yyy')} &middot;{' '}
              {heroPost.tags.join(', ')}
            </Box>
          </Box>
        </Box>

        {otherPosts.map((post) => (
          <SimpleGrid
            key={post.slug}
            mb="8"
            columns={[1, , 2]}
            spacing="8"
            role="group"
          >
            {post.coverImage && (
              <Box>
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
                mb="6"
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
                lineHeight="1.5"
                maxW="xl"
              >
                <MD>{post.excerpt}</MD>
              </Box>

              <Box
                d="block"
                fontWeight="800"
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="widest"
              >
                {format(parseISO(post.date), 'd MMMM yyy')} &middot;{' '}
                {post.tags.join(', ')}
              </Box>
            </Flex>
          </SimpleGrid>
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
