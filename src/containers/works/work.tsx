import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { format, formatDistanceToNow, isAfter, subMonths } from 'date-fns';
import { ms } from 'date-fns/locale';
import { useMeasure } from 'react-use';

import Img from '../../components/image';
import SmallBadge from '../../components/small-badge';

export default function Work({ work }) {
  const coverURL = work.data.artworkMedium
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_300/${work.data.artworkMedium}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_300/https://i.ytimg.com/vi/${work.data.youtube}/hqdefault.jpg`;

  const [ref, { height: coverHeight }] = useMeasure();

  const cellHeight = coverHeight + 130;

  return (
    <LinkBox key={work.data.youtube} role="group" h={`${cellHeight}px`}>
      <LinkOverlay href={work.url} isExternal>
        <Flex
          direction="column"
          transition="all 0.5s ease"
          textAlign="center"
          p="6"
          h="full"
        >
          <AspectRatio ref={ref} ratio={1} w="100%">
            <Box
              bg="none"
              borderRadius="lg"
              overflow="hidden"
              transition="all 0.5s ease"
              shadow="lg"
              border="1px solid rgba(0,0,0,0.1)"
              _groupHover={{
                shadow: 'xl',
                transform: 'translateY(-3px)',
              }}
            >
              <Img
                src={coverURL}
                width={300}
                height={300}
                alt={work.title}
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
                {work.me.pro && <SmallBadge>PRO</SmallBadge>}
                {work.me.com && <SmallBadge>COM</SmallBadge>}
                {work.me.arr && <SmallBadge>ARR</SmallBadge>}
                {work.me.eng && <SmallBadge>ENG</SmallBadge>}
                {work.me.mix && <SmallBadge>MIX</SmallBadge>}
                {work.me.mas && <SmallBadge>MAS</SmallBadge>}
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
                {work.title}
              </Box>

              {isAfter(work.released_at, subMonths(new Date(), 1)) && (
                <SmallBadge
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
                  width="100%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  opacity="1"
                  transition="all 0.2s ease-out"
                  _groupHover={
                    work.writers && {
                      opacity: 0,
                      transform: 'translateY(-100%)',
                    }
                  }
                >
                  {listArtists(work.artists)}
                </Box>

                {work.writers && (
                  <Box
                    pos="absolute"
                    inset="0"
                    width="100%"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    opacity="0"
                    transition="all 0.2s ease-out"
                    transform="translateY(50%)"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                  >
                    <span className="font-medium opacity-70">
                      Lagu &amp; Lirik
                    </span>{' '}
                    {listWriters(work.writers)}
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
                {formatDistanceToNow(work.released_at, { locale: ms })} lalu
              </Box>
              <Box
                opacity="0"
                pos="absolute"
                inset="0"
                transition="all 0.2s ease-out"
                _groupHover={{ opacity: 1 }}
              >
                {format(work.released_at, 'd MMMM yyy', { locale: ms })}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}

function listArtists(names?: string[]) {
  return names.map((name) => name.replace(/ /g, '\u00A0')).join(', ');
}

function listWriters(composers?: string[], writers?: string[]) {
  composers = composers || [];
  writers = writers || [];

  return [...new Set([...composers, ...writers])]
    .map((name) => name.replace(/ /g, '\u00A0'))
    .join(', ');
}
