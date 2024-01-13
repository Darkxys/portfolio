import { profile_info } from '@/app/_data';
import { BoxProps, Button, ButtonProps, Center, Link, Text } from '@chakra-ui/react';

interface LinkButtonProps extends ButtonProps {
  label: string;
  href: string;
  icon: React.JSX.Element;
}

export const LinkButton = ({ label, href, icon, ...rest }: LinkButtonProps) => {
  const color = profile_info.main_color;

  return (
    <Button
      color={color} rounded={5}
      bg={'none'}
      _hover={{ bg: color, textColor: 'white' }}
      border={`1px ${color} solid`}
      {...rest}
    >
      <Link _hover={{ textDecoration: 'none' }} href={href} isExternal>
        <Center gap={2}>
          {icon}
          <Text>{label}</Text>
        </Center>
      </Link>
    </Button>
  )
}
