"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Flex,
  Badge,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaIndustry, FaRobot, FaChartLine, FaCogs, FaLightbulb, FaCheck, FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);

const services = [
  {
    title: 'Industrial Automation',
    description: 'Transform your manufacturing processes with cutting-edge automation solutions.',
    icon: FaRobot,
    color: 'blue',
    caseStudy: {
      title: 'Smart Factory Transformation',
      client: 'Global Manufacturing Corp',
      challenge: 'Inefficient production lines and high operational costs',
      solution: 'Implemented automated assembly lines with IoT sensors',
      results: [
        '40% increase in production efficiency',
        '25% reduction in operational costs',
        '99.9% quality assurance rate'
      ],
      image: '/automation-case.jpg'
    }
  },
  {
    title: 'Process Optimization',
    description: 'Streamline your operations and maximize efficiency with data-driven solutions.',
    icon: FaChartLine,
    color: 'green',
    caseStudy: {
      title: 'Supply Chain Optimization',
      client: 'Logistics Solutions Inc',
      challenge: 'Complex supply chain with multiple bottlenecks',
      solution: 'AI-powered logistics optimization system',
      results: [
        '30% reduction in delivery times',
        '20% decrease in inventory costs',
        '50% improvement in route efficiency'
      ],
      image: '/process-case.jpg'
    }
  },
  {
    title: 'Smart Manufacturing',
    description: 'Leverage Industry 4.0 technologies to create intelligent manufacturing systems.',
    icon: FaIndustry,
    color: 'purple',
    caseStudy: {
      title: 'Digital Factory Implementation',
      client: 'Tech Manufacturing Ltd',
      challenge: 'Outdated manufacturing systems',
      solution: 'Integrated smart manufacturing platform',
      results: [
        '60% increase in production capacity',
        '45% reduction in downtime',
        'Real-time production monitoring'
      ],
      image: '/smart-case.jpg'
    }
  },
  {
    title: 'Quality Control',
    description: 'Ensure consistent quality with advanced inspection and monitoring systems.',
    icon: FaCogs,
    color: 'orange',
    caseStudy: {
      title: 'Automated Quality Assurance',
      client: 'Precision Components Co',
      challenge: 'Inconsistent quality control processes',
      solution: 'Computer vision-based inspection system',
      results: [
        '99.95% defect detection rate',
        '70% faster inspection process',
        'Zero customer returns due to quality'
      ],
      image: '/quality-case.jpg'
    }
  },
  {
    title: 'Energy Management',
    description: 'Optimize energy consumption and reduce costs with smart energy solutions.',
    icon: FaLightbulb,
    color: 'yellow',
    caseStudy: {
      title: 'Energy Optimization Project',
      client: 'Green Manufacturing Inc',
      challenge: 'High energy costs and inefficient usage',
      solution: 'Smart energy management system',
      results: [
        '35% reduction in energy costs',
        '50% decrease in carbon footprint',
        'Real-time energy monitoring'
      ],
      image: '/energy-case.jpg'
    }
  }
];

const processSteps = [
  {
    title: 'Assessment',
    description: 'We analyze your current processes and identify improvement opportunities.'
  },
  {
    title: 'Strategy',
    description: 'We develop a customized solution strategy based on your specific needs.'
  },
  {
    title: 'Implementation',
    description: 'Our experts implement the solution with minimal disruption to your operations.'
  },
  {
    title: 'Optimization',
    description: 'We continuously monitor and optimize the solution for maximum efficiency.'
  },
  {
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure long-term success.'
  }
];

export default function Services() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(services[0]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box 
      as="section" 
      py={{ base: 12, md: 20 }} 
      bg={bgColor}
      role="region"
      aria-label="Our Services"
    >
      <Container maxW="container.xl">
        <Box textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={4}
            color={useColorModeValue('gray.800', 'white')}
          >
            Our Services
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Comprehensive industrial engineering solutions to optimize your operations and drive growth.
          </Text>
        </Box>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 6, md: 8 }} 
          mb={{ base: 12, md: 16 }}
        >
          {services.map((service, index) => (
            <MotionBox
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                bg={cardBg}
                p={{ base: 6, md: 8 }}
                borderRadius="lg"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                cursor="pointer"
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(service);
                  }
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                <VStack spacing={4} align="start">
                  <Icon
                    as={service.icon}
                    w={{ base: 8, md: 10 }}
                    h={{ base: 8, md: 10 }}
                    color={`${service.color}.500`}
                  />
                  <Heading
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    {service.title}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    {service.description}
                  </Text>
                  <Button
                    colorScheme={service.color}
                    variant="ghost"
                    size={{ base: 'sm', md: 'md' }}
                    mt={2}
                    rightIcon={<FaArrowRight />}
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Process Flow Diagram */}
        <Box mb={{ base: 12, md: 16 }}>
          <Heading
            fontSize={{ base: 'xl', md: '3xl' }}
            mb={{ base: 6, md: 8 }}
            textAlign="center"
            color={useColorModeValue('gray.800', 'white')}
          >
            Our Process
          </Heading>
          <SimpleGrid 
            columns={{ base: 1, md: 5 }} 
            spacing={{ base: 6, md: 8 }}
            role="list"
            aria-label="Our service process steps"
          >
            {processSteps.map((step, index) => (
              <MotionBox
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
              >
                <Box
                  bg={cardBg}
                  p={{ base: 4, md: 6 }}
                  borderRadius="lg"
                  boxShadow="md"
                  position="relative"
                >
                  <VStack spacing={4} align="center" textAlign="center">
                    <Badge
                      colorScheme="blue"
                      fontSize={{ base: 'md', md: 'lg' }}
                      px={4}
                      py={1}
                      borderRadius="full"
                    >
                      {index + 1}
                    </Badge>
                    <Heading
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={useColorModeValue('gray.800', 'white')}
                    >
                      {step.title}
                    </Heading>
                    <Text
                      color={useColorModeValue('gray.600', 'gray.400')}
                      fontSize={{ base: 'xs', md: 'sm' }}
                    >
                      {step.description}
                    </Text>
                  </VStack>
                  {index < processSteps.length - 1 && !isMobile && (
                    <Box
                      position="absolute"
                      top="50%"
                      right="-4"
                      transform="translateX(100%)"
                      display={{ base: 'none', md: 'block' }}
                    >
                      <Icon
                        as={FaCheck}
                        w={6}
                        h={6}
                        color="blue.500"
                        aria-hidden="true"
                      />
                    </Box>
                  )}
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* Case Study Modal */}
        <Modal 
          isOpen={isOpen} 
          onClose={onClose} 
          size={{ base: 'full', md: 'xl' }}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedService.caseStudy.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={6} align="stretch">
                <Image
                  src={selectedService.caseStudy.image}
                  alt={`Case study for ${selectedService.caseStudy.title}`}
                  borderRadius="md"
                  loading="lazy"
                />
                <Box>
                  <Text fontWeight="bold" mb={2}>Client</Text>
                  <Text>{selectedService.caseStudy.client}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>Challenge</Text>
                  <Text>{selectedService.caseStudy.challenge}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>Solution</Text>
                  <Text>{selectedService.caseStudy.solution}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>Results</Text>
                  <List spacing={2}>
                    {selectedService.caseStudy.results.map((result, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FaCheck} color="green.500" />
                        {result}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
