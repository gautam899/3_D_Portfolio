/* eslint-disable no-unused-vars */
import {
  problem,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  unified,
  chegg,
  healthcare,
  threejs,
  teamwork,
  promtify,
  chat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: problem,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "TeamWork",
    icon: teamwork,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Unified Mentor",
    icon: unified,
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "Learned about front-end and back-end technology.",
      "Worked on various front-end and back-end projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Honed my skills in writing clean code and debugging.",
    ],
  },
  {
    title: "Subject Matter Expert for Mathematics and Statics",
    company_name: "Chegg Inc",
    icon: chegg,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Provided high quality solution with an average quality score of 80%",
      "Learned various statistic concept like regression,hypothesis etc.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const achievements = [
  {
    achievement:
      "3 star at codechef. Achieved a impressive rating of 1648 on the coding Platform.",
    name: "codechef",
    image: "https://cdn.codechef.com/images/cc-logo.svg",
  },
  {
    achievement:
      "Knight at Leetcode with a impressive rating of 1857 and problem count of 875+.",
    name: "leetcode",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KJ34dO3Vp7rp1UHEo4eO8VAFNoHKLI9mrw&s",
  },
  {
    achievement:
      "Scored a cummulative 75% in NPTEL Programming in JAVA course of 12 Weeks.",
    name: "nptel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VRmuwZhG40QDxM_IF9klXkzNA96GmX1z2Q&s",
  },
];

const projects = [
  {
    name: "CarePulse",
    description:
      "Healthcare platform which allows users to book appointments with the physicians of there chioce. Allows the hospital to schedule and cancel appointment",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/gautam899/HealthCare",
  },
  {
    name: "Promtify",
    description:
      "A full stack promt sharing platform that allow users to share AI prompts and search prompts. User can view each other's profile",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promtify,
    source_code_link: "https://github.com/gautam899/Promptify_Updated",
  },
  {
    name: "Chat APP",
    description:
      "A MERN stack chat application enabling users to initiate both one-on-one and group conversations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "monogodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/gautam899/MERN_CHAT_APP",
  },
];

export { services, technologies, experiences, achievements, projects };
