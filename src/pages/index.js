/* eslint-disable no-sparse-arrays */
import { Box, Flex, Container, Heading, Text, Image } from '@chakra-ui/core';
import MD from 'react-markdown';
import Head from '../components/head';
import Nav from '../components/nav';

import musicTools from '../data/music-tools';
import devTools from '../data/dev-tools';

const Home = () => (
  <Box textAlign="center">
    <Head title="Wan Saleh" />

    <Nav />

    <Flex
      w="full"
      pt="10rem"
      flexDir="column"
      justify="center"
      align="center"
      bg="black"
      color="gray.500"
      mb="10"
    >
      <Container maxW="lg">
        <Heading
          as="h1"
          pb="4"
          lineHeight="1.2"
          color="white"
          fontSize="5xl"
          fontWeight="200"
        >
          <span role="img" aria-label="Waving Hand">
            👋
          </span>
          &nbsp;Hello there. I’m Wan Saleh.
        </Heading>

        <Text fontSize="2xl" mb="10">
          <span role="img" aria-label="Malaysia">
            🇲🇾
          </span>
          &nbsp;A proud Malaysian.{' '}
          <span role="img" aria-label="Headphone">
            🎧
          </span>
          &nbsp;A music producer.{' '}
          <span role="img" aria-label="Man Technologist">
            👨‍💻
          </span>
          &nbsp;A web (FTW!) & mobile developer.{' '}
          <span role="img" aria-label="Football">
            ‍⚽
          </span>
          &nbsp;Football fanatic &{' '}
          <span role="img" aria-label="Popcorn">
            ‍🍿
          </span>
          &nbsp;a movie buff.
        </Text>
      </Container>

      <Box w="full">
        <svg
          className="separator__svg"
          width="100%"
          height="200"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="#ffffff"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          css={{ transform: 'scaleX(-1)' }}
        >
          <path d="M 100 100 V 10 L 0 100" />
          <path d="M 30 73 L 100 18 V 10 Z" fill="#FFC107" strokeWidth="0" />
        </svg>
      </Box>
    </Flex>

    <Box mb="16">
      <Container maxW="lg">
        <Heading as="h2" fontSize="5xl" fontWeight="200" lineHeight="1">
          Music Tools
        </Heading>

        <Heading as="h3" fontSize="lg" fontWeight="600">
          Music things I use daily
        </Heading>

        <Tools tools={musicTools} />
      </Container>
    </Box>

    <Box mb="16">
      <Container maxW="lg">
        <Heading as="h2" fontSize="5xl" fontWeight="200" lineHeight="1">
          Development Tools
        </Heading>
        <Heading as="h3" fontSize="lg" fontWeight="600">
          Devtools I use daily
        </Heading>

        <Tools tools={devTools} />
      </Container>
    </Box>
  </Box>
);

export default Home;

const Tools = ({ tools }) => (
  <Flex as="ul" mt="4" flexWrap="wrap" justify="center" mx="-1rem">
    {tools.map((tool, i) => (
      <Box as="li" key={i} p="4" flex="1 0 400px">
        <Heading as="h5" mt="8" fontSize="xl">
          {tool.name}
        </Heading>

        <Box maxW="2xl" mx="auto">
          <MD source={tool.desc} />
        </Box>

        <Flex flexWrap="wrap" justify="center" align="center" mt="4">
          {tool.logos.map((logo, j) => (
            <Image
              key={j}
              src={logo.image}
              alt={logo.alt}
              h="8"
              maxW="100px"
              mx="3"
              mb="3"
              // css={{
              //   filter: 'grayscale(100%)'
              // }}
            />
          ))}
        </Flex>
      </Box>
    ))}
  </Flex>
);
