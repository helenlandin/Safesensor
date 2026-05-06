import * as React from "react"

import { cn } from "@/lib/utils"

const SERIF_FONT = '"Playfair Display", Georgia, serif'

export type BotanicalPillButtonProps = {
  label: string
  icon: React.ReactNode
  onClick?: () => void
  bgClassName: string
  textClassName?: string
  ringClassName?: string
  shadowClassName?: string
  /** Färg på den dekorativa lövgrenen i högerkanten. */
  decorationColor?: string
  type?: "button" | "submit"
}

/**
 * Pill-knapp med 40px radius. Ikon till vänster, serif-text centrerad,
 * och en mjuk löv-dekoration i högerkanten.
 */
export function BotanicalPillButton({
  label,
  icon,
  onClick,
  bgClassName,
  textClassName = "text-[#2F4A3A]",
  ringClassName = "ring-1 ring-white/30",
  shadowClassName = "shadow-[0_8px_22px_rgba(60,90,70,0.12)]",
  decorationColor = "rgba(58, 92, 70, 0.35)",
  type = "button",
}: BotanicalPillButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center overflow-hidden",
        "min-h-[64px] sm:min-h-[68px] px-5",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBA98]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4EC]",
        bgClassName,
        textClassName,
        ringClassName,
        shadowClassName,
      )}
      style={{ borderRadius: 40 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-1/2 rounded-full bg-white/30 blur-md opacity-60"
      />

      <span className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center">
        {icon}
      </span>

      <span
        className="relative z-10 flex-1 text-center font-semibold tracking-tight"
        style={{
          fontFamily: SERIF_FONT,
          fontSize: "clamp(16px, 4.6vw, 20px)",
        }}
      >
        {label}
      </span>

      <span aria-hidden className="relative z-10 h-9 w-9 flex-shrink-0" />

      <PillLeafDecoration color={decorationColor} />
    </button>
  )
}

function PillLeafDecoration({ color }: { color: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 140 80"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute right-0 top-0 h-full w-[160px] opacity-95"
    >
      <path
        d="M138 12 C 118 18, 92 26, 70 40 C 56 49, 44 58, 30 70"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      <path
        d="M120 22 C 112 28, 108 36, 110 46"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M96 32 C 88 38, 86 46, 90 56"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M70 40 C 64 48, 64 58, 70 66"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      <path
        d="M132 4 C 142 2, 148 8, 146 16 C 138 18, 130 14, 132 4 Z"
        fill={color}
        opacity="0.7"
      />
      <path
        d="M126 8 L 132 4"
        stroke={color}
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.4"
      />

      <path
        d="M126 22 C 134 18, 142 22, 140 30 C 132 32, 124 28, 126 22 Z"
        fill={color}
        opacity="0.65"
      />
      <path
        d="M118 16 C 110 14, 102 18, 104 26 C 112 28, 120 24, 118 16 Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M118 16 L 122 22"
        stroke={color}
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.4"
      />

      <path
        d="M108 32 C 116 30, 124 34, 122 42 C 114 44, 106 40, 108 32 Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M104 38 C 96 36, 88 40, 90 48 C 98 50, 106 46, 104 38 Z"
        fill={color}
        opacity="0.55"
      />

      <path
        d="M88 46 C 96 44, 104 48, 102 56 C 94 58, 86 54, 88 46 Z"
        fill={color}
        opacity="0.55"
      />
      <path
        d="M82 52 C 74 50, 66 54, 68 62 C 76 64, 84 60, 82 52 Z"
        fill={color}
        opacity="0.5"
      />

      <path
        d="M62 60 C 70 58, 78 62, 76 70 C 68 72, 60 68, 62 60 Z"
        fill={color}
        opacity="0.5"
      />
      <path
        d="M56 66 C 48 64, 40 68, 42 76 C 50 78, 58 74, 56 66 Z"
        fill={color}
        opacity="0.45"
      />

      <path
        d="M30 70 C 24 70, 18 74, 18 78"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <circle cx="30" cy="70" r="1.8" fill={color} opacity="0.6" />
      <circle cx="138" cy="12" r="1.8" fill={color} opacity="0.7" />
    </svg>
  )
}
