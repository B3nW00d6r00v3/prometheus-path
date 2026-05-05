---
title: "GPU-Training-Basics"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# GPU-Training-Basics

## Kernidee

Moderne Neural Networks brauchen GPUs — sie führen parallele Matrix-Multiplikationen durch, für die GPUs tausend Mal schneller als CPUs sind. PyTorch ist 2026 der dominante Framework. CUDA für NVIDIA-GPUs, MPS für Apple Silicon, ROCm für AMD.

## Im Detail

**Warum GPUs?** Ein Forward Pass durch ein großes Netz ist eine Serie von Matrix-Multiplikationen. CPUs haben wenige schnelle Kerne (4-64), GPUs haben tausende kleinere parallele Kerne (NVIDIA H100: 16.896 CUDA-Kerne). Für parallele Matrix-Operationen sind GPUs deshalb 100-1000x schneller als CPUs.

**GPU-Speicher (VRAM) ist der limitierende Faktor:** Trainings-Setup benötigt:
- Modell-Weights.
- Gradienten (gleich groß wie Weights).
- Optimizer-State (Adam: 2× Weight-Größe für m und v).
- Aktivierungen (für Backprop gespeichert).

Beispiel: Llama 3.1 8B, BF16-Weights = 16GB. Mit Gradienten + Optimizer-State: ~48-96GB VRAM. Daher: für Training von 7B+ braucht man entweder Multi-GPU oder QLoRA (Quantisierung + LoRA, reduziert auf 8-16GB).

**PyTorch-Device-API:**

```python
import torch

# Device automatisch wählen
device = (
    "cuda" if torch.cuda.is_available()      # NVIDIA
    else "mps" if torch.backends.mps.is_available()  # Apple Silicon
    else "cpu"
)

# Modell und Daten auf GPU
model = model.to(device)
x = x.to(device)

# GPU-Statistiken
print(torch.cuda.memory_allocated() / 1e9, "GB genutzt")
print(torch.cuda.get_device_name(0))  # z.B. "NVIDIA H100 SXM5 80GB"
```

**GPU-Hierarchie 2026:**
- **H100 (80GB VRAM)** — State-of-the-Art, ~$2/h auf Cloud.
- **A100 (40/80GB VRAM)** — Vorige Generation, immer noch sehr leistungsfähig, günstiger.
- **RTX 4090 (24GB VRAM)** — Consumer-Karte, gut für kleine 7B-Experimente mit QLoRA.
- **RTX 3090 (24GB VRAM)** — Gebraucht günstig, ähnlich 4090 für Training.
- **Apple M4 Max (MPS)** — MacBook-GPU, kein CUDA, aber brauchbar für kleine Modelle.

**Cloud-Optionen für Training:** Lambda Labs, RunPod, Modal, Google Colab Pro. Für 🧮-Experimente mit 7B: Lambda/RunPod mit 1-4× A100/H100, $1-3/h. Budget für Modul 7.6: <50€.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyTorch Tutorials — Getting Started](https://pytorch.org/tutorials/) | Offizielle Tutorials |
| 📖 Docs | [PyTorch — MPS Backend (Apple Silicon)](https://pytorch.org/docs/stable/notes/mps.html) | Mac-GPU-Unterstützung |
| 🌐 Cloud | [Lambda Labs](https://lambdalabs.com) | GPU-Rental |
| 🌐 Cloud | [RunPod](https://www.runpod.io) | Günstige GPU-Rental |

## Teste dein Verständnis

- [ ] Warum sind GPUs für Matrix-Multiplikationen schneller als CPUs?
- [ ] Was ist VRAM und warum ist es der limitierende Faktor beim Training?
- [ ] Welchen Device-Code schreibst du in PyTorch, um automatisch GPU zu nutzen?
- [ ] Wie viel VRAM braucht ein 7B-Modell für Training in BF16 (ungefähr)?
