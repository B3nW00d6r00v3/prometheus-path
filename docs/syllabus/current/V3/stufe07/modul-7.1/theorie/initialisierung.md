---
title: "Initialisierung: Xavier, He, Kaiming"
module: "7.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Initialisierung: Xavier, He, Kaiming

## Kernidee

Weights müssen sinnvoll initialisiert werden, sonst lernt das Netz gar nicht. Zu große Initialisierung führt zu Exploding Gradients, zu kleine zu Vanishing Gradients. Xavier ist für Sigmoid/Tanh, He/Kaiming für ReLU, moderne Frameworks übernehmen meist automatisch die richtige Wahl.

## Im Detail

**Warum Initialisierung wichtig ist:** Stell dir vor, alle Weights starten bei 0. Dann berechnen alle Neuronen in einer Schicht exakt dasselbe (symmetrisch) — Backprop aktualisiert sie identisch, sie bleiben ewig gleich. Das Network lernt nicht. Alternativ: alle Weights = 1. Dann explodiert der Output bei mehreren Schichten exponentiell.

**Die Grundregel:** Weights sollten so initialisiert werden, dass die Varianz der Aktivierungen über Schichten konstant bleibt — weder wächst noch schrumpft.

**Xavier / Glorot Initialisierung:** Für Sigmoid und Tanh. Skaliert Weights basierend auf Anzahl der Input- und Output-Neuronen: `W ~ Uniform(-√(6/(fan_in + fan_out)), +√(6/(fan_in + fan_out)))`. Erhält Varianz für linear-ähnliche Aktivierungen.

**He / Kaiming Initialisierung:** Für ReLU. ReLU schneidet die Hälfte aller negativen Werte ab (setzt auf 0) — das halbiert die Varianz. He-Initialisierung kompensiert das: `W ~ Normal(0, √(2/fan_in))`. Faktor 2 wegen der ReLU-Halbierung.

**In der Praxis 2026:** PyTorch's `nn.Linear` verwendet by default Kaiming Uniform, `nn.Conv2d` ebenfalls. Für moderne Transformer-Architekturen gibt es oft spezifische Initialisierungen (GPT-2 z.B. skaliert Weights in Residual-Connections mit `1/√(2 * n_layers)`). Karpathy zeigt diese Details in seinen Lectures.

```python
import torch.nn as nn

# Explizit initialisieren
nn.init.xavier_uniform_(layer.weight)  # Für Sigmoid/Tanh
nn.init.kaiming_uniform_(layer.weight, nonlinearity='relu')  # Für ReLU

# PyTorch macht es automatisch — meist OK
model = nn.Linear(256, 128)  # Kaiming Uniform by default
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyTorch — Weight Initialization](https://pytorch.org/docs/stable/nn.init.html) | Alle Initialisierungs-Methoden |
| 📄 Paper | [Xavier Paper (Glorot & Bengio 2010)](http://proceedings.mlr.press/v9/glorot10a.html) | Original-Paper |
| 📄 Paper | [He Paper (He et al. 2015)](https://arxiv.org/abs/1502.01852) | Kaiming/He Paper |

## Teste dein Verständnis

- [ ] Warum ist Initialisierung mit allen Weights = 0 ein Problem?
- [ ] Welche Initialisierung für ReLU, welche für Sigmoid?
- [ ] Warum braucht He-Initialisierung den Faktor 2 (Tipp: was macht ReLU mit der Varianz)?
- [ ] Kannst du in PyTorch die Initialisierung einer Schicht explizit setzen?
