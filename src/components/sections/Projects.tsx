"use client"

import { useState, useMemo } from "react"
import SectionReveal from "@/components/ui/SectionReveal"
import ProjectCard from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"

type Filter = "all" | "web" | "mobile" | "fullstack"

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Full Stack", value: "fullstack" },
]

export default function Projects() {
  const [active, setActive] = useState<Filter>("all")

  const filtered = useMemo(() => {
    if (active === "all") return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 bg-[var(--surface)]">
      <div className="max-w-300 mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="section-label">Projects</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] font-semibold mt-4 mb-10">
            Things I have{" "}
            <span className="text-[var(--accent)]">built.</span>
          </h2>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal delay={150}>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 text-xs font-mono border transition-all duration-200 ${
                  active === f.value
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured bento grid — hero left (row-span-2), 2 stacked right, 4th full-width below */}
        {featured.length > 0 && (
          <div className="mb-4">
            {/* Main bento: hero left, 2 stacked right */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Hero card — left, takes full height */}
              {featured[0] && (
                <div className="md:w-1/2 flex flex-col">
                  <SectionReveal className="flex-1 flex flex-col">
                    <ProjectCard project={featured[0]} variant="hero" />
                  </SectionReveal>
                </div>
              )}
              {/* Right column — two equal cards stacked */}
              <div className="md:w-1/2 flex flex-col gap-4">
                {featured[1] && (
                  <SectionReveal className="flex-1 flex flex-col" delay={100}>
                    <ProjectCard project={featured[1]} variant="featured" />
                  </SectionReveal>
                )}
                {featured[2] && (
                  <SectionReveal className="flex-1 flex flex-col" delay={200}>
                    <ProjectCard project={featured[2]} variant="featured" />
                  </SectionReveal>
                )}
              </div>
            </div>

            {/* 4th featured slot — full-width accent row */}
            {featured[3] && (
              <SectionReveal>
                <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-7 flex flex-col md:flex-row md:items-center gap-6 group hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "0 1px 3px 0 rgba(0,0,0,0.06)" }}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--accent-pop)] transition-all duration-300 group-hover:w-1" />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                    style={{
                      backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative z-10 flex-1">
                    <span className="text-[10px] font-mono text-[var(--accent-pop)] uppercase tracking-widest mb-2 block">
                      {featured[3].category} · Featured
                    </span>
                    <h3 className="font-display text-xl text-[var(--ink)] font-semibold mb-2">
                      {featured[3].title}
                    </h3>
                    <p className="font-mono text-sm text-[var(--ink-muted)] leading-relaxed">
                      {featured[3].description}
                    </p>
                  </div>
                  <div className="relative z-10 flex flex-wrap gap-1.5 md:max-w-[240px]">
                    {featured[3].stack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 border border-[var(--border)] text-[var(--ink-muted)] bg-[var(--bg)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}
          </div>
        )}

        {/* Rest grid */}
        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className="my-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-widest">
                  More Projects
                </span>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((p) => (
                <SectionReveal key={p.slug}>
                  <ProjectCard project={p} />
                </SectionReveal>
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 font-mono text-sm text-[var(--ink-muted)]">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
