interface SkillPillProps {
  label: string
  variant?: "primary" | "secondary" | "muted"
}

export default function SkillPill({ label, variant = "primary" }: SkillPillProps) {
  const base =
    "inline-block px-3 py-1.5 text-xs font-mono border transition-all duration-200 cursor-default select-none skill-pill"

  const variants = {
    primary: "border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-white",
    secondary: "border-(--ink-muted) text-(--ink-muted) hover:bg-(--ink-muted) hover:text-white",
    muted: "border-(--border) text-(--ink-muted) hover:bg-(--ink) hover:text-(--bg) hover:border-(--ink)",
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
