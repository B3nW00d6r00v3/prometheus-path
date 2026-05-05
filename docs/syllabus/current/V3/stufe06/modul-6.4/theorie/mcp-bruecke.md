---
title: "MCP als Brücke zwischen Vendor-SDKs"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# MCP als Brücke zwischen Vendor-SDKs

## Kernidee

MCP (Model Context Protocol) ist 2026 der wichtigste Lock-in-Mitigations-Faktor: alle drei großen Vendor-SDKs (Claude, OpenAI, Google ADK) und die führenden Frameworks (LangGraph, CrewAI) unterstützen MCP nativ. Das heißt, Tool-Definitionen als MCP-Server funktionieren in jedem dieser Environments — und entkoppeln Tool-Entwicklung von Vendor-Wahl.

## Im Detail

**Ohne MCP:**
Jede SDK wünscht sich Tools in einem leicht unterschiedlichen Format (Claude: `{"name": ..., "input_schema": ...}`, OpenAI: `{"type": "function", "function": {...}}`). Du schreibst dieselbe Tool-Logik mehrfach oder pflegst Adapter-Schichten.

**Mit MCP:**
Ein MCP-Server definiert Tools einmal nach einem Standard-Protocol. Jeder MCP-Client (Claude SDK, OpenAI SDK, LangGraph, Cursor, etc.) kann diesen Server direkt nutzen. Du pflegst Tool-Logik an einem Ort.

**Was MCP entkoppelt:**
- Tool-Definition von Vendor-Wahl.
- Tool-Versionierung von SDK-Versionierung.
- Tool-Tests von Agent-Framework-Tests.

**Was MCP nicht entkoppelt:**
- Agent-Loop-Logik (Sub-Agent-Spawning, Compaction, Session-Management — provider-spezifisch).
- Provider-Features (Computer Use, Extended Thinking — nur bei Anthropic).
- Prompt-Engineering für spezifisches Modell-Verhalten.

**Praktische Implikation für Vendor-Vergleich (Praxis-Projekt dieses Moduls):**
Wenn du denselben Agent in Claude Agent SDK und OpenAI Agents SDK implementierst, kannst du deine MCP-Tools für beide nutzen — das reduziert den Migrations-Aufwand auf die Agent-Logik-Unterschiede.

**Warum MCP der wichtigste Lock-in-Mitigator ist:**
Tools sind oft das Hauptwerk-Artefakt — die echte Business-Logik. Wenn die Tools portabel sind, ist der Lock-in auf Agent-Infrastruktur reduziert, nicht auf Business-Logik.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [MCP Tools Spec](https://modelcontextprotocol.io/docs/concepts/tools) | Standard-Specification |
| 📖 Modul | [Modul 5.3 — MCP](../../../stufe05/index.md) | MCP vollständig |

## Teste dein Verständnis

- [ ] Was genau entkoppelt MCP — und was entkoppelt es nicht?
- [ ] Erkläre, warum Tools als MCP-Server die Migrations-Kosten bei Provider-Wechsel senken.
- [ ] Ist MCP ausreichend, um Vendor-Lock-in vollständig zu eliminieren? Begründe.
