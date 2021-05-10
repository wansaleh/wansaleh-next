import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import React from 'react';

export default function PostDateTags({ post, showFull = false, ...props }) {
  return (
    <Box
      fontSize="xs"
      fontWeight="900"
      letterSpacing="widest"
      textTransform="uppercase"
      color="gray.500"
      {...props}
    >
      {showFull && (
        <>
          {format(parseISO(post.date), `${showFull ? 'EEEE, ' : ''}d MMMM yyy`)}{' '}
          <span className="opacity-40">&bull;</span> Updated{' '}
          {format(parseISO(post.updatedAt), 'd MMMM yyy, hh:mm a')}{' '}
          <span className="opacity-40">&bull;</span>{' '}
        </>
      )}
      <Box
        as="ul"
        d="inline-block"
        sx={{ li: { ':not(:last-of-type):after': { content: '" • "', opacity: 0.4 } } }}
      >
        {post.tags.map((tag) => (
          <li className="inline">
            <NextLink key={tag.slug} href={`/blog/tag/${tag.slug}`} passHref>
              <Link
                color="brand.500"
                _hover={{
                  color: `${useColorModeValue('black', 'white')} !important`
                }}
              >
                {tag.title}
              </Link>
            </NextLink>
          </li>
        ))}
      </Box>
    </Box>
  );
}
