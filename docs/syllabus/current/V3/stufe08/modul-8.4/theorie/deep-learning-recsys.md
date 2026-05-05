---
title: "Deep Learning für RecSys"
module: "8.4"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Deep Learning für RecSys

## Kernidee

Deep Learning erweitert klassische Recommender um die Fähigkeit, komplexe, nicht-lineare Interaktionen zwischen User- und Item-Features zu lernen. Neural Collaborative Filtering ersetzt das Skalarprodukt durch ein neuronales Netz; Two-Tower-Modelle trennen User- und Item-Repräsentation für effiziente ANN-Suche; Transformers modellieren sequenzielle Interaktionen über Zeit.

## Im Detail

**Neural Collaborative Filtering (NCF):**

Ersetze das lineare Skalarprodukt (Matrix Factorization) durch ein Multi-Layer-Perceptron:
- User-Embedding + Item-Embedding → MLP → Predicted Rating
- Kann komplexere Interaktionen lernen als lineares Skalarprodukt.
- Nachteil: langsamer bei Inference als reines Skalarprodukt.

**Two-Tower-Modelle (Empfehlung: moderne Baseline):**

```
User-Tower: User-ID + User-Features → Dense-Layers → User-Embedding (32-dim)
Item-Tower: Item-ID + Item-Features → Dense-Layers → Item-Embedding (32-dim)
Score: Skalarprodukt oder Cosine-Similarity
```

Vorteile:
- Item-Embeddings können offline vorberechnet werden → schnelle ANN-Suche (FAISS/pgvector).
- User-Tower und Item-Tower können unabhängig aktualisiert werden.
- Standard bei YouTube, Google Play, Pinterest.

**Training mit Implicit Feedback:**

Statt Rating-Prediction (selten in Praxis): BPR (Bayesian Personalized Ranking) oder Sampled Softmax.

```python
# BPR Loss: User mag pos-Item mehr als neg-Item
# loss = -log(σ(score_pos - score_neg))
import torch
import torch.nn as nn

def bpr_loss(pos_scores, neg_scores):
    return -torch.log(torch.sigmoid(pos_scores - neg_scores)).mean()
```

**Sequential Recommendation:**

User-Interaktionen als Zeitsequenz: [Film A → Film B → Film C → ?]

- **GRU4Rec:** Gated Recurrent Units für Session-basierte Empfehlung.
- **BERT4Rec (2019):** Masked Item Prediction — wie BERT für Text, aber für Item-Sequenzen.
- **SASRec (2018):** Self-Attention für Sequential Recommendation — schneller und oft besser als RNNs.

```python
# Konzeptionelles SASRec-Training
# Input: [item_1, item_2, ..., item_n-1]
# Target: [item_2, item_3, ..., item_n]
# Transformer lernt, nächstes Item aus Sequenz vorherzusagen
```

**Wann Deep Learning für RecSys?**

- Große Datensätze (Millionen von Interaktionen) — sonst Overfitting.
- Viele heterogene Features (Text, Bild, numerisch) — da DL gut Feature-Integration.
- Sequential-Patterns wichtig — Transformers domäinieren hier.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [Neural Collaborative Filtering](https://arxiv.org/abs/1708.05031) | Klassisches NCF Paper |
| 📖 Paper | [SASRec](https://arxiv.org/abs/1808.09781) | State-of-the-art Sequential |
| 📖 Docs | [Papers with Code — RecSys](https://paperswithcode.com/area/recommendation-systems) | Aktuelle Leaderboards |

## Teste dein Verständnis

- [ ] Was ist der Vorteil des Two-Tower-Modells gegenüber NCF für Production-Systeme?
- [ ] Warum ist BPR-Loss bei Implicit Feedback oft besser als MSE-Loss?
- [ ] Was macht SASRec besser als GRU4Rec für Sequential Recommendation?
- [ ] Wie werden Item-Embeddings in einem Two-Tower-Modell für schnelle Suche genutzt?
