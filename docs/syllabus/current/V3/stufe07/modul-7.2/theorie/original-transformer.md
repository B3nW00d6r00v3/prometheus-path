---
title: "Original Transformer (2017)"
module: "7.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Original Transformer (2017)

## Kernidee

Vaswani et al. "Attention is All You Need" (2017) hat RNNs als dominante Architektur für Sequenz-Modellierung abgelöst. Die Encoder-Decoder-Architektur mit Self-Attention ist Foundation-Lektüre — aber 2026 ist sie nicht mehr State-of-the-Art. Decoder-only (GPT-Stil) ist der moderne Standard.

## Im Detail

**Das Original-Paper (2017):** Das Transformer-Modell wurde für maschinelle Übersetzung entwickelt. Es besteht aus einem Encoder (versteht die Eingabe-Sequenz) und einem Decoder (generiert die Ausgabe-Sequenz). Encoder und Decoder sind je ein Stack aus Self-Attention- und Feed-Forward-Layern.

**Original-Komponenten:**
- **Self-Attention** — jedes Token "schaut" auf alle anderen Tokens und bewertet deren Relevanz.
- **Multi-Head Attention** — mehrere parallele Attention-Köpfe, jeder lernt andere Beziehungstypen.
- **Sinusoidal Positional Encoding** — Information über die Position jedes Tokens (sonst ist Attention positionsunabhängig).
- **Feed-Forward Network (FFN)** — zwei lineare Layers mit ReLU dazwischen, nach der Attention.
- **Add & Norm (Post-Norm)** — Residual Connection + Layer Normalization nach jeder Sub-Layer.

**Warum es wichtig war:** Transformers können vollständig parallelisiert werden (RNNs sind sequenziell). Dadurch können sie von GPUs massiv beschleunigt werden und auf viel mehr Daten trainiert werden. Das war der Schlüssel für die LLM-Revolution.

**Was 2026 anders ist:**
- Sinusoidal → RoPE (relative Positions, besser für lange Contexts).
- Multi-Head Attention → GQA (effizienter, weniger KV-Cache).
- Post-Norm → Pre-Norm (stabiler bei tiefen Netzen).
- Encoder-Decoder → Decoder-only (GPT-Stil, für Language Models).
- ReLU → GELU oder SiLU/Swish im FFN.
- LayerNorm → oft RMSNorm (einfacher, schneller).

Die Original-Architektur ist heute noch relevant für Translation (T5, BART nutzen Encoder-Decoder), aber moderne LLMs sind fast alle Decoder-only.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Attention Is All You Need (Vaswani et al. 2017)](https://arxiv.org/abs/1706.03762) | Original-Paper — Pflichtlektüre |
| 🌐 Blog | [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/) | Beste visuelle Erklärung |
| 📺 Video | [Karpathy — Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY) | Praktische Implementierung |

## Teste dein Verständnis

- [ ] Was sind die Haupt-Komponenten des Original-Transformers?
- [ ] Was ist der Unterschied zwischen Encoder und Decoder — für welche Aufgaben welches?
- [ ] Was hat 2017 im Transformer-Paper die Parallelisierung ermöglicht (vs. RNNs)?
- [ ] Welche vier Änderungen unterscheiden moderne LLMs (z.B. Llama 3) vom Original-Transformer?
