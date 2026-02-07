const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Strengths",
    link: "#strengths",
  },
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    value: 1880,
    suffix: "+",
    label: "LeetCode Rating",
    description: "Top 5% globally"
  },
  {
    value: 500,
    suffix: "+",
    label: "Problems Solved",
    description: "DSA mastery across all coding platforms"
  },
  {
    value: 400,
    suffix: "+",
    label: "GitHub Contributions",
    description: "Consistent coding activity last year"
  },
  {
    value: 10,
    suffix: "+",
    label: "Projects",
    description: "Fullstack applications"
  }
];

const abilities = [
  {
    imgPath: "/images/brain.png",
    title: "Logical Problem Breakdown",
    desc: "I focus on breaking problems into smaller, testable pieces. Whether debugging or designing a feature, I work step by step until the logic holds."
  },
  {
    imgPath: "/images/clock.png",
    title: "Consistent Execution",
    desc: "I prefer steady progress over bursts of motivation. I plan tasks, finish what I start, and keep projects moving without unnecessary delays."
  },
  {
    imgPath: "/images/goals.png",
    title: "Attention to Implementation Details",
    desc: "I pay attention to edge cases, structure, and usability. The goal isn’t just functionality, but code and UI that hold up under real use."
  }
];


export const myProjects = [
  {
    id: 8,
    title: "Secure Short Link Platform",
    description: "A production-grade URL shortening system with analytics, caching, and authentication-focused security features.",
    subDescription: [
      "Built a full short link system supporting analytics, QR codes, expiration, and link updates.",
      "Implemented strict request validation using Zod to enforce input safety.",
      "Added email-based 2FA using OTP verification for account security.",
      "Integrated Redis caching to speed up redirects and reduce database load."
    ],
    href: "https://github.com/Sayan0361/url-shortener",
    logo: "",
    image: "/images/url-shortner.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 6,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 1,
    title: "CreationSuite.ai",
    description: "CreationSuite.ai is an AI-powered SaaS platform offering smart tools for content generation, resume review, and visual creativity. Integrated with cutting-edge AI APIs like Gemini & Clipdrop.",
    subDescription: [
      "Developed a fully interactive AI-powered platform with React.js.",
      "Integrated multiple AI APIs including Gemini and Clipdrop for various features.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Implemented PostgreSQL for efficient database storage.",
    ],
    href: "https://creation-suite-ai.vercel.app/",
    logo: "",
    image: "/images/creationsuite.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "AI APIs",
        path: "/assets/logos/ai.svg",
      },
      {
        id: 6,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
    ],
  },
  {
  id: 9,
  title: "Finance & Investment Club Platform",
  description: "A production-grade full-stack platform built as a freelance developer for the Finance & Investment Club, Miranda House.",
  subDescription: [
    "Built admin and super-admin dashboards for content and platform management.",
    "Developed secure REST APIs using JWT authentication and role-based access control.",
    "Implemented media upload and storage workflows using Cloudinary.",
    "Collaborated in a 3-member agile team and deployed the platform using Vercel and Render."
  ],
  href: "https://github.com/SubhradeepBasu18/FIC-Freelance",
  logo: "",
  image: "/images/FICHM.png",
  tags: [
    {
      id: 1,
      name: "React.js",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "TypeScript",
      path: "/assets/logos/typescript.svg",
    },
    {
      id: 3,
      name: "Node.js",
      path: "/assets/logos/nodejs.svg",
    },
    {
      id: 4,
      name: "MongoDB",
      path: "/assets/logos/mongodb.svg",
    },
    {
      id: 5,
      name: "Cloudinary",
      path: "/assets/logos/cloudinary.svg",
    },
  ],
},

  {
    id: 2,
    title: "Plant Disease Detection System",
    description: "A CNN-based image classification system for identifying plant diseases using transfer learning with MobileNetV2.",
    subDescription: [
      "Trained a MobileNetV2-based CNN using PyTorch for multi-class plant disease classification.",
      "Implemented end-to-end training, validation, and testing pipelines with image preprocessing.",
      "Applied transfer learning and model checkpointing for stable and reusable training runs.",
      "Achieved ~96% accuracy on a held-out test dataset."
    ],
    href: "https://github.com/Sayan0361/Plant-Disease-Detection",
    logo: "",
    image: "/images/plant-disease.jpeg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-svg.svg",
      },
      {
        id: 2,
        name: "PyTorch",
        path: "/assets/logos/pytorch.svg",
      },
      {
        id: 3,
        name: "CNN",
        path: "/assets/logos/cnn.svg",
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/Streamlit.svg",
      },
    ],
  },
  {
    id: 3,
    title: "LangBridge",
    description: "LangBridge empowers users to master new languages through authentic conversations with native speakers. Features text chat, video calls, and over 30 customizable UI themes.",
    subDescription: [
      "Built a language learning platform with React.js and Node.js.",
      "Integrated Stream Chat for real-time messaging between users.",
      "Implemented video call functionality for language practice.",
      "Designed customizable UI themes with Tailwind CSS.",
    ],
    href: "https://langbridge-4c3e.onrender.com/",
    logo: "",
    image: "/images/langbridge.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
    ],
  },
  {
    id: 4,
    title: "HireMe - Job Portal",
    description: "A feature-rich job platform that bridges the gap between employers and job seekers. It offers secure authentication, a sleek dark/light mode, a collaborative community forum, and an intelligent chatbot assistant.",
    subDescription: [
      "Built a scalable application with React.js and Node.js, integrating job posting and application features.",
      "Implemented secure authentication and database management using MongoDB.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added community forum and chatbot features for improved user engagement.",
    ],
    href: "https://github.com/Sayan0361/JobPortal",
    logo: "",
    image: "/images/jobportal.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Real Time Tracking",
    description: "A real-time location sharing app featuring GPS tracking, live updates via Socket.IO, and an interactive map with Leaflet/Mapbox.",
    subDescription: [
      "Developed a real-time tracking application with EJS and JavaScript.",
      "Integrated Leaflet/Mapbox for interactive map functionality.",
      "Implemented Socket.IO for live location updates between users.",
      "Built backend with Node.js and Express.",
    ],
    href: "https://real-time-tracking-app-8ijl.onrender.com/",
    logo: "",
    image: "/images/Map.png",
    tags: [
      {
        id: 1,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 2,
        name: "EJS",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Leaflet",
        path: "/assets/logos/leaflet.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Spider-Man Landing Page",
    description: "A high-impact, interactive website for a conceptual Spider-Man game. Built with HTML, CSS, and JavaScript with cinematic design.",
    subDescription: [
      "Developed an interactive Spider-Man game landing page.",
      "Built with vanilla HTML, CSS, and JavaScript.",
      "Implemented cinematic animations and effects.",
      "Designed for high visual impact and engagement.",
    ],
    href: "https://spiderman-landing-page.onrender.com/",
    logo: "",
    image: "/images/spiderman.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Virtual Reality Landing Page",
    description: "An immersive landing page showcasing VR technology, with parallax effects, GSAP animations, and a modern aesthetic for engaging user experience.",
    subDescription: [
      "Created an immersive VR landing page with React.js.",
      "Implemented GSAP animations for engaging user interactions.",
      "Designed with Tailwind CSS for responsive styling.",
      "Added parallax effects for depth and immersion.",
    ],
    href: "https://virtualr-2-296115l6d-sayan0361s-projects.vercel.app/",
    logo: "",
    image: "/images/virtualr.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  }

];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    imagePath: "/images/react-icon.svg",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    imagePath: "/images/nodejs-icon.svg",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    imagePath: "/images/python-icon.svg",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: "/models/java.glb",
    imagePath: "/images/java-icon.svg",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    imagePath: "/images/git-icon.svg",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const aboutCards = [
  {
    title: "Software Analyst Intern",
    subtitle: "Industry exposure alongside structured learning",
    date: "🧑‍💻 Origent Technologies | Present",
    points: [
      "Working as a Software Analyst Intern at Origent Technologies",
      "Learning and implementing ASP.NET MVC in real project workflows",
      "Understanding enterprise-style codebases, MVC architecture, and data flow",
      "Gaining hands-on experience with debugging, feature changes, and requirement-driven development"
    ]
  },
  {
    title: "Computer Science Foundation",
    subtitle: "Formal education backed by consistent performance",
    date: "🎓 B.Tech in IT | 8.68 CGPA",
    points: [
      "Pursuing B.Tech in Information Technology at BP Poddar Institute, Kolkata",
      "Maintaining 8.57 CGPA while actively working on projects and internships",
      "Strong grasp of core subjects: OS, DBMS, Computer Networks, Software Engineering",
      "Academic consistency with 92% in Class 12 and 89% in Class 10"
    ]
  },
  {
    title: "Applied Problem Solving & Projects",
    subtitle: "Learning through building, not buzzwords",
    date: "🚀 Projects & Competitive Coding",
    points: [
      "Built multiple full-stack applications using MERN stack",
      "Solved 500+ DSA problems; Knight badge holder with 1880+ LeetCode rating (Top 5% globally)",
      "Active on GitHub with regular contributions and project iterations",
      "Runner-up in an inter-college coding competition"
    ]
  }
];



const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://in.linkedin.com/in/sayan-sen-38b198255"
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Sayan0361"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/Sayan_Sen007"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100040647903469"
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/sayan_sen007/"
  },
];

export {
  words,
  abilities,
  counterItems,
  aboutCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
