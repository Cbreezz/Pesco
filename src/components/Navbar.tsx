"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
  Select,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { FaWandMagicSparkles } from "react-icons/fa6";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionLink = motion(Link);

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [language, setLanguage] = useState("en");
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const borderColor = useColorModeValue('gray.700', 'gray.600');
  const hoverColor = useColorModeValue('blue.400', 'blue.300');

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Simulating a language change - replace with real i18n logic later
    alert(`Language changed to: ${e.target.value}`);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <MotionBox
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" py={4}>
          {/* Left Side: Logo & Language Selector */}
          <Flex align="center" gap={4}>
            {/* Logo */}
            <MotionLink
              as={NextLink}
              href="/"
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Flex align="center">
                <Box as="span" color="blue.400">P</Box>
                <Box as="span" color="blue.300">E</Box>
                <Box as="span" color="purple.400">S</Box>
                <Box as="span" color="purple.300">C</Box>
                <Box as="span" color="purple.200">O</Box>
                <Box as="span" ml={2} color="blue.400">
                  <FaWandMagicSparkles />
                </Box>
              </Flex>
            </MotionLink>

            {/* Language Selector */}
            <Select
              maxW="120px"
              size="sm"
              bg="gray.700"
              color="white"
              borderColor="gray.600"
              value={language}
              onChange={changeLanguage}
              _hover={{ borderColor: hoverColor }}
              _focus={{ borderColor: hoverColor, boxShadow: `0 0 0 1px ${hoverColor}` }}
            >
              <option value="en" style={{ color: "black" }}>🇺🇸 English</option>
              <option value="fr" style={{ color: "black" }}>🇫🇷 French</option>
              <option value="es" style={{ color: "black" }}>🇪🇸 Spanish</option>
              <option value="de" style={{ color: "black" }}>🇩🇪 German</option>
              <option value="sw" style={{ color: "black" }}>🇰🇪 Swahili</option>
            </Select>
          </Flex>

          <Spacer display={{ base: "none", md: "flex" }} />

          {/* Mobile Menu Toggle Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Toggle Navigation"
            onClick={onToggle}
            variant="ghost"
            color="white"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            _hover={{ bg: "gray.700" }}
          />

          {/* Desktop Navigation */}
          <Flex
            display={{ base: "none", md: "flex" }}
            gap={8}
            align="center"
          >
            {navLinks.map((nav, index) => (
              <MotionLink
                as={NextLink}
                key={nav.name}
                href={nav.href}
                color="gray.300"
                _hover={{ color: "white", textDecoration: "none" }}
                whileHover={{ scale: 1.05, color: hoverColor }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {nav.name}
              </MotionLink>
            ))}
          </Flex>
        </Flex>

        {/* Mobile Navigation Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            gap={4}
            py={4}
            display={{ base: "flex", md: "none" }}
          >
            {navLinks.map((nav, index) => (
              <MotionLink
                as={NextLink}
                key={nav.name}
                href={nav.href}
                color="gray.300"
                _hover={{ color: "white", textDecoration: "none" }}
                whileHover={{ x: 10, color: hoverColor }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {nav.name}
              </MotionLink>
            ))}
          </Flex>
        </Collapse>
      </Container>
    </MotionBox>
  );
};

export default Navbar;
