import {
  AspectRatio,
  Box,
  // Button,
  Flex,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Select,
  SimpleGrid
} from '@chakra-ui/react';
import { usePalette } from 'color-thief-react';
import { format, formatDistanceToNow, isAfter, parseISO, subMonths } from 'date-fns';
import { ms } from 'date-fns/locale';
import groupBy from 'lodash.groupby';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { readableColor } from 'polished';
import { Fragment, useState } from 'react';
import { useMeasure } from 'react-use';
import useSWR from 'swr';

import Img from './image';
import SmallBadge from './small-badge';

const PALETTENUM = 0;

const fetcher = (url, headers) => fetch(url, { headers }).then((r) => r.json());
// const getKey = (pageIndex, previousPageData) => {
//   // reached the end
//   if (previousPageData && !previousPageData.works) return null;

//   // first page, we don't have `previousPageData`
//   if (pageIndex === 0) return `/api/works`;

//   // add the cursor to the API endpoint
//   return `/api/works?offset=${previousPageData.offset}`;
// };

export default function Discography({ initialData }) {
  const router = useRouter();
  // const [works, setWorks] = useState([]);
  // const [pageOffset, setPageOffset] = useState(null);
  const { data } = useSWR(`/api/works`, fetcher, { initialData });
  // const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const [currentPerson, setCurrentPerson] = useState(null);

  const { works } = data || {};
  // const works = data
  //   ? data
  //       .flat()
  //       .map((page) => page.works)
  //       .flat()
  //   : [];

  // console.log(works);

  // const isReachingEnd = data ? !data[data.length - 1].offset : false;

  const allWorks = works
    .map((work) => ({
      ...work,
      released: parseISO(work.released, new Date())
    }))
    .sort((a, b) => b.released - a.released)
    .filter((work) => !work.hidden);

  let filteredWorks = allWorks.slice();

  const _genres = [...new Set(filteredWorks.map((work) => work.genres).flat())];

  const genres = _genres
    .map((g) => ({
      slug: g.toLowerCase().replace(/ /g, '-'),
      title: g,
      total: filteredWorks.filter((work) => work.genres.includes(g)).length
    }))
    .sort((a, b) => b.total - a.total);

  let genre = null;
  if (router.query.genre) {
    genre = genres.find((g) => g.slug === router.query.genre).title;
  }

  filteredWorks = filteredWorks.filter((work) => (genre ? work.genres.includes(genre) : true));

  const _artists = [
    ...new Set([
      ...filteredWorks.map((work) => work.artists).flat(),
      ...filteredWorks.map((work) => work.composers).flat(),
      ...filteredWorks.map((work) => work.writers).flat()
    ])
  ]
    .filter(Boolean)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    });

  const artists = _artists.map((art) => ({
    slug: art.toLowerCase().replace(/ /g, '-'),
    name: art,
    total: filteredWorks.filter(
      (work) =>
        work.artists.includes(art) || work.composers?.includes(art) || work.writers?.includes(art)
    ).length
  }));

  filteredWorks = filteredWorks.filter((work) =>
    currentPerson
      ? work.artists.includes(currentPerson) ||
        work.composers?.includes(currentPerson) ||
        work.writers?.includes(currentPerson)
      : true
  );

  const groupedByYear = groupBy(filteredWorks, (work) => work.released.getFullYear());

  return (
    <>
      <SimpleGrid
        columns={[1, 2, 3, 3, 4, 5]}
        spacing="0"
        // mx="3"
        // shadow="0 -10px 30px rgba(0,0,0,0.07)"
        maxW="1800px"
        mx="auto"
      >
        <Flex
          p="8"
          textAlign="center"
          justify="center"
          align="center"
          direction="column"
          bg="brand.600"
          bgGradient="linear(to-br, brand.600, brand.800)"
          color="white"
        >
          <Heading as="h2" lineHeight="0.9">
            Diskografi Pilihan
          </Heading>

          <Box
            mt="4"
            lineHeight="1.3"
            fontSize="sm"
            fontWeight="400"
            sx={{ b: { fontSize: 'xs', fontWeight: '600' } }}
          >
            Lagu-lagu pilihan yang telah saya terbitkan <b>PRO</b>, cipta/tulis <b>COM</b>, gubah{' '}
            <b>ARR</b>, jurutera <b>ENG</b>, adun <b>MIX</b> atau masterkan <b>MAS</b>.
          </Box>

          <Flex
            as="ul"
            mt="4"
            lineHeight="1.3"
            fontSize="11px"
            wrap="wrap"
            justify="center"
            sx={{ rowGap: 2, columnGap: 10 }}
          >
            <Box as="li">
              <NextLink href="/" shallow>
                <Link
                  textTransform="uppercase"
                  fontWeight="800"
                  // letterSpacing="wide"
                  color={!genre ? 'brand.200' : 'white'}
                  tw="hover:underline!"
                >
                  Semua
                </Link>
              </NextLink>
            </Box>

            {genres.map(({ slug, title }) => (
              <Box as="li" key={slug}>
                <NextLink href={`/?genre=${slug}`} shallow>
                  <Link
                    textTransform="uppercase"
                    fontWeight="800"
                    // letterSpacing="wide"
                    color={genre === title ? 'brand.200' : 'white'}
                    tw="hover:underline!"
                  >
                    {title}
                  </Link>
                </NextLink>
              </Box>
            ))}
          </Flex>

          <Box mt="4">
            <Select
              size="sm"
              onChange={(e) => setCurrentPerson(e.target.value !== 'all' ? e.target.value : null)}
              borderRadius="md"
              borderWidth="2px"
              borderColor="rgba(255,255,255,0.25) !important"
            >
              <option value="all">Semua</option>
              {artists.map(({ slug, name, total }) => (
                <option key={slug} value={name}>
                  {name} ({total})
                </option>
              ))}
            </Select>
          </Box>
        </Flex>

        {Object.entries(groupedByYear)
          .sort((a, b) => b[0] - a[0])
          .map(([year, yearWorks]) => (
            <Fragment key={year}>
              {/* <LazyLoad height={cellHeight} classNamePrefix="ll">
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
              </LazyLoad> */}

              {yearWorks.map((work) => (
                <Work work={work} key={work.youtube} />
              ))}
            </Fragment>
          ))}

        {/* {!isReachingEnd && (
          <Flex
            pos="relative"
            textAlign="center"
            justify="center"
            align="center"
            direction="column"
            bg="brand.600"
            bgGradient="linear(to-br, brand.600, brand.800)"
            color="white"
            minH="100px"
          >
            <Button
              pos="absolute"
              inset="0"
              w="full"
              h="full"
              color="white"
              size="lg"
              // fontSize="3xl"
              variant="unstyled"
              _hover={{ opacity: 0.7 }}
              onClick={() => setSize(size + 1)}
            >
              Load More
            </Button>
          </Flex>
        )} */}
      </SimpleGrid>
    </>
  );
}

function Work({ work }) {
  const coverURL = work.artwork
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_400/${work.artwork}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_400/https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;
  // ? `${work.artwork}`
  // : `https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURL, 5, 'hex', {
    crossOrigin: 'anonymous'
  });

  const [ref, { height: coverHeight }] = useMeasure();

  const cellHeight = coverHeight + 120;

  return (
    <LinkBox key={work.youtube} role="group" h={`${cellHeight}px`}>
      <LinkOverlay href={`https://youtube.com/watch?v=${work.youtube}`} isExternal>
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
              <Img
                src={coverURL}
                width={300}
                height={300}
                alt={work.song}
                bg="#000"
                objectFit="contain"
                pointerEvents="none"
                opacity="1"
              />

              {/* <Box
                bg="linear-gradient(to bottom right, #000, rgba(0,0,0,0) 50%)"
                pos="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                opacity="0"
                transition="all 0.3s ease"
                _groupHover={{ opacity: 0.5 }}
              /> */}

              <HStack
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
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>PRO</SmallBadge>
                )}
                {work.com && (
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>COM</SmallBadge>
                )}
                {work.arr && (
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>ARR</SmallBadge>
                )}
                {work.eng && (
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>ENG</SmallBadge>
                )}
                {work.mix && (
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>MIX</SmallBadge>
                )}
                {work.mas && (
                  <SmallBadge color={palette && palette[PALETTENUM + 1]}>MAS</SmallBadge>
                )}
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

              {isAfter(work.released, subMonths(new Date(), 1)) && (
                <SmallBadge
                  color={palette && palette[PALETTENUM + 1]}
                  ml="1.5"
                  mt="-0.5"
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
                h="2.4em"
                // maxW="95%"
                lineHeight="1.2"
                w="full"
                mb="2"
                pos="relative"
                zIndex="1"
                overflow="hidden"
              >
                <Box
                  // whiteSpace="nowrap"
                  // overflow="hidden"
                  // textOverflow="ellipsis"
                  opacity="1"
                  transition="all 0.2s ease-out"
                  _groupHover={
                    (work.composers || work.writers) && {
                      opacity: 0,
                      transform: 'translateY(-100%)'
                    }
                  }
                >
                  {listArtists(work.artists)}
                </Box>
                {(work.composers || work.writers) && (
                  <Box
                    // whiteSpace="nowrap"
                    // overflow="hidden"
                    // textOverflow="ellipsis"
                    pos="absolute"
                    inset="0"
                    opacity="0"
                    transition="all 0.2s ease-out"
                    transform="translateY(50%)"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                  >
                    <span tw="font-medium opacity-70">Ciptaan</span>{' '}
                    {listWriters(work.composers, work.writers)}
                  </Box>
                )}
              </Box>
            </Flex>

            <Box
              // mt="1"
              fontSize="11px"
              fontWeight="800"
              pos="relative"
              w="full"
              opacity="0.65"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              <Box
                transition="all 0.2s ease-out"
                _groupHover={{ opacity: 0 }}
                // textTransform="capitalize"
              >
                {formatDistanceToNow(work.released, { locale: ms })} lalu
              </Box>
              <Box
                opacity="0"
                pos="absolute"
                inset="0"
                transition="all 0.2s ease-out"
                _groupHover={{ opacity: 1 }}
              >
                {format(work.released, 'd MMMM yyy', { locale: ms })}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </LinkOverlay>

      {/* {work.spotify && (
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
      )} */}
    </LinkBox>
  );
}

function listArtists(names) {
  return names.map((name) => name.replace(/ /g, '\u00A0')).join(', ');
}

function listWriters(composers, writers) {
  composers = composers || [];
  writers = writers || [];

  return [...new Set([...composers, ...writers])]
    .map((name) => name.replace(/ /g, '\u00A0'))
    .join(', ');
}
