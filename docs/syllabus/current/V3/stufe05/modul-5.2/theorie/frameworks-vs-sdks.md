---
title: "Frameworks vs. SDKs vs. Pattern"
module: "5.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Frameworks vs. SDKs vs. Pattern

## Kernidee

Es gibt drei Abstraktions-Ebenen beim Bauen mit LLMs: das nackte SDK (nah am API), das Framework (Orchestrierung, Memory, Chains), und Pattern (konzeptionelle Bausteine). Wer nur Frameworks lernt, ist Vendor-locked. Wer Pattern versteht, kann zwischen Frameworks wechseln.

## Im Detail

**Ebene 1 — SDK (nah am API):**
- `anthropic-sdk`, `openai-sdk`, `google-genai`
- Direkter API-Aufruf, volle Kontrolle, wenig Abstraktion.
- Du schreibst selbst: Prompt-Composition, Retry-Logik, Streaming-Handling.
- Für einfache Use-Cases oft die sauberste Lösung.

**Ebene 2 — Framework (Orchestrierung):**
- LangChain, LlamaIndex, PydanticAI, DSPy, Haystack
- Bietet: Chains, Memory, Tool-Use-Orchestrierung, Vector-DB-Integrationen.
- Abstrahiert viel weg — aber: du lernst die Abstraktion, nicht die Konzepte darunter.
- Lohnt sich ab: mehrstufige Workflows, Memory-Management, Tool-Use.

**Ebene 3 — Pattern (konzeptionell):**
- Prompt-Composition, Chain-of-Thought, ReAct, Tool Use, Memory-Patterns.
- Framework-unabhängig — sie funktionieren in LangChain, LlamaIndex, purem SDK oder Claude Agent SDK.
- Wer Pattern versteht, ist nicht Vendor-locked.

**Faustregel:**
Lerne Pattern durch Frameworks — aber stelle sicher, dass du weißt, *was* das Framework für dich macht. Ein Framework ist kein Lernziel, sondern ein Werkzeug.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangChain Conceptual Guide](https://python.langchain.com/docs/concepts/) | Abstraktion erklärt |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen SDK, Framework und Pattern in eigenen Worten erklären?
- [ ] Für welchen Use-Case reicht ein SDK — und ab wann lohnt sich ein Framework?
- [ ] Weißt du, welche Pattern du in beiden Frameworks gleich findest (auch wenn der Code anders aussieht)?
