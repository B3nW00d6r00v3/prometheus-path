---
title: "Bildgenerierung"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Bildgenerierung

## Kernidee

KI-Bildgenerierung verwandelt Text-Beschreibungen in Bilder -- von fotorealistischen Portraets ueber Illustrationen bis zu Logos. Das mentale Modell: Du beschreibst ein Bild in Worten (den "Prompt"), das Modell erzeugt Pixel. Die Qualitaet hat 2026 ein Niveau erreicht, auf dem KI-generierte Bilder von Fotos kaum unterscheidbar sind. Die Wahl des Tools bestimmt Qualitaet, Stil, Kontrolle und rechtliche Sicherheit.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| Midjourney | Midjourney | Hoechste kommerzielle Qualitaet, Stil-Kontrolle | ab $10/Monat | Kommerzielle Kreativ-Arbeit |
| DALL-E 3 | OpenAI | In ChatGPT integriert, Text-in-Bild stark | Inkl. ChatGPT Plus ($20/Monat) | Schnelle Bilder im Chat |
| Stable Diffusion | Stability AI / Community | OSS, lokal lauffaehig, riesiges Oekosystem | Kostenlos (lokal) | Volle Kontrolle, lokal |
| Flux | Black Forest Labs | OSS, aktuelle Modelle, hohe Qualitaet | Kostenlos (lokal) / API | OSS-Alternative zu Midjourney |
| Adobe Firefly | Adobe | Rechtssicher, Creative-Cloud-Integration | Inkl. CC-Abo / ab $5/Monat | Kommerzielle Nutzung, rechtssicher |
| Ideogram | Ideogram | Text-Rendering in Bildern herausragend | Free / ab $8/Monat | Bilder mit lesbarem Text |
| Recraft | Recraft | Design-orientiert, Vektor + Raster | Free / ab $25/Monat | Design-Arbeit, Icons, Vektor |

### Midjourney -- Kommerzielle Spitzenqualitaet

**Was es kann:**

- Konsistent hoechste aesthetische Qualitaet am Markt
- Starke Stil-Kontrolle ueber Parameter (--style, --chaos, --stylize)
- Discord- und Web-Interface
- Variationen, Upscaling, Region-Editing
- Referenz-Bilder fuer Stil-Transfer

**Use Cases:**

- Marketing-Bilder und Kampagnen-Visuals
- Konzept-Art und Illustration
- Produkt-Mockups und Lifestyle-Bilder
- Social-Media-Content mit professionellem Look

**Limitation:** Kein lokales Modell, kein OSS. Discord-Workflow fuer manche ungewohnt. Weniger Kontrolle ueber technische Details als bei Stable Diffusion.

### DALL-E 3 -- Der Bequeme

**Was es kann:**

- Direkt in ChatGPT integriert -- kein separates Tool noetig
- Versteht natuerlichsprachliche Beschreibungen sehr gut (ChatGPT optimiert den Prompt automatisch)
- Text-in-Bild: generiert lesbaren Text in Bildern besser als die meisten Konkurrenten
- Editing-Funktionen direkt im Chat

**Use Cases:**

- Schnelle Bilder waehrend einer Chat-Session erstellen
- Illustrationen fuer Praesentationen oder Blogposts
- Bilder mit Text-Elementen (Banner, Poster-Entwuerfe)

**Limitation:** Weniger Stil-Kontrolle als Midjourney. Kein Standalone-Produkt -- nur ueber ChatGPT oder API nutzbar. Content-Policies verhindern manche Bildtypen.

### Stable Diffusion -- Das OSS-Oekosystem

**Was es kann:**

- Komplett Open Source: Modelle lokal ausfuehrbar, keine Cloud noetig
- Riesiges Oekosystem: tausende Community-Modelle, LoRAs, Embeddings auf Civitai
- ComfyUI: node-basierter Workflow-Editor fuer maximale Kontrolle
- Automatic1111 WebUI: einfacheres Web-Interface fuer den Einstieg
- ControlNet: praezise Steuerung von Pose, Tiefe, Kanten
- Inpainting, Outpainting, Image-to-Image

**Use Cases:**

- Professionelle Workflows mit voller Kontrolle ueber jeden Parameter
- DSGVO-konforme Nutzung (alles lokal, keine Daten verlassen den Rechner)
- Batch-Generierung grosser Bildmengen ohne API-Kosten
- Experimentieren mit Custom-Modellen und LoRAs

**Limitation:** Erfordert GPU mit mindestens 8 GB VRAM fuer lokale Nutzung. Steile Lernkurve, besonders bei ComfyUI. Modell-Qualitaet variiert stark je nach gewaehltem Checkpoint.

### Flux -- Die neue OSS-Referenz

**Was es kann:**

- Von Black Forest Labs (ex-Stability-AI-Gruender)
- Aktuelle Modelle (2024-2026) mit hoher Qualitaet
- Open Source, lokal lauffaehig (ueber ComfyUI)
- Flux Schnell (schnell), Flux Dev (hoehere Qualitaet), Flux Pro (API)
- Bessere Prompt-Adherence als aeltere Stable-Diffusion-Modelle

**Use Cases:**

- OSS-Alternative zu Midjourney mit vergleichbarer Qualitaet
- Lokale Nutzung fuer datensensible Projekte
- Integration in eigene Pipelines ueber ComfyUI-Workflows

**Limitation:** Benoetigt starke GPU (12+ GB VRAM fuer beste Qualitaet). Community-Oekosystem (LoRAs, Custom-Modelle) noch kleiner als bei Stable Diffusion.

### Adobe Firefly -- Der Rechtssichere

**Was es kann:**

- Trainiert ausschliesslich auf lizenzierten Daten (Adobe Stock, oeffentliche Domain)
- Rechtlich sicher fuer kommerzielle Nutzung -- Indemnification-Klausel von Adobe
- Integriert in Photoshop, Illustrator, Premiere Pro
- Generative Fill und Generative Expand in Photoshop
- Konsistenter Stil fuer Brand-Anwendungen

**Use Cases:**

- Kommerzielle Projekte, bei denen Copyright-Sicherheit Pflicht ist
- Bestehende Fotos erweitern oder editieren (Generative Fill)
- Teams, die bereits im Adobe-Oekosystem arbeiten

**Limitation:** Qualitaet der reinen Generierung hinter Midjourney und Flux. Staerke liegt in der Editing-Integration, nicht in der Standalone-Generierung.

### Ideogram -- Der Text-Kuenstler

**Was es kann:**

- Bestes Text-Rendering in Bildern am Markt -- lesbarer, korrekter Text
- Gute Allround-Bildqualitaet
- Kostenloser Einstieg mit grosszuegigem Free-Tier

**Use Cases:**

- Bilder mit lesbarem Text (Poster, Schilder, Logos mit Schriftzug)
- Social-Media-Grafiken mit Overlay-Text
- Mockups fuer Print-Materialien

**Limitation:** Weniger Stil-Kontrolle als Midjourney. Kleineres Oekosystem und Community.

### Recraft -- Der Designer

**Was es kann:**

- Vektor-Generierung: erstellt SVGs, nicht nur Raster-Bilder
- Design-orientiert: Icons, Illustrationen, Brand-Assets
- Stil-Konsistenz ueber mehrere Generierungen hinweg
- Raster- und Vektor-Output in einem Tool

**Use Cases:**

- Icon-Sets und UI-Illustrationen generieren
- Brand-Assets mit konsistentem Stil erstellen
- Vektorgrafiken fuer skalierbare Designs

**Limitation:** Weniger fuer fotorealistische Bilder geeignet. Pricing hoeher als viele Alternativen.

### Wann welches Tool?

- **Hoechste Qualitaet, kommerziell:** Midjourney -- aesthetisch ueberlegen
- **Schnell im Chat:** DALL-E 3 via ChatGPT -- kein Tool-Wechsel noetig
- **Lokal, volle Kontrolle, kostenlos:** Stable Diffusion (ComfyUI) oder Flux
- **Rechtssicher fuer Kunden-Projekte:** Adobe Firefly -- indemnifiziert
- **Bilder mit Text:** Ideogram -- bestes Text-Rendering
- **Vektorgrafiken und Design:** Recraft -- SVG-Output

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [Midjourney](https://midjourney.com) | Kommerzielle Bildgenerierung |
| 🛠️ | [ComfyUI](https://www.comfy.org) | Node-basierter SD/Flux-Editor |
| 🛠️ | [Civitai](https://civitai.com) | Community-Modelle und LoRAs |
| 🛠️ | [Automatic1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | Klassische lokale SD-UI |
| 🛠️ | [Ideogram](https://ideogram.ai) | Text-Rendering in Bildern |
| 🛠️ | [Recraft](https://recraft.ai) | Vektor + Raster Design |
| 🛠️ | [Adobe Firefly](https://firefly.adobe.com) | Rechtssichere Generierung |

## Teste dein Verstaendnis

- [ ] Generiere dasselbe Motiv in zwei verschiedenen Tools (z.B. Midjourney und DALL-E). Vergleiche Qualitaet, Stil und Prompt-Treue.
- [ ] Versuche, ein Bild mit lesbarem Text zu generieren (z.B. ein Buchcover mit Titel). Welches Tool liefert den besten Text?
- [ ] Reflektiere: Wann wuerdest du ein kostenloses OSS-Tool (Flux/SD) gegenueber einem kostenpflichtigen (Midjourney) bevorzugen -- und warum?
