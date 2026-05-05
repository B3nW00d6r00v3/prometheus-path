---
title: "ReAct-Pattern (2022)"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# ReAct-Pattern (2022)

## Kernidee

ReAct (Reason + Act) ist der Klassiker der Agent-Patterns: Das LLM denkt nach (Reason), ruft ein Tool auf (Act), beobachtet das Ergebnis (Observe) — und wiederholt diesen Zyklus, bis die Aufgabe gelöst ist. Die Stärke: das Pattern funktioniert mit jedem LLM und jeder Tool-API, ohne spezielles Framework.

## Im Detail

**Der ReAct-Zyklus:**

```
User Anfrage
    ↓
[REASON] LLM denkt nach: "Ich brauche aktuelle Wetterdaten. Ich rufe web_search auf."
    ↓
[ACT] Tool-Call: web_search("Wetter Berlin heute")
    ↓
[OBSERVE] Tool-Result: "19°C, bewölkt, Regen möglich"
    ↓
[REASON] LLM denkt nach: "Ich habe die Information. Ich kann jetzt antworten."
    ↓
[FINAL ANSWER] "Das aktuelle Wetter in Berlin ist 19°C und bewölkt."
```

**Warum funktioniert das?**  
Das LLM bekommt bei jedem Schritt den gesamten bisherigen Verlauf (Reasoning + Tool-Calls + Observations) im Context. Damit kann es „verstehen", was bereits versucht wurde, und entscheiden, was als nächstes sinnvoll ist.

**Grenzen des ReAct-Patterns:**
- Sequenziell: ein Tool-Call nach dem anderen (kein Parallel-Execution).
- Keine explizite Planung: der Agent arbeitet iterativ, ohne einen vollständigen Plan vorab zu erstellen.
- Qualität stark von Tool-Descriptions abhängig.

**Erweiterungen:** Plan-then-Execute (erst planen, dann ausführen) und Reflection-Pattern (Agent prüft eigenen Output) bauen auf ReAct auf.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [ReAct: Synergizing Reasoning and Acting in Language Models (2022)](https://arxiv.org/abs/2210.03629) | Original-Paper, ~10min |
| 📖 Guide | [Promptingguide.ai — ReAct](https://www.promptingguide.ai/techniques/react) | Zugängliche Einführung mit Beispielen |

## Teste dein Verständnis

- [ ] Erkläre den ReAct-Zyklus mit eigenen Worten (Reason, Act, Observe).
- [ ] Warum ist der bisherige Verlauf (Trajectory) im Context für ReAct entscheidend?
- [ ] Nenne zwei Grenzen des ReAct-Patterns.
