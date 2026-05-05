---
title: "System-Prompt für Agenten"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# System-Prompt für Agenten

## Kernidee

Das System-Prompt eines Agenten ist mehr als eine Rollenbeschreibung — es definiert Identität, Denkweise, Tool-Nutzungsprinzipien, Stop-Kriterien und Output-Format. Ein guter Agent-System-Prompt ist kurz, präzise und actionable. Er erklärt dem LLM, wie es denken und entscheiden soll, nicht nur, wer es ist.

## Im Detail

**Pflicht-Bestandteile eines Agent-System-Prompts:**

1. **Rolle und Ziel** — wer ist der Agent, was ist sein übergeordnetes Ziel?
2. **Tool-Nutzungsprinzipien** — wann soll er Tools nutzen, wann nicht? Welche Faustregel gilt?
3. **Denkweise** — "Denke Schritt für Schritt", "Prüfe, ob du die Aufgabe wirklich gelöst hast", "Nutze Tools nur wenn nötig".
4. **Stop-Kriterien** — wann ist die Aufgabe fertig? Was ist eine Final Answer?
5. **Output-Format** — strukturiertes Format für Tool-Calls und Final Answers.

**Beispiel (kompakt):**

```
Du bist ein Research-Agent. Dein Ziel: gegebene Fragen vollständig und faktisch korrekt beantworten.

Tools: Nutze web_search für aktuelle Fakten, calculator für Berechnungen, read_file für lokale Daten.
Nutze Tools nur, wenn du die Antwort nicht aus deinem Training weißt.

Denkweise: Denke laut nach, bevor du ein Tool aufrufst. Prüfe nach jeder Observation, ob du die Frage bereits vollständig beantworten kannst.

Final Answer: Wenn du die Antwort hast, antworte mit FINAL_ANSWER: gefolgt von der vollständigen Antwort.
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Cookbook | [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use) | Praktische System-Prompt-Beispiele |
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | System-Prompt als Kernkomponente |

## Teste dein Verständnis

- [ ] Nenne die fünf Pflicht-Bestandteile eines Agent-System-Prompts.
- [ ] Was ist der Unterschied zwischen einem Rollen-Prompt und einem Agent-System-Prompt?
- [ ] Schreibe einen minimalen System-Prompt für deinen ReAct-Agent aus dem Praxis-Projekt.
