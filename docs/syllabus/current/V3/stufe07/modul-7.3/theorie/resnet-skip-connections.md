---
title: "ResNet und Skip Connections"
module: "7.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# ResNet und Skip Connections

## Kernidee

ResNets (He et al., 2015) lösten das Problem tiefer Netzwerke mit einer simplen Idee: der Residual Connection. Statt `F(x)` zu lernen, lernt das Netz `F(x) + x` — der Input wird zur Ausgabe addiert. Das erlaubt sehr tiefe Netze (50, 101, 152 Layer) ohne Vanishing-Gradient-Probleme.

## Im Detail

**Das Problem tiefer Netze:** Ohne Skip Connections verschwinden Gradienten in tiefen Netzen auf dem Weg durch viele Schichten (Vanishing Gradient). Das Training stagniert oder wird instabil.

**Die Residual-Idee:** Jeder "Block" lernt nur die Residual-Funktion `F(x) = H(x) - x`, statt direkt die gewünschte Transformation `H(x)`. Die Verbindung `x → x + F(x)` wird als "Shortcut" oder "Skip Connection" bezeichnet.

**Warum das funktioniert:**
- Im schlechtesten Fall kann `F(x) = 0` lernen → Block verhält sich wie Identität → tiefes Netz ist nie schlechter als flaches.
- Gradienten können "direkt" durch Skip Connections fließen, ohne durch viele nichtlineare Transformationen zu verschwinden.
- Tiefe ≥ 50 Layer ohne Degradation möglich.

**Architekturvarianten:**
- **ResNet-50/101/152** — Bottleneck-Blöcke (1×1 → 3×3 → 1×1 Convolutions).
- **ResNeXt** — Grouped Convolutions für mehr Effizienz.
- **EfficientNet** — verwendet Residuals plus systematisches Skalieren.

**Einfluss auf moderne Architekturen:** Skip Connections sind universell — sie erscheinen in Transformers als Residual Connections nach Attention- und FFN-Layern, in UNets für Segmentation, in DenseNets. Das Prinzip ist eines der wirkungsvollsten in Deep Learning.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Deep Residual Learning for Image Recognition (He et al. 2015)](https://arxiv.org/abs/1512.03385) | Original-Paper — gut lesbar |
| 📖 Buch | [d2l.ai — Residual Networks](https://d2l.ai/chapter_convolutional-modern/resnet.html) | Mit Code-Implementierung |

## Teste dein Verständnis

- [ ] Was ist eine Skip Connection, und was wird addiert?
- [ ] Warum verbessert eine Residual Connection das Training tiefer Netze?
- [ ] Wie unterscheidet sich ein Bottleneck-Block von einem normalen Residual-Block?
- [ ] Wo findet sich das Residual-Prinzip außerhalb von CNNs (z.B. in Transformers)?
