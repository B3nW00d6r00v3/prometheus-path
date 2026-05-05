---
title: "PEFT: LoRA, QLoRA, DoRA"
module: "10.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# PEFT: LoRA, QLoRA, DoRA

## Kernidee

Parameter-Efficient Fine-Tuning (PEFT) löst das größte Hindernis bei Fine-Tuning: Full Fine-Tuning eines 7B-Modells braucht 4x80GB-GPUs. LoRA und seine Varianten reduzieren den Compute-Bedarf drastisch, indem nur ein kleiner Bruchteil der Parameter trainiert wird — mit überraschend geringen Qualitätseinbußen.

## Im Detail

**Was Full Fine-Tuning kostet:**
- 7B-Modell: ~28GB VRAM für Weights allein, plus Gradienten + Optimizer-States ≈ 80GB+ VRAM
- Nicht auf Consumer-Hardware machbar

**LoRA (Low-Rank Adaptation) — der Klassiker:**
- Statt alle Weights zu trainieren: kleine Rank-Decomposition-Matrizen A×B trainieren, die auf die bestehenden Weights addiert werden
- Rank r ist ein Hyperparameter: r=8 bis r=64 typisch. Je höher r, desto ausdrucksstärker, aber mehr Parameter
- Memory-Reduktion: 10-100x weniger trainierbare Parameter
- Paper: 2021, aber 2024-2026 Standard-Methode

**QLoRA — LoRA mit Quantisierung:**
- 4-bit-Quantisierung des Base-Modells (bitsandbytes) + LoRA-Training darauf
- Erlaubt Fine-Tuning auf Consumer-Hardware: 7B-Modell auf 24GB VRAM (RTX 4090)
- Leichte Qualitätseinbuße durch Quantisierung, aber oft vernachlässigbar für die meisten Use-Cases

**DoRA (Weight-Decomposed Low-Rank Adaptation) — 2024-Innovation:**
- Zerteilt Weights in Magnitude und Direction, wendet LoRA nur auf Direction an
- Oft bessere Qualität als LoRA bei vergleichbarem Compute
- Drop-in-Replacement für LoRA in TRL und PEFT

**Faustregel für Hardware-Wahl:**
- 24GB VRAM (RTX 4090): QLoRA auf 7B-Modellen
- 48GB (Apple Silicon Max / 2x RTX 4090): QLoRA auf 13B, LoRA auf 7B
- Cloud GPU (H100 80GB): LoRA/DoRA auf 70B, Full Fine-Tuning auf 7B

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [LoRA Paper](https://arxiv.org/abs/2106.09685) | Originalarbeit |
| 📄 Paper | [QLoRA Paper](https://arxiv.org/abs/2305.14314) | Consumer-Hardware-Fine-Tuning |
| 📄 Paper | [DoRA Paper](https://arxiv.org/abs/2402.09353) | 2024-Verbesserung |
| 📖 Docs | [Hugging Face PEFT Library](https://huggingface.co/docs/peft) | Implementierung |

## Teste dein Verständnis

- [ ] Was ist der Kern-Mechanismus von LoRA — was wird trainiert, was nicht?
- [ ] Was macht QLoRA anders als LoRA?
- [ ] Welche VRAM-Menge braucht man für QLoRA auf einem 7B-Modell?
