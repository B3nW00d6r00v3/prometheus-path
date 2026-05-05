---
title: "Polynomial und Interaction Features"
module: "8.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Polynomial und Interaction Features

## Kernidee

Wenn die Beziehung zwischen Features und Target nicht linear ist, kannst du Polynomial Features erzeugen — also x², x³, x·y — und damit einen linearen Klassifikator auf eine nicht-lineare Kurve bringen. Der Trick: du erweiterst den Feature-Raum, bleibst aber bei linearen Methoden. Vorsicht: mehr Features bedeuten mehr Overfitting-Risiko.

## Im Detail

**Polynomial Features:**

Aus einem Feature `x` erzeugst du `[x, x², x³, ...]`:
```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline
from sklearn.linear_model import Ridge

# Polynomial-Features + Regularisierung (Pflicht!)
poly_pipeline = Pipeline([
    ('poly', PolynomialFeatures(degree=2, include_bias=False)),
    ('ridge', Ridge(alpha=1.0))
])
poly_pipeline.fit(X_train, y_train)
```

Aus zwei Features `[x₁, x₂]` mit degree=2 werden:
`[x₁, x₂, x₁², x₁x₂, x₂²]`

**Interaction Features:**

Manchmal ist der Effekt zweier Features zusammen interessant, aber jedes für sich nicht. Beispiel: `Alter × Einkommen` als Feature, wenn weder Alter noch Einkommen allein den Kauf erklärt, aber die Kombination schon.

```python
# Nur Interactions, keine Potenzen
poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
X_interactions = poly.fit_transform(X_train)
```

**Warum immer mit Regularisierung kombinieren?**

Polynomial Features erhöhen die Anzahl der Features dramatisch: aus 10 Features mit degree=2 werden 65 Features. Ohne Regularisierung overfit das Modell garantiert.

**Feature-Explosion:**
```
p Features, degree d → Anzahl Features = C(p+d, d)
10 Features, degree 2 → 65
10 Features, degree 3 → 285
10 Features, degree 4 → 1001
```

**Alternative: nicht-lineare Modelle**

Für nicht-lineare Zusammenhänge sind Decision Trees / Boosting-Modelle oft eleganter als Polynomial-Regression — sie lernen die Nicht-Linearität implizit, ohne Feature-Explosion.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Polynomial Features](https://scikit-learn.org/stable/modules/preprocessing.html#polynomial-features) | API und Beispiele |
| 📖 Artikel | [Towards Data Science — Feature Engineering](https://towardsdatascience.com/feature-engineering-for-machine-learning-3a5e293a5114) | Praktische Übersicht |

## Teste dein Verständnis

- [ ] Wie viele Features entstehen aus 5 originalen Features mit degree=3?
- [ ] Warum ist Regularisierung bei Polynomial Features besonders wichtig?
- [ ] Wann würdest du Polynomial Features einem Boosting-Modell vorziehen?
- [ ] Was ist der Unterschied zwischen `interaction_only=True` und `degree=2`?
