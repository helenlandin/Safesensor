import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const topics = [
  {
    id: "react",
    label: "React",
    badge: "Ramverk",
    title: "React -- Byggklossarna",
    description:
      "React bygger webbsidor av komponenter -- sma, atervandbara delar. Tank pa det som LEGO: en knapp ar en komponent, ett kort ar en komponent, och du satter ihop dem till en hel sida. Varje komponent ar en funktion som returnerar HTML-liknande kod (JSX).",
    tip: 'Borja med att redigera src/App.tsx -- det ar huvudkomponenten!',
  },
  {
    id: "tailwind",
    label: "Tailwind",
    badge: "Styling",
    title: "Tailwind CSS -- Styla med klasser",
    description:
      'Istallet for att skriva CSS i separata filer lagger du stilar direkt som klassnamn. Till exempel: "text-red-500" ger rod text, "p-4" ger padding, och "flex gap-4" lagger saker bredvid varandra. Det ar som att beskriva hur saker ska se ut med korta kommandon.',
    tip: 'Testa att andra "bg-background" till "bg-blue-50" i koden och se vad som hander!',
  },
  {
    id: "shadcn",
    label: "shadcn/ui",
    badge: "Komponenter",
    title: "shadcn/ui -- Fardiga byggklossar",
    description:
      "shadcn/ui ger dig professionella, snygga komponenter som knappar, kort, dialoger och formulur. Du behover inte bygga allt fran scratch -- anvand det som redan finns och fokusera pa det unika i ditt projekt.",
    tip: 'Kor "npx shadcn@latest add dialog" i terminalen for att lagga till en ny komponent!',
  },
  {
    id: "git",
    label: "Git",
    badge: "Versionshantering",
    title: "Git -- Spara ditt arbete",
    description:
      'Git ar som "spara" pa steroider. Varje gang du committar sparar du en version av hela projektet. Om nagot gar fel kan du alltid ga tillbaka. Brancher ar som parallella kopior dar du kan experimentera utan att forsstora originalet.',
    tip: 'Borja alltid med "git checkout -b feature/mitt-namn" innan du andrar nagot!',
  },
]

function App() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const [clickCount, setClickCount] = useState(0)

  const activeTopicData = topics.find((t) => t.id === activeTopic)

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Valkommen till SafeSensor
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Det har ar din startpunkt. Du behover inte kunna allt fran borjan --
            ingen gor det. Varje rad kod du skriver ar ett steg framat. Var inte
            radd for att prova, gora fel och lara dig. Alla bra utvecklare
            borjade precis har du star nu.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/70">
            Oppna{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium text-foreground">
              src/App.tsx
            </code>{" "}
            och borja utforska koden bakom den har sidan.
          </p>
        </section>

        {/* Button Showcase */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Knappar -- Button-komponenten
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Det har ar samma komponent med olika varianter. Klicka pa dem!
            Raknaren nedan visar hur React uppdaterar sidan nar state andras.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setClickCount((c) => c + 1)}>
              Default
            </Button>
            <Button
              variant="outline"
              onClick={() => setClickCount((c) => c + 1)}
            >
              Outline
            </Button>
            <Button
              variant="secondary"
              onClick={() => setClickCount((c) => c + 1)}
            >
              Secondary
            </Button>
            <Button
              variant="ghost"
              onClick={() => setClickCount((c) => c + 1)}
            >
              Ghost
            </Button>
            <Button
              variant="destructive"
              onClick={() => setClickCount((c) => c + 1)}
            >
              Destructive
            </Button>
          </div>
          {clickCount > 0 && (
            <p className="mt-4 text-sm text-muted-foreground">
              Du har klickat{" "}
              <span className="font-semibold text-foreground">
                {clickCount}
              </span>{" "}
              {clickCount === 1 ? "gang" : "ganger"} -- det ar React{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                useState
              </code>{" "}
              i aktion!
            </p>
          )}
        </section>

        {/* Topic Picker */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Valj ett amne att lara dig om
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Klicka pa en knapp nedan. Det visar hur man anvander{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              useState
            </code>{" "}
            for att visa olika innehall baserat pa vad anvandaren valjer.
          </p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Button
                key={topic.id}
                variant={activeTopic === topic.id ? "default" : "outline"}
                onClick={() =>
                  setActiveTopic(
                    activeTopic === topic.id ? null : topic.id
                  )
                }
              >
                {topic.label}
              </Button>
            ))}
          </div>

          {activeTopicData && (
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{activeTopicData.title}</CardTitle>
                  <Badge variant="secondary">{activeTopicData.badge}</Badge>
                </div>
                <CardDescription>
                  {activeTopicData.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="text-sm font-medium text-foreground">
                    Tips:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activeTopicData.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 pb-12 text-center text-sm text-muted-foreground">
          <p className="mb-4">
            Lar dig mer genom att utforska dokumentationen:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="link" size="sm" onClick={() => window.open("https://react.dev", "_blank")}>
              React
            </Button>
            <Button variant="link" size="sm" onClick={() => window.open("https://tailwindcss.com/docs", "_blank")}>
              Tailwind CSS
            </Button>
            <Button variant="link" size="sm" onClick={() => window.open("https://ui.shadcn.com", "_blank")}>
              shadcn/ui
            </Button>
            <Button variant="link" size="sm" onClick={() => window.open("https://github.com/helenlandin/Safesensor", "_blank")}>
              GitHub Repo
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground/60">
            Du klarar det har. En rad i taget.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
