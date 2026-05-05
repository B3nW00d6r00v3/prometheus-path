---
title: "Hyperparameter-Tuning systematisch"
module: "8.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Hyperparameter-Tuning systematisch

## Kernidee

Hyperparameter wie Learning Rate, Tree-Tiefe und Regularisierung werden nicht gelernt, sondern vom Anwender gesetzt. Sie bestimmen maßgeblich die Modell-Performance. Grid Search testet alle Kombinationen (erschöpfend, teuer), Random Search zieht zufällig (überraschend effektiv), Bayesian Optimization (Optuna) lernt aus vorherigen Versuchen und fokussiert auf vielversprechende Regionen.

## Im Detail

**Warum Hyperparameter so wichtig sind:**

Unterschied zwischen Default-XGBoost und gut getunetem XGBoost: oft 5–15% RMSE-Verbesserung. Das ist der Unterschied zwischen Platz 100 und Platz 10 auf Kaggle.

**Grid Search:**
```python
from sklearn.model_selection import GridSearchCV
import xgboost as xgb

param_grid = {
    'max_depth': [3, 5, 7],
    'learning_rate': [0.01, 0.05, 0.1],
    'n_estimators': [100, 300, 500]
}

grid_search = GridSearchCV(
    xgb.XGBRegressor(random_state=42),
    param_grid,
    cv=5,
    scoring='neg_root_mean_squared_error',
    n_jobs=-1
)
grid_search.fit(X_train, y_train)
print(f"Best Params: {grid_search.best_params_}")
# Problem: 3×3×3 = 27 Kombinationen × 5 Folds = 135 Trainings
```

**Random Search:**
```python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform, randint

param_distributions = {
    'max_depth': randint(3, 10),
    'learning_rate': uniform(0.01, 0.2),
    'n_estimators': randint(100, 1000),
    'subsample': uniform(0.6, 0.4),
    'colsample_bytree': uniform(0.6, 0.4)
}

random_search = RandomizedSearchCV(
    xgb.XGBRegressor(random_state=42),
    param_distributions,
    n_iter=50,  # 50 zufällige Kombinationen statt alle
    cv=5,
    scoring='neg_root_mean_squared_error',
    random_state=42
)
random_search.fit(X_train, y_train)
```

**Bayesian Optimization mit Optuna (empfohlen):**
```python
import optuna
import xgboost as xgb
from sklearn.model_selection import cross_val_score
import numpy as np

def objective(trial):
    params = {
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3, log=True),
        'n_estimators': trial.suggest_int('n_estimators', 100, 2000),
        'subsample': trial.suggest_float('subsample', 0.6, 1.0),
        'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),
        'reg_alpha': trial.suggest_float('reg_alpha', 0, 1),
        'reg_lambda': trial.suggest_float('reg_lambda', 1, 10),
        'random_state': 42
    }
    model = xgb.XGBRegressor(**params)
    scores = cross_val_score(model, X_train, y_train,
                              cv=5, scoring='neg_root_mean_squared_error')
    return -scores.mean()  # Optuna minimiert

study = optuna.create_study(direction='minimize')
study.optimize(objective, n_trials=100, show_progress_bar=True)

print(f"Best RMSE: {study.best_value:.4f}")
print(f"Best Params: {study.best_params}")
```

**Praktische Tuning-Strategie:**

1. **Erste Runde:** Random Search mit breiten Ranges → grobe Kandidaten.
2. **Zweite Runde:** Optuna mit engen Ranges um die Kandidaten → feine Optimierung.
3. **Early Stopping** immer aktiviert → reduziert Trainingszeit deutlich.

**Was zuerst tunen?** (Wichtigkeits-Reihenfolge für XGBoost):
1. `learning_rate` + `n_estimators` (zusammen, mit early stopping)
2. `max_depth` + `min_child_weight`
3. `subsample` + `colsample_bytree`
4. Regularisierung (`reg_alpha`, `reg_lambda`)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Optuna Documentation](https://optuna.readthedocs.io) | Vollständige Referenz |
| 🎯 Tutorial | [Optuna Quickstart](https://optuna.readthedocs.io/en/stable/tutorial/10_key_features/001_first.html) | Praktischer Einstieg |
| 📖 Artikel | [Towards Data Science — XGBoost Tuning](https://towardsdatascience.com/xgboost-fine-tune-and-optimize-your-model-23d996fab663) | Praxis-Tipps |

## Teste dein Verständnis

- [ ] Warum ist Bayesian Optimization effizienter als Random Search?
- [ ] Was ist der Unterschied zwischen einem Hyperparameter und einem Modell-Parameter?
- [ ] Welche zwei Hyperparameter solltest du immer zuerst tunen? Warum gemeinsam?
- [ ] Warum ist Grid Search mit vielen Parametern praktisch nicht durchführbar?
