import type { BodyAreaId } from "@/components/ui/body-area-illustrations"

export type Ovning = {
  id: string
  titel: string
  kortBeskrivning: string
  varaktighetMin: number
  steg: string[]
  bodyParts: BodyAreaId[] | "alla"
  feelings: string[] | "alla"
  minSliderValue?: number
  maxSliderValue?: number
}

/**
 * PLATSHÅLLARLISTA — fyll på efter hand.
 *
 * Lägg till en övning genom att pusha in ett objekt med samma form som
 * `Ovning`. `bodyParts` och `feelings` används för att matcha mot
 * användarens val på kropp-detalj-skärmen. Sätt dem till "alla" om
 * övningen passar oavsett val.
 */
export const OVNINGAR: Ovning[] = []

/**
 * Returnerar en sorterad lista över de övningar som passar bäst för
 * användarens val. Tom lista om inga övningar finns inlagda ännu.
 */
export function rekommenderaOvningar({
  bodyParts,
  feelings,
  sliderValue,
}: {
  bodyParts: string[]
  feelings: string[]
  sliderValue: number
}): Ovning[] {
  if (OVNINGAR.length === 0) return []

  return OVNINGAR.map((o) => {
    const bodyMatch =
      o.bodyParts === "alla"
        ? 0.5
        : o.bodyParts.some((b) => bodyParts.includes(b))
          ? 1
          : 0
    const feelingMatch =
      o.feelings === "alla"
        ? 0.5
        : o.feelings.some((f) => feelings.includes(f))
          ? 1
          : 0
    const sliderOk =
      (o.minSliderValue == null || sliderValue >= o.minSliderValue) &&
      (o.maxSliderValue == null || sliderValue <= o.maxSliderValue)
    return { ovning: o, score: sliderOk ? bodyMatch + feelingMatch : 0 }
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.ovning)
}
