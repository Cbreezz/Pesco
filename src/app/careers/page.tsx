"use client";

import React, { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  Link, 
  Container,
  SimpleGrid,
  Badge,
  HStack,
  Icon,
  useColorModeValue,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Divider
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const fadeIn = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('purple.500', 'purple.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientStart = useColorModeValue('purple.500', 'purple.400');
  const gradientEnd = useColorModeValue('purple.700', 'purple.500');

  const departments = ["All", "Engineering", "Operations", "Research & Development", "Management"];

  const jobOpenings = [
    {
      title: "Senior Industrial Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead complex industrial engineering projects and mentor junior engineers.",
      requirements: ["5+ years experience", "Bachelor's in Industrial Engineering", "Project management skills"],
      postedDate: "2024-03-15"
    },
    {
      title: "Process Optimization Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Optimize manufacturing processes and implement efficiency improvements.",
      requirements: ["3+ years experience", "Lean Six Sigma certification", "Data analysis skills"],
      postedDate: "2024-03-10"
    },
    {
      title: "R&D Engineer",
      department: "Research & Development",
      location: "Boston, MA",
      type: "Full-time",
      description: "Research and develop new industrial engineering methodologies and technologies.",
      requirements: ["PhD in Industrial Engineering", "Research experience", "Innovation mindset"],
      postedDate: "2024-03-05"
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <Box 
      as="section" 
      bg={bgColor}
      color={textColor}
      minH="100vh" 
      py={{ base: 12, md: 20 }}
      role="main"
      aria-label="Careers section"
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {/* Hero Section */}
          <MotionVStack
            spacing={{ base: 4, md: 6 }}
            initial="initial"
            animate="animate"
            variants={fadeIn(0.1, 1)}
            role="banner"
            aria-label="Careers header"
          >
            <Heading 
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              color={headingColor}
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              as="h1"
            >
              Join Our Team
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              textAlign="center"
              maxW="800px"
              color={textColor}
            >
              Be part of an innovative and dynamic industrial engineering team. We are always looking for talented individuals to grow with us.
            </Text>
          </MotionVStack>

          {/* Search and Filter Section */}
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={4}
            role="search"
            aria-label="Job search and filter"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Box as={FaSearch} color={textColor} />
              </InputLeftElement>
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg={cardBg}
                aria-label="Search jobs"
              />
            </InputGroup>
            <Select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              bg={cardBg}
              aria-label="Filter by department"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </Select>
          </SimpleGrid>

          {/* Job Openings Section */}
          {filteredJobs.length > 0 ? (
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={{ base: 6, md: 8 }}
              role="list"
              aria-label="Available positions"
            >
              {filteredJobs.map((job, index) => (
                <MotionBox
                  key={index}
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
                      <Badge
                        colorScheme="purple"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        {job.department}
                      </Badge>
                      <Heading 
                        fontSize={{ base: "lg", md: "xl" }}
                        color={headingColor}
                        noOfLines={2}
                      >
                        {job.title}
                      </Heading>
                      <VStack spacing={2} align="start" width="full">
                        <HStack spacing={4} color={textColor} fontSize={{ base: "xs", md: "sm" }}>
                          <Flex align="center" gap={2}>
                            <Box as={FaMapMarkerAlt} />
                            <Text>{job.location}</Text>
                          </Flex>
                          <Flex align="center" gap={2}>
                            <Box as={FaClock} />
                            <Text>{job.type}</Text>
                          </Flex>
                        </HStack>
                        <Text 
                          fontSize={{ base: "sm", md: "md" }}
                          color={textColor}
                          noOfLines={3}
                        >
                          {job.description}
                        </Text>
                        <Divider borderColor={`${accentColor}20`} />
                        <VStack spacing={2} align="start" width="full">
                          <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                            Requirements:
                          </Text>
                          {job.requirements.map((req, idx) => (
                            <HStack key={idx} spacing={2}>
                              <Box as={FaBriefcase} color={accentColor} />
                              <Text fontSize="sm" color={textColor}>{req}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                      <Link 
                        href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                        _hover={{ textDecoration: "none" }}
                        width="full"
                      >
                        <Button
                          colorScheme="purple"
                          variant="outline"
                          size={{ base: "sm", md: "md" }}
                          width="full"
                          rightIcon={<FaArrowRight />}
                          _hover={{
                            bg: `linear-gradient(to-r, ${gradientStart}, ${gradientEnd})`,
                            color: "white",
                            transform: "translateX(5px)",
                          }}
                          transition="all 0.3s ease-in-out"
                          aria-label={`Apply for ${job.title} position`}
                        >
                          Apply Now
                        </Button>
                      </Link>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          ) : (
            <MotionVStack 
              spacing={6}
              initial="initial"
              animate="animate"
              variants={fadeIn(0.2, 1)}
              role="status"
              aria-label="No positions available"
            >
              <Text fontSize="xl" color={textColor}>🚧 No Open Positions Available 🚧</Text>
              <Text fontSize="md" color={textColor}>
                But we'd still love to hear from you! Submit your resume below.
              </Text>
              <Link href="/careers/apply">
                <Button
                  colorScheme="purple"
                  size={{ base: "md", md: "lg" }}
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    bg: `linear-gradient(to-r, ${gradientStart}, ${gradientEnd})`,
                    color: "white",
                    transform: "translateX(5px)",
                  }}
                  transition="all 0.3s ease-in-out"
                >
                  Submit Your Resume
                </Button>
              </Link>
            </MotionVStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Careers;
