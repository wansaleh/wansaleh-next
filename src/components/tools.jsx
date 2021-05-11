/* eslint-disable react/no-array-index-key */
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import React from 'react';
import MD from 'react-markdown';

export default function Tools({ tools, hideIcons = false }) {
  return (
    <Flex as="ul" mt="4" flexWrap="wrap" justify="center" mx="-1rem">
      {tools.map((tool, i) => (
        <Box as="li" key={i} p="4" w="full">
          <Heading
            as="h4"
            mt="4"
            mb="4"
            fontSize="3xl"
            fontWeight="500"
            // letterSpacing="tight"
            pos="relative"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {tool.name}
          </Heading>

          {!hideIcons && (
            <Flex
              wrap="wrap"
              justify="flex-start"
              align="center"
              userSelect="none"
              display="inline-flex"
              ml="-3"
              mb="4"
              maxW="lg"
            >
              {tool.logos.map((logo, j) => {
                const image = (
                  <Flex
                    px="3"
                    py="2"
                    flexDir="column"
                    align="center"
                    role="group"
                    transition="all 0.2s ease"
                    filter="grayscale(1)"
                    _hover={{ filter: 'grayscale(0)' }}
                  >
                    {/* <Box
                        dangerouslySetInnerHTML={{
                          __html: logo.image
                        }}
                        sx={{
                          h: '32px',
                          w: 'auto',
                          maxW: '5rem',
                          svg: { height: 'full', w: 'full' }
                        }}
                        filter={useColorModeValue('invert(0)', 'invert(1)')}
                      /> */}
                    <Image
                      src={logo.image}
                      // maxW="140px"
                      // h="10"
                      alt={logo.title}
                      sx={{ height: '32px', w: 'auto', maxWidth: '5rem' }}
                      filter={useColorModeValue('invert(0)', 'invert(1)')}
                    />

                    {/* <Text
                        as="span"
                        mt="3"
                        fontFamily="mono"
                        fontSize="2xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        // opacity="0"
                        // transition="all 0.3s ease"
                        // _groupHover={{ opacity: 1 }}
                      >
                        {logo.title}
                      </Text> */}
                  </Flex>
                );

                return logo.link ? (
                  <Link key={j} href={logo.link} isExternal>
                    {image}
                    <VisuallyHidden>{logo.title}</VisuallyHidden>
                  </Link>
                ) : (
                  image
                );
              })}
            </Flex>
          )}

          <Box maxW="lg" fontSize="sm" lineHeight="1.5">
            <MD>{tool.desc}</MD>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
