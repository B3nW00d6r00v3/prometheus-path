---
title: "Class Imbalance"
module: "8.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Class Imbalance

## Kernidee

Class Imbalance ist der häufigste Praxis-Fall in echten ML-Projekten — wenn 99% der Samples zur Klasse "negativ" gehören, lernt ein naiver Klassifikator einfach "alles ist negativ" und hat 99% Accuracy. Das Problem: Precision, Recall und F1 für die Minderheitsklasse sind dann 0. Vier Lösungsansätze decken die wichtigsten Fälle ab: Class Weights, SMOTE, Threshold-Tuning und Anomaly Detection.

## Im Detail

**Warum Accuracy lügt bei Imbalance**

Beispiel: 99% Ham, 1% Spam. Modell "sagt immer Ham":
- Accuracy = 99% ✅
- Spam-Precision = 0% ❌
- Spam-Recall = 0% ❌
- F1 (Spam) = 0% ❌

**Lösung 1: Class Weights**

Teile dem Algorithmus mit, dass Fehler bei der Minderheitsklasse stärker bestrafen sollen:

```python
from sklearn.linear_model import LogisticRegression

lr = LogisticRegression(class_weight='balanced')  # Automatisch berechnet
# Oder manuell:
lr = LogisticRegression(class_weight={0: 1, 1: 99})  # 1% Spam → 99× gewichten
```

Unterstützt von scikit-learn in vielen Klassifikatoren. Einfachste Lösung, oft ausreichend.

**Lösung 2: SMOTE (Synthetic Minority Oversampling Technique)**

Erstellt synthetische Samples der Minderheitsklasse durch Interpolation zwischen echten Samples:

```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
```

Wichtig: SMOTE nur auf Trainingsdaten anwenden, nie auf Testdaten!

Varianten: SMOTE-NC (für kategorische Features), ADASYN (adaptiv, mehr Synthese wo Modell schwächer ist).

**Lösung 3: Threshold-Tuning**

Standard-Threshold ist 0.5. Bei Imbalance kann ein niedrigerer Threshold Recall der Minderheitsklasse steigern:

```python
from sklearn.metrics import precision_recall_curve

probs = model.predict_proba(X_test)[:, 1]
precisions, recalls, thresholds = precision_recall_curve(y_test, probs)

# Threshold wählen der F1 maximiert
f1_scores = 2 * (precisions * recalls) / (precisions + recalls)
best_threshold = thresholds[f1_scores[:-1].argmax()]

y_pred_custom = (probs >= best_threshold).astype(int)
```

**Lösung 4: Anomaly Detection**

Bei extremer Imbalance (0.1% positiv) manchmal besser als klassische Klassifikation: Modell lernt nur die "normalen" Samples und markiert alles Ungewöhnliche als positiv.

```python
from sklearn.ensemble import IsolationForest

iso = IsolationForest(contamination=0.01, random_state=42)
iso.fit(X_train_normal)  # Nur Mehrheitsklasse
scores = iso.decision_function(X_test)
```

**Stratified Sampling bei Evaluation**

Wichtig: Immer Stratified k-Fold für Cross-Validation bei Imbalance:

```python
from sklearn.model_selection import StratifiedKFold

skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [imbalanced-learn Library](https://imbalanced-learn.org) | SMOTE und alle Varianten |
| 📖 Tutorial | [Towards Data Science — Class Imbalance](https://towardsdatascience.com/handling-imbalanced-datasets) | Vollständiger Vergleich |
| 📖 Tutorial | [scikit-learn — Imbalanced Datasets](https://scikit-learn.org/stable/auto_examples/classification/plot_classification_probability.html) | Offizielle Beispiele |

## Teste dein Verständnis

- [ ] Warum ist 99% Accuracy kein Beweis für ein gutes Modell?
- [ ] Was ist der Unterschied zwischen Oversampling und Class Weights?
- [ ] Warum darf SMOTE nicht auf Testdaten angewendet werden?
- [ ] Bei Fraud Detection (0.1% positive): welche Lösung würdest du zuerst probieren?
