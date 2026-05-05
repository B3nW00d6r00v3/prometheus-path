---
title: "Token-Budget-Allokation als Engineering-Entscheidung"
module: "6.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: "2026-08"
---

# Token-Budget-Allokation als Engineering-Entscheidung

## Kernidee

Bei 200k bis 1M Context-Window ist die Frage nicht mehr „passt es rein?", sondern „wie verteile ich es sinnvoll?" Token-Budget-Allokation ist eine explizite Engineering-Entscheidung — genau wie Datenbankschema-Design oder API-Rate-Limiting. Wer es nicht bewusst macht, lässt es dem Zufall.

## Im Detail

**Heuristik 2026** (kalibrieren je Use-Case, Verfallsdatum Aug 2026):

| Bestandteil | Typischer Anteil |
|---|---|
| System-Prompt + Skills | 5-10 % |
| Tool-Definitions | 20-40 % |
| Retrieval (RAG) | 20-40 % |
| Generation + Buffer | Rest |

Diese Heuristik ist ein Ausgangspunkt, kein Dogma. Jeder Use-Case braucht eigene Kalibrierung — ein Code-Agent mit vielen Tools braucht mehr Tool-Definition-Budget; ein Dokument-Zusammenfassungs-Agent mehr RAG-Budget.

**Wichtige Implikationen:**
- **Tool-Definitions zuerst reduzieren**, wenn das Budget eng wird — nicht den System-Prompt kürzen. Weniger Tools registrieren, schärfere Descriptions, Lazy Loading.
- **RAG mit Reranker statt Top-50** — Top-5 hochrelevante Chunks sind besser als Top-50 rauschartige.
- **Buffer einplanen** — Generation (Extended Thinking!) braucht deutlich mehr Output-Token als erwartet.

**Praktische Übung:** Nimm deine Token-Bilanz aus dem vorherigen Theorie-Schritt und vergleiche sie mit der Heuristik. Wo weicht deine App ab? Warum? Ist das begründet?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Talk | [AWS re:Invent 2025 AIM277](https://dev.to/kazuya_dev/aws-reinvent-2025-what-anthropic-learned-building-ai-agents-in-2025-aim277-16lc) | Anthropic-Zahlen zu Budget-Verteilung |
| 🛠️ Tool | [Langfuse](https://langfuse.com) | Tracking der Budget-Verteilung pro Run |

## Teste dein Verständnis

- [ ] Kannst du die Heuristik für Token-Budget-Verteilung aus dem Gedächtnis reproduzieren?
- [ ] Welchen Bestandteil reduzierst du zuerst, wenn das Context-Window eng wird, und warum?
- [ ] Hast du deine Token-Bilanz aus der vorherigen Übung mit der Heuristik verglichen?
