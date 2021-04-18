import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import { isAfter, parse, subWeeks } from 'date-fns';

export default function Discography({ works }) {
  const allWorks = works
    .map((work) => ({
      ...work,
      releasedate: parse(work.releasedate, 'yyyy-MM-dd', new Date())
    }))
    .sort((a, b) => b.releasedate - a.releasedate);

  return (
    <Box mt="10">
      <SimpleGrid columns={[1, 1, 3]} spacing="20" spacingY="12">
        {allWorks.map((work) => (
          <LinkBox key={work.youtube} textAlign="center">
            <LinkOverlay
              href={`https://youtube.com/watch?v=${work.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AspectRatio
                ratio={2.6}
                overflow="hidden"
                borderRadius="md"
                w="100%"
                maxW="280px"
                // mt="2"
              >
                <Image
                  srcSet={`https://i.ytimg.com/vi/${work.youtube}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg 640w`}
                  sizes="(max-width: 500px) 480px, 640px"
                  src={`https://i.ytimg.com/vi/${work.youtube}/sddefault.jpg`}
                  alt={work.title}
                  position="relative"
                  zIndex="0"
                  w="full"
                  h="full"
                  objectFit="cover"
                  objectPosition="50% 30%"
                  transform="scale(1.1)"
                  pointerEvents="none"
                />
              </AspectRatio>
              <Heading as="h3" fontSize="xl" fontFamily="serif" mt="3">
                <span className="mr-2">{work.song}</span>

                {/* {work.genre && (
                    <Badge
                      // className="ring-1 ring-black ring-opacity-30"
                      fontSize="0.65em"
                      mt="-0.1em"
                    >
                      {work.genre}
                    </Badge>
                  )} */}
                {isAfter(work.releasedate, subWeeks(new Date(), 8)) && (
                  <Badge
                    colorScheme="green"
                    // className="ring-1 ring-black ring-opacity-30"
                    fontSize="0.65em"
                    mt="-0.1em"
                    // ml="1"
                  >
                    New
                  </Badge>
                )}
              </Heading>

              <Box fontSize="sm" opacity="0.7" fontWeight="500">
                by {work.artist}
              </Box>
            </LinkOverlay>
          </LinkBox>
        ))}

        <Flex>
          <Heading as="h3" fontSize="lg" fontFamily="serif">
            And much more
          </Heading>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
