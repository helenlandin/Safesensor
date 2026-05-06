import {
  BookIcon,
  CompassIcon,
  HandHeartIcon,
  MoonStarsIcon,
  PlantIcon,
} from "@/components/ui/botanical-icons"
import { BotanicalPillButton } from "@/components/ui/botanical-pill-button"
import { LeafCornerBackground } from "@/components/ui/leaf-corner-background"
import { LotusIcon } from "@/components/ui/lotus-icon"

const SERIF_FONT = '"Playfair Display", Georgia, serif'

export type StartScreenProps = {
  onSnabbHjalp: () => void
  onCheckIn?: () => void
  onLarKanna?: () => void
  onSomn: () => void
  onLoggbok?: () => void
  onOvningar: () => void
}

export function StartScreen({
  onSnabbHjalp,
  onCheckIn,
  onLarKanna,
  onSomn,
  onLoggbok,
  onOvningar,
}: StartScreenProps) {
  return (
    <LeafCornerBackground>
      <div
        className="mx-auto w-full max-w-[420px] pt-10 pb-12"
        style={{ paddingInline: "clamp(16px, 5vw, 24px)" }}
      >
        <header className="text-center">
          <h1
            className="font-bold tracking-tight text-[#2F4A3A]"
            style={{
              fontFamily: SERIF_FONT,
              fontSize: "clamp(40px, 12vw, 56px)",
              lineHeight: 1,
            }}
          >
            SafeSensor
          </h1>

          <p
            className="mx-auto mt-4 max-w-[320px] text-pretty text-[#3A5C46]"
            style={{
              fontSize: "clamp(13px, 3.6vw, 15px)",
              lineHeight: 1.45,
            }}
          >
            Hjälper dig att förstå kroppens signaler och lugna nervsystemet,
            steg för steg.
          </p>

          <p
            className="mx-auto mt-5 max-w-[300px] italic text-[#5A6B5F]"
            style={{
              fontFamily: SERIF_FONT,
              fontSize: "clamp(13px, 3.6vw, 15px)",
              lineHeight: 1.4,
            }}
          >
            “Känslan är stark – men den är inte sanningen om dig.”
          </p>
        </header>

        <div className="mt-9 space-y-4">
          <BotanicalPillButton
            label="Snabb hjälp nu"
            icon={<HandHeartIcon className="h-6 w-6 text-[#3A5C46]" />}
            onClick={onSnabbHjalp}
            bgClassName="bg-gradient-to-r from-[#F4DCC9] via-[#F2D4C2] to-[#EAC9B5]"
            ringClassName="ring-1 ring-white/40"
            decorationColor="rgba(195, 130, 95, 0.45)"
          />

          <BotanicalPillButton
            label="Check-in"
            icon={<PlantIcon className="h-6 w-6 text-[#3A5C46]" />}
            onClick={onCheckIn}
            bgClassName="bg-gradient-to-r from-[#EAF2E5] via-[#E2EEDE] to-[#D7E7D3]"
            decorationColor="rgba(58, 92, 70, 0.40)"
          />

          <BotanicalPillButton
            label="Lär känna dina signaler"
            icon={<CompassIcon className="h-6 w-6 text-white" />}
            onClick={onLarKanna}
            bgClassName="bg-gradient-to-r from-[#5F8E78] via-[#4F7F6A] to-[#3F6F5C]"
            textClassName="text-white"
            ringClassName="ring-1 ring-white/20"
            shadowClassName="shadow-[0_10px_24px_rgba(60,90,70,0.25)]"
            decorationColor="rgba(255, 255, 255, 0.45)"
          />

          <BotanicalPillButton
            label="Sömn & morgonstart"
            icon={<MoonStarsIcon className="h-6 w-6 text-[#4A4A8E]" />}
            onClick={onSomn}
            bgClassName="bg-gradient-to-r from-[#E0DFF1] via-[#D7D6EC] to-[#CCCBE5]"
            textClassName="text-[#2F2F66]"
            decorationColor="rgba(80, 80, 140, 0.38)"
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <SmallPillButton
            label="Min loggbok"
            icon={<BookIcon className="h-5 w-5 text-[#3A5C46]" />}
            onClick={onLoggbok}
          />
          <SmallPillButton
            label="Övningar"
            icon={<LotusIcon size={20} className="text-[#3A5C46]" />}
            onClick={onOvningar}
          />
        </div>
      </div>
    </LeafCornerBackground>
  )
}

function SmallPillButton({
  label,
  icon,
  onClick,
}: {
  label: string
  icon: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[56px] w-full items-center justify-center gap-2 border border-[#3A5C46]/15 bg-gradient-to-r from-[#F4F1E8] via-[#F1F0E7] to-[#EBF0E5] text-[#2F4A3A] shadow-[0_2px_8px_rgba(60,90,70,0.06)] transition hover:border-[#3A5C46]/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBA98]/60"
      style={{ borderRadius: 40 }}
    >
      <span className="grid h-7 w-7 place-items-center">{icon}</span>
      <span
        className="font-semibold tracking-tight"
        style={{
          fontFamily: SERIF_FONT,
          fontSize: "clamp(13px, 3.6vw, 15px)",
        }}
      >
        {label}
      </span>
    </button>
  )
}
