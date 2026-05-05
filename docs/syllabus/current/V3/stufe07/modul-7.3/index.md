---
title: "Modul 7.3: Computer Vision"
module: "7.3"
type: index
fast_track: false
effort: "🔧 8-15h · 🧮 30-50h · 💼 3-5h"
stability: green
---

# Modul 7.3: Computer Vision

Computer Vision ist 2026 nicht mehr nur CNN-basiert — Vision Transformers (ViT) und **Vision Foundation Models** (SAM, DINOv2) haben das Feld neu definiert. Plus: moderne LLMs (Claude, GPT-5) haben native Vision-Fähigkeiten, die für viele praktische Aufgaben klassische CV ersetzen. Dieses Modul lehrt sowohl die Foundations (CNN, ViT) als auch wann du klassische CV brauchst und wann ein Vision-LLM-Aufruf reicht.

**Aufwand:** 🔧 8-15h · 🧮 30-50h · 💼 3-5h  
**Voraussetzungen:** Modul 7.1

## Lernziel

**🧮:** Du verstehst CNNs (Convolutions, Pooling, klassische Architekturen) und Vision Transformers. Du hast ein Bild-Klassifikations-Modell selbst gebaut und mit Transfer Learning fine-tuned.

**🔧:** Du kennst die wichtigsten CV-Architekturen, kannst YOLO/SAM nutzen und weißt, wann Vision-LLMs die bessere Wahl sind.

**💼:** Du kennst die strategischen Optionen — Custom-CV vs. Vision-LLMs vs. Off-the-Shelf-APIs.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [CNN-Grundlagen](theorie/cnn-grundlagen.md) | ✅ | 20min |
| 2 | [ResNet und Skip Connections](theorie/resnet-skip-connections.md) | ✅ | 15min |
| 3 | [Vision Transformer (ViT)](theorie/vision-transformer.md) | ⏭️ | 20min |
| 4 | [CLIP — Text und Bild im selben Embedding-Raum](theorie/clip.md) | ⏭️ | 15min |
| 5 | [YOLO — Object Detection](theorie/yolo.md) | ⏭️ | 15min |
| 6 | [SAM und SAM2 — Segment Anything](theorie/sam.md) | ⏭️ | 15min |
| 7 | [DINOv2 — Vision Foundation Model](theorie/dinov2.md) | ⏭️ | 15min |
| 8 | [Stable Diffusion und Diffusion Models](theorie/diffusion-models.md) | ⏭️ | 20min |
| 9 | [Transfer Learning für Vision](theorie/transfer-learning-vision.md) | ✅ | 15min |
| 10 | [Vision-LLMs vs. klassische CV](theorie/vision-llms-vs-klassische-cv.md) | ✅ | 15min |
| 11 | [Augmentation und Datenaufbereitung](theorie/augmentation.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Tiefe):**
- Eigenes Image-Classification-Modell mit PyTorch von Grund auf, dann mit Transfer Learning (ResNet als Backbone), dann mit ViT.
- Mindestens drei Modelle vergleichen auf einem eigenen oder kuratierten Datensatz (z.B. CIFAR-10, eigene Foto-Sammlung).
- Trainings-Logs, Confusion Matrices, Misclassified-Examples-Analyse.
- Bonus: SAM2 oder DINOv2 für ein eigenes Bild ausprobieren.
- Im Portfolio: `stufe-7_deep-learning/7-3-cv-vergleich/`.

**Für 🔧:**
- YOLO oder SAM für einen praktischen Use-Case nutzen (z.B. Object Detection auf eigenen Fotos, Segmentation für eigenes Projekt).
- Vergleich: dieselbe Aufgabe mit Vision-LLM (Claude oder GPT-5 mit Vision) lösen — was ist besser, was schneller, was günstiger?
- Im Portfolio: `stufe-7_deep-learning/7-3-cv-praxis/`.

**Für 💼:**
- Recherche: drei reale Use-Cases aus deinem Bereich, in denen CV relevant ist (z.B. Qualitätskontrolle, Dokumenten-Verarbeitung, Sicherheits-Monitoring).
- Build-vs-Buy-Analyse für jeden: Custom-Modell vs. Off-the-Shelf-API vs. Vision-LLM.
- 1-Pager im Portfolio.

## Mehrwert-Mini-Projekte

- **Eigene Foto-Tagger** mit Vision-LLM oder lokalem CLIP-Modell — alle deine Fotos automatisch beschreiben/kategorisieren.
- **Personal Document Scanner** mit OCR (Tesseract OSS oder Vision-LLM) für eigene Belege/Dokumente.

## Open-Source-Pfad

- PyTorch + torchvision + Hugging Face Transformers (alles OSS).
- SAM2, DINOv2, OpenCLIP, Ultralytics YOLO — alle OSS und production-ready.
- Stable Diffusion lokal via [ComfyUI](https://www.comfy.org) oder [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui).
- [Roboflow Universe](https://universe.roboflow.com) für viele Pre-trained Models.

## Outcome-Check

**🧮:**
- [ ] Mindestens drei CV-Modelle implementiert/fine-tuned (CNN, Transfer Learning, ViT)
- [ ] Trainings-Logs und Vergleichs-Analyse
- [ ] SAM oder DINOv2 ausprobiert

**🔧:**
- [ ] YOLO oder SAM in eigenem Use-Case eingesetzt
- [ ] Vergleich CV-Modell vs. Vision-LLM dokumentiert

**💼:**
- [ ] Build-vs-Buy-Analyse für 3 reale Use-Cases
