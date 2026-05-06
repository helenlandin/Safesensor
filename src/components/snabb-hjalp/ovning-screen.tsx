import { CalmBackground } from "@/components/ui/calm-background"
import { PrimaryCta } from "@/components/ui/primary-cta"
import { rekommenderaOvningar } from "@/data/ovningar"

const SERIF_FONT = '"Playfair Display", Georgia, serif'

export type OvningScreenProps = {
  bodyParts: string[]
  feelings: string[]
  sliderValue: number
  onBack: () => void
  onDone: () => void
}

export function OvningScreen({
  bodyParts,
  feelings,
  sliderValue,
  onBack,
  onDone,
}: OvningScreenProps) {
  const traffar = rekommenderaOvningar({ bodyParts, feelings, sliderValue })
  const ovning = traffar[0]

  return (
    <CalmBackground>
      <div
        className="mx-auto w-full max-w-[420px] pt-3 pb-28"
        style={{ paddingInline: "clamp(12px, 4vw, 20px)" }}
      >
        <div className="mb-1">
          <button
            type="button"
            onClick={onBack}
            className="min-h-[44px] rounded-full px-3 text-sm font-medium text-[#5A6B5F] transition hover:bg-white/50"
          >
            ← Tillbaka
          </button>
        </div>

        <h1
          className="mt-4 mb-2 text-center font-bold text-[#2F4A3A] leading-tight"
          style={{
            fontFamily: SERIF_FONT,
            fontSize: "clamp(22px, 6vw, 28px)",
          }}
        >
          En övning för dig
        </h1>
        <p
          className="mb-8 text-center text-[#5A6B5F]"
          style={{ fontSize: "clamp(12px, 3.4vw, 14px)" }}
        >
          Vald utifrån var du känner det och vilka känslor som finns med.
        </p>

        {ovning ? (
          <article className="rounded-3xl bg-white/85 p-6 ring-1 ring-[#D9E5DE]/70 shadow-[0_8px_24px_rgba(60,90,70,0.08)] backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[#2F4A3A]">
              {ovning.titel}
            </h2>
            <p className="mt-2 text-sm text-[#5A6B5F]">
              {ovning.kortBeskrivning}
            </p>
            <p className="mt-1 text-xs text-[#7E8A84]">
              ≈ {ovning.varaktighetMin} min
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[#3A5C46]">
              {ovning.steg.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </article>
        ) : (
          <div className="rounded-3xl bg-white/85 p-6 text-center ring-1 ring-[#D9E5DE]/70 shadow-[0_8px_24px_rgba(60,90,70,0.08)] backdrop-blur-sm">
            <p className="text-sm text-[#5A6B5F]">
              Inga övningar är inlagda ännu. De läggs till löpande — kom snart
              tillbaka.
            </p>
          </div>
        )}

        <div className="mt-8">
          <PrimaryCta type="button" onClick={onDone}>
            Klar
          </PrimaryCta>
        </div>
      </div>
    </CalmBackground>
  )
}
