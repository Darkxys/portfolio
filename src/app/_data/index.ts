interface ISkill {
  skill_label: string;
  score: number;
}

export interface IProject {
  experiece_id?: number;
  title: string;
  skills_acquired: ISkill[];
  short_description: string;
  description: string;
  source_code?: string;
  website?: string;
  image_url?: string;
}

interface IProfileInfo {
  skills: {
    category_name: string;
    items: ISkill[];
  }[],
  projects: {
    category_name: string;
    items: IProject[];
  }[],
  education: {
    school_name: string;
    diploma_type: string;
    diploma_degree: string;
    skills_obtained: string[];
    started: number;
    graduated: number;
  }[],
  experiences: {
    id: number;
    job_title: string;
    company: string;
    company_url: string;
    started: number;
    finished?: number;
  }[]
};

const profile_info: IProfileInfo = {
  skills: [
    {
      category_name: "Web development",
      items: [
        {
          skill_label: "HTML/CSS/JS",
          score: 4.5
        },
        {
          skill_label: "React.JS",
          score: 4
        },
        {
          skill_label: "NextJS",
          score: 4
        },
      ]
    },
    {
      category_name: "Databases",
      items: [
        {
          skill_label: "SQL",
          score: 4
        },
        {
          skill_label: "MongoDB",
          score: 4.5
        },
        {
          skill_label: "Hasura",
          score: 3.5
        },
      ]
    },
    {
      category_name: "Software Development",
      items: [
        {
          skill_label: "C#",
          score: 4
        },
        {
          skill_label: "C++",
          score: 4
        },
        {
          skill_label: "Python",
          score: 4.5
        },
        {
          skill_label: "Java",
          score: 4
        },
      ]
    },
    {
      category_name: "Machine Learning",
      items: [
        {
          skill_label: "Ollama",
          score: 4
        },
        {
          skill_label: "Pytorch",
          score: 3.5
        },
        {
          skill_label: "Tensorflow",
          score: 4
        },
      ]
    },
    {
      category_name: "Spoken Languages",
      items: [
        {
          skill_label: "French",
          score: 5
        },
        {
          skill_label: "English",
          score: 4.5
        },
      ]
    },
  ],
  projects: [
    {
      category_name: "Web Development",
      items: [
        {
          experiece_id: 0,
          title: `XPENS.AI`,
          skills_acquired: [
            {
              skill_label: `Python`,
              score: 4,
            },
            {
              skill_label: `ReactJS`,
              score: 3,
            },
            {
              skill_label: `MongoDB`,
              score: 4.5,
            },
            {
              skill_label: `Data Structure`,
              score: 3.5,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: ``,
          website: `https://xpens.ai/`,
          image_url: `https://media.licdn.com/dms/image/C4E0BAQHHlUAhE-drDQ/company-logo_200_200/0/1630642427248/xpensai_logo?e=2147483647&v=beta&t=uvoKMiF3xpkJzToMEG6Dab80UPVatkgf9Zehljj44DA`,
        },
        {
          experiece_id: 0,
          title: `Dredd-Secure`,
          skills_acquired: [
            {
              skill_label: `NextJS`,
              score: 4,
            },
            {
              skill_label: `GoLang`,
              score: 3,
            },
            {
              skill_label: `Blockchain`,
              score: 3,
            },
            {
              skill_label: `Cosmos SDK`,
              score: 3,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: `https://github.com/theproduct-space/dredd-secure`,
          website: `https://www.dreddsecure.io/`,
          image_url: `https://www.dreddsecure.io/assets/Dredd-logo.06667a25.png`,
        },
        {
          experiece_id: 0,
          title: `sparkr.ai`,
          skills_acquired: [
            {
              skill_label: `NextJS`,
              score: 5,
            },
            {
              skill_label: `Ollama`,
              score: 4.5,
            },
            {
              skill_label: `Hasura`,
              score: 4,
            },
            {
              skill_label: `Fine-Tuning Generative AI`,
              score: 4,
            },
            {
              skill_label: `AI`,
              score: 4,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: ``,
          website: `In Development`,
          image_url: `https://app.sparkr.ai/_next/image?url=https%3A%2F%2Fmiro.medium.com%2F0*YIV93VC2Poo7VCw7&w=1920&q=75`,
        },
        {
          experiece_id: 3,
          title: `CMS`,
          skills_acquired: [
            {
              skill_label: `Django`,
              score: 4.5,
            },
            {
              skill_label: `Python`,
              score: 5,
            },
            {
              skill_label: `ReactJS`,
              score: 4,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: ``,
          website: ``,
          image_url: `https://www.onsitegeeks.ca/wp-content/uploads/2021/07/cms2-01.png`,
        },
        {
          title: `Smart-POS`,
          skills_acquired: [
            {
              skill_label: `NextJS`,
              score: 5,
            },
            {
              skill_label: `Ollama`,
              score: 4.5,
            },
            {
              skill_label: `Hasura`,
              score: 4,
            },
            {
              skill_label: `Fine-Tuning Generative AI`,
              score: 4,
            },
            {
              skill_label: `AI`,
              score: 4,
            },
          ],
          short_description: `A POS that uses an LLM to find the location of most similar item queried.`,
          description: ``,
          source_code: `https://github.com/jayouimet/smart-pos`,
          website: `https://smart-pos-web.vercel.app/`,
          image_url: `https://lithospos.com/blog/wp-content/uploads/1200x675.webp`,
        },
        {
          title: `Final project for System development`,
          skills_acquired: [
            {
              skill_label: `NextJS`,
              score: 5,
            },
            {
              skill_label: `Engineering`,
              score: 4,
            },
            {
              skill_label: `Algorithm`,
              score: 4,
            },
          ],
          short_description: ``,
          description: ``,
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
          title: `Final project for AI class`,
          skills_acquired: [
            {
              skill_label: `Python`,
              score: 5,
            },
            {
              skill_label: `Neural Networks`,
              score: 4.5,
            },
            {
              skill_label: `Algorithms`,
              score: 4.5,
            },
            {
              skill_label: `Data Structure`,
              score: 4,
            },
            {
              skill_label: `Optimization`,
              score: 4,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: `https://github.com/Darkxys/final-project-INF1183`,
          website: ``,
          image_url: `https://victorzhou.com/media/nn-series/network.svg`,
        },
        {
          experiece_id: 1,
          title: `Machine Learning models Exploration`,
          skills_acquired: [
            {
              skill_label: `Python`,
              score: 5,
            },
            {
              skill_label: `Neural Networks`,
              score: 4.5,
            },
            {
              skill_label: `Algorithms`,
              score: 4,
            },
            {
              skill_label: `Data Structure`,
              score: 4,
            },
            {
              skill_label: `TensorFlow`,
              score: 3.5,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: `https://github.com/Darkxys/ml-exploration`,
          website: ``,
          image_url: `https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg`,
        },
        {
          title: `AI Chess Engine`,
          skills_acquired: [
            {
              skill_label: `C++`,
              score: 4,
            },
            {
              skill_label: `Algorithms`,
              score: 4.5,
            },
            {
              skill_label: `Data Structure`,
              score: 4.5,
            },
          ],
          short_description: ``,
          description: ``,
          source_code: `https://github.com/Darkxys/chess-ai-cpp`,
          website: ``,
          image_url: `https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-10/chess-AI.jpg`,
        },
      ]
    },
  ],
  experiences: [
    {
      id: 0,
      job_title: 'Full-Stack Developer',
      company: 'ProductShop',
      company_url: 'https://www.productshop.io/',
      started: 1646110800,
      finished: undefined,
    },
    {
      id: 1,
      job_title: 'Junior Research Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1667275200,
      finished: 1693540800,
    },
    {
      id: 2,
      job_title: 'Teaching Assistant',
      company: 'UQO',
      company_url: 'https://uqo.ca/',
      started: 1662004800,
      finished: 1669870800,
    },
    {
      id: 3,
      job_title: 'Full-Stack Developer Intern',
      company: 'Vulcain Metal',
      company_url: 'https://www.vulcain.com/en/',
      started: 1577854800,
      finished: 1598932800,
    }
  ],
  education: [
    {
      school_name: `UQO`,
      diploma_type: `Bachelor of Science`,
      diploma_degree: `Computer Science`,
      skills_obtained: ['Python', 'AI', 'Web Development', 'Algorithms', 'Data Structures'],
      started: 1630468800,
      graduated: 1701406800,

    },
    {
      school_name: `CSTJ (CEGEP of Saint-Jerome)`,
      diploma_type: `DEC (Technique)`,
      diploma_degree: `Computer Technician`,
      skills_obtained: ['C++', 'C#', 'Web Development', 'Databases'],
      started: 1472702400,
      graduated: 1588305600,

    }
  ],
}

export { profile_info };