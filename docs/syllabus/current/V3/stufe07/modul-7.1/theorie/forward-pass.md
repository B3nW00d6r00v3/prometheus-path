---
title: "Forward Pass: Inferenz"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Forward Pass: Inferenz

## Kernidee

Der Forward Pass ist die Richtung, in der Daten durch das Netz fließen — von Input zu Output. Jede Schicht ist mathematisch eine Matrix-Multiplikation plus eine Activation Function. Am Ende steht eine Vorhersage.

## Im Detail

Für eine einzelne Dense-Schicht gilt: `z = W · x + b`, dann `a = activation(z)`. Dabei ist `W` die Weight-Matrix (Form: [Ausgabe-Neuronen × Eingabe-Neuronen]), `x` der Input-Vektor, `b` der Bias-Vektor, und `a` die Ausgabe der Schicht.

**Mit Lineare Algebra:** Ein Forward Pass durch ein ganzes Netz ist eine Kette von Matrix-Multiplikationen und element-weisen Aktivierungen. Bei einem Batch von N Beispielen werden alle N gleichzeitig durch eine Matrix-Multiplikation geschickt — das ist der Kern der GPU-Effizienz (GPUs sind für genau diese parallelen Matrix-Multiplikationen optimiert).

**Konkret in PyTorch:**

```python
import torch
import torch.nn as nn

# Einfaches 2-Layer-Netz
model = nn.Sequential(
    nn.Linear(784, 256),  # Input: 784 Features (MNIST), Hidden: 256
    nn.ReLU(),
    nn.Linear(256, 10),   # Output: 10 Klassen
)

x = torch.randn(32, 784)  # Batch von 32 Bildern
output = model(x)          # Forward Pass — das ist alles
print(output.shape)        # → torch.Size([32, 10])
```

**Was beim Forward Pass passiert:**
1. Input (z.B. Pixel-Werte eines Bildes) geht in Layer 1.
2. Layer 1 berechnet `z = W1 · x + b1`, dann `a1 = ReLU(z)`.
3. Layer 2 berechnet `z = W2 · a1 + b2` — das sind die rohen Klassen-Scores (Logits).
4. Für Classification: `softmax(Logits)` gibt Wahrscheinlichkeiten pro Klasse.

Während des Trainings merkt sich PyTorch (via Autograd) alle Zwischenergebnisse des Forward Pass — die braucht es für den Backward Pass (Backpropagation).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [d2l.ai — Multilayer Perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/index.html) | Kapitel 4, mit Code-Beispielen |
| 📖 Docs | [PyTorch — nn.Module](https://pytorch.org/docs/stable/generated/torch.nn.Module.html) | Offizielle Docs |

## Teste dein Verständnis

- [ ] Was ist die Form der Weight-Matrix für einen Layer mit 100 Inputs und 50 Outputs?
- [ ] Warum sind GPUs beim Forward Pass so viel schneller als CPUs?
- [ ] Was sind "Logits" — warum heißen sie so und warum kein Softmax im letzten Layer?
- [ ] Kannst du einen 2-Layer Forward Pass von Hand für kleine Zahlen durchrechnen?
