import { Box, Container, Flex, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import TextLoop from 'react-text-loop';

import Head from '../components/head';

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  return (
    <>
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
        minH="100vh"
        bgGradient={useColorModeValue(
          'linear(to-tr, white, brand.100)',
          'linear(to-tr, black, brand.900)'
        )}
      >
        <Box
          pos="absolute"
          zIndex="-1"
          w="50%"
          h="100%"
          top="30%"
          left="60%"
          // transform="translate(3%, 25%)"
          d={['none', 'none', 'block']}
          transition="all 1s var(--ease-out-expo) 0.5s"
          transform={heroLoaded ? 'translate(0, 0)' : 'translate(0, 50%)'}
          opacity={heroLoaded ? 1 : 0}
          pointerEvents="none"
          userSelect="none"
        >
          <Image
            onLoad={() => {
              setHeroLoaded(true);
            }}
            alt=""
            // eslint-disable-next-line import/no-unresolved
            src={require('../images/hand.png?webp')}
            position="absolute"
            left="0"
            right="0"
            bottom="-0px"
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={useColorModeValue(1, 0)}
          />
          <Image
            onLoad={() => {
              setHeroLoaded(true);
            }}
            alt=""
            // eslint-disable-next-line import/no-unresolved
            src={require('../images/hand2.png?webp')}
            position="absolute"
            left="0"
            right="0"
            bottom="-0px"
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={useColorModeValue(0, 1)}
          />
        </Box>

        <Container maxW="6xl">
          <Heading
            as="h1"
            pb="2"
            fontSize={['3rem', '4rem', '5rem', '8rem']}
            fontWeight="600"
            lineHeight="0.9"
            letterSpacing="tighter"
            ml="-0.025em"
          >
            <Box
              fontSize="0.65em"
              fontWeight="300"
              letterSpacing="tight"
              color={useColorModeValue('gray.600', 'gray.400')}
              // transform="skew(-6deg)"
            >
              Apa khabar.
            </Box>
            <Box>
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
            fontSize={['2xl', '5xl']}
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

          <Flex align="center" mt="8" fontSize={['md', 'lg', 'xl', '2xl']} sx={{ gap: '0.35em' }}>
            <NextLink href="/works" passHref>
              <CTALink>Diskografi</CTALink>
            </NextLink>

            {/* <Slash size="2em" /> */}

            <NextLink href="/blog" passHref>
              <CTALink bg="yellow.400" color="black">
                Blog
              </CTALink>
            </NextLink>

            {/* <Slash size="2em" /> */}

            <NextLink href="/tools" passHref>
              <CTALink
                bg="none"
                color={useColorModeValue('black', 'white')}
                boxShadow="inset 0 0 0 3px currentColor !important"
              >
                Tools
              </CTALink>
            </NextLink>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}

function CTALink({ children, ...props }) {
  return (
    <Link
      h="unset"
      w="unset"
      maxW="unset"
      py="0.25em"
      px="1em"
      fontFamily="heading"
      fontWeight="600"
      borderRadius="full"
      letterSpacing="tight"
      // colorScheme="gray"
      bg={useColorModeValue('black', 'white')}
      color={useColorModeValue('white', 'black')}
      _hover={{ opacity: 0.8 }}
      {...props}
    >
      <Box as="span" transform="skew(-5deg)" d="block">
        {children}
      </Box>
    </Link>
  );
}
