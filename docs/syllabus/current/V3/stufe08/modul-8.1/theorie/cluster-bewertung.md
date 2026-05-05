---
title: "Cluster-Bewertung ohne Ground-Truth"
module: "8.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Cluster-Bewertung ohne Ground-Truth

## Kernidee

Beim echten Clustering gibt es keine "richtigen Antworten" — der Sinn ist ja, Struktur ohne Vorgaben zu finden. Drei interne Metriken helfen trotzdem bei der Bewertung: Silhouette misst Kompaktheit und Trennung, Davies-Bouldin bewertet Cluster-Ähnlichkeit (kleiner ist besser), und Calinski-Harabasz vergleicht Inter- und Intra-Cluster-Varianz (größer ist besser). Mit Ground-Truth (selten) kommen Adjusted Rand Index und Mutual Information hinzu.

## Im Detail

**Interne Metriken (ohne Ground-Truth)**

**Silhouette Score**
Für jeden Punkt berechnet: wie ähnlich ist er seinem Cluster (a) vs. dem nächsten fremden Cluster (b)?
```
s = (b - a) / max(a, b)
```
Bereich: -1 bis +1. Höher ist besser. Negativer Wert: Punkt ist im falschen Cluster.

```python
from sklearn.metrics import silhouette_score
score = silhouette_score(X_scaled, labels)
```

**Davies-Bouldin Index**
Verhältnis aus Intra-Cluster-Streuung und Inter-Cluster-Abstand. Kleiner ist besser (0 ist optimal).

```python
from sklearn.metrics import davies_bouldin_score
score = davies_bouldin_score(X_scaled, labels)
```

**Calinski-Harabasz Score (Variance Ratio Criterion)**
Verhältnis aus Between-Cluster-Varianz zu Within-Cluster-Varianz. Größer ist besser.

```python
from sklearn.metrics import calinski_harabasz_score
score = calinski_harabasz_score(X_scaled, labels)
```

**Externe Metriken (mit Ground-Truth, selten in der Praxis)**

Wenn du Ground-Truth-Labels hast (z.B. in einem Lernkontext), kannst du zusätzlich messen:

**Adjusted Rand Index (ARI)**
Misst Übereinstimmung zweier Label-Zuordnungen, korrigiert für Zufalls-Agreement. Bereich: -1 bis +1. 1 = perfekt, 0 = zufällig.

```python
from sklearn.metrics import adjusted_rand_score
ari = adjusted_rand_score(true_labels, predicted_labels)
```

**Adjusted Mutual Information (AMI)**
Informationstheoretisches Maß für Übereinstimmung, ebenfalls zufalls-korrigiert.

**Praktische Empfehlung:**

Kombiniere mehrere Metriken — keine ist allein aussagekräftig. Und: inhaltliche Interpretation der Cluster ("macht Cluster 3 fachlich Sinn?") ist oft wichtiger als jede Zahl.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Clustering Evaluation](https://scikit-learn.org/stable/modules/clustering.html#clustering-performance-evaluation) | Alle Metriken mit Formeln |
| 📖 Tutorial | [Towards Data Science — Cluster Evaluation](https://towardsdatascience.com/cluster-evaluation) | Praktischer Vergleich |

## Teste dein Verständnis

- [ ] Silhouette Score = -0.3 für einen Punkt — was bedeutet das?
- [ ] Davies-Bouldin: ist 0.4 oder 1.8 besser?
- [ ] Wann würdest du ARI statt Silhouette verwenden?
- [ ] Warum reicht eine einzelne interne Metrik nicht für die Bewertung?
