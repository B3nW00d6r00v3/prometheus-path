---
title: "Distillation als verwandte Technik"
module: "10.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Distillation als verwandte Technik

## Kernidee

Distillation ist kein klassisches Fine-Tuning, aber eng verwandt: ein großes "Teacher"-Modell trainiert ein kleines "Student"-Modell, das dann billiger und schneller ist. Der Unterschied zu Fine-Tuning: du optimierst nicht auf eigene Daten, sondern auf die Outputs des Teacher-Modells.

## Im Detail

**Das Distillations-Konzept:**
- Teacher: großes, teures Frontier-Modell (GPT-5, Claude Opus, Llama 70B)
- Student: kleines Modell (Qwen 3 1.5B, Phi-4 3.8B)
- Training: Student lernt nicht von menschlichen Labels, sondern von den "Soft Predictions" (Wahrscheinlichkeitsverteilungen) des Teachers
- Ergebnis: kleines Modell nähert sich der Qualität des Teachers auf der Zielaufgabe an

**Warum Distillation statt Fine-Tuning:**
- Du hast kein gelabeltes Trainings-Set, aber einen starken Teacher
- Du willst Deployment-Cost dramatisch reduzieren (Student ist 10-100x günstiger)
- Teacher-Output-Qualität ist dein Ziel — keine eigene Präferenz nötig

**Synthetic Data als Sonderfall der Distillation:**
Wenn du GPT-5 nutzt, um Trainings-Daten zu generieren, und dann ein kleines Modell auf diesen Daten trainierst — das ist implizit Distillation. DeepSeek V3 und viele andere Open-Source-Modelle wurden so trainiert.

**Wann Distillation vs. Fine-Tuning:**
- Eigene Daten + eigene Präferenzen → Fine-Tuning
- Cost-Reduktion + Teacher-Qualität als Ziel → Distillation

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Hugging Face — Distillation Guide](https://huggingface.co/blog/distillation) | Konzept und Implementierung |

## Teste dein Verständnis

- [ ] Was ist der konzeptionelle Unterschied zwischen Distillation und klassischem Fine-Tuning?
- [ ] Warum ist die Generierung von Trainings-Daten mit GPT-5 implizit Distillation?
- [ ] Wann wählst du Distillation — wann Fine-Tuning?
