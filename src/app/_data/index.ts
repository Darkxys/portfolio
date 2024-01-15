import { Skills } from "../_types/SkillEnum";
import dredd from '../_assets/dredd-secure.png';
import sparkr from '../_assets/sparkr-ai.png';
import smartpos from '../_assets/smart-pos.png';
import sgp from '../_assets/sgp.png';

export interface IProject {
  title: string;
  skills_used: Skills[];
  description: string;
  source_code?: string;
  website?: string;
  image_url?: string;
}

export interface IEducation {
  school_name: string;
  diploma_type: string;
  diploma_degree: string;
  skills_obtained: Skills[];
  started: number;
  graduated: number;
  relevant_courses: string[];
  school_img: string;
}

export interface IExperience {
  job_title: string;
  company: string;
  company_url: string;
  started: number;
  finished?: number;
  company_img: string;
  descriptions?: string[];
  skills_obtained: Skills[];
}

interface IProfileInfo {
  main_color: string;
  email: string,
  github: string,
  linkedin: string,
  projects: {
    category_name: string;
    items: IProject[];
  }[],
  education: IEducation[],
  experiences: IExperience[]
};

const profile_info: IProfileInfo = {
  main_color: 'purple',
  email: 'painchaudfrancis@gmail.com',
  github: 'https://github.com/Darkxys',
  linkedin: 'https://www.linkedin.com/in/francis-painchaud-1a5003246/',
  projects: [
    {
      category_name: "Web Development",
      items: [
        {
          title: `XPENS.AI`,
          skills_used: [Skills.Python, Skills.React, Skills.Javascript, Skills.Nodedotjs,],
          description: `This web portal offers a streamlined approach to invoice management by enabling users to scan invoices from PDF format directly into a database using advanced AI technology. The system is designed to facilitate meticulous monitoring of invoice costs through an intuitive user interface. It incorporates a reliable search algorithm tailored for effective invoice tracking. Additionally, the portal includes an automated email notification service, which alerts users when predefined conditions are met, enhancing operational efficiency and responsiveness.`,
          source_code: ``,
          website: `https://xpens.ai/`,
          image_url: `https://media.licdn.com/dms/image/C4E0BAQHHlUAhE-drDQ/company-logo_200_200/0/1630642427248/xpensai_logo?e=2147483647&v=beta&t=uvoKMiF3xpkJzToMEG6Dab80UPVatkgf9Zehljj44DA`,
        },
        {
          title: `Dredd-Secure`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.GoLang, Skills.Blockchain],
          description: `This platform provides a seamless solution for cross-chain asset trading within the Cosmos Blockchain ecosystem. It also serves as a dedicated module, designed to facilitate these transactions using the Cosmos SDK in Go language, ensuring efficient and secure interoperability between different blockchain networks within the Cosmos ecosystem.`,
          source_code: `https://github.com/theproduct-space/dredd-secure`,
          website: `https://www.dreddsecure.io/`,
          image_url: dredd.src,
        },
        {
          title: `sparkr.ai`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This platform leverages advanced generative AI models, including LLaMa2, to revolutionize content creation for digital marketing. It offers an array of services including the development of social media blogs, email marketing strategies, comprehensive content marketing, creation of paid media content, and SEO keyword optimization. Additionally, it possesses the capability to generate contextually relevant images, aligning seamlessly with the specified topics or articles.`,
          source_code: ``,
          website: `In Development`,
          image_url: sparkr.src,
        },
        {
          title: `Smart-POS`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This web portal offers a comprehensive search functionality, enabling users to meticulously explore our extensive inventory. When a user's query does not correspond to any specific item in our collection, the system, powered by advanced generative AI models, provides detailed product descriptions. Additionally, it offers intelligent suggestions to refine the query, ensuring it aligns more closely with available items in our store.`,
          source_code: `https://github.com/jayouimet/smart-pos`,
          website: `https://smart-pos-web.vercel.app/`,
          image_url: smartpos.src,
        },
        {
          title: `Final project for System development`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This web portal is designed to facilitate the management of a fuel pump system. Prior to development, the project necessitated comprehensive engineering documentation, including models, schemas, and diagrams, to ensure a robust foundation. The platform enables users to efficiently record transactions correlating to the volume of fuel dispensed. Additionally, it provides real-time insights into remaining fuel levels and offers clients an intuitive interface for fuel dispensation.`,
          source_code: `https://github.com/jayouimet/projet-dev-sys-info`,
          website: `https://projet-dev-sys-info.vercel.app/`,
          image_url: sgp.src,
        }
      ]
    }/*TODO: if i ever make a UI for those, uncomment this,
    {
      category_name: "Artificial Intelligence",
      items: [
        {
          title: `Neural Network and KNN algorithms`,
          skills_used: [Skills.Python],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/Darkxys/final-project-INF1183`,
          website: ``,
          image_url: `https://victorzhou.com/media/nn-series/network.svg`,
        },
        {
          title: `Machine Learning models Exploration`,
          skills_used: [Skills.Python, Skills.TensorFlow],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/Darkxys/ml-exploration`,
          website: ``,
          image_url: `https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg`,
        },
        {
          title: `AI Chess Engine`,
          skills_used: [Skills.Cplusplus],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/Darkxys/chess-ai-cpp`,
          website: ``,
          image_url: `https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-10/chess-AI.jpg`,
        },
      ]
    },*/
  ],
  experiences: [
    {
      job_title: 'Full-Stack Developer',
      company: 'ProductShop',
      company_url: 'https://www.productshop.io/',
      started: 1646110800,
      finished: undefined,
      company_img: 'https://media.licdn.com/dms/image/C4E0BAQE8Y-OrbmwAcA/company-logo_200_200/0/1642454414003?e=1713398400&v=beta&t=abHNnzbVk_EPCKeQncoDPFVjgeMqCw1N6jxSDkOjMg4',
      descriptions: [
        `Established a robust backend environment by configuring Hasura permissions, using serverless links, and setting up Docker containers.`,
        `Meticulously documented features and conducted backend analysis to align with project requirements, leading to an efficient database model.`,
        `Enhanced efficiency by generating embeddings from research and feedback, rigorously testing, and continuously optimizing performance with test-driven development.`,  
      ],
      skills_obtained: [Skills.Nextdotjs, Skills.Typescript, Skills.ChakraUI, Skills.GraphQL, Skills.GoLang, Skills.Hasura, Skills.Javascript, Skills.MongoDB, Skills.Nodedotjs, Skills.PostgreSQL, Skills.React]
    },
    {
      job_title: 'Junior Research Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1667275200,
      finished: 1693540800,
      company_img: `https://rechercheciusssnim.ca/wp-content/uploads/2019/07/logo-uqo.jpg`,
      descriptions: [
        `Comprehensive evaluation of those Machine Learning models: Neural Networks, LLM/Transformers, LSTM, GAN.`,
        `Focus on identifying strengths, weaknesses, and ideal use-case scenarios for appropriate model selection based on specific situational needs.`
      ],
      skills_obtained: [Skills.Python, Skills.TensorFlow]
    },
    {
      job_title: 'Teaching Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1662004800,
      finished: 1669870800,
      company_img: `https://rechercheciusssnim.ca/wp-content/uploads/2019/07/logo-uqo.jpg`,
      descriptions: [
        `I assisted in the "Programmation 1" course under Professor Omer Landry Nguena Timo, supporting students during practical sessions, addressing their queries, and aiding the professor in evaluating student competencies to enhance learning.`
      ],
      skills_obtained: [Skills.Java]
    },
    {
      job_title: 'Full-Stack Developer Intern',
      company: 'Vulcain Metal',
      company_url: 'https://www.vulcain.com/en/',
      started: 1577854800,
      finished: 1598932800,
      company_img: 'https://media.licdn.com/dms/image/C4E0BAQFyllv_Eft-7A/company-logo_200_200/0/1630642636090/vulcain_metal_logo?e=1713398400&v=beta&t=CWja27bhuaYGYpq2M7mRgW0rbb2KfXajR6KT7s4ect8',
      descriptions: [
        `Developed a sophisticated web portal for enhanced operational efficiency in warehouse operations, incorporating KPIs, performance tracking, and advanced data analysis tools.`,
        `Transformed an outdated database into a modern, user-friendly inventory system, eliminating the need for paper spreadsheets and significantly improving staff productivity.`,
        `Implemented a test-driven development approach using PyTest, focusing on comprehensive functional, specification, and unit testing to ensure high-quality and reliable code.`,
      ],
      skills_obtained: [Skills.React, Skills.Nodedotjs, Skills.Django, Skills.Python, Skills.Javascript, Skills.Nodedotjs, Skills.MySQL]
    }
  ],
  education: [
    {
      school_name: `UQO`,
      diploma_type: `BSc`,
      diploma_degree: `in Computer Science`,
      skills_obtained: [Skills.Python, Skills.Java, Skills.MySQL, Skills.Javascript],
      relevant_courses: ["Data Structures & Algorithms", "Software Design", "Web Development", "Databases", "Artificial Intelligence"],
      started: 1630468800,
      graduated: 1701406800,
      school_img: 'https://rechercheciusssnim.ca/wp-content/uploads/2019/07/logo-uqo.jpg',
    },
    {
      school_name: `CSTJ (CEGEP of Saint-Jerome)`,
      diploma_type: `DEC (Technique)`,
      diploma_degree: `Computer Technician`,
      skills_obtained: [Skills.Cplusplus, Skills.Csharp, Skills.MySQL, Skills.Javascript, Skills.HTML, Skills.CSS],
      relevant_courses: ["Web Development", "Databases", "Software Development"],
      started: 1472702400,
      graduated: 1588305600,
      school_img: 'https://remise.cstj.qc.ca/images/LogoCSTJ.png'
    }
  ],
}

export { profile_info };