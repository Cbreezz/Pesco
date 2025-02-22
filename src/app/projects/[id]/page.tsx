"use client";

import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const params = useParams();
  const id = params.id;

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" px={10}>
      <VStack spacing={6}>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Project {id}</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">
          🚧 This project page is currently under construction. Check back soon! 🚧
        </Text>
      </VStack>
    </Box>
  );
};

export default ProjectDetails;
