---
title: "K-Means"
module: "8.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# K-Means

## Kernidee

K-Means ist der Klassiker unter den Clustering-Algorithmen: K Cluster-Zentren werden iterativ verschoben, bis Punkte stabilen Clustern zugeordnet sind. Er ist schnell, einfach zu verstehen und funktioniert gut bei konvexen, ähnlich großen Clustern. Seine Schwächen sind bekannt — K muss vorgegeben werden, nicht-konvexe Cluster werden schlecht erfasst, Ausreißer stören die Zentren.

## Im Detail

**Der Algorithmus Schritt für Schritt:**

1. Wähle K zufällige Punkte als initiale Cluster-Zentren (Centroids)
2. Weise jeden Datenpunkt dem nächstgelegenen Centroid zu (nach Euklidischer Distanz)
3. Berechne neue Centroids als Mittelpunkt aller zugeordneten Punkte
4. Wiederhole 2–3, bis Zuordnungen sich nicht mehr ändern (Konvergenz)

**Die Kostenfunktion (Within-Cluster Sum of Squares, WCSS):**
```
WCSS = Σ Σ ||xᵢ - μₖ||²
```
K-Means minimiert diese Summe — je kleiner, desto kompakter die Cluster.

**Implementierung mit scikit-learn:**
```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Skalierung zuerst!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-Means mit k=4
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
labels = kmeans.fit_predict(X_scaled)
```

**Wichtige Parameter:**
- `n_clusters`: K — muss vorab gewählt werden
- `n_init`: wie oft mit verschiedenen Startpunkten neu starten (empfohlen: ≥10)
- `random_state`: für Reproduzierbarkeit
- `init='k-means++'`: intelligente Initialisierung (Standard, besser als zufällig)

**Bekannte Schwächen:**
- **K muss vorgegeben werden** → Elbow Method oder Silhouette-Score verwenden
- **Nur konvexe Cluster**: Mond- oder Ring-Formen werden nicht erkannt
- **Sensibel gegen Ausreißer**: ein extremer Punkt zieht den Centroid zu sich
- **Nicht-deterministisch**: verschiedene Starts können verschiedene Ergebnisse liefern (deshalb `n_init`)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — K-Means](https://scikit-learn.org/stable/modules/clustering.html#k-means) | Offizielle Dokumentation |
| 🎥 Video | [StatQuest — K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) | Visuelle Erklärung, empfohlen |
| 📖 Tutorial | [Towards Data Science — K-Means](https://towardsdatascience.com/k-means-clustering-algorithm) | Mit Python-Beispielen |

## Teste dein Verständnis

- [ ] Erkläre die vier Schritte von K-Means ohne nachzuschauen.
- [ ] Warum ist K-Means bei Ring-förmigen Clustern schlecht?
- [ ] Was ist `n_init` und warum setzt du es auf ≥10?
- [ ] Warum muss Skalierung VOR K-Means kommen?
