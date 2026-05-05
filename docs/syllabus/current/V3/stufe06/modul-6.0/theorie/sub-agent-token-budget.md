---
title: "Sub-Agent-Token-Budget-Verteilung"
module: "6.0"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Sub-Agent-Token-Budget-Verteilung

## Kernidee

Wenn ein Hauptagent Sub-Agents spawnt, hat jeder Sub-Agent ein eigenes frisches Context-Window — das ist die Stärke des Patterns. Aber Sub-Agents erzeugen Coordination-Overhead und erhöhen die Komplexität. Die strategische Frage lautet: wann lohnt sich Sub-Agent-Delegation, und wann ist ein Single-Agent mit Compaction die bessere Wahl?

## Im Detail

**Sub-Agent sinnvoll, wenn:**
- Sub-Tasks sind **parallelisierbar** und unabhängig voneinander.
- **Token-Save durch Frische** überwiegt den Coordination-Overhead (klare Sub-Task-Definitionen möglich).
- Sub-Tasks brauchen jeweils sehr spezifische Tool-Sets (nicht alle Tools für jeden Sub-Agent laden).

**Single-Agent mit Compaction sinnvoll, wenn:**
- **Coherence kritisch** — Sub-Tasks hängen stark voneinander ab, ein Agent muss den Gesamtkontext behalten.
- Sub-Tasks sind **stark voneinander abhängig** — Ergebnis A beeinflusst Entscheidung in Sub-Task B.
- **Coordination-Overhead höher als Token-Save** — Spawning, Summarization, Result-Aggregation kostet selbst viele Tokens.

**Brücke zu Modul 6.6:** Diese Abwägung wiederholt sich in der Schwarm-Pattern-Entscheidung. Peer-Swarm vs. Conductor ist die Makro-Version derselben Frage.

**Praktische Heuristik:** Sub-Agent lohnt sich, wenn der Sub-Task in einem frischen 10k-Token-Window lösbar ist und das Ergebnis als sauberer JSON-Output zurückkommt. Alles Komplexere: lieber Single-Agent mit Compaction.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Konzept | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Grundlage für Sub-Agent-Patterns |
| 📖 Vertiefung | [Modul 6.6: Agentenschwärme](../../modul-6.6/index.md) | Erweitert diese Entscheidung auf Schwarm-Ebene |

## Teste dein Verständnis

- [ ] Nenne zwei Indikatoren, die für Sub-Agent-Delegation sprechen.
- [ ] Nenne zwei Indikatoren, die gegen Sub-Agent-Delegation sprechen.
- [ ] Wie hängt diese Abwägung mit der Compaction-Pattern-Wahl zusammen?
