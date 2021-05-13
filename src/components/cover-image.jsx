import { AspectRatio, Box, Image, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Markdown from './markdown';

export default function CoverImage({ src, title, caption, slug, height, width, ...props }) {
  const image = (
    <AspectRatio ratio={width / height}>
      <Image
        src={`https://res.cloudinary.com/wansaleh/image/fetch/w_${width}/${src}`}
        alt={`Cover Image for ${title}`}
        width="full"
        height="full"
        objectFit="cover"
        objectPosition="center"
        position="relative"
        opacity={useColorModeValue(1, 0.75)}
      />
    </AspectRatio>
  );

  return (
    <Box pos="relative" maxW="1800" mx="auto" {...props}>
      {slug ? (
        <Box shadow="lg" overflow="hidden" pos="relative">
          <NextLink as={`/blog/${slug}`} href="/blog/[slug]">
            <Link
              aria-label={title}
              transition="all 0.3s ease"
              d="block"
              // sx={{
              //   filter: 'grayscale(0.65)'
              // }}
              // _groupHover={{
              //   filter: 'grayscale(0.2)'
              // }}
            >
              {image}
            </Link>
          </NextLink>
        </Box>
      ) : (
        <Box
          // bg="brand.500"
          shadow="lg"
          overflow="hidden"
          pos="relative"
          transition="all 0.3s ease"
          // sx={{
          //   filter: 'grayscale(0.65)'
          // }}
          // _hover={{
          //   filter: 'grayscale(0.2)'
          // }}
        >
          {image}
        </Box>
      )}

      {caption && (
        <Box
          fontSize="xs"
          fontWeight="600"
          color="gray.500"
          pt="2"
          px={[4, 4, 0]}
          maxW="3xl"
          mx="auto"
          textAlign="center"
          sx={{
            a: {
              color: useColorModeValue('gray.600', 'gray.400')
            }
          }}
        >
          <Markdown noTOC>{caption}</Markdown>
        </Box>
      )}
    </Box>
  );
}
