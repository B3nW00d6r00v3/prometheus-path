---
title: "Plan-then-Execute vs. Iterativ"
module: "6.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Plan-then-Execute vs. Iterativ

## Kernidee

ReAct ist iterativ: der Agent entscheidet Schritt für Schritt, ohne einen Gesamtplan. Plan-then-Execute ist das Gegenteil: erst einen vollständigen Plan generieren, dann Steps abarbeiten. Beide Ansätze haben klare Stärken und Schwächen — die Use-Case-Charakteristika entscheiden.

## Im Detail

**Plan-then-Execute:**

```
1. PLANNING: "Um die Aufgabe zu lösen, werde ich: 
   (1) aktuelle Inflationsdaten abrufen, 
   (2) Compound-Interest berechnen,
   (3) beides vergleichen."
2. EXECUTION: Steps 1-3 in Reihenfolge abarbeiten.
3. FINAL ANSWER
```

Stärker bei: klar strukturierten Aufgaben mit bekannten Sub-Tasks, geringer Ambiguität, vorhersehbaren Tool-Ergebnissen.

**Iterativ (ReAct):**

Kein Plan vorab — der Agent entscheidet nach jeder Observation, was als nächstes zu tun ist.

Stärker bei: explorativen Aufgaben, unbekanntem Terrain, Aufgaben, bei denen die nächsten Schritte von den Tool-Ergebnissen abhängen.

**Vergleichstabelle:**

| Dimension | Plan-then-Execute | Iterativ (ReAct) |
|---|---|---|
| Planungsqualität | Hoch, explizit | Implizit, emergent |
| Flexibilität | Niedrig (Plan ist fest) | Hoch (adaptiert sich) |
| Reproduzierbarkeit | Besser (Schritte explizit) | Schlechter (stochastisch) |
| Geeignet für | Strukturierte Workflows | Exploratives Vorgehen |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Vergleich von Agent-Patterns |

## Teste dein Verständnis

- [ ] Erkläre den Unterschied zwischen Plan-then-Execute und ReAct mit einem konkreten Beispiel.
- [ ] Wann wählst du Plan-then-Execute, wann ReAct?
- [ ] Was ist der Nachteil von Plan-then-Execute bei explorativen Aufgaben?
