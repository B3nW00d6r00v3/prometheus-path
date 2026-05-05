---
title: "Reflection-Pattern als Erweiterung von ReAct"
module: "6.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Reflection-Pattern als Erweiterung von ReAct

## Kernidee

Im Reflection-Pattern prüft der Agent seinen eigenen Output: „Habe ich die Aufgabe wirklich gelöst? Sind meine Fakten korrekt? Fehlt noch etwas?" Das führt zu besserer Qualität — aber auch zu höheren Kosten, weil zusätzliche LLM-Aufrufe nötig sind.

## Im Detail

**ReAct + Reflection — der erweiterte Zyklus:**

```
ReAct liefert: FINAL_ANSWER: "Berlin hat 3,6 Millionen Einwohner."
    ↓
REFLECTION: "Habe ich die Aufgabe vollständig beantwortet? 
             Habe ich aktuelle Daten genutzt? 
             Gibt es widersprüchliche Informationen?"
    ↓
Bei Bedarf: weitere Tool-Calls oder Korrektur der Antwort
    ↓
Finales FINAL_ANSWER
```

**Wann Reflection sinnvoll ist:**
- Aufgaben mit hoher Faktizitäts-Anforderung (Recherche, Analyse).
- Aufgaben, die leicht unvollständig gelöst werden können.
- Wenn False-Confidence ein Problem ist (Agent gibt Antwort, obwohl er es nicht weiß).

**Wann Reflection zu teuer ist:**
- Einfache Aufgaben mit klar messbarem Ergebnis (Rechner-Task).
- Latenz-kritische Use-Cases.
- Cost-sensitive Deployments.

**Faustregel:** Reflection lohnt sich, wenn ein falsches Ergebnis teurer ist als ein zusätzlicher LLM-Aufruf.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [LangChain — Self-Reflection Patterns](https://blog.langchain.dev/reflection-agents/) | Praktische Patterns und Beispiele |
| 📖 Paper | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Akademischer Hintergrund |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen ReAct und ReAct + Reflection?
- [ ] Wann lohnt sich Reflection, wann nicht?
- [ ] Wie würdest du Reflection in deinen ReAct-Agent aus dem Praxis-Projekt einbauen?
