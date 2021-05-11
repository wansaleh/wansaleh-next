import { Box, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import TextLoop from 'react-text-loop';

import Discography from '../components/discography';
import Head from '../components/head';
import { fetchDiscograpySheet } from '../lib/google-sheet-helpers';

export default function Home({ works }) {
  return (
    <Box>
      <Head title="By Wan Saleh" />

      <Flex
        w="full"
        pt={['5rem', '5rem', '10rem']}
        pb={['3rem', '3rem', '10rem']}
        flexDir="column"
        justify="center"
        align="center"
        pos="relative"
        overflow="hidden"
        zIndex="0"
      >
        <Box
          pos="absolute"
          inset="0"
          w="150vw"
          h="150%"
          zIndex="-1"
          transform="translate(0%, 0%) scaleX(-1) rotate(-10deg)"
          d={['none', 'none', 'block']}
        >
          <Image
            layout="fill"
            alt=""
            src={useColorModeValue(require('../images/hand.png'), require('../images/hand2.png'))}
            css={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              userSelect: 'none',
              objectFit: 'contain'
            }}
          />
        </Box>

        <Container maxW="6xl">
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

      <Box pos="relative" zIndex="2">
        <Discography works={works} />
      </Box>
    </Box>
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
