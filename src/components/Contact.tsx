'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const MotionBox = motion(Box);

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'contact@pesco.com',
    link: 'mailto:contact@pesco.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    content: '123 Industrial Park, Suite 400, New York, NY 10001',
    link: 'https://maps.google.com',
  },
];

export default function Contact() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent',
      description: "We'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setIsSubmitting(false);
  };

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            mb={4}
            color={useColorModeValue('gray.800', 'white')}
          >
            Get in Touch
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Have a question or want to work together? We'd love to hear from you.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="md"
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Your name"
                      _focus={{ borderColor: 'blue.500' }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      _focus={{ borderColor: 'blue.500' }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      _focus={{ borderColor: 'blue.500' }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Your message"
                      rows={6}
                      _focus={{ borderColor: 'blue.500' }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <VStack spacing={8} align="stretch">
              {contactInfo.map((info) => (
                <Box
                  key={info.title}
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.3s"
                >
                  <HStack spacing={4}>
                    <Icon
                      as={info.icon}
                      w={6}
                      h={6}
                      color="blue.500"
                    />
                    <Box>
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color={useColorModeValue('gray.800', 'white')}
                      >
                        {info.title}
                      </Text>
                      <Text
                        as="a"
                        href={info.link}
                        color={useColorModeValue('gray.600', 'gray.400')}
                        _hover={{ color: 'blue.500' }}
                      >
                        {info.content}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}

              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="md"
              >
                <Heading
                  fontSize="xl"
                  mb={4}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  Business Hours
                </Heading>
                <VStack align="start" spacing={2}>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Saturday: 10:00 AM - 4:00 PM
                  </Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Sunday: Closed
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
} 