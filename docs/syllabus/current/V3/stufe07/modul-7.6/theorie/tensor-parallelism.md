---
title: "Tensor-Parallelism (Awareness)"
module: "7.6"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Tensor-Parallelism (Awareness)

## Kernidee

Tensor-Parallelism verteilt einzelne Layer-Berechnungen über mehrere GPUs. Im Gegensatz zu DDP/FSDP (Daten oder Modell als Ganzes), werden hier Matrizen-Multiplikationen aufgeteilt. Komplex zu implementieren, lohnt erst ab Multi-Node-Setups mit >30B-Modellen.

## Im Detail

**Was Tensor-Parallelism macht:**

Statt das gesamte Modell oder einen Shard davon auf einer GPU zu haben, werden die Berechnungen innerhalb eines einzelnen Layers auf mehrere GPUs aufgeteilt.

Beispiel: Eine Matrix-Multiplikation `Y = XW` mit W von Dimension [d_model × d_ffn]:

```
GPU 1: Y_1 = X × W[:, :d_ffn/2]   (erste Hälfte der Ausgabe)
GPU 2: Y_2 = X × W[:, d_ffn/2:]   (zweite Hälfte der Ausgabe)
```

**Megatron-LM (NVIDIA) als Referenz:**

NVIDIA's Megatron-LM implementiert Tensor-Parallelism für Transformer-Modelle:
- Attention-Heads auf verschiedene GPUs verteilt.
- FFN-Layer auf verschiedene GPUs aufgeteilt.
- Kombinierbar mit Pipeline-Parallelism.

**Wann Tensor-Parallelism:**
- Modelle >30B die auch mit FSDP nicht auf ein Node passen.
- Multi-Node-Setups (mehrere physische Server).
- Pre-Training von sehr großen Modellen (>70B).

**Wann NICHT (für 🧮 typisch):**
- Single-Node (8 GPUs): FSDP ist einfacher und ausreichend für bis ~70B.
- Fine-Tuning: TP ist primär für Pre-Training-Skalen relevant.

**Kommunikations-Overhead:**

TP braucht sehr schnelle GPU-Interconnects (NVLink für intra-Node). Über Nodes hinweg (InfiniBand) ist der Overhead hoch — dann oft Pipeline-Parallelism effizienter.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) | OSS-Referenz-Implementierung |
| 📄 Paper | [Megatron-LM Paper](https://arxiv.org/abs/1909.08053) | Tensor-Parallelism für Transformer |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Tensor-Parallelism und FSDP — was wird aufgeteilt?
- [ ] Wann (welche Modellgröße, welches Setup) lohnt sich Tensor-Parallelism?
- [ ] Warum braucht TP sehr schnelle GPU-Interconnects (NVLink)?
- [ ] In welchem Szenario wird TP typischerweise mit Pipeline-Parallelism kombiniert?
