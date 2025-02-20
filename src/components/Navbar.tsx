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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [language, setLanguage] = useState("en");

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
    <Box bg="gray.900" px={6} py={4} color="white" borderBottom="1px" borderColor="gray.700">
      <Flex align="center" justify="space-between">
        {/* Left Side: Logo & Language Selector */}
        <Flex align="center" gap={4}>
          {/* Logo */}
          <Link as={NextLink} href="/" fontSize="2xl" fontWeight="bold" letterSpacing="wider">
            <Flex align="center">
              <Box as="span" color="brand.500">P</Box>
              <Box as="span" color="brand.400">E</Box>
              <Box as="span" color="brand.300">S</Box>
              <Box as="span" color="brand.200">C</Box>
              <Box as="span" color="brand.100">O</Box>
            </Flex>
          </Link>

          {/* 🌍 Language Selector - Fixed White Text Issue */}
          <Select
            maxW="120px"
            size="sm"
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            value={language}
            onChange={changeLanguage}
            _focus={{ bg: "gray.600" }}
          >
            <option value="en" style={{ color: "black" }}>🇺🇸 English</option>
            <option value="fr" style={{ color: "black" }}>🇫🇷 French</option>
            <option value="es" style={{ color: "black" }}>🇪🇸 Spanish</option>
            <option value="de" style={{ color: "black" }}>🇩🇪 German</option>
            <option value="sw" style={{ color: "black" }}>🇰🇪 Swahili</option>
          </Select>
        </Flex>

        <Spacer display={{ base: "none", md: "flex" }} />

        {/* ✅ Mobile Menu Toggle Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Toggle Navigation"
          onClick={onToggle}
          variant="ghost"
          color="white"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />

        {/* Desktop Navigation */}
        <Flex gap={6} ml={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map((nav) => (
            <Link
              as={NextLink}
              key={nav.name}
              href={nav.href}
              color="gray.300"
              _hover={{ color: "white" }}
            >
              {nav.name}
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* ✅ Mobile Navigation Menu (Dropdown) */}
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" mt={4} gap={4} display={{ base: "flex", md: "none" }}>
          {navLinks.map((nav) => (
            <Link
              as={NextLink}
              key={nav.name}
              href={nav.href}
              color="gray.300"
              _hover={{ color: "white" }}
            >
              {nav.name}
            </Link>
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Navbar;
