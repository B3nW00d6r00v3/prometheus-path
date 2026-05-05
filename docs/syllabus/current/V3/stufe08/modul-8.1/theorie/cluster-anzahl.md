---
title: "Wahl der Cluster-Anzahl"
module: "8.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Wahl der Cluster-Anzahl

## Kernidee

K-Means braucht K als Eingabe — aber die "richtige" Cluster-Anzahl ist selten offensichtlich. Drei Methoden helfen: die Elbow Method sucht den Knick in der WCSS-Kurve, der Silhouette-Score bewertet Cluster-Qualität zwischen -1 und 1, und die Gap Statistic vergleicht mit einem Zufalls-Baseline. Keine Methode ist perfekt — Domänenwissen und Visualisierung müssen mitsprechen.

## Im Detail

**Elbow Method**

Plotte WCSS (Within-Cluster Sum of Squares) für verschiedene K-Werte (z.B. K=2 bis K=15). Suche den "Knick" (Elbow) — danach bringt mehr K immer weniger Verbesserung.

```python
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

wcss = []
for k in range(2, 16):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X_scaled)
    wcss.append(km.inertia_)

plt.plot(range(2, 16), wcss, 'bo-')
plt.xlabel('Anzahl Cluster K')
plt.ylabel('WCSS')
plt.title('Elbow Method')
plt.show()
```

Problem: der "Knick" ist oft unscharf — subjektiv interpretierbar.

**Silhouette Score**

Bewertet, wie gut jeder Punkt zu seinem Cluster passt, relativ zu den anderen Clustern. Bereich: -1 (falsch klassifiziert) bis +1 (perfekt klassifiziert). Nähe zu 0 bedeutet Überlappung mit anderen Clustern.

```python
from sklearn.metrics import silhouette_score

silhouette_scores = []
for k in range(2, 16):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X_scaled)
    score = silhouette_score(X_scaled, labels)
    silhouette_scores.append(score)

# Wähle K mit höchstem Silhouette-Score
best_k = range(2, 16)[silhouette_scores.index(max(silhouette_scores))]
```

Stärker als Elbow, weil quantitativ und ohne subjektive Interpretation.

**Gap Statistic**

Vergleicht WCSS des echten Datensatzes mit WCSS eines Zufalls-Datensatzes (ohne echte Cluster-Struktur). K ist optimal, wenn der Gap am größten ist. Rechenintensiver, aber theoretisch fundierter.

**Praktische Empfehlung:**
1. Starte mit Elbow Method für erste Orientierung
2. Verifiziere mit Silhouette Score
3. Visualisiere 2–3 Kandidaten mit UMAP/t-SNE
4. Lass Domänenwissen entscheiden ("macht K=4 inhaltlich Sinn?")

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Silhouette Analysis](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html) | Mit Visualisierungen |
| 📖 Paper | [Tibshirani — Gap Statistic](https://web.stanford.edu/~hastie/Papers/gap.pdf) | Originalpaper |
| 🎥 Video | [StatQuest — Silhouette Score](https://www.youtube.com/results?search_query=statquest+silhouette) | Intuitive Erklärung |

## Teste dein Verständnis

- [ ] Was ist der Nachteil der Elbow Method gegenüber dem Silhouette-Score?
- [ ] Silhouette Score = 0.8 vs. 0.2 — welche Cluster-Lösung ist besser?
- [ ] Warum sollte Domänenwissen das finale K mitbestimmen?
- [ ] Kannst du beide Methoden in Python aufrufen, ohne nachzusehen?
