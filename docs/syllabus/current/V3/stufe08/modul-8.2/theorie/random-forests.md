---
title: "Random Forests"
module: "8.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Random Forests

## Kernidee

Random Forest löst das Overfitting-Problem von einzelnen Decision Trees durch Ensemble-Lernng: viele Trees werden auf Bootstrap-Stichproben trainiert, und das Ergebnis ist der Mehrheitsvotum (Klassifikation) oder Durchschnitt (Regression) aller Trees. Durch zufällige Feature-Auswahl pro Split (das "Random" in Random Forest) werden die Trees bewusst wenig korreliert — das macht das Ensemble robuster als jeder einzelne Tree.

## Im Detail

**Die zwei Quellen der Randomisierung**

1. **Bootstrap-Sampling**: jeder Tree wird auf einer zufälligen Stichprobe mit Zurücklegen aus den Trainingsdaten trainiert (~63% der Daten, "Out-of-Bag"-Samples für internes Validation)
2. **Random Feature Selection**: an jedem Split werden nur √n_features zufällig ausgewählt (nicht alle) — erzwingt Diversität der Trees

**Implementierung:**
```python
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(
    n_estimators=100,    # Anzahl Trees
    max_features='sqrt', # √n_features pro Split
    max_depth=None,      # Trees wachsen vollständig (OK wegen Ensemble)
    oob_score=True,      # Out-of-Bag Score für internes Validation
    random_state=42,
    n_jobs=-1            # Alle CPU-Kerne nutzen
)
rf.fit(X_train, y_train)

print(f"OOB Score: {rf.oob_score_:.3f}")  # Kostenloses Validation-Ergebnis

# Feature Importance
importances = rf.feature_importances_
```

**Out-of-Bag Score**: da jeder Tree nur auf ~63% der Daten trainiert, können die restlichen 37% als Validation genutzt werden — kostenlose Cross-Validation-Schätzung.

**Wichtige Parameter:**
- `n_estimators`: mehr Trees = stabiler aber langsamer. Ab ~100-500 meist kein großer Unterschied mehr.
- `max_features`: `'sqrt'` für Klassifikation (Standard), `'log2'` als Alternative
- `max_depth`: kann begrenzt werden für schnellere, leichtere Modelle
- `min_samples_leaf`: Regularisierung

**Random Forest vs. Einzelner Tree:**

| Eigenschaft | Decision Tree | Random Forest |
|---|---|---|
| Overfitting | Stark | Kaum |
| Interpretierbarkeit | Sehr hoch | Mittel (Feature Importance) |
| Performance | Schwächer | Stärker |
| Geschwindigkeit | Schnell | Langsamer |

**2026-Status:** Random Forest ist eine solide Baseline, wird aber bei Performance-Anforderungen meist von XGBoost/LightGBM geschlagen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Random Forests](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) | Sehr anschaulich |
| 📖 Docs | [scikit-learn — Random Forests](https://scikit-learn.org/stable/modules/ensemble.html#forests-of-randomized-trees) | Parameter-Referenz |

## Teste dein Verständnis

- [ ] Was sind die zwei Quellen der Randomisierung bei Random Forest?
- [ ] Was ist der OOB Score und warum ist er nützlich?
- [ ] Warum ist Random Forest robuster als ein einzelner Decision Tree?
- [ ] Wann würdest du Random Forest gegenüber XGBoost bevorzugen?
