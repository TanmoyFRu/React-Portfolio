import linkMinimal from "../assets/projects/link-ingestor-v2.webp";
import chatMinimal from "../assets/projects/chat-backend-v2.webp";
import project4 from "../assets/projects/blog-auth-v2.webp";
import cyphireImg from "../assets/projects/cyphire-v2.webp";
import yupchaLogo from "../assets/yupcha_logo.webp";
import collegeLogo from "../assets/college logo.webp";
import xlayerLogo from "../assets/xlayercom_logo.jpeg";

export const HERO_CONTENT = `I am a specialized Backend & Automation Engineer with a profound focus on intelligent systems and scalable infrastructure. I bridge the gap between robust backend architecture and Machine Learning, with deep expertise in PyTorch, YOLO, and ResNet architectures. My work spans from architecting high-performance FastAPI ecosystems to deploying containerized services via Kubernetes, always with a commitment to zero-downtime CI/CD and exceptional user experiences.`;

export const ABOUT_TEXT = `Junior Software Engineer at xLayer Technologies and former Automation Engineer & Backend Developer at Yupcha. I specialize in the intersection of automation, machine learning, and scalable cloud infrastructure, building high-efficiency APIs, autonomous data pipelines, and intelligent computer vision systems using PyTorch, YOLO, and Tornado/FastAPI.

With a strong foundation in web technologies, database design, and DevOps practices, I focus on creating systems that are not just scalable, but also self-optimizing, with a commitment to reliability and sub-50ms latency.`;


export const EXPERIENCES = [
  {
    year: "Jun 2026 - Present",
    role: "Junior Software Engineer",
    company: "xLayer Technologies",
    logo: xlayerLogo,
    description: "Collaborating with cross-functional teams in agile sprints to develop, maintain, and scale full-stack web applications.",
    highlights: [
      "Collaborate with cross-functional teams in agile sprints to develop, maintain, and scale full-stack web applications.",
      "Develop and optimize REST APIs using Tornado, improving system reliability and reducing average endpoint response times.",
      "Design responsive user interfaces in Angular and document technical specifications to streamline API integrations.",
      "Manage schema designs and optimize PostgreSQL and MongoDB database queries to accelerate data retrieval speeds."
    ],
    technologies: ["Tornado", "Angular", "PostgreSQL", "MongoDB", "Python", "TypeScript", "Agile"],
  },
  {
    year: "Sep 2025 - May 2026",
    role: "Automation Engineer & Backend Developer",
    company: "Yupcha",
    logo: yupchaLogo,
    description: "Spearheaded automation initiatives and backend architecture to drive system scale and intelligence.",
    highlights: [
      "Spearheaded automated CI/CD pipelines using GitHub Actions and Docker, accelerating deployment velocity by 40% and ensuring zero-downtime releases.",
      "Pioneered computer vision pipelines leveraging PyTorch and YOLOv8 to process 50k+ images daily with 95% classification accuracy for autonomous systems.",
      "Streamlined RESTful API endpoints using FastAPI and PostgreSQL indexing, sustaining 50k+ daily requests with sub-50ms latency metrics.",
      "Maximized system reliability by deploying high-availability protocols and real-time monitoring, increasing uptime to 99.9% and reducing resource consumption by 25%.",
      "Authored event-driven Python automation modules to synchronize real-time data across distributed services, boosting system throughput by 35%."
    ],
    technologies: ["Python", "FastAPI", "PyTorch", "YOLO", "Docker", "Kubernetes", "CI/CD"],
  },
];


export const PROJECTS = [
  {
    title: "Cyphire",
    image: cyphireImg,
    description:
      "An immutable platform for digitally-signed credentials anchored on the Polygon blockchain. Backend services integrate FastAPI with Web3.py for secure blockchain transactions, async processing, and fault-tolerant API design.",
    technologies: ["FastAPI", "Web3.py", "Polygon", "PostgreSQL", "Solidity"],
    github: "https://github.com/TanmoyFRu/Cyphire",
  },
  {
    title: "Link Ingestor API",
    image: linkMinimal,
    description:
      "A high-performance autonomous system for large-scale webpage data ingestion. Features intelligent backlink discovery via Bing Search API and async processing architecture.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    github: "https://github.com/TanmoyFRu/Link-Ingestor-API",
  },
  {
    title: "ChatApp Backend",
    image: chatMinimal,
    description:
      "A scalable messaging backend integrated with Google Gemini AI for real-time intelligent responses. Uses Celery for non-blocking AI task processing and conversation context management.",
    technologies: ["FastAPI", "Gemini AI", "Redis", "Celery", "PostgreSQL"],
    github: "https://github.com/TanmoyFRu/ChatApp-Backend",
  },
  {
    title: "User-Blog Authentication API",
    image: project4,
    imageScale: "scale-[1.6]",
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
    description: "Focusing on the convergence of software engineering and intelligent systems development.",
    focusAreas: [
      "Backend System Architecture",
      "Scalable Cloud Infrastructure",
      "Machine Learning Integrations",
      "Autonomous System Design",
      "Advanced Data Structures"
    ],
  },
];



export const CONTACT = {
  address: "Barjala, Agartala, Tripura 799002",
  phoneNo: "+91 87941 40550",
  email: "tanmoydn2003@gmail.com",
};
