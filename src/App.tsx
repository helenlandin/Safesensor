import { useState } from "react"
import { SnabbHjalpDetail } from "@/components/snabb-hjalp/snabb-hjalp-detail"
import { SnabbHjalpValScreen } from "@/components/snabb-hjalp/snabb-hjalp-val-screen"
import { Button } from "@/components/ui/button"

type SnabbHjalpStep = "hidden" | "val" | "kropp" | "somn"

function App() {
  const [snabbHjalpStep, setSnabbHjalpStep] = useState<SnabbHjalpStep>("hidden")

  return (
    <div className="min-h-svh bg-[#F7F6F2]">
      <div className="mx-auto w-full max-w-[420px] px-5 py-10 sm:px-8 sm:py-14 md:px-12">
        <section className="text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#4E5A54] sm:text-4xl md:text-5xl">
            Safesensor – min trygghet
          </h1>
          <Button
            className="mt-8 border-0 bg-[#7DBA98] text-white shadow-[0_4px_14px_rgba(125,186,152,0.35)] hover:bg-[#6fad8c] hover:text-white"
            size="lg"
            onClick={() => setSnabbHjalpStep("val")}
          >
            Snabb hjälp nu
          </Button>
        </section>

        {snabbHjalpStep !== "hidden" ? (
          <section
            className="mt-12 sm:mt-16"
            aria-label="Snabb hjälp"
          >
            {snabbHjalpStep === "val" ? (
              <SnabbHjalpValScreen
                onClose={() => setSnabbHjalpStep("hidden")}
                onChooseKropp={() => setSnabbHjalpStep("kropp")}
                onChooseSomn={() => setSnabbHjalpStep("somn")}
              />
            ) : null}
            {snabbHjalpStep === "kropp" ? (
              <SnabbHjalpDetail
                variant="kropp"
                onBack={() => setSnabbHjalpStep("val")}
              />
            ) : null}
            {snabbHjalpStep === "somn" ? (
              <SnabbHjalpDetail
                variant="somn"
                onBack={() => setSnabbHjalpStep("val")}
              />
            ) : null}
          </section>
        ) : null}

        <footer className="mt-16 border-t border-[#C5D4CC]/40 pt-8 pb-10 text-center text-xs text-[#7E8A84] sm:mt-20">
          <p>Safesensor</p>
        </footer>
      </div>
    </div>
  )
}

export default App
