/* eslint-disable no-sparse-arrays */
import { Box, Container, Flex, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import TextLoop from 'react-text-loop';

import Discography from '../components/discography';
import Head from '../components/head';
import Tools from '../components/tools';
import devTools from '../data/dev-tools';
import musicTools from '../data/music-tools';
import { fetchDiscograpySheet } from '../lib/google-sheet-helpers';

export default function Home({ works }) {
  return (
    <Box>
      <Head title="By Wan Saleh" />

      <Flex
        w="full"
        pt={['5rem', , '10rem']}
        pb={['3rem', , '10rem']}
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
          w="150vw"
          h="150%"
          // w={['500px', '700px', '800px', '1000px']}
          // h={['500px', '700px', '800px', '1000px']}
          // left={['10%', '10%', '20%', '50%']}
          zIndex="-1"
          transform="translate(0%, 0%) scaleX(-1) rotate(-10deg)"
          d={['none', , 'block']}
        >
          <Image
            layout="fill"
            alt=""
            // width={1920}
            // height={1080}
            src={useColorModeValue(
              require('../assets/images/hand.png'),
              require('../assets/images/hand2.png')
            )}
            css={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              userSelect: 'none',
              objectFit: 'contain'
            }}
          />
        </Box>

        <Container maxW="7xl">
          <Heading
            as="h1"
            pb="2"
            fontSize={['3rem', '4rem', '5rem', '8rem']}
            fontWeight="600"
            // fontFamily="body"
            lineHeight="0.8"
            letterSpacing="tighter"
            ml="-0.025em"
          >
            <Box
              fontSize="0.65em"
              fontWeight="300"
              letterSpacing="tight"
              color="gray.600"
              transform="skew(-6deg)"
            >
              Apa khabar.
            </Box>
            <Box transform="skew(-6deg)">
              Saya{' '}
              <Box as="span" color="brand.500">
                Wan Saleh.
              </Box>
            </Box>
          </Heading>

          <Heading
            as="h2"
            mt="4"
            pb="4"
            fontSize={['3xl', '5xl']}
            fontWeight="300"
            fontFamily="body"
            lineHeight="1"
            letterSpacing="tight"
          >
            Saya{' '}
            <TextLoop>
              <span>penerbit muzik.</span>
              <span>pengadun lagu.</span>
              <span>pembina web.</span>
              {/* <span>drink soda.</span> */}
              <span>pencinta mikrofon.</span>
              {/* <span>adore preamps.</span> */}
            </TextLoop>
          </Heading>
        </Container>
      </Flex>

      {/* <Box pos="relative" zIndex="1">
        <Featured works={works} />
      </Box> */}

      <Box pos="relative" zIndex="2">
        <Discography works={works} />
      </Box>

      <Box pos="relative">
        <Container maxW="7xl">
          <SimpleGrid pt={['5rem', '10rem']} columns={[1, 1, 1, 2]} spacing="20">
            <Box>
              <SectionTitle
                title="Alatan Muzik"
                subtitle="Benda-benda berkaitan muzik kegunaan harian."
              />

              <Tools tools={musicTools} />
            </Box>

            <Box>
              <SectionTitle
                title="Alatan Pembangun"
                subtitle="DevTools yang saya guna bila membina perisian."
              />

              <Tools tools={devTools} />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <>
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight="600"
        lineHeight="0.9"
        letterSpacing="tight"
        transform="skew(-6deg)"
      >
        {title}
      </Heading>

      <Heading
        as="h3"
        mt="2"
        // fontFamily="body"
        fontSize="2xl"
        fontWeight="400"
        lineHeight="0.9"
        // letterSpacing="0.1em"
        // textTransform="uppercase"
        // opacity="0.6"
        color={useColorModeValue('gray.600', 'gray.500')}
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
