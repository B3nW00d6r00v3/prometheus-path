---
title: "Regularisierung: Dropout, Weight Decay, Batch Normalization, Layer Normalization"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Regularisierung: Dropout, Weight Decay, Batch Normalization, Layer Normalization

## Kernidee

Regularisierung verhindert Overfitting — dass das Modell Trainings-Daten auswendig lernt, statt echte Muster zu verstehen. Vier Techniken dominieren 2026: Dropout (zufälliges Abschalten), Weight Decay (Weights klein halten), Batch Normalization (CNNs), Layer Normalization (Transformers).

## Im Detail

**Dropout:** Während des Trainings werden zufällig Neuronen (mit Wahrscheinlichkeit p) auf 0 gesetzt. Das zwingt das Netz, redundante Repräsentationen zu lernen — kein einzelnes Neuron kann kritisch werden. Bei Inferenz wird Dropout deaktiviert und alle Neuronen werden genutzt (mit Skalierung um 1/(1-p)). Typische Dropout-Rate: 0.1-0.5 je nach Layer und Modell.

```python
nn.Dropout(p=0.1)  # 10% der Aktivierungen auf 0 setzen
```

**Weight Decay (L2-Regularisierung):** Straft große Weights. Mathematisch: zum Loss wird `λ · Σ W²` addiert, was dazu führt, dass Weights klein gehalten werden. Verhindert, dass das Netz zu sehr auf einzelne Features setzt. In AdamW ist Weight Decay korrekt entkoppelt (daher "W" in AdamW). Typisch: `weight_decay=0.01`.

**Batch Normalization (BatchNorm):** Normalisiert Aktivierungen über den Batch-Dimension nach jeder Layer. Stabilisiert Training (keine Vanishing/Exploding Gradients), erlaubt höhere Learning Rates. Nachteil: Performance hängt von Batch-Größe ab (nicht gut für kleine Batches). Standard in CNNs.

**Layer Normalization (LayerNorm):** Normalisiert über die Feature-Dimension (pro Sample, nicht über den Batch). Unabhängig von Batch-Größe — funktioniert auch für Batch-Size=1. Standard in Transformers. Moderne Transformers nutzen oft RMSNorm (einfachere Variante von LayerNorm ohne Mean-Subtraktion).

**Wann was:**
- CNN-Architektur: BatchNorm nach Convolution-Layers.
- Transformer-Architektur: LayerNorm (oder RMSNorm) — vor oder nach Attention/FFN (Pre-Norm ist moderner Standard).
- Überall: Dropout in Dense-Layers (bei Transformers in Attention-Weights).
- Immer: Weight Decay in AdamW.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [d2l.ai — Regularization](https://d2l.ai/chapter_multilayer-perceptrons/weight-decay.html) | Kapitel 4, mit Code |
| 📖 Buch | [d2l.ai — Batch Normalization](https://d2l.ai/chapter_convolutional-modern/batch-norm.html) | Kapitel 8 |
| 📖 Docs | [PyTorch — Normalization Layers](https://pytorch.org/docs/stable/nn.html#normalization-layers) | BatchNorm, LayerNorm, RMSNorm |

## Teste dein Verständnis

- [ ] Was passiert beim Dropout während Inferenz — und warum?
- [ ] Warum ist LayerNorm in Transformers besser geeignet als BatchNorm?
- [ ] Was ist der Unterschied zwischen L2-Regularisierung und Weight Decay in Adam vs. AdamW?
- [ ] Kannst du erklären, warum Pre-Norm (LayerNorm vor Attention) stabiler ist als Post-Norm?
