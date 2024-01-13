import { Skills } from '@/app/_types/SkillEnum';
import { Icon } from '@chakra-ui/react';
import { FaJava } from 'react-icons/fa';
import * as icons from "@icons-pack/react-simple-icons";

export const IconFromEnum = (icon: (Skills)): icons.IconType  => {
  switch (icon) {
    case Skills.Javascript: return icons.SiJavascript;
    case Skills.Typescript: return icons.SiTypescript;
    case Skills.React: return icons.SiReact;
    case Skills.Nextdotjs: return icons.SiNextdotjs;
    case Skills.Nodedotjs: return icons.SiNodedotjs;
    case Skills.ChakraUI: return icons.SiChakraui;
    case Skills.HTML: return icons.SiHtml5;
    case Skills.CSS: return icons.SiCss3;
    case Skills.Hasura: return icons.SiHasura;
    case Skills.MySQL: return icons.SiMysql;
    case Skills.PostgreSQL: return icons.SiPostgresql;
    case Skills.GraphQL: return icons.SiGraphql;
    case Skills.MongoDB: return icons.SiMongodb;
    case Skills.Python: return icons.SiPython;
    case Skills.Django: return icons.SiDjango;
    case Skills.TensorFlow: return icons.SiTensorflow;
    case Skills.Cplusplus: return icons.SiCplusplus;
    case Skills.C: return icons.SiC;
    case Skills.Csharp: return icons.SiCsharp;
    case Skills.GoLang: return icons.SiGo;
    case Skills.Java: return FaJava;
    case Skills.Blockchain: return icons.SiBnbchain;
    default: return icons.SiJavascript;
  }
}
