import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import arrayToSentence from 'array-to-sentence';
import { usePalette } from 'color-thief-react';
import { format, formatDistanceToNow, isAfter, parseISO, subWeeks } from 'date-fns';
import groupBy from 'lodash.groupby';
import Image from 'next/image';
import { readableColor } from 'polished';
import { Fragment, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useMeasure } from 'react-use';

import SmallBadge from './small-badge';

const PALETTENUM = 1;

function listNames(names) {
  names = names.map((comp) => comp.replace(/Wan Saleh/i, 'Me'));

  return arrayToSentence(names, {
    lastSeparator: ' & '
  });
}

export default function Discography({ works }) {
  const [cellHeight, setCellHeight] = useState(0);
  const [genre, setGenre] = useState(null);

  const allWorks = works
    ?.map((work) => ({
      ...work,
      released: parseISO(work.released, new Date())
    }))
    .sort((a, b) => b.released - a.released)
    .filter((work) => !work.hide);

  const groupedByYear = groupBy(
    allWorks.filter((work) => (genre ? work.genre.includes(genre) : true)),
    (work) => work.released.getFullYear()
  );

  const _genres = [...new Set(allWorks.reduce((out, work) => out.concat(work.genre), []))];

  const genres = _genres
    .map((g) => ({
      title: g,
      totalWorks: allWorks.filter((work) => work.genre.includes(g)).length
    }))
    .sort((a, b) => b.totalWorks - a.totalWorks);

  return (
    <SimpleGrid
      columns={[1, 2, 3, 3, 4, 5]}
      // spacing="3"
      // mx="3"
      shadow="0 -10px 30px rgba(0,0,0,0.07)"
      maxW="1800px"
      mx="auto"
    >
      <Flex p="8" textAlign="center" justify="center" align="center" direction="column">
        <Heading as="h2" lineHeight="0.9" color="brand.500">
          Latest Discography
        </Heading>

        <Box
          mt="4"
          lineHeight="1.3"
          fontSize="sm"
          fontWeight="400"
          sx={{ b: { fontSize: 'xs', fontWeight: '600' } }}
        >
          Selected works that I have produced <b>PRO</b>, composed/written <b>COM</b>, arranged{' '}
          <b>ARR</b>, mixed <b>MIX</b> or mastered <b>MAS</b>.
        </Box>

        <Flex
          as="ul"
          mt="4"
          lineHeight="1.3"
          fontSize="xs"
          fontWeight="400"
          wrap="wrap"
          justify="center"
          sx={{ rowGap: 2, columnGap: 10 }}
        >
          <Box as="li">
            <Button
              variant="link"
              onClick={() => setGenre(null)}
              fontSize="inherit"
              d="inline-block"
              borderRadius="0"
              minW="0"
              color={genre === null ? 'brand.500' : 'gray.500'}
            >
              All
            </Button>
          </Box>

          {genres.map(({ title }) => (
            <Box as="li" key={title}>
              <Button
                variant="link"
                onClick={() => setGenre(title)}
                fontSize="inherit"
                d="inline-block"
                borderRadius="0"
                minW="0"
                color={genre === title ? 'brand.500' : 'gray.500'}
              >
                {title}
                {/* {' '}
                <Box as="span" fontSize="0.85em" fontWeight="600">
                  {totalWorks}
                </Box> */}
              </Button>
            </Box>
          ))}
        </Flex>
      </Flex>

      {Object.entries(groupedByYear)
        .sort((a, b) => b[0] - a[0])
        .map(([year, yearWorks]) => (
          <Fragment key={year}>
            <LazyLoad height={cellHeight} classNamePrefix="ll">
              <Flex
                key={year}
                p="8"
                h={cellHeight}
                textAlign="center"
                justify="center"
                align="center"
                direction="column"
                bgGradient={useColorModeValue(
                  'linear(-6deg, brand.500 50%, white 50.2%)',
                  'linear(-6deg, brand.500 50%, black 50.2%)'
                )}
              >
                <Heading
                  as="h3"
                  lineHeight="0.9"
                  fontSize="7xl"
                  color="brand.500"
                  transform="rotate(-6deg)"
                  textShadow="5px 5px 0 white"
                  // opacity="0.5"
                  // sx={{ mixBlendMode: 'overlay' }}
                >
                  {year}
                </Heading>
              </Flex>
            </LazyLoad>

            {yearWorks.map((work) => (
              <LazyLoad key={work.youtube} height={cellHeight} classNamePrefix="ll">
                <Work work={work} key={work.youtube} setCellHeight={setCellHeight} />
              </LazyLoad>
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

function Work({ work, setCellHeight }) {
  const coverURL = work.artwork
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_400/${work.artwork}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_400/https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURL, 5, 'hex', {
    crossOrigin: 'anonymous'
  });

  const [ref, { height: coverHeight }] = useMeasure();

  const cellHeight = coverHeight + 144;

  useEffect(() => {
    setCellHeight(cellHeight);
  }, [cellHeight]);

  return (
    <LinkBox key={work.youtube} role="group" h={`${cellHeight}px`}>
      <LinkOverlay
        href={`https://youtube.com/watch?v=${work.youtube}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex
          direction="column"
          bg={palette ? palette[PALETTENUM] : 'gray.800'}
          // bg={
          //   palette
          //     ? `linear-gradient(to bottom right, ${adjustHue(
          //         -5,
          //         darken(0.1, palette[PALETTENUM])
          //       )}, ${adjustHue(10, lighten(0.2, palette[PALETTENUM]))})`
          //     : 'gray.800'
          // }
          color={palette ? readableColor(palette[PALETTENUM]) : 'white'}
          transition="all 0.2s ease"
          textAlign="center"
          p="6"
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
            <Box
              bg="black"
              shadow="md"
              borderRadius="md"
              overflow="hidden"
              transition="all 0.5s ease"
              _groupHover={{
                shadow: 'lg',
                transform: 'translateY(-3px)'
              }}
            >
              <Image
                src={coverURL}
                layout="intrinsic"
                width={400}
                height={work.artwork ? 400 : 300}
                alt={work.song}
                css={{
                  position: 'relative',
                  zIndex: 0,
                  // objectFit:"contain",
                  // objectPosition:"50% 35%"
                  pointerEvents: 'none'
                }}
              />

              <Box
                bg="linear-gradient(to bottom right, #000, rgba(0,0,0,0) 50%)"
                pos="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                opacity="0"
                transition="all 0.3s ease"
                _groupHover={{ opacity: 0.5 }}
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
                {work.pro && <SmallBadge color={palette && palette[PALETTENUM]}>PRO</SmallBadge>}
                {work.com && <SmallBadge color={palette && palette[PALETTENUM]}>COM</SmallBadge>}
                {work.arr && <SmallBadge color={palette && palette[PALETTENUM]}>ARR</SmallBadge>}
                {work.mix && <SmallBadge color={palette && palette[PALETTENUM]}>MIX</SmallBadge>}
                {work.mas && <SmallBadge color={palette && palette[PALETTENUM]}>MAS</SmallBadge>}
              </HStack>
            </Box>
          </AspectRatio>

          <Flex
            w="full"
            flex="1"
            direction="column"
            justify="center"
            align="center"
            px="4"
            // py="2"
            mt="3"
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
              mb="0.5"
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
                fontWeight="400"
                maxW="90%"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                mb="2"
              >
                {listNames(work.artist)}
              </Box>

              <Box
                mt="1"
                fontSize="xs"
                fontWeight="500"
                maxW="90%"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                opacity="0"
                transition="all 0.3s ease"
                transform="translateY(50%)"
                _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
              >
                {work.composer ? <>Written by {listNames(work.composer)}</> : <>&nbsp;</>}
              </Box>
            </Flex>

            <Box mt="1" fontSize="xs" fontWeight="400" pos="relative" w="full">
              <Box
                transition="all 0.3s ease"
                _groupHover={{ opacity: 0 }}
                textTransform="capitalize"
              >
                {formatDistanceToNow(work.released, { addSuffix: true })}
              </Box>
              <Box
                opacity="0"
                pos="absolute"
                inset="0"
                transition="all 0.3s ease"
                _groupHover={{ opacity: 1 }}
                textTransform="capitalize"
              >
                {format(work.released, 'd MMMM yyy')}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </LinkOverlay>

      {work.spotify && (
        <Box
          pos="absolute"
          left="6"
          top="6"
          color="white"
          // color={palette ? readableColor(palette[PALETTENUM]) : 'white'}
          opacity="0"
          transform="scale(0.9)"
          transformOrigin="top left"
          transition="all 0.3s ease"
          _groupHover={{
            opacity: 1,
            transform: 'scale(1)'
          }}
        >
          <Button
            variant="unstyled"
            p="2"
            m="1"
            h="auto"
            minW="unset"
            minH="unset"
            d="block"
            cursor="pointer"
            // color="white"
            onClick={() => window.open(`spotify:${work.spotify}`)}
          >
            <Box
              as="svg"
              d="block"
              w="1.5rem"
              h="1.5rem"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <g fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(-200.000000, -460.000000)">
                  <path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" />
                </g>
              </g>
            </Box>
            <VisuallyHidden>Spotify</VisuallyHidden>
          </Button>
        </Box>
      )}
    </LinkBox>
  );
}
