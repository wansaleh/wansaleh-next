import { gql } from 'graphql-request';

const POST_GRAPHQL_FIELDS = `
  sys {
    id
    publishedAt
    firstPublishedAt
  }
  contentfulMetadata {
    tags {
      id
      name
    }
  }
  date
  slug
  title
  subtitle
  excerpt
  content
  coverImage {
    url(transform: { width: 1280, height: 640 })
    title
    description
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({
        query,
        variables
      })
    }
  );
  const json = await res.json();

  if (json.errors) {
    // console.error(json.errors[0]);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

function processPost({ sys, contentfulMetadata, ...post }) {
  return {
    ...sys,
    ...post,
    sysTags: contentfulMetadata.tags
  };
}
function processPosts(posts) {
  return posts.items.map(processPost);
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!, $stage: Stage!) {
        postCollection(where: { slug: $slug }, preview: true, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    {
      preview: true,
      variables: {
        slug
      }
    }
  );
  return processPosts(data.postCollection);
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(gql`
    {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `);
  return processPosts(data.postCollection);
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    gql`
      {
        postCollection(order: date_DESC, limit: 20) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    { preview }
  );
  return processPosts(data.postCollection);
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    gql`
      query PostQuery($slug: String!, $preview: Boolean!) {
        post: postCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
        morePosts: postCollection(where: { slug_not_in: [$slug] }, preview: $preview, limit: 3) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    {
      preview,
      variables: {
        preview,
        slug
      }
    }
  );

  return {
    post: processPost(data.post.items[0]),
    morePosts: processPosts(data.morePosts)
  };
}

export async function getAllPostsForTag(tag, preview) {
  const data = await fetchAPI(
    gql`
      query PostsForTag($tag: String!) {
        postCollection(where: { contentfulMetadata: { tags: { id_contains_some: [$tag] } } }, order: date_DESC, limit: 20) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
        tagCollection(where: { slug: $tag }, limit: 1) {
          items {
            slug
            name
            description
          }
        }
      }
    `,
    {
      preview,
      variables: {
        preview,
        tag
      }
    }
  );

  return {
    posts: processPosts(data.postCollection),
    tag: data.tagCollection.items[0]
  };
}

export async function getAllTags() {
  const data = await fetchAPI(
    gql`
      {
        tagCollection(limit: 100) {
          items {
            slug
            name
            description
          }
        }
      }
    `
  );

  return data.tagCollection.items;
}
