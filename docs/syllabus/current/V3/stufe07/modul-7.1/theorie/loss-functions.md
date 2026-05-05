---
title: "Loss Functions"
module: "7.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Loss Functions

## Kernidee

Die Loss Function misst, wie falsch die Vorhersage des Modells ist. Sie ist der Kompass des Trainings — der Gradient zeigt, in welche Richtung die Weights angepasst werden müssen, um den Loss zu senken. Die Wahl der richtigen Loss Function hängt direkt vom Problem ab.

## Im Detail

**Cross-Entropy Loss (für Klassifikation):** Die häufigste Loss Function für Classification. Misst den Unterschied zwischen der vorhergesagten Wahrscheinlichkeitsverteilung und der wahren (One-Hot-) Verteilung. Niedrig, wenn das Modell der richtigen Klasse hohe Wahrscheinlichkeit zuweist. In PyTorch: `nn.CrossEntropyLoss()` kombiniert `softmax + log + negative log likelihood` in einem Schritt.

```python
# Classification (Multi-Class)
criterion = nn.CrossEntropyLoss()
loss = criterion(logits, targets)  # logits: [Batch, Klassen], targets: [Batch] (Long-Tensor)

# Binary Classification
criterion = nn.BCEWithLogitsLoss()  # numerisch stabiler als BCE + Sigmoid
loss = criterion(logits, targets.float())
```

**Mean Squared Error (MSE, für Regression):** Misst den durchschnittlichen quadratischen Abstand zwischen Vorhersage und wahrem Wert. `MSE = (1/N) · Σ(y_pred - y_true)²`. Quadrat macht große Fehler stärker bestrafen als kleine.

**Negative Log-Likelihood (NLL) und Cross-Entropy:** In Language Models ist Cross-Entropy die Standard-Loss Function — das Modell lernt, das nächste Token zu vorherzusagen. Je niedriger der Loss, desto besser die Vorhersage. Perplexity = `exp(Cross-Entropy-Loss)` — intuitiver: niedrige Perplexity bedeutet, das Modell ist "weniger überrascht" vom nächsten Token.

**Custom Losses:** Für spezielle Aufgaben gibt es Custom Losses. Beispiele:
- Huber Loss: robuster als MSE gegen Ausreißer.
- Focal Loss: für stark unbalancierte Klassen (z.B. Objekt-Detection).
- Contrastive Loss: für Embedding-Training (ähnliche Paare nah, unähnliche fern).
- GRPO Reward Loss: in Reasoning-Modell-Training (Modul 7.5).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyTorch — Loss Functions](https://pytorch.org/docs/stable/nn.html#loss-functions) | Alle verfügbaren Loss Functions |
| 📖 Buch | [d2l.ai — Loss Functions](https://d2l.ai/chapter_linear-regression/) | Kapitel 3, mit Erklärungen |

## Teste dein Verständnis

- [ ] Welche Loss Function für Binary Classification, welche für Multi-Class?
- [ ] Was ist Perplexity und warum ist sie für Language Models nützlich?
- [ ] Warum ist `BCEWithLogitsLoss` besser als `BCELoss + Sigmoid` getrennt?
- [ ] In welchem Fall würde ein MSE-Loss zu schlechten Ergebnissen führen (Tipp: Ausreißer)?
