'use client';

import { Box, SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaProjectDiagram, FaUsers, FaIndustry, FaAward } from 'react-icons/fa';

const MotionBox = motion(Box);

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon: Icon, value, label, suffix = '' }: StatItemProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const iconColor = useColorModeValue('purple.500', 'purple.300');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={2}>
        <Icon size={40} color={iconColor} />
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          color={textColor}
        >
          {value}{suffix}
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={textColor}
          textAlign="center"
        >
          {label}
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default function Statistics() {
  const stats = [
    {
      icon: FaProjectDiagram,
      value: 150,
      label: 'Projects Completed',
      suffix: '+'
    },
    {
      icon: FaUsers,
      value: 50,
      label: 'Expert Engineers',
      suffix: '+'
    },
    {
      icon: FaIndustry,
      value: 25,
      label: 'Industries Served',
      suffix: '+'
    },
    {
      icon: FaAward,
      value: 10,
      label: 'Years Experience',
      suffix: '+'
    }
  ];

  return (
    <Box
      position="relative"
      zIndex={1}
      py={12}
      px={4}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')}
      backdropFilter="blur(10px)"
      borderRadius="xl"
      boxShadow="xl"
    >
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </SimpleGrid>
    </Box>
  );
} 