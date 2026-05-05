---
title: "DINOv2 — Vision Foundation Model"
module: "7.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# DINOv2 — Vision Foundation Model

## Kernidee

DINOv2 (Meta 2023) ist ein Vision-Foundation-Model, das mithilfe von Self-Supervised Learning — also ohne manuelle Labels — universell verwendbare Bild-Features lernt. Die resultierenden Embeddings funktionieren out-of-the-box für Klassifikation, Segmentation, Depth Estimation und mehr.

## Im Detail

**Self-Supervised Learning für Vision:** DINOv2 lernt, indem es verschiedene augmentierte Versionen desselben Bildes so einbettet, dass sie ähnliche Embeddings haben. Kein einziges manuelles Label ist nötig — die Trainingssignale entstehen durch den Kontrast zwischen Bildausschnitten.

**DINO-Prinzip (Self-Distillation with No Labels):**
- Ein Student-Netz und ein Teacher-Netz (Exponential Moving Average des Student).
- Beide bekommen verschiedene Augmentierungen desselben Bildes.
- Student lernt, die Ausgaben des Teacher vorherzusagen.
- Teacher wird nicht per Backprop trainiert — er ist ein langsames Update des Student.

**DINOv2 Besonderheiten:**
- Trainiert auf 142M kuratierter Bilder (LVD-142M).
- ViT als Backbone (ViT-S, ViT-B, ViT-L, ViT-G).
- Semantisch reichhaltige Features ohne Fine-Tuning nutzbar.

**Was mit DINOv2-Features möglich ist (kein Fine-Tuning):**
- **k-NN-Klassifikation** — einfach Nearest-Neighbor im Embedding-Raum.
- **Semantic Segmentation** — Pixel-Features clustern sich semantisch sauber.
- **Depth Estimation** — Tiefenkarten aus monokularen Bildern.
- **Bild-Retrieval** — "zeige ähnliche Bilder".

**2026-Relevanz:** DINOv2 ist ein universeller Feature-Extraktor für Vision-Tasks. Wenn du kein großes Label-Set hast, aber gute Bild-Features brauchst, ist DINOv2 der erste Anlaufpunkt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [DINOv2 GitHub (Meta)](https://github.com/facebookresearch/dinov2) | OSS, Apache 2.0 |
| 📄 Paper | [DINOv2 Paper (Oquab et al. 2023)](https://arxiv.org/abs/2304.07193) | Mit umfassenden Benchmark-Ergebnissen |
| 🌐 Docs | [Hugging Face — DINOv2](https://huggingface.co/docs/transformers/model_doc/dinov2) | Einfache Integration |

## Teste dein Verständnis

- [ ] Was bedeutet "Self-Supervised Learning" für Vision — welches Signal ersetzt das Label?
- [ ] Was ist der Unterschied zwischen Teacher- und Student-Netz im DINO-Framework?
- [ ] Für welche Aufgaben kann man DINOv2-Features direkt nutzen, ohne Fine-Tuning?
- [ ] Warum ist DINOv2 besonders nützlich, wenn du wenig oder keine gelabelten Daten hast?
