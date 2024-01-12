import React, { useState } from 'react';
import { IProject } from "@/app/_data";
import { Box, BoxProps, Center, Flex, Text, Button, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface ProjectProps extends BoxProps {
  project: IProject;
}

export default function Project({ project, ...rest }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      flexDirection={'column'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <Box
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={'cover'}
        bgImage={project.image_url}
        h={'35%'}
        filter={isHovered ? 'blur(16px)' : 'none'}
        transition="0.3s ease-in-out"
      >
      </Box>
      <Center
        h={'100%'}
        bg={'gray.700'}
        w={`inherit`}
        textAlign={'center'}
        flexDirection={'column'}
        filter={isHovered ? 'blur(16px)' : 'none'}
        transition="0.3s ease-in-out"
      >
        <Text mt={2} mb={'auto'} mx={'auto'} fontWeight={'bold'} fontSize={'1.2vw'}>
          {project.title}
        </Text>
        {project.skills_acquired.map((skill, index) => (
          <Text key={index} mb={'auto'} mx={'auto'} color={'white.900'} fontSize={'1vw'}>
            {skill.skill_label}
          </Text>
        ))}
      </Center>
      {isHovered && (
        <Center flexDirection={'column'} h={'inherit'} my={'auto'} w={'inherit'} position="absolute">
          <Text color={'white'} mt={2} mb={'auto'} mx={'auto'} fontWeight={'bold'} fontSize={'1.4vw'} textAlign={'center'}>
            {project.title}
          </Text>
          <Text mb={'auto'} fontStyle={'italic'}>{project.short_description}</Text>
          <Flex mb={'auto'} w={'50%'}>
            {
              project.source_code &&
              <Link
                href={project.source_code}
                isExternal _hover={{ color: 'purple' }}
                mx={'auto'}
              >
                <FaGithub size={'3vw'} />
              </Link>
            }
            {
              project.website &&
              <Link
                href={project.website}
                isExternal _hover={{ color: 'purple' }}
                mx={'auto'}
              >
                <FaGlobe size={'3vw'} />
              </Link>
            }
          </Flex>
        </Center>
      )}
    </Flex>
  );
}
