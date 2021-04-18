import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import MD from 'react-markdown';

export default function Tools({ tools }) {
  return (
    <Flex as="ul" mt="4" flexWrap="wrap" justify="center" mx="-1rem">
      {tools.map((tool, i) => (
        <Box as="li" key={i} p="4" w="full">
          <Heading
            as="h4"
            mt="8"
            mb="3"
            fontSize="3xl"
            fontWeight="500"
            letterSpacing="tight"
            pos="relative"
            color={useColorModeValue('gray.600', 'gray.400')}
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
}
