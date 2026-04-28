import * as React from "react"

import { cn } from "@/lib/utils"

export type HelpChoiceCardProps = {
  icon: React.ReactNode
  iconWrapperClassName: string
  title: string
  subtitle: string
  onClick: () => void
  className?: string
}

/**
 * Large tappable choice row: cream card, soft gray-green edge + shadow, icon circle.
 */
export function HelpChoiceCard({
  icon,
  iconWrapperClassName,
  title,
  subtitle,
  onClick,
  className,
}: HelpChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "mx-auto flex w-[min(100%,380px)] cursor-pointer items-center rounded-3xl border border-[#C5D4CC]/55 bg-white/85 backdrop-blur-sm text-left sm:w-[min(100%,400px)] md:w-[min(100%,420px)]",
        "min-h-[7rem] py-6 pl-6 pr-7 sm:min-h-[7.5rem] sm:py-7 sm:pl-7 sm:pr-8 md:py-8",
        "shadow-[0_6px_22px_rgba(78,90,84,0.1),0_1px_0_rgba(255,255,255,0.7)_inset]",
        "transition-[transform,box-shadow,border-color] duration-200 ease-in-out",
        "hover:border-[#A8B8B0]/65 hover:shadow-[0_8px_28px_rgba(78,90,84,0.12)]",
        "active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBA98]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]",
        className
      )}
    >
      <span className="flex w-full items-center gap-4 sm:gap-5">
        <span
          className={cn(
            "flex size-[3.25rem] shrink-0 items-center justify-center rounded-full text-white sm:size-14 [&_svg]:size-[1.55rem] sm:[&_svg]:size-7",
            iconWrapperClassName
          )}
          aria-hidden
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1 self-center">
          <span className="block text-[0.9375rem] font-semibold leading-snug text-[#4E5A54] sm:text-base">
            {title}
          </span>
          <span className="mt-1.5 block text-sm leading-snug text-[#7E8A84]">
            {subtitle}
          </span>
        </span>
      </span>
    </button>
  )
}
