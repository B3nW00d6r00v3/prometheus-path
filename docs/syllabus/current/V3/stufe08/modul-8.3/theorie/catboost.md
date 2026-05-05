---
title: "CatBoost"
module: "8.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# CatBoost

## Kernidee

CatBoost (Yandex, 2017) löst ein häufiges Problem in der Praxis: kategorische Features (wie Städte, Produktkategorien, Nutzer-IDs) müssen für die meisten ML-Algorithmen erst aufwendig encodiert werden. CatBoost behandelt sie nativ — ohne One-Hot-Encoding oder Target-Encoding-Leakage. Dazu kommt ordered boosting, das verhindert, dass Training und Validierungsdaten sich gegenseitig beeinflussen.

## Im Detail

**Das Categorical-Feature-Problem:**

Klassisches Target-Encoding hat ein Leakage-Problem: wenn du den Mittelwert des Targets pro Kategorie berechnest, fließt das Target in das Feature ein. CatBoost verwendet **ordered Target Statistics**: für jedes Sample wird der Kategorie-Mittelwert nur auf den Samples berechnet, die in der Trainings-Reihenfolge *vor* ihm kamen.

**Geordnetes Boosting (Ordered Boosting):**

Standard Boosting kann zu Informations-Leakage führen, weil dieselben Samples für Tree-Building und Residual-Berechnung genutzt werden. CatBoost ordnet Samples zufällig und baut Trees so, dass jedes Sample nur auf Informationen von "früheren" Samples basiert.

**Vorteile:**

1. **Kategorische Features nativ** — einfach den Spalten-Namen übergeben, kein Encoding nötig.
2. **Weniger Hyperparameter-Tuning** — gute Defaults aus der Box.
3. **Robuster gegen Overfitting** — ordered Boosting reduziert Overfitting auf kleinen Datasets.
4. **Symmetrische Trees** — CatBoost baut oblivious Trees (jedes Level hat die gleiche Splitt-Frage). Schnell für Inference.

**Schnell-Start:**
```python
from catboost import CatBoostRegressor, Pool
from sklearn.model_selection import train_test_split

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

# Kategorische Spalten identifizieren
cat_features = [i for i, col in enumerate(X.columns) if X[col].dtype == 'object']

train_pool = Pool(X_train, y_train, cat_features=cat_features)
val_pool = Pool(X_val, y_val, cat_features=cat_features)

model = CatBoostRegressor(
    iterations=2000,
    learning_rate=0.05,
    depth=6,
    random_seed=42,
    verbose=200
)

model.fit(
    train_pool,
    eval_set=val_pool,
    early_stopping_rounds=100
)

print(f"Best RMSE: {model.best_score_['validation']['RMSE']:.4f}")
```

**Wann CatBoost statt XGBoost/LightGBM?**
- Bei vielen kategorischen Features mit hoher Kardinalität.
- Wenn du wenig Hyperparameter-Tuning betreiben möchtest.
- Bei kleinen bis mittleren Datasets.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [CatBoost Documentation](https://catboost.ai/en/docs/) | Vollständige Referenz |
| 📖 Paper | [CatBoost: unbiased boosting with categorical features](https://arxiv.org/abs/1706.09516) | Originalpaper |
| 🎯 Tutorial | [CatBoost Quickstart](https://catboost.ai/en/docs/concepts/tutorials) | Offizieller Einstieg |

## Teste dein Verständnis

- [ ] Was ist das Leakage-Problem bei klassischem Target-Encoding, das CatBoost löst?
- [ ] Was sind oblivious Trees und warum sind sie schnell für Inference?
- [ ] Nenne zwei Szenarien, in denen CatBoost XGBoost überlegen ist.
- [ ] Was musst du tun, damit CatBoost kategorische Features nativ behandelt?
