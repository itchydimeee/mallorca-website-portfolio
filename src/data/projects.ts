export type Project = {
  slug: string
  title: string
  description: string
  longDescription?: string
  stack: string[]
  role?: string
  client?: string
  link?: string
  github?: string
  featured: boolean
  category: "web" | "mobile" | "fullstack"
}

export const projects: Project[] = [
  {
    slug: "baylo-central",
    title: "Baylo Central",
    description:
      "Co-founded and led the development of an online enterprise platform enabling Philippine MSMEs to manage listings, operations, and business workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    role: "Startup Co-Founder, Lead Project Manager & Full Stack Developer",
    featured: true,
    category: "fullstack",
  },
    {
    slug: "civiq",
    title: "Civiq",
    description:
      "Contributed to building a web app that monitors IoT-enabled smart trash bins, tracking fill levels, status, and real-time location via motion sensors.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer",
    featured: true,
    category: "web",
  },
  {
    slug: "falsisters-pos",
    title: "Falsisters POS",
    description:
      "Engineered a backoffice web dashboard for a Point-of-Sale system, supporting sales monitoring and inventory management.",
    stack: ["React", "Express.js", "PostgreSQL"],
    role: "Full Stack Web Developer",
    client: "Falsisters Rice Store",
    featured: true,
    category: "fullstack",
  },
  {
    slug: "habol",
    title: "Habol",
    description:
      "Built a mobile application for visualizing warp and weft color combinations for hablon weaving, alongside an administrative web platform.",
    stack: ["React Native", "Firebase"],
    role: "Mobile Developer & Full Stack Web Developer (Admin Webapp)",
    client: "DTI Iloilo",
    featured: true,
    category: "mobile",
  },
  {
    slug: "flexi-planner",
    title: "FlexiPlanner",
    description:
      "Developed a flexible task planning tool designed to adapt to different productivity styles and workflows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Full Stack Developer",
    featured: false,
    category: "web",
  },
  {
    slug: "flexi-spend",
    title: "FlexiSpend",
    description:
      "Designed and implemented a personal finance tracking application focused on flexible and mindful spending management.",
    stack: ["React", "TypeScript", "Supabase"],
    role: "Full Stack Developer",
    featured: false,
    category: "web",
  },
  {
    slug: "gump",
    title: "Gump (Internship)",
    description:
      "Assisted in building the Help Center page and resolved localization and translation issues for a Hong Kong-based platform.",
    stack: ["React", "TypeScript", "i18n"],
    role: "Frontend Developer (Intern)",
    featured: false,
    category: "web",
  },
]
