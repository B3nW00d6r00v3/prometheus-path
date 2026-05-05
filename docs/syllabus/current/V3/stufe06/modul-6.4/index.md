---
title: "Modul 6.4: Vendor-Patterns im Vergleich"
module: "6.4"
type: index
fast_track: true
effort: "9-14h"
---

# Modul 6.4: Vendor-Patterns im Vergleich

LangGraph ist nicht der einzige Multi-Agent-Stack 2026. Die großen Provider (Anthropic, OpenAI, Google) haben eigene Agent-SDKs entwickelt, die produktionsreif sind. Dieses Modul vergleicht **Claude Agent SDK**, **OpenAI Agents SDK**, **Google ADK** — und zeigt, wann Vendor-SDKs den Frameworks vorzuziehen sind und wann nicht. Wichtig: das ist Vergleich, nicht Empfehlung — du entscheidest am Ende, was zu deinem Use-Case passt.

**Aufwand:** 🔧 9-14h · 🧮 4-6h · 💼 4-6h
**Voraussetzungen:** Module 6.1, 6.2, 6.0 Context Engineering, idealerweise 5.6 Skills

## Lernziel

Du hast denselben einfachen Agent in mindestens zwei Vendor-SDKs implementiert (z.B. Claude Agent SDK + OpenAI Agents SDK) und kannst Stärken/Schwächen begründet vergleichen.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Warum Vendor-SDKs?](theorie/warum-vendor-sdks.md) | ✅ | 10min |
| 2 | [Claude Agent SDK — Überblick](theorie/claude-agent-sdk.md) | ✅ | 15min |
| 3 | [Sub-Agent-Spawn-Pattern](theorie/sub-agent-spawn.md) | ✅ | 10min |
| 4 | [Skills-Integration im SDK](theorie/skills-integration.md) | ⏭️ | 10min |
| 5 | [Compaction-Strategien im SDK](theorie/compaction-im-sdk.md) | ✅ | 10min |
| 6 | [Session-Management](theorie/session-management.md) | ⏭️ | 10min |
| 7 | [OpenAI Agents SDK](theorie/openai-agents-sdk.md) | ✅ | 10min |
| 8 | [Google ADK](theorie/google-adk.md) | ⏭️ | 10min |
| 9 | [Computer Use als Sonderpattern](theorie/computer-use-ueberblick.md) | ✅ | 10min |
| 10 | [Wann Vendor-SDK, wann Framework?](theorie/sdk-vs-framework.md) | ✅ | 10min |
| 11 | [MCP als Brücke zwischen Vendor-SDKs](theorie/mcp-bruecke.md) | ✅ | 10min |

## Praxis: Hauptprojekt — Vendor-Vergleich

Wähle zwei Vendor-SDKs und implementiere denselben Agent in beiden:

- **Use-Case:** einfacher Research-Agent mit 2-3 Tools (Web-Search, Calculator, RAG aus 5.1).
- **Implementation A:** z.B. Claude Agent SDK
- **Implementation B:** z.B. OpenAI Agents SDK
- **Bonus:** zusätzliche Implementation in LangGraph als dritte Variante (siehe 6.2).

**Vergleich auf konkreten Dimensionen:**
- Lines of Code
- Setup-Aufwand
- Streaming, Logging, Error Handling
- Native Features (z.B. Reasoning Mode, Realtime)
- Cost und Performance auf 5 Test-Aufgaben
- Migration: wenn du das SDK wechseln müsstest, was wäre der Aufwand?

Schreibe einen kurzen Vergleichs-Report mit Empfehlungen für verschiedene Use-Cases.

Im Portfolio: `stufe-6_agenten/6-4-vendor-vergleich/` mit beiden Code-Versionen, Test-Aufgaben, Vergleichs-Report.

## 🎁 Mehrwert-Mini-Projekte

- **Persönliche Vendor-SDK-Decision-Tree** als Markdown: für welche Use-Case-Klasse welches SDK?
- **Computer-Use-Demo** mit Claude: ein einfacher Browser-Automation-Task — *wird in Modul 6.5 vertieft*.

## 🌱 Open-Source-Pfad

Vendor-SDKs sind per Definition nicht OSS. Aber:
- LangGraph (OSS) als dritte Variante in deinem Vergleich.
- [smolagents](https://github.com/huggingface/smolagents) von Hugging Face als minimalistisches OSS-Agent-Framework als vierte Variante.

## Outcome-Check

- [ ] Mindestens zwei Vendor-SDK-Implementierungen desselben Agents
- [ ] Vergleichs-Tabelle mit konkreten Metriken
- [ ] Decision-Matrix für Vendor-Wahl
- [ ] Migrations-Reflektion: wie austauschbar sind die SDKs?
- [ ] **Mindestens eines der vier Claude-Agent-SDK-Tiefen-Patterns** erklärbar (Sub-Agent-Spawn / Skills-Integration / Compaction / Session-Management) und für eigenen Capstone-Use-Case bewertet
