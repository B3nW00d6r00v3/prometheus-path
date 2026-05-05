---
title: "Optimierer: SGD, Adam, AdamW, Lion"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Optimierer: SGD, Adam, AdamW, Lion

## Kernidee

Der Optimierer bestimmt, wie die berechneten Gradienten in Weight-Updates umgewandelt werden. SGD ist der Klassiker, Adam der Standard, AdamW der Default in modernen Trainings. Die Wahl des Optimierers beeinflusst Trainings-Geschwindigkeit und oft auch die finale Modell-Qualität.

## Im Detail

**Stochastic Gradient Descent (SGD):** Der Klassiker. Weight-Update: `W = W - lr · ∂Loss/∂W`. "Stochastisch" weil nicht der gesamte Datensatz für jeden Update genutzt wird, sondern ein Mini-Batch. Einfach und stabil, aber langsamer als adaptive Methoden. Mit Momentum (häufig) konvergiert es besser.

**Adam (Adaptive Moment Estimation):** Adaptive Learning Rate pro Weight. Adam tracked zwei Moving Averages:
- `m` (Momentum, 1. Moment): gewichteter Durchschnitt der Gradienten.
- `v` (Velocity, 2. Moment): gewichteter Durchschnitt der quadrierten Gradienten.

Update: `W = W - lr · m̂ / (√v̂ + ε)`. Weights mit konsistenten Gradienten bekommen größere Updates, unsichere kleinere. Konvergiert schneller als SGD. Hyperparameter: β1=0.9, β2=0.999, ε=1e-8 (Defaults fast immer gut).

**AdamW:** Adam + Weight Decay korrekt entkoppelt. Problem mit Adam: L2-Regularisierung und Weight Decay sind in Adam nicht äquivalent (wegen adaptiver Learning Rate). AdamW trennt sie sauber. Praktisch: `AdamW` statt `Adam` ist in modernen Trainings der Default — bei nahezu identischer Syntax.

**Lion (2023):** Neuerer Vorschlag (Google Brain). Günstiger als Adam (nur 1. Moment gespeichert), manchmal bessere Performance. 2026: in der Praxis noch Adam/AdamW dominant, Lion in neueren Projekten getestet.

**Praktische Wahl 2026:**
- Default für LLM-Training: AdamW mit `lr=1e-4`, `weight_decay=0.01`.
- CNN-Experimente: SGD + Momentum oft konkurrenzfähig zu Adam.
- Learning Rate Scheduler immer hinzufügen (Cosine Annealing oder Warmup + Decay).

```python
# Standard-Setup 2026
optimizer = torch.optim.AdamW(
    model.parameters(),
    lr=1e-4,
    weight_decay=0.01,
    betas=(0.9, 0.999)
)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [d2l.ai — Optimization Algorithms](https://d2l.ai/chapter_optimization/) | Kapitel 12, mit Visualisierungen |
| 📰 Blog | [Sebastian Raschka — Modern Optimizers](https://magazine.sebastianraschka.com) | Praktische Einordnung |
| 📄 Paper | [Adam Paper (Kingma & Ba 2014)](https://arxiv.org/abs/1412.6980) | Original-Paper |
| 📄 Paper | [Lion Paper (Chen et al. 2023)](https://arxiv.org/abs/2302.06675) | Neuer Optimierer |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen SGD und Adam konzeptionell?
- [ ] Warum ist AdamW besser als Adam für moderne LLM-Trainings?
- [ ] Was macht ein Learning Rate Scheduler und warum ist er wichtig?
- [ ] Welchen Optimierer würdest du für ein neues LLM-Fine-Tuning wählen und warum?
