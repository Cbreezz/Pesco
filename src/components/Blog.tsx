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
  Button,
  Flex,
  Avatar,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const MotionBox = motion(Box);

const blogPosts = [
  {
    title: 'The Future of Industrial Automation',
    excerpt: 'Exploring the latest trends and technologies shaping the future of industrial automation and manufacturing.',
    image: '/blog1.jpg',
    category: 'Technology',
    date: 'March 15, 2024',
    author: 'John Smith',
    authorImage: '/team1.jpg',
    readTime: '5 min read',
  },
  {
    title: 'Sustainable Manufacturing Practices',
    excerpt: 'How companies are implementing eco-friendly practices in their manufacturing processes.',
    image: '/blog2.jpg',
    category: 'Sustainability',
    date: 'March 10, 2024',
    author: 'Sarah Johnson',
    authorImage: '/team2.jpg',
    readTime: '4 min read',
  },
  {
    title: 'IoT in Industrial Engineering',
    excerpt: 'The impact of Internet of Things on modern industrial engineering and process optimization.',
    image: '/blog3.jpg',
    category: 'IoT',
    date: 'March 5, 2024',
    author: 'Michael Chen',
    authorImage: '/team3.jpg',
    readTime: '6 min read',
  },
];

export default function Blog() {
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
            Latest Insights
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Stay updated with our latest articles and insights on industrial engineering and technology.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post, index) => (
            <MotionBox
              key={post.title}
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
                    src={post.image}
                    alt={post.title}
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
                    {post.category}
                  </Badge>
                </Box>
                <Box p={6}>
                  <HStack spacing={4} mb={4}>
                    <Avatar size="sm" src={post.authorImage} name={post.author} />
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
                      {post.author}
                    </Text>
                  </HStack>
                  <Heading
                    fontSize="xl"
                    mb={2}
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    {post.title}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize="md"
                    mb={4}
                  >
                    {post.excerpt}
                  </Text>
                  <Flex justify="space-between" align="center">
                    <HStack spacing={4}>
                      <HStack spacing={1}>
                        <FaCalendarAlt color={useColorModeValue('gray.500', 'gray.400')} />
                        <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
                          {post.date}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
                        {post.readTime}
                      </Text>
                    </HStack>
                    <Button
                      colorScheme="blue"
                      variant="ghost"
                      size="sm"
                      _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}
                    >
                      Read More
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={12}>
          <Button
            colorScheme="blue"
            size="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.3s"
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 