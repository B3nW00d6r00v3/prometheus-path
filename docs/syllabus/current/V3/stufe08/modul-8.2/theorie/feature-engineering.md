---
title: "Feature Engineering"
module: "8.2"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Feature Engineering

## Kernidee

Gut gewählte Features schlagen 2026 oft mehr Daten oder größere Modelle — das gilt auch in der Ära von LLMs für tabellarische Daten. Feature Engineering bedeutet, aus rohen Eingabe-Daten informativere Repräsentationen zu erstellen: Encoding kategorischer Werte, Interaktions-Features, Domain-spezifische Transformationen. Es ist die Schnittstelle zwischen Domänenwissen und Algorithmus.

## Im Detail

**Encoding kategorischer Features**

**One-Hot Encoding**: erstellt für jede Kategorie eine binäre Spalte.
```python
import pandas as pd
df_encoded = pd.get_dummies(df, columns=['Farbe', 'Region'])
```
Gut bei wenigen Kategorien (< 20). Problem: bei hoher Kardinalität entstehen zu viele Spalten.

**Target Encoding**: ersetzt Kategorie durch mittleren Target-Wert dieser Kategorie.
```python
from sklearn.preprocessing import TargetEncoder
te = TargetEncoder()
X_encoded = te.fit_transform(X_train, y_train)
```
Gut bei hoher Kardinalität. Vorsicht: Leakage-Risiko — immer in Pipeline verwenden.

**Ordinal Encoding**: für geordnete Kategorien (klein < mittel < groß).
```python
from sklearn.preprocessing import OrdinalEncoder
oe = OrdinalEncoder(categories=[['klein', 'mittel', 'groß']])
```

**Polynomial und Interaction Features**

Erstelle Features höherer Ordnung:
```python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
X_poly = poly.fit_transform(X)  # Enthält alle Produkte von Feature-Paaren
```

Vorsicht: bei vielen Features explodiert die Dimensionalität schnell (n² Interaktions-Features).

**Domain-spezifische Features**

Das ist der Bereich, in dem Expertise am meisten zählt:
- Zeitreihen: Wochentag, Stunde, Saison, Lag-Features, Rolling-Averages
- Finanz: Rendite statt Preis, Volatilität, Momentum
- Geo: Entfernung zu Hotspots, Postleitzahl-Cluster, Urbanitätsgrad
- Text (vor LLM): TF-IDF, Wortlänge, Satzzeichen-Häufigkeit

**Feature Selection**

Nicht alle Features sind nützlich — viele erhöhen nur das Rauschen:
```python
from sklearn.feature_selection import SelectKBest, f_classif

selector = SelectKBest(f_classif, k=10)
X_selected = selector.fit_transform(X_train, y_train)
```

Alternativen: Recursive Feature Elimination (RFE), SHAP-basierte Feature Selection.

**Kaggle-Lektion:** Oft entscheidet Feature Engineering Wettbewerbe mehr als Modell-Wahl.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎓 Kurs | [Kaggle — Feature Engineering](https://www.kaggle.com/learn/feature-engineering) | Praktisch und kompakt |
| 📖 Buch | [Christoph Molnar — Feature Engineering](https://featurewisdom.substack.com) | Theorie und Praxis |

## Teste dein Verständnis

- [ ] Wann wählst du Target Encoding statt One-Hot Encoding?
- [ ] Was sind "Interaction Features" und wann sind sie nützlich?
- [ ] Nenne drei Domain-spezifische Features für einen E-Commerce-Datensatz.
- [ ] Warum kann zu viel Feature Engineering zu Overfitting führen?
