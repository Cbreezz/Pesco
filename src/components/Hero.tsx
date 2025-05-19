"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);

export default function Hero() {
  const bgGradient = useColorModeValue(
    'linear(to-br, purple.900, purple.800)',
    'linear(to-br, purple.900, purple.800)'
  );
  const textColor = useColorModeValue('white', 'white');
  const headingColor = useColorModeValue('white', 'white');
  const buttonBg = useColorModeValue('white', 'white');
  const buttonHoverBg = useColorModeValue('gray.100', 'gray.100');
  const buttonTextColor = useColorModeValue('purple.900', 'purple.900');

  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: '60vh', md: '100vh' }}
      bgGradient={bgGradient}
      overflow="hidden"
      role="banner"
      aria-label="Hero section"
    >
      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          minH={{ base: '60vh', md: '100vh' }}
          py={{ base: 4, md: 0 }}
        >
          {/* Text Content */}
          <VStack
            align={{ base: 'center', md: 'start' }}
            spacing={{ base: 3, md: 8 }}
            maxW={{ base: '100%', md: '50%' }}
            textAlign={{ base: 'center', md: 'left' }}
            pt={{ base: 16, md: 0 }}
            mt={{ base: 8, md: 0 }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              w="full"
            >
              <Heading
                as="h1"
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="1.2"
                mb={{ base: 2, md: 4 }}
              >
                Transforming Industry Through Innovation
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              w="full"
            >
              <Text
                fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
                color={textColor}
                maxW="600px"
                mb={{ base: 3, md: 8 }}
                px={{ base: 2, md: 0 }}
              >
                We deliver cutting-edge industrial engineering solutions that drive efficiency, 
                sustainability, and growth for businesses worldwide.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              w={{ base: 'full', md: 'auto' }}
            >
              <HStack 
                spacing={4} 
                justify={{ base: 'center', md: 'flex-start' }}
                w={{ base: 'full', md: 'auto' }}
                flexDir={{ base: 'column', sm: 'row' }}
              >
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  bg={buttonBg}
                  color={buttonTextColor}
                  _hover={{ bg: buttonHoverBg }}
                  rightIcon={<Icon as={FaArrowRight} />}
                  aria-label="Get started with our services"
                  w={{ base: 'full', sm: 'auto' }}
                >
                  Get Started
                </Button>
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Learn more about our services"
                  w={{ base: 'full', sm: 'auto' }}
                >
                  Learn More
                </Button>
              </HStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
