"use client";

import React from "react";
import { Box, Heading, Text, SimpleGrid, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { services } from "@/constants/services";

const fadeIn = (delay: number = 0, duration: number = 0.75) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration, delay } },
});

const ServiceCard = ({ index, title, icon: Icon, description }: { 
  index: number; 
  title: string; 
  icon: React.FC;
  description: string; 
}) => (
  <motion.div
    variants={fadeIn(index * 0.2, 0.75)}
    initial="hidden"
    animate="show"
    className="p-6 bg-gray.700 rounded-2xl shadow-lg"
  >
    <Flex alignItems="center">
      <Box fontSize="4xl" color="brand.500" mr={2}>
        <Icon />
      </Box>
      <Box textAlign="left">
        <Heading fontSize="xl" color="white" mb={1}>{title}</Heading>
        <Text fontSize="md" color="gray.400">{description}</Text>
      </Box>
    </Flex>
  </motion.div>
);

const Services = () => {
  return (
    <Box as="section" bg="gray.800" color="white" minH="100vh" py={10} px={10} display="flex" flexDirection="column" justifyContent="center">
      {/* Heading */}
      <motion.div variants={fadeIn(0.1, 1)} initial="hidden" animate="show">
        <Box textAlign="left">
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={2}>Our Services</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={8}>
            Discover the array of services we offer, designed to enhance your industrial engineering projects and drive success. 
            Our services encompass a wide range of solutions that address the unique challenges of each industry. 
            From equipment maintenance to advanced automation, we provide comprehensive support to ensure your operations run smoothly and efficiently. 
            Let us partner with you to achieve excellence in every aspect of your business.
          </Text>
        </Box>
      </motion.div>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
        <GridItem order={{ base: -1, md: 2 }}>
          <motion.div variants={fadeIn(0.4, 1)} initial="hidden" animate="show">
            <Image
              src="/Eng.png"
              alt="Industrial Engineering"
              borderRadius="2xl"
              boxShadow="lg"
              objectFit="cover"
              maxH="400px"
              mx="auto"
            />
          </motion.div>
        </GridItem>

        {/* Left - Services */}
        <GridItem>
          <motion.div variants={fadeIn(0.3, 1)} initial="hidden" animate="show">
            <SimpleGrid columns={{ base: 1, md: 1 }} gap={10}>
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </SimpleGrid>
          </motion.div>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Services;
