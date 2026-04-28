import { useState } from "react"
import { Heart, Moon } from "lucide-react"

import { KroppDetaljScreen } from "@/components/snabb-hjalp/kropp-detalj-screen"
import { CalmBackground } from "@/components/ui/calm-background"
import { PrimaryCta } from "@/components/ui/primary-cta"

const SERIF_FONT = '"Playfair Display", Georgia, serif'

function getSliderColor(v: number) {
  if (v <= 3) return "#4CAF50"
  if (v <= 8) return "#E09B00"
  return "#E03A3A"
}
type SnabbHjalpStep =
  | "hidden"
  | "val"
  | "kropp"
  | "kropp-detalj"
  | "somn"

function App() {
  const [snabbHjalpStep, setSnabbHjalpStep] = useState<SnabbHjalpStep>("val")
  const [sliderValue, setSliderValue] = useState(4)
  const [note, setNote] = useState("")
  const [, setSelectedBodyParts] = useState<string[]>([])
  const [, setSelectedFeelings] = useState<string[]>([])

  if (snabbHjalpStep === "kropp-detalj") {
    return (
      <KroppDetaljScreen
        sliderValue={sliderValue}
        note={note}
        onBack={() => setSnabbHjalpStep("kropp")}
        onContinue={({ bodyParts, feelings }) => {
          setSelectedBodyParts(bodyParts)
          setSelectedFeelings(feelings)
          // TODO: nästa steg, t.ex. setSnabbHjalpStep("ovning")
        }}
      />
    )
  }
  if (snabbHjalpStep === "kropp") {
    return (
      <CalmBackground>
        <div className="mx-auto w-full max-w-[420px] px-5 pt-3 pb-12">
          <div className="mb-1">
            <button
              type="button"
              onClick={() => setSnabbHjalpStep("val")}
              className="min-h-[44px] rounded-full px-3 text-sm font-medium text-[#5A6B5F] transition hover:bg-white/50"
            >
              ← Tillbaka
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="mt-2 mb-4 flex-shrink-0">
              <span className="text-7xl" role="img" aria-label="känsla">
                {
                  ["😌", "😌", "😌", "😐", "😐", "😟", "😟", "🥶", "🥶", "😫", "😫"][
                    sliderValue
                  ]
                }
              </span>
            </div>

            <h1
              className="text-center text-[26px] leading-tight font-bold text-[#2F4A3A]"
              style={{ fontFamily: SERIF_FONT }}
            >
              Hur stark är känslan?
            </h1>

            <p className="mt-2 mb-7 px-1 text-center text-[13px] text-[#5A6B5F]">
              {
                [
                  "Bra att du checkar in, även när det känns lugnt.",
                  "Bra att du checkar in, även när det känns lugnt.",
                  "Bra att du checkar in, även när det känns lugnt.",
                  "Bra att du checkar in, även när det känns lugnt.",
                  "Lyssna in — var i kroppen märker du det mest?",
                  "Lyssna in — var i kroppen märker du det mest?",
                  "Lyssna in — var i kroppen märker du det mest?",
                  "Det verkar som att kroppen är ganska aktiverad just nu. Vi börjar med något lugnande.",
                  "Det verkar som att kroppen är ganska aktiverad just nu. Vi börjar med något lugnande.",
                  "Det verkar som att kroppen är ganska aktiverad just nu. Vi börjar med något lugnande.",
                  "Det verkar som att kroppen är ganska aktiverad just nu. Vi börjar med något lugnande.",
                ][sliderValue]
              }
            </p>

            <div className="mb-7 flex w-full flex-col items-center">
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="h-2 w-full rounded-full outline-none"
                style={{
                  background: `linear-gradient(to right, ${getSliderColor(sliderValue)} ${sliderValue * 10}%, rgba(255,255,255,0.6) ${sliderValue * 10}%)`,
                }}
              />

              <div className="mt-2 flex w-full justify-between px-2 text-xs font-medium text-[#5A6B5F]">
                <span>Lugn</span>
                <span>Väldigt stark</span>
              </div>
            </div>

            <div className="mt-1 mb-1">
              <span
                style={{
                  color: getSliderColor(sliderValue),
                  fontSize: "2.8rem",
                  fontWeight: "bold",
                }}
              >
                {sliderValue}
              </span>
            </div>

            <div className="mt-1 mb-10 w-full">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="min-h-[72px] w-full rounded-2xl bg-white/75 px-4 py-3 text-[#2F4A3A] shadow-[0_2px_8px_rgba(60,90,70,0.07)] ring-1 ring-[#D9E5DE]/70 outline-none backdrop-blur-sm placeholder:text-[#7E8A84]"
                placeholder="Vill du skriva något om hur du känner? (valfritt)"
                maxLength={250}
              />
            </div>

            <PrimaryCta
              type="button"
              onClick={() => setSnabbHjalpStep("kropp-detalj")}
            >
              Fortsätt
            </PrimaryCta>
          </div>
        </div>
      </CalmBackground>
    )
  }
  if (snabbHjalpStep === "somn") {
    return (
      <div className="min-h-svh bg-[#F7F6F2]">
        <div className="mx-auto w-full max-w-[420px] px-5 py-6">
          <button
            className="text-sm text-slate-500"
            onClick={() => setSnabbHjalpStep("val")}
          >
            Tillbaka
          </button>

          <section className="mt-6">
            <h1 className="text-2xl font-bold text-[#4E5A54]">
              Svårt att sova
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Här kan du lägga innehållet för tankar som snurrar och oro på natten.
            </p>
          </section>

          <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center">
            <p className="text-sm text-slate-500">Safesensor</p>
          </footer>
        </div>
      </div>
    )
  }

  if (snabbHjalpStep === "val") {
    return (
      <CalmBackground>
        <div className="mx-auto w-full max-w-[420px] px-5 py-6">
          <div className="mt-2">
            <button
              type="button"
              className="min-h-[44px] rounded-full px-3 text-sm font-medium text-[#5A6B5F] transition hover:bg-white/50"
              onClick={() => setSnabbHjalpStep("hidden")}
            >
              ← Tillbaka
            </button>
          </div>

          <section className="mt-6">
            <h2
              className="text-center text-[26px] leading-tight font-bold text-[#2F4A3A]"
              style={{ fontFamily: SERIF_FONT }}
            >
              Vad behöver du hjälp med?
            </h2>
            <p className="mt-2 text-center text-[13px] text-[#5A6B5F]">
              Välj det som stämmer bäst just nu.
            </p>
          </section>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={() => setSnabbHjalpStep("kropp")}
              className="w-full rounded-[28px] bg-white/85 px-6 py-6 text-left ring-1 ring-[#D9E5DE]/70 backdrop-blur-sm shadow-[0_8px_24px_rgba(60,90,70,0.08),0_1px_0_rgba(255,255,255,0.7)_inset] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(60,90,70,0.12)] active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8CFC3] shadow-[0_4px_10px_rgba(232,207,195,0.5)]">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4A3A]">
                    Kroppen är aktiverad
                  </h3>
                  <p className="mt-1 text-sm text-[#5A6B5F]">
                    Stress, oro, spänning, obehag
                  </p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSnabbHjalpStep("somn")}
              className="w-full rounded-[28px] bg-white/85 px-6 py-6 text-left ring-1 ring-[#D9E5DE]/70 backdrop-blur-sm shadow-[0_8px_24px_rgba(60,90,70,0.08),0_1px_0_rgba(255,255,255,0.7)_inset] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(60,90,70,0.12)] active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4A5397] shadow-[0_4px_10px_rgba(74,83,151,0.4)]">
                  <Moon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4A3A]">
                    Svårt att sova
                  </h3>
                  <p className="mt-1 text-sm text-[#5A6B5F]">
                    Tankarna snurrar, oro, vaknat på natten
                  </p>
                </div>
              </div>
            </button>
          </div>

          <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center">
            <p className="text-sm text-[#5A6B5F]">Safesensor</p>
          </footer>
        </div>
      </CalmBackground>
    )
  }

  return (
    <div className="min-h-svh bg-[#F7F6F2]">
      <div className="mx-auto w-full max-w-[420px] px-5 py-8">
        <section className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#4E5A54]">
            Safesensor – min trygghet
          </h1>

          <button
            onClick={() => setSnabbHjalpStep("val")}
            className="mt-6 rounded-2xl bg-[#7DBA98] px-6 py-3 text-lg font-semibold text-white shadow-[0_4px_14px_rgba(125,186,152,0.35)]"
          >
            Snabb hjälp nu
          </button>
        </section>

        <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center">
          <p className="text-sm text-slate-500">Safesensor</p>
        </footer>
      </div>
    </div>
  )
}

export default App