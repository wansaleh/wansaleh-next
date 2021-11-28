import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { ms } from 'date-fns/locale';
import NextLink from 'next/link';
import React from 'react';

import Slash from '../../components/slash';

export default function PostDateTags({ post, showFull = false, ...props }) {
  return (
    <Flex
      wrap="wrap"
      align="center"
      fontSize="xs"
      fontWeight="600"
      letterSpacing="widest"
      textTransform="uppercase"
      color="gray.500"
      {...props}
    >
      {!showFull && (
        <>
          {formatDistanceToNow(parseISO(post.date), { locale: ms })} <Slash />{' '}
        </>
      )}
      {showFull && (
        <>
          {format(parseISO(post.date), 'EEEE, d MMMM yyy', { locale: ms })}{' '}
          <Slash /> Kemaskini{' '}
          {format(parseISO(post.firstPublishedAt), 'd MMMM yyy, h:mm a', {
            locale: ms,
          })}{' '}
          <Slash />{' '}
        </>
      )}

      <Box
        as="ul"
        d="inline"
        sx={{
          li: {
            ':not(:last-of-type):after': { content: '", "', opacity: 0.6 },
          },
        }}
      >
        {post.sysTags.map((tag) => (
          <Box as="li" d="inline" key={tag.id}>
            <NextLink key={tag.id} href={`/blog/tag/${tag.id}`} passHref>
              <Link
                color="brand.500"
                _hover={{
                  color: `${useColorModeValue('black', 'white')} !important`,
                }}
              >
                {tag.name}
              </Link>
            </NextLink>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
