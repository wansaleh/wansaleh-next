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
  formatDistanceToNow,
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
                    ratio={2.6}
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
                    top="0"
                    left="0"
                    px="3"
                    py="2"
                    lineHeight="1"
                  >
                    {work.produced === 'y' && (
                      <Badge
                        fontSize="0.65rem"
                        p="0.1em 0.2em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        PRO
                      </Badge>
                    )}
                    {work.composer.includes('Wan Saleh') && (
                      <Badge
                        fontSize="0.65rem"
                        p="0.1em 0.2em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        COM
                      </Badge>
                    )}
                    {work.music === 'y' && (
                      <Badge
                        fontSize="0.65rem"
                        p="0.1em 0.2em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        ARR
                      </Badge>
                    )}
                    {work.mixed === 'y' && (
                      <Badge
                        fontSize="0.65rem"
                        p="0.1em 0.2em"
                        letterSpacing="tight"
                        mr="1"
                      >
                        MIX
                      </Badge>
                    )}
                    {work.mastered === 'y' && (
                      <Badge
                        fontSize="0.65rem"
                        p="0.1em 0.2em"
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
                    colorScheme="green"
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
                Released{' '}
                {formatDistanceToNowStrict(work.releasedate, {
                  // roundingMethod: 'floor'
                })}{' '}
                ago
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
