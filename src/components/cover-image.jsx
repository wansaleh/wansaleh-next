import { Box, Link } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

export default function CoverImage({
  src,
  title,
  caption,
  slug,
  height,
  width,
  ...props
}) {
  const image = (
    <NextImage
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
      css={{
        objectFit: 'cover',
        objectPosition: 'center',
        position: 'relative'
      }}
    />
  );

  return (
    <Box pos="relative" maxW="1800" mx="auto" {...props}>
      {slug ? (
        <Box bg="brand.500" shadow="lg" overflow="hidden" pos="relative">
          <NextLink as={`/blog/${slug}`} href="/blog/[slug]">
            <Link
              aria-label={title}
              transition="all 0.3s ease"
              d="block"
              _hover={{ opacity: 0.8 }}
            >
              {image}
            </Link>
          </NextLink>
        </Box>
      ) : (
        <Box bg="brand.500" shadow="lg" overflow="hidden" pos="relative">
          {image}
        </Box>
      )}

      {caption && (
        <Box
          fontSize="xs"
          fontWeight="700"
          opacity="0.6"
          pt="2"
          px={[4, 4, 0]}
          maxW="3xl"
          mx="auto"
          textAlign="center"
        >
          {caption}
        </Box>
      )}
    </Box>
  );
}
