---
title: "LightGBM"
module: "8.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# LightGBM

## Kernidee

LightGBM (Microsoft, 2017) ist eine Gradient-Boosting-Variante, die bei großen Datensätzen deutlich schneller ist als XGBoost. Der entscheidende Unterschied: LightGBM wächst Trees "leaf-wise" statt "depth-wise" — jede Iteration wählt das Blatt mit der größten Loss-Reduktion für die Aufspaltung. Das führt zu tieferen, asymmetrischeren Trees und oft besserer Genauigkeit pro Trainingsschritt.

## Im Detail

**Level-wise vs. Leaf-wise Tree Growth:**

```
Level-wise (XGBoost):          Leaf-wise (LightGBM):
       [root]                         [root]
      /      \                       /      \
  [L1]      [L1]                 [L2]      [L1]
  /  \      /  \                 /  \
[L2][L2]  [L2][L2]          [L3][L3]
```

- **Level-wise:** alle Knoten auf einer Tiefe werden gleichzeitig aufgeteilt.
- **Leaf-wise:** nur das Blatt mit der größten Verbesserung wird aufgeteilt — leads to tieferen, spezialisierten Trees.

**Warum ist LightGBM schneller?**

1. **GOSS (Gradient-based One-Side Sampling):** Samples mit kleinen Gradienten werden down-gesamplet — sie sind "leicht zu lernen". Spart Zeit ohne große Performance-Einbußen.

2. **EFB (Exclusive Feature Bundling):** Sparse Features, die selten gleichzeitig nicht-null sind, werden gebündelt. Reduziert die effektive Feature-Anzahl.

3. **Histogram-basiertes Splitting:** Kontinuierliche Features werden in Bins eingeteilt — deutlich schneller als exaktes Splitting.

**Wichtige Hyperparameter:**

| Parameter | Bedeutung | Tipp |
|-----------|-----------|------|
| `n_estimators` | Anzahl Trees | 500–3000 |
| `learning_rate` | Schrittgröße | 0.01–0.1 |
| `num_leaves` | Max. Blätter pro Tree | 31 (Default) — 15-127 |
| `min_child_samples` | Min. Samples in einem Blatt | 20 bei kleinen DS |
| `feature_fraction` | Anteil Features pro Tree | 0.6–1.0 |
| `bagging_fraction` | Anteil Samples pro Tree | 0.6–1.0 |
| `lambda_l1` / `lambda_l2` | Regularisierung | 0–1 |

**Schnell-Start:**
```python
import lightgbm as lgb
from sklearn.model_selection import train_test_split
import numpy as np

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

model = lgb.LGBMRegressor(
    n_estimators=2000,
    learning_rate=0.03,
    num_leaves=63,
    feature_fraction=0.8,
    bagging_fraction=0.8,
    bagging_freq=5,
    random_state=42
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    callbacks=[lgb.early_stopping(100), lgb.log_evaluation(200)]
)

print(f"Best Iteration: {model.best_iteration_}")
```

**Wann LightGBM statt XGBoost?**
- Bei großen Datensätzen (>100k Samples): LightGBM oft 2–10× schneller.
- Bei vielen numerischen Features.
- Wenn Trainingszeit ein Constraint ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LightGBM Documentation](https://lightgbm.readthedocs.io) | Vollständige Referenz |
| 📖 Paper | [LightGBM: A Highly Efficient Gradient Boosting Decision Tree](https://papers.nips.cc/paper/2017/file/6449f44a102fde848669bdd9eb6b76fa-Paper.pdf) | Originalpaper |
| 🎯 Tutorial | [LightGBM Tutorial](https://lightgbm.readthedocs.io/en/stable/Quick-Start.html) | Offizieller Einstieg |

## Teste dein Verständnis

- [ ] Was bedeutet "leaf-wise" Tree Growth und warum kann es zu Overfitting führen?
- [ ] Was regelt `num_leaves` und warum ist es wichtiger als `max_depth` bei LightGBM?
- [ ] Nenne zwei Algorithmen in LightGBM, die es schneller machen als XGBoost.
- [ ] Bei welchem Datensatz-Typ würdest du LightGBM über XGBoost bevorzugen?
