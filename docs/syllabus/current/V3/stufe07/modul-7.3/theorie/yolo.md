---
title: "YOLO — Object Detection"
module: "7.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# YOLO — Object Detection

## Kernidee

YOLO (You Only Look Once) ist das Standard-Framework für Real-Time-Object-Detection. Im Gegensatz zu zweistufigen Detektoren (erst Region Proposals, dann Klassifikation) macht YOLO alles in einem einzigen Netz-Durchlauf — daher "Only Once". 2026 ist YOLOv11+ Stand der Praxis, bereitgestellt über Ultralytics.

## Im Detail

**Was Object Detection tut:** Statt nur "Was ist auf dem Bild?" zu sagen, gibt Object Detection "Was ist wo?" — mit Bounding Boxes (Rechtecke um jedes Objekt) und Klassen-Labels.

**YOLO-Prinzip:** Das Bild wird in ein Gitter (z.B. 13×13) unterteilt. Jede Gitter-Zelle ist verantwortlich für die Detektion von Objekten, deren Mittelpunkt in diese Zelle fällt. Jede Zelle gibt direkt Bounding-Box-Koordinaten, Konfidenz und Klassen-Wahrscheinlichkeiten aus.

**Stärken:**
- **Sehr schnell** — taugt für Video (30+ FPS auf modernem GPU).
- **Einfach zu verwenden** — Ultralytics-API ist gut dokumentiert.
- **YOLO-World** (2024) — "Open Vocabulary" YOLO: erkennt auch Objekte, für die es nicht trainiert wurde, durch Text-Prompts.

**Use-Cases 2026:**
- Sicherheits-Monitoring (Personen-Erkennung)
- Industrie-Qualitätskontrolle (Defekt-Erkennung)
- Medizinische Bildgebung (Läsions-Detektion)
- Robotik (Objekt-Greifpunkte)
- Autonomes Fahren (Fußgänger, Autos, Schilder)

**Alternativen:**
- **Detectron2** (Meta, OSS) — flexibler, aber langsamer.
- **Vision-LLMs** — für einfache Detection mit wenig Objektklassen oft ausreichend und keine Model-Training nötig.

*Verfallsdatum: Nov 2026 — YOLOv12 könnte released sein.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [Ultralytics YOLO](https://docs.ultralytics.com) | Standard-Implementation, sehr gute Docs |
| 🛠️ Code | [YOLO-World (Open-Vocabulary)](https://github.com/AILab-CVC/YOLO-World) | Text-Prompt-basierte Detection |
| 📺 Video | [Ultralytics YOLO Tutorial](https://www.youtube.com/watch?v=ag3DLKsl2vk) | Schneller Einstieg |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Image Classification und Object Detection?
- [ ] Was bedeutet "Only Once" in YOLO — was macht das System in einem einzigen Durchlauf?
- [ ] Für welche Use-Cases ist YOLO besser geeignet als ein Vision-LLM-API-Aufruf?
- [ ] Was ist Open-Vocabulary-Detection (YOLO-World) — und was ermöglicht das?
