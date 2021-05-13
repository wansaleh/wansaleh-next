import { Box } from '@chakra-ui/react';
import React from 'react';

export function Slash({ color = 'currentColor', ...props }) {
  return (
    <Box
      as="svg"
      d="inline-block"
      viewBox="0 0 24 24"
      width="1.5em"
      height="1.5em"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      sx={{ color }}
      opacity="0.3"
      // transform="rotate(-5deg)"
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451" />
    </Box>
  );
}
