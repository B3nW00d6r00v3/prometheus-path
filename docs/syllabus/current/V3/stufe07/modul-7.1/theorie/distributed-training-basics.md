---
title: "Distributed Training: DDP, FSDP"
module: "7.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Distributed Training: DDP, FSDP

## Kernidee

Bei Modellen, die nicht auf eine einzelne GPU passen, wird Training auf mehrere GPUs verteilt. DDP (Data Parallel) repliziert das Modell, FSDP (Fully Sharded Data Parallel) verteilt es. Das ist Awareness-Wissen hier — Modul 7.6 geht tiefer.

## Im Detail

**Warum Distributed Training?** Ein 7B-Modell benötigt im vollen Training ~48-96GB VRAM (Weights + Gradienten + Optimizer-State). Selbst eine H100 (80GB) reicht nicht. Lösung: Verteilung auf mehrere GPUs.

**Data Parallelism (DDP — DistributedDataParallel):** Jede GPU hat eine vollständige Kopie des Modells. Unterschiedliche Datenbatches werden parallel auf verschiedenen GPUs verarbeitet. Nach dem Backward Pass werden Gradienten über alle GPUs gemittelt (AllReduce-Operation). Einfach zu implementieren, aber Modell muss auf eine GPU passen.

```python
# DDP in PyTorch (vereinfacht)
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

model = DDP(model, device_ids=[local_rank])
# Ansonsten normales Training-Loop
```

**Fully Sharded Data Parallel (FSDP):** Modell-Parameter, Gradienten und Optimizer-State werden über GPUs aufgeteilt (sharded). Jede GPU hat nur einen Teil des Modells. Beim Forward/Backward Pass werden Shards on-demand zusammengeführt (AllGather). Erlaubt Training von Modellen, die nicht auf eine GPU passen. PyTorch-native seit 2023.

**Praktische Entscheidungsregel:**
- Modell passt auf eine GPU: DDP reicht.
- Modell passt nicht: FSDP oder DeepSpeed ZeRO-3.
- Alternative: QLoRA auf einer GPU (Quantisierung + LoRA, siehe Modul 10.2).

**ZeRO (DeepSpeed):** Ähnlich wie FSDP, aber Microsoft-Implementierung mit drei Stages. ZeRO-3 entspricht FSDP. Beide sind valide Optionen 2026.

Dieses Thema wird in Modul 7.6 vertieft — hier reicht das konzeptionelle Verständnis.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyTorch — DDP Tutorial](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) | Einstieg in DDP |
| 📖 Docs | [PyTorch — FSDP Tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) | FSDP-Einstieg |
| 🌐 Vertiefung | [Modul 7.6 — Distributed Training systematisch](../../modul-7.6/index.md) | Vollständige Vertiefung |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen DDP und FSDP in einem Satz?
- [ ] Wann reicht DDP, wann braucht man FSDP?
- [ ] Was ist AllReduce und warum passiert es in DDP nach dem Backward Pass?
- [ ] Welche Alternative zu Multi-GPU-Training gibt es für Consumer-Hardware (Tipp: QLoRA)?
