---
title: "Mixed Precision Training (FP16, BF16)"
module: "7.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Mixed Precision Training (FP16, BF16)

## Kernidee

Moderne Trainings nutzen 16-Bit Floats statt 32-Bit, was Speicher halbiert und Training beschleunigt. BF16 ist 2026 der Standard (besserer numerischer Range als FP16). PyTorch's `torch.autocast` macht das automatisch.

## Im Detail

**Das Problem mit FP32:** Standard-Training nutzt 32-Bit Floats (FP32). Das ist präzise, aber Modell-Weights, Gradienten und Optimizer-State belegen damit das Doppelte des theoretischen Minimums.

**FP16 (Half Precision):** 16 Bit, halb so groß. Vorteil: schnellere Matrix-Multiplikationen auf modernen GPUs (Tensor Cores). Nachteil: geringerer numerischer Range — Gradienten können auf 0 runden (Underflow) oder zu NaN werden (Overflow). Lösung: Loss Scaling (multipliziert Loss vor Backward, teilt Gradienten danach).

**BF16 (Brain Float 16, Google Brain):** Ebenfalls 16 Bit, aber anders aufgeteilt. BF16 hat den gleichen Exponent-Range wie FP32 (kann dieselben Größenordnungen darstellen), aber weniger Mantissa-Präzision. Praktisch: kein Loss Scaling nötig, stable Training. Standard in 2026 für LLM-Training auf H100/A100 (native BF16-Unterstützung).

**Mixed Precision:** Weights intern als FP32 gespeichert (Optimizer-State), Forward-/Backward-Pass in FP16/BF16. Kombination: Präzision von FP32, Geschwindigkeit und Speicher von FP16/BF16.

```python
import torch
from torch.amp import autocast, GradScaler

# BF16 — moderner Standard (H100/A100)
with autocast(device_type='cuda', dtype=torch.bfloat16):
    output = model(input)
    loss = criterion(output, target)

loss.backward()
optimizer.step()

# FP16 mit Loss Scaling (ältere GPUs ohne BF16-Unterstützung)
scaler = GradScaler()
with autocast(device_type='cuda', dtype=torch.float16):
    output = model(input)
    loss = criterion(output, target)

scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()
```

**Wann was 2026:**
- H100, A100, RTX 4090: BF16 bevorzugen (native Unterstützung).
- Ältere GPUs (V100, RTX 3090): FP16 mit GradScaler.
- Apple Silicon (MPS): BF16 wird unterstützt, aber Tensor Core-Äquivalent schwächer.

**Speicher-Effekt:** BF16 vs. FP32 halbiert Modell-Weights-Größe. 8B Weights × 2 Bytes (BF16) = 16GB statt 32GB. Der Unterschied für vollständiges Training ist kleiner (Optimizer-State bleibt FP32), aber spürbar.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyTorch — Automatic Mixed Precision](https://pytorch.org/docs/stable/amp.html) | Offizielle AMP-Doku |
| 📰 Blog | [Hugging Face — BF16 Guide](https://huggingface.co/docs/transformers/perf_train_gpu_one#bf16) | Praktischer Guide |

## Teste dein Verständnis

- [ ] Was ist der Hauptvorteil von BF16 gegenüber FP16 (Tipp: Range vs. Präzision)?
- [ ] Warum braucht FP16 Loss Scaling, BF16 nicht?
- [ ] Wie aktivierst du Mixed Precision in PyTorch mit einer Zeile Code?
- [ ] Wie viel VRAM spart BF16 für ein 7B-Modell gegenüber FP32?
