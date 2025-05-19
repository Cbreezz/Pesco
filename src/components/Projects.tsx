'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Smart Factory Automation',
    description: 'Implemented advanced automation systems for a leading manufacturing facility, resulting in 40% increased productivity.',
    image: '/project1.jpg',
    category: 'Automation',
    year: '2023',
  },
  {
    title: 'Industrial IoT Integration',
    description: 'Developed and deployed IoT solutions for real-time monitoring and predictive maintenance across multiple plants.',
    image: '/project2.jpg',
    category: 'IoT',
    year: '2022',
  },
  {
    title: 'Energy Management System',
    description: 'Designed and implemented a comprehensive energy management system reducing operational costs by 25%.',
    image: '/project3.jpg',
    category: 'Energy',
    year: '2023',
  },
  {
    title: 'Quality Control Automation',
    description: 'Created automated quality control systems using computer vision and machine learning.',
    image: '/project4.jpg',
    category: 'Quality',
    year: '2022',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Optimized supply chain operations using advanced analytics and automation.',
    image: '/project5.jpg',
    category: 'Supply Chain',
    year: '2023',
  },
  {
    title: 'Smart Warehouse Solution',
    description: 'Implemented smart warehouse management system with automated inventory tracking.',
    image: '/project6.jpg',
    category: 'Warehouse',
    year: '2022',
  },
];

export default function Projects() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            mb={4}
            color={useColorModeValue('gray.800', 'white')}
          >
            Our Projects
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Explore our portfolio of successful industrial engineering projects that have transformed businesses across various sectors.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                <Box position="relative" h="200px">
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="blue"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {project.category}
                  </Badge>
                </Box>
                <Box p={6}>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue('gray.500', 'gray.400')}
                    mb={2}
                  >
                    {project.year}
                  </Text>
                  <Heading
                    fontSize="xl"
                    mb={2}
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    {project.title}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize="md"
                  >
                    {project.description}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 