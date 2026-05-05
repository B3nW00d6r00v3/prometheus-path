---
title: "Trajectory-Metriken"
module: "6.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Trajectory-Metriken

## Kernidee

Vier Kern-Metriken charakterisieren die Qualität einer Agent-Trajectory vollständig: Task Success Rate (hat es funktioniert?), Tool-Call Quality (wurden die richtigen Tools richtig gerufen?), Trajectory Efficiency (wie nah am Ideal-Pfad?) und Cost Efficiency (wie viel hat es gekostet?). Alle vier braucht man — keine reicht allein.

## Im Detail

**Die vier Kern-Metriken:**

**(1) Task Success Rate**  
Boolean: Aufgabe gelöst, ja/nein. Die Basis-Metrik. Allein reicht sie nicht — ein Agent kann Aufgaben „lösen" auf chaotischem, nicht reproduzierbarem Weg.

**(2) Tool-Call Quality**  
Wurde das richtige Tool gerufen? Mit den richtigen Argumenten? Gemessen durch:
- LLM-as-Judge: dem Judge wird der Tool-Call-Verlauf gezeigt, Judge bewertet.
- Pattern-Matching-Heuristik: war das Tool in der erlaubten Tool-Sequenz?

**(3) Trajectory Efficiency**  
Wie viele Steps hat es gedauert? Wie nah am Ideal-Pfad?
- Ideal-Pfad: kürzester Weg zur Lösung mit minimalem Tool-Spam.
- Efficiency-Score: `ideal_steps / actual_steps` (1.0 = perfekt, <1.0 = Overhead).

**(4) Cost Efficiency**  
Wie viele Tokens, wie viel € pro erfolgreichem Run? Median über mehrere Runs (LLMs sind stochastisch — nie Einzellauf-Werte als Grundlage nehmen).

**Messfrequenz:** Mindestens 5 Runs pro Test-Case. Stochastizität ist real — ein Agent, der 4 von 5 Runs löst, ist fundamental anders als einer, der 1 von 5 löst, auch wenn der Einzellauf identisch aussieht.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangSmith — Agent Evaluation](https://docs.smith.langchain.com/old/cookbook/testing-examples/agent-evaluation) | Metriken-Implementierung |
| 📖 Benchmark | [Anthropic — SWE-bench Sonnet](https://www.anthropic.com/research/swe-bench-sonnet) | Referenz für Task-Success-Rate |
| 🛠️ Tool | [Langfuse Trajectory Tracing](https://langfuse.com/docs/observability/features/agent-graphs) | Trajectory-Visualisierung |

## Teste dein Verständnis

- [ ] Nenne die vier Kern-Metriken für Trajectory-Eval und erkläre jede in einem Satz.
- [ ] Warum ist Task Success Rate allein nicht ausreichend?
- [ ] Warum misst man Median über 5+ Runs statt Einzel-Run-Werte?
