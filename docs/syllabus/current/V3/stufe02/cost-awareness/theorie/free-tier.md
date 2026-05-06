---
title: "Free-Tier-Realität Mai 2026"
module: "cost"
type: theorie
fast_track: true
effort: "15min"
stability: live
expires: "2026-08"
---

# Free-Tier-Realität Mai 2026

## Kernidee

Für Lernzwecke in Stufe 2 brauchst du oft kein Geld auszugeben. Google AI Studio hat das großzügigste kostenlose API-Angebot, Anthropic und OpenAI geben jeweils Startguthaben für neue Accounts. Dazu kommen die kostenlosen Chat-Interfaces aller Anbieter. Für die allermeisten Lern-Aufgaben in dieser Stufe reicht ein Free-Tier vollkommen — du musst nur wissen, wo die Grenzen liegen.

## Überblick: Free-Tier-Vergleich

| Anbieter | Kostenloses Chat-Interface | Kostenloses API-Guthaben | Rate Limits (Free) | Modelle im Free-Tier |
|----------|--------------------------|------------------------|-------------------|--------------------|
| Google | Gemini (gemini.google.com) | 60 Requests/Min, 1.500/Tag (AI Studio) | Großzügig | Gemini 2.5 Flash, 2.5 Pro (limitiert) |
| Anthropic | Claude (claude.ai) | $5 Startguthaben (API Console) | Streng (Free-Chat) | Sonnet 4.6 (limitiert), Haiku 3.5 |
| OpenAI | ChatGPT (chatgpt.com) | $5 Startguthaben (Platform) | Moderat | GPT-4o-mini, GPT-4o (limitiert) |
| DeepSeek | DeepSeek Chat (chat.deepseek.com) | Pay-per-Token (sehr günstig) | Großzügig | V3, R1 |
| Mistral | Le Chat (chat.mistral.ai) | Kostenloses API-Tier verfügbar | Moderat | Mistral Large, Pixtral |
| Perplexity | Perplexity (perplexity.ai) | — | 5 Pro Searches/Tag (Free) | Standard-Suche unbegrenzt |
| Groq | Groq Cloud | Kostenloses Tier | 30 Requests/Min | Llama, Gemma (schnell) |

*Stand Mai 2026. Free-Tier-Bedingungen ändern sich häufig.*

## Im Detail

### Google AI Studio: Der Free-Tier-König

Google bietet das mit Abstand großzügigste kostenlose API-Angebot:

- **60 Requests pro Minute** für Gemini 2.5 Flash
- **1.500 Requests pro Tag** (kumuliert über alle Modelle)
- **Kein Startguthaben nötig** — einfach Google-Account, API-Key erstellen, loslegen
- **Auch Gemini 2.5 Pro** ist im Free-Tier verfügbar (mit niedrigeren Rate Limits)

Für Stufe 2 ist Google AI Studio die beste Wahl für API-Experimente: Du kannst hunderte Calls pro Tag machen, ohne einen Cent zu bezahlen. Einzige Einschränkung: Google nutzt Free-Tier-Daten potenziell fürs Training. Für Lernzwecke irrelevant, für sensible Daten nicht ideal.

### Anthropic: Qualität mit strengen Limits

- **claude.ai (Free Chat):** Zugang zu Sonnet und Haiku, aber strenge Nachrichten-Limits pro Stunde. In Stoßzeiten schnell erschöpft.
- **API Console:** $5 Startguthaben bei neuem Account. Bei Sonnet-Preisen ($3/$15 pro 1M) reicht das für ca. 1.000-1.500 kürzere Anfragen.
- **Tipp:** Das $5-Guthaben strategisch einsetzen — erst die kostenlosen Chat-Interfaces ausreizen, dann API für spezifische Tests.

### OpenAI: Das größte Ökosystem

- **ChatGPT (Free):** GPT-4o-mini unbegrenzt, GPT-4o mit Limits, kein GPT-4o+ oder o3
- **Platform:** $5 Startguthaben bei neuem Account. Bei GPT-4o-mini-Preisen ($0,15/$0,60) reicht das für tausende Anfragen.
- **Playground:** Kostenlos nutzbar mit dem API-Guthaben — gut zum Experimentieren mit Parametern

### Kostenlose Alternativen: Groq und Ollama

**Groq Cloud:**
Groq bietet kostenlose API-Zugriffe auf Open-Source-Modelle (Llama 3, Gemma 3) mit extrem schneller Inferenz. Rate Limits sind großzügig genug für Lernzwecke. Kein eigenes Modell, aber die schnellste Art, Open-Source-Modelle ohne eigene Hardware zu testen.

**Ollama (lokal):**
Komplett kostenlos (abgesehen von Strom). Kein Account, kein API-Key, keine Limits. Ideal für:
- Unbegrenztes Experimentieren
- Datenschutz-sensible Aufgaben
- Vergleich verschiedener Modellgrößen

### Strategie für Stufe 2: Kostenlos lernen

**Phase 1 — Chat-Interfaces (Woche 1-2):**
Erstelle kostenlose Accounts bei ChatGPT, Claude, Gemini, Perplexity. Nutze die Chat-Interfaces für erste Erfahrungen. Kostet: $0.

**Phase 2 — API-Experimente (Woche 3-4):**
Erstelle API-Accounts bei Google AI Studio (kostenlos) und nutze das Startguthaben bei Anthropic/OpenAI für gezielte Tests. Kostet: $0 (Free-Tier).

**Phase 3 — Lokal (optional):**
Installiere Ollama und teste lokale Modelle. Vergleiche mit Cloud-Modellen. Kostet: $0 (Strom vernachlässigbar).

### Wann du auf ein Abo upgraden solltest

Das $20/Monat-Abo lohnt sich, wenn:

- Du die Free-Tier-Limits regelmäßig erreichst (mehrmals pro Woche "Limit erreicht"-Meldungen)
- Du Zugang zu Premium-Features brauchst (Claude Projects, ChatGPT Canvas, Gemini Deep Research)
- Du das Chat-Interface als tägliches Arbeitstool nutzt (nicht nur zum Lernen)

**Für Stufe 2:** In den meisten Fällen reicht Free-Tier + $5 Startguthaben. Upgrade erst, wenn du merkst, dass du regelmäßig an Limits stößt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Google AI Studio](https://ai.google.dev) | Großzügigstes Free-Tier — hier starten |
| :hammer_and_wrench: | [Groq Cloud](https://console.groq.com) | Schnelle kostenlose Open-Source-Inferenz |
| :book: | [Anthropic Console](https://console.anthropic.com) | $5 Startguthaben für API |
| :book: | [OpenAI Platform](https://platform.openai.com) | $5 Startguthaben für API |
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Lokale Modelle, komplett kostenlos |

## Teste dein Verständnis

- [ ] Erstelle Accounts bei mindestens drei Providern (Chat-Interface). Welcher Free-Tier fühlt sich am großzügigsten an — und warum?
- [ ] Erstelle einen API-Key bei Google AI Studio und mache 10 Test-Calls mit Gemini Flash. Was hat es gekostet? (Antwort: $0)
- [ ] Du hast $5 API-Guthaben bei Anthropic. Wie viele Anfragen mit je 1.000 Input + 500 Output Tokens kannst du bei Claude Haiku machen, bevor das Guthaben aufgebraucht ist? Rechne nach.

*Verfallsdatum dieses Inhalts: August 2026.*
