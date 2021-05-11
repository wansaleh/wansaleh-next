import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';

export default function PageHeader({ title, middle, subtitle }) {
  return (
    <Container maxW="6xl" mt="24" mb="10">
      <Heading
        as="h1"
        fontSize={['6xl', '7xl']}
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
              top: '32.5%',
              height: '50%',
              width: '9999px',
              transform: 'translateX(12px)',
              bg: 'gray.500'
            }
          }}
        >
          {title}
        </Box>
      </Heading>

      {middle}

      <Heading
        as="h2"
        pb="2"
        fontSize={['2xl', '3xl']}
        fontWeight="400"
        lineHeight="1.2"
        letterSpacing="0"
        maxW="2xl"
      >
        {subtitle}
      </Heading>
    </Container>
  );
}
