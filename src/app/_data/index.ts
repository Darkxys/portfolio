import { Skills } from "../_types/SkillEnum";

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
  main_color: 'indigo',
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
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/theproduct-space/dredd-secure`,
          website: `https://www.dreddsecure.io/`,
          image_url: `https://www.dreddsecure.io/assets/Dredd-logo.06667a25.png`,
        },
        {
          title: `sparkr.ai`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: ``,
          website: `In Development`,
          image_url: `https://app.sparkr.ai/_next/image?url=https%3A%2F%2Fmiro.medium.com%2F0*YIV93VC2Poo7VCw7&w=1920&q=75`,
        },
        {
          title: `Smart-POS`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/jayouimet/smart-pos`,
          website: `https://smart-pos-web.vercel.app/`,
          image_url: `https://lithospos.com/blog/wp-content/uploads/1200x675.webp`,
        },
        {
          title: `Final project for System development`,
          skills_used: [Skills.Nextdotjs, Skills.Javascript, Skills.Nodedotjs, Skills.ChakraUI, Skills.Hasura],
          description: `This social networking website allow users to create an account, obtaining their own page consisting of information about themselves. You have the ability to use features such as searching for other users on the network, sending friend requests and messaging other users, posting pictures, receiving notifications if someone messages you, likes or comments on your post, and if someone sends or accepts your friend request. Altering your privacy settings and managing how your account behaves is also an additional feature.`,
          source_code: `https://github.com/jayouimet/projet-dev-sys-info`,
          website: `https://projet-dev-sys-info.vercel.app/`,
          image_url: `https://imageio.forbes.com/specials-images/imageserve/61f000e1bd03a0ef1406d579/Modern-Blue-Service-Station/960x0.jpg?height=473&width=711&fit=bounds`,
        }
      ]
    },
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
    },
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
        `Project Initialization: Forked our boilerplate to set up the project structure, ensuring a solid foundation for development.`,
        `Backend Setup: Configured Hasura permissions, established serverless links, and set up Docker containers to create a robust backend environment.`,
        `Feature Documentation and Backend Analysis: Conducted an in-depth analysis to document features and identify necessary backend functions to be exposed, aligning with project requirements.`,
        `Database Design and Implementation: Developed an efficient database model, aligned with the project's needs, and populated it with relevant data, eliminating reliance on paper spreadsheets.`,
        `Efficiency Testing and Optimization: Generated embeddings after thorough research, integrated user feedback, and conducted efficiency tests using test-driven development approaches. Continuously researched and applied optimizations for fine-tuning performance as needed.`
      ]
    },
    {
      job_title: 'Junior Research Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1667275200,
      finished: 1693540800,
      company_img: `https://rechercheciusssnim.ca/wp-content/uploads/2019/07/logo-uqo.jpg`,
      descriptions: [
        `The objective of the research was to systematically evaluate the strengths and weaknesses of various Machine Learning models. This analysis was aimed at identifying optimal use-case scenarios for each model, ensuring that the most suitable Machine Learning approach is selected based on specific situational requirements.`,
        `Researched the following Machine Learning models: Neural Networks, LLM / Transformers, LSTM and GAN.`
      ]
    },
    {
      job_title: 'Teaching Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1662004800,
      finished: 1669870800,
      company_img: `https://rechercheciusssnim.ca/wp-content/uploads/2019/07/logo-uqo.jpg`,
      descriptions: [
        `I served as a teaching assistant for the "Programmation 1" course under the guidance of Professor Omer Landry Nguena Timo. My role involved providing support to students during their practical sessions by addressing their queries and concerns. Additionally, I assisted the professor in evaluating the students' competencies and identifying areas for improvement, contributing to an enhanced learning experience.`
      ]
    },
    {
      job_title: 'Full-Stack Developer Intern',
      company: 'Vulcain Metal',
      company_url: 'https://www.vulcain.com/en/',
      started: 1577854800,
      finished: 1598932800,
      company_img: 'https://media.licdn.com/dms/image/C4E0BAQFyllv_Eft-7A/company-logo_200_200/0/1630642636090/vulcain_metal_logo?e=1713398400&v=beta&t=CWja27bhuaYGYpq2M7mRgW0rbb2KfXajR6KT7s4ect8',
      descriptions: [
        `Enhanced operational efficiency by 60% through the development and implementation of a new web portal. This portal features key performance indicators (KPIs), comprehensive performance tracking, and enables sophisticated data analysis for warehouse operations, significantly improving job monitoring and management.`,
        `Revamped an outdated database into a modern, efficient model and crafted a user-friendly interface for the new inventory system. This transformation eliminated the reliance on paper spreadsheets, streamlining operations and significantly enhancing productivity for warehouse staff.`,
        `Implemented a rigorous test-driven development approach, focusing on writing comprehensive functional, specification, and unit tests using PyTest to ensure high-quality, reliable code.`,
      ]
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