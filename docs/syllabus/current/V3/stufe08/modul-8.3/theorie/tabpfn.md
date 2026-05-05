---
title: "TabPFN — Foundation Model für Tabellendaten"
module: "8.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# TabPFN — Foundation Model für Tabellendaten

## Kernidee

TabPFN (2022/2024) ist ein einziges pre-trained Transformer-Modell, das auf kleinen Tabellen-Datensätzen ohne weiteres Training funktioniert — es macht Bayesian Inference in einem Forward Pass. Für kleine Datensätze (<10.000 Samples, <100 Features) ist es erstaunlich kompetitiv mit XGBoost. Es markiert einen Trend: Foundation Models nicht nur für Text, sondern auch für strukturierte Daten.

## Im Detail

**Das Paradigma-Wechsel:**

Klassisches ML: Modell trainieren auf Datensatz X → deployen.
TabPFN: pre-trained Modell lädt Trainings-Daten als Kontext → macht direkt Predictions.

Das ist In-Context-Learning aus dem LLM-Bereich, angewendet auf Tabellendaten.

**Wie es funktioniert:**

TabPFN wurde auf synthetischen Datensätzen trainiert, die zufällig aus Bayesian Networks generiert wurden. Es lernt dabei eine Prior-Verteilung über mögliche Datensatz-Strukturen. Bei Inferenz:
1. Trainings-Daten werden als Token-Sequenz dem Modell übergeben.
2. Ein einziger Forward Pass liefert die Vorhersage für Testdaten.
3. Keine Gradient-Updates, kein Hyperparameter-Tuning.

**Einschränkungen:**
- Maximale Trainings-Set-Größe: ~10.000 Samples.
- Maximale Feature-Anzahl: ~100.
- Nur Klassifikation in der Original-Version (TabPFN v2 unterstützt auch Regression).
- Inference kann bei großen Testsets langsam sein.

**Implementierung:**
```python
# pip install tabpfn
from tabpfn import TabPFNClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Kein Hyperparameter-Tuning nötig
clf = TabPFNClassifier(device='cpu')
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
```

**Wann TabPFN sinnvoll?**
- Kleiner Datensatz (<1.000 Samples): TabPFN oft besser als XGBoost.
- Schnelles Prototyping: kein Tuning nötig.
- Baseline-Experiment: was erreiche ich ohne Training?

**Wann nicht?**
- Datensatz > 10.000 Samples.
- Production mit hohem Inference-Throughput.
- Viele Features (>100).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [TabPFN: A Transformer That Solves Small Tabular Classification Problems](https://arxiv.org/abs/2207.01848) | Originalpaper |
| 🔗 GitHub | [TabPFN GitHub](https://github.com/automl/TabPFN) | Code und Benchmarks |
| 📖 Blog | [TabPFN v2 Announcement](https://www.automl.org/tabpfn-v2-a-foundation-model-for-tabular-data) | Neueste Version |

## Teste dein Verständnis

- [ ] Was ist der fundamentale Unterschied zwischen TabPFN und XGBoost in der Trainings-Philosophie?
- [ ] Warum funktioniert TabPFN nur auf kleinen Datensätzen?
- [ ] In welchem Szenario würdest du TabPFN als erste Baseline wählen?
- [ ] Was verbindet TabPFN konzeptionell mit In-Context-Learning in LLMs?
