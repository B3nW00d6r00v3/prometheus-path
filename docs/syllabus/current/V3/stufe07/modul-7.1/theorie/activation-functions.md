---
title: "Activation Functions: ReLU, GELU, SiLU/Swish"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Activation Functions: ReLU, GELU, SiLU/Swish

## Kernidee

Activation Functions sind nicht-lineare Funktionen, die nach jeder Layer angewendet werden. Ohne sie wäre ein tiefes Netz mathematisch äquivalent zu einer einzigen linearen Transformation — es könnte keine komplexen Muster lernen. Die Wahl der Activation beeinflusst Training-Stabilität und Modell-Performance.

## Im Detail

**Warum nicht-linear?** Wenn jede Layer `y = Wx + b` berechnet, und du zwei solche Layers hintereinander kettest, erhältst du wieder eine lineare Funktion: `y2 = W2(W1x + b1) + b2 = (W2·W1)x + (W2·b1 + b2)`. Das ist mathematisch identisch zu einer einzigen Layer. Ohne Nicht-Linearität gibt es keinen Vorteil aus mehreren Schichten.

**Die wichtigsten Aktivierungen 2026:**

| Funktion | Formel | Wo benutzt | Eigenschaften |
|----------|--------|------------|---------------|
| ReLU | `max(0, x)` | CNNs, ältere Netze | Einfach, schnell, Vanishing-Gradient-Problem bei Negativ-Inputs |
| GELU | `x · Φ(x)` | Transformers (BERT, GPT) | Glatt, besser als ReLU in Transformers |
| SiLU/Swish | `x · σ(x)` | Llama-Architektur | Ähnlich GELU, in Llama 2/3/4, Mistral |
| Sigmoid | `1/(1+e^{-x})` | Outputs (Binary Classification) | Output zwischen 0-1, Vanishing Gradients bei extremen Werten |
| Tanh | `(e^x - e^{-x})/(e^x + e^{-x})` | RNNs (historisch) | Output zwischen -1 und 1 |

**Praktische Regeln 2026:**
- CNN-Architektur: ReLU oder Varianten (Leaky ReLU, ELU).
- Transformer-Architektur: GELU (GPT-2, BERT) oder SiLU/Swish (Llama, Mistral).
- Ausgabe-Layer Binary: Sigmoid.
- Ausgabe-Layer Multi-Class: kein Activation (Logits) + Softmax beim Loss.

**Kaiming/He-Initialisierung und ReLU:** Für ReLU muss die Initialisierung angepasst werden (He-Initialisierung), weil ReLU die Hälfte aller Neuronen auf 0 setzt und der Variance-Flow sonst zusammenbricht. Das ist die Verbindung zu Modul-Thema Initialisierung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Referenz | [Papers with Code — Activation Functions](https://paperswithcode.com/methods/category/activation-functions) | Übersicht mit Paper-Links |
| 📖 Docs | [PyTorch — Activation Functions](https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity) | Alle PyTorch-Aktivierungen |

## Teste dein Verständnis

- [ ] Warum braucht ein Neural Network nicht-lineare Aktivierungen?
- [ ] Welche Aktivierung wird in Llama-Architektur verwendet?
- [ ] Was ist das "Dying ReLU"-Problem und wie wird es vermieden?
- [ ] In welcher Situation würdest du Sigmoid statt ReLU verwenden?
