"use client";

import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const projects = [
  { title: "Automated Assembly Line", description: "AI-driven automation for enhanced efficiency.", image: "/project.png", id: "1" },
  { title: "Energy Optimization Solutions", description: "Reducing waste and improving industrial processes.", image: "/project1.png", id: "2" },
  { title: "Smart Manufacturing Systems", description: "Real-time data analytics to enhance production.", image: "/project2.png", id: "3" },
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" px={10}>
      <VStack spacing={6}>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Our Projects</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">
          Discover how our cutting-edge solutions are transforming industries.
        </Text>
        
        <Box position="relative" width={{ base: "90%", md: "70%" }} height="400px" overflow="hidden" borderRadius="lg" boxShadow="lg">
          <AnimatePresence>
            <motion.div key={currentIndex} variants={fadeVariants} initial="initial" animate="animate" exit="exit" style={{ position: "absolute", width: "100%", height: "100%" }}>
              <Image src={projects[currentIndex].image} alt={projects[currentIndex].title} width="100%" height="100%" objectFit="cover" />
            </motion.div>
          </AnimatePresence>
        </Box>
        
        <VStack spacing={3}>
          <Heading fontSize="xl">{projects[currentIndex].title}</Heading>
          <Text fontSize="md" color="gray.300">{projects[currentIndex].description}</Text>
          <Link href={`/projects/${projects[currentIndex].id}`} passHref>
            <Button colorScheme="blue" size="sm">Learn More</Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Projects;
