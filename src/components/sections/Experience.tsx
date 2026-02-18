import SectionReveal from "@/components/ui/SectionReveal"
import Badge from "@/components/ui/Badge"
import { experience } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-(--bg)">
      <div className="max-w-300 mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="section-label">Experience</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-(--ink) font-semibold mt-4 mb-16">
            Where I have{" "}
            <span className="text-(--accent)">shipped work.</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — hidden on mobile */}
          <div className="hidden md:block absolute left-1.75 top-2 bottom-0 w-px bg-(--border)" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <SectionReveal key={i} delay={150 + i * 100}>
                <div className="md:pl-10 relative group/card">
                  {/* Dot */}
                  <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-(--accent) bg-(--bg)" />

                  {/* Card */}
                  <div
                    className="bg-(--surface) border border-(--border) p-6 md:p-8 relative overflow-hidden group-hover/card:border-(--accent) transition-colors duration-300"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    {/* Subtle grid texture */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.03]"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    {/* Accent bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 bg-(--accent) opacity-0 group-hover/card:h-0.5 group-hover/card:opacity-100 transition-all duration-300" />
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-display text-xl font-semibold text-(--ink)">
                            {item.company}
                          </h3>
                          <span className="text-[11px] font-mono text-(--ink-muted)">
                            {item.companyNote}
                          </span>
                          {item.type === "internship" && (
                            <Badge label="Internship" variant="type" />
                          )}
                        </div>
                        <p className="font-mono text-sm text-(--accent)">
                          {item.role}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-(--ink-muted) shrink-0 mt-0.5">
                        {item.period}
                      </span>
                    </div>

                    <p className="font-mono text-sm text-(--ink-muted) leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {item.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-3 font-mono text-xs text-(--ink-muted)"
                        >
                          <span className="text-(--accent-pop) mt-0.5 shrink-0">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
