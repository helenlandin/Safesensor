# SafeSensor

En webbapplikation byggd med React, Tailwind CSS och shadcn/ui.
<img width="1867" height="1914" alt="image" src="https://github.com/user-attachments/assets/600c350e-efda-4abc-84cb-b86041ace232" />

---

## Innehall

- [Om projektet](#om-projektet)
- [Teknikerna vi anvander](#teknikerna-vi-anvander)
- [Forutsattningar](#forutsattningar)
- [Komma igang](#komma-igang)
- [Projektstruktur](#projektstruktur)
- [Hur man gor andringar](#hur-man-gor-andringar)
- [Hur man tanker nar man bygger med React](#hur-man-tanker-nar-man-bygger-med-react)
- [Git-arbetsflode](#git-arbetsflode)
- [Skydda main-branchen](#skydda-main-branchen)
- [Context7 MCP -- AI-hjalp i Cursor](#context7-mcp----ai-hjalp-i-cursor)
- [Kommandon](#kommandon)
- [Felskning](#felskning)

---

## Om projektet

SafeSensor ar en webbapplikation. Koden ar uppbyggd av sma atervandbara byggklossar ("komponenter") som satter ihop sidan. Projektet ar konfigurerat och redo att utvecklas vidare.

---

## Teknikerna vi anvander

| Teknik | Vad det gor |
|---|---|
| **React** | Bygger webbsidan fran atervandbara "komponenter" (byggklossar). Istallet for att skriva en hel HTML-sida fran scratch, bygger man sma delar och satter ihop dem. |
| **Vite** | Utvecklingsservern som kor sidan lokalt pa din dator. Den uppdaterar sidan automatiskt i webblasaren nar du sparar en fil. |
| **Tailwind CSS** | Ett CSS-ramverk dar man stylar saker genom att lagga till klassnamn direkt i koden, t.ex. `text-red-500` for rod text eller `p-4` for padding. |
| **shadcn/ui** | Fardiga, snygga UI-komponenter (knappar, kort, formulur m.m.) som man kan anvanda direkt. Se alla pa [ui.shadcn.com](https://ui.shadcn.com). |
| **TypeScript** | JavaScript med extra sakerhetscheck som fanger fel redan nar du skriver koden, innan den kors i webblasaren. |

---

## Forutsattningar

Innan du borjar behover du installera foljande program pa din dator:

### 1. Node.js

Node.js ar motorn som kor JavaScript utanfor webblasaren. Den behovs for att kunna kora utvecklingsservern och installera paket.

1. Ga till [nodejs.org](https://nodejs.org)
2. Ladda ner **LTS-versionen** (den rekommenderade)
3. Kor installationsfilen och folj instruktionerna
4. Verifiera att det fungerar genom att oppna en terminal och skriva:

```bash
node -v
npm -v
```

Bada kommandon ska visa ett versionsnummer (t.ex. `v22.15.0` och `10.9.0`).

### 2. Git

Git ar ett versionshanteringssystem som haller koll pa alla andringar i koden.

1. Ga till [git-scm.com](https://git-scm.com)
2. Ladda ner och installera for ditt operativsystem
3. Verifiera:

```bash
git --version
```

### 3. Kodeditor

Vi rekommenderar [Cursor](https://cursor.com) (har inbyggd AI-hjalp) eller [VS Code](https://code.visualstudio.com).

---

## Komma igang

Oppna en terminal och kor foljande kommandon ett i taget:

```bash
git clone https://github.com/helenlandin/Safesensor.git
```

> Laddar ner hela projektet fran GitHub till din dator.

```bash
cd Safesensor
```

> Gar in i projektmappen.

```bash
npm install
```

> Installerar alla paket som projektet behover (listat i `package.json`). Skapar en mapp som heter `node_modules/`.

```bash
npm run dev
```

> Startar utvecklingsservern. Oppna webblasaren och ga till **http://localhost:5173**. Sidan uppdateras automatiskt nar du sparar en fil.

Tryck `Ctrl+C` i terminalen for att stoppa servern.

---

## Projektstruktur

```
Safesensor/
  src/                          <-- All kod lever har
    App.tsx                     <-- Huvudkomponenten (borja redigera har!)
    main.tsx                    <-- Startpunkten (renderar App)
    index.css                   <-- Globala stilar och temafurger
    components/ui/              <-- shadcn/ui-komponenter (knappar, kort m.m.)
    lib/utils.ts                <-- Hjalpfunktion for CSS-klasser
  public/                       <-- Statiska filer (favicon m.m.)
  components.json               <-- shadcn/ui-konfiguration
  package.json                  <-- Paketlista (som en receptlista med ingredienser)
  vite.config.ts                <-- Vite-konfiguration (behover sallan andras)
  tsconfig.json                 <-- TypeScript-konfiguration
```

---

## Hur man gor andringar

### Redigera sidan

1. Oppna `src/App.tsx` i din editor
2. Gor en andring (t.ex. byt texten i en rubrik)
3. Spara filen (Ctrl+S / Cmd+S)
4. Webblasaren uppdateras automatiskt!

### Lagga till en ny shadcn/ui-komponent

Ga till [ui.shadcn.com](https://ui.shadcn.com) for att se alla tillgangliga komponenter. For att lagga till en, kor i terminalen:

```bash
npx shadcn@latest add <komponent-namn>
```

Exempel:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add table
```

Komponenten hamnar i `src/components/ui/` och kan importeras i din kod:

```tsx
import { Dialog } from "@/components/ui/dialog"
```

### Vanliga Tailwind-exempel

```tsx
{/* Text */}
<p className="text-lg text-red-500 font-bold">Rod fetstil</p>

{/* Spacing: p = padding, m = margin, siffran = storlek */}
<div className="p-4 m-2">Innehall med padding och margin</div>

{/* Layout: flex for att lagga saker bredvid varandra */}
<div className="flex gap-4">
  <div>Vanster</div>
  <div>Hoger</div>
</div>

{/* Storlek */}
<div className="w-full max-w-md">Max 28rem bred</div>
```

Se alla klasser pa [tailwindcss.com/docs](https://tailwindcss.com/docs).

---

## Hur man tanker nar man bygger med React

### Komponenter -- webbsidans byggklossar

I React bygger man en webbsida genom att dela upp den i sma, atervandbara delar som kallas **komponenter**. Tank pa det som LEGO:

- En **knapp** ar en komponent
- Ett **kort** ar en komponent
- En hel **meny** ar en komponent som innehaller flera mindre komponenter

Varje komponent ar en fil (t.ex. `Button.tsx`) som returnerar HTML-liknande kod (kallas JSX).

### Borja uppifraan -- skiss forst, kod sen

1. **Titta pa vad sidan ska se ut** (skiss, design eller bild)
2. **Rita rutor** runt varje del -- varje ruta ar en komponent
3. **Borja med den storsta rutan** (`App`) och bryt ner den i mindre delar
4. **Bygg varje del for sig** och satt ihop dem

### Exempel -- tankeprocess for en enkel sida

```
Hela sidan (App)
  |-- Header (logotyp + navigation)
  |-- Hero (stor rubrik + bild)
  |-- Features (tre kort bredvid varandra)
  |     |-- FeatureCard (ikon + text)
  |     |-- FeatureCard
  |     |-- FeatureCard
  |-- Footer (kontaktinfo + lankar)
```

Varje del i tradet ovan ar en egen komponent som du skapar som en fil i `src/components/`.

### Props -- data som skickas till komponenter

Props ar som argument till en funktion. Samma komponent kan visa olika innehall:

```tsx
<FeatureCard title="Snabb" description="Laddar pa 1 sekund" />
<FeatureCard title="Saker" description="Krypterad data" />
```

Komponenten tar emot `title` och `description` och visar dem.

### State -- data som kan forondras

State ar data som kan andra sig, t.ex. om en meny ar oppen eller stangd:

```tsx
const [isOpen, setIsOpen] = useState(false)
```

Nar state andras ritas komponenten om automatiskt i webblasaren.

### Tumregler

- **Borja enkelt** -- en komponent per fil
- **Om samma kod upprepas** -- gor en komponent av det
- **Holl varje komponent liten** -- en uppgift per komponent
- **Anvand shadcn/ui** istallet for att bygga fran scratch

---

## Git-arbetsflode

### Forsta gangen -- konfigurera Git

Gors bara en gang per dator:

```bash
git config --global user.name "Ditt Namn"
git config --global user.email "din@email.com"
```

### Dagligt arbetsflode

#### 1. Hamta senaste koden fran huvudgrenen

```bash
git checkout main
git pull origin main
```

#### 2. Skapa en ny branch for ditt arbete

```bash
git checkout -b feature/min-nya-funktion
```

`-b` skapar en ny branch. Namnge den beskrivande, t.ex.:
- `feature/uppdatera-startsidan`
- `feature/lagg-till-kontaktsida`
- `fix/fixa-knapp-farg`

#### 3. Gor dina andringar

Redigera filer, spara.

#### 4. Se vad som andrats

```bash
git status
git diff
```

#### 5. Lagg till filer och committa

```bash
git add .
git commit -m "Add hero section to homepage"
```

> Tips: skriv commit-meddelanden pa engelska. Borja med ett verb: "Add", "Fix", "Update", "Remove".

#### 6. Pusha din branch till GitHub

```bash
git push origin feature/min-nya-funktion
```

#### 7. Skapa en Pull Request (PR)

1. Ga till [github.com/helenlandin/Safesensor](https://github.com/helenlandin/Safesensor)
2. Klicka **"Compare & pull request"** (gul/gron knapp som dyker upp)
3. Skriv en beskrivning av dina andringar
4. Klicka **"Create pull request"**
5. Vanta pa review innan merge

### Snabbreferens

| Kommando | Vad det gor |
|---|---|
| `git status` | Visa vilka filer som andrats |
| `git log --oneline` | Visa historik over commits |
| `git stash` | Sparar undan andringar temporart |
| `git stash pop` | Hamtar tillbaka sparade andringar |
| `git checkout main` | Byt tillbaka till huvudgrenen |
| `git branch` | Lista alla lokala branches |
| `git branch -d namn` | Ta bort en branch |

---

## Skydda main-branchen

### Varfor?

Main-branchen ar den "riktiga" versionen av projektet. Om nagon av misstag pushar trasig kod direkt till main kan hela sidan ga sonder. Branch protection ser till att:

- **Ingen kan pusha direkt till main** -- alla andringar maste ga via Pull Request
- **Koden granskas** av nagon annan innan den slas ihop (code review)
- **Tydlig historik** over vilka andringar som gjorts och varfor
- **Misstag fangas** innan de hamnar i produktion

### Steg-for-steg setup pa GitHub

1. Ga till [github.com/helenlandin/Safesensor](https://github.com/helenlandin/Safesensor)
2. Klicka **Settings** (kugghjulet, kraver admin-rattigheter)
3. I vanstermenyn, klicka **Branches** (under "Code and automation")
4. Under "Branch protection rules", klicka **Add branch protection rule** (eller "Add classic branch protection rule")
5. Fyll i:
   - **Branch name pattern:** `main`
   - Kryssa i **Require a pull request before merging**
     - Kryssa i **Require approvals** och satt till minst 1
   - Kryssa i **Do not allow bypassing the above settings**
6. Klicka **Create** / **Save changes**

### Vad hander efter detta?

- `git push origin main` direkt -- GitHub nekar
- Alla andringar maste ga via branch + Pull Request
- Minst en person maste godkanna PR:en innan merge
- Aven admins maste folja reglerna

> Aven om du jobbar ensam ar PR:ar bra praxis -- det ger dig en chans att se over dina egna andringar innan merge.

---

## Context7 MCP -- AI-hjalp i Cursor

### Vad ar Context7?

Context7 ar en MCP-server (Model Context Protocol) som ger Cursors AI-assistent tillgang till **aktuell, uppdaterad dokumentation** for bibliotek och ramverk direkt inuti editorn. Istallet for att AI:n forssoker komma ihag dokumentation fran sin traningsdata (som kan vara gammal) hamtar den aktuell info i realtid.

### Varfor anvanda Context7?

- AI:ns inbyggda kunskap kan vara **foraldrad** -- bibliotek uppdateras ofta
- Context7 hamtar **aktuell** dokumentation direkt fran kallkoden
- Du far mer **korrekta kodsvar** och exempel som fungerar med senaste versionerna
- **Sparar tid** -- slipp googla, fraga AI:n direkt

### Satta upp Context7 i Cursor

#### Enklaste sattet (rekommenderat)

Kor i terminalen:

```bash
npx ctx7 setup --cursor
```

Detta hanterar inloggning, API-nyckel och konfiguration automatiskt.

#### Manuell setup

1. Ga till [context7.com](https://context7.com) och skapa ett konto
2. Ga till **API Keys** i dashboarden
3. Klicka **"Create API Key"**, ge den ett namn (t.ex. "Cursor") och **kopiera nyckeln direkt** (den visas bara en gang!)
4. Skapa filen `.cursor/mcp.json` i projektets rot med foljande innehall:

**Alternativ A -- Remote server (enklast):**

```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "ctx7sk-DIN_API_NYCKEL_HAR"
      }
    }
  }
}
```

**Alternativ B -- Lokal server:**

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "ctx7sk-DIN_API_NYCKEL_HAR"]
    }
  }
}
```

5. Starta om Cursor

> **Viktigt:** Lagg INTE in API-nyckeln i Git! Lagg till `.cursor/mcp.json` i `.gitignore` om den innehaller nyckeln.

### Hur man anvander Context7

Skriv `use context7` i din fraga till AI:n:

- "How do I use the Button component from shadcn/ui? use context7"
- "How do I add dark mode with Tailwind CSS v4? use context7"
- "How do I create a form with React Hook Form? use context7"

Fungerar for alla populara bibliotek: React, Tailwind, shadcn/ui, Next.js, Prisma, m.fl.

---

## Kommandon

```bash
npm run dev       # Starta utvecklingsservern (http://localhost:5173)
npm run build     # Bygg for produktion
npm run preview   # Forhandsvisa produktionsbygget lokalt
npm run lint      # Kor linting (kodkvalitetskontroll)
```

---

## Felskning

| Problem | Losning |
|---|---|
| `command not found: npm` | Node.js ar inte installerat. Se [Forutsattningar](#forutsattningar). |
| `port 5173 already in use` | En annan dev-server kor redan. Stoppa den (Ctrl+C) eller stang terminalfontstret. |
| `module not found` | Kor `npm install` for att installera beroenden. |
| `Cannot find module '@/...'` | Kontrollera att `tsconfig.json` har ratt path-alias. Kor `npm install` igen. |
