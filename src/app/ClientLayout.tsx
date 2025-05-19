'use client';

import { Suspense, useEffect, useState } from 'react';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Spinner, Center } from '@chakra-ui/react';

const LoadingSpinner = () => (
  <Center h="100vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="purple.500"
      size="xl"
    />
  </Center>
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Providers>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Box as="main" minH="100vh">
          {children}
        </Box>
      </Suspense>
      <Footer />
    </Providers>
  );
} 