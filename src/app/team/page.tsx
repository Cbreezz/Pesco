"use client";

import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const floatingParticles = keyframes`
  0% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.5; }
`;

const Team = () => {
  const mainMember = {
    name: "Winston Churchill",
    role: "Founder & CEO",
    bio: "An industry leader with years of experience in industrial engineering and automation. Passionate about innovation and efficiency in the field.",
    motivation: "Driven by the pursuit of excellence and the power of innovation to shape the future.",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    image: "/IMG.jpg"
  };

  const visionStatement = "Our vision is to revolutionize the industrial engineering sector through innovation, efficiency, and automation. We believe in empowering industries with cutting-edge solutions that drive growth and sustainability.";

  const [particles, setParticles] = useState<{ top: string; left: string; duration: number }[]>([]);

  useEffect(() => {
    const generatedParticles = Array(10).fill(0).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <Box 
      as="section" 
      bg="gray.900" 
      color="white" 
      minH="100vh" 
      py={10} px={10} 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      position="relative"
    >
      <Flex direction={{ base: "column", md: "row" }} alignItems="center" maxW="1200px" w="full" gap={12}>
        {/* CEO Image - Enlarged */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
          <Image src={mainMember.image} alt={mainMember.name} borderRadius="lg" boxSize={{ base: "300px", md: "500px" }} objectFit="contain" suppressHydrationWarning />
        </motion.div>
        
        {/* CEO Details - Expanded Text Section */}
        <VStack align="start" spacing={6} flex={1} maxW="700px">
          <motion.div whileHover={{ scale: 1.05, color: "yellow.400" }}>
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>{mainMember.name}</Heading>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Text fontSize={{ base: "lg", md: "2xl" }} color="yellow.300">{mainMember.role}</Text>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Text fontSize={{ base: "md", md: "xl" }} color="gray.400">{mainMember.bio}</Text>
          </motion.div>
          <Box fontSize={{ base: "md", md: "xl" }} color="gray.300" fontStyle="italic">
            <Typewriter
              options={{
                strings: [mainMember.quote],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </Box>
          <Text fontSize={{ base: "sm", md: "lg" }} color="gray.500">{mainMember.motivation}</Text>
        </VStack>
      </Flex>
      
      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <Box
          key={i}
          position="absolute"
          top={particle.top}
          left={particle.left}
          width="6px"
          height="6px"
          bg="purple"
          borderRadius="full"
          animation={`${floatingParticles} ${particle.duration}s infinite ease-in-out`}
        />
      ))}
      
      {/* Scrolling Vision Statement */}
      <Box position="absolute" bottom={5} width="100%" textAlign="center" overflow="hidden">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ whiteSpace: "nowrap", fontWeight: "bold", fontSize: "1rem", color: "yellow.300" }}
        >
          {visionStatement}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Team;
