// Centralized, human-readable content for the portfolio site.
// Keep this file clean and structured so updates are fast and safe.

export type HeroContent = {
  id?: string;
  status_text: string;
  name: string;
  headline: string;
  description: string;
  primary_cta_text: string;
  primary_cta_link: string;
  secondary_cta_text: string;
  secondary_cta_link: string;
  image_url: string;
  social_links: Array<{ label: string; url: string; icon: string }>;
  stats: Array<{ value: string; label: string }>;
};

// Hero section: first impression + top-level CTA.
export const defaultHero: HeroContent = {
  status_text: "Available for Work",
  name: "Jameel Miller",
  headline: "Full-Stack AI Software Developer & Audio Engineer",
  description:
    "I’m an Amazon IT Support Technician with 6 years of technical experience, currently pursuing Software Engineering and AI Engineering. I build modern web applications, AI-powered tools, and immersive digital experiences by combining software development, automation, DevOps fundamentals, and audio technology.",
  primary_cta_text: "Let’s Work",
  primary_cta_link: "https://linktr.ee/jameelmiller",
  secondary_cta_text: "View Projects",
  secondary_cta_link: "#projects",
  // Hosted headshot for consistent loading without local asset churn.
  image_url: "https://i.postimg.cc/QMNGKFGR/jameel-miller-nike.jpg",
  social_links: [
    { label: "Github", url: "https://github.com/jameelmiller1", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jameelmiller", icon: "linkedin" },
    { label: "Email", url: "mailto:millerjameel@gmail.com", icon: "mail" }
  ],
  stats: [
    { value: "25+", label: "Projects" },
    { value: "10+", label: "Years Exp" },
    { value: "100%", label: "Client Satisfaction" }
  ]
};

export type Project = {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  github_url: string;
  demo_url: string;
};

// Project cards: replace URLs with real case studies when ready.
const placeholderProjectImage = "https://placehold.co/600x400/png?text=Project+Preview";

export const defaultProjects: Project[] = [
  {
    title: "Razberry Film App",
    description:
      "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
    image_url: placeholderProjectImage,
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    github_url: "#",
    demo_url: "#"
  },
  {
    title: "Designs By Riah Website",
    description:
      "Comprehensive CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 70% and improved system reliability.",
    image_url: placeholderProjectImage,
    technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
    github_url: "#",
    demo_url: "#"
  },
  {
    title: "Valley Dad Society Website",
    description:
      "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
    image_url: placeholderProjectImage,
    technologies: ["React", "Firebase", "Chart.js", "WebSocket", "TypeScript"],
    github_url: "#",
    demo_url: "#"
  }
];

export type SkillCategory = {
  id?: string;
  title: string;
  icon: string;
  skills: string[];
};

// Skills grid: grouped for fast scanning.
export const defaultSkillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HCL"]
  },
  {
    title: "Frontend",
    icon: "globe",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "Fastify", "REST APIs"]
  },
  {
    title: "Databases & Backend Services",
    icon: "database",
    skills: ["PostgreSQL", "Supabase", "Firebase", "Appwrite"]
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["AWS", "EC2", "S3", "Lambda", "Docker", "GitHub", "CI/CD", "Terraform", "Vercel"]
  },
  {
    title: "AI & Developer Tools",
    icon: "brain",
    skills: ["OpenAI API", "Vercel AI SDK", "AI Agents", "Prompt Engineering"]
  },
  {
    title: "Testing",
    icon: "testtube",
    skills: ["Jest", "Unit Testing"]
  },
  {
    title: "Audio Engineering",
    icon: "music",
    skills: [
      "Pro Tools",
      "UAD LUNA",
      "FL Studio",
      "Sound Design",
      "Mixing & Mastering",
      "Dolby Atmos",
      "Spatial Audio"
    ]
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: [
      "Effective Communication",
      "Team Collaboration",
      "Problem Solving",
      "Agile Methodologies",
      "Project Management"
    ]
  }
];

export type ExperienceItem = {
  id?: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
};

// Experience timeline: keep concise and outcomes-focused.
export const defaultExperiences: ExperienceItem[] = [
  {
    title: "IT Support Specialist",
    company: "Amazon.com Inc.",
    location: "Multiple US Locations",
    period: "2022 - Present",
    description:
      "Lead full-stack development projects using React, Node.js, and TypeScript. Implemented CI/CD pipelines with Jenkins and managed containerized applications with Docker and Kubernetes.",
    technologies: ["React", "Node.js", "TypeScript", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with DevOps team to implement automated deployment processes and infrastructure as code with Terraform.",
    technologies: ["JavaScript", "Express.js", "Firebase", "Terraform", "Git"]
  },
  {
    title: "Audio Engineer",
    company: "Freelance",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Built responsive web applications and RESTful APIs. Worked with cross-functional teams using Agile methodologies to deliver high-quality software solutions.",
    technologies: ["PHP", "JavaScript", "SQL", "Jest", "Agile"]
  }
];

export type ContactMethod = {
  id?: string;
  title: string;
  label: string;
  value: string;
  icon: string;
};

// Contact cards: minimal, direct, and actionable.
export const defaultContactMethods: ContactMethod[] = [
  {
    title: "Email",
    label: "Email",
    value: "millerjameel@gmail.com",
    icon: "mail"
  },
  {
    title: "Location",
    label: "Location",
    value: "Available for Remote Work",
    icon: "map-pin"
  }
];
