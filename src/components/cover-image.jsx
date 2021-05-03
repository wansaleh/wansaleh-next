import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import Link from 'next/link';

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
    <Box shadow="lg">
      <NextImage
        src={src}
        alt={`Cover Image for ${title}`}
        layout="responsive"
        width={width}
        height={height}
        css={{ objectFit: 'cover' }}
      />
    </Box>
  );

  return (
    <Box pos="relative" mx={[-4, , , , 0]} {...props}>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}

      {caption && (
        <Box
          fontSize="xs"
          fontWeight="700"
          opacity="0.6"
          pt="2"
          px={[4, 4, 4, 4, 0]}
        >
          {caption}
        </Box>
      )}
    </Box>
  );
}
