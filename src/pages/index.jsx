import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  LightMode,
  useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import TextLoop from 'react-text-loop';

import Head from '../components/head';
import { Slash } from '../components/slash';

export default function Home() {
  const router = useRouter();
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

        <Container maxW="6xl" textAlign={['center', 'center', 'left']}>
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

          <LightMode>
            <Flex align="center" mt="8">
              <Button
                fontSize="xl"
                h="unset"
                w="unset"
                maxW="unset"
                py="2"
                px="5"
                borderRadius="full"
                letterSpacing="tight"
                colorScheme="brand"
                onClick={() => router.push('/works')}
              >
                Diskografi
              </Button>

              <Slash size="3em" />

              <Button
                fontSize="xl"
                h="unset"
                w="unset"
                maxW="unset"
                py="2"
                px="5"
                borderRadius="full"
                letterSpacing="tight"
                colorScheme="yellow"
                onClick={() => router.push('/blog')}
              >
                Blog
              </Button>

              <Slash size="3em" />

              <Button
                fontSize="xl"
                h="unset"
                w="unset"
                maxW="unset"
                py="2"
                px="5"
                borderRadius="full"
                letterSpacing="tight"
                // colorScheme="brand"
                bg="none!important"
                boxShadow="inset 0 0 0 3px currentColor !important"
                _hover={{ opacity: 0.7 }}
                onClick={() => router.push('/tools')}
              >
                Tools
              </Button>
            </Flex>
          </LightMode>
        </Container>
      </Flex>
    </>
  );
}
