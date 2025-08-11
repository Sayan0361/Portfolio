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
    value: 1600,
    suffix: "+",
    label: "LeetCode Rating",
    description: "Top 20% globally"
  },
  {
    value: 500,
    suffix: "+",
    label: "Problems Solved",
    description: "DSA mastery across all coding platforms"
  },
  {
    value: 200,
    suffix: "+",
    label: "GitHub Contributions",
    description: "Consistent coding activity last year"
  },
  {
    value: 5,
    suffix: "+",
    label: "Projects",
    description: "Production-ready fullstack applications"
  }
];

const abilities = [
  {
    imgPath: "/images/brain.png",
    title: "Problem Solver at Heart",
    desc: "I enjoy figuring things out — whether it’s fixing a bug or building something from scratch. Clean code, smart logic, and a bit of patience go a long way.",
  },
  {
    imgPath: "/images/clock.png",
    title: "Reliable & Consistent",
    desc: "I'm not the type to ghost or give up halfway. I stick to my word, meet deadlines, and show up every day ready to build and improve.",
  },
  {
    imgPath: "/images/goals.png",
    title: "Detail-Oriented by Nature",
    desc: "From layout to logic, I care about the little things. It's not just about getting it to work — it's about making it great.",
  },
];

export const myProjects = [
  {
    id: 1,
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
    id: 2,
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
    title: "The Coder from Barrackpore",
    subtitle: "Started with curiosity, staying for the passion",
    date: "💻 Since 2022",
    points: [
      "Born and raised in Barrackpore, now building my future in tech",
      "Self-taught coder who fell in love with problem solving through DSA",
      "MERN stack specialist currently exploring Next.js ecosystem",
      "1550+ LeetCode rating (Top 30%) with 500+ problems solved"
    ]
  },
  {
    title: "Scholar & Technologist",
    subtitle: "Balancing academics with hands-on learning",
    date: "🎓 B.Tech in IT | 8.57 CGPA",
    points: [
      "Pursuing B.Tech in Information Technology from BP Poddar Institute, Kolkata",
      "Maintaining strong 8.57 CGPA while building practical skills",
      "Mastering core CS concepts: OS, DBMS, Computer Networks, Software Engineering",
      "Consistent academic performer with 92% in 12th & 89% in 10th (Assembly of Christ School)"
    ]
  },
  {
    title: "The Builder's Mindset",
    subtitle: "From classroom concepts to real-world applications",
    date: "🚀 Projects & Growth",
    points: [
      "Developed 5+ production-grade MERN stack applications",
      "200+ GitHub contributions showcasing consistent coding activity",
      "Runner-up in Inter College Coding Competition",
      "Passionate about open-source contributions and technical writing",
      "Believe in: 'Learn → Build → Share → Repeat' cycle"
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
    name : "github",
    imgPath: "/images/github.png",
    url : "https://github.com/Sayan0361"
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
