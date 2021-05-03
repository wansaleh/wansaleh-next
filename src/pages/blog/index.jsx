/* eslint-disable no-sparse-arrays */
import { Box, Container, Heading, Link, useTheme } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import MD from 'react-markdown';

import CoverImage from '../../components/cover-image';
import Head from '../../components/head';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  const theme = useTheme();

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
        {posts.map((post, i) => (
          <Box key={post.slug} mb="20" maxW="3xl">
            {i === 0 && post.coverImage && (
              <CoverImage
                title={post.title}
                slug={post.slug}
                src={post.coverImage.url}
                width={1240}
                height={680}
                mb="4"
              />
            )}

            <Heading
              fontSize={i === 0 ? ['4xl', '6xl'] : ['3xl', '5xl']}
              lineHeight="0.8"
              mb={i === 0 ? 8 : 4}
              letterSpacing="tighter"
            >
              <NextLink href={`/blog/${post.slug}`} passHref>
                <Link>{post.title}</Link>
              </NextLink>
            </Heading>

            <Box
              mb="4"
              className="!leading-normal prose lg:prose-xl font-serif"
            >
              <MD>{post.excerpt}</MD>
            </Box>

            <Box as="time" d="block" mb="8" fontWeight="800">
              {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>
          </Box>
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
