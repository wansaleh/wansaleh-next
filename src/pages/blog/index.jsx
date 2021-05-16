import { Box } from '@chakra-ui/react';
import React from 'react';

import Head from '../../components/head';
import PageHeader from '../../components/page-header';
import PostsList from '../../containers/contentful/posts-list';
import PreviewAlert from '../../containers/contentful/preview-alert';
import { getAllPostsForHome } from '../../lib/contentful';

export default function BlogPage({ posts, preview }) {
  return (
    <>
      <Head title="By Wan Saleh • In The Studio" />

      <PreviewAlert preview={preview} />

      <PageHeader title="In The Studio" subtitle="Pencarianku ke arah kecemerlangan bunyi." />

      <Box pb="10">
        <PostsList hero posts={posts} />
      </Box>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, posts },
    revalidate: 1
  };
}
