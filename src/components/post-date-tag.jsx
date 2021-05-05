import { Box, Link } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';

export default function PostDateTags({ post, showFull = false, ...props }) {
  return (
    <Box
      fontSize="xs"
      fontWeight="600"
      letterSpacing="widest"
      textTransform="uppercase"
      {...props}
    >
      {format(parseISO(post.date), `${showFull ? 'EEEE, ' : ''}d MMMM yyy`)}{' '}
      &middot;{' '}
      {showFull && (
        <>
          Updated {format(parseISO(post.updatedAt), 'd MMMM yyy, hh:mm a')}{' '}
          &middot;{' '}
        </>
      )}
      <Box
        d="inline-block"
        sx={{ a: { ':not(:last-of-type):after': { content: '", "' } } }}
      >
        {post.tags.map((tag) => (
          <NextLink key={tag.slug} href={`/blog/tag/${tag.slug}`} passHref>
            <Link>{tag.title}</Link>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
}
