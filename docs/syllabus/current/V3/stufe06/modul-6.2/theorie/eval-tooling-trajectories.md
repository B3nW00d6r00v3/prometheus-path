---
title: "Eval-Tooling für Trajectories"
module: "6.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Eval-Tooling für Trajectories

## Kernidee

Trajectory-Eval braucht spezialisiertes Tooling: Tools, die nicht nur den finalen Output bewerten, sondern den gesamten Lösungsweg aufzeichnen und analysieren. Langfuse, LangSmith und Phoenix sind die führenden Optionen 2026 — mit unterschiedlichen Stärken in Bezug auf Kosten, Selbst-Hosting und Trajectory-Tiefe.

## Im Detail

**Langfuse** (OSS, self-hostable) — tracing-zentrisch, stark für Trajectory-Eval:
- Speichert jeden Agent-Step als Span mit Input/Output/Tokens/Cost.
- Agent-Graphs: visualisiert Tool-Call-Sequenzen als DAG.
- LLM-as-Judge: konfigurierbar für Tool-Call-Quality-Bewertung.
- Self-hosted mit Docker Compose, keine Cloud-Pflicht — DSGVO-konform.

**LangSmith** (kommerziell, LangChain) — native Trajectory-Eval, sehr tief integriert:
- Annotierungs-Workflows: menschliche Bewertung einzelner Steps.
- Datasets und Experiments: reproduzierbare Trajectory-Test-Runs.
- Gut integriert mit LangGraph (derselbe Hersteller).
- Kostenpflichtig ab bestimmtem Volumen.

**Phoenix / Arize** — Production-Monitoring + Eval:
- OpenTelemetry-basiert, framework-agnostisch.
- Stark in Drift-Erkennung: wenn sich Trajectory-Patterns über Zeit verschlechtern.
- Gut kombinierbar mit LangSmith oder Langfuse als ergänzendes Layer.

**Anthropic Inspect** (OSS) — eigene Eval-Patterns mit Trajectory-Support:
- Speziell für Claude-Agents entwickelt.
- Task-basierte Eval-Struktur mit optionalem Trajectory-Logging.

**LLM-as-Judge mit Trajectory-Awareness:**
Dem Judge wird nicht nur die Endantwort gezeigt, sondern der gesamte Tool-Call-Verlauf. Der Prompt enthält: Aufgabe + alle Tool-Calls + alle Observations + Endantwort. Der Judge bewertet sowohl Korrektheit der Endantwort als auch die Sinnhaftigkeit des Weges.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🔧 Tool | [Langfuse](https://langfuse.com) | OSS, self-hostable, empfohlen |
| 🔧 Tool | [LangSmith](https://docs.smith.langchain.com) | Kommerziell, LangChain-nativ |
| 🔧 Tool | [Phoenix (Arize)](https://docs.arize.com/phoenix) | Production-Monitoring |
| 📖 Docs | [Langfuse Trajectory Tracing](https://langfuse.com/docs/observability/features/agent-graphs) | Agent-Graph-Feature |
| 📖 Docs | [LangSmith Agent Evaluation](https://docs.smith.langchain.com/old/cookbook/testing-examples/agent-evaluation) | Eval-Cookbook |

## Teste dein Verständnis

- [ ] Welche zwei Tools empfiehlst du für ein OSS-First-Multi-Agent-Projekt — und warum?
- [ ] Was unterscheidet LLM-as-Judge mit Trajectory-Awareness von einfachem Output-Eval?
- [ ] Wann würdest du Phoenix zusätzlich zu Langfuse einsetzen?
