import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid
} from '@chakra-ui/react';
import { usePalette } from 'color-thief-react';
import { parseISO } from 'date-fns';
import Image from 'next/image';

import SmallBadge from './small-badge';

const PALETTENUM = 0;

export default function Featured({ works }) {
  const featuredWorks = works
    .map((work) => ({
      ...work,
      released: parseISO(work.released, new Date())
    }))
    .sort((a, b) => b.released - a.released)
    .filter((work) => !work.hide && work.featured);

  return (
    <Box bg="gray.800" color="white" shadow="0 -10px 30px rgba(0,0,0,0.07)">
      <Flex>
        {featuredWorks.map((work) => (
          <Work work={work} key={work.youtube} />
        ))}
      </Flex>
    </Box>
  );
}

function Work({ work }) {
  const coverURL = work.artwork
    ? `https://res.cloudinary.com/wansaleh/image/fetch/w_600,q_75/${work.artwork}`
    : `https://res.cloudinary.com/wansaleh/image/fetch/w_600,q_75/https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg`;

  const { data: palette } = usePalette(coverURL, 4, 'hex', {
    crossOrigin: 'anonymous'
  });

  return (
    <Box key={work.youtube} flex="1">
      <AspectRatio
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
            layout="fill"
            // width={480}
            // height={work.artwork ? 480 : 360}
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
    </Box>
  );
}
