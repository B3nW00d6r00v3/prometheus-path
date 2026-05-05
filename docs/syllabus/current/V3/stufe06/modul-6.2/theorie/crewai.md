---
title: "CrewAI — schnelles Multi-Agent-Prototyping"
module: "6.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# CrewAI — schnelles Multi-Agent-Prototyping

## Kernidee

CrewAI bietet höhere Abstraktion als LangGraph: du definierst Agents (Rolle, Goal, Backstory) und Tasks, CrewAI orchestriert. Schneller zum Ergebnis, weniger Kontrolle. Ideal für Prototypen und kleinere Projekte, weniger für Production-Systeme mit komplexen Compliance-Anforderungen.

## Im Detail

**CrewAI-Konzepte:**

- **Agent**: hat Rolle (`role`), Ziel (`goal`), Hintergrundgeschichte (`backstory`) und Tools.
- **Task**: konkrete Aufgabe mit Beschreibung, Expected Output und Zuweisung zu einem Agent.
- **Crew**: die Gruppe von Agents mit definierten Tasks. CrewAI übernimmt die Orchestrierung.

**Beispiel (minimale Struktur):**

```python
from crewai import Agent, Task, Crew

researcher = Agent(role="Senior Researcher", goal="...", backstory="...")
writer = Agent(role="Content Writer", goal="...", backstory="...")

task1 = Task(description="Research topic X", agent=researcher)
task2 = Task(description="Write article based on research", agent=writer)

crew = Crew(agents=[researcher, writer], tasks=[task1, task2])
result = crew.kickoff()
```

**Stärken:** Schneller Einstieg, gut lesbare Konfiguration, rollenbasiertes Denken passt zu vielen Business-Use-Cases.

**Schwächen:** Weniger Kontrolle als LangGraph, implizite Orchestrierung erschwert Debugging, schlechter für komplexe State-Transitionen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [CrewAI Docs](https://docs.crewai.com) | Offizielle Dokumentation |
| 🎓 Kurs | [DLAI — Multi AI Agent Systems with crewAI](https://learn.deeplearning.ai) | ~2h, im Audit-Modus kostenlos |

## Teste dein Verständnis

- [ ] Was sind die drei Kern-Konzepte in CrewAI (Agent, Task, Crew)?
- [ ] Wann bevorzugst du CrewAI über LangGraph?
- [ ] Welche Schwäche von CrewAI wird bei Production-Deployment besonders relevant?
