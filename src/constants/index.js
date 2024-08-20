import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    fullstack,
    developer,
    react,
    gamedev,
    pacman,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "journey",
      title: "Journey",
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
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Design",
      icon: backend,
    },
    {
      title: "Linux",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Introduction to Web Development",
      company_name: "",
      icon: developer,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Started with foundational web technologies, including HTML, CSS, and JavaScript.",
        "Completed initial projects to solidify understanding of web development basics.",
      ],
    },
    {
      title: "React",
      company_name: "",
      icon: react,
      iconBg: "#E6DEDD",
      date: "2024",
      points: [
        "Transitioned to learning React, focusing on building dynamic user interfaces.",
        "Developed a personal portfolio website using React and Tailwind CSS.",
        
      ],
    },
    {
      title: "MERN Stack",
      company_name: "",
      icon: fullstack,
      iconBg: "#E6DEDD",
      date: "2024",
      points: [
        "Learning the MERN (MongoDB, Express.js, React, Node.js) stack, focusing on full-stack application development.",
      ],
    },
    {
      title: "Game Development",
      company_name: "",
      icon: gamedev,
      iconBg: "#383E56",
      date: "2024-2026",
      points: [
        "Began exploring game development using Unity and Unreal Engine.",
        "Created simple 2D games and started learning C# for game scripting.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "PacMan",
      description:
        "A game where the player navigates a maze, consuming all the food to advance to the next level while avoiding ghosts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pacman,
      source_code_link: "https://github.com/Ronit9320/Pacman",
    },
  ];
  
  export { services, technologies, experiences, projects };