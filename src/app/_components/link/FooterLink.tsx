import { profile_info } from '@/app/_data';
import { Center, Text, Link, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface FooterLinkProps {
  href: string;
  Ic: IconType;
}

export const FooterLink = ({ href, Ic }: FooterLinkProps) => {
  return (
    <Link
      _hover={{
        color: profile_info.main_color,
        transition: 'color 0.3s ease-in-out',
      }}
      href={href}
    >
      <Center
        gap={2}
        flexDirection={'row'}
      >
        <Ic size={'2rem'} />
      </Center>
    </Link>
  )
}
