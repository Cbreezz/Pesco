'use client';

import { extendTheme } from '@chakra-ui/react';

// Enhanced purple color scheme with additional shades
const colors = {
  brand: {
    // Primary colors
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  accent: {
    // Accent colors for highlights and special elements
    purple: {
      light: '#a78bfa',
      medium: '#8b5cf6',
      dark: '#6d28d9',
    },
    gradient: {
      start: '#8b5cf6',
      end: '#6d28d9',
    },
  },
};

// Floating animation keyframes
const floatingAnimation = {
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
  '@keyframes floatSlow': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
  '@keyframes floatFast': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-30px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
};

// Custom theme configuration
const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
        backgroundImage: props.colorMode === 'dark' 
          ? `radial-gradient(circle at 1px 1px, ${colors.brand[700]} 1px, transparent 0)`
          : `radial-gradient(circle at 1px 1px, ${colors.brand[200]} 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
        minHeight: '100vh',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.600',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        outline: (props: any) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          color: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        gradient: (props: any) => ({
          bg: `linear-gradient(to-r, ${colors.accent.gradient.start}, ${colors.accent.gradient.end})`,
          color: 'white',
          _hover: {
            opacity: 0.9,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
      },
    },
    Heading: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        fontWeight: 'bold',
      }),
      variants: {
        gradient: {
          bgGradient: `linear(to-r, ${colors.accent.gradient.start}, ${colors.accent.gradient.end})`,
          bgClip: 'text',
        },
      },
    },
    Text: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
      }),
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'xl',
          boxShadow: 'xl',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '2xl',
          },
        },
      }),
    },
    Badge: {
      variants: {
        subtle: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.100',
          color: props.colorMode === 'dark' ? 'white' : 'brand.700',
          borderRadius: 'full',
          px: 3,
          py: 1,
        }),
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
        _hover: {
          textDecoration: 'none',
          color: props.colorMode === 'dark' ? 'brand.300' : 'brand.600',
        },
      }),
    },
    Icon: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
      }),
    },
  },
  layerStyles: {
    gradientBg: {
      bgGradient: `linear(to-r, ${colors.accent.gradient.start}, ${colors.accent.gradient.end})`,
    },
    cardHover: {
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
      },
    },
    floatingBg: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[100]} 0%, transparent 50%)`,
        opacity: 0.5,
        animation: 'float 6s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 70%, ${colors.brand[200]} 0%, transparent 50%)`,
        opacity: 0.3,
        animation: 'floatSlow 8s ease-in-out infinite',
      },
    },
    floatingBgDark: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[700]} 0%, transparent 50%)`,
        opacity: 0.3,
        animation: 'float 6s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 70%, ${colors.brand[600]} 0%, transparent 50%)`,
        opacity: 0.2,
        animation: 'floatSlow 8s ease-in-out infinite',
      },
    },
    floatingBgFast: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[100]} 0%, transparent 50%)`,
        opacity: 0.5,
        animation: 'floatFast 4s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 70%, ${colors.brand[200]} 0%, transparent 50%)`,
        opacity: 0.3,
        animation: 'float 6s ease-in-out infinite',
      },
    },
    animatedBg: {
      backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.brand[200]} 1px, transparent 0)`,
      backgroundSize: '40px 40px',
      backgroundPosition: 'center',
      animation: 'backgroundMove 20s linear infinite',
      transition: 'all 0.3s ease-in-out',
    },
    gridBg: {
      backgroundImage: `linear-gradient(to right, ${colors.brand[200]} 1px, transparent 1px),
                       linear-gradient(to bottom, ${colors.brand[200]} 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      backgroundPosition: 'center',
      transition: 'all 0.3s ease-in-out',
    },
    waveBg: {
      backgroundImage: `repeating-linear-gradient(45deg, ${colors.brand[100]}, ${colors.brand[100]} 10px, ${colors.brand[50]} 10px, ${colors.brand[50]} 20px)`,
      backgroundSize: '40px 40px',
      backgroundPosition: 'center',
      animation: 'waveMove 10s linear infinite',
      transition: 'all 0.3s ease-in-out',
    },
    // Hero Section Background
    heroBg: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
          linear-gradient(90deg, transparent 24px, ${colors.brand[400]} 25px, ${colors.brand[400]} 26px, transparent 27px),
          linear-gradient(transparent 24px, ${colors.brand[400]} 25px, ${colors.brand[400]} 26px, transparent 27px)`,
        backgroundSize: '50px 50px',
        opacity: 0.1,
        animation: 'moveGrid 20s linear infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[400]} 0%, transparent 50%)`,
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite',
      },
    },
    // Services Section Background
    servicesBg: {
      position: 'relative',
      overflow: 'hidden',
      bg: 'gray.50',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, ${colors.brand[400]} 1px, transparent 1px),
          linear-gradient(0deg, ${colors.brand[400]} 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        opacity: 0.15,
        animation: 'floatSlow 10s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[400]} 0%, transparent 50%)`,
        opacity: 0.15,
        animation: 'float 6s ease-in-out infinite',
      },
    },
    // About Section Background
    aboutBg: {
      position: 'relative',
      overflow: 'hidden',
      bg: 'gray.50',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(45deg, ${colors.brand[400]} 25%, transparent 25%, transparent 75%, ${colors.brand[400]} 75%, ${colors.brand[400]}),
          linear-gradient(45deg, ${colors.brand[400]} 25%, transparent 25%, transparent 75%, ${colors.brand[400]} 75%, ${colors.brand[400]})`,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px',
        opacity: 0.15,
        animation: 'moveGrid 15s linear infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 70%, ${colors.brand[500]} 0%, transparent 50%)`,
        opacity: 0.15,
        animation: 'floatSlow 8s ease-in-out infinite',
      },
    },
    // Team Section Background
    teamBg: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `repeating-linear-gradient(45deg, ${colors.brand[400]} 0px, ${colors.brand[400]} 2px, transparent 2px, transparent 8px)`,
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 70% 30%, ${colors.brand[500]} 0%, transparent 50%)`,
        opacity: 0.1,
        animation: 'floatSlow 8s ease-in-out infinite',
      },
    },
    // Contact Section Background
    contactBg: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 1px 1px, ${colors.brand[400]} 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.1,
        animation: 'moveGrid 20s linear infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors.brand[400]} 0%, transparent 50%)`,
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite',
      },
    },
    // Projects Section Background
    projectsBg: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, ${colors.brand[400]} 1px, transparent 1px),
          linear-gradient(0deg, ${colors.brand[400]} 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        opacity: 0.1,
        animation: 'floatSlow 10s ease-in-out infinite',
      },
    },
  },
  textStyles: {
    gradient: {
      bgGradient: `linear(to-r, ${colors.accent.gradient.start}, ${colors.accent.gradient.end})`,
      bgClip: 'text',
    },
  },
  keyframes: {
    backgroundMove: {
      '0%': { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '40px 40px' },
    },
    waveMove: {
      '0%': { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '40px 40px' },
    },
    moveGrid: {
      '0%': { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '40px 40px' },
    },
    float: {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
      '100%': { transform: 'translateY(0px)' },
    },
    floatSlow: {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0px)' },
    },
    floatFast: {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-30px)' },
      '100%': { transform: 'translateY(0px)' },
    },
  },
});

export default theme; 