import * as React from "react"

import { cn } from "@/lib/utils"

export type CalmBackgroundProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Full-screen calm sage background:
 * - Soft vertical sage gradient
 * - Three blurred green glow blobs for depth
 * - Bold leaf clusters in top-left and bottom-right corners
 * - Subtle scattered leaves elsewhere
 * - Gentle white haze on top/bottom so foreground content stays readable
 */
export function CalmBackground({ children, className }: CalmBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-svh w-full overflow-hidden",
        "bg-gradient-to-b from-[#F4F9F1] via-[#E8F1E5] to-[#D5E5D1]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#B6D4B2]/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#A6C9B7]/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#CFE3CB]/55 blur-3xl"
      />

      {/* Top-left corner leaf cluster */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -top-6 -left-8 h-44 w-44 opacity-[0.13] mix-blend-multiply"
      >
        <defs>
          <symbol id="cb-leaf-tl" viewBox="0 0 40 60">
            <path
              d="M20 2 C32 14, 36 34, 20 58 C4 34, 8 14, 20 2 Z"
              fill="#3A5C46"
              fillOpacity="0.6"
              stroke="#2F4A3A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M20 6 L20 56"
              stroke="#2F4A3A"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
          </symbol>
        </defs>
        <use href="#cb-leaf-tl" x="10" y="20" width="60" height="90" transform="rotate(-32 40 65)" />
        <use href="#cb-leaf-tl" x="60" y="10" width="50" height="76" transform="rotate(20 85 48)" />
        <use href="#cb-leaf-tl" x="20" y="80" width="46" height="68" transform="rotate(48 43 114)" />
        <use href="#cb-leaf-tl" x="100" y="60" width="42" height="62" transform="rotate(-12 121 91)" />
      </svg>

      {/* Bottom-right corner leaf cluster */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 opacity-[0.13] mix-blend-multiply"
      >
        <defs>
          <symbol id="cb-leaf-br" viewBox="0 0 40 60">
            <path
              d="M20 2 C32 14, 36 34, 20 58 C4 34, 8 14, 20 2 Z"
              fill="#3A5C46"
              fillOpacity="0.6"
              stroke="#2F4A3A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M20 6 L20 56"
              stroke="#2F4A3A"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
          </symbol>
        </defs>
        <use href="#cb-leaf-br" x="120" y="100" width="60" height="90" transform="rotate(140 150 145)" />
        <use href="#cb-leaf-br" x="80" y="120" width="50" height="76" transform="rotate(180 105 158)" />
        <use href="#cb-leaf-br" x="130" y="40" width="46" height="68" transform="rotate(110 153 74)" />
        <use href="#cb-leaf-br" x="50" y="80" width="42" height="62" transform="rotate(160 71 111)" />
      </svg>

      {/* Subtle scattered leaves across the rest */}
      <svg
        aria-hidden
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-multiply"
      >
        <defs>
          <symbol id="cb-leaf-bg" viewBox="0 0 40 60">
            <path
              d="M20 2 C32 14, 36 34, 20 58 C4 34, 8 14, 20 2 Z"
              fill="none"
              stroke="#3A5C46"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M20 6 L20 56"
              stroke="#3A5C46"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </symbol>
        </defs>
        <use href="#cb-leaf-bg" x="320" y="180" width="56" height="84" transform="rotate(28 348 222)" />
        <use href="#cb-leaf-bg" x="60" y="320" width="40" height="60" transform="rotate(48 80 350)" />
        <use href="#cb-leaf-bg" x="280" y="420" width="50" height="76" transform="rotate(-18 305 458)" />
        <use href="#cb-leaf-bg" x="20" y="540" width="48" height="72" transform="rotate(12 44 576)" />
        <use href="#cb-leaf-bg" x="160" y="640" width="46" height="68" transform="rotate(64 183 674)" />
        <use href="#cb-leaf-bg" x="200" y="220" width="38" height="56" transform="rotate(-8 219 248)" />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/15"
      />

      <div className="relative">{children}</div>
    </div>
  )
}
