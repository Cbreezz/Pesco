"use client";

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionHeading = motion(Heading);
const MotionDiv = motion.div;

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="gray.900"
      color="white"
      textAlign="center"
      px={6}
      position="relative"
      overflow="hidden"
    >
      <VStack spacing={6} position="relative" zIndex={1}>
        {/* Falling & Glitching 404 */}
        <MotionHeading
          fontSize={{ base: "6xl", md: "9xl" }}
          fontWeight="bold"
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            textShadow: [
              "2px 2px 0px #ff00ff, -2px -2px 0px #00ffff",
              "-2px -2px 0px #ff00ff, 2px 2px 0px #00ffff",
              "2px -2px 0px #ff00ff, -2px 2px 0px #00ffff",
              "-2px 2px 0px #ff00ff, 2px -2px 0px #00ffff",
            ],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ scale: 1.05 }}
        >
          404
        </MotionHeading>

        {/* Error Message with Fade-in Effect */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400">
            Oops! The page you are looking for does not exist.
          </Text>
        </MotionDiv>

        {/* Animated Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/">
            <Button
              colorScheme="blue"
              size="lg"
              _hover={{
                boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.7)",
                transition: "0.3s ease-in-out",
              }}
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default NotFound;
