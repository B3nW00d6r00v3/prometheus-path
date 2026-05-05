---
title: "Calibration"
module: "8.2"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Calibration

## Kernidee

Ein kalibriertes Modell sagt, wenn es "80% Wahrscheinlichkeit" ausgibt, dass in 80% der solchen Fälle tatsächlich die positive Klasse zutrifft. Viele Modelle sind von Natur aus nicht kalibriert — Random Forests und Gradient Boosting neigen zu extremen Wahrscheinlichkeiten (nahe 0 oder 1). Calibration ist besonders wichtig wenn Wahrscheinlichkeiten in nachgelagerte Entscheidungen einfließen, z.B. "investiere 50€ wenn Conversion-Wahrscheinlichkeit > 70%".

## Im Detail

**Wie erkennt man schlechte Calibration?**

Reliability Diagram (Calibration Curve): Plotte vorhergesagte Wahrscheinlichkeit gegen tatsächliche Häufigkeit. Ein perfekt kalibriertes Modell liegt auf der Diagonale.

```python
from sklearn.calibration import calibration_curve
import matplotlib.pyplot as plt

prob_true, prob_pred = calibration_curve(y_test, y_proba[:, 1], n_bins=10)

plt.plot(prob_pred, prob_true, 's-', label='Modell')
plt.plot([0, 1], [0, 1], 'k--', label='Perfekt kalibriert')
plt.xlabel('Vorhergesagte Wahrscheinlichkeit')
plt.ylabel('Tatsächliche Häufigkeit')
plt.legend()
plt.show()
```

**Typische Calibration-Probleme:**
- **Overfitting**: Modell sagt extreme Werte (0.01 oder 0.99) → curve ist S-förmig
- **Naive Bayes**: neigt zu überkonfidenten Wahrscheinlichkeiten
- **Random Forest / Gradient Boosting**: neigen zu mittleren Wahrscheinlichkeiten (zu wenig extrem)

**Calibration-Methoden**

**Platt Scaling (Sigmoid Calibration)**
Logistische Regression auf den Modell-Output angewendet:
```python
from sklearn.calibration import CalibratedClassifierCV

calibrated = CalibratedClassifierCV(base_model, method='sigmoid', cv=5)
calibrated.fit(X_train, y_train)
```

**Isotonic Regression**
Nicht-parametrisch, flexibler als Platt Scaling. Mehr Daten nötig.
```python
calibrated = CalibratedClassifierCV(base_model, method='isotonic', cv=5)
```

**Wann ist Calibration wichtig?**
- Wenn Wahrscheinlichkeiten direkt in Entscheidungen fließen (Pricing, Risk-Scoring)
- Wenn mehrere Modelle kombiniert werden
- Bei starker Imbalance im Trainingset

**Wann ist Calibration weniger wichtig?**
- Wenn nur Rankings (Sortierung nach Score) relevant sind
- Wenn ein fester Threshold genutzt wird (dann ist absolute Probability egal)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Calibration](https://scikit-learn.org/stable/modules/calibration.html) | Mit Reliability-Diagram-Beispielen |
| 📖 Tutorial | [Towards Data Science — Probability Calibration](https://towardsdatascience.com/probability-calibration) | Platt vs. Isotonic |

## Teste dein Verständnis

- [ ] Was bedeutet ein kalibriertes Modell in einem Satz?
- [ ] Was zeigt ein Reliability Diagram?
- [ ] Wann würdest du Isotonic statt Platt Scaling wählen?
- [ ] Nenne einen Use-Case, wo schlechte Calibration zu echten Business-Schäden führt.
