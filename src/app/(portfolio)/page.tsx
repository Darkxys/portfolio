'use client'

import profilePicture from '@/app/_assets/profile.jpg';
import { AbsoluteCenter, Box, Button, Center, DarkMode, Divider, Flex, Heading, Image, Link, ListItem, Spacer, Text, UnorderedList, useColorMode } from '@chakra-ui/react'
import { FaCircle, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile_info } from '../_data';
import RatingBar from '../_components/rating/RatingBar';
import { Fragment } from 'react';
import Project from '../_components/project/Project';
import UnderlinedTitle from '../_components/title/UnderlinedTitle';

export default function Home() {
  const { colorMode } = useColorMode();

  const all_projects = profile_info.projects.map(p => p.items).flat();
  const grouped_skills_category = [];

  for (let i = 0; i < profile_info.skills.length; i += 2) {
    if (i + 1 < profile_info.skills.length) {
      grouped_skills_category.push([profile_info.skills[i], profile_info.skills[i + 1]]);
    } else {
      grouped_skills_category.push([profile_info.skills[i]]);
    }
  }

  return (
    <Box bg={'gray.800'}>
      <Box
        w={'100vw'} h={'100vh'}
        backgroundImage={`url('')`}
        position={'relative'}
      >
        <AbsoluteCenter axis={'both'} minW={'fit-content'}>
          <Text textAlign={'center'} minW={'70vw'} fontSize={35}>I&apos;m <u><b>Francis Painchaud</b></u>, a <u>Software Developer</u> from <u>Quebec</u> with an interest in <u>Software Development</u>, <u>Backend Development</u> and <u>Artificial Intelligence</u>.</Text>

          <Center flexDir={'column'} mt={5}>
            <Flex gap={3}>
              <Link
                my={'auto'}
                isExternal
                maxW={'fit-content'}
                href={'https://github.com/Darkxys'}
                _hover={{
                  color: 'purple'
                }}>
                <FaGithub size={30} />
              </Link>
              <Link
                my={'auto'}
                isExternal
                maxW={'fit-content'}
                href={'https://www.linkedin.com/in/francis-painchaud-1a5003246/'}
                _hover={{
                  color: 'purple'
                }}>
                <FaLinkedin size={30} />
              </Link>
            </Flex>
            <Link

              mt={5}
              isExternal
              maxW={'fit-content'}
              href={'https://www.linkedin.com/in/francis-painchaud-1a5003246/'}
            >
              <Button rounded={20} border={'2px purple solid'}>
                <Flex flexDir={'row'} gap={2}>
                  <Text>Resume</Text>
                  <FaFileDownload />
                </Flex>
              </Button>
            </Link>
          </Center>
        </AbsoluteCenter>
      </Box>
      <Box w={'full'} bg={'gray.900'} py={20}>
        <Center mx={'auto'} maxW={{ base: '100em', md: '70em' }} flexDirection={{ base: 'column', md: 'row' }}>
          <Box maxW={'30vw'} w={{ base: '100vw', md: '15em' }}>
            <Image
              mx={{ base: 'auto', md: '0' }}
              minW={180} maxW={180}
              minH={180} maxH={180}
              src={profilePicture.src}
              alt={'Profile Picture'}
              rounded={20}
              boxShadow={'dark-lg'}
            />
          </Box>
          <Box
            mx={'auto'}
            w={{ base: '100vw', md: '65em' }}
            maxW={{ base: '75vw', md: '40em' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Text fontWeight={'bold'} fontSize={'1.5em'} mb={2}>About me</Text>
            <Text>As a skilled and enthusiastic computer science professional, I excel in transforming complex business needs into efficient technical solutions. Fluent in both English and French, my expertise lies in application development, data analysis, and AI technologies. My passion for programming was sparked by a fascination with technology&apos;s potential to drive change and innovation—a force that continues to inspire my career goals. In my spare time, I immerse myself in the evolving world of AI and machine learning, constantly seeking to expand my knowledge of programming concepts and best practices.</Text>
          </Box>
        </Center>
      </Box>
      <Flex flexDirection={'column'} mt={'2em'} mx={'auto'} maxW={{ base: '100em', md: '70em' }}>
        <Flex my={'2em'} flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            maxW={'30vw'} w={{ base: '100vw', md: '15em' }}
            mx={{ base: 'auto', md: '0' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <UnderlinedTitle text={'EDUCATION'} color={'purple'} />
          </Box>
          <Box
            mx={'auto'}
            w={{ base: '100vw', md: '65em' }}
            maxW={{ base: '75vw', md: '40em' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {
              profile_info.education.map(e => {
                const graduated = new Date(e.graduated * 1000);
                const graduated_string = graduated.toLocaleDateString('en-us', { year: 'numeric', month: 'short' });

                return (
                  <Flex flexDirection={'column'} key={`education-${e.diploma_degree}`}>
                    <Text fontSize={'1.2em'} fontWeight={'bold'}>{e.diploma_type} in {e.diploma_degree}</Text>
                    <Flex gap={2} w={'inherit'} mx={{ base: 'auto', md: '0' }}>
                      <Text opacity={0.9} fontSize={'0.8em'} as='span' fontWeight={'bold'} fontStyle={'oblique'}>{e.school_name}</Text>
                      <Center><FaCircle size={'0.4em'} /></Center>
                      <Text fontSize={'0.8em'} as='span'>{graduated_string}</Text>
                    </Flex>
                  </Flex>
                )
              })
            }
          </Box>
        </Flex>
        <Divider bg={'white'} />
        <Flex my={'2em'} flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            maxW={'30vw'} w={{ base: '100vw', md: '15em' }}
            mx={{ base: 'auto', md: '0' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <UnderlinedTitle text={'WORK'} color={'purple'} />
          </Box>
          <Box
            mx={'auto'}
            w={{ base: '100vw', md: '65em' }}
            maxW={{ base: '75vw', md: '40em' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {
              profile_info.experiences.map(e => {
                const started = new Date(e.started * 1000);
                const finished = (e.finished ? new Date(e.finished * 1000) : undefined);

                const started_string = started.toLocaleDateString('en-us', { year: 'numeric', month: 'short' });
                const finished_string = finished?.toLocaleDateString('en-us', { year: 'numeric', month: 'short' });

                return (
                  <Flex flexDirection={'column'} key={`work-${e.id}`}>
                    <Text fontSize={'1.2em'} fontWeight={'bold'}>{e.job_title}</Text>
                    <Flex gap={2} w={'inherit'} mx={{ base: 'auto', md: '0' }}>
                      <Text opacity={0.9} fontSize={'0.8em'} as='span' fontWeight={'bold'} fontStyle={'oblique'}>{e.company}</Text>
                      <Center><FaCircle size={'0.4em'} /></Center>
                      <Text fontSize={'0.8em'} as='span'>{started_string} - {finished_string ?? 'Present'}</Text>
                    </Flex>
                    <Text mt={2}>Description here</Text>
                  </Flex>
                )
              })
            }
          </Box>
        </Flex>
        <Divider bg={'white'} />
        <Flex my={'2em'} flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            maxW={'30vw'} w={{ base: '100vw', md: '15em' }}
            mx={{ base: 'auto', md: '0' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <UnderlinedTitle text={'SKILLS'} color={'purple'} />
          </Box>
          <Box
            mx={'auto'}
            w={{ base: '100vw', md: '65em' }}
            maxW={{ base: '75vw', md: '40em' }}
          >
            <Flex flexDirection={'column'} gap={7}>
              {
                grouped_skills_category.map((group, index) => {
                  return (
                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={7} key={`group-category-${index}`}>
                      {
                        group.map(skills => {
                          return (
                            <Flex flexDirection={'column'} gap={1} key={`category-skill-${skills.category_name}`}>
                              <Text mx={'auto'} fontWeight={'bold'} fontSize={'1em'}>{skills.category_name}</Text>
                              {
                                skills.items.map(skill => {
                                  return (
                                    <Fragment key={`skills-${skill.skill_label}`}>
                                      <Text ml={'0.35em'} mb={-1}>{skill.skill_label}</Text>
                                      <RatingBar
                                        value={skill.score}
                                        color={'purple'}
                                        mx={'auto'}
                                        w={{ base: '100%', md: '18em', lg: '20em' }} h={'1.1em'}
                                        bg={'gray.600'}
                                      />
                                    </Fragment>
                                  )
                                })
                              }
                            </Flex>
                          )
                        })
                      }
                    </Flex>
                  )
                })
              }
            </Flex>
          </Box>
        </Flex>
        <Divider bg={'white'} />
        <Flex my={'2em'} flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            maxW={'100vw'} w={{ base: '100vw', md: '15em' }}
            mx={{ base: 'auto', md: '0' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <UnderlinedTitle text={'PROJECTS'} color={'purple'} />
          </Box>
          <Box
            mx={'auto'}
            w={{ base: '100vw', md: '65em' }}
            maxW={{ base: '100vw', md: '55em' }}
          >
            <Flex flexDirection={'column'} gap={7}>
              {
                profile_info.projects.map((group, index) => {
                  const grouped_items = [];
                  for (let i = 0; i < group.items.length; i += 3) {
                    if (i + 2 < group.items.length) {
                      grouped_items.push([group.items[i], group.items[i + 1], group.items[i + 2]]);
                    } else if (i + 1 < group.items.length) {
                      grouped_items.push([group.items[i], group.items[i + 1]]);
                    } else {
                      grouped_items.push([group.items[i]]);
                    }
                  }

                  return (
                    <>
                      <Text mx={'auto'} fontWeight={'bold'} fontSize={'1.25em'}>{group.category_name}</Text>
                      <Flex gap={7} flexDirection={'column'} key={`group-project-${index}`}>
                        {
                          grouped_items.map((projects, index) => {
                            return (
                              <Flex gap={7} key={`projects-${index}`}>
                                {
                                  projects.map(project => {
                                    return (
                                      <Project
                                        project={project}
                                        mx={'auto'}
                                        w={{ base: '25vw', md: '18vw' }}
                                        h={{ base: '25vw', md: '18vw' }}
                                      />
                                    );
                                  })
                                }
                              </Flex>
                            )
                          })
                        }
                      </Flex>
                    </>
                  )
                })
              }
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
