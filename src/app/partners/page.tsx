"use client";

import React from "react";
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  Button, 
  Container,
  Badge,
  HStack,
  useColorModeValue,
  Flex,
  Icon,
  Divider,
  Image,
  Link
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHandshake, FaIndustry, FaUniversity, FaBuilding, FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const fadeIn = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

const partnerCategories = [
  {
    title: "Industry Partners",
    description: "Collaborate with leading industrial companies to drive innovation and efficiency.",
    icon: FaIndustry,
    benefits: [
      "Access to cutting-edge technology",
      "Joint research opportunities",
      "Shared expertise and resources"
    ]
  },
  {
    title: "Academic Partners",
    description: "Partner with educational institutions to shape the future of industrial engineering.",
    icon: FaUniversity,
    benefits: [
      "Research collaboration",
      "Student internship programs",
      "Knowledge exchange"
    ]
  },
  {
    title: "Technology Partners",
    description: "Work with technology providers to implement innovative solutions.",
    icon: FaBuilding,
    benefits: [
      "Early access to new technologies",
      "Custom solution development",
      "Technical support and training"
    ]
  }
];

const PartnersPage = () => {
  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('purple.500', 'purple.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientStart = useColorModeValue('purple.500', 'purple.400');
  const gradientEnd = useColorModeValue('purple.700', 'purple.500');

  return (
    <Box 
      as="section" 
      bg={bgColor}
      color={textColor}
      minH="100vh" 
      py={{ base: 12, md: 20 }}
      role="main"
      aria-label="Partners section"
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
            aria-label="Partners header"
          >
            <Heading 
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              color={headingColor}
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              as="h1"
            >
              Our Partners
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              textAlign="center"
              maxW="800px"
              color={textColor}
            >
              Join our network of industry leaders, academic institutions, and technology providers to drive innovation in industrial engineering.
            </Text>
          </MotionVStack>

          {/* Partner Categories */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={{ base: 6, md: 8 }}
            role="list"
            aria-label="Partner categories"
          >
            {partnerCategories.map((category, index) => (
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
                    <HStack spacing={3}>
                      <Box as={category.icon} color={accentColor} fontSize="2xl" />
                      <Heading 
                        fontSize={{ base: "lg", md: "xl" }}
                        color={headingColor}
                      >
                        {category.title}
                      </Heading>
                    </HStack>
                    <Text 
                      fontSize={{ base: "sm", md: "md" }}
                      color={textColor}
                    >
                      {category.description}
                    </Text>
                    <Divider borderColor={`${accentColor}20`} />
                    <VStack spacing={2} align="start" width="full">
                      <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                        Benefits:
                      </Text>
                      {category.benefits.map((benefit, idx) => (
                        <HStack key={idx} spacing={2}>
                          <Box as={FaHandshake} color={accentColor} />
                          <Text fontSize="sm" color={textColor}>{benefit}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Call to Action */}
          <MotionVStack
            spacing={6}
            initial="initial"
            animate="animate"
            variants={fadeIn(0.4, 1)}
            role="complementary"
            aria-label="Partner with us"
            bg={cardBg}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            border="1px solid"
            borderColor={`${accentColor}20`}
          >
            <Heading 
              fontSize={{ base: "xl", md: "2xl" }}
              color={headingColor}
              textAlign="center"
            >
              Become a Partner
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              textAlign="center"
              maxW="600px"
            >
              Join our network of partners and be part of the future of industrial engineering. Together, we can drive innovation and create lasting impact.
            </Text>
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
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
                Partner With Us
              </Button>
            </Link>
          </MotionVStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default PartnersPage; 