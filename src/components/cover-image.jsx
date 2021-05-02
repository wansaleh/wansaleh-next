import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({
  src,
  title,
  caption,
  slug,
  height,
  width
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
      css={{ objectFit: 'cover' }}
    />
  );

  return (
    <Box>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
      {caption && (
        <Box fontSize="xs" fontWeight="700" opacity="0.6" mt="2">
          {caption}
        </Box>
      )}
    </Box>
  );
}
