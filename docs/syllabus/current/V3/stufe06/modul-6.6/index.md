---
title: "Modul 6.6: Agentenschwärme"
module: "6.6"
type: index
fast_track: true
effort: "8-12h"
---

# Modul 6.6: Agentenschwärme

Multi-Agent-Architekturen sind 2026 dominantes Industrie-Thema. Vier Pattern-Familien haben sich etabliert: Conductor, Hierarchical, Peer-Swarm, Hybrid. Industrie-Konsens 2026: **Hierarchical wins over Swarm in production almost every time** — aber Awareness der Pattern-Familie ist Pflicht. Modul baut auf Modul 6.2 (Multi-Agent + Trajectory-Eval) auf und erweitert um die strategische Pattern-Wahl.

**Aufwand:** 🔧 8-12h · 🧮 6-10h · 💼 3-5h
**Voraussetzungen:** Module **6.0 Context Engineering**, 6.2 (Multi-Agent + Trajectory-Eval), 6.4 (Vendor-Patterns)
**Status:** Pflicht 🔧, empfohlen 🧮/💼

## Lernziel

Du kannst zwischen Conductor-, Hierarchical-, Peer-Swarm- und Hybrid-Patterns informiert wählen für einen gegebenen Use-Case. Du verstehst die Failure-Modes von Schwärmen (Drift, Race-Conditions, Coordination-Overhead, unterschwellige Sub-Task-Konflikte) und ihre Mitigations. Du kannst einen kleinen Hybrid-Schwarm implementieren und gegen ein Conductor-Pattern empirisch vergleichen.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Vier Schwarm-Pattern 2026](theorie/vier-schwarm-pattern.md) | ✅ | 15min |
| 2 | [Wann welches Pattern?](theorie/wann-welches-pattern.md) | ✅ | 10min |
| 3 | [Anthropic Agent Teams (Feb 2026)](theorie/anthropic-agent-teams.md) | ⏭️ | 10min |
| 4 | [Failure-Modes von Schwärmen](theorie/failure-modes-schwaerme.md) | ✅ | 15min |
| 5 | [Mitigations als Production-Pflicht](theorie/mitigations-schwaerme.md) | ✅ | 10min |
| 6 | [Trajectory-Eval für Schwärme](theorie/trajectory-eval-schwaerme.md) | ✅ | 10min |
| 7 | [Framework-Mapping 2026](theorie/framework-mapping.md) | ⏭️ | 10min |
| 8 | [Anti-Pattern: Schwarm wo Workflow reicht](theorie/antipattern-schwaerme.md) | ✅ | 10min |

## Praxis: Hauptprojekt — Schwarm vs. Conductor-Vergleich

Nimm einen Use-Case aus deinem Capstone (z.B. RAG-Agent aus 5.1, auf Multi-Source-Recherche erweitert).

**Implementiere zwei Varianten:**
- **V1 Conductor:** Master-Agent mit 3 Workers (Topic-Research / Quellen-Eval / Synthese).
- **V2 Hierarchical:** Team-Lead "Recherche" und Team-Lead "Validierung", je 2 Workers.

**Eval-Vergleich (Anschluss an Modul 6.2 Trajectory-Eval):**
- Task Success Rate
- Trajectory Quality
- Tool Usage Quality
- Cost Efficiency
- **Coordination-Cost** *(neu in 6.6)*: Tokens für Inter-Agent-Messages / Tokens für eigentliche Arbeit
- **Time-to-Result** *(neu in 6.6)*: Wall-Clock-Time von Eingabe bis fertiges Ergebnis

**Failure-Mode-Test:** einen Fehler einbauen (z.B. eine Quelle gibt 500 zurück) — wie reagiert jede Architektur?

**Reflexion:** welches Pattern für welchen Use-Case-Typ in deinem Capstone? Begründete Entscheidung dokumentieren.

Im Portfolio: `stufe-6_agenten/6-6-schwaerme/` mit Code beider Varianten, Eval-Report, Failure-Mode-Test, Reflexion.

## 🎁 Mehrwert-Mini-Projekte

- **Pattern-Decision-Tree** als 1-Pager: für welche Use-Case-Charakteristika welches Pattern?
- **Capstone-Phase-7c-Vorbereitung** — wenn dein Capstone-A in Phase 7c den Schwarm-vs-Conductor-Vergleich macht, kannst du diese Praxis-Übung direkt einbinden.

## 🌱 Open-Source-Pfad

AutoGen + CrewAI + LangGraph alle OSS. Für Peer-Swarm: AutoGen Group-Chat. Für Conductor: LangGraph Supervisor-Worker oder CrewAI Crew/Task. Beide Varianten lauffähig auf Ollama mit lokalen Modellen (etwas langsamer, aber komplett kostenfrei und DSGVO-konform).

## Outcome-Check

- [ ] Vier Pattern (Conductor / Hierarchical / Peer-Swarm / Hybrid) erklärbar mit Stärken/Schwächen
- [ ] Zwei Varianten implementiert + verglichen
- [ ] Trajectory-Eval auf beide Varianten mit allen 4 + 2 neuen Metriken
- [ ] Failure-Mode-Test dokumentiert mit beobachteten Drift- oder Race-Condition-Cases
- [ ] Pattern-Wahl für eigenen Capstone begründet
- [ ] Anthropic Agent Teams oder analoges Produkt gelesen/inspiziert
