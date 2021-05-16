import { Badge } from '@chakra-ui/react';
import { readableColor } from 'polished';
import React from 'react';

export default function SmallBadge({ children, color, ...props }) {
  return (
    <Badge
      // bg="rgba(0,0,0,0.7)"
      d="inline-block"
      bg={color || '#fff'}
      color={color ? readableColor(color) : '#000'}
      fontSize="0.6rem"
      fontFamily="body"
      // fontFamily="heading"
      fontWeight="800"
      p="0.1em 0.5em"
      lineHeight="1.2"
      // letterSpacing="tight"
      border="0"
      borderRadius="full"
      // shadow={`0 0 0 1px ${rgba(color ? readableColor(color) : '#000', 1)}`}
      // mr="1"
      {...props}
    >
      {children}
    </Badge>
  );
}
