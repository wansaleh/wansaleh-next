import React from 'react';

import Head from '../../components/head';
import PageHeader from '../../components/page-header';
import PostsList from '../../containers/blog/posts-list';
import { getAllPostsForHome } from '../../lib/graphcms';

export default function Journal({ posts }) {
  return (
    <>
      <Head title="By Wan Saleh • In The Studio" />

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
