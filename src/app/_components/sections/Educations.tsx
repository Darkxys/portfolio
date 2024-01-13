import { profile_info } from '@/app/_data'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { Education } from '../education/Education'
import { Base } from '../layout/base'

export const Educations = () => {
  const color = profile_info.main_color;

  return (
    <Base id={'education'} mt={'1rem'}>
      <Text mb={'1.5rem'} mx={'auto'} fontWeight={'bold'} fontSize={'1.5rem'}>
        My <Text as={'span'} color={color}>Education</Text>
      </Text>
      <Flex
        w={{ base: '90%', lg: '70%' }} mx={'auto'}
        flexDirection={'column'} boxShadow={'0 0.15rem 1rem rgba(43, 52, 56, 0.15)'} p={{base: '1rem', md: '2rem', lg:'2.5rem'}} gap={5}
      >
        {
          profile_info.education.map((e, index) => {
            return (
              <>
                {index !== 0 && <Divider marginBottom={'1rem'} borderWidth={'1px'} borderColor={'gray.300'} />}
                <Education education={e} />
              </>
            )
          })
        }
      </Flex>
    </Base>
  )
}
