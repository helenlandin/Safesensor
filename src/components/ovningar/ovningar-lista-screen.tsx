import { CalmBackground } from "@/components/ui/calm-background"
import { OVNINGAR } from "@/data/ovningar"

const SERIF_FONT = '"Playfair Display", Georgia, serif'

export function OvningarListaScreen() {
  return (
    <CalmBackground>
      <div
        className="mx-auto w-full max-w-[420px] pt-6 pb-28"
        style={{ paddingInline: "clamp(12px, 4vw, 20px)" }}
      >
        <header className="mb-8 text-center">
          <h1
            className="mb-2 font-bold text-[#2F4A3A] leading-tight"
            style={{
              fontFamily: SERIF_FONT,
              fontSize: "clamp(22px, 6vw, 28px)",
            }}
          >
            Övningar
          </h1>
          <p
            className="text-[#5A6B5F]"
            style={{ fontSize: "clamp(12px, 3.4vw, 14px)" }}
          >
            Bläddra fritt bland alla övningar.
          </p>
        </header>

        {OVNINGAR.length === 0 ? (
          <div className="rounded-3xl bg-white/85 p-6 text-center ring-1 ring-[#D9E5DE]/70 shadow-[0_8px_24px_rgba(60,90,70,0.08)] backdrop-blur-sm">
            <p className="text-sm text-[#5A6B5F]">
              Inga övningar är inlagda ännu. De läggs till snart.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {OVNINGAR.map((o) => (
              <li
                key={o.id}
                className="rounded-3xl bg-white/85 p-5 ring-1 ring-[#D9E5DE]/70 shadow-[0_8px_24px_rgba(60,90,70,0.08)] backdrop-blur-sm"
              >
                <h2 className="text-base font-semibold text-[#2F4A3A]">
                  {o.titel}
                </h2>
                <p className="mt-1 text-sm text-[#5A6B5F]">
                  {o.kortBeskrivning}
                </p>
                <p className="mt-1 text-xs text-[#7E8A84]">
                  ≈ {o.varaktighetMin} min
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CalmBackground>
  )
}
