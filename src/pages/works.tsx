import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import { Fragment, useState } from 'react';

import Head from '../components/head';
import Work from '../containers/works/work';

export default function DiscographyPage({ works }) {
  const [curPerson, setPerson] = useState('all');
  const [curGenre, setGenre] = useState('all');

  const allWorks = (works || [])
    .map((work) => ({
      ...work,
      artists: work.artists
        .filter(({ role }) => role.tag === 'primary')
        .map(({ artist }) => artist.name),
      writers: work.artists
        .filter(({ role }) => role.tag === 'writing')
        .map(({ artist }) => artist.name),
      genres: work.genres.map((genre) => genre.genre.title),
      released_at: parseISO(work.released_at),
      me: {
        // 87 is my id in diskograf
        pro: work.artists
          .filter(({ role }) => role.title === 'Producer')
          .some(({ artist }) => artist.id === 87),
        com: work.artists
          .filter(({ role }) => role.title === 'Composer')
          .some(({ artist }) => artist.id === 87),
        arr: work.artists
          .filter(({ role }) => role.title === 'Arranger')
          .some(({ artist }) => artist.id === 87),
        eng: work.artists
          .filter(({ role }) => role.title === 'Recording')
          .some(({ artist }) => artist.id === 87),
        mix: work.artists
          .filter(({ role }) => role.title === 'Mixing')
          .some(({ artist }) => artist.id === 87),
        mas: work.artists
          .filter(({ role }) => role.title === 'Mastering')
          .some(({ artist }) => artist.id === 87),
      },
    }))
    .sort((a, b) => b.released_at - a.released_at);

  let filteredWorks = allWorks.slice();

  const _genres = [...new Set(filteredWorks.map((work) => work.genres).flat())];

  const genres = _genres
    .map((g: string) => ({
      slug: g.toLowerCase().replace(/ /g, '-'),
      title: g,
      total: filteredWorks.filter((work) => work.genres.includes(g)).length,
    }))
    .sort((a, b) => b.total - a.total);

  filteredWorks = filteredWorks.filter((work) =>
    curGenre !== 'all' ? work.genres.includes(curGenre) : true,
  );

  const _people = [
    ...new Set([
      ...filteredWorks.map((work) => work.artists).flat(),
      ...filteredWorks.map((work) => work.writers).flat(),
    ]),
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

  const people = _people.map((art) => ({
    slug: art.toLowerCase().replace(/ /g, '-'),
    name: art,
    total: filteredWorks.filter(
      (work) => work.artists.includes(art) || work.writers.includes(art),
    ).length,
  }));

  filteredWorks = filteredWorks.filter((work) =>
    curPerson !== 'all'
      ? work.artists.includes(curPerson) || work.writers.includes(curPerson)
      : true,
  );

  return (
    <>
      <Head title="By Wan Saleh | Discography" />

      <Box>
        <Container maxW="3xl">
          <Flex
            pt="32"
            pb="8"
            textAlign="center"
            justify="center"
            align="center"
            direction="column"
          >
            <Heading
              as="h2"
              fontSize={['4xl', '5xl', '6xl']}
              fontWeight="600"
              lineHeight="1"
              letterSpacing="tighter"
              transform="skew(-5deg)"
            >
              Diskografi{' '}
              <Box as="span" color="brand.500">
                Pilihan
              </Box>
            </Heading>

            <Box
              mt="4"
              fontSize={['2xl', '3xl']}
              lineHeight="1.1"
              fontWeight="400"
              sx={{ b: { fontSize: '0.75em', fontWeight: '800' } }}
            >
              Lagu-lagu pilihan yang telah saya terbitkan <b>PRO</b>,
              cipta/tulis <b>COM</b>, gubah <b>ARR</b>, jurutera <b>ENG</b>,
              adun <b>MIX</b> atau masterkan <b>MAS</b>.
            </Box>

            <Flex
              as="ul"
              mt="4"
              lineHeight="1.3"
              fontSize="11px"
              wrap="wrap"
              justify="center"
              sx={{ rowGap: 2, columnGap: 3 }}
            >
              <Box as="li">
                <Button
                  variant="link"
                  textTransform="uppercase"
                  fontWeight="800"
                  fontSize="inherit"
                  minW="unset"
                  border="2px solid transparent"
                  p="0 0.4em"
                  borderColor={
                    curGenre === 'all' ? 'currentColor' : 'transparent'
                  }
                  color={curGenre === 'all' ? 'brand.500' : 'currentcolor'}
                  _hover={{
                    color: curGenre === 'all' ? 'brand.500' : 'currentcolor',
                    borderColor: 'currentColor',
                  }}
                  _active={{
                    color: curGenre === 'all' ? 'brand.500' : 'currentcolor',
                    opacity: 0.7,
                  }}
                  onClick={() => setGenre('all')}
                >
                  Semua
                </Button>
              </Box>

              {genres.map(({ slug, title }) => (
                <Box as="li" key={slug}>
                  <Button
                    variant="link"
                    textTransform="uppercase"
                    fontWeight="800"
                    fontSize="inherit"
                    minW="unset"
                    border="2px solid transparent"
                    p="0 0.4em"
                    borderColor={
                      curGenre === title ? 'currentColor' : 'transparent'
                    }
                    color={curGenre === title ? 'brand.500' : 'currentcolor'}
                    _hover={{
                      color: curGenre === title ? 'brand.500' : 'currentcolor',
                      borderColor: 'currentColor',
                    }}
                    _active={{
                      color: curGenre === title ? 'brand.500' : 'currentcolor',
                      opacity: 0.7,
                    }}
                    onClick={() => setGenre(title)}
                  >
                    {title}
                  </Button>
                </Box>
              ))}
            </Flex>

            <Box mt="4">
              <Select
                size="sm"
                onChange={(e) => setPerson(e.target.value)}
                borderRadius="md"
                borderWidth="2px"
                // borderColor="rgba(255,255,255,0.25) !important"
                value={curPerson}
              >
                <option value="all">Semua</option>
                {people.map(({ slug, name, total }) => {
                  const totalStr = total > 0 ? `(${total})` : '';
                  return (
                    <option key={slug} value={name}>
                      {name} {totalStr}
                    </option>
                  );
                })}
              </Select>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box pos="relative" zIndex="2">
        {filteredWorks.length === 0 && (
          <Container maxW="6xl" py="10" textAlign="center">
            <Button
              letterSpacing="tight"
              onClick={() => {
                setGenre('all');
                setPerson('all');
              }}
            >
              Tiada keputusan. Reset filter.
            </Button>
          </Container>
        )}

        <SimpleGrid
          columns={[1, 2, 3, 3, 4, 5]}
          spacing="0"
          // mx="3"
          // shadow="0 -10px 30px rgba(0,0,0,0.07)"
          maxW="1800px"
          mx="auto"
        >
          {filteredWorks.map((work) => (
            <Work work={work} key={work.id} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const works = await fetch('https://diskograf.com/api/songs/artist/87').then(
    (r) => r.json(),
  );

  return {
    props: { works },
  };
}
