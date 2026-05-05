---
title: "Context-Bestandteile — was ist im Window?"
module: "6.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Context-Bestandteile — was ist im Window?

## Kernidee

Pro Agent-Run landen typischerweise sieben verschiedene Bestandteile im Context-Window — und die meisten Entwickler unterschätzen, wie viel Platz Tool-Definitionen und Konversations-History beanspruchen. Eine Token-Bilanz für die eigene App zu erstellen ist die erste konkrete Übung in Context Engineering.

## Im Detail

Ein typischer Agent-Run enthält folgende Bestandteile im Context-Window:

1. **System-Prompt** — Rolle, Verhalten, Output-Format. Oft 200-500 Tokens.
2. **User-Message** — die aktuelle Anfrage. Variiert stark.
3. **Tool-Definitions** — JSON-Schema für alle registrierten Tools. Häufig **30-50 % des Budgets**, besonders bei vielen oder komplex beschriebenen Tools.
4. **Tool-Results** — die Rückgabewerte vorheriger Tool-Calls. Können unkontrolliert wachsen.
5. **Retrieved Documents (RAG)** — Dokumente aus Vektordatenbank. Oft 20-40 % bei RAG-Agenten.
6. **Memory-Snapshots** — persistente User- oder Projekt-Profile (z.B. aus Letta oder CLAUDE.md).
7. **Agent-Trajectory bisher** — was hat der Agent in vorherigen Iterationen getan?

**Pflicht-Übung:** Erstelle für deine RAG-App aus Modul 5.1 eine Token-Bilanz: wieviel Prozent entfällt auf welchen Bestandteil? Nutze `tiktoken` für Counting oder Langfuse/LangSmith für automatisches Tracking.

**Warum das wichtig ist:** Wer nicht weiß, was im Window ist, kann nicht entscheiden, was komprimiert oder delegiert werden soll.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [tiktoken](https://github.com/openai/tiktoken) | Token-Counting für OpenAI-Modelle |
| 🛠️ Tool | [Langfuse](https://langfuse.com) | Automatische Token-Bilanz pro Run |
| 📖 Artikel | [Anthropic — Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Enthält Beispiele für Bestandteil-Analyse |

## Teste dein Verständnis

- [ ] Kannst du die sieben typischen Bestandteile eines Agent-Context-Windows aufzählen?
- [ ] Welcher Bestandteil frisst oft überraschend viel Budget?
- [ ] Hast du eine Token-Bilanz für deine eigene Stufe-5-App erstellt?
