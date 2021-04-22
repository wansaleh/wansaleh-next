/* eslint-disable no-sparse-arrays */
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue
  // useColorModeValue,
  // useTheme
} from '@chakra-ui/react';
// import { desaturate, mix } from 'polished';
import TextLoop from 'react-text-loop';

import Discography from '../components/discography';
import Head from '../components/head';
import Nav from '../components/nav';
import SmallBadge from '../components/SmallBadge';
import SocialLinks from '../components/social-links';
import Tools from '../components/tools';
import devTools from '../data/dev-tools';
import musicTools from '../data/music-tools';
import getSheetJSON from '../lib/sheet';

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
        borderBottom="1px solid #fff"
        borderColor={useColorModeValue('gray.200', 'gray.800')}
        bgGradient={useColorModeValue(
          'linear(to-t, gray.200, rgba(255,255,255,0))',
          'linear(to-t, gray.900, rgba(0,0,0,0))'
        )}
        zIndex="0"
      >
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

        <Container maxW="6xl">
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
        <Box pt={['5rem', '10rem']}>
          <Container maxW="6xl">
            <SectionTitle
              title="Selected Discography."
              subtitle={
                <>
                  Works I produced <SmallBadge>PRO</SmallBadge>,
                  composed/written <SmallBadge>COM</SmallBadge>, arranged{' '}
                  <SmallBadge>ARR</SmallBadge>, mixed{' '}
                  <SmallBadge>MIX</SmallBadge> or mastered{' '}
                  <SmallBadge>MAS</SmallBadge>.
                </>
              }
            />
            <Discography works={works} />
          </Container>
        </Box>

        <Box pt={['5rem', '10rem']}>
          <Container maxW="6xl">
            <SectionTitle
              title="Music Tools."
              subtitle="Music things I use daily."
            />
            <Tools tools={musicTools} />
          </Container>
        </Box>

        <Box pt={['5rem', '10rem']}>
          <Container maxW="6xl">
            <SectionTitle
              title="Development Tools."
              subtitle="DevTools I use when I build things."
            />
            <Tools tools={devTools} />
          </Container>
        </Box>
      </Box>

      <Container maxW="6xl" my="10" mt="40">
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
  const works = await getSheetJSON({
    id: '1fNtaqKnsDYEoi9NG8-phPzFH_1Fwbeh0j8SqivlOkjY'
  });

  return {
    props: {
      works: works.rows
    },
    revalidate: 1
  };
}
