import React from 'react';

import Head from '../../components/head';
import PageHeader from '../../components/page-header';
import PostsList from '../../containers/contentful/posts-list';
import PreviewAlert from '../../containers/contentful/preview-alert';
import { getAllPostsForHome } from '../../lib/contentful';

export default function Journal({ posts, preview }) {
  return (
    <>
      <Head title="By Wan Saleh • In The Studio" />

      <PreviewAlert preview={preview} />

      <PageHeader title="In The Studio" subtitle="Pencarianku ke arah kecemerlangan bunyi." />

      <PostsList hero posts={posts} />
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
