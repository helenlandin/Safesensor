import { useState } from "react"
import { Button } from "@/components/ui/button"

export type SnabbHjalpDetailProps = {
  variant: "kropp" | "somn"
  onBack: () => void
}

const sliderColors = [
  "from-[#7DBA98] via-[#B7D9C6] to-[#FFD9B3]", // green → soft warm
]

function getFeelingText(value: number) {
  if (value <= 3) return "Du är lugn"
  if (value <= 6) return "Du är påverkad men i kontroll"
  return "Du är överväldigad"
}

export function SnabbHjalpDetail({ onBack }: SnabbHjalpDetailProps) {
  const [value, setValue] = useState(4)
  const [note, setNote] = useState("")

  return (
    <div className="min-h-svh bg-gradient-to-b from-[#F7FBF8] to-[#F5FAF7] flex flex-col justify-between items-center px-4 pt-4 pb-6">

      {/* Top Back Button */}
      <div className="w-full max-w-[420px]">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-[#7E8A84] hover:bg-[#E8EBE9]/60 hover:text-[#4E5A54] mb-2"
          onClick={onBack}
        >
          Tillbaka till val
        </Button>
      </div>

      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center flex-1">

        {/* Emoji */}
        <div className="mb-4 mt-2 flex-shrink-0">
          <span className="text-6xl" aria-label="mild stress" role="img">
            😯
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4E5A54] text-center mb-1">
          Hur stark är känslan?
        </h1>
        {/* Subtitle */}
        <p className="text-sm text-[#7E8A84] text-center mb-7 px-1">
          Ta ett ögonblick och känn efter. Hur stark är känslan just nu? Drag reglaget nedan.
        </p>

        {/* Slider */}
        <div className="w-full mb-7 flex flex-col items-center">
          <input
            type="range"
            min={1}
            max={10}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={`w-full h-2 rounded-full outline-none bg-gradient-to-r ${sliderColors[0]} appearance-none custom-slider mb-3`}
            style={{
              accentColor: "#7DBA98",
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
          <span className="text-[2.8rem] font-extrabold text-[#5D9C7A]">{value}</span>
        </div>
        {/* Feeling text */}
        <div className="mb-7">
          <span className="text-base font-medium text-[#7E8A84]">{getFeelingText(value)}</span>
        </div>

        {/* Textarea */}
        <div className="w-full mb-10 mt-1">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full min-h-[72px] rounded-2xl px-4 py-3 bg-[#F1F7F2] text-base text-[#4E5A54] placeholder-[#A2B9AC] border-none outline-none resize-none shadow-[0_2px_16px_rgba(125,186,152,0.05)] transition focus:bg-[#E7F2EB]"
            placeholder="Vill du skriva några tankar eller lägga till något?"
            maxLength={250}
          />
        </div>

        {/* Just to push the button down on mobile if content is short */}
        <div className="flex-1" />

        {/* Continue Button */}
        <Button
          type="button"
          className="w-full bg-[#7DBA98] text-white text-lg font-semibold rounded-2xl py-4 shadow-[0_4px_16px_rgba(125,186,152,0.12)] hover:bg-[#66A87F] transition-all duration-150"
          style={{ maxWidth: 420 }}
        >
          Fortsätt
        </Button>
      </div>

      
    </div>
  )
}
