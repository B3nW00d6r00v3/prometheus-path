---
title: "Agent-Anti-Patterns"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Agent-Anti-Patterns

## Kernidee

Sechs Anti-Patterns machen Agenten unbrauchbar oder gefährlich — alle sind in der Praxis häufig und alle sind vermeidbar. Das häufigste: Hello-World-Multi-Agent ohne Failure-Mode-Eval, nach dem Lernende sich für Agent-Builder halten.

## Im Detail

**(1) Endless Loop ohne Stop-Bedingungen**  
Agent läuft, bis das Budget aufgebraucht ist oder die API-Limits greifen. Lösung: alle vier Stop-Bedingungen (Max-Iterations, Final-Answer, Cost-Limit, Time-Limit) aus Modul 6.1.

**(2) Tool-Spam**  
Agent ruft dasselbe Tool 20-mal auf (z.B. Web-Search mit der gleichen Query in Schleife). Lösung: Tool-Call-Deduplication, Observation-Summary, nach 3 identischen Calls Abbruch.

**(3) Cost Explosion**  
Kein Budget-Limit, Edge-Case-Input triggert 100 Iterationen. Lösung: harte Cost-Limits pro Run und pro Session.

**(4) Hallucinated Tool Calls**  
Agent erfindet Tool-Namen, die nicht existieren, und halluziniert Ergebnisse. Lösung: Tool-Validation (nur definierte Tools werden akzeptiert), strukturiertes Output-Parsing.

**(5) No Logging — Black-Box-Verhalten**  
Bei Fehler kein Debugging möglich. Lösung: jede Iteration loggen (Reasoning, Tool-Call, Observation, Cost), Observability-Tool einbinden.

**(6) Hello-World-Multi-Agent ohne Failure-Mode-Eval**  
Das häufigste Anti-Pattern: ein Lernender baut einen Demo-Multi-Agent, der in der Demonstration funktioniert, und hält sich für einen Agent-Builder. Ohne Trajectory-Eval und Failure-Mode-Analyse ist das kein Production-System.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Anti-Pattern-Übersicht |

## Teste dein Verständnis

- [ ] Nenne alle sechs Agent-Anti-Patterns aus dem Gedächtnis.
- [ ] Welches Anti-Pattern ist das häufigste bei Lernenden?
- [ ] Welche zwei Maßnahmen verhindern Tool-Spam am effektivsten?
