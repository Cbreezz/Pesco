"use client";

import React from "react";
import { Box, Text, Flex, Link, Icon, Container, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGearFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionLink = motion(Link);
const MotionIcon = motion(Icon);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const Footer = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('gray.400', 'gray.300');
  const hoverColor = useColorModeValue('blue.400', 'blue.300');
  const iconColor = useColorModeValue('blue.400', 'blue.300');

  const socialLinks = [
    { icon: BsFacebook, href: "#", label: "Facebook" },
    { icon: BsTwitter, href: "#", label: "Twitter" },
    { icon: BsLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <MotionBox
      as="footer"
      bg={bgColor}
      color="white"
      py={6}
      position="relative"
      overflow="hidden"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="200px"
        h="200px"
        bg="purple.400"
        opacity="0.1"
        borderRadius="full"
        filter="blur(60px)"
        transform="translate(-50%, -50%)"
      />
      <Box
        position="absolute"
        bottom="0"
        right="0"
        w="200px"
        h="200px"
        bg="blue.400"
        opacity="0.1"
        borderRadius="full"
        filter="blur(60px)"
        transform="translate(50%, 50%)"
      />

      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          w="full"
          gap={4}
        >
          {/* Logo and Copyright */}
          <Flex align="center" gap={4}>
            <MotionFlex
              align="center"
              gap={2}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Icon as={FaWandMagicSparkles} w={6} h={6} color={iconColor} />
              <Text fontSize="xl" fontWeight="bold" letterSpacing="wider">
                PESCO
              </Text>
            </MotionFlex>
            <Text fontSize="sm" color={textColor}>
              © {new Date().getFullYear()} All rights reserved
            </Text>
          </Flex>

          {/* Social Links */}
          <HStack spacing={4}>
            {socialLinks.map((social, index) => (
              <MotionLink
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: hoverColor }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon as={social.icon} w={5} h={5} />
              </MotionLink>
            ))}
          </HStack>
        </Flex>

        {/* Tagline */}
        <Flex
          justify="center"
          align="center"
          gap={2}
          mt={4}
          color={textColor}
          fontSize="xs"
        >
          <MotionIcon
            as={BsGearFill}
            color={iconColor}
            boxSize={3}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <Text>Engineering Excellence | Innovating for a better tomorrow</Text>
          <MotionIcon
            as={BsGearFill}
            color={iconColor}
            boxSize={3}
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default Footer;
