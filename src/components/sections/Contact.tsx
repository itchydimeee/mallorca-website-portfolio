import { Github, Linkedin, Mail } from "lucide-react"
import SectionReveal from "@/components/ui/SectionReveal"
import { profile } from "@/data/profile"

export default function Contact() {
  return (
    <section id="contact" className="py-36 bg-[var(--bg)]">
      <div className="max-w-300 mx-auto px-6 md:px-10 text-center">
        <SectionReveal>
          <p className="section-label justify-start">Contact</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-[var(--ink)] font-bold leading-[1.05] mt-6 mb-8">
            Let&apos;s build <br />
            <span className="text-[var(--accent)]">something.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className="font-mono text-sm text-[var(--ink-muted)] max-w-md mx-auto mb-12 leading-loose">
            I am currently open to frontend roles, internships, and freelance projects.
            Reach out — let&apos;s talk.
          </p>
        </SectionReveal>

        <SectionReveal delay={300}>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 font-display text-lg md:text-2xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors duration-200 mb-12 relative"
          >
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            <Mail size={20} className="text-[var(--accent)]" />
            {profile.email}
          </a>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/itchydimeee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2.5 hover:border-[var(--accent)]"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zyd-reic-mallorca-377452335/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2.5 hover:border-[var(--accent)]"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
