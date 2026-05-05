---
title: "Claude Agent SDK — Überblick"
module: "6.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Claude Agent SDK — Überblick

## Kernidee

Das Claude Agent SDK ist Anthropics Production-Framework für langlaufende Agenten. Es ist MCP-nativ, integriert Computer Use und Extended Thinking direkt, und bietet vier Pattern-Klassen, die es von einem reinen API-Wrapper unterscheiden: Sub-Agent-Spawning, Skills-Integration, Compaction-Strategien und Session-Management.

## Im Detail

**Was das Claude Agent SDK von anthropic-sdk unterscheidet:**
- `anthropic` (das Python-SDK): API-Calls, Message-Format, Tool-Definitions. Kein Agent-Loop, kein State-Management.
- `claude-agent-sdk`: Agent-Loop, Sub-Agent-Spawning, Session-Persistenz, Skills-Discovery, Compaction — alles ab Box.

**MCP-nativ:**
- Das SDK integriert MCP (Model Context Protocol) als First-Class-Citizen.
- Deine MCP-Server werden automatisch als Tools registriert.
- Keine manuelle Tool-Wrapper-Schicht notwendig.

**Computer Use nativ:**
- `screenshot()`, `mouse_click(x, y)`, `type(text)`, `scroll()` sind direkte SDK-Primitiven.
- Anthropic liefert einen Reference-Docker-Container für sichere Computer-Use-Ausführung.

**Extended Thinking nativ:**
- Erweiterte Reasoning-Fähigkeit direkt aktivierbar per Config.
- Token-Budget für Thinking steuerbar — wichtig für Context Engineering (6.0).

**Vier Production-Pattern (Details in eigenen Seiten):**
1. Sub-Agent-Spawn: Hauptagent spawnt Spezialisten mit eigenem Context-Window.
2. Skills-Integration: on-demand Discovery von SKILL.md-Files.
3. Compaction-Strategien: automatische Context-Verdichtung bei Limit-Näherung.
4. Session-Management: persistente Sessions über Reconnects hinweg.

**Wann Claude Agent SDK über Framework wählen:**
- Du bist zu Claude committed (Production-Use-Case, kein Provider-Wechsel geplant).
- Du brauchst Computer Use oder Extended Thinking nativ.
- Sub-Agent-heavy-Architekturen mit langen Sessions und Compaction-Bedarf.
- Du möchtest schlanken Code ohne Framework-Overhead.

*Verfallsdatum: Nov 2026 — SDK entwickelt sich aktiv weiter.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) | Offizielle Dokumentation |
| 📖 Cookbook | [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook) | Praxis-Beispiele |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen `anthropic` (Python-SDK) und `claude-agent-sdk`?
- [ ] Nenne zwei Features, die Computer-Use-Nutzung im SDK vereinfachen.
- [ ] Für welchen Use-Case-Typ würdest du Claude Agent SDK über LangGraph wählen?
