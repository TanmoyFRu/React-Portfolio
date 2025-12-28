import project1 from "../assets/projects/link-ingestor-v2.png";
import project2 from "../assets/projects/chat-backend-v2.png";
import project4 from "../assets/projects/blog-auth-v3.png";
import yupchaLogo from "../assets/yupcha_logo.jpg";
import collegeLogo from "../assets/college logo.png";

export const HERO_CONTENT = `I am a passionate backend developer with a deep expertise in crafting robust, scalable, and secure server-side applications. I specialize in Python and FastAPI, with a strong foundation in database management (PostgreSQL, MySQL, MongoDB) and real-time systems. My goal is to build high-performance APIs and autonomous systems that solve complex backend challenges and drive seamless digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated backend developer currently working in a startup company Yupcha. My expertise lies in building efficient RESTful APIs, implementing robust authentication systems, and designing scalable database architectures. I have a passion for automation and data ingestion, as seen in my various open-source projects. I thrive on solving complex server-side problems and continuously optimizing backend performance. Outside of coding, I enjoy exploring the latest in tech, staying active, and constant learning.`;

export const EXPERIENCES = [
  {
    year: "Sept 2025 - Present",
    role: "Automation Engineer & Backend Developer",
    company: "Yupcha",
    logo: yupchaLogo,
    description: `Architecting and managing automated CI/CD pipelines to ensure seamless production releases. Building scalable backend APIs using FastAPI and managing data persistence with PostgreSQL and Redis. Implementing robust CRUD operations and complex business logic for core product features. Integrating automation tools to improve system reliability and developer productivity.`,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "Link Ingestor API",
    image: project1,
    description:
      "A high-performance autonomous system for large-scale webpage data ingestion. Features intelligent backlink discovery via Bing Search API and async processing architecture.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    github: "https://github.com/TanmoyFRu/Link-Ingestor-API",
  },
  {
    title: "ChatApp Backend",
    image: project2,
    description:
      "A scalable messaging backend integrated with Google Gemini AI for real-time intelligent responses. Uses Celery for non-blocking AI task processing and conversation context management.",
    technologies: ["FastAPI", "Gemini AI", "Redis", "Celery", "PostgreSQL"],
    github: "https://github.com/TanmoyFRu/ChatApp-Backend",
  },
  {
    title: "User-Blog Authentication API",
    image: project4,
    description:
      "A secure RESTful API with JWT authentication and full CRUD capabilities. Implements complex relational mapping between users and content with robust password hashing.",
    technologies: ["FastAPI", "JWT", "SQLAlchemy", "SQLite"],
    github: "https://github.com/TanmoyFRu/User-Blog-Authentication-API",
  },
];

export const EDUCATION = [
  {
    year: "2021 - 2025",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Techno College of Engineering Agartala",
    logo: collegeLogo,
    description: "Focusing on Software Engineering, Backend Systems, and Scalable Architectures. Actively involved in developing autonomous systems and real-time AI integrations.",
  },
];

export const CONTACT = {
  address: "Barjala, Agartala, Tripura 799002 ",
  phoneNo: "+91 87941 40550 ",
  email: "tanmoydn2003@gmail.com",
};
