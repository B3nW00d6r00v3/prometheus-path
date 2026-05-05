---
title: "SHAP und LIME"
module: "8.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# SHAP und LIME

## Kernidee

SHAP (SHapley Additive exPlanations) und LIME (Local Interpretable Model-agnostic Explanations) erklären, warum ein Modell für einen bestimmten Datenpunkt eine bestimmte Vorhersage getroffen hat. In Production-Systemen ist Erklärbarkeit oft Pflicht — für Compliance, für User-Trust, für Debugging. SHAP ist 2026 der Industriestandard für tabellarische Modelle.

## Im Detail

**SHAP — Spieltheorie für Feature-Wichtigkeit**

SHAP basiert auf Shapley-Werten aus der Spieltheorie: wie viel trägt jedes Feature zur Vorhersage bei, wenn man alle Kombinationen berücksichtigt?

Für jeden Datenpunkt und jedes Feature: Shapley-Wert = durchschnittliche marginale Beitrag über alle Feature-Kombinationen.

```python
import shap
from xgboost import XGBClassifier

model = XGBClassifier()
model.fit(X_train, y_train)

# SHAP Explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Globale Feature-Wichtigkeit (Beeswarm Plot)
shap.summary_plot(shap_values, X_test, feature_names=feature_names)

# Einzelne Vorhersage erklären (Waterfall Plot)
shap.waterfall_plot(explainer(X_test[0:1]))

# Force Plot für eine Vorhersage
shap.force_plot(explainer.expected_value, shap_values[0], X_test.iloc[0])
```

**SHAP-Interpretationen:**
- **Globale Wichtigkeit**: welche Features beeinflussen das Modell am stärksten?
- **Lokale Erklärung**: warum wurde dieser spezielle User als "Churn" markiert?
- **Dependence Plots**: wie hängt Feature X mit der Vorhersage zusammen?

**LIME — Lokale Approximation**

LIME erklärt einzelne Vorhersagen durch ein lokales lineares Modell, das im Umfeld des Datenpunkts trainiert wird.

```python
from lime import lime_tabular

explainer = lime_tabular.LimeTabularExplainer(
    X_train,
    feature_names=feature_names,
    class_names=['Negativ', 'Positiv'],
    mode='classification'
)

exp = explainer.explain_instance(X_test[0], model.predict_proba, num_features=10)
exp.show_in_notebook()
```

**SHAP vs. LIME:**

| Eigenschaft | SHAP | LIME |
|---|---|---|
| Theoretische Fundierung | Stark (Spieltheorie) | Mittel |
| Konsistenz | Global konsistent | Lokal, kann variieren |
| Geschwindigkeit | Schnell für Trees | Langsamer |
| 2026-Status | Industriestandard | Noch verwendet |

**Wann ist Explainability Pflicht?**
- Kredit-Entscheidungen (gesetzlich in EU/DE)
- Medizinische Diagnose-Unterstützung
- HR-Entscheidungen (Bewerber-Ablehnung)
- Jedes Modell mit regulatorischen Anforderungen

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [SHAP Library](https://shap.readthedocs.io) | Offizielle Dokumentation mit Beispielen |
| 📖 Buch | [Christoph Molnar — Interpretable ML Book (kostenlos)](https://christophm.github.io/interpretable-ml-book/) | Vollständiges freies Buch |
| 🎥 Video | [SHAP Tutorial (Kaggle)](https://www.kaggle.com/learn/machine-learning-explainability) | Interaktiver Kurs |

## Teste dein Verständnis

- [ ] Was ist ein Shapley-Wert in einem Satz?
- [ ] Nenne den Unterschied zwischen globaler und lokaler SHAP-Erklärung.
- [ ] In welchen Industries ist Explainability gesetzlich vorgeschrieben?
- [ ] Warum ist SHAP bei Tree-Modellen besonders effizient?
