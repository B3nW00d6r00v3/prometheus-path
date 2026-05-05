---
title: "AutoGen v0.4+ — Microsoft-Stack"
module: "6.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# AutoGen v0.4+ — Microsoft-Stack

## Kernidee

AutoGen ist Microsofts Multi-Agent-Framework — komplett neu geschrieben in v0.4 (2024-2025) mit Event-Driven-Architektur. Es ist der natürliche Einstieg, wenn du im Microsoft-Ökosystem (Azure OpenAI, Teams, Copilot-Stack) arbeitest.

## Im Detail

**Was hat sich in v0.4 geändert?**  
AutoGen v0.3 war Conversation-zentrisch (Agents schreiben sich Nachrichten). v0.4 ist komplett neu: Event-Driven-Architektur, Actors, asynchron. Das erzeugt einen Migration-Bruch, ist aber architektonisch robuster für Production.

**Stärken:**
- **Conversation-Patterns**: Group-Chat, Debate (mehrere Agents diskutieren ein Problem), stark für explorative Multi-Agent-Setups.
- **Microsoft-Integration**: Azure OpenAI, Semantic Kernel, gute .NET-Kompatibilität.
- **Event-Driven (v0.4+)**: robuster für asynchrone, langlaufende Workflows.

**Schwächen:**
- Größerer Bruch zwischen v0.3 und v0.4 — viele Tutorials sind noch v0.3.
- Weniger Python-nativ als LangGraph für reine Python-Stacks.
- Beliebt primär im Microsoft-Ökosystem.

**Wann AutoGen wählen:** Bei Microsoft-Azure-Stack, bei Group-Chat / Debate-Patterns, bei .NET-Integration.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [AutoGen Docs](https://microsoft.github.io/autogen/) | Offizielle v0.4-Dokumentation |

## Teste dein Verständnis

- [ ] Was ist der Kern-Unterschied zwischen AutoGen v0.3 und v0.4?
- [ ] Für welchen Use-Case-Typ ist AutoGen am stärksten?
- [ ] Wann würdest du AutoGen über LangGraph wählen?
