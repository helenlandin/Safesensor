import { Home, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"

export type Tab = "hem" | "ovningar"

export type BottomNavProps = {
  active: Tab
  onChange: (tab: Tab) => void
}

/**
 * Fast tab-bar i nederkant. Hålls inom samma 420px-kolumn som resten av
 * appen så den passar mobilskärmar. Respekterar iOS safe-area.
 */
export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav
      aria-label="Huvudnavigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#D9E5DE]/70 bg-white/85 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex w-full max-w-[420px]">
        <NavItem
          icon={<Home className="h-5 w-5" />}
          label="Hem"
          active={active === "hem"}
          onClick={() => onChange("hem")}
        />
        <NavItem
          icon={<Sparkles className="h-5 w-5" />}
          label="Övningar"
          active={active === "ovningar"}
          onClick={() => onChange("ovningar")}
        />
      </div>
    </nav>
  )
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium tracking-tight transition",
        active
          ? "text-[#2F4A3A]"
          : "text-[#7E8A84] hover:text-[#5A6B5F] active:text-[#2F4A3A]",
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition",
          active ? "bg-[#E8F1E5]" : "bg-transparent",
        )}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  )
}
