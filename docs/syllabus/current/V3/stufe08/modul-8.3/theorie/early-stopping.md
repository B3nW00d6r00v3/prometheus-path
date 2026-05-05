---
title: "Early Stopping als Regularisierung"
module: "8.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Early Stopping als Regularisierung

## Kernidee

Bei Gradient Boosting gilt: mehr Trees bedeuten irgendwann Overfitting. Early Stopping überwacht die Performance auf einem Validierungs-Set und stoppt das Training, wenn sie aufhört besser zu werden. Das spart Trainingszeit und verhindert Overfitting — und macht `n_estimators` von einem kritischen zu einem "setze es hoch genug"-Parameter.

## Im Detail

**Das Problem ohne Early Stopping:**

```
Train-RMSE: fällt kontinuierlich (mehr Trees → besserer Fit)
Val-RMSE:   fällt bis Iteration ~300, dann steigt es wieder (Overfitting)
```

Ohne Early Stopping trainierst du über den optimalen Punkt hinaus.

**Das Prinzip:**
- Trainiere auf Train-Set, evaluiere nach jedem Tree auf Val-Set.
- Stoppe, wenn Val-Metrik sich nach N Runden nicht verbessert hat.
- Behalte das Modell vom besten Checkpoint.

**Implementierung bei XGBoost:**
```python
import xgboost as xgb
from sklearn.model_selection import train_test_split

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2)

model = xgb.XGBRegressor(
    n_estimators=5000,          # Hoch setzen — Early Stopping regelt das
    learning_rate=0.01,
    early_stopping_rounds=50,   # Stopp wenn 50 Runden keine Verbesserung
    eval_metric='rmse',
    random_state=42
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    verbose=200
)

print(f"Bestes Modell bei Iteration: {model.best_iteration}")
print(f"Beste Val-RMSE: {model.best_score:.4f}")
```

**Early Stopping bei LightGBM:**
```python
import lightgbm as lgb

callbacks = [
    lgb.early_stopping(stopping_rounds=50),
    lgb.log_evaluation(period=200)
]

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    callbacks=callbacks
)
```

**Wichtig: Data Leakage verhindern:**

Das Validierungs-Set für Early Stopping darf NICHT identisch mit dem Test-Set sein — sonst "sieht" das Modell indirekt Testdaten. Bei Cross-Validation mit Early Stopping: in jedem Fold ein separates Val-Split verwenden.

**Warum ist es Regularisierung?**

Early Stopping begrenzt effektiv die "Kapazität" des Ensembles — ein Ensemble mit 100 Trees ist weniger komplex als eines mit 5000. Es wirkt wie ein implizites Limit auf die Modell-Komplexität.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [XGBoost — Early Stopping](https://xgboost.readthedocs.io/en/latest/python/callbacks.html) | API-Referenz |
| 📖 Docs | [LightGBM — Early Stopping](https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.early_stopping.html) | LightGBM-Variante |

## Teste dein Verständnis

- [ ] Warum kannst du `n_estimators` einfach auf 5000 setzen, wenn du Early Stopping verwendest?
- [ ] Wie verhinderst du Data Leakage, wenn du Early Stopping mit Cross-Validation kombinierst?
- [ ] Was ist der Unterschied zwischen "bestes Modell" und "letztes Modell" bei Early Stopping?
- [ ] Warum ist Early Stopping eine Form von Regularisierung?
