import { gql } from 'graphql-request';

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!, $stage: Stage!) {
        post(where: { slug: $slug }, stage: $stage) {
          slug
        }
      }
    `,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug
      }
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: date_DESC, first: 20) {
          title
          slug
          subtitle
          excerpt
          date
          updatedAt
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 1280, height: 640 } }
              }
            )
            caption
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { width: 100, height: 100, fit: crop } }
                }
              )
            }
          }
          tags {
            title
            slug
          }
        }
      }
    `,
    { preview }
  );
  return data.posts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!, $stage: Stage!) {
        post(stage: $stage, where: { slug: $slug }) {
          title
          slug
          subtitle
          content
          date
          updatedAt
          ogImage: coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 1280, height: 640 } }
              }
            )
            caption
          }
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 1280, height: 640 } }
              }
            )
            caption
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { fit: crop, width: 100, height: 100 } }
                }
              )
            }
          }
          tags {
            title
            slug
          }
        }
        morePosts: posts(
          orderBy: date_DESC
          first: 2
          where: { slug_not_in: [$slug] }
        ) {
          title
          slug
          subtitle
          excerpt
          date
          updatedAt
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 1280, height: 640 } }
              }
            )
            caption
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { fit: crop, width: 100, height: 100 } }
                }
              )
            }
          }
          tags {
            title
            slug
          }
        }
      }
    `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug
      }
    }
  );
  return data;
}

export async function getAllPostsForTag(tag, preview) {
  const data = await fetchAPI(
    gql`
      query PostsForTag($tag: String!) {
        posts(
          where: { tags_some: { slug: $tag } }
          orderBy: date_DESC
          first: 20
        ) {
          title
          slug
          subtitle
          excerpt
          date
          updatedAt
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 1280, height: 640 } }
              }
            )
            caption
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { width: 100, height: 100, fit: crop } }
                }
              )
            }
          }
          tags {
            title
            slug
          }
        }
        tag(where: { slug: $tag }) {
          title
          slug
          description
        }
      }
    `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        tag
      }
    }
  );
  return data;
}

export async function getAllTags() {
  const data = await fetchAPI(
    gql`
      {
        tags {
          title
          slug
        }
      }
    `
  );
  return data.tags;
}
