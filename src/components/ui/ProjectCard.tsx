import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  variant?: "hero" | "featured" | "standard"
}

export default function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const isHero = variant === "hero"
  const isFeatured = variant === "featured" || isHero

  return (
    <article
      className={`project-card group relative flex flex-col bg-(--surface) border border-(--border) transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        isHero ? "p-8 min-h-[480px]" : isFeatured ? "p-7 min-h-[200px]" : "p-6"
      }`}
      style={{
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.04)",
      }}
    >
      {/* Accent left border — slides in on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-0 bg-(--accent) transition-all duration-300 group-hover:w-1" />

      {/* Hero variant: decorative background number */}
      {isHero && (
        <span className="absolute bottom-6 right-6 font-display text-[8rem] font-bold leading-none text-(--ink) opacity-[0.04] select-none pointer-events-none">
          01
        </span>
      )}

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[10px] font-mono text-(--accent-pop) uppercase tracking-widest mb-2 block">
              {project.category}
            </span>
            <h3
              className={`font-display text-(--ink) font-semibold leading-tight ${
                isHero ? "text-2xl md:text-3xl" : isFeatured ? "text-lg" : "text-base"
              }`}
            >
              {project.title}
            </h3>
            {project.role && (
              <span className="text-[11px] font-mono text-(--ink-muted) mt-1 block">
                {project.role}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--ink-muted) hover:text-(--accent) transition-colors"
                aria-label={`${project.title} GitHub`}
              >
                <Github size={15} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--ink-muted) hover:text-(--accent) transition-colors"
                aria-label={`${project.title} live link`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`text-(--ink-muted) leading-relaxed mb-5 font-mono ${
            isHero ? "text-sm max-w-xs" : isFeatured ? "text-sm" : "text-xs"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 border border-(--border) text-(--ink-muted) bg-(--bg)"
              >
                {tech}
              </span>
            ))}
          </div>

          {isHero && (
            <span className="shrink-0 text-(--ink-muted) group-hover:text-(--accent) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
              <ArrowUpRight size={18} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
