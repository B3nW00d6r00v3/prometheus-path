---
title: "Framework-Mapping 2026"
module: "6.6"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Framework-Mapping 2026

## Kernidee

Nicht jedes Framework ist für jedes Schwarm-Pattern gleich gut geeignet. LangGraph ist stark in Graph-Patterns und Supervisor-Worker, AutoGen in Group-Chat und Debate, CrewAI in rollenbasierten Crews, OpenAI Agents SDK in Handoffs, Claude Agent SDK in Sub-Agent-Spawning. Die Wahl des Frameworks sollte das gewünschte Pattern unterstützen.

## Im Detail

**Framework-Pattern-Mapping:**

| Framework | Stärke Patterns | Schwäche Patterns |
|---|---|---|
| **LangGraph** | Graph-Pattern, Supervisor-Worker (Hierarchical), State-Maschinen | Peer-Swarm, sehr dynamische Graphs |
| **AutoGen** | Group-Chat (Peer-Swarm-Variante), Debate-Pattern, Supervisor-Worker | Komplexe State-Maschinen |
| **CrewAI** | Supervisor-Worker (Crew/Task-Metapher), rollenbasiert | Low-Level-Control, Debugging |
| **OpenAI Agents SDK** | Handoff-Pattern, Sequential-Pipeline | Komplexe Multi-Level-Hierarchien |
| **Claude Agent SDK** | Sub-Agent-Spawn, Skills-Integration, langlaufende Sessions | Multi-Provider, komplexe Graphs |

**Welches Framework für welche Schwarm-Pattern:**
- **Conductor:** LangGraph (klarer Supervisor-Node), CrewAI (Process.sequential mit Manager-Agent), Claude Agent SDK (Sub-Agent-Spawn mit strukturiertem Output).
- **Hierarchical:** LangGraph (Multi-Level-Graph), AutoGen (nested GroupChats).
- **Peer-Swarm:** AutoGen (GroupChat mit RoundRobin- oder Selector-Speaker-Selection), LangGraph (dynamische Routing ohne festen Supervisor).
- **Hybrid:** LangGraph + Claude Agent SDK kombiniert.

**Framework-Kombinations-Patterns:**
Nichts hindert dich daran, Frameworks zu kombinieren:
- LangGraph für State-Management + Claude Agent SDK für Sub-Agent-Spawning.
- LiteLLM als Provider-Abstraction + LangGraph für Orchestrierung.

**Hinweis Verfallsdatum:** Framework-Landschaft ändert sich 2026 schnell. Überprüfe aktuelle Dokumentation vor Implementierung. *Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangGraph Multi-Agent Concepts](https://langchain-ai.github.io/langgraph/concepts/multi_agent/) | LangGraph-Pattern |
| 📖 Docs | [AutoGen Docs](https://microsoft.github.io/autogen/) | AutoGen-Pattern |
| 📖 Docs | [CrewAI Docs](https://docs.crewai.com) | CrewAI-Pattern |

## Teste dein Verständnis

- [ ] Welches Framework wählst du für ein Conductor-Pattern — und warum?
- [ ] Wie würdest du ein Peer-Swarm-Pattern mit AutoGen implementieren?
- [ ] Wann ist das Kombinieren von Frameworks sinnvoll — nenne ein Beispiel.
