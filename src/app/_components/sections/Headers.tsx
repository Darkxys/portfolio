import { Box, Center, Flex, Image, Link, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import logo from '@/app/_assets/logo.svg';
import { FaBriefcase, FaCode, FaEnvelope, FaTools, FaUserGraduate } from 'react-icons/fa';
import { HeaderLink } from '../link/HeaderLink';
import { Base } from '../layout/base';

export const Headers = () => {
  return (
    <Base bg={'gray.900'} color={'white'}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
        <Center>
          <Image
            alt={'Logo Image'}
            w={'16em'}
            h={'5em'}
            src={logo.src}
          />
        </Center>
        <Center fontSize={'1.1em'}>
          <Wrap spacing={{ base: 2, lg: 10 }} justify={'center'}>
            <HeaderLink
              anchor='#contributions'
              label='Contributions'
              icon={<FaCode />}
            />
            <HeaderLink
              anchor='#skills'
              label='Skills'
              icon={<FaTools />}
            />
            <HeaderLink
              anchor='#education'
              label='Education'
              icon={<FaUserGraduate />}
            />
            <HeaderLink
              anchor='#experience'
              label='Experience'
              icon={<FaBriefcase />}
            />
            <HeaderLink
              anchor='#contact'
              label='Contact'
              icon={<FaEnvelope />}
            />
          </Wrap>
        </Center>
      </Flex>
    </Base >
  )
}
