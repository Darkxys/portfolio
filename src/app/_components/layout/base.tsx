import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

export const Base = ({children, ...rest}: FlexProps) => {
  return (
    <Flex w={'100%'} {...rest}>
      <Flex flexDirection={'column'} maxW={'1200px'} w={'100%'} p={'1.5rem'} mx={'auto'}>
        {children}
      </Flex>
    </Flex>
  )
}
