export type Project = {
  slug: string
  title: string
  description: string
  longDescription?: string
  stack: string[]
  role?: string
  link?: string
  github?: string
  featured: boolean
  category: "web" | "mobile" | "fullstack"
}

export const projects: Project[] = [
  {
    slug: "flexi-planner",
    title: "FlexiPlanner",
    description: "A flexible task planning tool built for user adaptability.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    category: "web",
  },
  {
    slug: "flexi-spend",
    title: "FlexiSpend",
    description: "A personal finance tracker designed around spending flexibility.",
    stack: ["React", "TypeScript", "Supabase"],
    featured: true,
    category: "web",
  },
  {
    slug: "habol",
    title: "Habol",
    description: "Mobile app for visualizing warp and weft color combinations for hablon weaving.",
    stack: ["React Native", "Firebase"],
    featured: true,
    category: "mobile",
  },
  {
    // ── PLACEHOLDER ── Replace this entry with your 4th featured project
    slug: "my-project",
    title: "Your Next Project",
    description: "Add your project description here. Replace slug, title, description, stack, and category.",
    stack: ["Replace", "With", "Your", "Stack"],
    featured: true,
    category: "web",
  },
  {
    slug: "baylo-central",
    title: "Baylo Central",
    description: "Online enterprise platform for Philippine MSMEs to manage listings and operations.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    featured: false,
    category: "fullstack",
  },
  {
    slug: "falsisters-pos",
    title: "Falsisters POS",
    description: "Backoffice web dashboard for a Point-of-Sale system with sales and inventory management.",
    stack: ["React", "Express.js", "PostgreSQL"],
    role: "Co-developer",
    featured: false,
    category: "fullstack",
  },
  {
    slug: "gump",
    title: "Gump (Internship)",
    description: "Co-developed the Help Center page and fixed translation issues for a Hong Kong-based platform.",
    stack: ["React", "TypeScript", "i18n"],
    featured: false,
    category: "web",
  },
]
