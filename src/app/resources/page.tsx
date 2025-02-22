"use client";

import React, { useState } from "react";
import { Box, Heading, Text, SimpleGrid, VStack, Input, Select, Button, Card, CardBody } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const resources = [
  { id: 1, title: "Efficiency Optimization Guide", category: "Guides", description: "Learn how to optimize industrial processes for maximum efficiency." },
  { id: 2, title: "Automation Tools Overview", category: "Tools", description: "Explore the latest automation tools used in industrial engineering." },
  { id: 3, title: "Industrial Safety Standards", category: "Guides", description: "Stay up-to-date with the latest industry safety protocols." },
  { id: 4, title: "Top Engineering FAQs", category: "FAQs", description: "Get answers to the most commonly asked questions in industrial engineering." },
];

const categories = ["All", "Guides", "Tools", "FAQs"];

const ResourcesPage = () => {
  const router = useRouter();  // ✅ Moved inside the component
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource =>
    (selectedCategory === "All" || resource.category === selectedCategory) &&
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" py={16} px={10}>
      <VStack spacing={6} mb={8} textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>Resources</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">Find guides, tools, and FAQs to help you navigate industrial engineering.</Text>
      </VStack>
      
      <VStack spacing={4} maxW="800px" mx="auto" mb={6}>
        <Input
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="gray.800"
          color="white"
        />
        <Select bg="gray.800" color="white" maxW={{ base: '100%', md: '300px' }} overflowX="hidden"
          _hover={{ bg: 'gray.700' }} _focus={{ bg: 'gray.700' }} _expanded={{ bg: 'gray.700' }}
          value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category} value={category} style={{ background: '#2D3748', color: 'white' }}>{category}</option>
          ))}
        </Select>
      </VStack>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="1000px" mx="auto" alignItems="stretch">
        {filteredResources.map(resource => (
          <motion.div key={resource.id} whileHover={{ scale: 1.05 }}>
            <Card bg="gray.800" color="white" p={6} rounded="lg" shadow="lg" height="100%">
              <CardBody>
                <Heading fontSize="xl" mb={2}>{resource.title}</Heading>
                <Text fontSize="md" color="gray.400" mb={4}>{resource.description}</Text>
                <Button colorScheme="blue" size="sm" onClick={() => router.push(`/resources/${resource.id}`)}>
                  View More
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ResourcesPage;
