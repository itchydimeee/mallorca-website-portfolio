interface BadgeProps {
  label: string
  variant?: "available" | "type" | "default"
  pulse?: boolean
}

export default function Badge({ label, variant = "default", pulse = false }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-sm border"

  const variants = {
    available: "border-[var(--accent-pop)] text-[var(--accent-pop)] bg-transparent",
    type: "border-[var(--border)] text-[var(--ink-muted)] bg-transparent",
    default: "border-[var(--border)] text-[var(--ink-muted)] bg-transparent",
  }

  return (
    <span className={`${base} ${variants[variant]}`}>
      {pulse && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current"
          style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
        />
      )}
      {label}
    </span>
  )
}
