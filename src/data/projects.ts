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
  category: "web" | "mobile"
}

export const projects: Project[] = [
  {
    slug: "baylo-central",
    title: "Baylo Central",
    description:
      "Co-founded and led the development of an online enterprise platform enabling Philippine MSMEs to manage listings, operations, and business workflows.",
    stack: ["Next.js(fullstack)", "Supabase", "Prisma"],
    role: "Startup Co-Founder, Lead Project Manager & Full Stack Developer",
    category: "web",
  },
  {
    slug: "civiq",
    title: "Civiq",
    description:
      "Contributed to building a web app that monitors IoT-enabled smart trash bins, tracking fill levels, status, and real-time location via motion sensors.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer",
    category: "web",
  },
  {
    slug: "falsisters-pos",
    title: "Falsisters POS",
    description:
      "Engineered a backoffice web dashboard for a Point-of-Sale system, supporting sales monitoring and inventory management.",
    stack: ["Next.js", "NestJS", "Supabase", "Prisma"],
    role: "Full Stack Web Developer",
    client: "Falsisters Rice Store",
    category: "web",
  },
  {
    slug: "mercenary",
    title: "Mercenary - Website and Admin",
    description:
      "A full-stack web platform for a clothing brand, featuring a product catalog and admin dashboard for managing listings, with integrated messaging-based order inquiries.",
    stack: ["Next.js(fullstack)", "Supabase", "Prisma"],
    role: "Full Stack Developer",
    category: "web",
  },
  {
    slug: "habol-mobile",
    title: "Habol (Mobile)",
    description:
      "Built a mobile application for visualizing warp and weft color combinations for hablon weaving.",
    stack: ["React Native", "Expo", "Firebase", "FireStore"],
    role: "Mobile Developer",
    client: "DTI Iloilo",
    category: "mobile",
  },
  {
    slug: "habol-web",
    title: "Habol (Admin Web App)",
    description:
      "Developed the administrative web platform for the Habol system, enabling management of hablon weaving patterns and user data.",
    stack: ["Next.js", "Shadcn", "Firebase", "FireStore"],
    role: "Full Stack Developer",
    client: "DTI Iloilo",
    category: "web",
  },
  {
    slug: "flexi-planner",
    title: "FlexiPlanner",
    description:
      "Developed a flexible task planning tool designed to adapt to different productivity styles and workflows.",
    stack: ["React", "Express", "PostgreSQL", "Prisma"],
    role: "Full Stack Developer",
    category: "web",
  },
  {
    slug: "flexi-spend",
    title: "FlexiSpend",
    description:
      "Designed and implemented a personal finance tracking application focused on flexible and mindful spending management.",
    stack: ["NextJS(fullstack)", "PostgreSQL", "Prisma"],
    role: "Full Stack Developer",
    category: "web",
  },
  {
    slug: "gump",
    title: "Gump (Internship)",
    description:
      "Assisted in building the Help Center page and resolved localization and translation issues for a Hong Kong-based platform.",
    stack: ["React", "TypeScript", "SCSS"],
    role: "Frontend Developer (Intern)",
    category: "web",
  },
]
