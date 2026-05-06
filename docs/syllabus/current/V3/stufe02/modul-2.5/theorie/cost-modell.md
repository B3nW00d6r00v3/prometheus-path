---
title: "Cost-Modell verstehen: Input vs. Output Tokens"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Cost-Modell verstehen: Input vs. Output Tokens

## Kernidee

Die Cost-Formel für LLM-APIs ist einfach: **(Input-Tokens x Input-Preis) + (Output-Tokens x Output-Preis)**. Output ist 3-5x teurer als Input. Lange Kontexte mit langen Outputs werden schnell teuer. Prompt Caching reduziert bei wiederholten Prefixen um bis zu 90%. Diese Formel im Kopf zu haben, hilft bei jeder Architektur-Entscheidung.

## Im Detail

### Die Grundformel

Jeder API-Aufruf an ein LLM kostet:

**Kosten = (Input-Tokens x $/MTok Input) + (Output-Tokens x $/MTok Output)**

"MTok" = Millionen Tokens. Beispiel-Preise (Mai 2026, gerundet):

| Modell | Input $/MTok | Output $/MTok | Verhältnis |
|--------|-------------|--------------|-----------|
| Claude Haiku 3.5 | $0.80 | $4.00 | 1:5 |
| Claude Sonnet 4.6 | $3.00 | $15.00 | 1:5 |
| Claude Opus 4.7 | $15.00 | $75.00 | 1:5 |
| GPT-5 | $5.00 | $15.00 | 1:3 |
| GPT-4o-mini | $0.15 | $0.60 | 1:4 |
| Gemini 2.5 Pro | $1.25 | $10.00 | 1:8 |
| DeepSeek V3 (API) | $0.27 | $1.10 | 1:4 |

*Preise sind Richtwerte und ändern sich regelmäßig. Aktuelle Preise auf den Anbieter-Websites prüfen.*

### Warum Output teurer ist

Output-Tokens kosten mehr, weil sie sequenziell generiert werden müssen — jedes Token hängt vom vorherigen ab. Input-Tokens können parallel verarbeitet werden (sie liegen ja alle schon vor). Die Generierung ist also computationell aufwändiger als das Lesen.

### Prompt Caching — der größte Kosten-Hebel

Wenn du wiederholt denselben System-Prompt oder dieselben Dokumente als Kontext sendest, zahlst du bei jedem Aufruf den vollen Input-Preis. Prompt Caching ändert das:

- **Anthropic:** Automatisches Prompt Caching — wiederholte Prefixe werden gecacht. Cached Input kostet nur 10% des normalen Input-Preises.
- **OpenAI:** Ähnliches Caching-Feature für wiederkehrende System-Prompts.

**Praxis-Beispiel:** Dein RAG-System schickt bei jeder Anfrage 50.000 Tokens System-Prompt + Dokument-Kontext mit. Ohne Caching: 50.000 x Sonnet-Input-Preis = $0.15 pro Anfrage nur für Input. Mit Caching: $0.015 — 10x günstiger.

### Thinking-Tokens bei Reasoning-Modellen

Bei Reasoning-Modellen kommt ein dritter Faktor dazu: Thinking-Tokens. Das sind die internen Reasoning-Tokens, die das Modell generiert, bevor es antwortet. Sie zählen als Output-Tokens und kosten entsprechend — auch wenn du sie als Nutzer nicht oder nur teilweise siehst.

Ein einzelner Aufruf an ein Reasoning-Modell kann tausende Thinking-Tokens generieren, was den Preis eines einfachen Aufrufs auf das 5-15-fache treibt. Deshalb ist der Effort-Parameter (wie viel Denken erlaubst du?) direkt ein Kosten-Regler.

### Architektur-Implikationen

Die Cost-Formel beeinflusst jede Architektur-Entscheidung:

- **RAG vs. Full-Context:** Ein RAG-System, das nur die relevanten 500 Tokens aus einer Wissensbasis holt, ist drastisch günstiger als eines, das ganze Dokumente (50.000 Tokens) in den Kontext packt.
- **Output-Länge begrenzen:** "Antworte in 3 Sätzen" ist nicht nur besser für UX, sondern auch billiger.
- **Modell-Wahl:** Für einfache Aufgaben Haiku statt Opus — gleiche Qualität bei 1/20 der Kosten.
- **Batching:** Mehrere ähnliche Anfragen zusammenfassen spart durch Caching-Effekte.

### Kopfrechnen üben

Für eine schnelle Kosten-Einschätzung: 1.000 Tokens sind ungefähr 750 Wörter (auf Englisch) oder 500 Wörter (auf Deutsch, weil Umlaute und zusammengesetzte Wörter mehr Tokens brauchen). Eine typische Seite Text hat ca. 400-500 Tokens.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Pricing](https://www.anthropic.com/pricing) | Aktuelle Preise |
| :book: | [OpenAI — Pricing](https://openai.com/pricing) | Preisvergleich |
| :book: | [Anthropic — Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) | Caching-Mechanik |
| :hammer_and_wrench: | [LLM Price Check](https://llmpricecheck.com) | Preisvergleich aller Anbieter |

## Teste dein Verständnis

- [ ] Kannst du die Cost-Formel für einen typischen API-Aufruf anwenden?
- [ ] Verstehst du, warum Output-Tokens teurer sind als Input-Tokens?
- [ ] Kannst du erklären, wie Prompt Caching die Kosten reduziert?
- [ ] Weißt du, warum Reasoning-Modelle durch Thinking-Tokens teurer sind?
