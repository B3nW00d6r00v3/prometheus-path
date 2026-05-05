---
title: "Regressions-Metriken"
module: "8.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Regressions-Metriken

## Kernidee

Nicht alle Regressions-Fehler sind gleich. RMSE bestraft große Fehler überproportional, MAE behandelt alle Fehler gleich. R² sagt aus, wieviel Varianz das Modell erklärt. Die richtige Metrik hängt vom Business-Problem ab — wer große Ausreißer bestraft werden will (Sicherheit, Medizin), nimmt RMSE; wer interpretierbare durchschnittliche Fehler will, nimmt MAE.

## Im Detail

**RMSE — Root Mean Squared Error:**
```
RMSE = √(1/n × Σ (yᵢ - ŷᵢ)²)
```
- Einheit: gleich wie Target (z.B. Euro, Grad Celsius)
- Große Fehler werden überproportional bestraft (wegen Quadrierung)
- Sensitiv gegen Outliers
- Standard in Kaggle-Wettbewerben

**MAE — Mean Absolute Error:**
```
MAE = 1/n × Σ |yᵢ - ŷᵢ|
```
- Einheit: gleich wie Target
- Alle Fehler werden gleich behandelt
- Robust gegen Outliers
- Leichter zu erklären ("im Durchschnitt liegen wir X Euro daneben")

**MAPE — Mean Absolute Percentage Error:**
```
MAPE = 1/n × Σ |yᵢ - ŷᵢ| / |yᵢ| × 100%
```
- Skalenunabhängig — gut zum Vergleich über verschiedene Datensätze
- Problem: wenn yᵢ nahe null, explodiert MAPE
- Alternative: SMAPE (Symmetric MAPE)

**R² — Bestimmtheitsmaß:**
```
R² = 1 - (Σ(yᵢ - ŷᵢ)²) / (Σ(yᵢ - ȳ)²)
```
- Skala: 0 bis 1 (kann auch negativ werden bei schlechten Modellen)
- Bedeutung: "das Modell erklärt X% der Varianz im Target"
- Problem: steigt mechanisch mit mehr Features → Adjusted R² für Modell-Vergleich

**Implementierung:**
```python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

y_pred = model.predict(X_test)

rmse = np.sqrt(mean_squared_error(y_test, y_pred))
mae  = mean_absolute_error(y_test, y_pred)
r2   = r2_score(y_test, y_pred)
mape = np.mean(np.abs((y_test - y_pred) / y_test)) * 100

print(f"RMSE: {rmse:.2f}")
print(f"MAE:  {mae:.2f}")
print(f"R²:   {r2:.3f}")
print(f"MAPE: {mape:.1f}%")
```

**Welche Metrik wann?**

| Situation | Empfehlung |
|-----------|-----------|
| Outliers im Trainingsset, nicht im Test | MAE |
| Große Fehler sollen stark bestraft werden | RMSE |
| Skalenunabhängiger Vergleich (z.B. verschiedene Produkte) | MAPE |
| Baseline-Vergleich ("wie gut erklärt das Modell?") | R² |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Regression Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics) | Vollständige Übersicht |
| 📖 Artikel | [Towards Data Science — Regression Metrics](https://towardsdatascience.com/what-are-the-best-metrics-to-evaluate-your-regression-model-418ca4536153) | Vergleich mit Praxis-Beispielen |

## Teste dein Verständnis

- [ ] Ein Modell hat RMSE=100 und MAE=60. Was verrät dieser Unterschied über die Fehlerverteilung?
- [ ] Warum ist R²=0.95 kein Beweis für ein gutes Modell?
- [ ] Wann schlägt MAPE fehl? Nenne ein konkretes Beispiel.
- [ ] Du vergleichst Modelle auf drei verschiedenen Datensätzen mit unterschiedlichen Skalen. Welche Metrik nimmst du?
