import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';

import ContactForm from '../components/contact-form';
import Footer from '../components/footer';
import Head from '../components/head';
import Nav from '../components/nav';

export default function ContactPage() {
  const [showThanks, setShowThanks] = useState(false);

  return (
    <>
      <Head title="Contact" />

      <Nav />

      <Container maxW="7xl" py="20">
        <SimpleGrid columns={[1, 1, 2]} gap="16" py="16" pos="relative">
          <Box zIndex="0">
            <Heading
              fontSize="6xl"
              lineHeight="0.9"
              letterSpacing="tighter"
              mb="2"
            >
              Contact me.
            </Heading>

            <Heading
              fontSize="3xl"
              fontWeight="500"
              lineHeight="0.9"
              letterSpacing="tighter"
              mb="8"
              color="gray.500"
            >
              Let&apos;s get in touch.
            </Heading>

            <Box mt="16" pos="relative">
              <Box
                opacity={showThanks ? 0 : 1}
                pointerEvents={showThanks ? 'none' : 'auto'}
                transition="all 0.3s ease"
                zIndex="0"
                pos="relative"
              >
                <ContactForm setShowThanks={setShowThanks} />
              </Box>

              <Flex
                opacity={!showThanks ? 0 : 1}
                pointerEvents={!showThanks ? 'none' : 'auto'}
                // color="#fff"
                bg="gray.300"
                fontSize="4xl"
                fontWeight="bold"
                letterSpacing="tight"
                transition="all 0.3s ease"
                pos="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                justify="center"
                align="center"
              >
                Thank you!
              </Flex>
            </Box>
          </Box>

          <Box zIndex="-1">
            <Box>
              {/* <NextImage
                src={require('../assets/images/inteam.png')}
                width="600"
                height="809"
                layout="responsive"
                alt="Inteam"
              /> */}
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      <Footer />
    </>
  );
}