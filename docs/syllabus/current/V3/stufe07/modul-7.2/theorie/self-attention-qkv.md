---
title: "Self-Attention mathematisch: Q, K, V"
module: "7.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Self-Attention mathematisch: Q, K, V

## Kernidee

Self-Attention ist die Kern-Operation des Transformers: `Attention(Q,K,V) = softmax(QK^T/√d_k)V`. Jedes Token fragt (Query), wie relevant es andere Tokens (Keys) findet, und aggregiert ihre Werte (Values) gewichtet. Das √d_k normalisiert, damit Softmax nicht in gesättigte Regionen fällt.

## Im Detail

**Die intuitive Erklärung:** Stell dir Attention wie eine fuzzy-Datenbanksuche vor. Query (Q) ist die Anfrage, Keys (K) sind die durchsuchbaren Einträge, Values (V) sind die abrufbaren Inhalte. Das Skalarprodukt Q·K^T misst Ähnlichkeit zwischen Anfrage und Eintrag. Softmax normalisiert zu einer Wahrscheinlichkeitsverteilung. Das Ergebnis ist eine gewichtete Summe der Values.

**Die Mathematik Schritt für Schritt:**

1. **Input:** Sequenz von Tokens als Embedding-Vektoren, `X` mit Form [Sequenz-Länge × d_model].
2. **Lineare Projektionen:** `Q = X · W_Q`, `K = X · W_K`, `V = X · W_V`. W_Q, W_K, W_V sind gelernte Weight-Matrizen.
3. **Scores:** `Scores = Q · K^T / √d_k`. Form: [Seq-Länge × Seq-Länge]. Jede Zelle (i,j) misst, wie viel Token i auf Token j "schaut".
4. **Softmax:** Normalisiert Scores zu Wahrscheinlichkeiten über die Key-Dimension.
5. **Output:** `Attention = Softmax(Scores) · V`. Gewichtete Summe der Values.

**Causal Masking (für Decoder/Language Model):** Beim nächsten-Token-Vorhersagen darf Token i nur Token 0..i-1 sehen (nicht die Zukunft). Das wird durch eine Maske erreicht: `-inf` in den oberen Dreieck der Score-Matrix vor dem Softmax. `-inf` wird nach Softmax zu 0 → komplette Ignorierung zukünftiger Tokens.

**Warum √d_k?** Skalarprodukte wachsen mit der Dimension d_k. Bei großen d_k (z.B. 512) können Scores sehr groß werden, was Softmax in Regionen extrem kleiner Gradienten drückt (Sättigung). Division durch √d_k stabilisiert das.

```python
import torch
import torch.nn.functional as F

def self_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = Q @ K.transpose(-2, -1) / (d_k ** 0.5)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))
    weights = F.softmax(scores, dim=-1)
    return weights @ V
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Video | [Karpathy — Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY) | Pflicht für 🧮+🔧, Q/K/V live implementiert |
| 🌐 Blog | [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) | Visuelle Erklärung mit Animationen |
| 📄 Paper | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Gleichung 1 — die offizielle Formel |

## Teste dein Verständnis

- [ ] Erkläre Q, K, V in eigenen Worten (Analogie Datenbanksuche funktioniert).
- [ ] Warum wird durch √d_k geteilt?
- [ ] Was ist Causal Masking und warum braucht ein Language Model es?
- [ ] 🧮: Implementiere Self-Attention in PyTorch von Grund auf (ohne nn.MultiheadAttention).
