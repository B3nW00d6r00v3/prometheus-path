---
title: "Decoder-only Architektur (GPT-Stil)"
module: "7.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Decoder-only Architektur (GPT-Stil)

## Kernidee

Die meisten modernen LLMs sind Decoder-only: ein Stack aus Transformer-Blöcken, die jeweils Self-Attention + Feed-Forward enthalten. Es gibt keinen Encoder — das Modell verarbeitet alles in einem einzigen Stream und lernt, das nächste Token zu vorherzusagen.

## Im Detail

**Drei Transformer-Familien:**
- **Encoder-only** (z.B. BERT): versteht Text, generiert nicht. Gut für Classification, NER, Embeddings. Bidirektional — jedes Token sieht alle anderen.
- **Encoder-Decoder** (z.B. T5, BART): Encoder versteht, Decoder generiert. Gut für Translation, Zusammenfassung mit Referenz-Input.
- **Decoder-only** (z.B. GPT, Llama, Claude, Gemini): generiert Text autoregressive, Token für Token. Causal Masking — jedes Token sieht nur die Vorgänger.

**Warum Decoder-only dominiert 2026:** Durch Scaling (mehr Parameter, mehr Daten, mehr Compute) emergieren bei Decoder-only-Modellen Fähigkeiten, die vorher nur spezialisierte Architekturen hatten: Übersetzung, Zusammenfassung, Reasoning, Code. Einfachere Architektur, Scaling-Vorteile, keine Notwendigkeit für separate Encoder.

**Aufbau eines Decoder-only Transformers (Llama-Stil):**

```
Input Tokens → Token Embeddings
               ↓
[Transformer Block] × N:
  RMSNorm
  → Self-Attention (GQA, RoPE, Causal Mask)
  + Residual
  RMSNorm
  → Feed-Forward Network (SiLU/Swish, größere Hidden-Dim)
  + Residual
               ↓
Final RMSNorm
→ Linear (d_model → Vocab-Size)
→ Softmax → nächstes Token
```

**Autoregressive Generierung:** Das Modell generiert ein Token nach dem anderen. Output-Token wird dem Input angehängt, dann wird das nächste Token vorhergesagt. Das ist ineffizient — KV-Cache (Modul 7.2) löst das.

**nanoGPT** von Karpathy (~300 Zeilen) ist die cleanste Referenz-Implementierung eines Decoder-only Transformers. Für 🧮: pflichtgemäß nachimplementieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 💻 Code | [nanoGPT (Karpathy)](https://github.com/karpathy/nanoGPT) | Decoder-only in ~300 Zeilen |
| 📺 Video | [Karpathy — Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY) | Lecture 7, baut nanoGPT live |
| 💻 Code | [Llama 3 Implementierung (Meta)](https://github.com/meta-llama/llama3) | Produktions-Referenz |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Encoder-only, Encoder-Decoder und Decoder-only?
- [ ] Warum ist Causal Masking bei einem Language Model notwendig?
- [ ] Was bedeutet "autoregressive Generierung" konkret — Schritt für Schritt?
- [ ] 🧮/🔧: Kannst du nanoGPT's Architektur erklären, indem du durch die Datei `model.py` gehst?
