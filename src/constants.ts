import {
  CSS,
  CYPRESS,
  GIT,
  GITHUB,
  HTML,
  JEST,
  JS,
  REACT,
  TS,
  VITE,
  budget_app,
  to_do,
  admin_dashboard,
  display,
  resumeFile,
} from './assets';

type TPersonalInfo = {
  desc: string;
  exp: string;
  skills: {
    img: string;
    title: string;
  }[];
  displayImage: string;
  name: string;
  designation: string;
  resume: string;
  social: {
    linkedin: string;
    github: string;
  };
};

export const personalInfo: TPersonalInfo = {
  name: 'Kaustav',
  designation: 'Frontend Developer',
  desc: `Hello, I'm Kaustav, a passionate Front-End Developer with a deep love for crafting exceptional web experiences using React. I have a knack for transforming creative designs into captivating websites, and I'm eager to collaborate on your next digital project.`,
  exp: `My journey as a React developer has been a rewarding one. I specialize in building front-end web applications, utilizing the magic of HTML, CSS, and JavaScript, and weaving in the power of React, Redux, Material UI, and more. I've contributed to projects ranging from static websites to user-friendly apps and versatile admin portals.
  I'm well-versed in the art of seamless API integration using Axios and Apollo, and I pride myself on my strong analytical and problem-solving skills. Collaboration is key for me, and I'm skilled in the mystical ways of Git and GitHub for version control. Effective communication is at the heart of what I do.
  Ready to take on challenges and drive the success of your projects with my technical expertise and solution-oriented mindset.`,
  skills: [
    { title: 'html', img: HTML },
    { title: 'css', img: CSS },
    { title: 'git', img: GIT },
    { title: 'github', img: GITHUB },
    { title: 'javascript', img: JS },
    { title: 'typescript', img: TS },
    { title: 'React', img: REACT },
    { title: 'Vite', img: VITE },
    { title: 'Jest', img: JEST },
    { title: 'Cypress', img: CYPRESS },
  ],
  displayImage: display,
  resume: resumeFile,
  social: {
    github: 'https://github.com/Kaustav-Bhattacharya',
    linkedin: 'https://www.linkedin.com/in/kaustav01bhattacharya/',
  },
};

export type TProjects = {
  gitLink: string;
  demoLink?: string;
  desc: string;
  name: string;
  snap: string;
};

export const projects: TProjects[] = [
  {
    gitLink: 'https://github.com/Kaustav-Bhattacharya/budgeting_app',
    desc: 'Keeping track of your monthly budget made easy.',
    name: 'Budget Planner',
    demoLink: 'https://budgeting-app-drab.vercel.app',
    snap: budget_app,
  },
  {
    gitLink: 'https://github.com/Kaustav-Bhattacharya/To-Do',
    desc: 'effortlessly create and manage multiple lists.',
    name: 'To-Do List',
    demoLink: 'https://papaya-conkies-34be97.netlify.app/',
    snap: to_do,
  },
  {
    gitLink: '',
    desc: 'Demonstration of an informative admin Panel.',
    name: 'Admin Dashboard',
    demoLink: 'https://admin-ui-omega.vercel.app',
    snap: admin_dashboard,
  },
];
