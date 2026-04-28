import { useState } from "react"

import { BodyAreaCard } from "@/components/ui/body-area-card"
import {
  BODY_AREA_ART,
  type BodyAreaId,
} from "@/components/ui/body-area-illustrations"
import { CalmBackground } from "@/components/ui/calm-background"
import { FeelingPill } from "@/components/ui/feeling-pill"
import { PrimaryCta } from "@/components/ui/primary-cta"

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

const BODY_PARTS: { id: BodyAreaId; label: string }[] = [
  { id: "mage", label: "Mage" },
  { id: "brost", label: "Bröst" },
  { id: "hals", label: "Hals" },
  { id: "kakar", label: "Käkar" },
  { id: "huvud", label: "Huvud" },
  { id: "axlar", label: "Axlar" },
  { id: "armar", label: "Armar" },
  { id: "ben", label: "Ben" },
  { id: "hela", label: "Hela kroppen" },
]

const FEELINGS: { id: string; label: string; icon: string }[] = [
  { id: "oro", label: "Oro/ångest", icon: "🌧️" },
  { id: "ilska", label: "Ilska", icon: "🔥" },
  { id: "ledsen", label: "Ledsen", icon: "🌧️" },
  { id: "radsla", label: "Rädsla", icon: "👻" },
  { id: "skam", label: "Skam", icon: "🍃" },
  { id: "overvaldigad", label: "Överväldigad", icon: "🎯" },
  { id: "glad", label: "Glad", icon: "☀️" },
  { id: "stressad", label: "Stressad", icon: "🌀" },
  { id: "rastlos", label: "Rastlös", icon: "〰️" },
]

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
    <CalmBackground>
      <div
        className="mx-auto w-full max-w-[420px] pt-3 pb-12"
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

        {/* Sektion 1 – Kroppsdelar */}
        <h1
          className="mt-2 mb-1 text-center font-bold text-[#2F4A3A] leading-tight"
          style={{
            fontFamily: SERIF_FONT,
            fontSize: "clamp(20px, 5.5vw, 26px)",
          }}
        >
          Var i kroppen känner du det?
        </h1>
        <p className="mb-6 text-center text-[#5A6B5F]" style={{ fontSize: "clamp(12px, 3.4vw, 13px)" }}>
          Välj upp till 3 områden
        </p>

        <div
          className="grid grid-cols-3"
          style={{ gap: "clamp(8px, 3vw, 16px)" }}
        >
          {BODY_PARTS.map((part) => {
            const Art = BODY_AREA_ART[part.id]
            return (
              <BodyAreaCard
                key={part.id}
                label={part.label}
                illustration={<Art />}
                selected={bodyParts.includes(part.id)}
                onToggle={() => toggle(part.id, bodyParts, setBodyParts)}
              />
            )
          })}
        </div>

        {/* Sektion 2 – Känslor */}
        <h2
          className="mt-10 mb-5 text-center font-bold text-[#2F4A3A] leading-tight"
          style={{
            fontFamily: SERIF_FONT,
            fontSize: "clamp(18px, 4.5vw, 22px)",
          }}
        >
          Vilka känslor finns med?
        </h2>

        <div
          className="grid grid-cols-3"
          style={{ gap: "clamp(8px, 2.5vw, 12px)" }}
        >
          {FEELINGS.map((f) => (
            <FeelingPill
              key={f.id}
              label={f.label}
              icon={f.icon}
              selected={feelings.includes(f.id)}
              onToggle={() => toggle(f.id, feelings, setFeelings)}
            />
          ))}
        </div>

        <div className="mt-10">
          <PrimaryCta
            type="button"
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
          </PrimaryCta>
        </div>
      </div>
    </CalmBackground>
  )
}
