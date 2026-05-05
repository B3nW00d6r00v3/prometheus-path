---
title: "Trajectory-Eval für Schwärme"
module: "6.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Trajectory-Eval für Schwärme

## Kernidee

Schwarm-Eval erweitert die Trajectory-Eval aus Modul 6.2 um zwei neue Metriken: Coordination-Cost (wie viele Tokens gehen für Inter-Agent-Kommunikation statt für eigentliche Arbeit?) und Time-to-Result (wie lange dauert der Schwarm-Run in Echtzeit?). Ohne diese beiden neuen Metriken ist Schwarm-Eval unvollständig.

## Im Detail

**Die vier Standard-Metriken aus Modul 6.2:**
1. Task Success Rate
2. Tool-Call Quality
3. Trajectory Efficiency
4. Cost Efficiency

**Neu in Schwarm-Eval — Metric 5: Coordination-Cost**

```
Coordination-Cost = Token für Inter-Agent-Messages / Token für eigentliche Arbeit
```

- **<30%:** Schwarm lohnt sich — Koordinations-Overhead akzeptabel.
- **30-50%:** Grauzone — Conductor könnte effizienter sein.
- **>50%:** Schwarm lohnt sich nicht — Single-Agent oder Conductor ist besser.

Wie messen: Mit Langfuse oder LangSmith Tracing, tagge Inter-Agent-Messages als `coordination_tokens` und eigentliche Arbeit als `work_tokens`. Ratio berechnen.

**Neu in Schwarm-Eval — Metric 6: Time-to-Result**

- Wall-Clock-Time von Eingabe bis fertiges Ergebnis.
- Nicht Token-Zeit, sondern Echtzeit (wichtig bei parallelen Agents: 3 parallele Agents = 1/3 der Laufzeit, aber 3x die Kosten).
- Vergleiche: Conductor-Run (sequentiell) vs. Swarm-Run (parallel) in Echtzeit.

**Inter-Agent-Communication-Eval:**
Zusätzlich zur normalen Trajectory-Eval: prüfe auch die Qualität der Inter-Agent-Kommunikation.
- Sind die Übergaben zwischen Agents vollständig?
- Gehen Informationen verloren?
- Gibt es Widersprüche zwischen Agents (Sub-Task-Konflikte, Failure-Mode 4)?

**Schwarm-Eval-Test-Set aufbauen:**
Wie in Modul 6.2: 10-20 Test-Cases mit Input + erwartetem Endzustand + erlaubten Tool-Sequenzen. Zusätzlich für Schwarm: dokumentiere erlaubte Inter-Agent-Kommunikationsmuster.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Modul | [Modul 6.2 — Trajectory-Metriken](../../modul-6.2/theorie/trajectory-metriken.md) | Basis-Metriken |
| 📖 Docs | [Langfuse Trajectory Tracing](https://langfuse.com/docs/observability/features/agent-graphs) | Tracing-Tool |

## Teste dein Verständnis

- [ ] Berechne die Coordination-Cost für einen fiktiven Run: 5.000 Coordination-Tokens, 12.000 Work-Tokens — lohnt der Schwarm?
- [ ] Wann ist Time-to-Result ein Argument für Schwarm statt Conductor?
- [ ] Wie würdest du Inter-Agent-Communication-Eval in Langfuse umsetzen?
