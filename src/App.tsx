import { useState } from "react"
import { Heart, Moon } from "lucide-react"

type SnabbHjalpStep = "hidden" | "val" | "kropp" | "somn"

function App() {
  const [snabbHjalpStep, setSnabbHjalpStep] = useState<SnabbHjalpStep>("hidden")

  if (snabbHjalpStep === "kropp") {
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
              Kroppen är aktiverad
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Här kan du lägga innehållet för stress, oro, spänning och obehag.
            </p>
          </section>

          <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center">
            <p className="text-sm text-slate-500">Safesensor</p>
          </footer>
        </div>
      </div>
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