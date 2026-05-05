---
title: "XGBoost vs. LightGBM vs. CatBoost — wann welches?"
module: "8.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# XGBoost vs. LightGBM vs. CatBoost — wann welches?

## Kernidee

Alle drei sind exzellente Gradient-Boosting-Implementierungen — in den meisten Wettbewerben und Produktions-Systemen liefern sie ähnlich gute Ergebnisse bei korrektem Tuning. Die Wahl hängt von praktischen Faktoren ab: Datengröße, Art der Features, Tuning-Budget und Ecosystem-Integration.

## Im Detail

**Direkt-Vergleich:**

| Kriterium | XGBoost | LightGBM | CatBoost |
|-----------|---------|----------|----------|
| **Trainingsgeschwindigkeit** | Mittel | Schnell | Mittel–Schnell |
| **Große Datasets (>100k)** | Gut | Sehr gut | Gut |
| **Kategorische Features** | Manuell encoding | Manuell encoding | Nativ |
| **Hyperparameter-Tuning** | Mittel | Mehr nötig | Weniger nötig |
| **Tree-Wachstum** | Level-wise | Leaf-wise | Symmetrisch |
| **Overfitting-Robustheit** | Gut | Gut (mit Tuning) | Sehr gut |
| **Bibliothek-Stabilität** | Sehr stabil | Sehr stabil | Sehr stabil |
| **Ecosystem-Support** | Hervorragend | Sehr gut | Gut |
| **GPU-Unterstützung** | Ja | Ja | Ja |

**Entscheidungs-Heuristik:**

```
Viele kategorische Features (>5 mit hoher Kardinalität)?
  → CatBoost

Dataset > 500k Zeilen und Trainingszeit ist ein Constraint?
  → LightGBM

Standard-Fall, breite Kompatibilität, viel Dokumentation?
  → XGBoost

Unsicher? → Alle drei testen mit AutoML (AutoGluon)
```

**Typisches Performance-Ranking auf Kaggle:**
- Auf kleinen Datasets: oft ähnlich.
- Auf großen Datasets: LightGBM/CatBoost oft schneller zu einem guten Modell.
- Mit viel Tuning: alle drei auf ähnlichem Niveau.

**Praxis-Empfehlung 2026:**
- **Default-Wahl:** XGBoost (breite Unterstützung, gut dokumentiert).
- **Großer Datensatz:** LightGBM.
- **Viele kategorische Features:** CatBoost.
- **Ensemble:** alle drei kombinieren für maximale Performance (Stacking oder einfaches Averaging).

**Benchmark-Code:**
```python
import xgboost as xgb
import lightgbm as lgb
from catboost import CatBoostRegressor
from sklearn.model_selection import cross_val_score
import pandas as pd

models = {
    'XGBoost': xgb.XGBRegressor(n_estimators=500, learning_rate=0.05, random_state=42),
    'LightGBM': lgb.LGBMRegressor(n_estimators=500, learning_rate=0.05, random_state=42, verbose=-1),
    'CatBoost': CatBoostRegressor(iterations=500, learning_rate=0.05, random_seed=42, verbose=0)
}

results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5, scoring='neg_root_mean_squared_error')
    results[name] = {'RMSE': -scores.mean(), 'Std': scores.std()}

print(pd.DataFrame(results).T.sort_values('RMSE'))
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Benchmark | [PythonDataBench — XGBoost vs LightGBM vs CatBoost 2026](https://pythondatabench.com/article/gradient-boosting-python-xgboost-lightgbm-catboost-2026) | Aktueller Vergleich |
| 📖 Artikel | [Towards Data Science — Boosting Comparison](https://towardsdatascience.com/catboost-vs-lightgbm-vs-xgboost-c80f40662924) | Detaillierter Vergleich |

## Teste dein Verständnis

- [ ] Dein Datensatz hat 1 Million Zeilen und 50 numerische Features. Welches Framework nimmst du zuerst?
- [ ] Du hast 10 kategorische Features mit je 500 unique Werten. Welches Framework bevorzugst du?
- [ ] Warum ist das Testen aller drei Frameworks + Averaging oft besser als die "beste" Einzelwahl?
- [ ] Was ist der Trade-off zwischen leaf-wise (LightGBM) und level-wise (XGBoost) Tree Growth?
