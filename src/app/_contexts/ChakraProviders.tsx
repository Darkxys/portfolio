'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const indigo = {
  50: '#eef2ff',    // Very light indigo
  100: '#dcd6ff',   // Lighter indigo
  200: '#bbaeff',   // Light indigo
  300: '#9b82ff',   // Light-medium indigo
  400: '#7b5eff',   // Medium indigo
  500: '#5b3aff',   // Regular indigo
  600: '#4b21f5',   // Medium-dark indigo
  700: '#4000eb',   // Darker indigo
  800: '#3500d3',   // Dark indigo
  900: '#2a00b8'    // Very dark indigo
};


const theme = extendTheme({
  config,
  colors: {
    indigo
  }
});

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraProviders;
