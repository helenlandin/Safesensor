import { useState } from "react"

import { Button } from "@/components/ui/button"

export type KroppDetaljData = {
  sliderValue: number
  note: string
  bodyParts: string[]
  feelings: string[]
}

export type KroppDetaljScreenProps = {
  sliderValue: number
  note: string
  onBack: () => void
  onContinue: (data: KroppDetaljData) => void
}

const BODY_PARTS = [
  { id: "mage", label: "Mage", img: "/illustrations/mage.png" },
  { id: "brost", label: "Bröst", img: "/illustrations/brost.png" },
  { id: "hals", label: "Hals", img: "/illustrations/hals.png" },
  { id: "kakar", label: "Käkar", img: "/illustrations/kakar.png" },
  { id: "huvud", label: "Huvud", img: "/illustrations/huvud.png" },
  { id: "axlar", label: "Axlar", img: "/illustrations/axlar.png" },
  { id: "armar", label: "Armar", img: "/illustrations/armar.png" },
  { id: "ben", label: "Ben", img: "/illustrations/ben.png" },
  { id: "hela", label: "Hela kroppen", img: "/illustrations/hela.png" },
] as const

const FEELINGS = [
  { id: "oro", label: "Oro/ångest", emoji: "☁️" },
  { id: "ilska", label: "Ilska", emoji: "🔥" },
  { id: "ledsen", label: "Ledsen", emoji: "🌧️" },
  { id: "radsla", label: "Rädsla", emoji: "👻" },
  { id: "skam", label: "Skam", emoji: "🥑" },
  { id: "overvaldigad", label: "Överväldigad", emoji: "🎯" },
  { id: "glad", label: "Glad", emoji: "☀️" },
  { id: "stressad", label: "Stressad", emoji: "🌀" },
  { id: "rastlos", label: "Rastlös", emoji: "〰️" },
] as const

const MAX_SELECT = 3

const SERIF_FONT = '"Playfair Display", Georgia, serif'

export function KroppDetaljScreen({
  sliderValue,
  note,
  onBack,
  onContinue,
}: KroppDetaljScreenProps) {
  const [bodyParts, setBodyParts] = useState<string[]>([])
  const [feelings, setFeelings] = useState<string[]>([])

  const toggle = (
    id: string,
    list: string[],
    setList: (next: string[]) => void,
  ) => {
    if (list.includes(id)) {
      setList(list.filter((x) => x !== id))
      return
    }
    if (list.length < MAX_SELECT) {
      setList([...list, id])
    }
  }

  return (
    <div className="min-h-svh w-full overflow-y-auto bg-[#E8F1E5]">
      <div className="mx-auto w-full max-w-[390px] px-4 pt-3 pb-10">
        <div className="mb-1">
          <button
            type="button"
            onClick={onBack}
            className="min-h-[44px] rounded-md px-2 text-sm font-medium text-[#5A6B5F] hover:bg-white/40"
          >
            ← Tillbaka
          </button>
        </div>

        {/* Sektion 1 – Kroppsdelar */}
        <h1
          className="mb-5 text-center text-[22px] leading-tight font-bold text-[#2F4A3A]"
          style={{ fontFamily: SERIF_FONT }}
        >
          Var i kroppen känner du det?
        </h1>

        <div className="grid grid-cols-3 gap-3">
          {BODY_PARTS.map((part) => {
            const selected = bodyParts.includes(part.id)
            return (
              <button
                key={part.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggle(part.id, bodyParts, setBodyParts)}
                className={[
                  "flex min-h-[112px] flex-col items-center justify-end rounded-2xl bg-white p-2 pb-2.5",
                  "shadow-[0_2px_6px_rgba(60,90,70,0.08)] transition-all",
                  selected
                    ? "ring-2 ring-[#7DBA98] ring-offset-1 ring-offset-[#E8F1E5]"
                    : "ring-1 ring-[#D9E5DE]",
                ].join(" ")}
              >
                <div className="flex w-full flex-1 items-center justify-center">
                  <img
                    src={part.img}
                    alt=""
                    className="max-h-[68px] w-auto object-contain"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.style.visibility = "hidden"
                    }}
                  />
                </div>
                <span className="mt-1 text-[12px] font-semibold text-[#3A5C46]">
                  {part.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Sektion 2 – Känslor */}
        <h2
          className="mt-8 mb-4 text-center text-[20px] leading-tight font-bold text-[#2F4A3A]"
          style={{ fontFamily: SERIF_FONT }}
        >
          Vilka känslor finns med?
        </h2>

        <div className="grid grid-cols-3 gap-2.5">
          {FEELINGS.map((f) => {
            const selected = feelings.includes(f.id)
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggle(f.id, feelings, setFeelings)}
                className={[
                  "flex min-h-[44px] items-center justify-center gap-1 rounded-full bg-white px-2 py-2",
                  "text-[12px] font-medium text-[#3A5C46] transition-all",
                  "shadow-[0_1px_4px_rgba(60,90,70,0.08)]",
                  selected
                    ? "ring-2 ring-[#7DBA98]"
                    : "ring-1 ring-[#D9E5DE]",
                ].join(" ")}
              >
                <span aria-hidden>{f.emoji}</span>
                <span className="truncate">{f.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8">
          <Button
            type="button"
            className="h-[52px] w-full rounded-full bg-[#7DBA98] text-base font-semibold text-white shadow-[0_4px_14px_rgba(125,186,152,0.35)] hover:bg-[#6EAB89]"
            onClick={() =>
              onContinue({
                sliderValue,
                note,
                bodyParts,
                feelings,
              })
            }
          >
            Fortsätt
          </Button>
        </div>
      </div>
    </div>
  )
}
