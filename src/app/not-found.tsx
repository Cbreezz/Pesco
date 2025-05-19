"use client";

import { Box, Heading, Text, VStack, Button, Container, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaProjectDiagram, FaHeadset } from "react-icons/fa";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function NotFound() {
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
          <Heading
            fontSize={{ base: "6xl", md: "8xl" }}
            textAlign="center"
            variant="gradient"
          >
            404
          </Heading>
          
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            maxW="2xl"
          >
            Oops! The page you're looking for seems to have vanished into thin air.
          </Text>

          <HStack spacing={4}>
            <Button
              as={Link}
              href="/"
              leftIcon={<FaHome />}
              variant="gradient"
              size="lg"
            >
              Return Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              leftIcon={<FaArrowLeft />}
              variant="outline"
              size="lg"
            >
              Go Back
            </Button>
          </HStack>

          <Box
            mt={12}
            p={8}
            borderRadius="xl"
            bg="white"
            boxShadow="xl"
            layerStyle="cardHover"
          >
            <VStack spacing={4}>
              <Text fontSize="lg" fontWeight="medium">
                Need help finding what you're looking for?
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
