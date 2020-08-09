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
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/core';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import MD from 'react-markdown';
import Head from '../components/head';
import Nav from '../components/nav';

import musicTools from '../data/music-tools';
import devTools from '../data/dev-tools';

const marqueeItems = [
  '🇲🇾&nbsp;A proud Malaysian.',
  '🎧&nbsp;A music producer.',
  '👨‍💻&nbsp;A web developer.'
];

const marquee = marqueeItems.map((item, i) => (
  <Text
    key={i}
    as="span"
    fontSize="2vw"
    letterSpacing="tight"
    px="3vw"
    dangerouslySetInnerHTML={{ __html: item }}
  />
));

const Home = () => {
  // const theme = useTheme();

  return (
    <Box>
      <Head title="Wan Saleh" />
      <Nav />

      <Flex
        w="full"
        py={['5rem', , '15rem']}
        flexDir="column"
        justify="center"
        align="center"
      >
        <Container maxW="xl">
          <Heading
            as="h1"
            pb="4"
            fontSize="8vw"
            fontWeight="700"
            lineHeight="0.9"
            letterSpacing="-0.075em"
          >
            Hello there.
            <br />
            I’m{' '}
            <Text as="span" color="brand.500">
              Wan Saleh.
            </Text>
          </Heading>

          {/* <Text fontSize="3xl" letterSpacing="tight">
          <span role="img" aria-label="Malaysia">
            🇲🇾
          </span>
          &nbsp;A proud Malaysian.
          <br />
          <span role="img" aria-label="Headphone">
            🎧
          </span>
          &nbsp;A music producer.
          <br />
          <span role="img" aria-label="Man Technologist">
            👨‍💻
          </span>
          &nbsp;A web mobile developer.
          <br />
          <span role="img" aria-label="Football">
            ‍⚽
          </span>
          &nbsp;Football fanatic.
          <br />
          <span role="img" aria-label="Popcorn">
            ‍🍿
          </span>
          &nbsp;A movie buff.
        </Text> */}
        </Container>
      </Flex>

      <Box
        py="8"
        pos="relative"
        overflow="hidden"
        fontFamily="mono"
        color={useColorModeValue('gray.600', 'gray.700')}
        css={{
          '--offset': '0vw',
          '--move-initial': 'calc(-25% + var(--offset))',
          '--move-final': 'calc(-50% + var(--offset))'
        }}
      >
        <Flex
          ariaHidden="true"
          w="fit-content"
          pos="relative"
          whiteSpace="nowrap"
          css={{
            transform: 'translate3d(var(--move-initial), 0, 0)',
            animation: 'marquee 30s linear infinite',
            animationPlayState: 'running'
          }}
        >
          {marquee}
          {marquee}
          {marquee}
          {marquee}
        </Flex>
      </Box>

      <Box
        borderTopWidth="1px"
        borderColor={useColorModeValue('gray.300', 'gray.900')}
      >
        <Box py={['5rem', '10rem']}>
          <Container maxW="xl">
            <Heading
              as="h2"
              fontSize="5xl"
              fontWeight="700"
              lineHeight="1"
              letterSpacing="tighter"
            >
              Music Tools
            </Heading>

            <Heading
              as="h3"
              fontFamily="mono"
              fontSize="xs"
              fontWeight="400"
              letterSpacing="0.3em"
              textTransform="uppercase"
            >
              Music things I use daily
            </Heading>

            <Tools tools={musicTools} />
          </Container>
        </Box>

        <Box py={['5rem', '10rem']}>
          <Container maxW="xl">
            <Heading
              as="h2"
              fontSize="5xl"
              fontWeight="700"
              lineHeight="1"
              letterSpacing="tighter"
            >
              Development Tools
            </Heading>
            <Heading
              as="h3"
              fontFamily="mono"
              fontSize="xs"
              fontWeight="400"
              letterSpacing="0.3em"
              textTransform="uppercase"
            >
              Devtools I use daily
            </Heading>

            <Tools tools={devTools} />
          </Container>
        </Box>
      </Box>
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
          fontSize="4xl"
          fontWeight="300"
          letterSpacing="tight"
          pos="relative"
        >
          <Box
            pos="absolute"
            h="2px"
            w="40px"
            bg="brand.500"
            transform="translateX(-100%)"
            top="45%"
            left="-10px"
          />

          {tool.name}
        </Heading>

        <Box
          maxW="2xl"
          fontSize="xl"
          lineHeight="1.35"
          // letterSpacing="-0.025em"
          fontFamily="mono"
        >
          <MD source={tool.desc} />
        </Box>

        <Flex
          flexWrap="wrap"
          justify="flex-start"
          align="center"
          mt="8"
          userSelect="none"
          bg="white"
          borderRadius="md"
          p="4"
          // maxW="2xl"
          display="inline-flex"
          boxShadow="var(--shadow-large)"
        >
          {tool.logos.map((logo, j) => {
            const image = (
              <Flex as="span" p="6" flexDir="column" align="center">
                <Image
                  key={j}
                  src={logo.image}
                  alt={logo.alt}
                  h="8"
                  maxW="140px"
                  // css={{
                  //   filter: 'grayscale(100%)'
                  // }}
                />

                <Text
                  as="span"
                  mt="3"
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color="black"
                >
                  {logo.alt}
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
