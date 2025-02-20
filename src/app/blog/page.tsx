"use client";

import React, { useState } from "react";
import { Box, Heading, Text, SimpleGrid, GridItem, Image, Link, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const fadeIn = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

const categories = ["All", "Automation", "Efficiency", "Manufacturing"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const posts = [
    { title: "The Future of Industrial Engineering", date: "2025-02-01", summary: "Exploring the advancements and trends shaping the future of industrial engineering.", image: "https://via.placeholder.com/600x400", category: "Automation" },
    { title: "Efficiency Optimization Techniques", date: "2025-01-15", summary: "A deep dive into various techniques for optimizing efficiency in industrial operations.", image: "https://via.placeholder.com/600x400", category: "Efficiency" },
    { title: "Automation in Manufacturing", date: "2025-01-10", summary: "How automation is revolutionizing manufacturing processes and enhancing productivity.", image: "https://via.placeholder.com/600x400", category: "Manufacturing" },
  ];

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter(post => post.category === selectedCategory);

  return (
    <Box as="section" bg="gray.800" color="white" minH="100vh" py={10} px={10}>
      <motion.div variants={fadeIn(0.1, 1)}>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4}>Blog</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={8}>
          Welcome to our blog! Stay updated with the latest trends, insights, and stories from the world of industrial engineering.
        </Text>
      </motion.div>
      
      <HStack spacing={2} align="center" justify="center" mb={6}>
        <IconButton
          aria-label="Scroll Left"
          icon={<FaChevronLeft />}
          onClick={() => handleScroll("left")}
          colorScheme="gray"
          variant="solid"
          size="sm"
          visibility={currentIndex > 0 ? "visible" : "hidden"}
        />
        <Box display="flex" justifyContent="center" alignItems="center" width="120px">
          <Button
            onClick={() => setSelectedCategory(categories[currentIndex])}
            colorScheme={selectedCategory === categories[currentIndex] ? "blue" : "gray"}
            size="md"
          >
            {categories[currentIndex]}
          </Button>
        </Box>
        <IconButton
          aria-label="Scroll Right"
          icon={<FaChevronRight />}
          onClick={() => handleScroll("right")}
          colorScheme="gray"
          variant="solid"
          size="sm"
          visibility={currentIndex < categories.length - 1 ? "visible" : "hidden"}
        />
      </HStack>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
        {filteredPosts.map((post, index) => (
          <GridItem key={index}>
            <motion.div variants={fadeIn(index * 0.2, 0.75)} whileHover={{ scale: 1.05 }} className="bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <Image src={post.image} alt={post.title} w="full" h="200px" objectFit="cover" />
              <VStack spacing={4} p={6} align="start">
                <Heading fontSize="xl" color="white">{post.title}</Heading>
                <Text fontSize="sm" color="gray.400">{post.date}</Text>
                <Text fontSize="md" color="gray.300" noOfLines={3}>{post.summary}</Text>
                <Link href={`/blog/${index}`} _hover={{ textDecoration: "none" }}>
                  <Button colorScheme="blue" size="sm">Read More</Button>
                </Link>
              </VStack>
            </motion.div>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blog;
