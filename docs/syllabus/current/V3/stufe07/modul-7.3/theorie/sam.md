---
title: "SAM und SAM2 — Segment Anything"
module: "7.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# SAM und SAM2 — Segment Anything

## Kernidee

SAM (Segment Anything Model, Meta 2023) ist ein Foundation Model für Bild-Segmentation. Mit einem einfachen Prompt — ein Punkt, eine Box oder ein Text-Satz — segmentiert SAM jedes beliebige Objekt in einem Bild. SAM2 (2024) erweitert das auf Video-Segmentation.

## Im Detail

**Was Segmentation ist:** Object Detection gibt Bounding Boxes. Segmentation gibt Pixel-genaue Masken — genau welche Pixel gehören zu einem Objekt.

**SAM-Architektur:**
- **Image Encoder** (ViT-basiert) — berechnet Bild-Embeddings einmal.
- **Prompt Encoder** — kodiert verschiedene Prompt-Typen (Punkte, Boxen, Masken, Text).
- **Mask Decoder** — kombiniert beides und erzeugt segmentierte Masken.

**Warum SAM besonders ist:**
- **Zero-Shot** — kein Training auf eigenen Daten nötig.
- **Interaktiv** — der Nutzer zeigt mit einem Punkt auf das Objekt, SAM segmentiert es.
- **Trainiert auf 1 Milliarde Masken** — das ist das Fundament für Generalisierung.

**SAM2 (2024) — Video-Segmentation:**
- Objekte über Frames hinweg tracken und segmentieren.
- Echtzeit-fähig für Video-Streams.
- Nutzt Memory-Mechanismus: "erinnert" sich an segmentiertes Objekt aus vorherigen Frames.

**Use-Cases:**
- **Medizin** — Organ- und Läsions-Segmentation aus CT/MRT.
- **Robotik** — Objekte für Greif-Planung segmentieren.
- **Industrie** — Defekte in Produkt-Fotos segmentieren.
- **Creative Tools** — Hintergrund entfernen, Objekte freistellen.
- **Annotation** — Semi-automatisches Labeling für eigene Trainingsdaten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [SAM2 GitHub (Meta)](https://github.com/facebookresearch/sam2) | OSS, MIT-Lizenz |
| 🌐 Demo | [Segment Anything (Meta)](https://segment-anything.com) | Interaktive Web-Demo |
| 📄 Paper | [SAM Paper (Kirillov et al. 2023)](https://arxiv.org/abs/2304.02643) | Original-Paper |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Bounding Box (Detection) und Pixel-Maske (Segmentation)?
- [ ] Wie prompt man SAM — welche Prompt-Typen gibt es?
- [ ] Was ist das Besondere an SAM2 gegenüber SAM?
- [ ] Für welche Use-Cases ist SAM besser geeignet als ein klassisches Segmentation-Modell?
