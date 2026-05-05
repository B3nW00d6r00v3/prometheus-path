---
title: "Multi-Head Attention"
module: "7.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Multi-Head Attention

## Kernidee

Multi-Head Attention führt Self-Attention mehrfach parallel aus, jeder "Head" mit eigenen Q/K/V-Matrizen. Verschiedene Heads können verschiedene Beziehungstypen lernen (syntaktisch, semantisch, positionell). Die Outputs werden konkateniert und projiziert. 2026 dominiert GQA als effizientere Variante.

## Im Detail

**Warum mehrere Heads?** Eine einzelne Attention-Operation lernt eine Perspektive auf die Sequenz. Mehrere parallele Heads können gleichzeitig verschiedene Typen von Beziehungen lernen:
- Head 1: syntaktische Abhängigkeiten (Verb → Subjekt).
- Head 2: semantische Ähnlichkeit.
- Head 3: lokale Proximity (benachbarte Tokens).
- Head 4: lange Distanzen (Pronomen → Referenz).

**Die Architektur:**

```
Input X → [W_Q1, W_K1, W_V1] → Attention_Head_1 → h1
         [W_Q2, W_K2, W_V2] → Attention_Head_2 → h2
         ...
         [W_Qn, W_Kn, W_Vn] → Attention_Head_n → hn

Concat(h1, h2, ..., hn) → W_O → Output
```

Jeder Head hat reduzierte Dimension: d_head = d_model / num_heads. Llama 3.1 8B: d_model=4096, 32 Q-Heads, d_head=128.

**Klassen von Attention-Varianten 2026:**

| Variante | Q-Heads | K/V-Heads | Memory | Quality |
|----------|---------|-----------|--------|---------|
| Multi-Head (MHA) | n | n | hoch | Referenz |
| Grouped Query (GQA) | n | n/g | n/g-fach weniger | <0.5 Punkt Drop |
| Multi-Query (MQA) | n | 1 | maximal wenig | größerer Drop |

**GQA ist 2026 Standard:** Llama 3.1 8B hat 32 Q-Heads, aber nur 8 K/V-Heads (4 Q-Heads teilen sich je ein K/V-Paar). Das reduziert den KV-Cache um 4× mit minimalem Quality-Impact. Standard in Llama 3.x, Qwen 2/3, Mistral.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Attention Is All You Need — Section 3.2](https://arxiv.org/abs/1706.03762) | Original Multi-Head Attention |
| 📄 Paper | [GQA Paper (Ainslie et al. 2023)](https://arxiv.org/abs/2305.13245) | Grouped Query Attention |
| 🌐 Blog | [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) | Multi-Head visualisiert |

## Teste dein Verständnis

- [ ] Warum haben verschiedene Attention-Heads verschiedene Perspektiven — wie ist das möglich?
- [ ] Wie berechnet sich d_head aus d_model und num_heads?
- [ ] Was ist der Unterschied zwischen MHA, GQA und MQA — Tabelle kannst du auswendig?
- [ ] Wie viele K/V-Heads hat Llama 3.1 8B, und wie viel Memory spart das gegenüber MHA?
