import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type SnabbHjalpDetailVariant = "kropp" | "somn"

export type SnabbHjalpDetailProps = {
  variant: SnabbHjalpDetailVariant
  onBack: () => void
}

const copy: Record<
  SnabbHjalpDetailVariant,
  { title: string; description: string; bullets: string[] }
> = {
  kropp: {
    title: "När kroppen är aktiverad",
    description:
      "Det du känner är en naturlig reaktion. Här är några små steg som ofta kan lugna systemet lite i stunden.",
    bullets: [
      "Andas långsamt ut — lite längre än du andas in, tre till fem gånger.",
      "Känn fötterna mot golvet eller tyngden i stolen.",
      "Mjuka axlarna ner; låt käken slappna om du märker att du biter ihop.",
      "Om det känns okej: drick lite vatten eller stretch försiktigt.",
    ],
  },
  somn: {
    title: "När det är svårt att sova",
    description:
      "Oro och tankar som snurrar är vanligt. Du behöver inte prestera sömn — små rutiner kan göra natten lite lättare.",
    bullets: [
      "Dämpa ljus och skärmar en stund innan du ska vila.",
      "Skriv ner en kort punkt om det som snurrar, så hjärnan får parkera den.",
      "Håll rummet svalt och använd gärna samma läggdagsrutin varje kväll.",
      "Om du legat vaken länge: gå upp en kort stund, gör något lugnt, försök igen.",
    ],
  },
}

const detailCardClass =
  "rounded-3xl border border-[#C5D4CC]/55 bg-[#FCFCF8] shadow-[0_6px_22px_rgba(78,90,84,0.1),0_1px_0_rgba(255,255,255,0.7)_inset] ring-0"

export function SnabbHjalpDetail({ variant, onBack }: SnabbHjalpDetailProps) {
  const c = copy[variant]

  return (
    <div className="mx-auto w-full max-w-[min(100%,420px)]">
      <div className="mb-6">
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

      <Card className={detailCardClass}>
        <CardHeader className="px-5 pt-5">
          <CardTitle className="text-lg font-semibold text-[#4E5A54] sm:text-xl">
            {c.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed text-[#7E8A84]">
            {c.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <ul className="list-inside list-disc space-y-2.5 text-sm leading-relaxed text-[#4E5A54] marker:text-[#7DBA98]">
            {c.bullets.map((line) => (
              <li key={line} className="text-pretty pl-0.5">
                {line}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
