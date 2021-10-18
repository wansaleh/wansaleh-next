import { Box, Container, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';

type PageHeaderProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  middle?: string | ReactElement;
};

export default function PageHeader({
  title,
  middle,
  subtitle,
}: PageHeaderProps) {
  return (
    <Container maxW="6xl" mt="24" mb="10">
      <Heading
        as="h1"
        fontSize={['4xl', '5xl', '6xl']}
        fontWeight="600"
        lineHeight="1"
        letterSpacing="tighter"
        transform="skew(-6deg)"
      >
        <Box
          as="span"
          d="inline-block"
          pos="relative"
          sx={{
            ':after': {
              content: '""',
              pos: 'absolute',
              top: '22%',
              height: '58%',
              width: '9999px',
              transform: 'translateX(12px)',
              bg: 'gray.500',
            },
          }}
        >
          {title}
        </Box>
      </Heading>

      {middle}

      <Heading
        as="h2"
        pb="2"
        fontFamily="heading"
        fontSize={['2xl', '3xl']}
        fontWeight="400"
        lineHeight="1.2"
        letterSpacing="tight"
        maxW="3xl"
      >
        {subtitle}
      </Heading>
    </Container>
  );
}
