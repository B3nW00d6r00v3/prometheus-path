---
title: "MCP vs. Function Calling vs. Plugin-Frameworks"
module: "5.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# MCP vs. Function Calling vs. Plugin-Frameworks

## Kernidee

Es gibt vier Ansätze, einem LLM den Zugriff auf externe Funktionen zu geben. 2026 ist MCP der Industriestandard — vendor-unabhängig, protokollstandardisiert und mit über 9.400 öffentlichen Servern. Function Calling bleibt als Fallback relevant, wenn MCP nicht unterstützt wird.

## Im Detail

**Die vier Ansätze im Vergleich:**

| Ansatz | Vendor-Lock-in | Standardisierung | 2026-Adoption |
|--------|---------------|-----------------|---------------|
| **Function Calling** | Ja (OpenAI/Anthropic/Google jeweils anders) | Kein Standard | Weit verbreitet, aber fragmentiert |
| **MCP** | Nein | Protokollstandard (Linux Foundation) | Dominiert, ~9.400+ Server |
| **OpenAI Plugins / GPT Actions** | Ja (ChatGPT-only) | Proprietär | Schrumpfend |
| **LangChain Tools** | Framework-Lock | LangChain-intern | Weit verbreitet im LangChain-Ökosystem |

**Faustregel 2026:** MCP als Default für neue Server, Function-Calling-Fallback nur wenn der Client kein MCP unterstützt.

**Wann Function Calling trotzdem sinnvoll?**
- Wenn du Provider-spezifische Features nutzt (z.B. Anthropics Tool-Use mit `computer_use`)
- Wenn dein Framework MCP noch nicht unterstützt
- Für sehr einfache, einmalige Tool-Integrationen ohne Wiederverwendung

**Wann MCP?**
- Immer wenn du einen Server für mehrere Clients bauen willst
- Immer wenn du Community-Server wiederverwenden willst
- Immer wenn du langfristige Stabilität brauchst

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Function Calling bei Anthropic |
| 📖 Spec | [MCP vs. Alternativen](https://modelcontextprotocol.io) | Offizielle Positionierung |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum MCP weniger Vendor-Lock-in hat als Function Calling?
- [ ] In welchem Szenario würdest du 2026 noch Function Calling statt MCP wählen?
- [ ] Kannst du den Unterschied zwischen LangChain Tools und MCP-Tools in zwei Sätzen erklären?
