---
title: "A2A/ACP-Awareness"
module: "5.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# A2A/ACP-Awareness

## Kernidee

MCP ist nicht das einzige Inter-Agenten-Protokoll. Google A2A und IBMs ACP adressieren einen anderen Use-Case: direkte Agent-zu-Agent-Kommunikation statt Tool-Server-Architektur. 2026 dominiert MCP — aber wer Multi-Agent-Systeme über Anbieter-Grenzen baut, sollte A2A kennen.

## Im Detail

### Google A2A (Agent-to-Agent Protocol)

2025 von Google vorgestellt. Fokus auf direkte Kommunikation zwischen Agenten verschiedener Anbieter — im Gegensatz zu MCP, das Tool-Server-Architektur betont.

**Anwendungsfall:** Multi-Agent-Systeme, in denen ein Claude-Agent mit einem Gemini-Agenten zusammenarbeitet. MCP würde hier nicht helfen (MCP ist für Tool-Zugriff, nicht für Agent-zu-Agent-Dialog).

**Adoption Mai 2026:** Deutlich kleiner als MCP, aber wachsend. Vor allem in Google-nahen Ökosystemen.

### ACP (Agent Communication Protocol)

IBM-getrieben, in 2025 als Linux-Foundation-Projekt vorgeschlagen. Ähnlich wie A2A: Inter-Agent-Kommunikation, mit stärkerem Fokus auf Enterprise-Compliance und Discovery.

**Adoption Mai 2026:** Noch klein. Relevant in Enterprise-Umgebungen mit IBM-Stack.

### Praktische Entscheidung 2026

| Szenario | Empfehlung |
|----------|-----------|
| Tool/Resource-Zugriff für ein LLM | **MCP** |
| Agent-zu-Agent in einem Anbieter | Framework-intern (z.B. Claude Agent SDK Sub-Agents) |
| Agent-zu-Agent über Anbieter-Grenzen | **A2A** als zweite Option prüfen |
| Enterprise mit IBM-Stack | **ACP** relevant |

**Für Modul 5.3:** MCP bauen und nutzen. A2A/ACP als Awareness im Hinterkopf — du wirst sie in 5.3 nicht implementieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Google A2A Project](https://github.com/google/A2A) | Offizielle Implementierung |
| 📖 Artikel | [A2A vs MCP — Vergleich](https://www.anthropic.com/news/model-context-protocol) | MCP-Perspektive auf Protokoll-Landschaft |

## Teste dein Verständnis

- [ ] Kannst du in einem Satz erklären, was A2A von MCP unterscheidet?
- [ ] Kannst du in einem Satz erklären, für welchen Use-Case ACP gedacht ist?
- [ ] Warum ist MCP 2026 die richtige Wahl für Modul 5.3 — und nicht A2A?
