import { profile_info } from '@/app/_data'
import { Flex, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import Project from '../project/Project';
import { Base } from '../layout/base';

export const Projects = () => {
  const color = profile_info.main_color;

  return (
    <Base gap={'3rem'} mt={'1.5rem'} id={'projects'} flexDirection={'column'}>
      <Text mb={'1.5rem'} mx={'auto'} fontWeight={'bold'} fontSize={'1.5em'}>
        My <Text as={'span'} color={color}>Projects</Text>
      </Text>
      {
        profile_info.projects.map(category => {
          return (
            category.items.map(project => {
              return (
                <Fragment key={`project-${project.title}`}>
                  <Project project={project} />
                </Fragment>
              )
            })
          )
        })
      }
    </Base>
  )
}
