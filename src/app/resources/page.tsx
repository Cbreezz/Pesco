"use client";

import React, { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  Input, 
  Select, 
  Button, 
  Container,
  Badge,
  HStack,
  useColorModeValue,
  Flex,
  InputGroup,
  InputLeftElement,
  Divider,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaSearch, FaBook, FaTools, FaQuestionCircle, FaDownload, FaArrowRight, FaBookmark, FaShare } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const fadeIn = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

const resources = [
  { 
    id: 1, 
    title: "Efficiency Optimization Guide", 
    category: "Guides", 
    description: "Learn how to optimize industrial processes for maximum efficiency.",
    icon: FaBook,
    downloads: 1234,
    lastUpdated: "2024-03-15",
    tags: ["Process Optimization", "Best Practices", "Case Studies"]
  },
  { 
    id: 2, 
    title: "Automation Tools Overview", 
    category: "Tools", 
    description: "Explore the latest automation tools used in industrial engineering.",
    icon: FaTools,
    downloads: 856,
    lastUpdated: "2024-03-10",
    tags: ["Automation", "Software", "Integration"]
  },
  { 
    id: 3, 
    title: "Industrial Safety Standards", 
    category: "Guides", 
    description: "Stay up-to-date with the latest industry safety protocols.",
    icon: FaBook,
    downloads: 2345,
    lastUpdated: "2024-03-05",
    tags: ["Safety", "Compliance", "Standards"]
  },
  { 
    id: 4, 
    title: "Top Engineering FAQs", 
    category: "FAQs", 
    description: "Get answers to the most commonly asked questions in industrial engineering.",
    icon: FaQuestionCircle,
    downloads: 5678,
    lastUpdated: "2024-03-01",
    tags: ["FAQs", "Troubleshooting", "Solutions"]
  },
];

const categories = ["All", "Guides", "Tools", "FAQs"];

const ResourcesPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('purple.500', 'purple.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientStart = useColorModeValue('purple.500', 'purple.400');
  const gradientEnd = useColorModeValue('purple.700', 'purple.500');

  const filteredResources = resources.filter(resource =>
    (selectedCategory === "All" || resource.category === selectedCategory) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <Box 
      as="section" 
      bg={bgColor}
      color={textColor}
      minH="100vh" 
      py={{ base: 12, md: 20 }}
      role="main"
      aria-label="Resources section"
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {/* Header Section */}
          <MotionVStack
            spacing={{ base: 4, md: 6 }}
            initial="initial"
            animate="animate"
            variants={fadeIn(0.1, 1)}
            role="banner"
            aria-label="Resources header"
          >
            <Heading 
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              color={headingColor}
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              as="h1"
            >
              Resources
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              textAlign="center"
              maxW="800px"
              color={textColor}
            >
              Find guides, tools, and FAQs to help you navigate industrial engineering.
            </Text>
          </MotionVStack>

          {/* Search and Filter Section */}
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={4}
            role="search"
            aria-label="Resource search and filter"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Box as={FaSearch} color={textColor} />
              </InputLeftElement>
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg={cardBg}
                aria-label="Search resources"
              />
            </InputGroup>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              bg={cardBg}
              aria-label="Filter by category"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>
          </SimpleGrid>

          {/* Resources Grid */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={{ base: 6, md: 8 }}
            role="list"
            aria-label="Available resources"
          >
            {filteredResources.map((resource, index) => (
              <MotionBox
                key={resource.id}
                variants={fadeIn(index * 0.2, 0.75)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                role="listitem"
              >
                <Box
                  bg={cardBg}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="xl"
                  height="100%"
                  border="1px solid"
                  borderColor={`${accentColor}20`}
                  _hover={{
                    borderColor: accentColor,
                    boxShadow: `0 0 20px ${accentColor}20`
                  }}
                >
                  <VStack spacing={4} p={{ base: 4, md: 6 }} align="start">
                    <HStack spacing={4} width="full" justify="space-between">
                      <Badge
                        colorScheme="purple"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        {resource.category}
                      </Badge>
                      <HStack spacing={2}>
                        <Tooltip label="Bookmark">
                          <IconButton
                            aria-label="Bookmark resource"
                            icon={<FaBookmark />}
                            variant="ghost"
                            colorScheme="purple"
                            size="sm"
                          />
                        </Tooltip>
                        <Tooltip label="Share">
                          <IconButton
                            aria-label="Share resource"
                            icon={<FaShare />}
                            variant="ghost"
                            colorScheme="purple"
                            size="sm"
                          />
                        </Tooltip>
                      </HStack>
                    </HStack>
                    <HStack spacing={3}>
                      <Box as={resource.icon} color={accentColor} fontSize="xl" />
                      <Heading 
                        fontSize={{ base: "lg", md: "xl" }}
                        color={headingColor}
                        noOfLines={2}
                      >
                        {resource.title}
                      </Heading>
                    </HStack>
                    <Text 
                      fontSize={{ base: "sm", md: "md" }}
                      color={textColor}
                      noOfLines={3}
                    >
                      {resource.description}
                    </Text>
                    <Divider borderColor={`${accentColor}20`} />
                    <VStack spacing={2} align="start" width="full">
                      <HStack spacing={2} wrap="wrap">
                        {resource.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            colorScheme="purple"
                            variant="subtle"
                            fontSize="xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </HStack>
                      <HStack spacing={4} color={textColor} fontSize={{ base: "xs", md: "sm" }}>
                        <Text>{resource.downloads} downloads</Text>
                        <Text>Updated {resource.lastUpdated}</Text>
                      </HStack>
                    </VStack>
                    <Button
                      colorScheme="purple"
                      variant="outline"
                      size={{ base: "sm", md: "md" }}
                      width="full"
                      rightIcon={<FaArrowRight />}
                      leftIcon={<FaDownload />}
                      _hover={{
                        bg: `linear-gradient(to-r, ${gradientStart}, ${gradientEnd})`,
                        color: "white",
                        transform: "translateX(5px)",
                      }}
                      transition="all 0.3s ease-in-out"
                      onClick={() => router.push(`/resources/${resource.id}`)}
                      aria-label={`Download ${resource.title}`}
                    >
                      Download
                    </Button>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
