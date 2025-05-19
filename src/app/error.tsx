"use client";

import { Box, Heading, Text, VStack, Button, Container, HStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHome, FaRedo, FaProjectDiagram, FaHeadset, FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background Gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="brand.50"
        opacity={0.1}
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionVStack
          spacing={8}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            p={6}
            borderRadius="full"
            bg="brand.100"
            color="brand.500"
            fontSize="4xl"
          >
            <FaExclamationTriangle />
          </Box>

          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
            variant="gradient"
          >
            Something went wrong!
          </Heading>

          <Box
            p={6}
            borderRadius="xl"
            bg="white"
            boxShadow="xl"
            layerStyle="cardHover"
            maxW="2xl"
            width="full"
          >
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg">
                {error.message || "An unexpected error occurred"}
              </Text>
              {error.digest && (
                <Badge variant="subtle" alignSelf="flex-start">
                  Error ID: {error.digest}
                </Badge>
              )}
            </VStack>
          </Box>

          <HStack spacing={4}>
            <Button
              onClick={reset}
              leftIcon={<FaRedo />}
              variant="gradient"
              size="lg"
            >
              Try Again
            </Button>
            <Button
              as={Link}
              href="/"
              leftIcon={<FaHome />}
              variant="outline"
              size="lg"
            >
              Return Home
            </Button>
          </HStack>

          <Box
            mt={8}
            p={8}
            borderRadius="xl"
            bg="white"
            boxShadow="xl"
            layerStyle="cardHover"
          >
            <VStack spacing={4}>
              <Text fontSize="lg" fontWeight="medium">
                Need additional help?
              </Text>
              <HStack spacing={4}>
                <Button
                  as={Link}
                  href="/projects"
                  leftIcon={<FaProjectDiagram />}
                  variant="outline"
                >
                  View Projects
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  leftIcon={<FaHeadset />}
                  variant="outline"
                >
                  Contact Support
                </Button>
              </HStack>
            </VStack>
          </Box>
        </MotionVStack>
      </Container>
    </Box>
  );
}
