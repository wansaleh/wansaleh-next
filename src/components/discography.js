import {
  AspectRatio,
  Badge,
  Box,
  chakra,
  Flex,
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
    .filter((work) => !!work.artwork && work.hide !== 'y')
    .map((work) => ({
      ...work,
      releasedate: parse(work.releasedate, 'yyyy-MM-dd', new Date())
    }))
    .sort((a, b) => b.releasedate - a.releasedate);

  return (
    <SimpleGrid columns={[1, 2, 3, 3, 4, 5]} spacing="0">
      <Box p="8" textAlign="right">
        <Heading as="h2" lineHeight="0.9" color="brand.500">
          Selected Discography
        </Heading>
        <Box mt="4" lineHeight="1.3" fontSize="sm" fontWeight="500">
          Selected works that I have produced <b>(PRO)</b>, composed/written
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
        <Box
          bg={data ? data[0] : 'gray.800'}
          color={data ? readableColor(data[0]) : 'white'}
          transition="all 0.2s ease"
          textAlign="center"
          p="4"
        >
          <AspectRatio ratio={1} w="100%">
            <Box shadow="lg">
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
                // transform={work.inteam === 'y' && 'scale(1.1)'}
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

          <Box px="3" pt="3" lineHeight="1">
            <Heading
              as="h3"
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

              {isAfter(work.releasedate, subWeeks(new Date(), 8)) && (
                <SmallBadge colors={data} ml="1.5" mt="0.5">
                  New
                </SmallBadge>
              )}
            </Heading>

            <Flex
              fontSize="xs"
              fontWeight="500"
              mt="1"
              justify="center"
              align="center"
            >
              <Box
                as="span"
                fontWeight="600"
                d="inline-block"
                maxW="85%"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {work.artist}
              </Box>
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
                {formatDistanceToNow(work.releasedate, { addSuffix: true })}
              </span>
              <span className="hidden abs">
                {format(work.releasedate, 'd MMMM YYY')}
              </span>
            </Box>
          </Box>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}
