---
title: "Multiclass vs. Multilabel"
module: "8.2"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Multiclass vs. Multilabel

## Kernidee

Multiclass-Klassifikation bedeutet, genau eine von K Klassen auszuwählen. Multilabel-Klassifikation erlaubt mehrere Labels gleichzeitig pro Sample. Die Unterscheidung klingt simpel, erfordert aber unterschiedliche Modell-Architekturen, Loss-Funktionen und Metriken. Der Fehler, Multilabel wie Multiclass zu behandeln, führt zu unbrauchbaren Ergebnissen.

## Im Detail

**Multiclass-Klassifikation**

Ein Sample → genau eine Klasse (exklusiv).

Strategien:
- **One-vs-Rest (OvR)**: trainiere K binäre Klassifikatoren, jeder sagt "Klasse k vs. Rest"
- **One-vs-One (OvO)**: trainiere K×(K-1)/2 Klassifikatoren, jedes Klassen-Paar
- **Softmax direkt**: für Neural Networks, gibt Wahrscheinlichkeitsverteilung über K Klassen aus

```python
from sklearn.linear_model import LogisticRegression
# scikit-learn handhabt Multiclass automatisch
lr = LogisticRegression(multi_class='ovr')  # oder 'multinomial'
```

Loss für Neural Networks: Categorical Cross-Entropy.

**Multilabel-Klassifikation**

Ein Sample → mehrere Labels gleichzeitig möglich.

```python
from sklearn.multioutput import MultiOutputClassifier
from sklearn.ensemble import RandomForestClassifier

# Y ist eine Matrix: (n_samples, n_labels) mit 0/1
mlc = MultiOutputClassifier(RandomForestClassifier())
mlc.fit(X_train, Y_train)  # Y_train shape: (n_samples, n_labels)
```

Loss: Binary Cross-Entropy auf jedes Label unabhängig.

**Metriken bei Multilabel:**
- `hamming_loss`: Anteil falsch gesetzter Bits
- `jaccard_score`: Ähnlichkeit der Label-Sets
- `classification_report` mit `average='samples'` oder `'macro'` oder `'micro'`

```python
from sklearn.metrics import hamming_loss, classification_report
print(f"Hamming Loss: {hamming_loss(Y_test, Y_pred):.3f}")
print(classification_report(Y_test, Y_pred, target_names=label_names))
```

**Häufige Verwechslungs-Fälle:**
- Textkategorisierung: oft Multilabel (ein Artikel kann "Tech" und "Startup" sein)
- Bildklassifikation: oft Multilabel (Bild kann "Hund" und "Strand" zeigen)
- Sentiment: meist Multiclass (positiv/neutral/negativ) oder binär

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Multiclass and Multilabel](https://scikit-learn.org/stable/modules/multiclass.html) | Offizielle Übersicht |
| 📖 Tutorial | [Towards Data Science — Multilabel Classification](https://towardsdatascience.com/multi-label-classification) | Praktische Implementierung |

## Teste dein Verständnis

- [ ] Nenne je zwei Beispiele für Multiclass- und Multilabel-Probleme.
- [ ] Was ist der Unterschied in der Output-Shape bei Multiclass vs. Multilabel?
- [ ] Was ist Hamming Loss?
- [ ] Wie erkennst du, ob ein Problem Multilabel ist?
