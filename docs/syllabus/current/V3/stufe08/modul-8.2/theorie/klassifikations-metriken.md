---
title: "Klassifikations-Metriken"
module: "8.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Klassifikations-Metriken

## Kernidee

Accuracy ist fast immer die falsche Hauptmetrik — sie sagt "wie viel Prozent hast du richtig?" und ist bei Class Imbalance irreführend. Precision und Recall messen komplementäre Aspekte der Klassifikations-Qualität, F1-Score vermittelt zwischen ihnen. ROC-AUC und PR-AUC sind threshold-unabhängige Maße der gesamten Trennfähigkeit. Die Wahl der richtigen Metrik ist eine inhaltliche Entscheidung, keine technische.

## Im Detail

**Die Formeln (aus TP, FP, TN, FN)**

```
Accuracy  = (TP + TN) / (TP + TN + FP + FN)
Precision = TP / (TP + FP)   — "Wie viele meiner Positiv-Vorhersagen stimmen?"
Recall    = TP / (TP + FN)   — "Wie viele echten Positiven finde ich?"
F1        = 2 × (Precision × Recall) / (Precision + Recall)
```

**Precision vs. Recall — der Trade-off**

Du kannst nicht beides maximieren. Wenn du sehr vorsichtig bist (niedrige Threshold → sagt selten "positiv"):
- Precision steigt (wenn du sagst "positiv", bist du dir sicher)
- Recall sinkt (viele echte Positive werden als negativ markiert)

Wann Precision wichtiger?
- Spam-Filter: FP (Ham als Spam markiert) ist ärgerlich
- Recommendation System: du willst nur relevante Empfehlungen zeigen

Wann Recall wichtiger?
- Krebs-Screening: FN (Krebs übersehen) ist gefährlich
- Fraud Detection: du willst keinen Betrug verpassen

**F1-Score**

Harmonisches Mittel von Precision und Recall. Gut wenn du einen Kompromiss brauchst und beide Metriken wichtig sind. Kann auch gewichtet werden: `F_β = (1 + β²) × (P × R) / (β² × P + R)` mit β>1 wenn Recall wichtiger.

**ROC-AUC**

Receiver Operating Characteristic — Area Under Curve. Plottet TPR (=Recall) gegen FPR bei verschiedenen Thresholds. AUC = 0.5: zufällig. AUC = 1.0: perfekt. Threshold-unabhängig, gut für balancierte Klassen.

**PR-AUC (Precision-Recall AUC)**

Bei stark unbalancierten Klassen (z.B. 1% Positiv) besser als ROC-AUC, weil ROC-AUC durch viele TN "aufgebläht" wird.

```python
from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                              f1_score, roc_auc_score,
                              average_precision_score, classification_report)

print(classification_report(y_test, y_pred))

roc_auc = roc_auc_score(y_test, y_proba[:, 1])
pr_auc = average_precision_score(y_test, y_proba[:, 1])
```

*Eval-Querschnitt-Anker: Precision, Recall, F1 sind universell — auch LLM-Klassifikations-Outputs (Modul 5.0/5.4) werden mit diesen Metriken bewertet. Ein LLM, der Prompts als "schädlich" oder "harmlos" klassifiziert, wird mit denselben Formeln gemessen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Tutorial | [Google — Precision and Recall](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall) | Mit Visualisierungen |
| 📖 Docs | [scikit-learn — Classification Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) | Alle Formeln |
| 🎥 Video | [StatQuest — ROC and AUC](https://www.youtube.com/watch?v=4jRBRDbJemM) | Pflichtanschau |

## Teste dein Verständnis

- [ ] Warum ist 99% Accuracy beim Spam-Filter kein gutes Ergebnis?
- [ ] Wann wählst du PR-AUC statt ROC-AUC?
- [ ] Erkläre den Precision-Recall-Trade-off ohne Formeln.
- [ ] Was bedeutet AUC = 0.5?
