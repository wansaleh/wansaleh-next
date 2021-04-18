/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Text
  // useColorModeValue,
  // useTheme
} from '@chakra-ui/react';
// import { desaturate, mix } from 'polished';
import TextLoop from 'react-text-loop';

import Discography from '../components/discography';
import Head from '../components/head';
import Nav from '../components/nav';
import SocialLinks from '../components/social-links';
import Tools from '../components/tools';
import devTools from '../data/dev-tools';
import musicTools from '../data/music-tools';
import getSheetJSON from '../lib/sheet';

// const marqueeItems = [
//   '🇲🇾&nbsp;A proud Malaysian.',
//   '🎧&nbsp;A music producer.',
//   '👨‍💻&nbsp;A web developer.',
//   '☕️&nbsp;A coffee drinker.',
//   '🍔&nbsp;A food lover.'
// ];

// const marquee = marqueeItems.map((item, i) => (
//   <Text key={i} as="span" px="3vw" dangerouslySetInnerHTML={{ __html: item }} />
// ));

export default function Home({ works }) {
  // const theme = useTheme();
  // const { colorMode } = useColorMode();

  // const gradients = {
  //   light: `linear-gradient(to bottom, ${theme.colors.gray[100]}, #fff)`,
  //   dark: `linear-gradient(to bottom, ${mix(
  //     0.36,
  //     '#000',
  //     desaturate(0.1, theme.colors.brand[900])
  //   )}, #000)`
  // };

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
              <span>I record sounds.</span>
              <span>I code web.</span>
              <span>I drink soda.</span>
              <span>I eat food.</span>
            </TextLoop>
          </Heading>
        </Container>
      </Flex>

      {/* <Box
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
      </Box> */}

      <Box pos="relative">
        {/* <Box
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
        /> */}

        <Box pt={['5rem', '10rem']}>
          <Container maxW="5xl">
            <SectionTitle
              title="Selected Discography"
              subtitle="Works I produced, mixed or mastered"
            />
            <Discography works={works} />
          </Container>
        </Box>

        <Box pt={['5rem', '10rem']}>
          <Container maxW="5xl">
            <SectionTitle
              title="Music Tools"
              subtitle="Music things I use daily"
            />
            <Tools tools={musicTools} />
          </Container>
        </Box>

        <Box pt={['5rem', '10rem']}>
          <Container maxW="5xl">
            <SectionTitle
              title="Development Tools"
              subtitle="DevTools I use daily"
            />
            <Tools tools={devTools} />
          </Container>
        </Box>
      </Box>

      <Container maxW="5xl" my="10">
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
        letterSpacing="0.2em"
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
  const works = await getSheetJSON({
    id: '1fNtaqKnsDYEoi9NG8-phPzFH_1Fwbeh0j8SqivlOkjY'
  });

  return {
    props: {
      works: works.rows
    }
  };
}
