import { useColorModeValue } from '@chakra-ui/color-mode';
import { Heading } from '@chakra-ui/layout';
import React from 'react';

export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight="600"
        lineHeight="0.9"
        letterSpacing="tight"
        transform="skew(-6deg)"
      >
        {title}
      </Heading>

      <Heading
        as="h3"
        mt="2"
        // fontFamily="body"
        fontSize="2xl"
        fontWeight="400"
        lineHeight="0.9"
        // letterSpacing="0.1em"
        // textTransform="uppercase"
        // opacity="0.6"
        color={useColorModeValue('gray.600', 'gray.500')}
      >
        {subtitle}
      </Heading>
    </>
  );
}
