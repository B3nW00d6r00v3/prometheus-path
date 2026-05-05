---
title: "Was ist ein Agent?"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Was ist ein Agent?

## Kernidee

Ein Agent ist kein einzelner LLM-Call — er ist ein LLM-System, das Tools nutzt, iterativ entscheidet und mehrstufige Ziele verfolgt. Wer keinen Loop hat, hat einen Tool-Use-Aufruf, keinen Agenten. Diese Unterscheidung ist fundamental für alle weiteren Module in Stufe 6.

## Im Detail

**Die übliche Definition 2026 — drei Merkmale:**

1. **Tools nutzt** — der Agent kann Funktionen ausführen: Web-Search, Datenbankabfragen, Rechenoperationen, API-Calls, Datei-Lesen.

2. **Iterativ entscheidet** — der Agent läuft in einem Loop, nicht als einzelner Aufruf. Nach jedem Tool-Call entscheidet er, was als nächstes zu tun ist.

3. **Ziele verfolgt** — der Agent arbeitet an mehrstufigen Aufgaben, die mehrere Schritte benötigen. Das Ziel ist das Ende-Ergebnis, nicht der nächste einzelne Schritt.

**Was ist kein Agent:**
- Ein LLM-Call mit einem Tool: das ist Tool Use, nicht ein Agent.
- Eine Pipeline mit fest kodierter Schrittfolge: das ist Workflow, nicht ein Agent (der Agent entscheidet selbst über die Schrittfolge).
- Ein Chatbot ohne Tool-Zugang: das ist Konversation, nicht ein Agent.

**Praktische Konsequenz:** Bevor du ein Framework nimmst, frage: braucht mein Use-Case wirklich einen Agent? Oft reicht ein Workflow mit fest kodierten Schritten, der billiger, schneller und robuster ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Pflicht | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Pflicht-Lektüre 2026 |
| 📖 Docs | [Anthropic — Tool Use Overview](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Tool Use als Basis |

## Teste dein Verständnis

- [ ] Nenne die drei Merkmale, die einen Agent von einem einfachen Tool-Use-Aufruf unterscheiden.
- [ ] Beschreibe einen Use-Case, bei dem ein Workflow besser als ein Agent wäre.
- [ ] Warum ist ein Loop das entscheidende Merkmal eines Agents?
