import {
  AspectRatio,
  Badge,
  Box,
  chakra,
  Heading,
  HStack,
  LightMode,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import { usePalette } from 'color-thief-react';
import {
  format,
  formatDistanceToNow,
  isAfter,
  parse,
  subWeeks
} from 'date-fns';
import Image from 'next/image';
import { readableColor } from 'polished';

// import { getDarkest } from '../lib/color-helpers';
import SmallBadge from './small-badge';
// import TiltCard from './tilt-card';

const CImage = chakra(Image);

export default function Discography({ works }) {
  const allWorks = works
    .filter((work) => !!work.artwork)
    .map((work) => ({
      ...work,
      releasedate: parse(work.releasedate, 'yyyy-MM-dd', new Date())
    }))
    .sort((a, b) => b.releasedate - a.releasedate);

  return (
    <SimpleGrid columns={[1, 1, 2, 3, 5]} spacing="0">
      {allWorks.map((work) => (
        <Work work={work} key={work.youtube} />
      ))}

      {/* <Flex>
          <Heading as="h3" fontSize="lg" fontFamily="serif">
            And much more
          </Heading>
        </Flex> */}
    </SimpleGrid>
  );
}

function Work({ work }) {
  const { data } = usePalette(work.artwork, 5, 'hex', {
    crossOrigin: 'anonymous'
  });

  return (
    <LinkBox key={work.youtube} role="group">
      <LinkOverlay
        href={`https://youtube.com/watch?v=${work.youtube}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box>
          <AspectRatio ratio={1} w="100%">
            <Box>
              <CImage
                src={work.artwork}
                layout="fill"
                // srcSet={`https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg 640w`}
                // sizes="(max-width: 500px) 480px, 640px"
                // src={`https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg`}
                alt={work.title}
                pos="relative"
                zIndex="0"
                objectFit="cover"
                objectPosition="50% 35%"
                transform={work.inteam === 'y' && 'scale(1.1)'}
                pointerEvents="none"
              />
              <HStack
                className="front"
                justify="center"
                spacing="1"
                pos="absolute"
                left="0"
                right="0"
                bottom="0"
                px="3"
                py="3.5"
                lineHeight="1"
              >
                {work.produced === 'y' && (
                  <SmallBadge colors={data}>PRO</SmallBadge>
                )}
                {work.composer.includes('Wan Saleh') && (
                  <SmallBadge colors={data}>COM</SmallBadge>
                )}
                {work.music === 'y' && (
                  <SmallBadge colors={data}>ARR</SmallBadge>
                )}
                {work.mixed === 'y' && (
                  <SmallBadge colors={data}>MIX</SmallBadge>
                )}
                {work.mastered === 'y' && (
                  <SmallBadge colors={data}>MAS</SmallBadge>
                )}
              </HStack>
            </Box>
          </AspectRatio>
        </Box>

        <Box
          p="3"
          bg={data ? data[0] : 'gray.800'}
          color={data ? readableColor(data[0]) : 'white'}
          transition="all 0.2s ease"
          textAlign="center"
        >
          <Heading as="h3" fontSize="lg" fontWeight="600">
            <Box as="span" mr="2">
              {work.song}
            </Box>

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
              <LightMode>
                <Badge
                  colorScheme="yellow"
                  // className="ring-1 ring-black ring-opacity-30"
                  fontSize="0.65em"
                  mt="-0.2em"
                  // ml="1"
                >
                  New
                </Badge>
              </LightMode>
            )}
          </Heading>

          <Box fontSize="xs" fontWeight="500">
            by <span className="font-semibold">{work.artist}</span>
          </Box>

          <Box
            fontSize="xs"
            fontWeight="400"
            _groupHover={{
              '.ago': { display: 'none' },
              '.abs': { display: 'inline' }
            }}
          >
            Released{' '}
            <span className="inline ago">
              {formatDistanceToNow(work.releasedate, { addSuffix: true })}
            </span>
            <span className="hidden abs">
              {format(work.releasedate, 'dd MMMM YYY')}
            </span>
          </Box>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}
