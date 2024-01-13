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
        }
      }}
      _after={{
        content: '""',
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '3px',
        margin: 'auto',
        bg: 'gray.900',
      }}
      href={anchor}
    >
      <Flex
        gap={2}
        flexDirection={'row'}
      >
        {icon}
        <Text>{label}</Text>
      </Flex>
    </Link>
  )
}
