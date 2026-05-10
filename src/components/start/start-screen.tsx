import type { CSSProperties } from "react"

export type StartScreenProps = {
  onSnabbHjalp: () => void
  onCheckIn?: () => void
  onLarKanna?: () => void
  onSomn: () => void
  onLoggbok?: () => void
  onOvningar: () => void
}

/**
 * Startskärmen visar endast `/illustrations/startsida-design.png` som UI.
 * Osynliga klickytor ligger ovanpå bildens knappar; bilden ändras inte i kod.
 */
export function StartScreen({
  onSnabbHjalp,
  onCheckIn,
  onLarKanna,
  onSomn,
  onLoggbok,
  onOvningar,
}: StartScreenProps) {
  return (
    <div className="relative flex min-h-svh w-full justify-center bg-[#F4EFE2]">
      <div className="relative w-full max-w-[420px]">
        <img
          src="/illustrations/startsida-design.png"
          alt="SafeSensor — startsida"
          draggable={false}
          className="block h-auto w-full select-none"
        />

        <HitArea
          label="Snabb hjälp nu"
          onClick={onSnabbHjalp}
          style={{ top: "38%", left: "7%", width: "86%", height: "8%" }}
        />
        <HitArea
          label="Check-in"
          onClick={onCheckIn}
          style={{ top: "50%", left: "7%", width: "86%", height: "8%" }}
        />
        <HitArea
          label="Lär känna dina signaler"
          onClick={onLarKanna}
          style={{ top: "62%", left: "7%", width: "86%", height: "8%" }}
        />
        <HitArea
          label="Sömn & morgonstart"
          onClick={onSomn}
          style={{ top: "74%", left: "7%", width: "86%", height: "8%" }}
        />
        <HitArea
          label="Min loggbok"
          onClick={onLoggbok}
          style={{ top: "86.5%", left: "7%", width: "41%", height: "7%" }}
        />
        <HitArea
          label="Övningar"
          onClick={onOvningar}
          style={{ top: "86.5%", left: "52%", width: "41%", height: "7%" }}
        />
      </div>
    </div>
  )
}

function HitArea({
  label,
  onClick,
  style,
}: {
  label: string
  onClick?: () => void
  style: CSSProperties
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="absolute cursor-pointer rounded-[40px] bg-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBA98]/60 active:scale-[0.98]"
      style={style}
    />
  )
}
