import { useState } from "react"
import { Heart, Moon } from "lucide-react"

import { KroppDetaljScreen } from "@/components/snabb-hjalp/kropp-detalj-screen"
import { OvningScreen } from "@/components/snabb-hjalp/ovning-screen"
import { OvningarListaScreen } from "@/components/ovningar/ovningar-lista-screen"
import { StartScreen } from "@/components/start/start-screen"
import { BottomNav, type Tab } from "@/components/ui/bottom-nav"
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
  | "ovning"
  | "somn"

function App() {
  const [tab, setTab] = useState<Tab>("hem")
  const [snabbHjalpStep, setSnabbHjalpStep] = useState<SnabbHjalpStep>("hidden")
  const [sliderValue, setSliderValue] = useState(4)
  const [note, setNote] = useState("")
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([])
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([])

  const handleTabChange = (next: Tab) => {
    setTab(next)
    if (next === "hem") {
      setSnabbHjalpStep("hidden")
    }
  }

  const isStartScreen = tab === "hem" && snabbHjalpStep === "hidden"

  return (
    <>
      {tab === "ovningar" ? (
        <OvningarListaScreen />
      ) : isStartScreen ? (
        <StartScreen
          onSnabbHjalp={() => setSnabbHjalpStep("val")}
          onSomn={() => setSnabbHjalpStep("somn")}
          onOvningar={() => setTab("ovningar")}
          onCheckIn={() => {
            // TODO: framtida check-in-flöde
          }}
          onLarKanna={() => {
            // TODO: framtida "lär känna dina signaler"-flöde
          }}
          onLoggbok={() => {
            // TODO: framtida loggbok
          }}
        />
      ) : (
        <HemFlow
          snabbHjalpStep={snabbHjalpStep}
          setSnabbHjalpStep={setSnabbHjalpStep}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          note={note}
          setNote={setNote}
          selectedBodyParts={selectedBodyParts}
          setSelectedBodyParts={setSelectedBodyParts}
          selectedFeelings={selectedFeelings}
          setSelectedFeelings={setSelectedFeelings}
        />
      )}

      {isStartScreen ? null : (
        <BottomNav active={tab} onChange={handleTabChange} />
      )}
    </>
  )
}

type HemFlowProps = {
  snabbHjalpStep: SnabbHjalpStep
  setSnabbHjalpStep: (s: SnabbHjalpStep) => void
  sliderValue: number
  setSliderValue: (v: number) => void
  note: string
  setNote: (n: string) => void
  selectedBodyParts: string[]
  setSelectedBodyParts: (b: string[]) => void
  selectedFeelings: string[]
  setSelectedFeelings: (f: string[]) => void
}

function HemFlow({
  snabbHjalpStep,
  setSnabbHjalpStep,
  sliderValue,
  setSliderValue,
  note,
  setNote,
  selectedBodyParts,
  setSelectedBodyParts,
  selectedFeelings,
  setSelectedFeelings,
}: HemFlowProps) {
  if (snabbHjalpStep === "ovning") {
    return (
      <OvningScreen
        bodyParts={selectedBodyParts}
        feelings={selectedFeelings}
        sliderValue={sliderValue}
        onBack={() => setSnabbHjalpStep("kropp-detalj")}
        onDone={() => setSnabbHjalpStep("val")}
      />
    )
  }

  if (snabbHjalpStep === "kropp-detalj") {
    return (
      <KroppDetaljScreen
        sliderValue={sliderValue}
        note={note}
        onBack={() => setSnabbHjalpStep("kropp")}
        onContinue={({ bodyParts, feelings }) => {
          setSelectedBodyParts(bodyParts)
          setSelectedFeelings(feelings)
          setSnabbHjalpStep("ovning")
        }}
      />
    )
  }
  if (snabbHjalpStep === "kropp") {
    return (
      <CalmBackground>
        <div
          className="mx-auto w-full max-w-[420px] pt-3 pb-28"
          style={{ paddingInline: "clamp(12px, 4vw, 20px)" }}
        >
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
              <span
                role="img"
                aria-label="känsla"
                style={{ fontSize: "clamp(56px, 16vw, 80px)", lineHeight: 1 }}
              >
                {
                  ["😌", "😌", "😌", "😐", "😐", "😟", "😟", "🥶", "🥶", "😫", "😫"][
                    sliderValue
                  ]
                }
              </span>
            </div>

            <h1
              className="text-center font-bold text-[#2F4A3A] leading-tight"
              style={{
                fontFamily: SERIF_FONT,
                fontSize: "clamp(22px, 6vw, 28px)",
              }}
            >
              Hur stark är känslan?
            </h1>

            <p
              className="mt-2 mb-7 px-1 text-center text-[#5A6B5F]"
              style={{ fontSize: "clamp(12px, 3.4vw, 13px)" }}
            >
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
                  fontSize: "clamp(40px, 11vw, 56px)",
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
                className="min-h-[72px] w-full rounded-2xl bg-white/75 px-4 py-3 text-base text-[#2F4A3A] shadow-[0_2px_8px_rgba(60,90,70,0.07)] ring-1 ring-[#D9E5DE]/70 outline-none backdrop-blur-sm placeholder:text-[#7E8A84]"
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
        <div
          className="mx-auto w-full max-w-[420px] py-6 pb-28"
          style={{ paddingInline: "clamp(12px, 4vw, 20px)" }}
        >
          <button
            className="text-sm text-slate-500"
            onClick={() => setSnabbHjalpStep("val")}
          >
            Tillbaka
          </button>

          <section className="mt-6">
            <h1
              className="font-bold text-[#4E5A54]"
              style={{ fontSize: "clamp(22px, 6vw, 28px)" }}
            >
              Svårt att sova
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Här kan du lägga innehållet för tankar som snurrar och oro på
              natten.
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
        <div
          className="mx-auto w-full max-w-[420px] py-6 pb-28"
          style={{ paddingInline: "clamp(12px, 4vw, 20px)" }}
        >
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
              className="text-center font-bold text-[#2F4A3A] leading-tight"
              style={{
                fontFamily: SERIF_FONT,
                fontSize: "clamp(22px, 6vw, 28px)",
              }}
            >
              Vad behöver du hjälp med?
            </h2>
            <p
              className="mt-2 text-center text-[#5A6B5F]"
              style={{ fontSize: "clamp(12px, 3.4vw, 13px)" }}
            >
              Välj det som stämmer bäst just nu.
            </p>
          </section>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={() => setSnabbHjalpStep("kropp")}
              className="w-full rounded-[28px] bg-white/85 px-5 py-5 text-left ring-1 ring-[#D9E5DE]/70 backdrop-blur-sm shadow-[0_8px_24px_rgba(60,90,70,0.08),0_1px_0_rgba(255,255,255,0.7)_inset] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(60,90,70,0.12)] active:scale-[0.98] sm:px-6 sm:py-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#E8CFC3] shadow-[0_4px_10px_rgba(232,207,195,0.5)] sm:h-16 sm:w-16">
                  <Heart className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-semibold text-[#2F4A3A]"
                    style={{ fontSize: "clamp(16px, 4.5vw, 20px)" }}
                  >
                    Kroppen är aktiverad
                  </h3>
                  <p
                    className="mt-1 text-[#5A6B5F]"
                    style={{ fontSize: "clamp(12px, 3.4vw, 14px)" }}
                  >
                    Stress, oro, spänning, obehag
                  </p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSnabbHjalpStep("somn")}
              className="w-full rounded-[28px] bg-white/85 px-5 py-5 text-left ring-1 ring-[#D9E5DE]/70 backdrop-blur-sm shadow-[0_8px_24px_rgba(60,90,70,0.08),0_1px_0_rgba(255,255,255,0.7)_inset] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(60,90,70,0.12)] active:scale-[0.98] sm:px-6 sm:py-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#4A5397] shadow-[0_4px_10px_rgba(74,83,151,0.4)] sm:h-16 sm:w-16">
                  <Moon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-semibold text-[#2F4A3A]"
                    style={{ fontSize: "clamp(16px, 4.5vw, 20px)" }}
                  >
                    Svårt att sova
                  </h3>
                  <p
                    className="mt-1 text-[#5A6B5F]"
                    style={{ fontSize: "clamp(12px, 3.4vw, 14px)" }}
                  >
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

  return null
}

export default App
