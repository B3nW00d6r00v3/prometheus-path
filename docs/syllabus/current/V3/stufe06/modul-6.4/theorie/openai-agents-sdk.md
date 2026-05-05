---
title: "OpenAI Agents SDK"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# OpenAI Agents SDK

## Kernidee

Das OpenAI Agents SDK (2024-2025) ist OpenAIs Antwort auf die Limitations der Assistants API: schlanker, mit Multi-Agent-Patterns ab Box, und nahtlos integriert mit OpenAI-Features wie Realtime Voice und Code Interpreter. Das Kern-Primitiv ist der "Handoff" — ein Agent übergibt den Task an einen anderen.

## Im Detail

**Entstehung:**
Das Assistants API (2023) hatte starke Limitations: kein echter Agent-Loop, keine Multi-Agent-Koordination, zu viel Vendor-Lock-in. Das Agents SDK (2024) ist ein kompletter Neustart: Python-Library, framework-agnostic, direkte API-Calls.

**Kern-Konzepte:**

1. **Agent-Klasse:** definiert einen Agent mit System-Prompt, Tool-Set und Handoff-Regeln.
2. **Handoff-Pattern:** Agent A übergibt den Task an Agent B mit Kontext. Kern-Unterschied zu LangGraph: kein expliziter Graph — Handoffs sind implizit durch Agent-Definitionen.
3. **Runner:** führt einen Agent-Run durch, handhabt Tool-Calls und Handoffs automatisch.

```python
from agents import Agent, Runner

researcher = Agent(
    name="Researcher",
    instructions="Du recherchierst Fakten mit Web-Search.",
    tools=[web_search_tool],
)

writer = Agent(
    name="Writer",
    instructions="Du schreibst strukturierte Reports.",
    handoffs=[researcher],  # kann an Researcher delegieren
)

result = Runner.run_sync(writer, "Schreibe einen Report über Vector-Datenbanken.")
```

**Native Features:**
- **Realtime Voice API:** Agent kann sprechen und zuhören — für Voice-Interfaces.
- **File Search:** semantische Suche in hochgeladenen Dateien, nativ integriert.
- **Code Interpreter:** Python-Ausführung in isolierter Sandbox, direkt im Agent.
- **OpenAI MCP-Support:** seit 2025 unterstützt das SDK MCP-Server als Tools.

**Stärken:** schneller Einstieg, sehr gut für OpenAI-zentrierte Stacks, Handoff-Pattern intuitiv für Multi-Agent-Pipelines.

**Schwächen:** Vendor-Lock-in an OpenAI, Handoff-Pattern weniger explizit/debuggbar als LangGraph-Graphs, keine Computer-Use-Äquivalent.

*Verfallsdatum: Nov 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 GitHub | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Code + Docs |
| 📖 Guide | [OpenAI — Agents Guide](https://platform.openai.com/docs/guides/agents) | Offizielle Anleitung |

## Teste dein Verständnis

- [ ] Was ist der Kern-Unterschied zwischen dem Handoff-Pattern (OpenAI SDK) und expliziten Graphs (LangGraph)?
- [ ] Nenne zwei OpenAI-native Features, die das Agents SDK nativ unterstützt.
- [ ] Für welchen Use-Case würdest du OpenAI Agents SDK über Claude Agent SDK wählen?
