import { IProject, profile_info } from "@/app/_data";
import { IconFromEnum } from "@/app/_utils/IconFromEnum";
import { Text, BoxProps, Flex, Image, Center, Button, Link } from "@chakra-ui/react";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LinkButton } from "../buttons/LinkButton";

interface ProjectProps extends BoxProps {
  project: IProject;
}

export default function Project({ project, ...rest }: ProjectProps) {
  const color = profile_info.main_color;

  return (
    <Flex my={'1.5rem'} flexDirection={{ base: 'column', lg: 'row' }} mx={'auto'} gap={{ base: '0.5rem', lg: '2rem' }}>
      <Flex w={{ base: '100%', lg: '50%' }} mx={{ base: 'auto', lg: 0 }}>
        <Image
          alt={'Project Image'}
          aspectRatio={16 / 9}
          src={project.image_url}
          w={{base:'90%', lg:'100%'}}
          mx={'auto'}
          objectFit={'contain'} 
          objectPosition={'center'}
        />
      </Flex>
      <Flex gap={'0.25rem'} w={{ base: '100%', lg: '50%' }} flexDirection={'column'}>
        <Text fontWeight={'bold'} fontSize={'1.25rem'}>{project.title}</Text>
        <Center gap={3} w={'fit-content'}>
          <Text color={color} fontWeight={'bold'} fontStyle={'italic'}>Used skills: </Text>
          {
            project.skills_used.map(skill => {
              return <IconFromEnum icon={skill} key={`project-skill-${skill}`} color={'default'} w={'2rem'} h={'2rem'} />
            })
          }
        </Center>
        <Text>{project.description}</Text>

        <Flex gap={2} mt={'auto'}>
          {
            project.website && <LinkButton label={'Live'} href={project.website} icon={<FaExternalLinkAlt />} />
          }
          {
            project.source_code && <LinkButton label={'Source'} href={project.source_code} icon={<FaGithub />} />
          }
        </Flex>
      </Flex>
    </Flex>
  );
}
