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
  resumeFile
} from "./assets";



type TPersonalInfo = {
  desc: string;
  exp: string;
  skills: {
    img: string
    title: string
  }[]
  displayImage: string
  name: string
  designation: string
  resume: string
  social: {
    linkedin: string;
    github: string;
  }
};

export const personalInfo: TPersonalInfo = {
  name: 'Kaustav',
  designation: 'Frontend Developer',
  desc: `I'm a Front-End Developer who loves working with React. I specialize in turning creative designs into amazing web experiences. Let's create web magic together`,
  exp: `As an experienced React developer, I excel in creating front-end web applications using HTML, CSS, JavaScript, React, Redux, Material UI, Ant Design, and Bootstrap. I've built user interfaces for static websites, consumer apps, and admin portals.
  I'm skilled in API integration using Axios and Apollo, with strong analytical and problem-solving abilities. My expertise extends to collaboration, version control with Git/GitHub, and effective communication.
  I'm ready to tackle challenges and drive project success with my technical skills and solution-oriented mindset.`,
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
    github: "https://github.com/Kaustav-Bhattacharya",
    linkedin: "https://www.linkedin.com/in/kaustav01bhattacharya/",
  }
};


export type TProjects = {
  gitLink: string
  demoLink?: string
  desc: string
  name: string
  snap: string
}

export const projects: TProjects[] = [
  {
    gitLink: 'https://github.com/Kaustav-Bhattacharya/budgeting_app',
    desc: 'Keeping track of your monthly budget made easy.',
    name: 'Budget Planner',
    demoLink: 'https://budgeting-app-drab.vercel.app',
    snap: budget_app
  },
  {
    gitLink: 'https://github.com/Kaustav-Bhattacharya/To-Do',
    desc: 'effortlessly create and manage multiple lists.',
    name: 'To-Do List',
    demoLink: 'https://papaya-conkies-34be97.netlify.app/',
    snap: to_do
  },
  {
    gitLink: '',
    desc: 'Demonstration of an informative admin Panel.',
    name: 'Admin Dashboard',
    demoLink: 'https://admin-ui-omega.vercel.app',
    snap: admin_dashboard
  },
]