"use client";

import React from "react";
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGearFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={6} px={8}>
      <Flex justify="center" gap={6} mb={4}>
        <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <BsFacebook size={24} />
        </Link>
        <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <BsTwitter size={24} />
        </Link>
        <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={24} />
        </Link>
      </Flex>
      <Flex justify="center" alignItems="center" gap={2}>
        <Icon as={BsGearFill} color="brand.500" boxSize={4} />
        <Text fontSize="sm">Engineering Excellence | © {new Date().getFullYear()} PESCO. All rights reserved.</Text>
        <Icon as={BsGearFill} color="brand.500" boxSize={4} />
      </Flex>
      <Text fontSize="xs" color="gray.400" mt={2} textAlign="center">
        Innovating for a better tomorrow. Built with precision and passion by engineers for engineers.
      </Text>
    </Box>
  );
};

export default Footer;
