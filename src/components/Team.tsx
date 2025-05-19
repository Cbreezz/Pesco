'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion(Box);

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    image: '/team1.jpg',
    bio: '20+ years of experience in industrial engineering and business leadership.',
    linkedin: '#',
    twitter: '#',
    email: 'john@pesco.com',
  },
  {
    name: 'Sarah Johnson',
    role: 'Technical Director',
    image: '/team2.jpg',
    bio: 'Expert in automation systems and process optimization.',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@pesco.com',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Innovation',
    image: '/team3.jpg',
    bio: 'Specializes in IoT and smart manufacturing solutions.',
    linkedin: '#',
    twitter: '#',
    email: 'michael@pesco.com',
  },
  {
    name: 'Emily Brown',
    role: 'Operations Manager',
    image: '/team4.jpg',
    bio: 'Experienced in supply chain optimization and quality management.',
    linkedin: '#',
    twitter: '#',
    email: 'emily@pesco.com',
  },
];

export default function Team() {
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
            Our Team
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Meet our team of experts dedicated to delivering innovative industrial engineering solutions.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {teamMembers.map((member, index) => (
            <MotionBox
              key={member.name}
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
                <Box position="relative" h="300px">
                  <Image
                    src={member.image}
                    alt={member.name}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </Box>
                <VStack p={6} spacing={4} align="start">
                  <Box>
                    <Heading
                      fontSize="xl"
                      color={useColorModeValue('gray.800', 'white')}
                    >
                      {member.name}
                    </Heading>
                    <Text
                      fontSize="md"
                      color={useColorModeValue('blue.500', 'blue.300')}
                    >
                      {member.role}
                    </Text>
                  </Box>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize="sm"
                  >
                    {member.bio}
                  </Text>
                  <HStack spacing={4} pt={2}>
                    <Icon
                      as={FaLinkedin}
                      w={5}
                      h={5}
                      color="blue.500"
                      cursor="pointer"
                      _hover={{ color: 'blue.600' }}
                    />
                    <Icon
                      as={FaTwitter}
                      w={5}
                      h={5}
                      color="blue.400"
                      cursor="pointer"
                      _hover={{ color: 'blue.500' }}
                    />
                    <Icon
                      as={FaEnvelope}
                      w={5}
                      h={5}
                      color="blue.500"
                      cursor="pointer"
                      _hover={{ color: 'blue.600' }}
                    />
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 