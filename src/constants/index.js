import project1 from "../assets/projects/project.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const ABOUT_TEXT = `

Hi, I am Adnan Qureshi, an ECE undergraduate at National Institute of Technology Hamirpur (Batch of 2026) 🎓, a passionate Full-Stack Developer 💻 and Competitive Programmer 🏆 from Agra. As a fresher, I have been actively working with technologies like React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, TypeScript, JavaScript, and C++ ⚡, focusing on building efficient and user-friendly web applications. I enjoy Competitive Programming 📊 and continuously enhance my Data Structures, Algorithms, and Problem-Solving skills through platforms like CodeChef, LeetCode, and CodeForces. Always eager to learn and adapt 🔥, I thrive in collaborative environments and embrace new challenges to refine my expertise. 🚀
`;

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    title: "Stone-Paper-Scissor",
    image: project1,
    description:
      "Stone-Paper-Scissors game using HTML, CSS, JS where the player competes against the computer. The game tracks scores, determines the winner based on standard rules, and has a Reset button to clear scores. The computer picks a random choice, and results are displayed dynamically.",
    technologies: ["React", "Tailwind CSS", "Data Structure Algorithm"],
    github : "http://github.com/AdnanQureshi3/Stone-Paper-Scissor-Game",
    livelink : "https://adnanqureshi3.github.io/Stone-Paper-Scissor-Game/",
  },
  {
    title: "Expense Tracking System",
    image: project2,
    description:
      "This project will develop a web application for users to effectively manage their finances through expense tracking. It will leverage the MERN stack (MongoDB, Express, React, Node.js) to create a robust and user-friendly experience.",
    technologies: ["React", "NodeJs" , "ExpressJs" , "MongoDB"],
    github : "https://github.com/Ayush-Petwal/Expence-Tracking-System",
    livelink : "https://expencetrackingsystem.vercel.app/",
  },
  {
    title: "Let’s Meet",
    image: project3,
    description:
      "Let's Meet is a web-based video conferencing platform built with Next.js, inspired by popular tools like Zoom. It aims to provide a seamless and efficient way for users to connect and collaborate virtually.",
    technologies: ["NextJs", "Tailwind CSS" , "Shadcn"],
    github : "https://github.com/Ayush-Petwal/lets_meet/",
    livelink : "https://letsmeetayushpetwal.vercel.app/",
  },
  {
    title: " Wine Quality Prediction",
    image: project4,
    description:
      "This project aims to predict wine quality using machine learning by analyzing its chemical composition.",
    technologies: ["Python", "Machine Learning"],
    github : "https://github.com/Ayush-Petwal/Wine-Quality-Prediction",
    livelink : "https://github.com/Ayush-Petwal/Wine-Quality-Prediction",
  },
];

export const CONTACT = {
  address: "Agra  , UttarPradesh , INDIA, 242001 ",
  email: "adnanq262@gmail.com",
};
