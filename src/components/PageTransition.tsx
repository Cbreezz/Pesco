'use client';

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Box as="main">
        {children}
      </Box>
    </motion.div>
  );
}; 