import { profile_info } from '@/app/_data';
import { Center, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ContactProps {
  label: string;
  href: string;
  Ic: IconType;
}

export const Contact = ({ label, href, Ic }: ContactProps) => {
  return (
    <Link
      className={'scaleUp'}
      w={'10rem'} p={'1.5rem'}
      href={href} isExternal
      _hover={{ textDecoration: 'none' }}
      boxShadow={'0 0.15rem 1rem rgba(43, 52, 56, 0.15)'}
    >
      <Center flexDirection={'column'}>
        <Ic color={profile_info.main_color} size={'5rem'} />
        <Text fontWeight={'bold'}>{label}</Text>
      </Center>
    </Link>
  )
}
