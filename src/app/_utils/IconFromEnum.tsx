import { Skills } from '@/app/_types/SkillEnum';
import { Box, BoxProps } from '@chakra-ui/react';
import { FaJava } from 'react-icons/fa';
import * as icons from "@icons-pack/react-simple-icons";
import { Icon } from '@iconify/react'

interface IconFromEnumProps extends BoxProps {
  icon: Skills;
}

export const IconFromEnum = ({ icon, ...rest }: IconFromEnumProps) => {
  const getIcon = () => {
    switch (icon) {
      case Skills.Javascript: return 'devicon:javascript';
      case Skills.TailwindCSS: return 'devicon:tailwindcss';
      case Skills.Typescript: return 'devicon:typescript';
      case Skills.React: return 'logos:react';
      case Skills.Nextdotjs: return 'devicon:nextjs';
      case Skills.Nodedotjs: return 'logos:nodejs-icon';
      case Skills.ChakraUI: return 'simple-icons:chakraui';
      case Skills.HTML: return 'vscode-icons:file-type-html';
      case Skills.CSS: return 'vscode-icons:file-type-css';
      case Skills.Hasura: return 'logos:hasura-icon';
      case Skills.MySQL: return 'logos:mysql';
      case Skills.PostgreSQL: return 'devicon:postgresql-wordmark';
      case Skills.GraphQL: return 'vscode-icons:file-type-graphql';
      case Skills.MongoDB: return 'devicon:mongodb-wordmark';
      case Skills.Python: return 'logos:python';
      case Skills.Django: return 'vscode-icons:file-type-django';
      case Skills.TensorFlow: return 'logos:tensorflow';
      case Skills.Cplusplus: return 'file-icons:c';
      case Skills.C: return 'devicon:c';
      case Skills.Csharp: return 'devicon:csharp';
      case Skills.GoLang: return 'skill-icons:golang';
      case Skills.Java: return 'logos:java';
      case Skills.Blockchain: return 'icon-park:blockchain';
      default: return 'devicon:javascript';
    }
  }

  return (
    <Box {...rest}>
      <Icon icon={getIcon()} style={{width: '100%', height: '100%'}} />
    </Box>
  )
}
