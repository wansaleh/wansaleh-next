import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { ms } from 'date-fns/locale';
import NextLink from 'next/link';
import React from 'react';

export default function PostDateTags({ post, showFull = false, ...props }) {
  return (
    <Box
      fontSize={!showFull ? '0.7rem' : 'xs'}
      fontWeight="700"
      letterSpacing="wider"
      textTransform="uppercase"
      color="gray.500"
      {...props}
    >
      {!showFull && (
        <>
          {formatDistanceToNow(parseISO(post.createdAt), { locale: ms })}{' '}
          <span tw="opacity-40">&bull;</span>{' '}
        </>
      )}
      {showFull && (
        <>
          {format(parseISO(post.createdAt), 'EEEE, d MMMM yyy', { locale: ms })}{' '}
          <span tw="opacity-40">&bull;</span> Kemaskini{' '}
          {format(parseISO(post.updatedAt), 'd MMMM yyy, h:mm a', { locale: ms })}{' '}
          <span tw="opacity-40">&bull;</span>{' '}
        </>
      )}

      <Box
        as="ul"
        d="inline"
        sx={{ li: { ':not(:last-of-type):after': { content: '", "', opacity: 0.6 } } }}
      >
        {post.tags.map((tag) => (
          <Box as="li" d="inline" key={tag.slug}>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
}
