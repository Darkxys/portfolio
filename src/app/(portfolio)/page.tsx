'use client'

import { Flex } from '@chakra-ui/react';
import { ContactMe } from '../_components/sections/ContactMe';
import { Educations } from '../_components/sections/Educations';
import { Experiences } from '../_components/sections/Experiences';
import { Footers } from '../_components/sections/Footers';
import { Headers } from '../_components/sections/Headers';
import { Introduction } from '../_components/sections/Introduction';
import { Projects } from '../_components/sections/Projects';
import { TechnicalSkills } from '../_components/sections/TechnicalSkills';

export default function Home() {
  return (
    <Flex flexDirection={'column'}>
      <Headers />
      <Introduction />
      <Projects />
      <TechnicalSkills />
      <Educations />
      <Experiences />
      <ContactMe />
      <Footers />
    </Flex>
  )
}
