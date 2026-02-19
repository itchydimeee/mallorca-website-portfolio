interface SkillPillProps {
  label: string
  variant?: "primary" | "secondary" | "muted"
}

export default function SkillPill({ label, variant = "primary" }: SkillPillProps) {
  const base =
    "inline-block px-3 py-1.5 text-xs font-mono border transition-all duration-200 cursor-default select-none skill-pill"

  const variants = {
    primary: "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
    secondary: "border-[var(--ink-muted)] text-[var(--ink-muted)] hover:bg-[var(--ink-muted)] hover:text-white",
    muted: "border-[var(--border)] text-[var(--ink-muted)] hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:border-[var(--ink)]",
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
