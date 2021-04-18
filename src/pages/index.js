/* eslint-disable no-sparse-arrays */
import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Image,
  // useTheme,
  // Button,
  useColorModeValue,
  useTheme
  // useColorMode
} from '@chakra-ui/react';
import MD from 'react-markdown';
import { rgba, desaturate, mix } from 'polished';
import Head from '../components/head';
import Nav from '../components/nav';

import musicTools from '../data/music-tools';
import devTools from '../data/dev-tools';
import SocialLinks from '../components/social-links';

const marqueeItems = [
  '🇲🇾&nbsp;A proud Malaysian.',
  '🎧&nbsp;A music producer.',
  '👨‍💻&nbsp;A web developer.',
  '☕️&nbsp;A coffee drinker.',
  '🍔&nbsp;A food lover.'
];

const marquee = marqueeItems.map((item, i) => (
  <Text key={i} as="span" px="3vw" dangerouslySetInnerHTML={{ __html: item }} />
));

const Home = () => {
  const theme = useTheme();
  // const { colorMode } = useColorMode();

  const gradients = {
    light: `linear-gradient(to bottom, ${theme.colors.gray[200]}, #fff)`,
    dark: `linear-gradient(to bottom, ${mix(
      0.5,
      '#000',
      desaturate(0.1, theme.colors.brand[900])
    )}, #000)`
  };

  return (
    <Box>
      <Head title="Wan Saleh | WNSLH" />

      <Nav />

      <Flex
        w="full"
        py={['5rem', , '15rem']}
        flexDir="column"
        justify="center"
        align="center"
      >
        <Container maxW="5xl">
          <Heading
            as="h1"
            pb="4"
            fontSize={['5rem', '7rem', '8rem']}
            fontWeight="800"
            lineHeight="1"
            letterSpacing="-0.1em"
          >
            Hello there.
            <br />
            I’m{' '}
            <Text as="span" color="brand.500">
              Wan Saleh.
            </Text>
          </Heading>
        </Container>
      </Flex>

      <Box
        py="8"
        pos="relative"
        overflow="hidden"
        // fontFamily="mono"
        fontSize={['xl', '2xl', '3xl']}
        letterSpacing="tight"
        color="brand.500"
        // color={useColorModeValue('gray.600', 'gray.600')}
        css={{
          '--offset': '0vw',
          '--move-initial': 'calc(-25% + var(--offset))',
          '--move-final': 'calc(-50% + var(--offset))'
        }}
      >
        <Flex
          aria-hidden="true"
          w="fit-content"
          pos="relative"
          whiteSpace="nowrap"
          css={{
            transform: 'translate3d(var(--move-initial), 0, 0)',
            animation: 'marquee 40s linear infinite',
            animationPlayState: 'running'
          }}
        >
          {marquee}
          {marquee}
          {marquee}
          {marquee}
        </Flex>
      </Box>

      <Box pos="relative">
        <Box
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background={gradients.light}
          zIndex="-1"
          transition="all 0.25s ease"
          opacity={useColorModeValue(1, 0)}
        />
        <Box
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background={gradients.dark}
          zIndex="-1"
          transition="all 0.25s ease"
          opacity={useColorModeValue(0, 1)}
        />

        <Box py={['5rem', '10rem']}>
          <Container maxW="5xl">
            <Heading
              as="h2"
              fontSize="5xl"
              fontWeight="700"
              lineHeight="1"
              letterSpacing="tighter"
            >
              Music Tools{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                css={{ height: '1em', display: 'inline-block' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </Heading>

            <Heading
              as="h3"
              fontFamily="body"
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Music things I use daily
            </Heading>

            <Tools tools={musicTools} />
          </Container>
        </Box>

        <Box py={['5rem', '10rem']}>
          <Container maxW="5xl">
            <Heading
              as="h2"
              fontSize="5xl"
              fontWeight="700"
              lineHeight="1"
              letterSpacing="tighter"
            >
              Development Tools{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                css={{ height: '1em', display: 'inline-block' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Heading>
            <Heading
              as="h3"
              fontFamily="body"
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Devtools I use daily
            </Heading>

            <Tools tools={devTools} />
          </Container>
        </Box>
      </Box>

      <Container maxW="5xl" mb="10">
        <Flex
          as="ul"
          justifyContent="space-between"
          align="center"
          // fontFamily="mono"
          fontWeight="600"
          fontSize="sm"
        >
          <li>
            <Text as="span" bg="black" color="#fff" py="1" px="2">
              Copyright © {new Date().getFullYear()} WNSLH
            </Text>
          </li>
          <li>
            <SocialLinks />
          </li>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;

const Tools = ({ tools }) => (
  <Flex as="ul" mt="4" flexWrap="wrap" justify="center" mx="-1rem">
    {tools.map((tool, i) => (
      <Box as="li" key={i} p="4" w="full">
        <Heading
          as="h4"
          mt="8"
          mb="3"
          fontSize="3xl"
          fontWeight="500"
          letterSpacing="tighter"
          pos="relative"
          color={useColorModeValue('gray.600', 'brand.400')}
        >
          {tool.name}
        </Heading>

        <Box maxW="2xl" fontSize="md" lineHeight="1.5">
          <MD>{tool.desc}</MD>
        </Box>

        <Flex
          wrap="wrap"
          justify="flex-start"
          align="center"
          mt="8"
          userSelect="none"
          bg={useColorModeValue('white', 'white')}
          borderRadius="md"
          p="4"
          display="inline-flex"
          boxShadow="var(--shadow-large)"
        >
          {tool.logos.map((logo, j) => {
            const image = (
              <Flex p="6" flexDir="column" align="center">
                <Box
                  dangerouslySetInnerHTML={{ __html: logo.image }}
                  // maxW="140px"
                  // h="10"
                  title={logo.title}
                  css={{ svg: { height: '3rem', maxWidth: '7rem' } }}
                />

                <Text
                  as="span"
                  mt="3"
                  fontFamily="mono"
                  fontSize="2xs"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  color="black"
                >
                  {logo.title}
                </Text>
              </Flex>
            );

            return logo.link ? (
              <a
                key={j}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image}
              </a>
            ) : (
              image
            );
          })}
        </Flex>
      </Box>
    ))}
  </Flex>
);
