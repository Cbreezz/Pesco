"use client";

import React from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" display="flex" justifyContent="center" alignItems="center" textAlign="center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <VStack spacing={6} p={8} bg="gray.800" rounded="lg" shadow="lg" maxW={{ base: "90%", md: "600px" }}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color="yellow.300">Thank You for Applying!</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">We have received your application and will review it soon. You will hear from us shortly.</Text>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/careers">
              <Button colorScheme="blue" size="lg">Back to Careers</Button>
            </Link>
          </motion.div>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default ThankYouPage;
