---
title: "Wann Vendor-SDK, wann Framework?"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann Vendor-SDK, wann Framework?

## Kernidee

Die Entscheidung zwischen Vendor-SDK und Framework (LangGraph, CrewAI) ist keine Frage von "besser oder schlechter", sondern von Use-Case-Passung. Vendor-SDKs gewinnen bei Provider-spezifischen Features und schlankem Code; Frameworks gewinnen bei Multi-Provider-Flexibilität und komplexen State-Maschinen. Der häufigste Fehler: reflexartig Vendor-SDK wählen, weil die Dokumentation das empfiehlt.

## Im Detail

**Entscheidungsmatrix:**

| Kriterium | Vendor-SDK | Framework |
|---|---|---|
| Provider-Commitment | Single Provider | Multi-Provider |
| Provider-spezifische Features | Ja (Computer Use, Realtime) | Nein / schlecht integriert |
| State-Maschinen-Komplexität | Mittel | Hoch (LangGraph) |
| Code-Schlankeit | Ja | Mehr Boilerplate |
| Community / Tooling | Klein | Groß (LangGraph, CrewAI) |
| Lock-in | Hoch | Niedrig (MCP mildert) |
| Lernkurve | Niedrig | Mittel (LangGraph) |

**Faustregel:**
- **Vendor-SDK**, wenn: primär ein Modell genutzt wird + Provider-spezifische Features gebraucht werden (Computer Use, Realtime) + Schlankeit wichtiger als Flexibilität.
- **Framework (LangGraph, CrewAI)**, wenn: Multi-Provider-Flexibilität gebraucht wird + komplexe State-Maschinen + großes Community-Ecosystem wichtig + bestehende LangChain-Codebase.
- **Direkt SDK** (anthropic-sdk, openai-sdk + LiteLLM), wenn: maximale Kontrolle + minimaler Overhead + die Patterns aus 6.1 selbst implementieren.

**Migrations-Schmerz — reale Kosten:**
Wer vor zwei Jahren auf LangChain Agents gesetzt hat, hat Migrationen durchgemacht: LangChain → LCEL → LangGraph. Wer auf Vendor-SDK setzt, hat Migrationspfad bei Provider-Wechsel. Beide Szenarien sind Realität — wähle bewusst und plane für Migration.

**MCP als Migrations-Mitigator:**
Tool-Definitionen als MCP-Server → funktionieren in jedem SDK → reduziert Migrations-Aufwand bei Provider-Wechsel erheblich.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangGraph Docs](https://langchain-ai.github.io/langgraph/) | Framework-Option |
| 📖 Konzept | [MCP Tools](https://modelcontextprotocol.io/docs/concepts/tools) | Lock-in-Mitigator |

## Teste dein Verständnis

- [ ] Skizziere die Entscheidung für dein Capstone-Projekt: Vendor-SDK oder Framework — und warum?
- [ ] Was ist der Migrations-Schmerz bei Vendor-SDK-Commitment — und wie mildert MCP ihn?
- [ ] In welcher Situation würdest du "direkt SDK" (ohne Vendor-SDK und ohne Framework) wählen?
