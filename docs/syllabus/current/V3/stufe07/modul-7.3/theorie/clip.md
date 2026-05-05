---
title: "CLIP — Text und Bild im selben Embedding-Raum"
module: "7.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# CLIP — Text und Bild im selben Embedding-Raum

## Kernidee

CLIP (Contrastive Language-Image Pre-training, OpenAI 2021) trainiert gleichzeitig einen Text-Encoder und einen Bild-Encoder darauf, dass zusammengehörige Text-Bild-Paare ähnliche Embeddings haben und nicht-zusammengehörige unähnliche. Das Ergebnis: ein gemeinsamer semantischer Raum für Text und Bild.

## Im Detail

**Trainings-Idee (Contrastive Learning):** Gegeben ein Batch von N Bild-Text-Paaren, soll das Modell lernen, welche Paare zusammengehören. Es gibt N² mögliche Kombinationen, aber nur N richtige. Der Contrastive Loss (InfoNCE) maximiert die Cosinus-Ähnlichkeit für richtige Paare und minimiert sie für falsche.

**Zero-Shot-Klassifikation:** CLIP ermöglicht Klassifikation ohne Fine-Tuning: Für jede Klasse wird ein Text wie "a photo of a cat" eingebettet. Das Bild-Embedding wird mit allen Klassen-Text-Embeddings verglichen — die Klasse mit der höchsten Ähnlichkeit gewinnt.

**Warum CLIP revolutionär war:**
- Trainiert auf 400M Bild-Text-Paaren aus dem Internet — kein manuelles Label nötig.
- Zero-Shot-Performance übertrifft auf vielen Benchmarks supervised Modelle.
- Gemeinsamer Embedding-Raum: "Hund bellt" und ein Foto eines bellenden Hundes liegen nahe beieinander.

**Anwendungen:**
- **Bild-Suche nach Text** — "zeige mir Fotos von roten Autos bei Nacht".
- **Multimodale Retrieval-Systeme**.
- **Foundation für Text-to-Image-Modelle** (Stable Diffusion nutzt CLIP-Text-Encoder).
- **Semantisches Bild-Clustering** ohne Labels.

**OSS-Alternative:** OpenCLIP bietet CLIP-kompatible Modelle, trainiert auf LAION-5B (5 Milliarden Paare) statt OpenAI's nicht-veröffentlichtem Trainings-Datensatz.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [CLIP Paper (Radford et al. 2021)](https://arxiv.org/abs/2103.00020) | Original-Paper von OpenAI |
| 🛠️ Code | [OpenCLIP (OSS-Reimplementation)](https://github.com/mlfoundations/open_clip) | OSS, verschiedene Modell-Größen |
| 📺 Video | [Yannic Kilcher — CLIP erklärt](https://www.youtube.com/watch?v=T9XSU0pKX2E) | Gute Erklärung des Papers |

## Teste dein Verständnis

- [ ] Was bedeutet "gemeinsamer Embedding-Raum" für Text und Bild?
- [ ] Wie funktioniert Zero-Shot-Klassifikation mit CLIP — ohne Fine-Tuning?
- [ ] Welche Rolle spielt der Contrastive Loss beim Training?
- [ ] Wo überall steckt ein CLIP-Text-Encoder drin (Hinweis: Stable Diffusion)?
