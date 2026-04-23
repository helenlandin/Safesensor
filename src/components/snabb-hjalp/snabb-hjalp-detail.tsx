import { useState } from "react"
import { Button } from "@/components/ui/button"

export type SnabbHjalpDetailProps = {
  variant: "kropp" | "somn"
  onBack: () => void
}

function getSliderColor(v: number) {
  if (v <= 3) return "#4A90D9"
  if (v <= 6) return "#E09B00"
  return "#E03A3A"
}

const scaleContent: Record<number, { emoji: string; text: string }> = {
  0: { emoji: "🟢", text: "Bra att du checkar in, även när det känns lugnt" },
  1: { emoji: "🙂", text: "Bra att du checkar in, även när det känns lugnt" },
  2: { emoji: "😊", text: "Bra att du checkar in, även när det känns lugnt" },
  3: { emoji: "😐", text: "Bra att du checkar in, även när det känns lugnt" },
  4: { emoji: "🟡", text: "Lyssna in – var i kroppen märker du det mest?" },
  5: { emoji: "😟", text: "Lyssna in – var i kroppen märker du det mest?" },
  6: { emoji: "😨", text: "Lyssna in – var i kroppen märker du det mest?" },
  7: { emoji: "🔵", text: "Det verkar som att kroppen är ganska aktiverad" },
  8: { emoji: "😰", text: "Det verkar som att kroppen är ganska aktiverad" },
  9: { emoji: "😱", text: "Det verkar som att kroppen är ganska aktiverad" },
  10: { emoji: "🔴", text: "Det verkar som att kroppen är ganska aktiverad" },
}

export function SnabbHjalpDetail({ onBack }: SnabbHjalpDetailProps) {
  const [value, setValue] = useState(4)
  const [note, setNote] = useState("")
  const content = scaleContent[Math.round(value)] || scaleContent[0]
  const color = getSliderColor(value)

  return (
    <div className="min-h-svh bg-gradient-to-b from-[#F7FBF8] to-[#F5FAF7] flex flex-col items-center px-4 pt-4 pb-8">

      {/* Top Back Button */}
      <div className="w-full max-w-[420px]">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-[#7E8A84] hover:bg-[#E8EBE9]/60 hover:text-[#4E5A54]"
          onClick={onBack}
        >
          Tillbaka till val
        </Button>
      </div>

      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center">

        {/* Emoji */}
        <div className="mb-4 mt-2 flex-shrink-0">
          <span className="text-6xl" role="img">{content.emoji}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4E5A54] text-center mb-1">
          Hur stark är känslan?
        </h1>

        {/* Subtitle */}
        <p className="text-center text-sm text-[#7E8A84] mb-6">{content.text}</p>

        {/* Slider */}
        <div className="w-full mb-7 flex flex-col items-center">
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 rounded-full outline-none appearance-none custom-slider mb-3"
            style={{
              accentColor: color,
              boxShadow: "0 2px 16px rgba(125,186,152,0.09)",
            }}
          />
          <div className="w-full flex justify-between px-2 text-xs font-medium text-[#A2B9AC] select-none">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* Selected number */}
        <div className="mb-1 mt-1">
        <span style={{ color: color, fontSize: "2.8rem", fontWeight: "bold" }}>{value}</span>
        </div>

        {/* Textarea */}
        <div className="w-full mb-10 mt-1">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full min-h-[72px] rounded-2xl px-4 py-3 bg-[#F1F7F2] text-base text-[#4E5A54]"
            placeholder="Vill du skriva några tankar eller lägga till något?"
            maxLength={250}
          />
        </div>

        <div className="flex-1" />

        {/* Continue Button */}
        <Button
          type="button"
          className="w-full bg-[#7DBA98] text-white text-lg font-semibold rounded-2xl"
          style={{ maxWidth: 420 }}
        >
          Fortsätt
        </Button>
      </div>
    </div>
  )
}