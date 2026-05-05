---
title: "Confusion Matrix"
module: "8.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Confusion Matrix

## Kernidee

Die Confusion Matrix ist das Fundament aller Klassifikations-Metriken — vier Quadranten zeigen, welche Vorhersagen richtig waren (True) und welche falsch (False), getrennt nach den zwei Klassen. Accuracy, Precision, Recall, F1-Score und ROC-AUC leiten sich alle direkt aus diesen vier Zahlen ab. Wer die Confusion Matrix nicht lesen kann, versteht keine Klassifikations-Eval.

## Im Detail

**Die vier Quadranten (binäre Klassifikation)**

|  | Vorhergesagt: Positiv | Vorhergesagt: Negativ |
|---|---|---|
| **Tatsächlich: Positiv** | **TP** True Positive | **FN** False Negative |
| **Tatsächlich: Negativ** | **FP** False Positive | **TN** True Negative |

- **TP (True Positive)**: Modell sagt positiv, ist wirklich positiv ✅
- **TN (True Negative)**: Modell sagt negativ, ist wirklich negativ ✅
- **FP (False Positive)**: Modell sagt positiv, ist eigentlich negativ ❌ (Typ-I-Fehler)
- **FN (False Negative)**: Modell sagt negativ, ist eigentlich positiv ❌ (Typ-II-Fehler)

**Beispiel: Spam-Filter**
- TP: E-Mail ist Spam, Modell markiert als Spam → gut
- TN: E-Mail ist Ham, Modell lässt durch → gut
- FP: E-Mail ist Ham, Modell markiert als Spam → schlecht (wichtige Mail verloren!)
- FN: E-Mail ist Spam, Modell lässt durch → schlecht (Spam im Posteingang)

Je nach Use-Case sind FP oder FN teurer — das bestimmt, welche Metrik optimiert wird.

**Implementierung:**
```python
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

cm = confusion_matrix(y_test, y_pred)
disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                               display_labels=['Ham', 'Spam'])
disp.plot(cmap='Blues')
plt.show()

# Manuell lesen
tn, fp, fn, tp = cm.ravel()
print(f"TP={tp}, FP={fp}, TN={tn}, FN={fn}")
```

*Eval-Querschnitt-Anker: Confusion Matrix ist auch das Fundament für Klassifikations-Eval in LLM-Anwendungen. Wenn du einen LLM als Klassifikator nutzt (z.B. "Ist dieser Prompt schädlich?"), wertest du mit exakt denselben Metriken aus.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Wikipedia | [Confusion Matrix](https://en.wikipedia.org/wiki/Confusion_matrix) | Vollständige Übersicht |
| 📖 Docs | [scikit-learn — Confusion Matrix](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html) | API-Referenz |
| 📖 Tutorial | [Google ML Crash Course — Confusion Matrix](https://developers.google.com/machine-learning/crash-course/classification/true-false-positive-negative) | Mit Visualisierungen |

## Teste dein Verständnis

- [ ] Erkläre TP, FP, TN, FN ohne nachzuschauen.
- [ ] Spam-Filter: wäre ein FP oder FN ärgerlicher? Warum?
- [ ] Medical Diagnosis (Krebs): wäre ein FP oder FN gefährlicher?
- [ ] Was ist der Typ-I-Fehler und was der Typ-II-Fehler?
