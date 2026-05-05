---
title: "Pattern, die unter allen Frameworks gleich sind"
module: "5.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Pattern, die unter allen Frameworks gleich sind

## Kernidee

Wer die konzeptionellen Pattern hinter den Frameworks versteht, kann zwischen LangChain, LlamaIndex, PydanticAI und Claude Agent SDK wechseln, ohne von Null anzufangen. Die Pattern sind immer die gleichen — nur die Syntax ändert sich.

## Im Detail

**Die fünf universellen Pattern:**

**1. Chain-Composition:**
Mehrere Schritte hintereinanderschalten — Output von Schritt 1 ist Input von Schritt 2. In LangChain: `LCEL (|)`-Operator. In LlamaIndex: `QueryPipeline`. In PydanticAI: `Agent` mit `@agent.tool`. Konzept: gleich.

**2. Memory (Conversation-State):**
LLMs sind zustandslos — jeder API-Call vergisst alles. Memory-Pattern: Conversation-History im Prompt speichern (In-Context-Memory), oder in DB (External-Memory). Alle Frameworks implementieren das anders — das Konzept ist immer gleich.

**3. Streaming:**
LLMs generieren Token für Token. Streaming zeigt Token sofort (kein Warten auf vollständigen Output). Server-Sent Events (SSE) als Standard. Alle Frameworks haben Streaming-Support — unterschiedliche Syntax, gleiches Protokoll.

**4. Tool Use / Function Calling:**
LLM kann Funktionen aufrufen (externe API, DB, File-System). Format-Unterschied zwischen OpenAI, Anthropic, Google — aber das Konzept (Tool-Definition, Tool-Call, Tool-Result) ist immer gleich. Frameworks abstrahieren die Format-Unterschiede.

**5. Structured Outputs:**
Output als validiertes JSON-Objekt statt freier Text. Pydantic als gemeinsame Sprache. Alle Frameworks und Provider unterstützen das — unterschiedliche Implementation, gleiches Ziel.

**Wann lohnt es sich, ein Framework zu nutzen?**

Faustregel: Framework lohnt sich ab:
- Mehrstufige Workflows (Chain-Composition nicht trivial).
- Memory-Management über Sessions.
- Tool-Use-Orchestrierung mit vielen Tools.
- Multi-Model-Routing in komplexen Apps.

Für einzelne Prompts und einfache Chains: Provider-SDK + ein paar Helper-Funktionen reichen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangChain Conceptual Guide](https://python.langchain.com/docs/concepts/) | Pattern erklärt im LangChain-Kontext |

## Teste dein Verständnis

- [ ] Kannst du "Memory-Pattern" in eigenen Worten erklären — unabhängig vom Framework?
- [ ] Weißt du, welche fünf Pattern du in jedem seriösen LLM-Framework findest?
- [ ] Für deinen Use-Case: welche dieser fünf Pattern brauchst du wirklich?
