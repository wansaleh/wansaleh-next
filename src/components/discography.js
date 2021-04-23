import {
  AspectRatio,
  Badge,
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import { format, isAfter, parse, subWeeks } from 'date-fns';

import SmallBadge from './small-badge';
import TiltCard from './tilt-card';

export default function Discography({ works }) {
  const allWorks = works
    .filter((work) => !!work.artwork)
    .map((work) => ({
      ...work,
      releasedate: parse(work.releasedate, 'yyyy-MM-dd', new Date())
    }))
    .sort((a, b) => b.releasedate - a.releasedate);

  return (
    <Box mt="10">
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing="8">
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
                    ratio={1}
                    w="100%"
                    // maxW="280px"
                    // mt="2"
                  >
                    <Box borderRadius="sm" shadow="lg">
                      {/* <Box
                        pos="absolute"
                        inset="0"
                        zIndex="1"
                        bg="brand.500"
                        opacity="0.75"
                        sx={{ mixBlendMode: 'lighten' }}
                      /> */}
                      <Image
                        src={work.artwork}
                        // srcSet={`https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg 640w`}
                        // sizes="(max-width: 500px) 480px, 640px"
                        // src={`https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg`}
                        alt={work.title}
                        position="relative"
                        zIndex="0"
                        w="full"
                        h="full"
                        objectFit="cover"
                        objectPosition="50% 35%"
                        transform={work.inteam === 'y' && 'scale(1.1)'}
                        pointerEvents="none"
                        // filter="grayscale(1)"
                        // sx={{ mixBlendMode: 'multiply' }}
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
                      <SmallBadge ml="1">PRO</SmallBadge>
                    )}
                    {work.composer.includes('Wan Saleh') && (
                      <SmallBadge ml="1">COM</SmallBadge>
                    )}
                    {work.music === 'y' && <SmallBadge ml="1">ARR</SmallBadge>}
                    {work.mixed === 'y' && <SmallBadge ml="1">MIX</SmallBadge>}
                    {work.mastered === 'y' && (
                      <SmallBadge ml="1">MAS</SmallBadge>
                    )}
                  </Box>
                </TiltCard>
              </Box>

              <Heading as="h3" fontSize="md" fontWeight="600" mt="3">
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

              <Box fontSize="xs" fontWeight="500">
                by <span className="font-semibold">{work.artist}</span>
              </Box>

              <Box
                fontSize="xs"
                opacity="0.6"
                fontWeight="500"
                lineHeight="1.2"
              >
                Released {format(work.releasedate, 'dd MMMM yyy')}
                {/* {formatDistanceToNowStrict(work.releasedate)} ago */}
              </Box>
            </LinkOverlay>
          </LinkBox>
        ))}

        {/* <Flex>
          <Heading as="h3" fontSize="lg" fontFamily="serif">
            And much more
          </Heading>
        </Flex> */}
      </SimpleGrid>
    </Box>
  );
}
