---
title: "Cross-Validation"
module: "8.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Cross-Validation

## Kernidee

Ein einzelner Train/Test-Split gibt eine instabile Performance-Schätzung — je nach Zufall landet ein "schwieriger" Subset im Test-Set und das Modell sieht schlechter aus als es ist, oder umgekehrt. k-Fold Cross-Validation teilt die Daten in k Gruppen, trainiert k-mal (jede Gruppe einmal als Test-Set), und mittelt die Ergebnisse. Das Ergebnis ist zuverlässiger und zeigt außerdem die Varianz der Performance.

## Im Detail

**k-Fold Cross-Validation**

```python
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

# Pipeline: Skalierung + Modell als Einheit
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(random_state=42))
])

scores = cross_val_score(pipe, X, y, cv=5, scoring='f1')
print(f"F1: {scores.mean():.3f} ± {scores.std():.3f}")
```

Typisch: k=5 oder k=10. Mehr k → stabiler, aber teurer.

**Stratified k-Fold für Imbalance**

Bei Class Imbalance: stellt sicher, dass jeder Fold dieselbe Klassenverteilung hat wie der Gesamtdatensatz:

```python
from sklearn.model_selection import StratifiedKFold, cross_val_score

skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(pipe, X, y, cv=skf, scoring='roc_auc')
```

**Leave-One-Out (LOO)**

Extreme Variante: k=n. Jede Beobachtung ist einmal Test-Set. Sehr stabil, aber rechenintensiv. Nur für sehr kleine Datensätze sinnvoll.

**Pitfall: Data Leakage in Pipelines**

```python
# ❌ FALSCH: Scaler auf gesamten Daten gefit (Leakage!)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
cross_val_score(rf, X_scaled, y, cv=5)  # Skalierung "sieht" Test-Daten

# ✅ RICHTIG: Scaler in Pipeline — wird pro Fold separat gefit
pipe = Pipeline([('scaler', StandardScaler()), ('clf', rf)])
cross_val_score(pipe, X, y, cv=5)  # Korrekt
```

**Cross-Validation-Metriken:**
- `scoring='accuracy'`, `'f1'`, `'roc_auc'`, `'precision'`, `'recall'`
- `cross_validate` für mehrere Metriken gleichzeitig

```python
from sklearn.model_selection import cross_validate

results = cross_validate(pipe, X, y, cv=5,
                         scoring=['f1', 'roc_auc'],
                         return_train_score=True)
```

*Eval-Querschnitt-Anker: Cross-Validation ist die robustere Alternative zu Single-Run-Eval — das ist derselbe Grund, warum in Modul 5.4 mehrere Eval-Runs gefordert sind statt einem einzelnen Lauf.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Cross-Validation](https://scikit-learn.org/stable/modules/cross_validation.html) | Vollständige Dokumentation |
| 🎥 Video | [StatQuest — Cross-Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) | Visuelle Erklärung |

## Teste dein Verständnis

- [ ] Warum ist k-Fold zuverlässiger als ein einzelner Train/Test-Split?
- [ ] Was ist Data Leakage und wie verhindert eine Pipeline es?
- [ ] Wann wählst du Stratified k-Fold statt normalem k-Fold?
- [ ] Was bedeutet `F1: 0.82 ± 0.06`?
