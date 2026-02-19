import SectionReveal from "@/components/ui/SectionReveal"
import SkillPill from "@/components/ui/SkillPill"
import { skills } from "@/data/skills"

const categories = [
  { label: "Frontend", key: "frontend" as const, variant: "primary" as const },
  { label: "Backend", key: "backend" as const, variant: "secondary" as const },
  { label: "Tools & Platforms", key: "tools" as const, variant: "muted" as const },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--surface)]">
      <div className="max-w-300 mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="section-label">Technical Skills</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] font-semibold mt-4 mb-16">
            The craft, the tools,{" "}
            <span className="text-[var(--accent)]">the stack.</span>
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => (
            <SectionReveal key={cat.key} delay={100 + i * 100}>
              <div
                className="group grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start border border-[var(--border)] p-6 md:p-8 relative overflow-hidden"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Hover bg fill */}
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)] group-hover:bg-[var(--accent-pop)] transition-colors duration-300" />
                <div className="pt-1 relative z-10">
                  <span className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-widest">
                    {cat.label}
                  </span>
                  <div className="w-8 h-px bg-[var(--accent-pop)] mt-2" />
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skills[cat.key].map((skill, si) => (
                    <div
                      key={skill}
                      style={{ transitionDelay: `${si * 30}ms` }}
                    >
                      <SkillPill label={skill} variant={cat.variant} />
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
