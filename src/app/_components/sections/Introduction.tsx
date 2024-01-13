import { profile_info } from '@/app/_data';
import { Flex, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LinkButton } from '../buttons/LinkButton';

export const Introduction = () => {
  const currentExperience = profile_info.experiences.find(e => !e.finished);
  const color = profile_info.main_color;

  return (
    <Flex flexDirection={'column'} textAlign={'center'} gap={3} color={'white'} bg={'gray.900'} py={20}>
      <Text fontSize={'clamp(2rem, 6vw, 4rem)'} fontWeight={'bold'}>Hi, I&apos;m <Text as={'span'} color={color}>Francis</Text></Text>
      <Text fontSize={'clamp(1.25rem, 2vw, 1.5rem)'} maxW={{ base: '80vw', lg: '50vw' }} mx={'auto'}>
        I&apos;m currently working as a Software Developer at&nbsp;
        <Link fontWeight={'bold'} color={color} textDecoration={'underline'} href={currentExperience?.company_url} isExternal>
          {currentExperience?.company}
        </Link>.
        I&apos;m passionate about AI and Software Development, and I dedicate my spare time to expanding my knowledge in these areas.
      </Text>
      <Flex mx={'auto'} gap={2} mt={2}>
        <LinkButton color={'white'} label={'Github'} href={profile_info.github} icon={<FaGithub />} />
        <LinkButton color={'white'} label={'LinkedIn'} href={profile_info.linkedin} icon={<FaLinkedin />} />
      </Flex>
    </Flex>
  )
}
