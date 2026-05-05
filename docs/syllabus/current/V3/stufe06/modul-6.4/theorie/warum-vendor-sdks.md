---
title: "Warum Vendor-SDKs?"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Warum Vendor-SDKs?

## Kernidee

Die großen Provider (Anthropic, OpenAI, Google) haben eigene Agent-SDKs gebaut, weil Frameworks wie LangGraph und CrewAI einen entscheidenden Nachteil haben: sie können Provider-spezifische Features (Computer Use, Realtime Voice, Extended Thinking) nicht nativ nutzen. Vendor-SDKs schließen diese Lücke — auf Kosten von Vendor-Lock-in.

## Im Detail

**Drei Gründe, warum Provider eigene SDKs gebaut haben:**

1. **Native Support für eigene Features**
   - Anthropic: Computer Use, Extended Thinking, Skills-Integration, MCP-native.
   - OpenAI: Realtime Voice API, Code Interpreter, File Search nativ integriert.
   - Google: Vertex AI Integration, Multimodal nativ, Grounding mit Google Search.
   - Kein Framework kann diese Features so tief integrieren wie das eigene SDK.

2. **Schlankerer Code**
   - LangGraph braucht Graph-Definitionen, Node-Funktionen, State-Klassen, Checkpointer-Konfiguration.
   - Ein Vendor-SDK kann in 20 Zeilen einen funktionierenden Agent produzieren.
   - Weniger Boilerplate = weniger Fehlerquellen für einfache Use-Cases.

3. **Bessere Performance**
   - Kein Framework-Overhead: direkte API-Calls statt durch mehrere Abstraktionsschichten.
   - Streaming-Optimierungen direkt im SDK.
   - Bessere Token-Effizienz durch SDK-natives Context-Management.

**Trade-off: Vendor-Lock-in**
- Wer Claude Agent SDK nutzt, ist an Anthropic gebunden. Wechsel zu OpenAI? Kompletter Rewrite.
- Wer LangGraph + LiteLLM nutzt, kann Provider mit einer Config-Zeile wechseln.
- MCP mildert den Lock-in teilweise: deine Tool-Definitionen funktionieren in jedem SDK.

**Faustregel 2026:** Vendor-SDK für Production-Commitment auf einen Provider + Provider-spezifische Features. Framework für Multi-Provider-Flexibilität, komplexe State-Maschinen, Community-Ecosystem.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) | Anthropic |
| 📖 Docs | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | OpenAI |
| 📖 Docs | [Google ADK Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder) | Google |

## Teste dein Verständnis

- [ ] Nenne drei Gründe, warum Provider eigene Agent-SDKs gebaut haben.
- [ ] Beschreibe den zentralen Trade-off zwischen Vendor-SDK und Framework.
- [ ] Wie mildert MCP den Vendor-Lock-in bei SDK-Nutzung?
