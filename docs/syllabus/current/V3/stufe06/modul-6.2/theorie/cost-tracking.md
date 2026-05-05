---
title: "Cost-Tracking als Pflicht"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Cost-Tracking als Pflicht

## Kernidee

Multi-Agent-Runs können dramatisch teuer werden — 10 Agents × 5 Iterations × 2.000 Tokens = schnell mehrere Dollar pro Run. Cost-Tracking pro Agent-Run ist kein Nice-to-have, sondern Pflicht. Ohne Tracking hast du kein Feedback-Loop zur Optimierung.

## Im Detail

**Was tracked werden muss:**

- **Pro Run**: Gesamte Input-Tokens, Output-Tokens, Gesamtkosten in €.
- **Pro Agent**: Welcher Agent verbraucht am meisten? Wo liegt der Bottleneck?
- **Pro Tool**: Tool-Results, die unnötig viele Tokens erzeugen.
- **Median über mehrere Runs**: LLMs sind stochastisch — ein Einzellauf ist nicht repräsentativ.

**Tools 2026:**

- **Langfuse** (OSS, self-hostable): Tracing-zentrisch, pro Span Token-Verbrauch sichtbar, DSGVO-konform.
- **LangSmith** (kommerziell): native LangChain/LangGraph-Integration, Dataset-Management.
- **Helicone**: Provider-agnostisch, günstig, gute Dashboard-Visualisierung.

**Praktische Warnung:**  
Multi-Agent kann 5-15x teurer sein als Single-Agent für dieselbe Aufgabe. Kalibriere Cost-Expectation vor dem ersten Production-Run.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Langfuse Docs](https://langfuse.com/docs) | OSS, empfohlen |
| 🛠️ Tool | [LangSmith](https://www.langchain.com/langsmith) | LangChain-native |
| 🛠️ Tool | [Helicone Docs](https://docs.helicone.ai) | Provider-agnostisch |

## Teste dein Verständnis

- [ ] Welche vier Dimensionen müssen beim Cost-Tracking erfasst werden?
- [ ] Warum ist Median-Cost-über-mehrere-Runs wichtiger als Einzel-Run-Cost?
- [ ] Welches Tool wählst du für den OSS-Pfad, und warum?
