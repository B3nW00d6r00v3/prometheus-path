---
title: "Decision Trees"
module: "8.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Decision Trees

## Kernidee

Ein Decision Tree stellt an jedem Knoten eine Frage über ein Feature ("Alter > 30?", "Einkommen > 50.000?") und verzweigt die Daten entsprechend. Das Ergebnis ist eine baumartige Struktur, die sehr gut erklärbar ist und auch nicht-lineare Beziehungen lernen kann. Die bekannte Schwäche: einzelne Trees sind instabil und neigen zu starkem Overfitting — die Lösung dafür sind Ensembles (Random Forests, Boosting).

## Im Detail

**Wie ein Tree wächst**

An jedem Knoten wählt der Algorithmus das Feature und den Schwellenwert, der die Daten am besten trennt. "Am besten" bedeutet:
- **Gini-Impurity**: wie "unrein" ist ein Knoten? (Standard bei scikit-learn)
- **Information Gain / Entropy**: wie viel Information gewinnen wir durch die Teilung?

Der Split wird gewählt, der Gini oder Information Gain maximiert.

**Implementierung:**
```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

dt = DecisionTreeClassifier(
    max_depth=4,         # Tiefe begrenzen gegen Overfitting
    min_samples_split=20,
    random_state=42
)
dt.fit(X_train, y_train)

# Visualisierung
plt.figure(figsize=(20, 10))
plot_tree(dt, feature_names=feature_names, class_names=class_names,
          filled=True, rounded=True)
plt.show()
```

**Feature Importance:**
```python
importances = dt.feature_importances_
# Zeigt, welche Features am häufigsten für Splits genutzt wurden
```

**Overfitting ist das Haupt-Problem**

Ein unregulierter Tree wächst bis er jeden Trainingspunkt perfekt klassifiziert (100% Training-Accuracy, schlechte Test-Accuracy). Regularisierung:
- `max_depth`: begrenzt Tiefe
- `min_samples_split`: Mindest-Samples für einen Split
- `min_samples_leaf`: Mindest-Samples in einem Blatt
- `max_features`: Anzahl Features pro Split (zufällig — wie bei Random Forest)

**Stärken:**
- Sehr interpretierbar (kann visualisiert werden)
- Kein Scaling nötig
- Behandelt numerische und kategorische Features
- Nicht-lineare Entscheidungsgrenzen möglich

**Schwächen:**
- Instabil (kleine Datenänderung → anderer Tree)
- Overfitting wenn nicht regularisiert
- Nicht konkurrenzfähig mit Ensembles für Performance

*Decision Trees sind Bausteine für XGBoost und LightGBM — deshalb müssen sie hier vollständig verstanden werden.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Decision Trees](https://www.youtube.com/watch?v=7VeUPuFGJHk) | Pflichtanschau |
| 📖 Docs | [scikit-learn — Decision Trees](https://scikit-learn.org/stable/modules/tree.html) | Vollständige Dokumentation |
| 📖 Tutorial | [Towards Data Science — Decision Tree Visualization](https://towardsdatascience.com/visualizing-decision-trees) | Visualisierungs-Techniken |

## Teste dein Verständnis

- [ ] Erkläre Gini-Impurity in einem Satz.
- [ ] Warum ist ein tiefer Tree auf Trainingsdaten oft perfekt, auf Testdaten schlecht?
- [ ] Welche zwei Parameter regularisieren einen Decision Tree am stärksten?
- [ ] Warum braucht ein Decision Tree kein Feature-Scaling?
