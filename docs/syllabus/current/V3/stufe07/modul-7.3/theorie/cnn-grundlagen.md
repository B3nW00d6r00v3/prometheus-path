---
title: "CNN-Grundlagen"
module: "7.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# CNN-Grundlagen

## Kernidee

Convolutional Neural Networks extrahieren lokale Features aus Bildern durch Faltungs-Operationen (Convolutions). Ein Convolution-Layer gleitet ein kleines Filter-Fenster über das Bild und erkennt Muster wie Kanten, Texturen oder Formen — unabhängig davon, wo im Bild sie auftreten.

## Im Detail

**Convolution-Layer:** Ein Filter (z.B. 3×3 Pixel) gleitet über das Bild, berechnet an jeder Position das Skalarprodukt (Filter × Bildausschnitt). Mehrere Filter lernen verschiedene Features. Das Ergebnis heißt Feature Map.

**Pooling:** Reduziert die räumliche Auflösung (z.B. Max Pooling nimmt den größten Wert in jedem 2×2-Fenster). Macht das Netz invariant gegenüber kleinen Verschiebungen und reduziert Rechenaufwand.

**Dense Layer für Classification:** Nach mehreren Conv+Pooling-Blöcken wird die Feature Map "geflacht" und durch klassische Dense Layers zur Klassifikation geschickt.

**Klassische Architekturen:**
- **VGG (2014)** — einfach, tief, 3×3-Filter. Klassiker, aber speicherintensiv.
- **ResNet (2015)** — Skip Connections lösen Vanishing Gradients, erlaubt sehr tiefe Netze (50, 101, 152 Layer). Bis heute Backbone vieler Systeme.
- **EfficientNet (2019)** — skaliert Width, Depth und Resolution gleichmäßig. State-of-the-Art bei gutem Cost/Performance-Trade-off.
- **2026:** Für die meisten Vision-Aufgaben ist Transfer Learning von vortrainierten Modellen der Standard — Training von Grund auf nur für sehr spezielle Domänen.

**Warum CNNs für Bilder funktionieren:**
1. **Lokale Konnektivität** — Pixel interagieren meist mit Nachbarn, nicht mit entfernten Pixeln.
2. **Gewichts-Sharing** — ein Filter wird über das gesamte Bild angewendet. Das spart Parameter massiv.
3. **Translationsäquivarianz** — der Filter erkennt ein Feature überall im Bild.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [d2l.ai — Convolutional Neural Networks](https://d2l.ai/chapter_convolutional-neural-networks/) | Interaktives Lehrbuch mit Code |
| 🌐 Kurs | [Stanford CS231n](https://cs231n.github.io) | Klassiker, sehr gute Visualisierungen |
| 📺 Video | [3Blue1Brown — But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) | Intuitive visuelle Erklärung |

## Teste dein Verständnis

- [ ] Was berechnet ein Convolution-Filter an einer Position im Bild?
- [ ] Warum teilen sich alle Positionen eines Filters dieselben Gewichte — was ist der Vorteil?
- [ ] Was macht Pooling, und warum hilft es bei Translations-Invarianz?
- [ ] Was ist der Unterschied zwischen VGG und ResNet architektonisch?
