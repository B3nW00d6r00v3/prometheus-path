---
title: "Modul 7.6: Distributed Training systematisch"
module: "7.6"
type: index
fast_track: false
effort: "🔧 4-6h · 🧮 18-30h · 💼 0h"
stability: green
---

# Modul 7.6: Distributed Training systematisch

Multi-GPU-Training ist 2026 nicht mehr Forschungs-Nische — Open-Source-Modelle ab 7B benötigen es. Dieses Modul lehrt 🧮 systematisch DDP, FSDP, ZeRO 1/2/3, plus Tensor- und Pipeline-Parallelism als Awareness. Für 🔧 als konzeptionelles Verständnis für Architektur-Entscheidungen ("welches Modell auf welcher Hardware?"). Für 💼 nicht relevant.

**Aufwand:** 🔧 4-6h · 🧮 18-30h · 💼 0h  
**Voraussetzungen:** Module 7.1, 7.2; idealerweise 10.2 (Fine-Tuning) als Anwendungsanker  
**Status:** **Pflicht 🧮**, optional 🔧, **nicht für 💼**

## Lernziel

- **🧮**: Du verstehst und kannst implementieren — Data-Parallel (DDP), Fully Sharded Data Parallel (FSDP), ZeRO-Stages, plus Awareness für Tensor- und Pipeline-Parallelism. Du hast einen Multi-GPU-Training-Run gemacht (Cloud-GPU-Rental, 2-4 GPUs, <50€ Cost).
- **🔧**: Awareness und konzeptionelles Verständnis für Architektur-Entscheidungen — welches Model auf welcher Hardware mit welcher Strategie?

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Warum Distributed Training?](theorie/warum-distributed.md) | ✅ | 10min |
| 2 | [Data-Parallel (DDP)](theorie/ddp.md) | ✅ | 15min |
| 3 | [Fully Sharded Data Parallel (FSDP)](theorie/fsdp.md) | ✅ | 20min |
| 4 | [ZeRO Stages 1/2/3](theorie/zero-stages.md) | ⏭️ | 20min |
| 5 | [Tensor-Parallelism (Awareness)](theorie/tensor-parallelism.md) | ⏭️ | 10min |
| 6 | [Pipeline-Parallelism (Awareness)](theorie/pipeline-parallelism.md) | ⏭️ | 10min |
| 7 | [Tools 2026: FSDP, DeepSpeed, Accelerate, Megatron-LM](theorie/distributed-tools.md) | ✅ | 15min |

## Praxis 🧮: Hauptprojekt — Multi-GPU-Run auf 7B-Modell

- **Setup**: Cloud-GPU-Rental (Lambda Labs, RunPod, Modal), 2-4 GPUs (H100 oder A100). Compute-Cost-Budget: <50€ realistisch.
- **Modell**: ein 7B-OSS-Modell (Qwen 2.5 7B, Llama 3.1 8B oder Gemma 3 7B).
- **Strategie**: FSDP via PyTorch oder Accelerate. Optional: DeepSpeed ZeRO-3 als Vergleich.
- **Datensatz**: kleines Sample (z.B. Alpaca-Subset, 500-1000 Samples).
- **Trainings-Run**: 1-3h, dokumentierte Loss-Curves, Throughput (Tokens/Sekunde), Memory-Auslastung pro GPU.
- **Vergleich**: Single-GPU (mit QLoRA, weil sonst OOM) vs. Multi-GPU mit FSDP. Throughput, Memory, Cost.
- **Reflexion**: bei welcher Modellgröße lohnt Multi-GPU? Wann reicht Single-GPU mit QLoRA?
- Im Portfolio: `stufe-7_deep-learning/7-6-distributed-training/` mit Code, W&B-Logs, Vergleichs-Report, Reflexion.

## Praxis 🔧: Awareness-Brief

- 1-Pager: was ist DDP, FSDP, ZeRO konzeptionell?
- Architektur-Entscheidungs-Tabelle: welches Modell-Größen-Range mit welcher Strategie auf welcher Hardware?
- Im Portfolio: `stufe-7_deep-learning/7-6-distributed-awareness.md`.

## Open-Source-Pfad

- **PyTorch FSDP** + **Hugging Face Accelerate** — komplett OSS.
- **DeepSpeed** + **Hugging Face Transformers** — komplett OSS.
- Cloud-GPU-Rental kann nicht OSS sein, aber: Hetzner Dedicated GPU-Server (mehr DSGVO-freundlich als US-Provider) oder lokal mit 2× RTX 4090 (Privat-Setup für ernsthafte 🧮).

## Outcome-Check

**🧮:**
- [ ] Multi-GPU-Run dokumentiert (Code, W&B-Logs, Hardware-Setup)
- [ ] FSDP (oder DeepSpeed ZeRO-3) implementiert auf 7B-Modell
- [ ] Throughput, Memory, Cost-Vergleich Single-GPU (QLoRA) vs. Multi-GPU (FSDP)
- [ ] Reflexion zu Modellgröße-vs-Strategie

**🔧:**
- [ ] Awareness-Brief im Portfolio
- [ ] Architektur-Entscheidungs-Tabelle (Modell-Range × Strategie × Hardware)
