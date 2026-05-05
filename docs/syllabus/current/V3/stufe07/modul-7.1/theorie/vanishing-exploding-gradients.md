---
title: "Vanishing/Exploding Gradients"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Vanishing/Exploding Gradients

## Kernidee

Bei tiefen Netzen können Gradienten beim Rückwärtsdurchlauf verschwinden (werden winzig) oder explodieren (werden riesig). Verschwinden bedeutet: frühe Schichten lernen nicht. Explodieren bedeutet: Training divergiert. Vier Lösungen haben sich durchgesetzt: bessere Aktivierungen, Skip Connections, LayerNorm, gute Initialisierung.

## Im Detail

**Warum passiert das?** Backprop multipliziert Gradienten über alle Schichten (Chain Rule). Wenn jeder Faktor <1 ist (z.B. Sigmoid-Ableitung maximal 0.25), schrumpfen Gradienten exponentiell mit der Tiefe. Bei 20 Schichten: 0.25^20 ≈ 0. Wenn jeder Faktor >1, wachsen sie exponentiell.

**Das Sigmoid-Problem:** Sigmoid-Ableitung: `σ'(x) = σ(x)·(1 - σ(x))`, maximal 0.25 bei x=0. Das ist der Hauptgrund, warum tiefe Netze mit Sigmoid schlecht trainieren — und warum ReLU 2010-2012 ein Durchbruch war.

**ReLU und seine Probleme:** ReLU (max(0,x)) hat Ableitung 1 für positive Inputs, 0 für negative. Kein Vanishing für positive Werte — aber "Dying ReLU": Neuronen, die immer 0 ausgeben, lernen nie mehr. Gelöst durch Leaky ReLU oder GELU.

**Skip Connections (ResNets):** Die eleganteste Lösung für sehr tiefe Netze. Ein Residual Block lernt nicht `f(x)`, sondern `f(x) + x` — der direkte Pfad von Input zu Output. Gradienten können direkt durch den Skip-Pfad fließen, ohne durch die Layers multipliziert zu werden. Ermöglicht Netze mit 100+ Schichten.

```python
# Residual Block Konzept
class ResidualBlock(nn.Module):
    def forward(self, x):
        return self.layers(x) + x  # Skip Connection: + x
```

**Layer Normalization:** Normalisiert Aktivierungen auf einheitliche Skala. Verhindert, dass einzelne Schichten Gradienten dominieren. In Transformers Pre-Norm-Strategie (LayerNorm vor Attention/FFN) ist stabiler als Post-Norm.

**Gradient Clipping:** Pragmatische Lösung gegen Exploding Gradients. Wenn der Gradient-Norm einen Schwellenwert überschreitet, wird er skaliert. Standard in LLM-Training: `max_grad_norm=1.0`.

```python
# Standard in LLM-Training
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
optimizer.step()
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📰 Blog | [Karpathy — A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/) | Praktische Diagnose-Tipps |
| 📄 Paper | [ResNet Paper (He et al. 2015)](https://arxiv.org/abs/1512.03385) | Original Skip Connections |
| 📺 Video | [Karpathy Lecture 4 — Activations & Gradients (makemore)](https://www.youtube.com/watch?v=P6sfmUTpUmc) | Gradient-Flow-Diagnose live |

## Teste dein Verständnis

- [ ] Warum verschwinden Gradienten bei tiefen Sigmoid-Netzen mathematisch?
- [ ] Was ist eine Skip Connection und warum löst sie das Vanishing-Gradient-Problem?
- [ ] Wann würdest du Gradient Clipping einsetzen?
- [ ] Wie kannst du in PyTorch prüfen, ob dein Training an Vanishing Gradients leidet (Tipp: Gradient Norms loggen)?
