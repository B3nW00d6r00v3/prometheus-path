---
title: "Fully Sharded Data Parallel (FSDP)"
module: "7.6"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Fully Sharded Data Parallel (FSDP)

## Kernidee

FSDP (Fully Sharded Data Parallel) verteilt nicht nur die Daten, sondern auch die Modell-Parameter, Gradienten und Optimizer-States über GPUs ("Sharding"). Jede GPU hält nur einen Bruchteil des Modells. Beim Forward/Backward-Pass werden Shards on-demand zusammengeführt. Ermöglicht Training von Modellen, die nicht auf eine GPU passen.

## Im Detail

**Das Shard-Konzept:**

```
Modell-Weights W = [W1 | W2 | W3 | W4] (4 GPU Beispiel)

GPU 1: W1 (nur 1/4 der Weights)
GPU 2: W2
GPU 3: W3
GPU 4: W4
```

**Forward/Backward mit FSDP:**

```
Forward Pass auf Layer i:
  → AllGather: alle GPUs teilen ihre Shards von Layer i
  → Jede GPU führt Forward für ihre Datenbatch durch
  → Sofortiges Freigeben der nicht-lokalen Shards (nach Berechnung)
  
Backward Pass auf Layer i:
  → AllGather erneut für Gradienten-Berechnung
  → ReduceScatter: Gradienten werden geteilt und summiert
  → Jede GPU hat Gradienten nur für ihren Shard
```

**Speicher-Effizienz:**

Mit N GPUs: Weights/N + Gradienten/N + Optimizer-State/N. Ein 7B-Modell auf 4 GPUs:
- Ohne FSDP: 132 GB pro GPU (OOM).
- Mit FSDP: ~33 GB pro GPU (trainierbar auf 4× 40 GB A100).

**FSDP-Modi:**

- **FULL_SHARD** — alles gesharded: Weights + Gradienten + Optimizer-State.
- **GRAD_OP_SHARD** — nur Gradienten und Optimizer-State gesharded (wie ZeRO-2).
- **SHARD_GRAD_OP** — nur Gradienten gesharded (wie ZeRO-1).

**PyTorch-Praxis:**

```python
from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp.fully_sharded_data_parallel import ShardingStrategy

model = FSDP(
    model,
    sharding_strategy=ShardingStrategy.FULL_SHARD,
    device_id=local_rank,
)
```

**Wann FSDP:**
- Modelle >3B die nicht auf eine GPU passen für Full-Precision-Training.
- Typischer Range: 7B-30B-Modelle auf 2-8 GPUs.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [PyTorch FSDP Tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) | Offizielles Tutorial |
| 🌐 Docs | [Hugging Face Accelerate — FSDP](https://huggingface.co/docs/accelerate/usage_guides/fsdp) | Vereinfachte FSDP-Integration |
| 📄 Paper | [PyTorch FSDP Paper](https://arxiv.org/abs/2304.11277) | Technische Details |

## Teste dein Verständnis

- [ ] Was wird bei FSDP gesharded — was hält jede GPU nach dem Sharding?
- [ ] Was ist AllGather und ReduceScatter — wann wird jede Operation ausgeführt?
- [ ] Wie viel Speicher spart FSDP auf 4 GPUs verglichen mit DDP bei einem 7B-Modell?
- [ ] Was ist der Unterschied zwischen FULL_SHARD und GRAD_OP_SHARD in FSDP?
