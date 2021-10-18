import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Img from '../../components/image';
import Markdown from '../../components/markdown';

export default function CoverImage({
  src,
  title,
  height,
  width,
  slug = null,
  caption = null,
  ...props
}) {
  const image = (
    <Img
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      cloudinary
    />
  );

  return (
    <Box pos="relative" maxW="1800" mx="auto" {...props}>
      {slug ? (
        <NextLink as={`/blog/${slug}`} href="/blog/[slug]">
          <Link
            aria-label={title}
            transition="all 0.3s ease"
            d="block"
            shadow="lg"
            overflow="hidden"
            pos="relative"
          >
            {image}
          </Link>
        </NextLink>
      ) : (
        <Box
          shadow="lg"
          overflow="hidden"
          pos="relative"
          transition="all 0.3s ease"
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
              color: useColorModeValue('gray.600', 'gray.400'),
            },
          }}
        >
          <Markdown noTOC>{caption}</Markdown>
        </Box>
      )}
    </Box>
  );
}
