---
title: "AutoML als Tool"
module: "8.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# AutoML als Tool

## Kernidee

AutoML automatisiert die repetitiven Teile des ML-Workflows: Modell-Auswahl, Hyperparameter-Tuning, Feature-Engineering und Ensemble-Building. 2026 ist AutoML kein Bedrohung für ML-Engineers mehr — es ist ein Tool, das schnelle Baselines liefert und Zeit für die wichtigen Entscheidungen (Features, Daten-Qualität, Problem-Formulierung) freigibt.

## Im Detail

**Was AutoML automatisiert:**

1. **Modell-Auswahl:** testet XGBoost, LightGBM, Neural Nets, Random Forests, etc.
2. **Hyperparameter-Optimierung:** Bayesian Optimization über alle Modelle.
3. **Feature-Engineering:** automatische Transformationen, Interaktionen.
4. **Ensemble-Building:** kombiniertbeste Modelle (Stacking, Blending).
5. **Cross-Validation:** automatisch für robuste Evaluation.

**AutoGluon (Amazon, empfohlen für Tabular Data):**
```python
from autogluon.tabular import TabularPredictor
import pandas as pd

# Daten als DataFrame
train_data = pd.DataFrame({'feature1': ..., 'feature2': ..., 'target': ...})

# Einfachster möglicher AutoML-Aufruf
predictor = TabularPredictor(label='target', eval_metric='rmse')
predictor.fit(train_data, time_limit=600)  # 10 Minuten Budget

# Ergebnisse
leaderboard = predictor.leaderboard()
print(leaderboard)

# Beste Vorhersage
predictions = predictor.predict(test_data)
```

**FLAML (Microsoft, schnell und leichtgewichtig):**
```python
from flaml import AutoML

automl = AutoML()
automl.fit(
    X_train, y_train,
    task='regression',
    time_budget=300,  # 5 Minuten
    metric='rmse'
)

print(f"Best Model: {automl.best_estimator}")
print(f"Best Config: {automl.best_config}")
```

**PyCaret (Low-Code, sehr interaktiv):**
```python
from pycaret.regression import setup, compare_models, pull

# Setup
exp = setup(data=train_df, target='price', session_id=42)

# Alle Modelle vergleichen
best_model = compare_models()

# Ergebnis-Tabelle
results = pull()
print(results)
```

**Wann AutoML, wann manuelles Tuning?**

| Situation | AutoML | Manuell |
|-----------|--------|---------|
| Schnelle Baseline gefragt | ✅ | |
| Neuer Datensatz, unklare Modellwahl | ✅ | |
| Production-Deployment mit Latenz-Constraints | | ✅ |
| Feature-Engineering-Experimente | | ✅ |
| Interpretierbarkeit wichtig | | ✅ |
| Zeitbudget für Tuning vorhanden | | ✅ |

**AutoML ist kein Ersatz für:**
- Datenverständnis und EDA.
- Feature Engineering aus Domänen-Wissen.
- Modell-Debugging und Fehleranalyse.
- Verstehen, warum ein Modell gut oder schlecht ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [AutoGluon Documentation](https://auto.gluon.ai) | Vollständige Referenz |
| 📖 Docs | [FLAML GitHub](https://github.com/microsoft/FLAML) | Microsoft AutoML |
| 📖 Docs | [PyCaret Documentation](https://pycaret.org) | Low-Code Option |

## Teste dein Verständnis

- [ ] Was sind die drei Schritte, die AutoML typischerweise automatisiert?
- [ ] Wann solltest du trotz AutoML manuell tunen?
- [ ] Was kann AutoML nicht automatisieren, und warum bleibt das beim Menschen?
- [ ] Wie nutzt du AutoML sinnvoll als ersten Schritt in einem neuen Projekt?
