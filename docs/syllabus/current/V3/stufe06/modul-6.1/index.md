---
title: "Modul 6.1: Agent-Patterns"
module: "6.1"
type: index
fast_track: true
effort: "12-18h"
---

# Modul 6.1: Agent-Patterns

Der wichtigste Schritt zum Agent-Verständnis: **du baust einen ReAct-Agent from scratch**, ohne Framework. In 100-200 Zeilen Python sieht ein Agent — Tool-Definition, Loop, Observation, Action — sehr klar aus. Wenn du das einmal selbst geschrieben hast, ist jedes Framework danach nur noch Abstraktion über bekannten Patterns. Hier kommt auch MCP wieder ins Spiel: deine selbstgebauten Tools können MCP-konform sein.

**Aufwand:** 🔧 12-18h · 🧮 12-18h · 💼 6-10h  
**Voraussetzungen:** Module 2.5 (Function Calling), 5.3 (MCP)

## Lernziel

Du hast einen funktionierenden ReAct-Agent from scratch in Python gebaut, der mindestens drei Tools nutzt (z.B. Web-Search, Rechner, Datei-Read). Der Agent läuft in einem Loop mit Observation/Reasoning/Action und hat Stop-Bedingungen.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Was ist ein Agent?](theorie/was-ist-ein-agent.md) | ✅ | 10min |
| 2 | [ReAct-Pattern](theorie/react-pattern.md) | ✅ | 10min |
| 3 | [Tool-Definitionen mit Schemas](theorie/tool-definitionen.md) | ✅ | 10min |
| 4 | [Loop-Steuerung: Stop-Bedingungen](theorie/stop-bedingungen.md) | ✅ | 10min |
| 5 | [System-Prompt für Agenten](theorie/system-prompt-agenten.md) | ✅ | 10min |
| 6 | [Tool-Auswahl: was wird ein Tool?](theorie/tool-auswahl.md) | ✅ | 10min |
| 7 | [MCP-Tools statt Custom-Tools](theorie/mcp-tools.md) | ⏭️ | 10min |
| 8 | [Reflection-Pattern](theorie/reflection-pattern.md) | ⏭️ | 10min |
| 9 | [Plan-then-Execute vs. Iterativ](theorie/plan-then-execute.md) | ⏭️ | 10min |
| 10 | [Cost und Latenz von Agenten](theorie/cost-latenz.md) | ✅ | 10min |

## Praxis: Hauptprojekt — ReAct-Agent from scratch

Baue einen Python-Agent ohne Framework (kein LangChain, kein LangGraph), nur mit dem Provider-SDK (Anthropic, OpenAI oder LiteLLM):

- **3-5 Tools definieren**, mit Pydantic-Schemas:
  - `web_search(query)` — z.B. via [Tavily](https://tavily.com), [Brave Search API](https://brave.com/search/api/), oder [SerpAPI](https://serpapi.com)
  - `calculator(expression)` — z.B. mit `sympy` für sichere Auswertung
  - `read_file(path)` — Filesystem-Read mit Sandbox
  - `web_fetch(url)` — eine Webseite abrufen
- **Agent-Loop** in <200 Zeilen Code:
  - System-Prompt mit Tool-Beschreibungen
  - Iteration: LLM call → Tool-Detection → Tool-Execute → zurück in Context
  - Stop-Bedingungen: max 10 Iterations, Final-Answer detektiert, Cost-Limit
- **3 Test-Aufgaben**:
  - "Was ist die Hauptstadt der Region, in der ich gerade wohne, und wie ist das aktuelle Wetter dort?"
  - "Berechne den Compound-Interest auf 10.000€ über 10 Jahre bei 5%, vergleiche mit aktueller Inflation."
  - "Lies die README in meinem Portfolio-Repo und fasse die Capstone-Idee zusammen."
- **Logging**: jeder Schritt mit Reasoning, Tool-Call, Observation, Cost.

Im Portfolio: `stufe-6_agenten/6-1-react-agent-scratch/` mit Code, README, Demo-Run-Log.

**Bonus (🔧 für Capstone):** Erweitere deinen Capstone-RAG aus Stufe 5 zu einem ReAct-Agent — der Agent kann jetzt deine RAG-Tools nutzen plus Web-Search. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

## 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Research-Agent** als CLI-Tool: gib eine Frage ein, der Agent recherchiert (Web-Search + RAG) und gibt eine zusammengefasste Antwort mit Quellen.
- **Code-Review-Agent** für eigene Repos: liest geänderte Files, ruft Linters und Tests, fasst Findings zusammen.
- **Daily-Briefing-Agent** als Cronjob: liest News, Slack, E-Mails, fasst zusammen.

## 🌱 Open-Source-Pfad

- Komplett mit Ollama (`qwen2.5:7b` ist gut für Tool-Use) und SearXNG (OSS-Suchmaschine) statt Tavily.
- Bonus: dein Agent definiert Tools als MCP-Server (siehe 5.3), läuft also auch in Claude Desktop.

## Outcome-Check

- [ ] ReAct-Agent in <200 Zeilen Python ohne Framework
- [ ] Mindestens 3 Tools mit Pydantic-Schemas
- [ ] Stop-Bedingungen (Max-Iterations, Final-Answer, Cost-Limit)
- [ ] Drei Test-Aufgaben erfolgreich gelöst
- [ ] Logging mit Reasoning-Trail
- [ ] Bonus 🔧: Capstone als Agent erweitert *(siehe `17_capstone_a_engineer.md`)*
