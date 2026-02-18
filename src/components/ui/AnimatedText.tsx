"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  tag?: "h1" | "h2" | "h3" | "p" | "span"
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 40,
  tag: Tag = "h1",
}: AnimatedTextProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const words = text.split(" ")

  return (
    <Tag className={`${className} overflow-hidden`} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.3em]">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(110%)",
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: visible
                  ? `${delay + (wi * word.length + ci) * stagger}ms`
                  : "0ms",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
