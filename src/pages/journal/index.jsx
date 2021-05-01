/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading
  // Text,
  // useColorModeValue
  // useTheme
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import MD from 'react-markdown';

// import { gql } from 'graphql-request';
// import parse from 'html-react-parser';
// import Image from 'next/image';
import Footer from '../../components/footer';
import Head from '../../components/head';
import Nav from '../../components/nav';
// import { graphqlFetch } from '../../lib/api-helpers';
import { getAllPosts } from '../../lib/posts';

export default function Home({ posts }) {
  // const allPosts = posts.map((post) => ({
  //   ...post.node,
  //   contentParsed: parse(post.node.content)
  // }));

  return (
    <Box>
      <Head title="By Wan Saleh | Journal" />

      <Nav />

      <Flex
        w="full"
        pt={['4rem', , '5rem']}
        pb={['2rem', , '5rem']}
        flexDir="column"
        justify="center"
        align="center"
        pos="relative"
        overflow="hidden"
        // borderBottom="1px solid #fff"
        // borderColor={useColorModeValue('gray.200', 'gray.800')}
        zIndex="0"
      >
        <Container maxW="7xl">
          <Heading
            as="h1"
            pb="2"
            fontSize={['3rem', '4rem', '5rem', '6rem']}
            fontWeight="800"
            lineHeight="0.9"
            // letterSpacing="-0.1em"
          >
            Ramblings.
          </Heading>
        </Container>
      </Flex>

      <Container maxW="7xl">
        {posts.map((post) => (
          <Box key={post.slug}>
            <Heading mb="0" fontSize="5xl">
              {post.title}
            </Heading>

            <Box mb="8">
              By Wan Saleh. {format(parseISO(post.date), 'EEEE, d MMMM yyy')}
            </Box>

            <Box as="article" className="prose lg:prose-lg">
              <MD>{post.content}</MD>
            </Box>
          </Box>
        ))}
      </Container>

      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  // const posts = await graphqlFetch(gql`
  //   query {
  //     posts(where: { status: PUBLISH }) {
  //       edges {
  //         node {
  //           id
  //           databaseId
  //           slug
  //           title
  //           date
  //           dateGmt
  //           modified
  //           modifiedGmt
  //           content
  //           status
  //           featuredImage {
  //             node {
  //               altText
  //               fileSize(size: LARGE)
  //               modifiedGmt
  //               modified
  //               sizes
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const posts = await getAllPosts([
    'slug',
    'title',
    'date',
    'excerpt',
    'author',
    'content'
  ]);

  return {
    props: {
      posts
      // posts: posts?.posts?.edges
    },
    revalidate: 1
  };
}
