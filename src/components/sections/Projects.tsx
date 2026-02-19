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

        {/* Featured projects — 2x2 grid */}
        {featured.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {featured.map((p, i) => (
              <SectionReveal key={p.slug} className="flex flex-col" delay={i * 100}>
                <ProjectCard project={p} variant="featured" />
              </SectionReveal>
            ))}
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
