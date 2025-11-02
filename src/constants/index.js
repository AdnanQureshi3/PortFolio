import project1 from "../assets/projects/project.png";
import blogyee from "../assets/projects/blogyeeApp.png";
import project3 from "../assets/projects/ecommerce.png"
import upchainIMG from "../assets/projects/upchain.png"
import filemanImg from "../assets/projects/fileman.png"

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
    title: "UpChain",
    image: upchainIMG,
    description:
      "UpChain is a team-based professional social media platform where users can connect, share posts, write articles, and collaborate. It features AI-powered tools for enhancing content, real-time chat, and a clean, intuitive UI to support career-focused networking and engagement.",
    technologies: ["React", "NodeJs" , "ExpressJs" , "MongoDB Atlas" , "AI" , "ShadCn"],
    github : "https://github.com/AdnanQureshi3/UpChain",
    livelink : "https://upchain-tvvm.onrender.com/",
  },
  {
    title: "FileMan",
    image: filemanImg,
    description:
      "FileMan is a file management system that allows users to upload, organize, and share files securely. It features a user-friendly interface, advanced search capabilities, and robust security measures to protect user data.",
    technologies: ["React", "NodeJs" , "ExpressJs" , "PostgreSQL" , "AWS-S3" , "Prisma"],
    github : "https://github.com/AdnanQureshi3/FileMan",
    livelink : "https://fileman.onrender.com/",
  },
  {
    title: "Blogee ",
    image: blogyee,
    description:
      "Blogyee is a user-friendly blogging platform that lets you easily create, customize, and share your blogs. It offers a clean interface, simple customization options, and an intuitive experience for both new and experienced writers.",
    technologies: ["EJS", "NodeJs" , "ExpressJs" , "MongoDB"],
    github : "https://github.com/AdnanQureshi3/Blogyee",
    livelink : "https://blogyee.vercel.app/",
  },
  {
    title: "E-commerce",
    image: project3,
    description:
    "This is an e-commerce app built with React and Tailwind CSS, offering a clean, responsive design. It provides a seamless shopping experience with easy navigation, product management, and fast performance.",
     technologies: ["React", "Tailwind CSS" ],
    github : "https://github.com/AdnanQureshi3/E-Commerce-Website",
    livelink : "https://e-commerce-website-five-umber.vercel.app/",
  },
  {
    title: "Stone-Paper-Scissor",
    image: project1,
    description:
      "Stone-Paper-Scissors game using HTML, CSS, JS where the player competes against the computer. The game tracks scores, determines the winner based on standard rules, and has a Reset button to clear scores. The computer picks a random choice, and results are displayed dynamically.",
    technologies: ["React", "Tailwind CSS", "Data Structure Algorithm"],
    github : "http://github.com/AdnanQureshi3/Stone-Paper-Scissor-Game",
    livelink : "https://adnanqureshi3.github.io/Stone-Paper-Scissor-Game/",
  },
];

export const CONTACT = {
  address: "Agra  , UttarPradesh , INDIA, 282001 ",
  email: "adnanq262@gmail.com",
};
