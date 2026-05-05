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

Die Cost-Formel für LLM-APIs ist einfach: (Input-Tokens x Input-Preis) + (Output-Tokens x Output-Preis). Output ist 3-5x teurer. Lange Kontexte mit langen Outputs werden schnell teuer. Prompt Caching reduziert bei wiederholten Prefixen um bis zu 90%. Diese Formel im Kopf zu haben, hilft bei jeder Architektur-Entscheidung.

## Im Detail

Die meisten APIs berechnen Input und Output unterschiedlich (Output meist 3-5x teurer). Lange Kontexte mit langen Outputs werden schnell teuer. Prompt Caching (Anthropic, OpenAI) reduziert Cost bei wiederholten Prefixen um bis zu 90%. Für Architektur-Entscheidungen: Ein RAG-System mit kurzen Retrieval-Chunks + kurzem Output ist deutlich günstiger als ein System, das ganze Dokumente in den Context packt und lange Zusammenfassungen produziert. *Vertiefung dieses Themas im Cost-Awareness-Mini-Block.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Pricing](https://www.anthropic.com/pricing) | Aktuelle Preise |
| :book: | [OpenAI — Pricing](https://openai.com/pricing) | Preisvergleich |
| :book: | [Anthropic — Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) | Caching-Mechanik |

## Teste dein Verständnis

- [ ] Kannst du die Cost für einen typischen API-Aufruf im Kopf abschätzen?
- [ ] Verstehst du, wie Prompt Caching die Cost-Formel verändert?
