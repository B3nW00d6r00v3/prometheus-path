---
title: "Gaussian Mixture Models"
module: "8.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Gaussian Mixture Models (GMM)

## Kernidee

GMM ist probabilistisches Clustering: statt jedem Punkt ein hartes Cluster-Label zuzuweisen, berechnet es für jeden Punkt die Wahrscheinlichkeit, zu jedem Cluster zu gehören. Das Modell nimmt an, die Daten stammen aus einer Mischung von K Gauss-Verteilungen — und schätzt Parameter und Zugehörigkeiten gemeinsam per EM-Algorithmus.

## Im Detail

**Grundprinzip**

GMM modelliert die Daten als Überlagerung von K Gauß-Verteilungen, jede mit eigenem Mittelwert (μ) und Kovarianz-Matrix (Σ). Der EM-Algorithmus (Expectation-Maximization) schätzt iterativ:

- **E-Step (Expectation)**: berechne für jeden Punkt die Wahrscheinlichkeit, zu jeder Komponente zu gehören
- **M-Step (Maximization)**: aktualisiere μ, Σ und Mischungsgewichte basierend auf diesen Wahrscheinlichkeiten

**Implementierung:**
```python
from sklearn.mixture import GaussianMixture

gmm = GaussianMixture(n_components=4, random_state=42)
gmm.fit(X_scaled)

# Harte Labels (argmax der Wahrscheinlichkeiten)
labels = gmm.predict(X_scaled)

# Weiche Wahrscheinlichkeiten
probs = gmm.predict_proba(X_scaled)  # Shape: (n_samples, n_components)
```

**Kovarianz-Typen** (`covariance_type`):
- `'full'`: jede Komponente hat eigene vollständige Kovarianz-Matrix (flexibel, viele Parameter)
- `'tied'`: alle Komponenten teilen eine Matrix (weniger Parameter)
- `'diag'`: nur Diagonal-Elemente (Features unkorreliert)
- `'spherical'`: eine Varianz pro Komponente (wie K-Means)

**K-Means vs. GMM:**
- K-Means: harte Zuordnung, nur Euklidische Distanz, kugelförmige Cluster
- GMM: weiche Zuordnung, modelliert Ellipsen, Überlappungen möglich

**Wann GMM statt K-Means?**
- Wenn Cluster überlappen oder graduelle Übergänge haben
- Wenn weiche Zugehörigkeiten (Wahrscheinlichkeiten) gebraucht werden
- Wenn Cluster nicht kugelförmig sind (mit `full` oder `tied`)
- Wenn Modell-Selektion via BIC/AIC gewünscht (GMM bietet das, K-Means nicht)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — GMM](https://scikit-learn.org/stable/modules/mixture.html) | Mit Visualisierungen |
| 📖 Wikipedia | [Gaussian Mixture Model](https://en.wikipedia.org/wiki/Mixture_model) | Mathematischer Hintergrund |
| 🎥 Video | [StatQuest — Gaussian Mixture Models](https://www.youtube.com/watch?v=REypj2sy_5U) | EM-Algorithmus visuell |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen `predict` und `predict_proba` bei GMM?
- [ ] Warum kann GMM elliptische Cluster modellieren, K-Means nicht?
- [ ] Was ist der EM-Algorithmus in einem Satz?
- [ ] Wann würdest du `covariance_type='full'` wählen?
