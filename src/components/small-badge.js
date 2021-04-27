import { Badge } from '@chakra-ui/react';
import { readableColor, rgba } from 'polished';

// import { getDarkest } from '../lib/color-helpers';

export default function SmallBadge({ children, color, ...props }) {
  return (
    <Badge
      // bg="rgba(0,0,0,0.7)"
      d="inline-block"
      bg={color || '#fff'}
      color={color ? readableColor(color) : '#000'}
      fontSize="0.65rem"
      p="0.15em 0.3em"
      lineHeight="1"
      letterSpacing="tight"
      border="0"
      // shadow={`0 0 0 1px ${rgba(color ? readableColor(color) : '#000', 1)}`}
      // mr="1"
      {...props}
    >
      {children}
    </Badge>
  );
}
