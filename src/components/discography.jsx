import {
  AspectRatio,
  Box,
  // chakra,
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
import groupBy from 'lodash.groupby';
import Image from 'next/image';
import { adjustHue, lighten, readableColor } from 'polished';
import { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import { useMeasure } from 'react-use';

// import { getDarkest } from '../lib/color-helpers';
import SmallBadge from './small-badge';
// import TiltCard from './tilt-card';

// const CImage = chakra(Image);

export default function Discography({ works }) {
  const allWorks = works
    .map((work) => ({
      ...work,
      released: parseISO(work.released, new Date())
    }))
    // .sort((a, b) => b.released - a.released)
    .filter((work) => work.hide !== 'y');

  const groupedByYear = groupBy(allWorks, (work) =>
    work.released.getFullYear()
  );

  return (
    <SimpleGrid
      columns={[1, 2, 3, 3, 4, 5]}
      spacing="0"
      shadow="0 -10px 30px rgba(0,0,0,0.07)"
    >
      <Flex
        p="8"
        textAlign="center"
        justify="center"
        align="center"
        direction="column"
      >
        <Heading as="h2" lineHeight="0.9" color="brand.500">
          Selected Discography
        </Heading>
        <Box
          mt="4"
          lineHeight="1.3"
          fontSize="sm"
          fontWeight="500"
          sx={{ b: { fontSize: '2xs' } }}
        >
          Selected works that I have produced <b>PRO</b>, composed/written{' '}
          <b>COM</b>, arranged <b>ARR</b>, mixed <b>MIX</b> or mastered{' '}
          <b>MAS</b>.
        </Box>
      </Flex>

      {Object.entries(groupedByYear)
        .sort((a, b) => b[0] - a[0])
        .map(([year, yearWorks]) => (
          <Fragment key={year}>
            <Flex
              key={year}
              p="8"
              textAlign="center"
              justify="center"
              align="center"
              direction="column"
              bg="brand.500"
            >
              <Heading as="h3" lineHeight="0.9" fontSize="7xl" color="white">
                {year}
              </Heading>
            </Flex>

            {yearWorks.map((work) => (
              <Work work={work} key={work.youtube} />
            ))}
          </Fragment>
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
  const [ref, { height: coverHeight }] = useMeasure();

  const coverURL = work.artwork
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_500/${work.artwork}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_500/https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURL, 4, 'hex', {
    crossOrigin: 'anonymous'
  });

  const PALETTENUM = 0;
  const cellHeight = coverHeight + 108;

  return (
    <LazyLoad height={cellHeight} unmountIfInvisible classNamePrefix="ll">
      <LinkBox key={work.youtube} role="group" h={`${cellHeight}px`}>
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
              // transition="all 0.3s ease"
              // transformOrigin="bottom"
              // _groupHover={{
              //   transform: 'scale(1.02)'
              // }}
            >
              <Box shadow="lg" bg="black">
                <Image
                  src={coverURL}
                  layout="intrinsic"
                  width={480}
                  height={work.artwork ? 480 : 360}
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
                pos="relative"
                w="full"
              >
                <Box transition="all 0.5s ease" _groupHover={{ opacity: 0 }}>
                  Released{' '}
                  {formatDistanceToNow(work.released, { addSuffix: true })}
                </Box>
                <Box
                  opacity="0"
                  pos="absolute"
                  inset="0"
                  transition="all 0.5s ease"
                  _groupHover={{ opacity: 1 }}
                >
                  Released {format(work.released, 'd MMMM yyy')}
                </Box>
              </Box>
            </Flex>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </LazyLoad>
  );
}
