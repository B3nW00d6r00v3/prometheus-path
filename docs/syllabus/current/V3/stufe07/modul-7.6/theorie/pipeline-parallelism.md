---
title: "Pipeline-Parallelism (Awareness)"
module: "7.6"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Pipeline-Parallelism (Awareness)

## Kernidee

Pipeline-Parallelism weist verschiedenen GPUs verschiedene Schichten (Layer-Gruppen) zu. Daten fließen durch das Modell wie durch eine Pipeline — GPU 1 verarbeitet Layer 1-12, GPU 2 verarbeitet Layer 13-24 usw. Primär für Multi-Node-Setups mit sehr großen Modellen.

## Im Detail

**Grundprinzip:**

```
Eingabe-Batch
    ↓
GPU 1: Layer 1-12 (Embedding + erste 12 Transformer-Layer)
    ↓ Activation Transfer (NVLink/InfiniBand)
GPU 2: Layer 13-24 (Transformer-Layer 13-24)
    ↓ Activation Transfer
GPU 3: Layer 25-36 (letzte Transformer-Layer + LM-Head)
    ↓
Ausgabe
```

**Pipeline-Bubbles (das Hauptproblem):**

Mit naivem Pipeline-Parallelism gibt es "Blasen": GPU 2 wartet, bis GPU 1 fertig ist. GPU 3 wartet auf GPU 2. Während GPU 3 rechnet, sind GPU 1 und 2 idle.

Lösung: **Micro-Batching** — der Batch wird in kleinere Micro-Batches zerlegt, die durch die Pipeline fließen. GPU 1 verarbeitet Micro-Batch 2, während GPU 2 noch Micro-Batch 1 verarbeitet.

**1F1B-Schedule (One Forward, One Backward):**

Megatron-LM nutzt 1F1B-Scheduling: Forward und Backward für verschiedene Micro-Batches werden interleaved. Reduziert Pipeline-Bubbles auf ~1/k (k = Anzahl Pipeline-Stages).

**Wann Pipeline-Parallelism:**
- Multi-Node-Setups (mehrere physische Server mit langsamen Inter-Node-Interconnects).
- Kombiniert mit Tensor-Parallelism für sehr große Modelle (3D-Parallelism).
- Typisch >100B-Modelle, Pre-Training.

**Für 🧮 typischerweise nicht nötig:**
- Single-Node mit 4-8 GPUs: FSDP ist einfacher und ausreichend.
- Fine-Tuning von 7B-30B-Modellen: FSDP oder QLoRA.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) | Referenz für TP + PP kombiniert |
| 📄 Paper | [GPipe: Efficient Training of Giant Neural Networks](https://arxiv.org/abs/1811.06965) | Original Pipeline-Parallelism-Paper |

## Teste dein Verständnis

- [ ] Was ist eine "Pipeline-Bubble" — wann entsteht sie?
- [ ] Was ist Micro-Batching und wie reduziert es Pipeline-Bubbles?
- [ ] Wann wird Pipeline-Parallelism typischerweise zusammen mit Tensor-Parallelism eingesetzt?
- [ ] Warum ist Pipeline-Parallelism für 🧮-typische Fine-Tuning-Szenarien meistens überdimensioniert?
