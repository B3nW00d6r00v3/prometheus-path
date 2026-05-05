---
title: "Stufe 6: Agenten"
type: index
fast_track: false
effort: "72-117h"
---

# Stufe 6: Agenten

**Aufwand:** 🔧 72-117h · 🧮 58-93h · 💼 30-55h  
**Voraussetzungen:** Stufen 1-5, Stufe 4 Pflicht für 🔧

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| Eval (6.2), Production (6.0, 6.5), Safety (6.0, 6.5) | Capstone A erweitert (Multi-Agent) | LangGraph, Claude Agent SDK, OpenAI Agents SDK, Google ADK |

KI-Agenten sind 2026 das wichtigste Anwendungs-Pattern für komplexe Workflows. Diese Stufe baut den Agent **erst from scratch** (Pattern verstehen), dann mit modernen Frameworks (LangGraph, Agent-SDKs), dann mit Theorie-Anker (RL, MDP für 🧮), und schließlich vergleicht die Vendor-spezifischen Patterns (Claude Agent SDK, OpenAI Agents SDK, Google ADK), Schwarm-Patterns und Agentic-OS-Architekturen.

Hier wird dein Capstone-Engineer-Projekt aus Stufe 5 zum **Multi-Agent-System** erweitert. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

**Ergebnis nach Stufe 6:**
- **Du verstehst Context Engineering als Disziplin und hast Compaction-Strategie für eigenen Agent implementiert**.
- Du hast einen ReAct-Agent from scratch in <200 Zeilen Python gebaut.
- Du hast ein Multi-Agent-System mit LangGraph oder einem Vendor-SDK gebaut, **mit Trajectory-Eval und Failure-Mode-Reflektion**.
- Du verstehst Cost-Tracking, Sandboxing, Eval für Agenten.
- **Du hast einen Computer-Use-Demo umgesetzt**.
- **Du hast die vier Schwarm-Patterns erklärt und einen Schwarm-vs-Conductor-Vergleich auf eigenem Use-Case gemacht**.
- **Du hast eine minimale Agentic-OS-Schicht über deinem Capstone-Agent gelegt**.
- 🧮: Du verstehst RL und MDP/POMDP konzeptionell.
- 🔧: Capstone hat Multi-Agent-Funktionalität *(siehe `17_capstone_a_engineer.md`)*.

## Module

| # | Modul | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 6.0 | [Context Engineering](modul-6.0/index.md) | ✅ | 8-12h |
| 6.1 | [Agent-Patterns](modul-6.1/index.md) | ✅ | 12-18h |
| 6.2 | [Multi-Agent & LangGraph](modul-6.2/index.md) | ✅ | 18-26h |
| 6.3 | [RL & Agent-Theorie](modul-6.3/index.md) | ⏭️ | 0-50h |
| 6.4 | [Vendor-Patterns im Vergleich](modul-6.4/index.md) | ✅ | 9-14h |
| 6.5 | [Computer Use & Agentic Browsing](modul-6.5/index.md) | ✅ | 10-15h |
| 6.6 | [Agentenschwärme](modul-6.6/index.md) | ✅ | 8-12h |
| 6.7 | [Agentic OS](modul-6.7/index.md) | ⏭️ | 6-10h |

## Nach dieser Stufe kannst du...

- [ ] Context-Engineering-Disziplin verstanden, Token-Bilanz erstellt, Compaction-Strategie implementiert
- [ ] ReAct-Agent from scratch in <200 Zeilen Python
- [ ] Multi-Agent-System mit Cost-Tracking, Sandboxing, Eval
- [ ] Trajectory-Eval mit 4 Metriken und Failure-Mode-Doku
- [ ] Computer-Use-Agent mindestens einmal erlebt + Sicherheits-Audit
- [ ] Vendor-SDK-Vergleich mit eigener Decision-Matrix
- [ ] Vier Schwarm-Patterns erklärt + Schwarm-vs-Conductor-Vergleich auf eigenem Use-Case mit Trajectory-Eval + Coordination-Cost
- [ ] Minimale Agentic-OS-Schicht über eigenem Capstone-Agent (🔧) oder 1-2-Pager-Awareness-Brief (🧮/💼)

**Du bist bereit für Stufe 7: Deep Learning Foundations.**

---

[Quellen für die gesamte Stufe](quellen.md) · [Optionale Free-Zertifikate](zertifikate.md)
