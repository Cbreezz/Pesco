"use client";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Services />
    </Box>
  );
}