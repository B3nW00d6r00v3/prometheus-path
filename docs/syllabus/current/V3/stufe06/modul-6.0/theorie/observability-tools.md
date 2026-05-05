---
title: "Tools für Observability"
module: "6.0"
type: theorie
fast_track: false
effort: "10min"
stability: green
expires: "2026-08"
---

# Tools für Observability

## Kernidee

Ernsthaftes Context Engineering braucht Messung. Wer nicht weiß, wie viele Tokens pro Run auf welchen Bestandteil entfallen, optimiert blind. Observability-Tools machen den Context-Verbrauch sichtbar und sind 2026 Pflicht für jeden Production-Agenten.

## Im Detail

**Die wichtigsten Observability-Tools 2026** (Verfallsdatum Aug 2026 — Markt konsolidiert sich noch):

**Langfuse** (OSS, self-hostable)
- Tracing-zentrisch: jeder Agent-Run als Trace mit Spans pro Schritt.
- Token-Verbrauch pro Span sichtbar.
- Trajectory-Visualization für Multi-Agent-Runs.
- Self-hosted möglich: DSGVO-konform ohne Cloud-Abhängigkeit.

**LangSmith** (kommerziell, LangChain)
- Native Integration mit LangChain/LangGraph.
- Dataset-Management für Eval-Integration.
- Trajectory-Eval-Support.

**Phoenix (Arize)**
- Production-Monitoring + Eval.
- Stark bei Halluzinations-Detection und RAG-Qualitäts-Tracking.

**Braintrust**
- Eval-zentrisch, gute Integration mit Prompt-Engineering-Workflows.

**Empfehlung für OSS-Pfad:** Langfuse self-hosted ist die vollständigste Lösung ohne Cloud-Lock-in.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Langfuse](https://langfuse.com) | OSS, empfohlen für OSS-Pfad |
| 🛠️ Tool | [LangSmith](https://docs.smith.langchain.com) | Kommerziell, native LangChain-Integration |
| 🛠️ Tool | [Phoenix (Arize)](https://docs.arize.com/phoenix) | Production-Monitoring + Eval |

## Teste dein Verständnis

- [ ] Was misst Langfuse in einem Agent-Run?
- [ ] Welches Tool wählst du für den OSS-Pfad, und warum?
- [ ] Wie unterscheiden sich die Stärken von LangSmith und Langfuse?
