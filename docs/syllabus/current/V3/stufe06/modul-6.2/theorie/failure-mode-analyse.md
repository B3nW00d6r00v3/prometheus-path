---
title: "Failure-Mode-Analyse als Pflicht"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Failure-Mode-Analyse als Pflicht

## Kernidee

Bevor ein Multi-Agent als „fertig" gilt, muss explizit dokumentiert werden, **wo und wie es scheitert**. Häufigste Failure-Modes 2026: Endlos-Loop ohne Final Answer, Tool-Spam, Halluzinations-Propagation, Cost-Explosion, HITL-Umgehung. Ohne diese Dokumentation ist das System keine Production-Freigabe wert.

## Im Detail

**Warum Failure-Mode-Analyse Pflicht ist:**

Ein Agent, der in der Demo funktioniert, scheitert in Production an Edge-Cases. Die Demo zeigt den Happy-Path — Failure-Mode-Analyse zeigt, was passiert, wenn der Happy-Path verlassen wird.

**Häufigste Failure-Modes 2026:**

1. **Agent verliert sich in Sub-Tasks ohne Final Answer** — hängt in einer Intermediate-Step-Schleife.
2. **Tool-Spam in Schleife** — ruft dasselbe Tool wiederholt auf, ohne Fortschritt.
3. **Ein Sub-Agent halluziniert, Coordinator übernimmt die Halluzination** — Fehler propagiert sich hoch.
4. **Cost-Explosion bei Edge-Case-Eingabe** — unerwarteter Input triggert 50+ Iterationen.
5. **HITL wird umgangen** — Confidence-Threshold falsch gesetzt, Agent führt destruktive Aktion ohne Bestätigung aus.

**Format für Failure-Mode-Dokumentation:**

```markdown
## Failure-Mode 1: Tool-Spam bei mehrdeutiger Query
- **Trigger**: User-Anfrage enthält Ambiguität ohne klaren Suchbegriff
- **Beobachtetes Verhalten**: Agent ruft web_search 15x mit leicht variierenden Queries auf
- **Reproduktion**: Input "Was ist besser?" ohne Kontext
- **Mitigation**: Max-Tool-Calls-per-Tool-Limit (3), Klarheits-Check vor Tool-Call
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Failure-Mode-Awareness |

## Teste dein Verständnis

- [ ] Nenne fünf häufige Failure-Modes für Multi-Agent-Systeme.
- [ ] Schreibe ein Failure-Mode-Dokument für einen konkreten Failure-Mode deines Systems im Format oben.
- [ ] Warum ist ein Agent ohne Failure-Mode-Dokumentation kein Production-System?
