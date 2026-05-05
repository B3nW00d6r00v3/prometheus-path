---
title: "Regularisierung: Ridge, Lasso, Elastic Net"
module: "8.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Regularisierung: Ridge, Lasso, Elastic Net

## Kernidee

Regularisierung verhindert Overfitting, indem sie große Koeffizienten im Loss-Term bestraft. Ridge (L2) schrumpft alle Koeffizienten, aber auf null bringt es keinen davon. Lasso (L1) dagegen setzt manche Koeffizienten exakt auf null — und macht damit automatisch Feature-Selection. Elastic Net kombiniert beide Ansätze.

## Im Detail

**Das Problem ohne Regularisierung:**

Bei vielen Features oder Multikollinearität kann Lineare Regression extrem große Koeffizienten lernen — das Modell "overfittes" auf den Trainings-Datensatz und generalisiert schlecht.

**Ridge Regression (L2):**
```
Loss_Ridge = MSE + α × Σ wᵢ²
```
- α (Lambda) ist der Regularisierungs-Parameter.
- Alle Koeffizienten werden schrumpft, aber keiner wird exakt null.
- Gut wenn alle Features relevant sind (schwache Sparsität erwartet).

**Lasso Regression (L1):**
```
Loss_Lasso = MSE + α × Σ |wᵢ|
```
- Setzt irrelevante Koeffizienten auf exakt null → implizite Feature-Selection.
- Bevorzugt sparsame Modelle.
- Problem: bei korrelierten Features wählt Lasso willkürlich ein Feature.

**Elastic Net (L1 + L2):**
```
Loss_ElasticNet = MSE + α × [l1_ratio × Σ|wᵢ| + (1-l1_ratio) × Σwᵢ²]
```
- Kombiniert Sparsität von Lasso mit Stabilität von Ridge.
- Empfohlen wenn es viele korrelierte Features gibt.

**Implementierung:**
```python
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.model_selection import cross_val_score
import numpy as np

alphas = [0.001, 0.01, 0.1, 1.0, 10.0, 100.0]

# Ridge-Wahl via Cross-Validation
ridge_scores = []
for alpha in alphas:
    model = Ridge(alpha=alpha)
    score = cross_val_score(model, X_train, y_train,
                             cv=5, scoring='neg_root_mean_squared_error')
    ridge_scores.append(-score.mean())

best_alpha = alphas[np.argmin(ridge_scores)]
final_ridge = Ridge(alpha=best_alpha).fit(X_train, y_train)

# Lasso — Feature-Selection sichtbar
lasso = Lasso(alpha=0.1).fit(X_train, y_train)
selected = [(name, coef) for name, coef in zip(feature_names, lasso.coef_) if coef != 0]
print(f"Lasso wählt {len(selected)} von {len(feature_names)} Features")
```

**Wann welches?**

| Situation | Empfehlung |
|-----------|-----------|
| Alle Features vermutlich relevant | Ridge |
| Viele irrelevante Features, will Feature-Selection | Lasso |
| Viele korrelierte Features | Elastic Net |
| Unsicher | Elastic Net (flexibelster) |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Ridge Regression](https://www.youtube.com/watch?v=Q81RR3yKn30) | Beste Erklärung |
| 🎥 Video | [StatQuest — Lasso Regression](https://www.youtube.com/watch?v=NGf0voTMlcs) | Bitte beide ansehen |
| 📖 Docs | [scikit-learn — Regularization](https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification) | API-Referenz |

## Teste dein Verständnis

- [ ] Warum setzt Lasso manche Koeffizienten auf exakt null, Ridge aber nicht?
- [ ] In welchem Szenario würdest du Elastic Net über Lasso bevorzugen?
- [ ] Wie wählst du den Regularisierungs-Parameter α? (Tipp: Cross-Validation)
- [ ] Was passiert, wenn du α sehr groß machst? Was passiert bei α → 0?
