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
  angular,
  tailwind,
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
  exp: `As a web developer, I specialize in crafting front-end applications using HTML, CSS, and JavaScript. My expertise spans React, Angular, React.js, and TypeScript. I've contributed to a variety of projects, from static websites to user-friendly apps and admin portals.

  Seamless API integration is my forte, employing tools like Axios and Apollo. Proficient in Git and GitHub, I prioritize effective communication and collaboration.
  
  Ready to conquer challenges, I bring a solution-oriented mindset to drive the success of your projects.`,
  skills: [
    { title: 'html', img: HTML },
    { title: 'css', img: CSS },
    { title: 'javascript', img: JS },
    { title: 'typescript', img: TS },
    { title: 'React', img: REACT },
    { title: 'Angular', img: angular },
    { title: 'git', img: GIT },
    { title: 'github', img: GITHUB },
    { title: 'Vite', img: VITE },
    { title: 'Jest', img: JEST },
    { title: 'Cypress', img: CYPRESS },
    { title: 'Tailwind', img: tailwind },
  ],
  displayImage: display,
  resume: resumeFile,
  social: {
    github: 'https://github.com/Kaustav-Bhattacharya',
    linkedin: 'https://www.linkedin.com/in/kaustav01bhattacharya/',
  },
};

export type TProjects = {
  gitLink?: string;
  demoLink?: string;
  desc: string;
  name: string;
  snap: string;
};

export const projects: TProjects[] = [
  {
    desc: 'Stay updated with your peers by sharing moments with this app',
    name: 'Snapgram',
    demoLink: 'https://snapgram-ten-puce.vercel.app',
    snap: budget_app,
  },
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


type TNavList = {
  href: string;
  icon: string;
  title: string;
}[];

export const NavList: TNavList = [
  {
    href: "#home",
    icon: "Home",
    title: "Home",
  },
  {
    href: "#about",
    icon: "User",
    title: "About",
  },
  {
    href: "#skills",
    icon: "Layers",
    title: "Skills",
  },
  {
    href: "#projects",
    icon: "Image",
    title: "Projects",
  },
  {
    href: "#contact",
    icon: "MessageSquare",
    title: "Contact",
  },
];
