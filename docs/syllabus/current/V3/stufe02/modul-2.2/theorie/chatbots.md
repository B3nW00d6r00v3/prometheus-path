---
title: "Universelle Chatbots / Assistants"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Universelle Chatbots / Assistants

## Kernidee

Ein KI-Chatbot ist ein Sprachmodell mit Konversations-Interface: Du schreibst eine Frage oder Aufgabe, das Modell antwortet. Der entscheidende Unterschied zwischen den Anbietern liegt nicht im "ob", sondern im "wie gut" -- jedes Tool hat einen Sweet Spot. Es gibt kein bestes Modell, nur das beste Modell fuer deinen konkreten Use Case in diesem Moment.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| ChatGPT | OpenAI | GPT-4o, o3, Projekte, Canvas, Voice, DALL-E, Code Interpreter | Free / $20/Monat Plus | Allround, groesstes Oekosystem |
| Claude | Anthropic | Sonnet/Opus/Haiku, 200K Context, Extended Thinking, Artifacts, MCP | Free / $20/Monat Pro | Lange Texte, Analyse, Coding |
| Gemini | Google | 2.5 Pro/Flash, 1M Context, Deep Research, Gems, Workspace-Integration | Free / $20/Monat Advanced | Google-Oekosystem, grosse Dokumente |
| Grok | xAI | Grok 4, Echtzeit X-Daten, Aurora Bildgenerierung | Free (X Premium) | Echtzeit-Social-Media-Daten |
| Perplexity | Perplexity AI | Web-Suche mit Citations, Spaces, Pro Search, Deep Research | Free / $20/Monat Pro | Recherche mit Quellenangabe |
| DeepSeek | DeepSeek | R1 Reasoning, V3, Open Source | Free (Web) / API pay-per-token | Mathe, Code, guenstige API |
| Mistral | Mistral AI | Le Chat, europaeisch, OSS-Modelle | Free / API pay-per-token | EU-Datenschutz, OSS-Oekosystem |

### ChatGPT -- Der Allrounder

**Was es kann:**

- GPT-4o fuer schnelle Alltagsaufgaben, o3 fuer komplexes Reasoning
- Projekte mit persistentem Kontext und Custom Instructions
- Canvas fuer kollaboratives Schreiben und Code-Editing
- Voice-Modus fuer natuerliche Gespraeche (Advanced Voice mit GPT-4o)
- DALL-E fuer Bildgenerierung direkt im Chat
- Code Interpreter fuer Datenanalyse, Visualisierung, File-Verarbeitung

**Use Cases:**

- Texte schreiben, uebersetzen, zusammenfassen
- Daten analysieren (CSV hochladen, Charts erstellen lassen)
- Schnelle Bild-Generierung ohne separates Tool

**Limitation:** Context-Fenster kleiner als Claude und Gemini. Bei sehr langen Dokumenten verliert es den Ueberblick.

### Claude -- Der Analyst

**Was es kann:**

- 200K Token Context -- verarbeitet ganze Codebases oder lange Reports
- Extended Thinking: sichtbarer Denkprozess bei komplexen Aufgaben
- Artifacts: interaktive Code-Demos, Visualisierungen, Dokumente direkt im Chat
- Projekte mit Custom Instructions und hochgeladenen Wissensquellen
- MCP (Model Context Protocol) fuer Tool-Integrationen (Dateisystem, APIs, Datenbanken)

**Use Cases:**

- Lange Dokumente analysieren (Vertraege, Papers, Codebases)
- Komplexe Coding-Aufgaben mit mehrstufigem Reasoning
- Strukturierte Analysen mit sichtbarem Denkprozess

**Limitation:** Kein nativer Web-Zugriff (Stand Mai 2026). Fuer aktuelle Informationen brauchst du Perplexity oder ChatGPT mit Browsing.

### Gemini -- Der Google-Native

**Was es kann:**

- 1M Token Context -- das groesste Kontextfenster am Markt
- Deep Research: mehrstufige Web-Recherche mit ausfuehrlichen Reports
- Gems: eigene Custom-Chatbots mit spezifischen Instruktionen
- Native Google Workspace Integration (Docs, Sheets, Gmail, Drive)
- Multimodal: versteht Text, Bild, Video und Audio

**Use Cases:**

- Riesige Dokumente oder ganze Buecher auf einmal verarbeiten
- Google-Workspace-Workflows automatisieren
- Video-Inhalte analysieren (YouTube-Videos zusammenfassen)

**Limitation:** Ausgabe-Qualitaet bei kreativen Texten oft hinter ChatGPT und Claude. Starke Google-Oekosystem-Bindung.

### Grok -- Der Echtzeit-Informant

**Was es kann:**

- Grok 4 mit starkem Reasoning
- Echtzeit-Zugriff auf X/Twitter-Daten (Posts, Trends, Diskussionen)
- Aurora fuer Bildgenerierung
- Weniger restriktive Content-Policies als andere Anbieter

**Use Cases:**

- Aktuelle Social-Media-Diskussionen analysieren
- Trending Topics und Stimmungsbilder erfassen
- Wenig zensierte kreative Inhalte generieren

**Limitation:** Datenbasis stark X/Twitter-lastig. Fuer breite Web-Recherche nicht ideal. Zugang erfordert X Premium.

### Perplexity -- Der Rechercheur

**Was es kann:**

- Jede Antwort mit Web-Quellen und Citations belegt
- Pro Search: mehrstufige Recherche mit Rueckfragen
- Deep Research: ausfuehrliche Reports mit dutzenden Quellen
- Spaces: geteilte Recherche-Sammlungen im Team
- Academic Mode fuer wissenschaftliche Quellen

**Use Cases:**

- Faktenbasierte Recherche mit verifizierbaren Quellen
- Marktanalysen und Wettbewerbs-Recherche
- Technische Fragen, bei denen Aktualitaet entscheidend ist

**Limitation:** Weniger gut fuer kreative Aufgaben, Coding oder lange Analysen. Staerke ist Recherche, nicht Produktion.

### DeepSeek -- Der Open-Source-Denker

**Was es kann:**

- R1: Reasoning-Modell mit sichtbarer Chain-of-Thought (vergleichbar mit o3)
- V3: schnelles Chat-Modell fuer Alltagsaufgaben
- Komplett Open Source (Gewichte oeffentlich, lokal lauffaehig)
- Besonders stark in Mathematik und Code-Aufgaben
- API deutlich guenstiger als OpenAI oder Anthropic

**Use Cases:**

- Mathe-Aufgaben und formale Logik
- Code-Generierung und -Analyse
- Lokale Nutzung ohne Cloud-Abhaengigkeit

**Limitation:** Web-Interface weniger poliert. Chinesischer Anbieter -- fuer manche Nutzer ein Datenschutz-Bedenken. Zensur bei politisch sensiblen Themen (China-bezogen).

### Mistral -- Der Europaeer

**Was es kann:**

- Le Chat: kostenloser Chat mit Mistral-Modellen
- Starke Open-Source-Modelle (Mistral 3, Pixtral fuer Vision)
- Europaeischer Anbieter (Frankreich) -- relevant fuer DSGVO
- Apache-2.0-Lizenz fuer OSS-Modelle

**Use Cases:**

- EU-konforme KI-Nutzung mit europaeischem Anbieter
- Lokale Deployment-Szenarien mit OSS-Modellen
- Vision-Aufgaben mit Pixtral

**Limitation:** Kleineres Oekosystem als OpenAI oder Anthropic. Weniger Plugins, Integrationen und Community-Ressourcen.

### Wann welches Tool?

- **Alltag (Texte, E-Mails, Brainstorming):** ChatGPT oder Claude -- beide stark, Geschmackssache
- **Recherche mit Quellen:** Perplexity -- kein anderes Tool liefert so zuverlaessige Citations
- **Google Workspace:** Gemini Advanced -- native Integration in Docs, Sheets, Gmail
- **Echtzeit-Social-Media:** Grok -- direkter Zugriff auf X/Twitter-Daten
- **Guenstig oder lokal/OSS:** DeepSeek -- beste Qualitaet pro Euro, Open Source
- **Lange Dokumente (>100 Seiten):** Gemini (1M Context) oder Claude (200K Context)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [ChatGPT](https://chat.openai.com) | OpenAI Flaggschiff-Chat |
| 🛠️ | [Claude](https://claude.ai) | Anthropic Chat-Interface |
| 🛠️ | [Gemini](https://gemini.google.com) | Google KI-Assistent |
| 🛠️ | [Grok](https://grok.x.ai) | xAI Chat mit X-Daten |
| 🛠️ | [Perplexity](https://perplexity.ai) | KI-Suche mit Citations |
| 🛠️ | [DeepSeek](https://chat.deepseek.com) | OSS Chat + Reasoning |
| 🛠️ | [Mistral Le Chat](https://chat.mistral.ai) | Europaeischer KI-Chat |
| 🛠️ | [LMSYS Chatbot Arena](https://lmarena.ai) | Blinder Community-Vergleich |
| 🛠️ | [LLM Stats](https://llm-stats.com) | Benchmarks und Preise |

## Teste dein Verstaendnis

- [ ] Teste dieselbe Aufgabe (z.B. "erklaere mir Backpropagation") in mindestens drei verschiedenen Chatbots -- welche Antwort hilft dir am meisten?
- [ ] Lade ein laengeres Dokument (>10 Seiten) in Claude oder Gemini und stelle Fragen dazu. Wie gut versteht das Modell den Kontext?
- [ ] Nutze Perplexity fuer eine Recherche-Frage und vergleiche die Quellen-Qualitaet mit einem normalen Chatbot.
