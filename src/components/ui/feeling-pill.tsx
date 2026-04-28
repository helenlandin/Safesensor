import * as React from "react"

import { cn } from "@/lib/utils"

export type FeelingPillProps = {
  label: string
  icon: React.ReactNode
  selected: boolean
  onToggle: () => void
}

/**
 * Glassy cream pill button used for emotion selection.
 * Designed to be placed inside a 3-col grid (uses w-full).
 */
export function FeelingPill({
  label,
  icon,
  selected,
  onToggle,
}: FeelingPillProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={cn(
        "inline-flex w-full min-h-[48px] items-center justify-center gap-1.5 rounded-full px-2.5 py-2",
        "text-[clamp(11px,3vw,12.5px)] font-medium tracking-tight",
        "bg-[#FAF7F0]",
        "shadow-[0_2px_8px_rgba(60,90,70,0.08)]",
        "transition-all duration-150 ease-out active:scale-[0.97]",
        selected
          ? "ring-2 ring-[#7DBA98] bg-[#F1F8EE] text-[#2F4A3A]"
          : "ring-1 ring-[#E1D9C7]/70 text-[#3A5C46] hover:bg-white",
      )}
    >
      <span
        className="grid shrink-0 place-items-center text-base leading-none"
        aria-hidden
      >
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </button>
  )
}
