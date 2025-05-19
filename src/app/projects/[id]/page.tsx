"use client";

import React from "react";
import { Box, Heading, Text, VStack, Container, useColorModeValue, Button, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaIndustry } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ProjectComingSoon = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientStart = useColorModeValue('blue.400', 'blue.500');
  const gradientEnd = useColorModeValue('purple.500', 'purple.600');
  const buttonGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.500, purple.600)'
  );

  return (
    <Box
      as="main"
      minH="100vh"
      bg={bgColor}
      color={textColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="400px"
        h="400px"
        bg={gradientStart}
        opacity="0.1"
        borderRadius="full"
        filter="blur(80px)"
        transform="translate(30%, -30%)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="400px"
        h="400px"
        bg={gradientEnd}
        opacity="0.1"
        borderRadius="full"
        filter="blur(80px)"
        transform="translate(-30%, 30%)"
      />

      <Container maxW="container.xl" px={4}>
        <MotionVStack
          spacing={8}
          initial="initial"
          animate="animate"
          variants={fadeIn}
          textAlign="center"
        >
          <MotionBox
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              p={6}
              borderRadius="full"
              bg={`${gradientStart}10`}
              display="inline-block"
              mb={4}
              boxShadow="lg"
              border="1px solid"
              borderColor={`${gradientStart}20`}
            >
              <Icon as={FaClock} w={12} h={12} color={gradientStart} />
            </Box>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              bgGradient={buttonGradient}
              bgClip="text"
              mb={4}
              textShadow="2px 2px 4px rgba(0,0,0,0.1)"
            >
              Project Details Coming Soon
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="600px" mx="auto" mb={6}>
              We're currently preparing detailed information about this project. 
              Our team is working hard to bring you comprehensive insights into our innovative solutions.
            </Text>
          </MotionBox>

          {/* Project Preview Card */}
          <MotionBox
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            bg={cardBg}
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            maxW="600px"
            width="full"
            border="1px solid"
            borderColor={`${gradientStart}20`}
            _hover={{
              boxShadow: "2xl",
              borderColor: `${gradientStart}40`,
            }}
            transition="all 0.3s"
          >
            <VStack spacing={6} align="stretch">
              <HStack spacing={4}>
                <Icon as={FaIndustry} w={8} h={8} color={gradientStart} />
                <Heading fontSize="2xl" color={headingColor}>
                  Stay Tuned
                </Heading>
              </HStack>
              <Text>
                We're gathering all the exciting details about this project, including:
              </Text>
              <VStack spacing={3} align="stretch">
                <Text>• Detailed project overview</Text>
                <Text>• Technical specifications</Text>
                <Text>• Implementation process</Text>
                <Text>• Results and achievements</Text>
                <Text>• Client testimonials</Text>
              </VStack>
            </VStack>
          </MotionBox>

          {/* Action Buttons */}
          <MotionBox
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <VStack spacing={4}>
              <Link href="/projects" passHref>
                <Button
                  size="lg"
                  bgGradient={buttonGradient}
                  color="white"
                  leftIcon={<FaArrowLeft />}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                    bgGradient: buttonGradient,
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.3s"
                >
                  Back to Projects
                </Button>
              </Link>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
};

export default ProjectComingSoon;
