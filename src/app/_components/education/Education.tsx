import { IEducation, profile_info } from '@/app/_data'
import { IconFromEnum } from '@/app/_utils/IconFromEnum';
import { Box, Center, Flex, Image, List, ListItem, Text, Wrap } from '@chakra-ui/react'
import React from 'react'

interface EducationProps {
  education: IEducation;
}

export const Education = ({ education }: EducationProps) => {
  const color = profile_info.main_color;

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 4, lg: 0 }}>
      <Center w={{ base: '100%', lg: '25%' }} mx={{ base: 'auto', lg: 0 }}>
        <Image
          alt={'School Image'}
          w={'16em'}
          h={'8em'}
          src={education.school_img}
        />
      </Center>
      <Flex pl={{ base: 0, lg: '2rem' }} w={{ base: '100%', lg: '75%' }} mx={{ base: 'auto', lg: 0 }} flexDirection={'column'}>
        <Text fontSize={'1.25rem'} fontWeight={'bold'}>{education.school_name}</Text>
        <Text fontStyle={'italic'} textColor={color}>{education.diploma_type} {education.diploma_degree}</Text>
        <List>
          <Text color={'gray.900'}>Relevant courses: {education.relevant_courses.join(', ')}.</Text>
        </List>
        <Center mt={'0.5rem'} gap={3} w={'fit-content'}>
          <Text fontWeight={'bold'} fontStyle={'italic'}>Skills Learned: </Text>
          <Wrap>
            {
              education.skills_obtained.map(skill => {
                const Ic = IconFromEnum(skill);
                return <Ic key={`education-${education.graduated}-skill-${skill}`} color={'default'} size={'2rem'} />
              })
            }
          </Wrap>
        </Center>
      </Flex>
    </Flex>
  )
}
