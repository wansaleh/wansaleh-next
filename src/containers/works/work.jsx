import { AspectRatio, Box, Flex, Heading, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { usePalette } from 'color-thief-react';
import { format, formatDistanceToNow, isAfter, subMonths } from 'date-fns';
import { ms } from 'date-fns/locale';
import { readableColor } from 'polished';
import { useMeasure } from 'react-use';

import Img from '../../components/image';
import SmallBadge from '../../components/small-badge';

export default function Work({ work }) {
  const coverURL = work.fields.artwork
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_400/${work.fields.artwork}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_400/https://i.ytimg.com/vi/${work.fields.youtube}/hqdefault.jpg`;

  const coverURLorig = work.fields.artwork
    ? `${work.fields.artwork}`
    : `https://i.ytimg.com/vi/${work.fields.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURLorig, 5, 'hex', {
    crossOrigin: 'anonymous'
  });

  const [ref, { height: coverHeight }] = useMeasure();

  const cellHeight = coverHeight + 130;

  const COLOR = 0;
  const COLORNEXT = palette ? (COLOR + 1) % palette.length : COLOR + 1;

  return (
    <LinkBox key={work.fields.youtube} role="group" h={`${cellHeight}px`}>
      <LinkOverlay href={`https://youtube.com/watch?v=${work.fields.youtube}`} isExternal>
        <Flex
          direction="column"
          bg={palette ? palette[COLOR] : 'gray.800'}
          color={palette ? readableColor(palette[COLOR]) : 'white'}
          transition="all 0.2s ease"
          textAlign="center"
          p="6"
          h="full"
        >
          <AspectRatio ref={ref} ratio={1} w="100%">
            <Box
              bg="none"
              borderRadius="md"
              overflow="hidden"
              transition="all 0.5s ease"
              shadow="lg"
              border="1px solid rgba(0,0,0,0.1)"
              _groupHover={{
                shadow: 'xl',
                transform: 'translateY(-3px)'
              }}
            >
              <Img
                src={coverURL}
                width={300}
                height={300}
                alt={work.fields.song}
                bg="none"
                objectFit="contain"
                pointerEvents="none"
                darkModeDim={false}
              />

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
                {work.fields.pro && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>PRO</SmallBadge>
                )}
                {work.fields.com && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>COM</SmallBadge>
                )}
                {work.fields.arr && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>ARR</SmallBadge>
                )}
                {work.fields.eng && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>ENG</SmallBadge>
                )}
                {work.fields.mix && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>MIX</SmallBadge>
                )}
                {work.fields.mas && (
                  <SmallBadge color={palette && palette[COLORNEXT]}>MAS</SmallBadge>
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
                {work.fields.song}
              </Box>

              {isAfter(work.fields.released, subMonths(new Date(), 1)) && (
                <SmallBadge
                  color={palette && palette[COLORNEXT]}
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
                lineHeight="1.2"
                w="full"
                mb="2"
                pos="relative"
                zIndex="1"
                overflow="hidden"
              >
                <Box
                  opacity="1"
                  transition="all 0.2s ease-out"
                  _groupHover={
                    (work.fields.composers || work.fields.writers) && {
                      opacity: 0,
                      transform: 'translateY(-100%)'
                    }
                  }
                >
                  {listArtists(work.fields.artists)}
                </Box>
                {(work.fields.composers || work.fields.writers) && (
                  <Box
                    pos="absolute"
                    inset="0"
                    opacity="0"
                    transition="all 0.2s ease-out"
                    transform="translateY(50%)"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                  >
                    <span tw="font-medium opacity-70">Ciptaan</span>{' '}
                    {listWriters(work.fields.composers, work.fields.writers)}
                  </Box>
                )}
              </Box>
            </Flex>

            <Box
              fontSize="11px"
              fontWeight="800"
              pos="relative"
              w="full"
              opacity="0.65"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              <Box transition="all 0.2s ease-out" _groupHover={{ opacity: 0 }}>
                {formatDistanceToNow(work.fields.released, { locale: ms })} lalu
              </Box>
              <Box
                opacity="0"
                pos="absolute"
                inset="0"
                transition="all 0.2s ease-out"
                _groupHover={{ opacity: 1 }}
              >
                {format(work.fields.released, 'd MMMM yyy', { locale: ms })}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </LinkOverlay>
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
