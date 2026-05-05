---
title: "Vision Transformer (ViT)"
module: "7.3"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Vision Transformer (ViT)

## Kernidee

ViT (Dosovitskiy et al., Google 2020) wendet den Standard-Transformer direkt auf Bilder an: das Bild wird in Patches zerlegt (z.B. 16×16 Pixel), jeder Patch wird wie ein Token behandelt, und ein Standard-Transformer-Encoder verarbeitet die Sequenz. Kein Inductive Bias für lokale Strukturen mehr — alles wird global gelernt.

## Im Detail

**Das Patch-Konzept:** Ein 224×224-Bild wird in 14×14 = 196 Patches à 16×16 Pixel zerlegt. Jeder Patch wird linear projiziert zu einem "Patch-Embedding" (Vektor). Diese 196 Vektoren + ein CLS-Token bilden die Eingabe-Sequenz für den Transformer.

**Positional Embeddings:** Da Transformer keine Position kennen, werden gelernte oder sinusoidale Positions-Embeddings addiert — analog zu Text-Transformers.

**Attention über alle Patches:** Self-Attention ermöglicht, dass jeder Patch auf jeden anderen schaut. Im Gegensatz zu CNNs hat ViT globalen Receptive Field schon in frühen Layern.

**Stärken von ViT:**
- Bei sehr großen Datensätzen und Pre-Training übertrifft ViT CNNs signifikant.
- Kein Inductive Bias → lernt flexiblere Repräsentationen.
- Skaliert besser mit mehr Daten und mehr Parametern.

**Schwächen:**
- Braucht **viele Daten** für gute Performance (schlechter als CNNs bei kleinen Datensätzen ohne Pre-Training).
- Quadratische Komplexität in der Sequenzlänge (teuer für hochauflösende Bilder).

**Varianten 2026:**
- **DeiT** (Facebook) — ViT mit Distillation, trainierbar ohne JFT-300M.
- **Swin Transformer** — hierarchisches Sliding-Window-Attention, effizienter für hochauflösende Bilder.
- **ViT-CLIP** — ViT-Backbone in CLIP trainiert.

**2026-Realität:** ViT als Backbone dominiert in Foundation Models (SAM, DINOv2, CLIP). Für klassische Klassifikation auf kleinen Datasets: Transfer Learning von ViT-Checkpoints statt Training from scratch.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [An Image is Worth 16x16 Words (Dosovitskiy et al. 2020)](https://arxiv.org/abs/2010.11929) | Original ViT-Paper |
| 🌐 Docs | [Hugging Face — ViT Tutorial](https://huggingface.co/docs/transformers/model_doc/vit) | Praxis-Implementierung |
| 📖 Buch | [d2l.ai — Transformers for Vision](https://d2l.ai/chapter_attention-mechanisms-and-transformers/vision-transformer.html) | Mit Code |

## Teste dein Verständnis

- [ ] Wie wird ein Bild für ViT vorbereitet — was ist ein Patch?
- [ ] Was ist der CLS-Token, und wie wird er für Klassifikation genutzt?
- [ ] Warum braucht ViT mehr Daten als ein CNN für vergleichbare Performance?
- [ ] Was ist der Hauptunterschied zwischen lokalem Receptive Field (CNN) und globalem Attention (ViT)?
