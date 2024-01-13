import { IExperience, profile_info } from '@/app/_data';
import { IconFromEnum } from '@/app/_utils/IconFromEnum';
import { Center, Flex, Image, List, ListItem, Text, UnorderedList, Wrap } from '@chakra-ui/react';

interface ExperienceProps {
  experience: IExperience;
}

export const Experience = ({ experience }: ExperienceProps) => {
  const color = profile_info.main_color;
  const started = new Date(experience.started * 1000);
  const finished = (experience.finished ? new Date(experience.finished * 1000) : undefined);

  const started_string = started.toLocaleDateString('en-us', { year: 'numeric', month: 'short' });
  const finished_string = finished?.toLocaleDateString('en-us', { year: 'numeric', month: 'short' });

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 4, lg: 0 }}>
      <Flex w={{ base: '100%', lg: '25%' }} mx={{ base: 'auto', lg: 0 }}>
        <Image
          alt={'Experience Image'}
          w={'16em'}
          h={'8em'}
          src={experience.company_img}
        />
      </Flex>
      <Flex pl={{ base: 0, lg: '2rem' }} w={{ base: '100%', lg: '75%' }} mx={{ base: 'auto', lg: 0 }} flexDirection={'column'}>
        <Text fontSize={'1.25rem'} fontWeight={'bold'}>{experience.job_title}</Text>
        <Text fontSize={'1.25rem'} textColor={color} fontWeight={'bold'}>{experience.company}</Text>
        <Text fontStyle={'italic'}>{started_string} - {finished_string ?? 'Current'}</Text>
        <UnorderedList spacing={4} my={'1rem'}>
          {
            experience?.descriptions?.map((desc, index) => {
              return (
                <ListItem key={`experience-desc-${index}`}>
                  <Text>{desc}</Text>
                </ListItem>
              )
            })
          }
        </UnorderedList>
      </Flex>
    </Flex>
  )
}
