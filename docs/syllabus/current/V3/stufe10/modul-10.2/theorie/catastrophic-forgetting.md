---
title: "Fine-Tuning-Falle: Catastrophic Forgetting"
module: "10.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Fine-Tuning-Falle: Catastrophic Forgetting

## Kernidee

Catastrophic Forgetting ist die wichtigste Falle beim Fine-Tuning: durch zu starkes Anpassen auf eine Aufgabe verliert das Modell allgemeine Fähigkeiten — Math, Coding, Reasoning, Sprache. Das ist nicht hypothetisch, sondern passiert bei naiver Fine-Tuning-Konfiguration regelmäßig.

## Im Detail

**Warum Catastrophic Forgetting entsteht:**
- Neurale Netze haben keine explizite "Gedächtnis-Trennung" — Gewichts-Updates für Aufgabe A können Gewichte, die für Aufgabe B zuständig sind, überschreiben
- Je mehr Epochen, je höhere Learning Rate, je mehr Fine-Tuning-Daten relativ zu Pre-Training-Daten: desto höher das Risiko

**Symptome:**
- MMLU fällt nach Fine-Tuning um >10% → klares Zeichen
- Modell antwortet plötzlich falsch auf einfache Mathe-Fragen
- Coding-Qualität sinkt, obwohl du auf Texten trainiert hast
- Ausgaben werden monotoner, weniger kreativ

**Mitigations (in Reihenfolge der Wirksamkeit):**

1. **PEFT statt Full Fine-Tuning** — LoRA/QLoRA/DoRA trainieren nur 0.1-1% der Parameter, viel weniger Interference mit dem Pre-Trained Knowledge

2. **Konservative Learning Rates** — 1e-5 statt 2e-4 als Default. Kleiner Schritt, weniger Catastrophic Forgetting

3. **Mix von General-Daten ins Trainings-Set** — füge 10-30% allgemeine Daten (LIMA, Alpaca) zu deinen Domain-Daten hinzu, damit allgemeine Fähigkeiten reinforced werden

4. **Früh stoppen (Early Stopping)** — MMLU-Subset als Validation-Metrik: wenn MMLU um >5% fällt → Training abbrechen

5. **Wenige Epochen** — 1-2 Epochen statt 5-10. Fine-Tuning ist kein Pre-Training: wenige Epochen reichen oft

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Sebastian Raschka — Catastrophic Forgetting](https://magazine.sebastianraschka.com) | Klare Erklärung mit Beispielen |

## Teste dein Verständnis

- [ ] Warum entsteht Catastrophic Forgetting auf Gewichts-Ebene?
- [ ] Welche fünf Mitigationsstrategien gibt es?
- [ ] Ab welchem MMLU-Rückgang sollte Early Stopping greifen?
