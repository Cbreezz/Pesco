"use client";

import React from "react";
import { Box, Heading, Text, SimpleGrid, Grid, GridItem, Image, Flex, useColorModeValue, VStack, Icon, Container, HStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsLightningCharge, BsGear, BsBuilding } from "react-icons/bs";
import { FaAward, FaCertificate, FaCheck, FaTimes, FaWandMagicSparkles } from 'react-icons/fa';
import { MdTimeline, MdBusinessCenter, MdSecurity, MdSpeed } from "react-icons/md";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const MotionVStack = motion(VStack);

const fadeIn = (delay: number = 0, duration: number = 0.75) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration, delay } },
});

const ServiceCard = ({ index, title, icon: Icon, description }: { 
  index: number; 
  title: string; 
  icon: React.ComponentType; 
  description: string; 
}) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'white');
  const descriptionColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      variants={fadeIn(index * 0.2, 0.75)}
      initial="hidden"
      animate="show"
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        rotate: 1,
        transition: { duration: 0.3 }
      }}
      bg={cardBg}
      borderRadius="2xl"
      p={{ base: 4, md: 6 }}
      boxShadow="xl"
      _hover={{
        boxShadow: "2xl",
        bg: cardHoverBg,
      }}
      position="relative"
      overflow="hidden"
      as="li"
      role="listitem"
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        w="100px"
        h="100px"
        bg="blue.400"
        opacity="0.1"
        borderRadius="full"
        transform="translate(30%, -30%)"
        aria-hidden="true"
      />
      <Flex direction="column" h="full" position="relative">
        <Flex alignItems="center" mb={{ base: 3, md: 4 }}>
          <Box
            p={{ base: 2, md: 3 }}
            bgGradient="linear(to-r, blue.400, purple.500)"
            borderRadius="xl"
            color="white"
            fontSize={{ base: "xl", md: "2xl" }}
            mr={{ base: 3, md: 4 }}
            transform="rotate(-5deg)"
            _hover={{ transform: "rotate(0deg)" }}
            transition="transform 0.3s ease"
          >
            <Icon aria-hidden="true" />
          </Box>
          <Heading fontSize={{ base: "lg", md: "xl" }} color={textColor} as="h3">{title}</Heading>
        </Flex>
        <Text fontSize={{ base: "sm", md: "md" }} color={descriptionColor} flex={1}>{description}</Text>
      </Flex>
    </MotionBox>
  );
};

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Pesco was established with a vision to revolutionize industrial engineering solutions.',
  },
  {
    year: '2016',
    title: 'First Major Project',
    description: 'Successfully completed our first large-scale industrial automation project.',
  },
  {
    year: '2018',
    title: 'International Expansion',
    description: 'Expanded operations to multiple countries across Asia and Europe.',
  },
  {
    year: '2020',
    title: 'Innovation Award',
    description: 'Received the Industry Innovation Award for our smart manufacturing solutions.',
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Recognized as a leading industrial engineering solutions provider.',
  },
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
    icon: FaCertificate,
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management System',
    icon: FaAward,
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety',
    icon: FaAward,
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions',
    icon: MdSpeed,
  },
  {
    title: 'Excellence',
    description: 'Delivering the highest quality in everything we do',
    icon: FaAward,
  },
  {
    title: 'Integrity',
    description: 'Building trust through honest and ethical practices',
    icon: MdSecurity,
  },
  {
    title: 'Partnership',
    description: 'Creating lasting relationships with our clients',
    icon: MdBusinessCenter,
  },
];

const comparisonData = {
  pesco: {
    'Project Management': true,
    '24/7 Support': true,
    'Custom Solutions': true,
    'Industry Expertise': true,
    'Quality Assurance': true,
    'Cost-Effective': true,
  },
  competitors: {
    'Project Management': true,
    '24/7 Support': false,
    'Custom Solutions': false,
    'Industry Expertise': true,
    'Quality Assurance': true,
    'Cost-Effective': false,
  },
};

const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  const services = [
    { 
      title: "Industry Expertise", 
      icon: BsBuilding, 
      description: "With decades of experience, we provide top-notch industrial solutions tailored to your needs. Our team of experts ensures that your projects are completed with the highest level of quality and efficiency." 
    },
    { 
      title: "Innovation & Efficiency", 
      icon: BsLightningCharge, 
      description: "We implement cutting-edge technology to streamline processes and boost productivity. By embracing innovation, we help you stay ahead of the competition and achieve your business goals more effectively." 
    },
    { 
      title: "Automation & Control", 
      icon: BsGear, 
      description: "Our advanced automation systems ensure increased productivity and precision. We design and integrate control systems that optimize your operations, reduce downtime, and enhance overall performance." 
    },
  ];

  return (
    <Box 
      as="section" 
      bg={bgColor}
      color="gray.700" 
      py={{ base: 12, md: 20 }} 
      position="relative" 
      overflow="hidden"
      role="region"
      aria-label="About section"
    >
      {/* Subtle Gradient Background */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, white, gray.50)"
        aria-hidden="true"
      />

      {/* Subtle Pattern */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <MotionVStack
          variants={fadeIn(0.1, 1)}
          initial="hidden"
          animate="show"
          spacing={{ base: 8, md: 16 }}
          align="stretch"
        >
          {/* Header Section */}
          <MotionBox
            variants={fadeIn(0.1, 1)}
            initial="hidden"
            animate="show"
            textAlign="left"
            maxW="800px"
          >
            <Flex justify="flex-start" mb={4}>
              <Icon as={FaWandMagicSparkles} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color="purple.500" aria-hidden="true" />
            </Flex>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              mb={{ base: 4, md: 6 }}
              color="gray.800"
              fontWeight="bold"
              as="h2"
            >
              About Us
            </Heading>
            <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} color="gray.600">
              At PESCO, we are committed to driving innovation and efficiency in the industrial engineering sector. 
              Our expertise spans various domains, ensuring we deliver tailored solutions that enhance productivity and operational excellence.
            </Text>
          </MotionBox>

          <Grid 
            templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
            gap={{ base: 8, md: 10 }} 
            alignItems="center"
          >
            <GridItem>
              <MotionBox
                variants={fadeIn(0.3, 1)}
                initial="hidden"
                animate="show"
                position="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Eng1.png"
                  alt="Industrial Engineering facility showing modern manufacturing equipment"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  objectFit="cover"
                  w="full"
                  h={{ base: "250px", sm: "300px", md: "500px" }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
                  borderRadius="2xl"
                  aria-hidden="true"
                />
              </MotionBox>
            </GridItem>

            {/* Right - Services */}
            <GridItem>
              <MotionGrid
                variants={fadeIn(0.4, 1)}
                initial="hidden"
                animate="show"
                templateColumns={{ base: "1fr", md: "1fr" }}
                gap={{ base: 4, md: 6 }}
                as="ul"
                role="list"
                aria-label="Our expertise"
              >
                {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
                ))}
              </MotionGrid>
            </GridItem>
          </Grid>

          {/* Timeline Section */}
          <Box>
            <Heading mb={8} textAlign="center">Our Journey</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {milestones.map((milestone, index) => (
                <MotionBox
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p={6}
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="lg"
                    boxShadow="md"
                    position="relative"
                  >
                    <HStack mb={4}>
                      <Icon as={MdTimeline} boxSize={6} color="blue.500" />
                      <Text fontWeight="bold" fontSize="xl">{milestone.year}</Text>
                    </HStack>
                    <Heading size="md" mb={2}>{milestone.title}</Heading>
                    <Text color="gray.600">{milestone.description}</Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Heading mb={8} textAlign="center">Our Certifications</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {certifications.map((cert, index) => (
                <MotionBox
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p={6}
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="lg"
                    boxShadow="md"
                    textAlign="center"
                  >
                    <Icon as={cert.icon} boxSize={10} color="blue.500" mb={4} />
                    <Heading size="md" mb={2}>{cert.name}</Heading>
                    <Text color="gray.600">{cert.description}</Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Values Section */}
          <Box>
            <Heading mb={8} textAlign="center">Our Values</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {values.map((value, index) => (
                <MotionBox
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p={6}
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="lg"
                    boxShadow="md"
                    textAlign="center"
                  >
                    <Icon as={value.icon} boxSize={10} color="blue.500" mb={4} />
                    <Heading size="md" mb={2}>{value.title}</Heading>
                    <Text color="gray.600">{value.description}</Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Comparison Table */}
          <Box>
            <Heading mb={8} textAlign="center">Why Choose Us</Heading>
            <Box
              overflowX="auto"
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              boxShadow="md"
              p={6}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Features</Th>
                    <Th isNumeric>Pesco</Th>
                    <Th isNumeric>Competitors</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.keys(comparisonData.pesco).map((feature) => (
                    <Tr key={feature}>
                      <Td>{feature}</Td>
                      <Td isNumeric>
                        <Icon
                          as={comparisonData.pesco[feature] ? FaCheck : FaTimes}
                          color={comparisonData.pesco[feature] ? 'green.500' : 'red.500'}
                        />
                      </Td>
                      <Td isNumeric>
                        <Icon
                          as={comparisonData.competitors[feature] ? FaCheck : FaTimes}
                          color={comparisonData.competitors[feature] ? 'green.500' : 'red.500'}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </MotionVStack>
      </Container>
    </Box>
  );
};

export default About;
