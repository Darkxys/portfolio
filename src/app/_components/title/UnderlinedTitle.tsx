import { Text } from "@chakra-ui/react";

interface UnderlinedTitleProps {
  text: string;
  color: string;
}

export default function UnderlinedTitle({ text, color }: UnderlinedTitleProps) {
  return (
    <Text
      position={'relative'}
      fontSize={'1.5em'}
      fontWeight={'bold'}
      textDecoration={'underline'}
      textDecorationColor={color}
      textDecorationThickness={'0.5vh'}
    >
      {text}
    </Text>
  )
}