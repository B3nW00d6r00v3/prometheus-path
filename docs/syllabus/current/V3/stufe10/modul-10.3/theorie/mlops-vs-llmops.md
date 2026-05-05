---
title: "MLOps vs. LLMOps — Unterschiede 2026"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# MLOps vs. LLMOps — Unterschiede 2026

## Kernidee

LLMOps ist nicht "MLOps für LLMs" — es ist eine eigene Disziplin mit fundamentalen Unterschieden. Nicht-deterministische Outputs, externe Modell-Updates, Cost als primäre Metrik und Eval-as-CI als Pflicht-Praxis unterscheiden LLMOps strukturell von klassischem MLOps.

## Im Detail

**Klassisches MLOps (weiterhin gültig für klassische ML-Modelle):**
- Modell-Training, Deployment, Monitoring von ML-Modellen
- Deterministische Outputs: gleicher Input → gleicher Output
- Modell-Updates durch eigene Trainings-Pipelines kontrolliert
- Metriken: Accuracy, F1, AUC — numerisch eindeutig
- Gilt weiterhin für: Boosting-Modelle (Modul 8.3), Klassifikations-Modelle (Modul 8.2)

**LLMOps — was dazukommt:**

| Dimension | Klassisches MLOps | LLMOps |
|---|---|---|
| **Outputs** | Deterministisch | Stochastisch, variabel |
| **Modell-Updates** | Eigengesteuert | Extern (Provider ändert Modell) |
| **Hauptkostentreiber** | Compute (Training) | API-Cost (Inferenz) |
| **Qualitätssicherung** | Accuracy-Metriken | Eval-as-CI mit LLM-as-Judge |
| **Prompt-Management** | Nicht relevant | Prompt-Versionierung als Code |
| **Tool-Sicherheit** | Selten relevant | Sandboxing Pflicht bei Agent-Tools |

**Beides gilt nebeneinander:** In einem realen System hast du oft klassische ML-Modelle (Empfehlungssystem, Klassifizierer) plus LLM-Komponenten (Generator, Retriever-Ranker). MLOps und LLMOps-Prinzipien müssen beide angewendet werden.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Sebastian Raschka — LLMOps vs MLOps](https://magazine.sebastianraschka.com) | Klare Gegenüberstellung |

## Teste dein Verständnis

- [ ] Nenne drei strukturelle Unterschiede zwischen MLOps und LLMOps.
- [ ] Warum reicht Accuracy als Metrik für LLM-Monitoring nicht?
- [ ] Für welche Komponenten in einem typischen KI-System gilt MLOps — und für welche LLMOps?
