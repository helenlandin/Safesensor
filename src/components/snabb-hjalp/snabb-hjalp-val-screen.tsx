import { HeartPulse, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HelpChoiceCard } from "@/components/ui/help-choice-card"

export type SnabbHjalpValScreenProps = {
  onChooseKropp: () => void
  onChooseSomn: () => void
  onClose?: () => void
}

export function SnabbHjalpValScreen({
  onChooseKropp,
  onChooseSomn,
  onClose,
}: SnabbHjalpValScreenProps) {
  return (
    <div className="mx-auto w-full max-w-[420px] px-3 sm:px-5">
      {onClose ? (
        <div className="mb-8">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-[#7E8A84] hover:bg-[#E8EBE9]/60 hover:text-[#4E5A54]"
            onClick={onClose}
          >
            Tillbaka
          </Button>
        </div>
      ) : null}

      <header className="mb-12 text-center sm:mb-14">
        <h2 className="text-pretty text-xl font-semibold tracking-tight text-[#4E5A54] sm:text-2xl">
          Vad behöver du hjälp med?
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-pretty text-sm leading-relaxed text-[#7E8A84] sm:mt-6 sm:text-base">
          Välj det som stämmer bäst just nu.
        </p>
      </header>

      <div className="flex flex-col items-center gap-8 sm:gap-10">
        <HelpChoiceCard
          icon={<HeartPulse className="text-white" strokeWidth={2} />}
          iconWrapperClassName="bg-[#E8CFC2]"
          title="Kroppen är aktiverad"
          subtitle="Stress, oro, spänning, obehag"
          onClick={onChooseKropp}
        />
        <HelpChoiceCard
          icon={<Moon className="text-white" strokeWidth={2} />}
          iconWrapperClassName="bg-[#3F4A86]"
          title="Svårt att sova"
          subtitle="Tankarna snurrar, oro, vaknat på natten"
          onClick={onChooseSomn}
        />
      </div>
    </div>
  )
}
