---
title: "Output ist 3-5x teurer als Input"
module: "cost"
type: theorie
fast_track: true
effort: "8min"
stability: green
expires: null
---

# Output ist 3-5x teurer als Input

## Kernidee

Beim LLM-Pricing gilt eine Faustregel: Das Generieren von Text (Output) ist 3-5x teurer als das Lesen von Text (Input). Wenn du also ein langes Dokument hochlädst, ist das relativ günstig — aber wenn du eine lange Antwort verlangst, wird es teuer. Kurze, präzise Antworten sind günstiger.

## Im Detail

Bei nahezu allen großen Anbietern (Anthropic, OpenAI, Google) kostet Output deutlich mehr als Input. Beispiel Mai 2026: Claude Opus 4.7 kostet $5/M Input, $25/M Output (Faktor 5). Das hat direkte Konsequenzen für Prompting: Lange Antworten sind teuer, kurze Antworten sind günstig. Wenn du strukturierten Output forderst (z.B. JSON), denke an Output-Cost — kompakter ist billiger. Tipp: "Antworte in maximal 200 Wörtern" oder "Gib nur das JSON-Objekt zurück" spart bares Geld bei hohem Volumen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Input/Output-Verhältnis sichtbar |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Vergleiche Input vs. Output Pricing |
| :book: | [Google AI Pricing](https://ai.google.dev/pricing) | Google-Preisstruktur |

## Teste dein Verständnis

- [ ] Kannst du berechnen, was 1000 Output-Tokens bei Claude Opus kosten?
- [ ] Verstehst du, warum "Antworte kurz" nicht nur Stil, sondern auch Cost-Optimierung ist?
