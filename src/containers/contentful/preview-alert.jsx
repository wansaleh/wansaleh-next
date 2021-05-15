import { Box } from '@chakra-ui/react';
import React from 'react';

export default function PreviewAlert({ preview }) {
  if (!preview) return null;

  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      width="100%"
      zIndex="2000"
      p="3"
      bg="blue.600"
      color="white"
      textAlign="center"
    >
      This page is a preview.{' '}
      <a href="/api/exit-preview" className="underline">
        Click here
      </a>{' '}
      to exit preview mode.
    </Box>
  );
}
