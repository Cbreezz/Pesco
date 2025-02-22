"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Heading, Text, VStack, Button, Tag, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const resourceData = {
  1: { title: "Efficiency Optimization Guide", category: "Guides", description: "A comprehensive guide on optimizing industrial processes for maximum efficiency.", content: "This guide covers key techniques in lean manufacturing, process automation, and workflow optimization. Learn about reducing waste, increasing throughput, and utilizing data analytics to enhance performance." },
  2: { title: "Automation Tools Overview", category: "Tools", description: "Explore the latest automation tools used in industrial engineering.", content: "Discover top industrial automation tools, including PLCs, SCADA systems, and robotics integration. Learn how these tools improve productivity and reduce operational costs." },
  3: { title: "Industrial Safety Standards", category: "Guides", description: "Stay up-to-date with the latest industry safety protocols.", content: "Understand critical safety standards such as OSHA regulations, PPE requirements, and risk assessment strategies to ensure a safe working environment." },
  4: { title: "Top Engineering FAQs", category: "FAQs", description: "Get answers to the most commonly asked questions in industrial engineering.", content: "Find expert answers on common engineering challenges, from material selection to process control and automation best practices." }
};

const ResourceDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) return <Text color="gray.400">Loading...</Text>;

  const resource = resourceData[parseInt(resolvedParams.id) as keyof typeof resourceData];

  if (!resource) {
    return (
      <Box as="section" bg="gray.900" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="xl" color="gray.400">Resource not found.</Text>
      </Box>
    );
  }

  return (
    <Box as="section" bg="gray.900" color="white" minH="100vh" py={16} px={10} maxW="800px" mx="auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <VStack spacing={6} textAlign="left" align="start">
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>{resource.title}</Heading>
          <Tag size="lg" colorScheme="blue">{resource.category}</Tag>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">{resource.description}</Text>
          <Divider borderColor="gray.600" />
          <Text fontSize="lg" color="gray.200">{resource.content}</Text>
          <Button colorScheme="blue" onClick={() => router.push("/resources")}>Back to Resources</Button>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default ResourceDetails;
