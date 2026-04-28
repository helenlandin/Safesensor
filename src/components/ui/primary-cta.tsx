import * as React from "react"

import { cn } from "@/lib/utils"

export type PrimaryCtaProps = React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Premium rounded gradient CTA used across the snabb-hjälp flow.
 * Sage gradient, soft glossy highlight and green glow shadow.
 */
export function PrimaryCta({ className, children, ...props }: PrimaryCtaProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex h-[56px] w-full items-center justify-center overflow-hidden rounded-full",
        "bg-gradient-to-b from-[#8FCFA5] via-[#7DBA98] to-[#5FA37C]",
        "text-base font-semibold tracking-tight text-white",
        "shadow-[0_10px_28px_rgba(125,186,152,0.40),0_2px_6px_rgba(95,163,124,0.25)]",
        "transition-all duration-200 ease-out",
        "hover:brightness-[1.03] hover:shadow-[0_14px_32px_rgba(125,186,152,0.5)]",
        "active:translate-y-px active:brightness-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBA98]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8F1E5]",
        "disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-1/2 rounded-full bg-white/25 blur-md"
      />
      <span className="relative">{children}</span>
    </button>
  )
}
