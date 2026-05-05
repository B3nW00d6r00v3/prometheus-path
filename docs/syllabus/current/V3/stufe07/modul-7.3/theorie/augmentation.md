---
title: "Augmentation und Datenaufbereitung"
module: "7.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Augmentation und Datenaufbereitung

## Kernidee

Augmentation vervielfacht die Trainingsdaten synthetisch durch Transformationen: Rotation, Flip, Crop, Farbveränderung. Das Modell lernt dadurch, robust gegenüber natürlichen Variationen zu sein — und es sieht jedes Bild in verschiedenen Variationen, was Overfitting reduziert.

## Im Detail

**Warum Augmentation funktioniert:** Wenn du ein Katzenbild flippst, ist es immer noch eine Katze. Das Modell soll genauso gut funktionieren für gespiegelte Bilder. Indem du augmentierte Versionen als zusätzliche Trainingsdaten behandelst, lernst du diese Invarianz explizit.

**Klassische Augmentierungen:**
- **Geometrisch:** Rotation (±30°), horizontales/vertikales Flip, Random Crop, Resize, Shear.
- **Farblich:** Helligkeit, Kontrast, Sättigung, Hue-Jitter, Graustufen.
- **Rauschen:** Gaussian Noise, Blur.
- **Advanced:** Cutout (zufällige Teile schwärzen), MixUp (zwei Bilder mischen), CutMix.

**Wann welche Augmentierung:**
- **Flip:** fast immer sinnvoll (Natur, Objekte) — außer bei links/rechts-bedeutsamen Daten (Texte, Hände).
- **Starke Farbveränderungen:** nur wenn Farbe nicht entscheidend ist.
- **Rotation > 30°:** nur wenn Orientierung egal ist (Luftaufnahmen, Zellen-Mikroskopie).

**Tools 2026:**
- **Albumentations** (OSS) — Standard-Library, sehr schnell, viele Transformationen.
- **torchvision.transforms** — PyTorch-native, gut integriert.
- **Kornia** — GPU-beschleunigte Augmentierung für Batches.

**Über Augmentation hinaus:**
- **Synthetic Data** — Bilder mit Stable Diffusion generieren, um seltene Klassen aufzufüllen.
- **Test-Time Augmentation (TTA)** — auch bei Inferenz augmentieren und Ergebnisse mitteln.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Library | [Albumentations](https://albumentations.ai) | Standard für professionelle Augmentierung |
| 📖 Buch | [d2l.ai — Image Augmentation](https://d2l.ai/chapter_computer-vision/image-augmentation.html) | Mit Code-Beispielen |

## Teste dein Verständnis

- [ ] Was ist das Ziel von Augmentation — welches Problem löst sie?
- [ ] Nenne drei Augmentierungen, die fast immer sinnvoll sind, und eine, die kontextabhängig ist.
- [ ] Wann macht Test-Time Augmentation (TTA) Sinn?
- [ ] Was ist der Unterschied zwischen geometrischer und farblicher Augmentierung?
