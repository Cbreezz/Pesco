"use client";

import React from "react";
import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Careers = () => {
  const jobOpenings: { title: string; department: string; description: string }[] = [];

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" py={16} px={10} textAlign="center">
      {/* Hero Section */}
      <VStack spacing={6} mb={12}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">Join Our Team</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" maxW="600px">
          Be part of an innovative and dynamic industrial engineering team. We are always looking for talented individuals to grow with us.
        </Text>
      </VStack>

      {/* Job Openings Section */}
      {jobOpenings.length > 0 ? (
        <VStack spacing={8}>
          {jobOpenings.map((job, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Box bg="gray.800" p={6} rounded="lg" shadow="lg" maxW="600px">
                <Heading fontSize="2xl" color="yellow.300">{job.title}</Heading>
                <Text fontSize="lg" color="gray.300" mt={2}>{job.department}</Text>
                <Text fontSize="md" color="gray.400" mt={2}>{job.description}</Text>
                <Button colorScheme="blue" size="md" mt={4}>Apply Now</Button>
              </Box>
            </motion.div>
          ))}
        </VStack>
      ) : (
        <VStack spacing={6}>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Text fontSize="xl" color="gray.400">🚧 No Open Positions Available 🚧</Text>
          </motion.div>
          <Text fontSize="md" color="gray.500">But we’d still love to hear from you! Submit your resume below.</Text>
          <Link href="/careers/apply">
            <Button colorScheme="blue" size="lg">Submit Your Resume</Button>
          </Link>
        </VStack>
      )}
    </Box>
  );
};

export default Careers;
