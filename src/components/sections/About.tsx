import SectionReveal from "@/components/ui/SectionReveal"
import { education } from "@/data/education"

const stats = [
  { value: "3+", label: "Years\nLearning" },
  { value: "6+", label: "Projects\nBuilt" },
  { value: "10+", label: "Technologies\nUsed" },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg)]">
      <div className="max-w-300 mx-auto px-6 md:px-10">
        {/* Section label */}
        <SectionReveal>
          <p className="section-label">About</p>
        </SectionReveal>

        <div className="grid md:grid-cols-[3fr_2fr] gap-16 md:gap-24 mt-10 items-start">
          {/* Left: Bio */}
          <div>
            <SectionReveal delay={100}>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] font-semibold leading-tight mb-8">
                Thoughtful interfaces, <br />
                <span className="text-[var(--accent)]">built from the ground up.</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="space-y-4 font-mono text-sm text-[var(--ink-muted)] leading-loose max-w-lg">
                <p>
                  I am a frontend software engineer from Iloilo City, Philippines,
                  passionate about crafting web interfaces that are both visually precise
                  and deeply functional. I care about the details — layout, motion,
                  accessibility, and performance.
                </p>
                <p>
                  My work sits at the intersection of design and engineering. I believe
                  a great UI is not just built, it is composed — with intent, restraint,
                  and craft.
                </p>
                <p>
                  Fresh and hungry, I bring the energy of a builder who is genuinely
                  excited about the web and what it can become.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent-pop)]" />
                <p className="text-xs font-mono text-[var(--ink-muted)]">
                  {education[0].degree} ·{" "}
                  <span className="text-[var(--accent)]">{education[0].school}</span>
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col md:border-l border-[var(--border)]">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={150 + i * 100}>
                <div className={`group relative px-8 py-8 overflow-hidden${i < stats.length - 1 ? " border-b border-[var(--border)]" : ""}` }>
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--accent-pop)] group-hover:w-0.5 transition-all duration-300" />
                  <p className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-bold text-[var(--ink)] leading-none tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[11px] text-[var(--ink-muted)] uppercase tracking-widest mt-2 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
