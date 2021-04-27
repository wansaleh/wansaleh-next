import {
  AspectRatio,
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import { usePalette } from 'color-thief-react';
import {
  format,
  formatDistanceToNow,
  isAfter,
  parseISO,
  subWeeks
} from 'date-fns';
import Image from 'next/image';
import { adjustHue, lighten, readableColor } from 'polished';
import LazyLoad from 'react-lazyload';
import { useMeasure } from 'react-use';

// import { getDarkest } from '../lib/color-helpers';
import SmallBadge from './small-badge';
// import TiltCard from './tilt-card';

const CImage = chakra(Image);

export default function Discography({ works }) {
  const allWorks = works
    .map((work) => ({
      ...work,
      released: parseISO(work.released, new Date())
    }))
    .sort((a, b) => b.released - a.released)
    .filter((work) => work.hide !== 'y');

  return (
    <SimpleGrid columns={[1, 2, 3, 3, 4, 5]} spacing="0">
      <Box p="8" textAlign="right">
        <Heading as="h2" lineHeight="0.9" color="brand.500">
          Selected Discography
        </Heading>
        <Box mt="4" lineHeight="1.3" fontSize="sm" fontWeight="500">
          Selected works that I have produced <b>(PRO)</b>, composed/written{' '}
          <b>(COM)</b>, arranged <b>(ARR)</b>, mixed <b>(MIX)</b> or mastered{' '}
          <b>(MAS)</b>.
        </Box>
      </Box>

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
  const [ref, { height }] = useMeasure();

  const coverURL = work.artwork
    ? work.artwork
    : `https://res.cloudinary.com/demo/image/fetch/https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURL, 3, 'hex', {
    crossOrigin: 'anonymous'
  });

  const PALETTENUM = 1;

  return (
    <LazyLoad height={height + 108} unmountIfInvisible classNamePrefix="ll">
      <LinkBox key={work.youtube} role="group" h={`${height + 108}px`}>
        <LinkOverlay
          href={`https://youtube.com/watch?v=${work.youtube}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            direction="column"
            bg={
              palette
                ? `linear-gradient(to bottom right, ${
                    palette[PALETTENUM]
                  }, ${adjustHue(20, lighten(0.1, palette[PALETTENUM]))})`
                : 'gray.800'
            }
            color={palette ? readableColor(palette[PALETTENUM]) : 'white'}
            transition="all 0.2s ease"
            textAlign="center"
            p="5"
            h="full"
          >
            <AspectRatio
              ref={ref}
              ratio={1}
              w="100%"
              transition="all 0.3s ease"
              transformOrigin="bottom"
              _groupHover={{
                transform: 'scale(1.02)'
              }}
            >
              <Box shadow="lg" bg="black">
                <Image
                  src={coverURL}
                  layout="intrinsic"
                  width={500}
                  height={500}
                  alt={work.song}
                  css={{
                    position: 'relative',
                    zIndex: 0,
                    // objectFit:"contain",
                    // objectPosition:"50% 35%"
                    pointerEvents: 'none'
                  }}
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
                  {work.pro && (
                    <SmallBadge color={palette && palette[PALETTENUM]}>
                      PRO
                    </SmallBadge>
                  )}
                  {work.com && (
                    <SmallBadge color={palette && palette[PALETTENUM]}>
                      COM
                    </SmallBadge>
                  )}
                  {work.arr && (
                    <SmallBadge color={palette && palette[PALETTENUM]}>
                      ARR
                    </SmallBadge>
                  )}
                  {work.mix && (
                    <SmallBadge color={palette && palette[PALETTENUM]}>
                      MIX
                    </SmallBadge>
                  )}
                  {work.mas && (
                    <SmallBadge color={palette && palette[PALETTENUM]}>
                      MAS
                    </SmallBadge>
                  )}
                </HStack>
              </Box>
            </AspectRatio>

            <Box flex="1" />

            <Flex
              w="full"
              direction="column"
              justify="center"
              align="center"
              px="3"
              // py="3"
              lineHeight="1"
            >
              <Heading
                as="h3"
                w="full"
                fontSize="lg"
                fontWeight="600"
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  as="span"
                  d="inline-block"
                  maxW="90%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {work.song}
                </Box>

                {isAfter(work.released, subWeeks(new Date(), 8)) && (
                  <SmallBadge
                    color={palette && palette[PALETTENUM]}
                    ml="1.5"
                    // mt="0.5"
                  >
                    New
                  </SmallBadge>
                )}
              </Heading>

              <Flex justify="center" align="center" direction="column" w="full">
                <Box
                  fontSize="xs"
                  fontWeight="600"
                  maxW="90%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {work.artist}
                </Box>

                {/* {work.composer && work.writer && (
                <Box
                  mt="1"
                  fontSize="xs"
                  fontWeight="500"
                  maxW="90%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {work.composer} / {work.writer}
                </Box>
              )} */}
              </Flex>

              <Box
                mt="1"
                fontSize="xs"
                fontWeight="500"
                _groupHover={{
                  '.ago': { display: 'none' },
                  '.abs': { display: 'inline' }
                }}
              >
                Released{' '}
                <span className="inline ago">
                  {formatDistanceToNow(work.released, { addSuffix: true })}
                </span>
                <span className="hidden abs">
                  {format(work.released, 'd MMMM yyy')}
                </span>
              </Box>
            </Flex>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </LazyLoad>
  );
}
