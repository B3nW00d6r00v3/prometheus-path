---
title: "Lineare Regression"
module: "8.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Lineare Regression

## Kernidee

Lineare Regression ist die einfachste Form der Vorhersage: eine gewichtete Summe von Features ergibt den vorhergesagten Wert. Mathematisch gesehen ist sie entweder durch die Normal-Equation (analytisch, direkt) oder durch Gradient Descent (iterativ, skalierbar) lösbar. Als Baseline in fast jedem Regressions-Projekt unverzichtbar — ohne Baseline weißt du nicht, ob dein komplexeres Modell wirklich besser ist.

## Im Detail

**Das Modell**

```
ŷ = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ = Xw + b
```

**Loss: Mean Squared Error (MSE)**
```
MSE = (1/n) Σ (yᵢ - ŷᵢ)²
```

**Zwei Lösungsansätze:**

**Normal-Equation (analytisch):**
```
w = (XᵀX)⁻¹ Xᵀy
```
Direkte Lösung, kein iteratives Training. Problem: bei großen Datensätzen teuer (Matrixinversion ist O(n³)).

**Gradient Descent (iterativ):**
```
w := w - α × ∂MSE/∂w
```
Skaliert auf große Datensätze. Standard für Neural Networks.

**Implementierung:**
```python
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('lr', LinearRegression())
])
pipe.fit(X_train, y_train)

y_pred = pipe.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")

# Koeffizienten interpretieren
lr = pipe.named_steps['lr']
for name, coef in zip(feature_names, lr.coef_):
    print(f"  {name}: {coef:.4f}")
```

**Interpretierbarkeit:**

Lineare Regression ist vollständig interpretierbar: jeder Koeffizient gibt an, wie viel sich ŷ ändert, wenn das entsprechende Feature um eine Einheit steigt (bei skalierten Daten: um eine Standardabweichung).

**Stärken:**
- Sehr interpretierbar
- Schnell
- Solide Baseline
- Keine Hyperparameter

**Schwächen:**
- Nimmt Linearität an
- Sensitiv gegen Outliers (wegen MSE)
- Multikollinearität kann Koeffizienten instabil machen

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Linear Regression](https://www.youtube.com/watch?v=nk2CQITm_eo) | Pflichtanschau |
| 📖 Docs | [scikit-learn — Linear Regression](https://scikit-learn.org/stable/modules/linear_model.html) | API-Referenz |
| 📖 Online | [Penn State STAT 501](https://online.stat.psu.edu/stat501/) | Statistik-Foundation |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Normal-Equation und Gradient Descent?
- [ ] Was sagt ein Koeffizient bei skalierten Features aus?
- [ ] Warum ist Lineare Regression ein schlechtes Produktions-Modell für Preisvorhersage, aber eine gute Baseline?
- [ ] Wie erkennst du, ob lineare Regression für dein Problem geeignet ist?
