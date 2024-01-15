import { profile_info } from '@/app/_data';
import { Skills } from '@/app/_types/SkillEnum'
import { IconFromEnum } from '@/app/_utils/IconFromEnum'
import { Flex, Text, Wrap } from '@chakra-ui/react'
import { Base } from '../layout/base';

export const TechnicalSkills = () => {
  const skillNames = Object.keys(Skills).filter((item) => {
    return !Number(item) && item !== '0';
  });

  return (
    <Base id={'skills'} mt={'3rem'} bg={'gray.900'} color={'white'} py={'5rem'}>
      <Text mb={'3rem'} fontWeight={'bold'} fontSize={'1.5rem'} textAlign={'center'}>
        Technical <Text as={'span'} color={profile_info.main_color}>Skills</Text>
      </Text>
      <Wrap spacing={'2rem'} justify={'center'}>
        {
          skillNames.map((name: string, index: number) => {
            const formattedName = name.replaceAll(/plus/g, '+').replaceAll(/dot/g, '.').replaceAll(/sharp/g, '#');

            return (
              <Flex key={`skills-${index}`} flexDirection={'column'}>
                <IconFromEnum icon={index} className={'scaleUp'} w={'7rem'} h={'7rem'} color={'default'} />
                <Text mt={3} textAlign={'center'}>{formattedName}</Text>
              </Flex>
            );
          })
        }
      </Wrap>
    </Base>
  )
}
