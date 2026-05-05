---
title: "ZeRO Stages 1/2/3"
module: "7.6"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# ZeRO Stages 1/2/3

## Kernidee

ZeRO (Zero Redundancy Optimizer) ist Microsoft DeepSpeed's Ansatz für Distributed Training: in drei Stufen werden Optimizer-State, Gradienten und Modell-Parameter progressiv über GPUs verteilt (gesharded). ZeRO-3 ist äquivalent zu PyTorch FSDP.

## Im Detail

**Das Redundanz-Problem ohne ZeRO:**

Bei DDP: jede GPU hält **vollständig** Weights + Gradienten + Optimizer-State. Das ist 3-4× Redundanz — jede GPU hat alles, aber nur 1/N der Arbeit.

**ZeRO-1: Optimizer-State Sharding**

```
Weights: alle GPUs haben alle Weights (wie DDP)
Gradienten: alle GPUs haben alle Gradienten (wie DDP)
Optimizer-State: geshardet — jede GPU hat nur 1/N des Adam-States
```

- Speicher-Einsparung: ~4× bei Adam (Adam hat 2× Weights an State).
- Kein Kommunikations-Overhead extra.
- Einfach zu implementieren.

**ZeRO-2: + Gradienten Sharding**

```
Weights: alle GPUs haben alle Weights
Gradienten: geshardet — jede GPU hat nur 1/N
Optimizer-State: geshardet
```

- Speicher-Einsparung: ~8× bei Adam.
- Leichter Kommunikations-Overhead beim Sammeln der Gradienten.

**ZeRO-3: + Parameter Sharding (= FSDP)**

```
Weights: geshardet — jede GPU hat nur 1/N
Gradienten: geshardet
Optimizer-State: geshardet
```

- Speicher-Einsparung: ~N× (alles gesharded).
- Höchster Kommunikations-Overhead.
- Praktisch identisch mit PyTorch FSDP.

**ZeRO-Infinity (DeepSpeed-Erweiterung):**

Über GPU-Speicher hinaus: CPU-Offloading von Optimizer-State und Parametern auf CPU-RAM. Erlaubt sehr große Modelle auf wenigen GPUs auf Kosten von Rechenzeit.

**Vergleich:**

| Stage | Weights | Gradienten | Optimizer-State | Kommunikation |
|-------|---------|-----------|----------------|---------------|
| DDP | Vollständig | Vollständig | Vollständig | AllReduce |
| ZeRO-1 | Vollständig | Vollständig | Gesharded | + Gather |
| ZeRO-2 | Vollständig | Gesharded | Gesharded | + Scatter |
| ZeRO-3 | Gesharded | Gesharded | Gesharded | + AllGather |

**PyTorch FSDP vs. DeepSpeed ZeRO-3:**
- Beide sind ZeRO-3-äquivalent.
- PyTorch FSDP: native, keine Extra-Dependency.
- DeepSpeed: mehr Features (Quantization, CPU-Offloading, Infinity).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [ZeRO Paper (Rajbhandari et al. 2020)](https://arxiv.org/abs/1910.02054) | Original ZeRO-Paper |
| 🌐 Docs | [DeepSpeed ZeRO Tutorial](https://www.deepspeed.ai/tutorials/zero/) | Offizielle Docs |
| 🌐 Docs | [Hugging Face — DeepSpeed Integration](https://huggingface.co/docs/transformers/deepspeed) | Integration in Transformers |

## Teste dein Verständnis

- [ ] Was ist das "Redundanz-Problem" bei DDP, das ZeRO löst?
- [ ] Was wird in ZeRO-1 gesharded — was bleibt redundant?
- [ ] Was ist der Unterschied zwischen ZeRO-2 und ZeRO-3?
- [ ] Warum ist ZeRO-3 äquivalent zu PyTorch FSDP?
