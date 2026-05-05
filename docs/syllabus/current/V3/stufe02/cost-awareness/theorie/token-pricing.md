---
title: "Token-Pricing-Grundlogik"
module: "cost"
type: theorie
fast_track: true
effort: "8min"
stability: green
expires: null
---

# Token-Pricing-Grundlogik

## Kernidee

Cloud-LLMs kosten Geld pro Nutzung, und die Währung ist "Tokens". Du bezahlst pro Million verarbeiteter Tokens, getrennt nach Input (was du dem Modell gibst) und Output (was es antwortet). Die Preisstruktur ist stabil, auch wenn sich die konkreten Zahlen ändern.

## Im Detail

Du bezahlst pro Million verarbeiteter Tokens, getrennt nach Input und Output. Aktuelle Preise ändern sich regelmäßig (Trend: fallend), aber die Strukturen sind stabil: Input-Tokens haben einen Preis, Output-Tokens einen höheren Preis, und es gibt Rabatt-Mechanismen (Batching, Caching). Für Stufe 2 ist das Pricing bei normaler Lern-Nutzung minimal — typischerweise wenige Cent pro Session.

*Verfallsdatum der konkreten Preise: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Aktuelle Claude-Preise |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Aktuelle GPT-Preise |
| :book: | [Google AI Pricing](https://ai.google.dev/pricing) | Aktuelle Gemini-Preise |

## Teste dein Verständnis

- [ ] Kannst du erklären, was "pro Million Tokens" in der Praxis bedeutet?
- [ ] Verstehst du den Unterschied zwischen Input- und Output-Pricing?
