import { Badge } from '@chakra-ui/react';
import { readableColor, rgba } from 'polished';

// import { getDarkest } from '../lib/color-helpers';

export default function SmallBadge({ children, colors, ...props }) {
  return (
    <Badge
      // bg="rgba(0,0,0,0.7)"
      bg={colors ? colors[0] : '#fff'}
      color={colors ? readableColor(colors[0]) : '#000'}
      fontSize="0.65rem"
      p="0.2em 0.3em"
      lineHeight="1"
      letterSpacing="tight"
      shadow={`0 0 0 1.5px ${rgba(
        colors ? readableColor(colors[0]) : '#000',
        0.4
      )}`}
      // mr="1"
      {...props}
    >
      {children}
    </Badge>
  );
}
