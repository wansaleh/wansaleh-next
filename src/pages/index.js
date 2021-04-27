/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
  // useColorModeValue,
  // useTheme
} from '@chakra-ui/react';
// import { desaturate, mix } from 'polished';
import TextLoop from 'react-text-loop';

import Discography from '../components/discography';
import Footer from '../components/footer';
import Head from '../components/head';
import Nav from '../components/nav';
// import SmallBadge from '../components/small-badge';
import Tools from '../components/tools';
import devTools from '../data/dev-tools';
import musicTools from '../data/music-tools';
import { fetchDiscograpySheet } from '../lib/sheet';

export default function Home({ works }) {
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
        pos="relative"
        overflow="hidden"
        // borderBottom="1px solid #fff"
        // borderColor={useColorModeValue('gray.200', 'gray.800')}
        zIndex="0"
      >
        <Box
          pos="absolute"
          inset="0"
          // bg={`url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' style='opacity:0.5'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='70' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)'/><path d='M-4.8 4.44L4 16.59 16.14 7.8M32 30.54l-13.23 7.07 7.06 13.23M-9 38.04l-3.81 14.5 14.5 3.81M65.22 4.44L74 16.59 86.15 7.8M61 38.04l-3.81 14.5 14.5 3.81'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(210,14%,83.1%,1)' fill='none'/><path d='M59.71 62.88v3h3M4.84 25.54L2.87 27.8l2.26 1.97m7.65 16.4l-2.21-2.03-2.03 2.21m29.26 7.13l.56 2.95 2.95-.55'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(210,13.8%,88.6%,1)' fill='none'/><path d='M58.98 27.57l-2.35-10.74-10.75 2.36M31.98-4.87l2.74 10.65 10.65-2.73M31.98 65.13l2.74 10.66 10.65-2.74'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(199, 98%, 48%, 1)' fill='none'/><path d='M8.42 62.57l6.4 2.82 2.82-6.41m33.13-15.24l-4.86-5.03-5.03 4.86m-14-19.64l4.84-5.06-5.06-4.84'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(210,10.8%,71%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`}
          // bgGradient={useColorModeValue(
          //   'linear(-20deg, white 30%, brand.500)',
          //   'linear(-20deg, black 30%, brand.500)'
          // )}
          zIndex="-2"
          opacity="0.45"
        />
        <Box
          bg={useColorModeValue(
            `url(${require('../assets/images/hand.png')}) no-repeat center/cover`,
            `url(${require('../assets/images/hand2.png')}) no-repeat center/cover`
          )}
          pos="absolute"
          w={['500px', '700px', '800px', '1000px']}
          h={['500px', '700px', '800px', '1000px']}
          left={['10%', '10%', '20%', '50%']}
          bottom="-50%"
          // inset="0"
          // bottom="-100%"
          // right="-50%"
          zIndex="-1"
          transform="scaleX(-1) rotate(-10deg)"
        />

        <Container maxW="7xl">
          <Heading
            as="h1"
            pb="2"
            fontSize={['3rem', '6rem', '8rem']}
            fontWeight="800"
            lineHeight="0.9"
            // letterSpacing="-0.1em"
          >
            Hello there.
            <br />
            I’m{' '}
            <Text as="span" color="brand.500">
              Wan Saleh.
            </Text>
          </Heading>

          <Heading
            as="h2"
            pb="4"
            fontSize={['2rem', '3rem', '5rem']}
            fontWeight="400"
            lineHeight="1"
            // letterSpacing="-0.1em"
          >
            <TextLoop>
              <span>I make music.</span>
              <span>I mix songs.</span>
              <span>I code web.</span>
              <span>I drink soda.</span>
              <span>I love mics.</span>
              <span>I adore preamps.</span>
            </TextLoop>
          </Heading>
        </Container>
      </Flex>

      <Box pos="relative">
        <Discography works={works} />

        <Container maxW="8xl">
          <SimpleGrid
            pt={['5rem', '10rem']}
            columns={[1, 1, 1, 2]}
            spacing="20"
          >
            <Box>
              <SectionTitle
                title="Music Tools"
                subtitle="Music things I use daily."
              />

              <Tools tools={musicTools} />
            </Box>

            <Box>
              <SectionTitle
                title="Development Tools"
                subtitle="DevTools I use when I build things."
              />

              <Tools tools={devTools} hideIcons />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <>
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight="700"
        lineHeight="0.9"
        letterSpacing="tight"
      >
        <Box
          as="span"
          // bg={useColorModeValue('black', 'white')}
          // color={useColorModeValue('white', 'black')}
          // px="6"
          // ml="-6"
        >
          {title}
        </Box>
      </Heading>

      <Heading
        as="h3"
        mt="3"
        fontFamily="body"
        fontSize="sm"
        fontWeight="600"
        letterSpacing="0.1em"
        textTransform="uppercase"
        // opacity="0.6"
        color="brand.500"
      >
        {subtitle}
      </Heading>
    </>
  );
}

export async function getStaticProps() {
  const works = await fetchDiscograpySheet();

  return {
    props: {
      works
    },
    revalidate: 1
  };
}
