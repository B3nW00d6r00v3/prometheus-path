---
title: "Strukturierte Outputs vs. Reasoning"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Strukturierte Outputs vs. Reasoning

## Kernidee

Stell dir vor, jemand loest eine komplexe Mathe-Aufgabe -- aber du zwingst ihn, die Antwort sofort in eine starre Tabelle zu schreiben. Das engt den Denkprozess ein. Genauso vertragen sich JSON-Schema-Erzwingung und Reasoning schlecht. Die Loesung: erst denken lassen, dann in einem zweiten Schritt formatieren.

## Im Detail

Wer JSON-Schema-Output erzwingt, kuerzt das Reasoning des Modells. Das Modell muss gleichzeitig denken und das Ergebnis in ein starres Schema pressen, was beide Aufgaben verschlechtert. **Loesung: erst reasoning lassen, dann in einem zweiten (klassischen) LLM-Aufruf strukturieren.** Das ist auch billiger -- der zweite Aufruf kann ein guenstigeres, klassisches Modell sein, das nur formatiert.

Dieses Pattern -- "Reasoning-Modell fuer die schwere Arbeit, klassisches Modell fuer die Formatierung" -- ist ein Standardmuster in Production-Pipelines.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) | Structured Outputs als API-Feature |
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Tool Use fuer strukturierte Ausgaben |

## Teste dein Verstaendnis

- [ ] Kannst du erklaeren, warum JSON-Schema-Erzwingung bei Reasoning-Modellen problematisch sein kann?
- [ ] Kennst du das Zwei-Schritt-Pattern (erst denken, dann formatieren)?
