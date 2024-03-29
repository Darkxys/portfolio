import { profile_info } from '@/app/_data'
import { Text, Wrap } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Contact } from '../contact/Contact'
import { Base } from '../layout/base'

export const ContactMe = () => {
  const color = profile_info.main_color;

  return (
    <Base id={'contact'}>
      <Text mb={'1.5rem'} mx={'auto'} fontWeight={'bold'} fontSize={'1.5rem'}>
        Contact <Text as={'span'} color={color}>Me</Text>
      </Text>
      <Wrap spacing={'2rem'} justify={'center'}>
        <Contact label={'Email'} href={`mailto:${profile_info.email}`} Ic={FaEnvelope} />
        <Contact label={'Github'} href={profile_info.github} Ic={FaGithub} />
        <Contact label={'LinkedIn'} href={profile_info.linkedin} Ic={FaLinkedin} />
      </Wrap>
    </Base>
  )
}
