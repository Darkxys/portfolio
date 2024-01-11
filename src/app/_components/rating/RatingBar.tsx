import { Box, BoxProps, Text } from '@chakra-ui/react';
import React from 'react';

interface RatingBarProps extends BoxProps {
  value: number; // value should be between 0 and 5
  color: string;
  label?: string;
}

export default function RatingBar({ value, color, label, ...rest }: RatingBarProps) {
  // Ensure the value is between 0 and 5
  const validValue = Math.min(5, Math.max(0, value));
  const fillPercentage = (validValue / 5) * 100;

  // Assuming a fixed border radius (e.g., 20px)
  const borderRadius = 20;
  // Adjust the label position by adding a factor of the border radius to the fill percentage
  const labelPosition = fillPercentage > 10 ? `${fillPercentage}%` : `${borderRadius}px`;

  return (
    <Box {...rest} rounded={20}>
      <Box rounded={borderRadius} h={'inherit'} bg={color} w={`${fillPercentage}%`}></Box>
    </Box>
  );
};
