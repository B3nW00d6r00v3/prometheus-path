---
title: "MCP-Tools statt Custom-Tools"
module: "6.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# MCP-Tools statt Custom-Tools

## Kernidee

2026-Best-Practice: definiere Tools als MCP-Server. Damit funktionieren sie mit Claude, OpenAI, Gemini und Cursor — nicht nur mit deinem eigenen Agent. MCP ist der wichtigste Lock-in-Mitigations-Faktor für Tool-Definitionen.

## Im Detail

**Warum MCP statt Custom-Tool-Definitions?**

Custom-Tool-Definitions sind provider-spezifisch. Wechselst du von Claude zu OpenAI, musst du alle Tool-Definitions anpassen. MCP-Server sind standardisiert und funktionieren provider-agnostisch.

**Wie MCP-Tools im Agent laufen:**  
Dein Agent kann MCP-Tools genauso aufrufen wie normale Function-Calls. Der Unterschied liegt in der Definition: der Tool-Code läuft in einem separaten MCP-Server-Prozess, der per Standard-Protokoll kommuniziert.

**Sicherheits-Anker aus Modul 5.3:**  
Dein Agent muss den MCP-Sicherheits-Block aus 5.3 anwenden. Read-Only-Default, Rate-Limits, Audit-Logs gelten auch für Agenten, die MCP-Tools nutzen.

**Backwards-Kompatibilität:**  
Dein ReAct-Agent aus diesem Modul kann MCP-Tools nutzen wie normale Function-Calls. Die Abstraktion ist transparent.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [MCP Tools — Model Context Protocol](https://modelcontextprotocol.io/docs/concepts/tools) | Offizielle MCP-Tool-Dokumentation |
| 📖 Vertiefung | [Modul 5.3: MCP](../../../stufe05/modul-5.3/index.md) | MCP-Grundlagen und Sicherheits-Block |

## Teste dein Verständnis

- [ ] Was ist der Hauptvorteil von MCP-Tools gegenüber Custom-Tool-Definitions?
- [ ] Welche Sicherheits-Anforderungen aus Modul 5.3 gelten auch für Agent-Tools?
- [ ] Wie unterscheidet sich die Aufruf-Syntax für MCP-Tools und Custom-Tools aus Agent-Perspektive?
