---
title: "Vision-LLMs vs. klassische CV"
module: "7.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Vision-LLMs vs. klassische CV

## Kernidee

2026 sind Vision-LLMs (Claude, GPT-5, Gemini) für viele CV-Aufgaben schneller und qualitativ vergleichbar mit klassischen Custom-Modellen. Die Entscheidung Vision-LLM vs. klassische CV hängt von Latenz, Volumen, Domänen-Spezifik und Cost ab.

## Im Detail

**Was Vision-LLMs 2026 zuverlässig können:**
- OCR und Texterkennung aus Bildern/PDFs
- Bild-Klassifikation für allgemeine Kategorien
- Einfache Objekt-Lokalisierung (nicht präzise Bounding Boxes)
- Bild-Zusammenfassung und Beschreibung
- Tabellen-Extraktion aus Dokumenten
- Diagramm-Interpretation

**Was Vision-LLMs 2026 noch schwach sind:**
- Präzises Counting (mehr als ~5 Objekte)
- Exakte Bounding Boxes und Pixel-Segmentation
- Real-Time (Latenz ~1-5s per Aufruf)
- Edge-Devices (nur Cloud)
- Sehr spezifische Domänen (Medizin-Histologie, Industriemikroskopie)

**Wann klassische CV lohnt:**
- **Real-Time-Anforderungen** (<100ms) — YOLO, TensorRT
- **Edge-Devices** — Raspberry Pi, Smartphone, embedded
- **Sehr hohes Volumen** mit Cost-Sensitivität — API-Kosten pro Bild
- **Sehr spezifische Domäne** mit eigenen Daten (Defekterkennung in Fabrik)
- **Datenschutz** — keine Daten zur Cloud (DSGVO, IP)

**Wann Vision-LLM die bessere Wahl ist:**
- **Prototyping** — schnell testen ohne Modell-Training
- **Geringe Volumina** (<10.000 Bilder/Tag)
- **Allgemeine Aufgaben** — keine domänen-spezifischen Daten nötig
- **Komplexe Beschreibungen** — Kontext verstehen, nicht nur klassifizieren

**Faustregel:** Fange mit Vision-LLM an. Wenn Cost, Latenz oder Qualität nicht reichen, dann klassische CV.

*Verfallsdatum: Nov 2026 — Vision-LLM-Fähigkeiten verbessern sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Cookbook | [Anthropic Vision Cookbook](https://github.com/anthropics/anthropic-cookbook) | Praxis-Beispiele mit Claude Vision |
| 📊 Benchmark | [MMMU Benchmark](https://mmmu-benchmark.github.io) | Vergleich multimodaler Modelle |

## Teste dein Verständnis

- [ ] Nenne drei Aufgaben, für die ein Vision-LLM-API-Aufruf ausreichend ist.
- [ ] Nenne drei Situationen, in denen klassische CV besser ist als ein Vision-LLM.
- [ ] Warum ist Real-Time-Video-Analyse ein klassischer CV-Anwendungsfall, kein Vision-LLM-Fall?
- [ ] Wie würdest du für einen neuen Use-Case entscheiden: Vision-LLM oder Custom-Modell?
