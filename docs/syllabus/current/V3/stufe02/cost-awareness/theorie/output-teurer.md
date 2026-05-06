---
title: "Output ist 3-5x teurer als Input"
module: "cost"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Output ist 3-5x teurer als Input

## Kernidee

Beim LLM-Pricing gilt eine Faustregel: Das Generieren von Text (Output) ist 3-5x teurer als das Lesen von Text (Input). Das ist kein willkürlicher Aufschlag — Output zu generieren ist rechenintensiver als Input zu verarbeiten. Konsequenz: Ein 50-Seiten-Dokument hochladen ist billig. Aber eine 50-Seiten-Antwort generieren lassen ist teuer. Kurze, präzise Antworten sind günstiger als ausschweifende.

## Überblick: Input/Output-Verhältnis

| Modell | Input / 1M | Output / 1M | Faktor |
|--------|-----------|------------|--------|
| Claude Opus 4.7 | $15,00 | $75,00 | 5x |
| Claude Sonnet 4.6 | $3,00 | $15,00 | 5x |
| Claude Haiku 3.5 | $0,80 | $4,00 | 5x |
| GPT-4o | $2,50 | $10,00 | 4x |
| GPT-4o-mini | $0,15 | $0,60 | 4x |
| Gemini 2.5 Pro | $1,25 | $10,00 | 8x |
| Gemini 2.5 Flash | $0,15 | $0,60 | 4x |
| DeepSeek V3 | $0,27 | $1,10 | 4x |

*Stand Mai 2026. Anthropic hat konsistent Faktor 5, OpenAI Faktor 4, Google variiert.*

## Im Detail

### Warum Output teurer ist — technisch

Input-Verarbeitung kann parallelisiert werden: Alle Input-Tokens werden gleichzeitig durch das Netzwerk geschickt (der berühmte "Prefill"-Schritt). Output-Generierung ist sequenziell: Jedes Token muss einzeln berechnet werden, eines nach dem anderen, weil jedes neue Token auf dem vorherigen aufbaut. Sequenzielle Berechnung ist auf GPU-Hardware deutlich weniger effizient als parallele Verarbeitung.

**Analogie:** Input lesen ist wie ein Buch scannen — du siehst alle Seiten auf einmal. Output schreiben ist wie ein Buch tippen — Buchstabe für Buchstabe, und jeder Buchstabe hängt vom vorherigen ab.

### Rechenbeispiele: Wo der Unterschied zählt

**Szenario 1: Zusammenfassung (Input-lastig)**
Du lädst ein 30-Seiten-Dokument hoch (12.000 Tokens) und bittest um eine 200-Wort-Zusammenfassung (300 Tokens Output).

| Modell | Input-Cost | Output-Cost | Gesamt | Output-Anteil |
|--------|-----------|-------------|--------|--------------|
| Claude Sonnet | $0,036 | $0,0045 | $0,041 | 11% |
| GPT-4o | $0,030 | $0,003 | $0,033 | 9% |

→ Bei Input-lastigen Aufgaben dominiert die Input-Cost. Output-Faktor spielt kaum eine Rolle.

**Szenario 2: Textgenerierung (Output-lastig)**
Du gibst einen kurzen Prompt (100 Tokens) und bittest um einen 2.000-Wort-Artikel (3.000 Tokens Output).

| Modell | Input-Cost | Output-Cost | Gesamt | Output-Anteil |
|--------|-----------|-------------|--------|--------------|
| Claude Sonnet | $0,0003 | $0,045 | $0,045 | 99% |
| GPT-4o | $0,00025 | $0,030 | $0,030 | 99% |

→ Bei Output-lastigen Aufgaben dominiert die Output-Cost massiv. Hier lohnt es sich, die Antwortlänge zu kontrollieren.

**Szenario 3: Code-Generierung (gemischt)**
Du gibst eine Aufgabenbeschreibung + bestehenden Code (2.000 Tokens) und bekommst neuen Code zurück (1.500 Tokens).

| Modell | Input-Cost | Output-Cost | Gesamt | Output-Anteil |
|--------|-----------|-------------|--------|--------------|
| Claude Sonnet | $0,006 | $0,0225 | $0,029 | 79% |
| GPT-4o | $0,005 | $0,015 | $0,020 | 75% |

→ Auch bei gemischten Aufgaben dominiert die Output-Cost wegen des höheren Preises.

### Praktische Cost-Optimierung

**1. Antwortlänge im Prompt steuern**
"Antworte in maximal 3 Sätzen" oder "Gib nur das JSON-Objekt zurück, keine Erklärung" — das spart direkt Geld.

**2. Kompakte Formate anfordern**
JSON, CSV oder Stichpunkte statt Fließtext. Ein JSON-Objekt mit 5 Feldern ist ~50 Tokens. Die gleiche Information als Fließtext ist ~200 Tokens.

**3. max_tokens setzen (API)**
Der API-Parameter `max_tokens` begrenzt die Antwortlänge hart. Das schützt vor unerwartet langen (und teuren) Antworten.

**4. Streaming nutzen**
Wenn du siehst, dass die Antwort in die falsche Richtung geht, kannst du bei Streaming frühzeitig abbrechen — du zahlst nur für die bereits generierten Tokens.

**5. Günstigeres Modell für lange Outputs**
Wenn du einen langen Text generieren musst, nutze ein günstigeres Modell (Haiku, Flash, GPT-4o-mini). Der Qualitätsunterschied bei Standardtexten ist gering, der Preisunterschied ist Faktor 10+.

### Extended Thinking: Der Hidden Cost

Bei Modellen mit sichtbarem Reasoning (Claude Extended Thinking, o3) werden die "Denk-Tokens" als Output abgerechnet. Das kann die Output-Token-Zahl vervielfachen:

- Normale Antwort: 500 Output-Tokens
- Mit Extended Thinking: 500 Antwort-Tokens + 2.000-10.000 Thinking-Tokens

**Tipp:** Extended Thinking nur aktivieren, wenn du es wirklich brauchst (komplexes Reasoning, Mathematik). Für einfache Fragen ist es unnötig teuer.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Input/Output-Verhältnis sichtbar |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Vergleiche Input vs. Output |
| :hammer_and_wrench: | [LLM Price Check](https://llmpricecheck.com) | Cost-Rechner mit Input/Output-Split |
| :book: | [Anthropic — Extended Thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) | Thinking-Token-Pricing verstehen |

## Teste dein Verständnis

- [ ] Du hast ein 100-Seiten-PDF (40.000 Tokens) und willst eine 1-Seiten-Zusammenfassung (400 Tokens). Berechne die Kosten bei Claude Sonnet — wie viel Prozent der Kosten entfallen auf Input vs. Output?
- [ ] Warum ist "Antworte in maximal 200 Wörtern" nicht nur Stil, sondern aktive Cost-Optimierung? Rechne den Unterschied zu einer 1.000-Wort-Antwort bei Opus aus.
- [ ] Ein Entwickler aktiviert Extended Thinking für jeden API-Call, auch für einfache Fragen wie "Übersetze diesen Satz". Warum ist das problematisch — und was würdest du empfehlen?
