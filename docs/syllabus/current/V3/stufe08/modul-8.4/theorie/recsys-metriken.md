---
title: "RecSys-Eval-Metriken"
module: "8.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# RecSys-Eval-Metriken

## Kernidee

Recommender Systems werden nicht nur nach Relevanz (hat der User das Item gemocht?), sondern auch nach Diversity, Coverage und Novelty bewertet. Die klassischen Metriken wie Precision@K und NDCG@K messen Relevanz; sekundäre Metriken messen, ob das System nicht in Filter Bubbles gefangen ist. Eine gute Offline-Eval korreliert aber nicht immer mit Online-Erfolg.

## Im Detail

**Offline-Eval Setup:**

```python
from sklearn.model_selection import train_test_split

# Train/Test-Split: letzte N Interaktionen pro User als Test
def train_test_split_recsys(data, test_ratio=0.2):
    train, test = [], []
    for user_id, group in data.groupby('user_id'):
        group = group.sort_values('timestamp')
        n_test = max(1, int(len(group) * test_ratio))
        train.append(group.iloc[:-n_test])
        test.append(group.iloc[-n_test:])
    return pd.concat(train), pd.concat(test)
```

**Precision@K:**
Von den K empfohlenen Items, wieviele sind relevant?
```
Precision@K = |{relevante Items} ∩ {Top-K Empfehlungen}| / K
```

**Recall@K:**
Von allen relevanten Items, wieviele sind in den Top-K?
```
Recall@K = |{relevante Items} ∩ {Top-K Empfehlungen}| / |{relevante Items}|
```

**NDCG@K (Normalized Discounted Cumulative Gain):**
Berücksichtigt Position: relevante Items früher in der Liste → höherer Score.
```
DCG@K = Σ_{i=1}^{K} relevanz_i / log₂(i+1)
NDCG@K = DCG@K / IDCG@K   (ideale Reihenfolge)
```

**MAP (Mean Average Precision):**
Mittelwert von Average Precision über alle User.

**Implementierung:**
```python
import numpy as np

def precision_at_k(recommended, relevant, k):
    recommended_k = recommended[:k]
    hits = len(set(recommended_k) & set(relevant))
    return hits / k

def recall_at_k(recommended, relevant, k):
    recommended_k = recommended[:k]
    hits = len(set(recommended_k) & set(relevant))
    return hits / len(relevant) if relevant else 0

def ndcg_at_k(recommended, relevant, k):
    dcg = sum(
        1 / np.log2(i + 2)
        for i, item in enumerate(recommended[:k])
        if item in relevant
    )
    ideal_hits = min(k, len(relevant))
    idcg = sum(1 / np.log2(i + 2) for i in range(ideal_hits))
    return dcg / idcg if idcg > 0 else 0

# Evaluation über alle User
def evaluate_recommender(model, test_data, k=10):
    metrics = {'precision': [], 'recall': [], 'ndcg': []}
    for user_id, group in test_data.groupby('user_id'):
        relevant = group['item_id'].tolist()
        recommended = model.recommend(user_id, n=k)
        metrics['precision'].append(precision_at_k(recommended, relevant, k))
        metrics['recall'].append(recall_at_k(recommended, relevant, k))
        metrics['ndcg'].append(ndcg_at_k(recommended, relevant, k))
    return {k: np.mean(v) for k, v in metrics.items()}
```

**Sekundäre Metriken:**

| Metrik | Definition | Zweck |
|--------|-----------|-------|
| **Diversity** | Avg. paarweise Unähnlichkeit in Top-K | Filter-Bubble-Vermeidung |
| **Coverage** | Anteil aller Items, der jemals empfohlen wird | Long-Tail-Reichweite |
| **Novelty** | Wie unbekannt/neu sind Empfehlungen für den User? | Entdeckungs-Wert |
| **Serendipity** | Überraschend relevante Empfehlungen | Freude, nicht nur Relevanz |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Ranking Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#ranking-metrics) | NDCG in scikit-learn |
| 📖 Docs | [RecBole — Evaluation](https://recbole.io/docs/user_guide/usage/Evaluation.html) | Framework mit allen RecSys-Metriken |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Precision@K und Recall@K bei RecSys?
- [ ] Warum ist NDCG@K besser als Precision@K, wenn die Reihenfolge der Empfehlungen wichtig ist?
- [ ] Was ist Coverage-Metrik und warum ist ein Recommender mit 100% Precision aber 1% Coverage problematisch?
- [ ] Warum korreliert gute Offline-Eval-Performance nicht immer mit Online-Verbesserungen?
