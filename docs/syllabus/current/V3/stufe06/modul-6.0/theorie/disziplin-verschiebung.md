---
title: "Prompt → Context Engineering: die Disziplin-Verschiebung 2025-2026"
module: "6.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Prompt → Context Engineering: die Disziplin-Verschiebung 2025-2026

## Kernidee

„Prompt Engineering" wurde zu eng, als LLMs in Loops mit Tools, Memory, Sub-Agents, Skills und MCP-Servern liefen. Context Engineering umfasst alle Token-Allokations-Entscheidungen pro Agent-Run, nicht nur den Prompt. Wer nur seinen Prompt optimiert, aber vergisst, dass Tool-Definitionen 30-50 % des Budgets fressen können, baut Agents, die an der Wand scheitern — nicht am Text.

## Im Detail

**Prompt Engineering** (2020-2024) konzentrierte sich auf: System-Prompt formulieren, Few-Shot-Beispiele wählen, Output-Format bestimmen. Das reicht für Single-Call-Szenarien.

**Context Engineering** (2025+) fragt darüber hinaus: Was kommt alles in das Context-Window pro Run? In welcher Reihenfolge? Wie viel Budget bekommt welcher Bestandteil? Wann wird komprimiert, wann delegiert?

Anthropic brachte den Begriff 2025 explizit in einen Engineering-Blog-Post. Der Impuls dahinter: bei Claude-Agents mit Extended Thinking, Sub-Agents, MCP-Tools und langer Konversations-History ist der Prompt nur noch ein kleiner Teil des gesamten Context-Windows.

**Praktische Konsequenz:** Jede Agent-Architektur-Entscheidung ist implizit eine Context-Budget-Entscheidung. Wer das nicht explizit macht, verliert Qualität, Kosten-Kontrolle und Reproduzierbarkeit.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Effective Context Engineering for AI Agents (2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Pflicht-Lektüre, ~20min |
| 📖 Talk | [AWS re:Invent 2025 AIM277](https://dev.to/kazuya_dev/aws-reinvent-2025-what-anthropic-learned-building-ai-agents-in-2025-aim277-16lc) | Anthropic-Talk zu Context Engineering |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen Prompt Engineering und Context Engineering in zwei Sätzen erklären?
- [ ] Nenne zwei Gründe, warum ein Agent an Context-Strategie scheitern kann, obwohl der Prompt perfekt ist.
- [ ] Welche Agent-Komponenten neben dem System-Prompt landen im Context-Window?
