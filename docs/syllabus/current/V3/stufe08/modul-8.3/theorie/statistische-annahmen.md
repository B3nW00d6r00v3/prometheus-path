---
title: "Statistische Annahmen der Linearen Regression"
module: "8.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Statistische Annahmen der Linearen Regression

## Kernidee

Lineare Regression liefert nur dann valide Konfidenzintervalle und p-Werte, wenn bestimmte statistische Annahmen erfüllt sind. Wer diese Annahmen ignoriert, bekommt zwar Koeffizienten — aber die Unsicherheitsangaben sind wertlos. Diagnostische Plots machen Verletzungen sichtbar.

## Im Detail

**Die vier zentralen Annahmen:**

**1. Linearität** — die Beziehung zwischen Features und Target ist linear.
- Check: Residuals vs. Fitted Plot — bei Linearität liegt kein Muster vor.
- Verletzung: systematische Kurve im Plot → Polynomial-Features oder anderes Modell.

**2. Normalverteilung der Residuen** — die Fehler (ŷ - y) sind normalverteilt.
- Check: Q-Q-Plot der Residuen — bei Normalverteilung liegen Punkte auf der Diagonale.
- Verletzung: Outliers, schiefe Verteilung → Transformation (log, sqrt) oder robuste Regression.

**3. Homoskedastizität** — die Varianz der Residuen ist konstant über alle Fitted Values.
- Check: Scale-Location-Plot — bei Homoskedastizität kein Fächer-Muster.
- Verletzung: Heteroskedastizität → White-korrigierte Standardfehler oder WLS (Weighted Least Squares).

**4. Keine Multikollinearität** — Features sind nicht stark miteinander korreliert.
- Check: Variance Inflation Factor (VIF) — VIF > 5 ist kritisch, VIF > 10 ist ein Problem.
- Verletzung: Koeffizienten instabil, falsche Richtung → Feature-Auswahl, PCA, Ridge-Regression.

**Diagnostik in Python:**
```python
import statsmodels.api as sm
import matplotlib.pyplot as plt
from statsmodels.stats.outliers_influence import variance_inflation_factor
import pandas as pd
import numpy as np

# Model mit statsmodels (gibt p-Werte und Konfidenzintervalle)
X_with_const = sm.add_constant(X_train)
model = sm.OLS(y_train, X_with_const).fit()
print(model.summary())

# VIF berechnen
vif_data = pd.DataFrame()
vif_data["feature"] = X_train.columns
vif_data["VIF"] = [variance_inflation_factor(X_train.values, i)
                   for i in range(len(X_train.columns))]
print(vif_data)

# Residual-Plots
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
sm.graphics.plot_regress_exog(model, X_train.columns[0], fig=fig)
plt.tight_layout()
```

**Wann sind Annahmen wirklich wichtig?**

- **Für Vorhersage** (Kaggle, Production-ML): Annahmen weniger kritisch — RMSE interessiert, nicht Konfidenzintervalle.
- **Für statistische Inferenz** (welcher Effekt ist signifikant?): Annahmen sind entscheidend. Verletzungen führen zu falschen Schlüssen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Online | [Penn State — Regression Diagnostics](https://online.stat.psu.edu/stat462/node/117/) | Hervorragende Erklärungen |
| 📖 Docs | [statsmodels — Regression](https://www.statsmodels.org/stable/regression.html) | Python-Implementierung |
| 🎥 Video | [StatQuest — Residuals](https://www.youtube.com/watch?v=yMgFHbjbAW8) | Visuelle Erklärung |

## Teste dein Verständnis

- [ ] Was bedeutet Homoskedastizität und wie erkennst du eine Verletzung im Plot?
- [ ] Warum macht Multikollinearität Koeffizienten unzuverlässig, aber schadet der Vorhersage kaum?
- [ ] Wann solltest du statsmodels statt scikit-learn für Lineare Regression verwenden?
- [ ] Was machst du, wenn deine Residuen stark rechtsschief verteilt sind?
