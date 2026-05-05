---
title: "Skalierung vor Clustering"
module: "8.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Skalierung vor Clustering

## Kernidee

Wenn eine Variable Werte 0–1 hat und eine andere 0–1.000.000, dominiert die zweite Variable jede Distanz-Berechnung — völlig unabhängig davon, ob sie tatsächlich wichtiger ist. Skalierung vor distanzbasiertem Clustering ist deshalb keine Optimierung, sondern eine Pflicht. Die drei wichtigsten Verfahren sind StandardScaler, MinMaxScaler und RobustScaler.

## Im Detail

**Warum Skalierung zwingend ist**

Clustering-Algorithmen wie K-Means berechnen Abstände zwischen Datenpunkten. Ein Feature mit großem Zahlenbereich dominiert diese Abstände künstlich. Beispiel: Alter (20–80) und Jahresgehalt (20.000–200.000) — ohne Skalierung entscheidet fast nur das Gehalt über Cluster-Zugehörigkeit.

**StandardScaler (Z-Score-Normalisierung)**
Transformiert jeden Feature auf Mittelwert 0 und Standardabweichung 1.
```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```
Gut wenn: Features normalverteilt oder nahezu normalverteilt sind. Standard-Wahl für die meisten Situationen.

**MinMaxScaler**
Skaliert auf den Bereich [0, 1] (oder einen definierten Bereich).
```python
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
```
Gut wenn: du einen festen Wertebereich brauchst (z.B. für Visualisierungen). Empfindlich gegenüber Ausreißern — ein extremer Wert verzerrt die Skala für alle anderen.

**RobustScaler**
Nutzt Median und IQR (Interquartile Range) statt Mittelwert und Standardabweichung.
```python
from sklearn.preprocessing import RobustScaler
scaler = RobustScaler()
X_scaled = scaler.fit_transform(X)
```
Gut wenn: Ausreißer im Datensatz vorhanden sind. Robust, weil Ausreißer den Median kaum beeinflussen.

**Wichtig:** Scaler nur auf Trainingsdaten fitten (`fit_transform`), auf Testdaten nur transformieren (`transform`). Sonst "leckt" Information aus dem Test-Set in das Training.

**Wann ist Skalierung nicht nötig?**
- Tree-basierte Algorithmen (Decision Trees, Random Forest, XGBoost) sind invariant gegenüber monotonen Transformationen — Skalierung ändert ihr Ergebnis nicht.
- Skalierung ist primär für distanzbasierte Algorithmen (K-Means, KNN, SVM, PCA) wichtig.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Preprocessing](https://scikit-learn.org/stable/modules/preprocessing.html) | Alle Scaler erklärt |
| 📖 Tutorial | [Towards Data Science — Feature Scaling](https://towardsdatascience.com/all-about-feature-scaling) | Vergleich mit Visualisierungen |

## Teste dein Verständnis

- [ ] Warum schadet fehlende Skalierung bei K-Means, aber nicht bei Random Forest?
- [ ] Wann wählst du RobustScaler statt StandardScaler?
- [ ] Warum darfst du den Scaler nur auf Trainingsdaten fitten?
- [ ] Was passiert bei MinMaxScaler, wenn ein Ausreißer mit Wert 1.000.000 in einer Spalte auftaucht?
