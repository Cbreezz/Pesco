'use client';

import { useState } from 'react';
import { Box, Image, Skeleton, ResponsiveValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: ResponsiveValue<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>;
  borderRadius?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width = 'full',
  height,
  objectFit = 'cover',
  borderRadius,
  priority = false,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box position="relative" width={width} height={height}>
      <Skeleton
        isLoaded={!isLoading}
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        borderRadius={borderRadius}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          borderRadius={borderRadius}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoading(false)}
        />
      </MotionBox>
    </Box>
  );
}; 