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
    "I’m an Amazon IT Support Associate with 8 years at Amazon and 7+ years in tech, currently pursuing Software Engineering and AI Engineering. I build modern web applications, AI-powered tools, and immersive digital experiences by combining software development, automation, and audio technology.",
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
    { value: "20+", label: "Projects" },
    { value: "7+", label: "Years in Tech" }
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
export const defaultProjects: Project[] = [
  {
    title: "spvce",
    description:
      "Agent engineering for your AI bots. spvce audits your agents, tests targeted improvements against a baseline, and applies changes only with your explicit approval. Available on the Grok Bot marketplace.",
    image_url: "/projects/spvce-preview.webp",
    technologies: ["AI Agents", "Grok Bot", "Evals", "Agent Skills"],
    github_url: "https://x.ai/bot/5pU_wYCiw_sbWEdr4nyYB",
    demo_url: "https://spvce.dev"
  },
  {
    title: "Designs By Riah Website",
    description:
      "Event-planning business site built with React, Vite, TypeScript and Tailwind, with an AI booking assistant (OpenAI) that gathers event details and a Supabase-backed admin dashboard for editing content, photos and booking forms.",
    image_url: "/projects/riah-preview.webp",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase", "OpenAI", "Vercel"],
    github_url: "#",
    demo_url: "https://www.designsbyriah.com"
  },
  {
    title: "Valley Dad Society Website",
    description:
      "Community website for a fathers' meetup and wellness group, built with Next.js, TypeScript and Tailwind, with Stripe checkout for merch and donations and a Supabase-backed admin for events and shop items.",
    image_url: "/projects/vds-preview.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Supabase", "Vercel"],
    github_url: "#",
    demo_url: "https://valleydadsociety.com"
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
    skills: ["PostgreSQL", "Supabase", "Appwrite"]
  },
  {
    title: "Cloud & Deployment",
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
    title: "IT Support Associate II",
    company: "Amazon",
    location: "Cleveland, OH",
    period: "Sep 2021 – Present",
    description:
      "Windows laptop and desktop imaging, hardware and software troubleshooting through tickets, Windows and Linux support, Active Directory management, remote support, Cisco switch upgrades, and PDU/ATS/UPS replacement.",
    technologies: ["Windows", "Linux", "Active Directory", "Cisco"]
  },
  {
    title: "Equipment Coordinator",
    company: "Amazon",
    location: "Euclid, OH",
    period: "Jul 2019 – Sep 2021",
    description:
      "Provisioned and repaired laptops, Kindles, handheld scanners and radios; managed assets, the spares pool and RMAs. Promoted from warehouse associate (joined Amazon Oct 2018).",
    technologies: ["Laptops", "Kindles", "Handheld scanners", "Radios"]
  },
  {
    title: "Founder & Audio Engineer",
    company: "Platinum Fader LLC",
    location: "",
    period: "2021 – Present",
    description:
      "Mixing, recording and production for artists, plus VST audio plugins in C++/JUCE. Producing, recording and mixing since 2016.",
    technologies: ["C++", "JUCE"]
  },
  {
    title: "Audio Engineer",
    company: "Sunbird Studios & Technology",
    location: "Cleveland, OH",
    period: "2020 – 2022",
    description:
      "Recording, audio routing, session templates and client relations.",
    technologies: []
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
