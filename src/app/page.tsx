"use client";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}