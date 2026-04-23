import { useState } from "react"
import { Heart, Moon } from "lucide-react"
function getSliderColor(v: number) {
  if (v <= 3) return "#4CAF50"
  if (v <= 8) return "#E09B00"
  return "#E03A3A"
}
type SnabbHjalpStep = "hidden" | "val" | "kropp" | "somn"

function App() {
  const [snabbHjalpStep, setSnabbHjalpStep] = useState<SnabbHjalpStep>("val")
  const [sliderValue, setSliderValue] = useState(4)
  const [note, setNote] = useState("")
  if (snabbHjalpStep === "kropp") {
    return (
      <div className="min-h-svh bg-gradient-to-b from-[#F7FBF8] to-[#F5FAF7] flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-[420px] mb-2">
          <button
            className="text-[#7E8A84] hover:bg-[#E8EBE9]/60 hover:text-[#4E5A54] px-2 py-1 rounded-md"
            onClick={() => setSnabbHjalpStep("val")}
            type="button"
          >
            Tillbaka
          </button>
        </div>
  
        <div className="w-full max-w-[420px] mx-auto flex flex-col items-center">
          {/* Emoji */}
          <div className="mb-4 mt-2 flex-shrink-0">
  <span className="text-7xl" role="img" aria-label="känsla">
    {(["😌", "😌", "😌", "😐", "😐", "😟", "😟", "🥶", "🥶", "😫", "😫"])[sliderValue]}
  </span>
</div>
  
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#4E5A54] text-center">
            Hur stark är känslan?
          </h1>
  
          {/* Subtitle */}
          <p className="text-sm text-[#7E8A84] text-center mb-7 px-1">
  {[
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
  ][sliderValue]}
</p>
  
          {/* Slider */}
          <div className="w-full mb-7 flex flex-col items-center">
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 rounded-full outline-none"
              style={{ background: `linear-gradient(to right, ${getSliderColor(sliderValue)} ${sliderValue * 10}%, #D1D5DB ${sliderValue * 10}%)` }}
            />
  
            <div className="w-full flex justify-between px-2 text-xs font-medium text-[#7E8A84] mt-2">
              <span>Lugn</span>
              <span>Väldigt stark</span>
            </div>
          </div>
  
          {/* Selected number */}
          <div className="mb-1 mt-1">
          <span style={{ color: getSliderColor(sliderValue), fontSize: "2.8rem", fontWeight: "bold" }}>
              {sliderValue}
            </span>
          </div>
  
          
  
          {/* Textarea */}
          <div className="w-full mb-10 mt-1">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full min-h-[72px] rounded-2xl px-4 py-3 bg-[#F1F7F2] text-[#4E5A54] outline-none"
              placeholder="Vill du skriva något om hur du känner? (valfritt)"
              maxLength={250}
            />
          </div>
  
          <button
            className="rounded-full bg-[#7DBA98] px-10 py-4 text-white font-semibold"
            type="button"
          >
            Fortsätt
          </button>
        </div>
      </div>
    );
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
      <div className="min-h-svh bg-[#F7F6F2]">
        <div className="mx-auto w-full max-w-[420px] px-5 py-6">
          <div className="mt-2">
            <button
              className="text-sm text-slate-500"
              onClick={() => setSnabbHjalpStep("hidden")}
            >
              Tillbaka
            </button>
          </div>

          <section className="mt-6">
            <h2 className="text-2xl font-bold text-[#4E5A54]">
              Vad behöver du hjälp med?
            </h2>
            <p className="mt-2 text-base text-slate-500">
              Välj det som stämmer bäst just nu.
            </p>
          </section>

          <div className="mt-6 space-y-4">
            <button
              onClick={() => setSnabbHjalpStep("kropp")}
              className="w-full rounded-[28px] border border-[#D9E5DE] bg-white px-6 py-6 text-left shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8CFC3]">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4E5A54]">
                    Kroppen är aktiverad
                  </h3>
                  <p className="mt-1 text-base text-slate-500">
                    Stress, oro, spänning, obehag
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSnabbHjalpStep("somn")}
              className="w-full rounded-[28px] border border-[#D9E5DE] bg-white px-6 py-6 text-left shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4A5397]">
                  <Moon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4E5A54]">
                    Svårt att sova
                  </h3>
                  <p className="mt-1 text-base text-slate-500">
                    Tankarna snurrar, oro, vaknat på natten
                  </p>
                </div>
              </div>
            </button>
          </div>

          <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center">
            <p className="text-sm text-slate-500">Safesensor</p>
          </footer>
        </div>
      </div>
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