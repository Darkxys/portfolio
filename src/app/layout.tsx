import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChakraProviders from './_contexts/ChakraProviders'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'The career portfolio of Francis Painchaud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>
            {children}
        </ChakraProviders>
      </body>
    </html>
  )
}
