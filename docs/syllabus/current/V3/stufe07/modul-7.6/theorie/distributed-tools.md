---
title: "Tools 2026: FSDP, DeepSpeed, Accelerate, Megatron-LM"
module: "7.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Tools 2026: FSDP, DeepSpeed, Accelerate, Megatron-LM

## Kernidee

Vier primäre Tools dominieren Distributed Training 2026: PyTorch FSDP (native), DeepSpeed (Microsoft, ZeRO + Features), Hugging Face Accelerate (Wrapper/Abstraction), Megatron-LM (NVIDIA, TP+PP). Für 7B-30B-Modelle sind FSDP via Accelerate der Standard-Einstieg.

## Im Detail

**PyTorch FSDP (native, OSS):**

- **Was:** Native FSDP-Implementierung in PyTorch.
- **Stärke:** Native Integration, keine Extra-Dependency, stabil seit PyTorch 2.0.
- **Für:** 7B-30B-Modelle, Single-Node (4-8 GPUs).
- **Wann:** Wenn du maximale Kontrolle willst und DeepSpeed-Features nicht brauchst.

```python
from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
model = FSDP(model, sharding_strategy=ShardingStrategy.FULL_SHARD)
```

**DeepSpeed (Microsoft, OSS):**

- **Was:** Framework für Large-Scale-Training mit ZeRO + vielen Features.
- **Zusatzfeatures:** CPU-Offloading (ZeRO-Infinity), FP8-Training, Gradient Checkpointing, Quantization.
- **Für:** 30B+-Modelle, Multi-Node, wenn FSDP an Grenzen stößt.
- **Wann:** Wenn du ZeRO-Infinity (CPU-Offloading) brauchst oder DeepSpeed-Ökosystem nutzt.

**Hugging Face Accelerate (OSS):**

- **Was:** Abstraktions-Layer über FSDP und DeepSpeed mit einfacherer API.
- **Stärke:** Minimale Code-Änderungen, wechselt zwischen Single-GPU, DDP, FSDP, DeepSpeed mit Config.
- **Für:** 🧮 als Standard-Einstieg — reduziert Boilerplate erheblich.

```python
from accelerate import Accelerator
accelerator = Accelerator()
model, optimizer, dataloader = accelerator.prepare(model, optimizer, dataloader)
```

**Megatron-LM (NVIDIA, OSS):**

- **Was:** NVIDIA's Framework für sehr große Modelle mit TP + PP + SP.
- **Stärke:** Sehr effizient für >30B-Modelle, Reference-Implementation für GPT-3-Skala.
- **Für:** Pre-Training sehr großer Modelle (>70B) auf vielen Nodes.
- **Wann:** Nur für ernsthafte Pre-Training-Szenarien — Komplexität hoch.

**Entscheidungs-Tabelle:**

| Szenario | Empfehlung |
|----------|-----------|
| Erste Distributed-Training-Erfahrung | Accelerate + FSDP |
| 7B-30B Single-Node Fine-Tuning | Accelerate + FSDP oder DeepSpeed ZeRO-3 |
| >30B Multi-Node | DeepSpeed ZeRO-3 / Megatron-LM |
| CPU-Offloading nötig | DeepSpeed ZeRO-Infinity |
| Production, Einfachheit | Accelerate |

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [Hugging Face Accelerate](https://huggingface.co/docs/accelerate) | Einstieg für 🧮 |
| 🌐 Docs | [DeepSpeed Docs](https://www.deepspeed.ai/docs/) | ZeRO + Features |
| 🛠️ Code | [Megatron-LM GitHub](https://github.com/NVIDIA/Megatron-LM) | Für sehr große Skalen |

## Teste dein Verständnis

- [ ] Was ist der Hauptunterschied zwischen Accelerate und PyTorch FSDP direkt?
- [ ] Wann lohnt DeepSpeed gegenüber PyTorch FSDP — was bietet DeepSpeed zusätzlich?
- [ ] Was ist ZeRO-Infinity und in welchem Szenario ist es nötig?
- [ ] Für welches Setup (Modellgröße, Node-Anzahl) empfiehlst du als Einstieg Accelerate + FSDP?
