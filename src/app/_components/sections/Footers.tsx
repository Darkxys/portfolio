import { Box, Center, Flex, Image, Link, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import logo from '@/app/_assets/logo.svg';
import { FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaTools, FaUserGraduate } from 'react-icons/fa';
import { HeaderLink } from '../link/HeaderLink';
import { Base } from '../layout/base';
import { FooterLink } from '../link/FooterLink';
import { profile_info } from '@/app/_data';

export const Footers = () => {
  return (
    <Base bg={'gray.900'} color={'white'} mt={'5rem'}>
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
            <FooterLink
              href={profile_info.github}
              Ic={FaGithub}
            />
            <FooterLink
              href={profile_info.linkedin}
              Ic={FaLinkedin}
            />
            <FooterLink
              href={profile_info.email}
              Ic={FaEnvelope}
            />
          </Wrap>
        </Center>
      </Flex>
    </Base >
  )
}
