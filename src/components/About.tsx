"use client";

import React from "react";
import { Box, Heading, Text, SimpleGrid, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsLightningCharge, BsGear, BsBuilding } from "react-icons/bs";

const fadeIn = (delay: number = 0, duration: number = 0.75) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration, delay } },
});

const ServiceCard = ({ index, title, icon: Icon, description }: { 
  index: number; 
  title: string; 
  icon: React.ComponentType; 
  description: string; 
}) => (
  <motion.div
    variants={fadeIn(index * 0.2, 0.75)}
    initial="hidden"
    animate="show"
    className="p-6 bg-gray.800 rounded-2xl shadow-lg"
  >
    <Flex alignItems="flex-start">
      <Box fontSize="4xl" color="brand.500" mr={4} mt={1}>
        <Icon /> 
      </Box>
      <Box textAlign="left">
        <Heading fontSize="xl" color="white" mb={1}>{title}</Heading>
        <Text fontSize="md" color="gray.400">{description}</Text>
      </Box>
    </Flex>
  </motion.div>
);

const About = () => {
  const services = [
    { title: "Industry Expertise", icon: BsBuilding, description: "With decades of experience, we provide top-notch industrial solutions tailored to your needs. Our team of experts ensures that your projects are completed with the highest level of quality and efficiency." },
    { title: "Innovation & Efficiency", icon: BsLightningCharge, description: "We implement cutting-edge technology to streamline processes and boost productivity. By embracing innovation, we help you stay ahead of the competition and achieve your business goals more effectively." },
    { title: "Automation & Control", icon: BsGear, description: "Our advanced automation systems ensure increased productivity and precision. We design and integrate control systems that optimize your operations, reduce downtime, and enhance overall performance." },
  ];

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" py={16} px={8} display="flex" flexDirection="column" justifyContent="center">
      {/* Heading */}
      <motion.div variants={fadeIn(0.2, 1)} initial="hidden" animate="show">
        <Box textAlign="left">
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={2}>About Us</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={6}>
            At PESCO, we are committed to driving innovation and efficiency in the industrial engineering sector. Our expertise spans various domains, ensuring we deliver tailored solutions that enhance productivity and operational excellence.
          </Text>
        </Box>
      </motion.div>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
        <GridItem>
          <motion.div variants={fadeIn(0.3, 1)} initial="hidden" animate="show">
            <Image
              src="/Eng1.png"
              alt="Industrial Engineering"
              borderRadius="2xl"
              boxShadow="lg"
              objectFit="cover"
              maxH="400px"
              mx="auto"
            />
          </motion.div>
        </GridItem>

        {/* Right - Services */}
        <GridItem>
          <motion.div variants={fadeIn(0.4, 1)} initial="hidden" animate="show">
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

export default About;
