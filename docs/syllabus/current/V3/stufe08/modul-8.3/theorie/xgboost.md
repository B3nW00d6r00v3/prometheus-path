---
title: "XGBoost"
module: "8.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# XGBoost

## Kernidee

XGBoost (2014) ist das Gradient-Boosting-Framework, das hunderte Kaggle-Wettbewerbe gewann und heute in der Industrie als Standardreferenz für Tabular-Data gilt. Es kombiniert regularisiertes Boosting mit einer effizienten Implementierung, die Missing Values nativ behandelt, Sparse Data unterstützt und auf modernen Hardware skaliert.

## Im Detail

**Was macht XGBoost besonders?**

Gegenüber klassischem Gradient Boosting (scikit-learn's GradientBoostingClassifier) fügt XGBoost hinzu:

1. **Regularisierung im Tree-Splitting** — L1 und L2 Regularisierung direkt in die Splitt-Kriterium integriert. Verhindert Overfitting.

2. **Missing-Value-Handling** — XGBoost lernt für jeden Knoten, ob fehlende Werte nach links oder rechts sollen. Kein Preprocessing nötig.

3. **Sparse-Aware** — bei One-Hot-Encoded kategorischen Variablen (viele Nullen) ist XGBoost deutlich effizienter als naive Implementierungen.

4. **Parallelisierung** — Tree-Erstellung innerhalb eines Trees wird parallelisiert (nicht über Trees, da sequenziell).

5. **Column Subsampling** — wie Random Forests: nur ein Teil der Features wird pro Tree/Split betrachtet. Reduziert Overfitting, erhöht Diversity.

**Wichtige Hyperparameter:**

| Parameter | Bedeutung | Typischer Bereich |
|-----------|-----------|-------------------|
| `n_estimators` | Anzahl der Trees | 100–2000 |
| `learning_rate` | η — Schrittgröße | 0.01–0.3 |
| `max_depth` | Max. Tree-Tiefe | 3–8 |
| `min_child_weight` | Min. Summe der Gewichte in einem Blatt | 1–10 |
| `subsample` | Anteil der Samples pro Tree | 0.6–1.0 |
| `colsample_bytree` | Anteil der Features pro Tree | 0.6–1.0 |
| `reg_alpha` | L1 Regularisierung | 0–1 |
| `reg_lambda` | L2 Regularisierung | 1–10 |

**Schnell-Start:**
```python
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import numpy as np

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

model = xgb.XGBRegressor(
    n_estimators=1000,
    learning_rate=0.05,
    max_depth=6,
    subsample=0.8,
    colsample_bytree=0.8,
    early_stopping_rounds=50,   # Stoppt wenn val-score nicht besser wird
    eval_metric='rmse',
    random_state=42
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    verbose=100
)

y_pred = model.predict(X_val)
rmse = np.sqrt(mean_squared_error(y_val, y_pred))
print(f"Best RMSE: {rmse:.4f}")
print(f"Best Iteration: {model.best_iteration}")
```

**Feature Importance:**
```python
import matplotlib.pyplot as plt
xgb.plot_importance(model, max_num_features=15)
plt.tight_layout()
plt.show()
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [XGBoost Documentation](https://xgboost.readthedocs.io) | Vollständige Referenz |
| 🎥 Video | [StatQuest — XGBoost](https://www.youtube.com/watch?v=OtD8wVaFm6E) | Intuitive Erklärung |
| 📖 Paper | [XGBoost: A Scalable Tree Boosting System](https://arxiv.org/abs/1603.02754) | Originalpaper |

## Teste dein Verständnis

- [ ] Welche drei Vorteile hat XGBoost gegenüber naivem Gradient Boosting?
- [ ] Warum ist `early_stopping_rounds` eine Form von Regularisierung?
- [ ] Was passiert, wenn `learning_rate` sehr klein und `n_estimators` sehr groß ist?
- [ ] Wie behandelt XGBoost fehlende Werte — und warum ist das ein Vorteil in der Praxis?
