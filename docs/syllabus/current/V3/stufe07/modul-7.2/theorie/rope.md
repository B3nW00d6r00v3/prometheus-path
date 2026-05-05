---
title: "RoPE (Rotary Position Embeddings)"
module: "7.2"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# RoPE (Rotary Position Embeddings)

## Kernidee

RoPE ersetzt additive Positional Encodings durch Rotation der Query- und Key-Vektoren. Statt absolute Position zu addieren, wird relative Position durch Rotation kodiert — das ermöglicht bessere Extrapolation auf längere Contexts als das Training. Standard in Llama, Mistral, Qwen 2026.

## Im Detail

**Das Problem mit Sinusoidal Positional Encoding (Original 2017):** Positionen werden als Vektoren addiert: `input = embedding + positional_encoding`. Das kodiert absolute Positionen. Wenn das Modell auf Context-Length 4096 trainiert wurde, extrapoliert es schlecht auf 8192 Tokens.

**RoPE-Idee:** Statt Positionen zu addieren, werden Q- und K-Vektoren rotiert. Die Rotation ist abhängig von der Position. Wichtig: Skalarprodukt Q·K (der Kern von Attention) ist dann abhängig von der *relativen* Position (Differenz der Positionen) — nicht der absoluten.

**Mathematisch:** Ein 2D-Rotations-Beispiel: Wenn Q an Position m und K an Position n mit dem Winkel θ rotiert werden, ist das Skalarprodukt Q_m · K_n eine Funktion von (m-n) und dem Inhalt. Das ist eleganter als additive Encoding.

**Warum besser für lange Contexts:**
- Relative Kodierung bedeutet: das Modell lernt "2 Tokens weiter links" statt "Position 4096 absolut".
- Extrapolation über Trainings-Context hinaus ist mit RoPE möglich (mit Tricks wie YaRN, LongRoPE).
- Llama 3.1: trainiert auf 128K Context mit RoPE-Erweiterung.

**Praktische Konsequenz:** Alle modernen LLMs (Llama 2+, Mistral, Qwen 2+, Gemma 2+, DeepSeek V2+) nutzen RoPE. Im nanoGPT-Erweiterungsprojekt (🧮): RoPE statt Learned Positional Embeddings einbauen — das ist die empfohlene "moderne Komponente" für 7.2.

*Verfallsdatum: Aug 2026 — RoPE ist stabil, aber Context-Erweiterungs-Techniken entwickeln sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864) | Original RoPE Paper |
| 📰 Blog | [Sebastian Raschka — RoPE Visualisierung](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list) | Visuelle Erklärung |
| 💻 Code | [Llama 3 — RoPE Implementierung](https://github.com/meta-llama/llama3/blob/main/llama/model.py) | Produktions-Referenz |

## Teste dein Verständnis

- [ ] Was kodiert RoPE anders als Sinusoidal Positional Encoding — absolut vs. relativ?
- [ ] Warum ermöglicht relative Positions-Kodierung bessere Extrapolation?
- [ ] Nenne drei große LLM-Familien, die RoPE verwenden.
- [ ] 🧮: Kannst du RoPE in nanoGPT einbauen (Referenz: Llama 3 Implementierung)?
