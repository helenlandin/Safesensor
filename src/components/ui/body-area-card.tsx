import * as React from "react"

import { cn } from "@/lib/utils"

export type BodyAreaCardProps = {
  label: string
  illustration: React.ReactNode
  selected: boolean
  onToggle: () => void
}

/**
 * Square (aspect-square) tappable card with a watercolor illustration that
 * fills the card edge-to-edge. The label sits in a translucent strip at the
 * bottom so it stays readable over the painting.
 */
export function BodyAreaCard({
  label,
  illustration,
  selected,
  onToggle,
}: BodyAreaCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={cn(
        "group relative flex aspect-square w-full flex-col items-stretch overflow-hidden rounded-3xl",
        "bg-[#FAF7F0]",
        "transition-all duration-200 ease-out",
        "shadow-[0_4px_16px_rgba(60,90,70,0.10),0_1px_0_rgba(255,255,255,0.8)_inset]",
        "hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(60,90,70,0.14)]",
        "active:scale-[0.97]",
        selected
          ? "ring-2 ring-[#7DBA98] ring-offset-2 ring-offset-[#E8F1E5]"
          : "ring-1 ring-[#E1D9C7]/70",
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {illustration}
      </div>

      {selected && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-[#7DBA98]/15"
        />
      )}

      <span
        className={cn(
          "absolute inset-x-1.5 bottom-1.5 rounded-2xl px-2 py-1 text-center",
          "bg-white/75 backdrop-blur-sm",
          "text-[clamp(10.5px,3vw,12.5px)] font-semibold tracking-tight text-[#2F4A3A]",
          "shadow-[0_1px_4px_rgba(60,90,70,0.08)]",
        )}
      >
        {label}
      </span>
    </button>
  )
}
