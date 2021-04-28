import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

// import ContactForm from '../components/contact-form';
import Footer from '../components/footer';
import Head from '../components/head';
import Nav from '../components/nav';

export default function ContactPage() {
  // const [showThanks, setShowThanks] = useState(false);

  return (
    <>
      <Head title="By Wan Saleh | Contact" />

      <Nav />

      <Container maxW="7xl">
        <SimpleGrid columns={[1, 1, 2]} gap="16" py="20" pos="relative">
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

            <Box mt="16" pos="relative" fontSize="xl">
              Drop a line to my email. It&apos;s wansaleh [at] gmail [dot] com.
              <br />
              Or DM me on{' '}
              <a
                href="https://twitter.com/wansaleh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </Box>

            {/* <Box mt="16" pos="relative">
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
            </Box> */}
          </Box>

          <Box zIndex="-1">
            <Box>
              <Image
                src={require('../assets/images/sapiens.svg')}
                w="1000px"
                maxW="unset"
                transform="scaleX(-1)"
                alt="Contact"
                ml="-200px"
                filter={useColorModeValue('invert(0)', 'invert(1)')}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      <Footer />
    </>
  );
}
