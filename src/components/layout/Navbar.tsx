"use client"

import { useState, useEffect } from "react"
import { Menu, X, FileDown } from "lucide-react"
import { profile } from "@/data/profile"
import ThemeToggle from "@/components/ui/ThemeToggle"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-300 mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home") }}
            className="font-display text-[var(--ink)] text-lg font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
          >
            ZRGM.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const id = item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                  className={`text-[11px] font-mono uppercase tracking-widest transition-colors ${
                    activeSection === id
                      ? "text-[var(--accent)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href="/Zyd_Reic_Mallorca_Resume.pdf"
              download
              className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
            >
              <FileDown size={12} />
              Resume
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile controls: theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-[var(--ink)] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center px-8 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
              className="font-display text-4xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.3s ease, transform 0.3s ease, color 0.2s",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Zyd_Reic_Mallorca_Resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-mono text-[var(--ink-muted)] mt-4 hover:text-[var(--accent)] transition-colors"
          >
            <FileDown size={14} />
            Download Resume
          </a>
        </nav>

        <p className="absolute bottom-10 left-8 text-xs font-mono text-[var(--ink-muted)]">
          {profile.location}
        </p>
      </div>
    </>
  )
}
