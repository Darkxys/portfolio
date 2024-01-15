import { profile_info } from '@/app/_data';
import { Center, Text, Link, Flex, Box } from '@chakra-ui/react';
import React from 'react';

interface HeaderLinkProps {
  anchor: string;
  label: string;
  icon: React.JSX.Element;
}

export const HeaderLink = ({ anchor, label, icon }: HeaderLinkProps) => {
  return (
    <Link
      _hover={{
        '&::after': {
          bg: profile_info.main_color,
          width: '100%'
        }
      }}
      _after={{
        content: '""',
        position: 'relative',
        display: 'block',
        width: '0%',
        height: '3px',
        margin: 'auto',
        bg: 'gray.900',
        transition: 'width 0.3s ease'
      }}
      href={anchor}
    >
      <Center
        gap={2}
        flexDirection={'row'}
      >
        {icon}
        <Text>{label}</Text>
      </Center>
    </Link>
  )
}
