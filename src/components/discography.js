import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import {
  format,
  formatDistanceToNowStrict,
  isAfter,
  parse,
  subWeeks
} from 'date-fns';

import TiltCard from './tilt-card';

export default function Discography({ works }) {
  const allWorks = works
    .map((work) => ({
      ...work,
      releasedate: parse(work.releasedate, 'yyyy-MM-dd', new Date())
    }))
    .sort((a, b) => b.releasedate - a.releasedate);

  return (
    <Box mt="10">
      <SimpleGrid columns={[1, 1, 3]} spacing="10" spacingY="16">
        {allWorks.map((work) => (
          <LinkBox key={work.youtube} textAlign={['left']}>
            <LinkOverlay
              href={`https://youtube.com/watch?v=${work.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box>
                <TiltCard
                  css={{
                    '.play': {
                      opacity: 0,
                      // transform: 'scale(1)',
                      transition: 'all 0.2s ease'
                    },
                    ':hover': {
                      '.play': {
                        // transform: 'scale(1.2)',
                        opacity: 1
                      }
                    }
                  }}
                >
                  <AspectRatio
                    ratio={2.8}
                    w="100%"
                    // maxW="280px"
                    // mt="2"
                  >
                    <Box borderRadius="md">
                      <Image
                        srcSet={`https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg 640w`}
                        sizes="(max-width: 500px) 480px, 640px"
                        src={`https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg`}
                        alt={work.title}
                        position="relative"
                        zIndex="0"
                        w="full"
                        h="full"
                        objectFit="cover"
                        objectPosition="50% 35%"
                        transform={work.inteam === 'y' && 'scale(1.1)'}
                        pointerEvents="none"
                      />
                    </Box>
                  </AspectRatio>

                  <Box
                    pos="absolute"
                    right="0"
                    bottom="0"
                    px="1"
                    py="2"
                    lineHeight="1"
                  >
                    {work.produced === 'y' && (
                      <Badge
                        bg="rgba(0,0,0,0.7)"
                        color="white"
                        fontSize="0.65rem"
                        p="0.2em 0.3em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        PRO
                      </Badge>
                    )}
                    {work.composer.includes('Wan Saleh') && (
                      <Badge
                        bg="rgba(0,0,0,0.7)"
                        color="white"
                        fontSize="0.65rem"
                        p="0.2em 0.3em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        COM
                      </Badge>
                    )}
                    {work.music === 'y' && (
                      <Badge
                        bg="rgba(0,0,0,0.7)"
                        color="white"
                        fontSize="0.65rem"
                        p="0.2em 0.3em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        ARR
                      </Badge>
                    )}
                    {work.mixed === 'y' && (
                      <Badge
                        bg="rgba(0,0,0,0.7)"
                        color="white"
                        fontSize="0.65rem"
                        p="0.2em 0.3em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        MIX
                      </Badge>
                    )}
                    {work.mastered === 'y' && (
                      <Badge
                        bg="rgba(0,0,0,0.7)"
                        color="white"
                        fontSize="0.65rem"
                        p="0.2em 0.3em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        MAS
                      </Badge>
                    )}
                  </Box>
                </TiltCard>
              </Box>

              <Heading as="h3" fontSize="xl" fontFamily="serif" mt="3">
                <span className="mr-2">{work.song}</span>

                {/* {work.genre && (
                    <Badge
                      // className="ring-1 ring-black ring-opacity-30"
                      fontSize="0.65em"
                      mt="-0.1em"
                    >
                      {work.genre}
                    </Badge>
                  )} */}
                {isAfter(work.releasedate, subWeeks(new Date(), 8)) && (
                  <Badge
                    colorScheme="yellow"
                    // className="ring-1 ring-black ring-opacity-30"
                    fontSize="0.65em"
                    mt="-0.1em"
                    // ml="1"
                  >
                    New
                  </Badge>
                )}
              </Heading>

              <Box fontSize="sm" opacity="0.7" fontWeight="500">
                by {work.artist}
              </Box>

              <Box
                fontSize="xs"
                opacity="0.7"
                fontWeight="500"
                lineHeight="1.2"
              >
                Released {format(work.releasedate, 'MMMM yyy')}
                {/* {formatDistanceToNowStrict(work.releasedate)} ago */}
              </Box>
            </LinkOverlay>
          </LinkBox>
        ))}

        <Flex>
          <Heading as="h3" fontSize="lg" fontFamily="serif">
            And much more
          </Heading>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
