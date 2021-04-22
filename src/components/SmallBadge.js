import { Badge } from '@chakra-ui/react';

export default function SmallBadge({ children, ...props }) {
  return (
    <Badge
      bg="rgba(0,0,0,0.7)"
      color="white"
      fontSize="0.65rem"
      p="0.2em 0.3em"
      lineHeight="1"
      letterSpacing="tight"
      // mr="1"
      {...props}
    >
      {children}
    </Badge>
  );
}
