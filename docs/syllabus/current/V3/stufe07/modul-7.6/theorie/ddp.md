---
title: "Data-Parallel (DDP)"
module: "7.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Data-Parallel (DDP)

## Kernidee

Data-Parallel Training (DDP — DistributedDataParallel in PyTorch) ist die einfachste Form des Distributed Training: das identische Modell läuft auf jeder GPU, aber jede GPU bekommt verschiedene Datenbatches. Gradienten werden am Ende jedes Schrittes synchronisiert. Limit: das vollständige Modell muss auf eine GPU passen.

## Im Detail

**Wie DDP funktioniert:**

```
[Modell-Kopie 1 (GPU 1)] + [Datenbatch 1]
[Modell-Kopie 2 (GPU 2)] + [Datenbatch 2]
...
[Modell-Kopie N (GPU N)] + [Datenbatch N]
    ↓ (Forward + Backward auf jeder GPU)
[Gradient-Synchronisation (AllReduce)]
    ↓
[Gleicher Weight-Update auf allen GPUs]
```

**AllReduce:** Am Ende jedes Batches werden die Gradienten über alle GPUs gemittelt (AllReduce-Operation). Das stellt sicher, dass alle Modell-Kopien identische Weights haben nach dem Update.

**Effektive Batch-Größe:** Mit N GPUs läuft effektiv N× größere Batch-Größe. Das kann Training-Dynamik verändern (Learning Rate oft mit √N skalieren).

**Stärken von DDP:**
- Einfach zu implementieren (PyTorch-native).
- Linear skalierende Batch-Größe.
- Kein Qualitäts-Kompromiss (identisch zu Single-GPU-Training, mathematisch).

**Schwächen von DDP:**
- Modell muss vollständig auf jede GPU passen → Hard Limit bei großen Modellen.
- Communication-Overhead bei vielen GPUs.

**PyTorch-Praxis:**

```python
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

dist.init_process_group(backend="nccl")
model = DDP(model.to(local_rank), device_ids=[local_rank])
```

**Wann DDP:**
- Modell passt auf eine GPU (typisch bis ~3B bei Full-Precision, ~7B mit BF16).
- Training soll beschleunigt werden durch mehr GPUs, nicht durch Speicher-Erweiterung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Tutorial | [PyTorch — DDP Tutorial](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) | Offizielles Tutorial |
| 🌐 Docs | [Hugging Face Accelerate — DDP](https://huggingface.co/docs/accelerate/usage_guides/distributed_inference) | Vereinfachte DDP-API |

## Teste dein Verständnis

- [ ] Was unterscheidet DDP von Single-GPU-Training auf der Ebene der Gradienten?
- [ ] Was ist AllReduce — was wird synchronisiert und wann?
- [ ] Was ist das Haupt-Limit von DDP — wann versagt es?
- [ ] Wie skaliert die effektive Batch-Größe mit N GPUs in DDP?
