import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Logo(props) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      fill="#36a0c0"
      {...props}
    >
      <path d="M222.61 666.58V222.36h111.05v444.21h111.05V222.36h111.05v444.21h111.06V222.36H777.9v555.27H222.61V666.58zm666.34-111.06V888.7h-777.4V111.31h777.4v444.21zM1000 666.58V.25H.5v999.5H1000V666.58z" />
    </Box>
  );
}
