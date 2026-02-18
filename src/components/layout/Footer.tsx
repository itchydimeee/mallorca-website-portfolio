import { profile } from "@/data/profile"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--border) py-6">
      <div className="max-w-300 mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs font-mono text-(--ink-muted)">
          © {year} {profile.name}
        </p>
        <p className="text-xs font-mono text-(--ink-muted)">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--accent) hover:text-(--accent-pop) transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  )
}
