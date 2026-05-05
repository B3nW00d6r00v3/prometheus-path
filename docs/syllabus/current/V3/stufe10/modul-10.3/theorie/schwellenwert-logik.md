---
title: "Schwellenwert-Logik konkret"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Schwellenwert-Logik konkret

## Kernidee

Eval-as-CI ohne konkrete Schwellenwert-Logik ist wirkungslos — wie ein Rauchmelder ohne Alarmschwelle. Die Schwellenwert-Logik legt fest, bei welcher Regression der Merge blockiert wird, wann nur eine Warnung erscheint, und was nur protokolliert wird. Diese Logik muss im Repo dokumentiert und mit PRs aktualisiert werden.

## Im Detail

**Drei Eval-Kategorien mit unterschiedlicher Reaktion:**

**1. Hard-Block-Metriken — Regression > 5% blockiert den Merge**

Das sind Qualitäts-Metriken, bei denen jede Verschlechterung sofort spürbar ist und nicht toleriert werden kann:
- **Faithfulness**: antwortet das System wahrheitsgemäß auf Basis der Quellen? (RAG-kritisch)
- **Answer Relevancy**: ist die Antwort relevant zur gestellten Frage?
- **Safety-Metriken**: wenn relevant (Guardrails, Toxic Output Blocking)

Schwellenwert: **5% relative Regression** → Merge blockiert.

**2. Warning-Metriken — Regression > 10% setzt Warnung, Merge bleibt möglich**

Das sind Metriken, bei denen eine Verschlechterung wichtig ist, aber manchmal bewusst akzeptiert wird (z.B. wenn eine andere Metrik dafür besser wird):
- **Latenz** (P50, P95)
- **Cost pro Request**
- **Output-Vollständigkeit**

Schwellenwert: **10% relative Regression** → PR-Warnung, manuelle Entscheidung.

**3. Tracking-Metriken — nur dokumentiert, keine Block-Logik**

Metriken, die für Langzeit-Trends wichtig sind, aber keine unmittelbare Aktion erfordern:
- **Output-Länge** (Trend-Analyse)
- **Diversity-Scores**
- **Response-Format-Konsistenz**

**Schwellenwert-Dokumentation:**

Alle Schwellenwerte gehören in eine Konfigurationsdatei im Repo:

```yaml
# eval/thresholds.yaml
hard_block:
  faithfulness: 0.05      # max. 5% relative Regression
  answer_relevancy: 0.05
warning:
  latency_p50: 0.10       # max. 10% relative Regression
  cost_per_request: 0.10
tracking:
  output_length: null
  diversity_score: null
```

**Update-Prozess:** Wenn ein PR die Schwellenwerte bewusst ändert (z.B. weil ein neues Feature mehr Latenz kostet, aber deutlich bessere Qualität bringt), muss die `thresholds.yaml` im selben PR angepasst werden — mit Begründung in der PR-Beschreibung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [RAGAS Metriken](https://docs.ragas.io) | Faithfulness, Answer Relevancy Implementierung |
| 📖 Docs | [Promptfoo Assertions](https://www.promptfoo.dev/docs/configuration/assertions-and-metrics/) | Schwellenwert-Konfiguration in Promptfoo |

## Teste dein Verständnis

- [ ] Welche drei Kategorien von Eval-Metriken gibt es und was ist die Reaktion auf Regression jeweils?
- [ ] Warum sollten Schwellenwerte im Repo versioniert und nicht hardcoded im CI-Script stehen?
- [ ] Nenne zwei konkrete Hard-Block-Metriken für ein RAG-System.
