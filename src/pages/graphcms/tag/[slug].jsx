/* eslint-disable no-sparse-arrays */
import { Box, Heading, Link } from '@chakra-ui/react';
import ErrorPage from 'next/error';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Head from '../../../components/head';
import Markdown from '../../../components/markdown';
import PageHeader from '../../../components/page-header';
import PostsList from '../../../containers/graphcms/posts-list';
import { getAllPostsForTag, getAllTags } from '../../../lib/graphcms';

export default function Tag({ posts, tag }) {
  const router = useRouter();

  if (!router.isFallback && !tag?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Box>Loading…</Box>
      ) : (
        <>
          <Head title="By Wan Saleh • In The Studio" />

          <PageHeader
            title={
              <NextLink href="/blog" passHref>
                <Link>In The Studio</Link>
              </NextLink>
            }
            middle={
              <Heading
                as="h2"
                letterSpacing="tight"
                lineHeight="1"
                mb="4"
                mt="-1"
                fontSize={['3xl', '4xl']}
                fontWeight="400"
                color="brand.500"
                // bg={useColorModeValue('black', 'white')}
                // color={useColorModeValue('white', 'black')}
              >
                {tag.title}
              </Heading>
            }
            subtitle={
              <>
                {tag.description ? (
                  <Markdown>{tag.description}</Markdown>
                ) : (
                  'Pencarianku ke arah kecemerlangan bunyi.'
                )}
              </>
            }
          />

          <PostsList posts={posts} tag={tag} />
        </>
      )}
    </>
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