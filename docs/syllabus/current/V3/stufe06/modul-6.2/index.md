---
title: "Modul 6.2: Multi-Agent & LangGraph"
module: "6.2"
type: index
fast_track: true
effort: "18-26h"
---

# Modul 6.2: Multi-Agent & LangGraph

Single-Agent reicht für viele Use-Cases — aber komplexe Workflows brauchen Multi-Agent-Architekturen: ein Coordinator-Agent, mehrere Spezialisten-Agents, klare Verantwortungs-Trennung. Dieses Modul lehrt dich Multi-Agent-Patterns mit **LangGraph** (Industriestandard 2026), behandelt aber auch die wichtigsten Alternativen (CrewAI, AutoGen). Plus die Production-Aspekte: **Cost-Tracking**, **Sandboxing**, **Agent-Eval mit Trajectory-Methoden**.

**Wichtig:** Multi-Agent-Systeme sind 2026 immer noch fragil. Anthropic selbst rät zu „schwachen" Multi-Agent-Setups. Dieses Modul ist daher mit Trajectory-Eval-Pflicht und expliziter Failure-Mode-Reflektion ausgestattet — Hello-World-Multi-Agent ohne Failure-Mode-Verständnis ist die häufigste Falle.

**Aufwand:** 🔧 18-26h · 🧮 11-15h · 💼 7-10h  
**Voraussetzungen:** Modul 6.1, Modul 5.4 (GenAI-Eval), optional 4.1

## Lernziel

Du hast ein Multi-Agent-System mit LangGraph (oder einer Alternative) gebaut, mit Cost-Tracking, mindestens einem sandboxed Tool, und einer **vollständigen Trajectory-Eval-Methodik mit Failure-Mode-Analyse**. Du weißt, wann Multi-Agent die richtige Wahl ist und wann nicht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Multi-Agent-Patterns 2026](theorie/multi-agent-patterns.md) | ✅ | 10min |
| 2 | [Wann Multi-Agent vermeiden?](theorie/wann-multi-agent-vermeiden.md) | ✅ | 10min |
| 3 | [LangGraph als Industrie-Default](theorie/langgraph.md) | ✅ | 15min |
| 4 | [CrewAI — schnelles Prototyping](theorie/crewai.md) | ⏭️ | 10min |
| 5 | [AutoGen v0.4+](theorie/autogen.md) | ⏭️ | 10min |
| 6 | [State-Management in Multi-Agent](theorie/state-management.md) | ✅ | 10min |
| 7 | [Cost-Tracking als Pflicht](theorie/cost-tracking.md) | ✅ | 10min |
| 8 | [Sandboxing für gefährliche Tools](theorie/sandboxing.md) | ✅ | 10min |
| 9 | [Human-in-the-Loop](theorie/human-in-the-loop.md) | ✅ | 10min |
| 10 | [Agent-Anti-Patterns](theorie/agent-anti-patterns.md) | ✅ | 10min |
| 11 | [Trajectory-Eval — Grundlagen](theorie/trajectory-eval-grundlagen.md) | ✅ | 15min |
| 12 | [Trajectory-Metriken](theorie/trajectory-metriken.md) | ✅ | 15min |
| 13 | [Failure-Mode-Analyse als Pflicht](theorie/failure-mode-analyse.md) | ✅ | 10min |
| 14 | [Eval-Tooling für Trajectories](theorie/eval-tooling-trajectories.md) | ⏭️ | 10min |
| 15 | [Test-Cases für Trajectory-Eval](theorie/trajectory-test-cases.md) | ✅ | 10min |

## Praxis: Hauptprojekt — Multi-Agent-System

Baue ein Multi-Agent-System für einen konkreten Use-Case (Vorschläge):
- **Research-Pipeline**: Researcher-Agent (Web-Search + RAG aus 5.1), Writer-Agent (strukturiert die Findings), Reviewer-Agent (prüft Faktizität).
- **Sales-Lead-Pipeline**: Lead-Researcher, Qualifier, Email-Drafter, Reviewer.
- **Code-Maintenance**: Code-Analyzer, Refactor-Suggester, Test-Writer.

**Anforderungen:**
- **Stack:** LangGraph (oder Alternative deiner Wahl, mit Begründung) + LiteLLM + LangSmith oder Langfuse (OSS) für Tracing.
- **Mindestens 3 Agents** mit klar getrennten Verantwortungen.
- **Cost-Tracking**: pro Run wird Token-Verbrauch und €-Cost dokumentiert.
- **Mindestens ein sandboxed Tool**: Code-Execution oder Shell-Command in E2B/Modal/Docker.
- **Human-in-the-Loop** für eine kritische Aktion (z.B. "Email senden").
- **Trajectory-Eval-Setup** (Pflicht):
  - 10-20 Test-Cases mit Input + erwartetem Endzustand + erlaubten Tool-Sequenzen + Anti-Pfaden
  - Vier Trajectory-Metriken: Task Success Rate, Tool-Call Quality, Trajectory Efficiency, Cost Efficiency
  - Mindestens 5 Runs pro Test-Case (Stochastik), Median-Werte als Hauptergebnis
  - **Failure-Mode-Analyse-Doku**: 3-5 explizit dokumentierte Failure-Modes deines Systems mit Reproduktions-Schritten
- **Eval-Querschnitt-Anker**: dein Eval-Setup soll auf dem `13_querschnitt_eval.md` aufbauen.

Im Portfolio: `stufe-6_agenten/6-2-multi-agent-system/` mit Code, Architektur-Diagramm, Eval-Report, **Failure-Mode-Doku**, Demo-Video.

## 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Recherche-Crew**: CrewAI-basierter Multi-Agent für Themen-Recherchen.
- **Agent-Cost-Dashboard**: Streamlit-Dashboard, das deine Agent-Runs aus LangSmith/Langfuse visualisiert.
- **Failure-Mode-Cheatsheet**: deine persönliche Liste der 5-10 häufigsten Failure-Modes.

## 🌱 Open-Source-Pfad

Vollständig OSS:
- LangGraph oder CrewAI (beide OSS)
- Ollama für LLM-Backend (z.B. `qwen2.5:14b` für komplexe Multi-Agent-Tasks)
- Langfuse self-hosted für Tracing und Trajectory-Eval
- Docker Compose statt E2B/Modal für Sandbox
- SearXNG (OSS) für Web-Search

## Outcome-Check

- [ ] Multi-Agent-System mit mindestens 3 Agents
- [ ] Cost-Tracking pro Run dokumentiert
- [ ] Sandboxed Tool implementiert
- [ ] Human-in-the-Loop für kritische Aktion
- [ ] **Trajectory-Eval mit 10-20 Test-Cases und 4 Metriken**
- [ ] **5 Runs pro Test-Case (Stochastik), Median dokumentiert**
- [ ] **Failure-Mode-Doku mit 3-5 explizit dokumentierten Modes**
- [ ] Architektur-Diagramm im Portfolio
- [ ] Eval-Querschnitt-Anker (`13_querschnitt_eval.md`) genutzt
