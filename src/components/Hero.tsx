"use client";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);

const Hero = () => {
  return (
    <MotionBox
      bgImage="url('/Eng2.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 10, md: 16 }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }}
      transition={{ duration: 8, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
    >
      <VStack
        gap={{ base: 4, md: 6 }}
        maxW="800px"
        position="relative"
        zIndex={2}
        w="full"
      >
        <MotionHeading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Engineering the Future, Today
        </MotionHeading>
        <MotionText
          fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
          color="gray.300"
          px={{ base: 2, md: 6 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Pioneering innovative solutions that drive automation, efficiency, and sustainable industrial growth.
        </MotionText>
        <VStack spacing={4} direction={{ base: "column", md: "row" }}>
          <NextLink href="/contact" passHref>
            <MotionButton
              size="lg"
              colorScheme="blue"
              w={{ base: "full", md: "auto" }} 
              _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Contact Us
            </MotionButton>
          </NextLink>
          <NextLink href="/about" passHref>
            <MotionButton
              size="lg"
              colorScheme="gray"
              w={{ base: "full", md: "auto" }} 
              _hover={{ bg: "gray.600", transform: "scale(1.05)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Learn More
            </MotionButton>
          </NextLink>
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export default Hero;
