import { Box, Button, Container, Flex, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import { Fragment, useState } from 'react';
import useSWR from 'swr';

import Work from './work';

export default function Discography({ initialWorks }) {
  const [curPerson, setPerson] = useState('all');
  const [curGenre, setGenre] = useState('all');

  const { data } = useSWR(`/api/works`, { initialData: initialWorks });
  const { works } = data || { works: [] };

  const allWorks = works
    .map((work) => ({
      ...work,
      fields: {
        ...work.fields,
        released: parseISO(work.fields.released, new Date())
      }
    }))
    .sort((a, b) => b.released - a.released);
  // .filter((work) => !work.hidden);

  let filteredWorks = allWorks.slice();

  const _genres = [...new Set(filteredWorks.map((work) => work.fields.genres).flat())];

  const genres = _genres
    .map((g) => ({
      slug: g.toLowerCase().replace(/ /g, '-'),
      title: g,
      total: filteredWorks.filter((work) => work.fields.genres.includes(g)).length
    }))
    .sort((a, b) => b.total - a.total);

  filteredWorks = filteredWorks.filter((work) =>
    curGenre !== 'all' ? work.fields.genres.includes(curGenre) : true
  );

  const _people = [
    ...new Set([
      ...filteredWorks.map((work) => work.fields.artists).flat(),
      ...filteredWorks.map((work) => work.fields.composers).flat(),
      ...filteredWorks.map((work) => work.fields.writers).flat()
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

  const people = _people.map((art) => ({
    slug: art.toLowerCase().replace(/ /g, '-'),
    name: art,
    total: filteredWorks.filter(
      (work) =>
        work.fields.artists.includes(art) ||
        work.fields.composers?.includes(art) ||
        work.fields.writers?.includes(art)
    ).length
  }));

  filteredWorks = filteredWorks.filter((work) =>
    curPerson !== 'all'
      ? work.fields.artists.includes(curPerson) ||
        work.fields.composers?.includes(curPerson) ||
        work.fields.writers?.includes(curPerson)
      : true
  );

  return (
    <>
      <Box bg="brand.600" bgGradient="linear(to-br, brand.600, brand.800)">
        <Container maxW="6xl">
          <Flex
            py="24"
            textAlign="center"
            justify="center"
            align="center"
            direction="column"
            color="white"
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
              <Box as="span" color="yellow.300">
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
                <Button
                  variant="link"
                  textTransform="uppercase"
                  fontWeight="800"
                  fontSize="inherit"
                  p="0"
                  minW="unset"
                  // letterSpacing="wide"
                  color={curGenre === 'all' ? 'brand.200' : 'white'}
                  _hover={{
                    color: curGenre === 'all' ? 'brand.200' : 'white',
                    textDecoration: 'underline'
                  }}
                  _active={{
                    color: curGenre === 'all' ? 'brand.200' : 'white',
                    opacity: 0.7
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
                    p="0"
                    minW="unset"
                    // letterSpacing="wide"
                    color={curGenre === title ? 'brand.200' : 'white'}
                    _hover={{
                      color: curGenre === title ? 'brand.200' : 'white',
                      textDecoration: 'underline'
                    }}
                    _active={{
                      color: curGenre === title ? 'brand.200' : 'white',
                      opacity: 0.7
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
                borderColor="rgba(255,255,255,0.25) !important"
                value={curPerson}
              >
                <option value="all">Semua</option>
                {people.map(({ slug, name, total }) => (
                  <option key={slug} value={name}>
                    {name} ({total})
                  </option>
                ))}
              </Select>
            </Box>
          </Flex>
        </Container>
      </Box>

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
          <Work work={work} key={work.fields.youtube} />
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
