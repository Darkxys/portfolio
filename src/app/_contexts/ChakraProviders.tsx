'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import Text from "@/app/_components/base/Text";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Text
  }
});

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: 'top-right' } }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraProviders;
