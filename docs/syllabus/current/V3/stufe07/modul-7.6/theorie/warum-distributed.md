---
title: "Warum Distributed Training?"
module: "7.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Warum Distributed Training?

## Kernidee

Modelle ab 7B Parameter passen nicht mehr für Training auf eine einzelne GPU — selbst eine H100 mit 80GB VRAM stößt an ihre Grenzen. Distributed Training verteilt das Modell oder die Daten auf mehrere GPUs oder Nodes und ermöglicht damit das Training von Modellen, die sonst nicht trainierbar wären.

## Im Detail

**Das Speicher-Problem:**

Ein 7B-Modell in FP32 braucht ~28 GB nur für die Weights. Dazu kommen:
- Gradienten: weitere ~28 GB.
- Optimizer-State (Adam): 2× Weights → weitere ~56 GB.
- Aktivierungen (Batch-abhängig): weitere 4-20 GB.

Gesamt: ~116-132 GB für ein 7B-Modell bei Full-Precision-Training. Eine H100 hat 80 GB. Ergebnis: Out-of-Memory (OOM) ohne Distributed Training.

**Die Lösung: Distributed Training**

Verteilung über mehrere GPUs reduziert den Speicherbedarf pro GPU. Verschiedene Strategien haben verschiedene Trade-offs zwischen Kommunikations-Overhead und Speicher-Effizienz.

**Wann Distributed Training (nicht Fine-Tuning mit PEFT):**

- Volle Fine-Tuning (nicht LoRA/QLoRA) auf Modellen >7B.
- Pre-Training von Grund auf (jegliche Größe >3B).
- Full Fine-Tuning für maximale Qualität (PEFT hat Qualitäts-Kompromisse).

**Wann Single-GPU mit PEFT ausreicht (QLoRA):**

- Fine-Tuning von 7B-Modellen auf 24 GB VRAM mit QLoRA.
- Fine-Tuning von 13B-Modellen auf 48 GB VRAM mit QLoRA.
- Für die meisten 🔧-Anwendungsfälle ausreichend.

**Hardware-Orientierung 2026:**

| Setup | Max Modell (Single-GPU Training) |
|-------|----------------------------------|
| RTX 4090 (24 GB) | ~3B Full, ~13B QLoRA |
| A100 (80 GB) | ~13B Full, ~70B QLoRA |
| H100 (80 GB) | ~13B Full, ~70B QLoRA |
| 2× H100 (160 GB) | ~30B Full, ~140B QLoRA |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [PyTorch — Distributed Training Overview](https://pytorch.org/tutorials/beginner/dist_overview.html) | Offizielles Übersichts-Tutorial |
| 📄 Blog | [Sebastian Raschka — Distributed Training](https://magazine.sebastianraschka.com) | Zugängliche Erklärungen |

## Teste dein Verständnis

- [ ] Warum passt ein 7B-Modell nicht für Training auf eine 80 GB H100?
- [ ] Welche drei Speicher-Komponenten braucht ein Modell während des Trainings?
- [ ] Wann reicht QLoRA auf einer Single-GPU aus — und wann nicht?
- [ ] Welche Hardware würdest du für Full Fine-Tuning eines 30B-Modells wählen?
