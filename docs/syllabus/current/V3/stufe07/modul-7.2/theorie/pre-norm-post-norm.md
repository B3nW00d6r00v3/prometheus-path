---
title: "Pre-Norm vs. Post-Norm"
module: "7.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Pre-Norm vs. Post-Norm

## Kernidee

Die Position der Layer Normalization im Transformer-Block beeinflusst die Trainings-Stabilität massiv. Post-Norm (Original-Paper) ist instabiler bei tiefen Netzen. Pre-Norm hat sich durchgesetzt. Moderne Modelle nutzen oft RMSNorm statt LayerNorm.

## Im Detail

**Post-Norm (Original 2017):**
```
Sublayer Output = LayerNorm(x + Sublayer(x))
```
LayerNorm nach der Residual Addition. Nachteil: bei tiefen Netzen können Gradienten am Anfang des Trainings explodieren, weil die Residual-Werte noch nicht normalisiert sind.

**Pre-Norm (modern, seit ~2018-2020):**
```
Sublayer Output = x + Sublayer(LayerNorm(x))
```
LayerNorm vor der Sublayer (Attention oder FFN). Vorteil: stabiler bei tiefen Netzen, ermöglicht höhere Learning Rates, schnellere Konvergenz. Nachteil: theoretisch leicht schlechtere finale Performance in einigen Benchmarks (aber stabiler).

**RMSNorm (Root Mean Square Normalization):** Vereinfachte Variante von LayerNorm — ohne Mean-Subtraktion, nur Skalierung durch RMS. Schneller, ähnliche Performance. Llama 2/3/4, Mistral, Qwen — alle nutzen RMSNorm. GPT-NeoX, Gemma ebenfalls.

```python
class RMSNorm(nn.Module):
    def __init__(self, d_model, eps=1e-6):
        super().__init__()
        self.weight = nn.Parameter(torch.ones(d_model))
        self.eps = eps

    def forward(self, x):
        rms = x.pow(2).mean(-1, keepdim=True).add(self.eps).sqrt()
        return x / rms * self.weight
```

**Praktische Konsequenz:** Wenn du einen Transformer from scratch baust, verwende Pre-Norm + RMSNorm. Das ist der 2026-Standard für neue Modelle.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📰 Blog | [Sebastian Raschka — LLM Architecture Comparison](https://magazine.sebastianraschka.com) | Praktische Vergleiche moderner Architekturen |
| 📄 Paper | [RMSNorm (Zhang & Sennrich 2019)](https://arxiv.org/abs/1910.07467) | Original RMSNorm Paper |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Pre-Norm und Post-Norm — wo sitzt die LayerNorm?
- [ ] Warum ist Pre-Norm stabiler beim Training tiefer Netze?
- [ ] Was macht RMSNorm anders als LayerNorm (Tipp: Mean)?
- [ ] Welche Norm-Variante nutzt Llama 3?
