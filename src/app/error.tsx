"use client";

import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Error({ reset }: { reset: () => void }) {
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
        {/* Flickering 500 Effect */}
        <motion.h1
          style={{ fontSize: "6rem", fontWeight: "bold" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.02, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
          500
        </motion.h1>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400">
            Oops! Something went wrong on our end.
          </Text>
        </motion.div>

        {/* Animated Try Again Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            colorScheme="red"
            size="lg"
            onClick={() => reset()} // Resets the error boundary
            _hover={{
              boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.7)",
              transition: "0.3s ease-in-out",
            }}
          >
            Try Again
          </Button>
        </motion.div>
      </VStack>
    </Box>
  );
}
