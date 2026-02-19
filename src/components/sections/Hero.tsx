"use client"

import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { profile } from "@/data/profile"
import AnimatedText from "@/components/ui/AnimatedText"
import Badge from "@/components/ui/Badge"

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center bg-[var(--bg)] overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Decorative background blob — depth layer */}
      <div
        className="absolute top-1/4 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.06,
          filter: "blur(60px)",
          transform: "translate(30%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-pop) 0%, transparent 70%)",
          opacity: 0.05,
          filter: "blur(80px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Subtle accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--accent)]" style={{ animation: "expand-x 1.2s ease forwards" }} />

      <div className="max-w-300 mx-auto px-6 md:px-10 w-full pt-28 pb-24">
        <div className="grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Eyebrow */}
            <p
              className="text-xs font-mono text-[var(--accent-pop)] uppercase tracking-[0.2em] mb-8"
              style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
            >
              Portfolio — 2026
            </p>

            {/* Name */}
            <AnimatedText
              text={profile.name}
              tag="h1"
              className="font-display font-bold leading-none text-[var(--ink)] text-[clamp(2.4rem,6vw,5.5rem)] mb-6"
              delay={100}
              stagger={30}
            />

            {/* Divider */}
            <div
              className="w-12 h-px bg-[var(--accent-pop)] mb-6"
              style={{ animation: "expand-x 0.6s ease 0.5s both" }}
            />

            {/* Title */}
            <p
              className="font-mono text-[var(--ink-muted)] text-base md:text-lg mb-3"
              style={{ animation: "fadeUp 0.6s ease 0.55s both" }}
            >
              {profile.title}
            </p>

            {/* Tagline */}
            <p
              className="font-mono text-[var(--ink-muted)] text-sm leading-relaxed mb-10 max-w-md"
              style={{ animation: "fadeUp 0.6s ease 0.7s both" }}
            >
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{ animation: "fadeUp 0.6s ease 0.85s both" }}
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="px-7 py-3 font-mono text-sm border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 tracking-wide"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3 font-mono text-sm border border-[var(--border)] text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] transition-all duration-200 tracking-wide"
              >
                Get in Touch
              </button>
            </div>

            {/* Location + Badge + Socials row */}
            <div
              className="flex flex-wrap items-center gap-5"
              style={{ animation: "fadeIn 0.6s ease 1.1s both" }}
            >
              <span className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-widest">
                {profile.location}
              </span>
              {profile.availableForWork && (
                <Badge label="Open to Work" variant="available" pulse />
              )}
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <div className="w-px h-4 bg-[var(--border)]" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Photo placeholder ── */}
          <div
            className="relative hidden md:block"
            style={{ animation: "fadeIn 0.8s ease 0.4s both" }}
          >
            {/* Offset decorative frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[var(--border)] rounded-sm pointer-events-none z-0" />

            {/* Photo container */}
            <div className="relative z-10 aspect-[3/4] w-full bg-[var(--surface)] border border-[var(--border)] rounded-sm overflow-hidden group">
               <Image src="/mallorca_pic.png" alt="Zyd Reic Mallorca"
                        fill className="object-cover object-top" />
              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Gradient overlay at bottom for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60" />
            </div>

            {/* Corner accent dot */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--accent-pop)] rounded-full z-20 opacity-80" />
          </div>

        </div>
      </div>
    </section>
  )
}
